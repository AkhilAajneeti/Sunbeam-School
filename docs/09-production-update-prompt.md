# Production update brief — Sunbeam School Ballia website

**For:** the agent applying these changes to the production site.
**From:** the staging build, where all seven items below are implemented, built green and verified.
**Source:** the client's seven-point note from the meeting with the Director, Principal and Vice Principal.

---

## 0. Read this first

There are two ways to do this job, and which one applies depends on a number you
can check in sixty seconds.

**Preferred — port the files.** Every item below is already implemented, built
and verified on staging. If production shares git history with staging, take the
changes across as commits or whole files rather than retyping them. Most of this
document then becomes a checklist you verify against, not work you redo.

**Fallback — re-implement from this spec.** If production is a separate
codebase, work through §4 item by item. Everything you need is here, including
the verbatim copy the school supplied. Treat the file paths as a description of
*what* changed, not as paths you will find.

**Stack (staging):** Astro 5, static output, `@astrojs/vercel` adapter, sharp
image pipeline. `npm run build` → **195 pages**.

> ⚠️ **If your build reports a different page count, production is not the same
> codebase and the "port the files" route does not apply cleanly.** A first pass
> on production built **187 pages** and had a seed/admin layer with
> `PRINCIPAL_MESSAGE` and `getLeaderMessage()`, neither of which exists on
> staging. Use the page count as the signal: same number → port; different
> number → re-implement from §4.

**Type checking — `tsc --noEmit` is not enough on its own.** It does not read
`.astro` files at all, so every component and page on this site is invisible to
it. On staging it reports **46 pre-existing errors** across four files — 25 in
`src/scripts/motion-gsap.ts` (untyped GSAP), 16 in `src/data/alumniMeets.ts` and
3 in `src/data/newsEvents.ts` (case-sensitive `.JPG` image imports that Vite
resolves fine at build time), and 2 in `src/data/sports.ts`. The build is green
with all 46 present, so treat the number as a "did I break a `.ts` file"
baseline and nothing more.

To type-check `.astro`, install `@astrojs/check` and run `npx astro check`. A
real example `tsc` missed on production: `getLeaderMessage` typed
`'director' | 'principal'` while the VP page passes `'vice-principal'` — fine at
runtime, invisible to `tsc`.

**Read §2 before you touch anything** and **read §5 before you debug anything.**
§5 is a list of traps that have each already cost real time here; they are not
general advice.

---

## 1. Assets you must copy by hand

A prompt cannot carry binary files. These must be moved across before the build
will succeed — Astro resolves them at build time and a missing import is a hard
failure, not a broken image.

| File | Used by |
|---|---|
| `src/assets/photos/vicePrincipal.jpeg` | Item 1 — the VP's portrait |
| `src/assets/scouts-and-guides/scouts-and-guides.jpeg` | Item 5 — first-aid practice |
| `src/assets/scouts-and-guides/scouts-and-guides-2.jpeg` | Item 5 — stave demonstration |
| `src/assets/scouts-and-guides/scouts-and-guides-3.jpeg` | Item 5 — troop assembled |
| `src/assets/scouts-and-guides/scouts-and-guides-4.jpeg` | Item 5 — Guides instruction circle |
| `src/assets/scouts-and-guides/scouts-and-guides-5.jpeg` | Item 5 — conclave, seated |
| `src/assets/scouts-and-guides/scouts-and-guides-6.jpeg` | Item 5 — conclave, standing |

Keep the filenames exactly as they are — they are the school's own and the
imports reference them directly.

---

## 1a. The content for items 2, 3 and 4 already exists — do not wait for it

This is worth stating plainly, because a first pass on production reported these
three items as blocked on the school. **They are not.** The school supplied the
content and it is transcribed, sourced and live on staging:

| Item | Content | Where it lives on staging |
|---|---|---|
| 2 · Alumni | 3 placed/working alumni with organisations, plus the 18-name *Vision To Reality* board as artwork | `src/data/alumni.ts` |
| 3 · Academic Excellence | 17 transcribed rows — Class X 2017-18→2025-26, Class XII 2018-19→2025-26 | `src/data/toppers.ts` |
| 4 · Student Council | Full senior and junior office-bearer lists, with houses | `src/data/studentCouncil.ts` |

