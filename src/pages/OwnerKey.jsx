import { useState, useRef, useEffect } from "react";
import { pb } from "../lib/pb.js";
import LockIcon from "icon:lock";
import CheckCircleIcon from "icon:check-circle";
import PenIcon from "icon:pen-line";
import EyeIcon from "icon:eye";
import EyeOffIcon from "icon:eye-off";
import DownloadIcon from "icon:download";
import XIcon from "icon:x";

const OWNER_EMAIL = "owner@janeverbatim.local";

const CIA_TEXT = `CONSULTING & INDEPENDENT AGREEMENT
Jane Verbatim LLC — Brooklyn, New York

This Consulting & Independent Agreement ("Agreement") is entered into as of the date of signature below between Jane Verbatim LLC ("Consultant"), a for-profit limited liability company organized under the laws of the State of New York, and the undersigned client ("Client").

1. SCOPE OF SERVICES
Consultant agrees to provide small business management consulting services as outlined in a separate Statement of Work or agreed upon during the initial strategy session. Services may include, but are not limited to: business architecture and formation guidance, brand identity development, MWBE/SEE certification support, cannabis regulatory compliance training, social media strategy, and professional development advising.

2. INDEPENDENT CONTRACTOR STATUS
Client acknowledges that Consultant operates as an independent contractor and not as an employee, partner, or agent of Client. Consultant retains the right to perform services for other clients during the term of this Agreement, provided that such services do not create a conflict of interest.

3. COMPENSATION & PAYMENT TERMS
Fees for services shall be as mutually agreed in writing prior to commencement. Invoices are due within 14 calendar days of issuance. Late payments are subject to a 1.5% monthly service charge. Jane Verbatim LLC reserves the right to pause services on accounts 30+ days past due.

4. CONFIDENTIALITY
Consultant agrees to keep confidential all proprietary business information shared by Client in the course of the engagement. Client agrees to keep confidential all methodologies, frameworks, and materials provided by Consultant, including but not limited to the "Build vs. Become" framework and any associated deliverables.

5. INTELLECTUAL PROPERTY
All frameworks, templates, and proprietary methodologies developed by Jane Verbatim LLC remain the sole property of Jane Verbatim LLC. Custom deliverables created specifically for Client (logo packages, business plans, brand guides) become Client property upon full payment.

6. LIMITATION OF LIABILITY
Jane Verbatim LLC's liability under this Agreement shall not exceed the total fees paid by Client in the ninety (90) days preceding the claim. Consultant is not liable for indirect, consequential, or incidental damages.

7. TERM & TERMINATION
Either party may terminate this Agreement with 14 days' written notice. Upon termination, Client shall pay for all work completed through the termination date. Consultant shall deliver all completed deliverables upon final payment.

8. GOVERNING LAW
This Agreement shall be governed by the laws of the State of New York. Any disputes shall be resolved in Kings County, New York.

9. ENTIRE AGREEMENT
This Agreement, together with any attached Statement of Work, constitutes the entire agreement between the parties and supersedes all prior negotiations, representations, or agreements, oral or written.

By signing below, Client acknowledges that they have read, understood, and agree to be bound by the terms of this Agreement.`;

function SignaturePad({ onSigned }) {
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
    const pos = getPos(e, canvas);
    ctx.beginPath();
    ctx.moveTo(pos.x, pos.y);
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
    if (hasSig) {
      onSigned(canvasRef.current.toDataURL());
    }
  }

  function clear() {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    setHasSig(false);
    onSigned(null);
  }

  return (
    <div className="space-y-2">
      <div className="relative border-2 border-charcoal rounded-none bg-white" style={{ touchAction: "none" }}>
        <canvas
          ref={canvasRef}
          width={600}
          height={160}
          className="w-full h-32 cursor-crosshair block"
          onMouseDown={startDraw}
          onMouseMove={draw}
          onMouseUp={endDraw}
          onMouseLeave={endDraw}
          onTouchStart={startDraw}
          onTouchMove={draw}
          onTouchEnd={endDraw}
        />
        <div className="absolute bottom-2 left-4 right-4 border-t border-charcoal/20 pointer-events-none" />
        <div className="absolute bottom-3 left-4 text-charcoal/20 font-body text-xs pointer-events-none">Sign here</div>
      </div>
      <div className="flex justify-between items-center">
        <p className="text-charcoal/40 font-body text-xs">Draw your signature above using mouse or touch</p>
        {hasSig && (
          <button type="button" onClick={clear} className="text-clay font-body text-xs underline hover:no-underline flex items-center gap-1">
            <XIcon className="w-3 h-3" /> Clear
          </button>
        )}
      </div>
    </div>
  );
}

