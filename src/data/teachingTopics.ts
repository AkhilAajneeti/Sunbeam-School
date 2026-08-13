import type { AssessmentTopic } from './academics';

/**
 * TEACHING & LEARNING — §2C, as sub-topics with pages of their own.
 *
 * ═══ WHY FOURTEEN BULLETS BECAME SIX PAGES ═════════════════════════════════
 *
 * The client's brief lists fourteen: Teaching Methodology, Smart Classrooms,
 * Experiential Learning, Project-Based Learning, Collaborative Learning, STEM
 * Education, Robotics & Coding, AI & Digital Literacy, Reading Programme,
 * Language Development, Mathematics & Science Enrichment, Academic Clubs,
 * Library Programme, Laboratories — with the instruction to "combine those which
 * are relatable, no need that much submenus".
 *
 * ⚠ THE GROUPING IS THE SCHOOL'S OWN, NOT A TIDY-UP I INVENTED. The existing
 * /academics/teaching-learning/ page is already built from six blocks in
 * data/academics.ts, and their eyebrows name the groups outright: "Teaching
 * methodology", "The room itself", "Experiential & project-based", "STEM,
 * robotics & enrichment", "Reading & language", "The full inventory". Every one
 * of the fourteen bullets falls inside one of them. So the consolidation follows
 * content the school has already published rather than a judgement about which
 * words look similar.
 *
 * Where each bullet went:
 *   Teaching Methodology ·············· methodology
 *   Collaborative Learning ············ methodology
 *   Smart Classrooms ·················· smart-classrooms
 *   AI & Digital Literacy ············· smart-classrooms
 *   Experiential Learning ············· experiential-learning
 *   Project-Based Learning ············ experiential-learning
 *   STEM Education ···················· stem-robotics
 *   Robotics & Coding ················· stem-robotics
 *   Mathematics & Science Enrichment ·· stem-robotics
 *   Reading Programme ················· reading-language
 *   Language Development ·············· reading-language
 *   Library Programme ················· reading-language
 *   Laboratories ······················ laboratories-clubs
 *   Academic Clubs ···················· laboratories-clubs
 *
 * ⚠ NOTHING HERE IS WRITTEN FROM NOTHING. Every body below restates what
 * data/academics.ts already carries for that block — the four-move lesson shape,
 * the twelve laboratories, the fifteen thousand books, the Microsoft-certified
 * teachers. Where the school has published no detail, the topic says so through
 * `owed` rather than being padded to length.
 */