Copy those three data files (or their contents) rather than asking the school
again. What *is* still outstanding for these items is listed in §7, and it is
much narrower: more placed/working alumni, the Exam In-charge details, and two
spelling confirmations.

Likewise, **NCC photographs are not missing.** The page carries four NCC frames
and six Scouts & Guides frames. The only genuinely absent NCC fact is cadet
strength.

---

## 2. Rules that are not negotiable

These come from the client's own written instructions and from the way this site
has been built throughout. Breaking any of them is worse than leaving an item
undone.

1. **Do not invent school information.** No names, dates, statistics,
   achievements, organisations, awards, affiliations, contact details or student
   records that are not in a supplied source. If a fact is missing, the page says
   nothing rather than something plausible.

2. **Preserve names exactly as officially published.** Student and staff names
   keep the school's spelling, including what looks like a typo. Two known cases
   on the Student Council page — `Head Perfect` (not "Prefect") and
   `Sarthak Goal` (not "Goel") — are the school's own spelling and are flagged
   for them to confirm. **Do not "fix" either one.**

3. **Client-supplied prose is verbatim.** The Principal's and Vice Principal's
   messages are signed by named people. Do not tighten, re-order, re-punctuate or
   shorten them. That includes the colon in "Our goal is simple:".

4. **Anything unverified is visibly temporary.** Use
   `src/components/ui/PendingBlock.astro`, never a plausible paragraph. Its body
   text is always future tense and always about the section — "Details will be
   updated here" is allowed, "The school runs three camps a year" is not.
   `grep -rn "PendingBlock" src` lists every outstanding item on the site.

5. **Item 6 is desktop-only.** The client's words: *"all these changes are for
   only desktop devices on mobile dont chnage any thing"*. The hero work is
   confined to `@media (min-width: 1024px)`. Verify this — see §6.

6. **Do not push to git** until the client has reviewed. Build, verify, stop.

---

## 3. What changed structurally

New routes to expect after this work:

- `/academics/class-corner/` — item 3
- `/beyond-academics/student-council/` — item 4
- `/beyond-academics/ncc-scouts-guides/` — item 5
- `/about/vice-principals-message/` — item 1

---

## 4. The seven items

### Item 1 · Leadership messages

**Client asked:** add/update the Vice Principal's message alongside the existing
leadership messages.

**Files:** `src/pages/about/vice-principals-message.astro`,
`src/pages/about/principals-message.astro`,
`src/components/home/PrincipalSpeak.astro`, all rendering through
`src/components/about/LeaderMessage.astro`.

#### The Principal's message

Previously a two-paragraph extract; the school supplied the full text and it now
runs whole, verbatim, signed `Mrs. Arpita Singh`. **Five paragraphs.**

