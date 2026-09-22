# Class Corner (`/academics/class-corner/`) — build spec

**For:** the agent building this page on the production site.
**Companion to:** the **page-banner spec** (`11-page-banner-spec.md` in the
staging repo). This page uses that banner, and **§ 7 here is the stacking
contract it owes it.** Build the banner first.

> ⚠️ **Match these documents by filename, not by number.** Staging and
> production number their `docs/` differently — `docs/11` is the banner spec on
> one and `backup-restore-rehearsal` on the other. If `PageHero.astro` already
> exists in your repo taking `title` / `standfirst` / `crumbs` / `src` / `alt` /
> `position`, it is the right component and needs no changes.

**What it is:** a page under Academics carrying the four class-level documents a
parent actually needs — class teachers, timetable, monitors, exam schedule — as a
grid of link cards, followed by a full-width Academic Excellence section that
transcribes the school's two toppers boards.

**Three files plus the page.** Copy them verbatim where you can; §3 and §5 are the
only places where content decisions matter more than code.

| File | Role |
|---|---|
| `src/pages/academics/class-corner.astro` | The route. Banner + two sections |
| `src/data/classCorner.ts` | The four card definitions |
| `src/components/academics/ClassCornerPage.astro` | The card grid |
| `src/data/toppers.ts` | 17 transcribed board rows |
| `src/components/academics/Toppers.astro` | The two tables |

---

## 1 · What the client asked for, and what shipped

The brief (16 Sep 2026) listed **five** things under Class Corner:

| Asked for | Shipped | Why |
|---|---|---|
| Class Teacher Details | ✅ card → school's PDF | |
| Class Timetable | ✅ card → school's page | |
| Student Monitors' List | ✅ card → school's PDF | |
| Exam In-charge Details | ❌ **no card** | Never published; client had the placeholder removed 19 Sep |
| Academic Excellence | ✅ **its own section**, not a card | A card that only scrolled you down the same page was duplicating the page |

> ⚠️ **Do not re-add either removed card without asking.** Both removals were
> deliberate and both are recorded in `data/classCorner.ts`. The Exam In-charge
> gap is still tracked in `data/site.ts` → `A14` and in `docs/07`; it is simply
> no longer stated to visitors.

**One discovery worth repeating, because it will happen again:** the Student
Monitors' list was scoped as *"pending, awaiting the school"*. It was published
the whole time — a PDF sitting on the **Class Teachers** page under a second
heading, with no entry of its own in the school's menu. **Search the school's
site, not its navigation.**

---

## 2 · The page

`src/pages/academics/class-corner.astro`

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import PageHero from '../../components/ui/PageHero.astro';
import ClassCornerPage from '../../components/academics/ClassCornerPage.astro';
import Toppers from '../../components/academics/Toppers.astro';

import banner from '../../assets/corridor and stairs/DSC_1210 copy.jpg';
---

<BaseLayout
  title="Class Corner — Sunbeam School Ballia"
  description="Class teachers, class timetables, the student monitors' list and the examination schedule for Sunbeam School Ballia, Nursery to Class XII."
>
  <PageHero
    title="Class Corner"
    standfirst="Class teachers, timetables, monitors and the examination schedule."
    crumbs={[
      { label: 'Home', href: '/' },
      { label: 'Academics', href: '/academics/' },
    ]}
    src={banner}
    alt="A corridor at Sunbeam School Ballia, its classroom doors running the length of the block."
    position="50% 50%"
  />

  <ClassCornerPage />
  <Toppers />
