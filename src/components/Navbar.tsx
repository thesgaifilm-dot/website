import { useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'

const linksBeforeResources = [
  { to: '/', label: 'Home' },
  { to: '/services', label: 'Services' },
]

const linksAfterResources = [
  { to: '/consulting-suite-mq7x', label: 'Book Consulting' },
  { to: '/about', label: 'About Us' },
  { to: '/contact', label: 'Contact' },
]

const resourceLinks = [
  { to: '/trade-shows', label: 'Trade Shows' },
  { to: '/guides', label: 'Guides' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [resourcesOpen, setResourcesOpen] = useState(false)
  const { t } = useTranslation()
  const location = useLocation()
  const resourcesActive = resourceLinks.some((link) => link.to === location.pathname)

  const closeMenus = () => {
    setOpen(false)
    setResourcesOpen(false)
  }

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/90 backdrop-blur">
      <nav className="mx-auto flex h-18 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link to="/" onClick={closeMenus} aria-label={t('Miss Niu Technology, home')}>
          <Logo />
        </Link>

        <div className="hidden items-center gap-6 xl:flex">
          {linksBeforeResources.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenus}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-coral-600' : 'text-ink-700 hover:text-coral-600'
                }`
              }
            >
              {t(link.label)}
            </NavLink>
          ))}

          <div
            className="relative"
            onBlur={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                setResourcesOpen(false)
              }
            }}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setResourcesOpen(false)
            }}
          >
            <button
              type="button"
              aria-expanded={resourcesOpen}
              aria-controls="desktop-resources-menu"
              onClick={() => setResourcesOpen((isOpen) => !isOpen)}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-coral-500 ${
                resourcesActive || resourcesOpen
                  ? 'text-coral-600'
                  : 'text-ink-700 hover:text-coral-600'
              }`}
            >
              {t('Resources')}
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`}
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
              >
                <path d="m5 7.5 5 5 5-5" />
              </svg>
            </button>
            <div
              id="desktop-resources-menu"
              hidden={!resourcesOpen}
              className="absolute left-0 top-full z-20 mt-3 min-w-48 rounded-xl border border-ink-100 bg-white p-2 shadow-lg"
            >
              {resourceLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  onClick={closeMenus}
                  className={({ isActive }) =>
                    `block rounded-lg px-3 py-2.5 text-sm font-medium transition-colors ${
                      isActive ? 'bg-coral-50 text-coral-700' : 'text-ink-700 hover:bg-ink-50'
                    }`
                  }
                >
                  {t(link.label)}
                </NavLink>
              ))}
            </div>
          </div>

          {linksAfterResources.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenus}
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? 'text-coral-600' : 'text-ink-700 hover:text-coral-600'
                }`
              }
            >
              {t(link.label)}
            </NavLink>
          ))}
          <LanguageSwitcher />
          <Link
            to="/contact"
            onClick={closeMenus}
            className="rounded-full bg-coral-500 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-coral-600"
          >
            {t('Book a Consultation')}
          </Link>
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg text-ink-800"
            onClick={() => {
              setOpen((isOpen) => !isOpen)
              setResourcesOpen(false)
            }}
            aria-expanded={open}
            aria-label={open ? t('Close menu') : t('Open menu')}
          >
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </nav>

      {open && (
        <div className="border-t border-ink-100 bg-white px-4 pb-6 pt-2 xl:hidden">
          {linksBeforeResources.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenus}
              className={({ isActive }) =>
                `block py-3 text-base font-medium ${isActive ? 'text-coral-600' : 'text-ink-800'}`
              }
            >
              {t(link.label)}
            </NavLink>
          ))}

          <button
            type="button"
            aria-expanded={resourcesOpen}
            aria-controls="mobile-resources-menu"
            onClick={() => setResourcesOpen((isOpen) => !isOpen)}
            onKeyDown={(event) => {
              if (event.key === 'Escape') setResourcesOpen(false)
            }}
            className={`flex w-full items-center justify-between py-3 text-left text-base font-medium ${
              resourcesActive || resourcesOpen ? 'text-coral-600' : 'text-ink-800'
            }`}
          >
            {t('Resources')}
            <svg
              aria-hidden="true"
              viewBox="0 0 20 20"
              className={`h-4 w-4 transition-transform ${resourcesOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
            >
              <path d="m5 7.5 5 5 5-5" />
            </svg>
          </button>
          <div
            id="mobile-resources-menu"
            hidden={!resourcesOpen}
            className="mb-2 border-l-2 border-ink-100 pl-4"
          >
            {resourceLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                onClick={closeMenus}
                className={({ isActive }) =>
                  `block py-2.5 text-sm font-medium ${isActive ? 'text-coral-600' : 'text-ink-700'}`
                }
              >
                {t(link.label)}
              </NavLink>
            ))}
          </div>

          {linksAfterResources.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={closeMenus}
              className={({ isActive }) =>
                `block py-3 text-base font-medium ${isActive ? 'text-coral-600' : 'text-ink-800'}`
              }
            >
              {t(link.label)}
            </NavLink>
          ))}
          <Link
            to="/contact"
            onClick={closeMenus}
            className="mt-3 block rounded-full bg-coral-500 px-5 py-3 text-center text-sm font-semibold text-white"
          >
            {t('Book a Consultation')}
          </Link>
        </div>
      )}
    </header>
  )
}
