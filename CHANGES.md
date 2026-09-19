# JVLLC site — changes from the IONOS export

## Build & hosting portability
- Replaced IONOS-only `icon:*` imports with `lucide-react`; standard `vite.config.js` (React + Tailwind v4 plugin); real `package.json`. `npm install && npm run build` now works anywhere. Output goes to `dist/`.
- Fonts load from Google Fonts directly (the `/.sfs/css2` proxy only exists on IONOS).
- Logos/photo live in `public/static/` so `/static/...` URLs still resolve. Images resized (logo 1.0 MB -> 40 KB, founder photo 660 KB -> 112 KB).
- `favicon.svg` path made absolute so it works on nested routes like `/sign/abc`.
- Added OG/Twitter tags and theme color to `index.html`.

## Fixes
- Homepage testimonials now show only owner-approved (`featured = true`) entries. Before, every public submission went live instantly, contradicting the form's "reviewed first" promise.
- `/sign/:token` lookup used string interpolation in a PocketBase filter (injectable); now parameterized with `pb.filter`.
- About page said "thirty minutes" for the strategy session; Home and Contact say 45. Aligned to 45.
- Contact hero texture was mispositioned (missing `relative`); 404 button now uses client-side routing.
- Removed `CivicCapital.jsx` (unrouted, being sunset).

## Round 2
- Forms are now Tally embeds (`src/components/TallyEmbed.jsx`); set the two form IDs in `src/lib/tally.js`. Until then each page shows an email fallback.
- Deleted the IONOS owner portal and e-signature pages (`/owner-key`, `/sign/:token`), PocketBase, and its dependency. Those URLs now show the 404 page.
- Homepage testimonials come from `src/data/testimonials.js` (empty = section hidden), so nothing goes live without your approval.
- Added `public/_headers` (long cache for hashed assets). See `WORKER-ASSETS.md` for the Worker asset settings.

## Still open
- EIN, D-U-N-S and SAM UEI are shown publicly in the footer and on `/legal`.
- The `/share-your-story` sidebar has a hardcoded quote attributed to "Destiny M. — Bed-Stuy". Confirm it's a real, approved testimonial or remove it.
