/**
 * ACADEMICS CONTENT — single source for the seven-page Academics section.
 *
 * WHY THIS FILE EXISTS. The section is a hub plus six detail pages, and several
 * facts appear on more than one of them: the counters run on the overview and on
 * Student Success, the laboratory inventory is teased on the overview and listed
 * in full on Teaching & Learning. Duplicating those strings across seven .astro
 * files is how a site ends up claiming 9 laboratories on one page and 11 on
 * another. Everything factual lives here once.
 *
 * ═══ RULES THIS FILE KEEPS ══════════════════════════════════════════════════
 *
 * 1 · Every figure below is published by the school and recorded in
 *     docs/01-existing-site-analysis.md § 5. Nothing is estimated.
 *
 * 2 · THREE THINGS THE SCHOOL HAS NOT PUBLISHED, and which therefore appear
 *     nowhere in this section as numbers (docs/01 § 3.8):
 *       board results (X & XII) — "no pass %, no toppers, no year-on-year data"
 *       university placements   — "Not mentioned"
 *       scholarships            — "Not mentioned"
 *     Each is represented by a designed awaiting-content state instead. Asset
 *     requests A1 (results) and A11 (placements, scholarships).
 *
 * 3 · Admission AGE criteria are locked inside a Drive-hosted prospectus, so the
 *     structure pages carry class bands and never ages. Asset request A8.
 *
 * 4 · Where the client brief names a practice the school has never described in
 *     its own words — teaching philosophy, inquiry-based learning, critical
 *     thinking — `what` DEFINES the practice and `anchor` carries a verified
 *     Sunbeam fact only where one genuinely exists. A definition is honest; a
 *     claim about how this school teaches would not be. The school's own
 *     statement is asset request A10.
 */
import { school } from './site';

/* ═══ THE SIX CHAPTERS — drives the overview hub and the section nav ═════════ */
export const chapters = [
  {
    slug: 'philosophy',
    n: '01',
    title: 'Academic Philosophy',
    href: '/academics/philosophy/',
    lede: 'Seven ideas the school organises its academic work around, and the documents behind them.',
    teaser: 'Duty · Devotion · Discipline',
  },
  {
    slug: 'structure',
    n: '02',
    title: 'Academic Structure',
    href: '/academics/structure/',
    lede: 'Fourteen years from Nursery to Class XII, and four streams to choose between at the end.',
    teaser: 'Nursery → Class XII',
  },
  {
    slug: 'teaching-learning',
    n: '03',
    title: 'Teaching & Learning',
    href: '/academics/teaching-learning/',
    lede: 'Nine laboratories, a 15,000-book library, and 100 Microsoft-certified teachers.',
    teaser: 'Microsoft Showcase School',
  },
  {
    slug: 'assessment',
    n: '04',
    title: 'Assessment & Support',
    href: '/academics/assessment/',
    lede: 'How a year runs — taught content, internal assessment, boards, and the support around them.',
    teaser: 'Six steps, one cycle',
  },
  {
    slug: 'student-success',
    n: '05',
    title: 'Student Success',
    href: '/academics/student-success/',
    lede: 'Named results, national programmes, and where the school will publish its board data.',
    teaser: '#1 in Ballia, six years',
  },
  {
    slug: 'parent-partnership',
    n: '06',
    title: 'Parent Partnership',
    href: '/academics/parent-partnership/',
    lede: 'Six standing channels between the staff room and home — scheduled, not improvised.',
    teaser: 'Orientation to report card',
  },
] as const;

/* ═══ COUNTERS — eight published quantities ══════════════════════════════════
   Quantities only. A rank, an affiliation number or a school code is an
   identifier, and counting one up animates something that is not a quantity. */
export const counters = [
  { n: 100, suffix: '', label: 'Teachers certified as Microsoft Innovative Educator Experts' },
  { n: 6, suffix: '', label: 'Consecutive years ranked #1 Co-Ed Day School in Ballia' },
  { n: 15000, suffix: '+', label: 'Books in the Nalanda Library' },
  { n: 9, suffix: '', label: 'Subject laboratories' },
  { n: 30, suffix: '+', label: 'Digitally smart classrooms' },
  { n: 49, suffix: '+', label: 'Interactive flat panels' },
  { n: 2200, suffix: '+', label: 'Students, Nursery to Class XII' },
  { n: 130, suffix: '+', label: 'Teaching staff' },
] as const;

