# C · D · E — Content Inventory, Audience, and User Journeys

---

# C. Content Inventory

## C1. Reusable as-is (structure may change, substance is sound)

| Content | Source | Destination | Note |
|---|---|---|---|
| Founding story — Varanasi 1972, Dr. Amrit Lal 'Ishrat' Madhok | `/about-us/` | Home §05, About → History & Legacy | Strongest untapped asset on the site |
| Ballia campus 2013–14; 456 → 2,200+ students | `/history-of-school/`, `/about-us/` | Home §05 | Verified growth statistic — usable |
| Education World #1 Co-Ed Day School of Ballia ×6 (2019-20 → 2024-25) | `/about-us/` | Home hero proof strip + §14 | Six consecutive years is the headline credential |
| Microsoft Showcase School; 100 MIE Expert teachers | `/about-us/` | Home §07, §14; Academics C | Substantiates "AI & Digital Literacy" (2.C8) with evidence, not claims |
| Brainfeed, Sunbeam Eduserve, Dr. Kalam awards | `/about-us/` | Home §14; About → Achievements | |
| NCC 'A' and 'B' affiliations | `/about-us/` | Beyond Academics → NCC | |
| Vidyarthi Vigyan Manthan, NCSC, Inspire Award MANAK | `/about-us/` | Academics E → Olympiad Achievements | |
| Full facility inventory (30+ smart classes, 49+ panels, 9 labs, robotics lab, Nalanda Library 15,000+ books) | `/facilities-infrastructure/` | Campus (merged per audit 3.9); Academics C | Data excellent, presentation poor |
| Safety measures — fire hose reel 15k L, 24×7 guards, CCTV, GPS buses, junior-class maids | `/safety-security/` | Campus → Safety & Security | Only 5 points; needs expansion (audit 3.8) |
| Sports achievement record — Asmita Khelo India, BSKA Karate, Taekwondo Poomse 2025, district handball, Kho-Kho, chess | `/sports-games/` | Beyond Academics → Sports Achievements | Split from participation content per audit 4.8 |
| Bus routes — 22 buses, drivers, contacts, named stoppages | `/bus-routes/` | Campus → Transport | Satisfies audit 7.1 and 7.2 from existing data |
| Transport in-charge — Mr. Sheo Sarjan Singh, 7755005909 | `/bus-routes/` | Campus → Transport | |
| PRECEPT syllabus PDFs, Nursery–XII, 2026-27 | `/syllabus-curriculum/` | Academics → Resources | Current — keep |
| Activity archive — Genesis 2024, AI Impact Festival, Chandrayaan-3, Investiture, declamation | `/school-activities/` | Beyond Academics; News archive | Re-present, don't rewrite (audit §5) |
| Affiliation No. 2131962, School Code 70205 | `/affiliation/` | Footer, About → Affiliation | |
| Address, phones, socials | `/contact-us/`, footer | Global | |
| Principal — Mrs. Arpita Singh | Homepage | About → Principal's Message | Message needs rewrite (audit 1.12) |

## C2. Outdated — remove or replace

| Content | Problem | Action |
|---|---|---|
| Homepage welcome paragraph | Machine-spun English — "understudies", "guzzling more up to date" | **Rewrite entirely.** Finding X4 |
| "Hybrid Classes" homepage block | COVID-era residue, live in 2026 | Remove |
| "OUR SCHOOL HAVE A LOT TO OFFER…" | Grammatical error in an H2 | Remove/rewrite |
| Google Reviews block | Audit 1.5 explicitly replaces it | Remove |
| `/public-discloser/` contents | 2019-20 class-teacher tables published as mandatory disclosure; names minors | **Replace with compliant CBSE disclosure.** Finding X1 |
| Excursions — all dated content is 2023 | Audit 4.2 names this | Replace with current tours |
| Academic calendars 2024 + 2025 | Audit 8.3 | Archive; keep current session only |
| Notices as WhatsApp poster images | Audit 10.2 | Re-enter as structured text notices |
| Career vacancy posters as images | No text, no qualifications, no apply route | Re-enter as structured openings |
| `/investirovanie-v-obligacii-pljusy-i-minusy/` | Injected Russian SEO spam | **Delete + security review.** Finding X2 |
| Orphan pages — `/generic-ui-2/`, `/online-skilled-courses/`, `/account/`, `/ms-sahar-bano/`, `/open-exam/`, `/contact/`, `/event-chronicles-main/` | No nav path; duplicates | Retire with 301s |
| Site theme orange `#F16334` | Contradicts the logo | Replace with maroon/gold system |
| `sunbeamballia2131962@gmail.com` | Gmail as official school contact | Migrate to a domain address |

