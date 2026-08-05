/**
 * BEYOND ACADEMICS → EXCURSIONS & EDUCATIONAL TOURS.
 *
 * ═══ EVERY TRIP CARRIES ITS OWN PHOTOGRAPHS ════════════════════════════════
 *
 * That is the whole information design of the live page and it is right: a
 * reader wants to see the trip, not read about it. The first build of this page
 * had NO trip photography because none was in this repository — I had checked
 * `src/assets` and concluded none existed. The photographs were on the school's
 * own live site all along, twenty-seven of them, and are now in
 * `src/assets/excursions/` pulled from sunbeamballia.edu.in/excursions-tours/.
 *
 * The lesson is recorded here because it will recur: "we hold no photograph of
 * X" means no photograph in this repo, which is NOT the same as none existing.
 * Check the live site before designing around an absence.
 *
 * ═══ SOURCING ═════════════════════════════════════════════════════════════
 *
 * Every trip, destination, name and placing is the school's own published copy,
 * from the live page and docs/01 § "Excursions" — including the two students
 * named at SAIMUN and the two teachers who led the Buxar trip, all of whom the
 * school names itself. The prose has been rewritten from the live page's spun
 * text (audit §1 objects to it specifically) without adding a single fact.
 *
 * ⚠ EVERY DATED TRIP IS 2023. docs/01: "Excursions & Tours: most recent dated
 * content is 2023. Audit §4 names this explicitly." The years are printed rather
 * than hidden — a page that quietly drops them reads as current when it is not,
 * and the school cannot see what needs refreshing if the site conceals it. New
 * trips go at the top of `trips` and the page needs no other change.
 *
 * ⚠ WHAT IS DELIBERATELY NOT HERE. The live page also carries a Kho-Kho final at
 * Prayagraj — a competition result, which IS now a real entry in
 * data/achievements.ts § sportRecord. (An earlier version of this comment said
 * it had moved there when it had not: it had simply been dropped. If you find a
 * comment here claiming content lives elsewhere, go and check.) Several
 * in-school activities are also absent and belong under School Activities.
 * Mixing all three is what made the original a scroll of unrelated galleries
 * rather than a page about going places.
 *
 * ═══ ONE UNIT, REPEATED — AND WHY THE TIERS WENT ═══════════════════════════
 *
 * An earlier build tiered this page: a flagship, five "standard" trips on a
 * numbered spine, and a compact tier. The client's question killed it, and the
 * reasoning is worth keeping:
 *
 *   A TIERED PAGE NEEDS A CURATOR. Somebody has to decide, for every trip ever
 *   added, which tier it belongs to — and the more trips there are, the worse
 *   that page looks, because the tiers stop meaning anything and the flagship
 *   becomes arbitrary.
 *
 *   A PAGE MADE OF ONE RICH REPEATED UNIT NEEDS NOBODY. Trip forty lands looking
 *   exactly as good as trip one, with no decision taken. That is what "stays
 *   beautiful as it scales" actually requires.
 *
 * So every trip in `trips` gets an identical full-bleed editorial band: lead
 * photograph edge to edge, title over it, the account below, then that trip's
 * remaining photographs on a strip that runs off the right of the page.
 *
 * `shorts` survives for a real reason, not as a leftover tier: those four have
 * a POSTER or NO IMAGE AT ALL, and a layout built around a full-bleed
 * photograph cannot hold an item that has none.
 */

/* import.meta.glob rather than 27 import lines. The keys are the filenames, so
   a trip lists `['jaipur-1.jpg', …]` and the component resolves them — adding a
   photograph means dropping the file in and naming it, with no import to
   forget. */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/excursions/*.jpg',
  { eager: true },
);

export const photo: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!, mod.default]),
);

export interface Trip {
  id: string;
  place: string;
  title: string;
  year: string;
  who: string;
  /** The school's own account, rewritten from its spun original. */
  body: string;
  /** Printed under the copy where the school published a result. */
  outcome?: string;
  /** Filenames in src/assets/excursions. First is the lead frame. */
  shots: string[];
  alt: string;
}

