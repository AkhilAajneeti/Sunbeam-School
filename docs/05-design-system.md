# H · I · J · K · L · M · N — Visual Direction and Design System

---

# H. Visual Direction

## H1. The one-sentence brief

> **An established Indian school, presented with the restraint and photographic confidence of a good international institution — maroon, gold and paper; type that carries authority; and real children, at real scale.**

## H2. Where the language comes from

The current site's dominant accent is orange `#F16334`, which appears **nowhere in the school's logo.** Pixel sampling of the official crest returns **deep maroon `#8B0000`** and **gold `#FFE001`**. Maroon-and-gold is the school's actual equity and is, by inheritance, an academic and ceremonial pairing — university hoods, honour boards, crests. It is inherently prestigious without any styling effort.

**We are not choosing a palette. We are returning to one.**

Everything else is neutral: warm paper, ivory, charcoal. Maroon does the institutional work, gold does the ceremonial accent, photography does the emotional work.

## H3. The five characteristics

1. **Photography at full scale.** No 150px thumbnail survives. Images are full-bleed, half-bleed, or at minimum half a column. If a photograph is not good enough to print large, it is not good enough to publish.
2. **Type carries the prestige, not decoration.** A serif at genuine display size — 76px, tight leading, restrained tracking — does more institutional work than any gradient, shadow or badge. Premium comes from confident typographic scale and generous whitespace.
3. **Structure over containers.** Sections are separated by **space, rule and background shift** — not by boxes. Fields of content, not a page of cards. Where a card is genuinely correct (a news item, a job opening), it is a bordered rectangle, not a floating rounded panel.
4. **Warm, not corporate.** Ivory `#FAF7F2` rather than white or grey. A trace of warmth in every neutral. The school should feel like a place, not a product.
5. **Asymmetry with discipline.** Offset image/text pairs, uneven grids, deliberate overhang. Controlled, repeated intentionally — never random.

## H4. Reproducibility test

Another designer given only this document should produce: an ivory page, a deep maroon masthead with a hairline gold rule, a full-bleed campus photograph with a bottom-weighted dark scrim, a 76px Source Serif headline, an uppercase 12px letterspaced eyebrow above it, generous 120px section rhythm, square-cornered images, and near-invisible motion.

## H5. Explicitly forbidden

Because these are exactly how this project would fail:

- Rounded cards in rows of three, repeating down the page
- `border-radius` above 4px on any structural element
- Drop shadows on content (one exception: the sticky header and mega-menu)
- Glassmorphism, blur panels, gradient meshes
- Gradient text, purple/violet accents, floating blobs
- Decorative icons that restate an adjacent heading
- Every section as `centered heading + paragraph + three cards`
- Stock photography of any kind — **no non-Sunbeam children, ever**
- Invented statistics, testimonials, results or alumni
- Carousels for content that isn't a gallery
- Counters that animate on scroll
- Full-width containers wrapping every section

---

# I. Design Tokens

## I1. Colour

All contrast ratios below are **computed**, not estimated.

### Brand — derived from the logo

| Token | Hex | HSL | Use |
|---|---|---|---|
| `--sb-maroon` | `#8B0000` | 0, 100%, 27% | **Primary.** Masthead, primary buttons, headings on light, active states. Logo-exact |
| `--sb-maroon-dark` | `#5C0000` | 0, 100%, 18% | Hover/pressed, footer, dark institutional panels |
| `--sb-maroon-deep` | `#3D0000` | 0, 100%, 12% | Deepest panels, overlay tint |
| `--sb-maroon-wash` | `#F6ECEA` | 9, 33%, 94% | Section tint, active nav background, table header fill |
| `--sb-gold` | `#C9A227` | 44, 68%, 47% | **Accent.** Rules, active underlines, honour markers, large numerals on dark |
| `--sb-gold-bright` | `#FFE001` | 53, 100%, 50% | **Logo reproduction only.** Never for UI, never for text |
| `--sb-gold-wash` | `#FBF4E2` | 45, 71%, 93% | Achievement/honour section tint |

### Neutrals — 70% of the page

