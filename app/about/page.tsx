import type { Metadata } from "next";
import { CtaBand, TrustBar } from "@/components/Sections";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us | A Direct Home Buyer Since 2009",
  description:
    "Open Market Offers has been buying homes directly across Southern California since 2009. Learn about our approach: fast, fair, no-hassle cash offers.",
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white py-16">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="font-display text-4xl sm:text-5xl">
            A direct buyer you can trust
          </h1>
          <div className="mt-6 space-y-5 text-[17px] leading-relaxed text-ink-soft">
            <p>
              Since {SITE.since}, {SITE.name} has helped homeowners across{" "}
              {SITE.region} sell and move on. Foreclosure, probate, divorce,
              bad tenants, and every kind of life change in between. We&rsquo;ve
              probably seen a situation like yours before.
            </p>
            <p>
              We&rsquo;re not agents, and we&rsquo;re not a middleman. We buy homes
              directly with our own money. That means no loan that can fall apart,
              no buyer who backs out three weeks in, and no commission taken out of
              your check. When we make an offer, we can actually close on it.
            </p>
            <p>
              Here&rsquo;s our promise. A fair number based on what homes near you
              actually sold for, no pressure at any point, and a closing date you
              choose. And if selling on the market would put more in your pocket,
              our licensed partner can list it for you instead. Whatever gets you
              the best result.
            </p>
          </div>
        </div>
      </section>
      <TrustBar />
      <CtaBand />
    </>
  );
}
