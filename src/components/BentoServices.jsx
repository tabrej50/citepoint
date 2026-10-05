import React from 'react';
import { Search, Sparkles, Award, Code2, LineChart, Compass, ArrowRight, Check } from 'lucide-react';
import LiquidServiceCard from './LiquidServiceCard';

export default function BentoServices({ onSelectService, onExploreService }) {
  const services = [
    {
      num: '01',
      title: 'AI Visibility Diagnostic Audit',
      icon: Search,
      desc: 'Understand how ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews currently describe, cite, and recommend your brand.',
      deliverables: [
        'Prompt-cluster research',
        'Top 3 competitor benchmark',
        'Citation-source analysis',
        '90-day action roadmap'
      ],
      featured: true,
      tag: 'Foundation',
      hasCaustic: true,
    },
    {
      num: '02',
      title: 'Generative Engine Optimization',
      icon: Sparkles,
      desc: 'Build the content and authority signals that make your brand natural for conversational AI systems to retrieve and cite.',
      deliverables: [
        'Entity and topic mapping',
        'Answer-focused content',
        'Corroborating web sources',
        'Knowledge architecture'
      ],
      featured: false,
      tag: 'Core Strategy',
    },
    {
      num: '03',
      title: 'Citation & Authority Building',
      icon: Award,
      desc: 'Strengthen your presence across the third-party publications and review repositories AI models naturally trust.',
      deliverables: [
        'Industry publications',
        'G2 & review platforms',
        'Executive commentary',
        'Targeted digital PR'
      ],
      featured: false,
      tag: 'Off-Page Signals',
    },
    {
      num: '04',
      title: 'Technical AI Readiness',
      icon: Code2,
      desc: 'Improve the crawlability, robots permissions, and schema graphs that allow LLM web crawlers to retrieve your capabilities.',
      deliverables: [
        'Schema & JSON-LD markup',
        'Crawlability & bot access',
        'Knowledge entity graphs',
        'Content discoverability'
      ],
      featured: false,
      tag: 'Technical',
    },
    {
      num: '05',
      title: 'AI Reputation Monitoring',
      icon: LineChart,
      desc: 'Track how generative models describe your company, pricing, competitors, and products over ongoing monthly cycles.',
      deliverables: [
        'Monthly prompt monitoring',
        'Citation graph tracking',
        'Hallucination defense',
        'Shortlist win rates'
      ],
      featured: false,
      tag: 'Intelligence',
    },
    {
      num: '06',
      title: 'AI Search Strategy & Advisory',
      icon: Compass,
      desc: 'Turn AI visibility into a measurable competitive advantage and demand-generation pipeline for commercial teams.',
      deliverables: [
        'Shortlist buyer journeys',
        'Buyer question mapping',
        'Competitive displacement',
        'Executive advisory readouts'
      ],
      featured: true,
      tag: 'Growth',
      hasCaustic: true,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {services.map((item) => {
        const IconComponent = item.icon;

        return (
          <LiquidServiceCard
            key={item.num}
            hasCaustic={item.hasCaustic}
            hasGloss={true}
            className="flex flex-col justify-between rounded-[12px] p-6 sm:p-8 hover:border-brand-gold/50"
          >
            {/* Top row: Number and Gold Icon */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-xs font-semibold text-brand-gold tracking-wider">
                  // {item.num}
                </span>
                <div className="w-10 h-10 rounded-full bg-[#08283A]/80 border border-white/14 flex items-center justify-center text-brand-gold shadow-md">
                  <IconComponent className="w-4 h-4" />
                </div>
              </div>

              <span className="inline-block text-[11px] uppercase tracking-wider font-mono font-semibold text-brand-gold mb-2">
                [{item.tag}]
              </span>

              <h3 className="text-lg sm:text-xl font-heading font-bold text-white mb-3">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#8FA8B5] leading-relaxed mb-6">
                {item.desc}
              </p>

              {/* Service 01 Specifics Badge */}
              {item.num === '01' && (
                <div className="mb-6 px-4 py-2.5 rounded-full bg-[#031522]/80 border border-brand-gold/30">
                  <p className="text-[11px] font-mono font-semibold uppercase tracking-wider text-brand-gold leading-snug">
                    // 5-DAY DELIVERY · 10-15 PROMPTS · $1,500 FLAT FEE
                  </p>
                </div>
              )}

              {/* Deliverables checklist */}
              <div className="space-y-2.5 pt-5 border-t border-white/10 mb-6">
                <p className="text-[11px] uppercase tracking-wider font-mono font-semibold text-[#8FA8B5]">
                  // DELIVERABLES
                </p>
                {item.deliverables.map((deliv, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-[#E6EDF3]">
                    <span className="w-3.5 h-3.5 rounded-full bg-brand-gold/15 border border-brand-gold/40 flex items-center justify-center text-brand-gold shrink-0 mt-0.5">
                      <Check className="w-2 h-2 stroke-[2.5]" />
                    </span>
                    <span>{deliv}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom action link */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={() => (onExploreService ? onExploreService(item.title) : null)}
                className="inline-flex items-center gap-1.5 text-xs uppercase font-mono tracking-wider text-brand-gold hover:text-white transition-colors cursor-pointer"
              >
                <span>Explore Scope &rarr;</span>
              </button>

              <span className="text-[11px] text-[#8FA8B5] font-mono select-none">
                STAGE 0{item.num}
              </span>
            </div>
          </LiquidServiceCard>
        );
      })}
    </div>
  );
}

