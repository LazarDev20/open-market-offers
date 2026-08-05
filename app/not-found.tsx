import Link from "next/link";
export default function NotFound() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-24 text-center">
      <h1 className="font-display text-5xl">Page not found</h1>
      <p className="mt-4 text-ink-soft">
        The page you&rsquo;re looking for doesn&rsquo;t exist.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block rounded-lg bg-amber px-7 py-4 font-semibold text-[#3a2a06] hover:bg-amber-dk"
      >
        Back home
      </Link>
    </section>
  );
}