| Token | Hex | Use |
|---|---|---|
| `--sb-paper` | `#FFFFFF` | Cards, tables, forms |
| `--sb-ivory` | `#FAF7F2` | **Default page background** |
| `--sb-sand` | `#F3EEE6` | Alternate section band |
| `--sb-border` | `#E3DCD1` | Warm hairline — default |
| `--sb-border-strong` | `#C9BFB1` | Table rules, dividers needing weight |
| `--sb-charcoal` | `#1C1917` | **Primary text** |
| `--sb-ink` | `#12100F` | Full-bleed overlays, dark sections |
| `--sb-text-secondary` | `#4A4542` | Body copy on ivory, deck text |
| `--sb-text-muted` | `#6F6862` | Captions, metadata, labels |

### Semantic

| Token | Hex | Use |
|---|---|---|
| `--sb-notice` | `#1D4E89` | Notices, information |
| `--sb-success` | `#2F6B4F` | Confirmations, open admissions |
| `--sb-urgent` | `#8A4B00` | Deadlines, closing dates. Amber-brown — deliberately not red, to avoid competing with maroon |
| `--sb-focus` | `#1D4E89` | Focus ring — blue for maximum separation from brand maroon |

### Verified contrast

| Pair | Ratio | Verdict |
|---|---|---|
| `--sb-charcoal` on `--sb-ivory` | **17.0 : 1** | AAA |
| `--sb-text-secondary` on `--sb-ivory` | **9.1 : 1** | AAA |
| `--sb-text-muted` on `--sb-ivory` | **5.1 : 1** | AA |
| `--sb-maroon` on white | **10.0 : 1** | AAA |
| White on `--sb-maroon` | **10.0 : 1** | AAA |
| White on `--sb-maroon-dark` | **14.4 : 1** | AAA |
| `--sb-gold` on `--sb-ink` | **7.2 : 1** | AAA |
| `--sb-gold` on `--sb-maroon` | **4.1 : 1** | **Large text / rules only** |
| `--sb-gold` on white | **2.4 : 1** | ❌ **Decoration only — never text** |
| `--sb-notice` on white | **8.4 : 1** | AAA |

**Two hard rules:** gold is never body text on a light background — use maroon. Text over photography always sits on a scrim (see J4), never on raw image.

### The 70/20/10 discipline

- **70% neutral** — ivory, sand, paper, charcoal, and photography
- **20% maroon** — masthead, footer, primary CTAs, headings, one dark section
- **10% gold** — hairline rules, active underlines, honour numerals, achievement markers

If gold reads as a theme colour rather than a punctuation mark, it is over-used.

## I2. Typography

**Two families. No third.**

| Role | Family | Why |
|---|---|---|
| Display / editorial | **Source Serif 4** (variable) | Academic warmth with real authority; optical sizing holds up at 76px and at 19px. Established, not trendy — it will not date like Playfair |
| UI / body | **IBM Plex Sans** (variable) | Humanist and engineered rather than SaaS-neutral; excellent tabular figures for results, fee tables and calendars; **IBM Plex Sans Devanagari** is a matched companion if Hindi content is ever added — a real advantage for a UP school |

Loaded as variable WOFF2, self-hosted, `font-display: swap`, subset to Latin + Latin-Ext. Two files total.

### Scale

| Token | Desktop | Tablet | Mobile | Family / weight | Tracking |
|---|---|---|---|---|---|
| Display XL | 76 / 1.02 | 56 / 1.05 | 40 / 1.08 | Serif 400 | −0.02em |
| H1 | 56 / 1.06 | 44 / 1.08 | 34 / 1.12 | Serif 400 | −0.015em |
| H2 | 40 / 1.12 | 34 / 1.14 | 28 / 1.16 | Serif 400 | −0.01em |
| H3 | 28 / 1.20 | 25 / 1.22 | 22 / 1.25 | Serif 600 | −0.005em |
| H4 | 21 / 1.30 | 20 / 1.32 | 18 / 1.35 | Sans 600 | 0 |
| Body Large (deck) | 19 / 1.60 | 18 / 1.60 | 17 / 1.60 | Sans 400 | 0 |
| Body | 17 / 1.65 | 16 / 1.65 | 16 / 1.65 | Sans 400 | 0 |
| Body Small | 15 / 1.60 | 15 / 1.60 | 14 / 1.60 | Sans 400 | 0 |
| Caption | 13 / 1.45 | 13 / 1.45 | 12 / 1.45 | Sans 400 | 0.01em |
| Label / eyebrow | 12 / 1.20 | 12 / 1.20 | 11 / 1.20 | Sans 600 **uppercase** | **0.14em** |
| Stat numeral | 64 / 1.00 | 52 / 1.00 | 40 / 1.00 | Serif 400 tabular | −0.02em |

