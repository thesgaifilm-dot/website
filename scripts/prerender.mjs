// Prerender every public route to static HTML so crawlers that don't run
// JavaScript still see the page content, title and description.
//
// Runs after `vite build` (client, into dist/) and
// `vite build --ssr src/entry-server.tsx` (server bundle, into dist-ssr/).
//
// Output:
//   dist/index.html              prerendered "/"
//   dist/<route>/index.html      prerendered route, served for /<route>
//   dist/app.html                empty client-only shell; vercel.json rewrites
//                                unknown paths here so the SPA still handles them
import { mkdir, readFile, writeFile, rm } from 'node:fs/promises'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrDir = join(root, 'dist-ssr')

const template = await readFile(join(dist, 'index.html'), 'utf8')
const { render, pageMeta, defaultMeta, prerenderRoutes, siteUrl } = await import(
  pathToFileURL(join(ssrDir, 'entry-server.js')).href
)

const escapeHtml = (s) =>
  s.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;')

const ROOT_TAG = '<div id="root"></div>'
const TITLE_RE = /<title>[\s\S]*?<\/title>/
const DESC_RE = /<meta\s+name="description"\s+content="[^"]*"\s*\/?>/

for (const pattern of [ROOT_TAG, TITLE_RE, DESC_RE]) {
  if (!template.match(pattern)) {
    throw new Error(`prerender: index.html template is missing ${pattern}`)
  }
}

// The untouched build output is the client-only shell.
await writeFile(join(dist, 'app.html'), template)

for (const route of prerenderRoutes) {
  const meta = pageMeta[route] ?? defaultMeta
  const canonical = route === '/' ? `${siteUrl}/` : `${siteUrl}${route}`
  const appHtml = render(route)

  const html = template
    .replace(TITLE_RE, `<title>${escapeHtml(meta.title)}</title>`)
    .replace(
      DESC_RE,
      `<meta name="description" content="${escapeHtml(meta.description)}" />\n    <link rel="canonical" href="${canonical}" />`,
    )
    .replace(ROOT_TAG, `<div id="root">${appHtml}</div>`)

  const outFile = route === '/' ? join(dist, 'index.html') : join(dist, route, 'index.html')
  await mkdir(dirname(outFile), { recursive: true })
  await writeFile(outFile, html)
  console.log(`prerendered ${route.padEnd(24)} -> ${outFile.slice(root.length + 1)}`)
}

// The server bundle is only needed at build time.
await rm(ssrDir, { recursive: true, force: true })