</BaseLayout>
```

**The banner photograph is the school's own corridor** — classroom doors running
the length of the block, which is what a "class corner" is about. It is also used
on the Mentoring page; a photograph earning its place twice is not a duplicate.

---

## 3 · The data — `src/data/classCorner.ts`

```ts
export interface CornerItem {
  id: string;
  title: string;
  /** What it is, in this project's voice — these are labels, not school copy. */
  body: string;
  icon: 'teacher' | 'clock' | 'badge' | 'exam' | 'person' | 'star';
  /** The real file or page. `null` means the school has not published it. */
  href: string | null;
  /** Shown on the card where the link is a document rather than a page. */
  kind?: 'PDF' | 'Image' | 'Page';
  /** Only on items that do not exist yet — printed verbatim on the card. */
  pending?: string;
  /** What the school owes, as chips. Names MISSING things, never values. */
  needs?: string[];
}

export const cornerItems: CornerItem[] = [
  {
    id: 'class-teachers',
    title: 'Class Teachers',
    body: 'Every class and section with the teacher who takes it, as published by the school office.',
    icon: 'teacher',
    href: 'http://sunbeamballia.edu.in/wp-content/uploads/class-teacher-updated.pdf',
    kind: 'PDF',
  },
  {
    id: 'class-timetable',
    title: 'Class Timetable',
    body: 'Timetables for Nursery to KG-2, Classes I–II, III–V, VI–VIII and IX–XII.',
    icon: 'clock',
    href: 'https://sunbeamballia.edu.in/class-timetable/',
    kind: 'Page',
  },
  {
    id: 'student-monitors',
    title: 'Student Monitors',
    body: 'The monitors appointed for the 2026-27 session, class by class.',
    icon: 'badge',
    href: 'http://sunbeamballia.edu.in/wp-content/uploads/monitors-26-27.pdf',
    kind: 'PDF',
  },
  {
    id: 'exam-schedule',
    title: 'Examination Schedule',
    body: 'The examination schedule for the 2026-27 session.',
    icon: 'exam',
    href: 'http://sunbeamballia.edu.in/wp-content/uploads/WhatsApp-Image-2026-06-24-at-14.18.48.jpeg',
    kind: 'Image',
  },
];

export const liveCount = cornerItems.filter((i) => i.href).length;
export const pendingCount = cornerItems.filter((i) => !i.href).length;
```

### Three rules about these links

**3.1 · They link OUT to the school's own files. Do not copy the documents in.**
The documents live on the old WordPress site and are revised there each session. A
copy taken today goes stale silently. `monitors-26-27.pdf` is dated in its own
filename — it will be replaced next session, and the link should keep working when
it is.

**3.2 · The timetable is a page link, not a file link, and that is forced.**
The school publishes it as **seventy-two separate JPEGs** across five grade
groups, embedded in a page, with no PDF and no per-class URL. Seventy-two hotlinks
would be a maintenance trap; copying them in would freeze a timetable that
changes. So it links to the page that holds them and **names the five groups**,
which is what a parent needs in order to find their child's.

**3.3 · `pending` and `needs` are currently unused — keep them anyway.** Both
fields, and the pending branch in the component, render for nothing right now.
They are kept deliberately: the next item the school owes will need them, and the
treatment they carry (see §4.3) is the thing that stops a placeholder looking
finished.

---

## 4 · The card grid — `ClassCornerPage.astro`

A 3-up grid of cards on a `--sb-ivory` ground with two blurred decorative blobs,
then a centred footer line pointing at the school office.

Each card is an icon circle beside a body block: title + optional `kind` pill,
one line of description, then either an **Open →** cue (live) or the pending
stamp and chips (not published).

### 4.1 · The element switches on `href`

```astro
const Tag = it.href ? 'a' : 'div';
```

A card with nothing to link to **must not be an anchor**. No `href`, no hover
lift, no cursor change — see §4.3.

### 4.2 · In-page anchors must not open a new tab

```astro
{...(it.href
  ? it.href.startsWith('#')
    ? { href: it.href }
    : { href: it.href, target: '_blank', rel: 'noopener' }
  : {})}
```

The four document links go to the school's old site and genuinely do leave. An
anchor beginning `#` points at a section on this same page. **Same card, two
behaviours** — and the visually-hidden text on the CTA changes with it:
*"— opens in a new tab"* versus *"— jumps to that section on this page"*.

