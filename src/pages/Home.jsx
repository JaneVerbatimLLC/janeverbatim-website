import { Link } from "react-router";
import ArrowRightIcon from "icon:arrow-right";
import CheckIcon from "icon:check";
import TrendingUpIcon from "icon:trending-up";
import ShieldIcon from "icon:shield";
import StarIcon from "icon:star";
import UsersIcon from "icon:users";

const stats = [
  { value: "Brooklyn", label: "Based & Rooted" },
  { value: "4+", label: "Neighborhoods Served" },
  { value: "MWBE", label: "Certification Guidance" },
  { value: "SEE", label: "Social Equity Focus" },
];

const services = [
  {
    icon: TrendingUpIcon,
    color: "clay",
    title: "Business Architecture",
    desc: "Entity formation, EIN guidance, investor-ready business plans, and funding roadmaps tailored for emerging founders.",
  },
  {
    icon: ShieldIcon,
    color: "sage",
    title: "Certifications & Compliance",
    desc: "MWBE and Social Equity Entrepreneur certification guidance, cannabis regulatory compliance, and grant readiness.",
  },
  {
    icon: StarIcon,
    color: "gold",
    title: "Brand Identity & Marketing",
    desc: "Logo packages, brand style guides, social media launchpads, and 90-day content strategy plans.",
  },
  {
    icon: UsersIcon,
    color: "teal",
    title: "Education & Development",
    desc: "Instructional design, academic advising, and professional development for founders at every stage.",
  },
];

const colorMap = {
  clay: "bg-clay/15 text-clay border-clay/30",
  sage: "bg-sage/15 text-sage border-sage/30",
  gold: "bg-gold/15 text-gold border-gold/30",
  teal: "bg-teal/15 text-teal border-teal/30",
};

const neighborhoods = ["Bed-Stuy", "Crown Heights", "Flatbush", "East New York"];

