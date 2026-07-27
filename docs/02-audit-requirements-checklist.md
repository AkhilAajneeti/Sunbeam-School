# B. Client Audit Interpretation — Requirement Checklist

**Source document:** *Sunbeam School Ballia Website Content & Branding Audit Report*, dated 21 July 2026, by **Anchal Mehra, Director, Maayaz Media**. 7 pages, 14 numbered sections.

**Status:** Full text extracted and reconciled. **Every bullet in the PDF appears below.** Nothing has been dropped, merged away, or reinterpreted out of existence.

### Classification key

| Tag | Meaning |
|---|---|
| **MUST** | Explicitly requested by the client in the audit. Non-negotiable. |
| **SHOULD** | Requested by the client but delivery depends on the client supplying an asset, a decision, or content we do not have. |
| **OPTIONAL** | **Our** recommendation, not the client's. Clearly separated so the client's document is never diluted by ours. |

### Owner key

| Owner | Meaning |
|---|---|
| **DESIGN** | Solved by this redesign |
| **CLIENT** | Requires the school to supply content, photography or a decision |
| **BOTH** | We build the mechanism; the school fills it |

---

## §1 — Home Page
> *"The homepage should immediately reflect the school's vibrancy, infrastructure and learning environment."*

| # | Requirement | Class | Owner | Where satisfied |
|---|---|---|---|---|
| 1.1 | Hero banner features high-quality images of campus and students engaged in learning and co-curricular activities | MUST | BOTH | Home §03 Hero |
| 1.2 | Use the school's existing excellent photograph collection effectively | MUST | BOTH | Sitewide photography direction |
| 1.3 | **Hero is a stationary image slider — only the images transition, not the whole page** | MUST | DESIGN | Home §03 — cross-fade within a fixed frame; headline and CTAs never move |
| 1.4 | Major school event photographs organised under **dedicated galleries**, not displayed randomly | MUST | BOTH | Home §10 Life at Sunbeam → Galleries index; News & Events → Galleries |
| 1.5 | **Replace the public review section** with the school's achievements, results and recognitions | MUST | DESIGN | Google Reviews block deleted. Replaced by Home §14 Achievements & Recognition |
| 1.6 | About Us section focuses on **History and establishment** | MUST | DESIGN | Home §05 The Sunbeam Story; About → History & Legacy |
| 1.7 | About Us section focuses on **Vision and Mission** | MUST | BOTH | Home §05; About → Vision, Mission & Values |
| 1.8 | About Us section focuses on **Legacy of the institution** | MUST | DESIGN | Home §05 — 1972 Varanasi → 2013 Ballia → 456 → 2,200+ |
| 1.9 | **Director's** message remains a separate page | MUST | CLIENT | About → Director's Message |
| 1.10 | **Principal's** message remains a separate page | MUST | CLIENT | About → Principal's Message |
| 1.11 | Chairman, Secretary and other dignitaries' contributions **incorporated within the History section** — no separate menu links | MUST | DESIGN | About → History & Legacy. `/chairmans-message/` and `/secretarys-message/` retired from nav; content absorbed and 301-redirected |
| 1.12 | Principal's Message page **thoroughly proofread** for grammatical and spelling errors | MUST | BOTH | Copy rewrite. **Scope note: the homepage welcome text is materially worse than the Principal's page and must also be rewritten** — see analysis §3.1 |
| 1.13 | **Before the footer**, a section showing academic and institutional affiliations/partners as neatly displayed logos | MUST | BOTH | Home §13 Affiliations & Partners |
| 1.14 | **Followed by** a dedicated Achievements & Recognition section | MUST | DESIGN | Home §14 — placed after §13 exactly as instructed |

