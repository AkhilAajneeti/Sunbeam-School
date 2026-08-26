# O. Content & Asset Requirements from the Client

Ordered by **whether they block the build.** Items A1–A9 are blocking or near-blocking; B-items shape quality; C-items are decisions rather than assets.

**Governing rule for this project:** where content is unavailable, the design ships a clearly marked placeholder. **We do not fabricate school information, statistics, testimonials, achievements or photography, and we do not substitute stock imagery of children.**

---

## A. Blocking — the build cannot be completed correctly without these

### A1 · Board Results — **highest priority content gap**
`[NEEDED]` Class X and Class XII results, last three sessions minimum.

- Overall pass percentage per year
- Number of students appearing / passing
- Distinction and 90%+ counts
- Subject-wise toppers, or school toppers with marks
- Topper names and photographs — **plus written consent to publish them**
- Any year-on-year trend the school wishes to show

**Why blocking:** audit 2.E5 requires Board Results under Academics. The site currently publishes **none** — `/result/` is only a login portal to an external system. This is the single most-searched fact about any CBSE school and its absence is the largest credibility gap on the website. Homepage §14 and the Academics E landing both depend on it.

### A2 · Professional campus photography — **the largest external dependency**
`[NEEDED]` A professional shoot. Audit 3.1 and 4.1 both explicitly require replacing existing photographs.

**Minimum 2400px on the long edge. Existing 150×150px thumbnails are unusable at the new scale.**

**Priority 1 — Hero (3–5 images, 21:9 / 16:9 landscape)**
Wide campus establishing shot · students engaged in classroom learning · a co-curricular moment. Subject placed right-of-centre so headline text sits on clear space.

**Priority 2 — The six facilities the audit names (audit 3.2–3.7)**
| Facility | Shot brief |
|---|---|
| **Shooting Range** | In use if possible. **The rarest differentiator the school has** — shoot it properly |
| **Auditorium** — Sankalp / Naman Hall | Full, in use. Not an empty hall |
| **Conference Room** | Not currently on the website at all |
| **Science Laboratories** | Physics, Chemistry, Biology — **equipment in use**, students working |
| **Nalanda Library** | Must show the real depth of a 15,000-book collection |
| **Sports Facilities** | Indoor and outdoor, in use |

**Priority 3 — Learning (homepage §07)**
Robotics lab **in use** — hands on the drone, 3-D printer or embedded systems · a science experiment mid-execution · smart classroom with the interactive panel active · library reading.

**Priority 4 — Academic stages (homepage §06)**
Five 4:5 portraits: Pre-Primary, Primary, Middle, Secondary, Senior Secondary. **The age progression must be visibly readable across the row.** Consistent crop, grade and eye level.

**Priority 5 — Beyond Academics (audit 4.3–4.7)**
Sports **participation** — mid-game, not podiums · inter-house competition · coaching in progress · performing arts · art room · clubs and student council.

**Priority 6 — Life at Sunbeam (homepage §10)**
One outstanding candid wide shot, minimum 3000px — assembly, corridor, celebration. Many children, real expressions. **No posed line-ups, no eye-contact-with-camera group photographs.**

**Priority 7 — Portraits & events**
Principal (Mrs. Arpita Singh) · Director · senior faculty · award and medal ceremonies in **high resolution (audit 4.8)** · current 2025–26 excursions (audit 4.2 — all excursion content on the site is from 2023).

**Priority 8 — Admissions CTA (homepage §15)**
One warm, aspirational 21:9 image — a child arriving, an assembly. **Not a building shot.**

**Grade for all:** warm, natural, lifted shadows, no heavy saturation, no filters, no vignettes.

### A3 · Vision and Mission statements
`[NEEDED]` The actual text of both.

**Why blocking:** audit 1.7 requires Vision and Mission in the homepage About section. `/mission-vision/` returns no extractable statement text. **We will not write a school's mission for it.** Also needed: confirmation of the primary motto — "Educating the FUTURE!" (used by Ballia) or "Lighting the Lamp of Knowledge" (the Sunbeam Group phrase). Both are currently in circulation.

### A4 · Alumni content — section does not exist today
`[NEEDED]`

- **4–6 short video testimonials.** Audit 13.3–13.6 specifies each should cover: current profession · higher education journey · career achievements · their experience at Sunbeam School Ballia
- Alumni names, batch years, current roles, portraits, and **written consent to publish**
- Pradiptam alumni meet photographs
- Decision on alumni registration form fields + a **data-retention and consent policy** (audit 12.2)

