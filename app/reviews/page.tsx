import type { Metadata } from "next";
import { Testimonials, CtaBand } from "@/components/Sections";

export const metadata: Metadata = {
  title: "Reviews — What Homeowners Say",
  description:
    "Read reviews from Southern California homeowners who sold their houses to Open Market Offers for a fast, fair, no-hassle cash sale.",
};

export default function Page() {
  return (
    <>
      <section className="bg-gradient-to-b from-mist to-white py-16">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <h1 className="font-display text-4xl sm:text-5xl">Homeowner reviews</h1>
          <p className="mt-4 text-lg text-ink-soft">
            Real stories from people we&rsquo;ve helped. (Placeholders — replace
            with your verified reviews.)
          </p>
        </div>
      </section>
      <Testimonials />
      <CtaBand />
    </>
  );
}
