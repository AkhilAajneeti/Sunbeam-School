/**
 * NAVIGATION — docs/04-sitemap-homepage-ia.md § F1, F2.
 *
 * 8 main items. Career and Alumni sit adjacent at top level because the client
 * audit requires it verbatim (§6.1 and §12.1).
 *
 * Menu contents are scoped to the sections the audit names; anything it does not
 * list has been dropped from the menus rather than left as unowned surface.
 *
 * Columns carry no headings — every entry is a link, so a menu cannot present a
 * label that goes nowhere. Each group's landing page leads its own column.
 */
import { school } from './site';

export interface NavChild {
  label: string;
  href: string;
  note?: string;
}

export interface NavItem {
  label: string;
  href: string;
  /**
   * Mega-menu link groups — one array per column, all links, no headings.
   * Items without columns are direct links, shallow by design.
   */
  columns?: NavChild[][];
  /** Contextual CTA shown in the mega-menu's featured panel. */
  feature?: {
    eyebrow: string;
    title: string;
    body: string;
    href: string;
    cta: string;
    /** Asset brief for the featured image — docs/06 §02. */
    imageBrief: string;
  };
}

/**
 * Utility bar links — what a returning parent or student actually comes back
 * for, so they never scroll a persuasion page to reach it.
 *
 * Kept deliberately short. Academic Calendar now sits in the Academics menu and
 * the footer, Download TC and Parent Login are dormant external systems, and
 * Mandatory Public Disclosure keeps its permanent footer slot for regulatory
 * findability — none of them earn a place in a bar this size.
 *
 * `tier` controls how the bar sheds links as it narrows, rather than letting
 * them wrap into a second line:
 *   1 — always visible
 *   2 — hidden below 768px
 * Everything dropped is still reachable from the drawer's Quick Links and the
 * footer, so nothing becomes unreachable.
 */
export const utilityLinks = [
  { label: 'Notices', href: '/news-events/notices/', tier: 1 },
  { label: 'Results', href: school.external.results, external: true, tier: 1 },
  { label: 'Contact', href: '/contact-us/', tier: 2 },
] as const;

