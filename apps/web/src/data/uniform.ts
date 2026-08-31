/**
 * THE UNIFORM CATALOGUE — the school's two published documents and what is
 * inside them.
 *
 * ═══ SOURCE — sunbeamballia.edu.in/uniform/ AND THE PDFs THEMSELVES ═════════
 * The school's Uniform page carries exactly two links and nothing else — no
 * description, no season table, no class list, no shop information:
 *     "CLICK HERE TO VIEW THE WINTER UNIFORM" → Student-Uniform-Catalogue-WINTER-2025.pdf
 *     "CLICK HERE TO VIEW THE UNIFORM"        → a Google Drive document
 * Everything below the two cards on the page therefore comes from INSIDE the
 * catalogues, which is what the brief asks for: the PDFs are not left hidden
 * behind a download button.
 *
 * ⚠⚠ BOTH PDFs ARE IMAGE-ONLY — no text layer at all. Every line below was read
 * off pages rendered at 4× and checked by eye, not extracted. Where a value was
 * not legible at that magnification it is simply absent rather than guessed.
 *
 * ⚠⚠ BOTH DOCUMENTS CALL THEMSELVES "WINTER", AND THAT IS THE SCHOOL'S OWN
 * FILING, NOT AN ERROR HERE. The file the school links as "THE UNIFORM" has a
 * cover reading "Student's Winter Uniform, Edition 2019-20, Revised on 27th
 * Dec' 18". The newer one reads "Student's Winter Uniform Catalogue, Session
 * 2025-26, Revised on 06 Oct. 2025". Each card is titled from its own cover and
 * says which of the school's two links it is, so a parent can tell them apart.
 *
 * ⚠ A DISCREPANCY INSIDE THE 2025-26 DOCUMENT, reproduced rather than tidied:
 * its cover says "Session 2025-26" but its shoe table is headed "(For the
 * session 2023-24)". Both are printed exactly as they appear.
 *
 * ⚠ NOT CLAIMED: prices, shops, outlets, where to buy, stock, sizes, or a
 * "parents may buy from any shop" line. The reference art carried that last
 * one; it is not on the school's Uniform page and was not found on any page of
 * either catalogue that was checked, so it is not here.
 */

const UP = 'https://sunbeamballia.edu.in/wp-content/uploads';

export interface Catalogue {
  n: string;
  mark: string;
  /** The document's own cover title. */
  title: string;
  /** Session or edition, as printed on the cover. */
  session: string;
  /** Revision line, as printed on the cover. */
  revised?: string;
  /** What the school's own link calls it. */
  linkedAs: string;
  /** Served from public/ — the school's file, byte for byte. */
  href: string;
  /** The school's own copy, for reference. */
  origin: string;
  pages: number;
  size: string;
}

export const catalogues: Catalogue[] = [
  {
    n: '01',
    mark: 'spark',
    title: 'Student’s Winter Uniform Catalogue',
    session: 'Session 2025–26',
    revised: 'Revised on 06 Oct. 2025',
    linkedAs: 'Click here to view the winter uniform',
    href: '/uniform/student-winter-uniform-catalogue-2025-26.pdf',
    origin: `${UP}/Student-Uniform-Catalogue-WINTER-2025.pdf`,
    pages: 8,
    size: '38.9 MB',
  },
  {
    n: '02',
    mark: 'book',
    title: 'Student’s Uniform Catalogue',
    session: 'Edition 2019–20',
    revised: 'Revised on 27th Dec ’18',
    linkedAs: 'Click here to view the uniform',
    href: '/uniform/student-uniform-catalogue.pdf',
    origin: 'https://drive.google.com/file/d/1-12yLk0YFbVibk4aWsfBVGKwODC7yLW_/view?usp=sharing',
    pages: 22,
    size: '10.2 MB',
  },
];

/**
 * The class groups the catalogues themselves are organised by — every page of
 * the 2025-26 document is headed with one of these three.
 */
export const classGroups = [
  { n: '01', mark: 'person', k: 'Nursery to Class II', v: 'Set out for boys and girls across all four seasons.' },
  { n: '02', mark: 'book', k: 'Classes III to V', v: 'Set out for boys and girls across all four seasons.' },
  { n: '03', mark: 'cap', k: 'Classes VI to XII', v: 'Set out for boys and girls across all four seasons.' },
] as const;

/**
 * The four seasons and their months, exactly as the catalogue's own grid heads
 * them. The months are the school's, not a northern-hemisphere assumption.
 */
export const seasons = [
  { mark: 'sun', k: 'Summer', v: 'Apr – Sept' },
  { mark: 'leaf', k: 'Autumn', v: 'Oct – Nov' },
  { mark: 'spark', k: 'Winter', v: 'Dec – Jan' },
  { mark: 'grow', k: 'Spring', v: 'Feb – Mar' },
] as const;

/**
 * The shoe table, transcribed cell for cell.
 * ⚠ THE HEADING IS THE DOCUMENT'S OWN, INCLUDING ITS SESSION. See the file
 * header — the cover says 2025-26 and this table says 2023-24.
 */
export const shoeTable = {
  heading: 'List of shoes',
  note: 'Headed “For the session 2023-24” in the 2025–26 catalogue — the document’s own wording.',
  rows: [
    { classes: 'Nursery – V', boys: 'Black/White sports shoes with laces/velcro', girls: 'Black/White sports shoes with laces/velcro', days: 'All days' },
    { classes: 'VI – XII', boys: 'Black leather shoes with laces', girls: 'Black leather shoes with laces/velcro', days: 'Mon, Tue, Thu, Fri' },
    { classes: 'VI – XII', boys: 'Black / White sports shoes with laces/velcro', girls: 'Black / White sports shoes with laces/velcro', days: 'Wed & Sat' },
  ],
};

/**
 * The catalogue's own eleven notes, verbatim. These are the parent-facing rules
 * the document actually states — the reason this page surfaces the PDF rather
 * than only linking it.
 */
export const uniformNotes = [
  'Hair should be either bobbed (not below shoulder level) or two plaits tightened with white rubber bands (for girls). Only a short hair cut is allowed for boys.',
  'Sikh boys should wear yellow patkas which matches the colour of their T-shirt (Nursery to Class II only), Grey patkas which matches the colour of their trousers (classes III–XII) or sky blue turbans (classes XI & XII).',
  'KG section students must bring their apron daily to school which will be worn by them while eating their tiffins / doing activities.',
  'Shoes should be regularly cleaned/polished.',
  'Identity Card must be worn daily.',
  'Length of T-shirt should be just below the waist.',
  'Trousers worn by all the boys & girls should be with two pleats (classes VI–XII).',
  'Girls may wear trousers or skirts in summers (classes VI – XII).',
  'Wearing jackets/coats is compulsory from 1st Dec. till end of Feb.',
  'Please encourage your child to wear a wrist watch to keep a sense of time and for better time management. (Optional till class III and compulsory for class IV upwards.)',
  'Wearing of winter uniform is compulsory from 1st December.',
] as const;

/** The school's own Uniform page, for anyone who wants the source. */
export const uniformSource = 'https://sunbeamballia.edu.in/uniform/';
