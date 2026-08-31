/**
 * MANDATORY PUBLIC DISCLOSURE — the CBSE filing, kept apart from its UI.
 *
 * ⚠⚠ EVERY VALUE BELOW IS TRANSCRIBED FROM A PRIMARY DOCUMENT. Nothing is
 * estimated, rounded or inferred. The four sources, in order of authority:
 *
 *   MPD.pdf   https://sunbeamballia.edu.in/wp-content/uploads/MPD.pdf
 *             The signed CBSE filing, 8 pages — Appendix IX. General information,
 *             staff summary, 2025 results, infrastructure, and 131 named staff.
 *   BRS.pdf   .../BRS.pdf — "Last Three Years Board Result", 2023/2024/2025 for
 *             Classes X and XII, on the school's letterhead.
 *   AFFL.pdf  .../AFFL.pdf — the CBSE extension-of-affiliation letter, which is
 *             where the affiliation period and the UDISE code come from.
 *   /general-info/  the school's own HTML rendering of the same filing.
 *
 * ⚠⚠ THE PDF AND THE WEB PAGE DISAGREE, AND THE PDF WINS. The school's
 * /general-info/ page prints different infrastructure and staff figures from the
 * MPD it links to. The PDF is used here, on the client's own instruction, for
 * three reasons: it is the signed filing, it is the file this page's own
 * "Download PDF" button hands the reader, and several of the web figures read as
 * digit slips against it. The differences, for the school's attention:
 *
 *      FIELD                 MPD.pdf        /general-info/
 *      Total campus area     11509 sq m     14464
 *      Classrooms            73 & 51        73 & 550   (550 m² per room)
 *      Laboratories          10 & 65        13 & 650
 *      Girls toilets         6              18
 *      Boys toilets          10             18
 *      Total teachers        121            128
 *      TGT / PGT             42 / 24        36 / 23
 *      Teacher–section ratio 1.5:1          1:5
 *
 * ⚠ THE STAFF LIST IS MACHINE-TRANSCRIBED, NOT RETYPED. All 131 rows were
 * extracted from MPD.pdf's own text layer, and the extraction cross-checks
 * against the filing's own summary exactly:
 *      42 TGT + 24 PGT + 38 PRT + 14 NTT + 2 wellness + 1 special educator = 121
 * which is the "TOTAL NO. OF TEACHERS 121" the PDF states. The remaining ten
 * rows — 3 PET, 5 OTHER, the Principal and the Vice Principal — sit outside that
 * count, which is why the list is 131 long and the headline figure is 121.
 * Names, capitalisation and qualification spellings are the PDF's own.
 *
 * ⚠ NO "APPEARED" COLUMN EXISTS. BRS.pdf publishes Registered, Passed and Pass
 * percentage only. The reference design showed an "Appeared" row; filling it by
 * assuming appeared = registered would be inventing an examination statistic.
 *
 * ⚠ THE REFERENCE DESIGN'S RESULT FIGURES WERE WRONG and are not used: it showed
 * Class XII 2024-25 as 159/159/159 at 100%. The school's own letterhead says
 * Class XII 2025 was 181 registered, 179 passed, 98.90% — and 159 was the 2024
 * registration. A published 100% that the school never claimed is the single
 * worst number to get wrong on a disclosure page.
 *
 * ⚠ NOT CLAIMED: a recognition number separate from the affiliation number
 * (the reference design invented one), and no field the four documents omit.
 */

export interface Row {
  k: string;
  v: string;
  /** Where it comes from, when that is not the MPD table itself. */
  from?: string;
  /** Renders as a link when set. */
  href?: string;
}

export interface DocCard {
  key: string;
  mark: string;
  k: string;
  /** The CBSE row wording, trimmed to a line. */
  v: string;
  href: string;
}

export interface Teacher {
  n: number;
  name: string;
  designation: string;
  qualification: string;
}

const UP = 'https://sunbeamballia.edu.in/wp-content/uploads';

/** The complete filing, and the page it is published on. */
export const disclosureSource = {
  pdf: `${UP}/MPD.pdf`,
  page: 'https://sunbeamballia.edu.in/general-info/',
  /** Stated as a fact about the document's contents, not as a filing date. */
  covers: 'Board results to 2025; affiliation valid to 31.03.2030',
};

/**
 * The five bars of the floating quick-information card. Short enough to read at
 * a glance, and every one of them a value a parent might need to quote.
 */
