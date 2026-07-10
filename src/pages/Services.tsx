import SectionHeading from '../components/SectionHeading'
import CTASection from '../components/CTASection'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { footprint } from '../data/site'

export default function Services() {
  return (
    <>
      <PageHero
        title="Services"
        subtitle="Strategy, people and technology under one roof"
        image="/media/hero-services.jpg"
      />

      {/* Overseas Development Consultation */}
      <section id="overseas" className="scroll-mt-24">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="01 · Overseas Development Consultation"
            title="Expand into Asia with people already on the ground"
            body="We maintain our own staffed offices in China and Malaysia and live working partners across seven more Asian markets. Incorporation, licensing, market representative agreements and regulatory filings are handled by our own people, never passed to strangers."
          />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {[
              {
                t: 'Market entry & presence',
                d: 'Market research and investor profiling, overseas incorporation, licences and permits, IP and trademark registration, and legal entity structuring.',
              },
              {
                t: 'Governance & compliance',
                d: 'Cross-border governance models, data protection compliance across jurisdictions, transfer pricing documentation and tax-efficient structuring.',
              },
              {
                t: 'Business development',
                d: 'Curated investor and buyer matching, in-market representation, supply chain coordination and ongoing relationship management.',
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 100} className="h-full">
                <div className="h-full rounded-2xl border border-ink-100 p-7">
                  <h3 className="font-bold text-ink-900">{x.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={150} className="mt-8">
            <div className="flex flex-wrap gap-2">
              {[...footprint.ownOffices, ...footprint.partnerMarkets].map((m) => (
                <span key={m} className="rounded-full bg-ink-50 px-4 py-1.5 text-sm text-ink-700">
                  {m}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* HR & Workforce Consultancy */}
      <section id="hr" className="scroll-mt-24 bg-ink-50">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <SectionHeading
            eyebrow="02 · HR & Workforce Consultancy"
            title="Build high-performing teams, fast"
            body="Our founder has built teams of 40, 60 and 80 people in four to six months, repeatedly and across industries. We bring that playbook to your organisation: recruitment engines, structured onboarding, workforce development and retention strategies that hold up under rapid growth."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: 'Talent acquisition',
                d: 'Recruitment strategy, employer positioning and candidate pipelines, including sourcing from non-traditional talent pools.',
              },
              {
                t: 'Rapid team building',
                d: 'Structured hiring sprints, onboarding systems and role design to take a team from zero to fully operational in months.',
              },
              {
                t: 'Workforce development',
                d: 'Traineeship and career-conversion programme design, structured reskilling pathways and on-the-job training frameworks.',
              },
              {
                t: 'Organisational design',
                d: 'Flexible and hybrid work models, performance frameworks, and inclusive practices that retain returning parents and senior talent.',
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 90} className="h-full">
                <div className="h-full rounded-2xl bg-white p-6 shadow-sm">
                  <span className="text-sm font-bold text-coral-500">0{i + 1}</span>
                  <h3 className="mt-1 font-bold text-ink-900">{x.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* AI Solutions */}
      <section id="ai" className="scroll-mt-24">
        <div className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2">
          <SectionHeading
            eyebrow="03 · AI Solutions"
            title="AI that pays for itself"
            body="Close to 100 developers across China, India, Malaysia and Singapore build and deploy AI tools sourced from one of the world's leading AI ecosystems, adapted for Southeast Asian businesses and delivered end to end."
          />
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                t: 'Design',
                d: 'We map your operations and identify where AI genuinely saves cost or grows revenue, not AI for its own sake.',
              },
              {
                t: 'Plan',
                d: 'Detailed project plans, timelines and budgets with clear success metrics before a line of code is written.',
              },
              {
                t: 'Build',
                d: 'Chatbots, content generation, workflow automation and custom systems built by our four regional development teams.',
              },
              {
                t: 'Implement',
                d: 'Deployment into your business plus staff training, so the tools actually get used.',
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 90} className="h-full">
                <div className="h-full rounded-2xl border border-ink-100 p-6">
                  <span className="text-sm font-bold text-coral-500">0{i + 1}</span>
                  <h3 className="mt-1 font-bold text-ink-900">{x.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Transformation & Marketing */}
      <section id="digital" className="scroll-mt-24 bg-ink-50">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <SectionHeading
            eyebrow="04 · Digital Transformation & Marketing"
            title="Systems that run themselves, brands that sell"
            body="From software implementation and workflow re-engineering to premium brand positioning and performance marketing across the channels your customers actually use."
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {[
              {
                t: 'Operational integration',
                d: 'ERP, CRM, HRM, POS and inventory systems implemented and connected, with workflows redesigned so automation actually sticks.',
              },
              {
                t: 'Marketing strategy',
                d: 'Digital customer journeys, AI-assisted content for lead generation, and campaign management across Meta, Google, Xiaohongshu and influencer channels.',
              },
            ].map((x, i) => (
              <Reveal key={x.t} delay={i * 100} className="h-full">
                <div className="h-full rounded-2xl bg-white p-7 shadow-sm">
                  <h3 className="font-bold text-ink-900">{x.t}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-600">{x.d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
