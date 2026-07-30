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
      const el = node as HTMLElement;
      // Passed through untouched, not wrapped:
      //  · <br> is a chosen line break, not a word. Masking one would give it a
      //    box and destroy the break the heading depends on.
      //  · screen-reader-only text has no visual box to mask, and giving it one
      //    could drag it back into the visual flow.
      if (el.tagName === 'BR' || el.classList.contains('u-visually-hidden')) {
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

/* --- POP ENTRANCES ----------------------------------------------------------
   `data-reveal` fades up 26px on power3 — a calm arrival. `data-pop` is the
   louder cousin the Academic Philosophy page asked for: it comes further up from
   below and overshoots its rest size slightly, so a card lands rather than
   fades. `back.out(1.5)` is what makes it a pop; the scale is what stops the
   overshoot reading as a jump.

   Same three rules as everything else in this file: content is visible until
   this chunk arms it, nothing already on screen is touched (belowFold), and no
   horizontal transform.

   clearProps IS LOAD-BEARING HERE. A finished gsap.to leaves an inline
   `transform` on the element, which outranks the stylesheet and silently kills
   any `:hover` transform on the same node — the affiliation tiles lost their
   hover lift to exactly this before (see the grid stagger below). Handing the
   element back to CSS at the end costs nothing and keeps hover working whether
   the attribute sits on a wrapper or on the hovered card itself.

   `data-pop-delay` mirrors `data-reveal-delay`, in milliseconds. */
const popped = gsap.utils.toArray<HTMLElement>('[data-pop]').filter(belowFold);
if (popped.length) {
  gsap.set(popped, { opacity: 0, y: 44, scale: 0.94 });
  ScrollTrigger.batch(popped, {
    start: START,
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.85,
        ease: 'back.out(1.5)',
        stagger: 0.08,
        clearProps: 'transform,opacity',
        delay: Number((batch[0] as HTMLElement).dataset.popDelay ?? 0) / 1000,
      }),
  });
}

/* --- PARALLAX ----------------------------------------------------------------
   `data-parallax` drifts an element against the scroll. `data-parallax-y` is the
   total travel in pixels, defaulting to 60; a NEGATIVE value moves it the other
   way, which is how two layers in the same collage get different depths.

   Rule 3 holds: y only, never x. A horizontal drift is the easiest way to break
   a layout that is verified free of horizontal overflow.

   DESKTOP ONLY, and that is not a performance excuse. Below 1024 these
   compositions stack, so a layer that drifts is no longer beside the thing it was
   offset against — it just wanders through the copy underneath it.

   `invalidateOnRefresh` because the travel is computed from a live layout: without
   it a font swap or an image finishing its decode leaves the tween scrubbing
   against stale positions. */
gsap.utils.toArray<HTMLElement>('[data-parallax]').forEach((el) => {
  if (window.innerWidth < 1024) return;
  const travel = Number(el.dataset.parallaxY ?? 60);
  gsap.fromTo(
    el,
    { y: travel / 2 },
    {
      y: -travel / 2,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    }
  );
});

/* --- MASK REVEAL -------------------------------------------------------------
   `data-mask` wipes an image in from its bottom edge instead of fading it. A
   one-shot on enter, NOT a scrub: a scrubbed clip-path means the reader can park
   mid-scroll and sit looking at a half-drawn photograph, which reads as a broken
   image rather than as an effect.

   clip-path, not a width or height tween: clipping never reflows and never
   changes the image's own geometry, so the crop and focal point stay exactly
   where the composition put them.

   `data-mask-from` takes `bottom` (default) or `left`. Left is still a clip, not
   a translate — rule 3 is about moving boxes, and this moves nothing. */
gsap.utils.toArray<HTMLElement>('[data-mask]').forEach((el) => {
  if (!belowFold(el)) return;
  const from = el.dataset.maskFrom === 'left' ? 'inset(0 100% 0 0)' : 'inset(100% 0 0 0)';
  gsap.fromTo(
    el,
    { clipPath: from, webkitClipPath: from },
    {
      clipPath: 'inset(0% 0% 0% 0%)',
      webkitClipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.1,
      ease: 'power3.inOut',
      // Hand it back to CSS: a leftover inline clip-path would clip any hover
      // scale on the image inside it to the frame it finished on.
      clearProps: 'clipPath,webkitClipPath',
      scrollTrigger: { trigger: el, start: START, once: true },
    }
  );
});

