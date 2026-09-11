/**
 * THE PARENTS' FEEDBACK FORM — data behind the "Your Voice Matters" band at the
 * foot of /parents-feedback/.
 *
 * ═══ IT IS NOT WIRED UP, AND IT SAYS SO ════════════════════════════════════
 *
 * ⚠⚠ `endpoint` IS null AND THAT IS THE HONEST STATE, NOT AN OVERSIGHT. This is
 * a static site on Vercel with no handler behind it. The form below validates
 * every field for real, and then — with no endpoint — tells the parent plainly
 * that nothing was sent and nothing was stored, and gives them the office line
 * instead. Set `endpoint` to a URL that accepts JSON and the identical form
 * POSTs and shows the success state. No markup changes either way.
 *
 * A feedback form that appears to submit into nothing is worse than one that
 * admits it is not connected: it takes a parent's name, their child's name,
 * their phone number and a complaint they may have taken some courage to write,
 * and drops all of it on the floor while thanking them. The same reasoning is
 * written out at the top of components/alumni/ArForm.astro, which is the form
 * this one follows.
 *
 * ⚠ WHAT TO SET IT TO. Anything that takes a POST of JSON — a Vercel function
 * under /api/, a Formspree/Basin endpoint, or a Google Apps Script web app
 * bound to a Sheet the office already reads. The office inbox in data/site.ts
 * is the fallback the form offers meanwhile.
 */
import { school } from './site';

export const feedbackSettings = {
  /** ⚠ null = not wired up. See the file header before changing this. */
  endpoint: null as string | null,
  successMessage: 'Thank you. Your feedback has been sent to the school.',
  contactPhone: school.phone.office,
  contactPhoneDisplay: school.phone.officeDisplay,
  contactEmail: school.email,
};

/**
 * ⚠ THE CLASS RANGE IS THE SCHOOL'S OWN — Nursery to Class XII, which
 * data/site.ts records and the footer prints. Sections are NOT listed: the
 * school publishes no section letters anywhere in this project, and inventing
 * "A–D" would be inventing the shape of the school. The field takes the class
 * and the parent can name a section in the feedback box if it matters.
 */
export const CLASSES = [
  'Nursery',
  'LKG',
  'UKG',
  'Class I',
  'Class II',
  'Class III',
  'Class IV',
  'Class V',
  'Class VI',
  'Class VII',
  'Class VIII',
  'Class IX',
  'Class X',
  'Class XI',
  'Class XII',
] as const;

/**
 * ⚠ THESE ARE CATEGORIES A PARENT PICKS FROM, NOT CLAIMS THE SCHOOL MAKES.
 * Every one names something this site already documents — teaching, the
 * campus, transport, activities, communication — so the list cannot imply a
 * programme that does not exist. "Something else" is there so a parent is never
 * forced into a box that does not fit.
 */
export const APPRECIATE = [
  'Teaching and academics',
  'Teachers and staff',
  'Campus and facilities',
  'Sports and activities',
  'Safety and security',
  'Transport',
  'Communication with parents',
  'Something else',
] as const;

/** The three supporting notes beside the form. Ours, and they promise nothing. */
export const assurances = [
  {
    icon: 'heart',
    title: 'Help Us Improve',
    body: 'Your feedback guides what the school looks at next.',
  },
  {
    icon: 'people',
    title: 'Stronger Community',
    body: 'Parents and teachers building a better place to learn, together.',
  },
  {
    icon: 'star',
    title: 'Celebrate What Works',
    body: 'Kind words reach the staff they are about.',
  },
] as const;

export interface FeedbackField {
  name: string;
  label: string;
  type: 'text' | 'tel' | 'select' | 'textarea';
  required?: boolean;
  hint?: string;
  auto?: string;
  rule?: 'phone';
  options?: readonly string[];
  wide?: boolean;
}

/**
 * ⚠ THE PHONE NUMBER IS OPTIONAL ON PURPOSE. A parent leaving praise has no
 * reason to hand over a contact number, and a parent raising something
 * difficult may well not want to. Requiring it would quietly filter the
 * feedback down to people comfortable being called back.
 */
export const feedbackFields: FeedbackField[] = [
  { name: 'parentName', label: 'Parent name', type: 'text', required: true, hint: 'Enter your name', auto: 'name' },
  { name: 'studentName', label: 'Student name', type: 'text', required: true, hint: "Enter student's name", auto: 'off' },
  { name: 'studentClass', label: 'Class', type: 'select', required: true, options: CLASSES },
  { name: 'phone', label: 'Phone number', type: 'tel', hint: 'Optional — if you would like a reply', auto: 'tel', rule: 'phone' },
];
