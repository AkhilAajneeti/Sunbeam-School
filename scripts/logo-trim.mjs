/**
 * LOGO TRIM — normalise the breathing room baked into the partner marks.
 *
 * WHY THIS EXISTS. The marks in the affiliations rail are all fitted into one
 * box with `object-fit: contain`, so how big a logo LOOKS is decided by how much
 * of its own file the mark actually occupies. The supplied files disagree wildly
 * on that: CBSE, NCC and Brainfeed fill their canvas edge to edge, while AFS
 * uses 30% of its 500x500, Hindustan Olympiad 31%, FICCI 43% and EducationWorld
 * 48%. Dropped into identical boxes, the first group looked twice the size of
 * the second and the row read as broken rather than as a set.
 *
 * WHAT IT DOES. Finds each mark's true bounding box — ignoring transparent
 * pixels AND a near-white ground, because the files arrived on both — crops to
 * it, then re-pads by a uniform MARGIN so every output uses the same share of
 * its canvas. Nothing is recoloured, rescaled or flood-filled; the pixels of the
 * mark itself come through byte-for-byte.
 *
 * ⚠ IT NEVER TOUCHES THE SUPPLIED FILES. Output goes to logos/trimmed/ and the
 * client's originals in logos/ stay exactly as delivered. Re-run it after adding
 * a logo; it is idempotent on its own output.
 *
 *     node scripts/logo-trim.mjs
 */
import { readdirSync, mkdirSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import sharp from 'sharp';

const SRC = 'src/assets/icons/logos';
const OUT = join(SRC, 'trimmed');

/** Padding added back on every side, as a share of the mark's longer edge. */
const MARGIN = 0.03;
/** Alpha at or below this counts as ground. */
const ALPHA_FLOOR = 24;
/** A pixel this pale on every channel counts as ground. */
const WHITE_FLOOR = 243;

/** The mark's true bounding box, ignoring transparent and near-white ground. */
async function markBox(file) {
  const { data, info } = await sharp(file).ensureAlpha().raw().toBuffer({ resolveWithObject: true });
  const { width: W, height: H, channels: C } = info;
  let x0 = W, y0 = H, x1 = -1, y1 = -1;

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      const i = (y * W + x) * C;
      if (data[i + 3] <= ALPHA_FLOOR) continue;
      if (data[i] > WHITE_FLOOR && data[i + 1] > WHITE_FLOOR && data[i + 2] > WHITE_FLOOR) continue;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
    }
  }
  // A file that is entirely ground has no mark to find — pass it through whole.
  if (x1 < 0) return { left: 0, top: 0, width: W, height: H };
  return { left: x0, top: y0, width: x1 - x0 + 1, height: y1 - y0 + 1 };
}

if (!existsSync(OUT)) mkdirSync(OUT, { recursive: true });

const files = readdirSync(SRC).filter((f) => f.toLowerCase().endsWith('.png'));
let done = 0;

for (const f of files) {
  const src = join(SRC, f);
  const box = await markBox(src);
  const pad = Math.round(Math.max(box.width, box.height) * MARGIN);

  await sharp(src)
    .ensureAlpha()
    .extract(box)
    .extend({
      top: pad, bottom: pad, left: pad, right: pad,
      background: { r: 0, g: 0, b: 0, alpha: 0 },
    })
    .png()
    .toFile(join(OUT, f));

  const meta = await sharp(src).metadata();
  const before = Math.round((box.width * box.height) / (meta.width * meta.height) * 100);
  console.log(
    `${f.padEnd(24)} ${String(meta.width) + 'x' + meta.height} -> ` +
    `${box.width + 2 * pad}x${box.height + 2 * pad}   mark filled ${String(before).padStart(3)}% of the file`,
  );
  done++;
}

console.log(`\n${done} logos written to ${OUT} — originals untouched.`);
