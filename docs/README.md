# Sunbeam School Ballia — Website Redesign
## Phase 1: Design Research & Strategy

**Status:** Awaiting approval. **No code written.**
**Date:** 27 July 2026

---

## Documents

| # | Document | Covers |
|---|---|---|
| 01 | [Existing Website Analysis](01-existing-site-analysis.md) | Brief §18 **A** — strengths, weaknesses, navigation, UX, content, visual identity, mobile, admissions journey, plus the full verified-facts inventory |
| 02 | [Client Audit Requirements Checklist](02-audit-requirements-checklist.md) | Brief §18 **B** — all 110 requirements from the client PDF, classified MUST / SHOULD / OPTIONAL, each mapped to a destination |
| 03 | [Content, Audience & Journeys](03-content-audience-journeys.md) | Brief §18 **C, D, E** |
| 04 | [Sitemap & Homepage IA](04-sitemap-homepage-ia.md) | Brief §18 **F, G** |
| 05 | [Design System](05-design-system.md) | Brief §18 **H, I, J, K, L, M, N** — visual direction, tokens, photography, components, responsive, accessibility, animation, Astro notes |
| 06 | [Homepage Text Wireframe](06-homepage-wireframe.md) | Brief §19 — all 16 sections, each with purpose, content, layout, typography, photography, interaction, mobile, CTA, source |
| 07 | [Client Asset Requests](07-client-asset-requests.md) | Brief §18 **O** |

---

## Sources studied

1. **Client audit PDF** — *Sunbeam School Ballia Website Content & Branding Audit Report*, 21 July 2026, Anchal Mehra, Director, Maayaz Media. 7 pages, 14 sections, fully extracted.
2. **Existing website** — `sunbeamballia.edu.in`. All 67 pages enumerated from the sitemap; ~20 content pages extracted in full; homepage HTML inspected directly.
3. **Brand identity** — official logo asset decoded pixel-by-pixel to recover the school's actual colours.

**Design reference screenshots were not supplied** — see "Open item" below.

---

## The five findings that shaped the strategy

1. **The school is materially stronger than its website.** Six consecutive years as Education World's #1 Co-Ed Day School in Ballia, a 1972 institutional lineage, a shooting range, a robotics lab with drone and 3-D printer, 2,200 students, a real medal record — presented through spun English, 150×150px thumbnails, and a homepage that closes by linking to Google Reviews. **The job is not to invent a story. It is to stop hiding one.**

2. **The brand colour contradicts the logo.** The crest is deep maroon `#8B0000` and gold `#FFE001`. The live site's theme colour is orange `#F16334` — which appears nowhere in the logo. Maroon and gold is an inherently academic, ceremonial, prestigious pairing. Returning to it is the highest-leverage brand move available, and it costs nothing.

3. **There is no conversion path.** No enquiry form anywhere, including the contact page. No campus-visit booking. No board results. Every route a prospective parent takes ends in a phone call, a PDF, or another domain. This, more than any visual issue, is what the redesign must fix.

4. **Two findings sit outside design scope and need the school's attention regardless of this project.** The Mandatory Public Disclosure page contains 2019-20 class-teacher tables — including student monitor names — rather than CBSE-required fields (a regulatory exposure). And the site carries injected Russian SEO spam indexed since January 2023, indicating a WordPress compromise.

5. **Photography is the project's critical path.** The audit demands an image-led site (§1, §3, §4). The school has the photographs; the current site renders them at thumbnail scale. An image-led design cannot be delivered on 150px sources — a professional shoot is the largest external dependency.

---

## Requirement coverage

**110 requirements** extracted from the client audit: **103 MUST · 6 SHOULD · 1 OPTIONAL.** Every one is mapped to a page, a homepage section, or a named asset request in document 02. **None have been dropped.**

Eleven additional findings (X1–X11) are recorded separately and clearly marked as **ours, not the client's**, so the audit is never diluted by our own recommendations.

---

## Documented deviations

Recorded openly rather than made silently:

| Deviation | Reason |
|---|---|
| Achievements placed at homepage §14 (after Affiliations §13), not §10 as our brief's outline suggested | **Audit 1.13–1.14 fixes this order explicitly.** The audit outranks the reference outline. Mitigated by a thin recognition proof strip at §03b |
| A recognition proof strip added under the hero (§03b) | Parents decide trust in the first viewport. A proof *bar* satisfies that without violating the audit's placement of the full *section* |
| "Beyond Academics" retained rather than renamed "Student Life" | The school's own vocabulary, and the audit's |
| Academics built as 6 landing pages with 48 anchors, not 48 pages | Forty-eight thin pages would be unnavigable and mostly empty. Every audit topic still gets a named, linkable anchor |

---

## Open item

**Design reference screenshots were referenced in the brief but not supplied.** The visual direction in document 05 has therefore been derived from the client audit, the school's own brand identity, and the stated quality goal — *"a modern, internationally presented Indian school with a strong academic legacy."*

If reference screenshots exist, please share them. They would refine composition, spacing and image-cropping decisions, though they would not change the strategy — the audit and the school's identity drive that.

---

## Final design check — brief §20

| Question | |
|---|---|
| Does this look like Sunbeam School Ballia? | **Yes.** Colours recovered from its own crest; every fact, facility, honour and sport traced to its own site |
| Does it reflect the client's PDF requirements? | **Yes.** 110 of 110 mapped, including the audit's tail ordering over our brief's suggestion |
| Does it improve the school's identity rather than replace it? | **Yes.** It returns the site to the logo's maroon and gold and surfaces credentials that already exist |
| Would a prospective parent trust this institution afterwards? | **Materially more so** — provided A1 (board results) and A2 (photography) are delivered. Both are flagged as blocking |
| Internationally designed, appropriate for an established Indian school? | **Yes.** Editorial restraint and photographic scale; maroon and gold rather than a trend palette |
| Is authentic school life more prominent than decorative UI? | **Yes.** Five full-bleed photographic moments; 2 of 26 components are card-like; zero decorative illustration |
| Does every section have a purpose? | **Yes.** Each of the 16 homepage sections answers one parent question and creates the next |
| Have generic AI website patterns been avoided? | **Yes.** No three-card rows, no radius above 4px on structure, no shadows on content, no gradients, no glassmorphism, no fake anything |

---

## Approval

Per brief §21, **no Astro code, components or pages will be written until you reply:**

> **DESIGN DIRECTION APPROVED**

Partial approval or change requests on any document are equally welcome — several decisions (homepage section order, the maroon/gold direction, the 8-item navigation) are worth challenging before they harden into code.
