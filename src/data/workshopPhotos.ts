import type { ImageMetadata } from 'astro';

/**
 * WORKSHOP PHOTOGRAPHY — resolved from the folder layout, not from a hand list.
 *
 * ═══ HOW TO ADD A GALLERY ══════════════════════════════════════════════════
 *
 * Drop the photographs in `src/assets/workshops/<folder>/` and point the
 * workshop's `photoDir` at `<folder>` in data/newsPages.ts. Nothing else. The
 * detail page grows a hero and a gallery, the index card grows a picture, and
 * the "photographs not yet supplied" placeholder disappears on its own.
 *
 * ⚠ THE GLOB IS EAGER AND THE PATH IS A LITERAL. Vite can only statically
 * analyse `import.meta.glob` when the pattern is written inline — build it from
 * a variable and it silently resolves to nothing, which would look exactly like
 * "the client has not supplied photographs yet".
 *
 * ⚠ FOLDER NAME ≠ SLUG, DELIBERATELY. The first folder supplied is
 * `science&innovation` while the route is `science-and-innovation`. Deriving one
 * from the other would mean dictating file naming to whoever exports the photos,
 * and an ampersand or a stray capital would break a page silently. `photoDir` is
 * an explicit mapping instead — the folder can be called anything.
 */
/**
 * ⚠ FOUR GLOBS, MERGED — one per asset root, and they must stay literal.
 * Vite can only analyse `import.meta.glob` when the pattern is written inline,
 * so a loop over root names silently resolves to nothing, which looks exactly
 * like "the client has not supplied photographs yet".
 *
 * A folder name only has to be unique ACROSS ALL FOUR roots, because the lookup
 * key is the folder alone.
 */
const files: Record<string, { default: ImageMetadata }> = {
  ...import.meta.glob<{ default: ImageMetadata }>(
    '../assets/workshops/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp}',
    { eager: true },
  ),
  ...import.meta.glob<{ default: ImageMetadata }>(
    '../assets/school-event/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp}',
    { eager: true },
  ),
  ...import.meta.glob<{ default: ImageMetadata }>(
    '../assets/celebration/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp}',
    { eager: true },
  ),
  ...import.meta.glob<{ default: ImageMetadata }>(
    '../assets/competition/**/*.{jpg,jpeg,png,JPG,JPEG,PNG,webp}',
    { eager: true },
  ),
};

/** The asset roots a gallery folder may live under. Adding one means adding a
 *  LITERAL glob above as well — this list only drives the lookup, not the
 *  bundling. */
const ROOTS = ['/assets/workshops/', '/assets/school-event/', '/assets/celebration/', '/assets/competition/'];

/**
 * ⚠ NATURAL ORDER, NOT LEXICAL. The supplied set runs `…innovation.jpg`,
 * `…innovation2.jpg` … `…innovation12.jpg`. Sorted as plain strings that reads
 * 1, 10, 11, 12, 2, 3 — so a gallery would open on the eleventh photograph and
 * the school's own sequence would be scrambled. Splitting the digits out and
 * comparing them numerically keeps the order they exported.
 */
const natural = (a: string, b: string) =>
  a.localeCompare(b, 'en', { numeric: true, sensitivity: 'base' });

const byFolder = new Map<string, ImageMetadata[]>();

for (const [path, mod] of Object.entries(files)) {
  const root = ROOTS.find((r) => path.includes(r));
  const folder = root ? path.split(root)[1]?.split('/')[0] : undefined;
  if (!folder) continue;
  const list = byFolder.get(folder) ?? [];
  list.push(mod.default);
  byFolder.set(folder, list);
}

/* Re-sort each folder by filename once the map is built — Object.entries order
   is the glob's, which is not guaranteed to be the export order. */
for (const [folder, list] of byFolder) {
  const paths = Object.entries(files)
    .filter(([p]) => ROOTS.some((r) => p.includes(r + folder + '/')))
    .sort(([a], [b]) => natural(a, b))
    .map(([, m]) => m.default);
  byFolder.set(folder, paths);
  void list;
}

/**
 * Every photograph for a workshop, in the order the school exported them.
 *
 * ⚠ `skip` EXISTS BECAUSE A SUPPLIED FOLDER IS NOT ALWAYS ONE EVENT. The
 * QCT/CIC folder arrived holding four session photographs and two student
 * science-competition results — an NCSC state-level selection and a ₹5,000
 * prize at the State Science Model competition. Both are real Sunbeam Ballia
 * material and neither is that workshop; the first of them would have become
 * the card face, captioning a students' science prize as a teacher-training
 * session.
 *
 * Naming the files here rather than deleting them keeps the client's folder
 * exactly as they left it, makes the exclusion visible in review, and undoes in
 * one line when the pictures move to the page they belong on.
 */
export const photosFor = (dir?: string, skip: string[] = []): ImageMetadata[] => {
  if (!dir) return [];
  const all = byFolder.get(dir) ?? [];
  if (!skip.length) return all;
  return all.filter((img) => !skip.some((name) => img.src.includes(name.replace(/\.[a-z]+$/i, ''))));
};

/** The lead photograph — the card face and the detail hero. */
export const leadPhoto = (dir?: string, skip: string[] = []): ImageMetadata | undefined =>
  photosFor(dir, skip)[0];

/** Folders present, for the build-time report. */
export const galleryFolders = [...byFolder.keys()].sort();
