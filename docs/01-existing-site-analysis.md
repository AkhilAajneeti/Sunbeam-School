# A. Existing Website Analysis — sunbeamballia.edu.in

**Audited:** 27 July 2026
**Method:** Full crawl of `wp-sitemap-posts-page-1.xml` (67 pages), page-by-page content extraction, raw HTML inspection of the homepage, and pixel-level colour sampling of the official logo asset.

---

## 1. What the site actually is, technically

| Property | Finding |
|---|---|
| Platform | WordPress |
| Theme | OceanWP |
| Page builder | Elementor + Essential Addons + Essential Blocks |
| Other plugins | Smart Slider 3, Popup Maker, Sticky Menu on Scroll, WPZOOM Social Icons, `roll-number-lookup` |
| Homepage HTML weight | 216 KB (markup alone) |
| `<script src>` tags | 30 |
| `<link rel=stylesheet>` | 38 |
| `<img>` tags on homepage | 96 |
| WebP / AVIF images | **0** |
| jQuery | Present (8 references) |
| `<meta name="description">` | **Absent** |
| `<h1>` | 1 (correct) |
| Viewport meta | Present |

**Read:** 68 render-blocking-ish requests before a single photograph appears, 96 raster images on one page, and not one modern image format. This is the single biggest measurable performance defect and it directly undermines the audit's core ask — a photography-led homepage. Astro + `astro:assets` fixes this structurally rather than cosmetically.

---

## 2. Strengths worth preserving

These are real assets. The redesign must **carry them forward**, not discard them.

