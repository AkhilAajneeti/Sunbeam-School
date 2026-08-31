# Homepage Text Wireframe

Every section specifies **Purpose · Content · Layout · Typography · Photography · Interaction · Mobile · CTA · Source**.

**Source key** — `EXISTING` (live site, verified) · `AUDIT` (client PDF requirement) · `ASSET` (client must supply) · `PROPOSED` (our new content, requires approval)

**All copy below marked `[DRAFT]` is placeholder for client approval. Nothing is presented as final school communication. No statistic appears that was not verified from the live site.**

---

## §01 — UTILITY BAR

**Purpose.** Serve existing parents and students (D2/D3) *before* the marketing begins, so returning users never scroll a persuasion page to reach a notice. Removes eight competing links from the main navigation.

**Content.**
`Notices` · `Academic Calendar` · `Results` · `Download TC` · `Parent Login` · `Mandatory Public Disclosure` · `Contact`
Right: `Admissions Helpline +91 7755005908`

**Layout.** Full-bleed, 36px, `--sb-maroon-dark`. Links left, helpline right. 13px, 24px spacing.

**Typography.** Body Small 13px, Sans 400, `rgba(255,255,255,0.86)`; hover → white with a gold underline.

**Photography.** None.

**Interaction.** Hides on scroll-down, reappears on scroll-up. Helpline is `tel:`.

**Mobile.** Collapses to `Notices · Results · Login` + a phone icon. The rest move into the nav overlay under "Quick Links".

**CTA.** Utility only.

**Source.** `EXISTING` (all eight utility links) · `AUDIT` §8, §10 placement.

---

## §02 — MAIN NAVIGATION

**Purpose.** Communicate institutional structure at a glance and keep an Admissions action permanently visible.

**Content.**
Crest + "Sunbeam School Ballia" wordmark (left) — links home.
`About` · `Academics` · `Admissions` · `Campus` · `Beyond Academics` · `News & Events` · `Alumni` · `Career`
Right: search icon + **`Apply Online`** primary button.

**Layout.** Full-bleed white/ivory, 96px, hairline bottom rule. Sticky; condenses to 68px on scroll with `--sb-shadow-header`. Mega-menu spans full width, 1280 inner, 2–4 columns + featured image + contextual CTA.

**Typography.** Nav items Sans 600 15px, `--sb-charcoal`. Active item: 2px maroon bottom rule. Mega-menu column headers Label 12px uppercase 0.14em `--sb-maroon`; children Body Small 15px.

**Photography.** One featured image per mega-menu (3:2, 320px) — e.g. Academics shows the robotics lab, Campus the shooting range.

**Interaction.** Opens on hover **and** focus; closes on `Escape`, returns focus to trigger. Fade + 8px rise, 200ms.

**Mobile.** Hamburger → full-screen overlay, accordion, 56px rows, `Apply Online` pinned to the bottom.

**CTA.** `Apply Online` (primary, always visible).

**Source.** `AUDIT` §6.1 (Career), §12.1 (Alumni beside Career) · `PROPOSED` 8-item structure.

---

## §03 — HERO

**Purpose.** Answer "what is this school?" in one photograph and one line. Establish that this is a real, substantial campus — not a template.

**Content.**
Eyebrow: `SUNBEAM SCHOOL BALLIA · ESTABLISHED 2013 · CBSE`
Headline `[DRAFT]`: **"Where Ballia's children learn to lead."**
Deck `[DRAFT]`: "A Sunbeam institution since 2013 — 2,200 students, Nursery to Class XII, on a campus built for how children actually learn."
Buttons: `Admissions` (primary) · `Explore the Campus` (secondary)

**Layout.** Full-bleed, `100vh` capped at 820px. Image fills the frame. Content block bottom-left, 1280 container, occupying columns 1–7 of 12 — **asymmetric, not centred**. Bottom-weighted scrim. Slide indicators bottom-right as 24px gold rules.

**Typography.** Eyebrow Label 12px uppercase 0.14em, `rgba(255,255,255,0.82)`. Headline Display XL 76/1.02, Serif 400, white, `max-width: 16ch`. Deck Body Large 19px, `rgba(255,255,255,0.90)`, `max-width: 46ch`.

**Photography.** **`ASSET` — 3–5 images, 21:9 or 16:9, minimum 2400px.** Required: (1) wide campus establishing shot, (2) students engaged in classroom learning, (3) a co-curricular moment. Subject positioned right-of-centre so the left content block sits on clear space. **Audit 1.1 — campus and students engaged in learning and co-curricular activities.**

**Interaction.** **Stationary slider — only the images cross-fade (900ms, opacity only). The frame, headline, deck and buttons never move. Audit 1.3, verbatim.** 6s interval, pauses on hover and focus, visible pause control. First slide is CSS-rendered; the island hydrates `client:idle`.