export const quickInfo = [
  { mark: 'doc', k: 'Affiliation No.', v: '2131962' },
  { mark: 'bookmark', k: 'School code', v: '70205' },
  { mark: 'person', k: 'Principal', v: 'Arpita Singh' },
  { mark: 'chat', k: 'School email', v: 'sunbeamballia2131962@gmail.com', href: 'mailto:sunbeamballia2131962@gmail.com' },
  { mark: 'phone', k: 'Contact', v: '7755005905', href: 'tel:+917755005905' },
] as const;

/**
 * A · GENERAL INFORMATION. The first eight are the CBSE table verbatim; the rest
 * are marked with the document they were read off, because they are not part of
 * Appendix IX and a reader should be able to tell.
 */
export const generalInformation: Row[] = [
  { k: 'Name of the school', v: 'SUNBEAM SCHOOL' },
  { k: 'Affiliation No.', v: '2131962' },
  { k: 'School code', v: '70205' },
  { k: 'Complete address with pin code', v: 'AGARSANDA, BALLIA U.P. 277001' },
  { k: 'Principal name', v: 'ARPITA SINGH' },
  { k: 'Principal qualification', v: 'M.Com, M.A., M.Ed, M.B.A.' },
  { k: 'School email ID', v: 'sunbeamballia2131962@gmail.com', href: 'mailto:sunbeamballia2131962@gmail.com' },
  { k: 'Contact details (landline/mobile)', v: '7755005905', href: 'tel:+917755005905' },

  { k: 'Affiliated to', v: 'CBSE, New Delhi', from: 'affiliation letter' },
  { k: 'Affiliated for', v: 'Extension of General Affiliation, to Senior Secondary level', from: 'affiliation letter' },
  { k: 'Period of affiliation', v: '01.04.2025 to 31.03.2030', from: 'affiliation letter' },
  { k: 'UDISE code', v: '09631300403', from: 'affiliation letter' },
  { k: 'Website', v: 'www.sunbeamballia.edu.in', from: 'school letterhead', href: 'https://sunbeamballia.edu.in/' },
];

/**
 * B · DOCUMENTS AND INFORMATION — the eight certificates, in the filing's order.
 * ⚠ EVERY href IS THE SCHOOL'S OWN EXISTING FILE. Not one is constructed.
 */
export const certificates: DocCard[] = [
  { key: 'AFFL', mark: 'ribbon', k: 'Affiliation / extension letter', v: 'Affiliation and upgradation letter, with the most recent extension.', href: `${UP}/AFFL.pdf` },
  { key: 'TRST', mark: 'scroll', k: 'Trust / society registration', v: 'Society, trust or company registration and renewal certificate.', href: `${UP}/TRST.pdf` },
  { key: 'NOC', mark: 'doc', k: 'No Objection Certificate', v: 'NOC issued by the State Government.', href: `${UP}/NOC.pdf` },
  { key: 'RTE', mark: 'shield', k: 'RTE recognition certificate', v: 'Recognition under the RTE Act, 2009, and its renewal.', href: `${UP}/RTE.pdf` },
  { key: 'BSC', mark: 'desk', k: 'Building safety certificate', v: 'Valid certificate as per the National Building Code.', href: `${UP}/BSC.pdf` },
  { key: 'FSC', mark: 'spark', k: 'Fire safety certificate', v: 'Issued by the competent authority.', href: `${UP}/FSC.pdf` },
  { key: 'SCP', mark: 'pen', k: 'Self certification', v: 'Submitted by the school for affiliation, upgradation or extension.', href: `${UP}/SCP.pdf` },
  { key: 'SDW', mark: 'leaf', k: 'Water, health and sanitation', v: 'Valid water, health and sanitation certificates.', href: `${UP}/SDW.pdf` },
];

/** C · RESULTS AND ACADEMICS — the five documents filed alongside the results. */
export const academicDocs: DocCard[] = [
  { key: 'FEE', mark: 'chart', k: 'Fee structure', v: 'Fee structure of the school.', href: `${UP}/FEE.pdf` },
  { key: 'ACD', mark: 'calendar', k: 'Annual academic calendar', v: 'The session calendar as filed.', href: `${UP}/ACD.pdf` },
  { key: 'SMC', mark: 'hands', k: 'School Management Committee', v: 'List of SMC members.', href: `${UP}/SMC.pdf` },
  { key: 'PTA', mark: 'speech', k: 'Parent–Teacher Association', v: 'List of PTA members.', href: `${UP}/PTA.pdf` },
  { key: 'BRS', mark: 'medal', k: 'Board examination results', v: 'Last three years of board results, as per applicability.', href: `${UP}/BRS.pdf` },
];

