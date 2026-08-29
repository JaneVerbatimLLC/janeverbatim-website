import { useState, useRef, useEffect } from "react";
import { useParams, Link } from "react-router";
import { pb } from "../lib/pb.js";
import CheckCircleIcon from "icon:check-circle";
import PenIcon from "icon:pen-line";
import XIcon from "icon:x";
import LockIcon from "icon:lock";

const CIA_TEXT = `CONSULTING & INDEPENDENT AGREEMENT
Jane Verbatim LLC — Brooklyn, New York
EIN: 39-5158843  ·  NY LLC DOS ID: 7528621

This Consulting & Independent Agreement ("Agreement") is entered into as of the date of signature below between Jane Verbatim LLC ("Consultant"), a for-profit limited liability company organized under the laws of the State of New York, led by Veranthoni "Vbouy" Campbell, and the undersigned Client.

────────────────────────────────────────

1. SCOPE OF SERVICES
Consultant agrees to provide small business management consulting services as outlined in a separate Statement of Work or as mutually agreed upon during the initial strategy session. Services may include, but are not limited to: business architecture and formation guidance, brand identity development, MWBE/SEE certification support, cannabis regulatory compliance training, social media strategy, and professional development advising.

2. INDEPENDENT CONTRACTOR STATUS
Client acknowledges that Consultant operates as an independent contractor and not as an employee, partner, joint venturer, or agent of Client. Consultant retains the right to perform services for other clients during the term of this Agreement, provided that such services do not create a material conflict of interest.

3. COMPENSATION & PAYMENT TERMS
(a) Fees for services shall be as mutually agreed in writing prior to commencement and documented in the applicable Statement of Work or invoice.
(b) Invoices are due within fourteen (14) calendar days of issuance unless otherwise specified in writing.
(c) Late payments are subject to a 1.5% monthly service charge applied to the outstanding balance.
(d) Jane Verbatim LLC reserves the right to pause active service delivery on accounts thirty (30) or more days past due, without liability for project delays caused by the pause.
(e) Eligible clients may qualify for stackable discounts including Social Equity Entrepreneur (SEE), DEI, bundle, and early-payment rates. Discount eligibility is confirmed at the time of engagement.

4. CONFIDENTIALITY
(a) Consultant agrees to keep confidential all proprietary business information, trade secrets, financial data, and non-public strategies shared by Client in the course of the engagement.
(b) Client agrees to keep confidential all methodologies, frameworks, proprietary tools, and materials provided by Consultant, including but not limited to the "Build vs. Become" advisory framework and any associated deliverables.
(c) Confidentiality obligations survive termination of this Agreement for a period of three (3) years.
(d) These obligations do not apply to information that: (i) is or becomes publicly available through no breach of this Agreement; (ii) was already known to the receiving party; or (iii) is required to be disclosed by law or court order.

5. INTELLECTUAL PROPERTY
(a) All frameworks, templates, methodologies, and proprietary systems developed by Jane Verbatim LLC remain the sole intellectual property of Jane Verbatim LLC.
(b) Custom deliverables created specifically for Client (including logo packages, business plans, brand guides, and content calendars) become the property of Client upon receipt of full payment for those deliverables.
(c) JVLLC is granted a non-exclusive, perpetual, royalty-free license to display Client's completed deliverables in its portfolio and marketing materials, unless Client expressly opts out in writing.

6. BRAND STANDARDS (where applicable)
Where JVLLC produces brand identity assets for Client, all materials incorporating those assets must use the approved brand identity files and must receive written approval from JVLLC prior to production or public use.

7. LIMITATION OF LIABILITY
(a) Jane Verbatim LLC's total liability under this Agreement shall not exceed the total fees paid by Client in the ninety (90) days immediately preceding the claim.
(b) Consultant is not liable for indirect, consequential, incidental, special, or punitive damages.
(c) Jane Verbatim LLC does not provide legal, accounting, tax, or licensed financial advice.

8. TERM & TERMINATION
(a) Either party may terminate this Agreement with fourteen (14) days' written notice.
(b) Upon termination, Client shall pay for all work completed and expenses incurred through the termination date.
(c) Consultant shall deliver all completed deliverables to Client upon receipt of final payment.
(d) Confidentiality and intellectual property obligations survive termination.

9. GOVERNING LAW & DISPUTE RESOLUTION
This Agreement shall be governed by the laws of the State of New York. Any disputes shall be resolved in Kings County, New York. The prevailing party in any dispute shall be entitled to recover reasonable attorneys' fees and costs.

10. ENTIRE AGREEMENT
This Agreement, together with any attached Statement of Work, constitutes the entire agreement between the parties and supersedes all prior negotiations, representations, or agreements, oral or written.

────────────────────────────────────────
Jane Verbatim LLC  ·  Brooklyn, NY  ·  jvllcnyc@pm.me  ·  680-205-9814`;

