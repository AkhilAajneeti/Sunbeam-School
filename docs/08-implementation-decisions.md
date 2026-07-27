# Implementation Decisions — Build Log

Deviations from, and additions to, the approved knowledge base (docs 01–07), recorded as they were made so the docs remain the source of truth.

**Built so far:** global foundations · §01 Utility Bar · §02 Main Navigation · §03 Hero · §03b Proof Strip · §04 Quick Access · §05 Sunbeam Story · §06 Academic Journey · §07 Learning at Sunbeam · §08 Campus Experience · §09 Beyond Academics.

**Still to build:** §10 Life at Sunbeam · §11 News, Events & Notices · §12 Alumni · §13 Affiliations · §14 Achievements & Recognition · §15 Admissions CTA · §16 Footer.

---

## D1 · The school's motto was recovered from the crest — and now leads the hero

**Finding.** The official logo artwork carries **"DUTY · DEVOTION · DISCIPLINE"** around the crest ring. Text extraction never surfaced it during Phase 1 because it exists only as artwork, not as text, anywhere on the live site.

**Change.** The hero eyebrow specified in docs/06 §03 was:

> `SUNBEAM SCHOOL BALLIA · ESTABLISHED 2013 · CBSE`

It is now the motto. The old eyebrow repeated the masthead (which already says the school's name) and restated two facts that the §03b proof strip carries eight rows further down. The motto is real, institutional, and unmistakably Sunbeam — it is the single strongest answer to the brief's final test, *"if the logo were removed, would this still look generic?"*

`school.motto` in `src/data/site.ts` is the single source.

**Docs affected:** 06 §03 (eyebrow content), 01 §5 (verified facts — add motto).

---

## D2 · Corrected an unverified claim before it shipped

docs/06 §09 drafts the Beyond Academics deck as *"Fourteen outdoor and indoor sports, four houses…"*. Two problems:

- **The sport count is wrong.** The school's own published lists are 7 indoor (chess, table tennis, carrom, aerobics, yoga, taekwondo, karate) + 8 outdoor (hockey, skating, football, basketball, kho-kho, volleyball, kabaddi, cricket) = **15**, not 14.
- **"Four houses" is unverified.** The live site confirms School Houses exist but never states how many.

The Beyond Academics mega-menu feature now reads *"Fifteen sports, indoor and outdoor, and room to take part."* **The house count is not claimed anywhere.** Add it to the docs/07 asset list before §09 is built.

**Docs affected:** 06 §09 (correct to 15; drop the house count pending confirmation), 07 § B5.

---

## D3 · Desktop navigation hands over to the drawer at 1240px, not 1024px

docs/05 § L implies a desktop nav from 1024px. The audit mandates **8 top-level items** (Career §6.1 and Alumni §12.1 must both sit at top level). Measured at 15px/600 they need ~1120px alongside the brand lockup and the Apply button — which does not fit at 1024.

The drawer is the honest answer below 1240 rather than a shrunken, cramped nav.

## D4 · Tablet type scale also starts at 1240px

Consequence of D3. docs/05 § I2 gives Desktop / Tablet / Mobile values without fixing the boundary. A 76px display headline sitting beside a hamburger reads as a broken desktop layout, not a designed tablet one — verified in QA at 1024, where it was visibly over-scaled. Grid columns and margins still follow the § I4 bands, which change at 1023 as documented.

## D5 · Proof strip goes 2 × 2 from 1023px, not 767px

Four cells need ~236px each to hold "#1 Co-Ed Day School in Ballia". At 768 that falls to 176px and the strip turns ragged. docs/06 §03b specifies 2 × 2 "on mobile"; it now starts at the tablet band.

## D6 · Utility bar sheds links by tier instead of wrapping

At 1024 the seven utility links wrapped to a second line inside a 36px bar. Links now carry a `tier`: tier 1 (Notices · Results · Parent Login) always shows, tier 2 drops below 1240, tier 3 below 768. **Nothing becomes unreachable** — everything dropped stays in the drawer's Quick Links and in the footer, and Mandatory Public Disclosure keeps a permanent footer slot for regulatory findability.

## D7 · Everything aligns to the 1280 container

docs/06 §03 specifies a 1280 container for the hero. The masthead, utility bar and mega-menu now use it too, so the brand lockup, hero headline, proof strip and quick-access band share one left edge (x=80 at 1440) at every breakpoint. Only full-bleed backgrounds run edge to edge.

---

## D8 · Astro scoped-CSS specificity trap — worth knowing before §05–§16

Astro appends its scope attribute to **every compound** in a selector. So:

| Selector | Scoped specificity |
|---|---|
| `.proof__cell + .proof__cell` | (0,4,0) |
| `.proof__cell:nth-child(n)` | (0,3,0) |

A combinator rule therefore **outranks a later breakpoint override meant to reset it**. This shipped a visible bug: dividers written with `+` survived into the mobile single-column layout, leaving stray vertical rules beside alternating cells.

**Rule for the rest of the build:** responsive divider logic uses one selector shape throughout — `.item:nth-child(...)` — never a combinator, so the cascade is decided by source order.

---

---

## D9 · Dual-voice typography — response to "the theme feels old / ancient"

**Client feedback during the build:** the homepage theme reads as old-fashioned; it should feel like a school where children work with current technology.

This is a genuine tension. docs/05 § I2 committed to a display serif for "premium institutional" gravitas, and the brief simultaneously forbids an EdTech/SaaS look. Swinging to a generic tech aesthetic would break the audit's brand direction; leaving it alone ignores the client.

**Resolution — one scale, two registers:**

| Voice | Face | Used in |
|---|---|---|
| Heritage | Source Serif 4 | Hero H1 · §05 Story heading · pull quote · stage names |
| Forward | IBM Plex Sans 600, `-0.025em`, `1.08` leading (`.t-h2-sans`) | §06 Academics · §07 Learning · §08 Campus · §09 Beyond Academics |

The serif now appears only where the school is talking about **where it came from**. Everything about where it is **going** is set in a tight modern sans. Maroon and gold are untouched, so brand equity survives while the page stops reading as purely historical.

Supporting changes: the hero's maroon tint dropped from 0.20 to 0.12 (a heavy wash renders the whole frame sepia), and §07 carries a faint engineering grid rather than decorative graphics.

**If this still reads too traditional,** the next levers in order of impact are: (1) move the hero H1 to the sans as well, (2) lighten the page ground from ivory toward white, (3) reduce gold in favour of maroon-on-white. Each is a one-file change. **Ask before going further** — item (1) in particular walks back a core docs/05 decision.

## D10 · "Aerodynamics" is not claimed

The client asked for drones and aerodynamics. **Verified and used:** robotics lab with a drone, 3-D printer, telescope and embedded system design; KIDS Entrepreneurship from Class VII (the business angle); Art Room and Dance Room (the arts angle). **Not verified anywhere on the live site:** any aerodynamics or flight programme. It is therefore not stated. If such a programme exists, it is a fast content win — add to docs/07 § A6.

## D11 · A second scoped-CSS specificity trap

`base.css` resets `ul[class], ol[class] { margin: 0; padding: 0 }` at (0,1,1). `.u-container` is (0,1,0) — **lower**. So `<ol class="journey__scale u-container">` lost its container padding and the academic stage row ran edge to edge instead of sitting on the grid.

**Rule:** never put `.u-container` on a `<ul>`/`<ol>`. Wrap the list, or declare the container geometry in the component's scoped CSS where the extra scope attribute lifts it to (0,2,0).

## D12 · Scroll-snap ignores container padding

The mobile stage carriage started 32px left of its own heading. The CSS was correct — padding 32, margin 0 — but the scroller sat at `scrollLeft: 32`, because `scroll-snap-align: start` aligns an item's edge to the **scrollport**, not to the padding box. Fixed with `scroll-padding-inline-start: var(--sb-margin)` on the scroller.

Worth noting: this was diagnosed only after dumping computed styles. Two prior guesses (auto margins, then a specificity clash) were both wrong.

---

## D13 · First five photographs integrated — and what they exposed

The school supplied five photographs. All are genuine Sunbeam Ballia images; all are **posed group shots at events**. Placed only where they honestly fit:

| Photo | Slot | Note |
|---|---|---|
| `sunbeem-1` campus wide, 2.07:1 | **Hero slide 1** | Exactly the docs/07 A2-P1 brief. Now the LCP element |
| `sunbeem-2` school at the entrance | **Hero slide 3** | Stands in for "a co-curricular moment" |
| `sunbeem-3` Farewell 2024-25 | **§05 Story** | A full-school gathering carries the 456 → 2,200+ scale argument better than an empty building |
| `sunbeem-5` council + NCC cadets | **§09 Leadership & service** | Literally shows office-bearers and NCC — the most precise fit of the five |
| `sunbeem-4` awards ceremony | *held* | Adults, not students. Reserved for §14, where docs/06 asks for students receiving recognition |

**Still owed, and these are the audit-critical ones:** the robotics/drone image for §07, all six §08 facility tiles (audit 3.2–3.7), the five §06 stage portraits, sport participation and arts for §09, and a classroom shot for hero slide 2 (audit 1.1 asks specifically for "students engaged in learning").

Images live in `src/assets/photos/`, not `public/` — `public/` ships bytes verbatim, and a 1921px JPEG as the LCP element is the wrong thing to send over Ballia's 4G. Astro now emits AVIF/WebP at five widths; the 323 KB original resolves to a 29 KB variant at small sizes.

## D14 · The real photograph broke the hero's contrast — measured, not eyeballed

Sampling the rendered pixels behind each hero element (text hidden, worst-case pixel per region):

| Element | Before | After | Needs |
|---|---|---|---|
| Eyebrow (motto) | **1.31 : 1** | 4.96 : 1 | 4.5 |
| Headline | 3.82 : 1 | 6.69 : 1 | 3.0 (large) |
| Deck | 6.47 : 1 | 10.87 : 1 | 4.5 |
| Caption | 4.02 : 1 | 5.18 : 1 | 4.5 |

Two fixes:

1. **The scrim gained a horizontal axis.** The stock bottom-weighted scrim assumes a photo that darkens toward its base; this one is bright at *both* ends — sky above, sunlit grass below. A left-weighted ramp now lands under the copy and clears by the two-thirds mark so the buildings stay legible. Below 1024 the copy spans most of the width, so the vertical ramp does the work instead.

2. **The motto is white, not gold.** No scrim could fix gold: at `#C9A227` (L = 0.38) it needs a ground darker than L = 0.046 to clear 4.5:1, which means blacking out the photograph. Gold survives as the rule above the motto, where it is decoration rather than text. **This is a real amendment to docs/05 § I1** — gold is not viable as text over photography, only over the ink panels.

Verified passing at 1440 / 1280 / 1024 / 900 / 768 / 430 / 390.

## D15 · Two content discrepancies spotted in the photographs

- `sunbeem-3` carries a nameplate reading **"Dr. Arpita Singh, Principal"**; the live site says **"Mrs. Arpita Singh"**. `site.ts` still says Mrs. — please confirm which is correct.
- The same photo's backdrop reads *"Honored as Best School of the Year for Three Consecutive Years"* with 2021-22 and 2022-23 plaques, corroborating the Sunbeam Eduserve award already recorded in docs/01.

---

## D16 · Reference-design blend — client decision

The client supplied a university template ("Eduvibe") and asked for the same. Two decisions were taken explicitly:

**Colour — maroon primary plus one brighter accent.** The reference carries its energy on saturated violet. Violet is not Sunbeam's, appears nowhere in the crest, and is ruled out by the brief. The same job is now done by a deep teal `--sb-accent`: opposite maroon on the wheel, at home beside gold in academic heraldry, and reading as science and technology — which suits the drone/robotics story in §07. It is punctuation only: index numerals, counters, active states, meta labels. **It is never a section ground.**

**Testimonials — both.** Audit 1.5 replaces the review wall with achievements; audit §13 separately asks for alumni video testimonials. These are not in conflict, so §12 (alumni testimonials) and §14 (achievements) both ship. **No student quote will be written by us** — testimonials require real, client-supplied material (asset A4).

### Taken from the reference
- **Indexed campus browser** — §08 rebuilt: numbered facility, large photograph, thumbnail rail, `01 / 06` counter, prev/next. Implemented as an ARIA tablist, fully keyboard-operable.
- Density and content-per-screen — to be applied through §10–§16.
- Events filmstrip (→ §11), video block (→ §12), FAQ-beside-image, oversized footer wordmark (→ §16).

### Not taken
Violet · pill buttons · rounded cards · floating 3-D props · the tilted polaroid gallery · the review wall as a *replacement* for achievements.

## D17 · A contrast rule I had broken in five places

Adding the accent prompted a page-wide audit, which caught **gold used as text on light grounds in five components** — `story__eyebrow`, `journey__range`, `campus__qualifier`, `beyond__list dt`, `mega__feature-eyebrow`. Gold on ivory measures **2.4:1**. docs/05 § I1 states the rule plainly and I had violated it repeatedly while writing the sections.

Fixed: eyebrows → maroon, secondary meta labels → accent. Gold survives only as *decoration* (rules, nodes, the hero hairline) and as text on ink panels, where it runs 7.2:1.

The accent itself was then darkened `#0F7A72` → `#0E6F68`, because the original cleared white but landed on 4.49:1 against the sand band.

**Automated audit now runs across every text node on solid grounds at 1440 / 768 / 390 — all pass.** Text over photography is measured separately (D14).

---

## Placeholder inventory — what is standing in

Per docs/07 placeholder policy. **No stock photography anywhere; no fabricated facts.**

| Location | Placeholder | Asset request |
|---|---|---|
| Hero, 3 slides | Tonal fields at the intended luminance, with the shot brief shown in the caption slot | A2 Priority 1 |
| Mega-menu feature × 5 | 16:9 tonal field, brief in `aria-label` | A2 |
| Logo | Raster PNG from the live site, frame algorithmically removed | B2 — vector originals |

`AssetPlaceholder.astro` carries the exact brief and an `aria-label`, so nothing ships unnoticed. The hero's caption slot is a real editorial element that will hold the photograph's caption once supplied — it currently holds the brief.

---

## Verified metrics — built output, step 1

| Measure | Value | Target (docs/05) |
|---|---|---|
| JS, gzipped | **1.6 KB** | < 40 KB |
| External `<script src>` | **0** | — |
| CSS, gzipped | 8.8 KB | — |
| HTML, gzipped | 12.1 KB | — |
| Preloaded fonts | 96 KB (2 variable WOFF2) | — |
| Console errors | **0** | 0 |
| Horizontal overflow | **none**, 390–1440 | none |
| `border-radius` in use | `2px` only (buttons) | ≤ 4px, images 0 |
| Images without `alt` | 0 | 0 |
| Heading order | H1 → H2, no skips | no skips |
