import { useEffect, useRef, useState } from 'react'
import { stats } from '../data/site'

function CountUp({ value, prefix = '', suffix = '' }: { value: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const [display, setDisplay] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || started.current) return
        started.current = true
        const duration = 1200
        const t0 = performance.now()
        const tick = (t: number) => {
          const p = Math.min((t - t0) / duration, 1)
          setDisplay(Math.round(value * (1 - Math.pow(1 - p, 3))))
          if (p < 1) requestAnimationFrame(tick)
        }
        requestAnimationFrame(tick)
      },
      { threshold: 0.4 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {prefix}
      {display}
      {suffix}
    </span>
  )
}

export default function StatsStrip() {
  return (
    <section className="bg-ink-900" aria-label="Track record">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-y-10 px-4 py-14 sm:px-6 lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="text-4xl font-extrabold tracking-tight text-coral-400 sm:text-5xl">
              <CountUp value={s.value} prefix={s.prefix} suffix={s.suffix} />
            </p>
            <p className="mx-auto mt-2 max-w-[12rem] text-sm text-ink-300">{s.label}</p>
          </div>
        ))}
      </div>
      <p className="pb-6 text-center text-[0.7rem] text-ink-500">
        Track record across our founder's ventures and client engagements since 2019.
      </p>
    </section>
  )
}
