// ─────────────────────────────────────────────────────────────
//  Central config. Edit these to change site-wide values.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Open Market Offers",
  tagline: "Cash Offer Now",
  since: 2009,
  region: "Southern California",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://openmarketoffers.com",
  phone: process.env.NEXT_PUBLIC_PHONE || "(000) 000-0000",
  phoneE164: process.env.NEXT_PUBLIC_PHONE_E164 || "+10000000000",
  calendly: process.env.NEXT_PUBLIC_CALENDLY_URL || "",
};

// ─── Cities → each generates /we-buy-houses/[city] ───
// Add a city by adding one line here. That's the whole edit.
export const CITIES: { slug: string; name: string }[] = [
  { slug: "santa-ana", name: "Santa Ana" },
  { slug: "anaheim", name: "Anaheim" },
  { slug: "irvine", name: "Irvine" },
  { slug: "huntington-beach", name: "Huntington Beach" },
  { slug: "garden-grove", name: "Garden Grove" },
  { slug: "costa-mesa", name: "Costa Mesa" },
  { slug: "newport-beach", name: "Newport Beach" },
  { slug: "orange", name: "Orange" },
  { slug: "fullerton", name: "Fullerton" },
  { slug: "tustin", name: "Tustin" },
  { slug: "long-beach", name: "Long Beach" },
  { slug: "riverside", name: "Riverside" },
];

// ─── Situations → each generates /sell/[situation] ───
export const SITUATIONS: {
  slug: string;
  short: string;
  h1: string;
  intro: string;
  bullets: string[];
}[] = [
  {
    slug: "inherited-house",
    short: "Inherited / Probate",
    h1: "Sell an inherited house in Southern California",
    intro:
      "Inheriting a home can bring more burden than blessing — upkeep, cleanout, distance, and a probate process that drags. We buy inherited homes as-is so you can settle the estate and move on.",
    bullets: [
      "No cleanout required — leave whatever you don't want",
      "We're familiar with probate timelines and can work with your attorney",
      "One fair cash offer, split however the heirs need",
    ],
  },
  {
    slug: "foreclosure",
    short: "Foreclosure",
    h1: "Sell your house before foreclosure",
    intro:
      "If you've fallen behind on payments, selling before the auction date can protect your equity and your credit. We move quickly and handle the details.",
    bullets: [
      "We can close in as little as 7 days",
      "Stop the process before it reaches auction",
      "No fees — you keep more of your remaining equity",
    ],
  },
  {
    slug: "divorce",
    short: "Divorce",
    h1: "Sell a house during divorce",
    intro:
      "A drawn-out listing is the last thing anyone wants during a divorce. We provide a clean, fast sale so both parties can settle and move forward.",
    bullets: [
      "A single, transparent offer — no negotiation drama",
      "Fast close so proceeds can be divided quickly",
      "Discreet, professional, no public showings",
    ],
  },
  {
    slug: "rental-property",
    short: "Tired Landlord",
    h1: "Sell your rental property — tenants and all",
    intro:
      "Done with tenants, repairs, and turnover? We buy rentals as-is, even occupied ones, so you can exit without evicting or renovating.",
    bullets: [
      "We buy with tenants in place",
      "No repairs, no make-ready, no vacancy loss",
      "Close on your schedule",
    ],
  },
  {
    slug: "relocation",
    short: "Relocation",
    h1: "Selling your home for a relocation",
    intro:
      "Moving for work or family shouldn't mean carrying two mortgages or rushing a listing. Sell on your timeline and close before you go.",
    bullets: [
      "Pick a closing date that lines up with your move",
      "No showings while you're packing",
      "Certainty — no buyer financing falling through",
    ],
  },
  {
    slug: "as-is",
    short: "As-Is / Distressed",
    h1: "Sell your house as-is, any condition",
    intro:
      "Fire or water damage, deferred maintenance, code issues, hoarder situations — we've seen it and we buy it. No repairs, no judgment.",
    bullets: [
      "Any condition, any situation",
      "No repairs or cleaning required",
      "A fair cash offer based on real comparable sales",
    ],
  },
];