export const trips: Trip[] = [
  {
    id: 'saimun',
    place: 'Bhubaneswar, Odisha',
    title: 'SAIMUN International Conference',
    year: '2023',
    who: 'Two delegates',
    body: 'Sunbeam Ballia sent two delegates to the Sai International Model United Nations, representing UNESCO and DISEC across the conference’s committee sessions — a General Assembly floor of several hundred delegates, run to full UN procedure.',
    outcome:
      'Shashank Singh took a Special Mention and Diya Singh a High Recommendation, with recognition from the Cabinet Minister of Odisha.',
    shots: ['saimun-4.jpg', 'saimun-2.jpg', 'saimun-3.jpg', 'saimun-6.jpg', 'saimun-1.jpg', 'saimun-5.jpg'],
    alt: 'Sunbeam School Ballia delegates at the SAIMUN international conference in Odisha',
  },
  {
    id: 'imun',
    place: 'Indore, Madhya Pradesh',
    title: 'IMUN Summit',
    year: '2023',
    who: 'Classes XI & XII',
    body: 'Senior students travelled to Indore for the International Model United Nations summit — the longest journey the school makes, and the one that asks the most of a delegate before they even arrive.',
    shots: ['imun-1.jpg', 'imun-2.jpg', 'imun-3.jpg', 'imun-4.jpg'],
    alt: 'Sunbeam School Ballia students with the school flag at the IMUN summit in Indore',
  },
  {
    id: 'jaipur',
    place: 'Jaipur, Rajasthan',
    title: 'Jaipur Heritage Festival',
    year: '2023',
    who: 'Senior students',
    body: 'A festival built around reading a monument rather than photographing it. A building is made with a specific intent, but what it says depends on who is standing in front of it — which is the entire exercise: observe, decode, ask.',
    shots: ['jaipur-2.jpg', 'jaipur-1.jpg', 'jaipur-3.jpg'],
    alt: 'Sunbeam School Ballia students at the Jaipur Heritage Festival',
  },
  {
    id: 'varanasi',
    place: 'Varanasi, Uttar Pradesh',
    title: 'ETM — Education Through Monuments',
    year: '2023',
    who: 'Senior students',
    body: 'The Sunbeam group’s own monuments festival, where each school arrives with a monument it has researched and built. Ballia went with the Buxar Fort — model, drawings and history boards all made in school.',
    shots: ['varanasi-1.jpg', 'varanasi-2.jpg'],
    alt: 'Sunbeam School Ballia students presenting their Buxar Fort project at the ETM festival in Varanasi',
  },  {
    id: 'buxar',
    place: 'Buxar, Bihar',
    title: 'Buxar Fort & Sitaram Upadhyaya Museum',
    year: '2023',
    who: 'Class IX',
    body: 'A day across the state line at the fort and the district museum — stone sculpture, local antiquity and the fort itself, which the school had already spent a term building a model of.',
    outcome: 'Led by Ms. Sneha Singh and Mr. Anurag Thakur.',
    shots: ['buxar-2.jpg', 'buxar-1.jpg', 'buxar-3.jpg', 'buxar-4.jpg'],
    alt: 'Class IX students of Sunbeam School Ballia at the Sitaram Upadhyaya Museum, Buxar',
  },
  {
    id: 'kunwar',
    place: 'Ballia, Uttar Pradesh',
    title: 'Kunwar Singh Inter College & the Old Tehsil',
    year: '2023',
    who: 'Class 6',
    body: 'The oldest institutions in their own town: the college, the old tehsil building and the auditorium — a first excursion for Class 6, and close enough to be back by the last bell.',
    shots: ['kunwar-2.jpg', 'kunwar-1.jpg', 'kunwar-3.jpg', 'kunwar-4.jpg'],
    alt: 'Class 6 students of Sunbeam School Ballia visiting Kunwar Singh Inter College',
  },
  {
    id: 'railway',
    place: 'Ballia Railway Station',
    title: 'Live Paintings & Street Theatre',
    year: '2023',
    who: 'Senior students',
    body: 'Students painted live on the station concourse and sold the work for charity, then took a nukkad natak to Shaheed Park — a day out that ended with money raised rather than souvenirs bought.',
    shots: ['railway-2.jpg', 'railway-3.jpg', 'railway-1.jpg', 'railway-4.jpg'],
    alt: 'Sunbeam School Ballia students painting live at Ballia railway station',
  },
];

/* ═══ NEARER HOME ══════════════════════════════════════════════════════════
   The learning expeditions with no photography of their own. Buxar, Kunwar
   Singh and the railway station used to be on this list and have moved up to
   `trips` now that their pictures exist — listing them twice would pad the page
   with a repeat.

   Short entries on purpose: the school publishes the destination and little
   else, and writing a paragraph per stop would mean writing seven small
   fictions. */

export interface Expedition {
  name: string;
  note: string;
  kind: 'civic' | 'nature' | 'heritage' | 'industry';
}