**Rules**
- Body text is **never** below 16px on mobile.
- Measure: **62–72 characters**; `max-width: 68ch` for prose, `34ch` for display headings.
- Only the **eyebrow/label** is uppercase. Headings are sentence case — uppercase headings read as shouting and age badly.
- Numerals: **tabular** in tables, results, fees and calendars; **proportional** in prose.
- Never centre a paragraph longer than two lines.

## I3. Spacing

4px base.

```
--sb-2:4   --sb-3:8   --sb-4:12  --sb-5:16  --sb-6:24  --sb-7:32
--sb-8:40  --sb-9:56  --sb-10:72 --sb-11:96 --sb-12:120 --sb-13:160
```

| Context | Desktop | Tablet | Mobile |
|---|---|---|---|
| Section padding (Y) | 120 | 88 | 64 |
| Major section padding (Y) | 160 | 112 | 80 |
| Heading → body | 24 | 20 | 16 |
| Eyebrow → heading | 16 | 16 | 12 |
| Paragraph gap | 24 | 20 | 20 |
| Grid row gap | 56 | 40 | 32 |

## I4. Grid and layout

| Token | Value |
|---|---|
| `--sb-max-wide` | **1440px** — full-bleed with margins |
| `--sb-max-content` | **1280px** — default container |
| `--sb-max-narrow` | **880px** — editorial |
| `--sb-max-prose` | **680px** — long-form reading |

| Breakpoint | Columns | Gutter | Margin |
|---|---|---|---|
| ≥1280 desktop | 12 | 24 | 48 |
| 1024–1279 | 12 | 24 | 40 |
| 768–1023 tablet | 8 | 20 | 32 |
| 480–767 | 4 | 16 | 24 |
| <480 mobile | 4 | 16 | 20 |

**Width variation is mandatory.** Sections alternate `full-bleed → contained 1280 → narrow 880 → full-bleed`. A page where every section is 1280px wide is the template look the brief forbids.

## I5. Radii — deliberately minimal

```
--sb-r-0: 0      /* images, sections, panels, table cells — DEFAULT */
--sb-r-1: 2px    /* buttons, inputs, select, tags */
--sb-r-2: 4px    /* maximum permitted anywhere */
--sb-r-full: 999px  /* filter chips and pagination ONLY */
```

**Images and section panels are square-cornered.** This single decision does more to avoid the AI-template look than any other.

## I6. Borders

```
--sb-hairline:  1px solid #E3DCD1     /* default separator */
--sb-rule:      1px solid #C9BFB1     /* table and list rules */
--sb-accent:    3px solid #C9A227     /* gold left rule — pull quotes, honours */
--sb-brand:     2px solid #8B0000     /* active tab, current nav item */
```

Borders and background shifts do the separating work that shadows would otherwise do.

## I7. Shadows — three, total

```
--sb-shadow-header: 0 1px 0 rgba(28,25,23,0.08)          /* sticky header, on scroll only */
--sb-shadow-menu:   0 12px 32px -12px rgba(28,25,23,0.18) /* mega-menu, modal */
--sb-shadow-focus:  0 0 0 3px rgba(29,78,137,0.35)        /* focus ring */
```

**No shadow on any content element.** Not on cards, images, buttons or sections.

## I8. Buttons