/** Three for the overview hero — the most legible of the eight at a glance. */
export const heroStats = [
  { n: 130, suffix: '+', label: 'Teaching staff' },
  { n: 9, suffix: '', label: 'Laboratories' },
  { n: 15000, suffix: '+', label: 'Library books' },
] as const;

/* ═══ 01 · PHILOSOPHY ═══════════════════════════════════════════════════════ */
export const philosophy = [
  {
    n: '01',
    title: 'Teaching philosophy',
    /** Constellation glyph — carried from the client's own ecosystem design. */
    mark: '✦',
    what:
      'The school states its purpose through its motto — Duty, Devotion and Discipline — and its ' +
      'punch line, Educating the FUTURE!',
    anchor: school.motto,
  },
  {
    n: '02',
    title: 'Student-centred learning',
    /** Constellation glyph — carried from the client's own ecosystem design. */
    mark: '↗',
    what:
      'Teaching organised around the learner rather than the lecture: the pace, the grouping and ' +
      'the task follow what a particular child is ready for next.',
    anchor: null,
  },
  {
    n: '03',
    title: 'Experiential learning',
    /** Constellation glyph — carried from the client's own ecosystem design. */
    mark: '⌁',
    what:
      'Understanding built by doing — practical work, fieldwork and making, so that a concept is ' +
      'met in the hand before it is met in the exam.',
    anchor: 'Nine laboratories · learning expeditions',
  },
  {
    n: '04',
    title: 'Inquiry-based learning',
    /** Constellation glyph — carried from the client's own ecosystem design. */
    mark: '?',
    what:
      'Lessons that open with a question rather than a conclusion, and ask students to investigate ' +
      'their way to the answer.',
    anchor: 'Srijan Lab · MUN Lab · Active Learning Lab',
  },
  {
    n: '05',
    title: 'Critical thinking',
    /** Constellation glyph — carried from the client's own ecosystem design. */
    mark: '✳',
    what:
      'Weighing evidence, testing a claim and arguing a position — the habits that outlast any ' +
      'particular syllabus.',
    anchor: 'Model United Nations · declamation · science congress',
  },
  {
    n: '06',
    title: 'Curriculum',
    /** Constellation glyph — carried from the client's own ecosystem design. */
    mark: '▦',
    what:
      'The CBSE curriculum, published by the school as its PRECEPT syllabus documents for every ' +
      'class from Nursery to XII.',
    anchor: 'PRECEPT syllabus, Nursery–XII · session 2026-27',
  },
  {
    n: '07',
    title: 'Affiliation',
    /** Constellation glyph — carried from the client's own ecosystem design. */
    mark: '✓',
    what:
      'Affiliated to the Central Board of Secondary Education, Delhi, as a co-educational senior ' +
      'secondary school.',
    anchor: `CBSE ${school.affiliationNo} · School Code ${school.schoolCode}`,
  },
] as const;

