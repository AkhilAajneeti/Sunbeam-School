/**
 * THE PARENTS' FORUM — its agenda, its seating and its benefits, kept apart
 * from the three pages that draw on them.
 *
 * ═══ THE TWELVE ITEMS ARE A TRANSCRIPTION, NOT A SUMMARY ═══════════════════
 * Every one is read off the school's own projected slide in
 * `src/assets/parents forum/parents forum (5).jpg`, which is legible at full
 * size and is headed, in the school's own words and its own punctuation:
 *
 *     "Agenda for Parents Forum: Session 2025-26 Class IX to XII1)"
 *      1) Almanac
 *      2) Syllabi
 *      3) Quality of classroom teaching
 *      4) Pace of teaching
 *      5) Quality of assignment in Learner's Comate / Class work / Homework
 *      6) Question Bank
 *      7) E-Portfolio
 *      8) Grandparents Cove
 *      9) Positive Affirmations
 *     10) Scientific Facts
 *     11) Correction of Notebooks / Learner's Comate
 *     12) Fruit Break
 *
 * ⚠⚠ THE DESIGN BRIEF'S OWN LIST IS NOT THIS LIST, AND THE BRIEF SAYS TO CHECK.
 * It asked for "The Teaching / Classroom", "The Work That Comes Home", "The
 * Documents" and "The Best of the Child" — four editorial groupings that appear
 * nowhere on the school's slide — and it dropped Almanac, Syllabi and Pace of
 * teaching, which do. Its own instruction reads "Verify the exact wording and
 * complete list from the source before implementation." This is that list.
 *
 * ⚠ "LEARNER'S COMATE" IS TRANSCRIBED, NOT CORRECTED AND NOT EXPANDED. It is
 * the school's own spelling on its own slide, and it appears twice. What the
 * artefact is — a diary, a workbook, a portfolio — is not published anywhere, so
 * it is quoted and left alone.
 *
 * ⚠⚠ `note` IS ONLY EVER THE SLIDE'S OWN REMAINING WORDS. Where the school
 * wrote a qualifier after the item's name, it is kept: item 05's slide line runs
 * "Quality of assignment in Learner's Comate / Class work / Homework", so the
 * title is the first half and the note is the second. Where the school wrote a
 * bare name — Grandparents Cove, Positive Affirmations, Scientific Facts, Fruit
 * Break — `note` is EMPTY, and the page shows nothing rather than a sentence we
 * made up. TEN of the twelve are like that — only items 05 and 11 carry any
 * further words on the slide. Writing "Recognition that builds a child's
 * confidence" under Positive Affirmations would be inventing a school programme,
 * which is the exact thing this build exists to prevent.
 *
 * ⚠ FOUR OF THOSE TEN ARE UNDEFINED JARGON, WHICH IS A SEPARATE POINT AND A
 * SHARPER ONE. Grandparents Cove, Positive Affirmations, Scientific Facts and
 * Fruit Break are school-specific names that mean nothing to an outside reader,
 * and the school defines none of them anywhere on its site. They are the four
 * worth asking the client about — the other six bare items (Almanac, Syllabi,
 * Question Bank and so on) explain themselves.
 *
 * ⚠ NOT RECORDED ANYWHERE HERE: how often the forum sits, how a class
 * representative is chosen, how long a term runs, or what was decided at any
 * sitting. None of it is published.
 */

/** One line of the school's projected agenda. */
export interface AgendaItem {
  /** Position on the slide, as the school numbered it. */
  n: string;
  /** Icon key from the shared line-icon set. */
  mark: string;
  /** The item's name, in the school's own words. */
  k: string;
  /**
   * The rest of the school's own line, where it wrote one. NEVER a gloss we
   * composed — an empty string is the correct value for a bare item.
   */
  note: string;
}

