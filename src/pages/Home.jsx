import { Link } from "react-router";
import ArrowRightIcon from "icon:arrow-right";
import CheckIcon from "icon:check";
import TrendingUpIcon from "icon:trending-up";
import ShieldIcon from "icon:shield";
import StarIcon from "icon:star";
import UsersIcon from "icon:users";

const services = [
  {
    icon: TrendingUpIcon,
    color: "clay",
    num: "01",
    title: "Business Architecture",
    desc: "Entity formation, EIN guidance, investor-ready business plans, and funding roadmaps tailored for emerging founders.",
  },
  {
    icon: ShieldIcon,
    color: "sage",
    num: "02",
    title: "Certifications & Compliance",
    desc: "MWBE and Social Equity Entrepreneur certification guidance, cannabis regulatory compliance, and grant readiness.",
  },
  {
    icon: StarIcon,
    color: "gold",
    num: "03",
    title: "Brand Identity & Marketing",
    desc: "Logo packages, brand style guides, social media launchpads, and 90-day content strategy plans.",
  },
  {
    icon: UsersIcon,
    color: "teal",
    num: "04",
    title: "Education & Development",
    desc: "Instructional design, academic advising, and professional development for founders at every stage.",
  },
];

const colorAccent = {
  clay: "#C4704A",
  sage: "#4A6741",
  gold: "#C9A84C",
  teal: "#5B9EA0",
};

const colorClass = {
  clay: "text-clay border-clay",
  sage: "text-sage border-sage",
  gold: "text-gold border-gold",
  teal: "text-teal border-teal",
};

const neighborhoods = ["Bed-Stuy", "Crown Heights", "Flatbush", "East New York"];