> **Ordering note.** The audit fixes the tail sequence as *affiliations → achievements → footer*. Our brief's suggested outline placed achievements at position 10. **We follow the audit.** To avoid burying the school's strongest proof, a compact recognition strip (Education World #1, six years) sits directly beneath the hero — a proof bar, not a duplicate section. See `04-sitemap-homepage-ia.md` §3.

---

## §2 — Academics
> *"The Academics section is the heart of a school website and should comprehensively reflect the school's educational philosophy and learning ecosystem."*

The audit specifies **six groups (A–F) containing 48 named topics** (A 6 · B 7 · C 14 · D 7 · E 8 · F 6). Architectural decision: these become **six landing pages with anchored sub-sections**, not 48 separate pages. Forty-eight thin pages would be unnavigable and mostly empty. Every named topic still gets a named, linkable anchor. See `04-sitemap-homepage-ia.md` §2.

### A. Academic Philosophy — MUST · Owner BOTH
| # | Topic | # | Topic |
|---|---|---|---|
| 2.A1 | Teaching Philosophy | 2.A4 | Critical Thinking & Creativity |
| 2.A2 | Student-Centred Learning | 2.A5 | Curriculum |
| 2.A3 | Experiential & Inquiry-Based Learning | 2.A6 | Affiliation Details |

### B. Academic Structure — MUST · Owner BOTH
| # | Topic | # | Topic |
|---|---|---|---|
| 2.B1 | Pre-Primary | 2.B5 | Senior Secondary |
| 2.B2 | Primary | 2.B6 | Streams Offered |
| 2.B3 | Middle School | 2.B7 | Subject Combinations |
| 2.B4 | Secondary | | |

*Partially available: streams verified as PCM, PCB, Commerce, Humanities. Stage-wise descriptions are `[NEEDED]`.*

### C. Teaching & Learning — MUST · Owner BOTH
| # | Topic | # | Topic |
|---|---|---|---|
| 2.C1 | Teaching Methodology | 2.C8 | AI & Digital Literacy |
| 2.C2 | Smart Classrooms | 2.C9 | Reading Programme |
| 2.C3 | Experiential Learning | 2.C10 | Language Development |
| 2.C4 | Project-Based Learning | 2.C11 | Mathematics & Science Enrichment |
| 2.C5 | Collaborative Learning | 2.C12 | Academic Clubs |
| 2.C6 | STEM Education | 2.C13 | Library Programme |
| 2.C7 | Robotics & Coding | 2.C14 | Laboratories |

*Strongly supported by verified assets: 30+ smart classrooms, 49+ interactive panels, robotics lab with drone/3-D printer/telescope, Nalanda Library 15,000+ books, nine named laboratories, Microsoft Showcase School status.*

### D. Assessment Pattern — MUST · Owner BOTH
| # | Topic | # | Topic |
|---|---|---|---|
| 2.D1 | Assessment System | 2.D5 | Remedial Support |
| 2.D2 | Homework Policy | 2.D6 | Mentoring |
| 2.D3 | Academic Calendar | 2.D7 | Competitive Examination Preparation |
| 2.D4 | Parent-Teacher Meetings (PTMs) | | |

### E. Career Development & Student Success — MUST · Owner BOTH
| # | Topic | # | Topic |
|---|---|---|---|
| 2.E1 | Career Guidance | 2.E5 | **Board Results** |
| 2.E2 | University Counselling | 2.E6 | Olympiad Achievements |
| 2.E3 | Subject Selection Guidance | 2.E7 | Scholarships |
| 2.E4 | Alumni Interaction | 2.E8 | Student Success Stories |

> **2.E5 is the highest-risk gap in the entire project.** The site currently publishes **no board results at all** — `/result/` is only a login portal to an external system. Board results are the single most-searched fact about any CBSE school. Blocking asset request. See `07-client-asset-requests.md` A1.

### F. Parent Partnership — MUST · Owner BOTH
| # | Topic | # | Topic |
|---|---|---|---|
| 2.F1 | Parent Orientation | 2.F4 | School–Parent Communication |
| 2.F2 | Parents' Forum | 2.F5 | Parent Engagement Initiatives |
| 2.F3 | Workshops & Webinars | 2.F6 | Frequently Asked Questions (FAQs) |

*Partially supported: "Parents' & Children's Forums with Mrs. Amrita Burman" already documented in School Activities. An orphaned `/faq/` page exists and can be revived.*

---

## §3 — Campus Tour
> *"Should provide a realistic and engaging overview of the school's infrastructure."*

| # | Requirement | Class | Owner | Notes |
|---|---|---|---|---|
| 3.1 | Replace existing photographs with **high-quality, professionally captured images** | MUST | CLIENT | Requires a professional shoot. Blocking for launch quality — see asset request A2 |
| 3.2 | Properly label **Shooting Range** | MUST | DESIGN | Rare differentiator; give it a dedicated feature panel |
| 3.3 | Properly label **Auditorium** | MUST | DESIGN | Sankalp Hall / Naman Hall |
| 3.4 | Properly label **Conference Room** | MUST | BOTH | Not currently on site — `[NEEDED]` |
| 3.5 | Properly label **Science Laboratories** | MUST | DESIGN | Physics, Chemistry, Biology verified |
| 3.6 | Properly label **Library** | MUST | DESIGN | Nalanda Library, 15,000+ books |
| 3.7 | Properly label **Sports Facilities** | MUST | DESIGN | Indoor and outdoor, both verified |
| 3.8 | Safety & Security as a **dedicated page or expandable link with detailed information** | MUST | BOTH | Dedicated page. Existing content is thin (5 points) — expansion `[NEEDED]` |
| 3.9 | **Merge Facilities and Infrastructure into Campus Tour**, supported by impactful photographs | MUST | DESIGN | `/facilities-infrastructure/` merges into Campus; becomes the A–Z facility index within it |

---

## §4 — Beyond Academics
> *"This section should highlight holistic student development."*

| # | Requirement | Class | Owner | Notes |
|---|---|---|---|---|
| 4.1 | Replace outdated photographs with recent, professionally framed images | MUST | CLIENT | |
| 4.2 | Update Excursions & Educational Tours — **remove 2023 photographs**, replace with latest tours | MUST | CLIENT | Confirmed: every dated excursion on the live site is 2023 |

### Sports & Games — the audit reverses the current emphasis
> *"The current emphasis appears to be primarily on achievements. Instead, the section should first showcase…"*

| # | Requirement | Class | Owner |
|---|---|---|---|
| 4.3 | Show **sports facilities available** — first | MUST | DESIGN |
| 4.4 | Show **games conducted throughout the year** | MUST | BOTH |
| 4.5 | Show **student participation** | MUST | BOTH |
| 4.6 | Show **inter-house competitions** | MUST | BOTH |
| 4.7 | Show **coaching opportunities** | MUST | CLIENT |
| 4.8 | Achievements showcased **separately**, with **major achievements first**, in **high-resolution photographs** | MUST | BOTH |

> **Design consequence:** Sports & Games splits into two pages — *Sports at Sunbeam* (participation-led, the default landing) and *Sports Achievements* (honours-led). The current single page leads with medals; the audit wants it to lead with opportunity. This is a deliberate inversion of the existing site and must not be quietly reverted.

---

## §5 — School Activities

| # | Requirement | Class | Owner | Notes |
|---|---|---|---|---|
| 5.1 | Improve layout and visual hierarchy | MUST | DESIGN | Audit acknowledges content *is* updated regularly — the failure is presentation only |
| 5.2 | Present activities in a more user-friendly, visually appealing format | MUST | DESIGN | Replaces the 150×150px undifferentiated thumbnail grid |

---

## §6 — Career

| # | Requirement | Class | Owner | Notes |
|---|---|---|---|---|
| 6.1 | Career available **directly on the main navigation menu** | MUST | DESIGN | Promoted out of "Essential Information" to a top-level item |
| 6.2 | *(Implied by §6's stated purpose — "easier accessibility to prospective applicants")* Career section must be genuinely usable by an applicant | OPTIONAL → strongly recommended | BOTH | Current page is vacancy **posters as images** with no text, no qualifications, no email, no form. An applicant cannot currently apply. Add openings as structured text + an application form |

---

## §7 — Transport

| # | Requirement | Class | Owner | Notes |
|---|---|---|---|---|
| 7.1 | Provide **detailed transport routes** | MUST | DESIGN | Data already exists — 22 buses, drivers, contacts |
| 7.2 | Include **major boarding and drop-off points/stoppages** to assist parents | MUST | DESIGN | Stoppage names already exist. This is a **presentation** problem, not a data problem |

> **Design consequence:** the 22-row × 4-column table is unusable on mobile, and transport is a top-three parent question. Rebuilt as a searchable route finder — a parent types their locality and gets the bus number, driver name and contact. See wireframe §04 and `05-design-system.md` component C18.

---

## §8 — School Planner & Academic Calendar

| # | Requirement | Class | Owner | Notes |
|---|---|---|---|---|
| 8.1 | Move School Planner and Academic Calendar **under Academics** | MUST | DESIGN | Currently under "Essential Information" |
| 8.2 | Display the calendar in an **interactive web format**, not only as downloadable files | MUST | BOTH | Requires calendar data as structured content, not a PDF — see asset request A6 |
| 8.3 | **Remove outdated academic calendars** | MUST | DESIGN | Site currently stacks 2024, 2025 and 2026. Keep current session; archive prior |

---

## §9 — Uniform Catalogue

| # | Requirement | Class | Owner | Notes |
|---|---|---|---|---|
| 9.1 | Display the catalogue in **landscape orientation** | MUST | DESIGN | |
| 9.2 | Ensure all images are **correctly aligned and formatted before uploading** — *"presentation directly contributes to the school's brand image"* | MUST | BOTH | Enforced by a fixed 3:2 landscape image slot; misaligned sources will be visibly wrong, which is the point |

> **IA fix required:** `/calendar-uniform/` currently contains calendars but **no uniform content**, while a separate `/uniform/` page exists. Calendar moves to Academics (8.1); Uniform Catalogue moves to Admissions.

---

## §10 — Notices

| # | Requirement | Class | Owner | Notes |
|---|---|---|---|---|
| 10.1 | Notice Board **primarily displays official school notices** | MUST | BOTH | |
| 10.2 | **Avoid using promotional creatives as notices** | MUST | CLIENT | Current board is WhatsApp-forwarded posters. This is a publishing-discipline change, not just a design change |
| 10.3 | If creatives are required, display them as **thumbnails linked to the complete notice** | MUST | DESIGN | Notice model = title + date + category + body text, with optional thumbnail. Text is mandatory; image is optional. Structurally prevents a poster-only notice |

---

## §11 — Latest News & Events
> *"This section should always remain current."*

| # | Requirement — keep updated regularly | Class | Owner |
|---|---|---|---|
| 11.1 | Recent achievements | MUST | CLIENT |
| 11.2 | School events | MUST | CLIENT |
| 11.3 | Competitions | MUST | CLIENT |
| 11.4 | Workshops | MUST | CLIENT |
| 11.5 | Celebrations | MUST | CLIENT |
| 11.6 | Important announcements | MUST | CLIENT |

> **Blocker:** there is currently **no functioning news system** — the WordPress posts sitemap contains two entries, one of which is injected Russian SEO spam. We must build **News**, **Events** and **Notices** as three distinct content types (audit §11 vs §10 treat them separately, and our brief requires visible distinction), and the school must commit to an update cadence. A "current" section that goes stale is worse than none.

---

## §12 — Alumni

| # | Requirement | Class | Owner | Notes |
|---|---|---|---|---|
| 12.1 | Alumni menu on the **main navigation bar, beside Career** | MUST | DESIGN | Both promoted to top level, adjacent, exactly as specified |
| 12.2 | **Alumni Registration form** to encourage former students to reconnect | MUST | BOTH | Needs a form handler and a data-retention decision from the school |

*No alumni page exists on the current site. This section is built from zero. "Pradiptam 2.0 Alumni Meet" is the one verified alumni asset available.*

---

## §13 — Alumni Testimonials

| # | Requirement | Class | Owner | Notes |
|---|---|---|---|---|
| 13.1 | **Dedicated testimonial section on the homepage** | MUST | DESIGN | Home §12 |
| 13.2 | Short **video** testimonials from alumni | SHOULD | CLIENT | Design-blocked on client-produced video — see asset request A4 |
| 13.3 | Each testimonial covers: current profession | SHOULD | CLIENT | |
| 13.4 | …higher education journey | SHOULD | CLIENT | |
| 13.5 | …career achievements | SHOULD | CLIENT | |
| 13.6 | …their experience at Sunbeam School Ballia | SHOULD | CLIENT | |

> Classified SHOULD only because delivery depends entirely on the school filming alumni. The **section is MUST and will be built**; it ships with a graceful text-quote fallback and a documented "no fabricated testimonials" rule. **We will not invent alumni.**

---

## §14 — Footer

| # | Requirement | Class | Owner | Notes |
|---|---|---|---|---|
| 14.1 | **Reduce the size of social media icons** for a cleaner, balanced appearance | MUST | DESIGN | 16px monochrome inline icons, footer-bottom row |
| 14.2 | Review the school's **YouTube and X** profiles | SHOULD | CLIENT | Client action |
| 14.3 | If not updated regularly — either **maintain consistently or remove the links**, to avoid reflecting an inactive digital presence | MUST | CLIENT | **Requires a client decision before launch.** We will not ship links to dormant channels. See asset request A9 |

---

## Requirement totals

| Section | MUST | SHOULD | OPTIONAL |
|---|---|---|---|
| §1 Home Page | 14 | — | — |
| §2 Academics (A–F) | 48 | — | — |
| §3 Campus Tour | 9 | — | — |
| §4 Beyond Academics | 8 | — | — |
| §5 School Activities | 2 | — | — |
| §6 Career | 1 | — | 1 |
| §7 Transport | 2 | — | — |
| §8 Calendar | 3 | — | — |
| §9 Uniform | 2 | — | — |
| §10 Notices | 3 | — | — |
| §11 News & Events | 6 | — | — |
| §12 Alumni | 2 | — | — |
| §13 Alumni Testimonials | 1 | 5 | — |
| §14 Footer | 2 | 1 | — |
| **Total** | **103** | **6** | **1** |

**103 MUST requirements. Every one is mapped to a page, a homepage section, or a named asset request. None have been dropped.**

---

## Additional findings — NOT in the client audit

Raised because they were found during analysis and materially affect the outcome. **These are ours, not the client's, and are marked OPTIONAL by classification — but two are urgent enough that we flag them regardless of design scope.**

| # | Finding | Severity | Class |
|---|---|---|---|
| X1 | **Mandatory Public Disclosure page is non-compliant.** `/public-discloser/` contains 2019-20 class-teacher and class-strength tables — including student monitor names — instead of CBSE-required disclosure fields and certificate uploads | **P0 — regulatory** | OPTIONAL (outside audit scope, inside professional duty) |
| X2 | **WordPress SEO spam injection.** `/investirovanie-v-obligacii-pljusy-i-minusy/` (Russian, "investing in bonds") indexed since Jan 2023 | **P0 — security/SEO** | OPTIONAL |
| X3 | **Brand colour contradicts the logo.** Site theme is orange `#F16334`; the logo is maroon `#8B0000` + gold `#FFE001`. Directly limits the "premium institutional" outcome the audit's conclusion asks for | **P1** | OPTIONAL |
| X4 | **Homepage welcome copy is machine-spun** ("understudies", "guzzling more up to date"). Audit §1 asks for proofreading of the *Principal's* page only; the homepage is worse | **P1** | OPTIONAL — extends 1.12 |
| X5 | **No enquiry form anywhere on the site,** including `/contact-us/`. No campus-visit booking. Every path terminates in a phone call or a PDF | **P1 — conversion** | OPTIONAL |
| X6 | **Gmail address as official school contact** (`sunbeamballia2131962@gmail.com`) | **P2 — trust** | OPTIONAL |
| X7 | **Zero WebP/AVIF; 96 images, 30 scripts, 38 stylesheets on the homepage.** Undermines the audit's photography-led ambition on mobile connections | **P1 — performance** | OPTIONAL |
| X8 | **No meta description** on the homepage | P2 — SEO | OPTIONAL |
| X9 | **Nav/footer inconsistency** — "School Houses" vs "School Clubs" in the same slot | P2 | OPTIONAL |
| X10 | **~12 orphan pages** with no navigation path, including two duplicate pairs (`/contact/` ÷ `/contact-us/`, `/event-chronicles/` ÷ `/event-chronicles-main/`) | P2 | OPTIONAL |
| X11 | **"Hybrid Classes"** — residual COVID-era block still on the 2026 homepage | P2 | OPTIONAL — resolved by the §1 homepage rebuild |

**X1 and X2 are outside the scope of a website redesign but should be reported to the school immediately.** They are not design decisions and we should not silently absorb them into the build.
