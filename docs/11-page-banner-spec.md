# Page banner (`PageHero`) — build spec

**For:** the agent recreating this banner on the production site.
**What it is:** the standard header used on **80 inner pages** of the staging
site — full-bleed photograph, breadcrumb trail and page title centred over it,
pinned in place while the page content scrolls up and covers it.

**The fastest correct route is to copy §2 verbatim.** It is the whole component,
228 lines, no dependencies beyond the tokens in §3. Reading the rest matters
because §5 is a contract the banner has with every other section on the page —
get that wrong and the banner shows *through* your content, which is exactly the
bug that was reported three times on this project.

---

## 1 · What it looks like and how it behaves

- A photograph fills the header edge to edge, cropped to a focal point the caller
  chooses.
- A dark two-stop wash (the **scrim**) sits over it so white text stays legible
  whatever the photograph is doing.
- Centred inside: an uppercase breadcrumb trail, then a large display title, then
  an optional one-line standfirst.
- **Pin and reveal.** The banner is `position: sticky; top: 0` — it holds still
  while the content panel below scrolls up and covers it. **No JavaScript.**
  Sticky does the whole thing, so it cannot break if a script fails and it costs
  nothing on a slow phone.
- Under `prefers-reduced-motion: reduce` it becomes an ordinary block that scrolls
  away with the page.

**Props:**

| Prop | Type | Notes |
|---|---|---|
| `title` | `string` | The `<h1>`, and also the final breadcrumb |
| `standfirst` | `string?` | One line under the title. Most pages omit it |
| `crumbs` | `{label, href}[]` | **Everything except the current page** |
| `src` | `ImageMetadata` | An imported image, not a path string |
| `alt` | `string` | Describes the photograph |
| `position` | `string?` | `object-position`; defaults to `50% 45%` |

> The current page is appended to the trail from `title` and marked
> `aria-current="page"`, so a caller cannot omit it or word it differently from
> the heading. Do not let callers pass it.

**There is also a `<slot />`** at the foot of the inner block — an optional tail
for a CTA or a scroll cue. It is additive: a page that passes no children renders
exactly as it did before the slot existed. Keep it, even though most pages do not
use it.

---

## 2 · The component, verbatim

`src/components/ui/PageHero.astro`

```astro
---
import { Picture } from 'astro:assets';

interface Crumb {
  label: string;
  href: string;
}

interface Props {
  title: string;
  /** One line under the title. Optional — most pages do not need it. */
  standfirst?: string;
  crumbs: Crumb[];
  src: ImageMetadata;
  alt: string;
  /** object-position, to hold the focal point through the crop. */
  position?: string;
}

const { title, standfirst, crumbs, src, alt, position = '50% 45%' } = Astro.props;
---

<header class="phero">
  <div class="phero__media" style={`--phero-pos: ${position};`}>
    <Picture
      src={src}
      alt={alt}
      formats={['avif', 'webp']}
      widths={[800, 1280, 1920]}
      sizes="100vw"
      loading="eager"
      fetchpriority="high"
    />
  </div>

  <div class="phero__scrim" aria-hidden="true"></div>

  <div class="u-container phero__inner">
    <nav class="phero__crumbs" aria-label="Breadcrumb">
      <ol>
        {crumbs.map((c) => (
          <li>
            <a href={c.href}>{c.label}</a>
          </li>
        ))}
        <li><span aria-current="page">{title}</span></li>
      </ol>
    </nav>

    <h1 class="phero__title">{title}</h1>
    {standfirst && <p class="phero__standfirst">{standfirst}</p>}

    <slot />
  </div>
</header>

<style>
  .phero {
    position: sticky;
    top: 0;
    z-index: 0;
    display: grid;
    align-items: center;
    min-height: clamp(320px, 46vh, 520px);
    padding-block: clamp(72px, 12vh, 132px);
    background: var(--sb-ink);
    overflow: hidden;
    isolation: isolate;
  }

  .phero__media {
    position: absolute;
    inset: 0;
    z-index: -2;
  }

  .phero__media :global(picture),
  .phero__media :global(img) {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: var(--phero-pos, 50% 45%);
    display: block;
  }

  .phero__scrim {
    position: absolute;
    inset: 0;
    z-index: -1;
    background:
      linear-gradient(
        180deg,
        rgba(18, 12, 8, 0.62) 0%,
        rgba(18, 12, 8, 0.72) 46%,
        rgba(18, 12, 8, 0.6) 100%
      );
  }

  .phero__inner { text-align: center; color: #fff; }

  @media (prefers-reduced-motion: reduce) {
    .phero { position: relative; }
  }

  /* --- Breadcrumbs --------------------------------------------------------- */

  .phero__crumbs ol {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 6px 10px;
    margin: 0 0 var(--sb-5);
    padding: 0;
    list-style: none;
    font-size: var(--sb-label);
    font-weight: 600;
    letter-spacing: 0.1em;
    text-transform: uppercase;
  }

  .phero__crumbs li + li::before {
    content: '/';
    margin-right: 10px;
    color: rgba(255, 255, 255, 0.5);
  }

  .phero__crumbs a,
  .phero__crumbs [aria-current='page'] {
    display: inline-flex;
    align-items: center;
    min-height: 24px;
    padding-inline: 2px;
  }

  .phero__crumbs a {
    color: rgba(255, 255, 255, 0.82);
    transition: color var(--sb-dur-link) ease;
  }

  .phero__crumbs a:hover { color: #fff; text-decoration: underline; }

  .phero__crumbs [aria-current='page'] { color: #fff; }

  /* --- Title --------------------------------------------------------------- */

  .phero__title {
    font-family: var(--sb-font-display);
    font-weight: 700;
    font-size: clamp(32px, 5.2vw, 62px);
    line-height: 1.06;
    letter-spacing: -0.035em;
    text-wrap: balance;
  }

  .phero__standfirst {
    margin: var(--sb-5) auto 0;
    max-width: 56ch;
    font-size: var(--sb-body-lg);
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.86);
  }
</style>
```

