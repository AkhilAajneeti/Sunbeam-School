# Change set — 21 September 2026

**For:** the agent applying these changes to the production site.
**Companion to:** `docs/09-production-update-prompt.md`, which is the full
seven-item brief. **This file is the delta only** — four changes made after that
brief was written. If you have not seen `09` yet, read it first; §2 of it
(the non-negotiable rules) governs everything here too.

**Staging commit:** `869cd1c` — *"update new data"*, 16 files, +1224 / −97.
If production shares git history, cherry-pick it and use this file as the
review checklist. If not, work through §1–§4 below.

**Build state after these changes:** 195 pages, green. `npx tsc --noEmit`
reports the unchanged baseline of 46 pre-existing errors (25
`src/scripts/motion-gsap.ts`, 16 `src/data/alumniMeets.ts`, 3
`src/data/newsEvents.ts`, 2 `src/data/sports.ts`).

---

## The four changes

| # | What | Files |
|---|---|---|
| 1 | **Scouts & Guides restored** with real content and six photographs | 6 images + 6 source files |
| 2 | **Vice Principal's qualifications** published | 1 |
| 3 | **Contact form's missing Message field** added | 1 |
| 4 | Stale warning comment corrected on Class Corner | 1 |

---

## 1 · Scouts & Guides — restored (the main change)

The section had been removed from the page on 19 Sep because the school had
published nothing about scouting anywhere. On 21 Sep they supplied a press note
and six photographs, so it is back as a full sibling to NCC — solid card, four
facts, an "On the record" list, and all six frames.

### 1.1 · Copy these six binary files first

A prompt cannot carry them, and Astro fails the build on a missing import rather
than degrading to a broken image.

```
src/assets/scouts-and-guides/scouts-and-guides.jpeg     → first-aid practice
src/assets/scouts-and-guides/scouts-and-guides-2.jpeg   → stave demonstration
src/assets/scouts-and-guides/scouts-and-guides-3.jpeg   → troop assembled
src/assets/scouts-and-guides/scouts-and-guides-4.jpeg   → Guides instruction circle
src/assets/scouts-and-guides/scouts-and-guides-5.jpeg   → conclave, seated
src/assets/scouts-and-guides/scouts-and-guides-6.jpeg   → conclave, standing
```

Keep the filenames exactly — they are the school's own and the imports reference
them directly.

### 1.2 · Where every fact came from

Two sources, and the split matters because it decides what may be stated flat and
what must be attributed.

**① The event banner, photographed inside frames 5 and 6.** A primary document,
not a claim. It was cropped and enlarged 4× before anything was typed from it:

> भारत स्काउट और गाइड, उत्तर प्रदेश · जनपद- बलिया
> केन्द्रीय माध्यमिक शिक्षा बोर्ड से मान्यता प्राप्त विद्यालयों की बैठक
> मुख्य अतिथि- मा० नौशाद अली सिद्दीकी (सहायक प्रादेशिक संगठन आयुक्त, मण्डल- आजमगढ़)
> दिनांक- **14 अक्टूबर 2022** · स्थान- सनबीम स्कूल, अगरसण्डा- बलिया

So **the date, the organisation, the venue and the chief guest are photographed,
not reported.** They can be stated as fact.

**② The school's press note.** The six-day camp, what was taught, and the claim
that the 2022 meeting was the first of its kind. That last one is **attributed**
in the copy, for the same reason the NCC "first in the district" fact is: it is
the school's assertion about other schools and it is not verified.

### 1.3 · `src/data/uniformedGroups.ts`

Add six image imports and a second entry to the `groups` array, after NCC.

**Standfirst:**

> Scouting and guiding at the school runs with the Ballia district association of
> the Bharat Scouts & Guides, Uttar Pradesh — which held its meeting of the
> district's CBSE-affiliated schools on this campus on 14 October 2022.

**Four facts:**

1. **Bharat Scouts & Guides · Janpad Ballia** — *The troop trains with the Ballia
   district association of the Bharat Scouts & Guides, Uttar Pradesh.*
2. **Host of the district CBSE meeting** — *The association's meeting for
   CBSE-affiliated schools was held here on 14 October 2022, at Agarsanda.*
