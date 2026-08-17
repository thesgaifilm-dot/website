import { useEffect, useState } from 'react'

/**
 * PRIVATE site analytics: unlisted (no nav/footer links, noindex).
 * Sample reporting period Jul 12–18; swap in a live provider
 * (Vercel Analytics / GA4 / Plausible) to feed this layout real data.
 */

const week = [
  { day: 'Sun', date: 'Jul 12', visitors: 1 },
  { day: 'Mon', date: 'Jul 13', visitors: 2 },
  { day: 'Tue', date: 'Jul 14', visitors: 1 },
  { day: 'Wed', date: 'Jul 15', visitors: 2 },
  { day: 'Thu', date: 'Jul 16', visitors: 2 },
  { day: 'Fri', date: 'Jul 17', visitors: 5 },
  { day: 'Sat', date: 'Jul 18', visitors: 5 },
]

const totalVisitors = week.reduce((s, d) => s + d.visitors, 0)

const kpis = [
  { label: 'Visitors', value: String(totalVisitors), sub: '+38% vs prior week' },
  { label: 'Page views', value: '41', sub: '2.3 pages / visit' },
  { label: 'Avg. session', value: '1m 42s', sub: 'engaged time' },
  { label: 'Bounce rate', value: '61%', sub: 'single-page visits' },
]

const topPages = [
  { path: '/', views: 16 },
  { path: '/about', views: 9 },
  { path: '/services', views: 8 },
  { path: '/contact', views: 5 },
  { path: '/consulting-suite-mq7x', views: 3 },
]

const sources = [
  { name: 'Direct', visitors: 8 },
  { name: 'Google Search', visitors: 5 },
  { name: 'LinkedIn', visitors: 3 },
  { name: 'WhatsApp', visitors: 2 },
]

const devices = [
  { name: 'Mobile', visitors: 11 },
  { name: 'Desktop', visitors: 7 },
]

const countries = [
  { name: 'Singapore', visitors: 13 },
  { name: 'Malaysia', visitors: 3 },
  { name: 'China', visitors: 2 },
]

function HBar({ label, value, max }: { label: string; value: number; max: number }) {
  return (
    <li className="flex items-center gap-3">
      <span className="w-40 truncate text-sm text-ink-700 sm:w-48" title={label}>
        {label}
      </span>
      <span className="relative h-2.5 flex-1 overflow-hidden rounded-full bg-ink-50">
        <span
          className="absolute inset-y-0 left-0 rounded-full bg-coral-500"
          style={{ width: `${(value / max) * 100}%` }}
        />
      </span>
      <span className="w-8 text-right text-sm font-semibold tabular-nums text-ink-900">
        {value}
      </span>
    </li>
  )
}

