import Link from "next/link";
import { SITE, SITUATIONS } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-ink pt-16 pb-8 text-[#aec4cb]">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-10 grid grid-cols-2 gap-9 md:grid-cols-4">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3 flex items-center gap-3 text-white">
              <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-teal to-white font-display text-lg text-ink">
                O
              </span>
              <span className="font-display text-xl font-semibold">
                {SITE.name}
              </span>
            </div>
            <p className="max-w-xs text-sm text-[#8fa9b2]">
              A direct home buyer serving homeowners across {SITE.region} with
              fast, fair, no-hassle cash offers since {SITE.since}.
            </p>
          </div>

          <FootCol title="Company">
            <FLink href="/how-it-works">How It Works</FLink>
            <FLink href="/about">About</FLink>
            <FLink href="/reviews">Reviews</FLink>
            <FLink href="/contact">Contact</FLink>
          </FootCol>

          <FootCol title="Situations">
            {SITUATIONS.slice(0, 4).map((s) => (
              <FLink key={s.slug} href={`/sell/${s.slug}`}>
                {s.short}
              </FLink>
            ))}
          </FootCol>

          <FootCol title="Contact">
            <FLink href={`tel:${SITE.phoneE164}`}>{SITE.phone}</FLink>
            <FLink href="/#quote">Get an Offer</FLink>
            {SITE.calendly ? (
              <FLink href={SITE.calendly}>Book a Call</FLink>
            ) : (
              <FLink href="/contact">Book a Call</FLink>
            )}
          </FootCol>
        </div>

        <div className="border-t border-white/10 pt-6 text-[12.5px] leading-relaxed text-[#7d97a0]">
          {SITE.name} is a direct real estate home buyer (principal) and is not
          a licensed real estate agent or brokerage. We do not provide legal,
          tax, or financial advice; please consult a qualified professional
          regarding your specific situation. All offers are non-binding until a
          written purchase agreement is signed.
          <div className="mt-3.5 flex flex-wrap justify-between gap-3.5">
            <span>
              © {new Date().getFullYear()} {SITE.name}. All rights reserved.
            </span>
            <span>
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FootCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-4 text-[13px] font-semibold uppercase tracking-wider text-white">
        {title}
      </h4>
      <ul className="space-y-2.5">{children}</ul>
    </div>
  );
}

function FLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li className="text-sm">
      <Link href={href} className="hover:text-white">
        {children}
      </Link>
    </li>
  );
}
