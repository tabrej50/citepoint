/**
 * Vercel Serverless Function: Markdown Content Negotiation & Agent 404 Handler
 * Complies with acceptmarkdown.com and Is-Agentic / Ora audit standards.
 */

const MARKDOWN_PAGES = {
  home: `# Citepoint — Get Cited. Get Chosen.

> Generative Engine Optimization (GEO) & AI Search Visibility for B2B brands competing in the answer economy.

## Overview
Citepoint helps ambitious B2B technology companies become visible, credible, and recommendable across ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews.

Before visiting a website, B2B buyers increasingly ask AI tools to compare vendors, explain software categories, shortlist providers, and recommend the best solutions. If your brand is omitted or mischaracterized in these answers, you lose consideration before your sales team ever gets involved.

## When to Use Citepoint
- **Generative Engine Optimization (GEO)**: When optimizing content, brand presence, and digital authority for inclusion in AI query synthesis.
- **Diagnostic Citation Audits**: When evaluating why a company or its competitors are cited, omitted, or hallucinated by LLMs.
- **Knowledge Graph Alignment**: When deploying machine-readable JSON-LD entity triples and Wikidata corroboration for neural retrievers.
- **AI Reputation Defense**: When correcting outdated pricing, stale architecture, or model hallucinations.

## AI Engines Audited
- OpenAI ChatGPT (GPT-4o, SearchGPT)
- Google Gemini (Gemini 1.5 Pro)
- Perplexity Pro (Sonar Large)
- Anthropic Claude (Claude 3.5 Sonnet)
- Google AI Overviews

## The 4-Phase Operating System
1. **Discover**: Baseline discovery across 5 AI models, commercial query mapping, and competitor displacement analysis.
2. **Diagnose**: Forensic attribution gap report, hallucination catalog, and technical crawler/schema audit.
3. **Build**: Answer-first documentation deployment, semantic triples, and verified third-party citation building.
4. **Measure**: Longitudinal sentiment and recommendation tracking, Share of Voice scorecards, and downstream pipeline attribution.

## Core Capabilities & Services
- [AI Visibility Baseline Audit](https://citepoint.xyz/services): Comprehensive diagnostic across 5 major AI engines and 50+ commercial prompts.
- [Generative Engine Optimization](https://citepoint.xyz/services): Content hierarchy and information architecture engineered for neural retrieval.
- [Citation Engineering](https://citepoint.xyz/services): Inclusion in primary reference corpora and independent benchmark reports.
- [Knowledge Graph Alignment](https://citepoint.xyz/services): Canonical entity identity across Schema.org, Wikidata, and knowledge graphs.

## Contact & Enterprise Verification
- **Headquarters**: 548 Market St, Suite 34000, San Francisco, CA 94104
- **Email**: hello@citepoint.xyz
- **Phone**: +1-800-555-0199
- **LLM Knowledge Base**: https://citepoint.xyz/llms.txt | https://citepoint.xyz/llms-full.txt
- **Sitemap**: https://citepoint.xyz/sitemap.xml
- **About**: https://citepoint.xyz/about
- **Contact**: https://citepoint.xyz/contact
- **Privacy Policy**: https://citepoint.xyz/privacy
- **Terms of Service**: https://citepoint.xyz/terms
`,

  about: `# About Citepoint

> Empirical research laboratory and strategic management consultancy engineering generative AI search visibility for B2B brands.

## Mission & Philosophy
Citepoint operates at the intersection of information retrieval science, computational linguistics, and B2B growth advisory. We exist because the internet's discovery architecture has fundamentally shifted from keyword indexing to generative AI synthesis.

## Core Operating Principles
1. **Absolute Transparency & No Hype**: We never promise guaranteed rankings because no ethical consultancy controls third-party model weights. We engineer factual consensus and crawlable entity architecture.
2. **Evidence-Led Engineering**: Every recommendation is rooted in empirical multi-prompt testing across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews.
3. **Durable Brand Authority**: We reject automated spam and synthetic manipulation. We establish durable authority across the industry sources and benchmark publications models trust.
4. **Commercial & Revenue Focus**: We focus on high-intent commercial prompts that guide enterprise purchase committees during shortlist evaluations.

## Corporate Details
- **Headquarters**: 548 Market St, Suite 34000, San Francisco, CA 94104
- **Corporate Email**: hello@citepoint.xyz
- **Telephone**: +1-800-555-0199
- **Target Clientele**: B2B SaaS ($10M–$500M+ ARR), Enterprise Infrastructure, Cybersecurity, Fintech, and Professional Services.
`,

  contact: `# Contact Citepoint

> Schedule an executive strategy briefing or submit an enterprise AI visibility inquiry.

## Communication Channels
- **General Inquiries**: hello@citepoint.xyz
- **Strategy & Enterprise Sales**: inquiries@citepoint.xyz
- **Direct Telephone**: +1-800-555-0199
- **Office Hours**: Monday – Friday, 9:00 AM – 6:00 PM Pacific Standard Time (PST)
- **Response SLA**: All qualified enterprise inquiries receive a response within one business day.

## Headquarters & Location
Citepoint
548 Market St, Suite 34000
San Francisco, CA 94104
United States

## Engagement Options
1. **AI Visibility Audit**: Submit your domain and competitor list at https://citepoint.xyz/audit
2. **Executive Briefing**: Request a private 30-minute briefing with our managing partners.
3. **Confidentiality**: All audits and discussions are executed under mutual NDA.
`,

  privacy: `# Privacy Policy & Security Standards

> Effective Date: January 1, 2026. Last Updated: October 2026.

Citepoint ("Citepoint", "we", "us", or "our") respects the privacy and confidentiality of our clients, prospective clients, and website visitors.

## Key Commitments
1. **Strict Non-Training Guarantee**: We never submit confidential client materials or proprietary documentation into public LLM training datasets.
2. **Zero-Retention Enterprise APIs**: All synthetic testing queries use zero-retention enterprise API endpoints where data is not retained for training.
3. **Data Minimization**: We collect only the contact information and publicly accessible domain assets necessary to execute visibility audits.
4. **GDPR & CCPA Rights**: Full compliance with rights of access, portability, rectification, and erasure. We never sell personal data.

## Privacy Contact
- **Email**: privacy@citepoint.xyz | hello@citepoint.xyz
- **Address**: Citepoint, Attn: Privacy Officer, 548 Market St, Suite 34000, San Francisco, CA 94104
- **Phone**: +1-800-555-0199
`,

  terms: `# Terms of Service

> Professional engagement standards and intellectual property rights.

## 1. Services
Citepoint provides Generative Engine Optimization (GEO), AI Search Visibility audits, citation engineering, knowledge graph alignment, and continuous brand reputation monitoring.

## 2. Intellectual Property
Upon full payment of fees, all tailored audit reports, entity schema code, and strategic roadmaps created specifically for the client remain the exclusive intellectual property of the client.

## 3. Disclaimers
Because third-party LLMs and AI search engines update model weights autonomously, Citepoint does not guarantee specific ranking positions on third-party commercial platforms. We guarantee the rigorous execution of verified white-hat entity engineering.

## 4. Contact
Legal inquiries: hello@citepoint.xyz | 548 Market St, Suite 34000, San Francisco, CA 94104
`,

  services: `# Services & Practice Areas — Citepoint

1. **AI Visibility Baseline Audit**: Systematic evaluation across 50+ commercial buyer prompts and 5 major AI models.
2. **Generative Engine Optimization (GEO)**: Restructuring content hierarchy, technical crawlability, and information architecture for RAG synthesis.
3. **Citation & Source Engineering**: Securing inclusion in the primary data sources, benchmark directories, and reference publications queried by models.
4. **Knowledge Graph Alignment**: Schema.org JSON-LD triples, Wikidata alignment, and entity disambiguation.
5. **Longitudinal AI Reputation Monitoring**: Monthly Share of Voice scorecards and competitor displacement alerts.
`,

  'how-it-works': `# How It Works — The 4-Phase Operating System

1. **Discover (Week 1)**: Establish baseline visibility across ChatGPT, Gemini, Perplexity, Claude, and Google AI Overviews.
2. **Diagnose (Week 2)**: Identify attribution gaps, hallucination catalogs, and schema inconsistencies.
3. **Build (Weeks 3–6)**: Deploy answer-first documentation, machine-readable JSON-LD entity graphs, and authoritative third-party citations.
4. **Measure (Ongoing Retainer)**: Longitudinal prompt tracking across model version updates and displacement alerting.
`,

  pricing: `# Pricing & Engagement Models — Citepoint

1. **AI Visibility Diagnostic Audit**: 2-week forensic benchmark diagnostic and 90-day remediation roadmap.
2. **Foundation Sprint**: 90-day comprehensive knowledge graph restructuring, citation engineering, and content deployment.
3. **Enterprise Retainer**: Continuous longitudinal monitoring, displacement alerting, and quarterly re-benchmarking.
`,

  'case-studies': `# Case Studies & Empirical Results — Citepoint

- **Enterprise B2B Cloud Security SaaS**: 340% increase in ChatGPT and Perplexity recommendations within 90 days.
- **Fintech & Compliance Platform**: Google AI Overview attribution coverage increased from 12% to 78% after Wikidata entity alignment.
- **DevOps Observability Provider**: 4.2x qualified pipeline conversions from AI referral queries.
`,

  insights: `# Insights & Research — Citepoint

- Why Traditional SEO Fails in the Age of Generative Synthesis
- The Anatomy of an AI Vendor Shortlist
- Knowledge Graph Alignment for B2B Platforms
- The B2B GEO Glossary: Generative Engine Optimization, AEO, RAG, Semantic Triples
`,

  audit: `# Request an AI Visibility Audit — Citepoint

Uncover exactly what generative search engines tell your prospective buyers about your platform, products, and competitors.
Submit your domain and target categories to hello@citepoint.xyz or visit https://citepoint.xyz/contact.
`
};