export const forumAgenda: AgendaItem[] = [
  { n: '01', mark: 'calendar', k: 'Almanac', note: '' },
  { n: '02', mark: 'book', k: 'Syllabi', note: '' },
  { n: '03', mark: 'desk', k: 'Quality of classroom teaching', note: '' },
  { n: '04', mark: 'clock', k: 'Pace of teaching', note: '' },
  { n: '05', mark: 'pen', k: 'Quality of assignment', note: 'in Learner’s Comate / Class work / Homework' },
  { n: '06', mark: 'search', k: 'Question Bank', note: '' },
  { n: '07', mark: 'layers', k: 'E-Portfolio', note: '' },
  { n: '08', mark: 'hands', k: 'Grandparents Cove', note: '' },
  { n: '09', mark: 'speech', k: 'Positive Affirmations', note: '' },
  { n: '10', mark: 'flask', k: 'Scientific Facts', note: '' },
  { n: '11', mark: 'clipboard', k: 'Correction of Notebooks', note: '/ Learner’s Comate' },
  { n: '12', mark: 'leaf', k: 'Fruit Break', note: '' },
];

/** The slide's own heading, quoted. */
export const agendaHeading = 'Agenda for Parents Forum: Session 2025-26 Class IX to XII';

/**
 * The class nameplates on the desks, read off
 * `src/assets/parents forum/parents forum (3).jpg`. Five are legible in that
 * frame; the school seats by section, and this is the evidence for it.
 *
 * ⚠ FIVE IS WHAT IS LEGIBLE, NOT WHAT EXISTS. The room holds more desks than
 * this, and the list is not a roll of every section in the school.
 */
export const forumNameplates = ['Nursery', 'KG-I A', 'II-C', 'II-E', 'III-A'] as const;

/**
 * Why the forum matters. Each line describes only what the two photographs and
 * the slide actually show — the seating, the projection, the panel — and none
 * claims an outcome, a frequency or a right.
 */
export const forumBenefits = [
  {
    n: '01',
    mark: 'person',
    k: 'Class-wise representation',
    v: 'Every desk carries a class nameplate, so a section is spoken for whether or not its own parents came.',
  },
  {
    n: '02',
    mark: 'eye',
    k: 'Transparent agenda',
    v: 'The twelve items are projected, not read from the front table — the room can see what is still to come.',
  },
  {
    n: '03',
    mark: 'megaphone',
    k: 'Open dialogue',
    v: 'The school’s own photographs show parents speaking into the microphone from the floor.',
  },
  {
    n: '04',
    mark: 'medal',
    k: 'Leadership in the room',
    v: 'The panel behind the agenda is the school’s leadership, the principal among them.',
  },
  {
    n: '05',
    mark: 'shield',
    k: 'Answered in public',
    v: 'A question raised on a class’s behalf is answered to the whole room rather than in private.',
  },
] as const;

/**
 * What a parent sees in the forum room. Written for the Parent Engagement page,
 * and drawn from the same three artefacts.
 */
export const engagementFacts = [
  { n: '01', mark: 'person', k: 'Designed by class', v: 'Parents sit for their child’s class — from Nursery upward — so every section has a voice.' },
  { n: '02', mark: 'speech', k: 'Real conversations', v: 'The school’s photographs show parents at the microphone, not only listening.' },
  { n: '03', mark: 'clipboard', k: 'Shared understanding', v: 'A projected agenda keeps the discussion on what the school actually does.' },
  { n: '04', mark: 'hands', k: 'Beyond parents', v: 'The agenda names Grandparents Cove, so the circle is written wider than parents.' },
  { n: '05', mark: 'medal', k: 'Leadership present', v: 'The answers come from the panel at the front, with the principal sitting on it.' },
] as const;

/**
 * Why the school's communication arrangement matters. Every line is a
 * restatement of something in data/site.ts, not a promise about service.
 *
 * ⚠ NO RESPONSE TIME, NO OFFICE HOURS, NO APP. None of the three is published,
 * and each is the kind of thing a parent would hold the school to.
 */
export const commsBenefits = [
  { n: '01', mark: 'target', k: 'Right person, first time', v: 'Three lines, split by purpose, so a question reaches the desk that can answer it.' },
  { n: '02', mark: 'phone', k: 'A named holder', v: 'The transport line is published with the name of the person who holds it.' },
  { n: '03', mark: 'layers', k: 'Records stay together', v: 'Term reports and results sit in the parent portal rather than travelling home loose.' },
  { n: '04', mark: 'megaphone', k: 'Clear and public', v: 'Notices go to the school’s own notice board and its published social channels.' },
  { n: '05', mark: 'shield', k: 'Written when it matters', v: 'The office email is the route for anything that should exist in writing.' },
] as const;