/* ═══ 01 · TEACHING PHILOSOPHY — the feature band ════════════════════════════
   The four commitments the Academic Philosophy page opens on, and the supporting
   statement beneath them.

   WHAT IS SAFE TO SAY HERE, and it is a narrow line. Rule 4 at the top of this
   file applies in full: the school has never published a teaching-philosophy
   statement of its own (asset request A10), so nothing below claims a practice
   this school has not described. Each card DEFINES the commitment the client
   brief names, and every figure inside it — nine laboratories, PRECEPT, 130+
   staff, 100 Microsoft Innovative Educator Experts, the named competitions — is
   already verified in docs/01 § 5 and appears elsewhere in this file.

   `icon` is a key, not markup. The line-art glyphs live in
   components/academics/TeachingPhilosophy.astro so the SVG paths stay out of a
   data file, and an unmatched key renders no icon rather than breaking the card.
*/
export const teachingPhilosophy = {
  eyebrow: 'Teaching philosophy',
  /**
   * Split so the emphasised phrase can carry the .t-squiggle plate, and it ENDS
   * on the plate deliberately. The heading read "…the learner, not the lecture"
   * for one draft; at 58px the line broke after the plate and left the comma
   * stranded at the head of the last line, which is a typographic fault no
   * balance value fixes. The contrast moved to the standfirst, where it has room
   * to be a sentence.
   */
  headingLead: 'Learning built around',
  headingMark: 'the learner',
  stand:
    'Not the lecture — the learner. Duty, Devotion and Discipline is more than the ring on a ' +
    'crest: it is where a lesson plan starts, and four commitments shape the way every class is ' +
    'taught at ' + school.name + '.',

  cards: [
    {
      icon: 'learner',
      title: 'Student-Centred Learning',
      body:
        'Pace, grouping and task follow what a particular child is ready for next — teaching ' +
        'organised around the learner rather than around the lecture.',
    },
    {
      icon: 'inquiry',
      title: 'Experiential & Inquiry-Based Learning',
      body:
        'A concept met in the hand before it is met in the exam: nine laboratories, practical work, ' +
        'and lessons that open with a question rather than a conclusion.',
    },
    {
      icon: 'spark',
      title: 'Critical Thinking & Creativity',
      body:
        'Weighing evidence, testing a claim, arguing a position — and the room to make something ' +
        'new, from Model United Nations to the science congress.',
    },
    {
      icon: 'curriculum',
      title: 'Curriculum Excellence',
      body:
        'The CBSE curriculum, published class by class as our PRECEPT syllabus from Nursery to ' +
        'Class XII and taught by ' + school.teachingStaff + ' staff.',
    },
  ],

  /** The statement under the cards. Facts only — see the note above. */
  creed: {
    eyebrow: 'The thinking behind it',

    /**
     * THE PULL QUOTE, in two halves with the cap illustration set between them —
     * the reference puts its glyph mid-phrase ("professional 🎓 educators"), not
     * at a clause break, and that is where the break falls here too.
     *
     * ONLY THE SCHOOL'S OWN WORDS ARE INSIDE THE QUOTE MARKS. The motto is
     * genuinely published; the sentence around it is this page's voice. Wrapping
     * the whole line in quotes would attribute an editorial statement to the
     * school, which is the one thing rule 4 at the top of this file rules out.
     */
    quoteBefore: '“Duty, Devotion, Discipline” is not a',
    quoteAfter:
      'line on a crest — it is where a lesson plan starts, and what an ordinary Tuesday morning ' +
      'is measured against.',
    quoteSource: `The school’s own motto · ${school.tagline}`,

    paragraphs: [
      'Those three words are the school’s own, read off the crest on its gate. What they are not ' +
        'is decoration: each one is a claim about how a room should run, and the four commitments ' +
        'above are this page’s attempt to make them checkable rather than ceremonial.',
      'In practice that means a curriculum taught to the CBSE scheme and published for every class ' +
        'from Nursery to XII, rooms built for practical work rather than for demonstration, and ' +
        'staff who are still learning themselves — 100 of them certified as Microsoft Innovative ' +
        'Educator Experts.',
    ],

    /**
     * The three principles, each with a one-line gloss. The WORDS are the
     * school's, off the crest. The glosses are editorial — they say what the
     * word asks of a school, and make no claim about what this school does. That
     * distinction is the whole reason the panel can carry them at all.
     */
    principles: [
      { n: '01', word: 'Duty', gloss: 'The work a school owes a child, and a child owes the subject.' },
      { n: '02', word: 'Devotion', gloss: 'Attention paid to one learner at a time, not to a class average.' },
      { n: '03', word: 'Discipline', gloss: 'The habit that makes ability count: turning up, and finishing.' },
    ],

    /** Small verified proofs, set as a hairline row under the paragraphs. */
    proofs: [
      { value: '9', label: 'Subject laboratories' },
      { value: '100', label: 'Microsoft-certified teachers' },
      { value: 'Nursery–XII', label: 'PRECEPT syllabus published' },
    ],
  },
} as const;

/* ═══ 01 · AFFILIATION DETAILS ══════════════════════════════════════════════
   Four cells, and every value is an identifier the school publishes on its own
   /affiliation/ page — nothing here is derived, rounded or inferred. The board's
   full legal name leads because "CBSE" alone is what every school in the country
   writes; the number and the code are what a parent actually checks.

   NO COUNT-UP ON THESE. An affiliation number is not a quantity (see the note on
   `counters` above) and animating one up reads as a slot machine. */
export const affiliation = {
  eyebrow: 'Affiliation',
  heading: 'Affiliation details',
  stand:
    'The school\'s standing with its board, in the four terms a parent or a transferring student ' +
    'is usually asked for.',
  cells: [
    {
      label: 'Affiliating Board',
      lines: [school.boardFull, `${school.board} — affiliated since inception`],
    },
    {
      label: 'Affiliation Number',
      lines: [school.affiliationNo, `School Code ${school.schoolCode}`],
    },
    {
      label: 'School Category',
      lines: ['Co-educational Senior Secondary', `Day school · ${school.classRange}`],
    },
    {
      label: 'Streams at Senior Secondary',
      lines: [school.streams.slice(0, 2).join(' · '), school.streams.slice(2).join(' · ')],
    },
  ],
} as const;

