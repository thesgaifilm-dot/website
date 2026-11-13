import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import StatsStrip from '../components/StatsStrip'
import PartnersCarousel from '../components/PartnersCarousel'
import BusinessNetworksSection from '../components/BusinessNetworksSection'
import SectionHeading from '../components/SectionHeading'
import Reveal from '../components/Reveal'
import Typewriter from '../components/Typewriter'
import ReviewsSection from '../components/ReviewsSection'
import { serviceSummaries, footprint, processSteps } from '../data/site'
import { caseStudies } from '../data/caseStudies'

const icons: Record<string, React.ReactNode> = {
  shield: <path d="M12 3 20 6v5c0 5-3.4 8.5-8 10-4.6-1.5-8-5-8-10V6l8-3zm-3.5 9 2.3 2.3 4.7-4.8" />,
  people: <path d="M9 11a4 4 0 100-8 4 4 0 000 8zM2 21v-1a7 7 0 0114 0v1M17 4a4 4 0 010 7.5M22 21v-1a6.5 6.5 0 00-4-6" />,
  ai: <path d="M9 3v2M15 3v2M9 19v2M15 19v2M3 9h2M3 15h2M19 9h2M19 15h2M7 7h10v10H7zM10 10h4v4h-4z" />,
  globe: <path d="M12 3a9 9 0 100 18 9 9 0 000-18zM3 12h18M12 3c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9z" />,
  chart: <path d="M4 20V10M10 20V4M16 20v-8M22 20H2" />,
}

