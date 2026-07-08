import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import StatsStrip from '../components/StatsStrip'
import { caseStudies } from '../data/caseStudies'

const timeline = [
  {
    year: '2014–2020',
    title: 'Republic of Singapore Navy',
    body: 'Six years as a regular; top of his cohort. Took part in RIMPAC in Pearl Harbour — the world\'s largest maritime exercise — and operations across Thailand, India, China and Japan. Declined a military scholarship to pursue entrepreneurship.',
  },
  {
    year: '2020',
    title: 'Founded Emptyspace during COVID-19',
    body: 'Started a sales and marketing agency from zero in the middle of the pandemic — cold-calling for the first clients — and grew it to a team of fifteen.',
  },
  {
    year: '2022',
    title: 'National media recognition',
    body: 'Featured on CNA/TODAY ("On the Talent Hunt") and Channel 8 for pioneering Workforce Singapore\'s Career Trial programme, hiring and training candidates from non-traditional backgrounds.',
  },
  {
    year: '2025–2026',
    title: 'AI immersion in China',
    body: 'Spent a year in Jinhua, China studying the AI ecosystem first-hand, building relationships with developers and technology companies, then brought those tools back to Singapore and Malaysia.',
  },
  {
    year: 'Today',
    title: 'Leading Niut',
    body: 'Leads four AI development teams — close to 100 people across China, India, Malaysia and Singapore — alongside Niut\'s cross-border and workforce advisory practice.',
  },
]

const teamStructure = [
  { n: '7', label: 'core staff in Singapore managing all client engagements and compliance projects' },
  { n: '~80', label: 'project-based consultants, scaled up and down so you never pay for idle overhead' },
  { n: '3+3', label: 'our own staff in China and Malaysia handling regulatory work on the ground' },
  { n: '~100', label: 'AI developers across four countries — design, plan, build, implement' },
]

export default function About() {
  return (
    <>
      <section className="bg-ink-900">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-coral-400">About Us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            A growth architecture firm, built the hard way
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink-200">
            Miss Niu Technology Pte Ltd — operating as Niut — is a strategic development and global
            growth architecture firm. We help businesses with overseas development, cross-border
            operations, regulatory compliance, digital transformation and AI adoption.
          </p>
        </div>
      </section>

      {/* Founder */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <SectionHeading
              eyebrow="Founder & CEO"
              title="Mr Bryan Ng (Huang Keqin)"
              body="Bryan's path — military discipline, pandemic-era entrepreneurship, and a year inside China's AI ecosystem — is why Niut executes the way it does."
            />
            <div className="mt-8 rounded-2xl bg-coral-50 p-6">
              <p className="text-sm font-bold uppercase tracking-wider text-coral-600">As featured on</p>
              <p className="mt-2 text-lg font-bold text-ink-900">CNA · TODAY · Channel 8</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-600">
                "On the Talent Hunt" (Aug 2022) covered how his agency used Workforce Singapore's
                Career Trial programme to grow talent from non-traditional backgrounds; Channel 8
                featured him as an employer at WSG's Bedok hiring event.
              </p>
            </div>
          </div>
          <ol className="relative space-y-8 border-l-2 border-coral-200 pl-8">
            {timeline.map((t) => (
              <li key={t.year} className="relative">
                <span className="absolute -left-[2.45rem] top-1 h-4 w-4 rounded-full border-4 border-white bg-coral-500" />
                <p className="text-sm font-bold uppercase tracking-wider text-coral-600">{t.year}</p>
                <h3 className="mt-1 text-lg font-bold text-ink-900">{t.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-600">{t.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <StatsStrip />

      {/* Model & team */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="How we're built"
          title="The hub-and-spoke model"
          body="Niut is the central operations hub. Around it: carefully chosen spokes for technology, product sourcing, legal & compliance, and AI development. The result is lean operations, technical resilience and a synchronised footprint across borders — without the overhead of a big consultancy."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {teamStructure.map((t) => (
            <div key={t.label} className="rounded-2xl border border-ink-100 p-7 text-center">
              <p className="text-4xl font-extrabold text-coral-500">{t.n}</p>
              <p className="mt-3 text-sm leading-relaxed text-ink-600">{t.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section id="case-studies" className="scroll-mt-24 bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="Case studies"
            title="Completed engagements"
            body="Summarised and anonymised in line with our confidentiality policy — we never publish client names, contract terms or private financials. We're happy to sign an NDA and discuss relevant experience in detail."
          />
          <div className="mt-12 space-y-6">
            {caseStudies.map((c) => (
              <details key={c.id} className="group rounded-2xl bg-white p-7 shadow-sm open:ring-1 open:ring-coral-200">
                <summary className="flex cursor-pointer list-none items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                      {c.jurisdictions.join(' · ')} — {c.clientType}
                    </p>
                    <h3 className="mt-1.5 text-xl font-bold text-ink-900">{c.title}</h3>
                    <p className="mt-1.5 text-sm font-semibold text-coral-600">{c.highlight}</p>
                  </div>
                  <span className="mt-1 shrink-0 rounded-full border border-ink-200 p-2 text-ink-500 transition-transform group-open:rotate-45">
                    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M12 5v14M5 12h14" />
                    </svg>
                  </span>
                </summary>
                <div className="mt-6 grid gap-6 border-t border-ink-100 pt-6 md:grid-cols-3">
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-ink-500">The problem</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-ink-500">Our solution</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-ink-500">The result</h4>
                    <p className="mt-2 text-sm leading-relaxed text-ink-700">{c.result}</p>
                    <p className="mt-3 inline-block rounded-full bg-ink-50 px-3 py-1 text-xs font-semibold text-ink-600">
                      {c.status}
                    </p>
                  </div>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <CTASection title="Let's talk about your growth plans" />
    </>
  )
}
