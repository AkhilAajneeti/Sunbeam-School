/**
 * GOOGLE REVIEWS — the data behind the "What our community says" band on the
 * HOMEPAGE (components/home/GoogleReviews.astro).
 *
 * ═══ EVERY LINE BELOW WAS READ OFF THE SCHOOL'S OWN LIVE SITE ══════════════
 *
 * ⚠⚠ SOURCE: the Google reviews widget on sunbeamballia.edu.in (the school's
 * homepage), fetched 11 September 2026. The aggregate (4.4 of 5, the word
 * "Good", 368 reviews) and all eight reviews — names, star counts and text —
 * are transcribed from it. NOTHING HERE IS WRITTEN BY THIS PROJECT.
 *
 * ⚠⚠ THE DESIGN REFERENCE THIS SECTION IS BUILT FROM IS FULL OF INVENTED
 * TESTIMONIALS AND NONE OF THEM SURVIVED. The comp supplied with the brief
 * carried "Priya Singh · Parent", "Amit Verma · Parent", "Sneha Tiwari ·
 * Alumni", "Rohit Sharma · Parent", a 4.8/5 score, "500+ reviews", "500+ Happy
 * Families", stock-photograph avatars and topic tags ("Caring Teachers",
 * "Great Environment"). Every one of those is fabricated — real-sounding names
 * attributed to a real school. The LAYOUT is the reference's; the CONTENT is
 * the school's. Do not copy a figure back off that comp.
 *
 * ⚠ THE SCORE IS 4.4, NOT 4.8, AND THE COUNT IS 368, NOT "500+". Both are the
 * published numbers. If they drift, re-read the widget — do not round up.
 *
 * ⚠ NO TIMESTAMPS, DELIBERATELY. The reference card shows "2 weeks ago" under
 * each review. The school's widget publishes a relative date for only some of
 * them, and five of these eight carry none that can be read. Five invented
 * dates to fill a row is exactly the kind of small lie this file exists to
 * prevent, so the field does not exist and the card is designed without it.
 *
 * ⚠ NO ROLES ("Parent" / "Alumni"), FOR THE SAME REASON. Google publishes a
 * reviewer's name, not their relationship to the school. The reference labels
 * every card; this one cannot, because it would be a guess about a real person.
 *
 * ⚠ NO PROFILE PHOTOGRAPHS. Two of these reviewers have a Google avatar and the
 * rest have a coloured initial. Copying a real person's photograph onto this
 * site is not something a screenshot authorises, so every card renders the
 * initial — which is what Google itself shows when there is no photo.
 *
 * ⚠⚠ THE TWO-STAR REVIEW STAYS IN. Bhawna Agrawal's two-star entry is in the
 * school's own widget, in this order, and dropping it would turn a review feed
 * into a testimonial reel — the exact move that makes the rest untrustworthy.
 * The aggregate already tells a reader not every review is five stars; hiding
 * the one that shows it would be the dishonest half of a half-truth.
 */

export interface GoogleReview {
  /** The reviewer's display name, exactly as Google shows it — including its
   *  own capitalisation. Several are lower-case; that is not a mistake. */
  name: string;
  /** Whole stars, 1–5, as published. */
  stars: number;
  /** The review, verbatim. See the warning on `reviews` before editing one. */
  text: string;
  /** True where the widget itself truncates the review with an ellipsis. */
  clipped?: boolean;
}

/**
 * ⚠⚠ VERBATIM, TYPOS INCLUDED. "Best sc hool" is how that review is published —
 * it is a quotation from a member of the public, not copy to be tidied. The
 * same goes for the one-word entries: "Good" is what the person wrote, and
 * padding it out would be putting words in their mouth.
 *
 * Order is the school's own widget order. The rail advances through it and
 * loops; nothing here is ranked.
 */
export const reviews: GoogleReview[] = [
  { name: 'priya singh rajput', stars: 5, text: 'Best sc hool' },
  {
    name: 'Krishna Singh',
    stars: 5,
    text: 'Excellent study environment. School focus over complete development of',
    clipped: true,
  },
  { name: 'Rudr Charsiya', stars: 5, text: 'Good' },
  { name: 'govind prasad', stars: 5, text: 'Nice and very good' },
  { name: 'Pramod Keshari', stars: 4, text: 'Good' },
  { name: 'Bhawna Agrawal', stars: 2, text: 'Good' },
  { name: 'Swati Agrawal', stars: 4, text: 'A very nice school in whole Ballia city' },
  { name: 'prachi singh', stars: 5, text: 'All good' },
];

/**
 * The aggregate, as the widget states it.
 *
 * ⚠ `word` IS GOOGLE'S OWN BAND LABEL for this score ("Good"), not an adjective
 * chosen here. It is shown because the school's site shows it.
 */
export const rating = {
  score: 4.4,
  outOf: 5,
  word: 'Good',
  total: 368,
};

/**
 * ⚠ THE CLOSING STRIP CARRIES NUMBERS, SO IT CARRIES ONLY THESE TWO. The
 * reference's third tile read "500+ Happy Families" — a figure nobody has
 * published, describing families rather than reviews, and flatly contradicted
 * by a two-star review sitting above it. What replaced it states no quantity at
 * all, which is the only honest third tile available.
 */
export const strip = [
  { icon: 'people', value: `${rating.total}`, label: 'Reviews on Google' },
  { icon: 'star', value: `${rating.score} / ${rating.outOf}`, label: 'Average rating' },
  { icon: 'heart', value: 'Ballia', label: 'Where families have reviewed us' },
] as const;
