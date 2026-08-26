/**
 * Visual QA capture.
 * "Do NOT assume correct CSS means correct design." — so we actually look.
 *
 * Run the preview server first:  npm run preview
 * Then:                          node scripts/qa-shots.mjs
 */
import { chromium } from 'playwright';
import fs from 'node:fs';

const URL = process.env.QA_URL ?? 'http://localhost:4321/';
const OUT = 'qa';
fs.mkdirSync(OUT, { recursive: true });

const VIEWPORTS = [
  { name: '1440', width: 1440, height: 900 },
  { name: '1280', width: 1280, height: 800 },
  { name: '1024', width: 1024, height: 768 },
  { name: '0768', width: 768, height: 1024 },
  { name: '0430', width: 430, height: 932 },
  { name: '0390', width: 390, height: 844 },
];

const browser = await chromium.launch();

for (const vp of VIEWPORTS) {
  const page = await browser.newPage({
    viewport: { width: vp.width, height: vp.height },
    deviceScaleFactor: 2,
    reducedMotion: 'reduce', // stable captures
  });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.waitForTimeout(400);

  // Above the fold.
  await page.screenshot({ path: `${OUT}/${vp.name}-a-fold.png` });

  // Whole page.
  await page.screenshot({ path: `${OUT}/${vp.name}-b-full.png`, fullPage: true });

  await page.close();
}

// Mega-menu open (desktop only).
{
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.hover('.mainnav__item:nth-child(2) .mainnav__link'); // Academics
  await page.waitForTimeout(500);
  await page.screenshot({ path: `${OUT}/1440-c-megamenu.png` });
  await page.close();
}

// Mobile drawer open.
{
  const page = await browser.newPage({
    viewport: { width: 390, height: 844 },
    deviceScaleFactor: 2,
  });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.click('[data-nav-toggle]');
  await page.waitForTimeout(600);
  await page.screenshot({ path: `${OUT}/0390-c-drawer.png` });
  // Expand a section.
  await page.click('[data-accordion]');
  await page.waitForTimeout(300);
  await page.screenshot({ path: `${OUT}/0390-d-drawer-open.png` });
  await page.close();
}

// Scrolled state — condensed masthead, hidden utility bar.
{
  const page = await browser.newPage({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 2,
  });
  await page.goto(URL, { waitUntil: 'networkidle' });
  await page.evaluate(() => window.scrollTo(0, 900));
  await page.waitForTimeout(700);
  await page.screenshot({ path: `${OUT}/1440-d-scrolled.png` });
  await page.close();
}

// Console errors + a few measured facts.
{
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
  const errors = [];
  page.on('console', (m) => m.type() === 'error' && errors.push(m.text()));
  page.on('pageerror', (e) => errors.push(String(e)));
  await page.goto(URL, { waitUntil: 'networkidle' });

  const facts = await page.evaluate(() => {
    const q = (s) => document.querySelector(s);
    const cs = (el, p) => (el ? getComputedStyle(el).getPropertyValue(p) : null);
    const box = (s) => {
      const el = q(s);
      if (!el) return null;
      const r = el.getBoundingClientRect();
      return { x: Math.round(r.x), y: Math.round(r.y), w: Math.round(r.width), h: Math.round(r.height) };
    };
    return {
      docScrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
      h1Size: cs(q('h1'), 'font-size'),
      h1Font: cs(q('h1'), 'font-family').split(',')[0],
      eyebrowFont: cs(q('.hero__eyebrow'), 'font-family').split(',')[0],
      heroBox: box('.hero'),
      copyBox: box('.hero__copy'),
      metaBox: box('.hero__meta'),
      containerBox: box('.proof .u-container'),
      quickContainerBox: box('.quick .u-container'),
      mastheadInnerBox: box('.masthead__inner'),
      navCount: document.querySelectorAll('.mainnav__link').length,
      radii: [...new Set([...document.querySelectorAll('section *')]
        .map((el) => getComputedStyle(el).borderRadius)
        .filter((r) => r && r !== '0px'))],
    };
  });

  console.log(JSON.stringify({ errors, facts }, null, 2));
  await page.close();
}

await browser.close();
console.log('\nshots written to ./qa');
