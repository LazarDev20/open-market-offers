import type { Metadata } from "next";
import LeadForm from "@/components/LeadForm";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Get Your Cash Offer",
  description:
    "Contact Open Market Offers for a fast, no-obligation cash offer on your Southern California home. Call us or request an offer online.",
};

export default function Page() {
  return (
    <section className="bg-gradient-to-b from-mist to-white py-16">
      <div className="mx-auto grid max-w-6xl items-start gap-14 px-6 md:grid-cols-2">
        <div>
          <h1 className="font-display text-4xl sm:text-5xl">Let&rsquo;s talk</h1>
          <p className="mt-4 text-lg text-ink-soft">
            Request a no-obligation cash offer, or reach us directly. We respond
            quickly.
          </p>
          <div className="mt-8 space-y-4">
            <div>
              <div className="text-[12.5px] font-semibold uppercase tracking-wider text-teal">
                Call or text
              </div>
              <a
                href={`tel:${SITE.phoneE164}`}
                className="font-display text-2xl text-ink"
              >
                {SITE.phone}
              </a>
            </div>
            {SITE.calendly && (
              <div>
                <div className="text-[12.5px] font-semibold uppercase tracking-wider text-teal">
                  Prefer to book a time?
                </div>
                <a
                  href={SITE.calendly}
                  className="font-semibold text-teal underline"
                >
                  Book a call →
                </a>
              </div>
            )}
          </div>
        </div>
        <div id="quote">
          <LeadForm source="contact-page" />
        </div>
      </div>
    </section>
  );
}
