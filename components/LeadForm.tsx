"use client";

import { useEffect, useRef, useState } from "react";

declare global {
  interface Window {
    google?: any;
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
  const [step, setStep] = useState(1);
  const [address, setAddress] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const addrRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const key = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;
    if (!key || !addrRef.current) return;

    function attach() {
      if (!window.google?.maps?.places || !addrRef.current) return;
      const ac = new window.google.maps.places.Autocomplete(addrRef.current, {
        types: ["address"],
        componentRestrictions: { country: "us" },
        fields: ["formatted_address"],
      });
      ac.addListener("place_changed", () => {
        const place = ac.getPlace();
        if (place?.formatted_address) setAddress(place.formatted_address);
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

  useEffect(() => {
    if (step === 2) nameRef.current?.focus();
  }, [step]);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (step === 1) {
      if (address.trim()) setStep(2);
      return;
    }

    if (!name.trim() || !phone.trim()) return;

    setStatus("sending");
    const data = {
      address,
      name,
      phone,
      email: "",
      situation: "",
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
      <p className="mb-4 mt-1 text-sm text-ink-soft">
        {step === 1
          ? "Start with your address. Takes about 30 seconds."
          : "Where should we send your offer?"}
      </p>

      <div className="mb-5 flex items-center gap-2">
        <div className="h-1.5 flex-1 rounded-full bg-teal transition" />
        <div
          className={`h-1.5 flex-1 rounded-full transition ${
            step === 2 ? "bg-teal" : "bg-line"
          }`}
        />
        <span className="ml-1 text-xs font-medium text-ink-soft">
          Step {step} of 2
        </span>
      </div>

      {step === 1 && (
        <>
          <Field label="Property address">
            <input
              ref={addrRef}
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              autoComplete="street-address"
              placeholder="123 Main St, city, CA"
              className={inputCls}
            />
          </Field>

          <button
            type="submit"
            disabled={!address.trim()}
            className="mt-2 w-full rounded-lg bg-amber px-6 py-4 text-base font-semibold text-[#3a2a06] transition hover:bg-amber-dk disabled:opacity-50"
          >
            Get my cash offer →
          </button>
        </>
      )}

      {step === 2 && (
        <>
          <div className={compact ? "" : "grid grid-cols-1 gap-3 sm:grid-cols-2"}>
            <Field label="Full name">
              <input
                ref={nameRef}
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
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
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                autoComplete="tel"
                placeholder="(000) 000-0000"
                className={inputCls}
              />
            </Field>
          </div>

          <button
            type="submit"
            disabled={status === "sending" || !name.trim() || !phone.trim()}
            className="mt-2 w-full rounded-lg bg-amber px-6 py-4 text-base font-semibold text-[#3a2a06] transition hover:bg-amber-dk disabled:opacity-50"
          >
            {status === "sending" ? "Sending…" : "See my offer"}
          </button>

          <button
            type="button"
            onClick={() => setStep(1)}
            className="mt-3 w-full text-center text-sm text-ink-soft underline"
          >
            ← Back
          </button>
        </>
      )}

      {status === "error" && (
        <p className="mt-3 text-center text-sm text-red-600">
          Something went wrong. Please call us at{" "}
          
            className="underline"
            href={`tel:${process.env.NEXT_PUBLIC_PHONE_E164}`}
          >
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
