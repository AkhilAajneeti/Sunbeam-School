import { readFileSync, writeFileSync } from 'node:fs';

const P = 'src/pages/about/history-legacy.astro';
let s = readFileSync(P, 'utf8');
const rep = (a, b) => {
  if (!s.includes(a)) throw new Error('MISS: ' + a.slice(0, 70));
  s = s.split(a).join(b);
};

/* ══ 1 · THE COPY, AS THE CLIENT SUPPLIED IT ══════════════════════════════ */
const oldBlock = s.match(/\/\*\*\n \* The school's own History paragraph[\s\S]*?\n\];\n/);
if (!oldBlock) throw new Error('MISS history block');

s = s.replace(oldBlock[0], `/**
 * THE CLIENT'S REPLACEMENT COPY, TRANSCRIBED AS SENT.
 *
 * This used to be the school's own two-paragraph History, verbatim. The client
 * has now written a longer piece and sent it to replace that wholesale, so the
 * old text is gone rather than merged — merging two versions of the same story
 * would have produced a third one nobody approved.
 *
 * ⚠ NOTHING HERE IS INVENTED, AND NOTHING IS EMBELLISHED. Six paragraphs, in
 * the client's own order and wording. The only editorial changes are typographic:
 * the em dash in "purpose—to" is spaced, and straight quotes are curled.
 *
 * ⚠ EVERY FIGURE STILL AGREES WITH data/site.ts — 2013, 456, 2,700+, Nursery to
 * Class XII, CBSE New Delhi, the four streams, Duty/Devotion/Discipline. Checked
 * rather than assumed, because this copy arrived as prose rather than as data
 * and prose is where numbers quietly drift.
 *
 * ⚠ "Educating the FUTURE!" IS NOT IN THIS ARRAY. It is the school's tagline and
 * the client set it apart as a closing line, so it renders as one below the
 * prose rather than as a seventh paragraph — see the markup.
 */
const history = [
  'Established in 2013, Sunbeam School, Agarsanda, Ballia has grown into one of the district\\'s leading educational institutions, evolving from a humble beginning of 456 students to a thriving community of 2,700+ learners from Nursery to Class XII.',
  'A Co-educational Senior Secondary School affiliated with CBSE, New Delhi, the school offers PCM, PCB, Commerce and Humanities, providing students with diverse pathways to discover their interests, pursue their aspirations and prepare for an ever-changing world.',
  'At Sunbeam School Ballia, education extends far beyond the classroom. Over the years, the school has built a strong reputation for academic excellence, value-based education and holistic development, creating an environment where every learner is encouraged to question, explore, create and excel.',
  'With a vibrant campus, experienced educators, progressive teaching methodologies and excellent infrastructure, Sunbeam School strives to provide an enriching learning experience that nurtures knowledge, character, confidence and leadership.',
  'Rooted in the guiding values of Duty, Devotion and Discipline, the school encourages students to participate and excel across academics, sports, cultural pursuits, leadership and life skills.',
  'Today, with a growing community of 2,700+ students, Sunbeam School, Agarsanda, Ballia continues its journey with a clear purpose — to educate the future, inspire excellence and empower every learner to make a meaningful difference in the world.',
];
`);

/* ══ 2 · THE CLOSING LINE ═════════════════════════════════════════════════ */
rep(
  `          <div class="hist-film__prose">
            {history.map((p) => <p>{p}</p>)}
          </div>`,
  `          <div class="hist-film__prose">
            {history.map((p) => <p>{p}</p>)}
          </div>
          {/* The tagline, set apart the way the client set it apart. */}
          <p class="hist-film__sign">{school.tagline}</p>`,
);

/* ══ 3 · IT HAS TO BE READABLE AT SIX PARAGRAPHS ══════════════════════════
   Two paragraphs could get away with running the full container width. Six
   cannot: the measure was ~140 characters, which is roughly double what is
   comfortable, and justified text at that width opens rivers of white space
   between the words. */
rep(
  `  .hist-film__prose p {
    font-size: var(--sb-body);
    line-height: 1.75;
    color: var(--sb-text-secondary);
    text-align: justify;
  }
  .hist-film__prose p + p {
    margin-top: var(--sb-5);
    text-align: justify;
  }`,
  `  /* ⚠⚠ A MEASURE, AND NO LONGER JUSTIFIED. At the full container width this ran
     to about 140 characters a line — near double the comfortable 65-75 — and it
     was set justify, which at that width pulls rivers of white space through the
     paragraphs. Six paragraphs made both faults obvious where two had hidden
     them. Ragged-right at 68ch reads; justified at 140ch does not. */
  .hist-film__prose {
    max-width: 68ch;
    margin-inline: auto;
    text-align: left;
  }
  .hist-film__prose p {
    font-size: var(--sb-body);
    line-height: 1.75;
    color: var(--sb-text-secondary);
  }
  .hist-film__prose p + p {
    margin-top: var(--sb-5);
  }

  /* The tagline closes the section, so it carries the weight the prose does not. */
  .hist-film__sign {
    max-width: 68ch;
    margin: clamp(20px, 2.6vw, 30px) auto 0;
    font-family: var(--sb-font-display);
    font-size: clamp(17px, 0.6vw + 12px, 23px);
    font-weight: 700;
    letter-spacing: -0.01em;
    color: var(--sb-violet);
    text-align: left;
  }`,
);

writeFileSync(P, s);
console.log('ok — 6 paragraphs + tagline');