/* ═══ 02 · STRUCTURE ════════════════════════════════════════════════════════
   `tone` drives a per-stage accent. Class bands are the CBSE structure the
   school operates within; the school publishes its own range as Nursery to
   Class XII. NO AGES — see rule 3 at the top of this file. */
export const stages = [
  {
    key: 'early',
    tone: '#c8281f',
    stage: 'Early Years',
    classes: 'Nursery · LKG · UKG',
    body:
      'The first years on campus, in rooms and grounds built for them — a kids park, a toy ' +
      'library, sand and water play, and a little agriculture patch.',
    focus: ['Play-led routine', 'Early language', 'Number sense'],
    milestone: 'School as a place you want to be',
  },
  {
    key: 'primary',
    tone: '#e8a800',
    stage: 'Primary',
    classes: 'Classes I – V',
    body:
      'Reading, number and the first structured subjects, taught across smart classrooms and the ' +
      'junior computer lab.',
    focus: ['Reading fluency', 'Written expression', 'Digital literacy'],
    milestone: 'Reading fluently · writing at length',
  },
  {
    key: 'middle',
    tone: '#2f6b4f',
    stage: 'Middle',
    classes: 'Classes VI – VIII',
    body:
      'Specialist teaching begins and the laboratories open up. Class VII takes the school’s KIDS ' +
      'entrepreneurship programme.',
    focus: ['Practical science', 'Independent projects', 'KIDS entrepreneurship, Class VII'],
    milestone: 'Practical science · independent projects',
  },
  {
    key: 'secondary',
    tone: '#17529b',
    stage: 'Secondary',
    classes: 'Classes IX – X',
    body:
      'The two years that build to the first board examination, with the full science, mathematics ' +
      'and language laboratory programme.',
    focus: ['Full laboratory programme', 'Board preparation', 'Subject choice ahead'],
    milestone: 'CBSE Class X board examination',
  },
  {
    key: 'senior',
    tone: '#c93c0a',
    stage: 'Senior Secondary',
    classes: 'Classes XI – XII',
    body:
      'Four streams to choose between, each taught to board level: ' + school.streams.join(', ') + '.',
    focus: [...school.streams],
    milestone: 'CBSE Class XII board examination',
  },
] as const;

/* ═══ 03 · TEACHING & LEARNING ══════════════════════════════════════════════
   `photo` is a filename in src/assets/photos, or null.

   NULL MEANS THE FACILITY IS REAL AND WE HOLD NO PICTURE OF IT. The repository
   contains stock imagery that would fit these slots — an empty Western lecture
   room as "Smart-classrooms.jpg", a consumer DJI product shot as
   "Robotics-drones.jpg" — and using it would be a straightforward lie about
   rooms this school genuinely has. Text card instead. Photography request A2. */
export const facilities = [
  {
    title: 'Smart classrooms',
    fact: '30+ rooms · 49+ interactive flat panels',
    body: 'Digital teaching is the default across the school, not a room you visit once a week.',
    photo: 'sb-phy-lab.jpg',
    alt: 'Students of Sunbeam School Ballia working at benches in the physics laboratory, with portraits of Nikola Tesla and Michael Faraday on the wall.',
    span: 'wide',
  },
  {
    title: 'Nalanda Library',
    fact: '15,000+ books · 25 periodicals',
    body: 'A reading room with journals and magazines alongside the collection.',
    photo: 'sb-library.jpg',
    alt: 'Students of Sunbeam School Ballia reading and working at tables in the Nalanda Library.',
    span: 'tall',
  },
  {
    title: 'Science laboratories',
    fact: 'Physics · Chemistry · Biology',
    body: 'Three dedicated laboratories, used as teaching rooms rather than demonstration theatres.',
    photo: 'sb-bio-lab.jpg',
    alt: 'Two students of Sunbeam School Ballia handling glassware in the biology laboratory.',
    span: '',
  },
  {
    title: 'Robotics Lab',
    fact: 'Drone · 3-D printer · telescope · embedded systems',
    body:
      'The rarest room in the school, and part of why its students reach national science ' +
      'competitions. Photography of this lab is still outstanding.',
    photo: null,
    alt: '',
    span: '',
  },
  {
    title: 'Computer laboratories',
    fact: 'Junior and senior · 40+ machines each',
    body: 'Two full labs, so a whole class works one-to-a-machine rather than two-to-a-screen.',
    photo: 'sb-comp-lab-2.jpg',
    alt: 'Younger students of Sunbeam School Ballia working at desktop computers in the junior computer laboratory.',
    span: '',
  },
  {
    title: 'Mathematics & Language labs',
    fact: 'Two subject laboratories',
    body: 'Mathematics and language taught as practical subjects, with rooms of their own.',
    photo: 'sb-maths-lab.jpg',
    alt: 'Students of Sunbeam School Ballia seated on the floor of a decorated activity room during a lesson.',
    span: '',
  },
  {
    title: 'Inquiry rooms',
    fact: 'Srijan · MUN · Geography · Active Learning',
    body: 'Four more laboratories for the kind of work that has no single right answer.',
    photo: 'sb-sci-lab.jpg',
    alt: 'A student of Sunbeam School Ballia using a microscope beside plant specimens in flasks.',
    span: '',
  },
] as const;

