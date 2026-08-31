/**
 * THE TWO SERVICE PAGES — Result and Download T.C.
 *
 * ⚠⚠ BOTH PAGES WRAP A SYSTEM THIS PROJECT DOES NOT OWN. Neither the result
 * portal nor the transfer-certificate lookup lives here; both are on the
 * school's own installation. These pages therefore change the presentation and
 * nothing else — the destination and the behaviour are preserved exactly, which
 * is what the brief requires in both cases.
 *
 * ═══ RESULT — sunbeamballia.edu.in/result/ ═════════════════════════════════
 * The whole page is three things:
 *     heading      "Result"
 *     message      "WANT TO CHECK YOUR REPORT CARD?"
 *     action       "Click here"  →  https://sbb.nascorptechnologies.com/
 * That is all of it. No statistics, no pass percentages, no toppers, no marks,
 * no year tables, no report-card previews — and none is invented here. The CTA
 * points at the same portal the school's own "Click here" opens, in a new tab,
 * exactly as the school does it.
 *
 * ═══ DOWNLOAD T.C. — sunbeamballia.edu.in/download-tc/ ═════════════════════
 * The school's page carries a form:
 *     <form id="roll-lookup-form">
 *     <input type="text" name="roll_search" placeholder="Enter Enrolment Number" required>
 *     <input type="submit" value="Search">
 * The lookup itself is handled by that site's own script; no endpoint is
 * reachable from this project, and the brief says explicitly not to mock the
 * API response.
 *
 * ⚠⚠ SO THE FORM HERE DOES NOT INVENT A LOOKUP. `tcEndpoint` is null. With no
 * endpoint the field still validates properly and then hands the reader to the
 * school's own T.C. page, which has the working search — a real route to the
 * certificate rather than a search box that returns nothing. Set `tcEndpoint`
 * to the real URL and the same form posts to it and renders the result.
 *
 * ⚠ NOT CLAIMED ON EITHER PAGE: eligibility rules, fees, processing times,
 * office hours, data-privacy or security guarantees. The school publishes none
 * of them, and a "your data is secure" line under a form is a promise nobody
 * here is in a position to make.
 */
import { school } from './site';

export const resultPortal = school.external.results;
export const resultSourcePage = 'https://sunbeamballia.edu.in/result/';

/** The school's own T.C. page — the one with the working lookup. */
export const tcSourcePage = 'https://sunbeamballia.edu.in/download-tc/';

/**
 * ⚠ null UNTIL A REAL ENDPOINT EXISTS. See the file header.
 * The field name matches the school's own form, so pointing this at the real
 * handler needs no other change.
 */
export const tcEndpoint: string | null = null;
export const tcField = 'roll_search';

/**
 * The four help items under the T.C. search.
 * ⚠ THESE ARE UX GUIDANCE, NOT SCHOOL POLICY — the brief says so, and the
 * wording keeps them that way: they describe how to use the form, and none of
 * them states a rule, a fee, a timescale or an entitlement.
 */
export const tcHelp = [
  { n: '01', mark: 'pen', k: 'Enter the correct enrolment number', v: 'Use the enrolment number given at the time of admission.' },
  { n: '02', mark: 'search', k: 'Check it against your records', v: 'The number must match the school’s records for the search to find you.' },
  { n: '03', mark: 'download', k: 'View and download', v: 'Where a certificate is available, the school’s system provides it.' },
  { n: '04', mark: 'phone', k: 'Need help?', v: `Contact the school office on ${school.phone.officeDisplay}.` },
] as const;

/**
 * The small row under the result CTA.
 * ⚠ NO SECURITY OR TECHNICAL CLAIM. The brief warns against exactly that, so
 * "secure access" became a plain statement of where the portal is.
 */
export const resultPoints = [
  { n: '01', mark: 'doc', k: 'Report card', v: 'Report cards are issued through the school’s online portal.' },
  { n: '02', mark: 'external', k: 'Online portal', v: 'The button opens the school’s own result service in a new tab.' },
  { n: '03', mark: 'person', k: 'Your login', v: 'Sign in with the credentials the school issued to you.' },
] as const;
