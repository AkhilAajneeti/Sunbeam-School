/**
 * PIXEL-SAMPLED CONTRAST CHECK
 *
 * The DOM-based audit resolves a text node's ground from `backgroundColor`.
 * That is blind to gradients, background images and watermarks, so any section
 * using one has to be measured from what actually rendered.
 *
 * Three traps, each of which produced a confident false result before it was
 * fixed:
 *
 *  1. A probe landing on a GLYPH reads the ground as the text colour and the
 *     ratio collapses to ~1. Probes are therefore rejected inside the box of any
 *     element that renders text DIRECTLY — including mixed-content elements such
 *     as a link wrapping a label and an icon, which a leaf-only filter misses.
 *  2. "Renders text directly" must mean a non-empty child TEXT NODE, not
 *     `textContent`. Using textContent makes every ancestor an obstacle — the
 *     section wrapper included — and every probe gets rejected.
 *  3. Elements carrying their OWN background (a pill, a highlight plate) must
 *     not be measured against the section ground at all; their ground is the
 *     chip. Those are skipped — the DOM audit resolves them correctly.
 *
 * ⚠ KNOWN LIMITATION — SMALL, TEXT-DENSE PLATES. The reported ground is the MODAL
 * probe colour, which is the right call for a gradient but wrong when an element's
 * ground box is mostly covered by its own type: on a narrow plate carrying five
 * wrapped lines, more probes land on glyphs than on the plate, the modal bucket
 * becomes the text colour, and the ratio collapses to ~1.0 on something perfectly
 * legible. Measured example: the collaborative-learning plate on Teaching &
 * Learning reported 1.06 at 390 and is really 4.72:1 — its ground is the flat
 * token #C93C0A, verified by hiding the text and sampling the plate directly.
 * When this checker reports ~1.0 on white-on-brand type, sample the plate before
 * believing it.
 *
 * ⚠ AND IT CANNOT MEASURE TEXT SITTING ON A PHOTOGRAPH. Trap 4 below excludes
 * media boxes as probe targets, which is right when a photograph sits BESIDE the
 * text and wrong when the text sits ON it: every legitimate probe is rejected, the
 * ground resolves to whatever opaque ancestor is behind the image — a white card —
 * and the ratio collapses to 1.0. The figure-over-image panels on Teaching &
 * Learning report exactly that and really measure 7.2–16.8:1. For those, sample
 * the lightest pixel under the type's own box directly; that is also how the 2.98
 * failure at 768 in that section was found, which this checker never saw.
 *
 * ⚠ IT USED TO SAMPLE MID-ANIMATION, which is fixed below — but read the next
 * paragraph before trusting the result, because fixing it made a false FAIL
 * CONSISTENT rather than making it go away.
 *
 * The old 500ms settle caught `data-split` headings while their words were still
 * rising: a word at partial opacity reads as background, which can mask a real
 * failure as easily as it can invent one. The settle now awaits the section's
 * finite Web Animations and then waits again for the GSAP tweens that
 * getAnimations() cannot see.
 *
 * ⚠ WHAT THAT EXPOSED — BIG DISPLAY HEADINGS ARE LIMITATION 1 ALL OVER AGAIN.
 * Once a large heading is reliably fully painted, its word boxes are so densely
 * filled with glyphs that more probes land on type than on ground, the modal
 * bucket becomes the text colour, and the ratio collapses to 1.00. The
 * communication heading on Parent Partnership reports exactly that at 1440 and
 * is really 17.5:1 — verified by hiding `.ccm__h`, screenshotting the section
 * with its gradient and clouds untouched, and reading every pixel in the
 * heading's box: modal ground 254,251,249, worst pixel anywhere in the box
 * 236,230,228 where a cloud passes behind it at 1200, which is still 14.6:1.
 *
 * So: THIS CHECKER CANNOT CLEAR A 40px+ DISPLAY HEADING. Sample its box directly,
 * with the type hidden, as above. What it IS reliable for is body copy, captions,
 * labels and eyebrows on gradient grounds, which is what it was written for and
 * where every real failure on this site has been found.
 *
 * ⚠ AND IT MISREADS TWO ITEMS SHARING A FLEX ROW. The probes step 12, 20, 32 and
 * 48px out from a target's box; where two spans sit in one `justify-content:
 * space-between` row — a label on the left, a value on the right — the 12px step
 * from the label lands on the VALUE and reports the value's colour as the
 * label's ground. The "Focus / 01/05" row on Academic Structure reports 1.26:1
 * that way; measured directly with the type hidden, the worst pixel under any
 * text in that section is 6.04:1 on the page's own ivory.
 *
 * SO: A RATIO NEAR 1.0 IS ALMOST NEVER A CONTRAST FAILURE. It is the probe
 * finding a graphic, a sibling or a glyph. Every real failure this tool has
 * caught on this site has come back between 2.9 and 4.5. When it reports ~1,
 * hide the text, screenshot, and read the pixels under the box directly before
 * changing anything.
 *
 * Usage: node scripts/contrast-sample.mjs <url> <sectionSelector> [w1,w2,...]
 */
