/**
 * Asset prep — Sunbeam School Ballia logo.
 *
 * The only logo available is a raster PNG from the live site (816x224) which
 * carries a grey rectangular frame baked into the artwork. Vector originals are
 * asset request B2 in docs/07-client-asset-requests.md.
 *
 * This script removes that frame and emits:
 *   sunbeam-lockup.png  — crest + wordmark, frame removed, tight-trimmed
 *   sunbeam-crest.png   — the circular emblem alone (motto ring: DUTY DEVOTION DISCIPLINE)
 *
 * Run: node scripts/logo-prep.mjs
 */
import sharp from 'sharp';
import path from 'node:path';

const SRC = 'public/brand/sunbeam-logo.png';
const OUT = 'public/brand';

const { data, info } = await sharp(SRC).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const { width, height, channels } = info;
const opaque = (x, y) => data[(y * width + x) * channels + 3] > 24;

// Profile opacity per row / column.
const rowHas = Array.from({ length: height }, (_, y) => {
  let n = 0;
  for (let x = 0; x < width; x++) if (opaque(x, y)) n++;
  return n;
});
const colHas = Array.from({ length: width }, (_, x) => {
  let n = 0;
  for (let y = 0; y < height; y++) if (opaque(x, y)) n++;
  return n;
});

// Content bounds = first/last row and column carrying any ink at all.
const firstRow = rowHas.findIndex((n) => n > 0);
const lastRow = height - 1 - [...rowHas].reverse().findIndex((n) => n > 0);
const firstCol = colHas.findIndex((n) => n > 0);
const lastCol = width - 1 - [...colHas].reverse().findIndex((n) => n > 0);
const contentH = lastRow - firstRow + 1;

/* The frame is a rectangle outline drawn just inside the artwork's edges.
   Walk inward from the first inked row/column and consume everything that is
   broadly continuous, stopping at the transparent gap between the frame and the
   artwork proper.

   The threshold has to be LOW (0.4, not 0.85): the frame's outermost row is
   anti-aliased and only ~75% dense, so a high threshold stops the walk on
   contact and leaves the solid frame band in the crop. A travel cap keeps the
   walk from eating into the crest, whose centre columns are also fairly dense. */
const contentW = lastCol - firstCol + 1;

/* Measured profile of this artwork:
     rows  19:3  20:775 … 25:789  26:24        <- 3 stray px, then the frame
     cols   8:164 … 14:182  15:21              <- frame, then the crest edge
   So an inward walk must not stop on the sparse first line, and the search band
   must stay near the edge — the crest's centre columns are dense too, and a
   wide band would mistake them for the frame.                                */
const EDGE = 26;         // px band to look for a frame line in
const DENSE = 0.5;       // a frame line spans at least half the artwork

const lastDense = (arr, from, to, span) => {
  let found = -1;
  for (let i = from; i <= to; i++) if (arr[i] > span * DENSE) found = i;
  return found;
};
const firstDense = (arr, from, to, span) => {
  for (let i = from; i <= to; i++) if (arr[i] > span * DENSE) return i;
  return -1;
};

const topLine = lastDense(rowHas, firstRow, Math.min(firstRow + EDGE, lastRow), contentW);
const bottomLine = firstDense(rowHas, Math.max(lastRow - EDGE, firstRow), lastRow, contentW);
const leftLine = lastDense(colHas, firstCol, Math.min(firstCol + EDGE, lastCol), contentH);
const rightLine = firstDense(colHas, Math.max(lastCol - EDGE, firstCol), lastCol, contentH);

const top = topLine >= 0 ? topLine + 1 : firstRow;
const bottom = bottomLine >= 0 ? bottomLine - 1 : lastRow;
const left = leftLine >= 0 ? leftLine + 1 : firstCol;
const right = rightLine >= 0 ? rightLine - 1 : lastCol;

const PAD = 1; // clear the frame's anti-aliased shoulder
console.log(`frame lines  : top=${topLine} bottom=${bottomLine} left=${leftLine} right=${rightLine}`);

const box = {
  left: left + PAD,
  top: top + PAD,
  width: right - left - PAD * 2 + 1,
  height: bottom - top - PAD * 2 + 1,
};

