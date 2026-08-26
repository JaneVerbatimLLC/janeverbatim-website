import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router";
import MenuIcon from "icon:menu";
import XIcon from "icon:x";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/contact", label: "Book a Session" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-charcoal/95 backdrop-blur-md shadow-lg border-b border-white/10" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 shrink-0" onClick={() => setOpen(false)}>
          <img src="/static/jvllc-logo.jpeg" alt="Jane Verbatim LLC" className="h-10 sm:h-12 w-auto rounded-sm" />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.slice(0, 3).map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-body font-medium tracking-wide transition-colors duration-200 ${
                  isActive
                    ? "text-clay"
                    : "text-cream/70 hover:text-cream"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-4 px-5 py-2.5 bg-clay text-cream text-sm font-body font-semibold tracking-wide rounded-sm hover:bg-clay/85 transition-colors duration-200"
          >
            Book a Session
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-cream p-2 hover:text-clay transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-charcoal/98 border-t border-white/10 ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-4 gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 text-base font-body font-medium rounded-sm transition-colors duration-200 ${
                  isActive
                    ? "text-clay bg-white/5"
                    : "text-cream/75 hover:text-cream hover:bg-white/5"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