> This branch exists because Academic Excellence used to be a card pointing at
> `#academic-excellence`. That card is gone, but the branch stays: the next
> in-page card would otherwise open a pointless new tab.

### 4.3 · The pending card reads as unfinished on purpose

```css
.ccn__card--pending {
  background: transparent;
  border: 1px dashed rgba(18, 16, 15, 0.2);
  box-shadow: none;
}
```

Flat, dashed, no shadow, no hover. **It must not look like a card whose link
merely failed to render.** The stamp ("Content to be updated") is **real text,
first in reading order**, so a screen reader learns the card is pending before it
reads the title — not a `::before`.

The chips name **missing things, never values**: `"name"`, never `"Mr X"`. Putting
a real value in a chip turns a placeholder into a false claim.

### 4.4 · `align-items: start`, not the default `stretch`

```css
.ccn__grid { align-items: start; }
.ccn__grid > li { display: flex; }
```

A pending card carries a stamp, a sentence and a chip list, so it is much taller
than a live one. Under `stretch` the short live card beside it was pulled to the
same height and read as **half-empty** — the one impression this page must avoid.
Cards size to their own content.

### 4.5 · Only real links move

```css
a.ccn__card:hover {
  transform: translateY(-3px);
  border-color: rgba(201, 60, 10, 0.24);
  box-shadow: 0 2px 6px rgba(28, 14, 8, 0.05), 0 18px 38px -16px rgba(28, 14, 8, 0.28);
}
a.ccn__card:focus-visible { outline: 2px solid var(--sb-violet); outline-offset: 3px; }
```

The selector is `a.ccn__card`, not `.ccn__card`. A card that rises under the
pointer promises a click it cannot honour.

### 4.6 · Grid and responsive

```css
.ccn__grid { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: var(--sb-5); }
@media (max-width: 1023px) { .ccn__grid { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width:  639px) { .ccn__grid { grid-template-columns: minmax(0, 1fr); } }
```

With four cards this gives 3 + 1 on desktop, 2 + 2 on tablet, stacked on phone.

### 4.7 · The icons

Six inline SVGs on a `24 24` viewBox, `stroke-width: 1.7`, round caps and joins,
`fill="none"` — except `star`, which is solid `fill="currentColor"`. They sit in a
44px circle, `--sb-lime-wash` ground with `--sb-violet` stroke; the pending
variant is a flat grey circle with muted stroke.

```
teacher  circle cx=12 cy=7.5 r=3.4 · M4.5 20c0-3.7 3.4-6 7.5-6s7.5 2.3 7.5 6
clock    circle cx=12 cy=12 r=8.4 · M12 7.2V12l3.2 2
badge    circle cx=12 cy=9 r=4.6 · m8.4 13.4-1.4 7 5-2.6 5 2.6-1.4-7
exam     M6 3h9l3.5 3.5V21H6z · M14.5 3v4H18M9 12h6M9 16h4
person   circle cx=12 cy=8 r=3.4 · M5 20c0-3.5 3.1-5.8 7-5.8s7 2.3 7 5.8
star     m12 3.6 2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.8-5.2 2.8 1-5.8L3.6 9.7l5.8-.8Z
```

---

## 5 · Academic Excellence — `Toppers.astro` + `data/toppers.ts`

A full-width section on `--sb-sand`, id `#academic-excellence`, holding **two real
`<table>` elements** side by side — Class X and Class XII — transcribed row for
row from a photograph of the school's two mounted boards.

### 5.0 · The rows

> **These were missing from the first issue of this spec.** It gave the rules and
> none of the data, so the section could not render. Below is the complete
> transcription — nothing else is needed to fill the tables.

