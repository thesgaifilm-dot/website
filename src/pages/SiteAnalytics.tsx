import { useEffect, useState } from 'react'

/**
 * PRIVATE analytics view: unlisted (no nav/footer links, noindex),
 * rendered without site chrome. GA4-style tool aesthetic (white app
 * bar, gray canvas, blue single-hue marks) without any Google
 * branding. Sample reporting period Jul 12-18; swap in a live
 * provider to feed this layout real data.
 */

const week = [
  { day: 'S', date: 'Jul 12', visitors: 1 },
  { day: 'M', date: 'Jul 13', visitors: 2 },
  { day: 'T', date: 'Jul 14', visitors: 1 },
  { day: 'W', date: 'Jul 15', visitors: 2 },
  { day: 'T', date: 'Jul 16', visitors: 2 },
  { day: 'F', date: 'Jul 17', visitors: 5 },
  { day: 'S', date: 'Jul 18', visitors: 5 },
]

const totalVisitors = week.reduce((s, d) => s + d.visitors, 0)

const kpis = [
  { label: 'Users', value: String(totalVisitors), sub: '+38% vs previous period' },
  { label: 'Event count', value: '113', sub: 'all events' },
  { label: 'Views', value: '41', sub: '2.3 per session' },
  { label: 'Average engagement time', value: '1m 42s', sub: 'per active user' },
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
  { name: 'Organic Search', visitors: 5 },
  { name: 'Organic Social', visitors: 3 },
  { name: 'Referral', visitors: 2 },
]

const countries = [
  { name: 'Singapore', visitors: 13 },
  { name: 'Malaysia', visitors: 3 },
  { name: 'China', visitors: 2 },
]

const devices = [
  { name: 'mobile', visitors: 11 },
  { name: 'desktop', visitors: 7 },
]

const GA_BLUE = '#1a73e8'
const INK = '#202124'
const MUTED = '#5f6368'
const BORDER = '#dadce0'
const GRID = '#e8eaed'

function Card({ title, children, right }: { title: string; children: React.ReactNode; right?: React.ReactNode }) {
  return (
    <div className="rounded-lg border bg-white p-5" style={{ borderColor: BORDER }}>
      <div className="flex items-baseline justify-between">
        <h2 className="text-sm font-medium" style={{ color: INK }}>{title}</h2>
        {right}
      </div>
      {children}
    </div>
  )
}

function RankRow({ label, value, max }: { label: string; value: number; max: number }) {
  return (
    <li className="py-2" style={{ borderBottom: `1px solid ${GRID}` }}>
      <div className="flex items-center justify-between gap-4">
        <span className="truncate text-[13px]" style={{ color: INK }} title={label}>{label}</span>
        <span className="text-[13px] tabular-nums" style={{ color: INK }}>{value}</span>
      </div>
      <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full" style={{ background: GRID }}>
        <div className="h-full rounded-full" style={{ width: `${(value / max) * 100}%`, background: GA_BLUE }} />
      </div>
    </li>
  )
}

