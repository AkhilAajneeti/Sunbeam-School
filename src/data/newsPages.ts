/**
 * NEWS & EVENTS — THE FOUR SUB-PAGES.
 *
 * ═══ WHERE EVERY LINE COMES FROM ═══════════════════════════════════════════
 *
 * Read off the school's own pages — `/workshops/`, `/event-chronicles/`,
 * `/school-activities/` and `/press-release/` — and nothing else. Names of
 * guests, institutions, dates, positions and scores are all as the school
 * published them.
 *
 * ⚠ NOTHING IS INFERRED. Where the school gives a date, it is here; where it
 * does not, the field is simply absent rather than estimated. Several items
 * carry a year and no day, and that is how they appear.
 *
 * ⚠ WHY THIS IS NOT THE WHOLE ARCHIVE. Their School Activities page alone runs
 * to 148 headings and 4,536 images on one URL. The brief was to take the
 * RELEVANT content, not everything, so what is dropped is: social-media
 * captions used as headings ("Dear viewers", "An Enriching Experience"), items
 * already covered better elsewhere on this site (sport belongs on Sports,
 * excursions have their own page, alumni have their own section), and the
 * duplicate `event-chronicles-main`.
 *
 * ⚠ THE FIFTH AND SIXTH CATEGORIES ARE NOT HERE, deliberately:
 *   · Recent achievements — /beyond-academics/achievements/ already exists and
 *     the client asked for it left alone. A second achievements page would
 *     split one story across two URLs and one of them would rot.
 *   · Important announcements — the school's own /notice/ and /admission-notice/
 *     pages are EMPTY. There is no content to build from. It stays a section on
 *     the News & Events index until assets A7 and C7 land.
 *
 * ⚠ AND ONE FIND THAT BELONGS SOMEWHERE ELSE. `/press-release/` publishes the
 * CBSE board results — 100% at X and XII, Rishikant 98.4% and district topper,
 * Sarvakritika district topper, Jahnavi and Aditya Singh 94.2% at XII. docs/01
 * records board results as the single largest content gap on the site and
 * docs/07 lists them as blocking asset A1. They are not missing; they are
 * buried. They belong on Student Success (audit 2.E5), not here.
 */

export interface ChronicleItem {
  title: string;
  /** Who led it, who won it, or where it was — never a guess. */
  meta: string;
  body: string;
  /** A published result or outcome, printed as the item's receipt. */
  result?: string;
  /** Session or date, exactly as the school states it. Absent if unstated. */
  when?: string;
}

export interface ChronicleGroup {
  id: string;
  label: string;
  note: string;
  items: ChronicleItem[];
}

export interface ChroniclePage {
  slug: string;
  title: string;
  standfirst: string;
  eyebrow: string;
  heading: string;
  stand: string;
  groups: ChronicleGroup[];
}

/* ═══ 1 · WORKSHOPS ═══════════════════════════════════════════════════════ */

