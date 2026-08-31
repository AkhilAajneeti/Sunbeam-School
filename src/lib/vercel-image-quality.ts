import baseService from '@astrojs/vercel/build-image-service';
import type { ExternalImageService } from 'astro';

/**
 * The Vercel build image service, with one thing changed: a default quality.
 *
 * ⚠ WHY THIS FILE EXISTS. @astrojs/vercel's build service ends its option
 * validation with `if (!options.quality) options.quality = 100`, so every
 * <Picture> in this project — not one of which sets `quality` — asks Vercel's
 * optimiser for q=100. A q=100 AVIF is several times the bytes of a q=75 one
 * for a difference nobody can see on a photograph, and Vercel bills the
 * delivery as Fast Data Transfer. It is also straight LCP damage.
 *
 * Setting quality BEFORE delegating is what makes this work: the wrapped
 * validateOptions only fills in 100 when the field is still empty, so a value
 * here survives, and an explicit `quality` prop on a component still wins over
 * this default.
 *
 * The alternative was adding quality={75} to 314 <Picture>/<Image> tags and
 * remembering it on every future one.
 */
const DEFAULT_QUALITY = 75;

const service: ExternalImageService = {
  ...baseService,
  validateOptions(options, serviceOptions) {
    return baseService.validateOptions!(
      { ...options, quality: options.quality ?? DEFAULT_QUALITY },
      serviceOptions,
    );
  },
};

export default service;
