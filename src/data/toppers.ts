/**
 * ACADEMIC EXCELLENCE — the school's own toppers boards.
 *
 * ═══ SOURCE ════════════════════════════════════════════════════════════════
 *
 * Transcribed from a photograph of the two boards mounted at the school,
 * supplied by the client on 19 September 2026:
 *
 *   "Sunbeam BALLIA · CLASS X TOPPERS"   — Session | Student's Name | %
 *   "Sunbeam BALLIA · CLASS XII TOPPERS" — Session | Student's Name | %
 *
 * ⚠⚠ THESE ARE NAMED CHILDREN AND REAL MARKS. Nothing here may be rounded,
 * reordered, corrected or filled in. Every name is spelled as the board spells
 * it and every percentage is copied to two decimal places as printed. If a row
 * looks wrong, it is the board that has to change, not this file.
 *
 * ⚠ THE BOARDS CARRY EMPTY ROWS FOR FUTURE SESSIONS — 2026-27, 2027-28 and
 * 2028-29 are ruled and blank, waiting to be filled. They are NOT reproduced
 * here: an empty row on a wall is a promise, and on a web page it reads as
 * missing data. New sessions get added as the school fills them in.
 *
 * ⚠ ONE VALUE IS UNCERTAIN AND IS MARKED, NOT GUESSED. Class XII 2022-23 reads
 * "97 40" on the board — the decimal point is not legible in the photograph.
 * Every other value on both boards is printed to two decimals, so 97.40 is
 * near-certain, but `check: true` flags it rather than silently asserting it.
 * Confirm with the school before removing the flag.
 *
 * ⚠ 2024-25 CLASS X HAS TWO NAMES ON ONE ROW, and that is the board's own
 * record: "ANANYA TIWARI & SHREYA YADAV", both at 98.20. Do not split them into
 * two rows with a rank between them — the board gives them the session jointly.
 *
 * ⚠ ANSHU YADAV APPEARS ON BOTH BOARDS — Class X 2018-19 and Class XII 2020-21,
 * exactly the two-year gap that would make it one student who topped twice.
 * This file does NOT say so. It is very probably the same person, and "very
 * probably" is not a thing to publish about a named child. Ask the school.
 *
 * ⚠ NAMES ARE STORED AS THE BOARD PRINTS THEM, IN CAPITALS, and title-cased for
 * display in the component. The stored spelling is the record; the casing is
 * presentation. Do not "fix" a spelling here to match a hunch.
 */

export interface TopperRow {
  /** The academic session, exactly as the board labels it. */
  session: string;
  /** As printed on the board, in capitals. May name two students. */
  name: string;
  /** Two decimals, as printed. A string so trailing zeros survive. */
  percent: string;
  /** Set where the board itself is not legible — see the header. */
  check?: boolean;
}

/** CLASS X TOPPERS, oldest session first, as the board reads top to bottom. */
export const classX: TopperRow[] = [
  { session: '2017-18', name: 'ARYAN SINGH YADAV', percent: '94.80' },
  { session: '2018-19', name: 'ANSHU YADAV', percent: '96.40' },
  { session: '2019-20', name: 'JANHVI UPADHYAY', percent: '97.00' },
  { session: '2020-21', name: 'SRISHTI SINGH', percent: '96.40' },
  { session: '2021-22', name: 'RISHIKANT', percent: '98.40' },
  { session: '2022-23', name: 'PRINCE KUMAR ADITYA', percent: '97.20' },
  { session: '2023-24', name: 'ADITI YADAV', percent: '97.60' },
  { session: '2024-25', name: 'ANANYA TIWARI & SHREYA YADAV', percent: '98.20' },
  { session: '2025-26', name: 'AASTHA YADAV', percent: '97.20' },
];

/** CLASS XII TOPPERS, oldest session first. */
export const classXII: TopperRow[] = [
  { session: '2018-19', name: 'SHALU VERMA', percent: '78.43' },
  { session: '2019-20', name: 'SHAMBHAVI', percent: '94.00' },
  { session: '2020-21', name: 'ANSHU YADAV', percent: '94.80' },
  { session: '2021-22', name: 'ADITYA SINGH', percent: '94.20' },
  /* ⚠ The board reads "97 40" — decimal not legible. See the header. */
  { session: '2022-23', name: 'SANDHYA YADAV', percent: '97.40', check: true },
  { session: '2023-24', name: 'UTPAL SINGH TOMAR', percent: '98.00' },
  { session: '2024-25', name: 'PRIYANKA MAURYA', percent: '98.60' },
  { session: '2025-26', name: 'ANISHA ALTAF', percent: '97.20' },
];

/**
 * ⚠ DERIVED, NOT CLAIMED. `best` is simply the highest percentage in each list —
 * arithmetic on the board's own numbers, which is why it is safe. It drives a
 * highlight in the component and asserts nothing the board does not.
 *
 * ⚠ IT IS NOT A RANKING CLAIM. Nothing here says "district topper", "best in
 * Ballia" or anything comparative about other schools. The client mentioned a
 * district-topper record; no wording for it has been confirmed, so no such
 * sentence appears on the site. See docs/07 A14.
 */
const peak = (rows: TopperRow[]) =>
  rows.reduce((a, b) => (parseFloat(b.percent) > parseFloat(a.percent) ? b : a));

export const bestX = peak(classX);
export const bestXII = peak(classXII);

/** Session range, read off the rows rather than typed twice. */
export const spanX = `${classX[0].session} – ${classX[classX.length - 1].session}`;
export const spanXII = `${classXII[0].session} – ${classXII[classXII.length - 1].session}`;

/** Count checks for anyone auditing the transcription against the photograph. */
export const countX = classX.length;
export const countXII = classXII.length;
