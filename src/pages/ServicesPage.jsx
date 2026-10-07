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
  ExternalLink,
  CheckCircle2,
  Network,
  Share2,
  Globe,
  TrendingUp,
  Zap,
  Shield,
  Target
} from 'lucide-react';
import { SlideReveal } from '../components/SlideReveal';
import { AiEngineIcon } from '../components/AiEnginesRow';

/**
 * Visual Showcase 01: Executive Multi-Engine AI Visibility Benchmark
 * Replaces developer prompt simulator with an executive-grade visibility scorecard.
 */
function SyntheticVisibilityBenchmarkVisual() {
  const [activeEngine, setActiveEngine] = useState('chatgpt');

  const engineData = {
    chatgpt: {
      name: 'ChatGPT Search',
      model: 'GPT-4o Retrieval',
      status: 'Rank #1 Recommended',
      statusColor: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20',
      shareOfVoice: 96,
      accuracy: 98.4,
      omissionRisk: 1.6,
      citationSources: ['G2 Enterprise Grid', 'SOC2 Directory', 'TechCrunch Analysis'],
      synthesisInsight: 'Brand is prioritized as the primary enterprise procurement benchmark platform across buyer queries.',
    },
    perplexity: {
      name: 'Perplexity Pro',
      model: 'Sonar Online',
      status: 'Direct Source Citation',
      statusColor: 'text-[#828fff] bg-[#828fff]/10 border-[#828fff]/25',
      shareOfVoice: 98,
      accuracy: 99.1,
      omissionRisk: 0.9,
      citationSources: ['citepoint.io/services', 'Enterprise Tech Review', 'Wikidata Q102847'],
      synthesisInsight: 'Identified as the authoritative entity for B2B Generative Engine Optimization with direct link citation attribution.',
    },
    claude: {
      name: 'Claude 3.7',
      model: 'Anthropic Reasoning',
      status: 'Deep Technical Attribution',
      statusColor: 'text-amber-300 bg-amber-500/10 border-amber-500/20',
      shareOfVoice: 94,
      accuracy: 96.8,
      omissionRisk: 3.2,
      citationSources: ['ArXiv Benchmark Corpus', 'Standard Schema Docs'],
      synthesisInsight: 'Synthesizes verified entity triples with 3.8x higher consistency in long-form comparative evaluations.',
    },
    'google-ai': {
      name: 'Google AI Overviews',
      model: 'Gemini Search',
      status: 'Primary Overview Card',
      statusColor: 'text-blue-400 bg-blue-500/10 border-blue-500/20',
      shareOfVoice: 92,
      accuracy: 97.2,
      omissionRisk: 2.8,
      citationSources: ['Software Buying Guide', 'Industry Market Map'],
      synthesisInsight: 'Prominently featured in synthesized overview cards for high-intent B2B search clusters.',
    },
  };

  const curr = engineData[activeEngine];

  return (
    <div className="w-full rounded-[16px] bg-[#0c0d10] border border-white/10 p-6 sm:p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]">
      {/* Ambient background glow & top specular line */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#5e6ad2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff]/50 to-transparent pointer-events-none" />

      <div>
        {/* Header bar */}
        <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10 flex-wrap">
          <div className="flex items-center gap-2.5">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#828fff] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#5e6ad2]" />
            </span>
            <span className="text-[12px] font-mono uppercase tracking-[0.14em] text-[#828fff] font-medium">
              EXECUTIVE VISIBILITY SCORECARD
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-[6px] border border-emerald-500/20 font-medium">
              +38.2% vs Category Median
            </span>
            <span className="text-xs font-mono font-semibold text-white bg-[#141517] px-2.5 py-1 rounded-[6px] border border-white/10">
              94.8 / 100
            </span>
          </div>
        </div>

        {/* Engine switcher tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-1.5 rounded-[10px] bg-[#070709] border border-white/8 mb-5">
          {Object.entries(engineData).map(([key, item]) => {
            const isActive = activeEngine === key;
            return (
              <button
                key={key}
                type="button"
                onClick={() => setActiveEngine(key)}
                className={`px-3 py-2 rounded-[8px] text-xs font-sans transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-[#18191d] text-white shadow-md border border-white/20 font-medium'
                    : 'text-[#8a8f98] hover:text-white hover:bg-white/5 font-normal'
                }`}
              >
                <AiEngineIcon id={key} size={14} variant="brand" />
                <span className="truncate">{item.name.split(' ')[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Engine Executive Card */}
        <div className="p-4 sm:p-5 rounded-[12px] bg-[#121316] border border-white/10 mb-4 space-y-4">
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <div>
              <span className="text-xs font-mono text-[#8a8f98] block mb-0.5">EVALUATED ENGINE</span>
              <span className="text-sm font-heading font-medium text-white">{curr.name} ({curr.model})</span>
            </div>
            <span className={`text-[11px] font-mono px-2.5 py-1 rounded-[6px] border font-medium ${curr.statusColor}`}>
              {curr.status}
            </span>
          </div>

          {/* Share of Voice Progress Bar */}
          <div>
            <div className="flex items-center justify-between text-xs mb-1.5 font-sans">
              <span className="text-[#8a8f98]">AI Recommendation Share:</span>
              <span className="text-white font-medium font-mono">{curr.shareOfVoice}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-[#070709] overflow-hidden border border-white/5">
              <div
                className="h-full bg-gradient-to-r from-[#5e6ad2] to-[#828fff] rounded-full transition-all duration-500 shadow-[0_0_12px_rgba(130,143,255,0.5)]"
                style={{ width: `${curr.shareOfVoice}%` }}
              />
            </div>
          </div>

          {/* Executive Synthesis Summary */}
          <div className="p-3 rounded-[8px] bg-[#0c0d10] border border-white/8">
            <span className="text-[11px] font-mono uppercase tracking-wider text-[#828fff] block mb-1">
              Consensus Takeaway:
            </span>
            <p className="text-xs text-[#d0d6e0] leading-relaxed">
              "{curr.synthesisInsight}"
            </p>
          </div>
        </div>
      </div>

      {/* Footer Metrics */}
      <div className="pt-4 border-t border-white/10 space-y-3">
        <div className="grid grid-cols-2 gap-3 text-xs font-mono">
          <div className="p-2.5 rounded-[8px] bg-[#121316] border border-white/8 flex items-center justify-between">
            <span className="text-[#8a8f98]">Fact Accuracy:</span>
            <span className="text-[#828fff] font-medium">{curr.accuracy}%</span>
          </div>
          <div className="p-2.5 rounded-[8px] bg-[#121316] border border-white/8 flex items-center justify-between">
            <span className="text-[#8a8f98]">Omission Risk:</span>
            <span className="text-emerald-400 font-medium">{curr.omissionRisk}%</span>
          </div>
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[11px] font-mono text-[#8a8f98]">Primary Corroborators:</span>
          {curr.citationSources.map((src, sIdx) => (
            <span
              key={sIdx}
              className="text-[11px] font-sans px-2.5 py-0.5 rounded-[6px] bg-[#070709] border border-white/10 text-white font-normal"
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
 * Visual Showcase 02: Generative Engine Optimization (GEO) Knowledge Graph Architecture
 * Replaces developer crawler logs with an executive-level semantic knowledge architecture.
 */
function SemanticKnowledgeArchitectureVisual() {
  const [activeLayer, setActiveLayer] = useState('topology');

  const layers = [
    {
      id: 'topology',
      name: 'Entity Topology',
      desc: 'Canonical machine-readable entities mapped to Wikidata & industry taxonomies.',
    },
    {
      id: 'rag',
      name: 'RAG Passages',
      desc: 'Modular answer-first passages designed for instant vector store retrieval.',
    },
    {
      id: 'proofs',
      name: 'Technical Proofs',
      desc: 'Unambiguous security, pricing, and capability claims embedded in schema.',
    },
  ];

  return (
    <div className="w-full rounded-[16px] bg-[#0c0d10] border border-white/10 p-6 sm:p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]">
      {/* Specular line & ambient glow */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#5e6ad2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff]/50 to-transparent pointer-events-none" />

      <div>
        {/* Header bar */}
        <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10 flex-wrap">
          <div className="flex items-center gap-2.5">
            <Network className="w-4 h-4 text-[#828fff]" />
            <span className="text-[12px] font-mono uppercase tracking-[0.14em] text-[#828fff] font-medium">
              SEMANTIC KNOWLEDGE TOPOLOGY
            </span>
          </div>
          <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-[6px] border border-emerald-500/20 font-medium">
            VECTOR COMPATIBLE 100%
          </span>
        </div>

        {/* View switcher tabs */}
        <div className="grid grid-cols-3 gap-2 p-1.5 rounded-[10px] bg-[#070709] border border-white/8 mb-5">
          {layers.map((l) => {
            const isActive = activeLayer === l.id;
            return (
              <button
                key={l.id}
                type="button"
                onClick={() => setActiveLayer(l.id)}
                className={`px-2.5 py-2 rounded-[8px] text-xs font-sans transition-all text-center cursor-pointer ${
                  isActive
                    ? 'bg-[#18191d] text-white shadow-md border border-white/20 font-medium'
                    : 'text-[#8a8f98] hover:text-white hover:bg-white/5 font-normal'
                }`}
              >
                {l.name}
              </button>
            );
          })}
        </div>

        {/* Interactive Topological Diagram */}
        <div className="p-5 rounded-[12px] bg-[#121316] border border-white/10 mb-4 relative overflow-hidden">
          {/* Central Canonical Entity Pill */}
          <div className="flex flex-col items-center justify-center text-center py-2">
            <div className="relative inline-flex items-center gap-2 px-4 py-2 rounded-[10px] bg-[#18191d] border border-[#828fff]/40 shadow-[0_0_24px_rgba(94,106,210,0.3)]">
              <span className="w-2 h-2 rounded-full bg-[#828fff] animate-pulse" />
              <span className="text-xs font-heading font-medium text-white">[Canonical Brand Entity]</span>
              <span className="text-[10px] font-mono text-[#828fff] bg-[#5e6ad2]/20 px-1.5 py-0.5 rounded">Org Schema</span>
            </div>

            {/* Connecting Vector Lines with pulse indicators */}
            <div className="w-full flex items-center justify-center my-3 relative h-6">
              <div className="w-48 h-[1px] bg-gradient-to-r from-transparent via-[#828fff]/60 to-transparent" />
              <div className="absolute w-2 h-2 rounded-full bg-[#828fff] animate-ping" />
            </div>

            {/* 3 Radiating Knowledge Satellites */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full">
              <div className="p-3 rounded-[8px] bg-[#0c0d10] border border-white/8 text-left transition-colors hover:border-[#828fff]/30">
                <span className="text-[10px] font-mono text-[#828fff] uppercase block mb-1">Vector 01</span>
                <span className="text-xs font-medium text-white block mb-0.5">Entity Triples</span>
                <span className="text-[11px] text-[#8a8f98] leading-tight block">Clear subject-predicate-object facts</span>
              </div>

              <div className="p-3 rounded-[8px] bg-[#0c0d10] border border-white/8 text-left transition-colors hover:border-emerald-400/30">
                <span className="text-[10px] font-mono text-emerald-400 uppercase block mb-1">Vector 02</span>
                <span className="text-xs font-medium text-white block mb-0.5">RAG Density</span>
                <span className="text-[11px] text-[#8a8f98] leading-tight block">High-signal passage extraction</span>
              </div>

              <div className="p-3 rounded-[8px] bg-[#0c0d10] border border-white/8 text-left transition-colors hover:border-amber-400/30">
                <span className="text-[10px] font-mono text-amber-300 uppercase block mb-1">Vector 03</span>
                <span className="text-xs font-medium text-white block mb-0.5">Corpora Anchor</span>
                <span className="text-[11px] text-[#8a8f98] leading-tight block">Wikidata & industry graph sync</span>
              </div>
            </div>
          </div>
        </div>

        {/* Layer Deep-Dive description */}
        <div className="p-3.5 rounded-[10px] bg-[#070709] border border-white/8 mb-4">
          <div className="flex items-center gap-2 mb-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#828fff]" />
            <span className="text-xs font-heading font-medium text-white">
              {layers.find((l) => l.id === activeLayer)?.name} Architecture
            </span>
          </div>
          <p className="text-xs text-[#8a8f98] leading-relaxed">
            {layers.find((l) => l.id === activeLayer)?.desc}
          </p>
        </div>
      </div>

      {/* Footer metric callout */}
      <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono">
        <span className="text-[#8a8f98]">RAG Retrieval Acceleration:</span>
        <span className="text-white font-medium flex items-center gap-2">
          <span className="text-emerald-400 font-semibold">▲ +3.8x Frequency</span>
          <span className="text-[11px] text-[#8a8f98]">vs unoptimized</span>
        </span>
      </div>
    </div>
  );
}

/**
 * Visual Showcase 03: Synthetic Consensus Authority Ecosystem
 * Replaces telemetry table with an executive-level third-party authority network.
 */
function AuthorityConsensusEcosystemVisual() {
  const [activeCorpus, setActiveCorpus] = useState(0);

  const corpora = [
    {
      tier: 'Tier 01',
      title: 'Industry Analyst & Technical Media',
      examples: 'Gartner, TechCrunch, ArXiv Research, VentureBeat',
      trustScore: 98.6,
      role: 'Core LLM Pre-training Corpora & Foundational Weight Alignment',
      impact: 'Establishes foundational brand identity during model base training and synthetic updates.',
    },
    {
      tier: 'Tier 02',
      title: 'Verified Peer Reviews & Comparison Grids',
      examples: 'G2 Enterprise Grid, TrustRadius, Gartner Peer Insights',
      trustScore: 96.4,
      role: 'Live RAG Retrieval for Enterprise Buyer Shortlist Prompts',
      impact: 'Queried in real-time when buyers prompt models for category shortlists and feature comparisons.',
    },
    {
      tier: 'Tier 03',
      title: 'Canonical Entity Registries & Knowledge Graphs',
      examples: 'Wikidata Q-nodes, Crunchbase, Open Data Repositories',
      trustScore: 99.2,
      role: 'Deterministic Disambiguation & Ground-Truth Verification',
      impact: 'Prevents brand confusion and guarantees accurate headquarters, leadership, and funding claims.',
    },
  ];

  return (
    <div className="w-full rounded-[16px] bg-[#0c0d10] border border-white/10 p-6 sm:p-7 lg:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.85),inset_0_1px_0_rgba(255,255,255,0.08)]">
      {/* Specular line & ambient glow */}
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#5e6ad2]/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff]/50 to-transparent pointer-events-none" />

      <div>
        {/* Header bar */}
        <div className="flex items-center justify-between gap-3 pb-4 mb-5 border-b border-white/10 flex-wrap">
          <div className="flex items-center gap-2.5">
            <Share2 className="w-4 h-4 text-[#828fff]" />
            <span className="text-[12px] font-mono uppercase tracking-[0.14em] text-[#828fff] font-medium">
              CROSS-CORPUS ATTRIBUTION CONSENSUS
            </span>
          </div>
          <span className="text-[11px] font-mono text-[#828fff] bg-[#828fff]/10 px-2.5 py-1 rounded-[6px] border border-[#828fff]/25 font-medium">
            18+ SEEDED CORPORE
          </span>
        </div>

        {/* 3 Tier Cards with Interactive Selection */}
        <div className="space-y-3 mb-5">
          {corpora.map((corp, idx) => {
            const isSelected = activeCorpus === idx;
            return (
              <div
                key={idx}
                onClick={() => setActiveCorpus(idx)}
                className={`p-3.5 sm:p-4 rounded-[12px] border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-[#18191d] border-[#828fff]/40 shadow-[0_4px_20px_rgba(94,106,210,0.2)]'
                    : 'bg-[#121316] border-white/8 hover:border-white/20'
                }`}
              >
                <div className="flex items-center justify-between gap-2 mb-1.5 flex-wrap">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#5e6ad2]/20 text-[#828fff] font-medium">
                      {corp.tier}
                    </span>
                    <span className="text-xs sm:text-sm font-heading font-medium text-white">{corp.title}</span>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <span className="text-xs font-mono font-semibold text-[#828fff]">{corp.trustScore}%</span>
                    <span className="text-[9px] font-mono uppercase text-[#8a8f98]">Weight</span>
                  </div>
                </div>

                <div className="text-[11px] text-[#8a8f98] font-sans mb-1">
                  Corpora: <span className="text-[#d0d6e0]">{corp.examples}</span>
                </div>

                {isSelected && (
                  <div className="pt-2 mt-2 border-t border-white/10 text-xs text-[#d0d6e0] leading-relaxed">
                    <span className="text-[#828fff] font-medium">Model Impact: </span>
                    {corp.impact}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Displacement safeguard badge */}
      <div className="pt-4 border-t border-white/10">
        <div className="p-3.5 rounded-[10px] bg-[#070709] border border-white/10 flex items-center justify-between text-xs font-sans gap-3">
          <div className="flex items-center gap-2 text-emerald-400 font-medium">
            <ShieldCheck className="w-4 h-4 shrink-0" />
            <span>Displacement Safeguard Active</span>
          </div>
          <span className="text-[11px] font-mono text-[#8a8f98] shrink-0">0% Omission Drift</span>
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
      VisualComponent: SyntheticVisibilityBenchmarkVisual,
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
      VisualComponent: SemanticKnowledgeArchitectureVisual,
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
      VisualComponent: AuthorityConsensusEcosystemVisual,
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
          SECTION 1: PAGE HEADER (Atmospheric Executive Hero)
          ============================================================ */}
      <section className="relative pt-[96px] pb-[64px] md:pt-[120px] md:pb-[96px] border-b border-[#23252a] overflow-hidden">
        {/* Subtle radial ambient atmosphere */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(94,106,210,0.22),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-[800px] text-left">
            <SlideReveal direction="down">
              <div className="inline-flex items-center gap-2.5 px-3 py-1.5 rounded-[8px] bg-[#141517] border border-white/10 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] mb-6">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#828fff] opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#5e6ad2]" />
                </span>
                <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#828fff] font-medium">
                  SERVICES & SYSTEM CAPABILITIES
                </span>
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
          SECTION 2: 3 CORE SERVICE SHOWCASES
          ============================================================ */}
      <section className="py-[100px] lg:py-[130px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-[100px] lg:space-y-[140px]">
          
          {serviceRows.map((svc, idx) => {
            const isEven = idx % 2 === 1;
            const Visual = svc.VisualComponent;

            return (
              <div
                key={svc.num}
                className="grid grid-cols-12 gap-8 lg:gap-14 items-center"
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
                    <div className="inline-flex items-center gap-2 mb-3">
                      <span className="text-[12px] font-mono text-[#828fff] font-medium tracking-[0.12em]">
                        // {svc.num}
                      </span>
                      <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#8a8f98]">
                        {svc.eyebrow}
                      </span>
                    </div>

                    <h2 className="type-h2 text-[#f7f8f8] mb-4">
                      {svc.title}
                    </h2>

                    <p className="type-body text-[#8a8f98] mb-6 max-w-[65ch] leading-relaxed">
                      {svc.description}
                    </p>

                    {/* Deliverables checklist */}
                    <div className="space-y-3 mb-8 p-4 rounded-[12px] bg-[#0c0d10] border border-white/6">
                      <div className="text-[11px] font-mono uppercase tracking-[0.12em] font-medium text-[#f7f8f8] mb-2 flex items-center justify-between">
                        <span>Key Deliverables</span>
                        <span className="text-[#828fff] text-[10px]">Verified Output</span>
                      </div>
                      {svc.deliverables.map((d, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#d0d6e0]">
                          <div className="w-4 h-4 rounded-full bg-[#18191d] border border-white/10 text-[#828fff] flex items-center justify-center shrink-0 mt-0.5">
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

                {/* Executive Showcase Graphic */}
                <div
                  className={`col-span-12 ${
                    isEven
                      ? 'lg:col-span-7 order-2 lg:order-1'
                      : 'lg:col-start-6 lg:col-span-7 order-2'
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
          SECTION 3: SYSTEMATIC METHODOLOGY (4 Phases)
          ============================================================ */}
      <section className="py-[120px] lg:py-[144px] bg-[#0c0d10] border-y border-[#23252a] relative overflow-hidden">
        {/* Subtle ambient lighting */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(94,106,210,0.12),transparent_70%)] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <SlideReveal direction="down">
            <div className="max-w-[720px] mb-12 lg:mb-16 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#141517] border border-white/8 text-[11px] font-mono uppercase tracking-[0.14em] text-[#828fff] mb-3">
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, idx) => (
              <SlideReveal
                key={step.step}
                direction="up"
                delay={idx * 0.08}
                className="h-full"
              >
                <div className="min-h-[320px] p-7 rounded-[14px] bg-[#121316] border border-white/8 flex flex-col justify-between hover:border-[#828fff]/35 hover:-translate-y-1 transition-all duration-300 h-full group shadow-[0_12px_32px_rgba(0,0,0,0.6)]">
                  <div>
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-[11px] font-mono uppercase tracking-[0.12em] text-[#828fff] bg-[#5e6ad2]/15 px-2.5 py-1 rounded-[6px] border border-[#5e6ad2]/20 font-medium">
                        {step.step}
                      </span>
                      <span className="text-[11px] font-mono text-[#8a8f98]">{step.duration}</span>
                    </div>
                    <h3 className="type-h4 text-[#f7f8f8] mb-3 group-hover:text-[#828fff] transition-colors">
                      {step.title}
                    </h3>
                    <p className="type-small text-[#8a8f98] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-white/8 mt-6">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-[#8a8f98] block mb-1">Deliverable</span>
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
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#141517] border border-white/8 text-[11px] font-mono uppercase tracking-[0.14em] text-[#828fff] mb-3">
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

          <div className="max-w-3xl mx-auto space-y-3.5">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-[12px] bg-[#0c0d10] border border-white/8 overflow-hidden transition-all duration-200 hover:border-white/15"
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
                    <div className="px-6 sm:px-8 pb-5 type-body text-[#8a8f98] leading-relaxed border-t border-white/6 pt-3">
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
      <section className="py-[120px] bg-[#0c0d10] border-t border-[#23252a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SlideReveal direction="up">
            <div className="relative p-10 sm:p-14 lg:p-16 rounded-[20px] bg-[#121316] border border-white/10 text-center max-w-4xl mx-auto overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.85)]">
              {/* Radial ambient highlight */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-[#5e6ad2]/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff]/50 to-transparent pointer-events-none" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#18191d] border border-white/10 text-[11px] font-mono uppercase tracking-[0.14em] text-[#828fff] mb-4">
                // GET CITED. GET CHOSEN.
              </div>

              <h2 className="type-h2 text-[#f7f8f8] mb-5 max-w-2xl mx-auto">
                Ready to establish your synthetic search presence?
              </h2>

              <p className="type-body text-[#8a8f98] max-w-[65ch] mx-auto mb-8 leading-relaxed">
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
