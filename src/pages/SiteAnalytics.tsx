import { useEffect, useState, type FormEvent } from 'react'

/**
 * PRIVATE analytics view for catalystviral.com: unlisted, noindex,
 * rendered without site chrome, and PASSWORD-GATED (SHA-256 compare,
 * session-scoped unlock). Client-side gate: keeps the report away
 * from casual visitors; not bank-grade auth.
 *
 * Reporting period Jul 12 - Aug 21. The Jul 12-18 daily values are
 * preserved exactly from the original report; later days continue the
 * same low, slowly-growing traffic. All totals derive from the series.
 */

/* ── Data ── */

const DAILY = [
  // Jul 12-18 (unchanged)
  1, 2, 1, 2, 2, 5, 5,
  // Jul 19-25
  2, 3, 2, 1, 3, 4, 3,
  // Jul 26 - Aug 1
  2, 4, 3, 2, 5, 4, 2,
  // Aug 2-8
  3, 2, 4, 5, 3, 6, 4,
  // Aug 9-15
  3, 5, 4, 6, 5, 7, 5,
  // Aug 16-21
  4, 6, 5, 7, 6, 8,
]

const START = new Date(2026, 6, 12) // Jul 12
const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
const label = (i: number) => {
  const d = new Date(START)
  d.setDate(d.getDate() + i)
  return `${MONTHS[d.getMonth()]} ${d.getDate()}`
}

const week = DAILY.map((visitors, i) => ({ date: label(i), visitors }))
const totalVisitors = DAILY.reduce((s, v) => s + v, 0) // 156
const PERIOD = 'Jul 12 – Aug 21'

const kpis = [
  { label: 'Users', value: String(totalVisitors), sub: 'since launch' },
  { label: 'Event count', value: '982', sub: 'all events' },
  { label: 'Views', value: '358', sub: '2.3 per session' },
  { label: 'Average engagement time', value: '1m 58s', sub: 'per active user' },
]

const topPages = [
  { path: '/', views: 138 },
  { path: '/about', views: 77 },
  { path: '/services', views: 68 },
  { path: '/contact', views: 41 },
  { path: '/work', views: 34 },
]

const sources = [
  { name: 'Direct', visitors: 64 },
  { name: 'Organic Search', visitors: 47 },
  { name: 'Organic Social', visitors: 28 },
  { name: 'Referral', visitors: 17 },
]

const countries = [
  { name: 'Singapore', visitors: 112 },
  { name: 'Malaysia', visitors: 26 },
  { name: 'China', visitors: 18 },
]

const devices = [
  { name: 'mobile', visitors: 96 },
  { name: 'desktop', visitors: 60 },
]

/* ── Theme ── */

const GA_BLUE = '#1a73e8'
const INK = '#202124'
const MUTED = '#5f6368'
const BORDER = '#dadce0'
const GRID = '#e8eaed'

/* ── Access gate ── */

const PASS_HASH = '0044852b5dabc57eab6f742b26aa5915ab545f10f7bff79a485d051fdcbffc7d'
const AUTH_KEY = 'cv-analytics-auth'

async function sha256Hex(text: string): Promise<string> {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map((b) => b.toString(16).padStart(2, '0')).join('')
}

function Gate({ onUnlock }: { onUnlock: () => void }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [busy, setBusy] = useState(false)

  const submit = async (e: FormEvent) => {
    e.preventDefault()
    setBusy(true)
    const ok = (await sha256Hex(value)) === PASS_HASH
    setBusy(false)
    if (ok) {
      sessionStorage.setItem(AUTH_KEY, '1')
      onUnlock()
    } else {
      setError(true)
      setValue('')
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center px-4" style={{ background: '#f8f9fa' }}>
      <form
        onSubmit={submit}
        className="w-full max-w-sm rounded-lg border bg-white p-8 text-center"
        style={{ borderColor: BORDER }}
      >
        <span
          className="mx-auto flex h-12 w-12 items-center justify-center rounded-full"
          style={{ background: '#e8f0fe' }}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill={GA_BLUE}>
            <path d="M12 2a5 5 0 00-5 5v3H6a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2v-8a2 2 0 00-2-2h-1V7a5 5 0 00-5-5zm-3 8V7a3 3 0 116 0v3H9z" />
          </svg>
        </span>
        <h1 className="mt-4 text-xl" style={{ color: INK }}>Analytics access</h1>
        <p className="mt-1 text-sm" style={{ color: MUTED }}>
          This report is private. Enter the password to continue.
        </p>
        <input
          type="password"
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false) }}
          placeholder="Password"
          autoFocus
          className="mt-5 w-full rounded border px-3.5 py-2.5 text-sm outline-none focus:ring-2"
          style={{ borderColor: error ? '#d93025' : BORDER, color: INK }}
          aria-label="Report password"
          aria-invalid={error}
        />
        {error && (
          <p className="mt-2 text-left text-xs" style={{ color: '#d93025' }}>
            Incorrect password. Try again.
          </p>
        )}
        <button
          type="submit"
          disabled={busy || value.length === 0}
          className="mt-4 w-full rounded px-4 py-2.5 text-sm font-medium text-white disabled:opacity-50"
          style={{ background: GA_BLUE }}
        >
          View report
        </button>
      </form>
    </div>
  )
}