```ts
export interface TopperRow {
  /** The academic session, exactly as the board labels it. */
  session: string;
  /** As printed on the board, in capitals. May name two students. */
  name: string;
  /** Two decimals, as printed. A string so trailing zeros survive. */
  percent: string;
  /** Set where the board itself is not legible — see § 5.4. */
  check?: boolean;
}

/** CLASS X TOPPERS, oldest session first, as the board reads top to bottom. */
export const classX: TopperRow[] = [
  { session: '2017-18', name: 'ARYAN SINGH YADAV', percent: '94.80' },
  { session: '2018-19', name: 'ANSHU YADAV', percent: '96.40' },
  { session: '2019-20', name: 'JANHVI UPADHYAY', percent: '97.00' },
  { session: '2020-21', name: 'SRISHTI SINGH', percent: '96.40' },
  { session: '2021-22', name: 'RISHIKANT', percent: '98.40' },
  { session: '2022-23', name: 'PRINCE KUMAR ADITYA', percent: '97.20' },
  { session: '2023-24', name: 'ADITI YADAV', percent: '97.60' },
  { session: '2024-25', name: 'ANANYA TIWARI & SHREYA YADAV', percent: '98.20' },
  { session: '2025-26', name: 'AASTHA YADAV', percent: '97.20' },
];

/** CLASS XII TOPPERS, oldest session first. */
export const classXII: TopperRow[] = [
  { session: '2018-19', name: 'SHALU VERMA', percent: '78.43' },
  { session: '2019-20', name: 'SHAMBHAVI', percent: '94.00' },
  { session: '2020-21', name: 'ANSHU YADAV', percent: '94.80' },
  { session: '2021-22', name: 'ADITYA SINGH', percent: '94.20' },
  /* ⚠ The board reads "97 40" — decimal not legible. See § 5.4. */
  { session: '2022-23', name: 'SANDHYA YADAV', percent: '97.40', check: true },
  { session: '2023-24', name: 'UTPAL SINGH TOMAR', percent: '98.00' },
  { session: '2024-25', name: 'PRIYANKA MAURYA', percent: '98.60' },
  { session: '2025-26', name: 'ANISHA ALTAF', percent: '97.20' },
];

/** Session range, read off the rows rather than typed twice. */
export const spanX = classX[0].session + ' – ' + classX[classX.length - 1].session;
export const spanXII = classXII[0].session + ' – ' + classXII[classXII.length - 1].session;

/** Count checks, for auditing the transcription against the photograph. */
export const countX = classX.length;     // 9
export const countXII = classXII.length; // 8
```

**17 rows: 9 Class X (2017-18 → 2025-26), 8 Class XII (2018-19 → 2025-26).**
Count them against the photograph before shipping — that is what `countX` and
`countXII` are for.

> ⚠️ **These are named children and real marks.** Nothing may be rounded,
> reordered, corrected or filled in. If a row looks wrong, the board has to
> change, not the file. See § 5.4.

> ⚠️ **Guard `peak()` against an empty array.** `Array.reduce` with no initial
> value throws on `[]`, which takes the whole page down rather than just the
> section. Returning `null` and rendering nothing is the correct empty state.

### 5.1 · It is a table because it is a table

The source is a ruled board with three columns and a row per session. A reader
wants to scan down a year or across a name. **Cards would break the column
alignment that makes it readable, and a screen reader would lose the
session/name/mark relationship entirely.**

Each table has a `<caption class="u-visually-hidden">`, `<th scope="col">` on the
header row and `<th scope="row">` on the session cell.

### 5.2 · Newest first on screen, oldest first in the data

The board reads top-down from 2017-18 because that is the order the rows were
engraved; a visitor wants this year first. **The data keeps the board's order so
the transcription can be checked against the photograph line by line** — the
reversal happens in the component:

```ts
{ label: 'Class X', rows: [...classX].reverse(), best: bestX, span: spanX, id: 'toppers-x' }
```

### 5.3 · The highlight is arithmetic, not a ranking