export default function Home() {
  const { t, i18n } = useTranslation()
  const isChinese = i18n.resolvedLanguage === 'zh-SG'
  const publishedCaseStudies = caseStudies
  const [typed, setTyped] = useState(false)
  const heroSegments = useMemo(
    () => [
      { text: t('Expand across Asia') },
      { text: `${isChinese ? '' : ' '}${t('with compliance built in')}`, className: 'text-coral-200' },
    ],
    [t, isChinese],
  )

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-ink-900">
        <img
          src="/media/hero-singapore.jpg"
          alt=""
          aria-hidden="true"
          className="hero-img-anim absolute inset-0 h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-coral-900/75 lg:bg-transparent lg:bg-gradient-to-r lg:from-coral-900 lg:via-coral-900/80 lg:to-ink-900/35"
          aria-hidden="true"
        />
        <div
          className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-ink-900 to-transparent"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:py-40">
          <p className="hero-anim text-sm font-bold uppercase tracking-[0.25em] text-coral-400">
            {t('Cross-border advisory · Singapore')}
          </p>
          <h1 className="mt-4 max-w-3xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            <Typewriter
              segments={heroSegments}
              speed={32}
              startDelay={600}
              onDone={() => setTyped(true)}
            />
          </h1>
          <p className={`mt-6 max-w-2xl text-lg leading-relaxed text-white/85 ${typed ? 'hero-anim' : 'opacity-0'}`}>
            {t('We coordinate vetted compliance specialists, advise on business and financing decisions, and build technology that supports growth across borders.')}
          </p>
          <div className={`mt-9 flex flex-wrap gap-3 sm:gap-4 ${typed ? 'hero-anim' : 'opacity-0'}`}>
            <Link
              to="/contact"
              className="rounded-full bg-coral-500 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-coral-500/25 transition-colors hover:bg-coral-600 sm:px-7"
            >
              {t('Book a Consultation')}
            </Link>
            <Link
              to="/services"
              className="rounded-full border border-white/40 px-5 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-colors hover:border-coral-400 hover:text-coral-400 sm:px-7"
            >
              {t('Explore Our Services')}
            </Link>
          </div>
          <p
            className={`mt-10 text-xs font-medium uppercase tracking-[0.2em] text-ink-300 ${typed ? 'hero-anim' : 'opacity-0'}`}
            style={{ animationDelay: '0.45s' }}
          >
            {t('As featured on')}&nbsp;&nbsp;CNA&nbsp;&nbsp;·&nbsp;&nbsp;TODAY&nbsp;&nbsp;·&nbsp;&nbsp;Channel 8
          </p>

        </div>
      </section>

      <StatsStrip />

      {/* Strategic partners: moved here from About; clients wall lives there now */}
      <PartnersCarousel />
      <BusinessNetworksSection />

      {/* Services overview */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="What we do"
          title="Three service pillars. One trusted advisor."
          body="Compliance advisory, business and financing guidance, and in-house technology—coordinated around your goals and the markets where you want to grow."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serviceSummaries.map((s, i) => (
            <Reveal key={s.id} delay={i * 90}>
              <Link
                to={s.id === 'funding' ? '/sme-financing' : `/services#${s.id}`}
                className="group block h-full rounded-2xl border border-ink-100 p-7 transition-all hover:-translate-y-1 hover:border-coral-300 hover:shadow-lg"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-coral-50 text-coral-600">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    {icons[s.icon]}
                  </svg>
                </span>
                <h3 className="mt-5 text-xl font-bold text-ink-900 group-hover:text-coral-600">{t(s.title)}</h3>
                <p className="mt-2 leading-relaxed text-ink-600">{t(s.blurb)}</p>
                <span className="mt-4 inline-block text-sm font-semibold text-coral-600">{t('Learn more →')}</span>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Why Miss Niu / footprint */}
      <section className="bg-ink-50">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why Miss Niu"
              title="Founder-led advice. Coordinated delivery."
              body="Bryan Ng leads the client relationship while Miss Niu coordinates the right specialists, funding partners and technology teams for each stage of expansion. One accountable point of contact keeps the work connected."
            />
            <Reveal delay={120}><ul className="mt-8 space-y-4">
              {[
                'A central Singapore advisor coordinates your next move',
                'Vetted specialists deliver regulated immigration and legal work',
                'Cross-border coordination across Singapore, China and Malaysia',
                'Technology and AI solutions tailored to business operations',
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-ink-700">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-coral-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {t(point)}
                </li>
              ))}
            </ul></Reveal>
          </div>
          <Reveal delay={180} className="h-full"><div className="rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-coral-600">{t('Our reach')}</h3>
            <div className="mt-5">
              <p className="text-sm font-semibold text-ink-500">{t('Own offices')}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {footprint.ownOffices.map((m) => (
                  <span key={m} className="rounded-full bg-ink-900 px-4 py-1.5 text-sm font-medium text-white">
                    {t(m)}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-6">
              <p className="text-sm font-semibold text-ink-500">{t('Live working partners')}</p>
              <div className="mt-2 flex flex-wrap gap-2">
                {footprint.partnerMarkets.map((m) => (
                  <span key={m} className="rounded-full border border-ink-200 px-4 py-1.5 text-sm text-ink-700">
                    {t(m)}
                  </span>
                ))}
              </div>
            </div>
            <p className="mt-6 text-sm leading-relaxed text-ink-500">
              {t('Our network supports client-specific introductions, regulatory coordination and on-the-ground execution. Local scope and provider availability are confirmed for each engagement.')}
            </p>
          </div></Reveal>
        </div>
      </section>

      {/* How it works */}
      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="How it works"
          title="From first conversation to coordinated delivery."
          body="A clear process keeps your priorities, specialists and next steps connected."
          center
        />
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {processSteps.map((s, i) => (
            <Reveal key={s.step} delay={i * 110}>
              <div className="relative h-full rounded-2xl border border-ink-100 p-7">
                <span className="text-5xl font-extrabold text-coral-100">{s.step}</span>
                <h3 className="mt-3 text-lg font-bold text-ink-900">{t(s.title)}</h3>
                <p className="mt-2 text-sm leading-relaxed text-ink-600">{t(s.body)}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Case studies */}
      <section className="bg-ink-900">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <Reveal className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral-400">{t('Proven in the field')}</p>
              <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                {t('All cross-border case studies')}
              </h2>
            </div>
            <Link to="/about#case-studies" className="text-sm font-semibold text-coral-400 hover:text-coral-300">
              {t('View full case studies →')}
            </Link>
          </Reveal>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {publishedCaseStudies.map((c, i) => (
              <Reveal key={c.id} delay={i * 110} className="h-full">
              <Link
                to="/about#case-studies"
                className="group flex h-full flex-col rounded-2xl bg-ink-800 p-7 transition-colors hover:bg-ink-700"
              >
                <p className="text-xs font-semibold uppercase tracking-wider text-ink-400">
                  {c.jurisdictions.map((jurisdiction) => t(jurisdiction)).join(' · ')}
                </p>
                <h3 className="mt-3 text-lg font-bold leading-snug text-white group-hover:text-coral-300">
                  {t(c.title)}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-300">{t(c.problem).slice(0, 140)}…</p>
                <p className="mt-5 border-t border-ink-700 pt-4 text-sm font-semibold text-coral-400">
                  {t(c.highlight)}
                </p>
              </Link>
              </Reveal>
            ))}
          </div>
          <p className="mt-8 text-xs text-ink-500">
            {t('Case studies are anonymised to protect client confidentiality, a commitment we extend to you.')}
          </p>
        </div>
      </section>

      <ReviewsSection />
    </>
  )
}