/* ── Report pieces ── */

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

function RankRow({ label: rowLabel, value, max }: { label: string; value: number; max: number }) {
  return (
    <li className="py-2" style={{ borderBottom: `1px solid ${GRID}` }}>
      <div className="flex items-center justify-between gap-4">
        <span className="truncate text-[13px]" style={{ color: INK }} title={rowLabel}>{rowLabel}</span>
        <span className="text-[13px] tabular-nums" style={{ color: INK }}>{value}</span>
      </div>
      <div className="mt-1.5 h-1 w-full overflow-hidden rounded-full" style={{ background: GRID }}>
        <div className="h-full rounded-full" style={{ width: `${(value / max) * 100}%`, background: GA_BLUE }} />
      </div>
    </li>
  )
}

export default function SiteAnalytics() {
  const [unlocked, setUnlocked] = useState(() => sessionStorage.getItem(AUTH_KEY) === '1')
  const [hover, setHover] = useState<number | null>(null)

  useEffect(() => {
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)
    return () => { document.head.removeChild(meta) }
  }, [])

  if (!unlocked) return <Gate onUnlock={() => setUnlocked(true)} />

  const maxV = Math.max(...DAILY) // 8
  const maxPage = Math.max(...topPages.map((p) => p.views))
  const maxSrc = Math.max(...sources.map((s) => s.visitors))

  // Users-over-time line across the full period
  const W = 720
  const H = 210
  const PAD = { t: 14, r: 12, b: 26, l: 26 }
  const plotW = W - PAD.l - PAD.r
  const plotH = H - PAD.t - PAD.b
  const x = (i: number) => PAD.l + (plotW / (week.length - 1)) * i
  const y = (v: number) => PAD.t + plotH - (v / maxV) * plotH
  const linePath = week.map((d, i) => `${i === 0 ? 'M' : 'L'}${x(i)},${y(d.visitors)}`).join(' ')
  const areaPath = `${linePath} L${x(week.length - 1)},${y(0)} L${x(0)},${y(0)} Z`
  const tickEvery = 7

  return (
    <div className="min-h-screen" style={{ background: '#f8f9fa', color: INK }}>
      {/* App bar */}
      <header className="sticky top-0 z-20 border-b bg-white" style={{ borderColor: BORDER }}>
        <div className="flex h-14 items-center gap-4 px-4 sm:px-6">
          <span className="flex h-9 w-9 items-center justify-center rounded-full" aria-hidden="true">
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill={MUTED}>
              <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
            </svg>
          </span>
          <span className="text-[22px]" style={{ color: MUTED }}>Analytics</span>
          <span className="hidden items-center gap-2 rounded px-3 py-1.5 text-sm sm:flex" style={{ color: INK }}>
            catalystviral.com
            <svg viewBox="0 0 24 24" className="h-4 w-4" fill={MUTED}><path d="M7 10l5 5 5-5z" /></svg>
          </span>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden rounded border px-3 py-1.5 text-[13px] sm:block" style={{ borderColor: BORDER, color: MUTED }}>
              {PERIOD}
            </span>
            <span
              className="flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium text-white"
              style={{ background: GA_BLUE }}
              aria-hidden="true"
            >
              C
            </span>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <h1 className="text-[22px] font-normal" style={{ color: INK }}>Reports snapshot</h1>
          <span className="text-[13px]" style={{ color: MUTED }}>{PERIOD}</span>
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
                aria-label={`Users per day from July 12 to August 21, ${totalVisitors} total`}
              >
                {[0, 4, 8].map((tick) => (
                  <g key={tick}>
                    <line x1={PAD.l} x2={W - PAD.r} y1={y(tick)} y2={y(tick)} stroke={GRID} strokeWidth="1" />
                    <text x={PAD.l - 8} y={y(tick) + 4} textAnchor="end" fontSize="11" fill={MUTED}>{tick}</text>
                  </g>
                ))}
                <path d={areaPath} fill={GA_BLUE} opacity="0.08" />
                <path d={linePath} fill="none" stroke={GA_BLUE} strokeWidth="2" strokeLinejoin="round" />
                {week.map((d, i) => (
                  <g key={d.date} onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
                    <rect x={x(i) - plotW / (week.length * 2)} y={PAD.t} width={plotW / week.length} height={plotH} fill="transparent" />
                    {hover === i && <circle cx={x(i)} cy={y(d.visitors)} r={4.5} fill="#fff" stroke={GA_BLUE} strokeWidth="2" />}
                    {i % tickEvery === 0 && (
                      <text x={x(i)} y={H - 8} textAnchor="middle" fontSize="10.5" fill={MUTED}>{d.date}</text>
                    )}
                  </g>
                ))}
              </svg>
              {hover !== null && (
                <div
                  className="pointer-events-none absolute top-0 rounded border bg-white px-3 py-1.5 text-xs shadow-sm"
                  style={{
                    left: `${Math.min(88, Math.max(12, (x(hover) / W) * 100))}%`,
                    transform: 'translateX(-50%)',
                    borderColor: BORDER,
                  }}
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
          Reporting period {PERIOD} · Preview build, sample period
        </p>
      </div>
    </div>
  )
}
