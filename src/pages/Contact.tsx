import { useState } from 'react'
import type { FormEvent } from 'react'
import PageHero from '../components/PageHero'
import Reveal from '../components/Reveal'
import { site } from '../data/site'

const interests = [
  'Overseas development consultation',
  'HR & workforce consultancy',
  'AI solutions',
  'Digital transformation / marketing',
  'Not sure yet, advise me',
]

const companySizes = ['1–10 employees', '11–50 employees', '51–200 employees', 'More than 200 employees']

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: interests[0],
    size: companySizes[0],
    message: '',
    consent: false,
  })

  const set = (k: keyof typeof form, v: string | boolean) => setForm((f) => ({ ...f, [k]: v }))

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    const text = [
      `Hello Miss Niu, I'd like to book a consultation.`,
      `Name: ${form.name}`,
      `Company: ${form.company}`,
      form.email && `Email: ${form.email}`,
      form.phone && `Phone: ${form.phone}`,
      `Interested in: ${form.interest}`,
      `Company size: ${form.size}`,
      form.message && `Details: ${form.message}`,
    ]
      .filter(Boolean)
      .join('\n')
    window.open(`${site.whatsapp}?text=${encodeURIComponent(text)}`, '_blank', 'noopener,noreferrer')
  }

  const inputCls =
    'w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-900 placeholder-ink-400 focus:border-coral-400 focus:outline-none focus:ring-2 focus:ring-coral-100'

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Book your free consultation"
        image="/media/hero-contact.jpg"
      />

      <section className="mx-auto grid max-w-6xl items-start gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Form */}
        <Reveal>
        <form onSubmit={handleSubmit} className="rounded-3xl border border-ink-100 p-7 sm:p-10">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink-800">Your name *</span>
              <input required value={form.name} onChange={(e) => set('name', e.target.value)} className={inputCls} placeholder="Tan Wei Ming" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink-800">Company *</span>
              <input required value={form.company} onChange={(e) => set('company', e.target.value)} className={inputCls} placeholder="Acme Pte Ltd" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink-800">Email</span>
              <input type="email" value={form.email} onChange={(e) => set('email', e.target.value)} className={inputCls} placeholder="you@company.sg" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink-800">Phone</span>
              <input type="tel" value={form.phone} onChange={(e) => set('phone', e.target.value)} className={inputCls} placeholder="+65 9XXX XXXX" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink-800">What do you need help with? *</span>
              <select value={form.interest} onChange={(e) => set('interest', e.target.value)} className={inputCls}>
                {interests.map((i) => (
                  <option key={i}>{i}</option>
                ))}
              </select>
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-ink-800">Company size *</span>
              <select value={form.size} onChange={(e) => set('size', e.target.value)} className={inputCls}>
                {companySizes.map((s) => (
                  <option key={s}>{s}</option>
                ))}
              </select>
            </label>
          </div>
          <label className="mt-5 block">
            <span className="mb-1.5 block text-sm font-semibold text-ink-800">Tell us a little about your goals</span>
            <textarea rows={4} value={form.message} onChange={(e) => set('message', e.target.value)} className={inputCls} placeholder="e.g. We want to automate our order processing and expand to Malaysia next year…" />
          </label>

          <label className="mt-5 flex items-start gap-3 text-sm text-ink-600">
            <input
              type="checkbox"
              required
              checked={form.consent}
              onChange={(e) => set('consent', e.target.checked)}
              className="mt-0.5 h-4 w-4 accent-coral-500"
            />
            <span>
              I consent to {site.legalName} collecting and using the personal data provided above to
              respond to my enquiry, in accordance with the Personal Data Protection Act 2012. *
            </span>
          </label>

          <button
            type="submit"
            className="mt-7 w-full rounded-full bg-coral-500 px-7 py-4 text-sm font-semibold text-white transition-colors hover:bg-coral-600 sm:w-auto"
          >
            Send via WhatsApp →
          </button>
          <p className="mt-3 text-xs text-ink-500">
            Submitting opens WhatsApp with your message pre-filled. Nothing is sent until you press
            send there, and we respond within one business day.
          </p>
        </form>
        </Reveal>

        {/* Sidebar */}
        <Reveal delay={140}>
        <div className="space-y-6">
          <div className="rounded-3xl bg-ink-900 p-8">
            <h2 className="text-lg font-bold text-white">Prefer to talk directly?</h2>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-full bg-coral-500 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:bg-coral-600"
            >
              WhatsApp {site.phone}
            </a>
            <a
              href={site.phoneHref}
              className="mt-3 block rounded-full border border-ink-600 px-6 py-3.5 text-center text-sm font-semibold text-white transition-colors hover:border-coral-400"
            >
              Call {site.phone}
            </a>
            <p className="mt-4 text-xs leading-relaxed text-ink-400">
              {site.legalName} · Singapore HQ, with offices in China and Malaysia.
            </p>
          </div>

        </div>
        </Reveal>
      </section>
    </>
  )
}