const NDA_TEXT = `MUTUAL NON-DISCLOSURE AGREEMENT
Jane Verbatim LLC — Brooklyn, New York
EIN: 39-5158843  ·  NY LLC DOS ID: 7528621

This Mutual Non-Disclosure Agreement ("NDA") is entered into as of the date of signature below between Jane Verbatim LLC ("JVLLC"), a for-profit limited liability company organized under the laws of the State of New York, led by Veranthoni "Vbouy" Campbell, and the undersigned party ("Recipient").

────────────────────────────────────────

1. PURPOSE
The parties desire to explore a potential business relationship or consulting engagement. In connection with that exploration, each party may disclose to the other certain confidential and proprietary information. This Agreement governs the treatment of all such information.

2. DEFINITION OF CONFIDENTIAL INFORMATION
"Confidential Information" means any non-public information disclosed by one party ("Disclosing Party") to the other ("Receiving Party"), in any form, that is designated as confidential or that reasonably should be understood to be confidential given the nature of the information and the circumstances of disclosure. This includes, but is not limited to:
• Business plans, strategies, financial data, and projections
• Proprietary methodologies, frameworks, and advisory systems (including the "Build vs. Become" framework)
• Client lists, referral relationships, and partnership arrangements
• Product or service concepts, brand identities, and unreleased materials
• Trade secrets and know-how

3. OBLIGATIONS OF THE RECEIVING PARTY
Each Receiving Party agrees to:
(a) Hold the Disclosing Party's Confidential Information in strict confidence.
(b) Not disclose, copy, reproduce, or distribute Confidential Information to any third party without the Disclosing Party's prior written consent.
(c) Use the Confidential Information solely for the purpose of evaluating or carrying out the parties' business relationship.
(d) Limit access to the Confidential Information to those of its employees, agents, or advisors who have a need to know and who are bound by confidentiality obligations at least as protective as those in this Agreement.

4. EXCLUSIONS
These obligations do not apply to information that:
(a) Is or becomes publicly available through no fault of the Receiving Party.
(b) Was already known to the Receiving Party prior to disclosure, as evidenced by written records.
(c) Is independently developed by the Receiving Party without use of or reference to the Confidential Information.
(d) Is required to be disclosed by law, regulation, or court order — provided the Receiving Party gives the Disclosing Party prompt written notice and cooperates in seeking a protective order.

5. TERM
This Agreement shall remain in effect for three (3) years from the date of signature. The obligations of confidentiality survive the expiration or termination of any consulting engagement between the parties.

6. RETURN OR DESTRUCTION
Upon written request, the Receiving Party shall promptly return or destroy all Confidential Information received from the Disclosing Party, and certify in writing that it has done so.

7. NO LICENSE
Nothing in this Agreement grants either party any license, ownership right, or other intellectual property interest in the Confidential Information of the other party.

8. REMEDIES
Each party acknowledges that any breach of this Agreement may cause irreparable harm for which monetary damages would be an inadequate remedy. In the event of a breach or threatened breach, the non-breaching party shall be entitled to seek equitable relief, including injunction and specific performance, in addition to any other remedies available at law or in equity.

9. GOVERNING LAW
This Agreement shall be governed by the laws of the State of New York. Any disputes shall be resolved in Kings County, New York.

10. ENTIRE AGREEMENT
This NDA constitutes the entire agreement between the parties with respect to its subject matter and supersedes all prior communications regarding confidentiality.

────────────────────────────────────────
Jane Verbatim LLC  ·  Brooklyn, NY  ·  jvllcnyc@pm.me  ·  680-205-9814`;

