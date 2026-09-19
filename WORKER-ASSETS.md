# Deploying `dist/` into jvllc-signature-worker (assets + links)

Do not edit `worker.js`, KV bindings or `OWNER_KEY`. Only the asset settings and the contents of `public/` change.

## 1. Fix deep links (`/about`, `/services`, `/contact`, ...)
This site is a single-page app: only `index.html` exists as a file, so a direct visit or refresh on `/about` needs a fallback. In the Worker's `wrangler.toml` (or `wrangler.jsonc`), add one line to the existing assets block:

    [assets]
    directory = "./public"
    binding = "ASSETS"
    not_found_handling = "single-page-application"   # <- new

(jsonc: `"not_found_handling": "single-page-application"`.)

Notes
- `/api/*` requests are fetch calls, not page navigations, so they still reach `worker.js`. If any e-signature page is opened by navigating straight to a `/api/...` URL, also add `run_worker_first = ["/api/*"]` so the Worker keeps priority for those paths.
- In this mode `404.html` is ignored; unknown URLs show the site's own 404 page with a 200 status.

## 2. Copy the build
1. `npm install && npm run build`
2. Compare `public/` in the Worker repo against `dist/` before copying. The likely collisions are `index.html`, `favicon.svg`, `static/` and any existing `_headers`. Keep the e-signature sign page files.
3. Copy `dist/*` into `public/`, then `npx wrangler deploy`.

## 3. Verify after deploy (replace HOST)
    curl -sI -H "Sec-Fetch-Mode: navigate" https://HOST/about      # expect 200, text/html
    curl -sI https://HOST/assets/  # hashed JS/CSS should return 200 with long cache
    curl -sI https://HOST/static/jvllc-logo.png                     # 200, image/png
    # then confirm the e-signature flow at /api/sign still works

## 4. Tally form IDs
Set the two IDs in `src/lib/tally.js` (`contact`, `testimonial`), rebuild, copy again.