/* ═══ 03 · TEACHING & LEARNING — the six-chapter story ═══════════════════════
   The brief names fourteen topics. Presented as fourteen tiles they are an
   inventory; presented as six chapters they are an argument about how the school
   teaches, which is what the section is for. The mapping:

     ch1 method   — Teaching Methodology · Collaborative Learning
     ch2 room     — Smart Classrooms · AI & Digital Literacy
     ch3 handsOn  — Experiential Learning · Project-Based Learning
     ch4 rail     — STEM · Robotics & Coding · Mathematics & Science Enrichment
     ch5 words    — Reading Programme · Language Development · Library Programme
     ch6 index    — Laboratories · Academic Clubs

   THE HONESTY LINE IS THE SAME ONE AS EVERYWHERE ELSE IN THIS FILE (rule 4).
   Where the school publishes a room, a count or a result, it is stated as fact.
   Where the brief names a PRACTICE the school has never described in its own
   words — a methodology, a project-based programme, a reading programme — the
   copy DEFINES the practice and carries a verified Sunbeam anchor only where one
   genuinely exists. Nothing here claims a programme this school has not said it
   runs. The school's own account of its pedagogy is asset request A10. */
export const teachingLearning = {
  /* ── ch1 · Teaching methodology + collaborative learning ─────────────────── */
  method: {
    eyebrow: 'Teaching methodology',
    heading: 'A lesson starts with a question, not an answer',
    stand:
      'Four moves, in the same order, whatever the subject. It is the shape a lesson takes when the ' +
      'point is understanding rather than coverage.',
    /** Definitions of the method, not claims about a named programme. */
    steps: [
      {
        n: '01',
        step: 'Ask',
        body: 'The lesson opens on something the class cannot yet do — a problem, a text, a reading that does not add up.',
      },
      {
        n: '02',
        step: 'Do',
        body: 'Students handle the thing itself: apparatus, source, data, code. Not a description of it.',
      },
      {
        n: '03',
        step: 'Discuss',
        body: 'Groups compare what they found and have to defend it. This is where most of the talking happens, and the students do it.',
      },
      {
        n: '04',
        step: 'Show',
        body: 'The work is presented to somebody, not only handed in to be marked.',
      },
    ],
    /** The collaborative-learning note, given its own plate. */
    aside: {
      label: 'Collaborative learning',
      body:
        'Step three is the one most timetables lose. Kept in, it turns a class of thirty into ' +
        'small groups that have to reach agreement — which is a harder test of understanding ' +
        'than a written answer.',
    },
    proofs: [
      { value: '130', suffix: '+', label: 'Teaching staff' },
      { value: '100', suffix: '', label: 'Microsoft Innovative Educator Experts' },
    ],
  },

  /* ── ch2 · Smart classrooms + AI and digital literacy ────────────────────── */
  room: {
    eyebrow: 'The room itself',
    heading: 'Digital is the default here, not a room you visit once a week',
    /** Three beats, read against a pinned stat stage. */
    beats: [
      {
        key: 'panels',
        title: 'Every room, not a special room',
        body:
          'Thirty-plus classrooms carry an interactive flat panel, and there are more panels than ' +
          'rooms. A teacher does not book the technology — it is already where the class is.',
        anchor: '30+ smart classrooms · 49+ interactive flat panels',
      },
      {
        key: 'teachers',
        title: 'The certification is the teachers, not the hardware',
        body:
          'A screen changes nothing on its own. One hundred of the school’s teachers are certified ' +
          'Microsoft Innovative Educator Experts, which is what makes Sunbeam Ballia a Microsoft ' +
          'Showcase School.',
        anchor: 'Microsoft Showcase School',
      },
      {
        key: 'ai',
        title: 'AI arrives as a subject, not a slogan',
        body:
          'Digital literacy here means reading a tool critically as well as using it. The school ' +
          'does not have to argue that this reaches students: one of them won a national AI ' +
          'festival from Class VII.',
        anchor: 'Indian AI Impact Festival 2024 — first place, Ayushi, Class VII',
      },
    ],
    /** Counters for the pinned stage. Quantities only. */
    stats: [
      { n: 30, suffix: '+', label: 'Digitally smart classrooms' },
      { n: 49, suffix: '+', label: 'Interactive flat panels' },
      { n: 100, suffix: '', label: 'Microsoft-certified teachers' },
    ],
  },

  /* ── ch3 · Experiential + project-based learning ─────────────────────────── */
  handsOn: {
    eyebrow: 'Experiential & project-based',
    heading: 'Met in the hand before it is met in the exam',
    paragraphs: [
      'Experiential learning is the plainest idea in teaching and the hardest to timetable: a ' +
        'concept is understood after you have done something with it, not after you have been told ' +
        'it. It needs rooms, apparatus and time, which is why it is usually the first thing a ' +
        'crowded syllabus drops.',
      'Project work is the longer form of the same idea. A project runs past a single period, has ' +
        'a real output at the end, and cannot be completed by remembering — which makes it the ' +
        'closest thing a school has to the work students will actually do afterwards.',
    ],
    /** Verified rooms and programmes that make the above possible here. */
    anchors: [
      { label: 'Nine subject laboratories', detail: 'Physics · Chemistry · Biology · Mathematics · Language · two computer labs · inquiry rooms' },
      { label: 'KIDS entrepreneurship', detail: 'The school’s own programme, taken in Class VII' },
      { label: 'Inquiry rooms', detail: 'Srijan · Model United Nations · Geography · Active Learning' },
    ],
    pull: 'A project cannot be completed by remembering.',
  },

  /* ── ch4 · STEM, robotics and coding, enrichment ─────────────────────────── */
  rail: {
    eyebrow: 'STEM, robotics & enrichment',
    heading: 'Where the science actually happens',
    stand: 'Six rooms and programmes, in the order a student meets them. Scroll the rail.',
    /**
     * Each panel is composed differently on purpose — `kind` drives that, so the
     * rail never reads as six identical cards.
     *   figure  a big verified quantity leads
     *   photo   a photograph leads
     *   gap     no photograph exists and the panel says so (see `photo: null`
     *           in `facilities` above, and photography request A2)
     *   list    named programmes
     */
    panels: [
      {
        kind: 'gap',
        n: '01',
        title: 'Robotics Lab',
        fact: 'Drone · 3-D printer · telescope · embedded systems',
        body:
          'The rarest room in the school and the reason its students reach national science ' +
          'competitions. Coding is taught here against hardware that answers back.',
        photo: null,
      },
      {
        kind: 'photo',
        n: '02',
        title: 'Computer laboratories',
        fact: 'Junior and senior · 40+ machines each',
        body:
          'Two full laboratories, so a whole class works one-to-a-machine rather than ' +
          'two-to-a-screen. The junior lab is where coding starts.',
        photo: 'sb-comp-lab-2.jpg',
        alt: 'Younger students of Sunbeam School Ballia working at desktop computers in the junior computer laboratory.',
      },
      {
        kind: 'figure',
        n: '03',
        title: 'Science laboratories',
        fact: 'Physics · Chemistry · Biology',
        body:
          'Three dedicated rooms, used as teaching spaces rather than demonstration theatres — the ' +
          'class works at the benches.',
        figure: '3',
        figureLabel: 'Dedicated science rooms',
        photo: 'sb-bio-lab.jpg',
        alt: 'Two students of Sunbeam School Ballia handling glassware in the biology laboratory.',
      },
      {
        kind: 'photo',
        n: '04',
        title: 'Mathematics & Language labs',
        fact: 'Two subject laboratories',
        body:
          'Mathematics and language given practical rooms of their own — the enrichment happens in ' +
          'timetabled space, not in an after-school hour.',
        photo: 'sb-maths-lab.jpg',
        alt: 'Students of Sunbeam School Ballia seated on the floor of a decorated activity room during a lesson.',
      },
      {
        kind: 'list',
        n: '05',
        title: 'National programmes',
        fact: 'Entered, not just offered',
        body: 'Where enrichment leaves the building and gets measured against other schools.',
        items: [
          'Vidyarthi Vigyan Manthan',
          'National Children’s Science Congress',
          'Inspire Award MANAK',
        ],
        photo: null,
      },
      {
        kind: 'figure',
        n: '06',
        title: 'Science laboratories, all told',
        fact: 'Across every stage',
        body:
          'Nine subject laboratories in total, opening up from Class VI as specialist teaching ' +
          'begins and running to the Class XII board practicals.',
        figure: '9',
        figureLabel: 'Subject laboratories',
        photo: 'sb-sci-lab.jpg',
        alt: 'A student of Sunbeam School Ballia using a microscope beside plant specimens in flasks.',
      },
    ],
  },

  /* ── ch5 · Reading, language, library ────────────────────────────────────── */
  words: {
    eyebrow: 'Reading & language',
    heading: 'Fifteen thousand books, and a room to read them in',
    stand:
      'A reading habit is the one advantage that compounds across every other subject. It needs ' +
      'stock, a place to sit, and time on the timetable.',
    figure: { n: 15000, suffix: '+', label: 'Books in the Nalanda Library' },
    photo: 'sb-library.jpg',
    alt: 'Students of Sunbeam School Ballia reading and working at tables in the Nalanda Library.',
    /** Three entries on a vertical rail. */
    entries: [
      {
        label: 'Library programme',
        body:
          'The Nalanda Library holds more than fifteen thousand books alongside twenty-five ' +
          'periodicals, in a reading room rather than a store cupboard.',
        anchor: '15,000+ books · 25 periodicals',
      },
      {
        label: 'Reading programme',
        body:
          'Reading is treated as a taught skill with a room and a stock behind it, not as homework ' +
          'that happens somewhere else. Periodicals matter here: they are how a reader finds a ' +
          'subject nobody assigned them.',
        anchor: null,
      },
      {
        label: 'Language development',
        body:
          'The school runs a language laboratory as one of its nine subject labs — language ' +
          'practised aloud and recorded, which is the part a textbook cannot do.',
        anchor: 'Language laboratory',
      },
    ],
  },

  /* ── ch6 · The index: laboratories and academic clubs ────────────────────── */
  index: {
    eyebrow: 'The full inventory',
    heading: 'Every room, listed plainly',
    stand:
      'Nine subject laboratories and four inquiry rooms. No room appears on this list that the ' +
      'school does not publish.',
    groups: [
      {
        label: 'Nine subject laboratories',
        items: [
          { name: 'Physics', detail: 'Board practicals, Classes IX–XII' },
          { name: 'Chemistry', detail: 'Board practicals, Classes IX–XII' },
          { name: 'Biology', detail: 'Board practicals, Classes IX–XII' },
          { name: 'Mathematics', detail: 'Mathematics as a practical subject' },
          { name: 'Language', detail: 'Spoken language, recorded and reviewed' },
          { name: 'Computer — junior', detail: '40+ machines' },
          { name: 'Computer — senior', detail: '40+ machines' },
          { name: 'Robotics', detail: 'Drone · 3-D printer · telescope · embedded systems' },
          { name: 'General science', detail: 'Middle-school practical work' },
        ],
      },
      {
        label: 'Four inquiry rooms · academic clubs',
        items: [
          { name: 'Srijan Lab', detail: 'Making and design' },
          { name: 'Model United Nations Lab', detail: 'Debate, position papers, committee' },
          { name: 'Geography Lab', detail: 'Maps, instruments, fieldwork' },
          { name: 'Active Learning Lab', detail: 'Work with no single right answer' },
        ],
      },
    ],
    /** Stated, not hidden — the same principle as `facilities`. */
    note:
      'Photography of the Robotics Lab is still outstanding. The repository holds a stock drone ' +
      'image that would fit the slot, and using it would misrepresent a room this school ' +
      'genuinely has. Request A2.',
  },
} as const;

