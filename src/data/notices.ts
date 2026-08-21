/**
 * SCHOOL NOTICES — the school's own notice posters.
 *
 * ═══ SOURCE — sunbeamballia.edu.in/notice/, and nothing else ════════════════
 *
 * ⚠⚠ THE SCHOOL'S NOTICE PAGE IS A BARE IMAGE GALLERY. It carries a heading
 * ("Notice") and 24 poster images. There are NO titles, NO dates, NO captions,
 * NO categories, NO descriptions, NO PDFs and NO links of any kind — every
 * image's alt attribute is the string "Sunbeam Ballia".
 *
 * ⚠⚠ SO EVERY TITLE AND DATE BELOW WAS READ OFF THE POSTER ITSELF. Each of the
 * 24 was downloaded at full size and read; the title is the poster's own
 * headline and the date is the date printed on it. Where a poster prints no
 * date, `date` is absent and the card shows none — 8 of the 24 are like that.
 *
 * ⚠ NO CATEGORY FIELD, AND THEREFORE NO CATEGORY FILTER. The brief allows one
 * only "if the source provides them"; the source provides nothing of the kind,
 * and sorting 24 posters into invented buckets would be exactly the fabrication
 * the brief forbids. The filters that ARE supported by the data — a title search
 * and a year drawn from the printed dates — are the ones the page offers.
 *
 * ⚠ NO DESCRIPTIONS. The brief is explicit: "If the official website provides
 * only an image and title/date, do not manufacture a description." A few
 * posters print a subtitle of their own; that is kept in `sub` because it is
 * the poster's text, not ours. Everything else is left empty.
 *
 * ⚠ NO PDFs. Not one notice on the school's page links to a document, so no
 * card offers a PDF action. The poster IS the notice, and it opens in the
 * viewer at full size.
 *
 * ⚠ n12 IS A PHOTOGRAPH, NOT A DESIGNED POSTER, and its event name was not
 * legible. Its title is the tagline actually printed on the backdrop rather
 * than a name guessed from context.
 *
 * ⚠⚠ WORTH THE CLIENT'S ATTENTION — "PRADIPTAM · LIGHT TO VISION". Notice 03 is
 * the alumni meet invitation, and it reads "Pradiptam — Light to Vision —
 * ALUMNI MEET 2023-24, Saturday, 25th May 2024". That is the "Light to Vision"
 * meet an earlier brief asked for and which could not be found at the time: it
 * is on the NOTICE page, not on school-activities, and its session is 2023-24 —
 * not 2024-25. data/alumniMeets.ts should gain it as a second meet.
 */
import n01 from '../assets/notices/n01.jpg';
import n02 from '../assets/notices/n02.jpg';
import n03 from '../assets/notices/n03.jpg';
import n04 from '../assets/notices/n04.jpg';
import n05 from '../assets/notices/n05.jpg';
import n06 from '../assets/notices/n06.jpg';
import n07 from '../assets/notices/n07.jpg';
import n08 from '../assets/notices/n08.jpg';
import n09 from '../assets/notices/n09.jpg';
import n10 from '../assets/notices/n10.jpg';
import n11 from '../assets/notices/n11.jpg';
import n12 from '../assets/notices/n12.jpg';
import n13 from '../assets/notices/n13.jpg';
import n14 from '../assets/notices/n14.jpg';
import n15 from '../assets/notices/n15.jpg';
import n16 from '../assets/notices/n16.jpg';
import n17 from '../assets/notices/n17.jpg';
import n18 from '../assets/notices/n18.jpg';
import n19 from '../assets/notices/n19.jpg';
import n20 from '../assets/notices/n20.jpg';
import n21 from '../assets/notices/n21.jpg';
import n22 from '../assets/notices/n22.jpg';
import n23 from '../assets/notices/n23.jpg';
import n24 from '../assets/notices/n24.jpg';

