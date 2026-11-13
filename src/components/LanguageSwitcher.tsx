import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
import { persistSiteLanguage, type SiteLanguage } from '../i18n'

export default function LanguageSwitcher({ className = '' }: { className?: string }) {
  const { i18n, t } = useTranslation()
  const location = useLocation()
  const navigate = useNavigate()
  const currentLanguage: SiteLanguage = i18n.resolvedLanguage?.startsWith('zh') ? 'zh-SG' : 'en'

  const selectLanguage = (language: SiteLanguage) => {
    if (language === currentLanguage) return

    persistSiteLanguage(language)
    void i18n.changeLanguage(language)

    const params = new URLSearchParams(location.search)
    if (language === 'zh-SG') params.set('lang', 'zh')
    else params.delete('lang')

    const search = params.toString()
    navigate(
      { pathname: location.pathname, search: search ? `?${search}` : '', hash: location.hash },
      { replace: true },
    )
  }

  return (
    <div
      className={`inline-flex items-center rounded-full border border-ink-200 bg-white p-1 ${className}`}
      role="group"
      aria-label={t('Choose language')}
    >
      <button
        type="button"
        onClick={() => selectLanguage('en')}
        aria-label={t('Switch to English')}
        aria-pressed={currentLanguage === 'en'}
        className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-500 ${
          currentLanguage === 'en' ? 'bg-ink-900 text-white' : 'text-ink-600 hover:bg-ink-50'
        }`}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => selectLanguage('zh-SG')}
        aria-label={t('Switch to Simplified Chinese')}
        aria-pressed={currentLanguage === 'zh-SG'}
        className={`rounded-full px-2.5 py-1 text-xs font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-coral-500 ${
          currentLanguage === 'zh-SG' ? 'bg-ink-900 text-white' : 'text-ink-600 hover:bg-ink-50'
        }`}
      >
        中文
      </button>
    </div>
  )
}