/* ═══ 04 · ASSESSMENT ═══════════════════════════════════════════════════════ */
export const cycle = [
  { step: 'Learning', body: 'Taught content, to the CBSE scheme of work.' },
  { step: 'Activities', body: 'Practical, project and laboratory work alongside it.' },
  { step: 'Assessment', body: 'Internal assessment through the year; boards at X and XII.' },
  { step: 'Feedback', body: 'Results to parents, and a parent–teacher meeting to discuss them.' },
  { step: 'Improvement', body: 'Remedial support and mentoring where a subject needs it.' },
  { step: 'Achievement', body: 'Board examinations, and competitions beyond the school.' },
] as const;

export const supports = [
  { label: 'Homework', body: 'Set to a published pattern so the week is predictable at home.', href: null },
  { label: 'Parent–teacher meetings', body: 'Scheduled on the academic calendar, not called ad hoc.', href: '/academics/parent-partnership/' },
  { label: 'Academic calendar', body: 'Terms, holidays and examination dates, published for the session.', href: '/academics/academic-calendar/' },
  { label: 'Mentoring', body: 'A member of staff who knows the child, not only the class list.', href: null },
  { label: 'Competitive exams', body: 'Vidyarthi Vigyan Manthan · National Children’s Science Congress · Inspire Award MANAK.', href: '/academics/student-success/#olympiads' },
  { label: 'Remedial support', body: 'Additional teaching for a student who is behind in a subject.', href: null },
] as const;

