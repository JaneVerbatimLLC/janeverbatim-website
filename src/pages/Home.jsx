import { Link } from "react-router";
import { useState, useEffect } from "react";
import ArrowRightIcon from "icon:arrow-right";
import CheckIcon from "icon:check";
import TrendingUpIcon from "icon:trending-up";
import ShieldIcon from "icon:shield";
import StarIcon from "icon:star";
import UsersIcon from "icon:users";
import QuoteIcon from "icon:quote";
import { pb } from "../lib/pb.js";

const services = [
  {
    icon: TrendingUpIcon,
    color: "clay",
    num: "01",
    title: "Business Architecture",
    desc: "Entity formation, EIN guidance, investor-ready business plans, and funding roadmaps tailored for emerging founders.",
    hex: "#C4704A",
  },
  {
    icon: ShieldIcon,
    color: "sage",
    num: "02",
    title: "Certifications & Compliance",
    desc: "MWBE and Social Equity Entrepreneur certification guidance, cannabis regulatory compliance, and grant readiness.",
    hex: "#4A6741",
  },
  {
    icon: StarIcon,
    color: "gold",
    num: "03",
    title: "Brand Identity & Marketing",
    desc: "Logo packages, brand style guides, social media launchpads, and 90-day content strategy plans.",
    hex: "#C9A84C",
  },
  {
    icon: UsersIcon,
    color: "teal",
    num: "04",
    title: "Education & Development",
    desc: "Instructional design, academic advising, and professional development for founders at every stage.",
    hex: "#5B9EA0",
  },
];

const neighborhoods = ["Bed-Stuy", "Crown Heights", "Flatbush", "East New York"];

