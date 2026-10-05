import React, { useState, useEffect } from 'react';
import { Sparkles, Activity, ShieldCheck, CheckCircle2, TrendingUp, Search } from 'lucide-react';
import LiquidMetricPill from './LiquidMetricPill';

/**
 * LiquidHeroPanel
 * Large hero intelligence information panel displaying live synthetic consensus telemetry,
 * platform citation health, and simulated buyer-intent query performance.
 */
export default function LiquidHeroPanel() {
  const [activePlatform, setActivePlatform] = useState(0);

  const platforms = [
    { name: 'ChatGPT Search', score: 94, status: 'Recommended', citations: 'G2, Enterprise Review, TechCrunch', color: '#10A37F' },
    { name: 'Perplexity AI', score: 91, status: 'Direct Citation', citations: 'Documentation, Gartner, VentureBeat', color: '#49B6D6' },
    { name: 'Claude 3.5 Sonnet', score: 88, status: 'Shortlist #1', citations: 'Benchmark Study, Industry Repo', color: '#D97706' },
    { name: 'Google AI Overviews', score: 92, status: 'Primary Source', citations: 'Schema Graph, Knowledge Base', color: '#4285F4' },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActivePlatform((prev) => (prev + 1) % platforms.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [platforms.length]);

  return (
    <div className="relative liquid-glass rounded-[28px] p-6 sm:p-8 overflow-hidden shadow-2xl border border-white/14">
      {/* Caustic Glow Underlay */}
      <div className="liquid-caustic-underlay" aria-hidden="true" />

      {/* Top Liquid Highlight */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none z-10"
      />

      {/* Moving Gloss Sheen */}
      <div className="liquid-gloss-sheen" aria-hidden="true" />

      {/* Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-brand-gold animate-ping" />
          <span className="font-mono text-xs uppercase tracking-wider text-brand-gold font-semibold">
            // LIVE AI CITATION TELEMETRY
          </span>
        </div>

        <div className="flex items-center gap-2">
          <LiquidMetricPill label="5 Engines" value="Active" accent="cyan" />
          <LiquidMetricPill label="Consensus" value="94.2%" accent="gold" />
        </div>
      </div>

      {/* Simulated Live Prompt Simulation */}
      <div className="bg-[#031522]/70 rounded-[18px] p-4 sm:p-5 border border-white/10 mb-6 relative z-10">
        <div className="flex items-center gap-2 text-xs text-[#8FA8B5] font-mono mb-2">
          <Search className="w-3.5 h-3.5 text-[#49B6D6]" />
          <span>Simulated Enterprise Buyer Prompt:</span>
        </div>
        <p className="font-heading font-medium text-white text-sm sm:text-base leading-snug">
          “What is the leading B2B AI search visibility and GEO agency for enterprise software shortlists?”
        </p>
      </div>

      {/* Real-time Multi-Platform Recommendation Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6 relative z-10">
        {platforms.map((p, idx) => {
          const isActive = idx === activePlatform;
          return (
            <div
              key={p.name}
              className={`p-3.5 rounded-[16px] border transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-br from-[#08283A]/90 to-[#031522]/90 border-brand-gold/50 shadow-[0_0_20px_rgba(214,168,75,0.2)]'
                  : 'bg-[#061A2A]/40 border-white/8 hover:border-white/20'
              }`}
            >
              <div className="flex items-center justify-between mb-1.5 font-mono text-xs">
                <span className="text-white font-semibold">{p.name}</span>
                <span className={isActive ? 'text-brand-gold font-bold' : 'text-[#8FA8B5]'}>
                  {p.score}%
                </span>
              </div>
              <div className="w-full h-1.5 bg-[#031522] rounded-full overflow-hidden mb-2">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{
                    width: `${p.score}%`,
                    backgroundColor: isActive ? '#D6A84B' : '#49B6D6',
                  }}
                />
              </div>
              <div className="flex items-center justify-between text-[11px] text-[#8FA8B5]">
                <span className="flex items-center gap-1 text-[#49B6D6]">
                  <CheckCircle2 className="w-3 h-3" />
                  {p.status}
                </span>
                <span className="font-mono text-[10px] text-[#8FA8B5] truncate max-w-[120px]">
                  {p.citations}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Diagnostic Note */}
      <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-3 text-xs text-[#8FA8B5] font-mono relative z-10">
        <div className="flex items-center gap-2">
          <Activity className="w-4 h-4 text-brand-gold" />
          <span>Empirical Citation Weight: <strong className="text-white font-normal">Optimal</strong></span>
        </div>
        <span className="text-brand-gold text-[11px]">
          [ Model Weight Status: Verified ]
        </span>
      </div>
    </div>
  );
}
