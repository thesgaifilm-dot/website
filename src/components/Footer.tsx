import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Logo from './Logo'
import { site } from '../data/site'

export default function Footer() {
  const { t } = useTranslation()

  return (
    <footer className="bg-ink-900 text-ink-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo light />
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t('Explore')}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="hover:text-coral-400">{t('Home')}</Link></li>
            <li><Link to="/services" className="hover:text-coral-400">{t('Services')}</Link></li>
            <li><Link to="/about" className="hover:text-coral-400">{t('About Us')}</Link></li>
            <li><Link to="/contact" className="hover:text-coral-400">{t('Contact')}</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-white">{t('Services')}</h3>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/services#overseas" className="hover:text-coral-400">{t('Overseas Development')}</Link></li>
            <li><Link to="/services#hr" className="hover:text-coral-400">{t('HR & Workforce')}</Link></li>
            <li><Link to="/services#ai" className="hover:text-coral-400">{t('AI Solutions')}</Link></li>
            <li><Link to="/services#digital" className="hover:text-coral-400">{t('Digital & Marketing')}</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="mx-auto max-w-6xl px-4 py-6 text-xs leading-relaxed text-ink-400 sm:px-6">
          <p>
            © {new Date().getFullYear()} {site.legalName}. {t('All rights reserved.')}
          </p>
        </div>
      </div>
    </footer>
  )
}
