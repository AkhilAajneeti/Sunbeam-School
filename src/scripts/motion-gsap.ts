/**
 * MOTION — GSAP + ScrollTrigger
 *
 * Loaded lazily by motion.ts, and only when motion is wanted. See that file for
 * why the guards live there rather than here.
 *
 * THREE RULES THIS FILE KEEPS
 *
 * 1. Content is visible by default. CSS sets `[data-reveal] { opacity: 1 }`;
 *    this file hides things only once it has loaded. A failed script, a blocked
 *    request or a slow phone leaves a fully readable page — never a blank one.
 *
 * 2. NOTHING ALREADY ON SCREEN IS EVER HIDDEN. Because this chunk arrives after
 *    first paint, arming an element the reader is already looking at produces a
 *    visible → hidden → animate flicker. Anything below the fold when the script
 *    runs gets the entrance; anything already in view is left exactly as it is.
 *    You cannot animate in something the reader is already reading.
 *
 * 3. No horizontal transforms anywhere. The page is verified free of horizontal
 *    overflow at 390–1440, and an `x` tween is the easiest way to break that for
 *    the duration of a tween — exactly the kind of bug a static screenshot never
 *    shows.
 *
 * Imported from `gsap/gsap-core` with CSSPlugin registered by hand rather than
 * the default `gsap` entry, which pulls in every ease and utility whether or not
 * they are used.
 */
import { gsap } from 'gsap/gsap-core';
import { CSSPlugin } from 'gsap/CSSPlugin';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(CSSPlugin, ScrollTrigger);

const START = 'top 85%';

/** Rule 2. Below the fold when the script runs → safe to animate in. */
const belowFold = (el: Element) => el.getBoundingClientRect().top > window.innerHeight * 0.92;

/* ---------------------------------------------------------------------------
   SPLIT
   Wraps each word in an overflow-hidden mask so it can rise into view.

   Walks CHILD NODES rather than reading textContent: several headings carry a
   `.t-squiggle` plate (`What our students <span class="t-squiggle">say</span>`)
   and rebuilding innerHTML from text would destroy it. Text nodes split into
   words; element children are kept whole as one unit and marked `free`, because
   the plate is rotated and has its own radius — masking one slices its corners.
--------------------------------------------------------------------------- */
const splitWords = (el: HTMLElement): HTMLElement[] => {
  const units: HTMLElement[] = [];
  const out = document.createDocumentFragment();

  const wrap = (child: Node, free = false) => {
    const mask = document.createElement('span');
    mask.className = free ? 'sp-mask sp-mask--free' : 'sp-mask';
    const inner = document.createElement('span');
    inner.className = 'sp-word';
    if (free) inner.dataset.free = '';
    inner.appendChild(child);
    mask.appendChild(inner);
    out.appendChild(mask);
    out.appendChild(document.createTextNode(' '));
    units.push(inner);
  };

  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      (node.textContent ?? '')
        .split(/\s+/)
        .filter(Boolean)
        .forEach((word) => wrap(document.createTextNode(word)));
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      // Screen-reader-only text: copied through untouched. Masking it would
      // give it a box and could drag it back into the visual flow.
      if ((node as HTMLElement).classList.contains('u-visually-hidden')) {
        out.appendChild(node.cloneNode(true));
        return;
      }
      wrap(node.cloneNode(true), true);
    }
  });

  el.textContent = '';
  el.appendChild(out);
  return units;
};

/* --- Split headings -------------------------------------------------------- */
gsap.utils.toArray<HTMLElement>('[data-split]').forEach((heading) => {
  if (!belowFold(heading)) return;
  const words = splitWords(heading);
  if (!words.length) return;

  gsap.from(words, {
    // A masked word travels its own full height from under the mask. The plate
    // has no mask, so a 115% offset would just show it sliding across the line
    // below — it gets a short pixel lift instead.
    yPercent: (_i: number, el: HTMLElement) => (el.dataset.free === undefined ? 115 : 0),
    y: (_i: number, el: HTMLElement) => (el.dataset.free === undefined ? 0 : 16),
    opacity: 0,
    duration: 0.8,
    ease: 'power3.out',
    stagger: 0.045,
    scrollTrigger: { trigger: heading, start: START },
  });
});

/* --- General reveals -------------------------------------------------------
   Same contract as the IntersectionObserver this replaced, `data-reveal-delay`
   included. `batch` groups everything entering together into one stagger rather
   than firing a separate tween per element. */
const targets = gsap.utils.toArray<HTMLElement>('[data-reveal]').filter(belowFold);
if (targets.length) {
  gsap.set(targets, { opacity: 0, y: 26 });
  ScrollTrigger.batch(targets, {
    start: START,
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        duration: 0.75,
        ease: 'power3.out',
        stagger: 0.09,
        delay: Number((batch[0] as HTMLElement).dataset.revealDelay ?? 0) / 1000,
      }),
  });
}

/* --- The heritage figure counts up -----------------------------------------
   "50" only. The other figures on the page are ranks and identifiers — "#1",
   "CBSE", an affiliation number — and counting those up would animate something
   that is not a quantity. */
const figure = document.querySelector<HTMLElement>('[data-count]');
if (figure && belowFold(figure)) {
  const target = Number(figure.dataset.count);
  if (Number.isFinite(target)) {
    const state = { n: 0 };
    gsap.to(state, {
      n: target,
      duration: 1.4,
      ease: 'power2.out',
      scrollTrigger: { trigger: figure, start: 'top 80%', once: true },
      onUpdate: () => {
        figure.textContent = String(Math.round(state.n));
      },
    });
  }
}

/* --- Principal portrait, slow parallax --------------------------------------
   The scale covers the travel, so the crop never exposes an edge. Desktop only:
   below 1024 the portrait is a fixed-height band above the copy and moving it
   would fight the stacked layout. */
const portrait = document.querySelector<HTMLElement>('.principal__media .photo');
if (portrait && window.innerWidth >= 1024) {
  gsap.fromTo(
    portrait,
    { yPercent: -4, scale: 1.08 },
    {
      yPercent: 4,
      scale: 1.08,
      ease: 'none',
      scrollTrigger: { trigger: '.principal', start: 'top bottom', end: 'bottom top', scrub: 0.6 },
    }
  );
}

/* --- Grids that read better as a stagger ------------------------------------ */
const grids: [string, string][] = [
  ['.quick__grid', 'li'],
  ['.affil__row', '.affil__item'],
  ['.ach__grid', ':scope > *'],
];
grids.forEach(([container, child]) => {
  const root = document.querySelector(container);
  if (!root || !belowFold(root)) return;
  const items = Array.from(root.querySelectorAll<HTMLElement>(child));
  if (!items.length) return;
  gsap.from(items, {
    opacity: 0,
    y: 22,
    duration: 0.6,
    ease: 'power3.out',
    stagger: 0.07,
    scrollTrigger: { trigger: root, start: START, once: true },
  });
});

/* --- The admissions decorations drift in ------------------------------------
   They already float on a CSS keyframe loop. Tweening transform here would
   fight it, so only opacity is touched. */
const decos = gsap.utils.toArray<HTMLElement>('.adm__deco');
if (decos.length && belowFold(decos[0])) {
  gsap.from(decos, {
    opacity: 0,
    duration: 0.7,
    ease: 'power2.out',
    stagger: 0.12,
    scrollTrigger: { trigger: '.adm', start: 'top 75%', once: true },
  });
}

/* Web fonts land after first paint and change the height of every block, so
   every trigger position computed before that was measured against fallback
   metrics and is wrong. */
document.fonts?.ready.then(() => ScrollTrigger.refresh());