3. **A first, in the school's own words** — *The school describes that meeting as
   the first of its kind held to bring CBSE schools into the Scouts & Guides
   programme.* ← **keep "The school describes". Do not strip it.**
4. **Six-day outdoor camp** — *Students completed a six-day Scouts and Guides
   outdoor camp, run by instructors under the supervision of school staff.*

**Two `record` entries:**

- **Meeting of the district's CBSE-affiliated schools** — *Held at the school on
  14 October 2022 by the Bharat Scouts & Guides, Uttar Pradesh, Janpad Ballia.
  The banner names the chief guest as Naushad Ali Siddiqui, Assistant State
  Organisation Commissioner for the Azamgarh division, and welcomes the
  principals and representatives attending.*
- **Six-day Scouts and Guides outdoor camp** — *First aid, outdoor survival
  technique and pitching tents, taught through group drills and joint
  problem-solving. The school reports the camp concluded successfully.*

**Six photos**, in this order — conclave first, then the training frames:

| File | Caption |
|---|---|
| `-5` | The district meeting for CBSE schools, 14 October 2022 |
| `-6` | Officers and school representatives at the meeting |
| `-3` | The troop assembled in the school yard |
| `-2` | A stave held up for the troop to see |
| `-4` | An instruction session, with the Guides seated in a circle |
| *(base)* | First aid — a bandage tied in practice |

`missing: []`, matching NCC — the client asked on 19 Sep for the "what the school
has not published" chips to come off this page. The gaps are still real and still
tracked in `docs/07` → A13.

### 1.4 · Four editorial decisions — carry them across, do not re-litigate

- **The press note's adjectives are gone.** It ran to "monumental milestone",
  "prestigious", "rigorous", "impeccable discipline" and "profound gratitude".
  What a school says about its own camp in a press release is not a fact about the
  camp. The verbs and the nouns survived; the marketing did not.
- **The camp has no date and none is invented.** The note says "6-Day" and says it
  concluded — no start date, no month, no year. The page says "six-day" and stops.
- **Captions describe the frame, not the event.** The four yard-training frames
  are very probably the camp; "very probably" is not a caption. Only the two
  conclave photographs name an event, and only because the banner naming it is
  inside the frame.
- **No Scout leader is named.** Leaders appear in five of the six photographs and
  none is identified anywhere. The only person named in the section is the chief
  guest, because his name is on the banner.

### 1.5 · `src/components/beyond/groups/UniformedGroupsPage.astro`

Three changes, all of which matter:

**(a) The photo grid picks its column count from the photo count.** NCC has four
frames and sits as one clean row of four; scouting has six and sits as two rows of
three. Hard-coding four gave the six-photo group a row of four and an orphaned
pair.

```ts
const photoCols = (n: number) => (n % 3 === 0 ? 3 : 4);
const shotCols  = (g: UniformedGroup) => photoCols(g.photos?.length ?? 4);
const shotSizes = (g: UniformedGroup) =>
  `(max-width: 599px) 90vw, (max-width: 1023px) 44vw, ${shotCols(g) === 3 ? '31vw' : '23vw'}`;
```

The `<ul>` carries `style={`--ung-shot-cols:${shotCols(g)}`}` and the CSS reads
`grid-template-columns: repeat(var(--ung-shot-cols, 4), minmax(0, 1fr))`.

> ⚠ **Both helpers take the group, not the count, deliberately.** `photos` is
> optional. TypeScript narrows `g.photos` at the `g.photos && g.photos.length > 0`
> guard, but **that narrowing is lost inside the `.map()` callback underneath it**
> — the compiler cannot know the callback runs immediately. Reading the length off
> the group keeps the template free of a non-null assertion.

> ⚠ **`sizes` has to track the column count** or the srcset picks the wrong file.
> A three-column row is a wider frame than a four-column one; leaving the desktop
> entry at 23vw hands the browser a 360px source for a box nearer 380px.