/* ═══ 05 · STUDENT SUCCESS ══════════════════════════════════════════════════
   Named, dated and checkable. No aggregate award totals — the school publishes
   none, and "100+ Olympiad awards" would be a number we made up. */
export const wins = [
  {
    year: '2024',
    title: 'Indian AI Impact Festival',
    detail: 'First place — Ayushi, Class VII.',
  },
  {
    year: '2019–25',
    title: 'Education World India School Rankings',
    detail: '#1 Co-Ed Day School in Ballia for six consecutive years, 2019-20 through 2024-25.',
  },
  {
    year: 'Ongoing',
    title: 'National science programmes',
    detail: 'Vidyarthi Vigyan Manthan · National Children’s Science Congress · Inspire Award MANAK selections.',
  },
  {
    year: 'Ongoing',
    title: 'Microsoft Showcase School',
    detail: '100 teachers certified as Microsoft Innovative Educator Experts.',
  },
  {
    year: 'Ongoing',
    title: 'Brainfeed School Excellence Award',
    detail: 'Alongside the Dr. Kalam Leadership Excellence Award and the Sunbeam Eduserve Award.',
  },
  {
    year: 'Ongoing',
    title: 'NCC ‘A’ and ‘B’ affiliations',
    detail: 'Two members of staff promoted to officer rank.',
  },
] as const;

