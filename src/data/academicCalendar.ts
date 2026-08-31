/**
 * ACADEMIC CALENDAR — the archive's data, kept apart from its UI.
 *
 * ⚠⚠ THE ARRAY IS NO LONGER EMPTY. It used to be, and the reason it used to be
 * still governs how these three entries are written: a calendar is not read, it
 * is DIARISED. A family books travel against a holiday and a candidate revises
 * against an examination window, so a card captioned "2025-26 · PDF · 1.2 MB"
 * with nothing behind it would be believed completely and wrong silently. Every
 * figure below was taken from the file it describes, not estimated.
 *
 * ═══ WHAT THE SCHOOL ACTUALLY PUBLISHES ════════════════════════════════════
 * Its own /calendar-uniform/ page lists three, under these headings:
 *   "Yearly Academic Calendar 2026" → Calendar-Dates-2026-Associate-1.pdf
 *   "Yearly Academic Calendar 2025" → DIGI-Content-Sunbeam-Calendar-2025.pdf
 *   "Yearly Academic Calendar 2024" → seven JPEG sheets, no PDF
 *
 * ⚠ THE 2026 DOCUMENT CALLS ITSELF SOMETHING ELSE. The school's link says
 * "2026"; the file's own cover says "Sunbeam School — CALENDAR & MONTHLY
 * PLANNER 2026-27". The document's own wording is used here, because that is
 * what a parent sees after the file opens.
 *
 * ⚠⚠ THESE ARE SUNBEAM GROUP DOCUMENTS, AND THAT IS WHY THIS PAGE STATES NO
 * DATE. Read the 2026-27 planner and its dated entries are tagged by branch —
 * @ SCT, @ BGN, @ VRN, @ SIV, @ SNT, @ ANP, @ LHT, @ ING. Ballia is named on
 * the group's Knowledge Partners list, not against those entries. So a term
 * start or an examination window lifted out of this file and printed on a
 * Ballia page would be another campus's date wearing Ballia's name. The page
 * hands over the document and sends dates to the office; it does not retype
 * them. That is the whole argument of its headline.
 *
 * ⚠ THE PDFs ARE SERVED FROM public/calendar/, NOT LINKED OFF THE SCHOOL'S
 * HOST. The school's own copies sit on plain http:// and would be a mixed-content
 * download from an https page. The files here are the school's, byte for byte,
 * compressed; `calendarSource` still points at the page they came from.
 *
 * TO ADD A SESSION:
 *   1. put the PDF in public/calendar/ and its cover image in src/assets/calender/
 *   2. import the cover at the top of this file
 *   3. push one entry below, newest first, and move `current` onto it
 * The section's heading, its intro, its card count and its empty state all
 * follow from the array. No component changes.
 */
import cover202627 from '../assets/calender/cover-2026-27.jpg';
import cover2025 from '../assets/calender/cover-2025.jpg';
import cover2024 from '../assets/calender/cover-2024.jpg';

import sheet2024a from '../assets/calender/sheets-2024/sheet-01.jpg';
import sheet2024b from '../assets/calender/sheets-2024/sheet-02.jpg';
import sheet2024c from '../assets/calender/sheets-2024/sheet-03.jpg';
import sheet2024d from '../assets/calender/sheets-2024/sheet-04.jpg';
import sheet2024e from '../assets/calender/sheets-2024/sheet-05.jpg';
import sheet2024f from '../assets/calender/sheets-2024/sheet-06.jpg';
import sheet2024g from '../assets/calender/sheets-2024/sheet-07.jpg';

export interface CalendarDoc {
  /** Session or year, in the document's own form. */
  year: string;
  /** What the document calls itself. */
  type: string;
  /** Cover image, imported so Astro can optimise it. */
  image: ImageMetadata;
  /** Description of the cover, for the viewer and for screen readers. */
  alt: string;
  /** How the school published it. */
  kind: 'PDF' | 'Sheets';
  /** Path to the downloadable file. Absent for a set of sheets. */
  href?: string;
  /** File size, measured — never estimated. */
  size?: string;
  /** Extent, in the unit that suits the format. */
  extent?: string;
  /** A published image set, opened in the viewer instead of downloaded. */
  sheets?: { image: ImageMetadata; alt: string }[];
  /** The session currently running. */
  current?: boolean;
}

