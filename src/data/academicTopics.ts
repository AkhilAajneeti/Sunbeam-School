import type { AssessmentTopic } from './academics';

/**
 * ACADEMICS SUB-TOPICS — §2A, §2B, §2E and §2F, each bullet a page of its own.
 *
 * ⚠ ONE BULLET, ONE PAGE — UNLIKE §2C. Teaching & Learning was consolidated
 * fourteen-to-six because the client asked for it and because the school's own
 * content already grouped it that way. These four sections were not; their
 * bullets are distinct subjects the school treats separately, so they are kept
 * as listed.
 *
 * ⚠ NOTHING IS WRITTEN FROM NOTHING. Every body restates what data/academics.ts
 * already carries — `philosophy` and `teachingPhilosophy` for A, `stages` and
 * `streamDetail` for B, `guidance` and `wins` for E, `partnership` and `parents`
 * for F. Where the school publishes nothing on a bullet, the topic carries
 * `owed: true` and the page says so rather than being padded to length. A school
 * site that invents a scholarship or a success story does real damage.
 *
 * ⚠ TWO TOPICS POINT AT PAGES THAT ALREADY EXIST. Board Results and the Academic
 * Calendar are written already; `existing: true` links to them rather than
 * minting a second page with the same content at a second URL.
 */

