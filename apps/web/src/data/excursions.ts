/**
 * BEYOND ACADEMICS → EXCURSIONS & EDUCATIONAL TOURS.
 *
 * ═══ THE CONTENT IS THE LIVE PAGE'S, VERBATIM ══════════════════════════════
 *
 * Client instruction, given twice: "use same content as it". Every `title` and
 * every string in `body` below is copied CHARACTER FOR CHARACTER from
 * sunbeamballia.edu.in/excursions-tours/ — capitalisation, punctuation, emoji,
 * Hindi, and the typos.
 *
 * ⚠ DO NOT TIDY THIS COPY. An earlier build rewrote the headings into house
 * style ("OUR STUDENTS AT JAIPUR HERITAGE FESTIVAL 2023" became "Jaipur
 * Heritage Festival") and rewrote every account. The client asked for the
 * original back. Known warts, all deliberate, none to be "fixed" without being
 * asked:
 *
 *   · jaipur   — "…apply to the object.Our students has shown…" (missing space)
 *   · kunwar   — heading has no space after the comma: "College,Ballia"
 *   · buxar    — "Students of class IX has visited…"
 *   · bhu      — heading has a space before the comma: "BHU , VARANASI"
 *   · saimun   — "deligates", "Orissa" / "ODISHA" both used
 *
 * If the school wants this prose rewritten — and audit §1 does object to the
 * site's copy generally — that is a content decision for them to take, not one
 * to take on their behalf inside a "keep it the same" instruction.
 *
 * ═══ ORDER IS THE LIVE PAGE'S ORDER ════════════════════════════════════════
 *
 * Not the furthest-reach-first order an earlier build imposed. Eleven sections,
 * top to bottom, exactly as they appear.
 *
 * ═══ IMAGES ════════════════════════════════════════════════════════════════
 *
 * Twenty-nine photographs in `src/assets/excursions/`, pulled from the live
 * page and mapped section by section from the rendered HTML rather than by
 * guessing at filenames.
 *
 * ⚠ THE LAST THREE SECTIONS SHARE ONE PARAGRAPH AND ONE GALLERY ON THE LIVE
 * SITE. Sections 9, 10 and 11 — the two Hindi ones and the BHU visit — each
 * carry the identical "Our school also firmly believes that enjoyments is an
 * integral part of one's life…" paragraph and the identical six images
 * (Untitled-1, 10, 9, 7, 5, 3), which are a generic WordPress set: children
 * dancing, wooden blocks, the library. The text is reproduced because it is the
 * page's content and the client asked for it.
 *
 * THE GALLERY IS NOT, and this is the one place this file departs from
 * verbatim. Those photographs are not of a Jayaprakash Narayan commemoration,
 * not of a Swachhata Abhiyan, and not of Banaras Hindu University. Putting them
 * under those three headings would state something untrue about what the
 * photographs show, which is the one rule this project does not bend. BHU keeps
 * the school's own real poster instead; the two Hindi sections run as text
 * until real photographs exist. Say the word and the recycled set goes in.
 */

/* import.meta.glob rather than 29 import lines. The keys are the filenames, so
   a section lists `['jaipur-1.jpg', …]` and the component resolves them — adding
   a photograph means dropping the file in and naming it, with no import to
   forget. */
const files = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/excursions/*.jpg',
  { eager: true },
);

export const photo: Record<string, ImageMetadata> = Object.fromEntries(
  Object.entries(files).map(([path, mod]) => [path.split('/').pop()!, mod.default]),
);

export interface Section {
  id: string;
  /** VERBATIM from the live page. See the header before editing. */
  title: string;
  /** VERBATIM, one string per paragraph as the live page breaks them. */
  body: string[];
  /** Eyebrow — where and when. Ours, and factual; the live page states neither. */
  place?: string;
  year?: string;
  /** The pill under the heading. Omitted where the school names no year group. */
  who?: string;
  /**
   * BCP-47 tag for the TITLE where it is not English. Required by docs/05 § M
   * ("any Hindi content marked lang=hi"), and it also drives the Devanagari
   * leading and the split-animation opt-out in Band.astro — see the notes
   * there. The bodies of these two sections are English, so this is the title's
   * language, not the section's.
   */
  lang?: string;
  /** Filenames in src/assets/excursions, in the live page's own order. */
  shots?: string[];
  /** A designed poster collage. Shown whole, never cropped. */
  art?: ImageMetadata;
  alt?: string;
  /**
   * THE SHOT THIS SECTION IS OWED. Set only where the school has published no
   * usable photograph, and it renders a labelled placeholder at the stage's
   * ratio so the band keeps the same two-column shape as its neighbours.
   *
   * ⚠ THIS EXISTS INSTEAD OF BORROWING ANOTHER SECTION'S PHOTOGRAPHS. Filling
   * these two with, say, the SAIMUN conference images would put a Model United
   * Nations floor in Odisha under a Jayaprakash Narayan commemoration and a
   * cleanliness drive — a visitor reads a photograph as a picture OF the thing
   * it sits under. docs/07's placeholder policy is explicit: placeholders are
   * deliberately obvious and are never filled with substitutes. This keeps the
   * layout right AND keeps the gap visible so it actually gets closed.
   */
  needs?: string;
}

