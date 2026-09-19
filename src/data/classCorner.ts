/**
 * CLASS CORNER — the data behind /academics/class-corner/.
 *
 * ═══ WHAT THIS PAGE IS ═════════════════════════════════════════════════════
 *
 * The client asked (16 Sep 2026) for a Class Corner under Academics carrying
 * six things: class teachers, the class timetable, the student monitors' list,
 * exam in-charge details, and academic excellence.
 *
 * ⚠⚠ FOUR OF THE SIX EXIST AND TWO DO NOT, AND THE PAGE SAYS SO. Everything
 * below was located on the school's own live site on 16 September 2026. The two
 * that are missing are rendered as a stated gap, not quietly dropped and not
 * filled with a guess — a parent looking for the exam in-charge needs to know
 * the school has not published one yet, which is different from the page having
 * forgotten to mention it.
 *
 * ⚠⚠ THE STUDENT MONITORS' LIST WAS ASSUMED MISSING AND IS NOT. It was listed
 * as "pending, awaiting the school" when this work was scoped, because it has
 * no page of its own in the school's navigation. It is published — as a PDF
 * sitting on the CLASS TEACHERS page, under a second heading. Found by reading
 * that page rather than trusting the menu.
 *
 * ⚠ THESE LINK OUT TO THE SCHOOL'S OWN FILES; THEY ARE NOT COPIED IN. Same
 * reasoning as data/publications.ts: the documents live on the old WordPress
 * site, they are revised there each session, and a copy taken today goes stale
 * silently. `monitors-26-27.pdf` is dated in its own filename — it will be
 * replaced next session, and the link should keep working when it is.
 *
 * ⚠ THE TIMETABLE IS THE ONE THAT CANNOT BE LINKED FILE-BY-FILE. The school
 * publishes it as SEVENTY-TWO separate JPEGs across five grade groups, embedded
 * in a page, with no PDF and no per-class URL. Seventy-two hotlinks would be a
 * maintenance trap and copying them in would freeze a timetable that changes.
 * So this links to the page that holds them and names the five groups, which is
 * what a parent needs in order to find their child's.
 */

export interface CornerItem {
  id: string;
  title: string;
  /** What it is, in this project's voice — these are labels, not school copy. */
  body: string;
  icon: 'teacher' | 'clock' | 'badge' | 'exam' | 'person' | 'star';
  /** The real file or page. `null` means the school has not published it. */
  href: string | null;
  /** Shown on the card where the link is a document rather than a page. */
  kind?: 'PDF' | 'Image' | 'Page';
  /** Only on the two that do not exist yet — printed verbatim on the card. */
  pending?: string;
  /**
   * ⚠ WHAT THE SCHOOL OWES, rendered as chips beneath the pending text. These
   * name MISSING things, never facts: "name", not "Mr X". Adding a real value
   * here would turn a placeholder into a false claim.
   */
  needs?: string[];
}

export const cornerItems: CornerItem[] = [
  {
    id: 'class-teachers',
    title: 'Class Teachers',
    body: 'Every class and section with the teacher who takes it, as published by the school office.',
    icon: 'teacher',
    href: 'http://sunbeamballia.edu.in/wp-content/uploads/class-teacher-updated.pdf',
    kind: 'PDF',
  },
  {
    id: 'class-timetable',
    title: 'Class Timetable',
    body: 'Timetables for Nursery to KG-2, Classes I–II, III–V, VI–VIII and IX–XII.',
    icon: 'clock',
    href: 'https://sunbeamballia.edu.in/class-timetable/',
    kind: 'Page',
  },
  {
    id: 'student-monitors',
    title: 'Student Monitors',
    body: 'The monitors appointed for the 2026-27 session, class by class.',
    icon: 'badge',
    href: 'http://sunbeamballia.edu.in/wp-content/uploads/monitors-26-27.pdf',
    kind: 'PDF',
  },
  {
    id: 'exam-schedule',
    title: 'Examination Schedule',
    body: 'The examination schedule for the 2026-27 session.',
    icon: 'exam',
    href: 'http://sunbeamballia.edu.in/wp-content/uploads/WhatsApp-Image-2026-06-24-at-14.18.48.jpeg',
    kind: 'Image',
  },

  /* ── The two the school has not published ──────────────────────────────── */
  {
    id: 'exam-incharge',
    title: 'Examination In-charge',
    body: 'Who to contact about examination entries, dates and results.',
    icon: 'person',
    href: null,
    /* ⚠ VERBATIM ON THE CARD, AND FUTURE TENSE ON PURPOSE. It says what WILL go
       here and who it is owed by. No name, no designation, no phone number is
       invented — that is the whole reason this card exists in this form. */
    pending: 'Examination In-charge details will be updated here after confirmation from the school. For examination queries in the meantime, contact the school office.',
    needs: ['name', 'designation', 'contact details'],
  },
  {
    id: 'academic-excellence',
    title: 'Academic Excellence',
    body: 'Class-level achievements and academic honours.',
    icon: 'star',
    href: null,
    /* ⚠ THIS USED TO ADD "Board results are not published by the school
       either", WHICH WAS FALSE. The school files three years of Class X and XII
       results on its own letterhead; they are on /academics/board-results/.
       Academic Excellence is a separate, genuinely unpublished thing — a
       class-level achievements list — and the card now says only that. */
    /* ⚠ DESCRIBES THE SECTION'S PURPOSE, CLAIMS NO ACHIEVEMENT. Not one ranking,
       mark, topper or percentage appears here or may be added without the
       school's own list. */
    pending: 'This section will highlight the school’s academic achievements, student accomplishments and notable academic milestones. Official details will be added after confirmation from the school. Board examination results are published separately, on the Board Results page.',
    needs: ['the achievements list', 'the sessions it covers', 'consent for any named student'],
  },
];

/** The count check. Four live, two stated as pending. */
export const liveCount = cornerItems.filter((i) => i.href).length;
export const pendingCount = cornerItems.filter((i) => !i.href).length;
