// ─────────────────────────────────────────────────────────────
//  Central config. Edit these to change site-wide values.
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: "Open Market Offers",
  tagline: "A fair cash offer, or list for more",
  // Licensed partner for the optional listing service.
  // Confirm exact wording/label with the broker before publishing.
  agent: {
    name: "Nathan Bernal",
    brokerage: "Condor Real Estate",
    license: "DRE# 01408342",
  },
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
    h1: "Sell an inherited house without the hassle",
    intro:
      "An inherited house often becomes a job nobody wants. There's upkeep, a cleanout, maybe a long drive, and a probate process that takes forever. We buy inherited homes as they are and close when you're ready, so you can settle the estate and be done with it. We've been buying probate and inherited homes around Southern California since 2009.",
    bullets: [
      "No cleanout and no repairs. Take what you want and leave the rest",
      "We know how probate works and can move at the court's pace",
      "One fair cash offer, and we handle everything after closing",
      "Rather list it? We can do that too if it nets the estate more",
    ],
  },
  {
    slug: "foreclosure",
    short: "Foreclosure",
    h1: "Behind on payments? Sell before the auction",
    intro:
      "When there's a foreclosure date on the calendar, how fast you can close is what matters. Selling before the auction can protect the equity you have left and keep the foreclosure off your credit. Because we buy with our own cash, we can close in about a week, so the sale doesn't stall while the clock runs down.",
    bullets: [
      "We can close before your auction date. Real cash, no lender delays",
      "Keep your equity instead of losing the house at auction",
      "No fees, so more of what's left stays with you",
    ],
  },
  {
    slug: "divorce",
    short: "Divorce",
    h1: "Sell the house and move on",
    intro:
      "The last thing anyone going through a divorce needs is a house sitting on the market for months. We give you one straight offer and a fast, certain close, so the money can be split and both people can move forward. It stays private. No signs in the yard and no strangers walking through.",
    bullets: [
      "One clear offer, no back and forth",
      "Close fast so the proceeds can be divided",
      "Private sale with no showings or open houses",
    ],
  },
  {
    slug: "rental-property",
    short: "Tired Landlord",
    h1: "Done being a landlord? Sell as-is",
    intro:
      "Between the tenants, the repairs, the turnover, and California's rules, there comes a point where owning a rental isn't worth it anymore. We buy rentals in any condition, even with tenants still living there, so you can get out without evicting anyone or fixing the place up first. We've been buying from landlords across Southern California for 15 years.",
    bullets: [
      "We buy with tenants in place. No eviction needed",
      "No repairs, no make-ready, no months of vacancy",
      "You pick the closing date",
    ],
  },
  {
    slug: "relocation",
    short: "Relocation",
    h1: "Moving? Sell before you go",
    intro:
      "A move for work or family shouldn't leave you paying two mortgages or trying to manage a listing from another state. We give you a firm cash offer and a closing date that lines up with your move, and it won't fall apart at the last minute the way financed deals sometimes do.",
    bullets: [
      "Pick a closing date that fits your move",
      "No showings to deal with while you pack",
      "A sure thing, not a buyer whose loan might fall through",
    ],
  },
  {
    slug: "as-is",
    short: "As-Is / Distressed",
    h1: "Any condition. We buy it",
    intro:
      "Fire or water damage, years of deferred maintenance, code violations, a hoarder situation, a house nobody's touched in decades. We've seen all of it, and we buy it. No repairs, no cleaning, no lectures. Just a fair cash offer based on what similar homes actually sold for, from someone who's been doing this since 2009.",
    bullets: [
      "Truly any condition. We deal with all of it after closing",
      "No repairs, no cleaning, nothing to prep",
      "A fair number based on real comps, not a lowball",
      "Prefer to list instead? Our licensed partner can handle that",
    ],
  },
];