export interface ResultRow {
  registered: number;
  passed: number;
  percentage: string;
}

/**
 * D · BOARD RESULTS, from BRS.pdf on the school's own letterhead.
 *
 * ⚠ NEWEST FIRST, AND THE YEARS ARE THE SCHOOL'S OWN LABELS — it writes the
 * examination year (2025), not the session (2024-25). The tabs read the array,
 * so a fourth year is one entry here and no change to the component.
 */
export const boardResults: { year: string; x: ResultRow; xii: ResultRow }[] = [
  { year: '2025', x: { registered: 194, passed: 194, percentage: '100' }, xii: { registered: 181, passed: 179, percentage: '98.90' } },
  { year: '2024', x: { registered: 157, passed: 157, percentage: '100' }, xii: { registered: 159, passed: 154, percentage: '96.86' } },
  { year: '2023', x: { registered: 145, passed: 145, percentage: '100' }, xii: { registered: 156, passed: 152, percentage: '97.44' } },
];

/** E · STAFF SUMMARY, exactly as the filing states it. */
export const staffSummary: Row[] = [
  { k: 'Principal', v: 'ARPITA SINGH' },
  { k: 'Total no. of teachers', v: '121' },
  { k: 'PGT', v: '24' },
  { k: 'TGT', v: '42' },
  { k: 'PRT', v: '38' },
  { k: 'Teacher–section ratio', v: '1.5:1' },
  { k: 'Special educator', v: 'SHAHAR BANU' },
  { k: 'Counsellor and wellness teacher', v: 'ANJALI SETH, NEETU PANDEY' },
];

/** F · SCHOOL INFRASTRUCTURE. */
export const infrastructure = [
  { mark: 'globe', k: 'Total campus area', v: '11,509', unit: 'sq m' },
  { mark: 'desk', k: 'Classrooms', v: '73', unit: 'at 51 sq m' },
  { mark: 'flask', k: 'Laboratories', v: '10', unit: 'at 65 sq m, computer labs included' },
  { mark: 'person', k: 'Girls’ toilets', v: '6', unit: '' },
  { mark: 'person', k: 'Boys’ toilets', v: '10', unit: '' },
  { mark: 'refresh', k: 'Internet facility', v: 'Yes', unit: '' },
] as const;

/** The CBSE-required inspection video, on the school's own channel. */
export const inspectionVideo = 'https://youtu.be/7BdHCsYqW5E?si=zwGi05PGlZcv0fls';

/**
 * G · TEACHER DETAILS — all 131 rows of MPD.pdf's own table, machine-extracted.
 * See the file header for the cross-check that validates the extraction.
 *
 * ⚠ DO NOT TIDY THE CAPITALISATION OR THE QUALIFICATION SPELLINGS. "bachelor of
 * engineering with b.ed" and "masters of arts with ,masters in education" are
 * what the school filed. Correcting them here would make this page disagree with
 * the PDF beside it, and the PDF is the document of record.
 */
