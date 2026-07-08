export default function SectionHeading({
  eyebrow,
  title,
  body,
  center = false,
}: {
  eyebrow?: string
  title: string
  body?: string
  center?: boolean
}) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p className="text-sm font-bold uppercase tracking-[0.2em] text-coral-600">{eyebrow}</p>
      )}
      <h2 className="mt-2 text-3xl font-extrabold tracking-tight text-ink-900 sm:text-4xl">{title}</h2>
      {body && <p className="mt-4 text-lg leading-relaxed text-ink-600">{body}</p>}
    </div>
  )
}
