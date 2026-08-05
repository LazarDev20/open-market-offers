import type { Metadata } from "next";
import { SITE } from "@/lib/site";
export const metadata: Metadata = { title: "Terms of Service" };
export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl">Terms of Service</h1>
      <p className="mt-6 text-ink-soft">
        This is placeholder text. Replace it with your reviewed terms before
        launch. {SITE.name} is a direct home buyer, not a licensed real estate
        agent or brokerage, and does not provide legal, tax, or financial
        advice. All offers are non-binding until a written purchase agreement is
        signed by both parties.
      </p>
    </section>
  );
}
