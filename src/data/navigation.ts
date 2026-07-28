/**
 * NAVIGATION — docs/04-sitemap-homepage-ia.md § F1, F2.
 *
 * 8 main items. Career and Alumni sit adjacent at top level because the client
 * audit requires it verbatim (§6.1 and §12.1).
 *
 * Every mega-menu column header is itself a link to a real landing page —
 * no orphan headings, which was the primary failure of the current menu.
 */
import { school } from './site';

export interface NavChild {
  label: string;
  href: string;
  note?: string;
}

export interface NavColumn {
  /** Column header — always a real page, never a dead label. */
  header: string;
  href: string;
  children: NavChild[];
}

export interface NavItem {
  label: string;
  href: string;
  /** Items without columns are direct links — shallow by design. */
  columns?: NavColumn[];
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
 * Utility bar links.
 *
 * `tier` controls how the bar sheds links as it narrows, rather than letting
 * them wrap into a second line:
 *   1 — always visible (Notices · Results · Parent Login)
 *   2 — hidden below 1240px
 *   3 — hidden below 768px
 * Everything dropped here is still reachable from the drawer's Quick Links and
 * from the footer, so nothing becomes unreachable — Mandatory Public Disclosure
 * in particular keeps a permanent footer slot for regulatory findability.
 */
export const utilityLinks = [
  { label: 'Notices', href: '/news-events/notices/', tier: 1 },
  { label: 'Academic Calendar', href: '/academics/academic-calendar/', tier: 2 },
  { label: 'Results', href: school.external.results, external: true, tier: 1 },
  { label: 'Download TC', href: school.external.downloadTC, external: true, tier: 2 },
  //{ label: 'Parent Login', href: school.external.parentLogin, external: true, tier: 1 },
  { label: 'Mandatory Public Disclosure', href: '/mandatory-public-disclosure/', tier: 2 },
  { label: 'Contact', href: '/contact-us/', tier: 3 },
] as const;

export const mainNav: NavItem[] = [
  {
    label: 'About',
    href: '/about/',
    columns: [
      {
        header: 'The School',
        href: '/about/',
        children: [
          { label: 'History & Legacy', href: '/about/history-legacy/', note: '1972 Varanasi · 2013 Ballia' },
          { label: 'Vision, Mission & Values', href: '/about/vision-mission/' },
          { label: 'Inclusive Education', href: '/about/inclusive-education/' },
          { label: 'Golden Rules & Code of Conduct', href: '/about/code-of-conduct/' },
        ],
      },
      {
        header: 'Leadership',
        href: '/about/management/',
        children: [
          { label: "Director's Message", href: '/about/directors-message/' },
          { label: "Principal's Message", href: '/about/principals-message/' },
          { label: 'Management & Leadership', href: '/about/management/' },
          { label: 'Faculty', href: '/about/faculty/' },
        ],
      },
      {
        header: 'Standing',
        href: '/about/achievements/',
        children: [
          { label: 'Achievements & Recognition', href: '/about/achievements/' },
          { label: 'Affiliation & Recognitions', href: '/about/affiliation/' },
          { label: 'Policies & Committees', href: '/about/policies/' },
          { label: 'Mandatory Public Disclosure', href: '/mandatory-public-disclosure/' },
        ],
      },
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
    columns: [
      {
        header: 'Philosophy & Structure',
        href: '/academics/philosophy/',
        children: [
          { label: 'Academic Philosophy', href: '/academics/philosophy/' },
          { label: 'Academic Structure', href: '/academics/structure/' },
          { label: 'Streams & Subject Combinations', href: '/academics/structure/streams/' },
          { label: 'Curriculum', href: '/academics/philosophy/#curriculum' },
        ],
      },
      {
        header: 'Teaching & Learning',
        href: '/academics/teaching-learning/',
        children: [
          { label: 'Teaching Methodology', href: '/academics/teaching-learning/#methodology' },
          { label: 'STEM, Robotics & Coding', href: '/academics/teaching-learning/#stem' },
          { label: 'AI & Digital Literacy', href: '/academics/teaching-learning/#ai-digital' },
          { label: 'Laboratories & Library', href: '/academics/teaching-learning/#laboratories' },
        ],
      },
      {
        header: 'Assessment & Support',
        href: '/academics/assessment/',
        children: [
          { label: 'Assessment System', href: '/academics/assessment/#system' },
          { label: 'Academic Calendar', href: '/academics/academic-calendar/' },
          { label: 'Exam Schedule', href: '/academics/exam-schedule/' },
          { label: 'Syllabus (PRECEPT)', href: '/academics/resources/syllabus/' },
        ],
      },
      {
        header: 'Student Success',
        href: '/academics/student-success/',
        children: [
          { label: 'Board Results', href: '/academics/board-results/' },
          { label: 'Career Guidance & University Counselling', href: '/academics/student-success/#career' },
          { label: 'Olympiads & Scholarships', href: '/academics/student-success/#olympiads' },
          { label: 'Parent Partnership', href: '/academics/parent-partnership/' },
        ],
      },
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
      {
        header: 'Applying',
        href: '/admissions/',
        children: [
          { label: 'Admission Procedure', href: '/admissions/procedure/' },
          { label: 'Eligibility & Age Criteria', href: '/admissions/eligibility/' },
          { label: 'Admission Notice & Key Dates', href: '/admissions/notice/' },
          { label: 'Prospectus', href: '/admissions/prospectus/' },
        ],
      },
      {
        header: 'Before You Apply',
        href: '/admissions/fee-structure/',
        children: [
          { label: 'Fee Structure', href: '/admissions/fee-structure/' },
          { label: 'Uniform Catalogue', href: '/admissions/uniform-catalogue/' },
          { label: 'Orientation', href: '/admissions/orientation/' },
          { label: 'Admission FAQs', href: '/admissions/faqs/' },
        ],
      },
      {
        header: 'Get in Touch',
        href: '/admissions/enquire/',
        children: [
          { label: 'Book a Campus Visit', href: '/admissions/campus-visit/' },
          { label: 'Enquire', href: '/admissions/enquire/' },
          { label: 'Apply — Nursery to IX', href: school.external.applyNurseryToIX },
          { label: 'Apply — Class XI', href: school.external.applyClassXI },
        ],
      },
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
    label: 'Campus',
    href: '/campus/',
    columns: [
      {
        header: 'Campus Tour',
        href: '/campus/',
        children: [
          { label: 'Shooting Range', href: '/campus/shooting-range/' },
          { label: 'Auditorium — Sankalp & Naman Hall', href: '/campus/auditorium/' },
          { label: 'Conference Room', href: '/campus/conference-room/' },
          { label: 'Nalanda Library', href: '/campus/library/', note: '15,000+ books' },
        ],
      },
      {
        header: 'Learning Spaces',
        href: '/campus/laboratories/',
        children: [
          { label: 'Science Laboratories', href: '/campus/laboratories/' },
          { label: 'Smart Classrooms', href: '/campus/classrooms/', note: '30+ rooms, 49+ panels' },
          { label: 'Arts, Music & Dance', href: '/campus/arts/' },
          { label: 'Early Years Spaces', href: '/campus/early-years/' },
        ],
      },
      {
        header: 'Care & Access',
        href: '/campus/safety-security/',
        children: [
          { label: 'Safety & Security', href: '/campus/safety-security/' },
          { label: 'Transport & Bus Routes', href: '/campus/transport/', note: '22 routes' },
          { label: 'Sports Facilities & Grounds', href: '/campus/sports-facilities/' },
          { label: 'Infirmary & Health', href: '/campus/infirmary/' },
        ],
      },
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
    columns: [
      {
        header: 'Sport',
        href: '/beyond-academics/sports/',
        children: [
          { label: 'Sports at Sunbeam', href: '/beyond-academics/sports/' },
          { label: 'Inter-House Competitions', href: '/beyond-academics/houses/' },
          { label: 'Sports Achievements', href: '/beyond-academics/sports-achievements/' },
          { label: 'NCC & Scouts', href: '/beyond-academics/ncc/' },
        ],
      },
      {
        header: 'Culture & Service',
        href: '/beyond-academics/arts/',
        children: [
          { label: 'Performing & Visual Arts', href: '/beyond-academics/arts/' },
          { label: 'Clubs & Societies', href: '/beyond-academics/clubs/' },
          { label: 'Student Council & Leadership', href: '/beyond-academics/student-council/' },
          { label: 'Community Service', href: '/beyond-academics/community-service/' },
        ],
      },
      {
        header: 'Beyond the Gate',
        href: '/beyond-academics/excursions/',
        children: [
          { label: 'Excursions & Educational Tours', href: '/beyond-academics/excursions/' },
          { label: 'School Activities', href: '/beyond-academics/school-activities/' },
          { label: 'Workshops', href: '/beyond-academics/workshops/' },
          { label: 'Publications', href: '/beyond-academics/publications/' },
        ],
      },
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
  { label: 'News & Events', href: '/news-events/' },
  { label: 'Alumni', href: '/alumni/' },
  { label: 'Career', href: '/career/' },
];

/** Footer utility row — docs/06 §16 row 2. */
export const footerUtility = [
  { label: 'Notices', href: '/news-events/notices/' },
  { label: 'News & Events', href: '/news-events/' },
  { label: 'Alumni', href: '/alumni/' },
  { label: 'Career', href: '/career/' },
  { label: 'Results', href: school.external.results },
  { label: 'Mandatory Public Disclosure', href: '/mandatory-public-disclosure/' },
  { label: 'Privacy', href: '/privacy/' },
  { label: 'Accessibility', href: '/accessibility/' },
] as const;
