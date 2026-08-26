import { Link } from "react-router";
import ArrowRightIcon from "icon:arrow-right";
import HeartIcon from "icon:heart";
import DollarSignIcon from "icon:dollar-sign";
import UsersIcon from "icon:users";
import BookOpenIcon from "icon:book-open";

export default function CivicCapital() {
  return (
    <div className="bg-charcoal min-h-screen pt-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-sage font-body text-xs font-semibold tracking-widest uppercase mb-4">Community Impact Program</p>
          <h1 className="font-display text-5xl sm:text-6xl text-cream leading-tight mb-6">
            The Civic Capital{" "}
            <em className="italic text-sage">Initiative</em>
          </h1>
          <p className="text-cream/60 font-body text-lg leading-relaxed">
            Jane Verbatim LLC is a for-profit commercial consultancy — and we're committed to making sure 
            that building a profitable business doesn't mean leaving community behind. The Civic Capital 
            Initiative is our corporate social impact program: pro-bono consulting, tiered pricing, and 
            community education woven into how we operate.
          </p>
        </div>
      </section>

      {/* Pillars */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="mb-12">
            <p className="text-sage font-body text-xs font-semibold tracking-widest uppercase mb-3">How It Works</p>
            <h2 className="font-display text-4xl sm:text-5xl text-cream">Three pillars of impact</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                icon: HeartIcon,
                title: "Pro-Bono Consulting",
                desc: "A portion of our consulting capacity is reserved each quarter for founders who demonstrate financial need and strategic readiness but can't afford market rates. Applications reviewed quarterly.",
              },
              {
                icon: DollarSignIcon,
                title: "Stackable Discounts",
                desc: "Our transparent discount schedule lets eligible founders layer SEE, DEI, bundle, and early-payment savings — reducing barriers without reducing the quality of the engagement.",
              },
              {
                icon: BookOpenIcon,
                title: "Ballots & Budgets",
                desc: "Community financial literacy workshops designed for Brooklyn residents. Covering business formation basics, budgeting for founders, and how to navigate local funding landscapes.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div key={title} className="p-7 sm:p-8 bg-white/[0.03] border border-sage/25 rounded-sm">
                <div className="inline-flex items-center justify-center w-11 h-11 bg-sage/15 border border-sage/30 text-sage rounded-sm mb-5">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-xl text-cream mb-3">{title}</h3>
                <p className="text-cream/55 font-body text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Discount Schedule */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="mb-12">
          <p className="text-gold font-body text-xs font-semibold tracking-widest uppercase mb-3">Transparent Pricing</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream">Stackable discount schedule</h2>
          <p className="text-cream/50 font-body text-base mt-3 max-w-2xl">
            Discounts can be combined. All savings are applied to base service rates and require documentation at intake.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[540px] border-collapse">
            <thead>
              <tr className="border-b border-white/20">
                <th className="text-left text-cream/50 font-body text-xs tracking-widest uppercase py-3 pr-6">Discount Category</th>
                <th className="text-left text-cream/50 font-body text-xs tracking-widest uppercase py-3 pr-6">Who Qualifies</th>
                <th className="text-left text-cream/50 font-body text-xs tracking-widest uppercase py-3">Documentation</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10">
              {[
                {
                  cat: "Social Equity Entrepreneur (SEE)",
                  who: "Verified SEE designation holders",
                  doc: "SEE certification letter or approval notice",
                },
                {
                  cat: "MWBE / DEI Status",
                  who: "Minority, Women, or Disadvantaged Business Owners",
                  doc: "Current MWBE certification or equity documentation",
                },
                {
                  cat: "Service Bundle",
                  who: "Clients engaging 2+ services in one contract",
                  doc: "Combined service agreement required",
                },
                {
                  cat: "Early-Payment",
                  who: "Clients paying full project fee upfront",
                  doc: "Payment received before project kickoff",
                },
                {
                  cat: "Community Referral",
                  who: "Referred by a current or former JVLLC client",
                  doc: "Referral contact and confirmation",
                },
              ].map(({ cat, who, doc }) => (
                <tr key={cat} className="group hover:bg-white/[0.02] transition-colors">
                  <td className="py-4 pr-6 text-cream font-body font-semibold text-sm">{cat}</td>
                  <td className="py-4 pr-6 text-cream/55 font-body text-sm">{who}</td>
                  <td className="py-4 text-cream/40 font-body text-sm">{doc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-6 text-cream/30 font-body text-xs">
          Discount amounts and eligibility requirements subject to change. Contact us directly for current rates and availability.
        </p>
      </section>

      {/* Ballots & Budgets */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-sage font-body text-xs font-semibold tracking-widest uppercase mb-4">Community Workshop Series</p>
              <h2 className="font-display text-4xl text-cream mb-4">Ballots & Budgets</h2>
              <p className="text-cream/60 font-body text-base leading-relaxed mb-4">
                Financial power and civic participation are connected. Ballots & Budgets is a community 
                education series we run throughout the year — bringing business fundamentals, budget literacy, 
                and community finance directly to Brooklyn neighborhoods.
              </p>
              <p className="text-cream/60 font-body text-base leading-relaxed mb-6">
                Past sessions have covered: launching your first LLC, understanding your financial statements, 
                applying for local grants and city contracts, and how community voting shapes the economic 
                landscape for small businesses.
              </p>
              <div className="flex flex-col gap-3">
                {[
                  "Business formation basics",
                  "Budgeting for founders",
                  "Local funding landscape",
                  "Civic and economic literacy",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 bg-sage rounded-full shrink-0" />
                    <span className="text-cream/65 font-body text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/[0.03] border border-sage/25 rounded-sm p-8 sm:p-10">
              <UsersIcon className="w-10 h-10 text-sage mb-5" />
              <h3 className="font-display text-2xl text-cream mb-3">Attend or Host a Workshop</h3>
              <p className="text-cream/55 font-body text-sm leading-relaxed mb-6">
                We bring Ballots & Budgets to community organizations, churches, libraries, and neighborhood 
                centers throughout Brooklyn. If you'd like to host a session for your community, reach out 
                directly.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 bg-sage/20 border border-sage/40 text-sage font-body font-semibold text-sm rounded-sm hover:bg-sage/30 transition-colors"
              >
                Inquire About Hosting <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-cream mb-4">Have questions about eligibility?</h2>
        <p className="text-cream/55 font-body text-base max-w-lg mx-auto mb-8">
          Every application is reviewed personally. Book a session and let's talk through what makes sense for your situation.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-clay text-cream font-body font-semibold text-sm rounded-sm hover:bg-clay/85 transition-colors"
        >
          Get in Touch <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