**(b) `.ung` gained an explicit `z-index: 1`.** `PageHero` above is
`position: sticky; z-index: 0`. A positioned sibling at `z-index: auto` only wins
by tree order. It was **measured as safe before the line was added** — 25 scroll
positions, banner on top at none of them — so this is hardening, not a fix, added
because the page just doubled in length. It changes nothing visually:
`isolation: isolate` was already containing the decorative blobs at `z-index: -1`.

**(c) The "What the school has not published" block is guarded on length** —
`{g.missing.length > 0 && (…)}`. Without it, emptying `missing` leaves the heading
standing over nothing.

The footer line was widened back from "For NCC enrolment" to "For NCC or Scouts &
Guides enrolment".

### 1.6 · The other three files

- **`src/pages/beyond-academics/ncc-scouts-guides.astro`** — page title, hero
  title, standfirst and meta description widened from NCC-only to
  **"NCC, Scouts & Guides"**. The route never changed, which is why neither the
  removal nor the restoration needed a redirect.
- **`src/data/navigation.ts`** — nav label `"NCC"` → `"NCC, Scouts & Guides"`;
  description → *"Certificate affiliation, officers, camps and the district
  meeting."*
- **`src/data/site.ts`** and **`docs/07`** — `A13` narrowed. It used to end
  *"AND any record at all of Scouts & Guides, which is published nowhere"*. It now
  reads: *NCC cadet numbers; and for Scouts & Guides, the dates of the six-day
  camp and the names of the Scout leaders who ran it.*

> ⚠ **Four things move together on this page** and each carries a note pointing at
> the others: the group in `uniformedGroups.ts`, the page's two titles, its meta
> description, and the nav label. They have now been narrowed and widened once
> each. If you touch one, do all four.

---

## 2 · Vice Principal's qualifications

**File:** `src/pages/about/vice-principals-message.astro`

The message and portrait were already live. The school supplied the
qualifications on 21 Sep; they now print under the signature as three lines:

```
M.Sc. (Chemistry)
BCS, Career Counsellor
B.Ed & PGDYO
```

**Two things that matter:**

- **The only edits are two characters.** The school sent `M.Sc.(Chemistry)` and
  `BCS , Career Counsellor` — a space added after the full stop, the space before
  the comma removed. **`BCS` and `PGDYO` are deliberately not expanded.** Nobody
  has confirmed what they stand for, and guessing in print beside a named person's
  name is not acceptable.
- **This replaces a value from a signed statutory document, so it is guarded.**
  The CBSE mandatory public disclosure (`src/data/disclosure.ts`, row 19) records
  the qualification as the bare string `M.Sc.`. The supplied list *expands* that
  rather than contradicting it, which is the only reason it is safe to print. A
  build-time check enforces it:

```ts
const filedQual = vp?.qualification?.trim();
if (filedQual && !vpCredentials[0].startsWith(filedQual)) {
  throw new Error(/* … re-confirm with the school before building … */);
}
```

**Keep the guard.** If a future filing records a different degree the build stops,
instead of quietly preferring an email over a statutory document. Do not delete it
to make a build pass.

**Note:** no new portrait file arrived. The existing
`src/assets/photos/vicePrincipal.jpeg` is still in use. If the school sends a
newer photograph, that is a separate change.

---

## 3 · Contact form — the missing Message field

**File:** `src/pages/contact-us.astro`

**The form had no message box.** It was built to a client reference layout of four
short fields in a 2×2 grid, so the page offered *"a message form that reaches the
office"* and gave a parent nowhere to write the message.

**The visible symptom was different, and that is why this was reported as a design
bug.** The address panel beside the form runs to eight departments and is ~1000px
tall; the grid stretches both columns to match, so the form showed roughly
**530px of blank card** between the Class row and the consent line. The missing
field was the cause; adding it fixed both.

### What to add

A full-width required `<textarea id="cf-message" name="message" rows="5"
placeholder=" ">` in its own `.ct__row.ct__row--grow`, using the same `.fld`
floating-label pattern as the other fields, placed after the City/Class row and
before `.ct__consent`.

**The sizing mechanism:**

```css
.ct__row.ct__row--grow { flex: 1 1 auto; grid-template-columns: minmax(0, 1fr); }
.fld--grow      { display: flex; flex-direction: column; min-height: 0; }
.fld__in--area  { flex: 1 1 auto; min-height: 118px; resize: vertical; }
```

