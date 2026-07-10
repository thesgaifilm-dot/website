import { useEffect, useRef, useState } from 'react'

export interface TypeSegment {
  text: string
  className?: string
}

export default function Typewriter({
  segments,
  speed = 45,
  startDelay = 500,
  onDone,
}: {
  segments: TypeSegment[]
  speed?: number
  startDelay?: number
  onDone?: () => void
}) {
  const total = segments.reduce((n, s) => n + s.text.length, 0)
  const [count, setCount] = useState(0)
  const notified = useRef(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setCount(total)
      if (!notified.current) {
        notified.current = true
        onDone?.()
      }
      return
    }
    let interval: ReturnType<typeof setInterval> | undefined
    const start = setTimeout(() => {
      let i = 0
      interval = setInterval(() => {
        i += 1
        setCount(i)
        if (i >= total) {
          clearInterval(interval)
          if (!notified.current) {
            notified.current = true
            onDone?.()
          }
        }
      }, speed)
    }, startDelay)
    return () => {
      clearTimeout(start)
      if (interval) clearInterval(interval)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const done = count >= total
  let remaining = count

  return (
    <span className="relative block" aria-label={segments.map((s) => s.text).join('')}>
      {/* invisible full text reserves the final layout so nothing jumps while typing */}
      <span className="invisible" aria-hidden="true">
        {segments.map((s, i) => (
          <span key={i} className={s.className}>
            {s.text}
          </span>
        ))}
      </span>
      <span className="absolute inset-0" aria-hidden="true">
        {segments.map((s, i) => {
          const take = Math.max(0, Math.min(s.text.length, remaining))
          remaining -= take
          return (
            <span key={i} className={s.className}>
              {s.text.slice(0, take)}
            </span>
          )
        })}
        {!done && <span className="type-cursor" />}
      </span>
    </span>
  )
}