**Mobile.** Crop to **4:5 portrait**, `object-position` preserves the focal point. Headline 40px. Deck to 2 lines. Buttons full-width stacked. **Auto-advance disabled — swipe only.**

**CTA.** `Admissions` → `/admissions/` · `Explore the Campus` → `/campus/`

**Source.** `AUDIT` 1.1, 1.2, 1.3 · `EXISTING` est. 2013, CBSE, 2,200+ · `ASSET` photography · `PROPOSED` headline copy.

---

## §03b — RECOGNITION PROOF STRIP

**Purpose.** Answer "is this school actually any good?" **inside the first viewport.** A parent decides whether to keep reading in about eight seconds. The audit places the full Achievements section at the page tail (1.14); this thin bar honours that placement while still meeting the parent's immediate question. **It is a proof bar, not a section — no heading, no cards, no images.**

**Content.** Four items, hairline-separated:
- **#1 Co-Ed Day School in Ballia** — Education World, six consecutive years
- **CBSE Affiliated** — 2131962
- **Microsoft Showcase School**
- **Est. 2013** — 456 → 2,200+ students

**Layout.** Contained 1280, 72px tall, `--sb-sand`, hairline top and bottom. Four equal cells with `--sb-border` vertical rules.

**Typography.** Primary line Sans 600 15px `--sb-charcoal`; qualifier Caption 13px `--sb-text-muted`. **No large numerals here** — the stat treatment belongs to §05 and §14.

**Photography.** None.

**Interaction.** None. Static. **No count-up animation.**

**Mobile.** 2×2 grid, 15px/12px, hairlines between.

**CTA.** Whole strip links to `/about/achievements/`.

**Source.** `EXISTING` — every claim verified from `/about-us/` and `/affiliation/` · `PROPOSED` placement (documented deviation, `04-sitemap-homepage-ia.md` §G2).

---

## §04 — PARENT QUICK ACCESS

**Purpose.** Give returning parents (D2, the highest-frequency audience) a one-tap route to the six things they actually come for — without routing them through marketing content.

**Content.** Six links: `Admissions` · `Transport & Bus Routes` · `Academic Calendar` · `Notice Board` · `Results` · `Contact`. Each with a one-line descriptor.

**Layout.** Contained 1280, `--sb-ivory`, 64px vertical padding. Six columns separated by `--sb-border` hairlines. **No cards, no boxes, no icon circles** — a rule-separated band.

**Typography.** Label eyebrow above the row: `FOR PARENTS & STUDENTS`. Each link Sans 600 17px `--sb-charcoal`; descriptor Caption 13px `--sb-text-muted`.

**Photography.** **None — deliberately.** This is utility. Imagery here would slow the one audience that wants speed.

**Interaction.** Hover: label → maroon, a 2px gold rule wipes in beneath (220ms). Full cell is the hit area.

**Mobile.** **2×3 grid**, 56px rows, full-width tap targets, hairline dividers.

**CTA.** Six direct links.

**Source.** `EXISTING` all six destinations · `AUDIT` §7 (transport), §8 (calendar), §10 (notices) · `PROPOSED` grouping.

---

## §05 — THE SUNBEAM STORY

**Purpose.** Answer "who are they, and can I trust them?" This is the audit's core About requirement — **history and establishment, vision and mission, legacy (1.6, 1.7, 1.8)** — told editorially rather than as a generic About card.

**Content.**
Eyebrow: `OUR STORY`
H2 `[DRAFT]`: **"Fifty years of Sunbeam. Thirteen in Ballia."**
Body `[DRAFT]`, three short paragraphs:
1. 1972, Varanasi — Dr. Amrit Lal 'Ishrat' Madhok and his wife found Sunbeam, believing existing institutions were not meeting the whole of a child's needs.
2. 2013 — the Ballia campus opens at Agarsanda with 456 students.
3. Today — 2,200+ students, Nursery to Class XII, PCM · PCB · Commerce · Humanities.

Pull quote: **"Lighting the Lamp of Knowledge"** — the Sunbeam Group's founding phrase.
Stat row (three, hairline-separated): `1972` Sunbeam founded, Varanasi · `2013` Ballia campus established · `2,200+` students today.
Two links: `Our History & Legacy` · `Vision, Mission & Values`

**Layout.** **Asymmetric editorial split (C09).** Contained 1440 outer. Text columns 1–5, image columns 7–12 with a deliberate 40px **overhang past the container's right edge** into the bleed. Text block vertically centred against the image. Stat row spans the full text column beneath the body, above the links. `--sb-ivory` background.