function Testimonials() {
  const [items, setItems] = useState([]);
  const [idx, setIdx] = useState(0);

  useEffect(() => {
    const controller = new AbortController();
    pb.collection("testimonials").getList(1, 20, {
      sort: "-created",
      signal: controller.signal,
    })
      .then(r => setItems(r.items))
      .catch(err => { if (!err?.isAbort) console.error(err); });
    return () => controller.abort();
  }, []);

  if (items.length === 0) return null;

  const current = items[idx];

  return (
    <section className="border-b-4 border-charcoal bg-charcoal">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">

        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
          <div>
            <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-3">What Founders Say</p>
            <h2 className="font-display text-4xl sm:text-5xl text-cream leading-tight font-black">
              Real results.<br />
              <em className="text-clay italic font-black">Real Brooklyn.</em>
            </h2>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => setIdx(i => (i - 1 + items.length) % items.length)}
              className="w-10 h-10 border-2 border-cream/20 text-cream/50 hover:border-clay hover:text-clay transition-colors flex items-center justify-center font-body font-bold"
              aria-label="Previous testimonial"
            >
              ←
            </button>
            <span className="font-body text-xs text-cream/30 w-16 text-center">
              {idx + 1} / {items.length}
            </span>
            <button
              onClick={() => setIdx(i => (i + 1) % items.length)}
              className="w-10 h-10 border-2 border-cream/20 text-cream/50 hover:border-clay hover:text-clay transition-colors flex items-center justify-center font-body font-bold"
              aria-label="Next testimonial"
            >
              →
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Large quote */}
          <div className="lg:col-span-8">
            <QuoteIcon className="w-10 h-10 text-clay mb-6 opacity-60" />
            <blockquote
              className="font-display text-2xl sm:text-3xl lg:text-4xl text-cream leading-snug font-bold mb-8"
              key={current.id}
            >
              "{current.quote}"
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-clay flex items-center justify-center font-display font-black text-cream text-lg">
                {current.client_name?.charAt(0)}
              </div>
              <div>
                <p className="font-body font-bold text-cream text-sm">{current.client_name}</p>
                {current.business_name && (
                  <p className="font-body text-cream/50 text-xs">{current.business_name}</p>
                )}
                {current.neighborhood && (
                  <p className="font-body text-clay text-xs font-bold uppercase tracking-widest mt-0.5">{current.neighborhood}</p>
                )}
              </div>
            </div>
          </div>

          {/* Right: dots + service tag */}
          <div className="lg:col-span-4 flex flex-col gap-6 lg:pt-16">
            {current.service && (
              <div className="border border-cream/10 px-5 py-4">
                <p className="text-cream/30 font-body text-xs uppercase tracking-widest font-bold mb-1">Service</p>
                <p className="text-cream font-body text-sm font-bold">{current.service}</p>
              </div>
            )}
            {/* Dot indicators */}
            <div className="flex flex-wrap gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setIdx(i)}
                  className={`w-2 h-2 rounded-full transition-all ${i === idx ? "bg-clay w-6" : "bg-cream/20 hover:bg-cream/40"}`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="bg-cream min-h-screen">

      {/* ── Hero ── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-20 overflow-hidden border-b-4 border-charcoal">

        {/* Grid texture background */}
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#2C2C2C 1px, transparent 1px), linear-gradient(90deg, #2C2C2C 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />

        {/* Bold clay block — top right architectural accent */}
        <div className="absolute top-0 right-0 w-2 h-full bg-clay hidden lg:block" />

        {/* Large ghosted text — fills right */}
        <div
          aria-hidden
          className="absolute right-0 top-1/2 -translate-y-1/2 font-display font-black text-charcoal/[0.04] select-none pointer-events-none leading-none"
          style={{ fontSize: "clamp(120px, 20vw, 280px)", letterSpacing: "-0.04em" }}
        >
          JVLLC
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full py-16">

          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-10 sm:mb-14">
            <div className="w-8 h-0.5 bg-clay" />
            <span className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase">
              Brooklyn Business Consulting
            </span>
          </div>

          {/* Headline — bold editorial, charcoal on cream */}
          <div className="mb-10">
            <h1 className="font-display text-charcoal leading-[0.95] tracking-tight">
              <span className="block text-[clamp(48px,9vw,110px)] font-black">Precision in</span>
              <span
                className="block text-[clamp(48px,9vw,110px)] font-black italic"
                style={{ color: "#C4704A" }}
              >
                Strategy.
              </span>
              <span className="block text-[clamp(48px,9vw,110px)] font-black">Power in</span>
              <span
                className="block text-[clamp(48px,9vw,110px)] font-black"
                style={{ WebkitTextStroke: "2px #2C2C2C", color: "transparent" }}
              >
                Scale.
              </span>
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-12 items-start sm:items-end">
            <p className="text-charcoal/60 font-body text-base sm:text-lg leading-relaxed max-w-md">
              Jane Verbatim LLC helps micro and small business owners across Brooklyn build 
              the frameworks, brand, and strategy to compete — and win — on their own terms.
            </p>

            <div className="flex flex-col gap-3 shrink-0">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-charcoal text-cream font-body font-bold text-xs tracking-widest uppercase hover:bg-clay transition-colors group"
              >
                Book a Session
                <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 border-2 border-charcoal text-charcoal font-body font-bold text-xs tracking-widest uppercase hover:border-clay hover:text-clay transition-colors"
              >
                Our Services
              </Link>
            </div>
          </div>

          {/* Neighborhoods strip */}
          <div className="mt-14 pt-6 border-t border-charcoal/15 flex flex-wrap gap-x-8 gap-y-2 items-center">
            <span className="text-charcoal/30 font-body text-xs uppercase tracking-widest font-bold">Serving</span>
            {neighborhoods.map((n) => (
              <span key={n} className="text-charcoal/50 font-body text-xs tracking-widest uppercase font-medium">{n}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Clay marquee strip ── */}
      <div className="bg-clay overflow-hidden py-3.5 border-b-4 border-charcoal">
        <div className="flex gap-0 animate-[marquee_30s_linear_infinite] whitespace-nowrap">
          {Array(3).fill(null).map((_, gi) => (
            <div key={gi} className="flex items-center gap-0 shrink-0">
              {["Business Architecture", "Brand Identity", "MWBE Certification", "SEE Designation", "Cannabis Compliance", "Growth Strategy", "Brooklyn Founders"].map((t) => (
                <span key={t} className="font-display text-cream text-xs font-bold tracking-[0.2em] uppercase px-8">
                  {t} <span className="text-cream/40 mx-3">◆</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Stats row ── */}
      <section className="border-b-4 border-charcoal bg-charcoal">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x-0 sm:divide-x divide-white/10">
            {[
              { num: "4+", label: "Brooklyn neighborhoods served" },
              { num: "MWBE", label: "Certification guidance" },
              { num: "SEE", label: "Equity entrepreneur expertise" },
              { num: "100%", label: "Founder-first approach" },
            ].map(({ num, label }, i) => (
              <div key={i} className={`py-10 px-8 ${i % 2 === 0 ? "" : ""}`}>
                <p className="font-display text-4xl sm:text-5xl font-black text-cream mb-2">{num}</p>
                <p className="text-cream/40 font-body text-xs uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Services grid ── */}
      <section className="border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-14">
            <div>
              <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-3">What We Do</p>
              <h2 className="font-display text-4xl sm:text-5xl text-charcoal leading-tight font-black">
                Services built for<br />
                <em className="text-clay italic font-black">Brooklyn builders</em>
              </h2>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-charcoal/50 font-body text-sm hover:text-clay transition-colors shrink-0 font-bold uppercase tracking-widest text-xs"
            >
              All services <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {services.map(({ icon: Icon, color, num, title, desc, hex }) => (
              <div
                key={title}
                className="group border-2 border-charcoal p-8 sm:p-10 hover:border-transparent transition-all relative overflow-hidden"
                style={{ "--hover-bg": hex }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ backgroundColor: hex }}
                  aria-hidden
                />
                {/* Num watermark */}
                <span
                  aria-hidden
                  className="absolute bottom-4 right-6 font-display text-8xl font-black opacity-[0.07] select-none group-hover:opacity-20 transition-opacity"
                  style={{ color: hex }}
                >
                  {num}
                </span>

                <div className="relative z-10">
                  <div
                    className="inline-flex items-center justify-center w-10 h-10 border-2 mb-6 group-hover:border-cream transition-colors"
                    style={{ borderColor: hex }}
                  >
                    <Icon className="w-5 h-5 group-hover:text-cream transition-colors" style={{ color: hex }} />
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl text-charcoal mb-3 font-bold group-hover:text-cream transition-colors">{title}</h3>
                  <p className="text-charcoal/55 font-body text-sm leading-relaxed group-hover:text-cream/80 transition-colors">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Build vs Become ── */}
      <section className="border-b-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-20 sm:py-28">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-6">Our Advisory Framework</p>
              <h2 className="font-display text-5xl sm:text-6xl text-charcoal leading-[0.95] font-black mb-8">
                Build<br />
                <span className="text-charcoal/20">vs.</span><br />
                <em className="text-clay italic">Become</em>
              </h2>
              <p className="text-charcoal/60 font-body text-base leading-relaxed mb-6">
                Most consultants help you build a business. We help you become the founder 
                your business needs. The distinction matters — especially in Brooklyn.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-clay font-body font-bold text-xs uppercase tracking-widest hover:gap-4 transition-all"
              >
                Meet Vbouy <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-8 space-y-0 divide-y-2 divide-charcoal/10">
              {[
                { label: "Clarity over chaos", num: "1", sub: "We audit your operations and hand you a roadmap, not a to-do list." },
                { label: "Identity as infrastructure", num: "2", sub: "Your brand is your most leveraged business asset — we make it work." },
                { label: "Community as strategy", num: "3", sub: "Local roots aren't a limitation. They're your competitive edge." },
                { label: "Equity-centered access", num: "4", sub: "Tiered pricing and stackable discounts ensure serious founders get in the door." },
              ].map(({ label, num, sub }) => (
                <div key={label} className="flex gap-6 py-7 group">
                  <span className="font-display text-4xl text-charcoal/10 font-black w-10 shrink-0 group-hover:text-clay/40 transition-colors leading-none mt-1">{num}</span>
                  <div className="flex-1">
                    <p className="text-charcoal font-display text-lg font-bold mb-1 group-hover:text-clay transition-colors">{label}</p>
                    <p className="text-charcoal/45 font-body text-sm leading-relaxed">{sub}</p>
                  </div>
                  <CheckIcon className="w-5 h-5 text-clay shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <Testimonials />

      {/* ── CTA banner ── */}
      <section className="bg-charcoal">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-cream font-black leading-tight mb-2">
                Ready to build with intention?
              </h2>
              <p className="text-cream/50 font-body text-base">
                A 45-minute session. No fluff — just a clear picture of where you're going.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-clay text-cream font-body font-bold text-xs tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-colors shrink-0 group"
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
