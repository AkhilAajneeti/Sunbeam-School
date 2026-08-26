/**
 * MOTION ENTRY
 *
 * Deliberately tiny. GSAP + ScrollTrigger is the single largest thing this site
 * would ship, so it is behind a dynamic import and two gates:
 *
 *   · prefers-reduced-motion — docs/05 § N. These users do not merely get
 *     shorter animations, they never download the library at all.
 *   · Save-Data — a parent on a metered connection in Ballia should not pay for
 *     decoration. The page is complete and readable without it.
 *
 * Everything animated is an enhancement of content that is already on screen,
 * so skipping the chunk costs nothing but the movement.
 */
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const saveData = Boolean((navigator as any).connection?.saveData);

if (!reduced && !saveData) {
  import('./motion-gsap');
}
