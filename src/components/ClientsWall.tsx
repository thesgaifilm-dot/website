import SectionHeading from './SectionHeading'
import { clients, type ClientLogo } from '../data/clients'

/**
 * The client carousel — three marquee rows of identical white tiles
 * (same grammar as the partners carousel on Home), alternating
 * direction, paused on hover. Mixed png/jpg/webp/avif logos read as
 * one clean set on the uniform tiles.
 */

const third = Math.ceil(clients.length / 3)
const rows: ClientLogo[][] = [
  clients.slice(0, third),
  clients.slice(third, third * 2),
  clients.slice(third * 2),
]

function MarqueeRow({ items, reverse = false }: { items: ClientLogo[]; reverse?: boolean }) {
  return (
    <div
      className={`animate-marquee flex w-max items-center gap-5 pr-5 ${reverse ? 'marquee-reverse' : ''}`}
    >
      {[...items, ...items, ...items].map((c, i) => (
        <div
          key={`${c.file}-${i}`}
          className="flex h-20 w-40 shrink-0 items-center justify-center rounded-2xl border border-ink-100 bg-white px-5 py-4 shadow-sm sm:h-24 sm:w-48"
          title={c.name}
        >
          <img
            src={`/media/clients/${c.file}`}
            alt={c.name}
            loading="lazy"
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  )
}

export default function ClientsWall() {
  return (
    <section id="clients" className="scroll-mt-24 overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Our clients" title="Brands that trust Miss Niu" center />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-ink-600">
          From homegrown F&amp;B names to insurers, clinics, and construction firms —
          {` ${clients.length}`}+ businesses across Singapore and the region.
        </p>
      </div>

      <div className="marquee-group relative mt-12 space-y-5">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28"
          aria-hidden="true"
        />
        <MarqueeRow items={rows[0]} />
        <MarqueeRow items={rows[1]} reverse />
        <MarqueeRow items={rows[2]} />
      </div>
    </section>
  )
}