/* ═══ A · ACADEMIC PHILOSOPHY ═══════════════════════════════════════════════ */
export const philosophyTopics: AssessmentTopic[] = [
  {
    id: 'overview',
    label: 'Academic Philosophy',
    hint: 'What the school is for, and how it says so.',
    href: '/academics/philosophy/',
    existing: true,
  },
  {
    id: 'teaching-philosophy',
    label: 'Teaching Philosophy',
    hint: 'The learner first, and the syllabus second.',
    href: '/academics/philosophy/teaching-philosophy/',
    title: 'Teaching Philosophy',
    standfirst: 'The school states its subject as the learner rather than the syllabus.',
    photo: 'activity',
    body: [
      'Sunbeam Ballia describes its teaching as beginning with the learner rather than with the syllabus — the curriculum is what a class moves through, not what a lesson is about.',
      'In practice that is the three things About Us says the school builds into all areas of teaching — Technology, a theory of Multiple Intelligence, and Collaborative learning — set out under Teaching & Learning.',
    ],
  },
  {
    id: 'student-centred-learning',
    label: 'Student-Centred Learning',
    hint: 'A voice, a potential and a path of their own.',
    href: '/academics/philosophy/student-centred-learning/',
    title: 'Student-Centred Learning',
    /**
     * ⚠ WHAT USED TO BE HERE WAS INVENTED. The standfirst read "The student
     * handles the apparatus, the source and the argument", and the body had
     * students "handling the apparatus, reading the source, running the code,
     * and defending a finding to the group", plus a claim that "most of the
     * talking in a lesson is done by students". None of that appears anywhere on
     * sunbeamballia.edu.in — it described a classroom nobody had described to us.
     *
     * Every sentence below is now traceable: the first two clauses to About Us
     * ("Learn effectively and develop their full potential", "Ensure that all
     * children receive equal regard and equal access to the curriculum"), the
     * Children's Forum wording to the school's own Event Chronicles.
     */
    standfirst: 'Equal regard, equal access to the curriculum, and a forum where students are heard.',
    photo: 'activity',
    body: [
      'The school sets out to help every child “learn effectively and develop their full potential”, and to “ensure that all children receive equal regard and equal access to the curriculum”.',
      'Students from Grades I to XII take part in the school’s Children’s Forum, which the school describes as a platform for them to express their thoughts, share ideas and discuss academics and school activities — “not just learners but active contributors to the school’s growth and progress”.',
    ],
  },
  {
    id: 'experiential-inquiry',
    label: 'Experiential & Inquiry-Based Learning',
    hint: 'Met in the hand before it is met in the exam.',
    href: '/academics/philosophy/experiential-inquiry/',
    title: 'Experiential & Inquiry-Based Learning',
    standfirst: 'Twelve laboratories and a set of inquiry rooms exist so a topic can be met in the hand first.',
    photo: 'chem',
    body: [
      'Experiential and inquiry-based learning is the school’s stated approach rather than an enrichment attached to it. A topic is met in the hand before it is met in the exam.',
      'The twelve laboratories and the inquiry rooms are what make that possible in an ordinary week rather than on a special day.',
    ],
  },
  {
    id: 'critical-thinking',
    label: 'Critical Thinking & Creativity',
    hint: 'Curiosity and collaboration, in the school’s own words.',
    href: '/academics/philosophy/critical-thinking/',
    title: 'Critical Thinking & Creativity',
    standfirst: 'The setting the school does describe: classrooms it calls places of curiosity and collaboration.',
    photo: 'activity',
    body: [
      'The school does not publish a critical-thinking programme, and none is claimed here. What it does state is the setting such thinking needs: the Principal describes Sunbeam’s classrooms as “places of curiosity and collaboration”, and About Us lists “a theory of Multiple Intelligence and Collaborative learning” among the three things built into all areas of teaching.',
      'The school has also run staff training specifically on critical thinking — see the Workshops record under News & Events.',
    ],
  },
  {
    id: 'curriculum',
    label: 'Curriculum',
    hint: 'CBSE, and what the school adds to it.',
    href: '/academics/philosophy/curriculum/',
    title: 'Curriculum',
    standfirst: 'The CBSE curriculum, with the school’s own laboratory and enrichment provision built around it.',
    photo: 'library',
    body: [
      'The curriculum is CBSE’s, followed from Nursery to Class XII. What the school describes as its own contribution is the provision built around it: subject laboratories, Microsoft-certified teachers, and a published syllabus.',
      'The stages that curriculum runs through — Pre-Primary to Senior Secondary — are set out under Academic Structure.',
    ],
  },
  {
    id: 'affiliation-details',
    label: 'Affiliation Details',
    hint: 'Board, affiliation number, school code and category.',
    href: '/academics/philosophy/affiliation-details/',
    title: 'Affiliation Details',
    standfirst: 'Affiliated to the Central Board of Secondary Education, Delhi — with the numbers stated.',
    photo: 'library',
    body: [
      'Sunbeam School Ballia is affiliated to the Central Board of Secondary Education, Delhi. The affiliation number is 2131962 and the school code is 70205.',
      'It is a co-educational day school running Nursery to Class XII, with four streams at senior secondary: PCM, PCB, Commerce and Humanities.',
    ],
    points: [
      { k: 'Affiliating board', v: 'Central Board of Secondary Education, Delhi' },
      { k: 'Affiliation number', v: '2131962' },
      { k: 'School code', v: '70205' },
      { k: 'Category', v: 'Co-educational day school, Nursery to Class XII' },
    ],
  },
];

/* ═══ B · ACADEMIC STRUCTURE ════════════════════════════════════════════════ */
const stage = (id: string, label: string, hint: string, standfirst: string, body: string[]): AssessmentTopic => ({
  id,
  label,
  hint,
  href: `/academics/structure/${id}/`,
  title: label,
  standfirst,
  photo: 'activity',
  body,
});

