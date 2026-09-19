import { Link } from "react-router";
import { ArrowRight as ArrowRightIcon, Award as AwardIcon, BookOpen as BookOpenIcon, Building2 as BuildingIcon, Check as CheckIcon, Palette as PaletteIcon } from "lucide-react";

const services = [
  {
    icon: BuildingIcon,
    accent: "#C4704A",
    num: "01",
    id: "architecture",
    title: "Business Architecture & Formation",
    tagline: "The structural foundation every serious business needs.",
    items: [
      "Entity setup — LLC, DBA, and corporate structure guidance",
      "EIN acquisition and registration support",
      "Investor-ready business plan development",
      "Operations and logistics audits",
      "Funding strategy roadmaps and grant identification",
      "Business systems documentation",
    ],
  },
  {
    icon: AwardIcon,
    accent: "#4A6741",
    num: "02",
    id: "certifications",
    title: "Certifications & Equity Access",
    tagline: "The credentials that open doors and unlock capital.",
    items: [
      "MWBE certification application and guidance",
      "Social Equity Entrepreneur (SEE) designation support",
      "Cannabis regulatory compliance training",
      "Grant application readiness assessment",
      "NYC, NYS, and federal program navigation",
      "Compliance documentation review",
    ],
  },
  {
    icon: PaletteIcon,
    accent: "#C9A84C",
    num: "03",
    id: "brand",
    title: "Brand Identity & Marketing",
    tagline: "A brand that commands attention and earns trust.",
    items: [
      "Logo design packages and brand marks",
      "Full brand style guides and visual systems",
      "Social media launchpad strategy",
      "90-day content strategy plans",
      "Copywriting for web and marketing materials",
      "Digital presence audit and rebuild",
    ],
  },
  {
    icon: BookOpenIcon,
    accent: "#5B9EA0",
    num: "04",
    id: "education",
    title: "Education & Professional Development",
    tagline: "Building the founder behind the business.",
    items: [
      "Instructional design for in-house training",
      "Academic and career path advising",
      "Workshop facilitation for business fundamentals",
      "Founder cohort programming",
      "Financial literacy education",
      "Leadership and operational mindset coaching",
    ],
  },
];

export default function Services() {
  return (
    <div className="bg-cream min-h-screen pt-20">

      {/* ── Hero ── */}
      <section className="relative border-b-4 border-charcoal overflow-hidden">
        <div className="absolute right-0 top-0 bottom-0 w-2 bg-clay hidden lg:block" />
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
              <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-5">What We Offer</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-charcoal leading-[0.95] font-black tracking-tight">
                Services built for<br />
                the <em className="text-clay italic">real work</em><br />
                of growing
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-charcoal/60 font-body text-base sm:text-lg leading-relaxed">
                From your first LLC filing to your 90-day content calendar, Jane Verbatim 
                meets you exactly where you are — with the precision that gets you where 
                you're going.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="space-y-6">
          {services.map(({ icon: Icon, accent, num, id, title, tagline, items }) => (
            <div
              key={id}
              className="group border-2 border-charcoal relative overflow-hidden hover:border-transparent transition-all"
            >
              {/* Hover fill */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: accent }}
                aria-hidden
              />

              <div className="relative z-10 p-8 sm:p-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                  {/* Left */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4 mb-5">
                      <span
                        className="font-display text-5xl font-black opacity-20 group-hover:opacity-40 transition-opacity group-hover:text-cream"
                        style={{ color: accent }}
                      >
                        {num}
                      </span>
                      <div
                        className="inline-flex items-center justify-center w-10 h-10 border-2 shrink-0 group-hover:border-cream transition-colors"
                        style={{ borderColor: accent }}
                      >
                        <Icon className="w-5 h-5 group-hover:text-cream transition-colors" style={{ color: accent }} />
                      </div>
                    </div>
                    <h2
                      className="font-display text-2xl sm:text-3xl font-bold text-charcoal mb-2 group-hover:text-cream transition-colors"
                      style={{ color: undefined }}
                    >{title}</h2>
                    <p className="text-charcoal/40 font-body text-sm italic group-hover:text-cream/70 transition-colors">{tagline}</p>
                  </div>

                  {/* Right */}
                  <div className="lg:col-span-8">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                      {items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckIcon className="w-4 h-4 shrink-0 mt-0.5 group-hover:text-cream transition-colors" style={{ color: accent }} />
                          <span className="text-charcoal/60 font-body text-sm leading-snug group-hover:text-cream/80 transition-colors">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing note ── */}
      <section className="border-t-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-4">Transparent Pricing</p>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal font-black mb-5">
                Pricing that works for<br />where you are
              </h2>
              <p className="text-charcoal/55 font-body text-base leading-relaxed">
                Our tiered pricing and stackable discount schedule are built to remove financial 
                barriers, not create them. Every serious founder deserves access to strategic guidance.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-0 divide-y-2 divide-charcoal/10">
              {[
                { label: "Social Equity Entrepreneur (SEE)", desc: "Verified SEE designation discount applied at intake" },
                { label: "MWBE & DEI Discount", desc: "Certification or documented equity status required" },
                { label: "Service Bundle Savings", desc: "Combine services for compound discounts" },
                { label: "Early-Payment Discount", desc: "Pay in full upfront and save" },
              ].map(({ label, desc }) => (
                <div key={label} className="flex gap-5 py-5 group">
                  <CheckIcon className="w-4 h-4 text-clay shrink-0 mt-0.5" />
                  <div>
                    <p className="text-charcoal font-body font-bold text-sm">{label}</p>
                    <p className="text-charcoal/40 font-body text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-charcoal border-t-4 border-charcoal">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-cream font-black mb-2">
                Not sure which service fits?
              </h2>
              <p className="text-cream/50 font-body text-base">
                Book a no-pressure session and we'll map the right path together.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-clay text-cream font-body font-bold text-xs tracking-widest uppercase hover:bg-cream hover:text-charcoal transition-colors shrink-0 group"
            >
              Schedule a Conversation <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