**Typography.** Eyebrow Label 12px uppercase gold. H2 40/1.12 Serif `--sb-charcoal`, `max-width: 20ch`. Body 17/1.65 `--sb-text-secondary`, `max-width: 62ch`. Pull quote Serif 21px with a 3px gold left rule. Stat numerals Serif 64px tabular `--sb-maroon`; labels Caption 13px muted.

**Photography.** **`ASSET` — two images.** Primary: contemporary campus wide, 4:5 portrait, full-height right column. Inset (optional, overlapping the primary's lower-left by 15%): an early/archival Ballia image, 3:2, 240px wide. **Old beside new carries the legacy argument without a word of copy.** If no archival image exists → `[NEEDED: earliest available Sunbeam Ballia campus photograph, 2013–2015]` and the layout falls back to a single image.

**Interaction.** Reveal on scroll (opacity + 16px rise, once). Image `scale(1.03)` on hover. **Statistics do not animate.**

**Mobile.** Image full-bleed above text; overhang and inset removed (inset moves below the primary at 50% width). H2 28px. Stats become a 3-row list with hairlines, numerals 40px. Links stack.

**CTA.** `Our History & Legacy` → `/about/history-legacy/` · `Vision, Mission & Values` → `/about/vision-mission/`

**Source.** `EXISTING` — 1972, founders' names, 2013, 456→2,200+, streams, "Lighting the Lamp of Knowledge" (all verified) · `AUDIT` 1.6, 1.7, 1.8 · `ASSET` photography · **`[NEEDED]` the actual Vision and Mission statement text — `/mission-vision/` returns no extractable statement. We will not write a school's mission for it.**

---

## §06 — ACADEMIC JOURNEY

**Purpose.** Answer "what will my child actually study?" — the first substantive academic answer, and a parent's real entry point into the site. Maps to audit §2B.

**Content.**
Eyebrow: `ACADEMICS`
H2 `[DRAFT]`: **"Fourteen years, five stages, one continuous idea."**
Deck `[DRAFT]`: "From first steps in Pre-Primary to board examinations and university choices — an academic structure designed to hand a child forward, not to start again."
Five stages, each with class range + a one-line character:
`Pre-Primary` Nursery–UKG · `Primary` I–V · `Middle` VI–VIII · `Secondary` IX–X · `Senior Secondary` XI–XII
Senior Secondary carries the verified streams: **PCM · PCB · Commerce · Humanities**
Link: `Explore Academics`

**Layout.** **Horizontal 5-stage scale (C14).** Contained 1280, `--sb-paper`, 120px padding. Five equal columns, `--sb-border` vertical hairlines. Each: 4:5 portrait, then class range (Label, gold), stage name (H3), one line of body. A continuous 1px gold rule runs beneath all five, with a 2px node at each stage — a visual progression line, **not five cards**.

**Typography.** H2 40/1.12 Serif. Deck Body Large 19px muted, `max-width: 54ch`. Class range Label 12px uppercase gold. Stage name H3 28px Serif 600. Description Body Small 15px secondary.

**Photography.** **`ASSET` — five portraits, 4:5, one per stage, age-accurate.** A Nursery child, a Class III child, a Class VII child, a Class X student, a Class XII student. **The age progression must be visible across the row** — this is the section's entire argument. Consistent crop, consistent grade, eye-level.

**Interaction.** Hover: image `scale(1.03)`, stage name → maroon, gold node grows to 4px. Staggered reveal, 60ms, capped at 4.

**Mobile.** **Horizontal scroll-snap carousel**, one stage per view at 78% width so the next peeks. Gold progress rule beneath doubles as the scroll indicator. **Explicitly not five stacked cards.**

**CTA.** Each stage → its page (`/academics/structure/pre-primary/` …). Section link → `/academics/`.

**Source.** `EXISTING` streams (PCM, PCB, Commerce, Humanities), Nursery–XII · `AUDIT` 2.B1–B7 · `ASSET` photography · **`[NEEDED]` stage-wise descriptions** · `PROPOSED` headline.

---

## §07 — LEARNING AT SUNBEAM

**Purpose.** Answer "how do they teach — is this a modern school or a rote factory?" Maps to audit §2A and §2C. **Evidenced, not asserted** — the school's Microsoft Showcase status and named labs do the persuading.

**Content.**
Eyebrow: `TEACHING & LEARNING`
H2 `[DRAFT]`: **"Learning you can watch happen."**
Body `[DRAFT]`: two paragraphs on experiential and inquiry-based learning, project work, and collaboration.
Four evidence points, each a fact rather than a claim:
- **Robotics & Coding** — a lab with drone, 3-D printer, telescope and embedded systems
- **AI & Digital Literacy** — a Microsoft Showcase School; 100 teachers certified as Microsoft Innovative Educator Experts
- **Smart Classrooms** — 30+ digitally smart classes, 49+ interactive panels
- **Nine Laboratories** — Physics, Chemistry, Biology, Mathematics, Language, Geography, Srijan, MUN, Computing
Link: `Our Academic Philosophy`

**Layout.** **Full-bleed split band.** Left 55%: a single large photograph, edge-to-edge to the viewport's left edge, no container margin. Right 45%: `--sb-ink` dark panel, content inset 80px, vertically centred. Evidence points as a hairline-separated list (`rgba(255,255,255,0.16)`), **not four cards**.

**Typography.** On the dark panel — eyebrow Label gold; H2 40/1.12 Serif white; body 17/1.65 `rgba(255,255,255,0.78)`; evidence titles Sans 600 17px white; evidence detail Body Small 15px `rgba(255,255,255,0.66)`.

**Photography.** **`ASSET` — one hero-quality image, 4:5 or 1:1, minimum 2400px.** Preferred: students actively using the robotics lab — hands on equipment, faces engaged, teacher present. **The equipment must be in use.** An empty lab proves nothing. Alternate: a science experiment mid-execution.

**Interaction.** Reveal on scroll. Evidence rows: hover shifts the left hairline to gold. Image static.

**Mobile.** Image full-bleed 3:2 above; dark panel below, 32px inset. H2 28px. Evidence list retains hairlines.

**CTA.** `Our Academic Philosophy` → `/academics/philosophy/`

**Source.** `EXISTING` — robotics lab contents, Microsoft Showcase School, 100 MIE Experts, 30+ smart classes, 49+ panels, all nine labs (**every evidence point verified**) · `AUDIT` 2.A1–A6, 2.C1–C14 · `ASSET` photography · `PROPOSED` headline and body.

---

## §08 — CAMPUS EXPERIENCE

**Purpose.** Answer "what is the campus actually like?" Delivers audit §3's labelling requirement (3.2–3.7) on the homepage, and gives the school's genuinely unusual facilities — a shooting range, a 15,000-book library — the scale they deserve.

**Content.**
Eyebrow: `THE CAMPUS`
H2 `[DRAFT]`: **"Built for more than lessons."**
Six labelled facilities — **exactly the six the audit names**:
`Shooting Range` · `Auditorium — Sankalp & Naman Hall` · `Conference Room` · `Science Laboratories` · `Nalanda Library — 15,000+ books` · `Sports Facilities`
Link: `Take the Full Campus Tour`

**Layout.** **Full-bleed asymmetric photo mosaic (C11).** Six tiles, deliberately unequal:
```
┌─────────────────┬────────┬────────┐
│                 │ 1:1    │ 1:1    │
│  Shooting Range ├────────┴────────┤
│  16:9  (large)  │   3:2  (wide)   │
├────────┬────────┼─────────────────┤
│  4:5   │  4:5   │  16:9  (wide)   │
└────────┴────────┴─────────────────┘
```
Section header sits contained above the mosaic. Mosaic runs full viewport width, 8px gutters. Each tile carries a **persistent bottom-left label** on a scrim.

**Typography.** Facility labels Sans 600 17px white over scrim; qualifier (e.g. "15,000+ books") Caption 13px `rgba(255,255,255,0.80)`. **Labels are always visible — not hover-revealed.** Audit 3.2–3.7 requires labelling, and a hover-only label does not exist on touch.

**Photography.** **`ASSET` — six professional images, minimum 2400px. Audit 3.1 requires replacing existing photographs.** Shooting Range is the hero tile and the rarest differentiator — shoot it properly, ideally in use. Library must show the actual stack depth. Labs must show equipment in use. Auditorium should be full, not empty.

**Interaction.** Hover: `scale(1.03)` inside `overflow: hidden`, scrim deepens 10%. One tile at a time. Whole tile is the link.

**Mobile.** **2-column masonry**, Shooting Range full-width first. Labels stay persistent, 15px. Sixth tile followed by the CTA.

**CTA.** Each tile → its Campus page. Section → `/campus/`.

**Source.** `AUDIT` 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7 — **the facility list is the audit's own** · `EXISTING` Sankalp Hall, Naman Hall, Nalanda Library 15,000+ books, shooting range, labs · **`[NEEDED]` Conference Room — named by the audit but absent from the current site** · `ASSET` all six photographs.

---

## §09 — BEYOND ACADEMICS

**Purpose.** Answer "is there more here than exams?" **Deliberately inverts the current site's framing**: audit 4.3–4.7 requires facilities, participation, inter-house and coaching to come *before* achievements. The live site leads with medals; we lead with opportunity.

**Content.**
Eyebrow: `BEYOND ACADEMICS`
H2 `[DRAFT]`: **"Every child plays. Every child performs."**
Deck `[DRAFT]`: "Fourteen outdoor and indoor sports, four houses, and a calendar that assumes participation rather than selection."
Three strands, unequal weight:
- **Sports** (dominant) — indoor: chess, table tennis, carrom, aerobics, yoga, taekwondo, karate · outdoor: hockey, skating, football, basketball, kho-kho, volleyball, kabaddi, cricket · inter-house competitions · coaching
- **Performing & Visual Arts** — art room, dance room, music
- **Clubs, Leadership & Service** — student council, houses, community service, NCC ('A' and 'B' affiliated), excursions
Links: `Sports at Sunbeam` · `Beyond Academics`

**Layout.** Contained 1280, `--sb-sand`, 120px padding. **Uneven 2:1 editorial grid** — Sports occupies columns 1–8 with a large 3:2 image and full descriptive text; Arts and Clubs stack in columns 9–12, each a 4:5 image with a short paragraph. Hairline between the two zones. **Not three equal cards.**

**Typography.** H2 40/1.12 Serif. Deck Body Large 19px muted. Strand titles H3 28px Serif 600. Body 17px secondary. Sport lists Body Small 15px muted, comma-separated inline — **not chips, not pills**.

**Photography.** **`ASSET`.** Sports: **students participating**, mid-game — not a podium, not a medal shot. Audit 4.3–4.7 is explicit that participation precedes achievement. Arts: a performance or an art room in use. Clubs: a council or service activity. **Audit 4.1 requires recent, professionally framed images.**

**Interaction.** Reveal on scroll. Image hover `scale(1.03)`.

**Mobile.** Single column, Sports first at full width, then Arts, then Clubs. Sport lists remain inline text.

**CTA.** `Sports at Sunbeam` → `/beyond-academics/sports/` · `Beyond Academics` → `/beyond-academics/`

**Source.** `EXISTING` — full indoor/outdoor sport lists, art room, dance room, NCC 'A' and 'B', student council, community service (all verified) · `AUDIT` 4.1, 4.3, 4.4, 4.5, 4.6, 4.7 · `ASSET` photography · `PROPOSED` headline.

---

## §10 — LIFE AT SUNBEAM

**Purpose.** Answer "what is it actually like to be a child here?" **The only section whose job is feeling rather than information.** Also delivers audit 1.4 — event photographs organised under dedicated galleries rather than displayed randomly.

**Content.**
Eyebrow: `LIFE AT SUNBEAM`
H2 `[DRAFT]`: **"A school, on an ordinary Tuesday."**
An immersive photographic band, then entry points to **named event galleries** — e.g. `Genesis — Annual Function` · `UDAAN — Sports Day` · `Investiture Ceremony` · `Excursions` · `Celebrations`
Link: `All Galleries`

**Layout.** **Full-bleed immersive band.** A 21:9 edge-to-edge photograph, 520px tall, no container, no scrim over most of it — the image is the content. Section header sits *above* it, contained, with generous whitespace. Beneath the band: a contained row of 5 gallery entry points, each a 3:2 image with the gallery name and item count below. **Deliberate whitespace before and after this section (160px)** — it is the page's breathing moment.

**Typography.** H2 40/1.12 Serif, contained above the band. Gallery names Sans 600 17px `--sb-charcoal`; counts Caption 13px muted.

**Photography.** **`ASSET` — the band image is the single most important photograph on the site after the hero.** A candid, wide, layered moment: assembly, corridor between classes, a celebration. Many children, real expressions, no posing, no eye-contact-with-camera line-up. Minimum 3000px wide. Plus five gallery cover images.

**Interaction.** Band: slow `scale(1.02)` over 800ms on scroll-into-view, once, reduced-motion disabled. Gallery entries: hover `scale(1.03)`. **No carousel** — the audit asks for organised galleries, not a slideshow.

**Mobile.** Band crops to 4:5, 420px, full-bleed. Gallery entries become a 2-column grid, fifth full-width.

**CTA.** Each gallery → `/news-events/galleries/[event]/`. Section → `/news-events/galleries/`.

**Source.** `AUDIT` 1.4 (dedicated galleries) · `EXISTING` Genesis, UDAAN, Investiture, excursions all verified as real school events · `ASSET` all photography · `PROPOSED` headline.

---

## §11 — NEWS, EVENTS & NOTICES

**Purpose.** Answer "is this school alive right now?" Recency *is* the message. Delivers audit §10 and §11 — and keeps the three content types **visually distinct**, as both the audit and our brief require.

**Content.** Three parallel streams, visually differentiated:
- **News** — 3 items: date, category, headline, thumbnail
- **Events** — 3 upcoming: date block, title, time/venue
- **Notices** — 5 items: **date, category tag, title as text.** Optional thumbnail links to the full notice.
Links: `All News` · `Full Calendar` · `Notice Board`

**Layout.** Contained 1280, `--sb-paper`, 120px padding. Three columns 5 / 4 / 3 — **unequal on purpose**, so the three types read as different things rather than three copies of one component. Vertical `--sb-border` hairlines. News items carry thumbnails; Events carry a maroon date block; Notices are text rows with a `--sb-notice` category tag.

**Typography.** Column heads Label 12px uppercase 0.14em maroon. News headlines Sans 600 17px. Event dates Serif 28px tabular maroon. Notice titles Body 16px; category tags Caption 12px on `--sb-notice` tint.

**Photography.** News thumbnails only, 3:2, uniform crop. **Events and Notices carry no imagery by default** — this is what enforces audit 10.2's ban on promotional creatives as notices.

**Interaction.** Hover: headline → maroon + gold underline. **No carousel, no auto-rotation.**

**Mobile.** Tabbed single column — `News | Events | Notices` — preserving the distinction in the smallest space. Default tab: Notices (what returning parents want most).

**CTA.** Three section links, plus every item.

**Source.** `AUDIT` 10.1, 10.2, 10.3, 11.1–11.6 · **`[NEEDED]` — there is currently no functioning news system; the WordPress posts sitemap holds two entries, one of them injected spam. Also requires a client commitment to update cadence (asset request A7).**

---

## §12 — ALUMNI · FROM SUNBEAM TO THE WORLD

**Purpose.** Answer "what happens to students after they leave?" **Audit §13 requires a dedicated homepage testimonial section.** It doubles as the most persuasive proof available to a prospective parent — outcomes, spoken by people who lived them.

**Content.**
Eyebrow: `ALUMNI`
H2: **"From Sunbeam to the World"** *(the brief's own phrase — adopted)*
Deck `[DRAFT]`: "Former students on where school took them."
2–3 video testimonials, each: poster frame, play control, name, batch year, current profession.
Secondary line: `Pradiptam — the Sunbeam Ballia alumni meet`
Links: `Alumni Stories` · **`Register as an Alumnus`**

**Layout.** Full-bleed `--sb-ink` dark section, 160px padding, 1280 inner. Section header left-aligned, columns 1–6. Video testimonials in an uneven row — first at 16:9 spanning columns 1–7, the other two stacked at 16:9 in columns 8–12. Registration CTA on a gold-ruled band beneath.

**Typography.** H2 40/1.12 Serif white. Deck Body Large `rgba(255,255,255,0.76)`. Alumni name Sans 600 17px white; batch + profession Caption 13px gold.

**Photography.** **`ASSET` — video posters, 16:9, plus alumni portraits.** Audit 13.2–13.6: each testimonial should cover current profession, higher education journey, career achievements, and their experience at Sunbeam Ballia.

**Interaction.** **Facade video loading** — poster image + play control only; the player script loads on click, never on page load. This keeps the homepage's JS budget intact.

**Fallback — important.** If videos are not supplied by launch, the section ships with **text quotes plus portraits**, same layout. **If neither exists, the section renders as a registration invitation only.** `[PLACEHOLDER: alumni video testimonials — client to supply]`. **We will not fabricate alumni, quotes, professions or photographs.**

**Mobile.** Videos stack full-width 16:9. Registration CTA full-width.

**CTA.** `Register as an Alumnus` → `/alumni/registration/` (primary) · `Alumni Stories` → `/alumni/stories/`

**Source.** `AUDIT` 13.1, 13.2, 13.3, 13.4, 13.5, 13.6, 12.2 · `EXISTING` Pradiptam 2.0 alumni meet · **`ASSET` — blocking; no alumni content exists on the current site (asset request A4).**

---

## §13 — AFFILIATIONS & PARTNERS

**Purpose.** Answer "who vouches for them?" **Audit 1.13 — verbatim: "Before the footer, include a section showcasing the school's academic and institutional affiliations/partners through neatly displayed logos."**

**Content.**
Eyebrow: `AFFILIATIONS & PARTNERSHIPS`
Logos: CBSE · Sunbeam Group · Microsoft (Showcase School) · Education World · Brainfeed · Good Schools Alliance · NCC
Caption line: `CBSE Affiliation No. 2131962 · School Code 70205`

**Layout.** Contained 1280, `--sb-ivory`, 96px padding — **deliberately quiet**, a low-volume section between two loud ones. Single centred row of logos, generous 64px spacing, uniform optical height (not uniform box size), hairline rules above and below. Caption centred beneath.

**Typography.** Eyebrow Label 12px uppercase muted, centred. Caption Body Small 15px `--sb-text-muted`, tabular figures.

**Photography.** **`ASSET` — logos as transparent SVG or PNG at 2× minimum.** Greyscale at rest (`filter: grayscale(1) opacity(0.65)`), full colour on hover. **This is one of the few places restraint matters more than impact** — loud logos read as advertising.

**Interaction.** Greyscale → colour on hover, 220ms. No motion otherwise.

**Mobile.** 3-column grid, 2 rows, 40px gaps. Caption below, 13px.

**CTA.** None — this section builds credibility, it does not ask.

**Source.** `AUDIT` 1.13, verbatim · `EXISTING` CBSE 2131962 / code 70205, Microsoft Showcase School, Education World, Brainfeed, Good Schools Alliance, NCC (all verified) · **`ASSET` logo files, plus permission confirmation for each mark used.**

---

## §14 — ACHIEVEMENTS & RECOGNITION

**Purpose.** "Show me the evidence." **Audit 1.14 — verbatim: "This may be followed by a dedicated Achievements & Recognition section."** It follows §13 exactly as instructed. It also **replaces the Google Reviews block** the audit removes (1.5) — the school's own record replaces third-party opinion, "allowing the institution's performance to speak for itself."

**Content.**
Eyebrow: `ACHIEVEMENTS & RECOGNITION`
H2 `[DRAFT]`: **"Six years at number one."**
Lead statistic: **#1 Co-Ed Day School in Ballia — Education World, 2019-20 to 2024-25.**
Institutional honours: Microsoft Showcase School · 100 teachers as Microsoft Innovative Educator Experts · Brainfeed School Excellence Award · Sunbeam Eduserve Award, Best School of the Year · Dr. Kalam Leadership Excellence Award.
Student achievement — **made the hero, per our brief**:
- Asmita Khelo India Women's League — Handball 1st, Kabaddi 2nd, Volleyball 2nd
- Taekwondo Poomse Championship 2025 — 21 students, 10 gold / 9 silver / 2 bronze
- Indian AI Impact Festival 2024 — 1st place
- National qualifiers — Vidyarthi Vigyan Manthan, National Children's Science Congress
- Inspire Award MANAK selections
- District Handball — Junior Boys 1st, Senior Boys 2nd, Girls 1st
Links: `Board Results` · `All Achievements`

**Layout.** Contained 1280, `--sb-gold-wash` tint, 120px padding. **Asymmetric:** left columns 1–5 carry the H2 and the lead ranking as a large serif statement with a 3px gold left rule; right columns 6–12 carry a hairline-separated honours list with a 3:2 photograph above it. **No badges, no trophy icons, no cards, no medal graphics.** Typography and one real photograph.

**Typography.** H2 40/1.12 Serif. Lead ranking: Serif 56px, `--sb-maroon`, `max-width: 14ch`, with the qualifier at Caption 13px beneath. Honour rows Sans 600 17px + Body Small 15px muted detail, `--sb-border` hairlines between.

**Photography.** **`ASSET` — one high-resolution award or medal-ceremony photograph, 3:2.** Audit 4.8 requires major achievements shown first with high-resolution photographs. Real students receiving real recognition.

**Interaction.** Reveal on scroll. **No count-up on "six years" or any numeral.**

**Mobile.** Single column: H2, lead ranking, photograph, then the honours list with hairlines. Lead ranking 34px.

**CTA.** `Board Results` → `/academics/board-results/` (**high intent — this is what a parent came for**) · `All Achievements` → `/about/achievements/`

**Source.** `AUDIT` 1.5 (replaces reviews), 1.14 (placement), 4.8 (majors first, high-res) · `EXISTING` **every honour and every medal count verified from `/about-us/` and `/sports-games/`** · **`[NEEDED]` board results data — the single largest content gap on the site (asset request A1)** · `ASSET` award photography.

---

## §15 — ADMISSIONS CTA

**Purpose.** "How do I start?" The emotional close, offering **three different commitment levels** so a parent can act at whatever stage of decision they've reached — rather than being funnelled into a single application form they aren't ready for.

**Content.**
H2 `[DRAFT]`: **"Your child's journey can begin here."**
Deck `[DRAFT]`: "Admissions are open for Nursery to Class IX and Class XI. Visit the campus, ask us anything, or apply online."
Three actions:
1. **`Apply Online`** — primary
2. **`Book a Campus Visit`** — secondary
3. **`Enquire`** — secondary
Beneath, quiet: `Admissions Helpline +91 7755005908 · Agarsanda, Ballia, Uttar Pradesh 277001`

**Layout.** **Full-bleed image band, 620px, with a dark scrim.** Content contained 880 narrow, **centred** — the one deliberately centred composition on the page, because it is a single decisive moment and the whole page has built toward it. Three buttons in a row beneath the deck. Contact line at Caption weight below.

**Typography.** H2 Display-scale: Serif 56/1.06 white, `max-width: 18ch`. Deck Body Large 19px `rgba(255,255,255,0.88)`, `max-width: 52ch`. Contact line Caption 13px `rgba(255,255,255,0.70)`.

**Photography.** **`ASSET` — one warm, forward-looking, aspirational image, 21:9, minimum 3000px.** A child arriving at the gate, an assembly, a moment of anticipation. **Not a building shot. Not an empty campus.** Scrim: `rgba(18,16,15,0.62)` flat, with maroon tint `rgba(61,0,0,0.20)` for brand warmth. Contrast must be verified against the actual final image before launch.

**Interaction.** Buttons: background transition only, 180ms. Image static. **No parallax.**

**Mobile.** Image crops to 4:5, 520px. H2 34px. Three buttons stack full-width, 48px each, `Apply Online` first. Contact line becomes tappable `tel:`.

**CTA.** Three, by commitment level — apply / visit / enquire.

**Source.** `EXISTING` — Nursery–IX and XI application portals, helpline, address (verified) · `PROPOSED` headline, three-tier CTA structure · **Findings X5 — campus-visit booking and enquiry form do not currently exist anywhere on the site and must be built** · `ASSET` photography.

---

## §16 — FOOTER

**Purpose.** Complete, structured, compact wayfinding — plus the regulatory and contact information a school footer must carry. **Audit 14.1: reduce the size of the social media icons.**

**Content.**

*Row 1 — four link columns + contact:*
| About | Academics | Admissions | Campus & Beyond | Contact |
|---|---|---|---|---|
| History & Legacy | Academic Philosophy | Admission Procedure | Campus Tour | Sunbeam School Ballia |
| Vision & Mission | Academic Structure | Fee Structure | Transport & Bus Routes | Agarsanda, near Hanuman Temple |
| Principal's Message | **Board Results** | Prospectus | Safety & Security | Ballia, Uttar Pradesh 277001 |
| Director's Message | Academic Calendar | Uniform Catalogue | Sports at Sunbeam | +91 7755005908 · +91 7755005905 |
| Faculty | Syllabus (PRECEPT) | Apply Online | Beyond Academics | [school email] |
| Affiliation & Recognitions | FAQs | Book a Campus Visit | Galleries | |

*Row 2 — utility:* `Notices` · `News & Events` · `Alumni` · `Career` · `Results` · `Download TC` · `Parent Login` · **`Mandatory Public Disclosure`** · `Privacy` · `Terms` · `Accessibility` · `Sitemap`

*Row 3 — base:* Crest + wordmark · `CBSE Affiliation No. 2131962 · School Code 70205` · **social icons** · `© 2026 Sunbeam School Ballia`

**Layout.** Full-bleed `--sb-maroon-dark`. Row 1: 5 columns, 80px top padding. Row 2: single row, 13px, `rgba(255,255,255,0.16)` hairline above. Row 3: crest left, social right, hairline above, 32px padding.

**Typography.** Column heads Label 12px uppercase 0.14em gold. Links Body Small 15px `rgba(255,255,255,0.78)`; hover → white + gold underline. Utility row 13px. Affiliation line tabular figures.

**Photography.** Crest only, white/reversed, 40px tall.

**Interaction.** Link hover only.

**Mobile.** Columns 1–4 → accordion. **Contact column stays open and un-collapsed** — it is the most-tapped footer element on a school site. Utility row wraps to two lines. Social icons centred above the copyright.

**CTA.** Wayfinding only.

**Source.** `EXISTING` — address, both phone numbers, affiliation number and school code, all five social platforms (verified) · **`AUDIT` 14.1 — social icons at 16px, monochrome `rgba(255,255,255,0.66)`, colour on hover** · **`AUDIT` 14.3 — YouTube and X links are held pending a client decision. We will not ship links to dormant channels (asset request A9).** · **Finding X6 — a domain email address is needed to replace `sunbeamballia2131962@gmail.com`.**

---

# Homepage content-source summary

| Source | Sections |
|---|---|
| **Verified existing content** | §01, §03b, §04, §05 (facts), §07 (all evidence), §09 (sport lists), §13 (affiliations), §14 (all honours), §15 (contact), §16 |
| **Audit-driven structure** | §03 (1.1–1.3), §05 (1.6–1.8), §08 (3.2–3.7), §09 (4.3–4.7), §11 (10.x, 11.x), §12 (13.x), §13 (1.13), §14 (1.14, 1.5), §16 (14.1) |
| **Blocking client assets** | Hero photography · all §08 facility photography · §12 alumni video · §14 board results · §05 vision & mission text |
| **Proposed new content (approval required)** | All `[DRAFT]` headlines and body copy |

**Zero fabricated statistics. Zero fabricated testimonials. Zero stock photography. Every number on this page traces to a verified source or is marked `[NEEDED]`.**
