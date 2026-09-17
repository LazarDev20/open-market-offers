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
        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal, tax, or financial advice. Please consult a licensed California estate attorney and CPA regarding your specific situation. Open Market Offers operates under a licensed California real estate agent.</p>
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
        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal, tax, or financial advice. Please consult a licensed California family law attorney and CPA regarding your specific situation. Open Market Offers operates under a licensed California real estate agent.</p>
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
        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal, tax, or financial advice. Open Market Offers operates under a licensed California real estate agent.</p>
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

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal, tax, or financial advice. California landlord-tenant law is complex and changes frequently. Consult a licensed California attorney and CPA before making any decisions about selling rental property. Open Market Offers operates under a licensed California real estate agent.</p>
      </div>
    ),
  },
    "how-to-stop-foreclosure-socal": {
    tag: "Foreclosure",
    date: "September 15, 2026",
    readTime: "7 min read",
    title: "How to Stop Foreclosure in Southern California — Your Real Options in 2026",
    intro:
      "If you've missed mortgage payments or received a Notice of Default on your Southern California home, you have more options than most people realize — but the window to act closes faster than you think.",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
        <p>If you've missed mortgage payments or received a Notice of Default on your Southern California home, you have more options than most people realize — but the window to act closes faster than you think. This article explains exactly where you are in the process and what you can actually do about it.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">California is a non-judicial foreclosure state</h2>
        <p>Your lender does not need a judge's approval to take your home. The entire process runs on a strict, codified timeline under California Civil Code §2924 — and once certain documents are recorded with your county recorder's office, it becomes extremely difficult to reverse course. The process from the first missed payment to the auction of your home typically takes five to eight months. Most California homeowners in default still carry meaningful equity, which means you likely have options that don't involve losing everything.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The exact timeline — what happens and when</h2>
        <p><strong className="font-medium text-gray-900">Day 1–90: Missed payments.</strong> Once you miss a payment, your lender will contact you within 36 days with loss mitigation options. Under the California Homeowner Bill of Rights (HBOR), your lender must assign you a single point of contact. This is your most valuable window — loss mitigation is far easier to negotiate before any formal foreclosure activity is recorded.</p>
        <p><strong className="font-medium text-gray-900">Day 90–120: Notice of Default (NOD) recorded.</strong> After roughly three to four missed payments, the lender records a Notice of Default with your county recorder's office. This is now a public record — your name, property address, and outstanding debt are searchable. After the NOD is recorded, California Civil Code Section 2924 gives you a 90-day reinstatement period to cure the default by paying what you owe in missed payments, late fees, and legal costs.</p>
        <p><strong className="font-medium text-gray-900">After the 90-day cure period: Notice of Trustee Sale (NOTS).</strong> If you don't reinstate the loan, the lender can record a Notice of Trustee Sale setting the auction date at least 21 days out. The statutory minimum from a recorded NOD to a completed sale is roughly 111 days — and in practice often longer.</p>
        <p><strong className="font-medium text-gray-900">AB 2424.</strong> California's Assembly Bill 2424, signed in 2024, gives homeowners an additional 45-day postponement window under specific conditions. Consult a HUD-approved housing counselor or California real estate attorney to determine whether it applies to your situation.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Your options — what you can actually do</h2>
        <p><strong className="font-medium text-gray-900">Reinstatement.</strong> Pay everything you owe — missed payments, late fees, and legal costs — in full before the 90-day cure period ends. This is the cleanest resolution but requires a lump sum most homeowners in default don't have.</p>
        <p><strong className="font-medium text-gray-900">Loan modification.</strong> Request a modification to change the terms of your mortgage — reduced interest rate, extended term, or adding missed payments to the end of the loan. Under HBOR, your lender cannot pursue foreclosure while a complete loan modification application is pending. This is called dual-tracking and it is illegal in California. Apply directly through your lender's loss mitigation department. In California, charging a homeowner an upfront fee for loan modification or foreclosure consulting is generally illegal.</p>
        <p><strong className="font-medium text-gray-900">Forbearance.</strong> A forbearance agreement pauses or reduces your payments temporarily. This is typically used for short-term hardship. Forbearance does not erase what you owe — it defers it — so understand the repayment terms before agreeing.</p>
        <p><strong className="font-medium text-gray-900">Selling the property.</strong> If you have equity — and most Southern California homeowners do — selling before the trustee's sale is often the best financial outcome. A sale pays off the mortgage, stops the foreclosure, protects your credit, and puts any remaining equity in your pocket. If your home needs significant repairs, a cash sale as-is eliminates the time and cost of renovation in an already compressed timeline.</p>
        <p><strong className="font-medium text-gray-900">Bankruptcy.</strong> Filing Chapter 13 triggers an automatic stay that immediately halts foreclosure. Chapter 13 lets you restructure debt and catch up on missed payments over three to five years. Consult a bankruptcy attorney — not a foreclosure rescue company — before pursuing this option.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">What not to do</h2>
        <p>Do not ignore your lender — avoiding calls forfeits options that require communication. Do not pay an upfront fee to any company offering foreclosure rescue services. Do not quitclaim your home to a stranger in exchange for a promise to save it — this is a common scam. Do not let the home go to auction if you have equity. An auction almost always produces a lower return than a controlled sale.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The one thing that determines your outcome</h2>
        <p>Every homeowner who successfully navigates a foreclosure has one thing in common — they acted before the deadlines, not after. If you've received a Notice of Default or are behind on payments, contact a HUD-approved housing counselor at no cost, or call us. We can tell you honestly whether a cash sale makes sense for your situation — and if it doesn't, we'll tell you that too.</p>

        <div className="bg-[#EBF4F4] border-l-4 border-[#0D5A58] rounded-xl p-6 my-8">
          <h4 className="font-display text-xl text-[#0D5A58] mb-2">We'll give you an honest answer — not a pitch.</h4>
          <p className="text-gray-600 text-sm mb-4">We work with Southern California homeowners in foreclosure every week. Cash offer, listing, or just pointing you in the right direction — we tell you what actually makes sense for your situation. Confidential and no obligation.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={`tel:${SITE.phoneE164}`} className="bg-[#0D5A58] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#0a4846] transition-colors">Call {SITE.phone}</a>
            <a href="/" className="border border-[#0D5A58] text-[#0D5A58] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#EBF4F4] transition-colors">Get a free home value</a>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal or financial advice. California foreclosure law is complex and fact-specific. Consult a licensed California attorney or HUD-approved housing counselor regarding your specific situation. Open Market Offers operates under a licensed California real estate agent.</p>
      </div>
    ),
  },
    "selling-california-property-out-of-state": {
    tag: "Out-of-State Owners",
    date: "September 15, 2026",
    readTime: "6 min read",
    title: "Selling Your California Property From Out of State: What You Need to Know in 2026",
    intro:
      "If you own property in Southern California but live somewhere else, selling it is more manageable than most people expect. What you need is a clear understanding of California's specific rules for nonresident sellers, because several of them catch out-of-state owners off guard.",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
        <p>The entire transaction can be handled remotely under California Civil Code 1633.1, which allows electronic signatures on real estate contracts. You do not need to fly out, attend a signing, or be physically present at any point.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">California will tax the gain regardless of where you live</h2>
        <p>Moving out of California does not end your California tax exposure on property you still own in the state. California taxes capital gains as ordinary income at rates up to 13.3 percent, and that tax applies to all real property located in California regardless of the seller's state of residence. If you moved to Texas, Nevada, or Florida to avoid California income tax, that strategy works for income you earn after you move. It does not eliminate California's claim on the gain from selling California real estate.</p>
        <p>For a married couple selling a rental property purchased for $800,000 in 2016 for $2.8 million in 2026, the total tax exposure, federal and California combined, can approach 37 percent on the gain. This number surprises most out-of-state sellers who assume they left California's tax system behind when they moved.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The 3.33 percent withholding rule</h2>
        <p>California requires withholding of 3.33 percent of the total sale price on most home sales by nonresident sellers. This withholding is handled through Form 593, filed by escrow at closing. The withheld amount is a prepayment of state income tax, not an extra tax. It gets credited back when you file your California nonresident tax return for the year of the sale.</p>
        <p>The standard Form 593 calculation is based on the full sale price, not your taxable gain. On a $900,000 sale, the standard withholding would be $29,970 held by escrow at closing. You can elect an alternative withholding calculation based on your estimated taxable gain rather than the full sale price. For 2026, the alternative method uses a rate of 12.3 percent against the estimated gain. For properties with a high sale price and a high adjusted basis, this election can significantly reduce the amount withheld at closing. Review this with a CPA before escrow closes.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">If you previously lived in the property</h2>
        <p>A former primary residence may still qualify for the Section 121 home sale exclusion after the owner moves away, up to $250,000 for single filers and $500,000 for married couples filing jointly. You must have owned the property for at least two of the five years before the sale, and used it as your primary residence for at least two of those five years. The two-year periods do not need to be consecutive.</p>
        <p>If you moved out more than three years ago, or if the property has been used as a rental since you left, you likely do not qualify for the full exclusion. Any period of rental use after January 1, 2009 reduces the exclusion proportionally. Consult a CPA before listing if you have any rental history on the property.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Selling with a tenant in place</h2>
        <p>Many out-of-state owners rent their California properties and face the question of whether to sell occupied or vacant. California law fully allows the sale of a tenant-occupied rental. The existing lease transfers to the new buyer, who becomes the new landlord. The tenant retains all rights under the lease and applicable just-cause protections under AB 1482.</p>
        <p>Selling to a cash buyer typically eliminates the need to manage tenant communication, showings, and inspection access from a distance. For landlords who live several states away, this simplicity often outweighs the potential price premium of a vacant listing.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">How the process actually works remotely</h2>
        <p>Every step of the California sale can be completed without physical presence. Listing agreements, disclosures, purchase contracts, and escrow instructions are all signed electronically. California's electronic signature law specifically covers real estate transactions.</p>
        <p>If you list on the open market, you need someone on the ground to manage access, inspections, and contractor coordination. Cash sales simplify this further. You review the offer, sign remotely, choose your closing date, and receive funds by wire. There are no showings, no inspections to manage, and no contractor calls.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The 1031 exchange warning for out-of-state sellers</h2>
        <p>If you have a 1031 exchange in mind and the replacement property is outside California, the state requires annual filing of Form FTB 3840 to track the deferred gain. When the out-of-state replacement property eventually sells, California collects its portion of the original deferred gain even if you have been out of the state for years. Missing the annual filing can trigger an assessment of the full deferred tax.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">What to do before you list or accept any offer</h2>
        <p>Talk to a CPA who handles multi-state returns before you make any decisions. Understanding your actual liability, withholding options, and whether you qualify for any exclusion before the transaction closes gives you options. After the transaction closes, the options largely disappear.</p>

        <div className="bg-[#EBF4F4] border-l-4 border-[#0D5A58] rounded-xl p-6 my-8">
          <h4 className="font-display text-xl text-[#0D5A58] mb-2">We handle out-of-state sales regularly.</h4>
          <p className="text-gray-600 text-sm mb-4">We work with property owners throughout the country who own Southern California real estate and need to sell without being here. Cash offer, listing, or just pointing you in the right direction, we handle everything remotely and respond to every inquiry personally.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={`tel:${SITE.phoneE164}`} className="bg-[#0D5A58] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#0a4846] transition-colors">Call {SITE.phone}</a>
            <a href="/" className="border border-[#0D5A58] text-[#0D5A58] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#EBF4F4] transition-colors">Get a free home value</a>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal, tax, or financial advice. California tax law is complex and fact-specific. Consult a licensed California CPA or tax attorney before making any decisions about selling your California property. Open Market Offers operates under a licensed California real estate agent.</p>
      </div>
    ),
  },
    "selling-home-unpermitted-work-socal": {
    tag: "Seller Tips",
    date: "September 15, 2026",
    readTime: "7 min read",
    title: "Selling a Home With Unpermitted Work in Southern California: What You Need to Know in 2026",
    intro:
      "Unpermitted work is more common in Southern California than most sellers expect. Sellers discover it at the worst possible time: during a buyer's inspection, after the appraiser flags a discrepancy, or when escrow is about to close.",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
        <p>Unpermitted work is more common in Southern California than most sellers expect. Drive through any established neighborhood in the Inland Empire, Orange County, or Los Angeles and you will find garage conversions turned into bedrooms, patio covers enclosed into living rooms, room additions built onto the back of tract homes, and ADUs constructed without a building permit. Sellers discover this at the worst possible time: during a buyer's inspection, after the appraiser flags a discrepancy, or when escrow is about to close.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">What qualifies as unpermitted work</h2>
        <p>In California, a building permit is required any time construction affects the structure or essential systems of a home, regardless of who did the work or when it was completed. Common examples include garage conversions, room additions, ADU construction, electrical panel upgrades, plumbing reroutes, HVAC installations, patio enclosures, new bathrooms, and converted carports. This applies even if the work was done by a previous owner years before you purchased the property.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">You are required to disclose it</h2>
        <p>There are no exceptions to this. California Civil Code Section 1102 requires sellers of one to four unit residential properties to complete a Transfer Disclosure Statement that includes a direct question about additions, alterations, and repairs made without permits. You answer based on your actual knowledge, including work done by prior owners if you know about it.</p>
        <p>Selling as-is does not change this. An as-is sale limits your repair obligations, not your disclosure obligations. These are two separate things. Knowingly failing to disclose unpermitted work is considered fraud under California law. In 2024, a California Court of Appeal decision held a seller liable for $63,000 in damages, not because the unpermitted bathroom addition was unsafe, but because the buyer had to obtain retroactive permits, pay penalty fees, and bring the work up to current code at significant cost.</p>
        <p>On the TDS, mark the relevant question yes and describe specifically what was done without permits, when it was done if you know, and who did the work if known. Vague disclosures do not protect you. Disclose before the appraisal is ordered. Once the appraiser flags unpermitted work in the report, the lender will typically condition loan approval on resolution, which can kill the deal or force a price reduction at a critical point in escrow.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">AB 968: The extra layer for recent owners</h2>
        <p>If you purchased the property within the last 18 months and are now selling, California Civil Code Section 1102.6h, added by AB 968 and effective July 1, 2024, requires additional disclosure. You must disclose all work performed by a contractor since you took title, including contractor names, contact information for contracts over $500, and copies of any permits pulled. This applies regardless of whether the work was permitted or not. Consult a California real estate attorney before listing if this applies to you.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">What unpermitted work does to your sale</h2>
        <p>The financial impact shows up in three places.</p>
        <p><strong className="font-medium text-gray-900">Appraisal.</strong> Appraisers typically do not count unpermitted square footage toward the official market value. On a $900,000 home in Los Angeles, a 400 square foot unpermitted addition that gets excluded from the appraisal could mean a $100,000 or more reduction in appraised value. If the buyer is financing, the loan amount is based on the appraised value, not the purchase price.</p>
        <p><strong className="font-medium text-gray-900">Financing.</strong> Conventional lenders, FHA lenders, and VA lenders may refuse to approve a loan on a property with health or safety issues tied to unpermitted work. This significantly narrows your buyer pool to cash buyers or portfolio lenders who are comfortable with the condition.</p>
        <p><strong className="font-medium text-gray-900">Price.</strong> On the open market, the discount for unpermitted work typically runs 10 to 20 percent below comparable permitted homes. Cash investors typically demand 30 to 40 percent below market, plus a risk premium, to account for the cost and uncertainty of legalization.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Your three options as a seller</h2>
        <p><strong className="font-medium text-gray-900">Retroactive permitting.</strong> Hire a licensed contractor to pull permits, have the work inspected, and bring it up to current code before selling. This is the most straightforward path to a full buyer pool and full market value. The cost depends heavily on what was done and when. Work completed decades ago may require costly upgrades to meet 2026 standards before a final inspection can be passed. Retroactive permitting typically costs between $10,000 and $50,000 or more depending on the scope and jurisdiction.</p>
        <p><strong className="font-medium text-gray-900">Disclose and sell on the open market with adjusted pricing.</strong> Disclose the unpermitted work accurately on all required forms, price the property to reflect the condition, and market to buyers who are comfortable taking it on. Your buyer pool will be smaller, but this avoids the time and expense of retroactive permitting. The discount off full market value is typically 10 to 20 percent.</p>
        <p><strong className="font-medium text-gray-900">Sell as-is to a cash buyer.</strong> A cash buyer accepts the property in its current condition, unpermitted work included. This eliminates the appraisal problem, the lender problem, and the buyer pool problem. Cash buyers typically offer 30 to 40 percent below the market value of a fully permitted comparable home.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The one thing most sellers get wrong</h2>
        <p>The most common mistake is waiting until a buyer's inspector or the appraiser surfaces the unpermitted work. Sellers who identify and disclose unpermitted work upfront control the narrative, attract buyers who are already aware of the condition, and avoid the shock renegotiation that kills deals in escrow.</p>
        <p>If you are not sure what is permitted on your property, pull the building permit history from your county assessor or building department before you list. In Los Angeles County you can search at ladbs.org. In Orange County, search the county building permit portal. Comparing the permit history to what you see in the home tells you exactly what needs to be disclosed.</p>

        <div className="bg-[#EBF4F4] border-l-4 border-[#0D5A58] rounded-xl p-6 my-8">
          <h4 className="font-display text-xl text-[#0D5A58] mb-2">We buy homes with unpermitted work regularly.</h4>
          <p className="text-gray-600 text-sm mb-4">Any condition, any situation, with or without tenants. We can also help you evaluate what listing on the open market would realistically net after accounting for the condition. We give you both numbers honestly and let you decide.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={`tel:${SITE.phoneE164}`} className="bg-[#0D5A58] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#0a4846] transition-colors">Call {SITE.phone}</a>
            <a href="/" className="border border-[#0D5A58] text-[#0D5A58] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#EBF4F4] transition-colors">Get a free home value</a>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal advice. California real estate law and local permit requirements are complex and vary by jurisdiction. Consult a licensed California real estate attorney regarding your specific situation. Open Market Offers operates under a licensed California real estate agent.</p>
      </div>
    ),
  },
    "is-now-a-good-time-to-sell-southern-california": {
    tag: "Market Update",
    date: "September 15, 2026",
    readTime: "6 min read",
    title: "Is Now a Good Time to Sell My Home in Southern California?",
    intro:
      "The honest answer depends on where your property is, what condition it is in, and what your personal situation requires. Here is what the current data actually shows.",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
        <p>This is one of the most searched real estate questions in Southern California right now, and it deserves a straight answer rather than a pitch. The honest response is: it depends on where your property is, what condition it is in, and what your personal situation requires. Here is what the current data actually shows.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">What the Southern California market looks like right now</h2>
        <p>As of September 2026, the California median home price sits at $904,640, according to the California Association of Realtors. That is up 0.4 percent year over year, down from a record high of $930,260 in May, but still near historically elevated levels. Southern California is not seeing sharp price declines. It is seeing stabilization after years of rapid appreciation.</p>
        <p>Homes in California are selling in an average of 42 to 50 days on market, which is well below the national average of 63 days. Properties are selling at 99.64 percent of their list price on average. Homes priced correctly are still selling close to asking, not sitting with repeated price reductions.</p>
        <p>Inventory remains a factor in your favor as a seller. There were 106,530 homes for sale statewide in August 2026, down 3.5 percent year over year. Fewer homes for sale means your property faces less direct competition if it is priced and presented correctly.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The market varies significantly by county and neighborhood</h2>
        <p>Southern California is not one market. It is dozens of micro-markets that behave differently from each other.</p>
        <p>Orange County inventory peaked at roughly 5,200 homes in early August 2026 and has been declining for five consecutive weeks as of September 2026. That tightening supply creates better conditions for sellers. Well-priced homes in desirable OC neighborhoods are still attracting one to two offers and closing quickly.</p>
        <p>The South Bay market in Los Angeles County shows homes selling at approximately 99.8 percent of list price as of September 2026, with roughly 3.4 months of supply. Sellers in high-demand communities like Manhattan Beach and Hermosa Beach are seeing modest appreciation, while areas like San Pedro require tighter pricing discipline.</p>
        <p>Ventura County is showing solid price growth and improved sales activity. The Inland Empire has some of the highest concentrations of buyer demand from first-time purchasers who have been priced out of coastal markets.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Mortgage rates and how they affect your sale</h2>
        <p>The 30-year fixed mortgage rate as of September 2026 sits at approximately 6.71 percent, according to Bankrate. This has reduced the pool of buyers who can qualify for larger loan amounts. What this means practically is that your buyer pool is more qualified than it was during the frenzy years, but smaller in total number. Buyers who are actively making offers in this rate environment have done the math and accepted current financing costs. They are not window shopping.</p>
        <p>California is projected to see approximately 274,400 existing home sales in 2026, with prices forecast to appreciate 2 to 4 percent for the year and inventory growth of 5 to 10 percent. More inventory coming to market means more competition for your listing if you wait.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The seasonal timing question</h2>
        <p>If you are asking about timing within the year, the data points to spring and early summer as the strongest window for maximum price. April is historically the fastest month to sell in California, with homes averaging 37 days on market. June tends to produce the highest sale prices.</p>
        <p>September and October offer a secondary opportunity. Inventory typically drops in September as summer listings expire, meaning fewer competing homes. The buyers active in fall tend to be motivated, including relocating professionals and buyers who want to close before year end for tax purposes.</p>
        <p>What most timing articles miss: the condition and pricing of your home will outperform any calendar advantage. A well-priced, well-prepared home listed in September will outperform an overpriced home listed in April. Every time.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Three situations where selling now makes sense</h2>
        <p>If you have a specific financial or life reason to sell, the current market in most Southern California counties supports doing so. Prices are near record highs. Inventory remains constrained enough to support competitive buyer interest on properly priced homes.</p>
        <p>It makes particular sense to sell now if you are carrying a property that is costing you money each month in taxes, insurance, maintenance, or mortgage payments. The opportunity cost of waiting for a better market is real, and there is no data that predicts a significant price surge on a specific timeline.</p>
        <p>It also makes sense if you are open to both options. Not every Southern California homeowner needs to list on the open market and wait 42 to 50 days. If a direct cash offer makes more sense for your timeline, condition, or situation, that option exists regardless of season or market conditions.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The one number to watch</h2>
        <p>Days on market in your specific ZIP code is the most reliable indicator of whether now is a good time to sell your home, not statewide averages. A home sitting 90 days in your neighborhood signals a soft local market. A home selling in under 21 days signals strong demand. Ask for that data before you list.</p>

        <div className="bg-[#EBF4F4] border-l-4 border-[#0D5A58] rounded-xl p-6 my-8">
          <h4 className="font-display text-xl text-[#0D5A58] mb-2">We work with Southern California homeowners across all five counties.</h4>
          <p className="text-gray-600 text-sm mb-4">Whether you want to understand what your home would net in a traditional listing or whether a direct cash offer makes more sense for your situation, we give you both numbers honestly and let you decide. No cost, no obligation.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={`tel:${SITE.phoneE164}`} className="bg-[#0D5A58] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#0a4846] transition-colors">Call {SITE.phone}</a>
            <a href="/" className="border border-[#0D5A58] text-[#0D5A58] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#EBF4F4] transition-colors">Get a free home value</a>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only. Market conditions change frequently. Data sourced from Redfin, California Association of Realtors, Bankrate, and Orange County Real Estate Inc. as of September 2026. Open Market Offers operates under a licensed California real estate agent.</p>
      </div>
    ),
  },
    "how-to-sell-hoarder-house-socal": {
    tag: "Seller Tips",
    date: "September 16, 2026",
    readTime: "6 min read",
    title: "How to Sell a Hoarder House in Southern California",
    intro:
      "Selling a home with severe clutter or hoarding conditions is one of the more emotionally and logistically complex situations a Southern California homeowner or family can face. Here is what California law requires, what your realistic options are, and how to think through the financial decision.",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
        <p>Most people in this situation are dealing with a death in the family, a parent transitioning to care, or years of deferred decision-making catching up all at once. This article covers what California law requires, what your realistic options are, and how to think through the financial decision without pressure.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">What California law requires you to disclose</h2>
        <p>California Civil Code Section 1102 requires all sellers of one to four unit residential properties to complete a Transfer Disclosure Statement disclosing known material defects. This obligation does not go away because the home has hoarding conditions, and it does not go away because you are selling as-is.</p>
        <p>California Civil Code Section 1102.1 explicitly states that delivery of a Transfer Disclosure Statement may not be waived in an as-is sale. Selling as-is means the buyer accepts the property in its current condition without requiring repairs. It does not mean you can skip disclosures.</p>
        <p>What you are required to disclose includes structural issues, water damage, mold, plumbing problems, pest damage, and any code violations you are aware of. You do not need to label the condition as hoarding on the disclosure form, but any known physical defects to the structure or systems that resulted from or were concealed by the clutter must be disclosed.</p>
        <p>Post-close litigation in California over undisclosed defects is common. A buyer who discovers structural damage, mold, or a rodent infestation after closing can and will pursue legal remedies. Document what you know and disclose it accurately before the sale closes.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The three paths available to you</h2>
        <p><strong className="font-medium text-gray-900">Full cleanout before listing.</strong> You hire a professional junk removal and remediation company to clear the property, address any damage uncovered during the cleanout, and bring the home to a condition that supports a traditional listing. This path opens your buyer pool to conventionally financed buyers, which typically produces the highest sale price. Professional cleanouts for severely hoarded properties in Southern California range from $3,000 to $25,000 or more depending on the volume of contents, access conditions, and what is discovered underneath. If structural repairs, mold remediation, or pest treatment are required after the cleanout, costs increase further. A full cleanout and repair process before listing realistically takes three to six months for a severely hoarded property.</p>
        <p><strong className="font-medium text-gray-900">Partial cleanout with disclosure.</strong> You clear enough of the property to allow access for inspections and showings, disclose the known condition accurately, and price to reflect the remaining work required. This path works when the clutter is the primary issue and the underlying structure is sound. It attracts experienced buyers who are comfortable taking on the remaining cleanup themselves, typically at a negotiated price reduction.</p>
        <p><strong className="font-medium text-gray-900">Sell as-is to a cash buyer.</strong> You sell the property in its current condition without any cleanout, repair, or preparation. This path closes in as little as 14 to 21 days, requires no out-of-pocket cost from you, and eliminates the logistics of coordinating a cleanout while managing an estate or family situation. Cash offers on severely hoarded properties in Southern California typically come in 20 to 40 percent below the property's as-remediated value, reflecting the buyer's cost and risk in taking on the condition.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The financial comparison most sellers do not run</h2>
        <p>The assumption that a full cleanout always produces better net proceeds is not always accurate. On a $750,000 as-remediated value property in Orange County, consider this comparison.</p>
        <p><strong className="font-medium text-gray-900">Full cleanout and traditional listing:</strong> $750,000 sale price, minus $15,000 cleanout, minus $30,000 in repairs discovered during cleanout, minus $45,000 in agent commission at 6 percent, minus $10,000 in closing costs, minus four to six months of carrying costs at $3,500 per month. Net result: roughly $628,000 to $636,000 after seven months.</p>
        <p><strong className="font-medium text-gray-900">As-is cash sale:</strong> $525,000 offer at a 30 percent discount to remediated value, minimal closing costs, closes in three weeks. Net result: approximately $518,000 after three weeks with no out-of-pocket expense.</p>
        <p>The gap between those two outcomes is real but narrower than most people assume. For families managing an estate from out of state, or for sellers who cannot coordinate a cleanout, the as-is path often makes more practical sense than the numbers alone suggest.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">If the property is in probate</h2>
        <p>If the home belonged to someone who passed away without a trust, you will need legal authority to sell before a transaction can close. In California, the Independent Administration of Estates Act allows an executor or administrator to sell property without court confirmation in many cases, which can significantly speed up the timeline. Consult a California probate attorney before entering into any sale agreement to confirm your authority to sell.</p>
        <p>Cash buyers are generally familiar with probate timelines and can structure transactions around them. Most conventionally financed buyers cannot.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">What to do first</h2>
        <p>Before you contact any buyer, investor, or real estate agent, pull the building permit history on the property from your county building department. In Los Angeles County, search at ladbs.org. In Orange County, use the county building permit portal. If the property has unpermitted additions, those need to be disclosed separately on the Transfer Disclosure Statement in addition to any condition issues.</p>
        <p>Get a professional inspection before you set a price or accept any offer. Understanding what is underneath the clutter before you negotiate gives you accurate information and reduces your legal exposure. Sellers who rush past this step consistently get the worst outcomes and face the highest post-close risk.</p>

        <div className="bg-[#EBF4F4] border-l-4 border-[#0D5A58] rounded-xl p-6 my-8">
          <h4 className="font-display text-xl text-[#0D5A58] mb-2">We buy Southern California homes in any condition.</h4>
          <p className="text-gray-600 text-sm mb-4">Including properties with severe hoarding, estate situations, and active probate. We can also help you evaluate what a traditional listing would realistically net after cleanout and carrying costs so you can compare both paths with accurate numbers. No obligation.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={`tel:${SITE.phoneE164}`} className="bg-[#0D5A58] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#0a4846] transition-colors">Call {SITE.phone}</a>
            <a href="/" className="border border-[#0D5A58] text-[#0D5A58] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#EBF4F4] transition-colors">Get a free home value</a>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal advice. California real estate law is complex and fact-specific. Consult a licensed California real estate attorney before entering into any sale agreement. Open Market Offers operates under a licensed California real estate agent. </p>
      </div>
    ),
  },
    "stop-paying-hoa-california": {
    tag: "Seller Tips",
    date: "September 16, 2026",
    readTime: "6 min read",
    title: "What Happens When You Stop Paying Your HOA in California",
    intro:
      "Most California homeowners in HOA communities think of unpaid dues as a billing problem. They are not. Under the Davis-Stirling Act, an HOA has the legal authority to place a lien on your home and foreclose on it for unpaid assessments — even if your mortgage is completely current.",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
        <p>Under California's Davis-Stirling Common Interest Development Act, which governs all homeowner associations in the state, an HOA has the legal authority to place a lien on your home and foreclose on it for unpaid assessments. That can happen even if your mortgage is completely current. This article covers exactly what happens, in what order, and what your options are.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The step-by-step process California HOAs follow</h2>
        <p><strong className="font-medium text-gray-900">Step one: Delinquency notice.</strong> Once you miss an assessment payment, the HOA will send a Notice of Delinquent Assessment as required by California Civil Code Section 5660. This notice must include an itemized statement of all charges, including the delinquent assessment, late charges not exceeding 10 percent of the delinquent amount or $10 whichever is greater, and interest not to exceed 12 percent annually under Civil Code Section 5650.</p>
        <p><strong className="font-medium text-gray-900">Step two: Pre-lien notice.</strong> Before the HOA can record a lien against your property, California law requires it to send you a pre-lien notice by certified mail at least 30 days in advance. This is your most important window. A lien has not been recorded yet. You can still negotiate a payment plan, dispute charges through the HOA's internal dispute resolution process, or pay in full without the transaction affecting your title.</p>
        <p><strong className="font-medium text-gray-900">Step three: Lien recording.</strong> If you do not respond or pay within that 30-day window, the HOA records an assessment lien against your property with the county recorder's office. That lien is now a public record and a cloud on your title. You cannot sell or refinance the property without resolving it. The lien includes the delinquent assessments plus costs, attorney fees, and interest.</p>
        <p><strong className="font-medium text-gray-900">Step four: Foreclosure threshold.</strong> California law under Civil Code Section 5720 prohibits an HOA from initiating foreclosure unless the delinquent assessments total at least $1,800 or the delinquency is at least 12 months old. Fines and late fees alone do not count toward that threshold. Once you cross that line, the HOA board must vote to approve foreclosure and serve you with formal notice.</p>
        <p><strong className="font-medium text-gray-900">Step five: Notice of Default.</strong> Once the board approves foreclosure and notice is served, a 90-day cure period begins. If you pay the full amount owed including all fees and costs within those 90 days, the foreclosure stops. If you do not, the HOA can record a Notice of Trustee Sale setting a foreclosure auction date at least 20 days out.</p>
        <p><strong className="font-medium text-gray-900">Step six: Foreclosure sale.</strong> If no payment is made, the property goes to auction. The redemption period after an HOA foreclosure in California under Civil Code Section 5715 is only 90 days. That is a tight window to reclaim your home after it has already been sold.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">What a recorded HOA lien does to a pending sale</h2>
        <p>If you have an HOA lien on your property and you are trying to sell, the lien must be resolved before escrow can close. Title insurance will not be issued with an outstanding HOA lien, and no buyer's lender will fund a purchase with a clouded title. The lien gets paid from your sale proceeds at closing, which reduces what you walk away with.</p>
        <p>The HOA can also wait until you sell and demand full payment during escrow. If the outstanding balance has grown to include years of fees, interest, late charges, and attorney fees, the amount demanded at closing can be significantly higher than the original delinquent amount.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">What your options are if you have fallen behind</h2>
        <p><strong className="font-medium text-gray-900">Contact the HOA before a lien is recorded.</strong> The pre-lien notice period is your best window. Many HOAs prefer collecting through a structured payment plan over proceeding to foreclosure. Approach them directly, request an itemized statement, verify every line item for accuracy, and negotiate in writing. Errors on HOA statements do occur and can be challenged through the internal dispute resolution process before any lien is recorded.</p>
        <p><strong className="font-medium text-gray-900">If a lien has already been recorded</strong>, you can still pay in full, negotiate a payoff amount, or dispute charges through a formal process. An HOA attorney can assess whether the HOA followed all required statutory procedures. Procedural errors in the pre-lien notice or lien recording process can sometimes invalidate the lien entirely.</p>
        <p><strong className="font-medium text-gray-900">If you are trying to sell</strong> and a lien is blocking the transaction, the lien will be paid through escrow. Work with your escrow officer to request a payoff demand from the HOA early in the transaction so there are no surprises at closing.</p>
        <p><strong className="font-medium text-gray-900">If the HOA has already initiated foreclosure proceedings</strong>, consult a California real estate attorney immediately. You are inside a timeline governed by specific statutory deadlines, and missing any one of them can cost you the property.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">One thing most sellers do not know</h2>
        <p>An HOA cannot foreclose based on fines and late fees alone. Under Civil Code Section 5725, fines are not assessments. If your delinquent balance is made up primarily of fines for CC&R violations rather than unpaid dues, the HOA cannot use the lien and foreclosure process to collect them. It can sue you in small claims court, or it can wait until you sell and demand payment in escrow. But it cannot foreclose on fines alone. Knowing this distinction matters if you are reviewing an itemized demand and trying to understand what is actually collectible through each mechanism.</p>

        <div className="bg-[#EBF4F4] border-l-4 border-[#0D5A58] rounded-xl p-6 my-8">
          <h4 className="font-display text-xl text-[#0D5A58] mb-2">We can help you understand your options.</h4>
          <p className="text-gray-600 text-sm mb-4">If you own a Southern California home with a recorded HOA lien and are trying to understand what selling would realistically net, we can walk you through both a cash sale and a traditional listing with accurate numbers. No obligation.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={`tel:${SITE.phoneE164}`} className="bg-[#0D5A58] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#0a4846] transition-colors">Call {SITE.phone}</a>
            <a href="/" className="border border-[#0D5A58] text-[#0D5A58] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#EBF4F4] transition-colors">Get a free home value</a>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal advice. California HOA law is complex and fact-specific. Consult a licensed California real estate attorney if you have a recorded HOA lien or are facing HOA foreclosure proceedings. Open Market Offers operates under a licensed California real estate agent.</p>
      </div>
    ),
  },
    "wildfire-disclosure-southern-california": {
    tag: "Seller Tips",
    date: "September 17, 2026",
    readTime: "7 min read",
    title: "Wildfire Disclosure Requirements When Selling a Home in Southern California",
    intro:
      "The January 2025 Palisades and Eaton fires permanently changed what Southern California sellers must disclose and, more importantly, what buyers can actually get financed. Two things shifted under you: the state redrew its fire maps in 2025, pulling far more homes into disclosure territory, and the insurance market tightened to the point that the biggest threat to your sale is often not a form at all.",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
        <p>If you own a home in or near a fire hazard zone, the law now requires more of you at the point of sale, and the real risk to your closing may have nothing to do with paperwork. Here is what is required, what changed in 2025, and where deals actually fall apart.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The three disclosures every California seller has to handle</h2>
        <p>California requires a written disclosure package on virtually every sale of a one-to-four-unit home, including as-is sales. Three documents matter for fire.</p>
        <p><strong className="font-medium text-gray-900">Transfer Disclosure Statement.</strong> Governed by California Civil Code Section 1102, it requires you to disclose all known material defects and conditions of the property. Staying silent about something you know is the fastest path to a lawsuit after closing.</p>
        <p><strong className="font-medium text-gray-900">Natural Hazard Disclosure Statement.</strong> Governed by Civil Code Section 1103, it tells the buyer whether the property sits in a state-designated hazard zone, including a fire hazard severity zone. California is the only state in the country that mandates this report. Sellers typically order it from a licensed third-party vendor for roughly $50 to $150, and it takes about 10 to 15 days, which is why ordering it early is standard practice.</p>
        <p><strong className="font-medium text-gray-900">AB 38 fire-hardening disclosure.</strong> Governed by Civil Code Section 1102.6f, this is the one most sellers do not see coming. It applies to homes in a High or Very High Fire Hazard Severity Zone that were built before January 1, 2010.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">What changed in 2025: the new CAL FIRE maps</h2>
        <p>For much of Southern California, the fire hazard maps had not been meaningfully updated since around 2011. That ended in 2025. The Office of the State Fire Marshal released updated Local Responsibility Area maps in four phases between February and March 2025, with the phase covering Southern California released on March 24, 2025. The new maps classify land into moderate, high, and very high zones, where the older local maps often only flagged very high.</p>
        <p>Once the state recommends a zone, a local agency cannot lower it. Under Government Code Section 51179, a city or county can only keep the state designation or raise it, and must adopt the maps by ordinance within 120 days of release, though adoption timing varies by city. The practical result is simple. Many Southern California homes that were never in a designated fire zone are now mapped into one, which means disclosure obligations that did not apply to your neighbor's sale two years ago may apply to yours today.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The AB 38 fire-hardening disclosure, expanded July 1, 2025</h2>
        <p>If your home is in a High or Very High Fire Hazard Severity Zone and was built before January 1, 2010, AB 38 requires more than checking a box. You must disclose fire-vulnerable features you are aware of, such as an untreated wood shake or shingle roof or gutters without covers that let flammable debris collect. Since July 1, 2021, you must also provide documentation that the property complies with defensible space rules under Public Resources Code Section 4291. If that documentation is not available before escrow closes, the buyer and seller can agree in writing that the buyer will obtain it within one year of closing. That escape hatch is common, but it shifts a real obligation onto the buyer, and informed buyers negotiate it into the price.</p>
        <p>As of July 1, 2025, the disclosure expanded again. The notice must now include the State Fire Marshal's list of low-cost home-hardening retrofits, and you must indicate which of those measures currently exist on the home, even if the answer is none. The California Association of Realtors updated its standard disclosure form to include this checklist.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The real deal-killer: insurance</h2>
        <p>Here is where fire-zone sales actually fall apart, and it has little to do with paperwork. A mortgage lender will not fund a loan without proof of a bound homeowners policy. In many high-fire Southern California ZIP codes, standard carriers have stopped writing, and the only option is the California FAIR Plan, the state's insurer of last resort, which covers fire only and is usually paired with a separate Difference in Conditions policy for everything else.</p>
        <p>The strain is well documented. As of June 2026, the FAIR Plan reported 696,562 policies in force, a roughly 157 percent increase since September 2022, with total exposure near $768 billion. In the highest-risk Los Angeles ZIP codes, an estimated 41 percent of homes were insured through the FAIR Plan as of early 2026. The FAIR Plan filed for an average rate increase of about 35.8 percent in October 2025, effective April 2026, with the most exposed policyholders facing more. Basic coverage in the most exposed areas can run roughly $5,000 to $25,000 a year.</p>
        <p>Two things make this a seller's problem. A financed buyer who cannot secure acceptable insurance cannot close, no matter how clean your disclosures are, and this is now the single most common reason wildfire-zone deals collapse in escrow. On top of that, FAIR Plan policy issuance can take two to three weeks, a real obstacle on a short closing timeline.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">What this does to your sale price and timeline</h2>
        <p>Disclosure alone carries a measurable cost. Research from Resources for the Future found that homes facing wildfire disclosure sold for roughly 4.3 percent less on average, with a larger effect in Southern California and in the years following major fires. On top of that discount, you carry the risk that a financed buyer removes contingencies, then discovers late that no carrier will write the policy, and the deal unwinds after you have already taken the home off the market for weeks.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">One thing most sellers do not know</h2>
        <p>The insurance problem only kills financed sales. A cash buyer does not have a lender requiring a bound policy before closing, which means the single most common reason fire-zone deals collapse simply does not apply. That does not erase your disclosure obligations. You still owe the buyer an honest Natural Hazard Disclosure, an accurate Transfer Disclosure Statement, and the AB 38 fire-hardening notice if your home qualifies. But it removes the one variable you have the least control over: whether a third-party carrier decides your buyer's house is worth writing.</p>

        <div className="bg-[#EBF4F4] border-l-4 border-[#0D5A58] rounded-xl p-6 my-8">
          <h4 className="font-display text-xl text-[#0D5A58] mb-2">We can help you understand your options.</h4>
          <p className="text-gray-600 text-sm mb-4">If you own a Southern California home in a fire hazard zone and want to know what a clean, contingency-free sale would realistically net compared to a traditional financed listing, we can walk you through both sets of numbers honestly. No obligation.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={`tel:${SITE.phoneE164}`} className="bg-[#0D5A58] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#0a4846] transition-colors">Call {SITE.phone}</a>
            <a href="/" className="border border-[#0D5A58] text-[#0D5A58] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#EBF4F4] transition-colors">Get a free home value</a>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal advice. California wildfire disclosure and insurance rules are complex, fact-specific, and change frequently. Confirm your property's current fire hazard zone designation with CAL FIRE and consult a licensed California real estate attorney or your NHD provider before completing your disclosures. Open Market Offers operates under a licensed California real estate agent.</p>
      </div>
    ),
  },
      "prop-19-inherited-home-california": {
    tag: "Seller Tips",
    date: "September 17, 2026",
    readTime: "7 min read",
    title: "What Prop 19 Does to Your Property Taxes When You Inherit a Home in California",
    intro:
      "Most families assume that when they inherit their parents' house, they inherit the low property tax bill that came with it. Since February 16, 2021, that is no longer true in California. Proposition 19 rewrote the rules for inherited property, and for many heirs the result is a property tax bill several times higher than what their parents paid.",
    content: (
      <div className="space-y-6 text-gray-600 leading-relaxed font-light text-[15px]">
        <p>Here is exactly how Prop 19 works, who gets hit, and why so many heirs end up selling.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">What Prop 19 actually changed</h2>
        <p>Under the old law, Proposition 58, a parent could transfer a primary residence to a child with no property tax reassessment at all, no matter what the home was worth or what the child did with it. Parents could also pass down up to $1 million of assessed value in other property, such as rentals and vacation homes, with the low tax base intact. Families used this for decades to keep inherited homes affordable to hold.</p>
        <p>Proposition 19, which took effect February 16, 2021, largely eliminated that. The broad parent-child exclusion is gone. What remains is a narrow exclusion with strict conditions, and missing any one of them triggers a full reassessment to current market value.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">The only way to keep the low tax base now</h2>
        <p>Three things all have to be true. The property has to be the parent's family home, meaning their principal residence. It has to pass to a child, or in some cases a grandchild. And the child has to move in as their own principal residence within one year of the transfer and file for the homeowners' exemption.</p>
        <p>If the home is anything other than your primary residence after you inherit it, a rental you keep, a vacation house, or a home you simply do not move into, it is reassessed to full current market value. There is no exclusion at all. For most heirs, who already have their own home and inherit their parents' as a second property, this is the default outcome.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Even moving in does not fully protect you</h2>
        <p>There is a value cap on top of the primary-residence rule. The exclusion protects the parent's existing assessed value plus roughly $1.04 million of additional value. For transfers occurring between February 16, 2025 and February 15, 2027, the exact figure set by the Board of Equalization is $1,044,586. That amount adjusts every two years, with the next change due February 16, 2027.</p>
        <p>If the home's current market value is higher than the parent's assessed value plus that cap, the excess gets added to your new assessed value. Here is the math on a common case. Say your parents' assessed value is $300,000 and the home is now worth $1.5 million. The protected amount is $300,000 plus $1,044,586, which is $1,344,586. The market value exceeds that by $155,414, and that difference is added on. Your new assessed value becomes about $455,414, versus the $300,000 your parents were taxed on. Your property tax bill increases by roughly half again, permanently.</p>
        <p>In higher-priced Southern California markets, where plenty of homes run well past $2 million, the cap barely moves the needle. Many heirs there face a near-full reassessment even when they do everything right.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">Why this pushes so many heirs to sell</h2>
        <p>The reassessment takes effect from the date of transfer, which is usually the date of death. That means the higher tax starts accruing immediately, on top of insurance, maintenance, and any remaining mortgage, while you are still deciding what to do. For a home you cannot or do not want to live in, the carrying cost adds up fast.</p>
        <p>There is also a federal rule that works in your favor if you sell. When you inherit, your cost basis in the home resets to its market value at the date of death. This is called a stepped-up basis. It means selling soon after you inherit often triggers little or no capital gains tax, because there has been almost no gain since you acquired it. For many heirs, a prompt sale is the cleanest financial move: you avoid the reassessed tax bill piling up, and the step-up minimizes what you owe on the sale. This is a separate federal tax matter, so confirm the specifics with a tax professional.</p>

        <h2 className="font-display text-2xl font-normal text-gray-900 mt-10 mb-2">One thing most sellers do not know</h2>
        <p>A living trust does not save you from Prop 19. Families routinely assume that putting the house in a revocable living trust sidesteps the reassessment. It does not. A trust helps you avoid probate, but it does not exempt inherited real estate from Prop 19. The rules apply based on your relationship to the owner and how the property is used, not on how title is held.</p>
        <p>And do not count on a repeal bailing you out. Efforts to roll back Prop 19's inheritance rules have repeatedly failed to reach the ballot, most recently falling short of qualifying for the November 2026 election. For now and the foreseeable future, this is the law.</p>

        <div className="bg-[#EBF4F4] border-l-4 border-[#0D5A58] rounded-xl p-6 my-8">
          <h4 className="font-display text-xl text-[#0D5A58] mb-2">Inherited a home and the numbers do not work?</h4>
          <p className="text-gray-600 text-sm mb-4">If you have inherited a Southern California home and the new property tax bill does not pencil out, we can walk you through what a fast, as-is cash sale would realistically net compared to holding or listing it. Because your basis stepped up at the date of death, selling soon often means little to no capital gains. Honest numbers, no obligation.</p>
          <div className="flex gap-3 flex-wrap">
            <a href={`tel:${SITE.phoneE164}`} className="bg-[#0D5A58] text-white text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#0a4846] transition-colors">Call {SITE.phone}</a>
            <a href="/" className="border border-[#0D5A58] text-[#0D5A58] text-sm font-medium px-5 py-2.5 rounded-lg hover:bg-[#EBF4F4] transition-colors">Get a free home value</a>
          </div>
        </div>

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal or tax advice. Proposition 19 and California property tax rules are complex and fact-specific, and the exclusion amount changes over time. Confirm your property's current assessed value and any reassessment with your county assessor, and consult a licensed California real estate attorney or tax professional before making decisions. Open Market Offers operates under a licensed California real estate agent.</p>
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
     ),
  },
};

export async function generateMetadata({ params }: ...
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
