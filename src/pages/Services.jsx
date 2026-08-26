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
    accent: "sage",
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
    accent: "gold",
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
    accent: "teal",
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

const accentColor = {
  clay: "#C4704A",
  sage: "#4A6741",
  gold: "#C9A84C",
  teal: "#5B9EA0",
};

const accentText = {
  clay: "text-clay",
  sage: "text-sage",
  gold: "text-gold",
  teal: "text-teal",
};

export default function Services() {
  return (
    <div className="bg-charcoal min-h-screen pt-20">

      {/* ── Hero ── */}
      <section className="relative border-b border-white/10 overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-clay hidden lg:block" />
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-16 py-20 sm:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            <div className="lg:col-span-7">
              <p className="text-clay font-body text-xs font-bold tracking-[0.2em] uppercase mb-5">What We Offer</p>
              <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-cream leading-[1.0] tracking-tight">
                Services built for<br />
                the <em className="text-clay italic">real work</em><br />
                of growing
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-cream/55 font-body text-base sm:text-lg leading-relaxed">
                From your first LLC filing to your 90-day content calendar, Jane Verbatim 
                meets you exactly where you are — with the precision that gets you where 
                you're going.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-16 py-16 sm:py-24">
        <div className="space-y-0 divide-y divide-white/10">
          {services.map(({ icon: Icon, accent, num, id, title, tagline, items }) => (
            <div key={id} className="group py-12 sm:py-16">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

                {/* Left — number + title */}
                <div className="lg:col-span-5">
                  <div className="flex items-start gap-5 mb-5">
                    <span
                      className={`font-display text-4xl font-bold opacity-25 group-hover:opacity-60 transition-opacity ${accentText[accent]}`}
                    >
                      {num}
                    </span>
                    <div
                      className="inline-flex items-center justify-center w-10 h-10 border shrink-0 mt-1"
                      style={{ borderColor: accentColor[accent] }}
                    >
                      <Icon className="w-5 h-5" style={{ color: accentColor[accent] }} />
                    </div>
                  </div>
                  <h2 className={`font-display text-2xl sm:text-3xl mb-2 ${accentText[accent]}`}>{title}</h2>
                  <p className="text-cream/40 font-body text-sm italic">{tagline}</p>
                </div>

                {/* Right — items */}
                <div className="lg:col-span-7">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3.5">
                    {items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <CheckIcon className="w-4 h-4 shrink-0 mt-0.5" style={{ color: accentColor[accent] }} />
                        <span className="text-cream/60 font-body text-sm leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Pricing note ── */}
      <section className="border-t border-white/10 bg-white/[0.015]">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-16 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <p className="text-gold font-body text-xs font-bold tracking-[0.2em] uppercase mb-4">Transparent Pricing</p>
              <h2 className="font-display text-3xl sm:text-4xl text-cream mb-5">
                Pricing that works for<br />where you are
              </h2>
              <p className="text-cream/55 font-body text-base leading-relaxed">
                We believe every serious founder deserves access to strategic guidance. Our tiered pricing 
                and stackable discount schedule are built to remove financial barriers, not create them.
              </p>
            </div>
            <div className="lg:col-span-7 space-y-0 divide-y divide-white/10">
              {[
                { label: "Social Equity Entrepreneur (SEE)", desc: "Verified SEE designation discount applied at intake" },
                { label: "MWBE & DEI Discount", desc: "Certification or documented equity status required" },
                { label: "Service Bundle Savings", desc: "Combine services for compound discounts" },
                { label: "Early-Payment Discount", desc: "Pay in full upfront and save" },
              ].map(({ label, desc }) => (
                <div key={label} className="flex gap-5 py-5">
                  <CheckIcon className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <div>
                    <p className="text-cream font-body font-semibold text-sm">{label}</p>
                    <p className="text-cream/40 font-body text-xs mt-0.5">{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-cream">
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:pl-16 py-16 sm:py-20">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-8">
            <div>
              <h2 className="font-display text-3xl sm:text-4xl text-charcoal mb-2">
                Not sure which service fits?
              </h2>
              <p className="text-charcoal/55 font-body text-base">
                Book a no-pressure session and we'll map the right path together.
              </p>
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-charcoal text-cream font-body font-bold text-xs tracking-[0.15em] uppercase hover:bg-charcoal/85 transition-colors shrink-0 group"
            >
              Schedule a Conversation <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