export default function SiteAnalytics() {
  const [hover, setHover] = useState<number | null>(null)

  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => { document.head.removeChild(meta) }
  }, [])

  const maxV = 5
  const maxPage = Math.max(...topPages.map((p) => p.views))
  const maxSrc = Math.max(...sources.map((s) => s.visitors))

  // Users-over-time line (GA4 snapshot style)
  const W = 720
  const H = 200
  const PAD = { t: 14, r: 12, b: 26, l: 26 }
  const plotW = W - PAD.l - PAD.r
  const plotH = H - PAD.t - PAD.b
  const x = (i: number) => PAD.l + (plotW / (week.length - 1)) * i
  const y = (v: number) => PAD.t + plotH - (v / maxV) * plotH
  const linePath = week.map((d, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(d.visitors)}`).join(' ')
  const areaPath = `${linePath} L${x(week.length - 1)},${y(0)} L${x(0)},${y(0)} Z`

  return (
    <div className="min-h-screen" style={{ background: '#f8f9fa', color: INK }}>
      {/* App bar — tool chrome, not site chrome */}
      <header className="sticky top-0 z-20 border-b bg-white" style={{ borderColor: BORDER }}>
        <div className="flex h-14 items-center gap-4 px-4 sm:px-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-full" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill={MUTED}>
              <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
            </svg>
          </span>
          <span className="text-[22px]" style={{ color: MUTED }}>Analytics</span>
          <span className="hidden items-center gap-2 rounded px-3 py-1.5 text-sm sm:flex" style={{ color: INK }}>
            missniu.com
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill={MUTED}><path d="M7 10l5 5 5-5z" /></svg>
          </span>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden rounded border px-3 py-1.5 text-[13px] sm:block" style={{ borderColor: BORDER, color: MUTED }}>
              Jul 12 – Jul 18
            </span>
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white"
              style={{ background: GA_BLUE }}
              aria-hidden="true"
            >
              M
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-[22px] font-normal" style={{ color: INK }}>Reports snapshot</h1>
          <span className="text-[13px]" style={{ color: MUTED }}>Jul 12 – Jul 18</span>
        </div>

        {/* KPI strip */}
        <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {kpis.map((k) => (
            <div key={k.label} className="rounded-lg border bg-white p-4" style={{ borderColor: BORDER }}>
              <p className="text-xs" style={{ color: MUTED }}>{k.label}</p>
              <p className="mt-1.5 text-[28px] leading-none tabular-nums" style={{ color: INK }}>{k.value}</p>
              <p className="mt-1.5 text-xs" style={{ color: MUTED }}>{k.sub}</p>
            </div>
          ))}
        </div>

        {/* Users over time + realtime */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[2fr_1fr]">
          <Card title="Users over time" right={<span className="text-xs" style={{ color: MUTED }}>{totalVisitors} users</span>}>
            <div className="relative mt-3">
              <svg
                viewBox={`0 0 ${W} ${H}`}
                className="w-full"
                role="img"
                aria-label={`Users per day, July 12 to 18: ${week.map((d) => `${d.date} ${d.visitors}`).join(', ')}`}
              >
                {[0, 5].map((tick) => (
                  <g key={tick}>
                    <line x1={PAD.l} x2={W - PAD.r} y1={y(tick)} y2={y(tick)} stroke={GRID} strokeWidth="1" />
                    <text x={PAD.l - 8} y={y(tick) + 4} textAnchor="end" fontSize="11" fill={MUTED}>{tick}</text>
                  </g>
                ))}
                <path d={areaPath} fill={GA_BLUE} opacity="0.08" />
                <path d={linePath} fill="none" stroke={GA_BLUE} strokeWidth="2" strokeLinejoin="round" />
                {week.map((d, i) => (
                  <g key={d.date} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
                    <rect x={x(i) - plotW / 14} y={PAD.t} width={plotW / 7} height={plotH} fill="transparent" />
                    <circle cx={x(i)} cy={y(d.visitors)} r={hover === i ? 5 : 3.5} fill="#fff" stroke={GA_BLUE} strokeWidth="2" />
                    <text x={x(i)} y={H - 8} textAnchor="middle" fontSize="11" fill={MUTED}>{d.day}</text>
                  </g>
                ))}
              </svg>
              {hover !== null && (
                <div
                  className="pointer-events-none absolute top-0 rounded border bg-white px-3 py-1.5 text-xs shadow-sm"
                  style={{ left: `${(x(hover) / W) * 100}%`, transform: 'translateX(-50%)', borderColor: BORDER }}
                >
                  <span style={{ color: MUTED }}>{week[hover].date}</span>
                  <span className="ml-2 font-medium" style={{ color: INK }}>
                    {week[hover].visitors} user{week[hover].visitors === 1 ? '' : 's'}
                  </span>
                </div>
              )}
            </div>
          </Card>

          <Card title="Users in last 30 minutes">
            <p className="mt-2 text-[34px] leading-none tabular-nums" style={{ color: INK }}>0</p>
            <p className="mt-2 text-xs" style={{ color: MUTED }}>Users per minute</p>
            <div className="mt-1.5 flex h-8 items-end gap-[3px]">
              {Array.from({ length: 30 }).map((_, i) => (
                <span key={i} className="w-full rounded-sm" style={{ height: 2, background: GRID }} />
              ))}
            </div>
            <p className="mt-4 text-xs" style={{ color: MUTED }}>Top country</p>
            <p className="mt-1 text-[13px]" style={{ color: INK }}>—</p>
          </Card>
        </div>

        {/* Ranked lists */}
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Card title="Pages and screens" right={<span className="text-xs" style={{ color: MUTED }}>Views</span>}>
            <ul className="mt-2">
              {topPages.map((p) => <RankRow key={p.path} label={p.path} value={p.views} max={maxPage} />)}
            </ul>
          </Card>
          <Card title="Traffic acquisition" right={<span className="text-xs" style={{ color: MUTED }}>Users</span>}>
            <ul className="mt-2">
              {sources.map((s) => <RankRow key={s.name} label={s.name} value={s.visitors} max={maxSrc} />)}
            </ul>
          </Card>
        </div>

        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          <Card title="Users by country" right={<span className="text-xs" style={{ color: MUTED }}>Users</span>}>
            <ul className="mt-2">
              {countries.map((c) => <RankRow key={c.name} label={c.name} value={c.visitors} max={countries[0].visitors} />)}
            </ul>
          </Card>
          <Card title="Users by device" right={<span className="text-xs" style={{ color: MUTED }}>Users</span>}>
            <ul className="mt-2">
              {devices.map((d) => <RankRow key={d.name} label={d.name} value={d.visitors} max={devices[0].visitors} />)}
            </ul>
          </Card>
        </div>

        <p className="mt-8 text-center text-xs" style={{ color: MUTED }}>
          Reporting period Jul 12 – Jul 18 · Preview build, sample period
        </p>
      </div>
    </div>
  )
}
