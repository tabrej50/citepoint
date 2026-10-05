import React, { useState, useEffect } from 'react';
import { HelpCircle, Bot, ShieldCheck, Award, Quote, Compass, Sparkles, Activity } from 'lucide-react';

/**
 * AiVisibilityMap
 * Premium light liquid-glass hero visual object.
 * Visualizes the generative path with a central gold citation signal point,
 * translucent orbital rings, labeled nodes, gold pulses, and floating status mini-cards.
 */
export default function AiVisibilityMap() {
  const [pulsePhase, setPulsePhase] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPulsePhase((prev) => (prev + 1) % 6);
    }, 2400);
    return () => clearInterval(timer);
  }, []);

  const nodes = [
    { label: 'Buyer Questions', angle: -135, icon: HelpCircle, color: '#1D5E7A', step: '01' },
    { label: 'AI Answers', angle: -75, icon: Bot, color: '#1D5E7A', step: '02' },
    { label: 'Trusted Sources', angle: -15, icon: ShieldCheck, color: '#D6A84B', step: '03' },
    { label: 'Brand Authority', angle: 45, icon: Award, color: '#EAC978', step: '04' },
    { label: 'Citations', angle: 115, icon: Quote, color: '#D6A84B', step: '05' },
    { label: 'Discovery', angle: 175, icon: Compass, color: '#1D5E7A', step: '06' },
  ];

  return (
    <div className="relative w-full max-w-[540px] mx-auto lg:max-w-none">
      {/* Soft Ambient Fluid Glow Underlay */}
      <div
        aria-hidden="true"
        className="absolute -inset-6 rounded-[36px] opacity-70 filter blur-3xl pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(ellipse at 50% 45%, rgba(234, 201, 120, 0.35) 0%, rgba(237, 246, 248, 0.7) 45%, transparent 72%)',
        }}
      />

      {/* Main Liquid Glass Visualization Card */}
      <div className="liquid-glass rounded-[32px] p-6 sm:p-8 md:p-10 border border-white/90 shadow-[0_24px_70px_rgba(22,43,54,0.09)] relative overflow-hidden">
        {/* Top Liquid Highlight */}
        <div
          aria-hidden="true"
          className="absolute top-0 left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-white to-transparent pointer-events-none z-10"
        />

        {/* Slow Gloss Sheen */}
        <div className="liquid-gloss-sheen" aria-hidden="true" />

        {/* Card Header Info */}
        <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#071C2B]/8 relative z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-ping" />
            <span className="font-mono text-xs uppercase tracking-wider text-brand-gold font-semibold">
              // AI VISIBILITY MAP
            </span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-white shadow-sm text-[11px] font-mono text-[#1D5E7A]">
            <Activity className="w-3.5 h-3.5 text-brand-gold" />
            <span>SIGNAL MAPPING</span>
          </div>
        </div>

        {/* Visual Canvas Graphic Container */}
        <div className="relative h-[310px] sm:h-[340px] flex items-center justify-center">
          {/* Concentric Translucent Orbital Rings */}
          <div className="absolute w-[140px] h-[140px] rounded-full border border-[#D6A84B]/25 pointer-events-none" />
          <div className="absolute w-[210px] h-[210px] rounded-full border border-[#1D5E7A]/12 pointer-events-none" />
          <div className="absolute w-[280px] h-[280px] rounded-full border border-[#1D5E7A]/10 border-dashed pointer-events-none" />

          {/* Central Gold Citation Signal Point */}
          <div className="relative z-20 flex items-center justify-center">
            {/* Breathing Ambient Gold Pool */}
            <div className="absolute w-28 h-28 rounded-full bg-brand-gold/18 filter blur-xl animate-pulse-slow pointer-events-none" />

            {/* Central Glass Disc */}
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-white via-[#FBF3DE] to-[#EAC978] p-[1.5px] shadow-[0_10px_30px_rgba(214,168,75,0.3)] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-white/95 flex flex-col items-center justify-center text-center p-2 backdrop-blur-md">
                <span className="text-[10px] font-mono font-bold tracking-tight text-brand-gold uppercase">
                  CITED
                </span>
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#657581]">
                  CORE
                </span>
              </div>
            </div>
          </div>

          {/* Radiating Thin Pale-Blue Connection Lines & Labeled Nodes */}
          {nodes.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const distance = 135; // px from center
            const x = Math.cos(rad) * distance;
            const y = Math.sin(rad) * distance;
            const isPulsing = pulsePhase === i;
            const Icon = node.icon;

            return (
              <React.Fragment key={node.label}>
                {/* Connection Line */}
                <svg
                  className="absolute inset-0 w-full h-full pointer-events-none"
                  style={{ overflow: 'visible' }}
                >
                  <line
                    x1="50%"
                    y1="50%"
                    x2={`calc(50% + ${x}px)`}
                    y2={`calc(50% + ${y}px)`}
                    stroke={isPulsing ? '#D6A84B' : 'rgba(29, 94, 122, 0.12)'}
                    strokeWidth={isPulsing ? '1.5' : '1'}
                    strokeDasharray={isPulsing ? 'none' : '3 4'}
                    className="transition-all duration-500"
                  />
                  {isPulsing && (
                    <circle
                      cx={`calc(50% + ${x * 0.45}px)`}
                      cy={`calc(50% + ${y * 0.45}px)`}
                      r="3.5"
                      fill="#D6A84B"
                      className="animate-ping"
                    />
                  )}
                </svg>

                {/* Node Pill */}
                <div
                  className="absolute z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/90 border border-white/95 shadow-[0_4px_16px_rgba(22,43,54,0.08)] backdrop-blur-md transition-all duration-300 hover:scale-105 hover:border-brand-gold/50 cursor-default"
                  style={{
                    transform: `translate(${x}px, ${y}px)`,
                  }}
                >
                  <span
                    className="w-2 h-2 rounded-full"
                    style={{ backgroundColor: node.color }}
                  />
                  <span className="text-[11px] font-heading font-bold text-[#071C2B] whitespace-nowrap">
                    {node.label}
                  </span>
                </div>
              </React.Fragment>
            );
          })}
        </div>

        {/* Card Footer Microcopy */}
        <div className="pt-4 border-t border-[#071C2B]/8 flex items-center justify-between text-[11px] font-mono text-[#657581] relative z-10">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Generative Path Flow</span>
          </div>
          <span className="text-brand-gold font-medium">Empirical Architecture</span>
        </div>
      </div>

      {/* Floating Mini-Cards Around The Visual (Strictly No Fake Metrics) */}
      
      {/* Card 1: Top Right */}
      <div className="sm:absolute -top-4 -right-4 mt-3 sm:mt-0 liquid-glass rounded-[20px] px-4 py-3 border border-white/95 shadow-[0_12px_32px_rgba(22,43,54,0.1)] z-30 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#EDF6F8] border border-white flex items-center justify-center text-[#1D5E7A] shrink-0 font-mono text-xs font-bold">
          01
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#657581] block">
            AI VISIBILITY
          </span>
          <span className="text-xs font-heading font-bold text-[#071C2B]">
            Baseline pending
          </span>
        </div>
      </div>

      {/* Card 2: Bottom Left */}
      <div className="sm:absolute -bottom-4 -left-4 mt-3 sm:mt-0 liquid-glass rounded-[20px] px-4 py-3 border border-white/95 shadow-[0_12px_32px_rgba(22,43,54,0.1)] z-30 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#FBF3DE] border border-white flex items-center justify-center text-brand-gold shrink-0 font-mono text-xs font-bold">
          02
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#657581] block">
            CITATION SIGNAL
          </span>
          <span className="text-xs font-heading font-bold text-[#071C2B]">
            Mapping sources
          </span>
        </div>
      </div>

      {/* Card 3: Bottom Right */}
      <div className="sm:absolute -bottom-6 right-8 mt-3 sm:mt-0 liquid-glass rounded-[20px] px-4 py-3 border border-white/95 shadow-[0_12px_32px_rgba(22,43,54,0.1)] z-30 flex items-center gap-3 hidden sm:flex">
        <div className="w-8 h-8 rounded-full bg-[#EDF6F8] border border-white flex items-center justify-center text-[#1D5E7A] shrink-0 font-mono text-xs font-bold">
          03
        </div>
        <div>
          <span className="text-[10px] font-mono uppercase tracking-wider text-[#657581] block">
            BUYER INTENT
          </span>
          <span className="text-xs font-heading font-bold text-[#071C2B]">
            High-value prompts
          </span>
        </div>
      </div>
    </div>
  );
}