**Why blocking:** audit §12 and §13 are both substantial requirements and **no alumni page exists on the current site.** The homepage §12 section will be built regardless, with a documented text-quote and then registration-only fallback — but it ships weakened without this.

### A5 · Rewritten body copy
`[NEEDED]` Approval and/or authorship of rewritten text.

- **Homepage welcome copy** — the current text is machine-spun and near-unreadable ("understudies can exceed expectations", "guzzling more up to date"). This is the first paragraph a prospective parent reads. Finding X4
- **Principal's Message** — audit 1.12 requires thorough proofreading for grammatical and spelling errors
- **Director's Message** — audit 1.9
- Confirmation of who authors and signs off school voice

### A6 · Academic content — audit §2, all six groups
`[NEEDED]` The audit names 48 topics across groups A–F. Substantial writing is required. Highest priority:

- **A.** Teaching philosophy · student-centred learning · experiential and inquiry-based learning · critical thinking and creativity · curriculum narrative
- **B.** Stage-wise descriptions for all five stages · subject combinations per stream
- **C.** Teaching methodology · Reading Programme · Language Development · Mathematics & Science Enrichment · academic clubs · library programme
- **D.** Assessment system · homework policy · PTM schedule · remedial support · mentoring · competitive-exam preparation
- **D.** **Academic calendar as structured data** (dates + titles + categories), not a PDF — audit 8.2 requires an interactive web format
- **E.** Career guidance · university counselling · subject selection · scholarships · student success stories · university destinations
- **F.** All Parent Partnership content, including FAQs

### A7 · News, Events & Notices — system and commitment
`[NEEDED]`

- 10–15 recent news items as **structured text** (title, date, category, body, image) — not posters
- Upcoming events with dates, times and venues
- Current notices as **text** — audit 10.2 prohibits promotional creatives as notices
- **A named owner and an agreed update cadence.** Audit §11 requires this section to "always remain current"

**Why blocking:** there is currently no functioning news system. The WordPress posts sitemap contains two entries, one of which is injected Russian SEO spam (Finding X2). A "latest news" section that goes stale is worse than none at all.

### A8 · Admissions information
`[NEEDED]`

- Eligibility and **age criteria** per class — currently locked inside a Google Drive prospectus PDF
- Admission dates and session timeline
- Required documents checklist
- **Fee structure as structured data** for HTML presentation, not PDF-only
- Where enquiry and campus-visit form submissions should be delivered (email, CRM, spreadsheet)

**Why blocking:** the site has **no enquiry form anywhere, including `/contact-us/`**, and no campus-visit booking. Every path currently terminates in a phone call or a PDF. Finding X5 — this is the conversion gap the redesign exists to close.

### A9 · Social media decision — audit 14.3
`[NEEDED]` **A decision before launch.**

The audit asks the school to review its YouTube and X profiles and, if they are not updated regularly, either maintain them consistently or remove the links "to avoid reflecting an inactive digital presence."

**We will not ship links to dormant channels.** Please confirm, for each of Facebook, Instagram, LinkedIn, X and YouTube: keep and maintain, or remove.

---

## B. High priority — shapes quality, does not block the build

| # | Item | Reason |
|---|---|---|
| B1 | **Affiliation & partner logos** — **PARTLY RECEIVED.** CBSE, Sunbeam crest, Microsoft Showcase, Brainfeed and NCC are in and live in §13. ⚠ **Still needed: the real Education World mark** — the file supplied is a generic stock "EDUCATION · GLOBAL ACADEMIC" graduation-cap logo, not Education World's identity, and it currently sits under their ranking claim. Also still needed: **written permission to use each third-party mark**, and vector/2× originals (the supplied files are 435–1254px rasters) | Audit 1.13 |
| B2 | **Logo files** — original vector crest and wordmark, and any existing brand guideline | Currently only a 816px raster PNG is available. See C4 |
| B3 | **Conference Room** content and photography | Audit 3.4 names it; it does not exist on the current site |
| B4 | **Expanded Safety & Security** content | Audit 3.8 requires a dedicated page with detailed information; the current page has five bullet points |
| B5 | **Sports participation content** — games calendar, participation levels, inter-house structure, coaching programmes | Audit 4.3–4.7 requires these *before* achievements |
| B6 | **Current excursions, 2025–26** | Audit 4.2 — every dated excursion on the site is from 2023 |
| B7 | **Uniform catalogue images, landscape, correctly aligned** | Audit 9.1–9.2. The audit notes presentation "directly contributes to the school's brand image" |
| B8 | **Structured job openings** — title, qualifications, experience, subject, how to apply | Audit §6. Current vacancies are image posters with no extractable text and no application route |
| B9 | **Faculty profiles** — names, subjects, qualifications, photographs | Trust signal for prospective parents |
| B10 | **Current student and staff counts**, dated to 2026-27 | "2,200+" and "130+" are undated on the site |
| B11 | **Chairman, Secretary and dignitary content** for the History section | Audit 1.11 absorbs these into History rather than separate menu links |
| B12 | **Scholarships** information | Audit 2.E7 |
| B13 | **Affiliation validity period** and society/trust name | Missing from `/affiliation/` |
| B14 | **Named event galleries** with photographs grouped by event — Genesis, UDAAN, Investiture, celebrations | Audit 1.4 — galleries rather than random display |

