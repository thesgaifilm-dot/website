import { Link } from 'react-router-dom'
import Logo from './Logo'
import { site } from '../data/site'

export default function Footer() {
  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
          <p className="mt-4 max-w-md text-sm leading-relaxed text-ink-300">
            {site.legalName}, operating as {site.brand} — a strategic development and global growth
            architecture firm headquartered in Singapore, with our own offices in China and Malaysia
            and live partners across Asia.
          </p>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 rounded-full bg-coral-500 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-coral-600"
          >
            WhatsApp us — {site.phone}
          </a>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Explore</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-coral-400">Home</Link></li>
            <li><Link to="/services" className="hover:text-coral-400">Services</Link></li>
            <li><Link to="/about" className="hover:text-coral-400">About Us</Link></li>
            <li><Link to="/contact" className="hover:text-coral-400">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/services#overseas" className="hover:text-coral-400">Overseas Development</Link></li>
            <li><Link to="/services#hr" className="hover:text-coral-400">HR & Workforce</Link></li>
            <li><Link to="/services#ai" className="hover:text-coral-400">AI Solutions</Link></li>
            <li><Link to="/services#digital" className="hover:text-coral-400">Digital & Marketing</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="mx-auto max-w-6xl space-y-3 px-4 py-6 text-xs leading-relaxed text-ink-400 sm:px-6">
          <p>
            Client case studies are anonymised. We never publish client names, contract terms or
            confidential data, and we are ready to sign a Non-Disclosure Agreement before any detailed
            discussion.
          </p>
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
