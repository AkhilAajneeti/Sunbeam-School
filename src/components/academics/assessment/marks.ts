/**
 * ASSESSMENT & SUPPORT — the shared line-icon set.
 *
 * ⚠ ONE SET, SEVEN PAGES. Declared once so a calendar glyph cannot be drawn
 * three different ways across three pages that link to each other.
 *
 * THE CONTRACT, and every path below obeys it:
 *   · 24-unit viewBox, drawn edge to edge between 2.6 and 21.4
 *   · stroke only — no fill, ever, except a deliberate 0.9r dot
 *   · 1.5 stroke width, round caps, round joins, applied by the consumer on a
 *     wrapping <g> so the glyph string stays presentational-attribute free
 *   · `currentColor`, so a mark takes the colour of the cell it sits in
 *
 * Consumed as:
 *   <svg viewBox="0 0 24 24" fill="none">
 *     <g stroke="currentColor" stroke-width="1.5" stroke-linecap="round"
 *        stroke-linejoin="round" set:html={MARK.calendar} />
 *   </svg>
 */
export const MARK: Record<string, string> = {
  /* ── the six-step cycle ─────────────────────────────────────────────────── */
  book: `<path d="M4 4.4h5.2A2.8 2.8 0 0 1 12 7.2v12.4a2.4 2.4 0 0 0-2.4-2.4H4Z"/><path d="M20 4.4h-5.2A2.8 2.8 0 0 0 12 7.2v12.4a2.4 2.4 0 0 1 2.4-2.4H20Z"/>`,
  hands: `<circle cx="8.4" cy="8" r="2.8"/><circle cx="16.6" cy="9.4" r="2.2"/><path d="M2.8 19.4a5.6 5.6 0 0 1 11.2 0"/><path d="M15 15.2a4.4 4.4 0 0 1 6.2 4.2"/>`,
  clipboard: `<path d="M9 4.2H6.6a1.8 1.8 0 0 0-1.8 1.8v13.2a1.8 1.8 0 0 0 1.8 1.8h10.8a1.8 1.8 0 0 0 1.8-1.8V6a1.8 1.8 0 0 0-1.8-1.8H15"/><rect x="9" y="2.6" width="6" height="3.4" rx="1"/><path d="M8.4 11.6h7.2M8.4 15.2h4.8"/>`,
  speech: `<path d="M20.4 13.4a2.6 2.6 0 0 1-2.6 2.6H9.4l-4.6 3.6v-3.6a2.6 2.6 0 0 1-2.6-2.6V6.6A2.6 2.6 0 0 1 4.8 4h13a2.6 2.6 0 0 1 2.6 2.6Z"/><path d="M7.6 9.6h8.8M7.6 12.4h5.6"/>`,
  chart: `<path d="M3.6 20.4h16.8"/><path d="M6.6 20.4v-6.2M11 20.4V8.6M15.4 20.4v-8.4M19.8 20.4V5.4"/>`,
  cup: `<path d="M7.4 3.6h9.2v5a4.6 4.6 0 0 1-9.2 0Z"/><path d="M7.4 5.4H5a2 2 0 0 0 2 2M16.6 5.4H19a2 2 0 0 1-2 2"/><path d="M12 13.2v4M8.8 20.4h6.4l-.8-3.2H9.6Z"/>`,

  /* ── assessment, records and the calendar ───────────────────────────────── */
  calendar: `<rect x="3.4" y="5" width="17.2" height="15.4" rx="1.8"/><path d="M3.4 9.6h17.2"/><path d="M8.2 3.4v3.2M15.8 3.4v3.2"/><path d="M7.6 13.4h2M11 13.4h2M14.4 13.4h2M7.6 16.8h2M11 16.8h2"/>`,
  doc: `<path d="M13.4 2.8H6.6a1.8 1.8 0 0 0-1.8 1.8v14.8a1.8 1.8 0 0 0 1.8 1.8h10.8a1.8 1.8 0 0 0 1.8-1.8V8.4Z"/><path d="M13.4 2.8v5.6h5.8"/><path d="M8.4 13h7.2M8.4 16.4h5"/>`,
  pen: `<path d="M14.6 4.4a4 4 0 0 1 5.1 5.1l-9.4 9.4-5.1-5.1Z"/><path d="m12.6 6.4 5.1 5.1"/><path d="M5.2 13.8 3.6 20.4l6.6-1.6"/>`,
  desk: `<path d="M2.8 10.4h18.4"/><path d="M4.6 10.4V6.4a1.8 1.8 0 0 1 1.8-1.8h11.2a1.8 1.8 0 0 1 1.8 1.8v4"/><path d="M5.4 10.4v9M18.6 10.4v9"/><path d="M5.4 14.6h6.2"/>`,
  flask: `<path d="M9.6 3.4h4.8M10.6 3.4v5.2L6.9 17a2 2 0 0 0 1.8 2.8h6.6a2 2 0 0 0 1.8-2.8l-3.7-8.4V3.4"/><path d="M8.2 14.4h7.6"/>`,
  sun: `<circle cx="12" cy="12" r="4.2"/><path d="M12 2.8v2.6M12 18.6v2.6M2.8 12h2.6M18.6 12h2.6M5.4 5.4l1.9 1.9M16.7 16.7l1.9 1.9M18.6 5.4l-1.9 1.9M7.3 16.7l-1.9 1.9"/>`,
  clock: `<circle cx="12" cy="12" r="8.6"/><path d="M12 6.8V12l3.4 2"/>`,
  hourglass: `<path d="M6.4 3.4h11.2M6.4 20.6h11.2"/><path d="M7.6 3.4v3.2c0 2 4.4 3.8 4.4 5.4s-4.4 3.4-4.4 5.4v3.2"/><path d="M16.4 3.4v3.2c0 2-4.4 3.8-4.4 5.4s4.4 3.4 4.4 5.4v3.2"/>`,
  search: `<circle cx="10.8" cy="10.8" r="6.8"/><path d="m15.8 15.8 4.8 4.8"/>`,
  target: `<circle cx="12" cy="12" r="8.4"/><circle cx="12" cy="12" r="4.6"/><circle cx="12" cy="12" r="1.2"/>`,
  bulb: `<path d="M9.2 17.6h5.6"/><path d="M10 20.4h4"/><path d="M12 2.8a6.4 6.4 0 0 0-3.6 11.7c.5.4.8 1 .8 1.6h5.6c0-.6.3-1.2.8-1.6A6.4 6.4 0 0 0 12 2.8Z"/>`,
  medal: `<circle cx="12" cy="15" r="5.4"/><path d="m8.4 10.2-3-7.2M15.6 10.2l3-7.2"/><path d="m12 12.6.9 1.9 2 .3-1.5 1.4.4 2-1.8-1-1.8 1 .4-2-1.5-1.4 2-.3Z"/>`,
  shield: `<path d="M12 2.8 4.6 6v6c0 4.6 3.1 8.2 7.4 9.2 4.3-1 7.4-4.6 7.4-9.2V6z"/><path d="m8.8 12 2.4 2.4 4-4.6"/>`,
  bell: `<path d="M18 16.4V11a6 6 0 1 0-12 0v5.4L4.4 19h15.2Z"/><path d="M10 19a2 2 0 0 0 4 0"/>`,
  handHeart: `<path d="M2.8 13.6 5.6 11a2 2 0 0 1 1.4-.6h3.6a1.7 1.7 0 0 1 0 3.4H8.4"/><path d="m6.6 16.4 3 3 8-3.6a1.9 1.9 0 0 0-1.6-3.4l-3.4 1.4"/><path d="M12.6 8.6S9.8 7 9.8 5.2a1.9 1.9 0 0 1 2.8-1.6 1.9 1.9 0 0 1 2.8 1.6c0 1.8-2.8 3.4-2.8 3.4Z"/>`,
  eye: `<path d="M2.4 12S5.8 5.8 12 5.8 21.6 12 21.6 12 18.2 18.2 12 18.2 2.4 12 2.4 12Z"/><circle cx="12" cy="12" r="3"/>`,
  person: `<circle cx="12" cy="7.6" r="3.6"/><path d="M4.8 20.6a7.2 7.2 0 0 1 14.4 0"/>`,
  head: `<path d="M14.6 20.6v-2.8h2.6a1.5 1.5 0 0 0 1.4-2l-1-2.6a7.4 7.4 0 1 0-8.6 4.4v3"/><path d="M11.4 8.8a2.4 2.4 0 1 1 2.8 2.4v1.4"/>`,
  grow: `<path d="M12 20.6v-7.8"/><path d="M12 12.8C12 9.3 9.5 6.8 6 6.8c0 3.5 2.5 6 6 6Z"/><path d="M12 12.8c0-3.5 2.5-6 6-6 0 3.5-2.5 6-6 6Z"/><path d="M7.6 20.6h8.8"/>`,
  quote: `<path d="M9.6 6.4C7 7.4 5.4 9.6 5.4 12.4v5.2h5.2v-5.2H8.2c0-2 .8-3.4 2.4-4.2Z"/><path d="M18 6.4c-2.6 1-4.2 3.2-4.2 6v5.2H19v-5.2h-2.4c0-2 .8-3.4 2.4-4.2Z"/>`,
  arrow: `<path d="M4.4 12h15.2"/><path d="m13.8 6.2 5.8 5.8-5.8 5.8"/>`,
  download: `<path d="M12 3.6v11.2"/><path d="m7.4 10.4 4.6 4.6 4.6-4.6"/><path d="M4.4 18.4v1.2a1.4 1.4 0 0 0 1.4 1.4h12.4a1.4 1.4 0 0 0 1.4-1.4v-1.2"/>`,
  external: `<path d="M13.4 3.6h7v7"/><path d="m20.4 3.6-8.8 8.8"/><path d="M18 14v5.2a1.8 1.8 0 0 1-1.8 1.8H5.4a1.8 1.8 0 0 1-1.8-1.8V8.4a1.8 1.8 0 0 1 1.8-1.8H10"/>`,
  chat: `<path d="M17.6 12.4a2.4 2.4 0 0 1-2.4 2.4H8l-4 3.2v-3.2a2.4 2.4 0 0 1-2.4-2.4V6.2A2.4 2.4 0 0 1 4 3.8h11.2a2.4 2.4 0 0 1 2.4 2.4Z"/><path d="M20.4 8.6a2.4 2.4 0 0 1 2 2.4v6.2a2.4 2.4 0 0 1-2 2.4v3l-3.4-2.6"/>`,
  atom: `<circle cx="12" cy="12" r="1.9"/><ellipse cx="12" cy="12" rx="9.4" ry="3.7"/><ellipse cx="12" cy="12" rx="9.4" ry="3.7" transform="rotate(60 12 12)"/><ellipse cx="12" cy="12" rx="9.4" ry="3.7" transform="rotate(120 12 12)"/>`,
  present: `<path d="M3.6 4.4h16.8v10.2H3.6Z"/><path d="M12 14.6v3.4M8.4 20.4h7.2"/><path d="m7.6 11.4 2.6-3 2.4 2 3.8-4.4"/>`,
  layers: `<path d="m12 2.8 9 4.6-9 4.6-9-4.6Z"/><path d="m3 12 9 4.6 9-4.6"/><path d="m3 16.4 9 4.6 9-4.6"/>`,
  refresh: `<path d="M20.4 11.2a8.4 8.4 0 0 0-14.6-4.4L3.6 9"/><path d="M3.6 12.8a8.4 8.4 0 0 0 14.6 4.4l2.2-2.2"/><path d="M3.6 4.4V9h4.6M20.4 19.6V15h-4.6"/>`,
  hand: `<path d="M9.4 11.2V6a1.9 1.9 0 1 1 3.8 0v7.4"/><path d="M13.2 10.4a1.7 1.7 0 0 1 3.4 0v1M16.6 11.6a1.7 1.7 0 0 1 3.4 0v3.2a6 6 0 0 1-6 6h-1.6c-2 0-3-1-4.2-2.4l-3-3.6a1.8 1.8 0 0 1 2.6-2.4l1.6 1.6"/>`,
  megaphone: `<path d="M3.6 9.4v4.2a1.8 1.8 0 0 0 1.8 1.8h2.2l8.8 4.6V4.8L7.6 9.4Z"/><path d="M19.4 9.4a3.4 3.4 0 0 1 0 4.2"/><path d="M7.6 15.4v3.8a1.4 1.4 0 0 0 1.4 1.4h1.2"/>`,
  ribbon: `<circle cx="12" cy="9" r="5.6"/><path d="m9 13.8-1.6 6.8 4.6-2.6 4.6 2.6-1.6-6.8"/><path d="m10.8 8.8 1 1.8 2.4-3"/>`,
  bookmark: `<path d="M6 3.6h12v17.2l-6-4.2-6 4.2Z"/>`,

  /* ── added for the Student Success section ──────────────────────────────── */
  globe: `<circle cx="12" cy="12" r="8.6"/><path d="M3.4 12h17.2"/><path d="M12 3.4c2.2 2.4 3.4 5.4 3.4 8.6S14.2 18.2 12 20.6c-2.2-2.4-3.4-5.4-3.4-8.6S9.8 5.8 12 3.4Z"/>`,
  cap: `<path d="m12 3.4 9.4 4.6L12 12.6 2.6 8Z"/><path d="M6.4 10v5.6c0 1.9 2.5 3.4 5.6 3.4s5.6-1.5 5.6-3.4V10"/><path d="M21.4 8v6"/>`,
  pin: `<path d="M12 21.2s6.6-5.8 6.6-10.6a6.6 6.6 0 1 0-13.2 0C5.4 15.4 12 21.2 12 21.2Z"/><circle cx="12" cy="10.4" r="2.5"/>`,
  seat: `<path d="M4.6 20.4v-3.2h14.8v3.2"/><path d="M6.6 17.2V6.4a1.8 1.8 0 0 1 1.8-1.8h7.2a1.8 1.8 0 0 1 1.8 1.8v10.8"/><path d="M9.6 8.6h4.8M9.6 12h4.8"/>`,
  spark: `<path d="M12 1.8c.7 5.2 4.2 8.7 9.4 9.4-5.2.7-8.7 4.2-9.4 9.4-.7-5.2-4.2-8.7-9.4-9.4 5.2-.7 8.7-4.2 9.4-9.4z"/>`,
  route: `<circle cx="6" cy="18.4" r="2.6"/><circle cx="18" cy="5.6" r="2.6"/><path d="M8.4 17.2c4.4-1 6.6-3.4 7.6-8"/><path d="M13.4 4.4h4.6v4.6"/>`,
  leaf: `<path d="M19.4 4.6c1 6.9-2.2 11.7-7.5 12.4-3 .4-5.4-1-6-3.4-.7-2.9 1.3-5.3 4.6-6"/><path d="M4.6 20.2c1.6-4.6 5.4-8.6 9.8-10.8"/>`,
  scroll: `<path d="M6.4 3.4h11a1.8 1.8 0 0 1 1.8 1.8v13.4a2 2 0 0 1-2 2H7.2a2.6 2.6 0 0 1-2.6-2.6V5.2A1.8 1.8 0 0 1 6.4 3.4Z"/><path d="M8.6 8h6.8M8.6 11.4h6.8M8.6 14.8h4.4"/>`,
  phone: `<path d="M20.4 16.9v2.6a1.8 1.8 0 0 1-2 1.8 17.6 17.6 0 0 1-7.7-2.7 17.3 17.3 0 0 1-5.3-5.3A17.6 17.6 0 0 1 2.7 5.5a1.8 1.8 0 0 1 1.8-2h2.6a1.8 1.8 0 0 1 1.8 1.5c.1.9.3 1.7.6 2.5a1.8 1.8 0 0 1-.4 1.9L8 10.5a14.2 14.2 0 0 0 5.3 5.3l1.1-1.1a1.8 1.8 0 0 1 1.9-.4c.8.3 1.6.5 2.5.6a1.8 1.8 0 0 1 1.6 1.9Z"/>`,
};
