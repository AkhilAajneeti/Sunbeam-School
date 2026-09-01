/**
 * PARENTS' FEEDBACK — the data behind /parents-feedback/.
 *
 * ═══ THE TESTIMONIALS ARRAY IS EMPTY, AND THAT IS THE POINT ═════════════════
 *
 * ⚠⚠ DO NOT FILL IT IN TO MAKE THE PAGE LOOK FINISHED. The brief for this page
 * asked for a testimonial carousel and, in the same breath, forbade inventing
 * parent names, quotes, ratings, classes and occupations. Both halves are meant:
 * the school has supplied no individual parent testimonial, so there is nothing
 * to put here, and a card reading "Mrs. Priya Sharma, Parent of Aarav, Class IV"
 * would be a fabricated endorsement attributed to a real family at a real
 * school. It is not a placeholder problem; it is what ships.
 *
 * ⚠ THIS PROJECT HAS ALREADY ANSWERED THIS ONCE. components/academics/parents/
 * Voice.astro was written against the same request — quote, name, class, star
 * rating — and reached the same conclusion, in writing, when the school supplied
 * none of it. That component now carries the Principal's own signed words
 * instead. This page does not repeat that quote (it is already published two
 * clicks away); it shows an honest empty state and the documented participation
 * below it.
 *
 * ⚠ WHAT IS NEEDED TO TURN THE CAROUSEL ON — four things TOGETHER, per parent:
 * the quote, the parent's name, the child's class, and written consent to
 * publish. Add entries to `testimonials` and the section renders itself; no
 * component change is required, the empty state simply stops being shown.
 * `image` and `source` are optional and the card adapts to their absence.
 *
 * ⚠ STAR RATINGS ARE A SEPARATE CONVERSATION AND THE SHAPE HAS NO FIELD FOR
 * ONE. A school publishing its own five stars is marketing, not testimony.
 */

export interface ParentTestimonial {
  /** The parent's own words, verbatim. Never edited for tone. */
  quote: string;
  parentName: string;
  /** e.g. "Parent of a Class IV student" — the relation, not the child's name. */
  relation: string;
  /** The child's class, if the parent has consented to it being published. */
  className?: string;
  /** Imported from src/assets. Optional — the card lays out without one. */
  image?: ImageMetadata;
  /** Where it was published, so a reader can check it. */
  source?: string;
}

/**
 * ⚠ EMPTY UNTIL THE SCHOOL SUPPLIES REAL ONES. See the header above before
 * adding anything.
 */
export const testimonials: ParentTestimonial[] = [];

/** Shown in place of the carousel while `testimonials` is empty. */
export const emptyState = {
  heading: 'Parent feedback will be published here as the school shares it.',
  body:
    'Sunbeam School Ballia has not published individual parent testimonials. Rather than fill this ' +
    'page with words no parent has said, it stays open until real ones are supplied — with the ' +
    'family’s consent — and what the school HAS documented about working with parents is below.',
};

/**
 * ═══ DOCUMENTED PARTICIPATION ══════════════════════════════════════════════
 *
 * ⚠ THESE ARE INFORMATION CARDS, NOT TESTIMONIALS, AND THE PAGE MUST KEEP THEM
 * LOOKING LIKE INFORMATION. Every line is drawn from material already published
 * on this site, and each card names its source and links to the page carrying
 * the full account, so nothing here is a claim this project invented:
 *
 *   01  data/academics.ts → parents.forum and parents.engagement
 *   02  data/notices.ts   → the 15 November 2025 notice, read off the poster
 *   03  data/schoolActivities.ts → the Art Integrated Learning gallery
 *   04  data/academics.ts → parents.orientation
 *
 * ⚠ NOT ONE OF THEM IS PHRASED AS A QUOTATION, because none of it is one.
 */
export const participation = [
  {
    n: '01',
    title: 'Parents’ Forum',
    body:
      'The forum answers how the school is doing rather than how one child is doing — the only ' +
      'channel where parents raise things collectively and get an answer on the record. In the ' +
      'school’s own photographs every seat carries a class nameplate, so a concern arrives as a ' +
      'section’s concern rather than one family’s.',
    href: '/academics/parent-partnership/parents-forum/',
    cta: 'How the forum works',
  },
  {
    n: '02',
    title: 'Child–Parent–Teacher Dialogue',
    body:
      'The school issued a notice for a Child Parents Teacher Dialogue for Classes X and XII, dated ' +
      '15 November 2025. It sits the student in the conversation alongside the parent and the ' +
      'teacher rather than reporting on them afterwards.',
    href: '/academics/assessment/parent-teacher-meetings/',
    cta: 'Meetings and reporting',
  },
  {
    n: '03',
    title: 'Art Integrated Learning',
    body:
      'A class project taught through art, published by the school under a hand-painted banner ' +
      'reading “ART INTEGRATED CLASS PROJECT”. The photographs run from the exhibition tables — ' +
      'models, maps and a spread of regional food the children prepared — to the stage, where ' +
      'classes present in the dress of the region they studied.',
    href: '/beyond-academics/school-activities/art-integrated-learning/',
    cta: 'See the photographs',
  },
  {
    n: '04',
    title: 'Parent Orientation',
    body:
      'Orientation runs before the session begins rather than in the first week of it. Families ' +
      'walk the building, meet the class teacher and the subject staff in person, and leave with ' +
      'the handbook and the dates in hand.',
    href: '/academics/parent-partnership/parent-orientation/',
    cta: 'What orientation covers',
  },
] as const;

/** The closing band. Verified messaging only — no submission form is promised,
 *  because the project has no backend to receive one. */
export const closing = {
  heading: 'Together, we shape brighter futures.',
  body:
    'Education at Sunbeam is strongest when parents and teachers work together, which is why every ' +
    'channel between the staff room and your kitchen table is scheduled and published rather than ' +
    'left to chance.',
  cta: { label: 'Parent Partnership', href: '/academics/parent-partnership/' },
};
