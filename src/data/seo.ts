export const siteUrl = 'https://catalystviral.com'

export interface PageMeta {
  title: string
  description: string
}

export const defaultMeta: PageMeta = {
  title: 'Miss Niu Tech | Compliance Advisory & Growth Across Asia',
  description:
    'Singapore-based cross-border compliance and business advisory, practical SME financing guidance, and in-house technology solutions for businesses expanding across Asia.',
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
    title: 'Services | Miss Niu Tech',
    description:
      'Cross-border compliance and business advisory, SME financing strategy, custom software and AI delivery, and global trade show management for businesses expanding across Asia.',
  },
  '/sme-financing': {
    title: 'SME Financing in Singapore | Miss Niu Tech',
    description:
      'Practical Singapore SME financing advice on funding strategy, cash-flow planning and lender readiness. Financing decisions remain with the relevant lenders.',
  },
  '/trade-shows': {
    title: 'Trade Shows | Miss Niu Tech',
    description:
      'Official Singapore marketing partner for IBE and CMBe, with customised trade show sourcing and management worldwide, subject to event availability and requirements.',
  },
  '/guides': {
    title: 'Business Guides | Miss Niu Tech',
    description:
      'Practical checklists for cross-border compliance, Singapore SME funding, team planning and technology adoption.',
  },
  '/consulting-suite-mq7x': {
    title: 'Consulting Suite | Miss Niu Tech',
    description:
      'Three fixed-price consulting engagements, bookable directly: a growth strategy consultation, an HR & workforce compliance audit, and an overseas market-entry blueprint.',
  },
  '/about': {
    title: 'About Miss Niu Tech | Bryan Ng, Founder & CEO',
    description:
      'Meet Bryan Ng and learn how Miss Niu Tech combines cross-border compliance advisory, business financing guidance and technology delivery from Singapore.',
  },
  '/team': {
    title: 'Meet the Team | Miss Niu Tech',
    description:
      'Meet Miss Niu Tech’s leadership, managers and teams in Singapore, including its AI engineering and consulting delivery teams.',
  },
  '/contact': {
    title: 'Contact Miss Niu Tech',
    description:
      'Contact Miss Niu Tech to discuss compliance advisory, Singapore SME financing, technology and AI solutions, or global trade show management.',
  },
}

/** Routes that get their own prerendered HTML file. */
export const prerenderRoutes = Object.keys(pageMeta)
