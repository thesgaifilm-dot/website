export default function BusinessNetworksSection() {
  return (
    <section aria-labelledby="business-networks-title" className="bg-ink-50">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-16 sm:px-6 md:grid-cols-[1fr_1.2fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral-600">Community</p>
          <h2
            id="business-networks-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl"
          >
            Business Networks &amp; Associations
          </h2>
        </div>
        <div className="rounded-2xl border border-ink-100 bg-white p-7 shadow-sm sm:p-9">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-ink-500">Singapore</p>
          <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-700">
            We&apos;re proud to be members of business groups in Singapore.
          </p>
        </div>
      </div>
    </section>
  )
}
