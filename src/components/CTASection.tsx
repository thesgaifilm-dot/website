import { Link } from 'react-router-dom'
import Reveal from './Reveal'
import { site } from '../data/site'

export default function CTASection({
  title = "Let's map your next stage of growth",
  body = 'A free, no obligation consultation. Tell us where you want to take the business, and we will tell you honestly what it takes to get there.',
}: {
  title?: string
  body?: string
}) {
  return (
    <section className="bg-coral-500">
      <Reveal className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-4 py-16 text-center sm:px-6">
        <h2 className="max-w-2xl text-3xl font-extrabold tracking-tight text-white sm:text-4xl">{title}</h2>
        <p className="max-w-xl text-coral-50">{body}</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            to="/contact"
            className="rounded-full bg-ink-900 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-ink-800"
          >
            Book a free consultation
          </Link>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border-2 border-white/70 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-coral-600"
          >
            WhatsApp {site.phone}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