The textarea absorbs whatever slack the column has. Nothing is tuned to the
panel's current height, so adding or removing a department cannot reopen the gap,
and below ~1000px the columns stack and the field simply sits at its floor.

### Three traps hit while doing this

> ⚠ **The doubled class is the fix, not a style choice.** `.ct__row` is given two
> columns inside `@media (min-width: 700px)` **later in the same stylesheet**. A
> single `.ct__row--grow` ties on specificity (0,1,0) and loses on source order —
> the message box rendered at half the card's width with dead space beside it.
> `.ct__row.ct__row--grow` is (0,2,0) and wins wherever it sits. **Do not tidy it
> back to one class.**

> ⚠ **The textarea's own focus/invalid rules must sit *after* the shared
> `.fld__in:focus` block**, or the generic rule wins on source order.

> ⚠ **A JSX comment cannot sit between attributes.** `{/* … */}` in an attribute
> list is a parse error ("unterminated string literal"). Put the note in the
> frontmatter beside the helper instead.

### Validation

A `cf-message` rule was added to `RULES` (*"Please write your message."*), and the
three RULES-driven lookups are now typed
`HTMLInputElement | HTMLTextAreaElement`. `#cf-terms` stays `HTMLInputElement`
because a checkbox genuinely is one and `.checked` is read off it.

**A rule and its markup have to arrive together** — a field with no rule submits
blank; a rule with no field silently never matches.

The form still has no backend. `ENDPOINT` is empty and a submit runs the full
validation pass then says plainly that delivery is not connected. It never shows a
false "message sent".

### Verified behaviour

Empty submit shows the error and sets `aria-invalid`; focus moves to the field;
the error clears on input; the label floats above the box; `FormData` carries
`message` so it posts the moment `ENDPOINT` is set. Measured at 1920/1440/1280/390
— no clipping, no horizontal overflow, gap above the consent line reduced from
~530px to 16px.

---

## 4 · Class Corner — stale warning comment

**File:** `src/pages/academics/class-corner.astro`

A comment above `<Toppers />` warned that *"the card in data/classCorner.ts points
at #academic-excellence; remove one without the other and you get a dead anchor."*
That card was removed on 19 Sep, so the comment was telling the next reader to
protect a link that no longer exists.

Corrected. **The `#academic-excellence` id stays** — nothing links to it now, but
it is a public anchor someone may have shared.

---

## Verification for this change set

- [ ] `npm run build` green; page count unchanged from your previous build.
- [ ] `npx tsc --noEmit` — no increase over your baseline.
- [ ] `npx astro check` (needs `@astrojs/check`). **`tsc` does not read `.astro`
      files at all**, so it cannot see any of the component work above.
- [ ] `/beyond-academics/ncc-scouts-guides/` renders `#ncc` **and**
      `#scouts-guides`, ten photographs total, NCC in 4 columns and scouting in 3.
- [ ] Nav label reads `NCC, Scouts & Guides` sitewide.
- [ ] Scroll that page **with motion enabled, not `prefers-reduced-motion`** —
      the banner must never show through a section. Reduced motion turns
      `PageHero` from sticky to relative and hides this class of bug entirely.
- [ ] VP page shows all three credential lines; portrait present.
- [ ] `/contact-us/` — Message field is full width, validates when empty, and
      there is no blank gap above the consent line at 1440px.
- [ ] Mobile 390px: contact form stacks, textarea at its floor, no horizontal
      overflow.

**Then stop. Do not push** until the client has reviewed.

---

## Still open with the school after these changes

Unchanged from `docs/09` §7 except that the Scouts & Guides entry narrowed
considerably. What remains on this section:

- The six-day camp's **dates** — the press note gives none.
- The **Scout leaders' names** — none is identified in any photograph.
- Confirmation of the **"first of its kind"** claim, which is currently attributed
  to the school rather than stated.
- **NCC cadet strength** — still absent from all 67 pages of the school's site.

And one from §2: **no new Vice Principal portrait arrived**, so confirm whether the
current one is final.
