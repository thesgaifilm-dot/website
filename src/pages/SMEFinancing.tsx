import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

const fundingPaths = [
  {
    title: 'Financing strategy',
    body: 'Clarify working capital, trade, equipment or expansion needs, then compare financing approaches against business cash flow and repayment capacity.',
  },
  {
    title: 'Enterprise Financing Scheme',
    body: 'Review relevant EFS pathways and prepare a financing plan around business needs, where an applicable scheme is available.',
  },
  {
    title: 'Bank and commercial financing',
    body: 'Get ready for lender conversations with a clear use of funds, cash-flow assumptions, supporting documents and a considered view of offer terms.',
  },
]

const steps = [
  {
    number: '01',
    title: 'Understand the financing need',
    body: 'We start with your business stage, purpose of funds, cash-flow position and planned use of capital.'
  },
  {
    number: '02',
    title: 'Compare financing options',
    body: 'We compare relevant EFS, bank and commercial financing options against your operating needs and repayment capacity.'
  },
  {
    number: '03',
    title: 'Prepare and compare',
    body: 'We support document readiness and help you understand key terms, costs and repayment obligations before you decide.',
  },
]

export default function SMEFinancing() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        title="SME Financing in Singapore"
        subtitle="Financing strategy, practical readiness and clearer next steps."
        image="/media/hero-services.jpg"
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Business & financing advisory"
          title="Build a financing plan around the business."
          body="Miss Niu Tech advises Singapore SMEs on financing options, cash-flow planning and lender readiness, helping businesses make decisions based on operating needs and repayment capacity."
        />
        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {fundingPaths.map((path, index) => (
            <Reveal key={path.title} delay={index * 90} className="h-full">
              <article className="h-full rounded-2xl border border-ink-100 bg-white p-7 shadow-sm">
                <span className="text-sm font-bold tracking-[0.18em] text-coral-600">0{index + 1}</span>
                <h3 className="mt-4 text-xl font-bold text-ink-900">{t(path.title)}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{t(path.body)}</p>
              </article>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm leading-relaxed text-ink-500">
          {t('Optional additional support: grant review may be considered when a relevant programme fits, but it is not a prerequisite for financing advisory.')}
        </p>
      </section>

      <section className="bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="How we help"
            title="From financing question to a considered next step."
            body="A structured advisory process helps you understand available financing options before committing time or taking on a repayment obligation."
            center
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 90} className="h-full">
                <article className="h-full rounded-2xl bg-white p-7 shadow-sm">
                  <span className="text-4xl font-extrabold text-coral-200">{step.number}</span>
                  <h3 className="mt-4 text-lg font-bold text-ink-900">{t(step.title)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{t(step.body)}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="rounded-2xl border border-coral-200 bg-coral-50 p-7 sm:p-9">
          <h2 className="text-xl font-bold text-ink-900">{t('Important financing information')}</h2>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-ink-700">
            {t('Miss Niu Tech provides advisory, not lending. Financing is not guaranteed. Eligibility, approval, available amounts, pricing and final terms are determined by the relevant lender and may change. Borrowers remain responsible for repayment under their loan agreements.')}
          </p>
          <p className="mt-3 max-w-4xl text-sm leading-relaxed text-ink-700">
            {t('We confirm applicable routes and current requirements with you before proceeding. Always review official scheme guidance and obtain independent professional advice where appropriate.')}
          </p>
          <Link to="/guides" className="mt-5 inline-flex font-semibold text-coral-700 underline decoration-coral-300 underline-offset-4 hover:text-coral-900">
            {t('Browse business guides')}
          </Link>
        </div>
      </section>

      <CTASection
        title="Let’s talk about your financing plan"
        body="Tell us what you are building, what capital it needs and where you are in planning. We’ll help you map practical financing next steps."
      />
    </>
  )
}