export const teachers: Teacher[] = [
  { n: 1, name: "Sanjay Yadav", designation: "TGT", qualification: "M.Sc" },
  { n: 2, name: "SATYENDRA KUMAR VERMA", designation: "PGT", qualification: "B.A., M.A.-Eco., M.A.-Eng., PGDCA, B.Ed." },
  { n: 3, name: "POOJA CHAUHAN", designation: "PRT", qualification: "B.Com" },
  { n: 4, name: "PANKAJ KUMAR SINGH", designation: "PET", qualification: "M.A." },
  { n: 5, name: "PRASHANT RAI", designation: "TGT", qualification: "M.Sc." },
  { n: 6, name: "NAFEESA BANO", designation: "PRT", qualification: "M.A." },
  { n: 7, name: "NIDHI SINGH", designation: "NTT", qualification: "M.A" },
  { n: 8, name: "NEHA SRIVASTAVA", designation: "TGT", qualification: "M.Sc" },
  { n: 9, name: "NEELIMA SINGH", designation: "PRT", qualification: "M.A." },
  { n: 10, name: "NURUL HAQUE", designation: "PGT", qualification: "B.F.A. M.V.A." },
  { n: 11, name: "SNEHA SINGH", designation: "TGT", qualification: "M.Sc" },
  { n: 12, name: "SRIRAM SINGH", designation: "TGT", qualification: "B.Sc" },
  { n: 13, name: "RAJENDRA KUMAR", designation: "TGT", qualification: "B.SC" },
  { n: 14, name: "MONIKA DUBEY", designation: "PGT", qualification: "M.A." },
  { n: 15, name: "MITHILESH KUMAR PANDEY", designation: "PGT", qualification: "M.A." },
  { n: 16, name: "ANURAG THAKUR", designation: "TGT", qualification: "B.A." },
  { n: 17, name: "PANKAJ KUMAR OJHA", designation: "TGT", qualification: "B.A." },
  { n: 18, name: "NITESH KUMAR", designation: "OTHER", qualification: "B.Sc" },
  { n: 19, name: "PANKAJ SINGH", designation: "VICE PRINCIPAL", qualification: "M.Sc." },
  { n: 20, name: "Prashant Kumar Upadhyay", designation: "PRT", qualification: "B.Sc." },
  { n: 21, name: "SWARNIMA DWIVEDI", designation: "TGT", qualification: "M.A." },
  { n: 22, name: "SANTOSH KUMAR CHATURVEDI", designation: "TGT", qualification: "B.Sc" },
  { n: 23, name: "JAI PRAKASH YADAV", designation: "PGT", qualification: "M. Com" },
  { n: 24, name: "VISHAKHA SINGH", designation: "TGT", qualification: "M.A." },
  { n: 25, name: "SITA RAM CHAUBEY", designation: "TGT", qualification: "M.A." },
  { n: 26, name: "JYOTI MISHRA", designation: "NTT", qualification: "B.A." },
  { n: 27, name: "SHABYA SINGH", designation: "NTT", qualification: "M.A." },
  { n: 28, name: "SAURABH KUMAR RAI", designation: "PGT", qualification: "M.sc, B.Ed." },
  { n: 29, name: "NEETU PANDEY", designation: "WELLNESS TEACHER", qualification: "B.A" },
  { n: 30, name: "MONIKA OJHA", designation: "NTT", qualification: "M.A." },
  { n: 31, name: "EKATA SINGH", designation: "PRT", qualification: "B.A" },
  { n: 32, name: "ASHISH KUMAR MATHEWS", designation: "TGT", qualification: "B.Sc." },
  { n: 33, name: "NAVCHANDRA TIWARI", designation: "PRT", qualification: "M.A." },
  { n: 34, name: "SHAHAR BANU", designation: "SPECIAL EDUCATOR", qualification: "M. Com." },
  { n: 35, name: "ARATI DEVI", designation: "PRT", qualification: "B.A." },
  { n: 36, name: "VINIT KUMAR DUBEY", designation: "TGT", qualification: "B. A." },
  { n: 37, name: "PREMA", designation: "TGT", qualification: "M. A." },
  { n: 38, name: "PRIYANKA MISHRA", designation: "TGT", qualification: "M.A." },
  { n: 39, name: "NEERAJ KUMAR SINGH", designation: "PGT", qualification: "M.Sc" },
  { n: 40, name: "POOJA PANDEY", designation: "PRT", qualification: "M.COM" },
  { n: 41, name: "RAJESH VIKRAM SINGH", designation: "TGT", qualification: "B.A." },
  { n: 42, name: "MANISH KUMAR SATYAM", designation: "PGT", qualification: "M.A. MATHEMATICS" },
  { n: 43, name: "ANOOP KUMAR GUPTA", designation: "PGT", qualification: "M.Sc." },
  { n: 44, name: "AMITA ROY", designation: "TGT", qualification: "M.A." },
  { n: 45, name: "NEHA PANDEY", designation: "NTT", qualification: "M.A." },
  { n: 46, name: "RAM BHAROSH DUBEY", designation: "TGT", qualification: "M.Sc." },
  { n: 47, name: "ARCHANA SINGH", designation: "PGT", qualification: "B.A." },
  { n: 48, name: "Kunal Kumar Singh", designation: "PGT", qualification: "MA" },
  { n: 49, name: "SANDEEP KUMAR PATEL", designation: "PGT", qualification: "M.Sc." },
  { n: 50, name: "MURSHID KHAN", designation: "PGT", qualification: "MCA" },
  { n: 51, name: "KAJOL CHAUHAN", designation: "PRT", qualification: "M.COM" },
  { n: 52, name: "ARPITA SINGH", designation: "PRINCIPAL", qualification: "MBA Ph.D" },
  { n: 53, name: "ARUN KUMAR PANDEY", designation: "PGT", qualification: "M.COM" },
  { n: 54, name: "BISHWANBHAR NATH TIWARI", designation: "PGT", qualification: "M.A." },
  { n: 55, name: "PRATIMA VISHWAKARMA", designation: "PGT", qualification: "M.Sc." },
  { n: 56, name: "JYOTI SRIVASTAV", designation: "PRT", qualification: "B.COM" },
  { n: 57, name: "MIMANSHA YADAV", designation: "PRT", qualification: "B.COM" },
  { n: 58, name: "RAJNI SINGH", designation: "PRT", qualification: "M.Sc." },
  { n: 59, name: "GOPAL JEE", designation: "TGT", qualification: "M.Sc." },
  { n: 60, name: "ARVIND YADAV", designation: "PGT", qualification: "M.A." },
  { n: 61, name: "Nihal Ojha", designation: "PGT", qualification: "M.sc." },
  { n: 62, name: "AYUSHI SINGH", designation: "PRT", qualification: "B.SC" },
  { n: 63, name: "JYOTI PANDEY", designation: "NTT", qualification: "B.A." },
  { n: 64, name: "RENU DUBEY", designation: "TGT", qualification: "B.SC" },
  { n: 65, name: "ARCHANA SONI", designation: "PRT", qualification: "M.A." },
  { n: 66, name: "JYOTI YADAV", designation: "NTT", qualification: "M.COM" },
  { n: 67, name: "VINOD KUMAR GOND", designation: "TGT", qualification: "M.SC." },
  { n: 68, name: "DHARMENDRA KUMAR", designation: "TGT", qualification: "M.SC" },
  { n: 69, name: "KRISHNA KUMAR VERMA", designation: "TGT", qualification: "MA" },
  { n: 70, name: "VISHAL KUMAR SINGH", designation: "PRT", qualification: "B.A" },
  { n: 71, name: "SHALINI SINGH", designation: "TGT", qualification: "B.SC" },
  { n: 72, name: "ANKIT KUMAR GUPTA", designation: "TGT", qualification: "BA" },
  { n: 73, name: "KAMAL KUMAR YADAV", designation: "OTHER", qualification: "BA" },
  { n: 74, name: "RANOO TIWARI", designation: "NTT", qualification: "MA" },
  { n: 75, name: "RAJ KUMAR VERMA", designation: "PGT", qualification: "M.Sc, MCA" },
  { n: 76, name: "SACHIN SINGH", designation: "TGT", qualification: "MCA" },
  { n: 77, name: "RAJAT KRIPASHANKAR MISHRA", designation: "PGT", qualification: "M.Sc." },
  { n: 78, name: "GARIMA TIWARI", designation: "TGT", qualification: "POST GRADUATE" },
  { n: 79, name: "AMARENDRA KUMAR SINGH", designation: "TGT", qualification: "B.Ed" },
  { n: 80, name: "POOJA CHOUBEY", designation: "PRT", qualification: "M.B.A." },
  { n: 81, name: "PRATIMA SINGH", designation: "PRT", qualification: "M.COM." },
  { n: 82, name: "CHANDRA BADAN PANDEY", designation: "TGT", qualification: "MA" },
  { n: 83, name: "GAURI SINGH", designation: "PRT", qualification: "MA" },
  { n: 84, name: "MANISHA GUPTA", designation: "PRT", qualification: "B.Com." },
  { n: 85, name: "AVINASH SHARMA", designation: "PGT", qualification: "M.Sc." },
  { n: 86, name: "UPASANA SINGH", designation: "PGT", qualification: "M.Com" },
  { n: 87, name: "PANKAJ KUMAR SINGH", designation: "PGT", qualification: "M.A." },
  { n: 88, name: "TIWARI NEHA RAMJEE", designation: "TGT", qualification: "M.Sc." },
  { n: 89, name: "ASHWANI KUMAR", designation: "TGT", qualification: "B.A." },
  { n: 90, name: "RANJU KUMARI", designation: "TGT", qualification: "M.Sc." },
  { n: 91, name: "REEMA", designation: "PRT", qualification: "M.Sc." },
  { n: 92, name: "ANURAG TRIPATHI", designation: "TGT", qualification: "M.A." },
  { n: 93, name: "AMIT PANDEY", designation: "TGT", qualification: "BACHELOR OF MUSIC" },
  { n: 94, name: "MD AZAM KHAN", designation: "PRT", qualification: "B.A." },
  { n: 95, name: "AKHILESH GUPTA", designation: "TGT", qualification: "MASTER IN COMPUTER APPLICATION" },
  { n: 96, name: "MD SALMAN AHMAD", designation: "PRT", qualification: "BACHELOR IN SCIENCE" },
  { n: 97, name: "TOSHI RANI", designation: "PRT", qualification: "MA" },
  { n: 98, name: "KOMAL GUPTA", designation: "PRT", qualification: "M.Sc." },
  { n: 99, name: "SUBAS RAM", designation: "OTHER", qualification: "X" },
  { n: 100, name: "TARUN SAXENA", designation: "PET", qualification: "B A" },
  { n: 101, name: "MONI SINGH", designation: "NTT", qualification: "M.A." },
  { n: 102, name: "SANJU YADAV", designation: "TGT", qualification: "M.A" },
  { n: 103, name: "SHIVANGI PANDEY", designation: "PGT", qualification: "M.Sc" },
  { n: 104, name: "DIKSHA PANDEY", designation: "PRT", qualification: "M.A." },
  { n: 105, name: "MARUTI NANDAN MISHRA", designation: "TGT", qualification: "B.A." },
  { n: 106, name: "RAM KUMAR YADAV", designation: "PET", qualification: "B.Com." },
  { n: 107, name: "NIDHI SINGH", designation: "PRT", qualification: "M.A." },
  { n: 108, name: "KR ADA SINGH", designation: "PRT", qualification: "M.Sc." },
  { n: 109, name: "VISHAL KUMAR SINGH", designation: "PRT", qualification: "B.Sc." },
  { n: 110, name: "ABHILASHA SINGH", designation: "PRT", qualification: "BACHELOR OF SCIENCE WITH B.ed" },
  { n: 111, name: "ASHUTOSH SINGH GAHARAWAR", designation: "OTHER", qualification: "MASTER OF ARTS with B.Ed." },
  { n: 112, name: "RAM MANIKANT", designation: "PRT", qualification: "BACHELORS OF COMMERCE" },
  { n: 113, name: "SHIVANGINI GUPTA", designation: "PRT", qualification: "MASTER OF ARTS with B.Ed." },
  { n: 114, name: "ROHAN MISHRA", designation: "PRT", qualification: "bachelor of engineering with b.ed" },
  { n: 115, name: "KM. MEGHNA SINGH", designation: "PRT", qualification: "masters of arts with ,masters in education" },
  { n: 116, name: "KOMAL GUPTA", designation: "PRT", qualification: "Masters in Science" },
  { n: 117, name: "RIYA YADAV", designation: "TGT", qualification: "M.A." },
  { n: 118, name: "RAVI THAKUR", designation: "TGT", qualification: "M.A." },
  { n: 119, name: "ANJALI SETH", designation: "WELLNESS TEACHER", qualification: "M.A." },
  { n: 120, name: "SHALINI SINGH", designation: "NTT", qualification: "B.Sc." },
  { n: 121, name: "ASIFA", designation: "TGT", qualification: "B.Sc." },
  { n: 122, name: "ANJALI MISHRA", designation: "NTT", qualification: "B.Com" },
  { n: 123, name: "PARVEEN NISHA", designation: "NTT", qualification: "B.Com" },
  { n: 124, name: "KUMARI ANKITA", designation: "PRT", qualification: "M.A." },
  { n: 125, name: "SUFIYA KHAN", designation: "PRT", qualification: "B.Sc." },
  { n: 126, name: "RISHIKESH LAL KANSAL", designation: "PRT", qualification: "M.Sc." },
  { n: 127, name: "SHADIYA RABBANI", designation: "PRT", qualification: "B.A." },
  { n: 128, name: "AKANCHHA SINGH", designation: "NTT", qualification: "M.com" },
  { n: 129, name: "ANKIT SINGH", designation: "OTHER", qualification: "BCA" },
  { n: 130, name: "SUNITA SINGH", designation: "NTT", qualification: "B.A." },
  { n: 131, name: "RAVI PRAKASH", designation: "TGT", qualification: "M.A." },
];

/** The designation filter's options, derived — never a typed list. */
export const designations = ['All designations', ...Array.from(new Set(teachers.map((t) => t.designation)))];
