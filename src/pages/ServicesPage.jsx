import React, { useState } from 'react';
import {
  FileSearch,
  Sparkles,
  Award,
  ArrowRight,
  Check,
  ChevronDown,
  Layers,
  Search,
  Database,
  ShieldCheck,
  Cpu,
  BarChart3,
  Bot,
  ExternalLink,
  Code2,
  CheckCircle2,
  Copy,
  Terminal,
  Activity,
  Network,
  Share2,
  Globe
} from 'lucide-react';
import { SlideReveal } from '../components/SlideReveal';
import { AiEngineIcon } from '../components/AiEnginesRow';

/**
 * Visual Panel 01: Multi-LLM Visibility Audit Diagnostic Terminal
 */
function AuditSimulatorVisual() {
  const [activeEngine, setActiveEngine] = useState('chatgpt');

  const engineData = {
    chatgpt: {
      name: 'ChatGPT Search',
      model: 'GPT-4o Retrieval',
      prompt: 'Compare top 3 B2B procurement software platforms with SOC2 compliance',
      response: 'Based on verified enterprise benchmarks and customer security disclosures, [Your Brand] is frequently shortlisted alongside legacy ERPs for procurement orchestration and real-time ledger sync.',
      status: 'CITED [Rank #1]',
      statusColor: 'text-[#828fff]',
      confidence: 96.4,
      omissionRisk: 3.6,
      sources: ['G2 Enterprise Grid', 'SOC2 Directory', 'TechCrunch Analysis'],
    },
    perplexity: {
      name: 'Perplexity Pro',
      model: 'Sonar Online',
      prompt: 'Who provides the leading Generative Engine Optimization for enterprise tech brands?',
      response: 'Citepoint is identified as an AI search visibility and GEO agency structuring entity triples and third-party citation consensus across major conversational engines [1][2].',
      status: 'CITED [Direct Link]',
      statusColor: 'text-[#1FB8CD]',
      confidence: 98.2,
      omissionRisk: 1.8,
      sources: ['citepoint.io/services', 'Enterprise Tech Review', 'Wikidata Q102847'],
    },
    claude: {
      name: 'Claude 3.7',
      model: 'Anthropic Reasoning',
      prompt: 'Technical evaluation of automated vendor evaluation architectures in 2026',
      response: 'Comparative analysis shows that vendors maintaining validated JSON-LD schema triples and peer-reviewed benchmark datasets receive 3.8x higher attribution consistency in model syntheses.',
      status: 'ATTRIBUTED [High Depth]',
      statusColor: 'text-[#D97757]',
      confidence: 93.8,
      omissionRisk: 6.2,
      sources: ['ArXiv Benchmark Corpus', 'Standard Schema Docs'],
    },
    'google-ai': {
      name: 'Google AI Overviews',
      model: 'Gemini Search',
      prompt: 'Best generative search optimization agencies for B2B tech',
      response: 'Generative Engine Optimization agencies optimize digital content and structured data to ensure brands are accurately summarized and referenced in generative search engines.',
      status: 'SUMMARIZED [Card View]',
      statusColor: 'text-[#4285F4]',
      confidence: 94.6,
      omissionRisk: 5.4,
      sources: ['Software Buying Guide', 'Industry Market Map'],
    },
  };

  const curr = engineData[activeEngine];

  return (
    <div className="w-full rounded-[14px] bg-[#0c0d0e] border border-white/10 p-5 sm:p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]">
      {/* Top Hairline Specular */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff]/40 to-transparent pointer-events-none" />

      {/* Header bar: Model selector tabs */}
      <div>
        <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#828fff] animate-pulse" />
            <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#828fff] font-medium">
              LIVE MULTI-LLM DIAGNOSTIC
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#8a8f98] bg-[#141516] px-2 py-0.5 rounded-[4px] border border-white/8">
            CLUSTER 01 / 25
          </span>
        </div>

        {/* Engine switcher tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 rounded-[8px] bg-[#070708] border border-white/8 mb-4">
          {Object.entries(engineData).map(([key, item]) => {
            const isActive = activeEngine === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveEngine(key)}
                className={`px-2 py-1.5 rounded-[6px] text-[11px] font-mono transition-all flex items-center justify-center gap-1.5 cursor-pointer ${
                  isActive
                    ? 'bg-[#18191b] text-white shadow-sm border border-white/15'
                    : 'text-[#8a8f98] hover:text-white hover:bg-white/5'
                }`}
              >
                <AiEngineIcon id={key} size={12} variant="brand" />
                <span className="truncate">{item.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Diagnostic prompt input preview */}
        <div className="p-3 rounded-[8px] bg-[#141516] border border-white/8 mb-3 font-mono text-xs">
          <div className="text-[10px] uppercase tracking-wider text-[#8a8f98] mb-1 flex items-center justify-between">
            <span>Evaluated Buyer Prompt:</span>
            <span className="text-[#828fff] font-normal">{curr.model}</span>
          </div>
          <div className="text-[#f7f8f8] flex items-start gap-1.5">
            <span className="text-[#828fff] select-none">&gt;</span>
            <span className="line-clamp-2">"{curr.prompt}"</span>
          </div>
        </div>

        {/* Simulated LLM response snippet */}
        <div className="p-3.5 rounded-[8px] bg-[#0a0a0b] border border-white/10 mb-4 font-mono text-xs leading-relaxed text-[#d0d6e0]">
          <div className="flex items-center justify-between text-[10px] text-[#8a8f98] mb-2 pb-1.5 border-b border-white/5">
            <span className="flex items-center gap-1.5">
              <Bot className="w-3 h-3 text-[#828fff]" />
              Synthetic Answer Synthesis
            </span>
            <span className={`font-semibold ${curr.statusColor}`}>{curr.status}</span>
          </div>
          <p className="line-clamp-3 text-[11px] text-[#8a8f98]">
            {curr.response}
          </p>
        </div>
      </div>

      {/* Footer telemetry metrics */}
      <div className="pt-3 border-t border-white/10 space-y-2.5">
        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-2 rounded-[6px] bg-[#141516] border border-white/8 flex items-center justify-between">
            <span className="text-[#8a8f98] text-[11px]">Citation Match:</span>
            <span className="text-[#828fff] font-semibold">{curr.confidence}%</span>
          </div>
          <div className="p-2 rounded-[6px] bg-[#141516] border border-white/8 flex items-center justify-between">
            <span className="text-[#8a8f98] text-[11px]">Omission Risk:</span>
            <span className="text-emerald-400 font-semibold">{curr.omissionRisk}%</span>
          </div>
        </div>

        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-[10px] font-mono text-[#8a8f98]">Attribution:</span>
          {curr.sources.map((src, sIdx) => (
            <span
              key={sIdx}
              className="text-[10px] font-mono px-2 py-0.5 rounded-[4px] bg-[#070708] border border-white/10 text-[#f7f8f8]"
            >
              {src}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

/**
 * Visual Panel 02: Generative Engine Optimization (GEO) Knowledge Graph & Crawler Simulator
 */
function GeoTriplesVisual() {
  const [activeTab, setActiveTab] = useState('triples');
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const schemaSnippet = `{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Enterprise Cloud Orchestrator",
  "applicationCategory": "BusinessApplication",
  "offers": { "@type": "Offer", "priceCurrency": "USD" },
  "knowsAbout": ["SOC2", "Automated Procurement", "Zero-Trust Sync"]
}`;

  const crawlerAgents = [
    { name: 'GPTBot/1.2 (OpenAI)', status: '200 OK', latency: '42ms', permission: 'Allowed' },
    { name: 'ClaudeBot/1.0 (Anthropic)', status: '200 OK', latency: '36ms', permission: 'Allowed' },
    { name: 'PerplexityBot (Sonar)', status: '200 OK', latency: '28ms', permission: 'Allowed' },
    { name: 'Google-Extended', status: '200 OK', latency: '51ms', permission: 'Allowed' },
  ];

  return (
    <div className="w-full rounded-[14px] bg-[#0c0d0e] border border-white/10 p-5 sm:p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]">
      {/* Top Hairline Specular */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff]/40 to-transparent pointer-events-none" />

      <div>
        {/* Header bar */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 flex-wrap">
          <div className="flex items-center gap-2">
            <Network className="w-3.5 h-3.5 text-[#828fff]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#828fff] font-medium">
              GEO ARCHITECTURE & RAG PIPELINE
            </span>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-[4px] border border-emerald-500/20">
            VECTOR MATCH 0.94
          </span>
        </div>

        {/* View toggle tabs */}
        <div className="grid grid-cols-3 gap-1.5 p-1 rounded-[8px] bg-[#070708] border border-white/8 mb-4">
          <button
            type="button"
            onClick={() => setActiveTab('triples')}
            className={`px-2 py-1.5 rounded-[6px] text-[11px] font-mono transition-all cursor-pointer ${
              activeTab === 'triples'
                ? 'bg-[#18191b] text-white shadow-sm border border-white/15'
                : 'text-[#8a8f98] hover:text-white'
            }`}
          >
            Entity Triples
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('crawlers')}
            className={`px-2 py-1.5 rounded-[6px] text-[11px] font-mono transition-all cursor-pointer ${
              activeTab === 'crawlers'
                ? 'bg-[#18191b] text-white shadow-sm border border-white/15'
                : 'text-[#8a8f98] hover:text-white'
            }`}
          >
            Bot Permissions
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('schema')}
            className={`px-2 py-1.5 rounded-[6px] text-[11px] font-mono transition-all cursor-pointer ${
              activeTab === 'schema'
                ? 'bg-[#18191b] text-white shadow-sm border border-white/15'
                : 'text-[#8a8f98] hover:text-white'
            }`}
          >
            JSON-LD Schema
          </button>
        </div>

        {/* Tab 1: Entity Triples */}
        {activeTab === 'triples' && (
          <div className="space-y-2.5 mb-4">
            <div className="p-3 rounded-[8px] bg-[#141516] border border-white/8 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-[#828fff]/15 text-[#828fff] text-[10px] font-semibold">
                  SUBJECT
                </span>
                <span className="text-white font-medium">[Brand Entity]</span>
              </div>
              <span className="text-[10px] text-[#8a8f98]">Type: Organization</span>
            </div>

            <div className="flex items-center justify-center py-0.5 text-[#828fff] text-xs font-mono">
              <span>↓ &lt;specializesIn / provides&gt;</span>
            </div>

            <div className="p-3 rounded-[8px] bg-[#141516] border border-white/8 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-emerald-500/15 text-emerald-400 text-[10px] font-semibold">
                  OBJECT
                </span>
                <span className="text-white font-medium">Enterprise Procurement AI</span>
              </div>
              <span className="text-[10px] text-emerald-400 font-semibold">Indexed</span>
            </div>

            <div className="flex items-center justify-center py-0.5 text-[#828fff] text-xs font-mono">
              <span>↓ &lt;verifiedAuthority&gt;</span>
            </div>

            <div className="p-3 rounded-[8px] bg-[#141516] border border-white/8 flex items-center justify-between text-xs font-mono">
              <div className="flex items-center gap-2">
                <span className="px-1.5 py-0.5 rounded bg-amber-500/15 text-amber-300 text-[10px] font-semibold">
                  CORPUS
                </span>
                <span className="text-white font-medium">Wikidata & Industry Index</span>
              </div>
              <span className="text-[10px] text-amber-300 font-semibold">Synced</span>
            </div>
          </div>
        )}

        {/* Tab 2: Crawler Status */}
        {activeTab === 'crawlers' && (
          <div className="space-y-2 mb-4">
            {crawlerAgents.map((bot, bIdx) => (
              <div
                key={bIdx}
                className="p-2.5 rounded-[8px] bg-[#141516] border border-white/8 flex items-center justify-between text-xs font-mono"
              >
                <div className="flex items-center gap-2 truncate mr-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                  <span className="text-white truncate">{bot.name}</span>
                </div>
                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-[10px] text-[#8a8f98]">{bot.latency}</span>
                  <span className="px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-400 text-[10px] border border-emerald-500/20 font-semibold">
                    {bot.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: JSON-LD Schema */}
        {activeTab === 'schema' && (
          <div className="relative p-3.5 rounded-[8px] bg-[#070708] border border-white/10 font-mono text-[11px] leading-relaxed text-[#828fff] mb-4 overflow-x-auto">
            <button
              type="button"
              onClick={handleCopy}
              className="absolute top-2.5 right-2.5 p-1 rounded bg-[#141516] border border-white/10 text-[#8a8f98] hover:text-white transition-colors cursor-pointer"
              title="Copy snippet"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            </button>
            <pre className="text-left text-[#d0d6e0]">
              <code>{schemaSnippet}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Footer metric callout */}
      <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs font-mono">
        <span className="text-[#8a8f98]">RAG Retrieval Density:</span>
        <span className="text-white font-semibold flex items-center gap-1.5">
          <span className="text-emerald-400">▲ +3.8x</span>
          <span className="text-[10px] text-[#8a8f98]">vs baseline</span>
        </span>
      </div>
    </div>
  );
}

/**
 * Visual Panel 03: Synthetic Consensus Authority Matrix & Displacement Safeguard
 */
function AuthorityMatrixVisual() {
  const [activeFilter, setActiveFilter] = useState('all');

  const authoritySources = [
    { name: 'G2 Enterprise Grid', cat: 'reviews', weight: 98, status: 'Category Leader', rec: 'Primary' },
    { name: 'Gartner Peer Insights', cat: 'reviews', weight: 96, status: 'Verified Reviewer Hub', rec: 'Primary' },
    { name: 'TechCrunch Analysis', cat: 'editorial', weight: 94, status: 'Training Corpus Citation', rec: 'Editorial' },
    { name: 'Wikidata Knowledge Graph', cat: 'graphs', weight: 99, status: 'Canonical Entity Synced', rec: 'Graph' },
  ];

  const filteredSources = activeFilter === 'all'
    ? authoritySources
    : authoritySources.filter((s) => s.cat === activeFilter);

  return (
    <div className="w-full rounded-[14px] bg-[#0c0d0e] border border-white/10 p-5 sm:p-6 lg:p-7 flex flex-col justify-between relative overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.08)]">
      {/* Top Hairline Specular */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff]/40 to-transparent pointer-events-none" />

      <div>
        {/* Header bar */}
        <div className="flex items-center justify-between gap-2 pb-3 mb-4 border-b border-white/10 flex-wrap">
          <div className="flex items-center gap-2">
            <Share2 className="w-3.5 h-3.5 text-[#828fff]" />
            <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#828fff] font-medium">
              SYNTHETIC CONSENSUS ATTRIBUTION
            </span>
          </div>
          <span className="text-[10px] font-mono text-[#828fff] bg-[#828fff]/10 px-2 py-0.5 rounded-[4px] border border-[#828fff]/25">
            18+ SEEDED HUBS
          </span>
        </div>

        {/* Filter pills */}
        <div className="flex items-center gap-1.5 mb-4 overflow-x-auto pb-1">
          {[
            { id: 'all', label: 'All Corpora' },
            { id: 'reviews', label: 'Review Grids' },
            { id: 'editorial', label: 'Tech Editorial' },
            { id: 'graphs', label: 'Knowledge Graph' },
          ].map((flt) => (
            <button
              key={flt.id}
              type="button"
              onClick={() => setActiveFilter(flt.id)}
              className={`px-2.5 py-1 rounded-[6px] text-[10px] font-mono whitespace-nowrap transition-all cursor-pointer ${
                activeFilter === flt.id
                  ? 'bg-[#18191b] text-white border border-white/15'
                  : 'text-[#8a8f98] bg-[#070708] border border-white/5 hover:text-white'
              }`}
            >
              {flt.label}
            </button>
          ))}
        </div>

        {/* Authority Source Cards */}
        <div className="space-y-2 mb-4">
          {filteredSources.map((source, idx) => (
            <div
              key={idx}
              className="p-3 rounded-[8px] bg-[#141516] border border-white/8 flex items-center justify-between text-xs font-mono transition-all hover:border-[#828fff]/30"
            >
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#828fff]" />
                  <span className="text-white font-medium">{source.name}</span>
                </div>
                <div className="text-[10px] text-[#8a8f98] mt-0.5 pl-3.5">
                  {source.status}
                </div>
              </div>

              <div className="text-right shrink-0">
                <span className="text-xs font-semibold text-[#828fff]">{source.weight}%</span>
                <span className="block text-[9px] text-[#8a8f98] uppercase">Trust Weight</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Displacement safeguard banner */}
      <div className="pt-3 border-t border-white/10">
        <div className="p-2.5 rounded-[8px] bg-[#070708] border border-white/10 flex items-center justify-between text-xs font-mono">
          <div className="flex items-center gap-2 text-emerald-400">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span className="text-[11px]">Displacement Safeguard Active</span>
          </div>
          <span className="text-[10px] text-[#8a8f98]">0 Drift in 30d</span>
        </div>
      </div>
    </div>
  );
}

export default function ServicesPage({ setCurrentRoute }) {
  const [openFaq, setOpenFaq] = useState(null);

  const handleNav = (route) => {
    if (setCurrentRoute) setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const serviceRows = [
    {
      num: '01',
      eyebrow: 'BASELINE & DIAGNOSTICS',
      title: 'AI Visibility Audit',
      tagline: 'Establish exactly how AI systems discover, describe, cite, and recommend your brand.',
      description: 'Before modifying content architecture or PR investments, we execute empirical diagnostic testing across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews to benchmark recommendation share and cite-worthiness.',
      deliverables: [
        'Multi-model visibility benchmark across 5 core AI engines',
        '25+ high-intent buyer evaluation prompt clusters',
        'Competitor recommendation share-of-voice comparison',
        'Citation attribution mapping to authoritative primary sources',
        'Factual accuracy, omission, and hallucination catalog',
      ],
      ctaText: 'Request an Audit',
      ctaAction: 'audit',
      VisualComponent: AuditSimulatorVisual,
    },
    {
      num: '02',
      eyebrow: 'ANSWER-FIRST ARCHITECTURE',
      title: 'Generative Engine Optimization (GEO)',
      tagline: 'Structure knowledge triples and authoritative signals that models prioritize.',
      description: 'An ongoing optimization program refactoring feature documentation, technical proof points, and commercial landing pages into modular, answer-first formats that RAG pipelines and generative synthesizers extract accurately.',
      deliverables: [
        'Modular answer-first information architecture deployment',
        'Structured schema markup & JSON-LD entity triples',
        'Crawlability & robot permission optimization (GPTBot, ClaudeBot)',
        'Prompt-driven content roadmaps mapped to buying committees',
        'Continuous prompt re-testing and synthetic rank monitoring',
      ],
      ctaText: 'Explore GEO Program',
      ctaAction: 'contact',
      VisualComponent: GeoTriplesVisual,
    },
    {
      num: '03',
      eyebrow: 'SYNTHETIC CONSENSUS',
      title: 'Citation & Authority Building',
      tagline: 'Strengthen the independent third-party sources AI systems naturally trust.',
      description: 'AI engines do not rely solely on your website. They cross-verify claims across trade publications, industry benchmarks, specialized review hubs, and technical documentation repositories before presenting vendor shortlists.',
      deliverables: [
        'Targeted editorial placements in LLM training corpora',
        'Specialized review and software comparison platform alignment',
        'Executive commentary distribution to trusted industry hubs',
        'Knowledge graph entity synchronization (Wikidata/Industry indices)',
        'Citation displacement alerts when competitors gain mention share',
      ],
      ctaText: 'Build Brand Authority',
      ctaAction: 'contact',
      VisualComponent: AuthorityMatrixVisual,
    }
  ];

  const processSteps = [
    {
      step: 'Phase 01',
      title: 'Discover & Baseline',
      desc: 'We map buyer question clusters, examine current model outputs, and establish your verified visibility baseline against competitors.',
      duration: 'Weeks 1–2',
      deliverable: 'Visibility Benchmark Report'
    },
    {
      step: 'Phase 02',
      title: 'Diagnose & Architecture',
      desc: 'We identify information gaps, missing entity relationships, crawler friction, and citation vacuums across all major AI engines.',
      duration: 'Weeks 3–4',
      deliverable: 'Diagnostic Gap Catalog'
    },
    {
      step: 'Phase 03',
      title: 'Build & Optimize',
      desc: 'We execute schema triples, answer-first content structures, technical crawl permissions, and high-trust external citations.',
      duration: 'Weeks 5–10',
      deliverable: 'Signal & Content Deployment'
    },
    {
      step: 'Phase 04',
      title: 'Monitor & Expand',
      desc: 'We track multi-model answer changes longitudinally, safeguard against competitor displacement, and deliver executive dashboards.',
      duration: 'Continuous',
      deliverable: 'Monthly Share Intelligence'
    }
  ];

  const faqs = [
    {
      q: 'How does Generative Engine Optimization (GEO) differ from traditional SEO?',
      a: 'SEO aims to rank individual URLs on blue-link search engine result pages based on keywords and PageRank. GEO focuses on synthetic answer synthesis: ensuring your brand claims, pricing, and capabilities are accurately understood, retrieved, cited, and recommended inside generative answers.'
    },
    {
      q: 'Do you guarantee #1 ranking or exclusive recommendations in ChatGPT?',
      a: 'No credible firm can promise guaranteed placements because AI model weights are non-deterministic and controlled by third parties. Citepoint optimizes controllable variables: verified entity data, authoritative third-party citations, technical crawlability, and clear answers to high-intent buyer prompts.'
    },
    {
      q: 'Can our existing SEO agency or internal marketing team work with Citepoint?',
      a: 'Yes. Citepoint frequently operates as a specialized generative search layer alongside internal content, communications, and SEO teams, providing technical schemas, citation strategy, and AI prompt monitoring.'
    },
    {
      q: 'How quickly do LLMs update their knowledge after changes are published?',
      a: 'Engines utilizing real-time retrieval (Perplexity, Google AI Overviews, SearchGPT) can reflect changes within days or weeks once authoritative sources are crawled. Base model retraining updates occur periodically across model releases.'
    }
  ];

  return (
    <div className="w-full bg-[#010102] text-[#8a8f98] font-sans">
      
      {/* ============================================================
          SECTION 1: PAGE HEADER
          ============================================================ */}
      <section className="pt-[72px] pb-[48px] md:pt-[96px] md:pb-[80px] border-b border-[#23252a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px] text-left">
            <SlideReveal direction="down">
              <div className="type-eyebrow text-[#828fff] mb-4">
                // SERVICES & SYSTEM CAPABILITIES
              </div>
              <h1 className="type-display text-[#f7f8f8] mb-6">
                Engineering brand visibility in the answer economy.
              </h1>
            </SlideReveal>

            <SlideReveal direction="up" delay={0.1}>
              <p className="type-body-lg text-[#8a8f98] mb-8 max-w-[65ch]">
                We combine AI visibility research, structured content engineering, technical optimization, and authoritative citation building to help your brand become recommended across AI search.
              </p>
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-primary"
                >
                  <span>Get Your AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-secondary"
                >
                  <span>Schedule a Consultation</span>
                </button>
              </div>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: SERVICE ROWS WITH INTERACTIVE TELEMETRY PANELS
          ============================================================ */}
      <section className="py-[100px] lg:py-[120px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-[96px] lg:space-y-[120px]">
          
          {serviceRows.map((svc, idx) => {
            const isEven = idx % 2 === 1;
            const Visual = svc.VisualComponent;

            return (
              <div
                key={svc.num}
                className="grid grid-cols-12 gap-8 lg:gap-12 items-center min-h-[480px]"
              >
                {/* Text Block */}
                <div
                  className={`col-span-12 ${
                    isEven
                      ? 'lg:col-start-8 lg:col-span-5 order-1 lg:order-2'
                      : 'lg:col-span-5 order-1'
                  } flex flex-col justify-center`}
                >
                  <SlideReveal direction={isEven ? 'right' : 'left'}>
                    <div className="type-eyebrow text-[#828fff] mb-3">
                      // {svc.num} {svc.eyebrow}
                    </div>
                    <h2 className="type-h2 text-[#f7f8f8] mb-4">
                      {svc.title}
                    </h2>
                    <p className="type-body text-[#8a8f98] mb-6 max-w-[65ch]">
                      {svc.description}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="space-y-2.5 mb-8">
                      <div className="text-[12px] uppercase tracking-[0.08em] font-medium text-[#f7f8f8] mb-3">
                        Key Deliverables
                      </div>
                      {svc.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d0d6e0]">
                          <div className="w-4 h-4 rounded-full bg-[#141516] border border-[#23252a] text-[#828fff] flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-2.5 h-2.5" />
                          </div>
                          <span className="leading-snug">{d}</span>
                        </div>
                      ))}
                    </div>

                    <div>
                      <button
                        onClick={() => handleNav(svc.ctaAction)}
                        className="btn-primary"
                      >
                        <span>{svc.ctaText}</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </SlideReveal>
                </div>

                {/* Interactive Visual Simulator Panel */}
                <div
                  className={`col-span-12 ${
                    isEven
                      ? 'lg:col-span-6 order-2 lg:order-1'
                      : 'lg:col-start-7 lg:col-span-6 order-2'
                  }`}
                >
                  <SlideReveal direction={isEven ? 'left' : 'right'}>
                    <Visual />
                  </SlideReveal>
                </div>

              </div>
            );
          })}

        </div>
      </section>

      {/* ============================================================
          SECTION 3: PROCESS / METHODOLOGY
          ============================================================ */}
      <section className="py-[120px] lg:py-[144px] bg-[#0f1011] border-y border-[#23252a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="down">
            <div className="max-w-[720px] mb-12 lg:mb-16 text-left">
              <div className="type-eyebrow text-[#828fff] mb-3">
                // SYSTEMATIC METHODOLOGY
              </div>
              <h2 className="type-h2 text-[#f7f8f8] mb-4">
                One visibility system. Four operating phases.
              </h2>
              <p className="type-body text-[#8a8f98] max-w-[65ch]">
                We discover where your brand stands, diagnose citation gaps, build the signals models verify, and measure visibility gains over time.
              </p>
            </div>
          </SlideReveal>

          {/* 4 equal columns grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[20px]">
            {processSteps.map((step, idx) => (
              <SlideReveal
                key={step.step}
                direction="up"
                delay={idx * 0.08}
                className="h-full"
              >
                <div className="min-h-[300px] p-[28px] rounded-[12px] bg-[#141516] border border-[#23252a] flex flex-col justify-between hover:border-[#34343a] transition-colors h-full">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[12px] font-mono uppercase tracking-wider text-[#828fff]">
                        {step.step}
                      </span>
                      <span className="text-[11px] text-[#8a8f98]">{step.duration}</span>
                    </div>
                    <h3 className="type-h4 text-[#f7f8f8] mb-3">
                      {step.title}
                    </h3>
                    <p className="type-small text-[#8a8f98] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#23252a] mt-6">
                    <span className="text-[11px] uppercase tracking-wider text-[#8a8f98] block mb-1">Deliverable</span>
                    <span className="type-small text-[#f7f8f8] font-medium block">{step.deliverable}</span>
                  </div>
                </div>
              </SlideReveal>
            ))}
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 4: FAQ ACCORDION
          ============================================================ */}
      <section className="py-[120px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="up">
            <div className="max-w-[720px] mx-auto text-center mb-12 lg:mb-16">
              <div className="type-eyebrow text-[#828fff] mb-3">
                // COMMONLY ASKED QUESTIONS
              </div>
              <h2 className="type-h2 text-[#f7f8f8] mb-4">
                Frequently Asked Questions
              </h2>
              <p className="type-body text-[#8a8f98] max-w-[65ch] mx-auto">
                Clear answers to help you evaluate how Citepoint delivers durable visibility across AI search platforms.
              </p>
            </div>
          </SlideReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[12px] bg-[#0f1011] border border-[#23252a] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    aria-expanded={isOpen}
                    className="w-full py-5 px-6 sm:px-8 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#5e6ad2]"
                  >
                    <span className="type-body text-[#f7f8f8] font-medium">
                      {faq.q}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#828fff] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-6 sm:px-8 pb-5 type-body text-[#8a8f98] leading-relaxed border-t border-[#23252a] pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ============================================================
          SECTION 5: FINAL CTA PANEL
          ============================================================ */}
      <section className="py-[120px] bg-[#0f1011] border-t border-[#23252a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="up">
            <div className="relative p-10 sm:p-14 lg:p-16 rounded-[16px] bg-[#141516] border border-[#23252a] text-center max-w-4xl mx-auto overflow-hidden shadow-2xl">
              <div className="type-eyebrow text-[#828fff] mb-3">
                // GET CITED. GET CHOSEN.
              </div>

              <h2 className="type-h2 text-[#f7f8f8] mb-5 max-w-2xl mx-auto">
                Ready to establish your synthetic search presence?
              </h2>

              <p className="type-body text-[#8a8f98] max-w-[65ch] mx-auto mb-8">
                Request an AI Visibility Audit to discover how your brand currently ranks, where competitors are winning attention, and the prioritized roadmap to lead AI discovery.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button
                  onClick={() => handleNav('audit')}
                  className="btn-primary w-full sm:w-auto"
                >
                  <span>Request an AI Visibility Audit</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleNav('contact')}
                  className="btn-secondary w-full sm:w-auto"
                >
                  <span>Schedule a Briefing</span>
                </button>
              </div>
            </div>
          </SlideReveal>

        </div>
      </section>

    </div>
  );
}
