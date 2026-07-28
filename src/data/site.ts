/**
 * VERIFIED SCHOOL FACTS — single source of truth.
 *
 * Every value below was extracted from the live site (sunbeamballia.edu.in) or
 * read directly off the official logo artwork, and is recorded in
 * docs/01-existing-site-analysis.md § 5 "Verified facts inventory".
 *
 * RULE: nothing may be added to this file that the school has not published.
 * Unverified content belongs in `pending` with a docs/07 asset-request id.
 */

/**
 * Build-note switch. The outstanding-asset callouts are for the team, not for
 * parents — flip to false for any client preview or launch.
 */
export const showBuildNotes = false;

export const school = {
  name: 'Sunbeam School Ballia',
  shortName: 'Sunbeam Ballia',

  /**
   * Motto — read from the crest ring on the official logo artwork.
   * Text extraction never surfaced this; it is only visible in the emblem.
   * The strongest Sunbeam-specific brand asset available to the design.
   */
  motto: 'Duty · Devotion · Discipline',
  mottoParts: ['Duty', 'Devotion', 'Discipline'],

  /** Group phrase, used by Sunbeam group-wide. Confirm primacy — asset A3. */
  groupPhrase: 'Lighting the Lamp of Knowledge',
  /** Tagline in use on the Ballia site. Confirm primacy — asset A3. */
  tagline: 'Educating the FUTURE!',

  established: 2013,
  groupFounded: 1972,
  groupFoundedAt: 'Varanasi',
  founders: "Dr. Amrit Lal 'Ishrat' Madhok and his wife",

  openingStrength: 456,
  currentStrength: '2,200+',
  teachingStaff: '130+',

  board: 'CBSE',
  boardFull: 'Central Board of Secondary Education, Delhi',
  affiliationNo: '2131962',
  schoolCode: '70205',

  classRange: 'Nursery to Class XII',
  streams: ['PCM', 'PCB', 'Commerce', 'Humanities'],

  principal: 'Mrs. Arpita Singh',

  address: {
    line1: 'Agarsanda, near Hanuman Temple',
    city: 'Ballia',
    state: 'Uttar Pradesh',
    pin: '277001',
    country: 'India',
    landmark: '2 km from Ballia Roadways Bus Stand on Garwar Road',
  },

  phone: {
    admissions: '+917755005908',
    admissionsDisplay: '+91 77550 05908',
    office: '+917755005905',
    officeDisplay: '+91 77550 05905',
    transport: '+917755005909',
    transportDisplay: '+91 77550 05909',
    transportIncharge: 'Mr. Sheo Sarjan Singh',
  },

  /** Finding X6 — a domain address is requested (decision C1). */
  email: 'sunbeamballia2131962@gmail.com',

  social: {
    facebook: 'https://www.facebook.com/sunbeambui8413/',
    instagram: 'https://www.instagram.com/sunbeamballia/',
    linkedin: 'https://www.linkedin.com/in/sunbeamschoolballia70205/',
    // x + youtube withheld pending audit 14.3 decision (asset request A9).
  },

  external: {
    applyNurseryToIX: 'https://sunbeamballia.edu.in/apply-online/',
    applyClassXI: 'https://sunbeamballia.edu.in/apply-online/',
    results: 'https://sbb.nascorptechnologies.com/',
    parentLogin: 'https://sbb.nascorptechnologies.com/',
    downloadTC: 'https://sunbeamballia.edu.in/download-tc/',
  },
} as const;

/**
 * Recognition — homepage §03b proof strip.
 * All four verified from /about-us/ and /affiliation/.
 */
/**
 * Heritage lede — homepage §03b, the band directly under the banner.
 *
 * The figure completes the heading as one sentence: "50 · Years of Sunbeam."
 * Both numbers are verified — the group was founded in Varanasi in 1972 and the
 * Ballia campus opened at Agarsanda in 2013 (docs/01 § 5). The body is editorial
 * phrasing of those same two facts; it makes no claim they do not.
 *
 * NOTE — this band previously carried the four recognition proofs. They are all
 * still on the page: the #1 ranking leads the Story stat card and the
 * Achievements section, CBSE and Microsoft appear in Affiliations with their
 * marks, and the 2,200-from-456 figure is in the Story checklist.
 */
export const heritageLede = {
  figure: '50',
  eyebrow: '1972 — Today',
  heading: 'Years of Sunbeam. Thirteen in Ballia.',
  body:
    'Half a century of the same conviction — that a school owes a child more than ' +
    'a curriculum — carried from Varanasi into Agarsanda.',
} as const;

/**
 * §04 Parent Quick Access — six destinations, all existing on the live site.
 * Deliberately no icons: docs/06 "no cards, no boxes, no icon circles".
 */
export const quickAccess = [
  { label: 'Admissions', desc: 'Process, dates and fees', href: '/admissions/' },
  { label: 'Transport', desc: '22 routes across Ballia', href: '/campus/transport/' },
  { label: 'Academic Calendar', desc: 'Terms, holidays and events', href: '/academics/academic-calendar/' },
  { label: 'Notice Board', desc: 'Official school notices', href: '/news-events/notices/' },
  { label: 'Results', desc: 'Student report card portal', href: school.external.results, external: true },
  { label: 'Contact', desc: 'Reach the school office', href: '/contact-us/' },
] as const;

/**
 * Content awaiting the client — mirrors docs/07-client-asset-requests.md.
 * Surfaced in code so nothing ships unnoticed.
 */
export const pending = {
  A1: 'Board results — Class X and XII, three sessions',
  A2: 'Professional campus photography — every image on this page',
  A3: 'Vision and Mission statement text; confirm primary motto/tagline',
  A4: 'Alumni video testimonials, names, batches, consent',
  A5: 'Rewritten body copy — homepage welcome, Principal, Director',
  A7: 'News, events and notices — content plus an update cadence owner',
  A8: 'Admission eligibility, age criteria, dates, fee data',
  A9: 'Decision on YouTube and X — maintain or remove (audit 14.3)',
  B1: 'Affiliation and partner logos, with permission to use each mark',
  B2: 'Vector logo originals — only an 816px raster exists',
} as const;