```ts
const peak = (rows: TopperRow[]) =>
  rows.reduce((a, b) => (parseFloat(b.percent) > parseFloat(a.percent) ? b : a));
export const bestX = peak(classX);
export const bestXII = peak(classXII);
```

The data file does the comparison so the component states nothing of its own. The
row gets a `--sb-lime-wash` tint and the label **"Highest on this board"** — a
tint and a label, not a trophy.

> ⚠️ **No comparative claim appears anywhere on this page.** Not "district
> topper", not "best in Ballia". The client mentioned a *"continuous district
> topper"* record; **no wording for it has been confirmed, so no such sentence is
> published.** Do not add one. Tracked in `docs/07` → A14.

### 5.3a · The Board Results page contradicts this one — fix that too

`BoardResultsPage.astro` rendered an absence panel headed **"Not published"** over
the line **"No toppers list"**. Every sentence in its body is correctly scoped to
the CBSE mandatory-disclosure filing, which genuinely carries no individual
detail — but the panel heading named no subject, so a parent read it as *the
school publishes no toppers*, and then found nine Class X sessions here.

Two changes close it, both applied on staging 21 Sep 2026:

1. The panel heading becomes **"Not in the CBSE filing"**. Three lines that are
   true of one document have to say which document.
2. A sentence after the "what the filing does not carry" paragraph points here:

   > The school does record its session toppers — on two boards at the entrance,
   > one for Class X and one for Class XII. Those are transcribed in full under
   > [Class Corner](/academics/class-corner/). They are a different record from
   > this filing, and neither is derived from the other.

**Do this before the toppers rows go live**, or the contradiction is visible for
as long as the two pages disagree.

### 5.4 · Four transcription rules

- **Nothing may be rounded, reordered, corrected or filled in.** Every name is
  spelled as the board spells it and every percentage is copied to two decimals as
  printed. If a row looks wrong, the board has to change, not the file.
- **The board's empty future rows are not reproduced.** 2026-27, 2027-28 and
  2028-29 are ruled and blank, waiting to be filled. An empty row on a wall is a
  promise; on a web page it reads as missing data.
- **Class X 2024-25 is one row with two names** — `ANANYA TIWARI & SHREYA YADAV`,
  both at 98.20. The board gives them the session jointly. **Do not split them
  into two rows with a rank between them.**
- **Class XII 2022-23 reads `97 40` on the board** — the decimal is not legible in
  the photograph. Stored as `'97.40'` with `check: true`, which renders an
  `<abbr>` asterisk and a footnote. **Awaiting the school's confirmation; keep the
  flag until they answer.**

### 5.5 · Names are stored in capitals and title-cased for display

```ts
const nice = (n: string) =>
  n.replace(/[A-Za-z]+/g, (w) => w[0].toUpperCase() + w.slice(1).toLowerCase());
```

The stored spelling is the record; the casing is presentation. **Do not "fix" a
spelling in the data to match a hunch.**

### 5.6 · One name appears on both boards

`ANSHU YADAV` is Class X 2018-19 and Class XII 2020-21 — exactly the two-year gap
that would make it one student who topped twice. **The site does not say so.** It
is very probably the same person, and "very probably" is not something to publish
about a named child.

---

## 6 · Tokens used

```css
:root {
  --sb-violet: #c93c0a;   --sb-violet-dark: #a32f06;
  --sb-lime-wash: #fff1ea;
  --sb-paper: #ffffff;    --sb-ivory: #fbf7f4;   --sb-sand: #f4ece7;
  --sb-ink: #16100c;      --sb-text-muted: #6f6862;

  --sb-body-sm: 15px;     --sb-caption: 13px;
  --sb-5: 16px;  --sb-6: 24px;  --sb-7: 32px;  --sb-8: 40px;
  --sb-r-0: 16px;
  --sb-section-y: 120px;
}
@media (max-width: 1239px) { :root { --sb-section-y: 88px; } }
@media (max-width:  767px) { :root { --sb-body-sm: 14px; --sb-caption: 12px;
                                     --sb-section-y: 64px; } }
```

