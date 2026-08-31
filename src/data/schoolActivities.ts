import type { ChroniclePage, ChronicleItem } from './newsPages';

/**
 * SCHOOL ACTIVITIES — /beyond-academics/school-activities/
 *
 * ═══ WHERE THIS CAME FROM ══════════════════════════════════════════════════
 *
 * The school's own /school-activities/ page. That page carries 120 galleries
 * and 2,797 photographs in a single scroll; this is the first ten, chosen to
 * span the kinds of activity the school actually runs — a camp, a cultural
 * programme, a commemoration, a ceremony, a reading award, a field activity, an
 * excursion and a careers day.
 *
 * ⚠ IT IS A ChroniclePage, NOT A SHAPE OF ITS OWN, AND THAT IS THE WHOLE REASON
 * THIS PAGE LOOKS LIKE WORKSHOPS. The client asked for the Workshops design;
 * `CardGrid` and `DetailPage` already are that design, and both are typed
 * against ChroniclePage. Matching the existing contract means the two pages
 * cannot drift apart — a change to the card treatment lands on both — where a
 * bespoke shape would have needed a bespoke grid that merely resembled it.
 *
 * ⚠ TEN, BECAUSE THE CLIENT ASKED FOR TEN WHILE THE FRONT END IS BEING BUILT.
 * The other eighty-six are not lost work: the index already paginates, so adding
 * them later is an edit to this array and a folder drop rather than a rebuild.
 *
 * ═══ AND THEN TWENTY-THREE MORE, FROM A DIFFERENT SOURCE ═══════════════════
 *
 * ⚠⚠ THE SECOND BATCH IS NOT SCRAPED FROM THE SCHOOL'S PAGE — IT WAS SENT TO US.
 * Two folders arrived direct from the school, `sunbeam-assets-1` (4 galleries)
 * and `sunbeam-assets-2` (25). Six of the twenty-nine had a place already built
 * for them and went there instead of here:
 *   15-August                  → Celebrations · Independence Day
 *   Teacher_s Day              → Celebrations · Teachers' Day, the staff evening
 *   District-Junior-Volleyball → Competitions · District Junior Volleyball, and
 *                                the Volleyball card on Sports & Games
 *   PTM                        → School Events · Child Parent Teacher Dialogue
 *   Alumni                     → the Pradiptam 2.0 gallery on /alumni/
 *   Scating                    → the Skating card on Sports & Games (and, being
 *                                a gallery in its own right, also below)
 * The remaining twenty-three had no page waiting for them, which is exactly what
 * this section is for. They are below.
 *
 * ⚠⚠ THEY CAME WITH NO TEXT WHATSOEVER — no title beyond the folder name, no
 * date, no name of a guest, a winner or a class. So the rule that governs the
 * first ten governs these harder, and there is one addition to it: EVERY `body`
 * BELOW DESCRIBES WHAT IS VISIBLE IN THE FRAMES AND STOPS. Each folder was
 * opened and looked at. Where the photographs show a banner, a backdrop or a
 * board, its wording is quoted, because that is the school's own text and the
 * only text there is. Where they show a felicitation, the body says a
 * felicitation — never who was felicitated, because the screens and certificates
 * are half-obscured in every frame and a name half-read is a name misspelled.
 *
 * ⚠ TWO FOLDER NAMES ARE READ, NOT TRUSTED. `POP` is not explained anywhere in
 * the delivery; the fifteen frames show an address in the conference hall under
 * a projected agenda, a panel taking questions, and parents walking the
 * laboratories afterwards — a Parent Orientation Programme, and it is titled as
 * one. `Adrent-reader-award-2024-25` is a typo for Ardent, and is corrected in
 * the title while the FOLDER keeps the client's spelling, because renaming their
 * folder is how the next drop stops resolving.
 *
 * ⚠ `Art Integrated Learning` ARRIVED IN BOTH DROPS AND MERGES INTO ONE GALLERY
 * OF SIXTEEN. That is the resolver's folder-name lookup working as designed, and
 * it is the right answer here — see the note in data/workshopPhotos.ts.
 *
 * ⚠ TWENTY-FOUR OF THE SOURCE'S GALLERIES ARE DELIBERATELY ABSENT. Genesis,
 * Independence Day, Sawan, Durga Pooja, Holi, Republic Day, Teachers' Day,
 * Impetus, Chaturang, the chess championships, KG Convocation and the rest are
 * already published under News & Events. Repeating them would put the same
 * photographs at two URLs, split the school's search ranking between them, and
 * double the editing whenever a detail changes.
 *
 * ═══ WHY EVERY `body` IS SHORT AND EVERY `meta` IS A COUNT ═════════════════
 *
 * ⚠ THE SOURCE PUBLISHES A TITLE AND PHOTOGRAPHS. NOTHING ELSE. Checked section
 * by section: for these ten the school wrote no description, named nobody who
 * led or won, and gave no date except one. The headings are the entire text —
 * "SPIC MACAY", "Josh Spring Camp", "Little Agriculturist".
 *
 * So the bodies say what is known and stop. They do not describe what a yoga day
 * is like or what the children learned at camp, because the school has not said
 * and this file is not the place to imagine it. `meta` carries the number of
 * frames the school actually published — real information, counted from the
 * source, and the difference between an activity documented 273 times and one
 * documented five times.
 *
 * This is the rule the Workshops page states out loud: "Nothing is filled in for
 * the sake of a tidy page." A thin entry that is true beats a full one that is
 * invented, and the standfirst warns the reader that the galleries are the
 * record.
 */
