import React, { useState } from 'react';
import { BarChart3, TrendingUp, Layers, Database, ArrowUpRight, ShieldCheck } from 'lucide-react';
import LiquidMetricPill from './LiquidMetricPill';

/**
 * LiquidDataWidget
 * Interactive liquid-glass data dashboard widget visualizing multi-prompt
 * win rate, citation depth distribution, and competitor displacement index.
 */
export default function LiquidDataWidget({ className = '' }) {
  const [selectedMetric, setSelectedMetric] = useState('visibility');

  const metricsData = {
    visibility: {
      title: 'AI Recommendation Share of Voice (SOV)',
      stat: '78.4%',
      growth: '+34.2%',
      desc: 'Frequency of brand recommendation across 15 high-intent B2B vendor prompts.',
      bars: [
        { label: 'ChatGPT', val: 84 },
        { label: 'Perplexity', val: 79 },
        { label: 'Claude', val: 74 },
        { label: 'Gemini', val: 71 },
        { label: 'AI Overviews', val: 82 },
      ],
    },
    citations: {
      title: 'Third-Party Citation Graph Depth',
      stat: '92 Sources',
      growth: '+28 verified',
      desc: 'Corroborating web sources cited by LLM retrieval engines to substantiate brand claims.',
      bars: [
        { label: 'Tier-1 Media', val: 88 },
        { label: 'Peer Reviews (G2)', val: 95 },
        { label: 'Industry Reports', val: 82 },
        { label: 'Tech Repos', val: 70 },
        { label: 'Knowledge Bases', val: 91 },
      ],
    },
    displacement: {
      title: 'Competitor Displacement Delta',
      stat: '3.4x Favored',
      growth: 'Top shortlists',
      desc: 'Direct comparative preference against named competitors in commercial software queries.',
      bars: [
        { label: 'Competitor A', val: 65 },
        { label: 'Competitor B', val: 58 },
        { label: 'Competitor C', val: 49 },
        { label: 'Citepoint Client', val: 94 },
      ],
    },
  };

  const active = metricsData[selectedMetric];

  return (
    <div
      className={`liquid-glass rounded-[24px] p-6 sm:p-8 overflow-hidden border border-white/12 ${className}`}
    >
      {/* Top Liquid Highlight */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none z-10"
      />

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-2">
          <button
            onClick={() => setSelectedMetric('visibility')}
            className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all ${
              selectedMetric === 'visibility'
                ? 'bg-brand-gold text-[#031522] font-semibold shadow-md'
                : 'bg-[#081F2F]/60 text-[#8FA8B5] hover:text-white border border-white/10'
            }`}
          >
            Recommendation SOV
          </button>
          <button
            onClick={() => setSelectedMetric('citations')}
            className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all ${
              selectedMetric === 'citations'
                ? 'bg-brand-gold text-[#031522] font-semibold shadow-md'
                : 'bg-[#081F2F]/60 text-[#8FA8B5] hover:text-white border border-white/10'
            }`}
          >
            Citation Depth
          </button>
          <button
            onClick={() => setSelectedMetric('displacement')}
            className={`px-3 py-1.5 rounded-full font-mono text-xs transition-all ${
              selectedMetric === 'displacement'
                ? 'bg-brand-gold text-[#031522] font-semibold shadow-md'
                : 'bg-[#081F2F]/60 text-[#8FA8B5] hover:text-white border border-white/10'
            }`}
          >
            Displacement Delta
          </button>
        </div>

        <LiquidMetricPill label="Empirical" value="Live" accent="gold" />
      </div>

      {/* Key Metric Header */}
      <div className="mb-6 relative z-10">
        <span className="font-mono text-xs text-[#8FA8B5] block mb-1 uppercase tracking-wider">
          {active.title}
        </span>
        <div className="flex items-baseline gap-3">
          <h3 className="font-heading font-extrabold text-3xl sm:text-4xl text-white">
            {active.stat}
          </h3>
          <span className="font-mono text-xs text-[#49B6D6] font-semibold flex items-center gap-1">
            <TrendingUp className="w-3.5 h-3.5" />
            {active.growth}
          </span>
        </div>
        <p className="text-[#8FA8B5] text-xs sm:text-sm mt-1.5 max-w-xl">
          {active.desc}
        </p>
      </div>

      {/* Visualization Bars */}
      <div className="space-y-3 relative z-10 pt-2">
        {active.bars.map((bar) => (
          <div key={bar.label}>
            <div className="flex items-center justify-between text-xs font-mono mb-1">
              <span className="text-[#E6EDF3]">{bar.label}</span>
              <span className="text-brand-gold font-bold">{bar.val}%</span>
            </div>
            <div className="w-full h-2 bg-[#031522]/80 rounded-full overflow-hidden p-0.5 border border-white/5">
              <div
                className="h-full rounded-full transition-all duration-700 ease-out"
                style={{
                  width: `${bar.val}%`,
                  background:
                    bar.val > 90
                      ? 'linear-gradient(90deg, #49B6D6, #D6A84B)'
                      : 'linear-gradient(90deg, #08283A, #49B6D6)',
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
