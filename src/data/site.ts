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
  /* ⚠ BOTH FOUNDERS ARE NAMED. This read "Dr. Amrit Lal 'Ishrat' Madhok and
     his wife" — one founder given a name and a doctorate, the other given a
     relationship to him. She has a name and the school publishes it, so it is
     here. The quotes are typographic (‘Ishrat’) because this string is printed
     inside prose, and a straight apostrophe next to a curly one in the same
     sentence is visibly wrong at display size. */
  founders: "Dr. Amrit Lal ‘Ishrat’ Madhok and Mrs. Deesh ‘Ishrat’ Madhok",

  openingStrength: 456,
  currentStrength: '2,700+',
  teachingStaff: '130+',

  board: 'CBSE',
  boardFull: 'Central Board of Secondary Education, Delhi',
  affiliationNo: '2131962',
  schoolCode: '70205',

  /**
   * ⚠ READ OFF THE BOARD'S OWN LETTER, NOT OFF A SCHOOL PAGE. Everything in
   * this block comes from AFFL.pdf — the Affiliation/Upgradation Letter the
   * school publishes at item 01 of its Mandatory Public Disclosure. The
   * /affiliation/ page carries only the number and the code; the letter carries
   * the period, the letter number and the UDISE code.
   *
   *   NO : CBSE/2131962/EX-00497-2526/2025-26/        Dated: 13/03/2024
   *   SUBJECT: Extension of General Affiliation up to Senior Secondary Level
   *   Affiliation No used as User ID for both OASIS and LOC/Registration → 2131962
   *   School No → 70205 · Affiliated for → Extension of General Affiliation
   *   Category → Extension of Affiliation
   *   Period of affiliation → 01.04.2025 to 31.03.2030
   *
   * ⚠ THE UDISE CODE IS OFF THE PRINCIPAL'S STAMP at the foot of that letter,
   * which reads "UDISE CODE: 09631300403 / CBSE Affi. No: 2131962 / School
   * Code: 70205". It appears nowhere else on the school's site — not on
   * /affiliation/, not in the Mandatory Public Disclosure table.
   */
  udise: '09631300403',
  affiliationPeriod: '01.04.2025 to 31.03.2030',
  affiliationLetterNo: 'CBSE/2131962/EX-00497-2526/2025-26',
  affiliationLetterDated: '13.03.2024',
  affiliationSubject: 'Extension of General Affiliation up to Senior Secondary Level',

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

  /**
   * ⚠⚠ THE DOMAIN ADDRESS, AND IT CLOSES FINDING X6 / DECISION C1 — which asked
   * for exactly this and had been open since the audit. The school supplied
   * eight addresses on its own domain; this is the general office one and it is
   * what the footer, the contact page, the parent-communication page, the alumni
   * panel and the feedback form all print.
   *
   * ⚠⚠ THE GMAIL IT REPLACED IS STILL ON THE SITE IN TWO PLACES, ON PURPOSE.
   *
   *   · data/disclosure.ts — "School email ID" in the Mandatory Public
   *     Disclosure is the CBSE table VERBATIM. It has to match what the school
   *     has actually filed with the board, not what it would prefer to publish.
   *     Change it when, and only when, the school confirms the filing is
   *     updated; until then the two differing is correct, not a bug.
   *   · data/career.ts — the hiring posters are transcribed as printed, and
   *     `recruitmentEmail` is read off them. A quotation does not get modernised.
   */
  email: 'school@sunbeamballia.edu.in',

  /**
   * THE DEPARTMENTAL INBOXES, all supplied by the school on its own domain.
   *
   * ⚠ EACH ONE IS PRINTED WHERE ITS SUBJECT LIVES, not scattered. Transport on
   * the transport page, the principal on the principal's page, accounts on the
   * fee page, and the whole set once on the contact page so none is orphaned.
   * Putting an address on a page it has nothing to do with misroutes real
   * parents, which is worse than not publishing it at all.
   */
  departments: {
    office: 'school@sunbeamballia.edu.in',
    principal: 'principal@sunbeamballia.edu.in',
    director: 'director@sunbeamballia.edu.in',
    administrator: 'administrator@sunbeamballia.edu.in',
    accounts: 'account@sunbeamballia.edu.in',
    transport: 'transport@sunbeamballia.edu.in',
    it: 'it@sunbeamballia.edu.in',
    digital: 'digital@sunbeamballia.edu.in',
  },

  /**
   * ⚠ THE RECRUITMENT INBOX, AND IT IS NOT `email` ABOVE. Read off the school's
   * own hiring posters in src/assets/jobs — it is printed on seven of the ten
   * (job-2, 3, 4, 5, 6, 7, 8, 10) and is plainly the address the school wants
   * applications sent to. `email` is the general office address and appears on
   * none of them; sending a CV there would be a guess.
   *
   * ⚠ job-9 PRINTS A SECOND ADDRESS, principalsunbeamballia@gmail.com, and it is
   * deliberately NOT recorded here. It appears on exactly one poster, alongside
   * this one, so it reads as a copy to the principal rather than the route in.
   * Recording both would make the career page ask an applicant to choose.
   */
  recruitmentEmail: 'appointmentsunbeamballia@gmail.com',

  social: {
    facebook: 'https://www.facebook.com/sunbeambui8413/',
    instagram: 'https://www.instagram.com/sunbeamballia/',
    linkedin: 'https://www.linkedin.com/in/sunbeamschoolballia70205/',
    // x + youtube withheld pending audit 14.3 decision (asset request A9).
  },

  /**
   * ⚠ THE ONE FLAG THAT TURNS THE ADMISSIONS PILL'S PULSE OFF.
   *
   * The masthead pill animates gently while admissions are open. When the intake
   * closes, set this to false and the pill stops moving everywhere at once — the
   * masthead and the mobile drawer both read it. It does NOT hide the button:
   * the registration form stays reachable, it simply stops calling attention to
   * itself, which is the difference between "closed" and "gone".
   *
   * ⚠ IT IS A FLAG AND NOT A DATE COMPARISON ON PURPOSE. A date would need the
   * school's actual open and close days, which are asset request A8 and have
   * never been supplied; a build-time `new Date()` would also freeze whatever
   * day the site was last deployed. One boolean, edited by a person who knows.
   */
  admissionsOpen: true,

  external: {
    applyNurseryToIX: 'https://sunbeamballia.edu.in/apply-online/',
    applyClassXI: 'https://sunbeamballia.edu.in/apply-online/',
    results: 'https://sbb.nascorptechnologies.com/',
    parentLogin: 'https://sbb.nascorptechnologies.com/',
    downloadTC: 'https://sunbeamballia.edu.in/download-tc/',

    /* The school's own results page, which is what its top bar's "Result" link
       opens — distinct from `results` above, the portal itself. */
    resultPage: 'https://sunbeamballia.edu.in/result/',

    /* ⚠ THE TWO DIRECT APPLICATION FORMS, read off the school's own top bar.
       They are deliberately NOT used for `applyNurseryToIX`/`applyClassXI`
       above: those feed generic "Apply online" buttons across the site and point
       at the school's own landing page, which survives a form being re-issued.
       These two carry session codes in the query string and are used only where
       the school itself uses them — the utility bar. */
    applyFormNurseryToIX: 'https://sbb.nascorptechnologies.com/gw/gls/onlineAppForms?code=KRnfFWgLwE3a7431k0',
    applyFormClassXI: 'https://sbb.nascorptechnologies.com/gw/adm/applyOnlineRegistration?fm=2',

    /* The school's own copies. Both are linked from its Mandatory Public
       Disclosure page; the letter is item 01 there. Recorded as https —
       the disclosure page prints http, and the host serves both. */
    affiliationLetter: 'https://sunbeamballia.edu.in/wp-content/uploads/AFFL.pdf',
    mandatoryDisclosure: 'https://sunbeamballia.edu.in/general-info/',
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
 * marks, and the 2,700-from-456 figure is in the Story checklist.
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
  /* ⚠ THIS CARD AND THE 'Notice Board' CARD BELOW ARE NOT THE SAME THING, AND
     THE DESCRIPTIONS ARE WHAT KEEPS THEM APART. This one is the CURRENT
     admissions notice — one document, the form dates a parent is looking for.
     The other is the archive of all 24 circulars the school has issued. Two
     cards in one row of six both saying 'notice' is only confusing if the
     descriptions do not say which is which, so do not shorten them to match. */
  { label: 'Admission Notice', desc: 'Form dates for Session 2026-27', href: '/admission-notice/' },
  { label: 'Transport', desc: '22 routes across Ballia', href: '/campus/transport/' },
  { label: 'Academic Calendar', desc: 'Terms, holidays and events', href: '/academics/academic-calendar/' },
  { label: 'Notice Board', desc: 'Every circular, all 24', href: '/news-events/notices/' },
  { label: 'Results', desc: 'Student report card portal', href: school.external.results, external: true },
  { label: 'Contact', desc: 'Reach the school office', href: '/contact-us/' },
] as const;