export const schoolActivities: ChroniclePage = {
  slug: 'school-activities',
  title: 'School Activities',
  standfirst:
    'Camps, ceremonies, commemorations and days out, as the school photographed them.',
  eyebrow: 'School Activities',
  heading: 'What a year at the school actually looks like',
  stand:
    'The school records its activities in photographs rather than in writing, so that is what this page is: galleries, each one the frames the school itself published. Where the school stated a year, it is given. Where it did not, nothing is guessed at.',

  groups: [
    {
      id: 'camps',
      label: 'Camps and holiday programmes',
      note: 'The programmes that run when ordinary classes do not.',
      items: [
        {
          title: 'Summer Camp — Summer Cool',
          slug: 'summer-camp',
          photoDir: 'summer-camp',
          meta: '273 photographs published',
          body:
            'The school’s summer camp, run under the name “Summer Cool”. It is by a wide margin the most heavily documented activity the school has published — 273 frames, against a median of fourteen for everything else on its activities page. No written account accompanies them.',
        },
        {
          title: 'Josh Spring Camp',
          slug: 'josh-spring-camp',
          photoDir: 'josh-spring-camp',
          meta: '26 photographs published',
          body:
            'The school’s spring camp, published under the name “Josh Spring Camp”. Twenty-six photographs, and no description of what the camp covered.',
        },
      ],
    },

    {
      id: 'culture',
      label: 'Culture and commemoration',
      note: 'Programmes, performances and the days the school marks.',
      items: [
        {
          title: 'SPIC MACAY',
          slug: 'spic-macay',
          photoDir: 'spic-macay',
          meta: '39 photographs published',
          body:
            'A SPIC MACAY programme at the school — the Society for the Promotion of Indian Classical Music and Culture Amongst Youth, which brings classical performers into schools. The school published thirty-nine photographs and named neither the artist nor the date.',
        },
        {
          title: 'International Yoga Day',
          slug: 'international-yoga-day',
          photoDir: 'international-yoga-day',
          meta: '32 photographs published',
          body:
            'The school’s observance of International Yoga Day, in thirty-two photographs. The school gave the occasion a title and no further account.',
        },
        {
          title: 'Kargil Vijay Diwas',
          slug: 'kargil-vijay-diwas',
          photoDir: 'kargil-vijay-diwas',
          meta: '24 photographs published',
          body:
            'The school’s commemoration of Kargil Vijay Diwas, published under the heading “Honouring Our Bravehearts”. Twenty-four photographs, with no written account of the programme.',
        },
      ],
    },

    {
      id: 'early-years',
      label: 'The early years',
      note: 'Kindergarten, where a lesson is a thing you can hold.',
      items: [
        {
          title: 'Creepy Crawly',
          slug: 'creepy-crawly-activity',
          photoDir: 'Creepy-crawly-activity',
          meta: '12 photographs supplied',
          body:
            'A kindergarten activity on the small creatures of the garden, run under the heading “Creepy Crawly” on the classroom board. The frames show the children at labelled specimen jars, then at the tables making butterflies and bugs of their own.',
        },
        {
          title: 'Seasonal Fruits and Vegetables',
          slug: 'seasonal-fruits-and-vegetables',
          photoDir: 'Seasonal fruits and vegetables activity KG Section',
          meta: '7 photographs supplied',
          body:
            'A KG-section activity on what grows in which season. The children brought in and potted plants of their own — one frame is a child holding a pot labelled, in his own hand, “Chilli” — and the teacher works through a board headed “Seasonal Fruits & Vegetables Activity”.',
        },
      ],
    },

    {
      id: 'recognition',
      label: 'Ceremony and recognition',
      note: 'Where the school hands something over — an office, or an award.',
      items: [
        {
          title: 'Investiture Ceremony',
          slug: 'investiture-ceremony',
          photoDir: 'investiture-ceremony',
          meta: '12 photographs published',
          when: '2023–24',
          body:
            'The investiture ceremony for the 2023–24 session, at which the school’s student office-holders take up their posts. The year is the school’s own — this is the only one of the ten whose heading carries a date at all.',
        },
        {
          title: 'Ardent Reader Award',
          slug: 'ardent-reader-award',
          photoDir: 'ardent-reader-award',
          meta: '75 photographs published',
          body:
            'The school’s Ardent Reader Award, given to its most committed readers. Seventy-five photographs of the presentation; the school did not publish the winners’ names alongside them.',
        },
        {
          /* ⚠ A SECOND ENTRY, NOT A REPLACEMENT FOR THE ONE ABOVE. Same award,
             a different session, and the school supplied them separately. The
             folder keeps the client's spelling of "Adrent" so the next drop
             still resolves; the title is spelled correctly. */
          title: 'Ardent Reader Award 2024–25',
          slug: 'ardent-reader-award-2024-25',
          photoDir: 'Adrent-reader-award-2024-25',
          meta: '4 photographs supplied',
          when: '2024–25',
          body:
            'The 2024–25 Ardent Reader Award, presented at a public ceremony rather than in school — the backdrop in every frame is a district press federation’s. Four photographs of the certificates being handed over.',
        },
        {
          title: 'Vidyarthi Vigyan Manthan — state-level camp',
          slug: 'vidyarthi-vigyan-manthan-2025',
          photoDir: 'VVM 2025',
          meta: '6 photographs supplied',
          body:
            'The banner behind the stage reads “Vidyarthi Vigyan Manthan 2024–25 · State Level Camp · Uttar Pradesh (Region-B)”. VVM is the Department of Science & Technology’s national science talent search; the school’s Olympiad record states its students have qualified to the national level.',
        },
        {
          title: 'District-Level INSPIRE Award ceremony',
          slug: 'inspire-award-ceremony',
          photoDir: 'District-Level INSPIRE Award Ceremony held at Government Girls Inter College, Azamgarh',
          meta: '4 photographs supplied',
          body:
            'The district-level ceremony for the INSPIRE Award — MANAK, held at Government Girls Inter College, Azamgarh, and named that way by the school itself. Four photographs of the school’s students at the ceremony.',
        },
        {
          title: 'Meritorious student felicitation by the District Magistrate',
          slug: 'hindustan-meritorious-felicitation',
          photoDir: 'Hindustan Meritorious Student Felicitation by DM',
          meta: '7 photographs supplied',
          body:
            'A public felicitation of the district’s meritorious students, staged by the newspaper Hindustan under a backdrop reading “प्रतिभा सम्मान 2025” and presented by the District Magistrate. The school’s students are among those called up.',
        },
      ],
    },

    {
      id: 'learning',
      label: 'Learning outside the classroom',
      note: 'Field activities, excursions and the careers programme.',
      items: [
        {
          title: 'Little Agriculturists',
          slug: 'little-agriculturists',
          photoDir: 'little-agriculturists',
          meta: '5 photographs published',
          body:
            'A hands-on farming activity for the youngest children, published as “Little Agriculturist”. Five photographs — the smallest gallery of the ten.',
        },
        {
          title: 'Taramandal Show',
          slug: 'taramandal-show',
          photoDir: 'taramandal-show',
          meta: '11 photographs published',
          body:
            'A taramandal — planetarium — show for the children, in eleven photographs. The school did not state where the show was held.',
        },
        {
          title: 'Career Counselling',
          slug: 'career-counselling',
          photoDir: 'career-counselling',
          meta: '26 photographs published',
          body:
            'The first day of the school’s career counselling programme, in twenty-six photographs. A second day was published separately; neither carries an account of who spoke or what was covered.',
        },
        {
          title: 'Town Polytechnic internship',
          slug: 'town-polytechnic-internship',
          photoDir: 'Town Polytechnic Internship',
          meta: '10 photographs supplied',
          body:
            'Senior students at Town Polytechnic, Ballia — a group photograph at its gate, then the students inside its workshops and drawing rooms. The school has not stated the length of the placement or which classes went.',
        },
        {
          title: 'Art Integrated Learning',
          slug: 'art-integrated-learning',
          photoDir: 'Art Integrated Learning',
          meta: '16 photographs supplied',
          body:
            'A class project taught through art, published by the school under a hand-painted banner reading “ART INTEGRATED CLASS PROJECT”. The frames run from the exhibition tables — models, maps and a spread of regional food the children prepared — to the stage, where the classes present in the dress of the region they studied.',
        },
        {
          title: 'Interclass Attire Speak competition',
          slug: 'interclass-attire-speak',
          photoDir: 'Interclass Attire speak competition',
          meta: '7 photographs supplied',
          body:
            'The junior school’s interclass speaking competition, each child taking the microphone with a hand-lettered card. The backdrop states the point of it: “A way for our students to take control of their learning.” One card reads “Pronunciation Lab”.',
        },
      ],
    },

    {
      id: 'stem',
      label: 'Laboratories, innovation and enterprise',
      note: 'What the school’s workshops and its tinkering lab actually produce.',
      items: [
        {
          title: 'Atal Tinkering Lab — project showcase',
          slug: 'atl-lab-project',
          photoDir: 'ATL-Lab-Project',
          meta: '10 photographs supplied',
          body:
            'Students presenting the projects built in the school’s tinkering lab, each at its own table with a hand-written card naming it — one of them reads “Wireless Power Transmission System”. Photographed as a showcase, with the makers standing behind their own work.',
        },
        {
          title: 'AI Tinkerpreneur',
          slug: 'ai-tinkerpreneur',
          photoDir: 'AI-Tinkerpreneur',
          meta: '4 photographs supplied',
          body:
            'The certificate presentation for the school’s AI Tinkerpreneur cohort. Four photographs: the group with their certificates, and individual presentations. The school has not published the programme’s syllabus or its partner.',
        },
      ],
    },

    {
      id: 'reading',
      label: 'Reading and the library',
      note: 'The two events the school builds its reading year around.',
      items: [
        {
          title: 'Book Fair',
          slug: 'book-fair',
          photoDir: 'Book-Fair',
          meta: '10 photographs supplied',
          body:
            'A book fair held along the school corridor, opened with a ribbon and browsed stall by stall. Ten photographs. The school did not name the sellers or state what the fair raised.',
        },
        {
          title: 'Reading Mahotsav',
          slug: 'reading-mahotsav',
          photoDir: 'Reading Mahotsav',
          meta: '4 photographs supplied',
          body:
            'A reading festival run in the classrooms, under a blackboard headed “READING MAHOTSAV”. The frames show whole classes reading and writing at the desks rather than an assembly — which is the point of it.',
        },
      ],
    },

    {
      id: 'citizenship',
      label: 'Awareness, safety and citizenship',
      note: 'The outside bodies the school brings in, and what they come to teach.',
      items: [
        {
          title: 'NDRF disaster-preparedness session',
          slug: 'ndrf-disaster-preparedness',
          photoDir: 'NDRF',
          meta: '21 photographs supplied',
          body:
            'The National Disaster Response Force at the school, addressing the whole assembly from the auditorium stage under its own banners. Twenty-one photographs — the largest of the supplied galleries, and the school stated neither the date nor the battalion.',
        },
        {
          title: 'Climate Education and Sustainability',
          slug: 'sdg-climate-session',
          photoDir: 'SDG Session',
          meta: '11 photographs supplied',
          body:
            'A session on the Sustainable Development Goals, held under a school backdrop reading “CLIMATE EDUCATION & SUSTAINABILITY”. The frames run from the felicitation of the visiting speakers to the assembly itself, seated on the ground under the canopy.',
        },
        {
          title: 'RBI financial literacy session',
          slug: 'rbi-financial-literacy',
          photoDir: 'RBI Financial Literacy',
          meta: '4 photographs supplied',
          body:
            'A financial literacy session run with the Reserve Bank of India, delivered partly over a video link on the classroom screen and partly by the students themselves at the lectern.',
        },
        {
          title: 'Students’ Forum',
          slug: 'students-forum',
          photoDir: 'Student_s Forum',
          meta: '4 photographs supplied',
          body:
            'The school’s Students’ Forum in session — the senior school seated through the hall and the library. The school publishes a Parents’ Forum in detail and has written nothing about this one.',
        },
      ],
    },

    {
      id: 'parents',
      label: 'Parents at the school',
      note: 'The day the school explains itself to the people who chose it.',
      items: [
        {
          /* ⚠ TITLED FROM THE PHOTOGRAPHS, NOT THE FOLDER. The client's folder is
             called `POP` and nothing in the delivery says what that stands for.
             The fifteen frames answer it: an address in the conference hall under
             a projected agenda, a panel of staff taking questions from parents,
             and parents walking the science laboratories and classrooms
             afterwards. A different session's Parent Orientation Programme
             already has its own page at
             /academics/parent-partnership/parent-orientation/ — this is the
             gallery, not a second account of it. */
          title: 'Parent Orientation Programme',
          slug: 'parent-orientation-programme',
          photoDir: 'POP',
          meta: '15 photographs supplied',
          body:
            'The orientation morning, photographed end to end: the address in the conference hall, the panel taking questions, parents putting them, and then the walk through the laboratories and classrooms their children work in. The school has not stated the session or which year groups were invited.',
        },
      ],
    },

    {
      id: 'sport',
      label: 'Sport, on the ground and off it',
      note: 'The games the school photographs but does not write up.',
      items: [
        {
          title: 'Archery',
          slug: 'archery',
          photoDir: 'Archery',
          meta: '9 photographs supplied',
          body:
            'Archery at the school — the target end set up on the ground inside the main gate, and coaching at the shooting line. Archery is not on the school’s own published roster of fifteen games, and these are the first photographs of it.',
        },
        {
          title: 'Karate',
          slug: 'karate',
          photoDir: 'Karate',
          meta: '3 photographs supplied',
          body:
            'Three frames of kumite — two students in gi, red and blue belts, mid-bout. The school’s record puts fourteen medals at the 11th BSKA Karate Championship, all of them from Classes I and II.',
        },
        {
          title: 'Skating',
          slug: 'skating',
          photoDir: 'Scating',
          meta: '10 photographs supplied',
          body:
            'The junior skating squad on the paved ground, helmeted and padded, from the first wobble at the wall to a line of them crossing the yard together. One of these frames is now the Skating card on Sports & Games — the first action photograph that page has had.',
        },
        {
          title: 'Handball',
          slug: 'handball',
          photoDir: 'Handball',
          meta: '1 photograph supplied',
          body:
            'The girls’ handball squad in kit. One frame, and it is the only photograph the school has supplied of a side whose record is among its strongest — district champions and first in the Asmita Khelo India Women’s League.',
        },
        {
          title: 'Hockey — CBSE Cluster squad',
          slug: 'hockey-cbse-cluster',
          photoDir: 'Hockey CBSE Cluster',
          meta: '9 photographs supplied',
          body:
            'The school’s hockey side garlanded and handed the school flag before leaving for the CBSE Cluster. ⚠ This is the send-off, not the District Junior Hockey Championship final recorded under Competitions — different competition, and the school has published no result for this one.',
        },
      ],
    },
  ],
};

