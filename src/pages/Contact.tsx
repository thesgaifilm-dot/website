import { useState } from 'react'
import type { FormEvent } from 'react'
import { site } from '../data/site'

const interests = [
  'Overseas development consultation',
  'HR & workforce consultancy',
  'AI solutions',
  'Digital transformation / marketing',
  'Not sure yet — advise me',
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
      `Hello Niut, I'd like to book a consultation.`,
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
      <section className="bg-ink-900">
        <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-coral-400">Contact Us</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Book your free consultation
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-200">
            No obligation, no jargon. Tell us about your business and we'll tell you — honestly —
            where the opportunities are and whether a project makes sense.
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 lg:grid-cols-[1.4fr_1fr]">
        {/* Form */}
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
            Submitting opens WhatsApp with your message pre-filled — nothing is sent until you press
            send there. We respond within one business day.
          </p>
        </form>

        {/* Sidebar */}
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

          <div className="rounded-3xl border border-ink-100 p-8">
            <h2 className="text-lg font-bold text-ink-900">What to prepare</h2>
            <p className="mt-2 text-sm text-ink-600">That's all we need to get started — we handle the rest.</p>
            <ul className="mt-4 space-y-3">
              {[
                'A short overview of your business',
                'Your growth goals or the challenge at hand',
                'Any timelines or budgets already in mind',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-ink-800">
                  <svg viewBox="0 0 24 24" className="mt-0.5 h-5 w-5 shrink-0 text-coral-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl bg-coral-50 p-8">
            <h2 className="text-lg font-bold text-ink-900">Our promises</h2>
            <ul className="mt-4 space-y-3 text-sm text-ink-700">
              <li>✓ NDA available before any detailed discussion</li>
              <li>✓ Response within one business day</li>
              <li>✓ Honest advice — if we're not the right fit, we'll say so</li>
              <li>✓ No fees before we've agreed on a scope together</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  )
}
