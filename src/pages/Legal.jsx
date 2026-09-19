import { useState } from "react";
import { Link } from "react-router";
import { ChevronDown as ChevronDownIcon, ChevronUp as ChevronUpIcon, FileText as FileTextIcon, Landmark as BuildingIcon, Lock as LockIcon, Shield as ShieldIcon } from "lucide-react";

const SECTIONS = [
  {
    id: "credentials",
    icon: BuildingIcon,
    label: "Business Credentials",
    color: "clay",
    content: null, // rendered separately
  },
  {
    id: "cia",
    icon: FileTextIcon,
    label: "Consulting & Independent Agreement (CIA)",
    color: "sage",
    content: `CONSULTING & INDEPENDENT AGREEMENT
Jane Verbatim LLC — Brooklyn, New York
Agreement Version: Standard  |  Effective: 2026

────────────────────────────────────────

PARTIES

Service Provider: Jane Verbatim LLC ("JVLLC" or "Consultant"), a for-profit limited liability company organized under the laws of the State of New York, led by Veranthoni "Vbouy" Campbell.

Client: The individual or entity that executes this Agreement with Jane Verbatim LLC ("Client").

────────────────────────────────────────

1. SCOPE OF SERVICES

Consultant agrees to provide small business management consulting services as outlined in a separate Statement of Work or as mutually agreed upon during the initial strategy session. Services may include, but are not limited to: business architecture and formation guidance, brand identity development, MWBE/SEE certification support, cannabis regulatory compliance training, social media strategy, instructional design, and professional development advising.

A Statement of Work (SOW) may be issued separately and, once signed by both parties, becomes part of this Agreement.

────────────────────────────────────────

2. INDEPENDENT CONTRACTOR STATUS

Client acknowledges that Consultant operates as an independent contractor and not as an employee, partner, joint venturer, or agent of Client. Consultant retains the right to perform services for other clients during the term of this Agreement, provided that such services do not create a material conflict of interest with Client's engagement.

────────────────────────────────────────

3. COMPENSATION & PAYMENT TERMS

(a) Fees for services shall be as mutually agreed in writing prior to commencement of work and documented in the applicable Statement of Work or invoice.

(b) Invoices are due within fourteen (14) calendar days of issuance unless otherwise specified in writing.

(c) Late payments are subject to a 1.5% monthly service charge applied to the outstanding balance.

(d) Jane Verbatim LLC reserves the right to pause active service delivery on accounts that are thirty (30) or more days past due, without liability for project delays caused by the pause.

(e) Eligible clients may qualify for stackable discounts including Social Equity Entrepreneur (SEE), DEI, bundle, and early-payment rates. Discount eligibility is confirmed at the time of engagement.

────────────────────────────────────────

4. CONFIDENTIALITY

(a) Consultant agrees to keep confidential all proprietary business information, trade secrets, financial data, and non-public strategies shared by Client in the course of the engagement.

(b) Client agrees to keep confidential all methodologies, frameworks, proprietary tools, and materials provided by Consultant, including but not limited to the "Build vs. Become" advisory framework and any associated deliverables.

(c) Confidentiality obligations survive termination of this Agreement for a period of three (3) years.

(d) These obligations do not apply to information that: (i) is or becomes publicly available through no breach of this Agreement; (ii) was already known to the receiving party; or (iii) is required to be disclosed by law or court order.

────────────────────────────────────────

5. INTELLECTUAL PROPERTY

(a) All frameworks, templates, methodologies, and proprietary systems developed by Jane Verbatim LLC—including the "Build vs. Become" framework—remain the sole intellectual property of Jane Verbatim LLC.

(b) Custom deliverables created specifically for Client (including logo packages, business plans, brand guides, and content calendars) become the property of Client upon receipt of full payment for those deliverables.

(c) JVLLC is granted a non-exclusive, perpetual, royalty-free license to display Client's completed deliverables in its portfolio, case studies, grant applications, and marketing materials, unless Client expressly opts out in writing.

────────────────────────────────────────

6. BRAND STANDARDS (where applicable)

Where JVLLC produces brand identity assets for Client, all materials incorporating those assets—including but not limited to printed goods, apparel, digital graphics, and third-party productions—must use the approved brand identity files and must receive written approval from JVLLC prior to production or public use. This requirement applies to all vendors, printers, and third parties engaged on Client's behalf.

────────────────────────────────────────

7. LIMITATION OF LIABILITY

(a) Jane Verbatim LLC's total liability under this Agreement shall not exceed the total fees paid by Client in the ninety (90) days immediately preceding the claim giving rise to liability.

(b) Consultant is not liable for indirect, consequential, incidental, special, or punitive damages, including loss of revenue, loss of profits, or loss of data, even if advised of the possibility of such damages.

(c) Jane Verbatim LLC does not provide legal, accounting, tax, or licensed financial advice. Clients are advised to consult licensed professionals for those needs.

────────────────────────────────────────

8. TERM & TERMINATION

(a) This Agreement begins on the date both parties execute it and continues until the completion of the agreed services, unless terminated earlier.

(b) Either party may terminate this Agreement with fourteen (14) days' written notice to the other party.

(c) Upon termination, Client shall pay for all work completed and expenses incurred through the termination date.

(d) Consultant shall deliver all completed deliverables to Client upon receipt of final payment.

(e) Confidentiality and intellectual property obligations survive termination.

────────────────────────────────────────

9. GOVERNING LAW & DISPUTE RESOLUTION

This Agreement shall be governed by and construed in accordance with the laws of the State of New York, without regard to conflict of law principles. Any disputes arising under this Agreement shall be resolved in Kings County, New York. The prevailing party in any dispute shall be entitled to recover reasonable attorneys' fees and costs.

────────────────────────────────────────

10. ENTIRE AGREEMENT

This Agreement, together with any attached Statement of Work or invoice, constitutes the entire agreement between the parties with respect to its subject matter and supersedes all prior negotiations, representations, warranties, or agreements, oral or written.

────────────────────────────────────────

SIGNATURES

By signing below, both parties confirm they have read, understood, and agree to be bound by the terms of this Consulting & Independent Agreement.

Veranthoni "Vbouy" Campbell — Jane Verbatim LLC
Date: ____________________    Signature: ____________________

Client Name: ____________________
Business Name: ____________________
Date: ____________________    Signature: ____________________

────────────────────────────────────────
Jane Verbatim LLC  |  Brooklyn, New York  |  jvllcnyc@pm.me  |  680-205-9814
EIN: 39-5158843  |  NY LLC DOS ID: 7528621  |  D-U-N-S: 13-677-7236  |  SAM.gov UEI: SPAJDNMXJ1M1`,
  },
  {
    id: "privacy",
    icon: ShieldIcon,
    label: "Privacy & Data Policy",
    color: "teal",
    content: `PRIVACY & DATA POLICY
Jane Verbatim LLC — Brooklyn, New York
Last updated: August 2026

────────────────────────────────────────

INFORMATION WE COLLECT

When you submit an inquiry or book a strategy session through this website, we collect the information you provide: your name, business name, email address, phone number, neighborhood, and a description of your business needs. We also collect testimonials you choose to submit.

────────────────────────────────────────

HOW WE USE YOUR INFORMATION

Your information is used solely to:
• Respond to your inquiry and schedule consultations
• Prepare for and conduct your strategy session
• Follow up regarding the services you expressed interest in
• Display testimonials you voluntarily submit (with your consent)

We do not sell, rent, or share your information with third parties for marketing purposes.

────────────────────────────────────────

DATA RETENTION

Inquiry and session information is retained for as long as necessary to serve you and comply with applicable law. You may request deletion of your information at any time by contacting us at jvllcnyc@pm.me.

────────────────────────────────────────

CONTACT

Jane Verbatim LLC
Brooklyn, New York
jvllcnyc@pm.me  |  680-205-9814`,
  },
];

