import SectionHeading from './SectionHeading'
import { reviews } from '../data/reviews'
import type { Review } from '../data/reviews'

function Stars({ rating }: { rating: number }) {
  const star = (
    <svg viewBox="0 0 20 20" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M10 1.5l2.6 5.3 5.9.9-4.2 4.1 1 5.8L10 14.9l-5.3 2.7 1-5.8L1.5 7.7l5.9-.9L10 1.5z" />
    </svg>
  )
  return (
    <div className="relative inline-flex" aria-label={`Rated ${rating} out of 5`}>
      <div className="flex gap-0.5 text-ink-200">
        {[...Array(5)].map((_, i) => (
          <span key={i}>{star}</span>
        ))}
      </div>
      <div
        className="absolute inset-0 flex gap-0.5 overflow-hidden text-amber-400"
        style={{ width: `${(rating / 5) * 100}%` }}
      >
        {[...Array(5)].map((_, i) => (
          <span key={i} className="shrink-0">
            {star}
          </span>
        ))}
      </div>
    </div>
  )
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="flex h-60 w-80 shrink-0 flex-col rounded-2xl border border-ink-100 bg-white p-6 shadow-sm sm:h-56 sm:w-96">
      <Stars rating={review.rating} />
      <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-700">{review.text}</p>
      <p className="mt-4 text-sm font-semibold text-ink-900">{review.name}</p>
    </div>
  )
}

export default function ReviewsSection() {
  return (
    <section className="overflow-hidden bg-ink-50 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading
          eyebrow="Client reviews"
          title="What our clients say"
          center
        />
      </div>
      <div className="marquee-group relative mt-12">
        <div
          className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-ink-50 to-transparent sm:w-28"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-ink-50 to-transparent sm:w-28"
          aria-hidden="true"
        />
        <div className="animate-marquee marquee-reverse flex w-max items-stretch gap-6 pr-6">
          {[...reviews, ...reviews, ...reviews, ...reviews].map((r, i) => (
            <ReviewCard key={`${r.name}-${i}`} review={r} />
          ))}
        </div>
      </div>
    </section>
  )
}