/* --- HORIZONTAL RAIL PROGRESS ------------------------------------------------
   Reports how far a NATIVELY scrolling rail has been scrolled, as a 0–1 custom
   property the stylesheet turns into a progress bar.

   THE RAIL IS NOT SCROLL-JACKED, deliberately. The obvious build for a
   horizontal story is to pin the section and translate a track against page
   scroll; on a trackpad that hijacks the gesture, on a phone it fights the
   browser, and with the keyboard it is unreachable. A real `overflow-x` scroller
   with scroll-snap gets flick, drag, shift-wheel, arrow keys and a screen
   reader's own scrolling for free. This function only draws the indicator, so
   with the chunk absent the rail still works exactly as well — it just loses its
   progress bar.

   Passive listener: this never calls preventDefault, and saying so lets the
   browser keep scrolling on the compositor while it runs. */
document.querySelectorAll<HTMLElement>('[data-rail]').forEach((rail) => {
  /* THE PROPERTY GOES ON THE SCOPE, NOT ON THE RAIL. Custom properties inherit
     DOWN the tree, and the indicator is a SIBLING of the scroller — it sits up in
     the section head so it can line up with the heading. Writing the property on
     the rail itself left the bar reading its `var(--rail-progress, 0)` fallback
     for ever: permanently empty, and indistinguishable from "the chunk has not
     loaded". `[data-rail-scope]` is the nearest element that contains both. */
  const scope = rail.closest<HTMLElement>('[data-rail-scope]') ?? rail;
  const draw = () => {
    const max = rail.scrollWidth - rail.clientWidth;
    scope.style.setProperty('--rail-progress', max > 0 ? String(rail.scrollLeft / max) : '1');
  };
  rail.addEventListener('scroll', draw, { passive: true });
  window.addEventListener('resize', draw);
  draw();
});

/* --- Figures count up --------------------------------------------------------
   Only ever applied to QUANTITIES. The other figures on these pages are ranks
   and identifiers — "#1", "CBSE", an affiliation number — and counting those up
   would animate something that is not a quantity.

   querySelectorAll, not querySelector. This was singular, which silently meant
   that on any page with more than one figure only the FIRST one ever counted and
   the rest sat at their static value — indistinguishable from the animation
   simply not being wired up. One counter per page was never a rule, just an
   accident of the homepage having exactly one.

   `data-count-suffix` carries "+" or "%" so the symbol is not eaten by the
   textContent write, and the number is grouped for the reader — a figure like
   15000 is much harder to read mid-count without separators. */
document.querySelectorAll<HTMLElement>('[data-count]').forEach((figure) => {
  if (!belowFold(figure)) return;
  const target = Number(figure.dataset.count);
  if (!Number.isFinite(target)) return;

  const suffix = figure.dataset.countSuffix ?? '';
  const state = { n: 0 };
  gsap.to(state, {
    n: target,
    duration: 1.4,
    ease: 'power2.out',
    scrollTrigger: { trigger: figure, start: 'top 80%', once: true },
    onUpdate: () => {
      figure.textContent = Math.round(state.n).toLocaleString('en-IN') + suffix;
    },
  });
});

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

/* --- Scroll-scaled video frame ----------------------------------------------
   Starts at 80% - set in CSS - and reaches full size as it travels up the
   viewport.

   NOT belowFold-guarded, unlike every entrance above. That guard exists to stop
   a hidden->visible flash on something already on screen; a scrub has no hidden
   state. This frame sits just under the banner and is visible at load, so the
   guard skipped it entirely and the scale never moved. */
const expand = document.querySelector<HTMLElement>('[data-expand]');
if (expand) {
  gsap.to(
    expand,
    {
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: expand,
        start: 'top 90%',
        end: 'top 30%',
        scrub: 0.4,
      },
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
    // Hand the element back to CSS when the entrance finishes. Without this
    // GSAP leaves an inline `transform` behind, which outranks the stylesheet
    // and silently kills every :hover lift on these tiles — measured: the
    // affiliation tiles reported an unchanged transform on hover.
    clearProps: 'transform,opacity',
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
