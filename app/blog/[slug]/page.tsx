import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/site";

const articles: Record<string, {
  tag: string;
  date: string;
  readTime: string;
  title: string;
  intro: string;
  content: React.ReactNode;
}> = {
  "inherited-home-california": {
    tag: "Inherited Homes",
    date: "September 5, 2026",
    readTime: "6 min read",
    title: "Inherited a Home in California? Read This Before You Do Anything.",
    intro:
      "Inheriting a property sounds like a gift — but for most families, it quickly becomes a source of stress, confusion, and unexpected costs. Here's what most people don't know before they make a decision they can't take back.",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
        <p>Every week we speak with Southern California families who inherited a home and didn't know where to start. The calls usually begin the same way: "We just lost someone we love, and now we have this house, and we have no idea what to do."</p>
        <p>If that's where you are right now, this article is for you. No pressure, no pitch — just the information you need to make a clear-headed decision.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Your property taxes may change</h2>
        <p>Under California's Proposition 19, most inherited properties no longer qualify for the parent-child property tax exclusion. Unless you plan to use the home as your primary residence within one year, the property will be reassessed at current market value. In high-appreciation markets like Los Angeles, Orange County, and San Diego, this can mean a significant increase in annual property taxes.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Carrying costs start immediately</h2>
        <p>Even if the home sits vacant, you are financially responsible from the day you inherit it — insurance, utilities, maintenance, property taxes, and HOA fees if applicable. On a typical Southern California home, these carrying costs can run $1,500–$3,000 per month or more. Every month you delay a decision is money out of your pocket.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Multiple heirs means multiple decisions</h2>
        <p>When a property passes to more than one person, every major decision requires agreement from all parties. One heir may want to sell quickly. Another may want to rent. A third may want to move in. Without a clear agreement, these situations can drag on for months — costing everyone involved while the property sits idle.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The timeline depends on how the estate was set up</h2>
        <p>If your loved one had a <strong className="font-medium text-gray-900">living trust</strong> in place, the transfer of property can happen relatively quickly and privately — often within weeks. A trust bypasses the probate court process entirely.</p>
        <p>If the estate needs to go through <strong className="font-medium text-gray-900">probate court</strong>, the timeline varies based on the complexity of the estate, court schedules, and whether all parties are in agreement. Knowing where you stand early gives you more options, not fewer. An estate attorney can assess your specific situation in a single consultation.</p>
        <div className="bg-[#EBF4F4] border-l-4 border-[#0D5A58] rounded-xl p-6 my-8">
          <h4 className="font-display text-xl text-[#0D5A58] mb-2">You don't have to figure this out alone.</h4>
          <p className="text-gray-600 text-sm mb-4">We've helped Southern California families navigate inherited properties through all kinds of situations. Whether you're ready to move quickly or still sorting through the details, we'll walk you through your options with real numbers and zero obligation.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={`tel:${SITE.phoneE164}`} className="bg-[#0D5A58] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#0a4846] transition-colors">Call {SITE.phone}</a>
            <a href="/" className="border border-[#0D5A58] text-[#0D5A58] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#EBF4F4] transition-colors">Get a free home value</a>
          </div>
        </div>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Your three main options</h2>
        <p><strong className="font-medium text-gray-900">Sell the home.</strong> The most straightforward path for most families. You can sell for cash — which closes quickly and requires no repairs — or list on the open market to maximize your sale price. We show you both options with real numbers.</p>
        <p><strong className="font-medium text-gray-900">Rent the property.</strong> If the home carries sentimental value or you believe rents will continue to rise, holding and renting is an option. Be aware of California's tenant protection laws, which are among the strongest in the nation.</p>
        <p><strong className="font-medium text-gray-900">Move in.</strong> If you plan to use the home as your primary residence, moving in within one year may qualify you for a partial Prop 19 exclusion on property taxes. Consult a CPA who specializes in California real estate tax before making this decision.</p>
        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal, tax, or financial advice. Please consult a licensed California estate attorney and CPA regarding your specific situation. Open Market Offers is a licensed California real estate brokerage.</p>
      </div>
    ),
  },
  "divorce-home-california": {
    tag: "Divorce",
    date: "September 9, 2026",
    readTime: "7 min read",
    title: "Going Through a Divorce in California? Here's What Happens to Your Home.",
    intro:
      "California is a community property state — which means the family home is almost always split 50/50. But there are automatic restraining orders, tax timing issues, and three distinct paths forward that every divorcing couple needs to understand before making a move.",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
        <p>The family home is almost always the largest asset in a divorce. In Southern California — where the average home value sits near $920,000 — how you handle it can mean the difference of tens of thousands of dollars for both parties.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Your home is community property</h2>
        <p>In California, a home purchased during the marriage is typically owned equally by both spouses — regardless of whose name is on the mortgage or deed. Under Family Code §2550, the equity is generally divided 50/50. Neither spouse can unilaterally decide what happens to the home.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">You can't sell it on your own once a petition is filed</h2>
        <p>The moment a divorce petition is filed in California, Automatic Temporary Restraining Orders (ATROs) take effect automatically under Family Code §2040. Neither spouse can sell, transfer, encumber, or refinance the property without written consent from both parties or a court order. These orders remain in effect until a judgment of dissolution is entered.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Your three options for the home</h2>
        <p><strong className="font-medium text-gray-900">Sell together and split the proceeds.</strong> The cleanest and most common path. Both spouses agree to sell, and the net proceeds are divided according to the settlement agreement.</p>
        <p><strong className="font-medium text-gray-900">One spouse buys the other out.</strong> One spouse keeps the home by refinancing into a solo loan and paying the other their share of the equity. Given current rates of 6.5–6.8%, lenders typically require debt-to-income ratios below 43%.</p>
        <p><strong className="font-medium text-gray-900">Co-own past judgment.</strong> Both parties continue co-owning under a written agreement — often used when minor children are involved. Requires a clear, legally binding agreement on costs and an eventual exit timeline.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Timing the sale affects your taxes</h2>
        <p>Selling before the divorce is finalized often yields the best tax outcome. A married couple filing jointly can exclude up to $500,000 in capital gains. After divorce, each individual can only exclude $250,000. In high-appreciation SoCal markets where gains regularly exceed $500,000, timing matters significantly.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The commission question</h2>
        <p>Average California agent commission is 5.03% as of 2026. On a home near the LA median of $920,000, that's over $46,000 coming out of what two people are already dividing. A direct cash offer eliminates commission entirely and closes in days rather than months.</p>
        <div className="bg-[#EBF4F4] border-l-4 border-[#0D5A58] rounded-xl p-6 my-8">
          <h4 className="font-display text-xl text-[#0D5A58] mb-2">We work with both parties — and their attorneys.</h4>
          <p className="text-gray-600 text-sm mb-4">A divorce sale is not a typical real estate transaction. We can step in as a neutral solution — a direct cash offer that both parties can agree on quickly, or licensed agent representation to maximize the sale price. Everything handled with complete discretion.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={`tel:${SITE.phoneE164}`} className="bg-[#0D5A58] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#0a4846] transition-colors">Call {SITE.phone}</a>
            <a href="/" className="border border-[#0D5A58] text-[#0D5A58] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#EBF4F4] transition-colors">Get a free home value</a>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal, tax, or financial advice. Please consult a licensed California family law attorney and CPA regarding your specific situation. Open Market Offers is a licensed California real estate brokerage.</p>
      </div>
    ),
  },
  "fair-price-home": {
    tag: "Seller Tips",
    date: "September 7, 2026",
    readTime: "5 min read",
    title: "How Do I Know If I'm Getting a Fair Price for My Home?",
    intro:
      "The asking price is not the same as what you actually walk away with. Most Southern California sellers don't learn this until it's too late. Here's how to calculate your real net number before you sign anything.",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
        <p>One of the most Googled real estate questions in Southern California right now is: "How do I know if I'm getting a fair offer on my house?" It's exactly the right question — and most sellers don't get a straight answer until after they've already committed to a path.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The asking price vs. your net proceeds</h2>
        <p>Every seller focuses on the sale price. The number that actually matters is your net proceeds — what lands in your bank account after every cost is subtracted. These two numbers can be dramatically different.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The costs most sellers underestimate</h2>
        <p><strong className="font-medium text-gray-900">Agent commissions.</strong> Still averaging 5.03% in California as of 2026. On a $900,000 home, that's $45,270 — before you've paid a single closing cost.</p>
        <p><strong className="font-medium text-gray-900">Closing costs.</strong> Title insurance, escrow fees, transfer taxes, and prorated property taxes typically run 1–3% of the sale price. On a $900K home, add another $9,000–$27,000.</p>
        <p><strong className="font-medium text-gray-900">Pre-sale repairs and preparation.</strong> Buyers today expect move-in ready homes. Staging, photography, and addressing deferred maintenance come out of your pocket first — before any offer arrives.</p>
        <p><strong className="font-medium text-gray-900">Carrying costs while it sits.</strong> Your mortgage, insurance, HOA, and utilities don't stop while your home is on the market. In some SoCal neighborhoods, average days on market has stretched to 60–90 days. At $3,000–$5,000 per month, that's real money.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The comparison every seller should run</h2>
        <p>Before you commit to any path, you should know your net number under each scenario side by side — traditional listing, cash offer, and reduced-commission listing. When you run those numbers honestly, the "higher" sale price from a traditional listing doesn't always produce the highest net proceeds.</p>
        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">How to verify any offer is fair</h2>
        <p>Ask for a comparative market analysis (CMA) showing recent sales of comparable homes within one mile, sold in the last 90 days. Price per square foot is your most reliable benchmark. Any offer within 85–95% of a well-supported CMA value is within normal range for an as-is, fast-close transaction.</p>
        <div className="bg-[#EBF4F4] border-l-4 border-[#0D5A58] rounded-xl p-6 my-8">
          <h4 className="font-display text-xl text-[#0D5A58] mb-2">Get your real numbers — both options, side by side.</h4>
          <p className="text-gray-600 text-sm mb-4">We show every seller exactly what they'd net from a direct cash offer and what listing on the open market would realistically return — with actual comparable sales, not estimates. No obligation, no pressure.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={`tel:${SITE.phoneE164}`} className="bg-[#0D5A58] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#0a4846] transition-colors">Call {SITE.phone}</a>
            <a href="/" className="border border-[#0D5A58] text-[#0D5A58] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#EBF4F4] transition-colors">Get a free home value</a>
          </div>
        </div>
        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal, tax, or financial advice. Open Market Offers is a licensed California real estate brokerage.</p>
      </div>
    ),
  },
    "tired-landlord-socal": {
    tag: "Tired Landlords",
    date: "September 14, 2026",
    readTime: "8 min read",
    title: "Done Being a Landlord? What Southern California Rental Property Owners Need to Know Before Selling",
    intro:
      "If you own a rental property in Southern California and you're thinking about selling, this covers what you actually need to know — the tenant laws, the tax exposure, and your real options.",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
        <p>If you own a rental property in Southern California and you're thinking about selling, this article covers what you actually need to know — the tenant laws, the tax exposure, and your real options. No generalizations.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">You can sell with a tenant in place — but you can't just tell them to leave</h2>
        <p>California law allows you to sell a rental property with tenants still living there. The lease automatically transfers to the new buyer, who becomes the new landlord and must honor the existing agreement.</p>
        <p>What catches most landlords off guard: under AB 1482, the state's Tenant Protection Act, "intent to sell" is not a recognized just cause for eviction. You cannot terminate a tenancy simply because you want to sell.</p>
        <p>For month-to-month tenants, the buyer can eventually end the tenancy, but California law requires proper notice — 30 days if the tenant has lived there less than a year, or 60 days if more than a year. For fixed-term leases, tenants are entitled to stay until the lease expires, even after the property changes hands.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The AB 1482 question every SoCal landlord needs to answer</h2>
        <p>AB 1482 limits annual rent increases to 5% plus the applicable regional Consumer Price Index, up to a maximum of 10% in any 12-month period. For the 2025–26 period, the allowed increase is 7.7%.</p>
        <p>Most single-family homes and condos are exempt from these rules if they aren't owned by a corporation or REIT — provided you gave the tenant the required legal notice when they moved in. The single-family exemption is not automatic. You must have given the required written notice to your tenant at the start of tenancy or within 90 days of the law applying to the tenancy. If you didn't, your property may be treated as covered regardless of its type.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The relocation payment requirement</h2>
        <p>If you are terminating a tenancy for a no-fault reason — including owner move-in — California requires relocation assistance equal to one month of the tenant's rent, paid within 15 calendar days of serving the termination notice, or written confirmation that no rent is due for the last month. This is not optional and is not negotiable. Factor it into your exit math before you make any decisions.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Selling occupied vs. vacant — the real numbers</h2>
        <p>For a $700,000 rental property, a traditional vacant sale — after tenant exit, turn costs of $5,000–$15,000, four to six months of vacancy carrying costs, and a 6% commission — nets roughly $628,000–$645,000 with a realistic timeline of seven to ten months.</p>
        <p>A cash sale of the same property occupied, at a 10% discount to the vacant comparable, nets roughly $592,000 and closes in 30 to 60 days. The occupied cash sale nets less on paper — but eliminates months of vacancy carrying costs, tenant coordination risk, and the uncertainty of a traditional escrow.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The tax exposure most landlords underestimate</h2>
        <p>California taxes capital gains on rental property sales as ordinary income. There is no separate state capital gains rate and no holding-period discount. A property held two years and a property held twenty years face the same California rate — from 1% up to 13.3%, with a 1% surcharge pushing the effective top rate to 13.3% for incomes above $1 million.</p>
        <p>Combined with federal long-term capital gains rates of 0%, 15%, or 20%, and the 3.8% Net Investment Income Tax, effective combined rates can exceed 35%. Depreciation recapture adds another layer — the IRS taxes all depreciation claimed during ownership at up to 25%, and California then taxes that recaptured depreciation as ordinary income at your applicable state rate. Run these numbers with a CPA before you list.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The 1031 exchange option</h2>
        <p>If your goal is to exit this property but keep the capital working, a 1031 exchange defers your capital gains tax by rolling proceeds into a qualifying replacement property. Four requirements must be met without exception: identify the replacement property within 45 days of closing, close on the replacement within 180 days, reinvest all net proceeds, and use a qualified intermediary to hold funds between transactions. Missing either deadline cancels the exchange entirely with no extensions.</p>
        <p>One rule that catches California investors off guard: if the replacement property is located outside California, the state still tracks the original deferred gain under Revenue and Taxation Code Section 18032. When that out-of-state property eventually sells, California collects its portion — even if you've relocated to another state years earlier.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Your practical options as a SoCal landlord looking to exit</h2>
        <p><strong className="font-medium text-gray-900">Sell occupied to a cash buyer.</strong> Fastest path. No vacancy period, no turn costs, no showings. You close on a timeline you choose. The trade-off is price — expect a discount to vacant market value.</p>
        <p><strong className="font-medium text-gray-900">Negotiate a tenant buyout.</strong> Offer the tenant a lump sum to vacate voluntarily. This is legal, common, and often faster than a formal notice process. Consult an attorney on an appropriate figure for your situation.</p>
        <p><strong className="font-medium text-gray-900">Wait for the lease to expire, then sell vacant.</strong> Maximum sale price, maximum timeline. Factor in months of carrying costs and the risk that market conditions change before you close.</p>
        <p><strong className="font-medium text-gray-900">Sell with a licensed agent.</strong> If your property is vacant or the tenant is cooperative, listing on the open market can maximize your return. Your agent needs specific experience with tenant-occupied sales in California.</p>

        <div className="bg-[#EBF4F4] border-l-4 border-[#0D5A58] rounded-xl p-6 my-8">
          <h4 className="font-display text-xl text-[#0D5A58] mb-2">We work with SoCal landlords in all of these situations.</h4>
          <p className="text-gray-600 text-sm mb-4">We can make a direct cash offer on your rental as-is, with or without tenants, or help you evaluate what listing on the open market would realistically net you. We give you both numbers honestly so you can make the decision that fits your situation. No obligation, no pressure.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={`tel:${SITE.phoneE164}`} className="bg-[#0D5A58] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#0a4846] transition-colors">Call {SITE.phone}</a>
            <a href="/" className="border border-[#0D5A58] text-[#0D5A58] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#EBF4F4] transition-colors">Get a free home value</a>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal, tax, or financial advice. California landlord-tenant law is complex and changes frequently. Consult a licensed California attorney and CPA before making any decisions about selling rental property. Open Market Offers is a licensed California real estate brokerage.</p>
      </div>
    ),
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = articles[params.slug];
  if (!article) return { title: "Not Found" };
  return {
    title: `${article.title} | Open Market Offers`,
    description: article.intro,
  };
}

