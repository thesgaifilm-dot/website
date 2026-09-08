# Miss Niu Technology website

React 19 + TypeScript + Vite + Tailwind, routed with React Router and deployed on Vercel.

## Prerendering

`npm run build` produces static HTML for every public route so crawlers that
don't execute JavaScript still see the full page content, title, description
and canonical URL:

1. `vite build` — the client bundle, into `dist/`.
2. `vite build --ssr src/entry-server.tsx` — a Node bundle of the app, into `dist-ssr/`.
3. `node scripts/prerender.mjs` — renders each route in `src/data/seo.ts` with
   `renderToString` and writes `dist/index.html`, `dist/<route>/index.html`,
   plus an empty `dist/app.html` shell.

`src/main.tsx` hydrates the prerendered markup when it is present and falls
back to a normal client render for the shell. `vercel.json` serves the
prerendered files for their routes and rewrites everything else to `app.html`,
so unlisted routes (for example the analytics page) keep working as a SPA.

To add a public page: add its route to `src/App.tsx`, its title and description
to `src/data/seo.ts`, the route to the first rewrite in `vercel.json`, and the
URL to `public/sitemap.xml`.

Note that `vite preview` does not resolve `/about` to `about/index.html`; use a
static server that does (or the trailing-slash URL) to inspect prerendered pages.

## Scripts

- `npm run dev` — dev server with HMR
- `npm run build` — typecheck, build and prerender
- `npm run lint` — oxlint
- `npm run preview` — serve `dist/`
