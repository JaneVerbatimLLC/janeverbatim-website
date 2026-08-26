import { useState } from "react";
import MapPinIcon from "icon:map-pin";
import PhoneIcon from "icon:phone";
import MailIcon from "icon:mail";
import InstagramIcon from "icon:link";
import CheckCircleIcon from "icon:check-circle";
import { pb } from "../lib/pb.js";

const neighborhoods = ["Bed-Stuy", "Crown Heights", "Flatbush", "East New York", "Other / Outside Brooklyn"];
const serviceOptions = [
  "Business Architecture & Formation",
  "Certifications & Equity Access (MWBE/SEE)",
  "Cannabis Compliance",
  "Brand Identity & Marketing",
  "Education & Professional Development",

  "Not sure yet — I'd like to discuss",
];

export default function Contact() {
  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    business_name: "",
    neighborhood: "",
    service_interest: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // idle | submitting | success | error

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("submitting");
    try {
      await pb.collection("strategy_sessions").create(form);
      setStatus("success");
      setForm({ full_name: "", email: "", phone: "", business_name: "", neighborhood: "", service_interest: "", message: "" });
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-charcoal min-h-screen pt-20">
      {/* Hero */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 py-16 sm:py-24">
        <div className="max-w-2xl">
          <p className="text-clay font-body text-xs font-semibold tracking-widest uppercase mb-4">Let's Connect</p>
          <h1 className="font-display text-5xl sm:text-6xl text-cream leading-tight mb-5">
            Schedule a{" "}
            <em className="italic text-clay">Strategy Session</em>
          </h1>
          <p className="text-cream/60 font-body text-lg leading-relaxed">
            Fill out the intake form and we'll follow up within one business day to confirm your session. 
            No commitment required — just a real conversation about your business and where you want to take it.
          </p>
        </div>
      </section>

      {/* Main */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 pb-20 sm:pb-28">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">
          {/* Form */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-white/[0.03] border border-sage/30 rounded-sm">
                <CheckCircleIcon className="w-14 h-14 text-sage mb-5" />
                <h2 className="font-display text-3xl text-cream mb-3">You're on our radar.</h2>
                <p className="text-cream/60 font-body text-base leading-relaxed max-w-md">
                  Thank you for reaching out. We'll follow up within one business day to confirm your 
                  strategy session. We look forward to talking with you.
                </p>
                <p className="mt-5 text-cream/40 font-body text-sm">
                  Questions in the meantime? Reach us at{" "}
                  <a href="mailto:jvllcnyc@pm.me" className="text-clay hover:underline">jvllcnyc@pm.me</a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-cream/60 font-body text-xs font-semibold tracking-wider uppercase mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="full_name"
                      value={form.full_name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className="w-full bg-white/[0.05] border border-white/15 text-cream font-body text-sm placeholder:text-cream/30 rounded-sm px-4 py-3 focus:outline-none focus:border-clay/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-cream/60 font-body text-xs font-semibold tracking-wider uppercase mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className="w-full bg-white/[0.05] border border-white/15 text-cream font-body text-sm placeholder:text-cream/30 rounded-sm px-4 py-3 focus:outline-none focus:border-clay/60 transition-colors"
                    />
                  </div>
                </div>

                {/* Phone + Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-cream/60 font-body text-xs font-semibold tracking-wider uppercase mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(718) 000-0000"
                      className="w-full bg-white/[0.05] border border-white/15 text-cream font-body text-sm placeholder:text-cream/30 rounded-sm px-4 py-3 focus:outline-none focus:border-clay/60 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-cream/60 font-body text-xs font-semibold tracking-wider uppercase mb-2">Business Name</label>
                    <input
                      type="text"
                      name="business_name"
                      value={form.business_name}
                      onChange={handleChange}
                      placeholder="My Business LLC"
                      className="w-full bg-white/[0.05] border border-white/15 text-cream font-body text-sm placeholder:text-cream/30 rounded-sm px-4 py-3 focus:outline-none focus:border-clay/60 transition-colors"
                    />
                  </div>
                </div>

                {/* Neighborhood */}
                <div>
                  <label className="block text-cream/60 font-body text-xs font-semibold tracking-wider uppercase mb-2">Neighborhood</label>
                  <select
                    name="neighborhood"
                    value={form.neighborhood}
                    onChange={handleChange}
                    className="w-full bg-white/[0.05] border border-white/15 text-cream font-body text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-clay/60 transition-colors appearance-none"
                  >
                    <option value="" className="bg-charcoal">Select your neighborhood…</option>
                    {neighborhoods.map((n) => (
                      <option key={n} value={n} className="bg-charcoal">{n}</option>
                    ))}
                  </select>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-cream/60 font-body text-xs font-semibold tracking-wider uppercase mb-2">Service Interest</label>
                  <select
                    name="service_interest"
                    value={form.service_interest}
                    onChange={handleChange}
                    className="w-full bg-white/[0.05] border border-white/15 text-cream font-body text-sm rounded-sm px-4 py-3 focus:outline-none focus:border-clay/60 transition-colors appearance-none"
                  >
                    <option value="" className="bg-charcoal">What can we help you with?</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s} className="bg-charcoal">{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-cream/60 font-body text-xs font-semibold tracking-wider uppercase mb-2">Tell Us About Your Business</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What stage is your business at? What's the biggest challenge you're facing right now?"
                    className="w-full bg-white/[0.05] border border-white/15 text-cream font-body text-sm placeholder:text-cream/30 rounded-sm px-4 py-3 focus:outline-none focus:border-clay/60 transition-colors resize-none"
                  />
                </div>

                {status === "error" && (
                  <p className="text-clay font-body text-sm bg-clay/10 border border-clay/30 rounded-sm px-4 py-3">
                    Something went wrong. Please try again or email us directly at jvllcnyc@pm.me.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="w-full sm:w-auto px-8 py-4 bg-clay text-cream font-body font-semibold text-sm rounded-sm hover:bg-clay/85 disabled:opacity-60 disabled:cursor-not-allowed transition-colors"
                >
                  {status === "submitting" ? "Sending…" : "Submit Intake Form"}
                </button>

                <p className="text-cream/30 font-body text-xs mt-2">
                  We respond to every inquiry within one business day.
                </p>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <aside className="lg:col-span-2 space-y-6">
            <div className="p-7 bg-white/[0.03] border border-white/15 rounded-sm">
              <h3 className="font-display text-xl text-cream mb-5">Direct Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                  <div>
                    <p className="text-cream font-body font-semibold text-sm">Location</p>
                    <p className="text-cream/50 font-body text-sm">Brooklyn, New York</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneIcon className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                  <div>
                    <p className="text-cream font-body font-semibold text-sm">Phone</p>
                    <a href="tel:6802059814" className="text-cream/50 font-body text-sm hover:text-clay transition-colors">680-205-9814</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                  <div>
                    <p className="text-cream font-body font-semibold text-sm">Email</p>
                    <a href="mailto:jvllcnyc@pm.me" className="text-cream/50 font-body text-sm hover:text-clay transition-colors">jvllcnyc@pm.me</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <InstagramIcon className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                  <div>
                    <p className="text-cream font-body font-semibold text-sm">Instagram</p>
                    <a href="https://instagram.com/jane.verbatim.llc" target="_blank" rel="noopener noreferrer" className="text-cream/50 font-body text-sm hover:text-clay transition-colors">@jane.verbatim.llc</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-7 bg-clay/10 border border-clay/25 rounded-sm">
              <h3 className="font-display text-lg text-cream mb-3">What to expect</h3>
              <ol className="space-y-3">
                {[
                  "Submit your intake form above",
                  "We'll reach out within one business day",
                  "We confirm your 45-minute strategy session",
                  "We map your path forward — together",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-display text-clay text-sm font-bold shrink-0">{i + 1}.</span>
                    <span className="text-cream/60 font-body text-sm">{step}</span>
                  </li>
                ))}
              </ol>
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
