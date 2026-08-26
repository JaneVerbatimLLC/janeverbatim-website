import { Link } from "react-router";
import ArrowRightIcon from "icon:arrow-right";

export default function About() {
  return (
    <div className="bg-charcoal min-h-screen pt-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-clay font-body text-xs font-semibold tracking-widest uppercase mb-4">Our Story</p>
          <h1 className="font-display text-5xl sm:text-6xl text-cream leading-tight mb-6">
            Built in Brooklyn.<br />
            <em className="italic text-clay">Built for Brooklyn.</em>
          </h1>
          <p className="text-cream/60 font-body text-lg leading-relaxed">
            Jane Verbatim LLC is a for-profit small business management consulting firm with its heart rooted 
            in the Brooklyn communities it serves — and a track record of turning ambitious founders into 
            structured, scalable businesses.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="aspect-square max-w-sm bg-white/5 border border-white/15 rounded-sm flex items-center justify-center">
                <div className="text-center px-8">
                  <p className="font-display text-6xl text-clay/50 mb-3">VC</p>
                  <p className="font-body text-cream/30 text-sm">Veranthoni Campbell</p>
                </div>
              </div>
            </div>
            <div>
              <p className="text-gold font-body text-xs font-semibold tracking-widest uppercase mb-4">Founder & Principal Consultant</p>
              <h2 className="font-display text-4xl text-cream mb-2">Veranthoni "Vbouy" Campbell</h2>
              <p className="text-cream/40 font-body text-sm mb-6 italic">Founder, Jane Verbatim LLC</p>
              <div className="space-y-4 text-cream/60 font-body text-base leading-relaxed">
                <p>
                  Vbouy founded Jane Verbatim LLC out of a simple observation: Brooklyn's micro and small 
                  business owners are among the most resourceful entrepreneurs in the country — and they 
                  deserve consulting that meets them where they are.
                </p>
                <p>
                  Too much business advice is designed for founders who already have capital, networks, 
                  and runway. Jane Verbatim starts from a different premise: that precision strategy and 
                  professional-grade brand architecture should be accessible to every serious founder — 
                  whether you're pre-revenue or scaling toward your next phase.
                </p>
                <p>
                  The "Build vs. Become" framework Vbouy developed distinguishes between the mechanics of 
                  business formation (the build) and the identity, positioning, and mindset that make 
                  founders impossible to ignore (the become). Both matter. Neither alone is enough.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="mb-12">
          <p className="text-clay font-body text-xs font-semibold tracking-widest uppercase mb-3">What We Stand For</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream">Our principles</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {[
            {
              accent: "clay",
              title: "Warm & Accessible",
              body: "Like a mentor who gets what you're going through. No jargon, no gatekeeping — just real talk and real strategy."
            },
            {
              accent: "sage",
              title: "Community-Centered",
              body: "We serve Bed-Stuy, Crown Heights, Flatbush, and East New York because that's where the work matters most."
            },
            {
              accent: "gold",
              title: "Equity-Forward",
              body: "From MWBE certification to SEE designation, we help founders access every resource and recognition they've earned."
            },
            {
              accent: "teal",
              title: "Precision First",
              body: "We don't deal in vague advice. Every engagement produces concrete deliverables, clear timelines, and actionable frameworks."
            },
            {
              accent: "clay",
              title: "For-Profit with Purpose",
              body: "Jane Verbatim is a commercial consultancy. Our success is tied directly to our clients' growth — that's the incentive alignment that matters."
            },
            {
              accent: "sage",
              title: "Hyper-Local Knowledge",
              body: "We know the regulatory landscape, funding sources, and community dynamics that shape Brooklyn business — because we're in it."
            },
          ].map(({ accent, title, body }) => {
            const borderMap = { clay: "border-clay/30", sage: "border-sage/30", gold: "border-gold/30", teal: "border-teal/30" };
            const textMap = { clay: "text-clay", sage: "text-sage", gold: "text-gold", teal: "text-teal" };
            return (
              <div key={title} className={`p-6 sm:p-7 bg-white/[0.03] border rounded-sm ${borderMap[accent]}`}>
                <p className={`font-display text-lg font-semibold mb-3 ${textMap[accent]}`}>{title}</p>
                <p className="text-cream/55 font-body text-sm leading-relaxed">{body}</p>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16 text-center">
          <h2 className="font-display text-3xl sm:text-4xl text-cream mb-4">Ready to work together?</h2>
          <p className="text-cream/55 font-body text-base max-w-lg mx-auto mb-8">
            Start with a strategy session. Thirty minutes to understand your business — and what it's going to take.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-7 py-3.5 bg-clay text-cream font-body font-semibold text-sm rounded-sm hover:bg-clay/85 transition-colors"
          >
            Book a Session <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