import bhuArt from '../assets/School Activity in Uniform/Visit to the Cytogenetics Department, BHU.jpg';

export const sections: Section[] = [
  {
    id: 'jaipur',
    title: 'OUR STUDENTS AT JAIPUR HERITAGE FESTIVAL 2023',
    place: 'Jaipur, Rajasthan',
    year: '2023',
    body: [
      'Analyzing a monument can guide students to engage in observation, decoding, and inquiry, sparking curiosity and deeper learning. Monuments are created with a specific intent, but how they communicate with the viewer varies just as much as the meaning that different people might apply to the object.Our students has shown their tremendous performance at Jaipur and the festival was completely mesmerizing with new art of learning',
    ],
    shots: ['jaipur-2.jpg', 'jaipur-1.jpg', 'jaipur-3.jpg'],
    alt: 'Sunbeam School Ballia students at the Jaipur Heritage Festival',
  },
  {
    id: 'kunwar',
    title: 'Students of class 6th have visited Kunwar Singh inter College,Ballia old tehsil and auditorium',
    place: 'Ballia, Uttar Pradesh',
    year: '2023',
    who: 'Class 6',
    body: [
      'Expeditions hold significance for various reasons. They promote exploration, fostering a deeper understanding of our world. Expeditions also contribute to scientific research, uncovering new information about geography, biology, and more. Additionally, they inspire a sense of adventure and teamwork, cultivating personal growth and resilience. Students of class 6th have visited Kunwar Singh inter College, Ballia old tehsil and auditorium and learnt about different realm. Glimpses of the same has been shared with you.',
    ],
    shots: ['kunwar-2.jpg', 'kunwar-1.jpg', 'kunwar-3.jpg', 'kunwar-4.jpg'],
    alt: 'Class 6 students of Sunbeam School Ballia visiting Kunwar Singh Inter College',
  },
  {
    id: 'varanasi',
    title: 'ETM VARANASI FESTIVAL 2023',
    place: 'Varanasi, Uttar Pradesh',
    year: '2023',
    body: [
      'Analyzing a monument can guide students to engage in observation, decoding, and inquiry, sparking curiosity and deeper learning. Monuments are created with a specific intent, but how they communicate with the viewer varies just as much as the meaning that different people might apply to the object. Our students participated in the Education through monuments festival which was organised by Sunbeam group of institutions.This participation was an exposure to the new realm of knowledge where subjects meet.',
    ],
    shots: ['varanasi-1.jpg', 'varanasi-2.jpg'],
    alt: 'Sunbeam School Ballia students presenting their Buxar Fort project at the ETM festival in Varanasi',
  },
  {
    id: 'imun',
    title: 'SUNBEAM BALLIA AT IMUN INDORE 2023',
    place: 'Indore, Madhya Pradesh',
    year: '2023',
    who: 'Classes XI & XII',
    body: [
      'We are happy to announce that Our XI & XII students participated in this international event & and our students got words of appreciation from renowned personalities like HEMA MALINI JI & RAJNATH SINGH(Pic is attached of written appreciation)🙏',
      'Program Overview – MU20 Summit Indore 2023',
      'Dates: October 27, 28, and 29',
      "Venue: The Emerald Heights International School, Indore & SVKM's Narsee Monjee Institute of Management Studies, Indore Campus",
      'Participants: Over 2000 students from 150+ schools across 7+ countries',
      "MU20 summit offers an unrivalled opportunity for students to stretch their boundaries, enhance their skill set, and form lasting connections. This year's standout challenges include:",
      'Model United Nations: Dive into diplomatic negotiations and global problem-solving.',
      'Entrepreneurship Challenge: Spark innovative solutions to real-world challenges.',
      'Impact Challenge: Lead positive societal change through creative projects.',
      'Theatrics Challenge: Explore performing arts and storytelling.',
      'Debating Challenge: Hone public speaking and critical thinking skills.',
      'We are proud of our Students & Mentor',
    ],
    shots: ['imun-1.jpg', 'imun-2.jpg', 'imun-3.jpg', 'imun-4.jpg'],
    alt: 'Sunbeam School Ballia students with the school flag at the IMUN summit in Indore',
  },
  {
    /* ⚠ RESTORED. This section was dropped from an earlier build of this page on
       the reasoning that a match result is not an excursion, and the client
       asked for it back. It is on the live excursions page, so it is on this
       one. The same fixture also appears in data/achievements.ts § sportRecord;
       that is the school's own duplication and both are the school's copy. */
    id: 'khokho',
    title: 'SUNBEAM BALLIA KHO-KHO TEAM WINS THE FINAL MATCH SUNBEAM vs M.B.C.I.C AT PRAYAGRAJ',
    place: 'Prayagraj, Uttar Pradesh',
    year: '2023',
    who: 'Kho-Kho team',
    body: [
      'There is nothing quite like the feeling of victory. When we win at something, our body shoots us with dopamine. Boom, we feel like we can conquer the world. This is the feeling that can be dangerous, but it also has the ability to produce greatness.',
      'Our Kho-kho team won the final match against their opponents 🎉🎉 Congratulations to the students & their mentors 🎊🎊',
    ],
    shots: ['khokho-1.jpg', 'khokho-2.jpg'],
    alt: 'The Sunbeam School Ballia Kho-Kho team at the CBSE Cluster V championship at Prayagraj',
  },
  {
    id: 'railway',
    title: 'Students created live paintings at Ballia railway station',
    place: 'Ballia Railway Station',
    year: '2023',
    body: [
      'Art is a powerful tool for increasing awareness because it engages our emotions, transcends language barriers, and encourages creative expression, ultimately driving positive social change.',
      'Students have Sunbeam School Ballia have spread awareness using art as a medium.',
      'They have created live paintings at Ballia railway station and sold them for the donation purpose.',
      'On the other hand few groups of students have also performed a Nukkad Natak to raise awareness at Shaheed Park',
    ],
    shots: ['railway-2.jpg', 'railway-3.jpg', 'railway-1.jpg', 'railway-4.jpg'],
    alt: 'Sunbeam School Ballia students painting live at Ballia railway station',
  },
  {
    id: 'buxar',
    title: 'Students of class IX has visited the Buxar fort and museum',
    place: 'Buxar, Bihar',
    year: '2023',
    who: 'Class IX',
    body: [
      'As we all know educational trips are very important for students to develop experiential learning .',
      'And in the process of that Sunbeam is following the concept of educational expenditure, students of class IX has visited the Buxar fort and museum under the guidance of their mentors, Ms. Sneha Singh and Mr. Anurag Thakur',
    ],
    shots: ['buxar-2.jpg', 'buxar-1.jpg', 'buxar-3.jpg', 'buxar-4.jpg'],
    alt: 'Class IX students of Sunbeam School Ballia at the Sitaram Upadhyaya Museum, Buxar',
  },
  {
    id: 'saimun',
    title: 'SAIMUN INTERNATIONAL CONFERENCE 2023',
    place: 'Bhubaneswar, Odisha',
    year: '2023',
    body: [
      'Sunbeam School Ballia students have shown their presence in SAIMUN 2023 with their zeal & enthusiasm by being the deligates of UNESCO & DISEC.',
      'In the UNESCO committee, delegates have been engaged in escalating committee proceedings and are uniting in common purpose to collaborate on pertinent issues based on Artificial Intelligence & Rule of Law. As a great man truly said, "Where leaders emerge, amidst the chaos and anxiety of the first session it is indeed time to strategize and form alliances."',
      'The ceremony was inaugurated by respected CM of Orissa Mr. Naveen Patnaik.',
      'It’s an old saying that hard work always gives positive results. Dedication can lead us to conquer any difficulties.',
      'Sunbeam School Ballia proudly announced that our Two students Mas. Shashank Singh and Diya Singh who went to represent UNESCO & DISEC AT SAIMUN 2023 have grabbed',
      '# Special Mention',
      '# High Recommendations',
      'in their committees.',
      'We are overwhelmed to receive these prizes out of 10 different countries. We have received a token of appreciation from the honorable CABINET MINISTER SHRI ATANU SABYASACHI NAYAK SIR of ODISHA.',
    ],
    shots: ['saimun-4.jpg', 'saimun-2.jpg', 'saimun-3.jpg', 'saimun-6.jpg', 'saimun-1.jpg', 'saimun-5.jpg'],
    alt: 'Sunbeam School Ballia delegates at the SAIMUN international conference in Odisha',
  },
  {
    /* Sections 9–11 share one paragraph on the live site. Reproduced as
       published — see the header. */
    id: 'jayaprakash',
    title: 'लोकनायक जय प्रकाश जी की जन्मभूमि और जननायक चन्द्रशेखर जी की कर्मभूमि पर SUNBEAM स्कूल, बलिया की पूरी टीम स्वाभिमान और संघर्ष की पाठशाला.',
    lang: 'hi',
    place: 'Ballia, Uttar Pradesh',
    needs:
      'Sunbeam School Ballia students at the Jayaprakash Narayan birthplace and the Chandrashekhar commemoration — the school team on site. Landscape 3:2, minimum 2000px on the long edge.',
    body: [
      'Our school also firmly believes that enjoyments is an integral part of one’s life and, learning and fun must not be confined into four walls of class rooms. So our school arrange a tour or a class list to different places like – " Parag Diary, Judicial Court Post Office, Van Bihar, Basantpur, Bhrigu Temple, Karo Dham, Post Office" and many more which help children to learn and groom and also to build up an interactive medium between students and teachers and the trip called as: "Learning Expedition".',
    ],
  },
  {
    id: 'ahimsa',
    title: 'स्वच्छता अभियान व दान उत्सव चलाकर सनबीम स्कूल ने मनाया विश्व अहिंसा दिवस',
    lang: 'hi',
    place: 'Around Ballia',
    needs:
      'The Swachhata Abhiyan cleanliness drive and the Daan Utsav donation festival around Ballia — students taking part, out in the town. Landscape 3:2, minimum 2000px on the long edge.',
    body: [
      'Our school also firmly believes that enjoyments is an integral part of one’s life and, learning and fun must not be confined into four walls of class rooms. So our school arrange a tour or a class list to different places like – " Parag Diary, Judicial Court Post Office, Van Bihar, Basantpur, Bhrigu Temple, Karo Dham, Post Office" and many more which help children to learn and groom and also to build up an interactive medium between students and teachers and the trip called as: "Learning Expedition".',
    ],
  },
  {
    id: 'bhu',
    title: 'EDUCATIONAL VISIT TO BHU , VARANASI OF CLASS XII STUDENTS.',
    place: 'BHU, Varanasi',
    who: 'Class XII',
    body: [
      'Our school also firmly believes that enjoyments is an integral part of one’s life and, learning and fun must not be confined into four walls of class rooms. So our school arrange a tour or a class list to different places like – " Parag Diary, Judicial Court Post Office, Van Bihar, Basantpur, Bhrigu Temple, Karo Dham, Post Office" and many more which help children to learn and groom and also to build up an interactive medium between students and teachers and the trip called as: "Learning Expedition".',
    ],
    art: bhuArt,
    alt: 'The school’s poster for the Class XII visit to the Cytogenetics Department at Banaras Hindu University, showing students at microscopes and in the culture room.',
  },
];

