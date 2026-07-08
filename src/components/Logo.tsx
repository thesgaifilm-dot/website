export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <svg viewBox="0 0 64 64" className="h-9 w-9 shrink-0" aria-hidden="true">
        <rect width="64" height="64" rx="12" className={light ? 'fill-white/10' : 'fill-ink-900'} />
        <path d="M18 46V18h6l16 19V18h6v28h-6L24 27v19h-6z" fill="#ef5a5f" />
      </svg>
      <span className="leading-tight">
        <span className="block text-lg font-extrabold tracking-tight text-coral-500">MISS NIU</span>
        <span
          className={`block text-[0.6rem] font-medium tracking-[0.35em] ${light ? 'text-ink-300' : 'text-ink-600'}`}
        >
          TECHNOLOGY
        </span>
      </span>
    </span>
  )
}