export const workshops: ChroniclePage = {
  slug: 'workshops',
  title: 'Workshops',
  standfirst:
    'Fourteen sessions run for the people who teach — counselling, pedagogy, AI in the classroom and the CBSE capacity-building programme.',
  eyebrow: 'Workshops',
  heading: 'The school trains its teachers in public',
  stand:
    'Most schools describe professional development. This one names the trainer, the institution and the date — which is the only version a parent can check.',
  groups: [
    {
      id: 'teaching',
      label: 'Teaching practice',
      note: 'Pedagogy, classroom method and subject teaching.',
      items: [
        {
          title: 'CBSE Capacity Building Programme on Experiential Learning',
          meta: 'Dr. Pushkal Giri, Principal, St. Joseph’s School, Siwan · Dr. Ravishankar Mishra, Vice Principal, Heritage International Public School, Kushinagar',
          body: 'A two-day CBSE programme on experiential learning — activities, engagement, projects, lesson planning and deep learning.',
          when: '20–21 September 2025',
        },
        {
          title: 'Embracing Innovation and Change in the English Classroom',
          meta: 'Ms. Lakshmi Prakash · Hotel Ballians',
          body: 'Innovative teaching practices to lift student engagement and learning outcomes. Attended by the Principal, the Dean Academics and educators.',
          when: '20 December 2025',
        },
        {
          title: 'Storytelling as Pedagogy, and Teaching Science',
          meta: 'Ms. Soma Singh',
          body: 'Storytelling as a teaching method, and science instruction for the middle and secondary grades.',
        },
        {
          title: 'Recapitulating Dimension of Learning',
          meta: 'Mrs. Soma Singh',
          body: 'A second session with the same trainer, on the dimensions of learning.',
        },
        {
          title: 'Critical Thinking',
          meta: 'Prof. Pradeep Mishra, Lovely Professional University',
          body: 'Teaching critical thinking in the classroom.',
        },
        {
          title: 'Science and Innovation',
          meta: 'Faculty workshop',
          body: 'A workshop on science teaching and innovation.',
        },
      ],
    },
    {
      id: 'counselling',
      label: 'Counselling & wellbeing',
      note: 'Training in supporting students beyond the syllabus.',
      items: [
        {
          title: 'Basic Counseling Skills — two-day training',
          meta: 'Mrs. Salony Priya',
          body: 'Counselling technique, empathetic communication and student support, run over two days for teaching staff.',
          when: '16–17 September',
        },
        {
          title: 'Basic Counseling Skills — final assessment and viva',
          meta: 'Mrs. Saloni Priya, Founder Director, Ummeed Counselling & Consulting Services, Kolkata',
          body: 'The assessment that closes the counselling programme — counselling psychology and empowerment for educators.',
        },
        {
          title: 'Teacher–Student Bond: from teaching to mentorship',
          meta: 'Mr. Kartik Bajoria',
          body: 'Building stronger teacher–student connections — trust, empathy, and guiding students beyond academics.',
        },
      ],
    },
    {
      id: 'leadership',
      label: 'Leadership & policy',
      note: 'Where the school’s leadership goes to learn.',
      items: [
        {
          title: 'AI Masterclass',
          meta: 'Mr. Sandeep Mukherjee, Chief Operating Officer, Sunbeam Group of Educational Institutions',
          body: 'AI tools introduced to teaching staff, with their practical use in teaching and learning.',
        },
        {
          title: '16th Eduexcellence Annual International Conference — EduCarnival 2025',
          meta: 'IIT Delhi',
          body: 'A two-day conference on emerging trends, innovation and global best practice in education. Attended by Dr. Kunwar Arun Singh, Director; Mr. Pankaj Singh, Senior Academic Head; Mr. Jai Prakash Yadav, Middle Academic Head; and Mr. Prashant Upadhyay, Primary Academic Head.',
          when: '2025',
        },
        {
          title: 'Administrators’ and Teachers’ Training — three days',
          meta: 'DHK Eduserve · Sunbeam Lahartara, Varanasi',
          body: 'A three-day residential training for administrators and teachers, run by DHK Eduserve.',
        },
        {
          title: 'National Education Policy training',
          meta: 'Ms. Vishakha Singh · Sunshine Public School, Ghazipur',
          body: 'An NEP training session — conducted BY a Sunbeam Ballia educator, at another school.',
          result: 'Delivered by the school, not received by it',
        },
      ],
    },
  ],
};

/* ═══ 2 · COMPETITIONS ════════════════════════════════════════════════════ */

