import { Link } from "react-router";
import ArrowRightIcon from "icon:arrow-right";
import BuildingIcon from "icon:building-2";
import AwardIcon from "icon:award";
import PaletteIcon from "icon:palette";
import BookOpenIcon from "icon:book-open";
import CheckIcon from "icon:check";

const services = [
  {
    icon: BuildingIcon,
    accent: "clay",
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
    accent: "sage",
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
    accent: "gold",
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
    accent: "teal",
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

const accentMap = {
  clay: { border: "border-clay/30", bg: "bg-clay/10", text: "text-clay", iconBg: "bg-clay/15 border-clay/30 text-clay", check: "text-clay" },
  sage: { border: "border-sage/30", bg: "bg-sage/10", text: "text-sage", iconBg: "bg-sage/15 border-sage/30 text-sage", check: "text-sage" },
  gold: { border: "border-gold/30", bg: "bg-gold/10", text: "text-gold", iconBg: "bg-gold/15 border-gold/30 text-gold", check: "text-gold" },
  teal: { border: "border-teal/30", bg: "bg-teal/10", text: "text-teal", iconBg: "bg-teal/15 border-teal/30 text-teal", check: "text-teal" },
};

export default function Services() {
  return (
    <div className="bg-charcoal min-h-screen pt-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-20 sm:py-28">
        <div className="max-w-3xl">
          <p className="text-clay font-body text-xs font-semibold tracking-widest uppercase mb-4">What We Offer</p>
          <h1 className="font-display text-5xl sm:text-6xl text-cream leading-tight mb-6">
            Services built for the{" "}
            <em className="italic text-clay">real work</em>{" "}
            of growing
          </h1>
          <p className="text-cream/60 font-body text-lg leading-relaxed">
            From your first LLC filing to your 90-day content calendar, Jane Verbatim meets you exactly 
            where you are — with the precision that gets you where you're going.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28 space-y-8">
        {services.map(({ icon: Icon, accent, id, title, tagline, items }) => {
          const a = accentMap[accent];
          return (
            <div key={id} className={`p-7 sm:p-10 bg-white/[0.03] border ${a.border} rounded-sm`}>
              <div className="flex flex-col sm:flex-row sm:items-start gap-6">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-sm border shrink-0 ${a.iconBg}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h2 className={`font-display text-2xl sm:text-3xl mb-1 ${a.text}`}>{title}</h2>
                  <p className="text-cream/50 font-body text-sm italic mb-6">{tagline}</p>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon className={`w-4 h-4 shrink-0 mt-0.5 ${a.check}`} />
                        <span className="text-cream/65 font-body text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </section>

      {/* Pricing note */}
      <section className="border-t border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-gold font-body text-xs font-semibold tracking-widest uppercase mb-3">Transparent Pricing</p>
              <h2 className="font-display text-3xl sm:text-4xl text-cream mb-4">
                Pricing that works for where you are
              </h2>
              <p className="text-cream/60 font-body text-base leading-relaxed">
                We believe every serious founder deserves access to strategic guidance. Our tiered pricing 
                and stackable discount schedule — including SEE, DEI, bundle, and early-payment discounts — 
                are built to remove financial barriers, not create them.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              {[
                { label: "Social Equity Entrepreneur (SEE)", desc: "Verified SEE designation discount applied at intake" },
                { label: "MWBE & DEI Discount", desc: "Certification or documented equity status required" },
                { label: "Service Bundle Savings", desc: "Combine services for compound discounts" },
                { label: "Early-Payment Discount", desc: "Pay in full upfront and save" },
              ].map(({ label, desc }) => (
                <div key={label} className="flex gap-4 p-4 bg-white/[0.04] border border-white/10 rounded-sm">
                  <CheckIcon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-cream font-body font-semibold text-sm">{label}</p>
                    <p className="text-cream/45 font-body text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
              <Link to="/civic-capital" className="text-clay font-body text-sm font-medium inline-flex items-center gap-1.5 hover:gap-2.5 transition-all mt-1">
                Learn about our pro-bono program <ArrowRightIcon className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 text-center">
        <h2 className="font-display text-3xl sm:text-4xl text-cream mb-4">Not sure which service fits?</h2>
        <p className="text-cream/55 font-body text-base max-w-lg mx-auto mb-8">
          Book a no-pressure strategy session and we'll map the right engagement together.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-clay text-cream font-body font-semibold text-sm rounded-sm hover:bg-clay/85 transition-colors"
        >
          Schedule a Conversation <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </section>
    </div>
  );
}