export default function Home() {
  return (
    <div className="bg-charcoal min-h-screen">
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background texture */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(45deg, #FAF5EE 0px, #FAF5EE 1px, transparent 1px, transparent 60px)`,
        }} />
        {/* Accent glow */}
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-clay/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-teal/8 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-clay/15 border border-clay/30 rounded-full mb-8">
              <span className="w-2 h-2 bg-clay rounded-full animate-pulse" />
              <span className="text-clay font-body text-xs font-semibold tracking-widest uppercase">Brooklyn Business Consulting</span>
            </div>

            {/* Headline */}
            <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl xl:text-[82px] text-cream leading-[1.05] tracking-tight mb-6">
              Precision in{" "}
              <span className="italic text-clay">Strategy.</span>
              <br />
              Power in{" "}
              <em className="not-italic bg-gradient-to-r from-gold to-clay bg-clip-text text-transparent">Scale.</em>
            </h1>

            <p className="text-cream/60 font-body text-lg sm:text-xl leading-relaxed max-w-2xl mb-10">
              Jane Verbatim LLC helps micro and small business owners across Brooklyn build the frameworks, 
              brand, and strategy to compete — and win — on their own terms.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-clay text-cream font-body font-semibold text-base rounded-sm hover:bg-clay/85 transition-all duration-200 group"
              >
                Schedule a Strategy Session
                <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 border border-cream/25 text-cream font-body font-medium text-base rounded-sm hover:border-cream/50 hover:bg-white/5 transition-all duration-200"
              >
                Explore Services
              </Link>
            </div>

            {/* Neighborhoods */}
            <div className="flex flex-wrap gap-3">
              {neighborhoods.map((n) => (
                <span key={n} className="px-3 py-1 bg-white/5 border border-white/10 text-cream/50 font-body text-xs tracking-wide rounded-full">
                  {n}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-cream/60 font-body text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-10 bg-gradient-to-b from-cream/40 to-transparent" />
        </div>
      </section>

      {/* Stats */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
            {stats.map(({ value, label }) => (
              <div key={label} className="text-center">
                <p className="font-display text-3xl sm:text-4xl font-bold text-clay mb-1">{value}</p>
                <p className="font-body text-cream/50 text-sm tracking-wide">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="mb-14">
          <p className="text-clay font-body text-xs font-semibold tracking-widest uppercase mb-3">What We Do</p>
          <h2 className="font-display text-4xl sm:text-5xl text-cream leading-tight max-w-xl">
            Every service built for <em>Brooklyn builders</em>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
          {services.map(({ icon: Icon, color, title, desc }) => (
            <div
              key={title}
              className="group p-6 sm:p-8 bg-white/[0.03] border border-white/10 rounded-sm hover:border-white/20 hover:bg-white/[0.05] transition-all duration-300"
            >
              <div className={`inline-flex items-center justify-center w-11 h-11 rounded-sm border mb-5 ${colorMap[color]}`}>
                <Icon className="w-5 h-5" />
              </div>
              <h3 className="font-display text-xl text-cream mb-3 group-hover:text-clay transition-colors">{title}</h3>
              <p className="text-cream/55 font-body text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-clay font-body font-medium text-sm hover:gap-3 transition-all duration-200"
          >
            View all services <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Build vs Become */}
      <section className="bg-white/[0.02] border-y border-white/10">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <p className="text-gold font-body text-xs font-semibold tracking-widest uppercase mb-4">Our Advisory Framework</p>
              <h2 className="font-display text-4xl sm:text-5xl text-cream leading-tight mb-6">
                Build vs. <em className="text-clay italic">Become</em>
              </h2>
              <p className="text-cream/60 font-body text-base leading-relaxed mb-6">
                Most consultants help you build a business. We help you become the founder your business needs. 
                The distinction matters — especially in Brooklyn, where grit without structure stalls, and 
                structure without vision fades.
              </p>
              <p className="text-cream/60 font-body text-base leading-relaxed mb-8">
                Founder Veranthoni "Vbouy" Campbell designed this framework after years working alongside 
                micro-business owners who were doing everything right — and still stuck. The answer wasn't 
                working harder. It was building smarter systems and a sharper identity.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-cream font-body font-medium text-sm border-b border-cream/30 pb-0.5 hover:border-clay hover:text-clay transition-all duration-200">
                Meet Vbouy & the team <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {[
                { label: "Clarity over chaos", sub: "We audit your operations and hand you a roadmap, not a to-do list." },
                { label: "Identity as infrastructure", sub: "Your brand is your most leveraged business asset — we make it work." },
                { label: "Community as strategy", sub: "Local roots aren't a limitation. They're your competitive edge." },
                { label: "Equity-centered access", sub: "Tiered pricing and pro-bono work ensure the door stays open." },
              ].map(({ label, sub }) => (
                <div key={label} className="flex gap-4 p-5 bg-white/[0.03] border border-white/10 rounded-sm">
                  <CheckIcon className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <div>
                    <p className="text-cream font-body font-semibold text-sm mb-1">{label}</p>
                    <p className="text-cream/50 font-body text-sm leading-relaxed">{sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="relative bg-clay/10 border border-clay/25 rounded-sm p-10 sm:p-16 text-center overflow-hidden">
          <div className="absolute inset-0 opacity-5" style={{
            backgroundImage: `radial-gradient(circle at 60% 50%, #C4704A 0%, transparent 70%)`,
          }} />
          <div className="relative z-10">
            <h2 className="font-display text-4xl sm:text-5xl text-cream mb-4">
              Ready to build with <em className="text-clay italic">intention?</em>
            </h2>
            <p className="text-cream/60 font-body text-lg max-w-xl mx-auto mb-8">
              A 45-minute strategy session is where it starts. No fluff — just a clear picture 
              of where you are and where we can take you together.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-clay text-cream font-body font-semibold text-base rounded-sm hover:bg-clay/85 transition-colors duration-200"
            >
              Book Your Session <ArrowRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
