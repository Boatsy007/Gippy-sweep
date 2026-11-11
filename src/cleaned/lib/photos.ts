const bathroom: Img = { src: "/cleaned/images/bathroom-vanity.webp", width: 1448, height: 1086 };
const apartment: Img = { src: "/cleaned/images/empty-apartment.webp", width: 1448, height: 1086 };
const cleaner: Img = { src: "/cleaned/images/swept-cleaner-benchtop.webp", width: 1448, height: 1086 };
const homeCare: Img = { src: "/cleaned/images/swept-ndis-home-care.webp", width: 1448, height: 1086 };
const quoteCleaner: Img = { src: "/cleaned/images/swept-cleaner-quote.webp", width: 1200, height: 1499 };
const regularClean: Img = { src: "/cleaned/images/swept-regular-clean.webp", width: 1400, height: 1050 };
const ndisSupport: Img = { src: "/cleaned/images/swept-ndis-support.webp", width: 1400, height: 1050 };

/** Image file under /public with its pixel size (for width/height attributes). */
export type Img = { src: string; width: number; height: number };

export type Photo = { src: Img; alt: string };

export const photos = {
  bathroom: {
    src: bathroom,
    alt: "Bright, spotless bathroom with a white basin, marble benchtop and folded towels, overlooking the Gold Coast",
  },
  apartment: {
    src: apartment,
    alt: "Empty, freshly cleaned apartment with gleaming tiled floors and moving boxes, ready for handover",
  },
  cleaner: {
    src: cleaner,
    alt: "Cleaned by Swept cleaner in a purple uniform wiping down a stone kitchen benchtop in a bright living area",
  },
  ndisSupport: {
    src: ndisSupport,
    alt: "Cleaned by Swept cleaner in a black Swept polo vacuuming a living room while a smiling older man in a wheelchair looks on",
  },
  regularClean: {
    src: regularClean,
    alt: "Cleaned by Swept cleaner in a black Swept polo and purple gloves wiping down a stone kitchen benchtop in a bright, open-plan home",
  },
  quoteCleaner: {
    src: quoteCleaner,
    alt: "Smiling Cleaned by Swept cleaner in a black Swept polo, holding a caddy of cleaning products in a bright living room",
  },
  homeCare: {
    src: homeCare,
    alt: "Cleaned by Swept cleaner chatting with a smiling older woman holding a cup of tea while wiping down a coffee table in her living room",
  },
} satisfies Record<string, Photo>;

/** Photo per service. Services without one fall back to their illustration. */
export const servicePhotos: Partial<Record<string, Photo>> = {
  "regular-house-cleaning": photos.regularClean,
  "deep-cleaning": photos.bathroom,
  "ndis-cleaning": photos.ndisSupport,
  "bond-cleaning": photos.apartment,
};