export function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }));
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = articles[params.slug];
  if (!article) notFound();

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-5xl mx-auto px-6 py-14 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-14 items-start">
        <article>
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#0D5A58] transition-colors mb-8">
            ← Back to all articles
          </Link>
          <span className="bg-[#EBF4F4] text-[#0D5A58] text-[10px] font-semibold px-3 py-0.5 rounded-full inline-block mb-4">
            {article.tag}
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-normal leading-tight text-gray-900 mb-4">
            {article.title}
          </h1>
          <div className="flex items-center gap-3 text-xs text-gray-400 mb-6">
            <span>Open Market Offers</span>
            <span>·</span>
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
          <p className="text-base text-gray-500 leading-relaxed font-light border-l-4 border-[#B8955A] pl-5 mb-10">
            {article.intro}
          </p>
          {article.content}
        </article>

        <aside className="space-y-8 sticky top-20">
          <div className="bg-[#0D5A58] rounded-2xl p-6 text-white">
            <h4 className="font-display text-xl font-normal mb-2 leading-snug">
              Get your free home value
            </h4>
            <p className="text-white/65 text-xs leading-relaxed mb-4">
              Cash offer or listing — we show you both options with real numbers and zero pressure.
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
              More articles
            </p>
            {Object.entries(articles)
              .filter(([slug]) => slug !== params.slug)
              .map(([slug, a]) => (
                <div key={slug} className="py-3 border-b border-gray-100 last:border-none">
                  <span className="bg-[#EBF4F4] text-[#0D5A58] text-[10px] font-semibold px-2 py-0.5 rounded-full inline-block mb-1">
                    {a.tag}
                  </span>
                  <h4 className="font-display text-sm font-normal leading-snug">
                    <Link href={`/blog/${slug}`} className="text-gray-800 hover:text-[#0D5A58] transition-colors">
                      {a.title}
                    </Link>
                  </h4>
                </div>
              ))}
          </div>
        </aside>
      </div>
    </div>
  );
}
