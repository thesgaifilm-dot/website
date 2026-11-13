import { useTranslation } from 'react-i18next'

const membershipGroups = [
  {
    name: "SBF Singapore",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SBF%20Singapore%20Union-yHyvbP3Og5kHQ7mdVVnVK2Zq55kLXp.png",
  },
  {
    name: "ASME Singapore",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ASME%20Singapore%20Union-wmG6UpgszeFAbK9ye8jsmgd2pV3uN7.jpeg",
  },
  {
    name: "BNI Singapore Networking",
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BNI%20Singapore%20Networking%20Union-uTPlN91zMvkFTFBVMGu7PjU712z9GK.png",
  },
]

export default function BusinessNetworksSection() {
  const { t } = useTranslation()

  return (
    <section aria-labelledby="business-networks-title" className="bg-ink-50">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral-600">{t('Community')}</p>
          <h2
            id="business-networks-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl"
          >
            {t('Business Networks & Associations')}
          </h2>
        </div>
        <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-sm sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-ink-500">{t('Singapore')}</p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-700">
            {t("We're proud to be members of business groups in Singapore.")}
          </p>
        </div>
      </div>
      <div className="mx-auto mt-10 grid max-w-6xl gap-4 px-4 sm:grid-cols-2 sm:px-6 lg:grid-cols-3">
        {membershipGroups.map((group) => (
          <figure key={group.name} className="rounded-2xl border border-ink-100 bg-white shadow-sm">
            <div className="flex h-36 items-center justify-center p-6">
              <img
                src={group.src}
                alt=""
                className="max-h-24 max-w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </div>
            <figcaption className="border-t border-ink-100 px-4 py-3 text-center text-sm font-semibold text-ink-700">
              {group.name}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  )
}