export const mainNav: NavItem[] = [
  {
    label: 'About Us',
    href: '/about/',
    // Audit §1, verbatim. The Chairman, Secretary and other dignitaries are
    // carried inside the History section rather than given their own links.
    columns: [
      [
        { label: 'History and establishment of the school', href: '/about/history-legacy/' },
        { label: 'Vision and Mission', href: '/about/vision-mission/' },
        { label: 'Legacy of the institution', href: '/about/history-legacy/#legacy' },
      ],
      [
        { label: "Director's Message", href: '/about/directors-message/' },
        { label: "Principal's Message", href: '/about/principals-message/' },
        // { label: 'Achievements & Recognition', href: '/about/achievements/' },
      ],
    ],
    feature: {
      eyebrow: 'Since 1972',
      title: 'Fifty years of Sunbeam. Thirteen in Ballia.',
      body: 'From 456 students in 2013 to more than 2,200 today.',
      href: '/about/history-legacy/',
      cta: 'Our history',
      imageBrief: 'Campus wide shot, 3:2 — establishing view of the Agarsanda campus',
    },
  },
  {
    label: 'Academics',
    href: '/academics/',
    // Audit §2 headings A–F only. The bullets beneath each one are page content,
    // not menu entries — carrying all 49 of them turned the panel into a wall.
    // §8's calendar and planner join them, being §-level items in their own right.
    columns: [
      [
        { label: 'Academic Philosophy', href: '/academics/philosophy/' },
        { label: 'Academic Structure', href: '/academics/structure/' },
        { label: 'Teaching & Learning', href: '/academics/teaching-learning/' },
        { label: 'Assessment Pattern', href: '/academics/assessment/' },
      ],
      [
        { label: 'Career Development & Student Success', href: '/academics/student-success/' },
        { label: 'Parent Partnership', href: '/academics/parent-partnership/' },
        // §8, kept as the single item the audit names it.
        { label: 'School Planner & Academic Calendar', href: '/academics/academic-calendar/' },
      ],
    ],
    feature: {
      eyebrow: 'Teaching & Learning',
      title: 'A Microsoft Showcase School',
      body: '100 teachers certified as Innovative Educator Experts.',
      href: '/academics/teaching-learning/',
      cta: 'How we teach',
      imageBrief: 'Robotics lab in use, 3:2 — students operating equipment, teacher present',
    },
  },
  {
    label: 'Admissions',
    href: '/admissions/',
    columns: [
      [
        { label: 'Admissions', href: '/admissions/' },
        { label: 'Admission Procedure', href: '/admissions/procedure/' },
        { label: 'Eligibility & Age Criteria', href: '/admissions/eligibility/' },
        { label: 'Admission Notice & Key Dates', href: '/admissions/notice/' },
        { label: 'Prospectus', href: '/admissions/prospectus/' },
      ],
      [
        { label: 'Fee Structure', href: '/admissions/fee-structure/' },
        // Audit §9 — presentation fix, but the link keeps its home here.
        { label: 'Uniform Catalogue', href: '/admissions/uniform-catalogue/' },
        { label: 'Orientation', href: '/admissions/orientation/' },
        { label: 'Admission FAQs', href: '/admissions/faqs/' },
      ],
      [
        { label: 'Book a Campus Visit', href: '/admissions/campus-visit/' },
        { label: 'Enquire', href: '/admissions/enquire/' },
        { label: 'Apply — Nursery to IX', href: school.external.applyNurseryToIX },
        { label: 'Apply — Class XI', href: school.external.applyClassXI },
      ],
    ],
    feature: {
      eyebrow: 'Admissions',
      title: 'Come and see the school',
      body: 'A visit tells you more than any brochure ever will.',
      href: '/admissions/campus-visit/',
      cta: 'Book a visit',
      imageBrief: 'Warm arrival moment, 3:2 — a child at the school gate',
    },
  },
  {
    label: 'Campus Tour',
    href: '/campus/',
    // Audit §3's facility list verbatim, with Facilities and Infrastructure
    // merged into the tour rather than kept as separate menu sections. §7 adds
    // Transport, named exactly as the audit names it.
    columns: [
      [
        { label: 'Shooting Range', href: '/campus/shooting-range/' },
        { label: 'Auditorium', href: '/campus/auditorium/' },
        { label: 'Conference Room', href: '/campus/conference-room/' },
      ],
      [
        { label: 'Science Laboratories', href: '/campus/laboratories/' },
        { label: 'Library', href: '/campus/library/' },
        { label: 'Sports Facilities', href: '/campus/sports-facilities/' },
      ],
      [
        { label: 'Safety & Security', href: '/campus/safety-security/' },
        { label: 'Transport', href: '/campus/transport/' },
      ],
    ],
    feature: {
      eyebrow: 'The Campus',
      title: 'A shooting range, and 15,000 books',
      body: 'Facilities most district schools simply do not have.',
      href: '/campus/',
      cta: 'Take the tour',
      imageBrief: 'Shooting range in use, 3:2 — the rarest facility the school has',
    },
  },
  {
    label: 'Beyond Academics',
    href: '/beyond-academics/',
    // Audit §4 headings only — facilities, games, participation, inter-house and
    // coaching are bullets under "Sports & Games", so they live on that page.
    // Achievements stay a separate entry because §4 asks for them shown apart.
    // §5 keeps School Activities here.
    columns: [
      [
        { label: 'Sports & Games', href: '/beyond-academics/sports/' },
        { label: 'Achievements', href: '/beyond-academics/achievements/' },
        { label: 'Excursions & Educational Tours', href: '/beyond-academics/excursions/' },
      ],

    ],
    feature: {
      eyebrow: 'Beyond Academics',
      title: 'Every child plays',
      // 15 = the school's own published lists: 7 indoor + 8 outdoor. The house
      // count is NOT verified anywhere on the live site, so it is not claimed.
      body: 'Fifteen sports, indoor and outdoor, and room to take part.',
      href: '/beyond-academics/sports/',
      cta: 'Sport at Sunbeam',
      imageBrief: 'Sports participation mid-game, 3:2 — not a podium shot',
    },
  },
  {
    label: 'Latest News & Events',
    href: '/news-events/',
    // Audit §10 nests Notices here. §11's list (achievements, events,
    // competitions, workshops, celebrations, announcements) says what the page
    // must keep current — it is the section's content, not eight menu rows.
    columns: [
      [
        { label: 'Latest News & Events', href: '/news-events/' },
        { label: 'Notices', href: '/news-events/notices/' },
      ],
    ],
    feature: {
      eyebrow: 'Notice Board',
      title: 'Official notices, in one place',
      body: 'Circulars and announcements as they are issued.',
      href: '/news-events/notices/',
      cta: 'Read notices',
      imageBrief: 'Notice board or assembly announcement, 3:2 — documentary, not staged',
    },
  },
  {
    label: 'Alumni',
    href: '/alumni/',
    // Audit §12.2 — "Include an Alumni Registration form to encourage former
    // students to reconnect with the school."
    columns: [
      [
        { label: 'Alumni', href: '/alumni/' },
        { label: 'Alumni Registration', href: '/alumni/registration/' },
      ],
    ],
    feature: {
      eyebrow: 'Alumni',
      title: 'Tell us where you are now',
      body: 'Register to reconnect with the school and with your year group.',
      href: '/alumni/registration/',
      cta: 'Register',
      imageBrief: 'Alumni gathering or returning student on campus, 3:2 — candid',
    },
  },
  { label: 'Career', href: '/career/' },
];

/**
 * Footer utility row — docs/06 §16 row 2. Also the safety net for what the top
 * bar sheds: Mandatory Public Disclosure is CBSE-required and must stay
 * findable regardless of how short the utility bar gets.
 */
export const footerUtility = [
  { label: 'Admissions', href: '/admissions/' },
  { label: 'Uniform Catalogue', href: '/admissions/uniform-catalogue/' },
  { label: 'Notices', href: '/news-events/notices/' },
  { label: 'Latest News & Events', href: '/news-events/' },
  { label: 'Alumni', href: '/alumni/' },
  { label: 'Alumni Registration', href: '/alumni/registration/' },
  { label: 'Career', href: '/career/' },
  { label: 'Results', href: school.external.results },
  { label: 'Download TC', href: school.external.downloadTC },
  { label: 'Mandatory Public Disclosure', href: '/mandatory-public-disclosure/' },
  { label: 'Contact', href: '/contact-us/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Accessibility', href: '/accessibility/' },
] as const;
