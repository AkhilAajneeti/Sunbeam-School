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

  /* ⚠⚠ TWO CARDS WERE REMOVED HERE ON 19 SEP 2026, FOR TWO DIFFERENT REASONS.
     Neither is an oversight and neither should be re-added without asking.

     'academic-excellence' — NOT missing, MOVED. The school's two toppers boards
     are transcribed in data/toppers.ts and rendered in full by
     components/academics/Toppers.astro further down this same page. A card that
     only scrolled the reader to a section already below it was duplicating its
     own page.

     'exam-incharge' — removed at the client's request. The school has still not
     published who the Examination In-charge is; that gap is tracked in
     data/site.ts → pending A14 and in docs/07, it is simply no longer stated on
     the page. The footer below the cards already points anyone with an
     examination query at the school office.

     ⚠ EVERY REMAINING ITEM IS A LIVE DOCUMENT LINK. `pending` and `needs` on
     CornerItem are now unused, and the pending branch in ClassCornerPage.astro
     renders for nothing — both are kept deliberately, because the next item the
     school owes us will need them again. */
];

/** The count check. All four remaining items are live document links. */
export const liveCount = cornerItems.filter((i) => i.href).length;
export const pendingCount = cornerItems.filter((i) => !i.href).length;