export const teachingTopics: AssessmentTopic[] = [
  {
    id: 'overview',
    label: 'Teaching & Learning',
    hint: 'The whole picture — method, rooms, labs, reading and clubs.',
    href: '/academics/teaching-learning/',
    existing: true,
  },
  {
    id: 'methodology',
    label: 'Teaching Methodology',
    hint: 'Four moves in the same order, whatever the subject.',
    href: '/academics/teaching-learning/methodology/',
    title: 'Teaching Methodology',
    standfirst:
      'A lesson opens on a question rather than an answer — four moves, in the same order, whatever the subject.',
    photo: 'activity',
    body: [
      'A lesson at Sunbeam Ballia follows four moves in a fixed order: Ask, Do, Discuss, Show. It opens on something the class cannot yet do — a problem, a text, a reading that does not add up — rather than on the conclusion.',
      'Students then handle the thing itself: apparatus, source, data, code, not a description of it. Groups compare what they found and have to defend it, which is where most of the talking happens and where the students rather than the teacher do it.',
      'Collaborative learning is not a separate programme here; it is the third move of every lesson. Defending a result to the group is what turns having an answer into understanding one.',
    ],
    points: [
      { k: 'Ask', v: 'The lesson opens on something the class cannot yet do.' },
      { k: 'Do', v: 'Students handle the apparatus, source, data or code themselves.' },
      { k: 'Discuss', v: 'Groups compare findings and defend them to each other.' },
      { k: 'Show', v: 'The class demonstrates what it now understands.' },
    ],
  },
  {
    id: 'smart-classrooms',
    label: 'Smart Classrooms & Digital Literacy',
    hint: 'Interactive panels in every room, and AI taught as a subject.',
    href: '/academics/teaching-learning/smart-classrooms/',
    title: 'Smart Classrooms & Digital Literacy',
    standfirst:
      'Every room, not a special room — and the certification is the teachers, not the hardware.',
    photo: 'computer',
    body: [
      'The digital provision is in every classroom rather than in one showcase room booked by rotation. Interactive flat panels are standard equipment, which is what lets the method above work in an ordinary lesson rather than only in a demonstration.',
      'The school’s emphasis is on the teaching rather than the equipment: staff hold Microsoft Innovative Educator Expert certification. Hardware is replaceable; a certified teacher is what makes the panel do anything.',
      'AI and digital literacy arrive as a subject with its own time, not as a word attached to existing lessons. Students are taught what the tools are and how they work.',
    ],
  },
  {
    id: 'experiential-learning',
    label: 'Experiential & Project-Based Learning',
    hint: 'Met in the hand before it is met in the exam.',
    href: '/academics/teaching-learning/experiential-learning/',
    title: 'Experiential & Project-Based Learning',
    standfirst:
      'Twelve laboratories, inquiry rooms and a schools’ entrepreneurship programme — the subject met in the hand before it is met in the exam.',
    photo: 'chem',
    body: [
      'Experiential and project-based work is the school’s stated approach rather than an enrichment bolted onto it: a topic is met in the hand before it is met in the exam.',
      'Twelve laboratories and a set of inquiry rooms carry that work, and the KIDS entrepreneurship programme gives it an outlet beyond the subject timetable.',
    ],
  },
  {
    id: 'stem-robotics',
    label: 'STEM, Robotics & Enrichment',
    hint: 'The Robotics Lab, the computer and science labs, and what is run in them.',
    href: '/academics/teaching-learning/stem-robotics/',
    title: 'STEM, Robotics & Enrichment',
    standfirst: 'Where the science actually happens — the rooms, and the national programmes run in them.',
    photo: 'computer',
    body: [
      'The school’s STEM provision is a set of named rooms rather than a claim: a Robotics Lab, computer laboratories, science laboratories, and mathematics and language labs.',
      'Robotics and coding are taught in the Robotics Lab, and the school enters national programmes from it — the international robotics placing on the achievements page came out of this work.',
      'Mathematics and science enrichment runs through the same rooms rather than as a separate stream.',
    ],
  },
  {
    id: 'reading-language',
    label: 'Reading, Language & Library',
    hint: 'Fifteen thousand books, and a room to read them in.',
    href: '/academics/teaching-learning/reading-language/',
    title: 'Reading, Language & Library',
    standfirst: 'Fifteen thousand books in the Nalanda Library, and a reading programme that uses them.',
    photo: 'library',
    body: [
      'The Nalanda Library holds around fifteen thousand books, and the reading programme is built on having a room to read them in rather than on a reading list circulated at home.',
      'The library programme, the reading programme and language development are run together, which is why they sit on one page here: in the school’s own description they are the same effort seen from three sides.',
    ],
  },
  {
    id: 'laboratories-clubs',
    label: 'Laboratories & Academic Clubs',
    hint: 'Every room, listed plainly — and the clubs that use them.',
    href: '/academics/teaching-learning/laboratories-clubs/',
    title: 'Laboratories & Academic Clubs',
    standfirst: 'The full inventory: every subject laboratory and inquiry room, and the clubs that meet in them.',
    photo: 'chem',
    body: [
      'This is the inventory rather than the argument — every subject laboratory and inquiry room the school lists, set out plainly so a parent can see what exists.',
      'The academic clubs meet in the same rooms; the school groups its inquiry rooms and its clubs together, and this page keeps that pairing.',
    ],
  },
];
