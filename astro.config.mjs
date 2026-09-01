import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel';

// Sunbeam School Ballia — static-first.
// See docs/05-design-system.md → "Astro implementation notes".
// No SPA, no client router. Islands only where interaction demands it.
/** Live routes that are still placeholders — see the sitemap filter below. */
const PLACEHOLDER_ROUTES = new Set([
  '/about/',
  '/admissions/campus-visit/',
  '/campus/classrooms/',
  '/campus/shooting-range/',
  '/campus/library/',
  '/campus/laboratories/',
  '/campus/auditorium/',
  '/campus/sports-facilities/',
]);

/**
 * ⚠ EVERY WIDTH ANY <Picture> OR <Image> ASKS FOR — AND VERCEL ALLOWS AT MOST
 * FIFTY. This list is FULL. There are exactly 50 entries and the platform
 * rejects 51: the build dies at the very end, after the pages are rendered,
 * with
 *
 *     "images.sizes" should be an Array of length between 1 to 50
 *
 * which reads like a code error but is a hard platform cap, and is not
 * documented on Vercel's build-output configuration page. Adding a width
 * without removing one WILL break the deploy.
 *
 * ⚠ AND A WIDTH MISSING FROM THIS LIST IS SILENTLY DROPPED. The adapter
 * filters `widths={[...]}` down to the entries named here — it does not snap
 * them — so an unlisted width just disappears from the srcset, and a component
 * whose every width is unlisted collapses to one. Nothing warns you.
 *
 * So a new `widths={[...]}` value in a component means EITHER reusing a number
 * already on this list, or trading one away. Eleven near-duplicates were
 * already merged into neighbours to get under the cap (286→300, 430→440,
 * 700/719→720, 768/780→800, 820→840, 940→980, 1080→1100, 1300→1320,
 * 1440→1400); prefer picking an existing number over spending the last slot.
 *
 * Verify with:
 *   grep -rho "widths={\[[0-9, ]*\]}" src --include=*.astro  *     | grep -o "[0-9]\+" | sort -n -u | wc -l
 *
 * Bare `width=` props carry no list of their own and ARE snapped to the
 * nearest entry, so the list stays deliberately dense at the small end.
 */
const IMAGE_WIDTHS = [
  48, 56, 60, 100, 112, 120, 130, 143, 160, 180, 200, 220, 240, 260, 280,
  300, 320, 340, 360, 380, 400, 420, 440, 460, 480, 520, 540, 560, 600,
  620, 640, 720, 760, 800, 840, 860, 880, 900, 980, 1000, 1024, 1100, 1200,
  1280, 1320, 1400, 1600, 1920, 2000, 2400,
];

/**
 * Replaces @astrojs/vercel's image services with the wrappers in src/lib/.
 * Both exist to fix a default the adapter gets wrong for this project — see
 * each file for which one and why.
 *
 * ⚠ IT HAS TO RUN AFTER THE ADAPTER AND THAT IS WHY IT IS LAST IN
 * `integrations`. The adapter sets image.service from its own
 * astro:config:setup; an override that lands first is simply overwritten, with
 * no warning and no failure. The symptoms are silent and easy to misread —
 * `q=100` back in the built srcset URLs, or every photograph 404ing in dev —
 * so if either shows up, check this ordering first.
 *
 * `endpointRoute` is threaded into the service config because a service module
 * cannot see the Astro config, and the dev wrapper needs to know what
 * trailingSlash did to the /_image route.
 */
const imageServiceOverrides = () => ({
  name: 'sunbeam:image-service-overrides',
  hooks: {
    'astro:config:setup': ({ command, config, updateConfig }) => {
      const file = command === 'dev' ? 'vercel-image-dev.ts' : 'vercel-image-quality.ts';
      updateConfig({
        image: {
          service: {
            entrypoint: new URL(`./src/lib/${file}`, config.root).pathname,
            config: {
              ...config.image.service.config,
              endpointRoute:
                config.trailingSlash === 'always' ? '/_image/' : '/_image',
            },
          },
        },
      });
    },
  },
});

