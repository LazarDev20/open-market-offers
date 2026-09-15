import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Blog | Open Market Offers",
  description:
    "Real advice for Southern California homeowners thinking about selling. Inherited properties, divorce sales, foreclosure, as-is — honest information from Open Market Offers.",
};

const posts = [
  {
    slug: "inherited-home-california",
    tag: "Inherited Homes",
    date: "September 5, 2026",
    readTime: "6 min read",
    title: "Inherited a Home in California? Read This Before You Do Anything.",
    excerpt:
      "Inheriting a property sounds like a gift — but for most families, it quickly becomes a source of stress, confusion, and unexpected costs. Here's what most people don't know before they make a decision they can't take back.",
    featured: true,
  },
  {
    slug: "divorce-home-california",
    tag: "Divorce",
    date: "September 9, 2026",
    readTime: "7 min read",
    title: "Going Through a Divorce in California? Here's What Happens to Your Home.",
    excerpt:
      "California is a community property state — which means the family home is almost always split 50/50. But there are ATROs, tax timing issues, and three distinct paths forward that every divorcing couple needs to understand.",
    featured: false,
  },
  {
    slug: "fair-price-home",
    tag: "Seller Tips",
    date: "September 7, 2026",
    readTime: "5 min read",
    title: "How Do I Know If I'm Getting a Fair Price for My Home?",
    excerpt:
      "The asking price is not the same as what you actually walk away with. Most Southern California sellers don't learn this until it's too late. Here's how to calculate your real net number before you sign anything.",
    featured: false,
  },
    {
    slug: "tired-landlord-socal",
    tag: "Tired Landlords",
    date: "September 14, 2026",
    readTime: "8 min read",
    title: "Done Being a Landlord? What Southern California Rental Property Owners Need to Know Before Selling",
    excerpt:
      "You can sell your SoCal rental with tenants in place — but you can't just tell them to leave. Here's what the law actually requires, what the tax bill looks like, and your real options for getting out.",
    featured: false,
  },
    {
    slug: "how-to-stop-foreclosure-socal",
    tag: "Foreclosure",
    date: "September 15, 2026",
    readTime: "7 min read",
    title: "How to Stop Foreclosure in Southern California — Your Real Options in 2026",
    excerpt:
      "If you've received a Notice of Default on your Southern California home, the clock is ticking. Here's exactly where you are in the process and what you can actually do about it.",
    featured: false,
  },
    {
    slug: "selling-california-property-out-of-state",
    tag: "Out-of-State Owners",
    date: "September 15, 2026",
    readTime: "6 min read",
    title: "Selling Your California Property From Out of State: What You Need to Know in 2026",
    excerpt:
      "You do not need to fly out or be present at any point. But California will still tax the gain regardless of where you live now, and several rules catch out-of-state owners off guard.",
    featured: false,
  },
    {
    slug: "selling-home-unpermitted-work-socal",
    tag: "Seller Tips",
    date: "September 15, 2026",
    readTime: "7 min read",
    title: "Selling a Home With Unpermitted Work in Southern California: What You Need to Know in 2026",
    excerpt:
      "Unpermitted work surfaces at the worst possible time. Here is what California law requires you to disclose, what it does to your sale price, and your three real options as a seller.",
    featured: false,
  },
];

