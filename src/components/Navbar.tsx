import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'

const pageLinks = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
  { to: '/sme-financing', label: 'SME Financing' },
  { to: '/trade-shows', label: 'Trade Shows' },
  { to: '/guides', label: 'Guides' },
  { to: '/consulting-suite-mq7x', label: 'Book Consulting' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact', primary: true },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const closeMenu = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/95 backdrop-blur">
      <nav aria-label={t('Main navigation')} className="mx-auto flex min-h-18 max-w-screen-2xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link to="/" onClick={closeMenu} aria-label={t('Miss Niu Technology, home')} className="shrink-0">
          <Logo />
        </Link>

        <div className="hidden min-w-0 flex-1 items-center justify-between gap-3 xl:flex">
          <div className="ml-auto flex min-w-0 flex-1 items-center justify-between gap-1">
            {pageLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `whitespace-nowrap rounded-full px-2.5 py-2 text-[13px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-500 ${
                    link.primary
                      ? 'bg-coral-500 text-white shadow-sm hover:bg-coral-600'
                      : isActive
                        ? 'bg-coral-50 text-coral-700'
                        : 'text-ink-700 hover:bg-ink-50 hover:text-coral-700'
                  }`
                }
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>
          <LanguageSwitcher className="shrink-0" />
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
          <div className="mx-auto grid max-w-screen-2xl gap-1 sm:grid-cols-2">
            {pageLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenu}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-coral-500 ${
                    link.primary
                      ? 'bg-coral-500 text-white hover:bg-coral-600'
                      : isActive
                        ? 'bg-coral-50 text-coral-700'
                        : 'text-ink-800 hover:bg-ink-50'
                  }`
                }
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
