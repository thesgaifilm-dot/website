export interface Review {
  name: string
  rating: 5 | 4.5
  text: string
}

export const reviews: Review[] = [
  {
    name: 'Melvin',
    rating: 5,
    text: 'Bryan and his team helped us set up our Malaysia office in under three months. Everything was handled for us, from licensing to hiring. Highly recommended.',
  },
  {
    name: 'jasontan_88',
    rating: 5,
    text: 'Very professional and responsive. They reply on WhatsApp almost immediately, even at night.',
  },
  {
    name: 'Adeline',
    rating: 5,
    text: 'We engaged them to automate our order processing with AI. The system paid for itself within the first quarter. The team is patient and explains everything in simple terms.',
  },
  {
    name: 'Kumar',
    rating: 5,
    text: 'Honest advice. They actually told us not to proceed with one idea because the numbers did not make sense. You rarely find consultants like this.',
  },
  {
    name: 'weiling.c',
    rating: 4.5,
    text: 'Good experience overall. Onboarding took slightly longer than we expected but the results were worth the wait.',
  },
  {
    name: 'Priya',
    rating: 5,
    text: 'Bryan is the real deal. Sharp, direct and he genuinely cares about whether your business grows. We expanded into two new markets with his guidance.',
  },
  {
    name: 'Siti',
    rating: 5,
    text: 'Smooth process from start to finish.',
  },
  {
    name: 'xiaowei88',
    rating: 4.5,
    text: 'Was skeptical at first but the free consultation convinced me. They know the China market inside out. Minor delays with paperwork but they kept us updated throughout.',
  },
  {
    name: 'Clarence',
    rating: 5,
    text: 'The team treats your business like their own. Bryan personally checked in on our project every single week.',
  },
]
