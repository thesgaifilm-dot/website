export const siteUrl = 'https://catalystviral.com'

export interface PageMeta {
  title: string
  description: string
}

export const defaultMeta: PageMeta = {
  title: 'Miss Niu Technology | Overseas Development, HR & AI Consultancy',
  description:
    'Miss Niu Technology Pte Ltd is a strategic development and global growth architecture firm offering overseas development consultation, HR & workforce consultancy, AI solutions and digital transformation across Asia.',
}

/**
 * Per-route title and description. The prerender step bakes these into
 * each route's static HTML; App applies them on client-side navigation.
 *
 * Only public, indexable routes belong here: every key is prerendered to
 * dist/<route>/index.html at build time and should also be in sitemap.xml.
 */
export const pageMeta: Record<string, PageMeta> = {
  '/': defaultMeta,
  '/services': {
    title: 'Services | Miss Niu Technology',
    description:
      'Overseas development consultation, HR & workforce consultancy, AI solutions and digital transformation: strategy, people and technology under one roof, delivered on the ground across Asia.',
  },
  '/consulting-suite-mq7x': {
    title: 'Consulting Suite | Miss Niu Technology',
    description:
      'Three fixed-price consulting engagements, bookable directly: a growth strategy consultation, an HR & workforce compliance audit, and an overseas market-entry blueprint.',
  },
  '/about': {
    title: 'About Us | Miss Niu Technology',
    description:
      'Miss Niu Technology is a growth architecture firm built the hard way: founder-led, with 200+ businesses advised since 2019 and teams on the ground in Singapore, China and Malaysia.',
  },
  '/contact': {
    title: 'Contact Us | Miss Niu Technology',
    description:
      'Book a free consultation with Miss Niu Technology. Reach us by WhatsApp, phone or the enquiry form to discuss overseas expansion, workforce planning or AI solutions.',
  },
}

/** Routes that get their own prerendered HTML file. */
export const prerenderRoutes = Object.keys(pageMeta)
