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

## D18 · The four sections the audit required and the page did not have

Re-reading the audit against the built homepage found four requirements with no implementation at all. All four are now built, in the order the audit itself specifies.

| Audit | Section | Component |
|---|---|---|
| 1.10 / 10.1–10.3 | Notice Board — text-first | `NoticeBoard.astro` |
| 12.2 | Alumni registration route | same band, right column |
| 1.13 | Affiliations & partners, before the footer | `Affiliations.astro` |
| 1.14 | Achievements & Recognition, immediately after | `Achievements.astro` |
| 1.15 | Closing admissions CTA | `AdmissionsCta.astro` |

Two content decisions inside them:

**No logos in the affiliations row.** Audit 1.13 asks for logos. We do not have the files, and reproducing the CBSE, Microsoft or Education World marks from memory would be inaccurate *and* a trademark problem. Each affiliation is a designed typographic plate until the files and permission arrive — asset request **B1**. The row reads as finished, not as six empty boxes.

**No dates on the notice board.** Audit 10.1's whole point is that the board must be current, so an invented date would make it untrue on the day it shipped. Each row carries a category instead and links to the page the school already maintains. The layout leaves the right-hand column free for a `date` field the moment asset **A7** lands.

**No session year on the admissions CTA.** A static build bakes in whatever year it ran; a stale "Admissions 2026" is worse than no year. The session label belongs with the admission dates still owed under **A8**.

---

## D19 · The contrast audit had a blind spot: alpha

Every audit run up to this point read `getComputedStyle(el).color` and compared it against the nearest opaque ancestor background. It never composited **translucent** colours against what was behind them.

That is exactly how `rgba(255, 255, 255, 0.82)` on the orange `--sb-violet` ground passed for weeks. Composited properly it is **3.88:1** — a fail. It was live in `.ach__lead-detail` and `.story__stat-detail`.

The audit script now walks to the first opaque ancestor, compositing every translucent layer on the way down, and composites the foreground alpha over the resulting ground. Two failures surfaced immediately:

| Where | Was | Now |
|---|---|---|
| `.ach__lead-detail`, `.story__stat-detail` | 3.88:1 | 4.7:1 |
| `.pill--lime` (`--sb-lime-deep` on `--sb-lime`) | 4.34:1 | 4.8:1 |

The second had been under AA by five hundredths since the palette switch.