| Variant | Fill | Text | Border | Use |
|---|---|---|---|---|
| Primary | `--sb-maroon` | white | none | Apply, Enquire, Submit |
| Primary hover | `--sb-maroon-dark` | white | none | |
| Secondary | transparent | `--sb-charcoal` | 1px `--sb-charcoal` | Campus Tour, Explore |
| Secondary hover | `--sb-charcoal` | `--sb-ivory` | 1px | |
| On-image primary | white | `--sb-maroon` | none | Hero |
| On-image secondary | transparent | white | 1px white | Hero |
| Tertiary / link | — | `--sb-maroon` | bottom 1px gold, `text-underline-offset: 4px` | Inline |

**Geometry:** padding `14px 28px` (desktop) / `13px 24px` (mobile) · radius `2px` · label Sans 600 15px sentence case · min height **48px** · transition `background 180ms ease, color 180ms ease`.

**Never:** gradient fills, uppercase labels, pill radius, icon-only primary actions.

## I9. Image treatment

**Ratios**

| Ratio | Use |
|---|---|
| 21:9 | Cinematic full-bleed bands |
| 16:9 | Hero, campus landscapes |
| 3:2 | Editorial default, uniform catalogue (**landscape — audit 9.1**) |
| 4:5 | Portraits, vertical mosaic tiles |
| 1:1 | Logos, small alumni avatars only |

**Rules**
- `border-radius: 0`. No exceptions on photography.
- No borders, no shadows, no outlines on images.
- Overlay text always sits on a scrim: `linear-gradient(to top, rgba(18,16,15,0.72) 0%, rgba(18,16,15,0.35) 40%, transparent 75%)`.
- Dark-panel imagery may carry a maroon tint: `rgba(61,0,0,0.32)` multiply. Sparingly.
- Hover on a linked image: `scale(1.03)` over 600ms `cubic-bezier(0.22,1,0.36,1)`, inside `overflow: hidden`. Nothing else moves.
- **Every image gets a caption or a label** in Campus and Gallery contexts — audit 3.2–3.7 requires labelling.
- Formats: AVIF → WebP → JPEG fallback via `<Picture>`. Widths 400/800/1200/1600/2400.
- Hero: `loading="eager"`, `fetchpriority="high"`. Everything else lazy.

---

# J. Photography Direction

## J1. Non-negotiable rules

1. **Only real Sunbeam Ballia photographs.** No stock, ever. A stock child on a school website is a lie a parent can detect.
2. **If an image doesn't exist, ship a labelled placeholder** — `[NEEDED: …]` with the exact shot description — never a substitute.
3. **Minimum 2400px on the long edge** for any full-bleed use. The current 150px thumbnails are unusable at the new scale.
4. **Faces must be in focus and the moment must be real.** Posed line-ups read as institutional filler; a child mid-experiment reads as a school.
5. **Consistent grade:** warm, natural, slightly lifted shadows, no heavy saturation, no filters, no vignettes.

## J2. Per-section requirements

| § | Section | Shot | Ratio | Notes |
|---|---|---|---|---|
| 03 | Hero | 3–5 images: wide campus establishing shot, students in class, a co-curricular moment | 21:9 / 16:9 | **Audit 1.1.** Landscape, wide, action left-or-right of centre so the headline has clear space. Cross-fade only |
| 03b | Proof strip | none | — | Type and logos only |
| 04 | Quick Access | none | — | Deliberately image-free — utility, not persuasion |
| 05 | Sunbeam Story | One archival/foundational image + one contemporary campus wide | 4:5 + 3:2 | Old and new side by side carries the 1972→2013 legacy without words |
| 06 | Academic Journey | 5 portraits, one per stage, age-accurate | 4:5 | Pre-Primary → Senior Secondary. Must visibly show the age progression |
| 07 | Learning | Robotics lab, science experiment, library reading, smart classroom in use | 3:2 | **Show the equipment being used.** An empty lab proves nothing |
| 08 | Campus Experience | Shooting Range, Auditorium, Conference Room, Science Labs, Library, Sports | mixed mosaic | **Audit 3.2–3.7 — every one labelled.** Shooting range is the rare differentiator; shoot it well |
| 09 | Beyond Academics | Sports *participation* (not podiums), performing arts, clubs, excursions | 3:2 / 4:5 | **Audit 4.3–4.7 — participation before achievement** |
| 10 | Life at Sunbeam | 6–10 candid moments: assembly, corridor, celebration, friendship | mixed | The emotional core. Candid over posed, always |
| 11 | News & Events | One thumbnail per item | 3:2 | Uniform crop; text carries the meaning |
| 12 | Alumni | Video thumbnails + alumni portraits | 16:9 / 1:1 | **Audit §13.** Client-produced video required |
| 13 | Affiliations | Logos, SVG/PNG transparent | — | Greyscale at rest, colour on hover |
| 14 | Achievements | Award moments, medal ceremonies, toppers | 3:2 | **High-resolution — audit 4.8** |
| 15 | Admissions CTA | Warm, forward-looking: child arriving, gate, assembly | 21:9 | Emotional close. Aspirational, not corporate |
| 16 | Footer | Crest only | — | |

