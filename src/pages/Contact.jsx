import { useState } from "react";
import MapPinIcon from "icon:map-pin";
import PhoneIcon from "icon:phone";
import MailIcon from "icon:mail";
import InstagramIcon from "icon:link";
import CheckCircleIcon from "icon:check-circle";
import ChevronDownIcon from "icon:chevron-down";
import ChevronUpIcon from "icon:chevron-up";
import { pb } from "../lib/pb.js";

const CIA_SUMMARY = `By submitting this form, you acknowledge that:

• Jane Verbatim LLC will contact you to schedule a strategy session. No payment is required at this stage.

• If you proceed to engage Jane Verbatim LLC's services, you will be asked to sign a full Consulting & Independent Agreement (CIA) before work begins. That agreement covers scope of work, payment terms, confidentiality, intellectual property, and governing law (State of New York, Kings County).

• Any information you share in this form is kept confidential and used solely to prepare for your consultation.

• Jane Verbatim LLC operates as an independent for-profit consulting firm. The firm does not provide legal, accounting, or financial advice and recommends seeking licensed professionals for those needs.`;

const neighborhoods = ["Bed-Stuy", "Crown Heights", "Flatbush", "East New York", "Other / Outside Brooklyn"];
const serviceOptions = [
  "Business Architecture & Formation",
  "Certifications & Equity Access (MWBE/SEE)",
  "Cannabis Compliance",
  "Brand Identity & Marketing",
  "Education & Professional Development",
  "Not sure yet — I'd like to discuss",
];

