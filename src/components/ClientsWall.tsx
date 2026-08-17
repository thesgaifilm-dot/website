import SectionHeading from './SectionHeading'
import Reveal from './Reveal'
import { clients } from '../data/clients'

/**
 * The client logo wall — every brand on an identical white tile so
 * mixed-format logos (png/jpg/webp/avif, coloured or transparent)
 * read as one clean set.
 */
export default function ClientsWall() {
  return (
    <section id="clients" className="scroll-mt-24">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Our clients"
          title="Brands that trust Miss Niu"
          center
        />
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm leading-relaxed text-ink-600">
          From homegrown F&amp;B names to insurers, clinics, and construction firms —
          {` ${clients.length}`}+ businesses across Singapore and the region.
        </p>

        <Reveal delay={120} className="mt-12">
          <ul className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:grid-cols-6">
            {clients.map((c) => (
              <li
                key={c.file}
                className="flex h-20 items-center justify-center rounded-2xl border border-ink-100 bg-white px-4 py-3 shadow-sm sm:h-24"
                title={c.name}
              >
                <img
                  src={`/media/clients/${c.file}`}
                  alt={c.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