console.log(`source     : ${width}x${height}`);
console.log(`content box: ${firstCol},${firstRow} -> ${lastCol},${lastRow}`);
console.log(`inner box  : ${JSON.stringify(box)}`);

// Pass 1 — crop inside the frame.
const inner = await sharp(SRC).extract(box).png().toBuffer();

// Pass 2 — tight trim (separate pipeline; sharp reorders extract/trim otherwise).
await sharp(inner).trim({ threshold: 2 }).toFile(path.join(OUT, 'sunbeam-lockup.png'));
const lock = await sharp(path.join(OUT, 'sunbeam-lockup.png')).metadata();
console.log(`lockup     : ${lock.width}x${lock.height}`);

// Crest only — the emblem occupies the left portion of the inner box.
// Find the gap between emblem and wordmark: the first sustained empty column run.
const innerRaw = await sharp(inner).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const iw = innerRaw.info.width, ih = innerRaw.info.height, ic = innerRaw.info.channels;
const innerCol = Array.from({ length: iw }, (_, x) => {
  let n = 0;
  for (let y = 0; y < ih; y++) if (innerRaw.data[(y * iw + x) * ic + 3] > 24) n++;
  return n;
});
let gapStart = -1, run = 0;
for (let x = Math.floor(iw * 0.12); x < iw * 0.5; x++) {
  if (innerCol[x] === 0) {
    if (run === 0) gapStart = x;
    if (++run >= 12) break;
  } else {
    run = 0;
    gapStart = -1;
  }
}
const crestW = gapStart > 0 ? gapStart : Math.round(iw * 0.245);
console.log(`crest cut  : x=${crestW} of ${iw}`);

const crestBuf = await sharp(inner).extract({ left: 0, top: 0, width: crestW, height: ih }).png().toBuffer();
await sharp(crestBuf).trim({ threshold: 2 }).toFile(path.join(OUT, 'sunbeam-crest.png'));
const crest = await sharp(path.join(OUT, 'sunbeam-crest.png')).metadata();
console.log(`crest      : ${crest.width}x${crest.height}`);

/* --------------------------------------------------------------------------
   Masthead derivatives.

   At a 48px masthead the baked-in "Estd.2013" line renders about 5px tall and
   turns to mud. Splitting crest from wordmark lets each be scaled on its own
   optical merits rather than locked to the artwork's original proportions.
   -------------------------------------------------------------------------- */

// Emblem alone — drop "Estd.2013" by cutting at the gap below the circle.
const cRaw = await sharp(crestBuf).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
const cw = cRaw.info.width, ch = cRaw.info.height, cc = cRaw.info.channels;
const crestRow = Array.from({ length: ch }, (_, y) => {
  let n = 0;
  for (let x = 0; x < cw; x++) if (cRaw.data[(y * cw + x) * cc + 3] > 24) n++;
  return n;
});
let circleBottom = ch;
let gap = 0;
for (let y = Math.floor(ch * 0.55); y < ch; y++) {
  if (crestRow[y] === 0) {
    if (++gap >= 3) { circleBottom = y - gap + 1; break; }
  } else {
    gap = 0;
  }
}
console.log(`emblem cut : y=${circleBottom} of ${ch}`);

const emblemBuf = await sharp(crestBuf)
  .extract({ left: 0, top: 0, width: cw, height: circleBottom })
  .png()
  .toBuffer();
await sharp(emblemBuf).trim({ threshold: 2 }).toFile(path.join(OUT, 'sunbeam-emblem.png'));
const emblem = await sharp(path.join(OUT, 'sunbeam-emblem.png')).metadata();
console.log(`emblem     : ${emblem.width}x${emblem.height}`);

// Wordmark alone — "Sunbeam School / Ballia" in the school's blackletter.
const wordBuf = await sharp(inner)
  .extract({ left: crestW, top: 0, width: iw - crestW, height: ih })
  .png()
  .toBuffer();
await sharp(wordBuf).trim({ threshold: 2 }).toFile(path.join(OUT, 'sunbeam-wordmark.png'));
const word = await sharp(path.join(OUT, 'sunbeam-wordmark.png')).metadata();
console.log(`wordmark   : ${word.width}x${word.height}`);
