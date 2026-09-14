/**
 * PUBLICATIONS — the data behind /publications/.
 *
 * ═══ WHERE EVERY LINE OF THIS CAME FROM ════════════════════════════════════
 *
 * ⚠⚠ THIS PAGE DID NOT EXIST IN THIS PROJECT. The brief described it as a
 * redesign of "the EXISTING Publications page" and told me to preserve its
 * data — but there was no /publications/ route, no component and no data file
 * here. The page it meant is on the school's OLD site, which is a different
 * build entirely (different header, different navigation, WordPress).
 *
 * So the content below was read off https://sunbeamballia.edu.in/publications/
 * on 12 September 2026 — the live page's own HTML, not the screenshot. Every
 * title, every date and every URL is transcribed from it. NOTHING HERE IS
 * WRITTEN BY THIS PROJECT.
 *
 * ⚠⚠ THIRTY-THREE DOWNLOADS AND FIVE IMAGES. That is the whole page, counted
 * from the source HTML: 5 club editions + 14 under Our School Magazine +
 * 14 E-Newspaper issues = 33 links, plus the 5 MYRA STEM LAB pages. If a
 * future edit drops one, the count is the check.
 *
 * ⚠⚠ THE EMPTY CARDS IN THE REFERENCE ARE NOT PUBLICATIONS. The design comp
 * shows four cards in each club row — one titled, three holding nothing but a
 * "Click here to Download" button. Those three are empty WordPress grid cells:
 * the source HTML has exactly FIVE anchors across all five club sections, one
 * per club, and the empty boxes carry no href at all. Reproducing them would
 * mean shipping three dead buttons per club. The grid below is four columns
 * wide, as the brief asks; it is simply not padded with fiction.
 *
 * ⚠ THE URLs POINT AT THE OLD SITE AND AT GOOGLE DRIVE, AND THEY STAY THAT WAY.
 * These are the real files parents download today. Rewriting them to local
 * paths would break every one of them, because the PDFs are not in this repo.
 * They are external, so every link opens in a new tab with rel="noopener".
 *
 * ⚠ SOME URLs REPEAT, AND THAT IS THE SCHOOL'S OWN DATA. On the live page,
 * Sandesh Times April 2024 and June 2024 resolve to the same PDF, as do May,
 * August and October 2024; E-Newspaper March 2024 and June 2024 likewise. It
 * looks like a copy-paste error in their CMS. It is NOT corrected here —
 * guessing which file each month should have pointed at would be inventing
 * publications. Flag it to the school; do not fix it from this end.
 *
 * ⚠ "First Edition, June 2026" IS THE DATE THE SCHOOL PRINTS on all five club
 * newsletters. It is not a placeholder.
 */

export interface Publication {
  /** The card's visible title, exactly as the live page prints it. */
  title: string;
  /** The real download target. External — see the header. */
  href: string;
}

export interface PublicationGroup {
  id: string;
  /** Section heading, exactly as published. */
  heading: string;
  items: Publication[];
}

/**
 * ═══ 1 · STUDENT CLUB NEWSLETTERS ══════════════════════════════════════════
 * Five clubs, one edition each. Each is its own heading on the live page, so
 * each is its own section here rather than one grid of five.
 */
export const clubs: PublicationGroup[] = [
  {
    id: 'entrepreneurial-chronicles',
    heading: 'Entrepreneurial Chronicles',
    items: [
      {
        title: 'First Edition, June 2026',
        href: 'http://sunbeamballia.edu.in/wp-content/uploads/Entrepreneurial-Chronicles-First-edition_20260624_144641_0000.pdf',
      },
    ],
  },
  {
    id: 'quiz-club',
    heading: 'Quiz Club',
    items: [
      {
        title: 'First Edition, June 2026',
        href: 'http://sunbeamballia.edu.in/wp-content/uploads/quiz-club-newsletter-_20260629_082730_0000.pdf',
      },
    ],
  },
  {
    id: 'moon-club',
    heading: 'Moon Club',
    items: [
      {
        title: 'First Edition, June 2026',
        href: 'http://sunbeamballia.edu.in/wp-content/uploads/MUN-_20260629_122717_0000.pdf',
      },
    ],
  },
  {
    id: 'heritage-club',
    heading: 'Heritage Club',
    items: [
      {
        title: 'First Edition, June 2026',
        href: 'http://sunbeamballia.edu.in/wp-content/uploads/Heritage-club-newsletter-_20260702_092303_0000_compressed.pdf',
      },
    ],
  },
  {
    id: 'financial-literacy-club',
    heading: 'Financial Literacy Club',
    items: [
      {
        title: 'First Edition, June 2026',
        /* ⚠ THE FILENAME IS THE SCHOOL'S, AND IT IS ODD — it reads like an
           affiliation certificate rather than a newsletter. It is what the
           Financial Literacy Club card links to on the live page. Do not
           "correct" it to something that looks tidier; check with the school. */
        href: 'http://sunbeamballia.edu.in/wp-content/uploads/CBSE-Affiliation-No.-2131962-School-Code-70205_20260701_221742_0000.pdf',
      },
    ],
  },
];

