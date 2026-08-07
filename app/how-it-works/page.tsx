import type { Metadata } from "next";
import { HowItWorks, TrustBar, CtaBand, Faq, FaqJsonLd } from "@/components/Sections";

export const metadata: Metadata = {
  title: "How It Works | Sell Your Home for Cash in 3 Steps",
  description:
    "See how selling your Southern California home to Open Market Offers works: tell us about your home, get a fair cash offer, and close on your timeline.",
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-4xl sm:text-5xl">How it works</h1>
          <p className="mt-4 text-lg text-ink-soft">
            No listings, no open houses, no months of uncertainty. Here is the
            entire process from first contact to cash in hand.
          </p>
        </div>
      </section>
      <TrustBar />
      <HowItWorks />
      <CtaBand />
      <Faq />
      <FaqJsonLd />
    </>
  );
}
