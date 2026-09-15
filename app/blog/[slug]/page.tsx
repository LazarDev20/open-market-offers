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

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal or financial advice. California foreclosure law is complex and fact-specific. Consult a licensed California attorney or HUD-approved housing counselor regarding your specific situation. Open Market Offers is a licensed California real estate brokerage.</p>
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

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal, tax, or financial advice. California tax law is complex and fact-specific. Consult a licensed California CPA or tax attorney before making any decisions about selling your California property. Open Market Offers is a licensed California real estate brokerage.</p>
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

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only and does not constitute legal advice. California real estate law and local permit requirements are complex and vary by jurisdiction. Consult a licensed California real estate attorney regarding your specific situation. Open Market Offers is a licensed California real estate brokerage.</p>
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

        <p className="text-xs text-gray-400 mt-10 italic">This article is for informational purposes only. Market conditions change frequently. Data sourced from Redfin, California Association of Realtors, Bankrate, and Orange County Real Estate Inc. as of September 2026. Open Market Offers is a licensed California real estate brokerage.</p>
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
