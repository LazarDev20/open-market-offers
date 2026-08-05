import type { Metadata } from "next";
import { SITE } from "@/lib/site";
export const metadata: Metadata = { title: "Privacy Policy" };
export default function Page() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-16">
      <h1 className="font-display text-4xl">Privacy Policy</h1>
      <p className="mt-6 text-ink-soft">
        This is placeholder text. Replace it with your reviewed privacy policy
        before launch. {SITE.name} collects the contact information you submit
        (name, phone, email, property address) solely to respond to your inquiry
        about selling your home. We do not sell your personal information.
        Questions? Call {SITE.phone}.
      </p>
    </section>
  );
}
