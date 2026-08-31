/**
 * BEYOND ACADEMICS → ACHIEVEMENTS.
 *
 * Audit §4: "Achievements can then be showcased separately, with major
 * achievements displayed first using high-resolution photographs." This file is
 * that section, lifted off the Sports & Games page and given a page of its own —
 * which also lets it carry the school's NON-SPORTING record, which had nowhere
 * to live before.
 *
 * ═══ THE THREE MAJORS, AND WHY THOSE THREE ══════════════════════════════════
 *
 * They are the three the school itself produced an award graphic for. That is
 * not a guess about what matters most — it is the school's own editorial
 * decision, already made, and it happens to be the only place high-resolution
 * imagery exists. The client's "using high-resolution photographs" clause can be
 * satisfied for exactly these three and for nothing else in the record.
 *
 * ⚠ ALL THREE ARE POSTERS, NOT PHOTOGRAPHS. Each is a designed graphic with its
 * own headline, crest and framed photograph inside it — portrait or square,
 * never landscape. They are shown WHOLE inside a frame, never cropped to fill a
 * card: cropping a poster cuts off its own headline. The detail below is read
 * off the artwork itself.
 *
 * ⚠ EVERY LINE IS PUBLISHED. Sources are docs/01 § "Recognition", § "Sports
 * record", § "Activities & events", plus the three award graphics in
 * assets/school achivement/. Nothing here is inferred. In particular there is no
 * board-results data anywhere on this page, because the school publishes none —
 * see the standing gap in docs/01 §119.
 */

import khokhoArt from '../assets/school achivement/KHO KHO CHAMPIOANSHIP.jpg';
import roboArt from '../assets/school achivement/robo.jpg';
import innovationArt from '../assets/school achivement/innoventure.jpg';

export interface Major {
  id: string;
  kicker: string;
  title: string;
  detail: string;
  /** Read off the artwork; rendered as the card's itemised proof. */
  facts: string[];
  art: ImageMetadata;
  alt: string;
}

/* Order: international, national, then the sporting title. Widest reach first. */
export const majors: Major[] = [
  {
    id: 'robowunder',
    kicker: 'International · Kuala Lumpur',
    title: 'RoboWunder International Robotics Championship',
    detail:
      'A Sunbeam Ballia student took second place at an international robotics championship held in Kuala Lumpur, Malaysia — the furthest afield the school has competed, and the only international placing in its record.',
    facts: ['Master Deepak Kumar', '2nd place', 'Cash prize of 1,500 USD', 'Session 2025-26'],
    art: roboArt,
    alt: 'The school’s award graphic for the RoboWunder International Robotics Championship in Kuala Lumpur, showing Deepak Kumar with his drone and the team receiving the award.',
  },
  {
    id: 'innovation',
    kicker: 'National · CBSE',
    title: 'National School Innovation Ranking & Awards',
    detail:
      'Ranked second in Uttar Pradesh at the National School Innovation Ranking and Awards, in recognition of the school’s work in nurturing an innovation mindset among its students.',
    facts: ['Rank 2 — Uttar Pradesh', 'National School Innovation Ranking', 'CBSE'],
    art: innovationArt,
    alt: 'The school’s award graphic for securing 2nd position in Uttar Pradesh at the National School Innovation Awards, showing the citation being presented on stage.',
  },
  {
    id: 'khokho',
    kicker: 'CBSE Cluster V · Sport',
    title: 'Kho-Kho Girls’ Championship',
    detail:
      'The school hosted the cluster Kho-Kho championship in 2016, won the title in two consecutive seasons, and took gold again with the girls’ under-19 side in 2025. It is the school’s strongest sporting record by some distance.',
    facts: ['Gold — Girls U-19, 2025', 'Champions 2018-19 and 2019-20', 'Hosted the championship, 2016'],
    art: khokhoArt,
    alt: 'The school’s award graphic for the CBSE Cluster-V Kho-Kho Girls’ Championship under-19 gold medal, 2025, showing the team with their trophy and medals.',
  },
];

/* ═══ THE SCHOOL'S OWN RECOGNITION ═════════════════════════════════════════
   Third-party credentials, which docs/01 §34 calls the single most under-used
   asset the school has: "very few district-level Indian schools have this much
   provable third-party recognition. It is currently buried on an inner page."
   `figure` is only set where the school publishes a number. */

