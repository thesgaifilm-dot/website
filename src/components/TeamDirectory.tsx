import { useTranslation } from 'react-i18next'
import SectionHeading from './SectionHeading'
import Reveal from './Reveal'

export default function TeamDirectory() {
  const { t } = useTranslation()

  return (
    <section id="our-team" className="scroll-mt-24 bg-ink-50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Our Team"
          title="The people behind the work"
          body="Meet the leaders and teams across company operations, technology development and consulting delivery."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          <Reveal>
            <article className="h-full rounded-2xl border border-ink-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral-100 text-sm font-bold text-coral-700" aria-hidden="true">BN</div>
              <h3 className="mt-5 text-xl font-bold text-ink-900">Bryan Ng</h3>
              <p className="mt-1 text-sm font-semibold text-coral-700">{t('Founder & CEO')}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">{t('Leads product development, training and company strategy.')}</p>
            </article>
          </Reveal>
          <Reveal delay={80}>
            <article className="h-full rounded-2xl border border-ink-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral-100 text-xs font-bold text-coral-700" aria-hidden="true">AC</div>
              <h3 className="mt-5 text-xl font-bold text-ink-900">{t('Alicia Chloe Hoo')}</h3>
              <p className="mt-1 text-sm font-semibold text-coral-700">{t('CFO & Head of Operations')}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">{t('Leads finance and company operations, including the HR function.')}</p>
            </article>
          </Reveal>
          <Reveal delay={160}>
            <article className="h-full rounded-2xl border border-ink-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral-100 text-sm font-bold text-coral-700" aria-hidden="true">PP</div>
              <h3 className="mt-5 text-xl font-bold text-ink-900">{t('Phil Pang Haoyang')}</h3>
              <p className="mt-1 text-sm font-semibold text-coral-700">{t('Chief Technology Officer')}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">{t('Leads AI and IT development and oversees technical delivery.')}</p>
            </article>
          </Reveal>
          <Reveal delay={240}>
            <article className="h-full rounded-2xl border border-ink-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral-100 text-xs font-bold text-coral-700" aria-hidden="true">AL/JC</div>
              <h3 className="mt-5 text-xl font-bold text-ink-900">{t('Anne Lee & Joel Cheong')}</h3>
              <p className="mt-1 text-sm font-semibold text-coral-700">{t('Managers')}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">{t('Support the company’s HR function alongside the CFO.')}</p>
            </article>
          </Reveal>
          <Reveal delay={320}>
            <article className="h-full rounded-2xl border border-ink-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral-100 text-xs font-bold text-coral-700" aria-hidden="true">CT</div>
              <h3 className="mt-5 text-xl font-bold text-ink-900">{t('Consultant Network')}</h3>
              <p className="mt-1 text-sm font-semibold text-coral-700">{t('12 Consultants · 140 Assistant Consultants')}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">{t('A 12-person consultant team supported by 140 assistant consultants for project delivery.')}</p>
            </article>
          </Reveal>
          <Reveal delay={400}>
            <article className="h-full rounded-2xl border border-ink-100 bg-white p-7 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-coral-100 text-sm font-bold text-coral-700" aria-hidden="true">SG</div>
              <h3 className="mt-5 text-xl font-bold text-ink-900">{t('Singapore Engineering Team')}</h3>
              <p className="mt-1 text-sm font-semibold text-coral-700">{t('In-house engineers')}</p>
              <p className="mt-4 text-sm leading-relaxed text-ink-600">{t('A locally based team that builds, tests and supports software and AI solutions alongside technical leadership.')}</p>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