export const expeditions: Expedition[] = [
  { name: 'Parag Dairy', note: 'How milk gets from a village to a carton.', kind: 'industry' },
  { name: 'Judicial Court, Ballia', note: 'A working court, in session.', kind: 'civic' },
  { name: 'Post Office', note: 'The oldest network in the country, from the inside.', kind: 'civic' },
  { name: 'Van Bihar', note: 'Field study in the forest park.', kind: 'nature' },
  { name: 'Basantpur', note: 'Local history within an afternoon of school.', kind: 'heritage' },
  { name: 'Bhrigu Temple', note: 'The temple Ballia is named for.', kind: 'heritage' },
  { name: 'Karo Dham', note: 'A day out along the river.', kind: 'nature' },
];

/* ═══ THE COMPACT TIER — SHORTER VISITS ════════════════════════════════════
   The third weight on the page. These are real journeys the school published,
   but each has either two photographs, a poster, or nothing — so giving them the
   same panel as a six-photograph conference would leave four of the five looking
   half-built. They get a compact card each instead.

   THREE KINDS OF IMAGE, AND THEY ARE NOT INTERCHANGEABLE:
     `shots`  real photographs, shown as a small pair
     `art`    THE SCHOOL'S OWN POSTER COLLAGE — a designed multi-frame graphic
              with its own caption bar, shown WHOLE and never cropped to fill a
              tile, because cropping a poster cuts off its own headline
     neither  no imagery exists; the card is text and says so by being text

   ⚠ THE LAST ONE IS DELIBERATE. World Non-Violence Day has no photography we can
   use: the live page's gallery there is a generic WordPress set — children
   dancing, wooden blocks, the library — reused as a template across three
   unrelated Hindi sections. I downloaded them, looked at them, and threw them
   away. A card with no picture is better than five wrong ones. */

import bhuArt from '../assets/School Activity in Uniform/Visit to the Cytogenetics Department, BHU.jpg';
import prabhatArt from '../assets/School Activity in Uniform/PRABHAT PHERI.jpg';
import afsArt from '../assets/School Activity in Uniform/afs reginal meet.jpg';

export interface ShortVisit {
  id: string;
  place: string;
  title: string;
  who: string;
  body: string;
  shots?: string[];
  art?: ImageMetadata;
  alt?: string;
}

export const shorts: ShortVisit[] = [
  {
    id: 'bhu',
    place: 'BHU, Varanasi',
    title: 'Cytogenetics Department, Banaras Hindu University',
    who: 'Class XII',
    body: 'A day inside a working university laboratory — microscopes, culture rooms and researchers — for students about to decide whether that is the life they want.',
    art: bhuArt,
    alt: 'The school’s poster for the Class XII visit to the Cytogenetics Department at Banaras Hindu University, showing students at microscopes and in the culture room.',
  },
  {
    id: 'afs',
    place: 'Sai International, Odisha',
    title: 'AFS Regional Meet',
    who: 'School delegation',
    body: 'A regional meet of the AFS intercultural exchange programme, hosted at Sai International in Odisha.',
    art: afsArt,
    alt: 'The school’s poster for the AFS Regional Meet at Sai International, Odisha, showing the delegation on stage and in session.',
  },
  {
    id: 'prabhat',
    place: 'Gurudwara Sahib, Ballia',
    title: 'Prabhat Pheri & Seva',
    who: 'All year groups',
    body: 'The dawn procession and seva at the gurudwara — the shortest journey on this page and the earliest start.',
    art: prabhatArt,
    alt: 'The school’s poster for the Prabhat Pheri and Seva at the Gurudwara Sahib, showing students at seva and at the shrine.',
  },
  {
    id: 'ahimsa',
    place: 'Around Ballia',
    title: 'World Non-Violence Day — Swachhata Abhiyan & Daan Utsav',
    who: 'All year groups',
    body: 'The school marked World Non-Violence Day with a cleanliness drive and a donation festival, taken out into the town rather than held in the hall.',
  },
];

/* Counted, not typed — a hard-coded total is wrong the moment a trip is added. */
export const figures = [
  { figure: String(trips.length + shorts.length + expeditions.length), label: 'Destinations on record' },
  /* FIVE, counted off the destinations above: Uttar Pradesh (Ballia, Varanasi,
     BHU), Rajasthan (Jaipur), Madhya Pradesh (Indore), Odisha (SAIMUN, AFS) and
     BIHAR — Buxar is across the state line, which is easy to miss from Ballia
     and was wrong at four on the first pass. */
  { figure: '5', label: 'States travelled to' },
  {
    figure: String(
      trips.reduce((n, t) => n + t.shots.length, 0) +
        shorts.reduce((n, s) => n + (s.shots?.length ?? 0), 0),
    ),
    label: 'Photographs from the road',
  },
];