export const structureTopics: AssessmentTopic[] = [
  {
    id: 'overview',
    label: 'Academic Structure',
    hint: 'Every stage, and the streams at the end of them.',
    href: '/academics/structure/',
    existing: true,
  },
  stage(
    'pre-primary',
    'Pre-Primary',
    'The first years, where school becomes a place a child knows.',
    'The first years of school, where the point is that a child arrives willingly.',
    [
      'The pre-primary years cover the school’s youngest classes. The emphasis at this stage is on a child settling into school as a place rather than on formal assessment.',
      'The KG wing runs its own programme of activities through the year — convocation, farewell and the seasonal celebrations recorded under News & Events.',
    ],
  ),
  stage(
    'primary',
    'Primary',
    'Where reading, number and habit are set.',
    'The primary years, where reading, number and the habits of school are set.',
    [
      'The primary stage is where reading, number and the working habits of school are established, and where the Reading Programme and the Nalanda Library first come into daily use.',
      'Classes I to V take part in the school’s activity programme — Impetus, the Reading Carnival and the inter-house work recorded under School Activities.',
    ],
  ),
  stage(
    'middle-school',
    'Middle School',
    'Subjects separate, and the laboratories open up.',
    'Middle school, where subjects separate and the laboratories become part of an ordinary week.',
    [
      'In middle school the subjects separate out and the laboratories become part of an ordinary week rather than an occasional visit.',
      'This is the stage at which the school’s STEM, robotics and coding provision begins in earnest.',
    ],
  ),
  stage(
    'secondary',
    'Secondary',
    'Classes IX and X, and the first board year.',
    'Classes IX and X — the first board examination, and the support built around it.',
    [
      'The secondary stage covers Classes IX and X and ends in the first CBSE board examination.',
      'The assessment cycle, remedial support, mentoring and competitive-examination preparation described under Assessment Pattern all apply here.',
    ],
  ),
  stage(
    'senior-secondary',
    'Senior Secondary',
    'Classes XI and XII, in one of four streams.',
    'Classes XI and XII, taken in one of four streams.',
    [
      'Senior secondary covers Classes XI and XII, taken in one of four streams: PCM, PCB, Commerce or Humanities.',
      'Subject selection, career guidance and university counselling — set out under Career Development & Student Success — run alongside these two years.',
    ],
  ),
  {
    id: 'streams-offered',
    label: 'Streams Offered',
    hint: 'PCM, PCB, Commerce and Humanities.',
    href: '/academics/structure/streams-offered/',
    title: 'Streams Offered',
    standfirst: 'Four streams at senior secondary — PCM, PCB, Commerce and Humanities.',
    photo: 'chem',
    body: [
      'Sunbeam Ballia offers four streams at senior secondary: PCM, PCB, Commerce and Humanities.',
      'Which stream a student takes is settled through the subject-selection guidance described under Career Development, rather than by results alone.',
    ],
    points: [
      { k: 'PCM', v: 'Physics, Chemistry, Mathematics' },
      { k: 'PCB', v: 'Physics, Chemistry, Biology' },
      { k: 'Commerce', v: 'The commerce stream' },
      { k: 'Humanities', v: 'The humanities stream' },
    ],
  },
  {
    id: 'subject-combinations',
    label: 'Subject Combinations',
    hint: 'The optional and additional subjects around each stream.',
    href: '/academics/structure/subject-combinations/',
    title: 'Subject Combinations',
    standfirst: 'What can be taken alongside a stream — and where the published detail ends.',
    photo: 'library',
    body: [
      'Each stream carries its core subjects, with optional and additional subjects taken alongside them.',
      'The school office confirms the combinations available in a given session, since they depend on the cohort. The Academic Structure page carries what the school has published.',
    ],
    owed: true,
  },
];

