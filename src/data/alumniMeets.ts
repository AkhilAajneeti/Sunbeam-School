/**
 * ALUMNI MEETS AND ALUMNI STORIES — the content store behind /alumni/.
 *
 * ⚠⚠ THIS FILE IS THE CMS. The Alumni page renders whatever is `published: true`
 * here and nothing else. Adding a meet is one entry; adding twenty is twenty
 * entries and no change to a single component. Nothing downstream counts to a
 * number, hard-codes a session, or assumes a photograph exists.
 *
 * ═══ SOURCE — sunbeamballia.edu.in/school-activities/, and only there ═══════
 * The school publishes its alumni record inside the activity feed on that page,
 * not on a standalone /alumni/ page (which 404s). The entry, its wording and its
 * five photographs were all read off it.
 *
 * ⚠⚠ THE MEET IS "PRADIPTAM 2.0", SESSION 2026-27. Searched across the whole
 * domain — school-activities, publications, event-chronicles, the home page, all
 * sixty page slugs in wp-sitemap.xml and the posts feed — the school publishes
 * one meet, spelled Pradiptam, titled "Pradiptam 2.0 | Alumni Meet 2026-27", and
 * no 2024-25 alumni meet at all. The design brief called it "Pradeeptam / Light
 * to Vision / 2024-25"; the site's own wording, spelling and session win, so
 * that is what ships.
 *
 * ⚠ HALF OF THE BRIEF'S PHRASE IS NOW ACCOUNTED FOR. The client's second asset
 * drop includes sixteen frames of this meet, and the stage backdrop in them
 * reads "प्रदीप्तम 2.0 · Light to vision" over "ALUMNI MEET 2026-27". So
 * "Light to Vision" IS the meet's own tagline — it simply never appeared in the
 * school's published TEXT, which is where it was searched for. The title stays
 * as the school writes it; the finding is recorded here so the next reader does
 * not re-run the search. The date in the brief is still wrong: the backdrop
 * itself says 2026-27.
 *
 * ⚠ THE PHOTOGRAPHS ARE CONFIRMED BY WHAT IS IN THEM, not by where they sat in
 * the markup. Each was opened and checked: 02 and 04 show the meet's own green
 * badges reading "Pradiptam · ALUMNI MEET 2026 · BALLIA", and 04 also shows a
 * "Pradiptam 2.0" table card. A sixth image adjacent to the post in the feed was
 * discarded — it shows Sunbeam School MUGHALSARAI certificates, a different
 * branch, and belongs to the next entry.
 *
 * ⚠ NO SECOND MEET, AND NO "COMING SOON" CARDS. The reference art showed
 * placeholders for 2026-27, 2027-28 and 2028-29. The school has announced no
 * future meet, and a card promising one is a commitment made on its behalf.
 *
 * ⚠ NOT RECORDED FOR THE MEET: a date, a venue, an attendance figure, a chief
 * guest or a programme. The school publishes none, and the detail page renders
 * only fields that carry a value — an absent field shows nothing rather than a
 * blank row inviting somebody to fill it in.
 *
 * ═══ TO ADD A MEET ═════════════════════════════════════════════════════════
 *   1. put the photographs in src/assets/alumni-meets/<slug>/
 *   2. import them at the top of this file
 *   3. push one entry into `alumniMeets`, newest first
 *   4. set `featured: true` on the one that should headline the page
 * The slider, the gallery, the detail route and every count follow.
 */
import mGroup from '../assets/alumni-meets/pradiptam-2-0-2026-27/01-group-on-the-steps.jpg';
import mMedals from '../assets/alumni-meets/pradiptam-2-0-2026-27/02-alumni-with-medallions.jpg';
import mHall from '../assets/alumni-meets/pradiptam-2-0-2026-27/03-alumni-in-the-hall.jpg';
import mTable from '../assets/alumni-meets/pradiptam-2-0-2026-27/04-medallions-at-the-table.jpg';
import mLamp from '../assets/alumni-meets/pradiptam-2-0-2026-27/05-lamp-lighting.jpg';
/* ⚠ SIXTEEN MORE OF THE SAME MEET — client drop 2, left in the folder it
   arrived in (see the note in data/workshopPhotos.ts on why the delivery
   folders keep their names). CONFIRMED BY WHAT IS IN THEM, exactly as the five
   above were: the stage backdrop reads "प्रदीप्तम 2.0 · Light to vision ·
   ALUMNI MEET 2026-27", and every lanyard carries the meet's own badge. They
   are NOT a second meet and must not become one.

   ⚠ NO NAMES IN THE ALT TEXT, THOUGH THE SCREEN BEHIND EACH PRESENTATION
   CARRIES ONE. The projection shows each alumnus's photograph, name and where
   they are studying, and most are half-hidden by the person standing in front
   of it — half-read off a screen is exactly how a name ends up misspelled on a
   page the person's own school publishes. The alts describe what is happening;
   the names go in when the school supplies the list. */