export default function BlogPage() {
  const featured = posts.find((p) => p.featured);
  const rest = posts.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-white">
      <div className="bg-[#0D5A58] py-16 px-6 text-center">
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-white/50 mb-4">
          Resource Center
        </p>
        <h1 className="font-display text-4xl sm:text-5xl text-white font-normal leading-tight mb-4">
          Real answers for Southern California sellers
        </h1>
        <p className="text-white/60 text-base max-w-md mx-auto leading-relaxed font-light">
          No pressure, no pitch — just honest information to help you make the best decision for your home and your family.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-14">
        <div>
          {featured && (
            <div className="mb-12">
              <p className="text-[10px] font-semibold tracking-[0.16em] uppercase text-[#B8955A] mb-3">
                Featured Article
              </p>
              <div className="flex items-center gap-3 text-xs mb-3">
                <span className="bg-[#EBF4F4] text-[#0D5A58] text-[10px] font-semibold px-3 py-0.5 rounded-full">
                  {featured.tag}
                </span>
                <span className="text-gray-400">{featured.date}</span>
                <span className="text-gray-400">{featured.readTime}</span>
              </div>
              <h2 className="font-display text-3xl font-normal leading-snug mb-3">
                <Link href={`/blog/${featured.slug}`} className="text-gray-900 hover:text-[#0D5A58] transition-colors">
                  {featured.title}
                </Link>
              </h2>
              <p className="text-gray-500 leading-relaxed font-light mb-4 max-w-xl">
                {featured.excerpt}
              </p>
              <Link href={`/blog/${featured.slug}`} className="text-[#0D5A58] font-medium text-sm hover:underline">
                Read the full article →
              </Link>
            </div>
          )}

          <hr className="border-gray-100 mb-12" />

          <div className="flex flex-col gap-10">
            {rest.map((post) => (
              <div key={post.slug} className="pb-10 border-b border-gray-100 last:border-none">
                <div className="flex items-center gap-3 text-xs mb-2">
                  <span className="bg-[#EBF4F4] text-[#0D5A58] text-[10px] font-semibold px-3 py-0.5 rounded-full">
                    {post.tag}
                  </span>
                  <span className="text-gray-400">{post.date}</span>
                  <span className="text-gray-400">{post.readTime}</span>
                </div>
                <h3 className="font-display text-2xl font-normal leading-snug mb-2">
                  <Link href={`/blog/${post.slug}`} className="text-gray-900 hover:text-[#0D5A58] transition-colors">
                    {post.title}
                  </Link>
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed font-light mb-3">
                  {post.excerpt}
                </p>
                <Link href={`/blog/${post.slug}`} className="text-[#0D5A58] font-medium text-sm hover:underline">
                  Read more →
                </Link>
              </div>
            ))}
          </div>
        </div>

        <aside className="space-y-8">
          <div className="bg-[#0D5A58] rounded-2xl p-6 text-white">
            <h4 className="font-display text-xl font-normal mb-2 leading-snug">
              Get your free home value today
            </h4>
            <p className="text-white/65 text-xs leading-relaxed mb-4">
              Cash offer or listing — we show you both options with real numbers and zero pressure. In business since 2009.
            </p>
            <a href={`tel:${SITE.phoneE164}`} className="block text-center bg-white text-[#0D5A58] font-semibold text-sm py-2.5 rounded-xl mb-2 hover:bg-gray-100 transition-colors">
              Call {SITE.phone}
            </a>
            <a href="/" className="block text-center text-white/60 text-xs hover:text-white transition-colors">
              openmarketoffers.com
            </a>
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-100">
              Popular articles
            </p>
            {posts.map((post) => (
              <div key={post.slug} className="py-3 border-b border-gray-100 last:border-none">
                <span className="bg-[#EBF4F4] text-[#0D5A58] text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mb-1">
                  {post.tag}
                </span>
                <h4 className="font-display text-sm font-normal leading-snug mb-0.5">
                  <Link href={`/blog/${post.slug}`} className="text-gray-800 hover:text-[#0D5A58] transition-colors">
                    {post.title}
                  </Link>
                </h4>
                <p className="text-[11px] text-gray-400">{post.date} · {post.readTime}</p>
              </div>
            ))}
          </div>

          <div>
            <p className="text-xs font-semibold text-gray-800 mb-3 pb-2 border-b border-gray-100">
              We buy in every situation
            </p>
            <ul className="space-y-2 text-sm text-gray-500">
              {["Inherited & probate properties","Divorce sales","Pre-foreclosure & distressed","Tired landlords & rentals","Out-of-state owners","Any condition · As-is"].map((s) => (
                <li key={s} className="flex items-center gap-2">
                  <span className="text-[#0D5A58] font-bold">✓</span> {s}
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}