## J3. Alt-text strategy

- **Descriptive** for content images: *"Class VIII students operating a 3-D printer in the Sunbeam Ballia robotics laboratory."*
- **Empty** `alt=""` for purely decorative imagery — nothing on this site should qualify.
- **Never** "image", "photo", "school picture", or a filename.
- **Facility images must name the facility** — this serves both accessibility and audit 3.2–3.7 labelling.
- Alt text is authored per image, never generated from the caption.

---

# K. Component System

Twenty-six components. Note how few are cards.

### Global
| # | Component | Notes |
|---|---|---|
| C01 | Utility Bar | Maroon-dark, 36px, 13px links, hides on scroll-down |
| C02 | Masthead | Crest + wordmark left, nav centre-right, Apply button. Sticky, condenses 96→68px |
| C03 | Mega Menu | Full-width, 2–4 columns, featured image, contextual CTA. Every column header is a link |
| C04 | Mobile Nav | Full-screen overlay, accordion, 56px rows, Apply pinned bottom |
| C05 | Footer | 4 columns + utility row. **16px monochrome social icons — audit 14.1** |
| C06 | Breadcrumb | Inner pages only |
| C07 | Skip Link | Keyboard-visible |

### Structural — the anti-card set
| # | Component | Notes |
|---|---|---|
| C08 | Section Header | Eyebrow + H2 + optional deck + optional right-aligned link. **Left-aligned by default** |
| C09 | Editorial Split | Text one side, offset image the other. **The workhorse.** Alternates direction |
| C10 | Full-Bleed Band | Edge-to-edge image, scrim, overlaid text |
| C11 | Photo Mosaic | Asymmetric grid, mixed ratios, labelled. Campus and Life sections |
| C12 | Stat Row | Serif numerals + label, separated by hairlines. **No boxes, no animation** |
| C13 | Pull Quote | 3px gold left rule, serif, no quotation-mark graphics |
| C14 | Stage Scale | Horizontal 5-stage academic progression; scroll-snap on mobile |
| C15 | Logo Row | Affiliations. Greyscale → colour on hover |

### Content
| # | Component | Notes |
|---|---|---|
| C16 | News Item | Date + category + headline + thumbnail. Bordered rectangle, `radius: 2px` |
| C17 | Notice Row | **Text-first**: date, category tag, title, optional thumbnail link. **Structurally enforces audit 10.3** |
| C18 | Route Finder | Type a locality → bus number, driver, contact, stoppages. **Replaces the 22-row table. Audit 7.1–7.2** |
| C19 | Interactive Calendar | Month view desktop, agenda list mobile. **Audit 8.2** |
| C20 | Result Table | Tabular figures, sticky header, year switcher. **Audit 2.E5** |
| C21 | Facility Panel | Large image + label + description. **Audit 3.2–3.7** |
| C22 | Video Testimonial | Poster + play, facade-loaded. **Audit §13** |
| C23 | Accordion | FAQs, policies, Safety & Security detail (**audit 3.8**) |
| C24 | Gallery Grid | Event-grouped, lightbox. **Audit 1.4** |
| C25 | Form | Enquiry, campus visit, alumni registration, job application |
| C26 | CTA Band | Full-bleed image + scrim + heading + 2–3 actions |

