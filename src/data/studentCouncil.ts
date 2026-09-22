/**
 * THE STUDENT COUNCIL — the data behind /beyond-academics/student-council/.
 *
 * ═══ SOURCE — THE SCHOOL'S OWN COUNCIL BOARD, 2026-27 ══════════════════════
 *
 * ⚠⚠ EVERY NAME AND EVERY POST IS TRANSCRIBED FROM THE PRINTED BOARD the
 * school supplied on 22 September 2026: "COUNCIL MEMBERS 2026-27", a designed
 * plate carrying a photograph, a name and a post for all forty-five holders —
 * twenty-nine senior, sixteen junior. The board is in
 * src/assets/council/StudentCouncil.jpeg and is shown whole on the page.
 * NOTHING HERE IS WRITTEN BY THIS PROJECT. These are named children, and a
 * post invented beside a real child's name is a claim about that child.
 *
 * ⚠⚠ THIS REPLACED AN EARLIER, DIFFERENT COUNCIL — READ THIS BEFORE "FIXING"
 * ANYTHING. Until today this file held thirty-four holders transcribed from
 * https://sunbeamballia.edu.in/student-council/ (read 16 Sep 2026), which
 * states no session. That list names a DIFFERENT Head Boy (Master Ashish
 * Verma), a different Head Girl and a largely different council.
 *
 * The board is treated as the newer record, on three pieces of evidence:
 *   · it states its session outright — 2026-27 — and the earlier list states
 *     none at all;
 *   · 2026-27 is the session actually running as this is written;
 *   · several students appear in BOTH lists in a more senior post on the
 *     board — Sarthak Goel moves from Vice Captain of Yellow House to Head
 *     Boy, Jagriti Pandey from Vice Captain of Green House to Captain of Hope
 *     House, Riddhi Sharma from Jr. Health & Hygiene Inspector to junior Head
 *     Girl. Students moving up is what a new session looks like; it is not
 *     what two versions of one list look like.
 *
 * ⚠ THAT INFERENCE IS FLAGGED FOR THE SCHOOL. It is the only judgement in this
 * file, and it is about which of two real records is current — not about any
 * child. If the school says the website list is the current one, this file
 * goes back to it; the earlier transcription is in git history at the commit
 * before 22 Sep 2026.
 *
 * ═══ WHAT THE BOARD SETTLED ════════════════════════════════════════════════
 *
 * ⚠ "PREFECT", NOT "PERFECT". The old list read HEAD PERFECT, VICE HEAD
 * PERFECT and CAREER COUNSELING PERFECT, flagged here as near-certainly a typo
 * that this project would not silently rewrite. The board prints Head Prefect,
 * Vice Head Prefect and Career Counselling Prefect. Question closed.
 *
 * ⚠ "GOEL", NOT "GOAL". Same flag, same answer: the board prints Sarthak Goel.
 *
 * ⚠ THE HOUSES ARE NAMED BY WHAT THEY STAND FOR, NOT BY COLOUR. The board says
 * Love House, Joy House and Hope House where the old list said Red, Yellow and
 * Green. They are the same three houses: data/sports.ts records Red — Love,
 * Yellow — Joy, Green — Hope, from the school's own clubs page. The `house`
 * field below keeps the colour key so the page's existing dots still work;
 * the printed post keeps the board's wording.
 *
 * ═══ SPELLINGS THAT LOOK WRONG AND ARE THE BOARD'S OWN ═════════════════════
 *
 * ⚠⚠ DO NOT CORRECT THESE. Each is reproduced exactly as printed:
 *   · "Adiyta Verma" — almost certainly Aditya. Almost is not confirmed.
 *   · "Health & Hygine Inspector" on the JUNIOR council, while the senior
 *     council prints "Health & Hygiene Inspector". Both are on one board.
 *   · "Sport Vice Captain" (singular) beside "Sports Captain" (plural).
 *   · "Health & Hygiene Sub. Inspector" — the board's own abbreviation.
 * They are flagged to the school. Fix them HERE, in one place, if confirmed.
 *
 * ⚠ NO HONORIFICS. The old website list prefixed "Master" and "Miss"; the
 * board prints bare names and so does this.
 *
 * ⚠ NO CLASSES, NO INDIVIDUAL PHOTOGRAPHS CROPPED OUT, NO ACHIEVEMENTS. The
 * board carries a headshot per child; those are NOT extracted into the page as
 * individual portraits. The plate is shown whole, as the school designed it.
 * Anything more about a named child is not ours to add.
 */

export interface CouncilPost {
  /** The post, in the board's own words. */
  post: string;
  /** The holder, exactly as printed. */
  name: string;
  /** Set only on the four school-wide leadership posts in each council. */
  lead?: boolean;
  /**
   * ⚠ THE COLOUR KEY, NOT THE BOARD'S WORD. The board says Love/Joy/Hope; this
   * maps to the colour the same house carries in data/sports.ts so the page's
   * dots keep working. Love → red, Joy → yellow, Hope → green.
   */
  house?: 'red' | 'yellow' | 'green';
}

