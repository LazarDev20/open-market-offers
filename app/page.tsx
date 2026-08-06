
import Link from "next/link";
import LeadForm from "@/components/LeadForm";
import {
  TrustBar,
  HowItWorks,
  Situations,
  Testimonials,
  CtaBand,
  Faq,
  FaqJsonLd,
  SecHead,
} from "@/components/Sections";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line bg-gradient-to-b from-mist to-white">
        <div className="mx-auto grid max-w-6xl items-center gap-14 px-6 py-16 md:grid-cols-[1.05fr_.95fr] md:py-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-3 py-1.5 text-[13px] font-semibold text-ink-soft shadow-sm">
              <span className="h-2 w-2 rounded-full bg-teal ring-4 ring-teal/20" />
              Buying SoCal homes since 2009
            </span>
            <h1 className="mt-5 font-display text-4xl leading-[1.05] sm:text-5xl md:text-6xl">
              Sell your house fast.
              <br />
              <em className="not-italic text-teal">We close in days, not months.</em>
            </h1>
            <p className="mt-4 max-w-md text-lg text-ink-soft">
              No repairs, no showings, no waiting around for a buyer whose loan
              might fall through. Tell us about your Southern California house and
              get a fair cash offer with a closing date you choose. We&rsquo;ve been
              buying homes here, as they are, since 2009.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="#quote"
                className="rounded-lg bg-amber px-7 py-4 text-base font-semibold text-[#3a2a06] transition hover:bg-amber-dk"
              >
                Get my cash offer →
              </Link>
              <Link
                href="/how-it-works"
                className="rounded-lg border-[1.5px] border-line px-7 py-4 text-base font-semibold transition hover:border-teal hover:text-teal"
              >
                See how it works
              </Link>
            </div>
            <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2.5">
              {["No fees or commissions", "We buy as-is", "Close in about 7 days"].map(
                (t) => (
                  <li key={t} className="flex items-center gap-2 text-[14.5px] font-semibold">
                    <span className="grid h-5 w-5 place-items-center rounded-full bg-teal/10 text-xs text-teal">
                      ✓
                    </span>
                    {t}
                  </li>
                )
              )}
            </ul>
          </div>

          <div id="quote">
            <LeadForm source="homepage-hero" />
          </div>
        </div>
      </section>

      <TrustBar />
      <HowItWorks />
      <Situations />
      <Testimonials />
      <CtaBand />
      <Faq />
      <FaqJsonLd />
    </>
  );
}