import aCarpet from '../assets/sunbeam-assets-2/Alumni/DSC_1403.JPG';
import aDesk from '../assets/sunbeam-assets-2/Alumni/DSC_1412.JPG';
import aBadges from '../assets/sunbeam-assets-2/Alumni/DSC_1415.JPG';
import aLamp2 from '../assets/sunbeam-assets-2/Alumni/DSC_1417.JPG';
import aAudience from '../assets/sunbeam-assets-2/Alumni/DSC_1481.JPG';
import aSpeaker from '../assets/sunbeam-assets-2/Alumni/DSC_1510.JPG';
import aMedal1 from '../assets/sunbeam-assets-2/Alumni/DSC_1512.JPG';
import aMedal2 from '../assets/sunbeam-assets-2/Alumni/DSC_1516.JPG';
import aMedal3 from '../assets/sunbeam-assets-2/Alumni/DSC_1522.JPG';
import aMedal4 from '../assets/sunbeam-assets-2/Alumni/DSC_1524.JPG';
import aMedal5 from '../assets/sunbeam-assets-2/Alumni/DSC_1529.JPG';
import aMedal6 from '../assets/sunbeam-assets-2/Alumni/DSC_1539.JPG';
import aMedal7 from '../assets/sunbeam-assets-2/Alumni/DSC_1541.JPG';
import aMedal8 from '../assets/sunbeam-assets-2/Alumni/DSC_1543.JPG';
import aTables from '../assets/sunbeam-assets-2/Alumni/DSC_1565.JPG';
import aGroup2 from '../assets/sunbeam-assets-2/Alumni/DSC_1572.JPG';

/** One photograph in a meet's gallery. */
export interface MeetPhoto {
  image: ImageMetadata;
  /** What is in the frame. Never the event's name standing in for a description. */
  alt: string;
  /** Optional caption shown in the viewer. */
  caption?: string;
}

export interface AlumniMeet {
  /** URL segment — /alumni/<slug>/. */
  slug: string;
  title: string;
  /** The event's own second line, where it has one. */
  subtitle?: string;
  /** Session as the school writes it. */
  session: string;
  /** The school's own wording, paragraph by paragraph. */
  description: string[];
  cover?: ImageMetadata;
  coverAlt?: string;
  gallery: MeetPhoto[];
  /** The one that headlines the page. Only the first `featured` is used. */
  featured?: boolean;
  published: boolean;
  /** Where this record came from. */
  source?: string;
}

export interface AlumniStory {
  name: string;
  batch?: string;
  photo?: ImageMetadata;
  photoAlt?: string;
  profession?: string;
  organisation?: string;
  study?: string;
  /** Their own words. Requires written consent before it can ever be filled. */
  quote?: string;
  story?: string[];
  gallery?: MeetPhoto[];
  featured?: boolean;
  published: boolean;
}

const S = 'Sunbeam School Ballia';

