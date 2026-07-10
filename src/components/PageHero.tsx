export default function PageHero({
  title,
  subtitle,
  image,
}: {
  title: string
  subtitle: string
  image: string
}) {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <img
        src={image}
        alt=""
        aria-hidden="true"
        className="hero-img-anim absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-ink-900/70" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:py-32">
        <h1 className="hero-anim text-5xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl">
          {title}
        </h1>
        <p
          className="hero-anim mx-auto mt-4 max-w-xl text-base font-medium text-ink-200 sm:text-lg"
          style={{ animationDelay: '0.18s' }}
        >
          {subtitle}
        </p>
      </div>
    </section>
  )
}