/* ═══ E · CAREER DEVELOPMENT & STUDENT SUCCESS ══════════════════════════════ */
export const careerTopics: AssessmentTopic[] = [
  {
    id: 'overview',
    label: 'Career Development & Student Success',
    hint: 'Guidance, counselling and the record behind it.',
    href: '/academics/student-success/',
    existing: true,
  },
  {
    id: 'career-guidance',
    label: 'Career Guidance',
    hint: 'Where a subject choice actually leads.',
    href: '/academics/student-success/career-guidance/',
    title: 'Career Guidance',
    standfirst: 'Guidance on where a subject choice leads, run alongside the senior years rather than after them.',
    photo: 'library',
    body: [
      'Career guidance runs alongside the senior years rather than being offered once at the end of them, so a subject choice is made with its destinations in view.',
      'The school has run career-counselling days and an education fair — Quantica — recorded under School Activities.',
    ],
  },
  {
    id: 'university-counselling',
    label: 'University Counselling',
    hint: 'Applications, and what each course asks for.',
    href: '/academics/student-success/university-counselling/',
    title: 'University Counselling',
    standfirst: 'Support through applications, and through what each course actually asks for.',
    photo: 'library',
    body: [
      'University counselling covers the application itself and the requirements behind it — which subjects a course expects, and which entrance examinations it turns on.',
      'The CUET results published under News & Events are the outcome this work is measured against.',
    ],
  },
  {
    id: 'subject-selection',
    label: 'Subject Selection Guidance',
    hint: 'Choosing a stream on more than a result.',
    href: '/academics/student-success/subject-selection/',
    title: 'Subject Selection Guidance',
    standfirst: 'Choosing between PCM, PCB, Commerce and Humanities on more than a set of marks.',
    photo: 'chem',
    body: [
      'Subject selection guidance exists so that the choice between PCM, PCB, Commerce and Humanities is made on more than a set of marks.',
      'It is the point at which career guidance and academic structure meet, and it happens before Class XI rather than during it.',
    ],
  },
  {
    id: 'alumni-interaction',
    label: 'Alumni Interaction',
    hint: 'Former students, back in the building.',
    href: '/academics/student-success/alumni-interaction/',
    title: 'Alumni Interaction',
    standfirst: 'The school runs an alumni programme and brings former students back into the building.',
    photo: 'library',
    body: [
      'The school issues an alumni card per person carrying the name, the degree, the institution and the employer. Three are published, and every line on them can be checked.',
      'Beyond those three cards the school publishes nothing about its alumni programme — no event, no talks, no mentoring scheme. The alumni pages carry what exists.',
    ],
    owed: true,
  },
  {
    id: 'board-results',
    label: 'Board Results',
    hint: 'The published CBSE record.',
    href: '/academics/board-results/',
    existing: true,
  },
  {
    id: 'olympiad-achievements',
    label: 'Olympiad Achievements',
    hint: 'SOF and the national programmes, with the placings.',
    href: '/academics/student-success/olympiad-achievements/',
    title: 'Olympiad Achievements',
    standfirst: 'Science Olympiad Foundation placings, and the national programmes the school enters.',
    photo: 'chem',
    body: [
      'The school enters the Science Olympiad Foundation olympiads from the youngest classes upward, and has published a Zonal Excellence Award among its results.',
      'Those placings, with the ones the school has published award graphics for, are set out under News & Events — Competitions and Achievements.',
    ],
  },
  {
    id: 'scholarships',
    label: 'Scholarships',
    hint: 'What the school has published, and what it has not.',
    href: '/academics/student-success/scholarships/',
    title: 'Scholarships',
    standfirst: 'The school publishes no scholarship terms; this page says so rather than inventing them.',
    photo: 'library',
    body: [
      'The school publishes no scholarship — no name, no eligibility, no value and no way to apply. The audit records the subject as not mentioned.',
      'Rather than describe a scholarship this site cannot verify, this page says what is known and points at the office. A family planning around a scholarship needs the real terms, not a plausible summary.',
    ],
    owed: true,
  },
  {
    id: 'success-stories',
    label: 'Student Success Stories',
    hint: 'Named students, and what they actually won.',
    href: '/academics/student-success/success-stories/',
    title: 'Student Success Stories',
    standfirst: 'Named students, named results — an international robotics placing, CUET scores, a state chess selection.',
    photo: 'library',
    body: [
      'The school publishes its student results by name: an international robotics placing in Kuala Lumpur, CUET scores, a national innovation ranking, district and state sporting selections.',
      'Each of those is recorded with its own evidence under News & Events rather than summarised here, so a reader sees the award graphic or the result the school itself published.',
    ],
  },
];

