import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'

const pageLinks = [
  { to: '/about', label: 'About Us' },
  { to: '/about#our-team', label: 'Our Team' },
  { to: '/sme-financing', label: 'SME Financing' },
  { to: '/services#grants', label: 'SME Grants' },
  { to: '/guides', label: 'Compliance Guides' },
  { to: '/services', label: 'Services' },
  { to: '/trade-shows', label: 'Tradeshows' },
  { to: '/about#case-studies', label: 'Case Studies' },
  { to: '/contact', label: 'Contact Info' },
  { to: '/consulting-suite-mq7x', label: 'Booking Consulting', primary: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  const location = useLocation()

  const closeMenu = () => setOpen(false)
  const isCurrentPage = (to: string) => {
    const [pathname, hash] = to.split('#')
    return location.pathname === pathname && (hash ? location.hash === `#${hash}` : !location.hash)
  }

  const pageLinkClass = (to: string, primary = false) => {
    const isActive = isCurrentPage(to)
    return `inline-flex shrink-0 items-center whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-500 ${
      primary
        ? 'bg-ink-900 text-white shadow-sm hover:bg-coral-700'
        : isActive
          ? 'text-coral-700 underline decoration-2 underline-offset-8'
          : 'text-ink-800 hover:text-coral-700 hover:underline hover:decoration-2 hover:underline-offset-8'
    }`
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/95 backdrop-blur">
      <nav aria-label={t('Main navigation')} className="mx-auto flex min-h-18 w-full max-w-[1400px] flex-nowrap items-center justify-between gap-3 px-4 sm:px-6">
        <Link to="/" onClick={closeMenu} aria-label={t('Miss Niu Technology, home')} className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-end gap-3 xl:flex">
          <LanguageSwitcher className="shrink-0" />
          <div className="ml-auto flex min-w-0 flex-1 flex-nowrap items-center justify-between gap-1">
            {pageLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                aria-current={isCurrentPage(link.to) ? 'page' : undefined}
                className={pageLinkClass(link.to, link.primary)}
              >
                {t(link.label)}
              </Link>
            ))}
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-800 transition-colors hover:bg-ink-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-coral-500"
            onClick={() => setOpen((isOpen) => !isOpen)}
            aria-expanded={open}
            aria-controls="mobile-page-navigation"
            aria-label={open ? t('Close menu') : t('Open menu')}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-page-navigation" className="border-t border-ink-100 bg-white px-4 pb-5 pt-2 xl:hidden">
          <div className="mx-auto grid max-w-[1400px] gap-1 sm:grid-cols-2">
            {pageLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                aria-current={isCurrentPage(link.to) ? 'page' : undefined}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-coral-500 ${
                  link.primary
                    ? 'bg-ink-900 text-white hover:bg-coral-700'
                    : isCurrentPage(link.to)
                      ? 'bg-coral-50 text-coral-700'
                      : 'text-ink-800 hover:bg-ink-50'
                }`}
              >
                {t(link.label)}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
