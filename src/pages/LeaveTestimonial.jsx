import { useState } from "react";
import { pb } from "../lib/pb.js";
import CheckCircleIcon from "icon:check-circle";
import StarIcon from "icon:star";
import QuoteIcon from "icon:quote";

const neighborhoods = ["Bed-Stuy", "Crown Heights", "Flatbush", "East New York", "Other / Outside Brooklyn"];
const serviceOptions = [
  "Business Architecture & Formation",
  "Certifications & Equity Access (MWBE/SEE)",
  "Cannabis Compliance",
  "Brand Identity & Marketing",
  "Education & Professional Development",
  "Strategy Session",
  "Multiple Services",
];

const inputClass =
  "w-full bg-white border-2 border-charcoal/20 text-charcoal font-body text-sm placeholder:text-charcoal/30 px-4 py-3 focus:outline-none focus:border-clay transition-colors";

export default function LeaveTestimonial() {
  const [form, setForm] = useState({
    client_name: "",
    business_name: "",
    neighborhood: "",
    service: "",
    quote: "",
  });
  const [status, setStatus] = useState("idle");

  function set(e) {
    setForm((p) => ({ ...p, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await pb.collection("testimonials").create({
        client_name: form.client_name,
        business_name: form.business_name,
        neighborhood: form.neighborhood,
        service: form.service,
        quote: form.quote,
        featured: false,
      });
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

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
            {status === "success" ? (
              <div className="flex flex-col items-center text-center py-16 px-8 bg-charcoal border-2 border-charcoal">
                <CheckCircleIcon className="w-14 h-14 text-clay mb-5" />
                <h2 className="font-display text-3xl text-cream font-black mb-3">
                  Thank you — for real.
                </h2>
                <p className="text-cream/60 font-body text-base leading-relaxed max-w-md">
                  Your words help other Brooklyn founders take that next step. We appreciate you 
                  sharing your experience with the Jane Verbatim community.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-charcoal/50 font-body text-xs font-bold tracking-widest uppercase mb-2">
                      Your Name <span className="text-clay">*</span>
                    </label>
                    <input
                      type="text"
                      name="client_name"
                      value={form.client_name}
                      onChange={set}
                      required
                      placeholder="First name or full name"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal/50 font-body text-xs font-bold tracking-widest uppercase mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      name="business_name"
                      value={form.business_name}
                      onChange={set}
                      placeholder="Your business (optional)"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-charcoal/50 font-body text-xs font-bold tracking-widest uppercase mb-2">
                      Neighborhood
                    </label>
                    <select
                      name="neighborhood"
                      value={form.neighborhood}
                      onChange={set}
                      className={inputClass + " appearance-none"}
                    >
                      <option value="">Select your area…</option>
                      {neighborhoods.map((n) => (
                        <option key={n} value={n}>{n}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-charcoal/50 font-body text-xs font-bold tracking-widest uppercase mb-2">
                      Service You Used
                    </label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={set}
                      className={inputClass + " appearance-none"}
                    >
                      <option value="">Which service?</option>
                      {serviceOptions.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-charcoal/50 font-body text-xs font-bold tracking-widest uppercase mb-2">
                    Your Testimonial <span className="text-clay">*</span>
                  </label>
                  <textarea
                    name="quote"
                    value={form.quote}
                    onChange={set}
                    required
                    rows={6}
                    placeholder="Tell us about your experience working with Jane Verbatim LLC. What changed for you or your business?"
                    className={inputClass + " resize-none"}
                  />
                  <p className="mt-1.5 text-charcoal/30 font-body text-xs">
                    Be as specific as you'd like — details help other founders understand what to expect.
                  </p>
                </div>

                {status === "error" && (
                  <p className="text-red-600 font-body text-sm bg-red-50 border-2 border-red-200 px-4 py-3">
                    Something went wrong. Please try again.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="px-8 py-4 bg-charcoal text-cream font-body font-bold text-xs tracking-widest uppercase hover:bg-clay disabled:opacity-60 transition-colors"
                >
                  {status === "submitting" ? "Submitting…" : "Submit My Testimonial"}
                </button>
              </form>
            )}
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