/**
 * ═══ 2 · OUR SCHOOL MAGAZINE ═══════════════════════════════════════════════
 * One heading on the live page covering both the Dishayein/Balashray editions
 * and every Sandesh Times issue — fourteen cards in all, in this order.
 */
export const magazine: PublicationGroup = {
  id: 'school-magazine',
  heading: 'Our School Magazine',
  items: [
    { title: 'Dishayein 2017 Edition', href: 'https://drive.google.com/file/d/1xIijrdQ1xuaszJbXK38HKEq2u8qxPpPV/view?usp=sharing' },
    { title: 'Dishayein 2019 Edition', href: 'https://drive.google.com/file/d/1yJHuD865FG_RhpWPdOcg8SN7gh78esnR/view?usp=sharing' },
    { title: 'Dishayein 2022 Edition', href: 'https://drive.google.com/file/d/1V2n97-j202eAwI4qo-0G8Dz56jla9VQS/view?usp=sharing' },
    { title: 'Balashray 2022 Edition', href: 'https://drive.google.com/file/d/19Mz9VsmO6X3b-XaShuO59bnmsH_sFFGy/view?usp=sharing' },

    { title: 'Sandesh Times — March 2024', href: 'https://drive.google.com/file/d/1qztHaIFSWWeEQQifqwbi_nomtdoi0NeA/view?usp=drivesdk' },
    { title: 'Sandesh Times — April 2024', href: 'https://drive.google.com/file/d/1qsT79nG1-giy5dI97VT3592Zzde35cAT/view?usp=drivesdk' },
    { title: 'Sandesh Times — May 2024', href: 'https://drive.google.com/file/d/1KLanjCYPpxKUoV4eTqHVpd9vjRDTMnQH/view?usp=drivesdk' },
    { title: 'Sandesh Times — June 2024', href: 'https://drive.google.com/file/d/1qsT79nG1-giy5dI97VT3592Zzde35cAT/view?usp=drivesdk' },
    { title: 'Sandesh Times — August 2024', href: 'https://drive.google.com/file/d/1KLanjCYPpxKUoV4eTqHVpd9vjRDTMnQH/view?usp=drivesdk' },
    { title: 'Sandesh Times — October 2024', href: 'https://drive.google.com/file/d/1KLanjCYPpxKUoV4eTqHVpd9vjRDTMnQH/view?usp=drivesdk' },
    { title: 'Sandesh Times — January 2026', href: 'http://sunbeamballia.edu.in/wp-content/uploads/E-SandeshJanuary_20260218_092255_0000.pdf' },
    { title: 'Sandesh Times — April 2026', href: 'http://sunbeamballia.edu.in/wp-content/uploads/E-SandeshApril-1.pdf' },
    { title: 'Sandesh Times — July 2026', href: 'http://sunbeamballia.edu.in/wp-content/uploads/E-SANDESH_20260708_192640_0000.pdf' },
    { title: 'E-Sandesh Times — July 2026', href: 'http://sunbeamballia.edu.in/wp-content/uploads/E-SANDESH-JULY_20260803_204549_0000.pdf' },
  ],
};

