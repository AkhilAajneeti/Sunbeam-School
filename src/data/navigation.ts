/**
 * NAVIGATION — docs/04-sitemap-homepage-ia.md § F1, F2.
 *
 * TEN main items — the audit's own numbered sections, in the audit's order.
 * Of its 13 sections, §9 Uniform Catalogue is not in use, §13 Alumni
 * Testimonials is a homepage band rather than a destination, and §10 Notices
 * is reached from Latest News & Events and the utility bar rather than from a
 * menu item of its own. That leaves §1–§8, §11 and §12.
 *
 * Menu contents are scoped to the sections the audit names; anything it does not
 * list has been dropped from the menus rather than left as unowned surface.
 * There is no Admissions item: the audit never mentions one.
 *
 * Columns carry no headings — every entry is a link, so a menu cannot present a
 * label that goes nowhere. Each group's landing page leads its own column.
 */
import { school } from "./site";

/* Preview art for the mega menu's right-hand panel. Imported explicitly rather
   than globbed: there are ten of them, each chosen for a specific destination,
   and a glob would make it impossible to see at a glance which link shows what.
   All are the school's own photography. */
import imgCampus from "../assets/photos/sunbeem-1.jpg";
import imgChairman from "../assets/photos/Chairman-sunbeam.jpg";
import imgDirector from "../assets/photos/directorImage.jpeg";
import imgPrincipal from "../assets/photos/sb-principal.jpg";
import imgLibrary from "../assets/library/DSC_1224 copy.jpg";
import imgChem from "../assets/chem lab/DSC_1262 copy.jpg";
import imgComputer from "../assets/computer lab/DSC_1204 copy.jpg";
import imgJosh from "../assets/JOSH GROUND/DSC_1283 copy.jpg";
import imgBasket from "../assets/basket ball/DSC_1212 copy.jpg";
import imgActivity from "../assets/activity learning lab/DSC_1215 copy.jpg";

export interface NavChild {
  label: string;
  href: string;
  note?: string;
  /**
   * Mega-menu card fields. All optional — a link with none of them still
   * renders, it simply shows as a plain card, so adding a destination never
   * requires filling in three extra properties first.
   */
  icon?: string;
  /** One line on the card. Says what the page is FOR, never restates the title. */
  desc?: string;
  /** Art for the preview panel when this card is hovered. */
  img?: ImageMetadata;
  /**
   * Second level. Every href below points at a section that VERIFIABLY exists —
   * each one was read off the built HTML rather than assumed, because a submenu
   * of dead anchors is worse than no submenu at all. A link with no real
   * sections gets no children, and therefore no expand arrow.
   */
  children?: NavChild[];
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
  { label: "Notices", href: "/news-events/notices/", tier: 1 },
  { label: "Results", href: school.external.results, external: true, tier: 1 },
  /* ⚠ CONTACT WAS REMOVED FROM THIS BAR ON THE CLIENT'S INSTRUCTION. It is not
     unreachable: the footer carries it, the drawer's quick links carry it, and
     the admissions helpline sits at the other end of this same bar — which is
     the thing a parent actually wants when they think "contact". */
] as const;

