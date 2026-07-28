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
  // `visibility: hidden`, not `display: none`: a sticky header still occupies its
  // place in normal flow, so removing it would shift every section and the
  // measured boxes would no longer match the pixels. Hiding it keeps the layout
  // identical while taking its pixels out of the capture — without this the
  // header sat over the top of any short section scrolled into view and probes
  // read the masthead's white and the crest's gold as "the ground".
  await page.addStyleTag({ content: '*,*::before,*::after{animation:none!important;transition:none!important}[data-reveal]{opacity:1!important;transform:none!important}header,[data-drawer],[data-utility]{visibility:hidden!important}' });
  await page.evaluate(() => document.fonts.ready);
  // Centre it, so nothing pinned to the top or bottom of the viewport overlaps.
  await page.evaluate((s) => document.querySelector(s).scrollIntoView({ block: 'center' }), sectionSel);
  await page.waitForTimeout(500);

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
    const textEls = all.filter(rendersText);
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
          color: cs.color, size: parseFloat(cs.fontSize), weight: parseInt(cs.fontWeight),
          ground: rel((g || sec).getBoundingClientRect()),
          ...rel(el.getBoundingClientRect()),
        };
      }),
      obstacles: textEls.map((el) => rel(el.getBoundingClientRect())),
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