/**
 * ⚠ THE SCHOOL'S OWN INTRODUCTORY LINE, verbatim, including its comma splice.
 * From their student-council page. It describes the council in general and is
 * not tied to a session, so it survives the list being replaced.
 */
export const intro =
  'Our school gives the opportunities to students to prove their qualities, may it be at school level or at classroom level.';

/** ⚠ STATED BY THE BOARD ITSELF — "COUNCIL MEMBERS 2026-27". */
export const session: string | null = '2026-27';

/** The board's own tagline, printed bottom-right. */
export const tagline = '…Leadership personified';

/** Twenty-nine posts, in the board's own reading order. */
export const senior: CouncilPost[] = [
  { post: 'Head Boy', name: 'Sarthak Goel', lead: true },
  { post: 'Head Girl', name: 'Richa Gupta', lead: true },
  { post: 'Vice Head Boy', name: 'Ujwal Pratap Singh', lead: true },
  { post: 'Vice Head Girl', name: 'Swati Tiwari', lead: true },

  { post: 'Captain, Love House', name: 'Amna Meraj', house: 'red' },
  { post: 'Captain, Joy House', name: 'Anubhav Yadav', house: 'yellow' },
  { post: 'Captain, Hope House', name: 'Jagriti Pandey', house: 'green' },

  { post: 'Secretary General', name: 'Shristi Gupta' },
  { post: 'Vice Captain, Love House', name: 'Shaurya Vardhan Singh', house: 'red' },
  { post: 'Vice Captain, Joy House', name: 'Palak Verma', house: 'yellow' },
  { post: 'Vice Captain, Hope House', name: 'Manshi Rai', house: 'green' },
  { post: 'Vice Cultural Head', name: 'Harshita Singh' },
  { post: 'Vice Head Prefect', name: 'Shruti Pathak' },
  /* ⚠ "Sport", singular, on the board — beside "Sports Captain". */
  { post: 'Sport Vice Captain', name: 'Ritika Singh' },
  { post: 'Sports Captain', name: 'Rudra Pratap Singh' },

  { post: 'Health & Hygiene Inspector', name: 'Ayushi Gupta' },
  { post: 'Health & Hygiene Sub. Inspector', name: 'Ragini' },
  /* ⚠ "Adiyta" is the board's spelling. See the header. */
  { post: 'Career Counselling Prefect', name: 'Adiyta Verma' },
  { post: 'Vice Discipline Head', name: 'Ankit Kumar' },
  { post: 'Discipline Head', name: 'Bhoomi Soni' },
  { post: 'Deputy Cyber Head', name: 'Arya Mishra' },
  { post: 'Cyber Head', name: 'Deepak Kumar' },
  { post: 'Literary Head', name: 'Divyansh Shekhar Shukla' },

  { post: 'AI & Robotics Head', name: 'Gaurav Singh' },
  { post: 'Head Prefect', name: 'Madeeha Najam' },
  { post: 'Financial Literacy Head', name: 'Shivangi Yadav' },
  { post: 'Social Outreach Prefect', name: 'Soumya Singh' },
  { post: 'Cultural Head', name: 'Supriya Singh' },
  { post: 'NCC Head', name: 'Shuryansh Singh' },
];

/** Sixteen posts, in the board's own reading order. */
export const junior: CouncilPost[] = [
  { post: 'Head Boy', name: 'Dhairya Agrawal', lead: true },
  { post: 'Head Girl', name: 'Riddhi Sharma', lead: true },
  { post: 'Vice Head Boy', name: 'Kanishk Yadav', lead: true },
  { post: 'Vice Head Girl', name: 'Shanvi Tripathi', lead: true },

  { post: 'Captain, Love House', name: 'Ravjot Kaur', house: 'red' },
  { post: 'Captain, Joy House', name: 'Shashwat Chaudhary', house: 'yellow' },
  { post: 'Captain, Hope House', name: 'Samarth Agrawal', house: 'green' },
  { post: 'Vice Captain, Love House', name: 'Mandavi Pandey', house: 'red' },
  { post: 'Vice Captain, Joy House', name: 'Aradhya Jha', house: 'yellow' },
  { post: 'Vice Captain, Hope House', name: 'Surya Pratap Mishra', house: 'green' },

  { post: 'Cultural Head', name: 'Shambhavi Srivastava' },
  { post: 'Literary Head', name: 'Gargi Pathak' },
  /* ⚠ "Hygine" is the board's spelling on the JUNIOR council only. */
  { post: 'Health & Hygine Inspector', name: 'Rudra Gupta' },
  { post: 'Discipline Head', name: 'Shreysh Kumar Gupta' },
  { post: 'Sports Captain', name: 'Anamika Pandey' },
  { post: 'Sports Vice Captain', name: 'Kavya Gupta' },
];

/**
 * The count check — 45 (29 senior + 16 junior). Count the faces on the board
 * against this before shipping an edit. If this number moves, somebody was
 * dropped or duplicated.
 */
export const totalPosts = senior.length + junior.length;
export const seniorCount = senior.length;
export const juniorCount = junior.length;