**Card audit:** of 26 components, exactly **two** (C16, C21) are card-like, and both are square-ish bordered rectangles rather than floating rounded panels. No section anywhere is "three rounded cards in a row."

---

# L. Responsive Rules

**Designed at three sizes, not scaled from one.**

## Desktop ≥1280
12 columns · 1280 container · 48 margins · full mega-menu · asymmetric layouts at full expression · 120–160px section rhythm · hover states active.

## Tablet 768–1023
8 columns · 32 margins · **mega-menu → single-column drawer** · editorial splits stack, image first · 5-stage scale → horizontal scroll-snap · mosaic 4-up → 2-up · 88px rhythm · touch targets ≥44px.

## Mobile <768
4 columns · 20 margins · full-screen nav overlay.

**Mobile is a redesign, not a stack:**

| Element | Mobile treatment |
|---|---|
| Hero | 16:9 → **4:5 portrait crop**, focal point preserved via `object-position`. Headline 40px. **Slider auto-advance off** — swipe only |
| Utility bar | Collapses to Notices · Results · Login. Rest into the nav overlay |
| Quick Access | 6 links → **2×3 grid**, 56px rows, full-width tap targets |
| Editorial split | Image → full-bleed above text; overhang removed |
| Stage scale | Horizontal scroll-snap with a progress rule. **Not** a vertical stack of five cards |
| Photo mosaic | Asymmetric → **2-column masonry**, largest image full-width first |
| **Bus routes** | **Never a table.** Search field + expandable route rows. **The single most important mobile transformation on the site** |
| Calendar | Month grid → **agenda list**, upcoming first |
| Result table | Horizontal scroll inside its own container, sticky first column, `overflow-x` never on `body` |
| News/Events/Notices | 3 columns → tabbed single column |
| Footer | 4 columns → accordion, contact block always open |
| Forms | Single column, 48px inputs, correct `inputmode` and `autocomplete` |
| Type | Display XL 76→40, H1 56→34, body stays ≥16 |
| Section rhythm | 120 → 88 → 64 |

**Body must never scroll horizontally.** Wide content scrolls inside its own `overflow-x: auto` container.

## Section rhythm — two tokens, and only two

A section that invents its own vertical padding breaks the page's rhythm, and one that uses a `vh` unit breaks it *differently on every screen height*. There are exactly three legitimate values, all named in `tokens.css`:

| Token | Desktop | Tablet | Mobile | Use |
|---|---|---|---|---|
| `--sb-section-y` | 120 | 88 | 64 | The default. Almost every section. |
| `--sb-section-y-viewport` | `clamp(26px, 4.4vh, 72px)` | — | — | Sections that must fit **one screen**. Currently Campus only. |

`--sb-section-y-viewport` is the only place a `vh` unit is legitimate, and only because the padding *has* to give way as the viewport shortens or the section stops fitting — which was the entire point of building it that way. Never reach for it on an ordinary content section.

Full-bleed sections (Hero, Proof Strip, Learning) carry **no** vertical padding at all; they size on `min-height` and sit flush. That is why the gap above and below them is smaller, and it is deliberate.

---

# M. Accessibility Rules

**Target: WCAG 2.1 AA.**

**Colour & contrast** — verified in I1. Gold never as text on light. Text over images always on a scrim. Never colour alone to convey meaning: notice categories carry a label *and* a tint.

**Keyboard** — every interactive element reachable and operable. Logical tab order. Skip-to-content first in the DOM. Mega-menu opens on focus, closes on `Escape`, returns focus to its trigger. Mobile overlay traps focus and restores on close. Lightbox and modals trap focus, close on `Escape`. **No positive `tabindex`.**

**Focus** — `--sb-shadow-focus` (3px blue at 35%) plus a 2px solid outline with `outline-offset: 2px`. Uses `:focus-visible`. **Never `outline: none` without a replacement.**

**Semantics** — one `<h1>` per page, no skipped levels. Real landmarks: `header`, `nav`, `main`, `aside`, `footer`. `<nav aria-label>` distinguishes primary/utility/footer. Lists are `<ul>`. Tables use `<th scope>` and `<caption>`. Buttons are `<button>`; links are `<a>`.

