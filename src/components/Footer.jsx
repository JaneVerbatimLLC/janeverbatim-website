import { Link } from "react-router";
import MapPinIcon from "icon:map-pin";
import PhoneIcon from "icon:phone";
import MailIcon from "icon:mail";
import LinkIcon from "icon:link";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t-4 border-charcoal">

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 py-14 sm:py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand */}
          <div className="lg:col-span-5">
            <div className="bg-cream inline-block p-3 mb-5">
              <img src="/static/jvllc-logo.png" alt="Jane Verbatim LLC" className="h-12 w-auto" />
            </div>
            <p className="text-cream/50 font-body text-sm leading-relaxed max-w-xs">
              Brooklyn's premier small business consulting firm.<br />
              <span className="text-cream/75 font-semibold not-italic">Precision in Strategy. Power in Scale.</span>
            </p>
            <p className="mt-5 text-cream/25 font-body text-xs tracking-widest uppercase">
              Bed-Stuy · Crown Heights · Flatbush · East New York
            </p>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-3">
            <h4 className="text-cream font-body text-xs font-bold tracking-[0.2em] uppercase mb-5 border-b border-white/10 pb-3">
              Navigate
            </h4>
            <ul className="space-y-2.5">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Book a Session" },
                { to: "/share-your-story", label: "Share Your Story" },
                { to: "/legal", label: "Legal & Credentials" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-cream/45 font-body text-sm hover:text-clay transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-4">
            <h4 className="text-cream font-body text-xs font-bold tracking-[0.2em] uppercase mb-5 border-b border-white/10 pb-3">
              Contact
            </h4>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-4 h-4 text-clay shrink-0 mt-0.5" />
                <span className="text-cream/45 font-body text-sm">Brooklyn, New York</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-4 h-4 text-clay shrink-0" />
                <a href="tel:6802059814" className="text-cream/45 font-body text-sm hover:text-clay transition-colors">
                  680-205-9814
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-4 h-4 text-clay shrink-0" />
                <a href="mailto:jvllcnyc@pm.me" className="text-cream/45 font-body text-sm hover:text-clay transition-colors">
                  jvllcnyc@pm.me
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LinkIcon className="w-4 h-4 text-clay shrink-0" />
                <a
                  href="https://instagram.com/jane.verbatim.llc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/45 font-body text-sm hover:text-clay transition-colors"
                >
                  @jane.verbatim.llc
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LinkIcon className="w-4 h-4 text-clay shrink-0" />
                <a
                  href="https://www.linkedin.com/in/janeverbatimllc"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/45 font-body text-sm hover:text-clay transition-colors"
                >
                  LinkedIn — Veranthoni Campbell
                </a>
              </li>
              <li className="flex items-center gap-3">
                <LinkIcon className="w-4 h-4 text-clay shrink-0" />
                <a
                  href="https://www.linkedin.com/company/jane-verbatim-llc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream/45 font-body text-sm hover:text-clay transition-colors"
                >
                  LinkedIn — Jane Verbatim LLC
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Registration numbers */}
        <div className="mt-12 pt-6 border-t border-white/10">
          <div className="flex flex-wrap gap-x-8 gap-y-2 mb-5">
            {[
              { label: "EIN", value: "39-5158843", note: "Issued July 1, 2026" },
              { label: "NY LLC DOS ID", value: "7528621" },
              { label: "D-U-N-S", value: "13-677-7236" },
              { label: "SAM.gov UEI", value: "SPAJDNMXJ1M1" },
            ].map(({ label, value, note }) => (
              <div key={label} className="flex items-center gap-2">
                <span className="text-cream/25 font-body text-xs font-bold uppercase tracking-widest">{label}:</span>
                <span className="text-cream/40 font-body text-xs">{value}</span>
                {note && <span className="text-cream/20 font-body text-xs">· {note}</span>}
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <p className="text-cream/25 font-body text-xs">
              © 2026 Jane Verbatim LLC. All rights reserved.
            </p>
            <p className="text-cream/25 font-body text-xs">
              Founded by Veranthoni "Vbouy" Campbell · Brooklyn, NY
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
