import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import SectionHeading from '../components/SectionHeading'

/**
 * Consulting checkout, linked from the header. Each service checks
 * out through a Stripe-hosted Payment Link: card details never touch
 * this site, and no secret keys live in this codebase.
 */

const services = [
  {
    name: 'Growth Strategy Consultation',
    scope: '90 minutes · senior consultant',
    price: 'S$380',
    blurb:
      'A focused diagnosis across market entry, workforce, and AI opportunity, finishing with a written action summary you keep.',
    includes: ['90-minute session (in person or video)', 'Pre-session questionnaire review', 'Written action summary within 3 days'],
    link: 'https://buy.stripe.com/3cI5kvaiLdTIgeB80357W01',
  },
  {
    name: 'HR & Workforce Compliance Audit',
    scope: 'Fixed scope · 2–3 weeks',
    price: 'S$1,500',
    blurb:
      'A full audit of employment contracts, MOM compliance, payroll structure, and workforce planning for Singapore SMEs.',
    includes: ['Contract & policy review', 'MOM / EA compliance check', 'Written report + remediation roadmap', 'One follow-up session'],
    link: 'https://buy.stripe.com/4gM00baiLg1Q8M9eor57W02',
  },
  {
    name: 'Overseas Market-Entry Blueprint',
    scope: 'Fixed scope · 4–6 weeks · one market',
    price: 'S$2,880',
    blurb:
      'Feasibility, regulatory and partner landscape, cost model, and a 90-day entry roadmap for one target market in Asia.',
    includes: ['Feasibility & sizing assessment', 'Regulatory + partner landscape', 'Entry cost model', '90-day roadmap + handover session'],
    link: 'https://buy.stripe.com/8x2dR1aiL9Dsfax80357W03',
  },
]

export default function ConsultingSuite() {
  return (
    <>
      <PageHero
        title="Consulting Suite"
        subtitle="Three fixed-price engagements, bookable directly"
        image="/media/hero-about.jpg"
      />

      <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
        <SectionHeading
          eyebrow="Direct booking"
          title="Choose your engagement"
          body="Secure checkout is handled end-to-end by Stripe. You'll receive a receipt immediately; we'll be in touch within one business day to schedule."
          center
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.name} delay={i * 100} className="h-full">
              <div className="flex h-full flex-col rounded-2xl border border-ink-100 bg-white p-8 shadow-sm transition-all hover:-translate-y-1 hover:border-coral-300 hover:shadow-lg">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-coral-600">{s.scope}</p>
                <h3 className="mt-3 text-xl font-bold text-ink-900">{s.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-600">{s.blurb}</p>
                <ul className="mt-5 flex-1 space-y-2.5">
                  {s.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-ink-700">
                      <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 text-coral-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-3xl font-extrabold tracking-tight text-ink-900">
                  {s.price}
                  <span className="ml-1 text-sm font-medium text-ink-500">SGD</span>
                </p>
                <a
                  href={s.link}
                  className="mt-5 block rounded-full bg-coral-500 px-6 py-3.5 text-center text-sm font-semibold text-white shadow-lg shadow-coral-500/25 transition-colors hover:bg-coral-600"
                >
                  Checkout with Stripe
                </a>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-xl text-center text-xs leading-relaxed text-ink-500">
          Payments are processed by Stripe over an encrypted connection. Card details never
          touch our servers. Invoiced engagements remain available. Contact us if your
          company requires PO-based billing.
        </p>
      </section>
    </>
  )
}