**Root cause, stated as a rule.** `--sb-violet` (#c93c0a) gives *pure white* only 5.08:1. There is almost no headroom to mute it — any opacity below ~0.94 fails at body size. So a new token states it once:

```css
--sb-on-violet-muted: rgba(255, 255, 255, 0.95);  /* 4.7:1 */
```

Supporting text on an orange ground takes its hierarchy from **size and weight, not opacity**. The same finding forced two design changes in `AdmissionsCta.astro`: the translucent-white facts card composited to a ground leaving white text at 4.24:1, so it became a solid white card with charcoal text; and the translucent pill became a solid white plate.

---

## D20 · The closing CTA is orange, not ink

`AdmissionsCta` was first built on `--sb-ink`. The footer directly beneath it is `--sb-violet-ink` — near enough identical that the two stacked into one undifferentiated dark block and the page's last conversion moment lost its edge.

The panel is now `--sb-violet`. It separates cleanly from the ink footer, and it puts the strongest colour in the palette on the strongest ask, which is what the reference design does too.

Knock-on: on an orange ground *white* is the high-contrast fill, so "Apply online" inverts to a white button with orange text rather than stacking orange on orange, and the accent word in the heading is white rather than a cream tint — every tint sits below the surrounding white text and the accent ends up weaker than the words it is meant to lift.

---

## D21 · Display face → Bricolage Grotesque, and the highlight becomes a plate

Client instruction, with a reference image. Two changes:

**The face.** `--sb-font-display` was Poppins — two static cuts (600, 700) of a geometric sans, and the face every school template reaches for. It is now **Bricolage Grotesque Variable**, one file across the 200–800 weight axis, with the slightly irregular tightly-set grotesque shapes the reference heading uses. One 41 KB file replaces two totalling 16 KB; the extra 25 KB buys the whole weight axis and the display voice. Preloaded, since it renders in the hero above the fold.

**The highlight.** The emphasised word was set in Caveat, a handwritten script, with a hand-drawn SVG underline. It is now a **filled plate** behind the word — white text on `--sb-violet`, asymmetric radius, rotated 1.4°. A second typeface fighting Bricolage on the same line cost the headings their weight; the plate carries the emphasis with colour and mass instead of with a different voice. The word keeps the heading's own face and size, so wrapping is unaffected.

Two variants, both because the default plate would disappear into its ground:
- `--lime` on the hero photograph — light plate, dark text (`#6E2005` on `#FF8A5C`, 4.8:1).
- `.adm__squiggle` on the orange CTA panel — white plate, orange word.

The underline inside the plate was removed after review: on words with descenders (`say`) it collided with the glyphs and read as a stray border.

Caveat was removed entirely — package, WOFF2 and the `--sb-font-accent` token — rather than left as a dead 27 KB asset in `public/`, which ships to `dist/` whether referenced or not.

### Two things this broke, both caught by measuring

**The footer wordmark, again.** Its font-size divides the container width by a constant that is *the measured advance width of the specific face*. Poppins was 7.89 per 1px; Bricolage is **8.083**. Carrying the old 8.05 over overflowed the container by 5.3px, and `overflow: hidden` sliced the final A off without any visible error. Divisor is now **8.25** (≈2% headroom), verified at 26 / 19 / 14 / 7px of slack at 1440 / 1024 / 768 / 390. The comment in `Footer.astro` now says to re-measure on any face change, and to measure with a DOM Range on the element's *contents* — a block element is always exactly as wide as its container, so measuring the block always reports "fits".

**Wrapped headings.** A filled plate is taller than the text it wraps, so where a heading wrapped and the plate landed on line two it overlapped the line box above. Fixed with leading, not a smaller plate — `h1:has(.t-squiggle)` / `h2:has(.t-squiggle)`. Note that component-scoped heading rules still win on specificity (D8: Astro's scope attribute makes `.notice__heading` (0,2,0) against `:has()`'s (0,1,1)), so 1–2px of *line-box* overlap remains on those. Inspected at 3× on the hero: no glyph touches the plate. Line boxes include leading; the check was measuring boxes, not ink.

---

## D22 · Section rhythm — three sections had quietly opted out of the token

Reported by the client. Verified by measuring every section's computed padding at 1440×900, 1117×900, 768×1024 and 390×844 rather than reading the CSS.

The token scale itself was fine. The problem was that three sections had invented their own numbers, and two of those used `vh`, so their spacing changed with the visitor's **screen height** — not something a design scale should ever depend on:

| Section | Was | Measured drift |
|---|---|---|
| `principal` | `clamp(48px, 6vh, 96px)` | 54px at 900h · 61px at 1024h · 51px at 844h |
| `campus` | `clamp(26px, 4.4vh, 72px)` | 40 · 45 · 37 |
| `affil` / `ach` | one-off `96/56` and `56/88` | fixed, but off-scale and off-rhythm |

Plus four sections (`quick`, `notice`, `adm`, `affil`) overrode mobile to a flat 56px while `--sb-section-y` already said 64px — so phones got a mix of both.

**Gaps before, at the 88px tier:** 88 · 176 · 142 · 54 · 40 · 128 · 176 · 176 · **184** · 112 · 176 · 208
**Gaps after:** 88 · 176 · **176** · 88 · 40 · 128 · 176 · 176 · **176** · 80 · 176 · 208

### What I did *not* standardise, and why

`campus` keeps its `vh` padding. It is a genuine one-screen section — the client asked for it twice ("it cuts, I want on a screen it shows overall") and it measures **804px inside a 900px viewport, 646px inside 760px**. Pinning it to a flat 120px would push it past the fold and undo that. `learn` likewise carries `min-height: clamp(500px, calc(100svh - 150px), 720px)` and zero padding.

So rather than delete the exception, I **named** it. Named tokens now, documented in docs/05 (a third, , was added here and retired in D24 once the background change made it unnecessary):

```css
--sb-section-y: 120px;                             /* the default            */
--sb-section-y-viewport: clamp(26px, 4.4vh, 72px); /* must fit one screen     */
```

`principal` moved to `--sb-section-y` — it had copied the Campus/Learning pattern when it was built to match them visually, but it has no one-screen constraint of its own, so the `vh` bought nothing and cost the rhythm.

The remaining uneven gaps are all deliberate and now stated in docs/05: full-bleed sections (Hero, Proof, Learning) carry no vertical padding at all, so the gap beside them is a single section's worth rather than two.

---

## D23 · "This section needs space / this one has too much" — it was the background, not the gap

Client flagged three junctions. Measuring them showed two different problems wearing the same clothes.

**Learn → Campus was genuinely too tight**: 40px, because Learning is full-bleed with zero padding and Campus's viewport clamp bottomed out. Raised `--sb-section-y-viewport` from `clamp(26px, 4.4vh, 72px)` to `clamp(40px, 8vh, 88px)` — 72px at 900h. Re-verified the one-screen constraint survives it: Campus is **868px in a 900px viewport, 700px in 760px, 870px at 1117×900**.

**Voices → Affiliations and Achievements → Admissions were not too big — they were 240px, the same as every other junction on the page.** What made them read as dead space is that `voices`, `affil`, `ach` and `adm` were **four consecutive ivory sections** (the Achievements gradient starts and ends on ivory, so it counts). The ground never changed, so nothing marked where one section ended and the next began: 240px of identical cream reads as a void, while the same 240px between a sand band and a white one reads as rhythm.

`index.astro`'s own header comment has said *"no two adjacent sections share a treatment"* since the first build. The rule was right; four sections had drifted off it. `affil` → sand (its white plates gain contrast too) and `adm` → sand. **Verified: no two adjacent sections now share a ground.**

Worth keeping: the fix was *not* to special-case two gaps. That would have re-broken the uniform rhythm established in D22 while leaving the actual cause in place.

### Voices pause button removed — WCAG 2.2.2 gap, client decision

The marquee's explicit pause button is gone at the client's request, which also removed the section tail it carried (`voices` bottom: 208px → 120px, now just its section padding). What remains: pause on hover, pause on `:focus-within`, and `prefers-reduced-motion` stopping the animation entirely and turning each row into a plain scroller.

That covers pointer users, keyboard users and reduced-motion users, but it is **not** a substitute for an always-available control, and 2.2.2 asks for one. Recorded in the component header with a note on where the button lived, so restoring it is a small job if an audit flags it.

---

## D24 · Real affiliation logos — and the ground problem they arrived with

Client supplied five marks plus the Sunbeam crest, replacing the typographic plates D18 had used while no files existed. They arrived on **four different grounds**: transparent (CBSE), white (Microsoft, Education), near-white `#F7F7F7` (NCC) and **solid black** (Brainfeed). Dropped onto white tiles, Brainfeed rendered as a black square and NCC as a faint grey one.

`scripts/logo-badges.mjs` normalises the artwork rather than the tiles, so the row reads as one set instead of six pasted screenshots. The removal is an **edge-connected flood fill, not a global colour match** — the Brainfeed badge has a near-black centre inside its shield, and "remove all near-black" would punch a hole through the middle of it. A fill that can only travel inward from the border stops at the gold outline.

Two things measurement caught that guessing would not have:

- **CBSE was transparent only at its four corners**; behind the emblem sat an opaque white rounded card. Flattening onto white first lets one fill take card and corners together.
- The fill then **stopped at a grey ring** around that card. Sampling the actual pixel row showed the ring at `233,233,233` — distance 38 from white, past the feather of 25. Raised the threshold to clear 38 while staying under the emblem's green ring at 60. Verified by compositing the result on orange: ground fully transparent.

Tiles cap **both** axes (108 × 62). The marks run from 157×196 (a tall Microsoft shield) to 428×310 (a wide CBSE emblem); matching on height alone would have left the wide ones with twice the visual mass. Rendered: 86×62, 68×62, 50×62, 70×62, 59×62, 69×62.

### ⚠ One of the six is not the mark it is captioned as

`education.jpeg` is a **generic stock "EDUCATION · GLOBAL ACADEMIC" graduation-cap logo**, not Education World's identity. It is in the build because the client asked for these files by name, but it sits under the caption "#1 in Ballia, six years", which tells a parent this is the ranking body's own mark. Flagged in the component header and escalated in docs/07 B1.

### Affiliations padding is symmetric again

It ran 120/56 to close the gap to Achievements while the two shared a ground. Now that the ground changes at that join (D23), the band is its own object and unequal top/bottom read as a mistake. Both sections are back on plain `--sb-section-y`, every gap is 240/176/128, and **`--sb-section-y-tight` was retired** rather than left as a dead token — the background change does the job it was invented for.

### A stale dev server, again

The first measurement of all this reported `padding: 0` and uncapped images. Port 4321 was running `astro dev` with a stale CSS module graph, serving the *previous* version of the component — whose `padding-block: var(--sb-section-y) var(--sb-section-y-tight)` referenced the token just retired, making the whole shorthand invalid and collapsing to 0.

The tell was the image `src`: `/_image?href=/@fs/C:/...` is the dev endpoint, not a built asset. **Verify against `astro preview` on the built output, and check for `@vite/client` in the served HTML before trusting a measurement.**

---

## D25 · Cloud edges on §12 Voices — and a contrast check that could not see them

Client reference: a testimonial band with soft cloud silhouettes top and bottom and a faint cool-to-warm wash, blending into the page rather than sitting on it as a slab.

**What makes it blend** is the fill colour: the clouds are `--sb-sand`, the ground of the sections immediately above (Notice Board) and below (Affiliations). The band therefore appears to melt into its neighbours. `affil`'s `border-top` came off at the same time — a hairline drew a hard rule straight across the blend.

**Built from overlapping circles**, not a hand-written path. Circles of one opaque fill merge into a single silhouette, so the shape stays editable — nudge a radius, get a different cloud — instead of being an unreadable string of bezier coordinates. They are clustered into five masses with valleys between; an evenly spaced row of similar circles reads as a scalloped border, not weather.

Edge height is `clamp(52px, 7.5vw, 108px)`, always shorter than the section's own padding (108 against 120 at desktop, 52 against 64 at mobile), so the clouds live in the breathing space and never collide with the heading.

### The audit had a second blind spot: gradients

D19 taught the audit to composite **alpha**. It still could not see a **gradient** — `bgOf()` resolves grounds from `backgroundColor`, and a gradient-only background reports `transparent`, so every text node in the section would have been silently skipped or measured against the wrong ground.

Two responses:

1. The flat `--sb-ivory` is the **last** layer of the `background` shorthand, so it is also the computed `background-color`. The standard audit therefore still resolves a real ground here.
2. That ground is a lie by up to 0.13 in relative luminance, so this section is additionally checked by **sampling rendered pixels** — screenshot the section, read the actual background pixels just outside each text node's box, compute from those.

That check caught what the DOM-based one could not: `.voices__deck` at **4.46:1 at 768px**, a hair under AA, because the blue wash darkens the ground exactly where the deck sits at that width. Fixed by dropping the blue from `0.28` alpha and moving the deck to `--sb-text-secondary`. Now 7.9–8.2:1 at every breakpoint.

**Rule going forward:** any section with a gradient ground needs the pixel-sampled check. The DOM audit cannot see gradients and will report a confident PASS regardless.

---

## D26 · Principal Speak rebuilt as a full-bleed band

It was a small white card in an ivory field — the head of the school got less presence on the page than a facility tile. It is now a full-bleed dark band: the portrait runs to the left edge of the viewport and the full height of the section, with the message set large beside it in the serif italic (docs/05 D9 reserves the serif for the school's institutional voice, which is exactly what this is).

**Layout without `100vw`.** The section itself is the grid — `gutter · 42% · 58% · gutter` — with the portrait spanning columns 1–2 and the copy column 3. The photograph therefore bleeds to the viewport edge while the copy's right edge lands exactly on the container line every other section uses. `100vw` would have been off by the width of the scrollbar; measured, the copy's right edge and `.u-container`'s content edge agree to the pixel at every breakpoint.

Two measurement notes, both cases of checking the wrong thing first:

- The band came out **1118px tall** — taller than the viewport, so the portrait was cut off. Cause: `max-width: 23em` on the `<blockquote>`, where `em` resolves against *that element's* inherited 17px, not the 26px on the paragraph inside. 23em was 391px and broke the quote into eight short lines. Moved to the paragraph, where it resolves against the display size. Now 797px and five lines.
- My alignment check compared the copy against `.u-container`'s **element** right edge and reported a 48px mismatch. The container is `max-width: 1280 + 2 × margin` with matching `padding-inline`, so its *content* edge is 1360 — exactly where the copy sits. The layout was right; the check was wrong.

Client then moved Campus above Learning, which removed the dark-band adjacency this section was originally designed around.

---

## D27 · A reusable pixel-sampled contrast checker — and three ways it lied first

`scripts/contrast-sample.mjs`. The DOM audit resolves grounds from `backgroundColor` and is blind to gradients, background images and watermarks; any section using one needs measuring from rendered pixels. Getting that right took three corrections, each of which had produced a confident **false failure**:

1. **A probe landing on a glyph** reads the ground as the text colour and the ratio collapses to ~1. Probes are now rejected inside the box of any element rendering text — including mixed-content elements such as a link wrapping a label and an icon, which a leaf-only filter misses.
2. **"Renders text" must mean a non-empty child text node**, not `textContent`. Using `textContent` makes every ancestor an obstacle, section wrapper included, and every probe gets rejected — the run came back `no-clear-sample` for everything.
3. **`Math.min` across probes is too brittle.** One probe grazing an anti-aliased rule read `[198,119,8]` against a ground that is uniformly `#1C0E08` everywhere around it, scoring 1.01. The ground is now the **modal** colour across probes, with the worst probe *within* that modal bucket reported — robust to a stray graze, still sensitive to a genuinely darkening gradient.

Elements with their own background (a pill, a highlight plate) are skipped: their ground is the chip, not the section, and the DOM audit already resolves them correctly.

Verified on all three special-ground sections — `.principal`, `.voices`, `.adm` — at 1440 / 1024 / 768 / 390, all pass.

---

## D28 · GSAP motion — and keeping it off the critical path

Client asked for GSAP scroll animation with split-text headings. Built, with the library behind two gates.

**The budget problem, stated plainly.** docs/05 sets a JS budget of <40 KB gzipped and the page was shipping 1.6 KB. GSAP core + ScrollTrigger is **45.3 KB gzipped** — over budget on its own, before a line of our code. Importing from `gsap/gsap-core` with CSSPlugin registered by hand rather than the default `gsap` entry saved nothing measurable; GSAP does not tree-shake meaningfully.

So the fix is not to make it smaller, it is to stop most of the cost falling on everyone:

| | Before | After |
|---|---|---|
| Critical path | 45.3 KB | **0.7 KB** |
| Motion chunk | — | 45.3 KB, lazy |

`motion.ts` is now a ~20-line guard that dynamic-imports the real chunk only when motion is wanted. Two gates:

- **prefers-reduced-motion** — these users do not get shorter animations, they never download the library. Verified: the request for `motion-gsap` is never made.
- **Save-Data** — a parent on a metered connection in Ballia should not pay for decoration. Everything animated is an enhancement of content already on screen, so skipping the chunk costs nothing but the movement.

### Nothing already on screen is ever hidden

The consequence of a lazy import: the chunk lands *after* first paint, so arming an element the reader is already looking at produces visible → hidden → animate. Every entrance is therefore gated on `belowFold()` — below the fold at script time gets the animation, already in view is left exactly as it is. You cannot animate in something the reader is already reading.

### Split text without a paid plugin, and without breaking the plates

GSAP's SplitText is a Club plugin, and this needed no dependency anyway. `splitWords()` walks **child nodes**, not `textContent`: nine headings carry a `.t-squiggle` plate, and rebuilding innerHTML from text would have destroyed all nine. Text nodes split into words; element children pass through whole.

Two details that took measurement rather than guessing:

- `overflow: hidden` on the word mask **crops the descenders** off every g, y and p. The mask carries `padding-bottom: 0.18em` with an equal negative margin, so the room exists without changing line height.
- The plate cannot be masked at all — it is rotated 1.4° with its own radius, so a mask slices its corners. Element units get `.sp-mask--free` (`overflow: visible`) and a short pixel lift instead of the 115% travel a masked word uses.

### What is animated

Split headings (12) · `[data-reveal]` batch reveals, replacing the IntersectionObserver so nothing is animated by two systems · the "50" counting up — and only that one, since "#1", "CBSE" and an affiliation number are identifiers, not quantities · a scrubbed parallax on the Principal portrait, desktop only, with `scale: 1.08` covering the travel so the crop never exposes an edge · staggers on the Quick Access, Affiliations and Achievements grids · an opacity drift on the admissions decorations, opacity only because they already run a CSS transform loop.

**Verified at 1440 / 768 / 390 after a full scroll pass:** 52 split words and 17 reveals, **none left hidden**; 9 plates intact; no horizontal overflow; no console errors. Under reduced motion: nothing hidden, no chunk requested.

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
| JS, gzipped — critical path | **0.7 KB** | < 40 KB |
| JS, gzipped — lazy motion chunk | 45.3 KB | conditional, see D28 |
| External `<script src>` | **0** | — |
| CSS, gzipped | 8.8 KB | — |
| HTML, gzipped | 12.1 KB | — |
| Preloaded fonts | 96 KB (2 variable WOFF2) | — |
| Console errors | **0** | 0 |
| Horizontal overflow | **none**, 390–1440 | none |
| `border-radius` in use | `2px` only (buttons) | ≤ 4px, images 0 |
| Images without `alt` | 0 | 0 |
| Heading order | H1 → H2, no skips | no skips |