---

## C. Decisions required from the school

| # | Decision | Consequence |
|---|---|---|
| C1 | **Domain email address** to replace `sunbeamballia2131962@gmail.com` | Finding X6. A Gmail address as official school contact reads as improvised to an evaluating parent |
| C2 | **Mandatory Public Disclosure** — who supplies compliant CBSE data | **Finding X1, P0 regulatory.** `/public-discloser/` currently contains 2019-20 class-teacher tables, including student monitor names, instead of required disclosure fields and certificate uploads |
| C3 | **WordPress security review** | **Finding X2, P0.** `/investirovanie-v-obligacii-pljusy-i-minusy/` — injected Russian SEO spam, indexed since January 2023. Outside redesign scope, but the school should be told |
| C4 | **Brand colour confirmation** | Finding X3. The logo is maroon `#8B0000` + gold `#FFE001`; the current site theme is orange `#F16334`, which appears nowhere in the logo. We propose returning to the school's own colours — please confirm |
| C5 | **Consent to publish student names and photographs** — toppers, medal winners, achievers | Required before A1 and achievement content can go live |
| C6 | **Alumni data-retention and consent policy** | Required before the registration form can accept submissions |
| C7 | **Publishing owner** for news, events and notices | Audit §11 depends on ongoing maintenance, not launch-day content |
| C8 | **Archive policy for old academic calendars** | Audit 8.3 — the site currently stacks 2024, 2025 and 2026 |
| C9 | **Hindi content** — required or not | Determines whether IBM Plex Sans Devanagari is loaded and whether a language layer is scoped |
| C10 | **Which existing photographs may be reused** while professional replacements are produced | Determines how much of launch ships on placeholders |
| C11 | **LinoText web licence** — whether the school holds one, or wants one bought | The school's own published PDFs embed LinoText (`OKMPMD+LinoText`, `MCUYLD+LinoText`), so a desktop licence plainly exists somewhere. A copy downloaded from fontsgeek.com was reviewed and **rejected**: its metadata carries Adobe's copyright and Linotype's trademark, and a webfont is served for download, so shipping it would redistribute an unlicensed commercial face. **Decided for now: not used.** No loss at launch — "Sunbeam School" already renders in Linotext on every page as artwork (`public/brand/sunbeam-wordmark.png`), which is how the school itself sets the mark: mixed case, as a wordmark. Testing showed the two obvious extensions both fail on their own merits — blackletter capitals ("SUNBEAM BALLIA", the footer treatment) are close to unreadable, and a blackletter word inside a sentence renders far smaller than the text around it and reads as a fault. That would have affected 827 occurrences across 162 pages |

---

## D. Academics section — frozen, with six outstanding items

The Academics section is **complete and frozen** as of this build: the information
architecture and page structure are final, every route is designed on the shared
system, there are no orphan pages, no placeholder pages, and no navigation link
pointing at a route that does not exist.

Six items remain, and none of them blocks the section. Every page below already
ships in a finished state that states the gap honestly. **When an asset arrives,
update only the section that consumes it — do not redesign the page.** Each page
was built with the slot open.