---

## 3 · What it needs to exist

### 3.1 · Tokens

```css
:root {
  --sb-ink: #16100c;          /* banner ground, behind the photograph */
  --sb-ivory: #fbf7f4;        /* the content panel's opaque ground    */

  --sb-font-display: 'Bricolage Grotesque Variable', 'Plus Jakarta Sans Variable',
                     -apple-system, system-ui, sans-serif;

  --sb-label: 12px;           --sb-label-lh: 1.20;
  --sb-body-lg: 19px;         --sb-body-lg-lh: 1.60;

  --sb-5: 16px;
  --sb-dur-link: 220ms;

  --sb-max-content: 1280px;
  --sb-margin: 48px;
  --sb-section-y: 120px;
}
```

Responsive overrides that touch the banner:

```css
@media (max-width: 1279px) { :root { --sb-margin: 40px; } }
@media (max-width: 1239px) { :root { --sb-body-lg: 18px; --sb-section-y: 88px; } }
@media (max-width: 1023px) { :root { --sb-margin: 32px; } }
@media (max-width:  767px) { :root { --sb-body-lg: 17px; --sb-label: 11px;
                                     --sb-margin: 24px; --sb-section-y: 64px; } }
@media (max-width:  479px) { :root { --sb-margin: 20px; } }
```

### 3.2 · Utilities

```css
.u-container {
  width: 100%;
  max-width: calc(var(--sb-max-content) + var(--sb-margin) * 2);
  margin-inline: auto;
  padding-inline: var(--sb-margin);
}

/* The content panel that rises over the banner. */
.u-page-panel {
  position: relative;
  z-index: 1;                 /* above the pinned banner */
  border-radius: 0;           /* meets the banner on a straight edge */
  background: var(--sb-ivory);/* opaque, or the photo shows through  */
  padding-block: clamp(48px, 7vh, 88px) var(--sb-section-y);
}
```

### 3.3 · The display font

Self-hosted variable font, `font-display: swap`:

```css
@font-face {
  font-family: 'Bricolage Grotesque Variable';
  font-style: normal;
  font-display: swap;
  font-weight: 200 800;
  src: url('/fonts/bricolage-grotesque-latin-wght-normal.woff2') format('woff2-variations');
}
```

One variable file covers 200–800. If you substitute a different display face, the
title's `letter-spacing: -0.035em` was tuned for Bricolage and will need
re-checking — it is tight.

---

## 4 · How a page uses it

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import PageHero from '../../components/ui/PageHero.astro';
import banner from '../../assets/photos/sunbeem-3.jpg';
---

<BaseLayout title="…" description="…">
  <PageHero
    title="Vice Principal's Message"
    standfirst="On academic excellence, classrooms that listen, and the resilience to rise again."
    crumbs={[{ label: 'Home', href: '/' }, { label: 'About', href: '/about/' }]}
    src={banner}
    alt="The campus of Sunbeam School Ballia at Agarsanda."
    position="50% 45%"
  />

  <div class="u-page-panel">
    <!-- page content -->
  </div>
