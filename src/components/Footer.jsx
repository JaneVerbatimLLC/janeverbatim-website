import { Link } from "react-router";
import MapPinIcon from "icon:map-pin";
import PhoneIcon from "icon:phone";
import MailIcon from "icon:mail";
import InstagramIcon from "icon:link";

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <img src="/static/jvllc-logo.jpeg" alt="Jane Verbatim LLC" className="h-14 w-auto rounded-sm mb-4" />
            <p className="text-cream/60 font-body text-sm leading-relaxed max-w-sm">
              Brooklyn's premier small business consulting firm. Precision in Strategy. Power in Scale.
            </p>
            <p className="mt-4 text-cream/40 font-body text-xs">
              Serving Bed-Stuy · Crown Heights · Flatbush · East New York
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-cream font-display text-sm font-semibold tracking-widest uppercase mb-4">Navigate</h4>
            <ul className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Book a Session" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} className="text-cream/55 font-body text-sm hover:text-clay transition-colors">{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-cream font-display text-sm font-semibold tracking-widest uppercase mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPinIcon className="w-4 h-4 text-clay shrink-0 mt-0.5" />
                <span className="text-cream/55 font-body text-sm">Brooklyn, New York</span>
              </li>
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-clay shrink-0" />
                <a href="tel:6802059814" className="text-cream/55 font-body text-sm hover:text-clay transition-colors">680-205-9814</a>
              </li>
              <li className="flex items-center gap-2">
                <MailIcon className="w-4 h-4 text-clay shrink-0" />
                <a href="mailto:jvllcnyc@pm.me" className="text-cream/55 font-body text-sm hover:text-clay transition-colors">jvllcnyc@pm.me</a>
              </li>
              <li className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-clay shrink-0" />
                <a href="https://instagram.com/jane.verbatim.llc" target="_blank" rel="noopener noreferrer" className="text-cream/55 font-body text-sm hover:text-clay transition-colors">@jane.verbatim.llc</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-cream/30 font-body text-xs">© 2026 Jane Verbatim LLC. All rights reserved.</p>
          <p className="text-cream/30 font-body text-xs">Founded by Veranthoni "Vbouy" Campbell</p>
        </div>
      </div>
    </footer>
  );
}