/**
 * Content awaiting the client. Reconciled with docs/07-client-asset-requests.md
 * on 19 Sep 2026 — every key here has a matching `### A…` heading there, and the
 * only headings there without a key here are the three CLOSED records (A5, A6,
 * A12), kept in the doc as history. Surfaced in code so nothing ships unnoticed.
 *
 * ⚠ THE TWO FILES DRIFTED ONCE AND IT COST US. This object said it "mirrors"
 * that document while three of its entries asked the school for material we
 * already held. If you change one, change the other in the same commit.
 *
 * ⚠⚠ AUDITED 17 SEP 2026, AND THREE ENTRIES WERE STALE — they asked for things
 * the school had ALREADY given us, which is worse than asking for nothing: it
 * kept pages rendering an absence next to data we held.
 *
 *   A1 claimed board results were missing. They are filed on the school's own
 *      letterhead (BRS.pdf) and have been transcribed in data/disclosure.ts →
 *      `boardResults` all along. Narrowed to the individual detail only.
 *   A3 asked for the Vision and the motto. Both arrived — the Vision panels are
 *      transcribed on /about/vision-mission/, and the motto is settled as
 *      `motto` above. Narrowed to the Mission statement, which really is absent.
 *   A5 asked for the homepage welcome copy and the full Principal's message.
 *      The client supplied the homepage copy with the hero brief, and the full
 *      Principal's message on 17 Sep 2026. REMOVED — it is all published.
 *
 * ⚠ AN ENTRY HERE MUST NAME SOMETHING WE DO NOT HAVE. Before adding one, grep
 * for the data — that is how all three above went stale.
 */