`--sb-font-display` is the Bricolage Grotesque variable face — see
`docs/11` §3.3.

---

## 7 · The stacking contract — do not skip this

Both sections follow a `PageHero`, which is `position: sticky; top: 0;
z-index: 0`. **Each section must therefore carry:**

```css
position: relative;
z-index: 1;          /* explicit — NOT `auto` */
isolation: isolate;
background: …;       /* opaque */
```

> ⚠️ **This exact bug was reported by the client three times on this page.**
> `.tpr` was left at `z-index: auto` and the pinned banner showed through the top
> of the Academic Excellence section. A positioned sibling at `auto` paints above
> the banner only by tree order, which is fragile the moment anything between them
> creates a stacking context. **`isolation: isolate` alone does not fix it.**

> ⚠️ **Two verification methods failed before the third one found it:**
> 1. Testing with `reducedMotion: 'reduce'` — that switches `PageHero` from
>    `sticky` to `relative` and the overlap **cannot occur in that state**.
> 2. Testing at `section.top + 260` (where the cards are) when the client's
>    screenshots always showed the **section heading** under the banner.
>
> Test with motion enabled, at the heading.

`.ccn` and `.tpr` both have `overflow: hidden` because of their blurred blobs;
that is independent of the above and does not substitute for it.

---

## 8 · Navigation

```ts
{
  label: "Class Corner",
  href: "/academics/class-corner/",
  icon: "badge",
  desc: "Class teachers, timetables, monitors and exam dates.",
  img: imgCorridor,
}
```

> ⚠️ **It sits at COLUMN level under Academics, not nested as a child.** The
> mobile drawer renders `columns.flat()` and **never descends into `children`** —
> anything nested a level deeper is a desktop-only link. This one is a
> parent-facing utility, so it has to be reachable on a phone. It originally
> shipped nested and was invisible on mobile.

---

## 9 · Verification

- [ ] Page builds; route is `/academics/class-corner/`.
- [ ] **Four cards**, no Exam In-charge card, no Academic Excellence card.
- [ ] All four cards are `<a>` with `target="_blank" rel="noopener"`, and all four
      URLs resolve on the school's site.
- [ ] The `kind` pill reads PDF / Page / PDF / Image respectively.
- [ ] Academic Excellence renders as **two `<table>` elements**, newest session
      first, with the highest mark in each tinted and labelled.
- [ ] 9 rows in Class X, 8 in Class XII. No 2026-27 or later row.
- [ ] `/academics/board-results/` no longer shows a bare **“Not published”**
      heading, and links through to Class Corner.
- [ ] `ANANYA TIWARI & SHREYA YADAV` is **one row**.
- [ ] The Class XII 2022-23 figure carries the asterisk and the footnote explains
      it.
- [ ] No phrase matching `district topper`, `best in`, `rank 1` anywhere in the
      built HTML.
- [ ] **With motion enabled**, scroll the page slowly: the banner never shows
      through either section, **checked at each section's heading**.
- [ ] Grid is 3-up ≥1024px, 2-up 640–1023px, 1-up <640px.
- [ ] Class Corner is reachable in the **mobile** menu.
- [ ] Headings run h1 → h2 → h3 with no skips.

---

## 10 · Still open with the school

| Gap | Ref |
|---|---|
| Examination In-charge — name, designation, contact | A14 |
| Confirmation of `97.40` for Sandhya Yadav | A14 |
| Agreed wording for the "continuous district topper" claim | A14 |
| Whether the two `ANSHU YADAV` entries are the same student | — |

When the Exam In-charge arrives, add it back as a `CornerItem` with a real
`href`; the `pending` / `needs` fields and the component's pending branch are
already there for the interim state.
