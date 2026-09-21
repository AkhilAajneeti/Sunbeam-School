/**
 * NCC, SCOUTS & GUIDES — /beyond-academics/ncc-scouts-guides/
 *
 * ═══ WHERE EVERY LINE BELOW COMES FROM ═════════════════════════════════════
 *
 * Read on the school's own site, 17 September 2026. Two pages carry the NCC
 * record and both are quoted rather than paraphrased:
 *
 *   https://sunbeamballia.edu.in/about-us/           — the affiliations, the
 *     "first school in district" claim, and the officer training at Kamptee.
 *   https://sunbeamballia.edu.in/event-chronicles/   — the certificate
 *     enrolments, the commanding officers, the two named ANOs, and CATC-283.
 *
 * ⚠⚠ THIS FILE USED TO SAY THE SCHOOL PUBLISHED ALMOST NOTHING ABOUT NCC, AND
 * THAT WAS WRONG. It carried three facts and listed five things as missing —
 * the unit, the officers' names, camps, attendance and photographs. Four of
 * those five were published the whole time; they were simply on pages nobody
 * had read for this purpose. The lesson is the same one the Student Monitors
 * entry in data/classCorner.ts records: search the site, not the navigation.
 *
 * ⚠ ONE THING IS STILL GENUINELY ABSENT. Across all 67 pages of the school's
 * site there is NO cadet count — not a number, not a range. `missing` says so
 * and nothing here estimates it.
 *
 * ⚠⚠ A NAME MATCH THAT IS NOT OURS TO MAKE. The school names "ANO Lt. Pankaj
 * Singh" as one of its two Associate NCC Officers, and its Vice Principal is
 * Pankaj Singh. They are very probably the same person. Nothing in this file or
 * on the page says so, because no published source states it, and merging two
 * real people on the strength of a shared surname is exactly the sort of quiet
 * invention this project does not do. It is flagged for the school to confirm.
 *
 * ⚠ THE TWO SOURCES DISAGREE ON RANK AND ARE BOTH REPORTED AS THEY STAND.
 * about-us says one teacher was promoted to "Third Officer" and one to
 * "Lieutenant"; the later enrolment posts call both "Lt." This file does not
 * reconcile them — it states the training fact in the school's words and lists
 * the officers as the posts name them. Deciding who holds which rank would be
 * inference about named people.
 *
 * ═══ SCOUTS & GUIDES ═══════════════════════════════════════════════════════
 *
 * ⚠⚠ THIS SECTION WAS EMPTY TWICE AND IS NOW SOURCED TWICE OVER. Until 21 Sep
 * 2026 there was nothing at all: all 67 pages of the school's site were fetched
 * and searched for "scout", "Bharat Scouts", "rover", "ranger", "bulbul" and
 * "cub" and NONE matched, so the group was first written as an open gap and
 * then, on 19 Sep, taken off the page entirely at the client's request.
 *
 * On 21 Sep the school supplied a press note and six photographs. Everything in
 * the group below rests on one of two sources, and the split matters:
 *
 *   ① THE BANNER IN THE PHOTOGRAPHS — a primary document, not a claim. It was
 *      cropped and read at 4x before any of this was typed. It reads, in Hindi:
 *        भारत स्काउट और गाइड, उत्तर प्रदेश · जनपद- बलिया
 *        केन्द्रीय माध्यमिक शिक्षा बोर्ड से मान्यता प्राप्त विद्यालयों की बैठक
 *        मुख्य अतिथि- मा० नौशाद अली सिद्दीकी
 *          (सहायक प्रादेशिक संगठन आयुक्त, मण्डल- आजमगढ़)
 *        दिनांक- 14 अक्टूबर 2022 · स्थान- सनबीम स्कूल, अगरसण्डा- बलिया
 *      i.e. the Bharat Scouts & Guides UP, district Ballia, met the CBSE-
 *      affiliated schools here on 14 October 2022, chief guest Naushad Ali
 *      Siddiqui, Assistant State Organisation Commissioner, Azamgarh division.
 *      THE DATE, THE ORGANISATION, THE VENUE AND THE GUEST ALL COME FROM THAT
 *      BANNER — they are photographed, not reported.
 *
 *   ② THE SCHOOL'S OWN PRESS NOTE — the six-day camp and what was taught, and
 *      the claim that the 2022 meeting was the first of its kind. That last one
 *      is ATTRIBUTED in the copy ("the school describes…") for the same reason
 *      the NCC "first in the district" fact is: it is the school's assertion
 *      about other schools, and we have not verified it.
 *
 * ⚠ THE CAMP HAS NO DATE AND NONE IS INVENTED. The press note says "6-Day" and
 * says the camp concluded; it gives no start date, no month and no year. The
 * copy therefore says "six-day" and stops. Do not date it from the photographs
 * — see the caption rule below. The gap is logged in docs/07 → A13.
 *
 * ⚠⚠ CAPTIONS DESCRIBE THE FRAME, NOT THE EVENT. Four of the six photographs
 * show training in the school yard and are very probably the camp; "very
 * probably" is not a caption. Each one says what is visible and stops. Only the
 * two conclave photographs name an event, and only because the banner naming it
 * is inside the frame.
 *
 * ⚠ NO NAMED OFFICERS. Scout leaders appear in five of the six photographs and
 * not one is identified anywhere. `officers` is deliberately absent; the only
 * person named in this group is the chief guest, whose name is on the banner.
 *
 * ⚠ THE PRESS NOTE'S ADJECTIVES ARE NOT REPRODUCED. It runs to "monumental
 * milestone", "prestigious", "rigorous", "impeccable discipline" and "profound
 * gratitude". None of that is here: what a school says about its own camp in a
 * press release is not a fact about the camp. The verbs and the nouns survived;
 * the marketing did not. Do not put it back.
 */