export const pending = {
  /* ⚠ NARROWED, NOT CLOSED. The three-year table IS published (/general-info/
     and /academics/board-results/). What is genuinely missing is below, and
     note that "appeared" is NOT derivable: BRS.pdf gives Registered and Passed,
     and registered ≠ appeared. */
  A1: 'Board results — the individual detail only: toppers with marks and consent, rank holders, and a count of students who APPEARED as distinct from registered',
  A2: 'Professional campus photography — every image on this page',
  /* ⚠ VISION AND MOTTO ARE DONE. This is the Mission alone. */
  A3: 'Mission statement text. The Vision is transcribed on /about/vision-mission/ and the motto is settled — neither is outstanding',
  A4: 'Alumni: video testimonials, names, batches and written consent; more Placed/Working alumni than the three on record; AND the school’s sign-off before the eighteen names on the "Vision To Reality" board are republished as searchable text',
  A7: 'News, events and notices — content plus an update cadence owner',
  A8: 'Admission eligibility, age criteria, dates, fee data',
  A9: 'Decision on YouTube and X — maintain or remove (audit 14.3)',
  /* ── Added 17 Sep 2026, from the client's seven-point list ──────────────── */
  /* ⚠ A12 IS CLOSED AND REMOVED — the Vice Principal's message and portrait
     arrived on 17 Sep 2026 and are live on /about/vice-principals-message/.
     The signature form "Mr. Pankaj Singh" came with them, which also settles
     the honorific the CBSE filing does not record. */
  /* ⚠ NARROWED 21 SEP 2026. This used to end "AND any record at all of Scouts &
     Guides, which is published nowhere" — the school supplied a press note and
     six photographs and that half is now largely closed. What is left of it is
     the camp's dates and the leaders' names. See docs/07 → A13. */
  A13: 'NCC cadet numbers; and for Scouts & Guides, the dates of the six-day camp and the names of the Scout leaders who ran it',
  A14: 'Class Corner — Examination In-charge details, and the Academic Excellence / achievements list',
  A15: 'The inter-house fixture calendar. The three houses themselves are known (Red, Yellow, Green) from the school’s Student Council page',
  /* Referenced by data/academics.ts → `awaiting`, which renders them on
     /academics/student-success/ in build-notes mode. They were missing here. */
  A11: 'University destinations as TEXT, year on year, with a cohort size beside them. The Session 2024-25 board is published as artwork and is shown on /academics/student-success/university-counselling/',
  A16: 'Scholarships — whether the school offers any, and on what basis',
  B1: 'Affiliation and partner logos, with permission to use each mark',
  B2: 'Vector logo originals — only an 816px raster exists',
} as const;
