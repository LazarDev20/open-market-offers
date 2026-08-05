import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-teal to-ink font-display text-lg text-white">
            O
          </span>
          <span className="font-display text-xl font-semibold">
            {SITE.name}
          </span>
        </Link>

        <nav className="hidden gap-7 text-[14.5px] font-medium text-ink-soft md:flex">
          <Link href="/how-it-works" className="hover:text-teal">How It Works</Link>
          <Link href="/#situations" className="hover:text-teal">Situations</Link>
          <Link href="/reviews" className="hover:text-teal">Reviews</Link>
          <Link href="/about" className="hover:text-teal">About</Link>
          <Link href="/contact" className="hover:text-teal">Contact</Link>
        </nav>

        <div className="flex items-center gap-3.5">
          <a
            href={`tel:${SITE.phoneE164}`}
            className="hidden items-center gap-2 text-[15px] font-bold text-ink sm:flex"
          >
            {SITE.phone}
          </a>
          <Link
            href="/#quote"
            className="rounded-lg bg-amber px-5 py-3 text-[15px] font-semibold text-[#3a2a06] transition hover:bg-amber-dk"
          >
            Cash Offer Now
          </Link>
        </div>
      </div>
    </header>
  );
}