/* ═══ NEARER HOME ══════════════════════════════════════════════════════════
   The local learning expeditions the live page names inside its closing
   paragraph — Parag Dairy, the court, the post office and the rest — pulled out
   as a readable register rather than left in a run-on sentence.

   Short entries on purpose: the school publishes the destination and little
   else, and writing a paragraph per stop would mean writing seven small
   fictions. */

export interface Expedition {
  name: string;
  note: string;
  kind: 'civic' | 'nature' | 'heritage' | 'industry';
  /**
   * A name from FacIcon's set — the site's existing stroke icons, reused rather
   * than a fourth icon system introduced for seven items. Each one depicts the
   * PLACE, not the category: a gavel for the court, a temple for Bhrigu. An icon
   * that merely restates its own category label would be the decorative-icon
   * pattern docs/05 § H5 rules out.
   */
  icon: string;
}

export const expeditions: Expedition[] = [
  { name: 'Parag Dairy', note: 'How milk gets from a village to a carton.', kind: 'industry', icon: 'milk' },
  { name: 'Judicial Court, Ballia', note: 'A working court, in session.', kind: 'civic', icon: 'gavel' },
  { name: 'Post Office', note: 'The oldest network in the country, from the inside.', kind: 'civic', icon: 'mail' },
  { name: 'Van Bihar', note: 'Field study in the forest park.', kind: 'nature', icon: 'forest' },
  { name: 'Basantpur', note: 'Local history within an afternoon of school.', kind: 'heritage', icon: 'hall' },
  { name: 'Bhrigu Temple', note: 'The temple Ballia is named for.', kind: 'heritage', icon: 'temple' },
  { name: 'Karo Dham', note: 'A day out along the river.', kind: 'nature', icon: 'water' },
];