/** Flat list in page order — what the pagination and the router count. */
export const activityItems: ChronicleItem[] = schoolActivities.groups.flatMap((g) => g.items);

/**
 * ⚠ NINE PER PAGE. This was six, chosen when there were ten items so that page
 * two was not a page of one. There are now thirty-three: at six that is six
 * pages and a reader six clicks from the end, and at twelve it is three pages
 * that each scroll for a very long time. Nine splits thirty-three into
 * 9 + 9 + 9 + 6 — four pages, no runt, and it stays the one number to change as
 * the rest of the school's archive arrives.
 */
export const PER_PAGE = 9;

export const pageCount = Math.max(1, Math.ceil(activityItems.length / PER_PAGE));

/**
 * The ChroniclePage for one page of the index.
 *
 * ⚠ IT REBUILDS THE GROUPS RATHER THAN SLICING THEM, and empty ones are dropped.
 * CardGrid renders a section per group, complete with heading, note and count —
 * so a group whose items all live on the other page would otherwise print a
 * banded, titled, empty section. Filtering by membership keeps the grouped
 * design intact on every page and lets a group appear on both when its items
 * straddle the boundary.
 *
 * @param n 1-based page number.
 */
export const activityPage = (n: number): ChroniclePage => {
  const start = (n - 1) * PER_PAGE;
  const slice = new Set(activityItems.slice(start, start + PER_PAGE));

  return {
    ...schoolActivities,
    groups: schoolActivities.groups
      .map((g) => ({ ...g, items: g.items.filter((i) => slice.has(i)) }))
      .filter((g) => g.items.length > 0),
  };
};
