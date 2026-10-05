import React, { useState } from 'react';
import { Compass, Stethoscope, Wrench, BarChart3 } from 'lucide-react';
import TiltCard from './TiltCard';

export default function ProcessTimeline() {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      num: '01',
      title: 'Discover',
      icon: Compass,
      desc: 'We map your category, audience, competitors, buyer questions, and current AI presence.',
      focus: 'Foundational mapping',
      outputs: [
        'Buyer intent prompt matrix',
        'Competitor AI presence benchmark',
        'High-value topic clusters'
      ]
    },
    {
      num: '02',
      title: 'Diagnose',
      icon: Stethoscope,
      desc: 'We identify visibility gaps, citation gaps, content gaps, and technical barriers.',
      focus: 'Root cause analysis',
      outputs: [
        'Hallucination and inaccuracy audit',
        'Source citation gap analysis',
        'Technical crawler accessibility report'
      ]
    },
    {
      num: '03',
      title: 'Build',
      icon: Wrench,
      desc: 'We improve the sources, content, structure, and authority signals that influence AI discovery.',
      focus: 'Execution & deployment',
      outputs: [
        'Answer-engine ready content',
        'High-authority third-party citations',
        'Entity-schema data layer integration'
      ]
    },
    {
      num: '04',
      title: 'Measure',
      icon: BarChart3,
      desc: 'We monitor changes across AI platforms and connect visibility improvements to business outcomes.',
      focus: 'Impact & iteration',
      outputs: [
        'Prompt sentiment & frequency tracking',
        'Recommendation share of voice',
        'Executive reporting dashboard'
      ]
    },
  ];

  return (
    <div className="w-full font-mono">
      {/* Desktop Horizontal Stepper Bar */}
      <div className="hidden lg:grid grid-cols-4 gap-4 mb-10 relative">
        {/* Connecting background line */}
        <div className="absolute top-1/2 left-8 right-8 -translate-y-1/2 h-[1px] bg-[#1E293B] z-0"></div>

        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          const isPassed = activeStep >= idx;

          return (
            <button
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className="relative z-10 flex flex-col items-center text-center group focus:outline-none"
            >
              {/* Terminal step marker */}
              <div
                className={`w-10 h-10 rounded-[2px] flex items-center justify-center font-mono text-xs font-bold transition-colors ${
                  isActive
                    ? 'bg-brand-gold text-[#070A0E] border border-brand-gold'
                    : isPassed
                    ? 'bg-[#070A0E] text-brand-gold border border-brand-gold/60'
                    : 'bg-[#0D1117] text-[#8B949E] border border-[#1E293B] hover:border-[#8B949E]'
                }`}
              >
                {step.num}
              </div>

              <span
                className={`mt-2.5 text-xs font-mono font-semibold uppercase tracking-wider transition-colors ${
                  isActive ? 'text-brand-gold' : 'text-[#8B949E] group-hover:text-white'
                }`}
              >
                [{step.title}]
              </span>

              <span className="text-[10px] text-[#8B949E]/70 tracking-wider">
                {step.focus}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Detail Display */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {steps.map((step, idx) => {
          const isActive = activeStep === idx;
          const IconComp = step.icon;

          return (
            <TiltCard
              key={step.num}
              onClick={() => setActiveStep(idx)}
              className={`cursor-pointer rounded-[2px] p-6 border transition-colors ${
                isActive
                  ? 'bg-[#0D1117] text-[#E6EDF3] border-brand-gold'
                  : 'bg-[#0D1117] text-[#E6EDF3] border-[#1E293B] hover:border-[#8B949E]'
              }`}
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`font-mono text-xs font-bold ${
                    isActive ? 'text-brand-gold' : 'text-[#8B949E]'
                  }`}
                >
                  // STEP {step.num}
                </span>
                <div
                  className={`w-7 h-7 rounded-[2px] flex items-center justify-center border ${
                    isActive
                      ? 'bg-[#070A0E] border-brand-gold text-brand-gold'
                      : 'bg-[#070A0E] border-[#1E293B] text-[#8B949E]'
                  }`}
                >
                  <IconComp className="w-3.5 h-3.5" />
                </div>
              </div>

              <h4 className="text-base font-mono font-bold mb-2 text-[#E6EDF3]">
                {step.title}
              </h4>

              <p className="text-xs text-[#8B949E] leading-relaxed mb-5">
                {step.desc}
              </p>

              <div className="pt-4 border-t border-[#1E293B]">
                <p className="text-[10px] uppercase tracking-wider font-semibold mb-2 text-brand-gold">
                  // KEY OUTPUTS
                </p>
                <ul className="space-y-1.5 text-xs">
                  {step.outputs.map((out, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-1.5 text-[#E6EDF3]">
                      <span className="text-brand-gold font-mono text-xs shrink-0 select-none">
                        [x]
                      </span>
                      <span className="leading-snug">{out}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </TiltCard>
          );
        })}
      </div>
    </div>
  );
}
