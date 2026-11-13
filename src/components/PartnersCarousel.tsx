import SectionHeading from './SectionHeading'

const partners = [
  { src: '/media/partners/bee-rev.png', name: 'Bee Rev' },
  { src: '/media/partners/cp-fergus-transparent.png', name: 'CP Fergus' },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Elite%20Expo%20Sdn%20Bhd-j97WnXd6YvjOSu9m8w53g1NCkroM1A.png',
    name: 'Elite Expo Sdn Bhd',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Informa%20Market%20Malaysia%20Sdn%20Bhd-QLR2UpHkMc41ps9LNyG28Iar3SwFrX.jpeg',
    name: 'Informa Market Malaysia Sdn Bhd',
  },
  {
    src: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Wecofa%20Pte%20Ltd-nN0MAlilPWYKBlMNmyaEzlJnABPNXI.png',
    name: 'Wecofa Pte Ltd',
  },
  {
    src: '/media/partners/hua-hua-consulting.png',
    name: 'Hua & Hua Consulting',
  },
]

export default function PartnersCarousel() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Our network" title="Strategic Partners" center />
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="flex h-28 items-center justify-center rounded-2xl border border-ink-100 bg-white px-7 py-5 shadow-sm sm:h-32"
            >
              <img
                src={partner.src}
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
