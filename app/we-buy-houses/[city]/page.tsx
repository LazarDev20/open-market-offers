import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";
import { TrustBar, HowItWorks, Testimonials, Faq, FaqJsonLd } from "@/components/Sections";
import { CITIES, SITE } from "@/lib/site";

export function generateStaticParams() {
  return CITIES.map((c) => ({ city: c.slug }));
}

function findCity(slug: string) {
  return CITIES.find((c) => c.slug === slug);
}

export function generateMetadata({
  params,
}: {
  params: { city: string };
}): Metadata {
  const city = findCity(params.city);
  if (!city) return {};
  return {
    title: `We Buy Houses in ${city.name}, CA — Cash Offer Now`,
    description: `Sell your ${city.name} house fast for cash. No fees, no repairs, no commissions. Fair cash offers from a local direct buyer serving ${city.name} since ${SITE.since}.`,
    alternates: { canonical: `${SITE.url}/we-buy-houses/${city.slug}` },
  };
}

export default function CityPage({ params }: { params: { city: string } }) {
  const city = findCity(params.city);
  if (!city) notFound();

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-mist to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-[1.05fr_.95fr]">
          <div>
            <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-teal">
              We buy houses in {city.name}
            </span>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">
              Sell your {city.name} house fast — cash offer now.
            </h1>
            <p className="mt-4 max-w-md text-lg text-ink-soft">
              We&rsquo;re a direct home buyer serving {city.name} homeowners
              since {SITE.since}. No repairs, no commissions, no waiting — just a
              fair cash offer and a closing date you choose.
            </p>
            <ul className="mt-7 space-y-2.5">
              {[
                `Local ${city.name} buyer with 15+ years of experience`,
                "Any condition, any situation",
                "Close in as little as 7 days",
              ].map((t) => (
                <li key={t} className="flex items-center gap-2 text-[15px] font-semibold">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-teal/10 text-xs text-teal">
                    ✓
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div id="quote">
            <LeadForm source={`city-${city.slug}`} />
          </div>
        </div>
      </section>

      <TrustBar />
      <HowItWorks />
      <Testimonials />
      <Faq />
      <FaqJsonLd />
    </>
  );
}