export const mainNav: NavItem[] = [
  {
    label: "About Us",
    href: "/about/",
    // Audit §1, verbatim. The Chairman, Secretary and other dignitaries are
    // carried inside the History section rather than given their own links.
    columns: [
      [
        {
          label: "History and establishment of the school",
          href: "/about/history-legacy/",
          icon: "school",
          desc: "From Varanasi in 1972 to Agarsanda in 2013.",
          img: imgCampus,
        },
        {
          label: "Vision and Mission",
          href: "/about/vision-mission/",
          icon: "compass",
          desc: "What the school is for, in its own words.",
          img: imgCampus,
        },
        {
          label: "Legacy of the institution",
          href: "/about/history-legacy/#leadership",
          icon: "badge",
          desc: "The Chairman, Secretary and dignitaries behind it.",
          img: imgChairman,
        },
      ],
      [
        {
          label: "Director's Message",
          href: "/about/directors-message/",
          icon: "teacher",
          desc: "Dr. Kunwar Arun Singh on the year ahead.",
          img: imgDirector,
        },
        {
          label: "Principal's Message",
          href: "/about/principals-message/",
          icon: "students",
          desc: "Mrs. Arpita Singh on daily school life.",
          img: imgPrincipal,
        },
        // { label: 'Achievements & Recognition', href: '/about/achievements/' },
      ],
    ],
    feature: {
      eyebrow: "Since 1972",
      title: "Fifty years of Sunbeam. Thirteen in Ballia.",
      body: "From 456 students in 2013 to more than 2,700 today.",
      href: "/about/history-legacy/",
      cta: "Our history",
      imageBrief:
        "Campus wide shot, 3:2 — establishing view of the Agarsanda campus",
    },
  },
  {
    label: "Academics",
    href: "/academics/",
    // Audit §2 headings A–F only. The bullets beneath each one are page content,
    // not menu entries — carrying all 49 of them turned the panel into a wall.
    // §8's calendar and planner join them, being §-level items in their own right.
    columns: [
      [
        {
          label: "Academic Philosophy",
          href: "/academics/philosophy/",
          icon: "bulb",
          desc: "Teaching philosophy, curriculum and affiliation.",
          img: imgActivity,
        },
        {
          label: "Academic Structure",
          href: "/academics/structure/",
          icon: "school",
          desc: "Pre-primary to senior secondary, and the streams.",
          img: imgCampus,
        },
        {
          label: "Teaching & Learning",
          href: "/academics/teaching-learning/",
          icon: "panel",
          desc: "Smart classrooms, STEM, robotics and the labs.",
          img: imgComputer,
        },
        {
          label: "Assessment Pattern",
          href: "/academics/assessment/",
          icon: "badge",
          desc: "Assessment, homework, PTMs and remedial support.",
          img: imgChem,
          /* Audit §2.D names seven topics under Assessment Pattern and marks
             them MUST. Each now has a page: five new ones under this route, and
             two that already existed and were NOT duplicated —

               · Assessment System is this page. The six-step cycle on it is
                 exactly that topic, so the row points at the parent rather than
                 minting a second page that repeats it.
               · Academic Calendar keeps its own route, which audit §8 requires
                 as an interactive page. A second calendar would split one
                 destination in two and one of them would go stale.

             ⚠ EVERY href IS A ROUTE, NOT AN ANCHOR. An earlier pass pointed four
             of these at `#homework`-style sections on the parent page. Those are
             now pages, so the anchors are gone and the hrefs move with them —
             leaving them would have produced exactly the submenu of dead anchors
             the note on `children` warns about. */
          children: [
            { label: "Assessment System", href: "/academics/assessment/" },
            { label: "Homework Policy", href: "/academics/assessment/homework-policy/" },
            { label: "Remedial Support", href: "/academics/assessment/remedial-support/" },
            { label: "Mentoring", href: "/academics/assessment/mentoring/" },
            { label: "Academic Calendar", href: "/academics/academic-calendar/" },
            { label: "Parent–Teacher Meetings", href: "/academics/assessment/parent-teacher-meetings/" },
            { label: "Competitive Exam Preparation", href: "/academics/assessment/competitive-exam-preparation/" },
          ],
        },
      ],
      [
        {
          label: "Career Development & Student Success",
          href: "/academics/student-success/",
          icon: "cap",
          desc: "Counselling, board results, olympiads, scholarships.",
          img: imgPrincipal,
        },
        {
          label: "Parent Partnership",
          href: "/academics/parent-partnership/",
          icon: "heart",
          desc: "Orientation, forum, workshops and communication.",
          img: imgCampus,
        },
        // §8, kept as the single item the audit names it.
      ],
    ],
    feature: {
      eyebrow: "Teaching & Learning",
      title: "A Microsoft Showcase School",
      body: "100 teachers certified as Innovative Educator Experts.",
      href: "/academics/teaching-learning/",
      cta: "How we teach",
      imageBrief:
        "Robotics lab in use, 3:2 — students operating equipment, teacher present",
    },
  },
  {
    label: "Campus Tour",
    href: "/campus/",
    // Audit §3's facility list verbatim, with Facilities and Infrastructure
    // merged into the tour rather than kept as separate menu sections. §7 adds
    // Transport, named exactly as the audit names it.
    columns: [
      [
        {
          label: "Campus Tour",
          href: "/campus/",
          icon: "field",
          desc: "Sixty-eight photographs, room by room.",
          img: imgCampus,
        },
        {
          label: "Safety & Security",
          href: "/campus/safety-security/",
          icon: "shield",
          desc: "Guards, CCTV, fire equipment and transport.",
          img: imgCampus,
        },
        {
          label: "Facilities & Infrastructure",
          href: "/campus/facilities-infrastructure/",
          icon: "flask",
          desc: "Forty-seven facilities across six groups.",
          img: imgLibrary,
        },
      ],
    ],
    feature: {
      eyebrow: "The Campus",
      title: "A shooting range, and 17,574 books",
      body: "Facilities most district schools simply do not have.",
      href: "/campus/",
      cta: "Take the tour",
      imageBrief:
        "Shooting range in use, 3:2 — the rarest facility the school has",
    },
  },
  {
    label: "Beyond Academics",
    /* POINTS AT THE SPORTS PAGE, NOT AT A SECTION INDEX, because there is no
       section index: `/beyond-academics/` is a 404 and clicking the top-level
       item took the reader nowhere. Sports & Games is the only page built under
       this branch, so it is where the parent leads until an index exists.
       Restore this to "/beyond-academics/" the moment that page is built. */
    href: "/beyond-academics/sports/",
    // Audit §4 headings only — facilities, games, participation, inter-house and
    // coaching are bullets under "Sports & Games", so they live on that page.
    // Achievements stay a separate entry because §4 asks for them shown apart.
    // §5 keeps School Activities here.
    columns: [
      [
        {
          label: "Sports & Games",
          href: "/beyond-academics/sports/",
          icon: "ball",
          desc: "Fifteen sports, indoor and outdoor.",
          img: imgBasket,
        },
        {
          label: "Achievements",
          href: "/beyond-academics/achievements/",
          icon: "target",
          desc: "District, state and national honours.",
          img: imgJosh,
        },
        {
          label: "Excursions & Educational Tours",
          href: "/beyond-academics/excursions/",
          icon: "globe",
          desc: "Trips, expeditions and field visits.",
          img: imgJosh,
        },
      ],
    ],
    feature: {
      eyebrow: "Beyond Academics",
      title: "Every child plays",
      // 15 = the school's own published lists: 7 indoor + 8 outdoor. The house
      // count is NOT verified anywhere on the live site, so it is not claimed.
      body: "Fifteen sports, indoor and outdoor, and room to take part.",
      href: "/beyond-academics/sports/",
      cta: "Sport at Sunbeam",
      imageBrief: "Sports participation mid-game, 3:2 — not a podium shot",
    },
  },
  // §5 · School Activities — its own numbered section, so its own menu item.
  {
    label: "School Activities",
    href: "/beyond-academics/school-activities/",
  },
  // §6 · "The Career section should be available directly on the main
  // navigation menu for easier accessibility to prospective applicants."
  { label: "Career", href: "/career/" },
  // §7 · Transport.
  { label: "Transport", href: "/campus/transport/" },
  // §8 · School Planner & Academic Calendar. Also kept inside the Academics
  // menu, because §8 asks for it to sit under Academics as well.

  {
    label: "News & Events",
    href: "/news-events/",
    /* ⚠ FOUR ROUTES AND TWO ANCHORS — the split is by how much content there is,
       not by taste.

       Audit §11 names six things this section must keep current. Four of them
       turned out to have a page's worth of published material behind them once
       the school's own site was read properly: fourteen workshops with named
       trainers, thirty-five dated events, a full district-championship results
       table. Those get routes — /news-events/workshops/, /competitions/,
       /celebrations/, /school-events/ — built from data/newsPages.ts.

       The other two do NOT, and forcing a route on them would produce two thin
       pages that rot:
         · Recent achievements → /beyond-academics/achievements/ already exists.
           A second achievements page splits one story across two URLs and one
           of them goes stale.
         · Important announcements → the school's own /notice/ and
           /admission-notice/ pages are EMPTY. There is nothing to build from
           until assets A7 and C7 land, so it stays a section on the index.

       An earlier pass removed this dropdown entirely, when it held only "News &
       Events" and "Notices" — two rows for one page, which was a menu that
       existed to look like a menu. Six named destinations is a different thing.

       ⚠ THE TWO REMAINING ANCHOR hrefs MUST MATCH A SECTION id ON THE INDEX:
       `achievements` and `announcements`, set from `streams` in
       data/newsEvents.ts. Rename an id there and this menu points at nothing,
       silently. */
    columns: [
      [
        {
          label: "Recent achievements",
          href: "/news-events/#achievements",
          icon: "badge",
          desc: "What the school has just won.",
          img: imgCampus,
        },
        {
          label: "School events",
          href: "/news-events/school-events/",
          icon: "hall",
          desc: "The guests it brings through the gate.",
          img: imgCampus,
        },
        {
          label: "Competitions",
          href: "/news-events/competitions/",
          icon: "target",
          desc: "Entered, hosted, and placed.",
          img: imgCampus,
        },
      ],
      [
        {
          label: "Workshops",
          href: "/news-events/workshops/",
          icon: "speech",
          desc: "How the school trains its teachers.",
          img: imgCampus,
        },
        {
          label: "Celebrations",
          href: "/news-events/celebrations/",
          icon: "music",
          desc: "The school year, marked.",
          img: imgCampus,
        },
        {
          label: "Important announcements",
          href: "/news-events/#announcements",
          icon: "mail",
          desc: "What parents need to know.",
          img: imgCampus,
        },
      ],
    ],
    feature: {
      eyebrow: "Notice Board",
      title: "Official notices, in one place",
      body: "Circulars and announcements as they are issued.",
      href: "/news-events/notices/",
      cta: "Read notices",
      imageBrief:
        "Notice board or assembly announcement, 3:2 — documentary, not staged",
    },
  },
  {
    label: "Alumni",
    href: "/alumni/",
    // Audit §12.2 — "Include an Alumni Registration form to encourage former
    // students to reconnect with the school."
    columns: [
      [
        {
          label: "Alumni",
          href: "/alumni/",
          icon: "students",
          desc: "Where Sunbeam Ballia students are now.",
          img: imgCampus,
        },
        {
          label: "Alumni Registration",
          href: "/alumni/registration/",
          icon: "badge",
          desc: "Reconnect with the school and your year group.",
          img: imgLibrary,
        },
      ],
    ],
    feature: {
      eyebrow: "Alumni",
      title: "Tell us where you are now",
      body: "Register to reconnect with the school and with your year group.",
      href: "/alumni/registration/",
      cta: "Register",
      imageBrief:
        "Alumni gathering or returning student on campus, 3:2 — candid",
    },
  },
];

