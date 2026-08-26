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
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md border-b border-charcoal/10 shadow-sm"
          : "bg-cream border-b border-charcoal/10"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 flex items-center justify-between h-16 sm:h-20">

        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0" onClick={() => setOpen(false)}>
          <img
            src="/static/jvllc-logo.png"
            alt="Jane Verbatim LLC"
            className="h-10 sm:h-12 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 text-xs font-body font-bold tracking-[0.15em] uppercase transition-colors duration-200 ${
                  isActive ? "text-clay" : "text-charcoal/50 hover:text-charcoal"
                }`
              }
            >
              {label}
            </NavLink>
          ))}
          <Link
            to="/contact"
            className="ml-6 px-5 py-2.5 bg-charcoal text-cream text-xs font-body font-bold tracking-[0.15em] uppercase hover:bg-clay transition-colors"
          >
            Book a Session
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-charcoal p-2 hover:text-clay transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-cream border-t border-charcoal/10 ${
          open ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col px-5 py-5 gap-1">
          {[...links, { to: "/contact", label: "Book a Session" }].map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === "/"}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3.5 text-sm font-body font-bold tracking-wider uppercase border-b border-charcoal/8 transition-colors duration-200 ${
                  isActive ? "text-clay" : "text-charcoal/60 hover:text-charcoal"
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
