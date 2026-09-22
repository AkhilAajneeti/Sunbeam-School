# Alumni (`/alumni/`) — build spec

**For:** the agent building the alumni area on the production site.
**Client item 2:** *"The Alumni section should have two separate categories —
Students Placed/Working, and Students Pursuing Higher Education."* That split is
**§5** and it is the part most likely to be got wrong, for a reason that has
nothing to do with code.

> ⚠️ **Match companion documents by filename, not number.** Staging and
> production number `docs/` differently. This page uses the standard `PageHero`
> banner — see the **page-banner spec** (`11-page-banner-spec.md` on staging).

**Three routes:**

| Route | File | What it is |
|---|---|---|
| `/alumni/` | `src/pages/alumni/index.astro` | The main page, six sections |
| `/alumni/<slug>/` | `src/pages/alumni/[slug].astro` | One meet, generated per published meet |
| `/alumni/registration/` | `src/pages/alumni/registration.astro` | **Proposed** UI — see §9 |

**Supporting files:**

| File | Role |
|---|---|
| `src/data/alumniMeets.ts` | The CMS — meets, galleries, derived exports |
| `src/data/alumni.ts` | The three verified placement records |
| `src/data/alumniRegistration.ts` | Registration config, kept apart on purpose |
| `src/components/alumni/AlumniPage.astro` | The whole body, six sections |
| `src/components/alumni/AlRail.astro` | The bespoke carousel |
| `src/components/ui/Lightbox.astro` | Shared image viewer |

---

## 1 · Assets to copy by hand — 26 files

A prompt cannot carry binaries and Astro hard-fails on a missing import.

```
src/assets/alumni/alumni (1).jpg   (2).jpg   (3).jpg        ← 3 placement cards
                                                              (keep the spaces
                                                               and brackets)
src/assets/alumni-meets/pradiptam-2-0-2026-27/
    01-group-on-the-steps.jpg      02-alumni-with-medallions.jpg
    03-alumni-in-the-hall.jpg      04-medallions-at-the-table.jpg
    05-lamp-lighting.jpg                                    ← 5 meet photos

src/assets/sunbeam-assets-2/Alumni/                         ← 16 more, same meet
    DSC_1403.JPG  DSC_1412.JPG  DSC_1415.JPG  DSC_1417.JPG
    DSC_1481.JPG  DSC_1510.JPG  DSC_1512.JPG  DSC_1516.JPG
    DSC_1522.JPG  DSC_1524.JPG  DSC_1529.JPG  DSC_1539.JPG
    DSC_1541.JPG  DSC_1543.JPG  DSC_1565.JPG  DSC_1572.JPG

src/assets/placement/WhatsApp Image 2025-12-02 at 11.49.42 AM.jpeg
                                                            ← the 18-name board
src/assets/photos/sunbeem-1.jpg, sunbeem-3.jpg              ← already in repo
```

> ⚠️ **The `.JPG` extensions are uppercase and the filenames have spaces and
> brackets. Do not normalise them.** The imports reference them exactly.
>
> ⚠️ **Those 16 uppercase imports produce TypeScript errors that are expected.**
> On staging they are 16 of the 46 pre-existing `tsc --noEmit` errors
> (`TS2307: Cannot find module … DSC_1403.JPG`). **Vite resolves them fine at
> build time and the build is green.** If your error count jumps by ~16 after
> adding this page, that is why — do not "fix" it by renaming the files.

---

## 2 · The route

`src/pages/alumni/index.astro`

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import PageHero from '../../components/ui/PageHero.astro';
import AlumniPage from '../../components/alumni/AlumniPage.astro';

import banner from '../../assets/alumni-meets/pradiptam-2-0-2026-27/01-group-on-the-steps.jpg';
---

<BaseLayout
  title="Alumni — Sunbeam School Ballia"
  description="The alumni record of Sunbeam School Ballia: the school's alumni meets, and the former students whose degree, institution and placement the school has published."
>
  <PageHero
    title="Alumni"
    standfirst="From the classrooms of Sunbeam Ballia, into the world beyond."
    crumbs={[{ label: 'Home', href: '/' }]}
    src={banner}
    alt="Alumni and staff of Sunbeam School Ballia gathered on the school steps at Pradiptam 2.0, the school's alumni meet."
    position="50% 42%"
  />

  <div class="u-page-panel" style="padding-block: 0;">
    <AlumniPage />
  </div>
