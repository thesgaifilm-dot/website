export interface CaseStudy {
  id: string
  title: string
  jurisdictions: string[]
  clientType: string
  role: string
  status: string
  problem: string
  solution: string
  result: string
  highlight: string
}

// All case studies are anonymised in line with our confidentiality policy.
// Client names and detailed financials are never published.
export const caseStudies: CaseStudy[] = [
  {
    id: 'ai-alliance',
    title: 'Tripartite AI Service Alliance — AI Social Media System',
    jurisdictions: ['Singapore', 'Wuhan, China', 'Malaysia'],
    clientType: 'AI service provider',
    role: 'Lead Alliance Architect',
    status: 'Closed — alliance remains active',
    problem:
      'A fast-growing Wuhan AI company had advanced social-media analytics technology but no legal presence, governance model or compliance framework to commercialise it in Southeast Asia — and faced severe penalties under Chinese data-export law if it got cross-border data flows wrong.',
    solution:
      'We architected a three-party governance model: Wuhan as technical centre of excellence, Singapore as regional HQ, Malaysia as delivery hub. We drafted enforceable SLAs for each country, built data-sharing rules compliant with China’s Cybersecurity and Data Security Laws and both PDPA regimes, and structured a tax-efficient service model avoiding double taxation.',
    result:
      'The alliance went fully operational on schedule and won its first regional contracts within months. The client can now bid for government and enterprise contracts requiring multi-jurisdictional data compliance, and is expanding to new markets on the same blueprint.',
    highlight: 'First regional contracts won within months of launch',
  },
  {
    id: 'us-market-entry',
    title: 'Cross-Border Supply Chain & US Market Entry — Premium Home Furnishings',
    jurisdictions: ['Singapore', 'China', 'Australia', 'United States'],
    clientType: 'Singapore trading & supply chain company',
    role: 'Lead Project Coordinator, Contract Drafter & Cross-Border Negotiator',
    status: 'Closed — successful',
    problem:
      'A Singapore trading firm spotted a time-sensitive opportunity to supply premium couch covers to US retailers — but executing it required simultaneous coordination of manufacturing in China, quality assurance in Australia, contracts and payment flows in Singapore, and customs and distribution in the US. One failure anywhere would cascade across the chain.',
    solution:
      'We assembled and managed a four-country team: vetted Chinese manufacturers against US safety standards with penalty-backed supply agreements, established an Australian QA and consolidation hub, structured all inter-party contracts and cash-flow-aligned payment schedules from Singapore, and engaged licensed US customs brokers and logistics partners for last-mile delivery.',
    result:
      'USD 1 million in sales within the target period and a repeatable market-entry template the client now uses as its standard for all cross-border trading — with zero disputes, penalties or compliance issues at close.',
    highlight: 'USD 1M in sales within the target period',
  },
  {
    id: 'dubai-investors',
    title: 'Cross-Border Market Development — UAE to Singapore',
    jurisdictions: ['Dubai, UAE', 'Singapore'],
    clientType: 'Dubai property development company',
    role: 'Market Development Strategist & On-the-Ground Implementation Partner',
    status: 'Closed — successful, ongoing relationship',
    problem:
      'A prominent Dubai developer wanted access to Singapore’s high-net-worth investors and family offices but had no local network, no market intelligence and collateral that didn’t address Singaporean investors’ expectations on transparency, legal enforceability and currency risk.',
    solution:
      'We profiled over 500 family offices, funds and HNWIs, repositioned the client’s brand and collateral for the Singapore market, ran curated private luncheons and briefings with the client’s leadership, and set up a dedicated Singapore liaison team for ongoing investor relations and Dubai site visits.',
    result:
      'Over 5,000 credible business resources and qualified investor leads delivered, multiple high-profile investments closed, and a repeatable engagement model the client is now extending to Hong Kong and Japan.',
    highlight: '5,000+ qualified investor leads delivered',
  },
  {
    id: 'bilateral-setup',
    title: 'China–Singapore Bilateral Market Setup',
    jurisdictions: ['China', 'Singapore'],
    clientType: 'Cross-border sales organisation',
    role: 'Full Lifecycle Manager of Bilateral Market Setup',
    status: 'Closed — structure remains active',
    problem:
      'Fragmented operations in China and Singapore created silos, double-taxation risk on intercompany payments, and no coherent governance — preventing the client from serving multinational accounts as one organisation.',
    solution:
      'We incorporated a Singapore private limited company and registered a Wholly Foreign-Owned Enterprise in China, appointed qualified local directors with clear terms of reference, synchronised sales processes and systems across both countries, and implemented arm’s-length transfer pricing documentation validated by external auditors.',
    result:
      'A unified, tax-compliant bilateral structure with double-taxation risk eliminated — now the client’s model for further Asian expansion.',
    highlight: 'Double-taxation risk eliminated; audit-validated structure',
  },
  {
    id: 'hainan-inventory',
    title: 'Inventory Management Integration — Hainan Government-Linked Project',
    jurisdictions: ['Hainan, China'],
    clientType: 'Government-linked logistics enterprise',
    role: 'Project Management Director',
    status: 'Closed and verified',
    problem:
      'A government-linked enterprise managed thousands of SKUs across multiple warehouses on a decade-old, disconnected inventory system — manual spreadsheets, stock discrepancies, missed fulfilment and no real-time visibility.',
    solution:
      'We directed the full implementation lifecycle: needs assessment, competitive vendor selection, contract negotiation, technical integration with financial and sales platforms, complete workflow re-engineering with barcode scanning and automated reorder triggers, plus Mandarin-language training and change management.',
    result:
      'Full operational synchronisation with real-time stock visibility, discrepancies cut to negligible levels, and formal verification by management and government stakeholders — now cited as a modernisation best-practice case in the sector.',
    highlight: 'Formally verified by government stakeholders',
  },
]