## C3. Missing — must be created

| Missing | Required by | Severity |
|---|---|---|
| **Board results — X & XII, pass %, toppers, 3-year trend** | Audit 2.E5 | **Blocking** |
| Academic philosophy narrative (all of 2.A) | Audit 2.A1–A6 | Blocking for Academics |
| Stage-wise descriptions — Pre-Primary → Senior Secondary | Audit 2.B1–B5 | Blocking |
| Subject combinations per stream | Audit 2.B7 | High |
| Teaching methodology narrative | Audit 2.C1 | High |
| Programme descriptions — Reading, Language Development, Maths & Science Enrichment | Audit 2.C9–C11 | High |
| Assessment system, homework policy, PTM schedule, remedial, mentoring, competitive-exam prep | Audit 2.D1–D7 | High |
| Career guidance & university counselling detail | Audit 2.E1–E2 | High |
| Scholarships | Audit 2.E7 | High |
| Student success stories | Audit 2.E8 | High |
| University placement destinations | Parent decision-making | High |
| All Parent Partnership content | Audit 2.F1–F6 | High |
| **Entire Alumni section** — none exists | Audit §12 | Blocking |
| Alumni video testimonials | Audit §13 | High |
| Alumni registration form + data-retention policy | Audit 12.2 | High |
| Conference Room content | Audit 3.4 | Medium |
| Expanded Safety & Security | Audit 3.8 | Medium |
| Sports participation, inter-house, coaching content | Audit 4.3–4.7 | High |
| Current excursions (2025–26) | Audit 4.2 | High |
| Structured news/events/notices system + cadence | Audit §11 | Blocking |
| Structured job openings + application form | Audit §6 | High |
| Admission eligibility, age criteria, dates, documents | Conversion | **Blocking** |
| Fee structure in HTML | Conversion | High |
| Enquiry form + campus-visit booking | Finding X5 | **Blocking** |
| Faculty profiles with credentials | Trust | Medium |
| Compliant Mandatory Public Disclosure | Finding X1 | **P0 regulatory** |

## C4. Requires client confirmation

1. **Vision and Mission statements.** `/mission-vision/` returns no extractable statement text. Audit 1.7 requires both on the homepage. We cannot write a school's mission for it.
2. **Motto.** Two candidate phrases in circulation — "Educating the FUTURE!" (Ballia) and "Lighting the Lamp of Knowledge" (Sunbeam Group). Which is primary?
3. **Student and staff counts as of 2026-27.** "2,200+" and "130+" are undated on the site.
4. **Affiliation validity period** and society/trust name.
5. **Chairman's, Secretary's and dignitaries' content** — audit 1.11 absorbs these into History. Confirm which individuals and what contribution text.
6. **Whether the Director's and Principal's messages will be rewritten**, and by whom (audit 1.12).
7. **YouTube and X** — maintain or remove (audit 14.3). Blocking for footer.
8. **Alumni data-retention and consent** for the registration form.
9. **Publishing owner and cadence** for News/Events/Notices (audit §11).
10. **Whether board results may be published** with topper names and photographs (consent).

## C5. Requires new photography

Audit 3.1 and 4.1 both demand professionally captured replacement imagery. **This is the project's single largest external dependency** — an image-led design cannot be delivered on 150×150px thumbnails. Full shot list in `07-client-asset-requests.md`.

Priority order: hero campus/student photography → labelled facilities (shooting range, auditorium, conference room, labs, library, sports) → classroom learning → sports participation → arts and events → portraits (principal, faculty, alumni) → current excursions.

---

# D. Audience

## D1. Prospective parents — **primary**

Deciding where their child spends the next 10–14 years, usually for Nursery, Class I, Class VI or Class XI entry. Mostly Ballia town and surrounding blocks (Reoti, Bansdih, Garwar, Haldi, Baheri, Sagarpali — inferable from bus routes). Mixed English fluency; many on mid-range Android over 4G.

**They need:** proof the school is genuinely good (results, rankings, recognitions) · what and how their child will be taught · what the campus is actually like · whether the bus reaches their locality · fees · how to apply · a human to talk to.

**They fail today because:** results don't exist on the site, academics is timetables and textbook lists, credibility is outsourced to a Google link, there is no form, and no way to book a visit.

**Design implication:** this audience drives the homepage order, the Academics architecture, the transport route finder, and every CTA. **They are the reason the redesign exists.**

## D2. Existing parents — highest frequency