**Forms** — visible persistent `<label>`, never placeholder-as-label. Errors described in text, tied by `aria-describedby`, announced via a polite live region, summarised at the top on submit. Required marked in text, not by asterisk alone. Fieldsets for grouped inputs.

**Images** — per J3. Decorative `alt=""`. Complex images (calendar, results) have accessible text equivalents.

**Motion** — `prefers-reduced-motion: reduce` disables reveals, image scale, slider auto-advance and all transforms; content appears in final state at full opacity. Hero slider offers a visible pause control regardless.

**Targets** — minimum **44×44px**, 48px preferred on mobile; 8px minimum between adjacent targets.

**Reading** — body ≥16px, line-height ≥1.5, measure ≤72 characters, paragraph spacing ≥1.5× line height. Layout survives 200% zoom and 400% at 1280px without loss.

**Language** — `<html lang="en">`; any Hindi content marked `lang="hi"`.

**Media** — video testimonials require captions; a text transcript or summary accompanies each (also good for SEO).

---

# N. Animation Rules

**Principle: motion should be noticed only by its absence. If a visitor notices an animation, it is too much.**

### Permitted

| Motion | Spec |
|---|---|
| Section reveal | `opacity 0→1`, `translateY 16px→0`, 600ms `cubic-bezier(0.22,1,0.36,1)`, once, `IntersectionObserver` at 15% |
| Staggered children | 60ms increments, **maximum 4 items** |
| Image hover | `scale(1.03)`, 600ms, inside `overflow: hidden` |
| Link hover | Gold underline wipes left→right, 220ms |
| Button hover | Background colour only, 180ms |
| Nav condense | Height 96→68px, 240ms, on scroll |
| Mega-menu | Fade + `translateY 8px`, 200ms in / 140ms out |
| Hero cross-fade | **Image opacity only, 900ms.** Frame, headline and CTAs never move — **audit 1.3** |
| Mobile overlay | Slide-in 260ms |
| Accordion | Height + opacity, 240ms |

### Forbidden

Parallax · scroll-hijacking · scroll-driven horizontal sections · counting-up numbers · bouncing, springing, pulsing · looping ambient motion · animated illustrations · rotating text · typewriter effects · anything above 900ms · anything that repeats on re-entry.

### Budget

**One animated element per viewport.** If two things move at once, remove one. All motion uses `transform` and `opacity` only — never `top`, `left`, `width` or `height` on scroll.

### Reduced motion

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

Reveal elements must render at `opacity: 1` by default and be *hidden* by script only when motion is allowed — so a JS failure or reduced-motion preference never leaves content invisible.

---

# Astro implementation notes

**Static by default.** Every page prerendered. No SPA, no client-side router.

**Islands — only these five carry JavaScript:**

| Island | Directive | Why |
|---|---|---|
| Mobile navigation | `client:media="(max-width: 1023px)"` | Only ships below desktop |
| Hero slider | `client:idle` | Non-critical; CSS renders slide 1 |
| Route finder (C18) | `client:visible` | Filter only |
| Interactive calendar (C19) | `client:visible` | |
| Forms (C25) | `client:visible` | Validation + submit |

Mega-menu, accordions and the lightbox are **CSS/HTML-first** (`:focus-within`, `<details>`, `popover`) with progressive JS enhancement only where accessibility demands it.

**Images:** `astro:assets` with `<Picture>`, AVIF/WebP/JPEG, explicit `width`/`height` on every image to eliminate CLS.

**Fonts:** self-hosted variable WOFF2, preloaded, `font-display: swap`, subset.

**Content:** Content Collections with Zod schemas for News, Events, **Notices** (schema makes `title`, `date` and `body` required and `image` optional — enforcing audit 10.3 at the type level), Facilities, Galleries, Alumni Stories, Job Openings, Calendar Events, Results.

**Targets:** LCP < 2.0s on 4G · CLS < 0.05 · INP < 200ms · total JS < 40KB gzipped on the homepage · Lighthouse ≥ 95 across all four categories on mobile.
