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
 * ⚠⚠ ABSENT, AND NOW PROVEN RATHER THAN ASSUMED. All 67 pages of the school's
 * site were fetched and searched for "scout", "Bharat Scouts", "rover",
 * "ranger", "bulbul" and "cub": ZERO matches. Nothing in our data, nothing in
 * any asset drop, nothing on their site. The section is held open.
 *
 * ⚠ DO NOT WRITE A SCOUTS SECTION FROM GENERAL KNOWLEDGE. Bharat Scouts &
 * Guides is near-universal in Indian schools, which is precisely why a
 * plausible paragraph would be so easy and so wrong. We do not know the unit
 * exists.
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
  /* ⚠⚠ THE SCOUTS & GUIDES GROUP WAS REMOVED FROM THIS ARRAY ON 19 SEP 2026,
     AT THE CLIENT'S REQUEST, AND NOTHING ABOUT THE FACTS HAS CHANGED. The
     school still publishes no record of a Scouts or Guides unit anywhere — all
     67 pages of its site were searched for "scout", "Bharat Scouts", "rover",
     "ranger", "bulbul" and "cub" and none matched. The client's words were
     "we don't have content for this NOW", so the section is off the page rather
     than standing there saying so.

     ⚠ THE GAP IS STILL TRACKED, in data/site.ts → pending A13 and in docs/07.
     It is not forgotten, it is just not stated to visitors.

     ⚠ WHEN THE CONTENT ARRIVES, three things come back together: this group,
     the page's Scouts wording, and the nav label. See the notes in
     pages/beyond-academics/ncc-scouts-guides.astro and data/navigation.ts —
     they were all narrowed to NCC on the same day. */
];

/** Count checks used by the page and by anyone auditing it. */
export const verifiedCount = groups.filter((g) => g.facts.length > 0).length;
export const pendingGroupCount = groups.filter((g) => g.facts.length === 0).length;