Return weekly for notices, calendar, timetable, exam schedule, results portal, fee payment, bus information.

**They need:** speed and findability, not persuasion.

**Design implication:** the utility bar and Parent Quick Access (Home §04) exist for them. They must never have to scroll a marketing homepage to reach a notice. Their needs are satisfied *above* the hero, not inside it.

## D3. Students

Timetables, syllabus (PRECEPT), exam schedules, results, houses, clubs, council, activity galleries, sports.

**Design implication:** galleries and activity content must be genuinely good — students are the most likely to share it, and they are the reason the school's Instagram matters.

## D4. Alumni — currently unserved

The site has no alumni page. Audit §12 and §13 both address them; "Pradiptam 2.0" proves an alumni community exists offline.

**They need:** a reason to reconnect, a registration route, visible peer stories.

**Design implication:** Alumni enters main navigation beside Career (audit 12.1). Alumni content does double duty — it serves alumni *and* it is among the most persuasive proof available to D1, because it shows outcomes.

## D5. Job applicants

Teachers and staff, some relocating.

**They need:** open roles, qualifications, salary/benefit signals, culture, how to apply.

**They fail today because:** vacancies are image posters with no text and no application route.

**Design implication:** Career enters main navigation (audit 6.1) with structured openings and a working form.

## D6. Secondary audiences

CBSE and regulatory inspectors (Mandatory Public Disclosure — must be compliant and easy to find); local media (Press Release); partner organisations and Sunbeam Group branches; vendors.

---

# E. Primary User Journeys

## E1. Prospective parent — the critical path

The homepage is designed as an **answer sequence**. Each homepage section resolves one question and creates the next.

| Step | Parent's question | Where answered | Homepage § |
|---|---|---|---|
| 1 | What is this school? | Hero — name, character, one photograph that reads as *this* campus | §03 |
| 2 | Is it actually any good? | Recognition proof strip — Education World #1, six years | §03b |
| 3 | *(existing parents branch off here)* | Parent Quick Access | §04 |
| 4 | Who are they? Can I trust them? | The Sunbeam Story — 1972, 2013, 456 → 2,200+ | §05 |
| 5 | What will my child actually study? | Academic Journey — five stages, streams | §06 |
| 6 | How do they teach? Is it modern? | Learning at Sunbeam — experiential, STEM, robotics, AI, Microsoft Showcase | §07 |
| 7 | What's the campus like? | Campus Experience — labelled facilities | §08 |
| 8 | Is there more than exams? | Beyond Academics — sports-first, arts, clubs | §09 |
| 9 | What is it like to be a child here? | Life at Sunbeam — immersive photography | §10 |
| 10 | Is the school alive right now? | News, Events & Notices | §11 |
| 11 | What happens to students afterwards? | Alumni — From Sunbeam to the World | §12 |
| 12 | Who vouches for them? | Affiliations & Partners | §13 |
| 13 | Show me the evidence. | Achievements & Recognition | §14 |
| 14 | How do I start? | Admissions CTA — enquire · visit · apply | §15 |

**Deeper path:** Home → Academics landing → stage page (e.g. Senior Secondary) → streams & subject combinations → **Board Results** → Campus Tour → Transport route check → Fee Structure → **Enquiry form or Book a Campus Visit**.

**Conversion points — three, deliberately different commitment levels:**
1. **Enquire** — lowest friction, a form (currently impossible on the live site)
2. **Book a campus visit** — medium, highest-converting for schools (currently impossible)
3. **Apply online** — highest, existing portals for Nursery–IX and XI

**Failure modes the design must prevent:** dead-ending in a PDF · leaving the site for proof · finding no way to ask a question · being unable to check whether the bus serves their locality · finding no results.

## E2. Existing parent — utility path

Any device → utility bar or Quick Access → Notices / Calendar / Results / Timetable / Transport / Fee payment. **Target: two taps from any page.** Never routed through marketing content.

## E3. Alumnus

Home → Alumni (main nav) → stories and video testimonials → **Register** → Pradiptam. Entry is often direct from a social link, so the Alumni landing page must stand alone.

## E4. Job applicant

Home → Career (main nav) → Current Openings → role detail with qualifications → **Apply** (form + CV upload) → confirmation.

## E5. Student

Direct URL or utility bar → Results portal / Timetable / Syllabus / Exam Schedule / Galleries. Mobile-first, repeat-visit, speed-critical.

## E6. Regulatory / inspection

Footer or utility → **Mandatory Public Disclosure** → all CBSE fields plus downloadable certificates on one page. Must be reachable within one click from every page and must be compliant (Finding X1).