const CREDENTIALS = [
  { label: "Legal Name", value: "Jane Verbatim LLC" },
  { label: "State of Formation", value: "New York" },
  { label: "Entity Type", value: "Limited Liability Company (LLC)" },
  { label: "Federal EIN", value: "39-5158843" },
  { label: "NY LLC DOS ID", value: "7528621" },
  { label: "D-U-N-S Number", value: "13-677-7236" },
  { label: "SAM.gov UEI", value: "SPAJDNMXJ1M1" },
  { label: "Principal Office", value: "Brooklyn, New York" },
  { label: "Founder", value: 'Veranthoni "Vbouy" Campbell' },
  { label: "Contact", value: "jvllcnyc@pm.me  ·  680-205-9814" },
];

function Accordion({ section }) {
  const [open, setOpen] = useState(section.id === "credentials");
  const Icon = section.icon;

  const accentMap = {
    clay: "border-clay text-clay",
    sage: "border-sage text-sage",
    teal: "border-teal text-teal",
    gold: "border-gold text-gold",
  };
  const accent = accentMap[section.color] || "border-charcoal text-charcoal";

  return (
    <div className={`border-2 transition-colors ${open ? "border-charcoal" : "border-charcoal/15 hover:border-charcoal/40"}`}>
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-6 py-5 text-left group"
      >
        <div className="flex items-center gap-4">
          <div className={`w-9 h-9 border-2 flex items-center justify-center shrink-0 ${accent}`}>
            <Icon className="w-4 h-4" />
          </div>
          <span className="font-display font-bold text-charcoal text-lg sm:text-xl group-hover:text-clay transition-colors">
            {section.label}
          </span>
        </div>
        {open
          ? <ChevronUpIcon className="w-5 h-5 text-charcoal/40 shrink-0" />
          : <ChevronDownIcon className="w-5 h-5 text-charcoal/30 shrink-0" />}
      </button>

      {open && (
        <div className="px-6 pb-8 border-t border-charcoal/10 pt-6">
          {section.id === "credentials" ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
              {CREDENTIALS.map(({ label, value, note }) => (
                <div key={label} className="border-b border-charcoal/8 py-4 pr-6 flex flex-col gap-0.5">
                  <p className="font-body text-xs font-bold text-charcoal/35 uppercase tracking-widest">{label}</p>
                  <p className="font-body text-sm font-bold text-charcoal">{value}</p>
                  {note && <p className="font-body text-xs text-charcoal/35 italic">{note}</p>}
                </div>
              ))}
            </div>
          ) : (
            <pre className="font-body text-sm text-charcoal/65 leading-relaxed whitespace-pre-wrap">
              {section.content}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}

export default function Legal() {
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
              <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-4">Transparency & Trust</p>
              <h1 className="font-display text-5xl sm:text-6xl text-charcoal font-black leading-[0.95]">
                Legal &{" "}
                <em className="italic text-clay">Credentials</em>
              </h1>
            </div>
            <div className="lg:col-span-5">
              <p className="text-charcoal/55 font-body text-base sm:text-lg leading-relaxed">
                Jane Verbatim LLC operates as a fully registered, for-profit business consulting firm. 
                Our credentials, agreements, and policies are published here so every client 
                can engage with complete confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-24 space-y-4">
        {SECTIONS.map(section => (
          <Accordion key={section.id} section={section} />
        ))}

        {/* NDA note */}
        <div className="border-2 border-dashed border-charcoal/20 px-6 py-8 mt-8">
          <div className="flex items-start gap-4">
            <LockIcon className="w-5 h-5 text-gold mt-0.5 shrink-0" />
            <div>
              <h3 className="font-display font-bold text-charcoal text-lg mb-2">
                Non-Disclosure Agreement (NDA)
              </h3>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-3">
                Jane Verbatim LLC takes client confidentiality seriously — our standard 
                Consulting & Independent Agreement already includes mutual confidentiality obligations 
                that protect both parties for three years. For clients sharing particularly sensitive 
                proprietary information (trade secrets, pre-launch products, unreleased financials), 
                a standalone NDA provides an additional layer of formal protection.
              </p>
              <p className="font-body text-sm text-charcoal/60 leading-relaxed mb-4">
                If you'd like a mutual NDA executed before your strategy session, just let us know 
                when you submit your intake form or reach out directly — we'll have one ready to sign 
                before your first meeting.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-charcoal text-cream font-body font-bold text-xs tracking-widest uppercase hover:bg-clay transition-colors"
              >
                Request an NDA →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
