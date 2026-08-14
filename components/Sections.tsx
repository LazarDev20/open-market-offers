import Link from "next/link";
import { SITE, SITUATIONS } from "@/lib/site";

export function TrustBar() {
  const items = [
    "In business since 2009",
    "No repairs required",
    "No commissions or fees",
    "Close on your timeline",
    "We buy across Southern California",
  ];
  return (
    <div className="bg-ink py-5 text-[#dce7ea]">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6">
        {items.map((t) => (
          <div key={t} className="flex items-center gap-2.5 text-sm font-semibold">
            <span className="text-amber">✓</span> {t}
          </div>
        ))}
      </div>
    </div>
  );
}

export function HowItWorks() {
  const steps = [
    {
      h: "Tell us about your house",
      p: "Send us your address and the best way to reach you. Takes about a minute. No repairs, no cleaning, no prep.",
    },
    {
      h: "Get your offer, or a plan",
      p: "We look at what similar homes actually sold for and the shape yours is in, then call you with a straight cash offer. If listing would net you more, we'll tell you honestly and show you both ways.",
    },
    {
      h: "Close on your date",
      p: "Say yes and pick the day that works for you. As fast as a week, or later if you need the time. We cover the closing costs.",
    },
  ];
  return (
    <section id="how" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SecHead
          eyebrow="How it works"
          title="Three steps. No games."
          sub="From the first call to cash in hand, this is the whole process."
          center
        />
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((s, i) => (
            <div
              key={i}
              className="relative overflow-hidden rounded-xl border border-line bg-mist p-8"
            >
              <div className="mb-4 grid h-9 w-9 place-items-center rounded-lg bg-teal font-display text-white">
                {i + 1}
              </div>
              <h3 className="mb-2 font-display text-xl">{s.h}</h3>
              <p className="text-[14.5px] text-ink-soft">{s.p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Situations() {
  return (
    <section id="situations" className="border-y border-line bg-mist py-20">
      <div className="mx-auto max-w-6xl px-6">
        <SecHead
          eyebrow="We can help with"
          title="Whatever's going on, we can help"
          sub="We've bought homes through just about every situation there is since 2009."
        />
        <div className="grid gap-4 md:grid-cols-3">
          {SITUATIONS.map((s) => (
            <Link
              key={s.slug}
              href={`/sell/${s.slug}`}
              className="group rounded-xl border border-line bg-white p-6 transition hover:-translate-y-1 hover:border-teal hover:shadow-md"
            >
              <h3 className="mb-1.5 font-display text-lg">{s.short}</h3>
              <p className="text-[13.5px] text-ink-soft">{s.intro.slice(0, 90)}…</p>
              <div className="mt-3 flex items-center gap-1.5 text-[13px] font-semibold text-teal">
                Learn more →
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Testimonials({ hideHeader = false }: { hideHeader?: boolean } = {}) {
  const quotes = [
    {
      q: "We inherited a property after losing our parents, and the thought of cleaning it out and listing it traditionally felt overwhelming. They gave us a fair off-market offer right from the start, the highest price compared to other cash buyers, and working with them felt entirely trustworthy. The ease of the sale was incredible during such an emotional time for our family.",
      n: "Tina K.",
      l: "Orange, CA",
      i: "TK",
    },
    {
      q: "Living out of state with a house that needed a massive amount of work was a huge stressor. They stepped in with a straightforward off-market offer that saved us countless cross-country trips, at the highest price and with zero pressure. Best of all, there was no re-negotiation once we went under contract. We closed quickly and handled everything remotely through a professional escrow and title company.",
      n: "Jordan B.",
      l: "Fullerton, CA",
      i: "JB",
    },
    {
      q: "Dealing with sick loved ones who could no longer take care of their dilapidated home left us exhausted. We needed a private solution, so we called a few off-market buyers. Open Market Offers gave us the highest offer and a fast close, which is all we needed to walk away. Even though a few issues came up before closing, they still honored their price with no renegotiation.",
      n: "Tommy G.",
      l: "Santa Ana, CA",
      i: "TG",
    },
    {
      q: "As tired landlords dealing with tenants who wouldn't pay rent, we were at our wit's end trying to offload the property. They provided a lifeline with a clean off-market offer. We experienced absolute peace of mind with no negotiation, no inspection hassles, and no showings. Thank you for your honesty.",
      n: "Lisa & John T.",
      l: "Anaheim, CA",
      i: "LJ",
    },
    {
      q: "Our family home was severely distressed, with a leaking roof, clogged drains, and uneven floors. We wanted to sell off-market and not deal with all the disclosures and headaches of a traditional sale. They came through with a realistic off-market offer and did everything they said they would within the time frame they quoted. We were very happy with the experience.",
      n: "Isaac J.",
      l: "Tustin, CA",
      i: "IJ",
    },
  ];
  return (
    <section id="reviews" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        {!hideHeader && (
          <SecHead
            eyebrow="Reviews"
            title="Homeowners we've helped"
            sub="Real sellers, in their own words."
            center
          />
        )}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {quotes.map((c, i) => (
            <div
              key={i}
              className="flex flex-col rounded-xl border border-line bg-white p-6 shadow-sm"
            >
              <div className="mb-3 tracking-widest text-amber">★★★★★</div>
              <p className="mb-4 flex-1 font-display text-[15px] leading-snug text-ink">
                &ldquo;{c.q}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-gradient-to-br from-teal to-ink text-sm font-bold text-white">
                  {c.i}
                </span>
                <span>
                  <span className="block text-sm font-bold">{c.n}</span>
                  <span className="block text-[12.5px] text-ink-soft">{c.l}</span>
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function CtaBand() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-7 rounded-3xl bg-gradient-to-br from-ink to-teal-dk p-12 text-center shadow-xl sm:flex-row sm:text-left">
          <div>
            <h2 className="mb-2 font-display text-3xl text-white">
              Ready for your cash offer?
            </h2>
            <p className="text-[#c9dee1]">
              Tell us about your home today. It&rsquo;s free, fast, and there&rsquo;s
              no obligation.
            </p>
          </div>
          <div className="flex shrink-0 gap-3">
            <Link
              href="/#quote"
              className="rounded-lg bg-amber px-7 py-4 font-semibold text-[#3a2a06] transition hover:bg-amber-dk"
            >
              Cash Offer Now
            </Link>
            <a
              href={`tel:${SITE.phoneE164}`}
              className="rounded-lg border border-white/35 px-7 py-4 font-semibold text-white transition hover:bg-white/10"
            >
              Call us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "How fast can you really close?",
    a: "About a week once you accept. We use our own cash, so there's no lender, no appraisal delay, and nothing that can fall through at the last minute. Need more time? You pick the date.",
  },
  {
    q: "Do I need to make repairs or clean up?",
    a: "No. We buy homes exactly as they are, in any condition. Leave behind whatever you don't want and we'll deal with it.",
  },
  {
    q: "Are there any fees or commissions?",
    a: "None. We're the buyer, not an agent, so there's nothing to pay us. We also cover the standard closing costs.",
  },
  {
    q: "What if the cash offer is too low for me?",
    a: "Then listing might be the better move, and we'll say so. Our licensed partner can put your home on the market to reach more buyers. We'd rather point you to the option that gets you the most, cash or listed, than push a number that doesn't work for you.",
  },
  {
    q: "Are you a real estate agent?",
    a: "Open Market Offers buys houses directly for cash. We're the buyer, not an agent. If you'd rather list your home on the market, our licensed partner can handle that for you, so you get the best of both options in one call.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <SecHead eyebrow="FAQ" title="Common questions" center />
        <div className="mx-auto max-w-3xl">
          {FAQ_ITEMS.map((f, i) => (
            <details
              key={i}
              className="group border-b border-line"
              open={i === 0}
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-[17px] font-semibold marker:content-none">
                {f.q}
                <span className="text-2xl text-teal transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="pb-5 text-[15px] text-ink-soft">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

// JSON-LD for the FAQ (SEO rich results)
export function FaqJsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function SecHead({
  eyebrow,
  title,
  sub,
  center,
}: {
  eyebrow: string;
  title: string;
  sub?: string;
  center?: boolean;
}) {
  return (
    <div className={`mb-12 max-w-2xl ${center ? "mx-auto text-center" : ""}`}>
      <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-teal">
        {eyebrow}
      </span>
      <h2 className="mb-3 mt-3 font-display text-3xl sm:text-4xl">{title}</h2>
      {sub && <p className="text-[17px] text-ink-soft">{sub}</p>}
    </div>
  );
}