export const guidance = [
  { label: 'Subject selection', body: 'Choosing between ' + school.streams.join(', ') + ' at the end of Class X.' },
  { label: 'Career guidance', body: 'Where a stream leads, discussed before it is chosen rather than after.' },
  { label: 'University counselling', body: 'Support with applications and entrance requirements.' },
  { label: 'Olympiads', body: 'Entry to the national science and mathematics programmes above.' },
] as const;

/** The three unpublished items, as designed awaiting states rather than numbers. */
export const awaiting = [
  {
    id: 'A1',
    title: 'Board results are not published yet',
    body:
      'The single most-searched fact about any CBSE school, and Sunbeam does not currently state ' +
      'it. This page will not estimate it. When the school supplies Class X and XII results, they ' +
      'belong here.',
  },
  {
    id: 'A11',
    title: 'University destinations are not published yet',
    body:
      'Where students go after Class XII is not recorded anywhere on the school’s site. A list of ' +
      'real destinations would be one of the strongest things on this page.',
  },
  {
    id: 'A11',
    title: 'Scholarships are not published yet',
    body:
      'The audit records scholarships as "not mentioned". If the school offers any, they are worth ' +
      'stating plainly — parents search for this.',
  },
] as const;

/* ═══ 06 · PARENT PARTNERSHIP ═══════════════════════════════════════════════
   Ordered as a parent actually meets them: before joining, then through the
   year, then whenever needed. */
export const partnership = [
  { phase: 'Before joining', label: 'Orientation', body: 'Before the session begins, so a new parent starts informed.', href: '/admissions/orientation/', external: false },
  { phase: 'Before joining', label: 'FAQs', body: 'The questions the admissions desk is asked most often.', href: '/admissions/faqs/', external: false },
  { phase: 'Through the year', label: 'Parent–teacher meetings', body: 'On the academic calendar, so the date is known in advance.', href: '/academics/academic-calendar/', external: false },
  { phase: 'Through the year', label: 'Report card portal', body: 'Term reports and results, through the parent login.', href: school.external.results, external: true },
  { phase: 'Whenever needed', label: 'Parent forum', body: 'A standing channel for parents to raise what matters to them.', href: null, external: false },
  { phase: 'Whenever needed', label: 'Workshops', body: 'Sessions for parents on what the school is teaching and why.', href: null, external: false },
  { phase: 'Whenever needed', label: 'Talk to the school', body: `Office ${school.phone.officeDisplay} · admissions ${school.phone.admissionsDisplay}`, href: '/contact-us/', external: false },
] as const;

export const partnershipPhases = ['Before joining', 'Through the year', 'Whenever needed'] as const;
