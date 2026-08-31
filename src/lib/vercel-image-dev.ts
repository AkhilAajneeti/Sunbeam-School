import baseDevService from '@astrojs/vercel/dev-image-service';
import type { ExternalImageService } from 'astro';

/**
 * The Vercel DEV image service, with its endpoint URL corrected for this
 * project's trailingSlash setting, and the same default quality as the build
 * service in ./vercel-image-quality.ts.
 *
 * ⚠ WITHOUT THIS, `astro dev` SHOWS NO PHOTOGRAPHS AT ALL. @astrojs/vercel's
 * dev service ends getURL with a hardcoded `return "/_image?" + searchParams`.
 * This project sets trailingSlash: 'always', so the dev server answers
 * /_image/ and returns 404 for every one of the ~590 image URLs on the home
 * page alone. Nothing errors in the terminal — the pages render with broken
 * images, which is easy to mistake for a caching problem.
 *
 * The slash is read from `endpointRoute` in the service config rather than
 * written in here, so it follows astro.config.mjs instead of quietly
 * disagreeing with it the day trailingSlash changes.
 *
 * Only `astro dev` uses this. Builds get the real Vercel optimiser.
 */
const DEFAULT_QUALITY = 75;

const service: ExternalImageService = {
  ...baseDevService,
  validateOptions(options, serviceOptions) {
    return baseDevService.validateOptions!(
      { ...options, quality: options.quality ?? DEFAULT_QUALITY },
      serviceOptions,
    );
  },
  getURL(options, serviceOptions) {
    const url = baseDevService.getURL(options, serviceOptions) as string;
    const route = (serviceOptions.service.config as { endpointRoute?: string })
      .endpointRoute;
    return route ? url.replace(/^\/_image\?/, `${route}?`) : url;
  },
};

export default service;