</BaseLayout>
```

**`src` is an imported image, not a string path.** Astro's `<Picture>` needs
`ImageMetadata` to generate the avif/webp srcset at build time.

**`position` holds the focal point through the crop.** The banner is a wide, short
box; a portrait-ish photograph will centre on sky unless you push it down.
`50% 58%` keeps a building in frame; `50% 45%` is the default.

---

## 5 · The contract — read this or the banner will bleed through your content

**This is the part that is easy to miss and expensive to find.**

The banner is `position: sticky; z-index: 0`. It does not scroll away — the page
content has to *cover* it. So **every section that follows the banner must be:**

1. `position: relative`
2. `z-index: 1` — **an explicit value, not `auto`**
3. given an **opaque background**

Use `.u-page-panel`, or set the three properties on the section directly.

> ⚠️ **`z-index: auto` is not good enough, and it will look fine until it
> doesn't.** A positioned sibling at `auto` paints above the banner only by tree
> order, and that breaks the moment anything between them creates a stacking
> context. On this project that left the pinned banner showing through the top of
> a section **three separate times**, each reported by the client.

> ⚠️ **`isolation: isolate` alone is not good enough either.** It creates a
> stacking context but does not raise the element above a sibling at `z-index: 0`.

On staging, `Toppers.astro`, `.vpl` (Vice Principal's page) and `.ung` (NCC /
Scouts) each carry an explicit `z-index: 1` for exactly this reason, each with a
comment saying so.

---

## 6 · Four decisions that look arbitrary and are not

**6.1 · The reduced-motion rule is `relative`, NOT `static`.**

Dropping the sticky is the intent — but `static` also stops the header being a
containing block, and `.phero__media` / `.phero__scrim` are
`position: absolute; inset: 0`. They would then resolve against whatever
positioned ancestor is above, and **`overflow: hidden` on the header cannot clip
them**, because a clipper only clips descendants whose containing block is inside
it.

Measured when this was wrong: the banner was 414px tall and the photograph
rendered **900px**, bleeding 486px past the bottom of its own section, on every
page with a banner, for every reader with reduced motion enabled.

**6.2 · Test with motion ENABLED.**

This bug went unseen because default screenshot captures on this project ran
`reducedMotion: 'reduce'` for stability — so it was in almost every screenshot and
invisible in every measurement that only checked horizontal overflow. It also
works the other way: reduced motion turns the banner from sticky to relative, so
the **overlap bug in §5 cannot occur in that state**. Check both modes.

**6.3 · The breadcrumbs are 24px tall, not 13px.**

WCAG 2.2 SC 2.5.8 sets a 24×24 minimum target. Measured on a phone these crumbs
were 38×13 and 44×13. The "inline" exception does **not** cover them — that
applies to a link inside a sentence, and a breadcrumb sits in a nav on its own.
`inline-flex` + `min-height` grows the hit area without moving the text, so
nothing reflows and the trail looks identical.

**6.4 · The current crumb is marked by weight and full opacity, not by colour.**

It used to be a lime accent, which measured **3.07:1** over a brighter photograph.
The scrim is tuned to carry white; a mid-tone accent at 12px has no margin once
the image behind it is light.

**On the scrim itself:** the two-stop wash is weighted to the middle band where
the title sits, and it was verified by **sampling rendered pixels**, not by eye
(`scripts/contrast-sample.mjs`). If you change the gradient, re-sample — a scrim
that looks fine over one photograph fails over the next.

---

## 7 · A trap specific to Astro

The rules targeting the image use `:global()`:

```css
.phero__media :global(picture),
.phero__media :global(img) { … }
```

**This is required, not stylistic.** The `<img>` is rendered by `<Picture>`, a
**child component**, so it never receives this component's `data-astro-cid`
attribute. A plain `.phero__media img { … }` compiles to
`.phero__media img[data-astro-cid-…]`, which matches **nothing on the page** —
the rule silently does nothing and the photograph renders at its intrinsic size.

Measured elsewhere on this project when the `:global()` was missing: photographs
rendered **1066px tall in a 291px column**.

**Anchor `:global()` on an element this component actually renders** (here
`.phero__media`). Never write a bare `:global(img)` — it would restyle every
image on the site.

---

## 8 · Verification

- [ ] Banner renders on a page at 1920, 1440, 768 and 390. No horizontal overflow.
- [ ] **With motion enabled**, scroll a long page top to bottom. The content
      covers the banner completely — the photograph never shows through a
      section, **especially at a section heading**.
- [ ] **With `prefers-reduced-motion: reduce`**, the banner scrolls away normally
      and the photograph stays inside the header. Measure the header's height
      against the rendered image height — they should match.
- [ ] The breadcrumb trail ends with the page title, marked `aria-current="page"`,
      and the separators are **not** in the DOM text (they are `::before`).
- [ ] Each crumb's hit area is at least 24px tall.
- [ ] Title and standfirst measure at least 4.5:1 against the brightest pixel of
      the photograph behind them. Sample the rendered pixels; do not eyeball it.
- [ ] The `<h1>` is the page's only `h1`, and the next heading on the page is an
      `h2` — no level skips.
- [ ] `loading="eager"` and `fetchpriority="high"` survive onto the `<img>`; this
      is the page's largest contentful paint.

A useful automated check for the §5 contract: sample
`document.elementFromPoint` across ~20 scroll positions and assert the banner is
never the top element inside a following section's bounds.
