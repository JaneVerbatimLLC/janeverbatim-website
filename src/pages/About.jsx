import { Link } from "react-router";
import ArrowRightIcon from "icon:arrow-right";

export default function About() {
  return (
    <div className="bg-charcoal min-h-screen pt-20">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-clay hidden lg:block" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-16 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-clay font-body text-xs font-bold tracking-[0.2em] uppercase mb-5">Our Story</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream leading-[1.0] tracking-tight">
                Built in Brooklyn.<br />
                <em className="italic text-clay">Built for Brooklyn.</em>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-cream/55 font-body text-base sm:text-lg leading-relaxed">
                Jane Verbatim LLC is a for-profit small business management consulting firm 
                with its heart rooted in the Brooklyn communities it serves — and a track 
                record of turning ambitious founders into structured, scalable businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-16 py-20 sm:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Photo placeholder */}
          <div className="lg:col-span-4">
            <div className="aspect-[4/5] bg-white/[0.04] border border-white/10 flex items-end p-6 relative overflow-hidden max-w-sm">
              {/* Background monogram */}
              <span
                aria-hidden
                className="absolute inset-0 flex items-center justify-center font-display font-bold text-white/[0.04] select-none"
                style={{ fontSize: "180px" }}
              >
                VC
              </span>
              <div className="relative z-10 border-t border-white/10 pt-4 w-full">
                <p className="text-clay font-body text-xs font-bold tracking-widest uppercase">Founder</p>
                <p className="text-cream font-display text-lg mt-1">Veranthoni "Vbouy" Campbell</p>
              </div>
            </div>
          </div>

          {/* Bio */}
          <div className="lg:col-span-8">
            <p className="text-gold font-body text-xs font-bold tracking-[0.2em] uppercase mb-4">
              Founder & Principal Consultant
            </p>
            <h2 className="font-display text-4xl sm:text-5xl text-cream leading-tight mb-8">
              Veranthoni<br />"Vbouy" Campbell
            </h2>
            <div className="space-y-5 text-cream/60 font-body text-base leading-relaxed">
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
            <div className="mt-8">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-clay text-cream font-body font-bold text-xs tracking-[0.15em] uppercase hover:bg-clay/85 transition-colors group"
              >
                Work With Vbouy <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-16 py-20 sm:py-28">
          <div className="mb-14">
            <p className="text-clay font-body text-xs font-bold tracking-[0.2em] uppercase mb-3">What We Stand For</p>
            <h2 className="font-display text-4xl sm:text-5xl text-cream">Our principles</h2>
          </div>

          {/* Values as editorial list */}
          <div className="space-y-0 divide-y divide-white/10">
            {[
              {
                num: "I",
                accent: "text-clay",
                title: "Warm & Accessible",
                body: "Like a mentor who gets what you're going through. No jargon, no gatekeeping — just real talk and real strategy."
              },
              {
                num: "II",
                accent: "text-sage",
                title: "Community-Centered",
                body: "We serve Bed-Stuy, Crown Heights, Flatbush, and East New York because that's where the work matters most."
              },
              {
                num: "III",
                accent: "text-gold",
                title: "Equity-Forward",
                body: "From MWBE certification to SEE designation, we help founders access every resource and recognition they've earned."
              },
              {
                num: "IV",
                accent: "text-teal",
                title: "Precision First",
                body: "We don't deal in vague advice. Every engagement produces concrete deliverables, clear timelines, and actionable frameworks."
              },
              {
                num: "V",
                accent: "text-clay",
                title: "For-Profit with Purpose",
                body: "Jane Verbatim is a commercial consultancy. Our success is tied directly to our clients' growth — that's the incentive alignment that matters."
              },
              {
                num: "VI",
                accent: "text-sage",
                title: "Hyper-Local Knowledge",
                body: "We know the regulatory landscape, funding sources, and community dynamics that shape Brooklyn business — because we're in it."
              },
            ].map(({ num, accent, title, body }) => (
              <div key={title} className="flex gap-8 py-8 group">
                <span className={`font-display text-2xl font-bold w-10 shrink-0 ${accent} opacity-40 group-hover:opacity-100 transition-opacity`}>
                  {num}
                </span>
                <div className="flex-1">
                  <p className={`font-display text-xl text-cream mb-2 group-hover:${accent.replace('text-', 'text-')} transition-colors`}>{title}</p>
                  <p className="text-cream/45 font-body text-sm leading-relaxed max-w-2xl">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-16 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-2">Ready to work together?</h2>
              <p className="text-charcoal/55 font-body text-base">
                Start with a strategy session — thirty minutes to understand your business.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-cream font-body font-bold text-xs tracking-[0.15em] uppercase hover:bg-charcoal/85 transition-colors shrink-0 group"
            >
              Book a Session <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
