import TallyEmbed from "../components/TallyEmbed.jsx";
import { TALLY_FORMS } from "../lib/tally.js";
import { CircleCheckBig as CheckCircleIcon, Quote as QuoteIcon, Star as StarIcon } from "lucide-react";

export default function LeaveTestimonial() {
  return (
    <div className="bg-cream min-h-screen pt-20">

      {/* Hero */}
      <section className="border-b-4 border-charcoal relative overflow-hidden">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#2C2C2C 1px, transparent 1px), linear-gradient(90deg, #2C2C2C 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-4">Share Your Experience</p>
              <h1 className="font-display text-5xl sm:text-6xl text-charcoal font-black leading-[0.95]">
                Your story{" "}
                <em className="italic text-clay">matters.</em>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-charcoal/55 font-body text-base sm:text-lg leading-relaxed">
                Brooklyn founders build each other up. If working with Jane Verbatim made a difference 
                in your business, we'd love to hear about it — and so would the next founder in your shoes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Form */}
          <div className="lg:col-span-7">
            <TallyEmbed formId={TALLY_FORMS.testimonial} title="Share your story — testimonial form" minHeight={720} />
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-5 space-y-6">
            <div className="bg-charcoal border-2 border-charcoal p-8">
              <QuoteIcon className="w-8 h-8 text-clay mb-5 opacity-60" />
              <blockquote className="font-display text-xl text-cream font-bold leading-snug mb-4">
                "Vbouy has that rare ability to meet you exactly where you are."
              </blockquote>
              <p className="font-body text-cream/50 text-xs font-bold uppercase tracking-widest">Destiny M. — Bed-Stuy</p>
            </div>

            <div className="border-2 border-charcoal/15 p-7 space-y-4">
              <p className="font-body text-xs font-bold text-charcoal/40 uppercase tracking-widest">Why share?</p>
              {[
                { icon: StarIcon, text: "Help fellow Brooklyn founders find trusted guidance" },
                { icon: CheckCircleIcon, text: "Your experience is featured in our testimonials — reviewed first" },
                { icon: QuoteIcon, text: "Real stories build real community" },
              ].map(({ icon: Icon, text }, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Icon className="w-4 h-4 text-clay shrink-0 mt-0.5" />
                  <p className="font-body text-sm text-charcoal/60 leading-relaxed">{text}</p>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
