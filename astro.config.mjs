import { defineConfig } from 'astro/config';

// Sunbeam School Ballia — static-first.
// See docs/05-design-system.md → "Astro implementation notes".
// No SPA, no client router. Islands only where interaction demands it.
export default defineConfig({
  site: 'https://sunbeamballia.edu.in',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
  image: {
    // AVIF → WebP → JPEG handled per-<Picture>; sharp is the service.
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
  redirects: {
    /* The school publishes this page at /general-info/ and this project had it
       at /mandatory-public-disclosure/. The route moved to match theirs; this
       carries anything already pointing at the old path. */
    '/mandatory-public-disclosure': '/general-info/',
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
  },

  devToolbar: {
    enabled: false,
  },
});
