export const site = {
  brand: 'Miss Niu',
  legalName: 'Miss Niu Technology Pte Ltd',
  tagline: 'Singapore-based compliance advisory and cross-border growth support for Asia.',
  phone: '+65 8782 4594',
  phoneHref: 'tel:+6587824594',
  whatsapp: 'https://wa.me/6587824594',
  infoAsOf: 'November 2026',
}

export const stats: { value: number; label: string; prefix?: string; suffix?: string }[] = [
  { value: 200, suffix: '+', label: 'Projects delivered' },
  { value: 7, prefix: '$', suffix: 'M+', label: 'Client value generated' },
  { value: 500, suffix: '+', label: 'SLAs and contracts drafted' },
  { value: 98, suffix: '%', label: 'Project success rate' },
]

export const serviceSummaries = [
  {
    id: 'compliance',
    title: 'Compliance Advisory',
    blurb:
      'One trusted advisor coordinates vetted immigration, corporate-secretarial, legal, accommodation and education specialists for cross-border growth.',
    icon: 'shield',
  },
  {
    id: 'funding',
    title: 'Funding & SME Financing',
    blurb:
      'Grant advisory and EFS loan structuring help businesses understand funding routes, readiness and next steps.',
    icon: 'chart',
  },
  {
    id: 'technology',
    title: 'Technology & AI',
    blurb:
      'Custom software, AI systems and operational integration built around the way your business works.',
    icon: 'ai',
  },
]

export const footprint = {
  ownOffices: ['Singapore (HQ)', 'China', 'Malaysia'],
  partnerMarkets: ['Taiwan', 'Japan', 'Korea', 'Vietnam', 'Thailand', 'Laos', 'Cambodia', 'United Arab Emirates'],
}

export const processSteps = [
  {
    step: '01',
    title: 'Understand your risk and growth goals',
    body: 'We map your target markets, compliance questions, funding needs and operational priorities before recommending a path.',
  },
  {
    step: '02',
    title: 'Build the right team around you',
    body: 'Your Miss Niu advisor coordinates the relevant vetted specialists, funding partners and technology team for the work ahead.',
  },
  {
    step: '03',
    title: 'Coordinate delivery and next steps',
    body: 'We stay accountable as your central point of contact while qualified partners and delivery teams carry out their agreed work.',
  },
]