</BaseLayout>
```

Two things that look odd and are not:

- **The banner is the meet's own group photograph**, not a campus shot. An
  Alumni banner should show alumni. It replaced a campus photo the moment the
  real image existed.
- **`padding-block: 0` is an inline style, deliberately.** A scoped rule can skew
  against its build hash and reopen a white band above the footer. Leave it
  inline.

---

## 3 · Composition — six sections

| # | Ground | Section |
|---|---|---|
| 01 | ivory | **The connection** — copy left, campus photo right |
| 02 | paper | **The featured meet**, split layout |
| 03 | cream | **The meets slider**, data-driven |
| 04 | paper | **The alumni on record** ← client item 2 lives here |
| 05 | ivory | **The gallery strip**, derived from the meets |
| 06 | photo | **The dark close** |

Sections 02, 03 and 05 are **conditional on data**. No published meet → no
featured section and no slider, rather than a headline standing over nothing.

```ts
const hasMeets   = publishedMeets.length > 0;
const hasGallery = alumniGallery.length > 0;
const hasStories = publishedStories.length > 0;
```

---

## 4 · The content store — `data/alumniMeets.ts`

**This file is the CMS.** The page renders whatever is `published: true` and
nothing else. Adding a meet is one entry; adding twenty is twenty entries and no
component change.

```ts
/** Published meets, newest first, ready for the UI. */
export const publishedMeets = alumniMeets.filter((m) => m.published);

/** The meet that headlines the page — the flagged one, else the newest. */
export const featuredMeet = publishedMeets.find((m) => m.featured) ?? publishedMeets[0];

export const publishedStories = alumniStories.filter((s) => s.published);

/**
 * ⚠ DERIVED, NOT A SECOND LIST. A gallery maintained separately from the meets
 * drifts the first time one is edited.
 */