export default function Home() {
  return (
    <div className="bg-charcoal min-h-screen">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-end pt-20 overflow-hidden">

        {/* Bold vertical rule — left editorial accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-clay hidden lg:block" />

        {/* Large background type — architectural feel */}
        <div
          aria-hidden
          className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-bold text-white/[0.025] select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(140px, 22vw, 320px)", letterSpacing: "-0.04em" }}
        >
          JV
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:pl-16 pb-16 sm:pb-24 w-full">

          {/* Eyebrow row */}
          <div className="flex items-center gap-4 mb-10 sm:mb-14">
            <div className="h-px flex-1 max-w-16 bg-clay" />
            <span className="text-clay font-body text-xs font-bold tracking-[0.2em] uppercase">
              Brooklyn Business Consulting
            </span>
          </div>

          {/* Main headline — bold editorial split */}
          <div className="mb-8">
            <h1 className="font-display text-cream leading-[1.0] tracking-tight">
              <span className="block text-[clamp(52px,10vw,120px)]">Precision in</span>
              <span
                className="block text-[clamp(52px,10vw,120px)] italic"
                style={{ WebkitTextStroke: "1px #C4704A", color: "transparent" }}
              >
                Strategy.
              </span>
              <span className="block text-[clamp(52px,10vw,120px)]">Power in</span>
              <span className="block text-[clamp(52px,10vw,120px)] text-clay italic">Scale.</span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 items-start sm:items-end">
            <p className="text-cream/55 font-body text-base sm:text-lg leading-relaxed max-w-md">
              Jane Verbatim LLC helps micro and small business owners across Brooklyn build 
              the frameworks, brand, and strategy to compete — and win — on their own terms.
            </p>

            <div className="flex flex-col gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 bg-clay text-cream font-body font-bold text-sm tracking-wide uppercase hover:bg-clay/85 transition-colors group"
              >
                Book a Session
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border border-cream/30 text-cream font-body font-medium text-sm tracking-wide hover:border-cream/60 transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Neighborhoods — bottom strip */}
          <div className="mt-14 pt-6 border-t border-white/10 flex flex-wrap gap-x-8 gap-y-2">
            <span className="text-cream/30 font-body text-xs uppercase tracking-widest">Serving</span>
            {neighborhoods.map((n) => (
              <span key={n} className="text-cream/50 font-body text-xs tracking-wide">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Marquee strip ── */}
      <div className="bg-clay overflow-hidden py-3 border-y border-clay">
        <div className="flex gap-0 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {Array(3).fill(null).map((_, gi) => (
            <div key={gi} className="flex items-center gap-0 shrink-0">
              {["Business Architecture", "Brand Identity", "MWBE Certification", "SEE Designation", "Cannabis Compliance", "Growth Strategy"].map((t) => (
                <span key={t} className="font-display text-cream text-sm font-semibold tracking-wider px-8">
                  {t} <span className="text-cream/40 mx-2">·</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Services grid ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-16 py-20 sm:py-28">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-clay font-body text-xs font-bold tracking-[0.2em] uppercase mb-3">What We Do</p>
            <h2 className="font-display text-4xl sm:text-5xl text-cream leading-tight">
              Services built for<br />
              <em className="text-clay italic">Brooklyn builders</em>
            </h2>
          </div>
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-cream/60 font-body text-sm hover:text-clay transition-colors shrink-0"
          >
            All services <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10">
          {services.map(({ icon: Icon, color, num, title, desc }) => (
            <div
              key={title}
              className="group bg-charcoal p-8 sm:p-10 hover:bg-white/[0.03] transition-colors relative overflow-hidden"
            >
              {/* Large number — background */}
              <span
                aria-hidden
                className="absolute top-4 right-6 font-display text-7xl font-bold opacity-[0.06] select-none"
                style={{ color: colorAccent[color] }}
              >
                {num}
              </span>

              <div className="relative z-10">
                <div
                  className={`inline-flex items-center justify-center w-10 h-10 border mb-6 ${colorClass[color]}`}
                  style={{ borderColor: colorAccent[color] }}
                >
                  <Icon className="w-5 h-5" style={{ color: colorAccent[color] }} />
                </div>
                <h3 className="font-display text-xl sm:text-2xl text-cream mb-3 group-hover:text-clay transition-colors">{title}</h3>
                <p className="text-cream/50 font-body text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Build vs Become ── */}
      <section className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-16 py-20 sm:py-28">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left — framework label */}
            <div className="lg:col-span-4">
              <p className="text-gold font-body text-xs font-bold tracking-[0.2em] uppercase mb-6">Our Advisory Framework</p>
              <h2 className="font-display text-5xl sm:text-6xl text-cream leading-tight mb-8">
                Build<br />
                <span className="text-cream/30">vs.</span><br />
                <em className="text-clay italic">Become</em>
              </h2>
              <p className="text-cream/55 font-body text-base leading-relaxed mb-6">
                Most consultants help you build a business. We help you become the founder 
                your business needs. The distinction matters — especially in Brooklyn.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-clay font-body font-semibold text-sm uppercase tracking-wider hover:gap-4 transition-all"
              >
                Meet Vbouy <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            {/* Right — pillars */}
            <div className="lg:col-span-8 space-y-0 divide-y divide-white/10">
              {[
                { label: "Clarity over chaos", num: "1", sub: "We audit your operations and hand you a roadmap, not a to-do list." },
                { label: "Identity as infrastructure", num: "2", sub: "Your brand is your most leveraged business asset — we make it work." },
                { label: "Community as strategy", num: "3", sub: "Local roots aren't a limitation. They're your competitive edge." },
                { label: "Equity-centered access", num: "4", sub: "Tiered pricing and stackable discounts ensure serious founders get in the door." },
              ].map(({ label, num, sub }) => (
                <div key={label} className="flex gap-6 py-7 group">
                  <span className="font-display text-3xl text-white/10 font-bold w-8 shrink-0 group-hover:text-clay/30 transition-colors">{num}</span>
                  <div className="flex-1">
                    <p className="text-cream font-display text-lg mb-1 group-hover:text-clay transition-colors">{label}</p>
                    <p className="text-cream/45 font-body text-sm leading-relaxed">{sub}</p>
                  </div>
                  <CheckIcon className="w-5 h-5 text-sage shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA banner ── */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-16 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal leading-tight mb-2">
                Ready to build with intention?
              </h2>
              <p className="text-charcoal/55 font-body text-base">
                A 45-minute session. No fluff — just a clear picture of where you're going.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-cream font-body font-bold text-sm tracking-widest uppercase hover:bg-charcoal/85 transition-colors shrink-0 group"
            >
              Book Your Session
              <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-33.333%); }
        }
      `}</style>
    </div>
  );
}
