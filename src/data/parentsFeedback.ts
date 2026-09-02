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
 * publish. Add entries here and the entire "What our parents say" band — its
 * eyebrow, heading, copy, cards, arrows and dots — renders itself; no component
 * change is required. While this array is empty that band does not appear on
 * the page at all, which is the client's call: a section with nothing to say
 * should not be there. `image` and `source` are optional and the card adapts to
 * their absence.
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

/**
 * ═══ DOCUMENTED PARTICIPATION ══════════════════════════════════════════════
 *
 * ⚠⚠ EVERY LINE IN `paras` IS THE SCHOOL'S OWN, COPIED VERBATIM, AND MUST STAY
 * THAT WAY. This block was previously written by this project — summaries of
 * what each channel is for, in this project's voice. The client supplied the
 * school's actual published wording and asked for it unedited, so the summaries
 * are gone and these are transcriptions. Do not tighten, re-order, merge,
 * paraphrase or "fix" them, and do not add a sentence to balance a short card
 * against a long one. The exclamation marks, the en dash in "teaching–learning"
 * and the sentence fragments are the school's.
 *
 * ⚠ THE TITLES ARE THE SCHOOL'S HEADINGS TOO. "Child Parent Teacher Dialogue"
 * carries no hyphens and "Art Integrated Class Project" is not "Art Integrated
 * Learning" — both were this project's renderings and both are corrected here.
 *
 * ⚠ `href` IS UNUSED AND KEPT ON PURPOSE. The cards are not clickable — the
 * client asked for no links at all — so nothing renders it today. It stays as
 * the record of which page on this site writes each item up in full, so the
 * mapping does not have to be worked out again if links ever return. `cta` is
 * gone: it held a label this project wrote, and there is nothing to label.
 */
export const participation = [
  {
    n: '01',
    title: 'Parents’ Forum',
    paras: [
      'Today, we successfully conducted the Parents’ Forum for classes Nursery to V, creating a meaningful platform for collaboration between parents and teachers.',
      'Parents actively participated, shared valuable feedback, and appreciated the efforts taken for their children’s growth and wellbeing.',
    ],
    href: '/academics/parent-partnership/parents-forum/',
  },
  {
    n: '02',
    title: 'Child Parent Teacher Dialogue',
    paras: [
      'The session provided an opportunity to discuss progress, share feedback, and exchange valuable suggestions.',
      'Parents actively participated and their insights will surely help us in further strengthening the teaching–learning process.',
    ],
    href: '/academics/assessment/parent-teacher-meetings/',
  },
  {
    n: '03',
    title: 'Art Integrated Class Project',
    paras: [
      'Heartfelt feedback from parents.',
      'The students showcased incredible talent and teamwork, while parents actively participated and appreciated the creative learning approach.',
    ],
    href: '/beyond-academics/school-activities/art-integrated-learning/',
  },
  {
    n: '04',
    title: 'Parent Orientation',
    paras: [
      'Parents as Partners in Learning!',
      'At Sunbeam School Ballia, we believe that education is a shared journey, and when parents and teachers work together, the results are extraordinary!',
      'The program also featured a Parents Interface Session, where parents had the opportunity to interact one-on-one with the leadership team, fostering a stronger school-community bond.',
      'Parents were an integral part of this experience, interacting with their children, exploring the activities, and witnessing the vibrant learning ecosystem we nurture at Sunbeam.',
    ],
    href: '/academics/parent-partnership/parent-orientation/',
  },
  {
    n: '05',
    title: 'Second Parents Orientation Programme',
    paras: [
      'Today we have conducted the Second Parents Orientation Programme successfully. Glimpses of the same are shared for your reference.',
    ],
    href: '/academics/parent-partnership/parent-orientation/',
  },
] as const;

/** The closing band. Verified messaging only — no submission form is promised,
 *  because the project has no backend to receive one. */
export const closing = {
  heading: 'Together, we shape brighter futures.',
  /* ⚠ THE CLIENT'S OWN LINE FROM THE REFERENCE, not this project's. What stood
     here was written by this project and went out with the rest of the invented
     copy. */
  body: 'We remain committed to nurturing curiosity, character and confidence in every child.',
  cta: { label: 'Parent Partnership', href: '/academics/parent-partnership/' },
};
