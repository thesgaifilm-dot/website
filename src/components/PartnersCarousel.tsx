import SectionHeading from './SectionHeading'

const partners = [
  { file: 'bee-rev.png', name: 'Bee Rev' },
  { file: 'cp-fergus.jpg', name: 'CP Fergus' },
]

export default function PartnersCarousel() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Our network" title="Strategic Partners" center />
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-6 sm:grid-cols-2">
          {partners.map((partner) => (
            <div
              key={partner.file}
              className="flex h-28 items-center justify-center rounded-2xl border border-ink-100 bg-white px-7 py-5 shadow-sm sm:h-32"
            >
              <img
                src={`/media/partners/${partner.file}`}
                alt={partner.name}
                className="max-h-full max-w-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