/**
 * Retired URLs → where they now live. Read TWICE: by `redirects` in the config
 * below, and by retiredRoutePages(), which is what actually makes them work.
 */
const RETIRED_ROUTES = {
  /* The school publishes this page at /general-info/ and this project had it
       at /mandatory-public-disclosure/. The route moved to match theirs; this
       carries anything already pointing at the old path. */
    '/mandatory-public-disclosure': '/general-info/',

    /* ⚠ /admissions/ WAS A PLACEHOLDER AND IS NOW THE ADMISSION NOTICE. It was
       an auto-generated "being prepared" page — there was never any admissions
       content behind it, because client asset A8 (eligibility, age criteria,
       dates, fee data) has still not arrived. What the school DOES publish is
       the admission notice, so the URL was moved to say what the page is.

       ⚠ THE CHILD ROUTE /admissions/uniform-catalogue/ IS UNAFFECTED AND STAYS
       WHERE IT IS. This redirect matches the exact path only, not the subtree,
       and that page is real, linked from three places and possibly bookmarked —
       moving a working URL to tidy up a path segment is not worth a broken
       link. Its breadcrumb no longer points here. */
    '/admissions': '/admission-notice/',
    // → Teaching Methodology
    '/academics/teaching-learning/collaborative-learning': '/academics/teaching-learning/methodology/',
    // → Smart Classrooms & Digital Literacy
    '/academics/teaching-learning/ai-digital-literacy': '/academics/teaching-learning/smart-classrooms/',
    // → Experiential & Project-Based Learning
    '/academics/teaching-learning/project-based-learning': '/academics/teaching-learning/experiential-learning/',
    // → STEM, Robotics & Enrichment
    '/academics/teaching-learning/stem-education': '/academics/teaching-learning/stem-robotics/',
    '/academics/teaching-learning/robotics-coding': '/academics/teaching-learning/stem-robotics/',
    '/academics/teaching-learning/mathematics-science-enrichment': '/academics/teaching-learning/stem-robotics/',
    // → Reading, Language & Library
    '/academics/teaching-learning/reading-programme': '/academics/teaching-learning/reading-language/',
    '/academics/teaching-learning/language-development': '/academics/teaching-learning/reading-language/',
    '/academics/teaching-learning/library-programme': '/academics/teaching-learning/reading-language/',
    // → Laboratories & Academic Clubs
    '/academics/teaching-learning/laboratories': '/academics/teaching-learning/laboratories-clubs/',
    '/academics/teaching-learning/academic-clubs': '/academics/teaching-learning/laboratories-clubs/',
  };

/**
 * Emits a real redirecting HTML page at each retired path.
 *
 * ⚠ THIS EXISTS BECAUSE THE `redirects` CONFIG STOPPED WORKING WHEN THE VERCEL
 * ADAPTER WAS ADDED — see the long note beside `redirects` below for exactly
 * why. A file on disk is served by the filesystem handler and cannot be
 * outranked by a route rule, which is the whole point: it does not depend on
 * the order Vercel evaluates anything in.
 *
 * ⚠ IT WRITES THE SLASH FORM, /path/index.html, because trailingSlash is
 * 'always' and the canonicaliser rewrites the bare form to it before anything
 * else runs. The bare form therefore needs nothing of its own.
 *
 * ⚠ AND IT WRITES TO BOTH dist/ AND .vercel/output/static/. The adapter copies
 * the former to the latter from its own astro:build:done hook, and nothing
 * guarantees that hook runs after this one. Writing both is two lines and
 * removes the ordering question entirely; if the copy has not happened yet the
 * second write simply lands in a directory that is about to be overwritten with
 * identical content.
 *
 * A meta refresh plus a canonical link is weaker than a 301 and is a stopgap.
 * The durable fix is Vercel handling it — but that needs a rule ordered ahead
 * of the canonicaliser, which the adapter does not expose.
 */