import type { ImageMetadata } from 'astro';

/* ⚠ THE PHOTOGRAPHS ARE OURS ALREADY AND ARE BETTER THAN THE SCHOOL'S. Their
   own NCC posts are Facebook-feed thumbnails at 150x150 and unusable at any
   size. These are full-resolution frames from the asset drops, and every one
   was opened and looked at before being captioned. */
import nccParade from '../assets/banners/banner1.jpg';
import nccGroup from '../assets/banners/banner8.jpg';
import nccKargilCandles from '../assets/school-activities/kargil-vijay-diwas/01.jpg';
import nccKargilAddress from '../assets/school-activities/kargil-vijay-diwas/02.jpg';

/* ⚠ THE SIX SCOUTS & GUIDES FRAMES, supplied by the school 21 Sep 2026. Every
   one was opened and looked at before it was captioned, and the conclave
   banner in sg5/sg6 was cropped and enlarged before anything was typed from
   it. The filenames are the school's own and are left alone. */
import sgFirstAid from '../assets/scouts-and-guides/scouts-and-guides.jpeg';
import sgStave from '../assets/scouts-and-guides/scouts-and-guides-2.jpeg';
import sgAssembly from '../assets/scouts-and-guides/scouts-and-guides-3.jpeg';
import sgInstruction from '../assets/scouts-and-guides/scouts-and-guides-4.jpeg';
import sgConclaveSeated from '../assets/scouts-and-guides/scouts-and-guides-5.jpeg';
import sgConclaveStanding from '../assets/scouts-and-guides/scouts-and-guides-6.jpeg';

export interface GroupFact {
  /** Printed as the card's own claim. Must be checkable. */
  label: string;
  detail: string;
}

/** A dated thing the school says happened, in the school's own terms. */
export interface GroupRecord {
  title: string;
  detail: string;
}

export interface GroupPhoto {
  src: ImageMetadata;
  /** Describes what is in the frame and stops. */
  alt: string;
  caption: string;
}

export interface UniformedGroup {
  id: string;
  title: string;
  /** One line on what the group is at this school, and nothing beyond it. */
  standfirst: string;
  icon: 'badge' | 'target' | 'compass' | 'star';
  /** Verified, published facts. Empty means nothing is published. */
  facts: GroupFact[];
  /** Named office-holders, exactly as the school prints them. */
  officers?: { name: string; role: string }[];
  /** Dated activity the school has published. */
  record?: GroupRecord[];
  photos?: GroupPhoto[];
  /** What the school has not published — printed verbatim on the page. */
  missing: string[];
  /** Shown when `facts` is empty: the whole group is awaiting content. */
  pending?: string;
  /**
   * ⚠ PLACEHOLDER SUB-SECTIONS, client instruction 17 Sep 2026. Each renders
   * through ui/PendingBlock.astro so the page is structurally complete without
   * asserting anything.
   *
   * ⚠⚠ `body` IS ALWAYS FUTURE TENSE AND ALWAYS ABOUT THE SECTION, NEVER ABOUT
   * THE SCHOOL. "Details ... will be updated here" is allowed. "The school runs
   * three camps a year" is not, and is exactly what these blocks exist to keep
   * off the page. `needs` names missing THINGS, never values.
   */
  placeholders?: {
    title: string;
    body: string;
    needs?: string[];
    icon?: 'doc' | 'person' | 'star' | 'calendar' | 'compass';
  }[];
}

