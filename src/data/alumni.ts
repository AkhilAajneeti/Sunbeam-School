/**
 * ALUMNI — audit §13.
 *
 * ═══ EVERY FIELD IS READ OFF THE SCHOOL'S OWN PUBLISHED CARD ════════════════
 *
 * The school issues an "OUR ALUMNI" graphic per person carrying the name, the
 * degree, the institution and the employer. Three are in `assets/alumni/`, and
 * between them they answer three of the four things audit §13 asks a
 * testimonial to cover:
 *
 *   13.3 current profession        → the employer
 *   13.4 higher education journey  → the degree and institution
 *   13.5 career achievements       → the placement
 *   13.6 experience at Sunbeam     → ⚠ NOT PUBLISHED. See below.
 *
 * ⚠ NOTHING IS INFERRED. No graduating year is stated because none of the three
 * cards prints one; no job title is stated because the cards say "placed at",
 * which names an employer and not a role. Writing either would be inventing a
 * fact about a named, identifiable adult.
 *
 * ⚠ 13.6 IS THE ONE GAP, AND IT IS THE ONE THAT MATTERS MOST. What none of
 * these carries is the alumnus SPEAKING — their experience of the school, in
 * their words. That is asset A4, and it needs written consent (C6) as much as
 * it needs a camera. Until it arrives these are placement records, which is
 * honest and useful, but not yet a testimonial.
 *
 * ⚠ `video` IS READY AND EMPTY. Drop an MP4 in and that card becomes a video
 * card with hover playback; the poster, the caption and the layout do not
 * change. That is the whole point of building it this way now.
 */

import sudhanshu from '../assets/alumni/alumni (1).jpg';
import aditya from '../assets/alumni/alumni (2).jpg';
import navneet from '../assets/alumni/alumni (3).jpg';

export interface Alum {
  name: string;
  /** Degree and institution — audit 13.4. */
  study: string;
  /** Where they are now — audit 13.3 and 13.5. */
  placed: string;
  /** The school's own card. Shown whole; it is a designed graphic, not a photo. */
  poster: ImageMetadata;
  alt: string;
  /**
   * ⚠ EMPTY UNTIL ASSET A4. A path under `public/` — e.g. `/alumni/aditya.mp4`.
   * The card plays it on hover, muted and looping, and falls back to the poster
   * for anyone who never hovers, has reduced motion set, or is on a phone.
   */
  video?: string;
}

export const alumni: Alum[] = [
  {
    name: 'Sudhanshu Raj Mishra',
    study: 'B.Tech · Bangalore Institute of Technology',
    placed: 'GE Aerospace',
    poster: sudhanshu,
    alt: 'Sunbeam School Ballia’s alumni card for Sudhanshu Raj Mishra — B.Tech, Bangalore Institute of Technology, placed at GE Aerospace.',
  },
  {
    name: 'Aditya Narayan Singh',
    study: 'B.Tech · Madan Mohan Malaviya Technical University',
    placed: 'Micron Technology',
    poster: aditya,
    alt: 'Sunbeam School Ballia’s alumni card for Aditya Narayan Singh — B.Tech, Madan Mohan Malaviya Technical University, placed at Micron Technology.',
  },
  {
    name: 'Navneet Ranjan Mishra',
    study: 'MBA · Faculty of Management Studies, Lucknow University',
    placed: 'ICICI Prudential',
    poster: navneet,
    alt: 'Sunbeam School Ballia’s alumni card for Navneet Ranjan Mishra — MBA, Faculty of Management Studies, Lucknow University, placed at ICICI Prudential.',
  },
];
