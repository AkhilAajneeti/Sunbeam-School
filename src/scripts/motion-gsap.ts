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

/* --- SCROLL ZOOM -------------------------------------------------------------
   `data-zoom` scales the IMAGE inside a frame as the frame travels through the
   viewport. `data-zoom-to` is the end scale, defaulting to 1.12.

   THE IMAGE MOVES, NOT THE FRAME. Scaling the frame would change the box the
   layout reserved and drag its neighbours around; scaling the img inside a frame
   that already clips leaves every measured position on the page exactly where it
   was. Every consumer therefore needs `overflow: hidden` — without it the photo
   simply grows past its own corners.

   SCRUBBED, unlike `data-mask`. A half-finished wipe reads as a broken image, so
   that one is a one-shot; a half-finished zoom is just a slightly tighter crop,
   which is a legitimate state to park in mid-scroll.

   `transform-origin: center` is the default and is what keeps the focal point
   the composition chose from sliding out of frame as it grows.

   `invalidateOnRefresh` because the trigger's start/end come from a live layout:
   without it a font swap or an image finishing its decode leaves the tween
   scrubbing against stale positions. */
gsap.utils.toArray<HTMLElement>('[data-zoom]').forEach((el) => {
  const img = el.querySelector<HTMLElement>('img');
  if (!img) return;
  const to = Number(el.dataset.zoomTo ?? 1.12);
  gsap.fromTo(
    img,
    { scale: 1 },
    {
      scale: to,
      ease: 'none',
      scrollTrigger: {
        trigger: el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 0.6,
        invalidateOnRefresh: true,
      },
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
/* --- PINNED HORIZONTAL RAIL --------------------------------------------------
   The section holds still while the track travels sideways under it — the one
   genuine piece of scroll-jacking on this site.

   ONE IMPLEMENTATION, ANY NUMBER OF RAILS. Everything below is driven by
   attributes rather than by a component's class names: `[data-rail-scope]` marks
   the section, `[data-rail-track]` the moving element, `[data-rail-item]` each
   card and `[data-rail-tail]` the end spacer. StemRail and JourneyCarousel are
   two entirely different designs sharing this code, and a third would need no
   changes here — only the same four attributes.
   Four things keep it from being the bad version of itself:

   1 · IT IS AN ENHANCEMENT, NOT THE MECHANISM. The rail is a real `overflow-x`
       scroller in CSS and stays one until this code runs. Reduced motion and
       Save-Data never load this chunk at all, so those readers keep the native
       scroller rather than losing the section — which is what happens when a
       pinned rail IS the only implementation.

   2 · DESKTOP ONLY. A pinned horizontal section on a phone fights the browser's
       own vertical gesture and is the single most complained-about pattern on the
       mobile web. Below 1024 the native swipe rail stands.

   3 · THE SCROLL DISTANCE EQUALS THE TRAVEL. `end: '+=' + distance` means one
       pixel of page scroll moves the track one pixel, so the gesture keeps the
       weight the reader expects. Padding it out is what makes these sections feel
       like wading.

   4 · `invalidateOnRefresh` + a function `end`, because the distance depends on a
       clamp()-sized panel and a clamp() gap: a value measured once is wrong at
       every other width, and wrong after a font swap at the same width.

   `anticipatePin` hides the one-frame jump where a fast scroll reaches the pin
   before ScrollTrigger has applied it. */
if (window.innerWidth >= 1024) {
  document.querySelectorAll<HTMLElement>('[data-rail-track]').forEach((track) => {
    const section = track.closest<HTMLElement>('[data-rail-scope]');
    const viewport = track.parentElement as HTMLElement | null;
    if (!section || !viewport) return;

    /* OPT OUT, PER RAIL. Not every horizontal rail wants to be pinned: a rail
       whose whole design is three cards standing still while arrows page through
       them is a worse thing pinned, because the reader loses the page scroll for
       a section that had nothing to travel through. `data-rail-nopin` keeps such
       a rail on the native scroller and out of the depth pass, while still
       letting it use the progress writer and the button handshake below. */
    if (section.hasAttribute('data-rail-nopin')) return;

    section.classList.add('is-pinned');

    /* HOW FAR THE TRACK TRAVELS — measured from the TAIL element, which is the
       one place the end position is defined.

       The track ends with a real spacer sized in CSS (see .rail__tail), so the
       content's true right edge is that spacer's right edge. Moving the track
       until that meets the viewport's right edge leaves the last panel fully in
       view and framed, which is where the pin should release.

       Not `track.scrollWidth`: Chrome does not include an element's right
       padding in it, and an earlier version of this measured 555px short because
       of that. Reading the spacer keeps CSS the single source of truth for the
       end position, so the native rail and the pinned one cannot disagree. */
    const distance = () => {
      const tail = track.querySelector<HTMLElement>('[data-rail-tail]');
      const edge = tail
        ? tail.offsetLeft + tail.offsetWidth
        : (() => {
            const ps = track.querySelectorAll<HTMLElement>('[data-rail-item]');
            const last = ps[ps.length - 1];
            return last ? last.offsetLeft + last.offsetWidth : 0;
          })();
      return Math.max(0, edge - viewport.clientWidth);
    };

    // Nothing to travel — six panels can fit outright on a very wide screen.
    if (distance() < 8) {
      section.classList.remove('is-pinned');
      return;
    }

    /* ── DEPTH ────────────────────────────────────────────────────────────────
       Each card is scaled and turned by how far its centre sits from the centre
       of the viewport: small and angled away at the right, full size and square
       on at the middle, small and angled the other way at the left.

       MEASURED FROM CACHED OFFSETS, NOT getBoundingClientRect. This runs on every
       scrubbed frame across six cards; `getBoundingClientRect` forces a layout
       flush each time and would turn a smooth scrub into a stutter on a mid-range
       laptop. `offsetLeft` is read once per refresh — it cannot change while the
       track is only being transformed — and the live position is that plus the
       track's current x, which we already know.

       It writes CUSTOM PROPERTIES rather than `transform` directly, so the
       stylesheet keeps ownership of the whole transform expression. That is what
       lets the CSS declare a sane default (flat, full size) for every state where
       this never runs. */
    let offsets: { mid: number; el: HTMLElement }[] = [];

    const measure = () => {
      // Items only — the track also holds the tail spacer, which has nothing to
      // scale or turn.
      offsets = [...track.querySelectorAll<HTMLElement>('[data-rail-item]')].map((el) => ({
        el,
        mid: el.offsetLeft + el.offsetWidth / 2,
      }));
    };

    /* ── DRIFT ────────────────────────────────────────────────────────────────
       What makes the rail feel alive rather than mechanical: the cards LEAN AND
       LAG against the scroll, then settle.

       Driven by scroll VELOCITY, not position. Position alone gives a rail that
       moves but never reacts — the same picture whether you nudged it or threw
       it. Velocity is what carries the sense of weight, and it is the difference
       between a carousel and something with momentum.

       `lag` varies per card from a fixed sequence rather than a random number, so
       the six trail each other in a fixed wave instead of drifting as one slab —
       and so the effect is identical on every load. Random would be untestable
       and would flicker differently for every visitor.

       IT DECAYS ON ITS OWN rAF LOOP, because ScrollTrigger's onUpdate only fires
       while the page is actually moving: without this the cards would stop
       mid-lean the instant the reader stopped and simply stay there. The loop
       runs only while there is something left to settle and then stops, so an
       idle page costs nothing. */
    const lags = [1, 0.55, 0.85, 0.4, 0.95, 0.65];
    let lean = 0;
    let target = 0;
    let raf = 0;

    const applyDrift = () => {
      offsets.forEach(({ el }, i) => {
        const lag = lags[i % lags.length];
        el.style.setProperty('--pan-tilt', (lean * 1.9 * lag).toFixed(3) + 'deg');
        el.style.setProperty('--pan-lift', (lean * 13 * lag).toFixed(2) + 'px');
      });
    };

    const settle = () => {
      // Ease towards the target, and let the target itself fall back to rest.
      lean += (target - lean) * 0.14;
      target *= 0.86;
      applyDrift();

      if (Math.abs(lean) > 0.002 || Math.abs(target) > 0.002) {
        raf = requestAnimationFrame(settle);
      } else {
        lean = 0;
        target = 0;
        applyDrift();
        raf = 0;
      }
    };

    /* STRENGTHS COME OFF THE SCOPE, so two very different rails can share this
       one implementation: the STEM panels want a restrained 0.14 / 13° so six
       cards still read as a row, while a journey carousel wants the full
       coverflow — 0.18 / 25°, dimmed and blurred at the edges so the centre card
       is unmistakably the active one. Defaults are the restrained set, which
       means an existing caller that says nothing keeps exactly what it had. */
    const num = (key: string, fallback: number) => {
      const v = Number(section.dataset[key]);
      return Number.isFinite(v) ? v : fallback;
    };
    const dScale = num('depthScale', 0.14);
    const dTurn = num('depthTurn', 13);
    const dDim = num('depthDim', 0);
    const dBlur = num('depthBlur', 0);

    const depth = (x: number) => {
      const half = viewport.clientWidth / 2;
      if (!half) return;
      for (const { el, mid } of offsets) {
        // -1 at the far left of the viewport, 0 dead centre, +1 at the far right.
        const d = Math.max(-1.4, Math.min(1.4, (mid + x - half) / half));
        const away = Math.abs(d);
        el.style.setProperty('--pan-scale', (1 - away * dScale).toFixed(4));
        el.style.setProperty('--pan-turn', (-d * dTurn).toFixed(2) + 'deg');
        if (dDim) el.style.setProperty('--pan-dim', (1 - away * dDim).toFixed(3));
        if (dBlur) el.style.setProperty('--pan-blur', (away * dBlur).toFixed(2) + 'px');
      }
    };

    measure();

    const tween = gsap.to(track, {
      x: () => -distance(),
      ease: 'none',
      scrollTrigger: {
        trigger: section,
        start: 'top top',
        end: () => '+=' + distance(),
        pin: true,
        anticipatePin: 1,
        scrub: 0.6,
        invalidateOnRefresh: true,
        onRefresh: () => {
          measure();
          depth(gsap.getProperty(track, 'x') as number);
        },
        onUpdate: (self) => {
          section.style.setProperty('--rail-progress', String(self.progress));
          // The buttons read these to know whether they are at an end.
          section.dataset.railAtStart = self.progress <= 0.001 ? 'true' : 'false';
          section.dataset.railAtEnd = self.progress >= 0.999 ? 'true' : 'false';
          depth(gsap.getProperty(track, 'x') as number);

          /* Velocity is in px/sec and routinely runs to a few thousand on a
             flick, so it is divided down and clamped. Without the clamp a fast
             wheel spin throws the cards to a 30° lean, which reads as a glitch
             rather than as momentum. ±1 keeps the extremes at the ~2° and 13px
             the multipliers above are tuned around. */
          target = Math.max(-1, Math.min(1, self.getVelocity() / -1800));
          if (!raf) raf = requestAnimationFrame(settle);
        },
      },
    });

    // The rail is usually below the fold at load, so onUpdate has not run yet and
    // the cards would sit flat until first scroll. One pass now sets the resting
    // shape — the right-hand cards already small before anyone arrives.
    depth(0);

    /* The prev/next buttons, when pinned, move the PAGE rather than the
       container — the container no longer scrolls. The component dispatches a
       cancelable `rail:step`; handling it here and calling preventDefault is what
       tells that script its native fallback is not needed. */
    section.addEventListener('rail:step', ((e: CustomEvent<{ dir: number }>) => {
      const st = tween.scrollTrigger;
      if (!st) return;
      e.preventDefault();

      const panels = track.children.length;
      const span = st.end - st.start;
      const stepFraction = 1 / Math.max(1, panels - 1);
      const next = Math.min(1, Math.max(0, st.progress + e.detail.dir * stepFraction));

      window.scrollTo({
        top: st.start + span * next,
        behavior: 'smooth',
      });
    }) as EventListener);
  });
}

document.querySelectorAll<HTMLElement>('[data-rail]').forEach((rail) => {
  /* Skip a rail the pin has taken over: it reports its own progress from the
     ScrollTrigger, and this writer would otherwise reset the property to 0 on
     load — the pinned block runs first, so whichever wrote last would win. */
  if (rail.closest('.is-pinned')) return;

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
  /* ⚠ PER-ELEMENT DURATION, ADDED FOR PARENT ORIENTATION. Two figures counting
     at identical speeds read as one animation with two labels; a small
     difference makes them read as two facts arriving. Defaults to the original
     1.4 so every existing counter is untouched. */
  const dur = Number(figure.dataset.countDur ?? 1.4);
  const state = { n: 0 };
  gsap.to(state, {
    n: target,
    duration: Number.isFinite(dur) && dur > 0 ? dur : 1.4,
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

/* ---------------------------------------------------------------------------
   CLIP — a headline line wiped in behind its own edge.

   Added for Parent Orientation, which needed a hero entrance that was not the
   word-mask `data-split` every other Academics hero uses. Where split rises
   words from below, this sweeps the whole line open from the left, which suits
   a three-line poster headline that should read as one gesture.

   ⚠ INSET, NOT A TRANSFORM. Rule 3 forbids horizontal transforms — an x-tween
   is the classic way to introduce horizontal overflow for the length of a
   tween. `clip-path: inset()` moves nothing; it only changes what is painted.

   ⚠ AND IT OBEYS RULE 1, WHICH THE FIRST VERSION DID NOT. That version used
   fromTo() with an opacity of 0, which GSAP applies the instant the tween is
   created — so every element was hidden up front and stayed hidden if its
   ScrollTrigger never fired. Ten of them were measured stuck at opacity 0 with
   motion enabled. Nothing here hides anything until its trigger has actually
   fired, and anything already in view is revealed immediately instead.
--------------------------------------------------------------------------- */
const armClip = (el: HTMLElement, delay: number) => {
  const from = 'inset(0 100% 0 0)';
  gsap.set(el, { clipPath: from, webkitClipPath: from, opacity: 0.001 });
  gsap.to(el, {
    clipPath: 'inset(0 0% 0 0)',
    webkitClipPath: 'inset(0 0% 0 0)',
    opacity: 1,
    duration: 1.05,
    delay,
    ease: 'power3.out',
    clearProps: 'clipPath,webkitClipPath',
  });
};

gsap.utils.toArray<HTMLElement>('[data-clip]').forEach((el) => {
  const delay = Number(el.dataset.clipDelay ?? 0) / 1000;

  /* Above the fold — the hero case. Play it now; there is nothing to wait for. */
  if (!belowFold(el)) {
    armClip(el, delay);
    return;
  }

  /* Below the fold — arm it only when the trigger fires, so a trigger that
     never fires leaves readable content rather than a blank line. */
  ScrollTrigger.create({
    trigger: el,
    start: START,
    once: true,
    onEnter: () => armClip(el, delay),
  });
});

/* ---------------------------------------------------------------------------
   DRIFT — a word that arrives on its own as the reader scrolls past it.

   For the four-word participation section: the words sit around a photograph
   and should appear one at a time rather than as one stagger, because the
   reader travels past them at their own speed. Each therefore carries its own
   trigger rather than sharing a batch.

   Vertical only, per rule 3. Nothing is hidden before its trigger fires, per
   rule 1 — see the note on CLIP above for what that cost the first time.
--------------------------------------------------------------------------- */
gsap.utils.toArray<HTMLElement>('[data-drift]').forEach((el) => {
  if (!belowFold(el)) return;
  const y = Number(el.dataset.drift ?? 28);
  ScrollTrigger.create({
    trigger: el,
    start: 'top 92%',
    once: true,
    onEnter: () => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        { opacity: 1, y: 0, duration: 0.85, ease: 'power3.out', clearProps: 'transform' },
      );
    },
  });
});

/* ---------------------------------------------------------------------------
   DRAW — a rule that draws itself along as the reader scrolls.

   For the Parent Orientation timeline, where the line between the programme
   nodes should extend rather than fade in. Scrubbed rather than one-shot: this
   is the one case where parking mid-scroll is fine, because a half-drawn RULE
   is a progress indicator, not a broken graphic — unlike the half-drawn
   photograph that data-mask exists to avoid.

   ⚠ scaleX, AND IT DOES NOT BREAK RULE 3. That rule forbids horizontal
   TRANSLATION, which moves a box outside its parent and creates overflow.
   Scaling from 0 to 1 about the left edge never exceeds the element's own
   layout box, so the page can still be verified free of horizontal scroll.

   ⚠ AND IT OBEYS RULE 1. The line is drawn only once its trigger is live; if
   the script never runs, CSS leaves it at full width and the timeline simply
   reads as finished.
--------------------------------------------------------------------------- */
gsap.utils.toArray<HTMLElement>('[data-draw]').forEach((el) => {
  gsap.fromTo(
    el,
    { scaleX: 0 },
    {
      scaleX: 1,
      ease: 'none',
      transformOrigin: 'left center',
      scrollTrigger: {
        trigger: el.closest('[data-draw-scope]') ?? el,
        start: 'top 78%',
        end: 'bottom 62%',
        scrub: 0.5,
        invalidateOnRefresh: true,
      },
    },
  );
});

/* Web fonts land after first paint and change the height of every block, so
   every trigger position computed before that was measured against fallback
   metrics and is wrong. */
document.fonts?.ready.then(() => ScrollTrigger.refresh());

/* ⚠ AND AGAIN ONCE IMAGES HAVE SETTLED. Fonts are not the only thing that
   changes layout after first paint — a full-height hero image resolving late
   moves every trigger position below it, which is exactly how the Parent
   Orientation drift words ended up with triggers that never matched their
   elements. `window.load` fires after images; the refresh is cheap and idempotent. */
if (document.readyState === 'complete') ScrollTrigger.refresh();
else window.addEventListener('load', () => ScrollTrigger.refresh(), { once: true });
