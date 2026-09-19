import { useState } from "react";
import TallyEmbed from "../components/TallyEmbed.jsx";
import { TALLY_FORMS } from "../lib/tally.js";
import { ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, Link as InstagramIcon, Mail as MailIcon, MapPin as MapPinIcon, Phone as PhoneIcon } from "lucide-react";

const CIA_SUMMARY = `By submitting this form, you acknowledge that:

• Jane Verbatim LLC will contact you to schedule a strategy session. No payment is required at this stage.

• If you proceed to engage Jane Verbatim LLC's services, you will be asked to sign a full Consulting & Independent Agreement (CIA) before work begins. That agreement covers scope of work, payment terms, confidentiality, intellectual property, and governing law (State of New York, Kings County).

• Any information you share in this form is kept confidential and used solely to prepare for your consultation.

• Jane Verbatim LLC operates as an independent for-profit consulting firm. The firm does not provide legal, accounting, or financial advice and recommends seeking licensed professionals for those needs.`;

export default function Contact() {
  const [showCIA, setShowCIA] = useState(false);

  return (
    <div className="bg-cream min-h-screen pt-20">

      {/* ── Hero ── */}
      <section className="relative overflow-hidden border-b-4 border-charcoal">
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
            <div className="space-y-6">
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
              <TallyEmbed formId={TALLY_FORMS.contact} title="Strategy session intake form" />
                <p className="text-charcoal/30 font-body text-xs">
                  We respond to every inquiry within one business day.
                </p>
            </div>
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
                    <a href="https://www.linkedin.com/in/janeverbatimllc" target="_blank" rel="noopener noreferrer" className="text-charcoal/50 font-body text-sm hover:text-clay transition-colors">Veranthoni Campbell</a>
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
