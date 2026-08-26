# Project Setup

Last updated: 2026-08-26 (logo updated to transparent PNG; full editorial redesign)

## Site

**Jane Verbatim LLC** — Brooklyn-based small business management consulting firm founded by Veranthoni "Vbouy" Campbell.

## Stack

A **Vite + React** single-page app (JSX), styled with **Tailwind CSS v4**. Multi-page routing via react-router v7. The dev server runs with live reload, so edits appear in the preview immediately — no build or restart needed to see a change.

The app is rendered inside **React StrictMode** in dev.

Provided by the platform (available at runtime — never add these to `package.json`): React, react-dom, react-router, Vite, @vitejs/plugin-react, lucide-react, pocketbase, `tailwind-merge`, and the Tailwind v4 engine itself.

## Tailwind v4 notes

- Stylesheet entry: `@import "tailwindcss";` in `src/index.css`.
- Theme tokens: `tailwind.config.cjs` (bridged via `@config`).
- Never add postcss.config, postcss, or autoprefixer.

## Brand

- **Colors**: charcoal `#2C2C2C`, cream `#FAF5EE`, clay `#C4704A`, sage `#4A6741`, gold `#C9A84C`, teal `#5B9EA0`
- **Typefaces**: Playfair Display (display/headings) + DM Sans (body) — loaded via `vite-ignore` link in index.html, declared in tailwind.config.cjs
- **Logo**: `/static/jvllc-logo.png` (transparent background PNG; original JPEG also in static)
- **Favicon**: `public/favicon.svg` (JV monogram in charcoal/clay)

## Structure

```
src/
  App.jsx                  # Routes (Home, About, Services, CivicCapital, Contact, NotFound)
  main.jsx                 # Entry — BrowserRouter with basename, StrictMode
  index.css                # @import tailwindcss + @config bridge
  lib/pb.js                # PocketBase shared client (new PocketBase(), no args)
  components/
    Nav.jsx                # Fixed sticky nav, mobile hamburger
    Footer.jsx             # Full footer with contact info
  pages/
    Home.jsx               # Hero, stats, services preview, Build vs Become, CTA
    About.jsx              # Founder story, values grid
    Services.jsx           # 4 service blocks + pricing note
    CivicCapital.jsx       # Civic Capital Initiative — pro-bono, discounts, Ballots & Budgets
    Contact.jsx            # Strategy session intake form → strategy_sessions collection
public/
  favicon.svg
index.html
tailwind.config.cjs
```

`dist/` is committed (the deploy reads from it); `node_modules/` is ignored.

## PocketBase Collections

- **strategy_sessions** — intake form submissions (name, email, phone, business_name, neighborhood, service_interest, message). createRule: "" (public write), all other rules null.

## Routing

- `/` → Home
- `/about` → About
- `/services` → Services
- `/civic-capital` → Civic Capital Initiative
- `/contact` → Strategy Session Booking Form
- `*` → NotFound

## Routing & asset paths

The published `dist/` is served from more than one base path. `main.jsx` derives `basename` from `document.baseURI`. Never hardcode absolute root URLs for in-app assets or links, except `/static/…` paths which are platform-served.

- **Exception — `/static/…`.** Files in the project's `static/` directory are served at the fixed absolute URL `/static/<filename>`. Logo is at `/static/jvllc-logo.jpeg`.