export const alumniGallery: MeetPhoto[] = publishedMeets.flatMap((m) => m.gallery);
```

### 4.1 · One meet — Pradiptam 2.0

```ts
{
  slug: 'pradiptam-2-0-2026-27',
  title: 'Pradiptam 2.0',
  subtitle: 'Alumni Meet 2026–27',
  session: '2026–27',
  featured: true,
  published: true,
  source: 'Published by the school in the activity feed on sunbeamballia.edu.in/school-activities/…',
}
```

**The four description paragraphs are the school's own, verbatim** — its order,
its em-dash. Not paraphrased, not tightened:

> Some journeys never truly end—they simply come full circle.
>
> Pradiptam 2.0 | Alumni Meet 2026–27 was a heartfelt celebration of memories,
> friendships, and the timeless bond that every Sunbeam carries forever.
>
> From revisiting classrooms to reliving unforgettable moments, every smile
> reflected a story, every reunion rekindled a connection, and every conversation
> reminded us that once a Sunbeam, always a Sunbeam.
>
> Here's to the memories that shaped us and the legacy that continues to inspire
> generations.

### 4.2 · Five naming decisions, all of them checked

- **It is "Pradiptam", session 2026-27.** The design brief called it
  *"Pradeeptam / Light to Vision / 2024-25"*. The whole domain was searched —
  school-activities, publications, event-chronicles, the home page, all sixty
  slugs in `wp-sitemap.xml`, the posts feed. The school publishes **one** meet,
  spelled Pradiptam, titled *"Pradiptam 2.0 | Alumni Meet 2026-27"*, and no
  2024-25 meet at all. **The site's own spelling and session win.**
- **"Light to Vision" is real but is not the title.** The stage backdrop in the
  client's photographs reads *"प्रदीप्तम 2.0 · Light to vision"* over
  *"ALUMNI MEET 2026-27"*. So it is the meet's tagline — it simply never appeared
  in the school's published text. Recorded so nobody re-runs the search.
- **All 21 photographs are the same meet, confirmed by what is in them.** The 16
  from the client's second drop show the same backdrop and the same lanyard
  badges. **They are not a second meet and must not become one.**
- **One adjacent image was discarded** — it showed Sunbeam School **Mughalsarai**
  certificates, a different branch.
- **No date, venue, attendance, chief guest or programme is recorded.** The
  school publishes none.

### 4.3 · The gallery order is the account

21 photos, ordered **as the day ran** — arrival, registration, the lamp, the
hall, the presentations, the group photograph — not by filename. The gallery
reads top to bottom.

> ⚠️ **No names in the alt text of the presentation photographs.** The screen
> behind each presentation shows the alumnus's photograph, name and course — and
> most are half-hidden by the person standing in front of it. **Half-read off a
> screen is exactly how a name ends up misspelled on a page the person's own
> school publishes.** The alts describe what is happening; names go in when the
> school supplies the list.

### 4.4 · `alumniStories` is empty, and stays empty

```ts
export const alumniStories: AlumniStory[] = [];
```

The interface is complete — `quote`, `story`, `batch`, `photo`. It is for **an
alumnus speaking in their own words**, which needs an interview and written
consent, not a data entry. **Do not populate it from the placement records.**

---

## 5 · Section 04 — the two categories (client item 2)

Heading: *"Where our students went"*, kicker *"Alumni stories"*.

Intro line, which names the client's own framing:

> The client asked for these in two groups, and they are: former students who
> have finished studying and are **working**, and those who have gone on to
> **higher education**. Both groups below are the school's own records.

### 5.1 · Category 1 — Students placed & working

`id="al-working"`, count rendered from `alumni.length` — **not hard-coded**, so
nobody has to guess whether more were dropped.

Three verified records from `data/alumni.ts`, each read off the school's own
"OUR ALUMNI" graphic:

| Name | Study | Placed |
|---|---|---|
| Sudhanshu Raj Mishra | B.Tech · Bangalore Institute of Technology | GE Aerospace |
| Aditya Narayan Singh | B.Tech · Madan Mohan Malaviya Technical University | Micron Technology |
| Navneet Ranjan Mishra | MBA · Faculty of Management Studies, Lucknow University | ICICI Prudential |

```ts
export interface Alum {
  name: string;
  /** Degree and institution. */
  study: string;
  /** Where they are now. */
  placed: string;
  /** The school's own card. Shown WHOLE; it is a designed graphic, not a photo. */
  poster: ImageMetadata;
  alt: string;
  /** Empty until asset A4. A path under public/ — the card then plays it on hover. */
  video?: string;
}
```

Three rules:

- **The card is shown whole, never cropped.** It is a designed graphic; cropping
  removes the school's branding and the degree line together.
- **Nothing is inferred.** No graduating year (no card prints one) and no job
  title (the cards say "placed at", which names an employer, not a role).
- **`video` is ready and empty.** Drop an MP4 in and the card gains hover
  playback; poster, caption and layout do not change.

**The row ends at the third alumnus.** A *"More alumni stories coming soon"* tile
was removed 19 Sep 2026 at the client's request.

> ⚠️ **Do not replace it with an invented fourth person.** The underlying fact is
> unchanged — the school has supplied three and no more. Tracked as `A4`.

Under the cards, the gap is **named, not filled**:

> What these cards do not carry is the alumnus speaking — their own account of
> their years here. Those are published as the school records them, with consent.

### 5.2 · Category 2 — Students pursuing higher education

`id="al-higher-ed"`, count **18**.

> ⚠️⚠️ **THE EIGHTEEN NAMES ARE DELIBERATELY NOT TRANSCRIBED INTO TEXT. THIS IS
> AN INSTRUCTION, NOT AN OVERSIGHT.**
>
> The school publishes them itself on a printed board — *"Vision To Reality —
> Session 2024-25, Students Placed In Prestigious Colleges/Universities"* —
> so **showing the board reproduces nothing the school has not already put up.**
> Retyping them as HTML is a different act: it makes eighteen named recent
> school-leavers **searchable and indexable under their own names**.
>
> The client's instruction is that **school sign-off is required first**. Until
> it lands, the board stands — the same artefact, shown whole, at full size,
> openable in the viewer.
>
> **Do not "finish this off" by typing the names out of the image.** Get the
> approval; then add them to `data/alumni.ts` beside the existing three and this
> block becomes a card list like the one above.

The board carries **full alt text** so a screen reader is not shut out:

> Sunbeam School Ballia's printed placement board, "Vision To Reality — Session
> 2024-25, Students Placed In Prestigious Colleges/Universities", listing
> eighteen students with their course and institution above a strip of
> individual placement cards

The description names only what can be **counted off the board** — ten went to a
University of Delhi college, three to Banaras Hindu University — never individual
names.

Below it, a `Content to be updated` stamp and a line explaining why, linking to
`/academics/student-success/university-counselling/`, which shows the same board.

> The board image is **imported, not copied** — one asset, two pages.

---

## 6 · Section 05 — the gallery strip

Renders `alumniGallery` (21 photos) through `AlRail`, each opening in the
`Lightbox`.

**It reads its own source.** Built from the meets' galleries, so it fills the
moment any meet gains photographs — there is no second list to remember.

Empty state, if no meet has photographs:

> **Photographs are being added** — This strip is built from the galleries of the
> meets above, so it fills as soon as a meet's photographs are added. No image is
> shown here unless it is from an alumni meet.

---

## 7 · `AlRail.astro` — why it is not the shared slider

The shared `AsRailSlider` puts its arrows and counter in a header row above the
track. **The Alumni reference puts them outside the track** — two circles centred
on the card row, pagination dots centred underneath. That is different chrome,
not a variant; bolting a second arrangement onto the shared component would give
every other page a branch it never uses.

- **The track is a native scroller** — `overflow-x: auto` plus scroll snapping
  gives flick, drag, shift-wheel, trackpad and keyboard for free. **The script
  only adds the buttons and dots; remove it and the rail still works.**
- **The arrows sit in the page gutter.** Below 1280 they move inside the track's
  bounds; below 768 they hide entirely and the rail is swipe-only.
- **The dots are pages, not cards.** Thirteen dots for thirteen cards is a row of
  confetti; the count comes from how many card-widths the track can scroll.

Props: `label`, `id`, `per` (desktop), `perMd`, `perSm`. The gallery uses
`per={5} perMd={3} perSm={2}`.

---

## 8 · `/alumni/<slug>/` — the meet detail route

Generated from `publishedMeets` and nothing else. An unpublished meet has **no
page at all**, rather than a page nobody links to.

- **Only fields that carry a value are rendered.** No date, venue, attendance,
  chief guest or programme rows — not empty rows, not "TBA". **A blank field on a
  school page is an invitation to fill it in with a guess.**
- **No previous/next links while there is one meet.** Two dead controls. They
  appear when a second meet does.

---

## 9 · `/alumni/registration/` — proposed UI, and it says so

> ⚠️⚠️ **EVERYTHING IN `data/alumniRegistration.ts` IS PROPOSED UI, NOT PUBLISHED
> SCHOOL POLICY.** Sunbeam Ballia operates no alumni register: its own
> `/alumni/registration/` page is a placeholder, and nothing on the domain
> describes a registration process, an alumni association, a membership or any
> benefit attached to one. The fields, the benefit strip and the engagement cards
> are the experience being **designed**. **The page states that on its face.**

**The separation is the point.** `alumniMeets.ts` holds what the school has
published; `alumniRegistration.ts` holds what we are proposing. Mixing them is
how a design concept ends up quoted back as a school commitment.

**`endpoint` is `null`, and the form reads it.** With no endpoint the form
validates fully, then explains that nothing was sent and offers the school's real
office line. Point it at a real URL and the same form posts and shows the success
state — no markup changes.

> A form that appears to submit into nothing collects real personal data from
> people who believe the school asked for it. That is worse than one that is
> honest about not being wired up yet.

---

## 10 · Verification

- [ ] `/alumni/`, `/alumni/pradiptam-2-0-2026-27/` and `/alumni/registration/`
      all build.
- [ ] Six `<h2>` sections; headings run h1 → h2 → h3 with no skips.
- [ ] Category 1 heading shows **3** and it is read from `alumni.length`, not
      typed.
- [ ] Category 2 heading shows **18**.
- [ ] **The eighteen names appear nowhere as HTML text** — grep the built page
      for two or three of them and expect zero hits. They exist only inside the
      board image and its alt text.
- [ ] No *"More alumni stories coming soon"* tile; the row ends at the third card.
- [ ] No fourth alumnus invented.
- [ ] Gallery rail shows **21** photographs; every one opens in the lightbox.
- [ ] The rail still scrolls with JavaScript disabled.
- [ ] Below 768px the rail arrows are hidden and it is swipe-only.
- [ ] The registration page says on its face that it is proposed, and submitting
      it produces the honest "not connected" message, never a false success.
- [ ] The meet detail page shows **no** empty date / venue / attendance rows.
- [ ] Banner does not bleed through any section — test **with motion enabled**,
      at each section heading.
- [ ] `tsc` error count rose by ~16 and only for `DSC_*.JPG` module resolution.
      Build still green.

---

## 11 · Still open with the school

| Gap | Ref |
|---|---|
| More Placed/Working alumni than the three on record | A4 |
| Video testimonials, names, batches — **with written consent** | A4 |
| **School sign-off before the eighteen board names become searchable text** | A4 |
| University destinations as text, year on year, with cohort sizes | A11 |
| The names shown on the presentation screens in the meet photographs | — |

Nothing on this page may be filled in from any of these without the school
saying so in writing.
