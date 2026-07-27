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
  devToolbar: {
    enabled: false,
  },
});
