import { Link } from "react-router";
import ArrowRightIcon from "icon:arrow-right";

export default function About() {
  return (
    <div className="bg-cream min-h-screen pt-20">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b-4 border-charcoal">
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-clay hidden lg:block" />
        {/* Grid texture */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#2C2C2C 1px, transparent 1px), linear-gradient(90deg, #2C2C2C 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-5">Our Story</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-charcoal leading-[0.95] font-black tracking-tight">
                Built in Brooklyn.<br />
                <em className="italic text-clay">Built for Brooklyn.</em>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-charcoal/60 font-body text-base sm:text-lg leading-relaxed">
                Jane Verbatim LLC is a for-profit small business management consulting firm 
                with its heart rooted in the Brooklyn communities it serves — and a track 
                record of turning ambitious founders into structured, scalable businesses.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Founder ── */}
      <section className="border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

            {/* Founder photo */}
            <div className="lg:col-span-4">
              <div className="aspect-[4/5] border-2 border-charcoal relative overflow-hidden max-w-sm">
                <img
                  src="/static/vbouy-campbell.jpeg"
                  alt="Veranthoni 'Vbouy' Campbell — Founder of Jane Verbatim LLC"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-charcoal/80 backdrop-blur-sm px-5 py-4 border-t-2 border-clay">
                  <p className="text-clay font-body text-xs font-bold tracking-widest uppercase">Founder</p>
                  <p className="text-cream font-display text-lg mt-0.5 font-bold">Veranthoni "Vbouy" Campbell</p>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="lg:col-span-8">
              <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-4">
                Founder & Principal Consultant
              </p>
              <h2 className="font-display text-4xl sm:text-5xl text-charcoal leading-tight font-black mb-8">
                Veranthoni<br />"Vbouy" Campbell
              </h2>
              <div className="space-y-5 text-charcoal/60 font-body text-base leading-relaxed">
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
                  className="inline-flex items-center gap-2 px-7 py-4 bg-charcoal text-cream font-body font-bold text-xs tracking-widest uppercase hover:bg-clay transition-colors group"
                >
                  Work With Vbouy <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values ── */}
      <section className="border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="mb-14">
            <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-3">What We Stand For</p>
            <h2 className="font-display text-4xl sm:text-5xl text-charcoal font-black">Our principles</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              {
                num: "I",
                accentBg: "#C4704A",
                title: "Warm & Accessible",
                body: "Like a mentor who gets what you're going through. No jargon, no gatekeeping — just real talk and real strategy."
              },
              {
                num: "II",
                accentBg: "#4A6741",
                title: "Community-Centered",
                body: "We serve Bed-Stuy, Crown Heights, Flatbush, and East New York because that's where the work matters most."
              },
              {
                num: "III",
                accentBg: "#C9A84C",
                title: "Equity-Forward",
                body: "From MWBE certification to SEE designation, we help founders access every resource and recognition they've earned."
              },
              {
                num: "IV",
                accentBg: "#5B9EA0",
                title: "Precision First",
                body: "We don't deal in vague advice. Every engagement produces concrete deliverables, clear timelines, and actionable frameworks."
              },
              {
                num: "V",
                accentBg: "#C4704A",
                title: "For-Profit with Purpose",
                body: "Jane Verbatim is a commercial consultancy. Our success is tied directly to our clients' growth — that's the alignment that matters."
              },
              {
                num: "VI",
                accentBg: "#4A6741",
                title: "Hyper-Local Knowledge",
                body: "We know the regulatory landscape, funding sources, and community dynamics that shape Brooklyn business — because we're in it."
              },
            ].map(({ num, accentBg, title, body }) => (
              <div
                key={title}
                className="group border-2 border-charcoal p-8 hover:border-transparent transition-all relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: accentBg }}
                  aria-hidden
                />
                <div className="relative z-10">
                  <span
                    className="block font-display text-5xl font-black mb-4 group-hover:text-cream transition-colors"
                    style={{ color: accentBg }}
                  >
                    {num}
                  </span>
                  <h3 className="font-display text-lg font-bold text-charcoal mb-2 group-hover:text-cream transition-colors">{title}</h3>
                  <p className="text-charcoal/55 font-body text-sm leading-relaxed group-hover:text-cream/80 transition-colors">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-cream font-black mb-2">Ready to work together?</h2>
              <p className="text-cream/50 font-body text-base">
                Start with a strategy session — thirty minutes to understand your business.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-clay text-cream font-body font-bold text-xs tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-colors shrink-0 group"
            >
              Book a Session <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
