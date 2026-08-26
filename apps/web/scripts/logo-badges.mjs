/**
 * AFFILIATION BADGE PREP
 *
 * The supplied marks arrive with four different grounds — transparent (CBSE),
 * white (Microsoft, Education), near-white #F7F7F7 (NCC) and solid BLACK
 * (Brainfeed). Dropped straight onto white tiles, the Brainfeed badge renders
 * as a black square and the NCC one as a faint grey square.
 *
 * Rather than give each tile a different ground — which would make the row look
 * accidental — this normalises the ARTWORK: every ground becomes transparent,
 * the mark is trimmed to its own bounding box, and the tiles stay uniform.
 *
 * The removal is an EDGE-CONNECTED flood fill, not a global colour match. That
 * distinction matters: the Brainfeed badge has a near-black centre inside the
 * shield, and a global "remove all near-black" would punch a hole through the
 * middle of it. A fill that can only travel inward from the border stops at the
 * gold shield outline and leaves the interior intact.
 *
 * Run: node scripts/logo-badges.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const OUT = 'src/assets/icons/logos';

/** tol — how far from the ground colour still counts as ground.
 *  feather — band beyond tol that gets partial alpha, so edges are not jagged. */
const JOBS = [
  /* CBSE is only transparent at the four corners — behind the emblem sits an
     opaque white rounded card. Flatten onto white first so the flood fill sees
     one continuous ground and can take the card away with the corners. */
  /* Measured, not guessed: the card's shadow ring peaks at distance 52 from
     white and the emblem's outer green ring starts at 60.2 — an 8-point margin,
     far tighter than the default 1.8x feather can express. Hence the explicit
     feather here: erase everything up to 56, leave the artwork alone. */
  { in: 'src/assets/icons/cbse_v2.webp', out: 'cbse.png', tol: 56, feather: 62, flatten: true },
  { in: 'src/assets/icons/Showcase-Schools-badge1.jpg', out: 'microsoft.png', tol: 18 },
  { in: 'src/assets/icons/education.jpeg', out: 'education-world.png', tol: 16 },
  { in: 'src/assets/icons/ncclogo.png', out: 'ncc.png', tol: 24 },
  { in: 'src/assets/icons/schoolexcellenceawart.jpeg', out: 'brainfeed.png', tol: 42 },
  { in: 'public/brand/sunbeam-crest.png', out: 'sunbeam.png', tol: 0 },
];

const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

async function prep({ in: src, out, tol, feather: featherOpt, flatten = false }) {
  const img = flatten
    ? sharp(src).flatten({ background: '#ffffff' }).ensureAlpha()
    : sharp(src).ensureAlpha();
  const { data, info } = await img.raw().toBuffer({ resolveWithObject: true });
  const { width: w, height: h, channels: ch } = info;
  const at = (x, y) => (y * w + x) * ch;

  if (tol > 0) {
    // Ground colour = the modal corner. Reading one corner is enough here; all
    // six files have a flat ground, and a corner that disagreed would show up
    // immediately as an untrimmed edge in the output.
    const ground = [data[at(0, 0)], data[at(0, 0) + 1], data[at(0, 0) + 2]];
    const feather = featherOpt ?? tol * 1.8;

    // Edge-connected flood fill. Iterative, not recursive — a 1254² image would
    // blow the call stack.
    const seen = new Uint8Array(w * h);
    const stack = [];
    for (let x = 0; x < w; x++) { stack.push([x, 0], [x, h - 1]); }
    for (let y = 0; y < h; y++) { stack.push([0, y], [w - 1, y]); }

    while (stack.length) {
      const [x, y] = stack.pop();
      if (x < 0 || y < 0 || x >= w || y >= h) continue;
      const idx = y * w + x;
      if (seen[idx]) continue;
      const i = at(x, y);
      const d = dist([data[i], data[i + 1], data[i + 2]], ground);
      if (d > feather) continue;          // reached the artwork — stop here
      seen[idx] = 1;
      data[i + 3] = d <= tol ? 0 : Math.round(((d - tol) / (feather - tol)) * 255);
      stack.push([x + 1, y], [x - 1, y], [x, y + 1], [x, y - 1]);
    }
  }

  await mkdir(OUT, { recursive: true });
  const res = await sharp(data, { raw: { width: w, height: h, channels: ch } })
    .png()
    .toBuffer()
    .then((buf) =>
      sharp(buf)
        .trim({ threshold: 1 })          // crop to the mark's own bounding box
        .resize({ width: 480, height: 480, fit: 'inside', withoutEnlargement: true })
        .png({ compressionLevel: 9 })
        .toFile(`${OUT}/${out}`)
    );

  console.log(`${out.padEnd(22)} ${res.width}x${res.height}  ${(res.size / 1024).toFixed(1)} KB`);
}

for (const job of JOBS) await prep(job);