export interface Notice {
  id: string;
  /** The poster's own headline. */
  title: string;
  /** The poster's own subtitle, where it prints one. Never ours. */
  sub?: string;
  /** ISO date, only when the poster prints one. */
  date?: string;
  /** Human date, as the poster writes it. */
  dateLabel?: string;
  image: ImageMetadata;
  alt: string;
  featured?: boolean;
}

const S = 'Sunbeam School Ballia';
const P = (t: string) => `${S}'s published notice poster — ${t}`;

/**
 * Newest first, by the dates the posters carry. Undated posters keep the
 * gallery's own order at the end of their group.
 */
export const notices: Notice[] = [
  { id: 'literacy-project-chief-guest', title: 'Literacy Project for Educators', sub: 'Chief Guest Mrs. Amrita Burman', date: '2026-07-04', dateLabel: 'Saturday, 4 July 2026', image: n24, alt: P('the Literacy Project for Educators, announcing Mrs. Amrita Burman as chief guest'), featured: true },
  { id: 'literacy-project-for-educators', title: 'Literacy Project for Educators', sub: 'A nationwide initiative to build literacy', date: '2026-07-04', dateLabel: '4 July 2026', image: n23, alt: P('the Literacy Project for Educators at Sunbeam School Ballia') },
  { id: 'academic-triumph-ijaresm', title: 'Academic Triumph', sub: 'Gaurav Singh (Grade IX) with Neeraj Singh (PGT Physics) — research paper published in IJARESM', date: '2026-06-01', dateLabel: 'June 2026', image: n22, alt: P('Academic Triumph, a research paper co-authored by Gaurav Singh of Grade IX and Neeraj Singh, PGT Physics'), featured: true },
  { id: 'founder-mother-remembrance', title: 'In the fondest memory of the Founder Mother of Sunbeam', sub: 'Mrs. Deesh Ishrat Madhok · 10.09.1933 – 01.06.2003', date: '2026-06-01', dateLabel: '1 June 2026', image: n19, alt: P('a remembrance of Mrs. Deesh Ishrat Madhok, founder mother of Sunbeam'), featured: true },
  { id: 'classroom-to-skies', title: 'Classroom to Skies', sub: 'Careers and Human Factors in Aviation', date: '2026-04-13', dateLabel: '13 April 2026', image: n17, alt: P('the session Classroom to Skies, on careers and human factors in aviation') },
  { id: 'child-parents-teacher-dialogue', title: 'Child Parents Teacher Dialogue', sub: 'Class X & XII', date: '2025-11-15', dateLabel: '15 November 2025', image: n15, alt: P('the Child Parents Teacher Dialogue for Classes X and XII') },
  { id: 'science-mela-2025', title: 'Science Mela 2025', sub: '“Indigenous Technology For Viksit Bharat”', date: '2025-11-14', dateLabel: '14 November 2025', image: n14, alt: P('Science Mela 2025, on indigenous technology for Viksit Bharat') },
  { id: 'childrens-day-2025', title: 'Children’s Day Celebration', date: '2025-11-14', dateLabel: '14 November 2025', image: n13, alt: P('the Children’s Day celebration') },
  { id: 'begin-your-journey-2025', title: 'Begin your journey', sub: 'Featuring more than 50 colleges and universities', date: '2025-11-11', dateLabel: '11 November 2025', image: n12, alt: `A photograph published by ${S} of the event backdrop reading “Begin your journey”, featuring more than 50 colleges and universities` },
  { id: 'annabodh-food-safety', title: 'अन्नबोध — Annabodh', sub: 'District level Inter School Competition · Poster Making & Slogan Writing on food safety, Classes II to IX', date: '2025-11-09', dateLabel: '9 November 2025', image: n08, alt: P('Annabodh, a district-level inter-school poster making and slogan writing competition on food safety') },
  { id: 'book-dissemination-rfp', title: 'Book Dissemination of RFP', sub: 'Class I · “Little Koel Finds His Song”', date: '2025-11-07', dateLabel: '7 November 2025', image: n09, alt: P('the Book Dissemination of RFP for Class I') },
  { id: 'parents-forum-nursery-to-v', title: 'Parent’s Forum', sub: 'Class Nursery to V', date: '2025-11-07', dateLabel: '7 November 2025', image: n11, alt: P('the Parent’s Forum for classes Nursery to V') },
  { id: 'childrens-forum-2025', title: 'Children’s Forum', sub: 'Class I to XII', date: '2025-11-01', dateLabel: '1 – 4 November 2025', image: n07, alt: P('the Children’s Forum for Classes I to XII') },
  { id: 'pradiptam-alumni-meet-2023-24', title: 'Pradiptam — Light to Vision', sub: 'Alumni Meet 2023–24', date: '2024-05-25', dateLabel: 'Saturday, 25 May 2024', image: n03, alt: P('the Pradiptam — Light to Vision alumni meet invitation for 2023-24') },
  { id: 'kaushal-scholarship-test', title: 'Kaushal Scholarship Test for Class XI', sub: 'PCM, PCB, Commerce & Humanities', date: '2024-03-17', dateLabel: 'Sunday, 17 March 2024', image: n01, alt: P('the Kaushal scholarship test for Class XI') },
  { id: 'josh-sports-spring-camp', title: 'The Annual Sports & Spring Camp — JOSH', date: '2024-03-11', dateLabel: '11 – 16 March 2024', image: n02, alt: P('JOSH, the annual sports and spring camp') },

  /* ── Undated: the poster prints no date, so the card shows none. ────────── */
  { id: 'cohort-declamation-2025', title: 'Cohort — Inter School Declamation Competition 2025', sub: 'Class IV', image: n06, alt: P('the Cohort inter-school declamation competition 2025 for Class IV') },
  { id: 'gallery-walk-of-science', title: 'Gallery Walk of Science', sub: 'Classes III to V', image: n05, alt: P('the Gallery Walk of Science for Classes III to V') },
  { id: 'yes-workshop-sandeep-dutt', title: 'Youth Engaging Society (YES) Workshop', sub: 'With students, by Mr. Sandeep Dutt', image: n04, alt: P('the Youth Engaging Society workshop with Mr. Sandeep Dutt') },
  { id: 'session-rajiv-sikroria', title: 'A session by Dr. Rajiv Sikroria', sub: 'Associate Professor, Sunbeam Women’s College Varuna — for Class XII girls', image: n10, alt: P('a session for Class XII girls by Dr. Rajiv Sikroria') },
  { id: 'learning-expedition-shankarpur', title: 'Learning Expedition', sub: 'Students of Class II & IV at Maa Bhagwati Temple, Shankarpur', image: n16, alt: P('a learning expedition by Classes II and IV to Maa Bhagwati Temple at Shankarpur') },
  { id: 'pastoral-guide', title: 'Pastoral Guide', sub: 'Self management · Self awareness · Social awareness · Communication skills · Decision making skills', image: n18, alt: P('the Pastoral Guide, showing the staff members available to support students') },
  { id: 'play-carrom-summer', title: 'Play Carrom, Stay Together, Grow Together', sub: 'Summer vacation initiative', image: n20, alt: P('a summer vacation initiative encouraging families to play carrom together') },
  { id: 'world-environment-day', title: 'World Environment Day', image: n21, alt: P('World Environment Day') },
];

/** The school's own notice page. */
export const noticeSource = 'https://sunbeamballia.edu.in/notice/';

/** The rotating featured set — the flagged ones, else the newest three. */
export const featuredNotices = notices.filter((n) => n.featured).length
  ? notices.filter((n) => n.featured)
  : notices.slice(0, 3);

/**
 * Years present in the data, newest first.
 * ⚠ DERIVED, NEVER TYPED — a year with no notice cannot appear in the filter,
 * and a new notice adds its year automatically.
 */
export const noticeYears = Array.from(
  new Set(notices.filter((n) => n.date).map((n) => n.date!.slice(0, 4))),
).sort((a, b) => Number(b) - Number(a));
