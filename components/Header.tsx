"use client";
import { useState } from "react";
import Link from "next/link";
import { SITE } from "@/lib/site";

export default function Header(): JSX.Element {  
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/how-it-works", label: "How It Works" },
    { href: "/#situations", label: "Situations" },
    { href: "/reviews", label: "Reviews" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/90 backdrop-blur">
      <div className="mx-auto flex h-[70px] max-w-6xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-to-br from-teal to-ink font-display text-lg text-white">
            O
          </span>
          <span className="font-display text-xl font-semibold">
            {SITE.name}
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden gap-7 text-[14.5px] font-medium text-ink-soft md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-teal transition-colors">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3.5 sm:flex">
          
            href={`tel:${SITE.phoneE164}`}
            className="hidden items-center gap-2 text-[15px] font-bold text-ink sm:flex"
          >
            {SITE.phone}
          </a>
          <Link
            href="/#quote"
            className="rounded-lg bg-amber px-5 py-3 text-[15px] font-semibold text-[#3a2a06] transition hover:bg-amber-400"
          >
            Cash Offer Now
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex flex-col gap-1.5 p-2 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span className={`block h-0.5 w-6 bg-ink transition-transform duration-200 ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-opacity duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-ink transition-transform duration-200 ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-line bg-white px-6 py-4 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="py-3 text-[15px] font-medium text-ink-soft border-b border-line last:border-none hover:text-teal transition-colors"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-3">
            
              href={`tel:${SITE.phoneE164}`}
              className="text-center py-3 text-[15px] font-bold text-ink border border-line rounded-lg"
            >
              {SITE.phone}
            </a>
            <Link
              href="/#quote"
              className="text-center rounded-lg bg-amber px-5 py-3 text-[15px] font-semibold text-[#3a2a06]"
              onClick={() => setOpen(false)}
            >
              Cash Offer Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
