import { useTranslation } from 'react-i18next'
import SectionHeading from '../components/SectionHeading'
import ClientsWall from '../components/ClientsWall'
import CTASection from '../components/CTASection'
import StatsStrip from '../components/StatsStrip'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import TeamDirectory from '../components/TeamDirectory'
import { caseStudies } from '../data/caseStudies'

const timeline = [
  {
    year: 'Since 2019',
    title: 'Cross-border business development',
    body: 'Bryan built experience supporting companies with regional business development, sourcing and market relationships across Singapore and Asia.',
  },
  {
    year: '2025',
    title: 'Founded Miss Niu Tech in Singapore',
    body: 'Established Miss Niu Technology Pte Ltd to bring advisory, partner coordination and technology delivery together for growing businesses.',
  },
  {
    year: '2025–2026',
    title: 'On-ground work in China',
    body: 'Spent an extended period in Jinhua, China, building practical relationships across the regional technology and business ecosystem.',
  },
  {
    year: 'Today',
    title: 'Advisory for the next stage of growth',
    body: 'Leads a model that connects compliance guidance, financing support, market access and technology delivery through Miss Niu teams and vetted specialists.',
  },
]

export default function About() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Founder-led cross-border advisory for growth across Asia"
        image="/media/hero-about.jpg"
      />

      {/* Founder */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="Founder & CEO"
              title="Bryan Ng"
              body="A cross-border operator since 2019, Bryan combines regional business development experience with a practical network across Singapore and China."
            />
            <Reveal delay={140} className="mt-8"><div className="rounded-2xl bg-coral-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-coral-600">{t('As featured on')}</p>
              <p className="mt-2 text-lg font-bold text-ink-900">CNA · TODAY · Channel 8</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                {t('"On the Talent Hunt" (Aug 2022) covered how his agency used Workforce Singapore\'s Career Trial programme to grow talent from non-traditional backgrounds; Channel 8 featured him as an employer at WSG\'s Bedok hiring event.')}
              </p>
            </div></Reveal>
          </div>
          <Reveal delay={100}><ol className="relative space-y-8 border-l-2 border-coral-200 pl-8">
            {timeline.map((milestone) => (
              <li key={milestone.year} className="relative">
                <span className="absolute -left-[2.45rem] top-1 h-4 w-4 rounded-full border-4 border-white bg-coral-500" />
                <p className="text-sm font-bold uppercase tracking-wider text-coral-600">{t(milestone.year)}</p>
                <h3 className="mt-1 text-lg font-bold text-ink-900">{t(milestone.title)}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{t(milestone.body)}</p>
              </li>
            ))}
          </ol></Reveal>
        </div>
      </section>

      <TeamDirectory />

      <StatsStrip />

      {/* Case studies */}
      <section id="case-studies" className="scroll-mt-24 bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Case studies"
            title="Case studies & selected engagements"
            body="Anonymised summaries drawn from our company portfolios and selected engagement record. Client names and contract terms are omitted; active and proposed work is labelled, and reported metrics reflect the source materials. We’re happy to sign an NDA to discuss relevant experience in detail."
          />
          <div className="mt-12 space-y-6">
            {caseStudies.map((c, i) => (
              <Reveal key={c.id} delay={Math.min(i * 80, 240)}>
              <details className="group rounded-2xl bg-white p-7 shadow-sm open:ring-1 open:ring-coral-200">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      {c.jurisdictions.map((jurisdiction) => t(jurisdiction)).join(' · ')} · {t(c.clientType)}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold text-ink-900">{t(c.title)}</h3>
                    <p className="mt-1.5 text-sm font-semibold text-coral-600">{t(c.highlight)}</p>
                  </div>
                  <span className="mt-1 shrink-0 rounded-full border border-ink-200 p-2 text-ink-500 transition-transform group-open:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-6 grid gap-6 border-t border-ink-100 pt-6 md:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-ink-500">{t('The problem')}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{t(c.problem)}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-ink-500">{t('Our solution')}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{t(c.solution)}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-ink-500">{t('The result')}</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{t(c.result)}</p>
                    <p className="mt-3 inline-block rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-600">
                      {t(c.status)}
                    </p>
                  </div>
                </div>
              </details>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Client logo wall: every brand on an identical white tile */}
      <ClientsWall />

      <CTASection title="Let's talk about your growth plans" />
    </>
  )
}