export default function SiteAnalytics() {
  const [hover, setHover] = useState<number | null>(null)

  // Unlisted: keep search engines out.
  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => { document.head.removeChild(meta) }
  }, [])

  const maxV = Math.max(...week.map((d) => d.visitors))
  const maxPage = Math.max(...topPages.map((p) => p.views))
  const maxSrc = Math.max(...sources.map((s) => s.visitors))

  // Bar chart geometry (SVG units)
  const W = 640
  const H = 220
  const PAD = { t: 16, r: 8, b: 30, l: 28 }
  const plotW = W - PAD.l - PAD.r
  const plotH = H - PAD.t - PAD.b
  const band = plotW / week.length
  const barW = Math.min(44, band * 0.55)
  const y = (v: number) => PAD.t + plotH - (v / maxV) * plotH

  return (
    <div className="bg-ink-50/60">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral-600">
              Site analytics
            </p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight text-ink-900">
              missniu.com
            </h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-medium text-ink-700">
              Jul 12 – Jul 18
            </span>
            <span className="flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm text-ink-700">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              0 active now
            </span>
          </div>
        </div>

        {/* KPI tiles */}
        <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm">
              <p className="text-xs font-semibold uppercase tracking-wider text-ink-500">{k.label}</p>
              <p className="mt-2 text-3xl font-extrabold tabular-nums tracking-tight text-ink-900">
                {k.value}
              </p>
              <p className="mt-1 text-xs text-ink-500">{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Visitors chart */}
        <div className="mt-6 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
          <div className="flex items-baseline justify-between">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink-700">
              Daily visitors
            </h2>
            <p className="text-xs text-ink-500">{totalVisitors} this period</p>
          </div>
          <div className="relative mt-4">
            <svg viewBox={`0 0 ${W} ${H}`} className="w-full" role="img" aria-label={`Daily visitors, July 12 to 18: ${week.map((d) => `${d.date} ${d.visitors}`).join(', ')}`}>
              {/* recessive grid */}
              {[0, Math.ceil(maxV / 2), maxV].map((tick) => (
                <g key={tick}>
                  <line x1={PAD.l} x2={W - PAD.r} y1={y(tick)} y2={y(tick)} stroke="#eef0f3" strokeWidth="1" />
                  <text x={PAD.l - 8} y={y(tick) + 4} textAnchor="end" fontSize="11" fill="#8a94a6">
                    {tick}
                  </text>
                </g>
              ))}
              {week.map((d, i) => {
                const cx = PAD.l + band * i + band / 2
                const barY = y(d.visitors)
                const isHover = hover === i
                return (
                  <g
                    key={d.date}
                    onMouseEnter={() => setHover(i)}
                    onMouseLeave={() => setHover(null)}
                  >
                    {/* generous hit target */}
                    <rect x={PAD.l + band * i} y={PAD.t} width={band} height={plotH} fill="transparent" />
                    <rect
                      x={cx - barW / 2}
                      y={barY}
                      width={barW}
                      height={y(0) - barY}
                      rx="4"
                      fill={isHover ? '#d93a40' : '#ef5a5f'}
                    />
                    {/* value label in ink, not series color */}
                    <text x={cx} y={barY - 7} textAnchor="middle" fontSize="12" fontWeight="600" fill="#3d4657">
                      {d.visitors}
                    </text>
                    <text x={cx} y={H - 10} textAnchor="middle" fontSize="11" fill="#8a94a6">
                      {d.day}
                    </text>
                  </g>
                )
              })}
            </svg>
            {hover !== null && (
              <div
                className="pointer-events-none absolute -top-1 rounded-lg border border-ink-100 bg-white px-3 py-1.5 text-xs shadow-md"
                style={{ left: `${((PAD.l + band * hover + band / 2) / W) * 100}%`, transform: 'translateX(-50%)' }}
              >
                <span className="font-semibold text-ink-900">{week[hover].date}</span>
                <span className="ml-2 text-ink-600">
                  {week[hover].visitors} visitor{week[hover].visitors === 1 ? '' : 's'}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Pages + sources */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink-700">Top pages</h2>
            <ul className="mt-5 space-y-3.5">
              {topPages.map((p) => (
                <HBar key={p.path} label={p.path} value={p.views} max={maxPage} />
              ))}
            </ul>
            <p className="mt-4 text-right text-xs text-ink-400">page views</p>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink-700">Traffic sources</h2>
            <ul className="mt-5 space-y-3.5">
              {sources.map((s) => (
                <HBar key={s.name} label={s.name} value={s.visitors} max={maxSrc} />
              ))}
            </ul>
            <p className="mt-4 text-right text-xs text-ink-400">visitors</p>
          </div>
        </div>

        {/* Devices + countries */}
        <div className="mt-6 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink-700">Devices</h2>
            <ul className="mt-5 space-y-3.5">
              {devices.map((d) => (
                <HBar key={d.name} label={d.name} value={d.visitors} max={devices[0].visitors} />
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-ink-100 bg-white p-6 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-wider text-ink-700">Countries</h2>
            <ul className="mt-5 space-y-3.5">
              {countries.map((c) => (
                <HBar key={c.name} label={c.name} value={c.visitors} max={countries[0].visitors} />
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-8 text-center text-xs text-ink-400">
          Reporting period Jul 12 – Jul 18 · Preview build, sample period
        </p>
      </div>
    </div>
  )
}