export const competitions: ChroniclePage = {
  slug: 'competitions',
  title: 'Competitions',
  standfirst:
    'Where the school competes and what it hosts — from a Class I speaking contest to a district chess championship run on its own ground.',
  eyebrow: 'Competitions',
  heading: 'Entered, hosted, and placed',
  stand:
    'Every position below is one the school published. Where it hosted rather than competed, the full field is named — a district championship is a harder thing to run than to enter.',
  groups: [
    {
      id: 'arts',
      label: 'Arts & culture',
      note: 'Music, dance, painting and the spoken word.',
      items: [
        {
          title: 'Mandal Level Kala Utsav',
          meta: 'U.P. Mandal — Azamgarh',
          body: 'Students competed at divisional level across music, crafts and dance.',
          result: '1st — Solo Singing · 1st — Local Crafts & Toys · 1st — Group Instrumental Music · 2nd — Regional Folk Dance. Winners qualified for the state level.',
          when: '2025',
        },
        {
          title: 'Janpad Stariya Kala Utsav Pratiyogita',
          meta: 'Mentors: Mr. Nurul · Ms. Archana · Mr. Amit',
          body: 'The district round of Kala Utsav, across music, dance and art.',
          result: 'Numerous trophies and medals; students selected for the State Level in Music, Dance and Art',
          when: '2025',
        },
        {
          title: 'Kala Utsav at GGIC Ballia, and the Sambhagiya Shastriya Evam Sugam Sangeet Pratiyogita at Mau',
          meta: 'Mentors: Mr. Nurul · Ms. Archana · Mr. Amit',
          body: 'Two further arts competitions, one in Ballia and one at Mau. Winners were felicitated in assembly.',
          when: '2025',
        },
        {
          title: 'Indian Folk Painting Competition',
          meta: 'Impetus · Classes III–V',
          body: 'Students showed the richness of Indian folk art in their own strokes.',
        },
        {
          title: 'Shining Star Kids Fashion Show',
          meta: 'Miss Ayana Pandey, Class VIII',
          body: 'A contest of more than seventy entrants, with the award presented by Miss Universe India 2024, Riya Singha.',
          result: 'Winner — over 70 contestants',
          when: '2025',
        },
      ],
    },
    {
      id: 'academic',
      label: 'Academic & speaking',
      note: 'Olympiads, quizzes and competitive speaking.',
      items: [
        {
          title: 'Science Olympiad Foundation — Zonal Excellence Award',
          meta: 'Classes III–V',
          body: 'The SOF zonal award, with a ₹500 voucher, for students in the primary years.',
          result: 'Zonal Excellence Award',
        },
        {
          title: 'SOF Olympiad — Nursery to Class II',
          meta: 'Science Olympiad Foundation',
          body: 'The school’s youngest entrants were felicitated for their performance in the SOF Olympiad.',
          when: '2025',
        },
        {
          title: 'Cohort Inter-Branch Attire Speak Competition',
          meta: 'Class I',
          body: 'A speaking competition across Sunbeam branches, entered by the school’s six-year-olds.',
          result: '1st — Avinashi Yadav · 3rd — Mariam Ali',
          when: '2025',
        },
        {
          title: 'IPN Yuva Conclave — Gwalior edition',
          meta: 'IPN',
          body: 'Students travelled to the Gwalior edition of the conclave and were felicitated in morning assembly on their return.',
          when: '2025',
        },
      ],
    },
    {
      id: 'hosted',
      label: 'Hosted at Sunbeam',
      note: 'District championships the school ran on its own ground.',
      items: [
        {
          title: 'Chaturang 2.0 — District Level Chess Championship',
          meta: 'Chief Guest: Mr. Umesh Singh, Secretary, Ballia Sports Association',
          body: 'The school hosted the district chess championship, opening it with a ceremony attended by schools from across Ballia and closing it by felicitating every winner and participant.',
          when: '2025',
        },
        {
          title: 'District Junior Volleyball Championship',
          meta: 'Ballia Sports Association · hosted at Sunbeam',
          body: 'A district championship run on the school ground, with the full field placed.',
          result: 'Boys — 1st Sohaon Ballia, 2nd Veer Lorik Stadium, 3rd Sunbeam & Narahi · Girls — 1st Narahi Ballia, 2nd Sunbeam Ballia, 3rd Veer Lorik · Best players: Ritika Singh (Sunbeam) and Ashish Rai (Narahi)',
          when: '2025',
        },
        {
          title: 'District Junior Hockey Championship — final',
          meta: 'Sunbeam Ballia v Stadium Ballia',
          body: 'The school’s hockey side took the district final.',
          result: 'Won 3–0',
          when: '2025',
        },
      ],
    },
  ],
};

/* ═══ 3 · CELEBRATIONS ════════════════════════════════════════════════════ */