import { chromium } from 'playwright';
import sharp from 'sharp';

const [url, sectionSel, widthsArg] = process.argv.slice(2);
const widths = (widthsArg ?? '1440,1024,768,390').split(',').map(Number);

const lin = (c) => { c /= 255; return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4); };
const L = ([r, g, b]) => 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);

const browser = await chromium.launch();
let anyFail = false;

for (const vw of widths) {
  const page = await browser.newPage({ viewport: { width: vw, height: 1000 } });
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}[data-reveal]{opacity:1!important;transform:none!important}' });

  // Hide overlays that would sit over the section and be sampled as its ground.
  // Done in JS by COMPUTED POSITION, not by tag name: a blunt `header{...}` rule
  // also matched PageHero, which renders a <header> — the checker hid the very
  // element it was about to screenshot and timed out on "element is not visible".
  // `visibility`, not `display`, so a sticky element keeps its place in normal
  // flow and the measured boxes still line up with the pixels.
  await page.evaluate((sel) => {
    const target = document.querySelector(sel);
    if (!target) return;
    document.querySelectorAll('body *').forEach((el) => {
      const pos = getComputedStyle(el).position;
      if ((pos !== 'fixed' && pos !== 'sticky') || el.contains(target) || target.contains(el)) return;
      el.style.visibility = 'hidden';
    });
  }, sectionSel);
  await page.evaluate(() => document.fonts.ready);
  // Centre it, so nothing pinned to the top or bottom of the viewport overlaps.
  await page.evaluate((s) => document.querySelector(s).scrollIntoView({ block: 'center' }), sectionSel);

  /* SETTLE BEFORE SAMPLING, or the checker measures a half-played entrance.
     The old 500ms was not enough for a `data-split` heading: its words rise on a
     stagger that is still running at 400ms and only lands at ~900. A word caught
     mid-reveal is background-on-background, the ratio comes back as exactly 1.00,
     and the section reports FAIL on type that measures 17:1 once it has arrived.
     It was INTERMITTENT, which is the worst version of that bug — three runs of
     the same unchanged page gave PASS, FAIL, FAIL.

     Two mechanisms, because there are two kinds of animation on these pages.
     Finite Web Animations are awaited properly; the infinite ones — drifting
     clouds, floating kites — are filtered out or this would hang for ever. GSAP
     tweens are not Web Animations and are invisible to getAnimations(), so the
     fixed wait behind it is what covers those. */
  await page.evaluate(async (s) => {
    const root = document.querySelector(s);
    const running = document.getAnimations().filter((a) => {
      const target = a.effect?.target;
      if (!target || !root.contains(target)) return false;
      return a.effect?.getComputedTiming?.().iterations !== Infinity;
    });
    await Promise.all(running.map((a) => a.finished.catch(() => {})));
  }, sectionSel);
  await page.waitForTimeout(1200);

  const shot = await page.locator(sectionSel).screenshot();
  const { data, info } = await sharp(shot).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const px = (x, y) => {
    const xi = Math.max(0, Math.min(info.width - 1, Math.round(x)));
    const yi = Math.max(0, Math.min(info.height - 1, Math.round(y)));
    const i = (yi * info.width + xi) * info.channels;
    return [data[i], data[i + 1], data[i + 2]];
  };

  const { targets, obstacles } = await page.evaluate((s) => {
    const sec = document.querySelector(s);
    const secR = sec.getBoundingClientRect();
    const rel = (r) => ({ x: r.left - secR.left, y: r.top - secR.top, w: r.width, h: r.height });

    /* ⚠ THE TEXT COLOUR IS PAINTED AND READ BACK, NOT PARSED FROM A STRING, and
       that is a bug fix rather than a flourish. `getComputedStyle().color` on a
       `color-mix()` returns "color(srgb 0.716 0.829 0.858)" — three floats in
       0–1. The regex downstream reads those AS 0–255, so a pale cyan eyebrow was
       measured as near-black and reported at 1.21:1 against a dark band it
       genuinely clears at 8.8:1. That false failure cost time three separate
       times before it was traced, and it would fire on every `color-mix()` on
       the site.

       Painting one pixel and reading it back is the only parse that cannot be
       fooled: the canvas hands back true 0–255 bytes whatever notation the
       colour was written in — hex, rgb(), color(srgb …), oklch(), a keyword. The
       alpha is preserved in the returned rgba() string, which the compositing
       step below still needs. */
    const _cv = document.createElement('canvas');
    const _ctx = _cv.getContext('2d', { willReadFrequently: true });
    const resolveColour = (css) => {
      _ctx.clearRect(0, 0, 1, 1);
      _ctx.fillStyle = css;
      _ctx.fillRect(0, 0, 1, 1);
      const d = _ctx.getImageData(0, 0, 1, 1).data;
      return `rgba(${d[0]}, ${d[1]}, ${d[2]}, ${(d[3] / 255).toFixed(4)})`;
    };

    const visible = (el) => {
      const cs = getComputedStyle(el);
      if (cs.visibility === 'hidden' || cs.display === 'none') return false;
      const r = el.getBoundingClientRect();
      return r.width > 2 && r.height > 2;
    };
    const rendersText = (el) =>
      [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim());
    const hasOwnBg = (el) => {
      const c = getComputedStyle(el).backgroundColor;
      const m = c.match(/rgba?\(([^)]+)\)/);
      if (!m) return false;
      const parts = m[1].split(',').map((v) => parseFloat(v));
      return parts.length < 4 || parts[3] > 0.05;
    };

    const all = [...sec.querySelectorAll('*')].filter(visible);
    // Two exclusions, both deliberate:
    //
    //  · Asset-placeholder scaffolding (.ph) is a build-time stand-in that ships
    //    only until the photograph arrives, and its label is not content whose
    //    contrast we are shipping.
    //
    //  · aria-hidden text is decoration, and WCAG 1.4.3 exempts it. It is also
    //    where this checker is structurally blind: an outlined numeral drawn with
    //    `-webkit-text-stroke` computes `color: transparent`, so compositing the
    //    declared colour over the ground returns a ratio of exactly 1.00 and the
    //    element fails forever no matter how legible it is. A checker that cries
    //    wolf on decoration stops being read at all, which is the real cost.
    //    Anything aria-hidden is redundant with content that IS measured — the
    //    step numerals duplicate an <ol>, the section indices duplicate a heading.
    const textEls = all.filter(
      (el) => rendersText(el) && !el.closest('.ph') && !el.closest('[aria-hidden="true"]')
    );

    // A PHOTOGRAPH is not the ground for text sitting beside it. Without this,
    // a probe stepping 48px left of a block-level line in the copy column lands
    // on the portrait next to it and reports a ground the text never sits on —
    // measured as a false 4.37 on .lead__role at 1024.
    const media = [...sec.querySelectorAll('img, picture, video, canvas')]
      .filter(visible)
      .map((el) => rel(el.getBoundingClientRect()));
    return {
      targets: textEls.filter((el) => !hasOwnBg(el)).map((el) => {
        const cs = getComputedStyle(el);
        // The nearest ancestor that actually paints a ground. Probes must stay
        // inside it: a caption near the right edge of a white card sits only
        // ~27px from the card edge on a phone, so probes were landing on the
        // SECTION behind it and the modal ground came out as the section's
        // colour, not the card's.
        let g = el.parentElement;
        while (g && g !== sec && !hasOwnBg(g)) g = g.parentElement;
        return {
          sel: (el.className.toString().split(' ')[0] || el.tagName).slice(0, 22),
          color: resolveColour(cs.color), size: parseFloat(cs.fontSize), weight: parseInt(cs.fontWeight),
          ground: rel((g || sec).getBoundingClientRect()),
          ...rel(el.getBoundingClientRect()),
        };
      }),
      obstacles: [...textEls.map((el) => rel(el.getBoundingClientRect())), ...media],
    };
  }, sectionSel);

  const scale = info.width / vw;
  const secW = info.width / scale, secH = info.height / scale;
  const blocked = (x, y) =>
    obstacles.some((b) => x >= b.x - 3 && x <= b.x + b.w + 3 && y >= b.y - 3 && y <= b.y + b.h + 3);

  const lines = [];
  for (const t of targets) {
    const cand = [];
    for (const d of [12, 20, 32, 48]) {
      cand.push([t.x - d, t.y + t.h / 2], [t.x + t.w + d, t.y + t.h / 2],
                [t.x + t.w / 2, t.y - d], [t.x + t.w / 2, t.y + t.h + d],
                [t.x + t.w * 0.2, t.y - d], [t.x + t.w * 0.8, t.y + t.h + d]);
    }
    const g = t.ground;
    const pts = cand.filter(([x, y]) =>
      x > 2 && y > 2 && x < secW - 2 && y < secH - 2 &&
      x >= g.x + 2 && x <= g.x + g.w - 2 && y >= g.y + 2 && y <= g.y + g.h - 2 &&
      !blocked(x, y));
    if (pts.length < 4) { lines.push(`${t.sel}:no-clear-sample`); continue; }

    // MODAL ground, not the worst probe. A single probe grazing a hairline, an
    // icon edge or an anti-aliased rule reads a colour that is not the ground at
    // all, and Math.min over the probes turns that into a confident false
    // failure — measured: one probe on a rule edge scored 1.01 against a ground
    // that is uniformly #1C0E08 everywhere around it.
    // Buckets are coarse enough to group a gradient's local neighbourhood, and
    // the worst probe WITHIN the modal bucket is still what gets reported, so a
    // genuinely darkening gradient is not smoothed away.
    const colours = pts.map(([x, y]) => px(x * scale, y * scale));
    const key = (c) => c.map((v) => v >> 5).join(',');
    const counts = new Map();
    for (const c of colours) counts.set(key(c), (counts.get(key(c)) ?? 0) + 1);
    const modal = [...counts.entries()].sort((a, b) => b[1] - a[1])[0][0];
    const ground = colours.filter((c) => key(c) === modal);

    const m = (t.color.match(/[0-9.]+/g) || []);
    const a = m[3] === undefined ? 1 : Number(m[3]);
    const worst = Math.min(...ground.map((bg) => {
      const fg = [0, 1, 2].map((i) => Number(m[i]) * a + bg[i] * (1 - a));
      return (Math.max(L(fg), L(bg)) + 0.05) / (Math.min(L(fg), L(bg)) + 0.05);
    }));
    const need = (t.size >= 24 || (t.size >= 18.66 && t.weight >= 700)) ? 3 : 4.5;
    if (worst < need) { anyFail = true; lines.push(`*** ${t.sel} ${worst.toFixed(2)} < ${need} ***`); }
    else lines.push(`${t.sel}:${worst.toFixed(1)}`);
  }
  console.log(String(vw).padEnd(6) + (lines.some((l) => l.startsWith('***')) ? 'FAIL  ' : 'PASS  ') + lines.join('  '));
  await page.close();
}

await browser.close();
process.exit(anyFail ? 1 : 0);