/* ═══ F · PARENT PARTNERSHIP ════════════════════════════════════════════════ */
export const parentTopics: AssessmentTopic[] = [
  {
    id: 'overview',
    label: 'Parent Partnership',
    hint: 'Before joining, through the year, and whenever needed.',
    href: '/academics/parent-partnership/',
    existing: true,
  },
  {
    id: 'parent-orientation',
    label: 'Parent Orientation',
    hint: 'You meet the school before your child does.',
    href: '/academics/parent-partnership/parent-orientation/',
    title: 'Parent Orientation',
    standfirst: 'Orientation runs before the session begins; the programme itself is not published.',
    photo: 'library',
    /* ⚠ THE CAMPUS WALK, THE TEACHERS IN PERSON AND THE HANDBOOK WERE REMOVED,
       along with a cross-reference to School Activities that does not exist —
       data/schoolActivities.ts lists ten activities and no orientation among
       them. A citation to a record that is not there is the most persuasive kind
       of invention, because it reads as sourcing. */
    body: [
      'The school lists orientation as its first standing parent channel and states one thing about it: it runs before the session begins, so a new parent starts informed.',
      'What the session covers, how long it runs and which classes it is held for are not published, and are not described here. The admissions desk holds both the agenda and the next date.',
    ],
    owed: true,
  },
  {
    id: 'parents-forum',
    label: 'Parents’ Forum',
    hint: 'Raised, heard together, answered, carried forward.',
    href: '/academics/parent-partnership/parents-forum/',
    title: 'Parents’ Forum',
    standfirst: 'A standing forum with four steps: raised, heard together, answered, carried forward.',
    photo: 'library',
    body: [
      'The Parents’ Forum is a standing meeting rather than an occasional one, and the school describes it in four steps: a matter is raised, heard together, answered, and carried forward.',
      'It runs alongside the Children’s Forum; feedback from both was taken to the teaching staff by the Director — recorded under School Activities.',
    ],
  },
  {
    id: 'workshops-webinars',
    label: 'Workshops & Webinars',
    hint: 'Sessions run for parents, not only for staff.',
    href: '/academics/parent-partnership/workshops-webinars/',
    title: 'Workshops & Webinars',
    standfirst: 'Sessions run for parents alongside the staff training programme.',
    photo: 'library',
    body: [
      'The school runs workshops and webinars for parents alongside its staff training programme.',
      'The staff sessions are documented in full under News & Events — Workshops. The parent-facing programme is named by the school but its schedule is not published.',
    ],
    owed: true,
  },
  {
    id: 'school-parent-communication',
    label: 'School–Parent Communication',
    hint: 'Meetings, the report-card portal, and the office line.',
    href: '/academics/parent-partnership/school-parent-communication/',
    title: 'School–Parent Communication',
    standfirst: 'Parent–teacher meetings, the report card portal, and a number that reaches the office.',
    photo: 'library',
    body: [
      'Communication runs on three channels: scheduled parent–teacher meetings, the report card portal for results, and the school office for anything that will not wait.',
      'The meeting pattern is set out under Assessment Pattern; the portal and the office numbers are on the Contact page.',
    ],
  },
  {
    id: 'parent-engagement',
    label: 'Parent Engagement Initiatives',
    hint: 'Grandparents’ Day, forums, and the days parents are in the building.',
    href: '/academics/parent-partnership/parent-engagement/',
    title: 'Parent Engagement Initiatives',
    standfirst: 'The days the school brings families into the building, rather than writing to them.',
    photo: 'library',
    body: [
      'Beyond meetings, the school runs days that bring families into the building: Grandparents’ Day, the Child–Parent–Teacher Dialogue, and the celebrations and functions recorded under News & Events.',
      'These are the occasions on which a parent sees the school working rather than hears about it.',
    ],
  },
  {
    id: 'faqs',
    label: 'Frequently Asked Questions',
    hint: 'The questions the school answers in writing.',
    href: '/academics/parent-partnership/faqs/',
    title: 'Frequently Asked Questions',
    standfirst: 'The questions the school answers in writing — and where the answers are not published.',
    photo: 'library',
    body: [
      'The Parent Partnership page carries the questions the school answers in writing.',
      'Where an answer depends on the session — fees, combinations available, transport routes for a given address — the office is the only reliable source, and this site points there rather than printing a figure that may have changed.',
    ],
    owed: true,
  },
];