function SignaturePad({ onSigned, label }) {
  const canvasRef = useRef(null);
  const [drawing, setDrawing] = useState(false);
  const [hasSig, setHasSig] = useState(false);

  function getPos(e, canvas) {
    const rect = canvas.getBoundingClientRect();
    const src = e.touches ? e.touches[0] : e;
    return {
      x: (src.clientX - rect.left) * (canvas.width / rect.width),
      y: (src.clientY - rect.top) * (canvas.height / rect.height),
    };
  }

  function startDraw(e) {
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(...Object.values(getPos(e, canvas)));
    setDrawing(true);
  }

  function draw(e) {
    if (!drawing) return;
    e.preventDefault();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const pos = getPos(e, canvas);
    ctx.lineTo(pos.x, pos.y);
    ctx.strokeStyle = "#2C2C2C";
    ctx.lineWidth = 2.5;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.stroke();
    setHasSig(true);
  }

  function endDraw() {
    setDrawing(false);
    if (hasSig) onSigned(canvasRef.current.toDataURL());
  }

  function clear() {
    const canvas = canvasRef.current;
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height);
    setHasSig(false);
    onSigned(null);
  }

  return (
    <div className="space-y-2">
      <p className="font-body text-xs font-bold text-charcoal/50 uppercase tracking-widest">{label}</p>
      <div className="relative border-2 border-charcoal bg-white" style={{ touchAction: "none" }}>
        <canvas
          ref={canvasRef}
          width={600}
          height={140}
          className="w-full h-28 cursor-crosshair block"
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={endDraw}
        />
        <div className="absolute bottom-2 left-4 right-4 border-t border-charcoal/20 pointer-events-none" />
        <div className="absolute bottom-3 left-4 text-charcoal/20 font-body text-xs pointer-events-none select-none">Sign here</div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-charcoal/35 font-body text-xs">Draw with mouse or finger</p>
        {hasSig && (
          <button type="button" onClick={clear} className="text-clay font-body text-xs underline hover:no-underline flex items-center gap-1">
            <XIcon className="w-3 h-3" /> Clear
          </button>
        )}
      </div>
    </div>
  );
}

