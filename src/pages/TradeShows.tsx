import { useTranslation } from 'react-i18next'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const featuredShows = [
  {
    name: 'International Beauty Expo Malaysia',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/International%20beauty%20expo%20malaysia-KcydMuI7XeJ91d8I51TbJLZlzdM1SF.png',
    alt: 'International Beauty Expo Malaysia logo with a magenta flower icon, green IBE lettering, and English and Chinese event name.',
  },
  {
    name: 'beautyexpo | cosmobeauté Malaysia',
    image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cosmosbeauty%20malaysia%20beauty%20expo-hXbWSklNDKBTyRdYyBfUiGKFaKXo2O.jpeg',
    alt: 'beautyexpo | cosmobeauté Malaysia logo in orange, gray and gold.',
  },
]

const audienceSegments = [
  {
    label: 'B2B',
    percentage: '70%',
    title: 'B2B: buyers and growth partners',
    body: 'Prioritise importers and distributors, beauty retail buyers, salon and spa owners, brand representatives, e-commerce teams, and product or regulatory service partners.',
  },
  {
    label: 'B2C',
    percentage: '30%',
    title: 'B2C: consumers and community voices',
    body: 'Where consumer access is available, meet beauty shoppers, product testers, makeup artists and beauty creators to hear feedback on products, packaging, pricing and messaging.',
  },
]

const stages = [
  {
    title: 'Before the event',
    body: 'Set clear goals, choose the right audience, prepare your message and plan the conversations that matter.',
  },
  {
    title: 'At the event',
    body: 'Keep your presence focused, use local market context and capture useful details from every conversation.',
  },
  {
    title: 'After the event',
    body: 'Prioritise promising contacts, assign follow-up owners and connect next steps to your wider market-entry plan.',
  },
]

export default function TradeShows() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        title="Trade Shows"
        subtitle="Plan your presence. Build meaningful connections. Follow through."
        image="/media/hero-services.jpg"
      />

      <section className="bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="Beauty trade shows"
            title="Explore beauty exhibitions in Malaysia"
            body="Explore these event brands and use each organiser’s current exhibitor information to plan your meetings."
            center
          />

          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {featuredShows.map((show) => (
              <article key={show.name} className="rounded-2xl border border-ink-100 bg-white p-5 shadow-sm sm:p-7">
                <div className="flex h-40 items-center justify-center rounded-xl bg-white p-3 sm:h-48">
                  <img
                    src={show.image}
                    alt={t(show.alt)}
                    loading="lazy"
                    decoding="async"
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
                <h3 className="mt-4 text-lg font-bold text-ink-900">{t(show.name)}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Who to meet"
            title="Plan conversations for trade partners and consumers"
            body="For a market-entry or wholesale objective, use this suggested meeting-effort split as a starting point—not as a claim about the shows’ actual visitor mix."
            center
          />

          <div className="mt-10 rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:p-8">
            <p className="text-sm font-semibold text-ink-700">{t('Suggested outreach mix')}</p>
            <div aria-hidden="true" className="mt-3 flex h-3 overflow-hidden rounded-full bg-ink-100">
              <div className="h-full bg-coral-500" style={{ width: '70%' }} />
              <div className="h-full bg-ink-600" style={{ width: '30%' }} />
            </div>

            <div className="mt-6 grid gap-5 md:grid-cols-2">
              {audienceSegments.map((segment) => (
                <article key={segment.label} className="rounded-xl bg-ink-50 p-5">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-bold tracking-wide text-ink-700">{segment.label}</span>
                    <span className="text-2xl font-bold text-coral-600">{segment.percentage}</span>
                  </div>
                  <h3 className="mt-2 text-lg font-bold text-ink-900">{t(segment.title)}</h3>
                  <p className="mt-2 leading-relaxed text-ink-600">{t(segment.body)}</p>
                </article>
              ))}
            </div>

            <p className="mt-5 text-sm leading-relaxed text-ink-500">
              {t(
                'This is a suggested meeting-effort allocation, not a verified attendee or visitor percentage. B2C engagement depends on each show’s access policy. Confirm current visitor profiles and rules with the organisers.',
              )}
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-4 pb-20 sm:px-6">
          <SectionHeading
            eyebrow="Trade show support"
            title="Make the event part of a bigger plan"
            body="We help businesses assess how exhibitions fit their Asia growth goals, prepare for the right conversations and turn participation into practical next steps."
            center
          />

          <div className="mt-10 grid gap-5 md:grid-cols-3">
            {stages.map((stage, index) => (
              <Reveal key={stage.title} delay={index * 90} className="h-full">
                <article className="h-full rounded-2xl border border-ink-100 bg-white p-7 shadow-sm">
                  <span className="text-sm font-bold tracking-[0.18em] text-coral-600">
                    0{index + 1}
                  </span>
                  <h3 className="mt-3 text-xl font-bold text-ink-900">{t(stage.title)}</h3>
                  <p className="mt-3 leading-relaxed text-ink-600">{t(stage.body)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink-50">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 md:grid-cols-[0.8fr_1.2fr] md:items-center">
          <SectionHeading
            eyebrow="Plan with purpose"
            title="Choose the right show, audience and next step"
          />
          <p className="text-lg leading-relaxed text-ink-600">
            {t(
              'A trade show works best when it supports a clear business objective. We can help you assess the market, define who you want to meet and shape a practical plan for preparation and follow-up.',
            )}
          </p>
        </div>
      </section>

      <CTASection
        title="Planning a trade show in Asia?"
        body="Tell us your target market, audience and goals. We will help you map the practical next steps."
      />
    </>
  )
}
