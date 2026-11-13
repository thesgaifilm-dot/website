import { Link } from 'react-router-dom'
import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { useTranslation } from 'react-i18next'
import { footprint } from '../data/site'

export default function Services() {
  const { t } = useTranslation()

  return (
    <>
      <PageHero
        title="Services"
        subtitle="Compliance advisory, business and financing guidance, in-house technology and trade show support for cross-border growth."
        image="/media/hero-services.jpg"
      />

      {/* Overseas Development Consultation */}
      <section id="compliance" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="01 · Compliance Advisory"
            title="One advisor. A coordinated compliance stack."
            body="Miss Niu Tech acts as your central advisor, mapping requirements and coordinating vetted specialists for cross-border setup and expansion. We help keep the people, paperwork and next steps connected."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                t: 'Immigration & workforce',
                d: 'Partner-led immigration casework and workforce coordination for founders, employees and families expanding into new markets.',
              },
              {
                t: 'Corporate secretarial & legal',
                d: 'Vetted providers deliver regulated corporate-secretarial and legal work; we coordinate requirements, milestones and communication.',
              },
              {
                t: 'Relocation, accommodation & education',
                d: 'Coordinate practical settling-in options for business owners, employees and families, based on location and provider availability.',
              },
              {
                t: 'Market entry & governance',
                d: 'Map cross-border setup, local requirements, governance and operating dependencies across Singapore, China and Malaysia.',
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 100} className="h-full">
                <div className="h-full rounded-2xl border border-ink-100 p-7">
                  <h3 className="font-bold text-ink-900">{t(x.t)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{t(x.d)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 rounded-xl border border-coral-200 bg-coral-50 p-4 text-sm leading-relaxed text-ink-700">
            {t('Miss Niu Tech provides advisory and coordination. Services requiring professional licensing or registration are performed by the relevant qualified partner provider.')}
          </p>
          <Reveal delay={150} className="mt-8">
            <div className="flex flex-wrap gap-2">
              {[...footprint.ownOffices, ...footprint.partnerMarkets].map((m) => (
                <span key={m} className="rounded-full bg-ink-50 px-4 py-1.5 text-sm text-ink-700">
                  {t(m)}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* Funding and SME financing */}
      <section id="funding" className="scroll-mt-24 bg-ink-50">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <SectionHeading
            eyebrow="02 · Business & Financing Advisory"
            title="Make clearer decisions about capital."
            body="We advise businesses on financing options, cash flow, working capital and lender readiness—services that stand on their own, regardless of grant availability."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: 'Business financing strategy',
                d: 'Clarify capital needs, business priorities and financing options before deciding how to fund the next stage of growth.',
              },
              {
                t: 'Cash flow & capital planning',
                d: 'Review working capital, projected cash flow and planned use of funds to support informed business decisions.',
              },
              {
                t: 'Lender readiness',
                d: 'Organise supporting documents and prepare for lender discussions, including a clear view of repayment capacity.',
              },
              {
                t: 'Optional grant support',
                d: 'Where a suitable programme is available, grant review can be added as a separate service; it is not a condition of advisory support.',
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 90} className="h-full">
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                  <span className="text-sm font-bold text-coral-500">0{i + 1}</span>
                  <h3 className="mt-1 font-bold text-ink-900">{t(x.t)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{t(x.d)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-sm leading-relaxed text-ink-500 lg:col-span-2">
            {t('Miss Niu Tech provides advisory, not lending. Financing is not guaranteed; eligibility, approval, terms and repayment obligations are determined by the relevant lender.')}
          </p>
          <Link to="/sme-financing" className="mt-5 inline-flex rounded-full bg-coral-500 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-coral-600 lg:col-span-2">
            {t('Explore SME financing')}
          </Link>
        </div>
      </section>

      {/* Technology and AI */}
      <section id="technology" className="scroll-mt-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <SectionHeading
            eyebrow="03 · Technology & AI"
            title="Technology made for the way you work."
            body="Miss Niu Tech combines software delivery with practical AI and process integration. We scope the work around your operations, success measures and the people who will use it."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: 'Custom software',
                d: 'Web and mobile applications, internal tools and business platforms designed around your workflows.'
              },
              {
                t: 'AI & automation',
                d: 'AI assistants, content workflows and process automation selected for practical business use cases.'
              },
              {
                t: 'Systems integration',
                d: 'Connect CRM, ERP, HRM, POS and inventory systems, and improve the hand-offs between them.'
              },
              {
                t: 'AI-led growth workflows',
                d: 'AI-assisted lead generation, content and search visibility workflows tailored to your market and team.'
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 90} className="h-full">
                <div className="h-full rounded-2xl border border-ink-100 p-6">
                  <span className="text-sm font-bold text-coral-500">0{i + 1}</span>
                  <h3 className="mt-1 font-bold text-ink-900">{t(x.t)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{t(x.d)}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Trade show management */}
      <section id="trade-shows" className="scroll-mt-24 bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="04 · Trade Shows & Market Activation"
            title="Exhibit worldwide with a locally coordinated team."
            body="Miss Niu Tech is the official marketing partner in Singapore for IBE and CMBe. We also tailor trade show sourcing and management for customers naming an event or market anywhere in the world, subject to organiser availability and event requirements."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                t: 'IBE & CMBe in Singapore',
                d: 'Explore exhibitor opportunities for International Beauty Expo (IBE) and CMBe through Miss Niu Tech’s Singapore marketing partnership.',
              },
              {
                t: 'Custom global trade show management',
                d: 'Name the show and destination. We can help source the opportunity and coordinate a tailored exhibitor plan worldwide.',
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 100} className="h-full">
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm">
                  <h3 className="font-bold text-ink-900">{t(x.t)}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{t(x.d)}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Link to="/trade-shows" className="mt-8 inline-flex rounded-full border border-coral-300 px-5 py-3 text-sm font-semibold text-coral-700 transition-colors hover:bg-coral-100">
            {t('Explore trade show support')}
          </Link>
        </div>
      </section>

      <CTASection title="Let’s map your next growth move" body="Tell us what you’re planning, and we’ll help you identify the right advisors, financing strategy and technology support." />
    </>
  )
}