export const alumniMeets: AlumniMeet[] = [
  {
    slug: 'pradiptam-2-0-2026-27',
    title: 'Pradiptam 2.0',
    subtitle: 'Alumni Meet 2026–27',
    session: '2026–27',
    /* ⚠ VERBATIM. The school's own four sentences, in its own order and with its
       own em-dash. Not paraphrased, not tightened, not extended. */
    description: [
      'Some journeys never truly end—they simply come full circle.',
      'Pradiptam 2.0 | Alumni Meet 2026–27 was a heartfelt celebration of memories, friendships, and the timeless bond that every Sunbeam carries forever.',
      'From revisiting classrooms to reliving unforgettable moments, every smile reflected a story, every reunion rekindled a connection, and every conversation reminded us that once a Sunbeam, always a Sunbeam.',
      'Here’s to the memories that shaped us and the legacy that continues to inspire generations.',
    ],
    cover: mGroup,
    coverAlt: `Alumni and staff of ${S} gathered on the school steps for Pradiptam 2.0, beneath a Sunbeam School Ballia backdrop.`,
    gallery: [
      {
        image: mGroup,
        alt: `Alumni and staff of ${S} gathered on the school steps for Pradiptam 2.0, beneath a Sunbeam School Ballia backdrop.`,
        caption: 'The gathering on the school steps',
      },
      {
        image: mLamp,
        alt: `Alumni and staff of ${S} standing around the ceremonial lamp at the opening of Pradiptam 2.0.`,
        caption: 'Lighting the lamp',
      },
      {
        image: mMedals,
        alt: 'Three alumni seated at a table, holding their commemorative medallions and wearing the meet’s Pradiptam badges.',
        caption: 'Commemorative medallions',
      },
      {
        image: mTable,
        alt: 'Four alumnae at a table holding their medallions, a Pradiptam 2.0 table card in front of them.',
        caption: 'At the tables',
      },
      {
        image: mHall,
        alt: `Four alumnae of ${S} standing together in the hall during the meet, wearing the event’s badges.`,
        caption: 'In the hall',
      },

      /* ─── Client drop 2 · the same meet, photographed through the day ─────
         Ordered as the day ran — arrival, registration, the lamp, the hall, the
         presentations, the group photograph — rather than by filename. The
         gallery is read top to bottom, so the sequence is the account. */
      {
        image: aCarpet,
        alt: `The red carpet laid to the entrance of ${S} for Pradiptam 2.0, lined with Sunbeam pennants and stanchions.`,
        caption: 'The carpet to the door',
      },
      {
        image: aDesk,
        alt: 'Alumni seated at the registration table as arrivals sign in behind them.',
        caption: 'Registration',
      },
      {
        image: aBadges,
        alt: 'Three alumnae at a table wearing their Pradiptam badges, a commemorative bottle and card in front of them.',
        caption: 'Badges and keepsakes',
      },
      {
        image: aLamp2,
        alt: 'Staff and alumni gathered around the ceremonial lamp as it is lit to open the meet.',
        caption: 'Lighting the lamp',
      },
      {
        image: aAudience,
        alt: 'The hall during the meet, alumni and students seated through to the back.',
        caption: 'The hall, filling up',
      },
      {
        image: aSpeaker,
        alt: 'An alumna addressing the meet from the stage, the Pradiptam 2.0 backdrop behind her.',
        caption: 'From the stage',
      },
      {
        image: aMedal1,
        alt: 'An alumnus receiving his commemorative medallion on stage, his photograph and course projected behind him.',
        caption: 'The presentations begin',
      },
      {
        image: aMedal2,
        alt: 'An alumna receiving her medallion, her photograph and university projected on the screen behind.',
      },
      {
        image: aMedal3,
        alt: 'An alumnus receiving his medallion in front of the “proud to be a Sunbeam” backdrop.',
      },
      {
        image: aMedal4,
        alt: 'A member of staff presenting an alumna with her medallion on stage.',
      },
      {
        image: aMedal5,
        alt: 'An alumna receiving her medallion, the Alumni Meet 2026–27 backdrop behind her.',
      },
      {
        image: aMedal6,
        alt: 'An alumna receiving her medallion on stage during the presentations.',
      },
      {
        image: aMedal7,
        alt: 'Two alumni receiving their medallions together in front of the projected screen.',
      },
      {
        image: aMedal8,
        alt: 'An alumna receiving her medallion as her course and institution are shown on the screen.',
        caption: 'Every year group, called up',
      },
      {
        image: aTables,
        alt: 'Alumni standing together at the tables at the side of the hall after the presentations.',
        caption: 'After the presentations',
      },
      {
        image: aGroup2,
        alt: `Alumni, students and staff of ${S} assembled on the stage for the closing group photograph of Pradiptam 2.0.`,
        caption: 'The closing photograph',
      },
    ],
    featured: true,
    published: true,
    source: 'Published by the school in the activity feed on sunbeamballia.edu.in/school-activities/. Its wording and photographs are reproduced from there.',
  },
];

/**
 * ⚠⚠ THE THREE VERIFIED ALUMNI ARE NOT HERE — THEY ARE IN data/alumni.ts, and
 * the page reads them from there. Those are the school's own "OUR ALUMNI"
 * graphics: a name, a degree, an institution and an employer, each read off the
 * card the school itself issued. They are placement records, not stories.
 *
 * ⚠ THIS ARRAY IS FOR THE THING THAT DOES NOT EXIST YET: an alumnus speaking in
 * their own words. That needs an interview and written consent, not a data
 * entry. It stays empty until both exist.
 */
export const alumniStories: AlumniStory[] = [];

/** Published meets, newest first, ready for the UI. */
export const publishedMeets = alumniMeets.filter((m) => m.published);

/** The meet that headlines the page — the flagged one, else the newest. */
export const featuredMeet = publishedMeets.find((m) => m.featured) ?? publishedMeets[0];

/** Published stories only. */
export const publishedStories = alumniStories.filter((s) => s.published);

/**
 * Every photograph across every published meet, for the page's gallery strip.
 * ⚠ DERIVED, NOT A SECOND LIST. A gallery maintained separately from the meets
 * drifts the first time one is edited.
 */
export const alumniGallery: MeetPhoto[] = publishedMeets.flatMap((m) => m.gallery);