export default function handler(req, res) {
  const url = new URL(req.url, `https://${req.headers.host || 'citepoint.xyz'}`);
  
  // Extract path from query parameter (set by Vercel rewrite) or direct URL
  let rawPath = url.searchParams.get('path') || '';
  if (!rawPath) {
    rawPath = url.pathname.replace(/^\/api\/handler/, '').replace(/^\/+/, '');
  }
  rawPath = rawPath.replace(/^\/+/, '').replace(/\/+$/, '').toLowerCase();

  // Route alias mapping
  if (!rawPath || rawPath === 'home' || rawPath === 'index' || rawPath === 'index.html') {
    rawPath = 'home';
  }

  // Common aliases
  if (rawPath === 'howitworks') rawPath = 'how-it-works';
  if (rawPath === 'casestudies' || rawPath === 'results') rawPath = 'case-studies';

  // Set mandatory content negotiation headers
  res.setHeader('Vary', 'Accept');
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');

  // Check if requested route exists
  const markdownContent = MARKDOWN_PAGES[rawPath];

  if (markdownContent) {
    res.setHeader('Cache-Control', 'public, max-age=0, must-revalidate');
    res.status(200).send(markdownContent.trim() + '\n');
    return;
  }

  // Not found: Return compliant 404 Markdown error body with >20 characters explaining error and links
  res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
  const errorBody = `# 404 Not Found

The requested resource "${rawPath}" could not be found on Citepoint.

Explore available resources, documentation, and machine-readable guides:
- [Homepage](https://citepoint.xyz/)
- [Agent Guidance & LLM Reference (llms.txt)](https://citepoint.xyz/llms.txt)
- [Full LLM Knowledge Base (llms-full.txt)](https://citepoint.xyz/llms-full.txt)
- [XML Sitemap](https://citepoint.xyz/sitemap.xml)
- [About Citepoint](https://citepoint.xyz/about)
- [Our Services](https://citepoint.xyz/services)
- [How It Works](https://citepoint.xyz/how-it-works)
- [Pricing](https://citepoint.xyz/pricing)
- [Case Studies](https://citepoint.xyz/case-studies)
- [Insights & Research](https://citepoint.xyz/insights)
- [Contact & Strategy Briefing](https://citepoint.xyz/contact)
- [Privacy Policy](https://citepoint.xyz/privacy)
- [Terms of Service](https://citepoint.xyz/terms)
`;

  res.status(404).send(errorBody.trim() + '\n');
}