export const celebrations: ChroniclePage = {
  slug: 'celebrations',
  title: 'Celebrations',
  standfirst:
    'The national days, the festivals and the mornings the school stops for — with the guests who came and the classes who ran them.',
  eyebrow: 'Celebrations',
  heading: 'The year, marked',
  stand:
    'A school calendar is a cultural document. These are the days Sunbeam Ballia sets aside, and who stood on the stage when it did.',
  groups: [
    {
      id: 'national',
      label: 'National days',
      note: 'The days the flag goes up.',
      items: [
        {
          title: 'Independence Day',
          meta: 'Chief Guest: Mr. Ashutosh Kumar Pandey, IRS, Deputy Commissioner of Income Tax',
          body: 'The national flag hoisted by the chief guest, followed by cultural performances, patriotic songs and student acts.',
          when: '2025 · the 78th',
        },
        {
          title: 'Republic Day',
          meta: 'Whole school',
          body: 'The school’s Republic Day assembly and cultural programme.',
        },
        {
          title: 'Birth anniversary of Major Dhyan Chand',
          meta: 'Ceremonial lamp lighting by the Director',
          body: 'A tribute to the hockey wizard on his birth anniversary — lamp lighting by the Director, followed by floral tribute.',
          when: '2025',
        },
        {
          title: 'National Voters’ Day',
          meta: 'Vote-awareness programme',
          body: 'A programme run to explain the vote to students old enough to be thinking about it.',
        },
      ],
    },
    {
      id: 'festivals',
      label: 'Festivals',
      note: 'Marked across the year, across faiths.',
      items: [
        {
          title: 'Durga Pooja, Vijaya Dashami and Janmashtami',
          meta: 'Devotional and cultural festival celebration',
          body: 'The school’s devotional and cultural programme across the autumn festivals.',
        },
        {
          title: 'Holi',
          meta: 'Whole school',
          body: 'The school’s Holi celebration.',
        },
        {
          title: 'Lohri and Baisakhi',
          meta: 'Whole school',
          body: 'The harvest festivals, marked together.',
        },
        {
          title: 'Viswakarma Pooja',
          meta: 'Whole school',
          body: 'The Viswakarma Pooja celebration.',
        },
        {
          title: 'Sawan',
          meta: 'Whole school',
          body: 'The school’s Sawan celebration.',
        },
      ],
    },
    {
      id: 'school',
      label: 'The school’s own days',
      note: 'Teachers, grandparents, and the ends of things.',
      items: [
        {
          title: 'Teachers’ Day — the student-led programme',
          meta: 'KG to Class XII',
          body: 'Music and dance from every year group — and Class XII students stepping into the shoes of their teachers to take classes for the day.',
          when: '2025',
        },
        {
          title: 'Teachers’ Day — the staff evening',
          meta: 'Teaching and support staff',
          body: 'Games, mementos and tokens of thanks for the staff, run by the school administration.',
          when: '2025',
        },
        {
          title: 'Heritage Week',
          meta: 'Classes III–V',
          body: 'A week inside the culture and traditions of India — art, dance and music, and the stories behind them.',
          when: '2025',
        },
        {
          title: 'Grandparents’ Day',
          meta: 'Held before the examinations',
          body: 'The school’s Grandparents’ Day celebration, timed before the examination season.',
        },
        {
          title: 'International Women’s Day',
          meta: 'Whole school',
          body: 'The school’s Women’s Day programme.',
        },
        {
          title: 'Farewell — Class XII',
          meta: 'Class XII',
          body: 'The leavers’ assembly and farewell for the outgoing Class XII.',
          when: '2025',
        },
        {
          title: 'KG Convocation and KG Farewell',
          meta: 'Kindergarten',
          body: 'The school’s youngest leavers get a convocation of their own.',
        },
      ],
    },
  ],
};

/* ═══ 4 · SCHOOL EVENTS ═══════════════════════════════════════════════════ */