1. **Genuine, specific, verifiable credentials.** Education World *#1 Co-Ed Day School of Ballia* for six consecutive years (2019-20 → 2024-25); Microsoft Showcase School; 100 teachers certified as Microsoft Innovative Educator Experts; Brainfeed School Excellence Award; Dr. Kalam Leadership Excellence Award; NCC 'A' and 'B' affiliations. Very few district-level Indian schools have this much *provable* third-party recognition. It is currently buried on an inner page.
2. **A real, documented legacy.** Sunbeam founded in Varanasi in **1972** by **Dr. Amrit Lal 'Ishrat' Madhok** and his wife; Ballia campus opened **2013–14** with **456 students**, now **2,200+**. That is a genuine growth story with numbers — exactly the "legacy" content the audit asks for.
3. **Unusually strong infrastructure inventory.** Shooting range, robotics lab with drone / 3-D printer / telescope / embedded systems, Srijan Lab, MUN Lab, Geography Lab, Nalanda Library (15,000+ books, 25 periodicals), 30+ smart classrooms, 49+ interactive panels, two 40-computer labs, Sankalp & Naman Halls. This is premium content that is currently presented as a flat bullet list.
4. **Transport data is genuinely detailed.** 22 buses with route numbers, driver names, contact numbers and named stoppages, plus a transport in-charge contact. The audit asks for detailed routes with boarding points — **the school already has this.** It needs design, not data collection.
5. **Deep activity archive.** Genesis 2024 annual function ("Voyages of Discovery", ISRO director as chief guest), Indian AI Impact Festival 2024 win, Chandrayaan-3 live viewing, Pradiptam alumni meet, national-level Vidyarthi Vigyan Manthan and NCSC qualifiers, Inspire Award MANAK selections.
6. **Substantial sports record** with named competitions and medal counts (Asmita Khelo India Women's League, 11th BSKA Karate, Taekwondo Poomse 2025, district handball, CBSE Cluster V Kho-Kho).
7. **Current curriculum documents.** "PRECEPT" syllabus PDFs for Nursery–XII are dated **2026-27** — the academic content *is* being maintained.
8. **Five active social channels** (Facebook, Instagram, LinkedIn, X, YouTube).

---

## 3. Weaknesses

### 3.1 Content quality — critical

**The homepage welcome copy is machine-spun and near-unreadable.** Verbatim from the live site:

> "The school targets continuing a situation whereby understudies can exceed expectations in academic exercises, show predominant learning and create scholarly limits and abilities that set them up for administration to the public… never to quit craving more, at the same time acknowledging, tolerating and guzzling more up to date and better as they go ahead with their lives."

"Understudies" is a thesaurus-swap for "students"; "guzzling" for "imbibing". This is the **first paragraph a prospective parent reads.** The audit flags proofreading for the Principal's Message specifically; the problem is broader and worse on the homepage itself. Every line of body copy must be rewritten.

### 3.2 The Mandatory Public Disclosure page is non-compliant

`/public-discloser/` (note the misspelled slug) does **not** contain CBSE mandatory disclosure data. It contains **class-teacher and class-strength tables from 2019-20**, including student monitor names. Missing: affiliation validity period, society/trust details, land and built-up area, classroom dimensions, lab counts, staff PGT/TGT/PRT breakdown, student-teacher ratio, fee structure, and the required certificate scans.

This is a **regulatory exposure, not just a design flaw** — CBSE Affiliation Bye-Laws require these fields with document uploads. It also publishes minors' names against class data with no evident purpose. Flagged as P0.

### 3.3 Evidence of WordPress compromise

The posts sitemap contains exactly two entries. One is:

`/investirovanie-v-obligacii-pljusy-i-minusy/` — Russian for *"Investing in bonds: pros and cons"*, dated 2023-01-31.

This is classic SEO spam injection on an unpatched WordPress install. It also means **the entire "posts" content type holds no school news** — there is no functioning news system at all, which is precisely what audit §11 demands.

### 3.4 Brand identity is inconsistent with its own logo

Pixel sampling of the official logo (`cropped-logo.png`, 816×224):

| Source | Colour | HSL |
|---|---|---|
| Logo crest (dominant chromatic) | `#8B0000` | hsl(0, 100%, 27%) — deep maroon |
| Logo crest (secondary chromatic) | `#FFE001` | hsl(53, 100%, 50%) — gold |
| Logo wordmark | `#9E9E9E`–`#A1A1A1` | neutral grey |
| **Live site theme colour** | **`#F16334`** | **hsl(15, 87%, 57%) — orange** |

The website's dominant accent (23 occurrences in homepage CSS) is a **bright orange that appears nowhere in the school's logo.** The school's actual equity — maroon and gold, an inherently prestigious, academic, Indian-institutional pairing — is unused. Correcting this is the highest-leverage brand move available, and it costs nothing.

### 3.5 Navigation and IA

- **Seven top-level items, all dropdowns, no landing pages.** "About us" opens to 12 flat children with no hierarchy. There is no "About" overview page in the menu.
- **Career and Alumni are both missing from main navigation.** Career is buried under "Essential Information"; Alumni has no menu presence at all. Audit §6 and §12 explicitly require both in the main bar, adjacent.
- **"Essential Information" is a junk drawer** — Career, Press Release, Golden Rules, Bus Routes, Calendar, Uniform. Six unrelated items grouped by having nowhere else to go.
- **Nav/footer disagree.** Main nav says "School Houses"; footer says "School Clubs" in the same slot.
- **Broken IA on the calendar/uniform pages.** `/calendar-uniform/` contains calendars for 2024, 2025 and 2026 but **no uniform content**, despite the name and despite a separate `/uniform/` page existing. Audit §8 asks for outdated calendars to be removed; three years are stacked.
- **Utility links outnumber useful ones.** Eight utility items (Mandatory Public Disclosure, Notice, Contact, Apply Nursery–IX, Apply XI, Login, Result, Download T.C.) compete with each other at equal weight.
- **Orphan pages in the sitemap** with no navigation path: `/generic-ui-2/`, `/online-skilled-courses/`, `/account/`, `/ms-sahar-bano/`, `/faq/`, `/testimonials/`, `/gallery/`, `/general-info/`, `/open-exam/`, `/assignment-homework/`, `/event-chronicles-main/` (duplicate of `/event-chronicles/`), `/contact/` (duplicate of `/contact-us/`).

### 3.6 Homepage structure

Current order: Slider → Welcome text → Principal Speak → "Hybrid Classes" → "Our school have a lot to offer" → Campus tour thumbnails → Reviews (Google link).

Problems:
- **"Hybrid Classes"** is residual COVID-era content, still on the homepage in 2026.
- **"OUR SCHOOL HAVE A LOT TO OFFER FOR OUR STUDENTS"** — grammatical error in an H2.
- **The Google Reviews block is the emotional close of the homepage.** Audit §1 explicitly requires replacing this with achievements, results and recognitions. It currently outsources the school's credibility to a third-party link that leaves the site.
- **No history, no vision, no mission, no legacy on the homepage** — the three things audit §1 says the About section must lead with.
- **No academics, no results, no alumni, no news, no affiliations** anywhere on the homepage.
- **Slider carries "THE ONLINE EDUCATION PORTAL"** — a message aimed at existing users, not prospective parents.

### 3.7 Photography usage

The school has the photographs; the site squanders them.

- Campus Tour has ~40 images and ~20 labelled facility sections — **the raw material is good** — but they are rendered as uniform thumbnail grids that open lightboxes. No hierarchy, no scale, no editorial crop.
- Sports & Games carries ~80 thumbnails at 150×150px. A medal ceremony rendered at thumbnail size communicates nothing.
- School Activities is a reverse-chronological grid of 150×150 thumbnails, **mostly without text descriptions** — the reader cannot tell what an event was without opening images.
- Excursions & Tours: most recent dated content is **2023**. Audit §4 names this explicitly.
- Notices are **image creatives / WhatsApp screenshots**, not text notices — exactly what audit §10 prohibits. Filenames like `WhatsApp Image…` indicate posters forwarded from chat and uploaded directly.
- Career page is **vacancy posters as images** with no extractable text, no qualifications, no application email, no form. An applicant literally cannot apply.

### 3.8 Missing content that parents need

| Missing | Consequence |
|---|---|
| **Board results (X & XII)** — no pass %, no toppers, no year-on-year data | The single most-searched fact about any CBSE school is absent. `/result/` is only a login portal to an external system. Audit §2E requires "Board Results". |
| Student strength / teacher count on-site as a stated fact | Present only inside facilities prose (2,200+; 130+ teaching staff) |
| Admission eligibility & age criteria | Locked inside a Google Drive prospectus PDF |
| Admission dates / session timeline | Not stated |
| Fee structure in HTML | PDF-gated |
| Alumni content of any kind | No page exists |
| Scholarships | Not mentioned |
| University placements / where students go | Not mentioned |
| Faculty profiles with credentials | Page exists; thin |
| Campus visit booking | No mechanism |
| Any enquiry form | `/contact-us/` has **no form** — address and two phone numbers only |
| School email visibility | `sunbeambailia2131962@gmail.com` — a Gmail address, not a domain address |

### 3.9 Trust signals that actively undercut trust

- **`sunbeamballia2131962@gmail.com`** as the official contact address. A school with its own domain using Gmail reads as improvised to an evaluating parent.
- Google Reviews as the credibility mechanism (audit §1 rejects this).
- 2019-20 data presented on a page labelled as current disclosure.
- 2023 photographs presented as current excursions.
- "Hybrid Classes" implying pandemic-era operations.
- Copyright reads 2026 while content underneath is up to seven years old — the mismatch is itself a signal.

### 3.10 Mobile experience

Assessed from markup and construction rather than device testing (recommend real-device verification before build):

- Elementor + OceanWP with 38 stylesheets produces heavy mobile payload on the 4G/3G connections typical of Ballia district.
- Seven dropdown menus collapse to a hamburger accordion with 12 children under "About us" — deep scroll, small targets.
- 150×150px thumbnail grids reflow to cramped multi-column layouts; a 150px source image cannot fill a 390px mobile viewport without visible softness.
- The **22-row × 4-column bus route table** has no responsive strategy. On mobile this is either a horizontal-scroll trap or unreadably compressed — and transport is a top-three parent question.
- Smart Slider 3 full-page slider is a known LCP and CLS liability on mobile.
- Zero WebP/AVIF means mobile users download desktop-weight JPEGs.

**Most Indian school-website traffic during admission season is mobile.** The current build treats mobile as a reflow of desktop.

### 3.11 Admissions journey — traced end to end

A parent's actual path today:

1. Lands on homepage → reads spun English about "understudies".
2. Looks for proof of quality → finds a Google Reviews link that sends them *off the site*.
3. Looks for results → `/result/` is a login wall for existing students.
4. Looks for academics → finds timetables, textbook lists and promotion policy. **No teaching philosophy, no curriculum narrative, no streams explanation.**
5. Looks for fees → PDF download.
6. Looks for admission process → Google Drive prospectus.
7. Wants to ask a question → no form. Two phone numbers.
8. Wants to visit → no booking mechanism.

**There is no conversion path on this website.** Every route terminates in a phone call, a PDF, or an external domain. The journey is not weak — it is absent. This, more than any visual issue, is what the redesign must fix.

---

## 4. Summary judgement

The school is materially stronger than its website. Sunbeam Ballia has six years of #1 district ranking, a 1972 institutional lineage, a shooting range and a robotics lab, 2,200 students, and a genuine medal record — presented through spun text, 150px thumbnails, an orange that isn't its brand colour, and a homepage that closes by linking to Google.

**The redesign's job is not to invent a story. It is to stop hiding one.**

Two findings sit outside design scope and need client attention regardless of this project: the non-compliant Mandatory Public Disclosure page and the WordPress spam injection.

---

## 5. Verified facts inventory

Everything below was extracted from the live site and may be used in design and copy **without invention**. Anything not on this list is `[NEEDED]`.

**Identity**
- Sunbeam School, Agarsanda, Ballia — CBSE affiliated, Delhi
- Affiliation No. **2131962** · School Code **70205**
- Group founded Varanasi **1972**, by Dr. Amrit Lal 'Ishrat' Madhok and his wife
- Ballia campus established **2013** (session 2013–14)
- Opened with **456 students** → now **2,200+**, Nursery to Class XII, co-educational
- Streams: **PCM, PCB, Commerce, Humanities**
- Principal: **Mrs. Arpita Singh**
- **Director of Sunbeam School Ballia: Dr. Kunwar Arun Singh** — M.Sc. (Chemistry), Ph.D.; EdLEAP: Education Leader Program from IIM Calcutta; B.Ed. & P.G.D.C.A. Supplied by the school with his message, 2026-07. Live on `/about/directors-message/`
- Sunbeam **Group** Director referenced in activity write-ups: Mrs. Amrita Burman — a *different* person in a *different* role. Do not use her name for the Ballia school
- Tagline in use: **"Educating the FUTURE!"**
- Group phrase: **"Lighting the Lamp of Knowledge"**
- Address: Agarsanda, near Hanuman Temple, Ballia, Uttar Pradesh 277001; 2 km from Ballia Roadways Bus Stand on Garwar Road
- Phones: 7755005908 (admissions), 7755005905, 7755005909 (transport — Mr. Sheo Sarjan Singh)
- Email: sunbeamballia2131962@gmail.com

**Recognition**
- Education World **#1 Co-Ed Day School of Ballia**, six consecutive years, 2019-20 → 2024-25
- Microsoft Showcase School · 100 teachers as Microsoft Innovative Educator Experts
- Sunbeam Eduserve Award — Best School of the Year
- Brainfeed School Excellence Award
- Dr. Kalam Leadership Excellence Award
- NCC 'A' and 'B' affiliations; two teachers promoted to officer rank
- National-level: Vidyarthi Vigyan Manthan, National Children's Science Congress; Inspire Award MANAK selections

**Infrastructure**
- 30+ digitally smart classrooms · 49+ interactive flat panels
- Labs: Physics, Chemistry, Biology, Mathematics, Language, Active Learning, Geography, Srijan, MUN
- Robotics Lab — drone, 3-D printer, telescope, embedded system design
- Junior Computer Lab 40+ computers · Senior Computer Lab 40+ computers
- Nalanda Library — 15,000+ books, 25 periodicals, magazines, journals
- Sankalp Hall · Naman Hall · Shooting Range · Infirmary · Art Room · Dance Room · Kids Park · Toy Library
- Prayer grounds: Naman (senior block), Abhayeti (junior block) · Playground "Josh"
- Early years: swings, water pool, sand pool, little agriculture land
- Indoor sports: chess, table tennis, carrom, aerobics, yoga, taekwondo, karate
- Outdoor sports: hockey, skating, football, basketball, kho-kho, volleyball, kabaddi, cricket
- 29+ buses, GPS and speed-governor enabled · 130+ teaching staff · elevator · full CCTV
- KIDS Entrepreneurship programme for Class 7
- Safety: 15,000-litre fire hose reel, extinguishers in all corridors, 24×7 guards, maids in junior classes

**Sports record**
- Asmita Khelo India Women's League — Handball 1st, Kabaddi 2nd, Volleyball 2nd
- 11th BSKA Karate Championship — Classes I & II, 14 medals (12 bronze, 2 silver)
- Taekwondo Poomse Championship 2025 — 21 students, Classes I–IX, 10 gold / 9 silver / 2 bronze
- District Handball — Junior Boys 1st, Senior Boys 2nd, Girls 1st
- Junior District Championship — overall 2nd
- 2016 hosted CBSE Cluster V Kho-Kho Championship; Kho-Kho winners 2018-19 and 2019-20
- Chess U-11 boys qualified nationals 2016-17; 2018 U-11 boys 1st among 200 schools

**Activities & events**
- Genesis 2024 annual function — "Voyages of Discovery", ISRO director as chief guest
- Indian AI Impact Festival 2024 — Ayushi (Class VII), 1st place
- Pradiptam 2.0 Alumni Meet · Chandrayaan-3 soft-landing live viewing
- Virtual Interbranch Declamation — Class IV took top three positions
- Sikh Gurus & Their Teachings Week · Little Agriculturists · Investiture Ceremony
- National Physics Workshop (PGT faculty, Sunbeam Mughalsarai) · Good Schools Alliance literacy project

**Excursions (all 2023 or undated — audit requires refresh)**
- Jaipur Heritage Festival 2023 · Varanasi ETM Festival 2023 · Indore IMUN Summit 2023 (XI & XII)
- Kunwar Singh Inter College, Ballia (Class 6, 2023) · Buxar fort & museum (IX) · BHU Varanasi (XII)
- Learning expeditions: Parag Dairy, Judicial Court, Post Office, Van Bihar, Basantpur, Bhrigu Temple, Karo Dham

**Documents on site**
- PRECEPT syllabus PDFs, Nursery–XII, session 2026-27
- Academic calendars 2024 (images), 2025 (PDF), 2026 (PDF)
- SunBeam Times gallery (12 images)
- Bus routes — 22 buses, drivers, contacts, named stoppages
