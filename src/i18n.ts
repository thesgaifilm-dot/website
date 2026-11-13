import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import { simplifiedChinese } from './data/translations'

export type SiteLanguage = 'en' | 'zh-SG'

void i18n.use(initReactI18next).init({
  resources: {
    en: { translation: {} },
    'zh-SG': { translation: simplifiedChinese },
  },
  lng: 'en',
  fallbackLng: 'en',
  supportedLngs: ['en', 'zh-SG'],
  load: 'currentOnly',
  keySeparator: false,
  nsSeparator: false,
  returnEmptyString: false,
  interpolation: { escapeValue: false },
  react: { useSuspense: false },
})

export function resolveSiteLanguage(search: string): SiteLanguage {
  const requested = new URLSearchParams(search).get('lang')
  if (requested === 'zh' || requested === 'zh-SG') return 'zh-SG'
  if (requested === 'en') return 'en'

  if (typeof document === 'undefined') return 'en'
  const saved = document.cookie
    .split(';')
    .map((cookie) => cookie.trim())
    .find((cookie) => cookie.startsWith('site-language='))
    ?.slice('site-language='.length)

  return saved === 'zh-SG' ? 'zh-SG' : 'en'
}

export function persistSiteLanguage(language: SiteLanguage) {
  if (typeof document === 'undefined') return
  const secure = window.location.protocol === 'https:' ? '; Secure' : ''
  document.cookie = `site-language=${language}; Path=/; Max-Age=31536000; SameSite=Lax${secure}`
  document.documentElement.lang = language
}

export default i18n