export const schoolEvents: ChroniclePage = {
  slug: 'school-events',
  title: 'School Events',
  standfirst:
    'The programmes the school runs and the people it brings in — an IRS officer, a retired professor, Monash University, and a book fair opened by the CRO.',
  eyebrow: 'School events',
  heading: 'Who the school brings through the gate',
  stand:
    'The measure of a school’s programme is who agrees to come and speak at it. Every guest below is named, with their office, as the school published it.',
  groups: [
    {
      id: 'guests',
      label: 'Visiting speakers',
      note: 'Named guests, and what they came to say.',
      items: [
        {
          title: 'Guiding Futures, Shaping Lives',
          meta: 'Mr. Ashutosh Kumar Pandey, IRS, Deputy Commissioner of Income Tax · Classes IX–XII',
          body: 'A career-guidance session in which the officer shared his own educational journey and the lessons in it, in an interactive session with the senior school.',
          when: '2025',
        },
        {
          title: 'Kindness over Violence',
          meta: 'Mrs. Pratima Gupta, Assistant Director, Sunbeam Group',
          body: 'A session on choosing compassion and empathy over anger and conflict, with students interacting throughout.',
        },
        {
          title: 'Seventeen books, given to the library',
          meta: 'Mr. Ramesh Chandra Srivastava, retired professor and author',
          body: 'The author gifted seventeen of his own books to the school library, and spoke to students about building the habits of reading and writing.',
          result: '17 books donated',
        },
        {
          title: 'Reading Carnival — the book fair',
          meta: 'Inaugurated by Shri Tribhuvan Ram, CRO Ballia',
          body: 'A book fair open to students, parents and visitors, running until the thirtieth of August.',
          when: 'to 30 August',
        },
      ],
    },
    {
      id: 'programmes',
      label: 'Programmes',
      note: 'What the school runs for its own students.',
      items: [
        {
          title: 'Monash Innovation Guarantee — the school’s first',
          meta: 'K.R. Mangalam World School, G.K-II, New Delhi · in collaboration with Monash University, Australia · Mentor: Mr. Arun Pandey',
          body: 'Students travelled to Delhi for an international innovation project on entrepreneurship, run with Monash University — the first the school has entered.',
          when: '27–29 August 2025',
        },
        {
          title: 'Impetus — Classes III to V',
          meta: 'Science Quest · Maths Mania · Digital Dash · Hindi Vani Vihar · Spell Bee · Community Connect · English Quest',
          body: 'A multi-event programme for the primary years, from experiments and mental arithmetic to public speaking in Hindi and English.',
          when: '2025',
        },
        {
          title: 'Child Parent Teacher Dialogue',
          meta: 'Parents, teachers and students across classes',
          body: 'A three-way session on progress, feedback and suggestions, with parents taking an active part.',
          when: '2025',
        },
        {
          title: 'Class XII Physics — the half-deflection method',
          meta: 'Class XII-B',
          body: 'Students determined the internal resistance of a galvanometer and calculated its figure of merit — the practical, done properly.',
          when: '2025',
        },
      ],
    },
    {
      id: 'recognition',
      label: 'Recognition',
      note: 'What the school and its people have been given.',
      items: [
        {
          title: 'Cfore School Rankings — School Excellence Award',
          meta: 'Cfore',
          body: 'The school was ranked first in Ballia and recognised among Uttar Pradesh’s best day co-ed schools.',
          result: 'Ranked No. 1 in Ballia',
          when: '2025',
        },
        {
          title: 'CUET (UG) results',
          meta: 'PCM · Commerce · Humanities',
          body: 'The school marked its students’ CUET (UG) results across all three streams.',
          when: '2025',
        },
        {
          title: 'IPN Leadership Summit — Uttar Pradesh Dialogue',
          meta: 'Theme: School Education 5.0 — Nurturing the Human & Tech Connect',
          body: 'Three of the school’s leaders represented Sunbeam Ballia at the summit.',
          when: '2025',
        },
        {
          title: 'Best performing classes, and staff of the month',
          meta: 'Monthly, in assembly',
          body: 'A standing monthly award: best discipline, best performing, neatest, most energetic and best reading culture — extended to monitors, the bus monitor, support staff, the driver and the conductor.',
          result: 'Recognition reaches the driver and the conductor, not only the classroom',
          when: '2025',
        },
      ],
    },
  ],
};

export const chronicles: ChroniclePage[] = [workshops, competitions, celebrations, schoolEvents];