/**
 * ═══ 3 · E-NEWSPAPER ═══════════════════════════════════════════════════════
 * Fourteen issues, in the live page's order — which runs 2021 → 2026 and is
 * not strictly chronological within it. Kept as published.
 */
export const newspaper: PublicationGroup = {
  id: 'e-newspaper',
  heading: 'E-Newspaper',
  items: [
    { title: 'September 2021', href: 'https://drive.google.com/file/d/1Ft5xuo2HPTHIf00Nv7wdez_HwFnZtIU9/view?usp=sharing' },
    { title: 'October 2021', href: 'https://drive.google.com/file/d/1DAZu_uTiNSKbKP16F49yO2RD9KmDdcQE/view?usp=sharing' },
    { title: 'December 2021', href: 'https://drive.google.com/file/d/1VKq-3sWLOm5AcZd0zLQpopW947lKOMg9/view?usp=sharing' },
    { title: 'January 2022', href: 'https://drive.google.com/file/d/1aNjt4LQFb3HnnBy2wWjVzVe6nO3f_SXz/view?usp=sharing' },
    { title: 'February 2022', href: 'https://drive.google.com/file/d/1nWtR5rpjsAwMgGqPKRAHfzn57G3_t6e6/view?usp=sharing' },
    { title: 'March 2022', href: 'https://drive.google.com/file/d/1GG72Q1eBYBqCcl3uYc2FJpKKkTG_ojw3/view?usp=sharing' },
    { title: 'May 2022', href: 'https://drive.google.com/file/d/1_3PTVi1RLQn8n1IgWJ14KbVqPGXEz3Mk/view?usp=sharing' },
    { title: 'October 2022', href: 'https://drive.google.com/file/d/1638LbyDKs8PbIYj8i7oaw1ABPBowWLeY/view?usp=sharing' },
    { title: 'March 2024', href: 'https://drive.google.com/file/d/1KG2OCbTWID0nHYC3_0x9e9dLdxhZ6Etf/view?usp=drivesdk' },
    { title: 'June 2024', href: 'https://drive.google.com/file/d/1KG2OCbTWID0nHYC3_0x9e9dLdxhZ6Etf/view?usp=drivesdk' },
    { title: 'July 2024', href: 'https://drive.google.com/file/d/1KNG1rdi3Wselhk-ZIJus0KAKwSHS7Mgi/view?usp=drivesdk' },
    { title: 'September 2024', href: 'https://drive.google.com/file/d/1kK5TcjmfU1yUVCY_dhd3-A57iwryDuWA/view?usp=drivesdk' },
    { title: 'October 2025', href: 'http://sunbeamballia.edu.in/wp-content/uploads/E-newspaper-OCTOBER-final.pdf' },
    { title: 'July 2026 — Science E-Newspaper', href: 'http://sunbeamballia.edu.in/wp-content/uploads/Science-E-newspaper-_20260803_190053_0000.pdf' },
  ],
};

/**
 * ═══ 4 · MYRA STEM LAB ═════════════════════════════════════════════════════
 *
 * ⚠ THE ONLY SECTION WITH NO DOWNLOAD. On the live page these five are shown
 * as images and nothing more — there is no PDF behind them, so there is no
 * button here either. They are pages of the lab's newsletter, displayed.
 *
 * ⚠ THE FILES WERE COPIED INTO THIS REPO rather than hotlinked from the old
 * site, so they go through the image pipeline and survive that site being
 * retired. Source: wp-content/uploads/WhatsApp-Image-2026-06-27-at-11.51.40-5
 * through -9, in that order.
 */
export const myraCount = 5;

/** Alt text per page, describing what each actually shows. */
export const myraAlt = [
  'Page one of the MYRA STEM Lab newsletter, June 2026 — the Centre of Excellence cover.',
  'A page of the MYRA STEM Lab newsletter showing student activities and a timetable.',
  'A page of the MYRA STEM Lab newsletter covering a pitch competition.',
  'A page of the MYRA STEM Lab newsletter with project write-ups and a world map.',
  'The closing page of the MYRA STEM Lab newsletter, carrying the school crest.',
];

/** Every download on the page, for the count check described in the header. */
export const totalDownloads =
  clubs.reduce((n, g) => n + g.items.length, 0) + magazine.items.length + newspaper.items.length;
