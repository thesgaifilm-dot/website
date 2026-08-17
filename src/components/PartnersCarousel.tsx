import SectionHeading from './SectionHeading'

const rowA = [
  { file: 'cccc.png', name: 'China Communications Construction' },
  { file: 'china-southern.png', name: 'China Southern Airlines' },
  { file: 'bank-of-china.png', name: 'Bank of China (Guangxi Branch)' },
  { file: 'china-taiping.png', name: 'China Taiping' },
  { file: 'lmz.png', name: 'LMZ' },
  { file: 'iflytek.png', name: 'iFLYTEK' },
]

const rowB = [
  { file: 'volvo.png', name: 'Volvo' },
  { file: 'beihai-xiongtong.png', name: 'Bei Hai Xiong Tong' },
  { file: 'guangxi-commerce.png', name: 'Guangxi Commerce & Trade Group' },
  { file: 'yunde.png', name: 'Yunde Group' },
  { file: 'huafu-dreamworks.png', name: 'Huafu Dreamworks' },
  { file: 'bee-rev.png', name: 'Bee' },
  { file: 'cp-fergus.jpg', name: 'CP Fergus' },
]

function MarqueeRow({ items, reverse = false }: { items: typeof rowA; reverse?: boolean }) {
  return (
    <div
      className={`animate-marquee flex w-max items-center gap-6 pr-6 ${reverse ? 'marquee-reverse' : ''}`}
    >
      {[...items, ...items, ...items, ...items].map((p, i) => (
        <div
          key={`${p.file}-${i}`}
          className="flex h-24 w-48 shrink-0 items-center justify-center rounded-2xl border border-ink-100 bg-white px-7 py-5 shadow-sm sm:h-28 sm:w-56"
        >
          <img
            src={`/media/partners/${p.file}`}
            alt={p.name}
            className="max-h-full max-w-full object-contain"
          />
        </div>
      ))}
    </div>
  )
}

export default function PartnersCarousel() {
  return (
    <section className="overflow-hidden py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Our network" title="Strategic Partners" center />
      </div>
      <div className="marquee-group relative mt-12 space-y-6">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent sm:w-28"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent sm:w-28"
          aria-hidden="true"
        />
        <MarqueeRow items={rowA} />
        <MarqueeRow items={rowB} reverse />
      </div>
    </section>
  )
}
