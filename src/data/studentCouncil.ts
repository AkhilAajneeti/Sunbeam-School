/**
 * THE STUDENT COUNCIL — the data behind /beyond-academics/student-council/.
 *
 * ═══ SOURCE ════════════════════════════════════════════════════════════════
 *
 * ⚠⚠ EVERY NAME AND EVERY POST IS TRANSCRIBED FROM THE SCHOOL'S OWN PAGE,
 * https://sunbeamballia.edu.in/student-council/, read 16 September 2026.
 * Thirty-four holders — twenty-four senior, ten junior. NOTHING HERE IS
 * WRITTEN BY THIS PROJECT, and nothing may be added to it: these are named
 * children, and a post invented beside a real child's name is a claim about
 * that child.
 *
 * ⚠⚠ NAMES ARE REPRODUCED EXACTLY AS THE SCHOOL PUBLISHES THEM, including
 * "Miss vaishnavi Kaur" with its lower-case v. A person's name is not copy to
 * be tidied, and correcting one silently risks correcting it wrongly.
 *
 * ⚠⚠ "PERFECT" IS ALMOST CERTAINLY "PREFECT", AND IT IS LEFT AS PUBLISHED.
 * Three posts read HEAD PERFECT, VICE HEAD PERFECT and CAREER COUNSELING
 * PERFECT on the school's live page. That is near-certainly a typo for PREFECT
 * — but "near-certainly" is not the same as confirmed, and this project does
 * not silently rewrite the school's own words. It is flagged to the school
 * instead. Fix it HERE, in one place, the moment they confirm.
 * Same applies to "Sarthak Goal", which may be "Goel".
 *
 * ⚠ THE POSTS ARE STORED IN TITLE CASE, NOT THE SOURCE'S ALL-CAPS. The live
 * page shouts every post because that is its styling, not its wording; the
 * capitals carry no meaning and a wall of upper case is unreadable at this
 * length. The WORDS are unchanged — only their case.
 *
 * ⚠⚠ THIS PAGE CONFIRMS SOMETHING THE REST OF THE SITE COULD NOT CLAIM. Both
 * data/sports.ts and data/home.ts record that the school had never published
 * how many houses it runs or what they are called, so neither states it. The
 * council list names three — RED, YELLOW and GREEN — with a captain and a vice
 * captain each, and a junior captain for all three. That is now sourced, and
 * those two files can cite this one if the houses are ever to be stated
 * elsewhere. Three is what is published; do not round it up to four.
 *
 * ⚠ NO CLASSES, NO PHOTOGRAPHS OF INDIVIDUALS, NO ACHIEVEMENTS. The school
 * publishes a post and a name. Anything more about a named child is not ours
 * to add, however harmless it looks.
 *
 * ⚠ NO SESSION YEAR. The live page states none, so neither does this. If the
 * school confirms the session, add it to `council.session` and the page will
 * print it — the field is read where it is rendered.
 */

export interface CouncilPost {
  /** The post, in the school's own words. See the case note above. */
  post: string;
  /** The holder, exactly as published. */
  name: string;
  /** Set only on the four school-wide leadership posts. */
  lead?: boolean;
  /** 'red' | 'yellow' | 'green' where the post belongs to a house. */
  house?: 'red' | 'yellow' | 'green';
}

/**
 * ⚠ THE SCHOOL'S OWN INTRODUCTORY LINE, verbatim, including its comma splice.
 * It is the only prose on their page and it is not this project's to improve.
 */
export const intro =
  'Our school gives the opportunities to students to prove their qualities, may it be at school level or at classroom level.';

/** ⚠ null until the school states one — see the header. */
export const session: string | null = null;

/** Twenty-four posts, in the school's own order. */
export const senior: CouncilPost[] = [
  { post: 'Head Boy', name: 'Master Ashish Verma', lead: true },
  { post: 'Head Girl', name: 'Miss vaishnavi Kaur', lead: true },
  { post: 'Vice Head Boy', name: 'Master Aditya Mishra', lead: true },
  { post: 'Vice Head Girl', name: 'Miss Vidya Singh', lead: true },

  { post: 'Captain, Red House', name: 'Sakshi Verma', house: 'red' },
  { post: 'Vice Captain, Red House', name: 'Shivam Singh', house: 'red' },
  { post: 'Captain, Yellow House', name: 'Rashika Pandey', house: 'yellow' },
  { post: 'Vice Captain, Yellow House', name: 'Sarthak Goal', house: 'yellow' },
  { post: 'Captain, Green House', name: 'Faizan Ansari', house: 'green' },
  { post: 'Vice Captain, Green House', name: 'Jagriti Pandey', house: 'green' },

  { post: 'Discipline Head', name: 'Aditya Kumar Pandey' },
  { post: 'Asstt. Discipline Head', name: 'Drishika Verma' },
  { post: 'Head Perfect', name: 'Shreya Singh' },
  { post: 'Vice Head Perfect', name: 'Kushagra Chaurasia' },
  { post: 'Sports Captain', name: 'Ankit Kumar Yadav' },
  { post: 'Sports Vice Captain', name: 'Ritika Singh' },
  { post: 'Cultural Head', name: 'Anushka Tiwari' },
  { post: 'Vice Cultural Head', name: 'Arohi Singh' },
  { post: 'Career Counseling Perfect', name: 'Lisha Singh' },
  { post: 'Health & Hygiene Inspector', name: 'Ayushi Gupta' },
  { post: 'Health & Hygiene Sub-Inspector', name: 'Aditi Pandey' },
  { post: 'Technical Head', name: 'Shashwat Jha' },
  { post: 'Luminary', name: 'Srijit Chaturvedi' },
  { post: 'Literary', name: 'Shivalika' },
];

/** Ten posts, in the school's own order. */
export const junior: CouncilPost[] = [
  { post: 'Jr. Head Boy', name: 'Anmol Kumar Singh', lead: true },
  { post: 'Jr. Head Girl', name: 'Esha Mishra', lead: true },
  { post: 'Jr. Vice Head Boy', name: 'Aariz Ahmad', lead: true },
  { post: 'Jr. Vice Head Girl', name: 'Talat Bano', lead: true },

  { post: 'Jr. Cultural Head', name: 'Arohi Jaiswal' },
  { post: 'Jr. Health & Hygiene Inspector', name: 'Riddhi Sharma' },
  { post: 'Discipline Head (Junior)', name: 'Janhvi Singh' },

  { post: 'Jr. Captain, Red House', name: 'Rudransh Kumar', house: 'red' },
  { post: 'Jr. Captain, Yellow House', name: 'Aadhya Gupta', house: 'yellow' },
  { post: 'Jr. Captain, Green House', name: 'Saumya Verma', house: 'green' },
];

/** The count check — 34. If an edit changes this, something was dropped. */
export const totalPosts = senior.length + junior.length;
