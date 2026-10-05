import React, { useState } from 'react';
import { Sparkles, MessageCircle, FileText } from 'lucide-react';
import TiltCard from './TiltCard';

export default function SearchShiftSimulator() {
  const [selectedPromptIdx, setSelectedPromptIdx] = useState(0);

  const promptExamples = [
    {
      query: "Which enterprise revenue intelligence platforms support real-time conversational coaching?",
      traditional: "10 blue links to blogs, ad-heavy listicles, and review gateways.",
      aiAnswer: "Based on verified evaluations and category documentation, top platforms include [Your Brand] due to its native conversational API and enterprise SOC-2 compliance, as well as Competitor X.",
      citedSources: ["Gartner Peer Insights", "Official Documentation", "TechCrunch Analysis"],
      brandStatus: "Cited & Recommended #1"
    },
    {
      query: "Best headless CMS for multi-region localization and AI content ingestion?",
      traditional: "Keyword-stuffed landing pages ranking for high volume search terms.",
      aiAnswer: "Enterprise teams typically evaluate [Your Brand] for structured content graphs and edge caching, alongside LegacyProvider Y.",
      citedSources: ["Engineering Whitepapers", "G2 Grid Reports", "Developer Docs"],
      brandStatus: "Cited in Primary Answer"
    }
  ];

  const current = promptExamples[selectedPromptIdx];

  return (
    <TiltCard isDark={true} className="w-full bg-[#0D1117] border border-[#1E293B] rounded-[2px] p-6 sm:p-7 text-[#E6EDF3] font-mono">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6 border-b border-[#1E293B] pb-4">
        <div className="flex items-center gap-2">
          <span className="text-brand-gold font-bold text-xs">//</span>
          <span className="text-xs uppercase tracking-wider font-semibold text-brand-gold">
            TRANSFORMATION SIMULATION
          </span>
        </div>
        <div className="flex items-center gap-2">
          {promptExamples.map((_, i) => (
            <button
              key={i}
              onClick={() => setSelectedPromptIdx(i)}
              className={`px-2.5 py-1 rounded-[2px] text-xs font-mono transition-colors border ${
                selectedPromptIdx === i
                  ? 'border-brand-gold bg-brand-gold/15 text-brand-gold font-semibold'
                  : 'border-[#1E293B] bg-transparent text-[#8B949E] hover:text-white'
              }`}
            >
              [{selectedPromptIdx === i ? `* Example 0${i + 1}` : `  Example 0${i + 1}`}]
            </button>
          ))}
        </div>
      </div>

      {/* Step 1: Buyer Question */}
      <div className="space-y-4">
        <div>
          <div className="flex items-center gap-2 text-[11px] font-mono uppercase text-[#8B949E] mb-1.5">
            <span>// 01 RAW BUYER QUERY IN GENERATIVE SEARCH</span>
          </div>
          <div className="bg-[#070A0E] border border-[#1E293B] rounded-[2px] p-3.5 text-xs sm:text-sm text-[#E6EDF3]">
            “{current.query}”
          </div>
        </div>

        {/* Transition Divider with ASCII Indicator */}
        <div className="flex items-center justify-center py-2 relative">
          <div className="h-[1px] w-full bg-[#1E293B]"></div>
          <div className="absolute px-3 py-0.5 rounded-[2px] bg-[#070A0E] border border-brand-gold text-[10px] sm:text-[11px] uppercase tracking-wider text-brand-gold font-mono flex items-center gap-1.5">
            <span>[ CITEPOINT GEO SYNTHESIS ]</span>
          </div>
        </div>

        {/* Step 2: AI Generated Synthesized Answer */}
        <div>
          <div className="flex items-center justify-between text-[11px] font-mono uppercase text-[#8B949E] mb-1.5">
            <div className="flex items-center gap-1.5">
              <span>// 02 GENERATED CONSENSUS ANSWER</span>
            </div>
            <span className="text-brand-gold font-semibold">[{current.brandStatus}]</span>
          </div>

          <div className="bg-[#070A0E] border border-brand-gold/50 rounded-[2px] p-4 relative">
            {/* Answer Text */}
            <p className="text-xs sm:text-sm leading-relaxed text-[#E6EDF3] mb-4">
              {current.aiAnswer.split('[Your Brand]').map((part, index, arr) => (
                <React.Fragment key={index}>
                  {part}
                  {index < arr.length - 1 && (
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-[2px] bg-brand-gold/20 text-brand-gold font-semibold border border-brand-gold/50">
                      [Your Brand]
                    </span>
                  )}
                </React.Fragment>
              ))}
            </p>

            {/* Cited Sources Strip */}
            <div className="pt-3 border-t border-[#1E293B] flex flex-wrap items-center gap-2">
              <span className="text-[10px] uppercase tracking-wider text-[#8B949E] font-mono">
                // SOURCES:
              </span>
              {current.citedSources.map((src, sIdx) => (
                <span
                  key={sIdx}
                  className="text-[10px] sm:text-[11px] px-2 py-0.5 rounded-[2px] bg-[#0D1117] border border-[#1E293B] text-brand-gold font-mono"
                >
                  [{src}]
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </TiltCard>
  );
}