**The pull quote is the opening sentence, lifted — not copied.** The school's
paragraph one begins *"At Sunbeam School Ballia, we believe that education is not
merely about imparting knowledge…"*. On staging that sentence is set as the pull
quote and `paragraphs[0]` holds **the remainder of paragraph one** (*"Guided by
the ethos of the Sunbeam Group…"*). Read the quote and `paragraphs[0]` back to
back and you have her first paragraph, whole and once.

> If instead you store paragraph one intact, the quote would print twice and you
> must drop it from that page — which is a legitimate choice, but note the Vice
> Principal's page uses the lift-don't-copy pattern, so dropping it on one page
> and keeping it on the other leaves the three leadership pages inconsistent.

#### The homepage band is an extract, and that is by design

`PrincipalSpeak.astro` carries the same pull quote plus **two shortened
paragraphs**, sized to the viewport, with a CTA to the full message.

> ⚠️ **There is a known drift bug here. Check for it.** An earlier draft of the
> homepage band was a *condensed rewrite* of paragraph two — it had quietly lost
> the words "focusing on", an Oxford comma, and the whole sentence beginning
> *"Our classrooms are places of curiosity and collaboration…"*. A paraphrase was
> printing on the homepage under a named Principal's signature. **This was found
> and fixed on staging on 17 Sep 2026; if production never received that fix, it
> is still live there.**

**The rule that prevents it: extracting means dropping whole sentences, never
editing one.** If the extract must get shorter, remove a sentence; do not trim
one.

**How to enforce it.** A build-time guard asserting that *every homepage
paragraph appears verbatim inside some full-message paragraph* is the right
check: it forbids paraphrase while still permitting a genuine extract. Staging
passes it today — measured, both extract paragraphs are exact prefixes of full
paragraphs 2 and 4 (277 of 446 characters, and 117 of 350).

> Deriving the homepage copy by index instead (`PRINCIPAL_MESSAGE[1]` and `[3]`)
> also kills the drift, but it changes the design: it puts paragraphs 2 and 4 on
> the homepage **whole**, roughly 2.2× the copy the band was laid out for. If you
> take that route, re-check the band at 1440px and 390px for overflow.

#### The Vice Principal's message

New. The copy, verbatim:

> Pull quote (the school sent this as the message's first line, in quotation
> marks — it is set as the quote and does **not** repeat in the body):
>
> *"Education should challenge the mind, strengthen character, and give every
> child the resilience to rise after every setback."*
>
> Paragraph 1: At Sunbeam School Ballia, my focus is to build a culture of
> academic excellence, active learning and continuous growth. I believe
> classrooms should be democratic spaces where students are heard, respected and
> encouraged to question, participate and think independently.
>
> Paragraph 2: Our goal is simple: strong academics, confident learners and
> resilient young minds ready to face the future.

Signed **Mr. Pankaj Singh**, *Vice Principal, Sunbeam School Ballia*. Portrait:
`src/assets/photos/vicePrincipal.jpeg`.

**Credentials**, printed under the signature as three lines:

```
M.Sc. (Chemistry)
BCS, Career Counsellor
B.Ed & PGDYO
```

Two points about that list that matter:

- The school sent `M.Sc.(Chemistry)` and `BCS , Career Counsellor`. The only
  edits are a space after the full stop and the removal of the space before the
  comma. **`BCS` and `PGDYO` are deliberately not expanded** — nobody has
  confirmed what they stand for, and guessing in print beside a named person's
  name is not acceptable here.
- The CBSE mandatory public disclosure (`src/data/disclosure.ts`, row 19) records
  this post holder's qualification as the bare string `M.Sc.`. The supplied list
  **expands** that, which is the only reason it is safe to print over a signed
  statutory document. The page carries a **build-time guard** that throws if a
  future filing ever disagrees. Keep the guard; do not delete it to make a build
  pass.

The page also carries a separate, verified Leadership section — the three post
holders and the teaching-staff figures, all transcribed from the CBSE filing.
That is not part of the message and is not the school's prose.

---

### Item 2 · Alumni section

**Client asked:** two separate categories — students placed/working, and students
pursuing higher education.

**Files:** `src/data/alumni.ts`, `src/components/alumni/AlumniPage.astro`, route
`/alumni/`. **The data exists — see §1a.**

Under the heading **"Where our students went"** there are two labelled categories
with counts:

- **Students placed & working** — 3 named alumni with their organisations.
- **Students pursuing higher education** — 18, presented as the school's printed
  *"Vision To Reality — Session 2024-25, Students Placed In Prestigious
  Colleges/Universities"* board.

**The 18 higher-education names are shown as artwork, not as text, and that is
deliberate.** The school supplied them as a printed board. Transcribing 18 named
children into searchable text is a decision the school has to make, not us — it
is requested and still open (`docs/07` → A11). The board carries full alt text so
the content is not lost to a screen reader. **Do not transcribe those names.**

Also removed in this work: a **"More alumni stories coming soon"** tile, at the
client's request, on the alumni page only.

---

### Item 3 · Academic section — Class Corner

**Client asked:** Class Teacher Details · Class Timetable · Student Monitors'
List · Exam In-charge Details · Academic Excellence/Achievements.

**Files:** `src/data/classCorner.ts`, `src/components/academics/ClassCornerPage.astro`,
`src/pages/academics/class-corner.astro`, `src/data/toppers.ts`,
`src/components/academics/Toppers.astro`. Route `/academics/class-corner/`.
**The toppers data exists — see §1a.**

**Four of the five are live**, each linking to the school's own published file:

| Card | Links to |
|---|---|
| Class Teachers | the school's `class-teacher-updated.pdf` |
| Class Timetable | the school's `/class-timetable/` page |
| Student Monitors | the school's `monitors-26-27.pdf` |
| Examination Schedule | the school's published schedule image |

**Exam In-charge has no card.** The school has published nothing — no name, no
designation, no contact. The client asked on 19 Sep for the empty placeholder to
come off rather than stand there saying so. Tracked as `docs/07` → A14.

**Academic Excellence is its own full-width section below the cards**, not a card
in the grid. The client had the card removed because the section already does the
job. It renders the school's two mounted toppers boards as a real `<table>`,
transcribed row for row from a photograph the client supplied:

- **Class X**, 9 sessions, 2017-18 → 2025-26.
- **Class XII**, 8 sessions, 2018-19 → 2025-26.
- Section id is `#academic-excellence`. Nothing links to it any more, but keep
  the id — it is a public anchor someone may have shared.

Three rules on that data, all recorded in `src/data/toppers.ts`:

- **It is a table because it is a table.** The source is a ruled board with three
  columns. Cards would break the column alignment and a screen reader would lose
  the session/name/mark relationship.
- **The board's empty future rows (2026-27 onward) are not reproduced.** An empty
  row on a wall is a promise; on a web page it reads as missing data.
- **No comparative claim appears anywhere.** The highest mark on each board is
  highlighted — that is arithmetic on the board's own numbers. The client
  mentioned a "continuous district topper" record; **no wording for it has been
  confirmed, so no such sentence is on the site.** Do not add one.

Two transcription flags to carry across:

- Class XII 2022-23, **Sandhya Yadav**, reads `97 40` on the board — the decimal
  is not legible in the photograph. Stored as `97.40` with `check: true`, which
  renders an asterisk and a footnote. **Awaiting the school's confirmation.**
- Class X 2024-25 is **one row with two names** — `ANANYA TIWARI & SHREYA YADAV`,
  both at 98.20. The board gives them the session jointly. Do not split them into
  two rows with a rank between them.

**Navigation:** Class Corner sits at **column level** under Academics. It was
originally nested a level deeper, which made it invisible on mobile — see §5.5.

---

### Item 4 · Student Council

**Client asked:** a separate Student Council section under the Academic/School
Activities area.

**Files:** `src/data/studentCouncil.ts`,
`src/components/beyond/council/StudentCouncilPage.astro`, route
`/beyond-academics/student-council/`. **The names exist — see §1a.**

**It lives under Beyond Academics and is NOT cross-listed under Academics.** It
was briefly in both. The client's response was explicit — *"it need only one
place not two difference places"* — and they confirmed Beyond Academics as the
right home: office-bearers are school life, not a subject. The final agreed
navigation is:

- **Academics → Class Corner**
- **Beyond Academics → Student Council**

Content is the school's own list of senior and junior office-bearers, including
the three houses (Red, Yellow, Green). Remember rule 2 about `Head Perfect` and
`Sarthak Goal`.

---

### Item 5 · Beyond Academics — NCC and Scout & Guide

**Files:** `src/data/uniformedGroups.ts`,
`src/components/beyond/groups/UniformedGroupsPage.astro`,
`src/pages/beyond-academics/ncc-scouts-guides.astro`. Route
`/beyond-academics/ncc-scouts-guides/`.

Both groups are full sections. Read the header of `src/data/uniformedGroups.ts`
before changing a word of it — it records, line by line, which source each fact
came from.

#### NCC

Sourced from the school's **own website** (`/about-us/` and `/event-chronicles/`),
not from anything new:

- First in the district to hold `'A'` and `'B'` certificate affiliation — **the
  school's own claim, and the page attributes it that way.**
- NCC `'A'` certificate · 90 UP Battalion. NCC `'B'` certificate · 93 UP Battalion.
- Two Associate NCC Officers, trained on the PRCN 180 course at the NCC Officer
  Training Academy, Kamptee, Nagpur.
- Officers, as the school prints them: **Lt. Pankaj Singh**, **Lt. Rajendra Singh**.
- On the record: CATC-283 hosted at the school, 20–29 May 2025; both certificate
  enrolments, with the commanding officers named; Rakshabandhan with 93 UP BN.
- **Four photographs** from existing asset drops.

**Two things the page deliberately does not say.** The school names "ANO Lt.
Pankaj Singh" as an officer and its Vice Principal is Pankaj Singh — very
probably the same person, but no published source says so and the site does not
assert it. And the two sources disagree on rank ("Third Officer" vs
"Lieutenant"); both are reported as they stand rather than reconciled.

#### Scouts & Guides

This section was a total blank until the school supplied a press note and six
photographs. **Two of those photographs contain the event banner, and that banner
is the primary source** — it was cropped and enlarged 4× before anything was
typed from it. It reads:

> भारत स्काउट और गाइड, उत्तर प्रदेश · जनपद- बलिया
> केन्द्रीय माध्यमिक शिक्षा बोर्ड से मान्यता प्राप्त विद्यालयों की बैठक
> मुख्य अतिथि- मा० नौशाद अली सिद्दीकी (सहायक प्रादेशिक संगठन आयुक्त, मण्डल- आजमगढ़)
> दिनांक- **14 अक्टूबर 2022** · स्थान- सनबीम स्कूल, अगरसण्डा- बलिया

So **the date, the organisation, the venue and the chief guest are photographed,
not reported** — they can be stated flat. The four facts on the page:

1. **Bharat Scouts & Guides · Janpad Ballia** — the troop trains with the Ballia
   district association of the Bharat Scouts & Guides, Uttar Pradesh.
2. **Host of the district CBSE meeting** — held here on 14 October 2022, at
   Agarsanda.
3. **A first, in the school's own words** — *"The school describes that meeting
   as the first of its kind held to bring CBSE schools into the Scouts & Guides
   programme."* **Keep the attribution.** It is a claim about other schools in
   the district and it is not verified.
4. **Six-day outdoor camp** — run by instructors under the supervision of school
   staff.

On the record: the district meeting (with the chief guest named from the banner),
and the six-day camp — first aid, outdoor survival technique and pitching tents,
taught through group drills and joint problem-solving.

**Three editorial decisions to carry across, not re-litigate:**

- **The press note's adjectives are gone.** It ran to "monumental milestone",
  "prestigious", "rigorous", "impeccable discipline" and "profound gratitude".
  What a school says about its own camp in a press release is not a fact about
  the camp. The verbs and the nouns survived; the marketing did not. **Do not put
  it back.**
- **The camp has no date and none is invented.** The note says "6-Day" and says
  it concluded. It gives no start date, no month, no year. The page says
  "six-day" and stops.
- **Captions describe the frame, not the event.** Four of the six photographs
  show training in the school yard and are very probably the camp — "very
  probably" is not a caption. Only the two conclave photographs name an event,
  and only because the banner naming it is inside the frame.

**No Scout leader is named.** Leaders appear in five of the six photographs and
not one is identified anywhere. The only person named in the section is the chief
guest, because his name is on the banner.

**Layout note:** the photo grid picks its column count from the photo count —
four frames sit as one row of four, six as two rows of three. Hard-coding four
gives the six-photo group a row of four and an orphaned pair.

**Four things move together** on this page and each carries a note pointing at
the others: the group in `uniformedGroups.ts`, the page's two titles, its meta
description, and the nav label in `navigation.ts`. The label is
`"NCC, Scouts & Guides"`. If you ever narrow one, do all four.

---

### Item 6 · Homepage — video / text overlay

**Client asked:** transparent overlay with no solid text box; marquee/scrolling
format if suitable; background clearly visible; text must not hide the school
building.

**File:** `src/components/home/Hero.astro`.

> ⚠️ **Desktop only.** The client's instruction was *"all these changes are for
> only desktop devices on mobile dont chnage any thing"*. Everything below is
> inside `@media (min-width: 1024px)`. Mobile was verified unchanged by pixel
> diff against a pre-change build — see §6.

What the desktop hero does now:

- **The video runs full-bleed and uncovered.** The old tinted overlay and scrim
  (`.hero__tint`, `.hero__scrim`) are `display: none` at this breakpoint, so
  nothing washes the footage.
- **The copy moved off the video into a floating panel** that sits below the
  video and overlaps its foot by −70px, max-width 1200px, on a cream ground
  (`#fffdf9`) that matches the section beneath. This is what stops the text
  covering the building: the text is no longer over the building at all.
- **In-video UI keeps a measured gradient foot** — it was verified by controlled
  toggle on a frozen frame that the gradient does not reach the building
  (measured delta 0.00000).
- **The motto scrolls; the headline and deck do not.** The client asked for the
  overlay message to move so less of it stands over the building, and chose the
  motto alone. `DUTY · DEVOTION · DISCIPLINE` runs as a marquee on desktop.

Three implementation details that are load-bearing:

- **The marquee line is repeated four times, and copies 2–4 are `aria-hidden`.**
  A marquee needs more content than its track is wide or it scrolls a gap; a
  screen reader must hear the motto once.
- **It stops for people who ask it to — WCAG 2.2.2.** Moving content running over
  five seconds needs a way to stop. `prefers-reduced-motion` halts it into a
  static line; hover and keyboard focus pause it. **Do not remove either rule.**
- **On mobile the marquee is switched off deliberately**, not by omission. The
  column is too narrow and the edge fades eat ~110px each side, so the full motto
  could never be visible at once — it showed a fragment at both edges and never a
  complete line. It sits as a static line instead. The client's brief said a
  marquee *"if suitable"*; at that width it is not.

**One open question for the client:** the hero work changed exactly one thing on
mobile — the CTA now reads **Admissions** rather than **Discover Our Campus**.
Confirm which they want.

---

### Item 7 · Subject updates

**File:** `src/data/academics.ts`. Renders on `/academics/structure/` and
`/academics/structure/subject-combinations/`.

| Client's instruction | What to change |
|---|---|
| Additional: replace Fine Art with Painting | `streamAdditional` — `'Fine Arts'` → `'Painting'` |
| Additional: add Yoga | `streamAdditional` — append `'Yoga'` |
| Optional: add Sanskrit | `streamOptional` — append `'Sanskrit'` |
| Humanities: replace Geography with Economics | Humanities `core` → `['History', 'Political Science', 'Economics', 'English']` |

The Humanities line needed a second pass and this is the part most likely to be
got wrong. Economics replaced Geography in the Humanities **core**, but Geography
then stayed visible on the Humanities card because it is *also* in the shared
**optional** list. The client confirmed — *"as instruction only remove from
humanities"* — so:

```ts
export const humanitiesOptional = streamOptional.filter((s) => s !== 'Geography');
```

and the Humanities stream uses `humanitiesOptional` instead of `streamOptional`.

**Two things to get right here:**

- **Do not delete Geography from `streamOptional`.** That would withdraw it from
  PCM, PCB and Commerce, which nobody asked for. The expected result is Geography
  visible on three stream cards and absent from Humanities.
- **It is derived, not retyped.** Writing the five remaining names out again is
  exactly how the next revision gets applied to one list and not the other.

**One caveat worth passing back to the school.** This re-introduces a per-stream
difference the school itself withdrew — they first sent lists that differed per
stream, then replaced them with one shared pair. No source says Geography is
unavailable to a Humanities student; it is gone because the client asked. If the
school ever queries why the site differs from the list they supplied, that is the
answer.

---

## 4a. Contact page — the message field

Not one of the seven items, but fixed in the same pass and worth porting.

**File:** `src/pages/contact-us.astro`.

**The contact form had no message box.** It was built to a client reference
layout of four short fields in a 2×2 grid, so the page offered *"a message form
that reaches the office"* and gave a parent nowhere to write the message. A
`Message` textarea has been added, required, with its own validation rule.

**The visible symptom was a different one.** The address panel beside the form
runs to eight departments and is ~1000px tall; the grid stretches both columns to
match, so the form showed roughly **530px of blank card** between the Class row
and the consent line, which read as a broken layout. The missing field was the
cause, and adding it fixed both.

Two implementation notes:

- The textarea is `flex: 1 1 auto` inside the form's flex column with a
  `min-height` floor, so it absorbs whatever slack the column has. Nothing is
  tuned to the panel's current height — adding or removing a department cannot
  reopen the gap, and on mobile the field simply sits at its floor.
- The row rule is written `.ct__row.ct__row--grow`, doubled **for specificity**.
  `.ct__row` is given two columns inside `@media (min-width: 700px)` later in the
  same stylesheet; a single class ties on specificity and loses on source order,
  which rendered the message box at half the card's width. Do not "tidy" it.

Validation was extended with a `cf-message` rule, and the three RULES-driven
lookups are now typed `HTMLInputElement | HTMLTextAreaElement`. The form still
has no backend — `ENDPOINT` is empty and a submit says so plainly rather than
claiming a false success.

---

## 5. Traps — read before you debug

Each of these has already cost time on this project.

**5.1 · Testing with `reducedMotion: 'reduce'` hides a real bug.** This is the
expensive one — it caused the same section-overlap issue to be reported by the
client **three times** and "verified fixed" twice. `PageHero` is
`position: sticky; top: 0; z-index: 0`, but it reverts to `position: relative`
under `prefers-reduced-motion: reduce`. The overlap **cannot occur in that
state**. Default screenshot captures on this project run with reduced motion for
stability, so the bug was in almost every screenshot and invisible in every
measurement. **Test stacking with motion enabled.** Also test at the *section
heading*, not at the cards 260px below it — that was the second failed
verification.

**5.2 · Every section under a `PageHero` needs `position: relative; z-index: 1`
and an opaque background.** `isolation: isolate` alone is not enough, and neither
is tree order. A positioned sibling at `z-index: auto` only wins by tree order,
which breaks the moment anything between them creates a stacking context. Use the
`u-page-panel` pattern, or set it explicitly — `Toppers.astro`, `.vpl` and
`.ung` all carry an explicit `z-index: 1` for exactly this reason.

**5.3 · Astro scoped styles do not reach a child component's `<img>`.** The
`<img>` inside `<Picture>` never receives the parent's `data-astro-cid`, so a
plain `.foo img { … }` compiles to a selector matching nothing on the page.
Measured consequence: photos rendered **1066px tall in a 291px column**. Fix with
`:global()` **anchored on an element the component itself renders** —
`.ung__shots :global(img)`. Never write a bare `:global(img)`.

**5.4 · `aspect-ratio` is ignored when the height is definite.** `<Picture>` emits
`width` and `height` *attributes*, which are presentational hints that map to CSS
height. `aspect-ratio` computes correctly and does nothing. Set `height: auto` to
release the hint.

**5.5 · `MobileNav` renders `item.columns.flat()` and never descends into
`children`.** A nav entry nested one level deeper than column level is
**desktop-only and invisible on a phone**. This is how Class Corner shipped
initially unreachable on mobile. Anything the client asks for in the menu goes at
column level.

**5.6 · `/_vercel/image` 404s locally and black hero banners are local-only.**
That endpoint only resolves on Vercel. Broken images in local preview are
expected and are not a regression — do not "fix" them.

**5.7 · `FacIcon` falls back to a plain dot on an unknown icon name, silently.**
No error, no warning. If an icon looks wrong, check the name against the
vocabulary first.

**5.8 · A `padding` shorthand written after `padding-inline-end` resets it.**
This silently zeroed a decoration gutter in the hero and dropped artwork on top
of a button. Put directional padding *after* the shorthand.

**5.9 · GSAP's reveal filter skips above-the-fold elements.** `belowFold` tests
`el.getBoundingClientRect().top > window.innerHeight * 0.92`, so `data-reveal` on
a hero never fires. Hero entrance animation must be CSS keyframes.

**5.10 · Watch out for EMFILE: too many open files.** Caused by `astro dev`
watching `dist/`. Stop dev, `rm -rf dist .vercel`, rebuild.

**5.11 · Duplicated prose drifts, always.** Two hand-typed copies of the same
message will diverge, and on this site one already had — a paraphrase of the
Principal's paragraph two was live on the homepage under her signature. Wherever
the same copy appears twice, derive one from the other or add a guard. See Item 1.

**5.12 · A later media query beats an equal-specificity modifier.** A `--grow`
style modifier written alongside its base class, with the base class also set
inside a `@media` block further down the file, loses on source order and does
nothing. Double the class (`.ct__row.ct__row--grow`) rather than moving rules
around. See §4a.

---

## 6. Verification before you hand back

Run these. Do not report done on a build alone.

**Build health**
- [ ] `npm run build` completes. Note the page count and compare with §0.
- [ ] `npx tsc --noEmit` reports **46 errors** (25 motion-gsap, 16 alumniMeets,
      3 newsEvents, 2 sports — all pre-existing). More than 46 means you
      introduced one in a `.ts` file.
- [ ] `npx astro check` (install `@astrojs/check` first). **This is the one that
      reads `.astro` files.** `tsc` alone does not.

**Item 1 — no paraphrase anywhere**
- [ ] Every homepage Principal paragraph appears **verbatim** inside some
      paragraph of the full message. Assert it in the build if you can.
- [ ] The pull quote appears **once** per page — not in the quote slot and again
      in the body.

**Item 6 — mobile must be untouched**
- [ ] Pixel-diff the homepage at 390×844 against a build from before your hero
      changes. The **only** expected difference is the CTA label band. Any other
      differing region is a bug.
- [ ] At 390px the motto is a **static** line, not a marquee.
- [ ] At ≥1024px the marquee runs, pauses on hover and on keyboard focus, and
      stops entirely under `prefers-reduced-motion: reduce`.

**Stacking — with motion ENABLED, not reduced**
- [ ] Scroll `/academics/class-corner/`, `/beyond-academics/ncc-scouts-guides/`
      and `/about/vice-principals-message/` end to end. The banner must never
      show through a section, **especially at the section heading**.
- [ ] A useful check: sample `document.elementFromPoint` across ~20 scroll
      positions and assert the hero is never on top inside a section's bounds.

**Content spot-checks**
- [ ] Humanities shows `History · Political Science · Economics · English` and
      **no Geography** in either list; PCM, PCB and Commerce **do** show Geography.
- [ ] `Painting` appears and `Fine Art` / `Fine Arts` appears nowhere.
- [ ] `Yoga` and `Sanskrit` both render.
- [ ] The VP page shows all three credential lines and the portrait.
- [ ] `/beyond-academics/ncc-scouts-guides/` renders both `#ncc` and
      `#scouts-guides`, ten photographs total, and the nav label reads
      `NCC, Scouts & Guides`.
- [ ] Student Council appears under Beyond Academics **only** — grep the built
      nav to confirm it is not also under Academics.
- [ ] Class Corner is reachable in the **mobile** menu.
- [ ] `/contact-us/` has a full-width Message field, no blank gap above the
      consent line at 1440px, and the field validates when empty.

**Accessibility**
- [ ] No heading-level skips (h1→h3). A sweep previously found 93 of 203 pages
      affected, caused by the footer's only heading being `h3`; it is fixed and
      should stay at zero.

**Then stop.** Do not push.

---

## 7. Do not fill these in

These are genuinely unknown. Leaving them blank is correct; a plausible guess is
the failure mode. All are tracked in `docs/07-client-asset-requests.md`.

| Gap | Ref |
|---|---|
| NCC cadet strength — searched all 67 pages of the school's site, no count anywhere | A13 |
| The Scouts & Guides camp's dates, and the Scout leaders' names | A13 |
| Whether "ANO Lt. Pankaj Singh" is the same person as the Vice Principal | A13 |
| Examination In-charge — name, designation, contact | A14 |
| More placed/working alumni, with consent | A11 |
| Approval to transcribe the 18 *Vision To Reality* names as searchable text | A11 |
| Confirmation of `97.40` for Sandhya Yadav — decimal illegible on the board | A14 |
| Exact wording for the "continuous district topper" claim | A14 |
| The inter-house fixture calendar | A15 |
| The Mission statement (the Vision is supplied and live) | A3 |
| Whether the school offers scholarships, and on what basis | A16 |
| Confirmation of the `Head Perfect` and `Sarthak Goal` spellings | — |

**Not on this list, and not blocked:** the alumni categories, the toppers boards
and the Student Council names. See §1a — that content is supplied and transcribed.

---

## 8. Questions to put back to the client, not decide yourself

1. **Mobile CTA** — keep **Admissions**, or restore **Discover Our Campus**? This
   is the single mobile-visible change from the item 6 work.
2. **Toppers asterisk** — confirm `97.40` for Sandhya Yadav so the footnote can
   come off.
3. **"Continuous district topper"** — the client mentioned this record but no
   wording has been agreed, so nothing is published. Get the sentence in writing.
4. **Vice Principal's photograph** — confirm whether the current portrait is the
   one they want, or whether a newer file is coming.
5. **Principal's pull quote** — if production drops it from
   `/about/principals-message/`, confirm that is wanted, since the Vice
   Principal's page keeps its equivalent.
