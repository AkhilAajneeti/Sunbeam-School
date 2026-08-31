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
      ],
    },
  ],
};

/** Flat list in page order — what the pagination and the router count. */
export const activityItems: ChronicleItem[] = schoolActivities.groups.flatMap((g) => g.items);

/**
 * ⚠ SIX PER PAGE, WITH TEN ITEMS, SO PAGE TWO IS NOT A PAGE OF ONE. Twelve would
 * put everything on one page and leave the pagination rendering a control that
 * does nothing; six splits ten into 6 + 4. It is the one number to change when
 * the remaining eighty-six activities are added.
 */
export const PER_PAGE = 6;

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