const retiredRoutePages = () => ({
  name: 'sunbeam:retired-route-pages',
  hooks: {
    'astro:build:done': async ({ dir, logger }) => {
      const { mkdir, writeFile } = await import('node:fs/promises');
      const { existsSync } = await import('node:fs');
      const roots = [dir, new URL('./.vercel/output/static/', import.meta.url)]
        .filter((u) => u === dir || existsSync(u));

      for (const [from, to] of Object.entries(RETIRED_ROUTES)) {
        const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">` +
          `<meta http-equiv="refresh" content="0;url=${to}">` +
          `<link rel="canonical" href="${to}">` +
          `<meta name="robots" content="noindex">` +
          `<title>Redirecting…</title></head>` +
          `<body><p>This page has moved to <a href="${to}">${to}</a>.</p></body></html>
`;
        for (const root of roots) {
          const target = new URL(`.${from}/`, root);
          await mkdir(target, { recursive: true });
          await writeFile(new URL('./index.html', target), html, 'utf8');
        }
      }
      logger.info(
        `Wrote ${Object.keys(RETIRED_ROUTES).length} retired-route redirect pages`,
      );
    },
  },
});

export default defineConfig({
  site: 'https://sunbeamballia.edu.in',
  output: 'static',
  compressHTML: true,

  /* ⚠ ONE CANONICAL URL FORM. Both /about and /about/ used to return 200 with
     no redirect, so analytics split every page across two URLs. 'always'
     matches the trailing-slash form every internal href in this project already
     uses, and every canonical tag already emitted. */
  trailingSlash: 'always',
  /* ⚠⚠ THE OTHER HALF OF THIS LIVES IN vercel.json, AND IT HAS TO. The setting
     above governs how THIS project builds and links; it cannot make the host
     redirect, so /about and /about/ would both still answer 200 with nothing
     between them and analytics would split every page across two URLs.
     vercel.json carries "trailingSlash": true to 301 the bare form.

     ⚠ AND vercel.json CANNOT BE COMMENTED. Vercel validates it against a strict
     schema that rejects unknown top-level keys — a "//" note in there fails the
     deploy outright with "should NOT have additional property". That is why the
     reasoning is here, in a file that is allowed to explain itself, and
     vercel.json holds three keys and nothing else. Do not add comments to it.

     ⚠ THE THIRD KEY IS installCommand: "npm ci --omit=dev", AND IT IS LOAD
     BEARING. Vercel installs devDependencies by default, and `playwright` runs
     a postinstall that downloads Chromium, Firefox and WebKit — hundreds of
     megabytes and several minutes of a build that has nothing to render with
     them. playwright and lighthouse drive scripts/qa-shots.mjs and
     scripts/contrast-sample.mjs on a laptop and are never imported by the site,
     so the deploy skips them entirely.

     ⚠ WHICH MEANS devDependencies IS NOW OFF-LIMITS FOR ANYTHING THE BUILD
     NEEDS. @astrojs/sitemap lives in `dependencies` for exactly this reason,
     even though it is a build-time integration — put it back under
     devDependencies and the Vercel build fails to resolve this file's import
     while `npm run build` keeps working locally. */

  integrations: [
    sitemap({
      /* ⚠ THE NOT-YET-WRITTEN PAGES EXCLUDE THEMSELVES. [...slug].astro returns
         a real 200 for sections that have no content yet, so a sitemap would
         invite Google to index a placeholder. They already carry
         'noindex, follow'; this keeps them out of the sitemap to match.
         Written as a list rather than a pattern so that finishing a page means
         deleting one line here, and forgetting to is visible in review. */
      filter: (page) => !PLACEHOLDER_ROUTES.has(new URL(page).pathname),
    }),
    imageServiceOverrides(),
    retiredRoutePages(),
  ],
  build: {
    inlineStylesheets: 'auto',
  },
  /**
   * ⚠ THE ADAPTER IS HERE FOR THE IMAGE SERVICE, NOT FOR SSR. output stays
   * 'static'; every page is still prerendered to HTML at build time.
   *
   * WHY IT HAD TO CHANGE. With sharp as the image service, `astro build`
   * encoded every variant of all ~1,000 photographs in src/assets — 12,354
   * files, 1.6 GB, of which 3,323 were AVIF at roughly a second each. That is
   * about two and a half hours of single-core work. A laptop hides it behind
   * twelve cores; Vercel's build container has two to four and was still
   * encoding when the 45-minute build ceiling killed the deploy. Nothing about
   * the site was broken — the build simply could not finish.
   *
   * imageService: true swaps sharp for Vercel's optimiser, so the build emits
   * ZERO variants and the resizing happens per request at the edge, cached.
   * Deploys go from "never finishes" to a couple of minutes.
   *
   * ⚠ THIS COSTS MONEY AND HOBBY WILL NOT CARRY IT. Vercel bills image
   * TRANSFORMATIONS (one per cache miss); Hobby includes 5,000/month and this
   * site has enough image/width pairs to spend that in a single crawl, after
   * which images 402 and render as alt text. Hobby is also non-commercial-use
   * only. This project needs to be on Pro.
   */
  adapter: vercel({
    imageService: true,
    imagesConfig: {
      sizes: IMAGE_WIDTHS,
      domains: [],
      /* Content negotiation happens per request against Accept, so the
         `formats={['avif','webp']}` props on <Picture> no longer decide
         anything — they are now inert. Left in place because removing them
         touches 94 components and changes no bytes on the wire. */
      formats: ['image/avif', 'image/webp'],
      /* A year. Photographs of a 2024 sports day do not change, and every
         expiry is re-billed as a transformation plus a cache write. */
      minimumCacheTTL: 31536000,
    },
  }),
  image: {
    /* `qualities` is deliberately left unset in imagesConfig above so all of
       1–100 stay legal at the edge; the default itself is set by the wrapper
       service that imageQualityDefault() installs below. */
    responsiveStyles: true,
  },
  /**
   * ⚠ RETIRED ROUTES FROM THE SECTION C SPLIT EXPERIMENT.
   *
   * Eleven standalone Teaching & Learning pages were built one-topic-per-URL.
   * That was an implementation experiment, not the information architecture:
   * the intended IA combines related topics into SIX visitor-facing pages, so
   * the site has fewer and richer pages rather than one URL per small topic.
   * The verified content from all eleven now lives in the six, and these
   * redirects carry any link that escaped — internal, external or indexed —
   * to the combined page that absorbed it.
   *
   * Under output: static these emit as meta-refresh pages, which is why they
   * are declared here rather than as .astro files that would need deleting
   * again later.
   */
  /* ⚠⚠ THESE ARE DECLARED HERE BUT THEY DO NOT REDIRECT ON THEIR OWN ANY MORE,
     AND THE PAGES THAT MAKE THEM WORK ARE EMITTED BY retiredRoutePages() BELOW.
     Read that before touching either.

     WHAT CHANGED. Under plain output: 'static' Astro emitted each of these as a
     meta-refresh HTML page sitting at the real path, and they worked. Adding
     @astrojs/vercel turned them into ordered route rules in
     .vercel/output/config.json instead — and the adapter puts the
     trailingSlash: 'always' canonicaliser FIRST in that list:

         ^/((?:[^/]+/)*[^/.]+)$  ->  /$1/   (308, no `continue`, so it STOPS)

     A key written '/admissions' compiles to ^/admissions$. The canonicaliser
     has already rewritten /admissions to /admissions/ by the time that rule is
     reached, and /admissions/ matches no rule at all, so it falls through to
     the filesystem and 404s. Writing the key WITH a slash does not help either:
     Astro strips it before compiling the pattern — verified, the emitted src is
     ^/admissions$ both ways.

     So all thirteen — the eleven Section C routes, mandatory-public-disclosure
     and admissions — were silently dead the moment the adapter went in. They
     look correct in this file and correct in the built config.

     ⚠ THE ENTRIES STAY because this is the one place the retired → live map is
     written down, and retiredRoutePages() reads it. Deleting an entry deletes
     its redirect page too. */
  redirects: RETIRED_ROUTES,

  devToolbar: {
    enabled: false,
  },
});