| # | Item | Page it unblocks | What changes when it arrives |
|---|---|---|---|
| D1 | **Session 2026-27 academic calendar** — term dates, holidays, examination dates, PTM dates | `/academics/academic-calendar/` | The page currently carries the calendar's *shape* — the four entry types the school itself describes — and none of its contents, because not one date is published anywhere. That list is deliberately the same taxonomy a month grid needs, so the interactive calendar audit §8 asks for drops into the second section without a redesign. **⚠ Until then no date is printed: a calendar is diarised, not read — a family books travel against a holiday.** |
| D2 | **CBSE Class X & XII board results** — by year, with cohort size | `/academics/board-results/` | The school publishes no pass percentage, no toppers and no year-on-year data. The page says so and redirects the reader's real question to the outcome data that *is* published (CUET 2025 cards; the eighteen-name placement board). Results drop into a new section above the existing one. **⚠ The brief's "98% Board Results" counter must never be reinstated without a source.** |
| D3 | **Robotics Lab photography** — 4 frames, the room in use | `/academics/teaching-learning/stem-robotics/` | The Robotics section is currently a typographic composition around the four items the school lists (drone, 3-D printer, telescope, embedded systems). The photo slot is held open directly above it as an AcSplit. **⚠ `Robotics-drones.jpg` and `dron.jpg` are stock and are banned — neither is this school's room.** |
| D4 | **Parent–teacher meeting photography** | `/academics/assessment/parent-teacher-meetings/` | The page currently uses Parents' Forum photographs and states in the copy that they are a forum and not a PTM, because the school has published no photograph of one. Swap the frames and delete that caveat sentence. |
| D5 | **KIDS Entrepreneurship photography** — the Class 7 venture in progress | `/academics/structure/middle-school/`, `/academics/teaching-learning/experiential-learning/` | Both pages carry the programme on the strength of the school's own six-word description. Neither has an image of it. |
| D6 | **Career-counselling day captions** — who spoke, what was covered, both days | `/academics/student-success/career-guidance/` | The school published fifty-plus photographs across two days and no account of either. The speaker's name and credential are printed on a slide behind him but cannot be read with certainty at this resolution, so he is deliberately unnamed. |

### Parent Orientation — rebuilt from the live site, and a consent question it sharpens

Parent Orientation was previously a two-section "the school publishes almost nothing" page. That
described this repository accurately and the school inaccurately: sunbeamballia.edu.in/orientation/
carries five programmes for 2024-25, three for 2026-27, attendance figures, ~70 photographs and a
result document per programme. **An empty repository is not evidence of an empty source.**

What the research established, all from the school's own page and posters:

| Programme | Date | Classes | Attendance |
|---|---|---|---|
| 1st · 2024-25 | 17 Jan 2024 | Nur.–IX & XI | **234 students with 389 parents** |
| 3rd · 2024-25 | 14 Feb 2024 | Nur.–IX & XI | 109 students |
| 5th · 2024-25 | 11 Mar 2024 | Nur.–IX & XI | 61 students with 104 parents |
| 1st · 2026-27 | 18 Jan 2026 | Nur.–IX | **292 students appeared** |
| 3rd | 14 Feb 2026 | Nur.–IX | result published |

**⚠ C5 IS NOW MORE URGENT THAN IT WAS.** Each programme's result document is a public, unauthenticated
PDF listing every candidate by name alongside their father's name and a remark reading GRANTED or
NOT GRANTED — 292 rows for 18 January 2026. Orientation is an assessed admission step, not a welcome
evening. The client decided this site would **describe** that process and **not link or republish**
those documents; the page points at the school's own orientation page instead. Photography for the
page was taken from that same source under the same decision.

Orientation is therefore **no longer an asset gap**. What is still owed is the agenda of the morning
itself — how long it runs, what the children are asked, and how a family books a place.

---

### Two data corrections already applied, for the record

| Item | Was | Now |
|---|---|---|
| University placements | Audit §3.8 recorded them as "Not mentioned" | **The school does publish them** — the printed "Vision To Reality" board, session 2024-25, names eighteen leavers with course and institution. It was unused in `assets/placement/`. |
| Humanities stream core | `unverified: false`, so it rendered with the same confidence as PCM's definitional core | Carries its own `coreUnverified` flag and a "To be confirmed" stamp. **Clearing it needs the school's confirmation, not a judgement that History/PolSci/Geography looks right.** |

---

## Placeholder policy

Where a required asset is unavailable at build time, the component renders a **visible, labelled placeholder** carrying the exact shot or content brief — for example `[NEEDED: Shooting Range, in use, 16:9, min 2400px]`.

Placeholders are deliberately obvious. They are never filled with stock photography, lorem text, sample statistics or invented quotations, and they are tracked in a single list so nothing ships unnoticed.

**Nothing on this website will claim something about Sunbeam School Ballia that the school has not told us is true.**
