/**
 * LATEST NEWS & EVENTS — audit §11.
 *
 * ═══ WHAT THIS SECTION IS ══════════════════════════════════════════════════
 *
 * The audit names six things that must "always remain current": recent
 * achievements, school events, competitions, workshops, celebrations and
 * important announcements. They are SIX SECTIONS OF ONE PAGE, not six pages —
 * a page that must stay current can only stay current if it is short, and the
 * volume lives in the permanent archives each section links out to.
 *
 * ⚠ NOT ONE ITEM HERE IS INVENTED. Every card is drawn from content the school
 * has already published and that already exists elsewhere in this repository:
 *
 *   Achievements   data/achievements.ts        the three award graphics
 *   School events  assets/School Activity…     Parents' Forum, AFS, BHU
 *   Competitions   data/sportsRecord.ts        the sporting record
 *   Workshops      data/academics.ts § parents the six parent workshops
 *   Celebrations   assets/Annual Function, Spic Macay, Prabhat Pheri
 *   Announcements  the notice rows already on the homepage
 *
 * ⚠ THERE ARE NO DATES ON ANY CARD, and that is deliberate. docs/08 D18 settled
 * this for the homepage notice board: audit 10.1's whole point is that the board
 * must be current, so an invented date makes it untrue on the day it ships. A
 * static build bakes in whatever it ran on. Dates arrive with asset A7, which
 * also brings the named publishing owner audit §11 depends on (C7).
 *
 * ⚠ AND THAT IS THE REAL BLOCKER. This page is the RECENCY layer. Built well it
 * still goes stale in a term without somebody at the school publishing to it —
 * docs' own line is that "a current section that goes stale is worse than none
 * at all". The design cannot fix that; A7 and C7 can.
 */

import { record, shot } from './sportsRecord';
import { majors } from './achievements';
import { parents } from './academics';

/* Celebrations and school events. Imported by name rather than globbed: each one
   is captioned with what it actually is, and a glob would give filenames. */
import annual1 from '../assets/Annual Function/Annual Function (1).JPG';
import annual4 from '../assets/Annual Function/Annual Function (4).JPG';
import spic1 from '../assets/Spic Macay/Spic Macay (1).jpg';
import spic3 from '../assets/Spic Macay/Spic Macay (3).jpg';
import prabhat from '../assets/School Activity in Uniform/PRABHAT PHERI.jpg';
import afs from '../assets/School Activity in Uniform/afs reginal meet.jpg';
import bhu from '../assets/School Activity in Uniform/Visit to the Cytogenetics Department, BHU.jpg';
import forumPanel from '../assets/parents forum/parents forum (5).jpg';
import embroidery from '../assets/School Activity in Uniform/Embriodery.jpg';

export interface StreamItem {
  title: string;
  /** The category or level — never a date. See the header. */
  meta: string;
  image?: ImageMetadata;
  alt?: string;
  /**
   * `contain` for the school's designed award and event graphics, which carry
   * their own headline and must never be cropped; `cover` for photographs.
   */
  fit?: 'cover' | 'contain';
}

export interface Stream {
  id: string;
  eyebrow: string;
  heading: string;
  stand: string;
  items: StreamItem[];
  /** Where the full, permanent record of this category lives. */
  more: { label: string; href: string };
}

/* The sporting record is the one category with real depth — fourteen entries
   and sixty photographs — so it is taken from the data rather than retyped. */
const competitions: StreamItem[] = record.slice(0, 8).map((r) => ({
  title: r.title,
  meta: r.kicker,
  /* The record's own lead photograph. `shots` holds filenames and `shot` is the
     glob that resolves them — the same pair the sports page uses, so a card here
     and the block it links to show the same picture. */
  image: shot[r.shots[0]],
  alt: r.alt,
}));