export const groups: UniformedGroup[] = [
  {
    id: 'ncc',
    title: 'National Cadet Corps',
    standfirst:
      'Sunbeam School Ballia was the first school in the district to hold NCC affiliation at both certificate levels, and two of its teachers serve as Associate NCC Officers.',
    icon: 'badge',
    facts: [
      {
        label: 'First in the district',
        /* ⚠ THE SCHOOL'S OWN CLAIM, AND THE WORDING IS THEIRS. about-us states
           it twice — for 'B' alone (2020-24) and for 'A' & 'B' (2023-24). */
        detail:
          'The school states it is the first in the district to receive ‘A’ and ‘B’ certificate affiliation.',
      },
      {
        label: 'NCC ‘A’ certificate · 90 UP Battalion',
        detail: 'Affiliated for the junior certificate through 90 UP BN, NCC Ballia.',
      },
      {
        label: 'NCC ‘B’ certificate · 93 UP Battalion',
        detail: 'Affiliated for the senior certificate through 93 UP BN, NCC Ballia.',
      },
      {
        label: 'Two Associate NCC Officers',
        detail:
          'Two teachers completed the PRCN 180 course at the NCC Officer Training Academy, Kamptee, Nagpur — one promoted to Third Officer, one to Lieutenant.',
      },
    ],
    /* ⚠ NAMES AS THE SCHOOL PRINTS THEM, INCLUDING ITS OWN SPACING. The
       enrolment post runs "ANO Lt. Pankaj Singh, Lt.Rajendra Singh" — the
       missing space after "Lt." is theirs; the name is not. */
    officers: [
      { name: 'Lt. Pankaj Singh', role: 'Associate NCC Officer' },
      { name: 'Lt. Rajendra Singh', role: 'Associate NCC Officer' },
    ],
    record: [
      {
        title: 'CATC-283 hosted at the school',
        detail:
          'A ten-day Combined Annual Training Camp under the banner of 90 UP BN NCC Ballia, 20–29 May 2025, opened by the Director.',
      },
      {
        title: 'NCC ‘A’ certificate enrolment',
        detail:
          'Conducted under Commanding Officer Lt. Col. R. S. Punia, 90 UP Battalion.',
      },
      {
        title: 'NCC ‘B’ certificate enrolment',
        detail:
          'Conducted under the aegis of 93 UP Battalion, commanded by Col. Anurag Tiwari, with the battalion’s TI staff and Training JCO.',
      },
      {
        title: 'Rakshabandhan with the 93 UP Battalion',
        detail:
          'Children from Nursery to Class 5 tied rakhis to the PI staff of 93 UP BN NCC Ballia.',
      },
    ],
    photos: [
      {
        src: nccParade,
        alt: 'The NCC contingent of Sunbeam School Ballia drawn up in ranks under the school canopy while an officer inspects the parade.',
        caption: 'The contingent on parade, under inspection',
      },
      {
        src: nccGroup,
        alt: 'NCC cadets of Sunbeam School Ballia in uniform, formed up on the school stage with two officers in front of a decorated backdrop.',
        caption: 'Cadets and officers, formed up on the hall stage',
      },
      {
        src: nccKargilCandles,
        alt: 'NCC cadets and staff of Sunbeam School Ballia lighting candles around a table at the school’s Kargil Vijay Diwas commemoration.',
        caption: 'Kargil Vijay Diwas — the candle memorial',
      },
      {
        src: nccKargilAddress,
        alt: 'Two NCC cadets of Sunbeam School Ballia speaking from the podium beneath a Kargil Vijay Diwas banner.',
        caption: 'Kargil Vijay Diwas — cadets address the school',
      },
    ],
    /* ⚠ EMPTY, AND THAT IS A PRESENTATION CHOICE RATHER THAN A CLAIM. Cadet
       strength is still the one part of the NCC record the school has not
       published; the client asked on 19 Sep 2026 for the "what is missing"
       chips and the cadet-strength block to come off the page. The gap lives in
       data/site.ts → pending A13.
       ⚠ NOTHING HERE ASSERTS A CADET NUMBER, and nothing may. An empty
       `missing` means "we are not printing the gap", not "there is no gap". */
    missing: [],
  },
  /* ⚠⚠ RESTORED 21 SEP 2026 WITH REAL CONTENT. This group was removed from the
     array on 19 Sep because the school had published nothing about scouting
     anywhere; the press note and the six photographs closed that gap. The page,
     its title, its meta description and the nav label were all narrowed to NCC
     on the day it went and have been widened again alongside it — if you touch
     one, check the other three. */
  {
    id: 'scouts-guides',
    title: 'Bharat Scouts & Guides',
    standfirst:
      'Scouting and guiding at the school runs with the Ballia district association of the Bharat Scouts & Guides, Uttar Pradesh — which held its meeting of the district’s CBSE-affiliated schools on this campus on 14 October 2022.',
    icon: 'compass',
    facts: [
      {
        label: 'Bharat Scouts & Guides · Janpad Ballia',
        detail:
          'The troop trains with the Ballia district association of the Bharat Scouts & Guides, Uttar Pradesh.',
      },
      {
        label: 'Host of the district CBSE meeting',
        /* ⚠ FROM THE BANNER IN THE FRAME, NOT FROM THE PRESS NOTE. */
        detail:
          'The association’s meeting for CBSE-affiliated schools was held here on 14 October 2022, at Agarsanda.',
      },
      {
        label: 'A first, in the school’s own words',
        /* ⚠ ATTRIBUTED, LIKE THE NCC "first in the district" FACT ABOVE. This
           is the school's claim about other schools in the district and we have
           not verified it. Do not strip "The school describes". */
        detail:
          'The school describes that meeting as the first of its kind held to bring CBSE schools into the Scouts & Guides programme.',
      },
      {
        label: 'Six-day outdoor camp',
        detail:
          'Students completed a six-day Scouts and Guides outdoor camp, run by instructors under the supervision of school staff.',
      },
    ],
    record: [
      {
        title: 'Meeting of the district’s CBSE-affiliated schools',
        detail:
          'Held at the school on 14 October 2022 by the Bharat Scouts & Guides, Uttar Pradesh, Janpad Ballia. The banner names the chief guest as Naushad Ali Siddiqui, Assistant State Organisation Commissioner for the Azamgarh division, and welcomes the principals and representatives attending.',
      },
      {
        title: 'Six-day Scouts and Guides outdoor camp',
        /* ⚠ THE FOUR SKILLS ARE THE PRESS NOTE'S OWN. Nothing has been added to
           the list and nothing is dated — see the header. */
        detail:
          'First aid, outdoor survival technique and pitching tents, taught through group drills and joint problem-solving. The school reports the camp concluded successfully.',
      },
    ],
    photos: [
      {
        src: sgConclaveSeated,
        alt: 'Officers of the Bharat Scouts & Guides in uniform seated with guests beneath the Hindi banner for the district meeting of CBSE-affiliated schools held at Sunbeam School Ballia on 14 October 2022.',
        caption: 'The district meeting for CBSE schools, 14 October 2022',
      },
      {
        src: sgConclaveStanding,
        alt: 'Scout officers, school representatives and guests standing in a row beneath the district meeting banner at Sunbeam School Ballia, one of them holding a booklet.',
        caption: 'Officers and school representatives at the meeting',
      },
      {
        src: sgAssembly,
        alt: 'A large group of Scouts and Guides of Sunbeam School Ballia in uniform with neckerchiefs, seated on mats in the school yard with a teacher standing in front of the school buses.',
        caption: 'The troop assembled in the school yard',
      },
      {
        src: sgStave,
        alt: 'A Scout leader in uniform holding up a long bamboo stave while addressing Scouts and Guides seated on mats in the school yard.',
        caption: 'A stave held up for the troop to see',
      },
      {
        src: sgInstruction,
        alt: 'A Scout leader in uniform instructing Guides seated in a circle on a mat in the school yard, two students standing beside him.',
        caption: 'An instruction session, with the Guides seated in a circle',
      },
      {
        src: sgFirstAid,
        alt: 'A Scout leader in uniform tying a bandage around the knee of a student seated on a stool, during first-aid practice at Sunbeam School Ballia.',
        caption: 'First aid — a bandage tied in practice',
      },
    ],
    /* ⚠ EMPTY FOR THE SAME REASON AS NCC ABOVE: the client asked on 19 Sep 2026
       for the "what the school has not published" chips to come off this page.
       There ARE still gaps here — the camp has no dates and no Scout leader is
       named anywhere — and they live in docs/07 → A13. An empty list means "we
       are not printing the gap", never "there is no gap". */
    missing: [],
  },
];

/** Count checks used by the page and by anyone auditing it. */
export const verifiedCount = groups.filter((g) => g.facts.length > 0).length;
export const pendingGroupCount = groups.filter((g) => g.facts.length === 0).length;
