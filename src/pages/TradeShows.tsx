import { useTranslation } from 'react-i18next'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

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

      <section>
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
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