export const streams: Stream[] = [
  {
    id: 'achievements',
    eyebrow: 'Recent achievements',
    heading: 'What the school has just won',
    stand:
      'The three the school produced an award graphic for — an international robotics placing, a national innovation ranking and a cluster championship.',
    items: majors.map((m) => ({
      title: m.title,
      meta: m.kicker,
      image: m.art,
      alt: m.alt,
      fit: 'contain' as const,
    })),
    more: { label: 'The full record', href: '/beyond-academics/achievements/' },
  },

  {
    id: 'events',
    eyebrow: 'School events',
    heading: 'What has been happening',
    stand: 'Programmes the school has run and sent students to this session.',
    items: [
      {
        title: 'Parents’ Forum',
        meta: 'Termly · All year groups',
        image: forumPanel,
        alt: 'The leadership panel at a Parents’ Forum session at Sunbeam School Ballia, with the agenda on screen.',
      },
      {
        title: 'AFS Regional Meet',
        meta: 'Sai International, Odisha',
        image: afs,
        alt: 'The school’s graphic for the AFS Regional Meet at Sai International, Odisha.',
        fit: 'contain',
      },
      {
        title: 'Cytogenetics Department, BHU',
        meta: 'Class XII · Varanasi',
        image: bhu,
        alt: 'The school’s graphic for the Class XII visit to the Cytogenetics Department at Banaras Hindu University.',
        fit: 'contain',
      },
    ],
    more: { label: 'All school events', href: '/news-events/school-events/' },
  },

  {
    id: 'competitions',
    eyebrow: 'Competitions',
    heading: 'Where teams have been sent',
    stand:
      'Leagues, championships and camps the school has hosted or entered — the record runs to fourteen.',
    items: competitions,
    more: { label: 'Every competition', href: '/news-events/competitions/' },
  },

  {
    id: 'workshops',
    eyebrow: 'Workshops',
    heading: 'Sessions run for parents',
    stand:
      'Six workshops across the year, each on something a family has to decide or manage at home.',
    items: parents.workshops.cards.map((c: { title: string; chips: string[] }) => ({
      title: c.title,
      meta: c.chips.slice(0, 2).join(' · '),
    })),
    more: { label: 'All workshops & training', href: '/news-events/workshops/' },
  },

  {
    id: 'celebrations',
    eyebrow: 'Celebrations',
    heading: 'The school year, marked',
    stand: 'The annual function, the cultural programme and the mornings that start early.',
    items: [
      {
        title: 'Annual Function',
        meta: 'The whole school',
        image: annual1,
        alt: 'Students performing at the Sunbeam School Ballia annual function.',
      },
      {
        title: 'Annual Function — on stage',
        meta: 'Performances',
        image: annual4,
        alt: 'A performance on stage at the Sunbeam School Ballia annual function.',
      },
      {
        title: 'SPIC MACAY',
        meta: 'Classical arts',
        image: spic1,
        alt: 'A SPIC MACAY classical arts programme at Sunbeam School Ballia.',
      },
      {
        title: 'SPIC MACAY — in the hall',
        meta: 'Classical arts',
        image: spic3,
        alt: 'Students watching a SPIC MACAY performance at Sunbeam School Ballia.',
      },
      {
        title: 'Prabhat Pheri & Seva',
        meta: 'Gurudwara Sahib, Ballia',
        image: prabhat,
        alt: 'The school’s graphic for the Prabhat Pheri and Seva at the Gurudwara Sahib.',
        fit: 'contain',
      },
      {
        title: 'Embroidery',
        meta: 'Skills activity',
        image: embroidery,
        alt: 'An embroidery activity at Sunbeam School Ballia.',
      },
    ],
    more: { label: 'The whole year', href: '/news-events/celebrations/' },
  },

  {
    id: 'announcements',
    eyebrow: 'Important announcements',
    heading: 'What parents need to know',
    stand:
      'Text-first, as audit §10 requires — every notice says what it is before it asks you to open anything.',
    /* The rows already on the homepage notice board. Text cards: audit 10.2
       prohibits promotional creatives standing in for notices, so these
       deliberately carry no image. */
    items: [
      { title: 'Admissions open — Nursery to Class IX and Class XI', meta: 'Admissions' },
      { title: 'Academic calendar — terms, holidays and examination dates', meta: 'Academics' },
      { title: 'Report cards and results portal', meta: 'Results' },
      { title: 'School transport — 22 routes across Ballia', meta: 'Transport' },
      { title: 'Transfer Certificate download', meta: 'Records' },
      { title: 'Mandatory public disclosure — CBSE', meta: 'Regulatory' },
    ],
    more: { label: 'The notice board', href: '/news-events/notices/' },
  },
];
