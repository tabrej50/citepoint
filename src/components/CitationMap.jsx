import React, { useState, useEffect } from 'react';
import { Sparkles, HelpCircle, Shield, Award, Quote, FileText } from 'lucide-react';

/**
 * CitationMap
 * Abstract interactive AI citation map designed for the Auros abyssal terminal.
 * - Container: Liquid Kelp (#141516) with 16px radius, no drop shadows.
 * - Central node labeled "Your Brand" (Citation Point).
 * - 5 surrounding nodes: "AI answers", "Industry sources", "Reviews", "Content", "Authority" (6px radius).
 * - Curved SVG connection lines with bioluminescent teal-cyan gradient.
 * - Floating metric card: Recessed (#0f1011) with Lavender Phosphor (#ff5252) statistic counter.
 */
export default function CitationMap() {
  const [activeNodeIndex, setActiveNodeIndex] = useState(0);

  const nodes = [
    { id: 'ai-answers', label: 'AI answers', angle: -65, icon: HelpCircle, desc: 'Direct synthesized recommendations across conversational models' },
    { id: 'industry-sources', label: 'Industry sources', angle: 5, icon: Shield, desc: 'Authoritative publications and primary industry reference nodes' },
    { id: 'reviews', label: 'Reviews', angle: 80, icon: Quote, desc: 'Verified peer sentiment and product evaluation matrices' },
    { id: 'content', label: 'Content', angle: 165, icon: FileText, desc: 'Structured entity architecture and answer-first documentation' },
    { id: 'authority', label: 'Authority', angle: -140, icon: Award, desc: 'Knowledge graph triples and external domain consensus' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNodeIndex((prev) => (prev + 1) % nodes.length);
    }, 3200);
    return () => clearInterval(interval);
  }, [nodes.length]);

  return (
    <div className="relative w-full max-w-[540px] mx-auto lg:max-w-none select-none">
      
      {/* Main Container Card (Liquid Kelp #141516, 16px radius, no shadows) */}
      <div className="relative rounded-[12px] p-6 sm:p-8 bg-[#141516] border border-white/10 overflow-hidden">
        
        {/* Top Header Label */}
        <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10 text-xs font-sans">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#ff5252] animate-ping" />
            <span className="text-[#f7f8f8] uppercase tracking-[0.12em] font-medium">
              // AI CITATION NETWORK
            </span>
          </div>
          <span className="text-[#8a8f98] uppercase tracking-[0.12em] text-[11px]">
            SYNTHETIC CONSENSUS
          </span>
        </div>

        {/* Interactive Coordinate Canvas */}
        <div className="relative h-[320px] sm:h-[350px] flex items-center justify-center">
          
          {/* Concentric Range Rings */}
          <div className="absolute w-[130px] h-[130px] rounded-full border border-[#ff3131]/30 pointer-events-none" />
          <div className="absolute w-[220px] h-[220px] rounded-full border border-white/8 pointer-events-none" />
          <div className="absolute w-[300px] h-[300px] rounded-full border border-white/5 border-dashed pointer-events-none" />

          {/* Curved SVG Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none overflow-visible">
            <defs>
              <linearGradient id="bioPulseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#ff3131" stopOpacity="0.9" />
                <stop offset="100%" stopColor="#ff5252" stopOpacity="0.3" />
              </linearGradient>
            </defs>

            {nodes.map((node, i) => {
              const rad = (node.angle * Math.PI) / 180;
              const radius = 138;
              const targetX = Math.cos(rad) * radius;
              const targetY = Math.sin(rad) * radius;
              const isActive = activeNodeIndex === i;

              const midAngle = (node.angle + 18) * (Math.PI / 180);
              const ctrlX = Math.cos(midAngle) * (radius * 0.55);
              const ctrlY = Math.sin(midAngle) * (radius * 0.55);

              return (
                <g key={node.id}>
                  <path
                    d={`M calc(50%) calc(50%) Q calc(50% + ${ctrlX}px) calc(50% + ${ctrlY}px) calc(50% + ${targetX}px) calc(50% + ${targetY}px)`}
                    fill="none"
                    stroke={isActive ? '#ff5252' : 'rgba(255, 255, 255, 0.12)'}
                    strokeWidth={isActive ? '1.75' : '1'}
                    strokeDasharray={isActive ? 'none' : '3 4'}
                    className="transition-all duration-700 ease-in-out"
                  />

                  {isActive && (
                    <circle
                      r="3.5"
                      fill="#ff5252"
                      className="animate-ping"
                      cx={`calc(50% + ${ctrlX}px)`}
                      cy={`calc(50% + ${ctrlY}px)`}
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Central Node: "Your Brand" */}
          <div className="relative z-20 flex flex-col items-center justify-center">
            <div className="relative w-24 h-24 rounded-full bg-gradient-to-br from-[#ff5252]/40 via-[#ff3131] to-[#0f1011] p-[2px] flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#0f1011] border border-white/20 flex flex-col items-center justify-center text-center p-2">
                <span className="w-2 h-2 rounded-full bg-[#ff5252] mb-1 animate-pulse" />
                <span className="text-[11px] font-sans font-medium text-white tracking-tight">
                  Your Brand
                </span>
                <span className="text-[9px] font-sans uppercase tracking-[0.1em] text-[#f7f8f8]">
                  Citation Point
                </span>
              </div>
            </div>
          </div>

          {/* Surrounding Connected Nodes (6px radius vocabulary) */}
          {nodes.map((node, i) => {
            const rad = (node.angle * Math.PI) / 180;
            const radius = 138;
            const x = Math.cos(rad) * radius;
            const y = Math.sin(rad) * radius;
            const isActive = activeNodeIndex === i;

            return (
              <div
                key={node.id}
                onClick={() => setActiveNodeIndex(i)}
                onMouseEnter={() => setActiveNodeIndex(i)}
                style={{
                  transform: `translate(${x}px, ${y}px)`,
                }}
                className={`absolute z-30 flex items-center gap-2 px-3 py-1.5 rounded-[8px] border cursor-pointer transition-all duration-300 ${
                  isActive
                    ? 'bg-[#010102] border-[#ff5252] text-white'
                    : 'bg-[#0f1011]/90 border-white/12 text-[#8a8f98] hover:border-white/30 hover:text-white'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                    isActive ? 'bg-[#ff5252]' : 'bg-white/40'
                  }`}
                />
                <span className="text-xs font-sans font-medium whitespace-nowrap">
                  {node.label}
                </span>
              </div>
            );
          })}
        </div>

        {/* Active Node Detail Footer */}
        <div className="pt-4 mt-2 border-t border-white/10 flex items-center justify-between text-xs font-sans text-[#8a8f98]">
          <div className="flex items-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#ff5252]" />
            <span className="text-white font-medium">
              {nodes[activeNodeIndex].label}:
            </span>
            <span className="hidden sm:inline text-[#8a8f98] text-[11px]">
              {nodes[activeNodeIndex].desc}
            </span>
          </div>
          <span className="text-[#f7f8f8] uppercase tracking-[0.12em] text-[11px] font-medium">
            Active Signal
          </span>
        </div>
      </div>

      {/* Floating Metric Card (Recessed #0f1011, 16px radius, no shadow) */}
      <div className="sm:absolute -bottom-5 -right-4 mt-4 sm:mt-0 z-40 bg-[#0f1011] border border-white/15 rounded-[12px] px-5 py-3.5 flex items-center gap-4 max-w-xs">
        <div className="w-10 h-10 rounded-[8px] bg-[#141516] border border-white/10 flex items-center justify-center text-[#ff5252] shrink-0">
          <Award className="w-5 h-5" />
        </div>
        <div>
          <span className="text-[10px] font-sans uppercase tracking-[0.12em] text-[#8a8f98] block">
            AI visibility score
          </span>
          <div className="flex items-baseline gap-2 mt-0.5">
            <span className="text-2xl font-sans font-medium text-[#ff5252] leading-none tracking-tight">
              — / 100
            </span>
            <span className="text-[10px] font-arial uppercase tracking-wider text-[#010102] bg-[#ff5252] px-2 py-0.5 rounded-[8px] font-medium">
              Audit required
            </span>
          </div>
        </div>
      </div>

    </div>
  );
}
