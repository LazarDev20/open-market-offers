"use client";

import { useEffect, useRef, useState } from "react";
import { SITUATIONS } from "@/lib/site";

declare global {
  interface Window {
    google?: any;
    initOMOAutocomplete?: () => void;
  }
}

export default function LeadForm({
  compact = false,
  source = "site",
}: {
  compact?: boolean;
  source?: string;
}) {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const addrRef = useRef<HTMLInputElement>(null);

  // Google Places autocomplete — only if a key is configured.
  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
    if (!key || !addrRef.current) return;

    function attach() {
      if (!window.google?.maps?.places || !addrRef.current) return;
      new window.google.maps.places.Autocomplete(addrRef.current, {
        types: ["address"],
        componentRestrictions: { country: "us" },
        fields: ["formatted_address"],
      });
    }

    if (window.google?.maps?.places) {
      attach();
      return;
    }
    const id = "omo-gmaps";
    if (!document.getElementById(id)) {
      const s = document.createElement("script");
      s.id = id;
      s.src = `https://maps.googleapis.com/maps/api/js?key=${key}&libraries=places`;
      s.async = true;
      s.onload = attach;
      document.head.appendChild(s);
    } else {
      const t = setInterval(() => {
        if (window.google?.maps?.places) {
          clearInterval(t);
          attach();
        }
      }, 300);
      return () => clearInterval(t);
    }
  }, []);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = {
      address: (form.elements.namedItem("address") as HTMLInputElement).value,
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      situation: (form.elements.namedItem("situation") as HTMLSelectElement)
        .value,
      source,
    };
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-line bg-white p-8 text-center shadow-xl">
        <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-full bg-teal/10 text-3xl text-teal">
          ✓
        </div>
        <h3 className="font-display text-2xl text-teal">We got it. Thank you!</h3>
        <p className="mx-auto mt-2 max-w-sm text-sm text-ink-soft">
          A member of our team will call you shortly to walk through your
          options. No pressure, no obligation.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-line bg-white p-7 shadow-xl"
    >
      <h3 className="font-display text-2xl">Get your cash offer</h3>
      <p className="mb-5 mt-1 text-sm text-ink-soft">
        No obligation. We&rsquo;ll call you shortly.
      </p>

      <Field label="Property address">
        <input
          ref={addrRef}
          name="address"
          required
          autoComplete="street-address"
          placeholder="123 Main St, city, CA"
          className={inputCls}
        />
      </Field>

      <div className={compact ? "" : "grid grid-cols-1 gap-3 sm:grid-cols-2"}>
        <Field label="Full name">
          <input
            name="name"
            required
            autoComplete="name"
            placeholder="Your name"
            className={inputCls}
          />
        </Field>
        <Field label="Phone">
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(000) 000-0000"
            className={inputCls}
          />
        </Field>
      </div>

      <Field label="Email">
        <input
          name="email"
          type="email"
          required
          autoComplete="email"
          placeholder="you@email.com"
          className={inputCls}
        />
      </Field>

      <Field label="Your situation (optional)">
        <select name="situation" className={inputCls} defaultValue="">
          <option value="">Select one…</option>
          {SITUATIONS.map((s) => (
            <option key={s.slug} value={s.short}>
              {s.short}
            </option>
          ))}
          <option value="Other">Other</option>
        </select>
      </Field>

      <button
        type="submit"
        disabled={status === "sending"}
        className="mt-2 w-full rounded-lg bg-amber px-6 py-4 text-base font-semibold text-[#3a2a06] transition hover:bg-amber-dk disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Request my cash offer"}
      </button>

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-600">
          Something went wrong. Please call us at {" "}
          <a className="underline" href={`tel:${process.env.NEXT_PUBLIC_PHONE_E164}`}>
            {process.env.NEXT_PUBLIC_PHONE}
          </a>
          .
        </p>
      )}
      <p className="mt-3 text-center text-xs text-ink-soft">
        🔒 No obligation. We never charge fees or commissions.
      </p>
    </form>
  );
}

const inputCls =
  "w-full rounded-lg border-[1.5px] border-line bg-[#fdfefe] px-3.5 py-3 text-[15px] text-ink outline-none transition focus:border-teal focus:bg-white focus:ring-4 focus:ring-teal/10";

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="mb-3.5 block">
      <span className="mb-1.5 block text-[12.5px] font-semibold text-ink-soft">
        {label}
      </span>
      {children}
    </label>
  );
}