export interface Credential {
  figure?: string;
  title: string;
  body: string;
  icon: string;
}

export const credentials: Credential[] = [
  {
    figure: '6 years',
    title: 'Education World — #1 Co-Ed Day School of Ballia',
    body: 'Ranked first in the district for six consecutive years, 2019-20 through 2024-25.',
    icon: 'trophy',
  },
  {
    figure: '100',
    title: 'Microsoft Showcase School',
    body: 'One hundred teachers certified as Microsoft Innovative Educator Experts.',
    icon: 'sprout',
  },
  {
    title: 'Sunbeam Eduserve Award',
    body: 'Best School of the Year.',
    icon: 'medal',
  },
  {
    title: 'Brainfeed School Excellence Award',
    body: 'National school excellence recognition.',
    icon: 'medal',
  },
  {
    title: 'Dr. Kalam Leadership Excellence Award',
    body: 'For leadership in school education.',
    icon: 'target',
  },
  {
    figure: 'A & B',
    title: 'NCC affiliations',
    body: 'Both ‘A’ and ‘B’ certificates, with two teachers promoted to officer rank.',
    icon: 'field',
  },
];

/* ═══ THE FULL RECORD ═══════════════════════════════════════════════════════
   Two boards. Sport moved here wholesale from the Sports & Games page — that
   page now ends on coaching and links here, which is exactly the separation the
   audit asks for. */

export interface Record {
  title: string;
  meta: string;
  body: string;
}

export const sportRecord: Record[] = [
  {
    title: 'Asmita Khelo India Women’s League',
    meta: 'National',
    body: 'Handball 1st, Kabaddi 2nd and Volleyball 2nd — three podium finishes in one national women’s league.',
  },
  {
    title: 'Taekwondo Poomse Championship',
    meta: '2025 · Classes I–IX',
    body: 'Twenty-one students entered; ten gold, nine silver and two bronze came back.',
  },
  {
    title: '11th BSKA Karate Championship',
    meta: 'Classes I & II',
    body: 'Fourteen medals — twelve bronze and two silver — from the youngest two year groups.',
  },
  {
    title: 'District Handball',
    meta: 'Junior & Senior',
    body: 'Junior Boys 1st, Senior Boys 2nd, Girls 1st.',
  },
  {
    title: 'Chess',
    meta: 'U-11 Boys',
    body: 'First among two hundred schools in 2018, after qualifying for the nationals in 2016-17.',
  },
  {
    title: 'Junior District Championship',
    meta: 'Overall',
    body: 'Second place overall across the junior events.',
  },
  /* ⚠ ARRIVED LATE, VIA AN ERROR WORTH RECORDING. This match is published on the
     school's Excursions page — the only competition result filed there. When
     that page was rebuilt I removed it as off-topic and wrote in two comments
     that it "now lives on the Achievements page". It did not; I had simply
     deleted it. It is here now because the client asked what had happened to it.
     Moving content between pages is not done until the destination has it. */
  {
    title: 'Kho-Kho final at Prayagraj',
    meta: 'Sunbeam Ballia v M.B.C.I.C',
    body: 'The Kho-Kho team won the final against M.B.C.I.C at Prayagraj.',
  },
];

export const academicRecord: Record[] = [
  {
    title: 'Indian AI Impact Festival',
    meta: '2024 · Class VII',
    body: 'Ayushi, of Class VII, placed first.',
  },
  {
    title: 'Vidyarthi Vigyan Manthan',
    meta: 'National level',
    body: 'Students qualified to the national level of the national science talent search.',
  },
  {
    title: 'National Children’s Science Congress',
    meta: 'National level',
    body: 'National-level qualification in the Children’s Science Congress.',
  },
  {
    title: 'Inspire Award MANAK',
    meta: 'Selections',
    body: 'Student innovations selected for the Department of Science & Technology’s MANAK scheme.',
  },
  {
    title: 'Virtual Interbranch Declamation',
    meta: 'Class IV',
    body: 'Class IV students took the top three positions across the Sunbeam group.',
  },
];
