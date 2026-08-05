import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LeadForm from "@/components/LeadForm";
import { TrustBar, HowItWorks, Testimonials, Faq, FaqJsonLd } from "@/components/Sections";
import { SITUATIONS, SITE } from "@/lib/site";

export function generateStaticParams() {
  return SITUATIONS.map((s) => ({ situation: s.slug }));
}

function find(slug: string) {
  return SITUATIONS.find((s) => s.slug === slug);
}

export function generateMetadata({
  params,
}: {
  params: { situation: string };
}): Metadata {
  const s = find(params.situation);
  if (!s) return {};
  return {
    title: s.h1,
    description: s.intro.slice(0, 155),
    alternates: { canonical: `${SITE.url}/sell/${s.slug}` },
  };
}

export default function SituationPage({
  params,
}: {
  params: { situation: string };
}) {
  const s = find(params.situation);
  if (!s) notFound();

  return (
    <>
      <section className="border-b border-line bg-gradient-to-b from-mist to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-[1.05fr_.95fr]">
          <div>
            <span className="text-[12.5px] font-semibold uppercase tracking-[0.14em] text-teal">
              {s.short}
            </span>
            <h1 className="mt-3 font-display text-4xl leading-[1.05] sm:text-5xl">
              {s.h1}
            </h1>
            <p className="mt-4 max-w-md text-lg text-ink-soft">{s.intro}</p>
            <ul className="mt-7 space-y-2.5">
              {s.bullets.map((b) => (
                <li key={b} className="flex items-center gap-2 text-[15px] font-semibold">
                  <span className="grid h-5 w-5 place-items-center rounded-full bg-teal/10 text-xs text-teal">
                    ✓
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
          <div id="quote">
            <LeadForm source={`situation-${s.slug}`} />
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
