import { useTranslation } from 'react-i18next'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import SectionHeading from '../components/SectionHeading'

const guides = [
  {
    id: 'asia-market-entry',
    title: 'The Asia market-entry checklist',
    summary: 'A clear sequence for assessing a new market before committing time and resources.',
    checklist: [
      'Define target markets and customer segments',
      'Validate local demand, competitors and routes to market',
      'Map entity, licensing and compliance requirements',
      'Assign local ownership for launch and follow-up',
    ],
  },
  {
    id: 'cross-border-team',
    title: 'Building a cross-border team',
    summary: 'Plan the roles, hiring process and support your team needs to work across markets.',
    checklist: [
      'Set responsibilities and outcomes before recruiting',
      'Plan compliant hiring, onboarding and local support',
      'Document workflows, reporting lines and training',
      'Build retention and career development plans',
    ],
  },
  {
    id: 'ai-adoption',
    title: 'The AI adoption checklist',
    summary: 'Start with a measurable business need and plan for the people and systems around it.',
    checklist: [
      'Select a repetitive workflow with a clear success metric',
      'Check data quality, privacy and access requirements',
      'Estimate integration, training and maintenance needs',
      'Track quality, time saved and business impact',
    ],
  },
  {
    id: 'digital-transformation',
    title: 'The digital transformation checklist',
    summary: 'Connect tools and process changes to the day-to-day work they are meant to improve.',
    checklist: [
      'Map current handoffs and pain points',
      'Choose systems based on needs, integrations and total cost',
      'Design workflows before configuring software',
      'Pilot with users, train teams, measure adoption and iterate',
    ],
  },
  {
    id: 'sme-financing-readiness',
    title: 'The SME financing readiness checklist',
    summary: 'Prepare for funding conversations by clarifying your purpose, readiness and ability to meet obligations.',
    checklist: [
      'Define the purpose, amount and timing of the funding need',
      'Separate grant eligibility from loan repayment obligations',
      'Prepare recent financials, cash-flow assumptions and supporting documents',
      'Compare fees, effective rates, tenure, security and guarantees',
      'Verify current programme terms with official sources and providers',
    ],
  },
]

export default function Guides() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        title="Guides"
        subtitle="Practical checklists for expanding across Asia, building teams and adopting technology."
        image="/media/hero-about.jpg"
      />

      <section>
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <SectionHeading
            eyebrow="Business guides"
            title="A useful first step for your next decision"
            body="Use these short checklists to frame the questions, people and practical steps involved. Each guide links to a focused overview below."
          />

          <nav aria-label={t('Guides overview')} className="mt-8 grid gap-4 sm:grid-cols-2">
            {guides.map((guide) => (
              <a
                key={guide.id}
                href={`#${guide.id}`}
                aria-label={t('Read guide: {{title}}', { title: t(guide.title) })}
                className="group rounded-2xl border border-ink-100 bg-white p-6 transition-colors hover:border-coral-300 hover:bg-coral-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-coral-500"
              >
                <h3 className="text-lg font-bold text-ink-900">{t(guide.title)}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{t(guide.summary)}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-coral-600">
                  {t('Read guide')}
                </span>
              </a>
            ))}
          </nav>
        </div>
      </section>

      <section className="bg-ink-50">
        <div className="mx-auto max-w-6xl space-y-5 px-4 py-16 sm:px-6">
          <SectionHeading eyebrow="Quick checklists" title="Questions to work through" />

          {guides.map((guide) => (
            <article
              key={guide.id}
              id={guide.id}
              aria-labelledby={`${guide.id}-title`}
              className="scroll-mt-28 rounded-2xl bg-white p-6 shadow-sm sm:p-8"
            >
              <h3 id={`${guide.id}-title`} className="text-xl font-bold text-ink-900">
                {t(guide.title)}
              </h3>
              <p className="mt-2 max-w-3xl leading-relaxed text-ink-600">{t(guide.summary)}</p>
              <ul className="mt-5 grid gap-x-8 gap-y-3 text-ink-700 sm:grid-cols-2">
                {guide.checklist.map((item) => (
                  <li key={item} className="border-l-2 border-coral-400 pl-3 leading-relaxed">
                    {t(item)}
                  </li>
                ))}
              </ul>
            </article>
          ))}

          <p className="pt-2 text-sm leading-relaxed text-ink-500">{t('Guide disclaimer')}</p>
        </div>
      </section>

      <CTASection
        title="Need help putting a plan into action?"
        body="Our team can help turn research and checklists into practical next steps for your business."
      />
    </>
  )
}
