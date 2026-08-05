import type { Metadata } from "next";
import { CtaBand, TrustBar } from "@/components/Sections";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us — A Direct Home Buyer Since 2009",
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
              {SITE.region} sell quickly and move forward — through foreclosure,
              probate, divorce, difficult tenants, and every kind of life change
              in between.
            </p>
            <p>
              We&rsquo;re not agents and we&rsquo;re not a middleman. We buy homes
              directly, with our own funds, which means no financing
              contingencies, no buyers falling through, and no commissions eating
              into your proceeds. When we make an offer, we can close.
            </p>
            <p>
              Our promise is simple: a fair number based on real comparable
              sales, a process with no pressure, and a closing date that works
              for you. That&rsquo;s it.
            </p>
          </div>
        </div>
      </section>
      <TrustBar />
      <CtaBand />
    </>
  );
}