/**
 * Footer utility row — docs/06 §16 row 2. Also the safety net for what the top
 * bar sheds: Mandatory Public Disclosure is CBSE-required and must stay
 * findable regardless of how short the utility bar gets.
 */
export const footerUtility = [
  { label: "Admissions", href: "/admissions/" },
  { label: "Uniform Catalogue", href: "/admissions/uniform-catalogue/" },
  {
    label: "Notices",
    href: "/news-events/notices/",
    icon: "log",
    desc: "Official circulars as they are issued.",
    img: imgCampus,
  },
  { label: "Latest News & Events", href: "/news-events/" },
  {
    label: "Alumni",
    href: "/alumni/",
    icon: "students",
    desc: "Where Sunbeam Ballia students are now.",
    img: imgCampus,
  },
  {
    label: "Alumni Registration",
    href: "/alumni/registration/",
    icon: "badge",
    desc: "Reconnect with the school and your year group.",
    img: imgLibrary,
  },
    { label: "Career", href: "/career/" },
  // { label: "Results", href: school.external.results },
  // { label: "Download TC", href: school.external.downloadTC },
  {
    label: "Mandatory Public Disclosure",
    href: "/mandatory-public-disclosure/",
  },
  { label: "Contact", href: "/contact-us/" },
  { label: "Privacy", href: "/privacy/" },
  { label: "Accessibility", href: "/accessibility/" },
] as const;
