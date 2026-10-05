import React, { useState } from 'react';
import { ShieldCheck, ArrowRight, AlertCircle, Check } from 'lucide-react';
import ScoreReveal from './ScoreReveal';
import LiquidButton from './LiquidButton';

export default function ReadinessCalculator({ onOpenAudit }) {
  const [answers, setAnswers] = useState({
    entity: 2,
    citations: 2,
    content: 2,
    tech: 2,
    monitoring: 1,
  });

  const questions = [
    {
      id: 'entity',
      title: 'Knowledge Graph & Entity Clarity',
      desc: 'Does your brand have consistent entity definitions across Wikipedia, Wikidata, industry directories, and official schema markup?',
      options: [
        { label: 'Unclear / Outdated', points: 5 },
        { label: 'Basic presence, but fragmented', points: 12 },
        { label: 'Standardized schemas & verified profiles', points: 20 },
      ]
    },
    {
      id: 'citations',
      title: 'Third-Party Citation Health',
      desc: 'How frequently is your brand cited in high-authority third-party publications, G2/Capterra reviews, and industry analysts?',
      options: [
        { label: 'Rarely cited outside our own blog', points: 5 },
        { label: 'Occasional mentions in roundups', points: 12 },
        { label: 'Consistently cited as a category leader', points: 20 },
      ]
    },
    {
      id: 'content',
      title: 'Answer-Engine Content Architecture',
      desc: 'Is your content written to answer explicit buyer comparison and evaluation queries directly, or is it traditional keyword-stuffed SEO?',
      options: [
        { label: 'Traditional keyword articles & marketing fluff', points: 5 },
        { label: 'Some FAQ / direct answer sections', points: 12 },
        { label: 'Modular, concise answer-first documentation', points: 20 },
      ]
    },
    {
      id: 'tech',
      title: 'AI Crawler Accessibility',
      desc: 'Are GPTBot, PerplexityBot, ClaudeBot, and Googlebot permitted and able to crawl your clean HTML without heavy JS blockades?',
      options: [
        { label: 'Unknown / blocked in robots.txt', points: 5 },
        { label: 'Standard access, no custom configuration', points: 12 },
        { label: 'Optimized crawl budgets, clean JSON-LD', points: 20 },
      ]
    },
    {
      id: 'monitoring',
      title: 'Generative Search Tracking',
      desc: 'Do you routinely monitor how ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews answer queries in your category?',
      options: [
        { label: 'Never checked / ad-hoc manual queries', points: 5 },
        { label: 'Occasional internal checks', points: 10 },
        { label: 'Structured weekly prompt benchmarking', points: 20 },
      ]
    },
  ];

  const totalScore = Object.entries(answers).reduce((acc, [key, optIdx]) => {
    const q = questions.find((item) => item.id === key);
    return acc + (q?.options[optIdx]?.points || 0);
  }, 0);

  const getTier = (score) => {
    if (score < 40) return { label: 'High Risk / Low Visibility', color: 'text-red-400', desc: 'Your brand is largely invisible or misrepresented in generative retrieval.' };
    if (score < 75) return { label: 'Moderate Baseline / Citation Gaps', color: 'text-amber-400', desc: 'AI engines have fragmented knowledge about your company. Key citations are missing.' };
    return { label: 'Strong Readiness / Optimization Required', color: 'text-emerald-400', desc: 'Good foundation. Ongoing GEO strategy needed to protect citation share of voice.' };
  };

  const tier = getTier(totalScore);

  return (
    <div className="liquid-glass rounded-[28px] border border-white/12 p-6 sm:p-10 text-[#E6EDF3] relative shadow-[0_24px_80px_rgba(0,0,0,0.4)]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block text-xs uppercase tracking-wider font-mono font-semibold text-brand-gold mb-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30">
            // SELF-ASSESSMENT DIAGNOSTIC
          </span>
          <h3 className="text-2xl sm:text-4xl font-heading font-bold text-white mb-3">
            Estimate your AI visibility readiness.
          </h3>
          <p className="text-xs sm:text-sm text-[#8FA8B5] max-w-xl mx-auto leading-relaxed">
            Answer 5 rapid diagnostic questions to understand your baseline position before requesting your complete audit.
          </p>
        </div>

        <div className="space-y-5 mb-10">
          {questions.map((q, qIdx) => (
            <div
              key={q.id}
              className="liquid-glass rounded-[12px] border border-white/10 p-5 sm:p-6 transition-all hover:border-brand-gold/30"
            >
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-brand-gold font-bold">
                  // QUESTION 0{qIdx + 1}
                </span>
              </div>
              <h4 className="text-base sm:text-lg font-heading font-bold text-white mb-1.5">
                {q.title}
              </h4>
              <p className="text-xs sm:text-sm text-[#8FA8B5] mb-4 leading-relaxed">
                {q.desc}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {q.options.map((opt, oIdx) => {
                  const isSelected = answers[q.id] === oIdx;
                  return (
                    <button
                      key={oIdx}
                      type="button"
                      onClick={() => setAnswers((prev) => ({ ...prev, [q.id]: oIdx }))}
                      className={`text-left p-3.5 rounded-[14px] text-xs transition-all border ${
                        isSelected
                          ? 'bg-brand-gold/15 text-brand-gold border-brand-gold font-medium shadow-[0_4px_16px_rgba(214,168,75,0.15)]'
                          : 'bg-[#031522]/50 text-[#8FA8B5] border-white/10 hover:border-white/20 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-[10px] font-mono uppercase tracking-wider opacity-75">
                          Tier 0{oIdx + 1}
                        </span>
                        {isSelected ? (
                          <span className="w-4 h-4 rounded-full bg-brand-gold text-[#031522] flex items-center justify-center font-bold text-[10px]">
                            ✓
                          </span>
                        ) : (
                          <span className="w-4 h-4 rounded-full border border-white/20" />
                        )}
                      </div>
                      <p className="leading-snug font-sans">{opt.label}</p>
                    </button>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Live Score Summary Banner */}
        <div className="liquid-glass rounded-[12px] border border-brand-gold/50 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-[0_16px_50px_rgba(214,168,75,0.14)]">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 text-center sm:text-left">
            <ScoreReveal
              score={totalScore}
              size={120}
              strokeWidth={8}
              label="AI Visibility Score"
              isDark={true}
            />
            <div>
              <span className="text-xs uppercase tracking-wider font-mono font-semibold text-brand-gold block mb-1">
                // ESTIMATED READINESS BASELINE
              </span>
              <p className={`text-lg sm:text-xl font-heading font-bold mt-1 ${tier.color}`}>
                {tier.label}
              </p>
              <p className="text-xs text-[#8FA8B5] mt-1 max-w-md leading-relaxed">
                {tier.desc}
              </p>
            </div>
          </div>

          <LiquidButton
            onClick={onOpenAudit}
            variant="primary"
            className="w-full md:w-auto px-7 py-3.5 text-xs shrink-0"
          >
            Get Official Audit Breakdown
          </LiquidButton>
        </div>
      </div>
    </div>
  );
}