const S = 'Sunbeam School Ballia';
const GROUP = 'the Sunbeam Group of Educational Institutions, on which Sunbeam School Ballia is named as a knowledge partner';

/**
 * ⚠ DO NOT ADD A YEAR WITHOUT THE DOCUMENT. An entry with a placeholder cover or
 * an invented size is worse than no entry, because the card claims a file exists
 * and a parent will click it.
 */
export const calendars: CalendarDoc[] = [
  {
    year: '2026–27',
    type: 'Calendar & Monthly Planner',
    image: cover202627,
    alt: `The cover of the Sunbeam School Calendar & Monthly Planner 2026-27, published by ${S} on its Calendar page`,
    kind: 'PDF',
    href: '/calendar/sunbeam-calendar-monthly-planner-2026-27.pdf',
    size: '3.2 MB',
    extent: '13 pages',
    current: true,
  },
  {
    year: '2025',
    type: 'Sunbeam Calendar',
    image: cover2025,
    alt: `The cover of the Sunbeam Calendar 2025, a wall calendar of ${GROUP}`,
    kind: 'PDF',
    href: '/calendar/sunbeam-calendar-2025.pdf',
    size: '5.4 MB',
    extent: '7 pages',
  },
  {
    year: '2024',
    type: 'Sunbeam Calendar',
    image: cover2024,
    alt: `The first sheet of the Sunbeam Calendar 2024, headed “Where the past builds the future @ Sunbeam”`,
    kind: 'Sheets',
    extent: '7 sheets',
    sheets: [
      { image: sheet2024a, alt: 'Sunbeam Calendar 2024, sheet one — the cover, headed “Where the past builds the future @ Sunbeam”' },
      { image: sheet2024b, alt: 'Sunbeam Calendar 2024, sheet two' },
      { image: sheet2024c, alt: 'Sunbeam Calendar 2024, sheet three' },
      { image: sheet2024d, alt: 'Sunbeam Calendar 2024, sheet four' },
      { image: sheet2024e, alt: 'Sunbeam Calendar 2024, sheet five' },
      { image: sheet2024f, alt: 'Sunbeam Calendar 2024, sheet six' },
      { image: sheet2024g, alt: 'Sunbeam Calendar 2024, sheet seven' },
    ],
  },
];

/** The school's own page for the session calendar and the uniform list. */
export const calendarSource = 'https://sunbeamballia.edu.in/calendar-uniform/';

/**
 * What the school says the calendar carries. Consistent across its pages, and
 * the same four entry types a month grid would need — which is why this list is
 * also the slot the interactive calendar drops into when the dates arrive.
 */
export const calendarCarries = [
  {
    n: '01',
    mark: 'calendar',
    k: 'Terms',
    v: 'The shape of the session — and orientation, which the school runs before it begins rather than during it.',
  },
  {
    n: '02',
    mark: 'sun',
    k: 'Holidays',
    v: 'Published with the session so a family plans around the school year rather than against it.',
  },
  {
    n: '03',
    mark: 'doc',
    k: 'Examination dates',
    v: 'On the same calendar as everything else, so a meeting can be read against the paper that preceded it.',
  },
  {
    n: '04',
    mark: 'hands',
    k: 'Parent–teacher meetings',
    v: 'Placed before the session starts — which is what stops a meeting date arriving as a signal that something is wrong.',
  },
] as const;

/** Four reasons the calendar matters to a family, stated without a date. */
export const calendarPlanning = [
  { n: '01', mark: 'target', k: 'Plan with confidence', v: 'See the year’s structure ahead of time.' },
  { n: '02', mark: 'bell', k: 'Stay updated', v: 'Follow the school’s published notices for any change.' },
  { n: '03', mark: 'hands', k: 'Work together', v: 'Aligned communication helps every child do their best.' },
  { n: '04', mark: 'shield', k: 'Always official', v: 'Use the school’s own calendar for an accurate date.' },
] as const;