const inputClass = "w-full bg-charcoal/5 border-2 border-charcoal/20 text-charcoal font-body text-sm placeholder:text-charcoal/30 px-4 py-3 focus:outline-none focus:border-clay transition-colors";

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
  const [status, setStatus] = useState("idle");
  const [agreedToCIA, setAgreedToCIA] = useState(false);
  const [showCIA, setShowCIA] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!agreedToCIA) { return; }
    setStatus("submitting");
    try {
      await pb.collection("strategy_sessions").create(form);
      setStatus("success");
      setForm({ full_name: "", email: "", phone: "", business_name: "", neighborhood: "", service_interest: "", message: "" });
      setAgreedToCIA(false);
    } catch {
      setStatus("error");
    }
  }

  return (
    <div className="bg-cream min-h-screen pt-20">

      {/* ── Hero ── */}
      <section className="border-b-4 border-charcoal">
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.03] pointer-events-none"
          style={{
            backgroundImage: `linear-gradient(#2C2C2C 1px, transparent 1px), linear-gradient(90deg, #2C2C2C 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
        <div className="relative max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
          <div className="max-w-2xl">
            <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-4">Let's Connect</p>
            <h1 className="font-display text-5xl sm:text-6xl text-charcoal font-black leading-[0.95] mb-5">
              Schedule a{" "}
              <em className="italic text-clay">Strategy Session</em>
            </h1>
            <p className="text-charcoal/60 font-body text-lg leading-relaxed">
              Fill out the intake form and we'll follow up within one business day. 
              No commitment required — just a real conversation about your business.
            </p>
          </div>
        </div>
      </section>

      {/* ── Main ── */}
      <section className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14">

          {/* ── Form ── */}
          <div className="lg:col-span-3">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-16 px-8 bg-charcoal border-2 border-charcoal">
                <CheckCircleIcon className="w-14 h-14 text-clay mb-5" />
                <h2 className="font-display text-3xl text-cream font-black mb-3">You're on our radar.</h2>
                <p className="text-cream/60 font-body text-base leading-relaxed max-w-md">
                  Thank you for reaching out. We'll follow up within one business day to confirm your 
                  strategy session.
                </p>
                <p className="mt-5 text-cream/40 font-body text-sm">
                  Questions in the meantime?{" "}
                  <a href="mailto:jvllcnyc@pm.me" className="text-clay hover:underline">jvllcnyc@pm.me</a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Name + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-charcoal/60 font-body text-xs font-bold tracking-widest uppercase mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="full_name"
                      value={form.full_name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Smith"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal/60 font-body text-xs font-bold tracking-widest uppercase mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="you@example.com"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Phone + Business */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-charcoal/60 font-body text-xs font-bold tracking-widest uppercase mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="(718) 000-0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-charcoal/60 font-body text-xs font-bold tracking-widest uppercase mb-2">Business Name</label>
                    <input
                      type="text"
                      name="business_name"
                      value={form.business_name}
                      onChange={handleChange}
                      placeholder="My Business LLC"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Neighborhood */}
                <div>
                  <label className="block text-charcoal/60 font-body text-xs font-bold tracking-widest uppercase mb-2">Neighborhood</label>
                  <select
                    name="neighborhood"
                    value={form.neighborhood}
                    onChange={handleChange}
                    className={inputClass + " appearance-none"}
                  >
                    <option value="">Select your neighborhood…</option>
                    {neighborhoods.map((n) => (
                      <option key={n} value={n}>{n}</option>
                    ))}
                  </select>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-charcoal/60 font-body text-xs font-bold tracking-widest uppercase mb-2">Service Interest</label>
                  <select
                    name="service_interest"
                    value={form.service_interest}
                    onChange={handleChange}
                    className={inputClass + " appearance-none"}
                  >
                    <option value="">What can we help you with?</option>
                    {serviceOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-charcoal/60 font-body text-xs font-bold tracking-widest uppercase mb-2">Tell Us About Your Business</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="What stage is your business at? What's the biggest challenge you're facing right now?"
                    className={inputClass + " resize-none"}
                  />
                </div>

                {/* CIA Agreement acknowledgment */}
                <div className="border-2 border-charcoal/20">
                  <button
                    type="button"
                    onClick={() => setShowCIA(s => !s)}
                    className="w-full flex items-center justify-between px-4 py-3 hover:bg-charcoal/3 transition-colors"
                  >
                    <span className="font-body text-xs font-bold text-charcoal/50 uppercase tracking-widest">
                      Consulting Agreement Summary
                    </span>
                    {showCIA ? <ChevronUpIcon className="w-4 h-4 text-charcoal/40" /> : <ChevronDownIcon className="w-4 h-4 text-charcoal/40" />}
                  </button>
                  {showCIA && (
                    <div className="px-4 pb-4 border-t border-charcoal/10">
                      <pre className="font-body text-xs text-charcoal/60 leading-relaxed whitespace-pre-wrap mt-3">{CIA_SUMMARY}</pre>
                    </div>
                  )}
                </div>

                <label className="flex items-start gap-3 cursor-pointer group">
                  <div className="relative mt-0.5 shrink-0">
                    <input
                      type="checkbox"
                      checked={agreedToCIA}
                      onChange={e => setAgreedToCIA(e.target.checked)}
                      className="sr-only"
                    />
                    <div
                      className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${
                        agreedToCIA ? "bg-charcoal border-charcoal" : "border-charcoal/30 group-hover:border-charcoal"
                      }`}
                    >
                      {agreedToCIA && <CheckCircleIcon className="w-3 h-3 text-cream" />}
                    </div>
                  </div>
                  <span className="font-body text-xs text-charcoal/60 leading-relaxed">
                    I understand that submitting this form does not begin any paid engagement. If I choose to work with Jane Verbatim LLC, I will sign a full Consulting & Independent Agreement before work begins. <span className="text-clay">*</span>
                  </span>
                </label>

                {status === "error" && (
                  <p className="text-clay font-body text-sm bg-clay/10 border-2 border-clay/30 px-4 py-3">
                    Something went wrong. Please try again or email us at jvllcnyc@pm.me.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting" || !agreedToCIA}
                  className="px-8 py-4 bg-charcoal text-cream font-body font-bold text-xs tracking-widest uppercase hover:bg-clay disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  {status === "submitting" ? "Sending…" : "Submit Intake Form"}
                </button>

                <p className="text-charcoal/30 font-body text-xs">
                  We respond to every inquiry within one business day.
                </p>
              </form>
            )}
          </div>

          {/* ── Sidebar ── */}
          <aside className="lg:col-span-2 space-y-5">
            <div className="p-7 border-2 border-charcoal">
              <h3 className="font-display text-xl text-charcoal font-bold mb-5">Direct Contact</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <MapPinIcon className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                  <div>
                    <p className="text-charcoal font-body font-bold text-sm">Location</p>
                    <p className="text-charcoal/50 font-body text-sm">Brooklyn, New York</p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <PhoneIcon className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                  <div>
                    <p className="text-charcoal font-body font-bold text-sm">Phone</p>
                    <a href="tel:6802059814" className="text-charcoal/50 font-body text-sm hover:text-clay transition-colors">680-205-9814</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                  <div>
                    <p className="text-charcoal font-body font-bold text-sm">Email</p>
                    <a href="mailto:jvllcnyc@pm.me" className="text-charcoal/50 font-body text-sm hover:text-clay transition-colors">jvllcnyc@pm.me</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <InstagramIcon className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                  <div>
                    <p className="text-charcoal font-body font-bold text-sm">Instagram</p>
                    <a href="https://instagram.com/jane.verbatim.llc" target="_blank" rel="noopener noreferrer" className="text-charcoal/50 font-body text-sm hover:text-clay transition-colors">@jane.verbatim.llc</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <InstagramIcon className="w-5 h-5 text-clay shrink-0 mt-0.5" />
                  <div>
                    <p className="text-charcoal font-body font-bold text-sm">LinkedIn</p>
                    <a href="https://www.linkedin.com/in/janeverbatimllc" target="_blank" rel="noopener noreferrer" className="text-charcoal/50 font-body text-sm hover:text-clay transition-colors">Vbouy Campbell</a>
                    <span className="text-charcoal/25 font-body text-xs mx-1">·</span>
                    <a href="https://www.linkedin.com/company/jane-verbatim-llc/" target="_blank" rel="noopener noreferrer" className="text-charcoal/50 font-body text-sm hover:text-clay transition-colors">Jane Verbatim LLC</a>
                  </div>
                </li>
              </ul>
            </div>

            <div className="p-7 bg-charcoal border-2 border-charcoal">
              <h3 className="font-display text-lg text-cream font-bold mb-4">What to expect</h3>
              <ol className="space-y-3">
                {[
                  "Submit your intake form above",
                  "We'll reach out within one business day",
                  "Confirm your 45-minute strategy session",
                  "We map your path forward — together",
                ].map((step, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-display text-clay text-sm font-black shrink-0">{i + 1}.</span>
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