export default function SignAgreement() {
  const { token } = useParams();
  const [record, setRecord] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  const [ciaSig, setCiaSig] = useState(null);
  const [ndaSig, setNdaSig] = useState(null);
  const [ciaAgreed, setCiaAgreed] = useState(false);
  const [ndaAgreed, setNdaAgreed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!token) { setNotFound(true); setLoading(false); return; }
    pb.collection("client_agreements")
      .getFirstListItem(`signing_token="${token}"`)
      .then(r => setRecord(r))
      .catch(() => setNotFound(true))
      .finally(() => setLoading(false));
  }, [token]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError("");
    const needsCIA = record.agreement_type === "CIA" || record.agreement_type === "CIA+NDA";
    const needsNDA = record.agreement_type === "NDA" || record.agreement_type === "CIA+NDA";
    if (needsCIA && !ciaSig) { setError("Please draw your signature on the Consulting Agreement above."); return; }
    if (needsCIA && !ciaAgreed) { setError("Please confirm you agree to the Consulting Agreement terms."); return; }
    if (needsNDA && !ndaSig) { setError("Please draw your signature on the Non-Disclosure Agreement above."); return; }
    if (needsNDA && !ndaAgreed) { setError("Please confirm you agree to the NDA terms."); return; }
    setSubmitting(true);
    try {
      const now = new Date().toISOString();
      await pb.collection("client_agreements").update(record.id, {
        cia_signed: needsCIA ? true : record.cia_signed,
        nda_signed: needsNDA ? true : record.nda_signed,
        cia_signature: ciaSig || record.cia_signature || "",
        nda_signature: ndaSig || record.nda_signature || "",
        cia_signed_at: needsCIA ? now : record.cia_signed_at || "",
        nda_signed_at: needsNDA ? now : record.nda_signed_at || "",
        status: "completed",
      });
      setDone(true);
    } catch {
      setError("Something went wrong. Please try again or contact jvllcnyc@pm.me.");
    } finally {
      setSubmitting(false);
    }
  }

  if (loading) {
    return (
      <div className="bg-cream min-h-screen flex items-center justify-center pt-20">
        <p className="font-body text-charcoal/40 text-sm">Loading your agreement…</p>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="bg-cream min-h-screen flex flex-col items-center justify-center pt-20 px-5 text-center">
        <div className="w-12 h-12 bg-charcoal/10 flex items-center justify-center mb-6">
          <LockIcon className="w-6 h-6 text-charcoal/40" />
        </div>
        <h1 className="font-display text-3xl text-charcoal font-black mb-3">Link Not Found</h1>
        <p className="font-body text-charcoal/50 text-base max-w-sm mb-6">
          This agreement link is invalid or has expired. Please contact Jane Verbatim LLC for a new link.
        </p>
        <a href="mailto:jvllcnyc@pm.me" className="text-clay font-body text-sm hover:underline">jvllcnyc@pm.me</a>
      </div>
    );
  }

  if (done || record.status === "completed") {
    return (
      <div className="bg-cream min-h-screen flex flex-col items-center justify-center pt-20 px-5 text-center">
        <div className="w-14 h-14 bg-sage flex items-center justify-center mb-6">
          <CheckCircleIcon className="w-7 h-7 text-cream" />
        </div>
        <h1 className="font-display text-4xl text-charcoal font-black mb-3">
          {done ? "Agreement Signed" : "Already Signed"}
        </h1>
        <p className="font-body text-charcoal/55 text-base max-w-md mb-2">
          {done
            ? `Thank you, ${record.client_name}. Your signed agreement has been received by Jane Verbatim LLC.`
            : `This agreement was already signed. Please contact JVLLC if you have any questions.`}
        </p>
        <p className="font-body text-charcoal/35 text-sm max-w-sm">
          You'll hear from Vbouy within one business day to confirm next steps.
        </p>
        <p className="mt-6 font-body text-xs text-charcoal/25">jvllcnyc@pm.me  ·  680-205-9814</p>
      </div>
    );
  }

  const needsCIA = record.agreement_type === "CIA" || record.agreement_type === "CIA+NDA";
  const needsNDA = record.agreement_type === "NDA" || record.agreement_type === "CIA+NDA";

  return (
    <div className="bg-cream min-h-screen pt-20 pb-20">
      <div className="max-w-3xl mx-auto px-5 sm:px-8">

        {/* Header */}
        <div className="border-b-4 border-charcoal pb-8 mb-10 pt-8">
          <img src="/static/jvllc-logo.png" alt="Jane Verbatim LLC" className="h-10 w-auto mb-6" />
          <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-3">Agreement for Signature</p>
          <h1 className="font-display text-4xl sm:text-5xl text-charcoal font-black leading-tight mb-2">
            {record.agreement_type === "CIA+NDA" ? "Consulting Agreement + NDA" :
             record.agreement_type === "NDA" ? "Non-Disclosure Agreement" :
             "Consulting & Independent Agreement"}
          </h1>
          <p className="font-body text-charcoal/50 text-sm">
            Prepared for <strong className="text-charcoal">{record.client_name}</strong>
            {record.business_name && <> · {record.business_name}</>}
          </p>
          {record.service_scope && (
            <p className="font-body text-xs text-charcoal/35 mt-2">
              Scope: {record.service_scope}
            </p>
          )}
        </div>

        <form onSubmit={handleSubmit} className="space-y-10">

          {/* CIA Section */}
          {needsCIA && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 border-2 border-clay flex items-center justify-center shrink-0">
                  <span className="font-display font-black text-clay text-sm">1</span>
                </div>
                <h2 className="font-display font-black text-charcoal text-2xl">
                  Consulting & Independent Agreement
                </h2>
              </div>
              <div className="border-2 border-charcoal/15 bg-white mb-6">
                <div className="max-h-80 overflow-y-auto p-6">
                  <pre className="font-body text-xs text-charcoal/65 leading-relaxed whitespace-pre-wrap">{CIA_TEXT}</pre>
                </div>
              </div>
              <SignaturePad onSigned={setCiaSig} label="Your signature — Consulting Agreement" />
              <label className="flex items-start gap-3 cursor-pointer group mt-5">
                <div className="relative mt-0.5 shrink-0">
                  <input type="checkbox" checked={ciaAgreed} onChange={e => setCiaAgreed(e.target.checked)} className="sr-only" />
                  <div className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${ciaAgreed ? "bg-charcoal border-charcoal" : "border-charcoal/30 group-hover:border-charcoal"}`}>
                    {ciaAgreed && <CheckCircleIcon className="w-3 h-3 text-cream" />}
                  </div>
                </div>
                <span className="font-body text-sm text-charcoal/60 leading-relaxed">
                  I, <strong>{record.client_name}</strong>, have read and agree to the Consulting & Independent Agreement in full. I understand this is a binding agreement between myself and Jane Verbatim LLC. <span className="text-clay">*</span>
                </span>
              </label>
            </div>
          )}

          {/* NDA Section */}
          {needsNDA && (
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-8 h-8 border-2 border-teal flex items-center justify-center shrink-0">
                  <span className="font-display font-black text-teal text-sm">{needsCIA ? "2" : "1"}</span>
                </div>
                <h2 className="font-display font-black text-charcoal text-2xl">
                  Non-Disclosure Agreement
                </h2>
              </div>
              <div className="border-2 border-charcoal/15 bg-white mb-6">
                <div className="max-h-80 overflow-y-auto p-6">
                  <pre className="font-body text-xs text-charcoal/65 leading-relaxed whitespace-pre-wrap">{NDA_TEXT}</pre>
                </div>
              </div>
              <SignaturePad onSigned={setNdaSig} label="Your signature — Non-Disclosure Agreement" />
              <label className="flex items-start gap-3 cursor-pointer group mt-5">
                <div className="relative mt-0.5 shrink-0">
                  <input type="checkbox" checked={ndaAgreed} onChange={e => setNdaAgreed(e.target.checked)} className="sr-only" />
                  <div className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${ndaAgreed ? "bg-charcoal border-charcoal" : "border-charcoal/30 group-hover:border-charcoal"}`}>
                    {ndaAgreed && <CheckCircleIcon className="w-3 h-3 text-cream" />}
                  </div>
                </div>
                <span className="font-body text-sm text-charcoal/60 leading-relaxed">
                  I, <strong>{record.client_name}</strong>, have read and agree to the Non-Disclosure Agreement in full. I understand this is a binding mutual confidentiality agreement between myself and Jane Verbatim LLC. <span className="text-clay">*</span>
                </span>
              </label>
            </div>
          )}

          {error && (
            <p className="text-red-600 font-body text-sm bg-red-50 border-2 border-red-200 px-4 py-3">{error}</p>
          )}

          <div className="border-t-2 border-charcoal/10 pt-8">
            <button
              type="submit"
              disabled={submitting}
              className="w-full sm:w-auto px-10 py-4 bg-charcoal text-cream font-body font-bold text-xs tracking-widest uppercase hover:bg-clay disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
            >
              <PenIcon className="w-4 h-4" />
              {submitting ? "Submitting…" : "Submit Signed Agreement"}
            </button>
            <p className="font-body text-xs text-charcoal/30 mt-4">
              Your signature and agreement are stored securely. Jane Verbatim LLC will follow up within one business day.
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