function LoginGate({ onLogin }) {
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      await pb.collection("owner_gate").authWithPassword(OWNER_EMAIL, password);
      onLogin();
    } catch {
      setError("Incorrect password. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="bg-cream min-h-screen flex items-center justify-center pt-20 px-5">
      <div className="w-full max-w-sm">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-charcoal flex items-center justify-center">
            <LockIcon className="w-5 h-5 text-cream" />
          </div>
          <div>
            <p className="font-body text-xs text-clay font-bold tracking-widest uppercase">Owner Access</p>
            <h1 className="font-display text-xl text-charcoal font-black">Jane Verbatim LLC</h1>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-body text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-2">
              Owner Password
            </label>
            <div className="relative">
              <input
                type={showPw ? "text" : "password"}
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="w-full border-2 border-charcoal px-4 py-3 font-body text-sm text-charcoal bg-white focus:outline-none focus:border-clay pr-12"
                placeholder="Enter owner password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-charcoal/30 hover:text-charcoal transition-colors"
              >
                {showPw ? <EyeOffIcon className="w-5 h-5" /> : <EyeIcon className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {error && (
            <p className="text-red-600 font-body text-xs">{error}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-charcoal text-cream font-body font-bold text-xs tracking-widest uppercase py-4 hover:bg-clay transition-colors disabled:opacity-50"
          >
            {loading ? "Verifying…" : "Enter Owner Portal"}
          </button>
        </form>
      </div>
    </div>
  );
}

function AgreementForm() {
  const [form, setForm] = useState({
    client_name: "",
    business_name: "",
    email: "",
    phone: "",
    service_scope: "",
    agreed_to_terms: false,
  });
  const [signatureData, setSignatureData] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [submittedRecord, setSubmittedRecord] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [agreements, setAgreements] = useState([]);
  const [loadingAgreements, setLoadingAgreements] = useState(true);
  const [activeTab, setActiveTab] = useState("view"); // "view" | "new"

  useEffect(() => {
    const controller = new AbortController();
    pb.collection("cia_agreements").getList(1, 50, {
      sort: "-created",
      signal: controller.signal,
    })
      .then(r => setAgreements(r.items))
      .catch(err => { if (!err?.isAbort) console.error(err); })
      .finally(() => setLoadingAgreements(false));
    return () => controller.abort();
  }, [submitted]);

  function set(field, value) {
    setForm(f => ({ ...f, [field]: value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (!signatureData) { setError("Please draw your signature above."); return; }
    if (!form.agreed_to_terms) { setError("Please confirm you agree to the terms."); return; }
    setLoading(true);
    setError("");
    try {
      const record = await pb.collection("cia_agreements").create({
        client_name: form.client_name,
        business_name: form.business_name,
        email: form.email,
        phone: form.phone,
        service_scope: form.service_scope,
        signature_data: signatureData,
        agreed_to_terms: true,
        ip_address: "",
      });
      setSubmittedRecord(record);
      setSubmitted(true);
      setActiveTab("view");
    } catch (err) {
      setError("Something went wrong. Please try again.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  function formatDate(iso) {
    if (!iso) return "—";
    return new Date(iso).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric", hour: "2-digit", minute: "2-digit" });
  }

  return (
    <div className="bg-cream min-h-screen pt-20">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-12 py-12">

        {/* Header */}
        <div className="mb-10 pb-6 border-b-2 border-charcoal flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <p className="text-clay font-body text-xs font-bold tracking-[0.25em] uppercase mb-2">Owner Portal</p>
            <h1 className="font-display text-4xl sm:text-5xl text-charcoal font-black leading-tight">
              Consulting &<br />
              <em className="italic text-clay">Independent Agreement</em>
            </h1>
          </div>
          <div className="flex items-center gap-2 text-sage font-body text-xs font-bold uppercase tracking-widest">
            <LockIcon className="w-4 h-4" />
            Secure Owner Access
          </div>
        </div>

        {/* Tabs */}
        <div className="flex gap-0 border-2 border-charcoal mb-10 w-fit">
          {[
            { id: "view", label: `Signed Agreements (${agreements.length})` },
            { id: "new", label: "New Agreement" },
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 font-body font-bold text-xs tracking-widest uppercase transition-colors ${
                activeTab === tab.id ? "bg-charcoal text-cream" : "bg-cream text-charcoal/50 hover:text-charcoal"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* View Agreements Tab */}
        {activeTab === "view" && (
          <div>
            {submitted && submittedRecord && (
              <div className="mb-6 border-2 border-sage bg-sage/5 px-6 py-4 flex items-start gap-3">
                <CheckCircleIcon className="w-5 h-5 text-sage mt-0.5 shrink-0" />
                <div>
                  <p className="font-body font-bold text-charcoal text-sm">Agreement signed successfully</p>
                  <p className="font-body text-charcoal/60 text-xs mt-0.5">
                    {submittedRecord.client_name} — {formatDate(submittedRecord.created)}
                  </p>
                </div>
              </div>
            )}

            {loadingAgreements ? (
              <div className="text-charcoal/40 font-body text-sm py-12 text-center">Loading agreements…</div>
            ) : agreements.length === 0 ? (
              <div className="border-2 border-dashed border-charcoal/20 py-16 text-center">
                <PenIcon className="w-8 h-8 text-charcoal/20 mx-auto mb-3" />
                <p className="font-body text-charcoal/40 text-sm">No signed agreements yet.</p>
                <button
                  onClick={() => setActiveTab("new")}
                  className="mt-4 inline-flex items-center gap-2 px-5 py-2.5 border-2 border-charcoal text-charcoal font-body font-bold text-xs tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-colors"
                >
                  Create First Agreement
                </button>
              </div>
            ) : (
              <div className="space-y-3">
                {agreements.map(a => (
                  <div key={a.id} className="border-2 border-charcoal/15 hover:border-charcoal transition-colors group">
                    <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-1">
                          <CheckCircleIcon className="w-4 h-4 text-sage shrink-0" />
                          <p className="font-display font-bold text-charcoal text-base">{a.client_name}</p>
                        </div>
                        <div className="flex flex-wrap gap-x-6 gap-y-1 ml-7">
                          {a.business_name && <span className="font-body text-xs text-charcoal/50">{a.business_name}</span>}
                          {a.email && <span className="font-body text-xs text-charcoal/50">{a.email}</span>}
                          {a.service_scope && <span className="font-body text-xs text-clay">{a.service_scope}</span>}
                        </div>
                      </div>
                      <div className="text-right shrink-0">
                        <p className="font-body text-xs text-charcoal/40 font-bold uppercase tracking-widest">Signed</p>
                        <p className="font-body text-xs text-charcoal/60 mt-0.5">{formatDate(a.created)}</p>
                      </div>
                    </div>
                    {/* Signature preview */}
                    {a.signature_data && (
                      <div className="px-6 pb-6 border-t border-charcoal/8 pt-4">
                        <p className="font-body text-xs text-charcoal/30 uppercase tracking-widest mb-2">Client Signature</p>
                        <img
                          src={a.signature_data}
                          alt="Client signature"
                          className="max-h-16 border border-charcoal/10 bg-white px-2 py-1"
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* New Agreement Tab */}
        {activeTab === "new" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

            {/* Agreement Text */}
            <div className="lg:col-span-5">
              <p className="font-body text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-3">Agreement Document</p>
              <div className="border-2 border-charcoal/20 bg-white p-6 max-h-[60vh] overflow-y-auto">
                <pre className="font-body text-xs text-charcoal/70 leading-relaxed whitespace-pre-wrap">{CIA_TEXT}</pre>
              </div>
            </div>

            {/* Signature Form */}
            <div className="lg:col-span-7">
              <p className="font-body text-xs font-bold text-charcoal/40 uppercase tracking-widest mb-3">Client Information & Signature</p>

              {submitted ? (
                <div className="border-2 border-sage bg-sage/5 p-8 text-center">
                  <CheckCircleIcon className="w-12 h-12 text-sage mx-auto mb-4" />
                  <h3 className="font-display text-2xl text-charcoal font-black mb-2">Agreement Signed</h3>
                  <p className="font-body text-charcoal/60 text-sm mb-6">
                    The agreement has been saved securely.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ client_name:"",business_name:"",email:"",phone:"",service_scope:"",agreed_to_terms:false }); setSignatureData(null); }}
                    className="px-6 py-3 border-2 border-charcoal text-charcoal font-body font-bold text-xs tracking-widest uppercase hover:bg-charcoal hover:text-cream transition-colors"
                  >
                    New Agreement
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block font-body text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1.5">
                        Client Full Name <span className="text-clay">*</span>
                      </label>
                      <input
                        type="text"
                        value={form.client_name}
                        onChange={e => set("client_name", e.target.value)}
                        required
                        className="w-full border-2 border-charcoal/30 focus:border-charcoal px-4 py-3 font-body text-sm text-charcoal bg-white focus:outline-none"
                        placeholder="Full legal name"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1.5">
                        Business Name
                      </label>
                      <input
                        type="text"
                        value={form.business_name}
                        onChange={e => set("business_name", e.target.value)}
                        className="w-full border-2 border-charcoal/30 focus:border-charcoal px-4 py-3 font-body text-sm text-charcoal bg-white focus:outline-none"
                        placeholder="DBA or LLC name"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1.5">
                        Email <span className="text-clay">*</span>
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={e => set("email", e.target.value)}
                        required
                        className="w-full border-2 border-charcoal/30 focus:border-charcoal px-4 py-3 font-body text-sm text-charcoal bg-white focus:outline-none"
                        placeholder="client@example.com"
                      />
                    </div>
                    <div>
                      <label className="block font-body text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1.5">
                        Phone
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={e => set("phone", e.target.value)}
                        className="w-full border-2 border-charcoal/30 focus:border-charcoal px-4 py-3 font-body text-sm text-charcoal bg-white focus:outline-none"
                        placeholder="(718) 555-0000"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-body text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1.5">
                      Service Scope
                    </label>
                    <input
                      type="text"
                      value={form.service_scope}
                      onChange={e => set("service_scope", e.target.value)}
                      className="w-full border-2 border-charcoal/30 focus:border-charcoal px-4 py-3 font-body text-sm text-charcoal bg-white focus:outline-none"
                      placeholder="e.g. Business Architecture + Brand Identity Package"
                    />
                  </div>

                  {/* Signature Pad */}
                  <div>
                    <label className="block font-body text-xs font-bold text-charcoal/50 uppercase tracking-widest mb-1.5">
                      Client Signature <span className="text-clay">*</span>
                    </label>
                    <SignaturePad onSigned={setSignatureData} />
                  </div>

                  {/* Agreement confirmation */}
                  <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative mt-0.5">
                      <input
                        type="checkbox"
                        checked={form.agreed_to_terms}
                        onChange={e => set("agreed_to_terms", e.target.checked)}
                        className="sr-only"
                      />
                      <div className={`w-5 h-5 border-2 flex items-center justify-center transition-colors ${form.agreed_to_terms ? "bg-charcoal border-charcoal" : "border-charcoal/40 group-hover:border-charcoal"}`}>
                        {form.agreed_to_terms && <CheckCircleIcon className="w-3 h-3 text-cream" />}
                      </div>
                    </div>
                    <span className="font-body text-xs text-charcoal/60 leading-relaxed">
                      I have read and agree to the terms of this Consulting & Independent Agreement. I understand that this constitutes a legally binding agreement with Jane Verbatim LLC.
                    </span>
                  </label>

                  {error && <p className="text-red-600 font-body text-xs">{error}</p>}

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-charcoal text-cream font-body font-bold text-xs tracking-widest uppercase py-4 hover:bg-clay transition-colors disabled:opacity-50 flex items-center justify-center gap-2"
                  >
                    {loading ? "Saving…" : (
                      <>
                        <PenIcon className="w-4 h-4" />
                        Execute Agreement
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function OwnerKey() {
  const [authed, setAuthed] = useState(() => pb.authStore.isValid);

  function handleLogin() {
    setAuthed(true);
  }

  if (!authed) return <LoginGate onLogin={handleLogin} />;
  return <AgreementForm />;
}
