import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Clock3,
  UsersRound,
  Sparkles,
  FileCheck2
} from 'lucide-react';
import { SlideReveal } from '../components/SlideReveal';

export default function PricingPage({ setCurrentRoute }) {
  const [step, setStep] = useState(1);
  const [selectedPlanId, setSelectedPlanId] = useState('foundation');
  const [submitted, setSubmitted] = useState(false);

  // Form State
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    notes: '',
  });

  const handleNav = (route) => {
    if (setCurrentRoute) setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const plans = [
    {
      id: 'audit',
      title: 'AI Visibility Audit',
      label: 'START HERE',
      price: '$1,500',
      pricePeriod: 'flat fee',
      scopeLabel: 'Diagnostic Scope',
      timeline: 'Typically 2–3 weeks',
      desc: 'A focused baseline diagnostic for teams evaluating how their brand is currently positioned in AI answers.',
      features: [
        'Multi-platform LLM benchmark',
        '25+ high-intent buyer prompts',
        'Competitor share-of-voice baseline',
        'Citation attribution mapping',
        'Prioritized 90-day action roadmap'
      ]
    },
    {
      id: 'foundation',
      title: 'Visibility Foundation',
      label: 'MOST POPULAR',
      price: '$3,500',
      pricePeriod: '/month',
      scopeLabel: 'Structured 90-Day Scope',
      timeline: 'Structured 90-day program',
      desc: 'A structured 90-day program for companies ready to turn their AI visibility gaps into measurable execution.',
      features: [
        'Everything in AI Visibility Audit',
        'Generative Engine Optimization strategy',
        'Answer-first content deployment',
        'Schema & entity triples implementation',
        'Citation source network development'
      ]
    },
    {
      id: 'ongoing',
      title: 'Ongoing AI Visibility',
      label: 'STRATEGIC RETAINER',
      price: '$7,000',
      pricePeriod: '/month',
      scopeLabel: 'Continuous Retainer',
      timeline: '6-month minimum',
      desc: 'Continuous prompt monitoring, displacement alerts, and strategic authority building for category leaders.',
      features: [
        'Continuous prompt monitoring across models',
        'Citation displacement alerts',
        'PR & trade editorial citation seeding',
        'Quarterly competitive re-benchmarking',
        'Monthly executive performance reports'
      ]
    }
  ];

  const selectedPlan = plans.find((p) => p.id === selectedPlanId) || plans[1];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="w-full bg-transparent text-[#4B4F58] font-sans">
      
      {/* ============================================================
          SECTION 1: HEADER
          Padding: 96px 0 64px, centered, max-width 720px
          ============================================================ */}
      <section className="pt-[96px] pb-[64px] border-b border-[#EADBBE] overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px] mx-auto text-center">
            <SlideReveal direction="down">
              <div className="type-eyebrow text-[#A67D28] mb-4">
                // TRANSPARENT SCOPE & ENGAGEMENT MODELS
              </div>
              <h1 className="type-display text-[#0F1012] mb-6">
                Start with clarity. Build toward visibility.
              </h1>
            </SlideReveal>
            <SlideReveal direction="up" delay={0.1}>
              <p className="type-body-lg text-[#4B4F58] max-w-[65ch] mx-auto">
                Every Citepoint engagement begins with your category, buyer evaluation questions, existing authority, and AI search opportunity—not an arbitrary one-size-fits-all package.
              </p>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: TWO-STEP CONFIGURATOR
          ============================================================ */}
      <section className="pt-12 sm:pt-16 pb-[160px] overflow-hidden bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-12 gap-[32px] items-start">
            
            {/* LEFT FORM AREA: Columns 1-8 */}
            <div className="col-span-12 lg:col-span-8">
              
              {/* Step indicator */}
              <div className="w-full mb-[48px]">
                <div className="h-[24px] mb-[16px] flex items-center justify-between text-xs font-mono uppercase tracking-wider">
                  <span className="text-[#0F1012] font-semibold">
                    {step === 1 ? 'Step 01 / 02 — Select Your Scope' : 'Step 02 / 02 — Your Project Details'}
                  </span>
                  <span className="text-[#636773]">
                    {step === 1 ? 'Next: Contact Information' : 'Selected: ' + selectedPlan.title}
                  </span>
                </div>

                <div className="flex items-center gap-[8px] w-full">
                  <div className={`flex-1 h-[4px] rounded-full transition-colors duration-300 ${step >= 1 ? 'bg-[#C5A059]' : 'bg-[#EADBBE]'}`} />
                  <div className={`flex-1 h-[4px] rounded-full transition-colors duration-300 ${step >= 2 ? 'bg-[#C5A059]' : 'bg-[#EADBBE]'}`} />
                </div>
              </div>

              {/* STEP 1: Plan Selection */}
              {step === 1 && (
                <SlideReveal direction="left">
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[16px]">
                    {plans.map((plan) => {
                      const isSelected = selectedPlanId === plan.id;
                      return (
                        <div
                          key={plan.id}
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={`surface-card min-h-[340px] md:min-h-[260px] p-[20px] sm:p-[32px] rounded-[12px] transition-all cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? '!border-[#C5A059] !shadow-[0_8px_30px_rgba(197,160,89,0.22)] -translate-y-0.5'
                              : 'hover:border-[#C5A059]/60'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-[#A67D28] font-semibold">
                                {plan.label}
                              </span>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#C5A059] bg-[#C5A059]' : 'border-[#D5C39E]'}`}>
                                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </div>
                            </div>

                            <h3 className="type-h4 text-[#0F1012] mb-2">
                              {plan.title}
                            </h3>

                            <div className="mb-4">
                              <span className="text-2xl lg:text-3xl font-semibold text-[#0F1012]">
                                {plan.price}
                              </span>
                              <span className="text-xs text-[#636773] ml-1">
                                {plan.pricePeriod}
                              </span>
                            </div>

                            <p className="type-small text-[#4B4F58] mb-6">
                              {plan.desc}
                            </p>
                          </div>

                          <div className="space-y-2 pt-4 border-t border-[#EADBBE]">
                            {plan.features.slice(0, 3).map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2 text-xs text-[#363940]">
                                <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                                <span className="truncate">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Button row */}
                  <div className="mt-[32px] flex items-center justify-start">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-primary h-[52px] px-8 text-base font-semibold inline-flex items-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(197,160,89,0.32)]"
                    >
                      <span>Continue to Project Details</span>
                      <ArrowRight className="w-4 h-4 text-[#0F1012]" />
                    </button>
                  </div>
                </SlideReveal>
              )}

              {/* STEP 2: Contact Details */}
              {step === 2 && !submitted && (
                <SlideReveal direction="right">
                  <form onSubmit={handleSubmit} className="max-w-[560px] space-y-[20px]">
                    <div className="mb-4">
                      <h3 className="type-h3 text-[#0F1012] mb-1">
                        Tell us about your team
                      </h3>
                      <p className="type-small text-[#4B4F58]">
                        We review your existing AI search presence prior to our introductory call.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                      <div>
                        <label className="block text-xs font-semibold text-[#636773] uppercase tracking-wider mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Jane"
                          className="h-[52px] w-full rounded-[8px] bg-white border border-[#EADBBE] px-4 text-[#0F1012] placeholder-[#A0A5B0] focus:border-[#C5A059] focus:outline-none transition-colors shadow-2xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#636773] uppercase tracking-wider mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className="h-[52px] w-full rounded-[8px] bg-white border border-[#EADBBE] px-4 text-[#0F1012] placeholder-[#A0A5B0] focus:border-[#C5A059] focus:outline-none transition-colors shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#636773] uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@company.com"
                        className="h-[52px] w-full rounded-[8px] bg-white border border-[#EADBBE] px-4 text-[#0F1012] placeholder-[#A0A5B0] focus:border-[#C5A059] focus:outline-none transition-colors shadow-2xs"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                      <div>
                        <label className="block text-xs font-semibold text-[#636773] uppercase tracking-wider mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Acme Corp"
                          className="h-[52px] w-full rounded-[8px] bg-white border border-[#EADBBE] px-4 text-[#0F1012] placeholder-[#A0A5B0] focus:border-[#C5A059] focus:outline-none transition-colors shadow-2xs"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-[#636773] uppercase tracking-wider mb-2">
                          Company Website *
                        </label>
                        <input
                          type="url"
                          name="website"
                          required
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://acme.com"
                          className="h-[52px] w-full rounded-[8px] bg-white border border-[#EADBBE] px-4 text-[#0F1012] placeholder-[#A0A5B0] focus:border-[#C5A059] focus:outline-none transition-colors shadow-2xs"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-[#636773] uppercase tracking-wider mb-2">
                        Project Scope or Target Competitors
                      </label>
                      <textarea
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Which competitors dominate buyer prompts in your category? Any specific prompt queries to benchmark?"
                        className="h-[160px] w-full rounded-[8px] bg-white border border-[#EADBBE] p-4 text-[#0F1012] placeholder-[#A0A5B0] focus:border-[#C5A059] focus:outline-none resize-none transition-colors shadow-2xs"
                      />
                    </div>

                    <div className="flex items-center gap-[12px] pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="btn-secondary h-[52px] px-6 text-sm font-semibold inline-flex items-center gap-2 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="btn-primary h-[52px] flex-1 text-sm font-semibold inline-flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_16px_rgba(197,160,89,0.32)]"
                      >
                        <span>Submit Project Scope Request</span>
                        <ArrowRight className="w-4 h-4 text-[#0F1012]" />
                      </button>
                    </div>
                  </form>
                </SlideReveal>
              )}

              {/* Submitted State */}
              {step === 2 && submitted && (
                <div className="surface-card p-8 rounded-[12px] max-w-[560px] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#FAF8F5] border border-[#EADBBE] flex items-center justify-center text-[#C5A059]">
                    <FileCheck2 className="w-5 h-5 text-[#C5A059]" />
                  </div>
                  <h3 className="type-h3 text-[#0F1012]">
                    Scope Request Received
                  </h3>
                  <p className="type-body text-[#4B4F58]">
                    Thank you, {formData.firstName}. Our strategic analysis team will run a preliminary visibility check on <span className="text-[#A67D28] font-semibold">{formData.website}</span> and respond within one business day.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setStep(1);
                    }}
                    className="btn-secondary mt-4"
                  >
                    <span>Modify Selection</span>
                  </button>
                </div>
              )}

            </div>

            {/* RIGHT QUOTE SUMMARY */}
            <div className="col-span-12 lg:col-span-4">
              <div className="surface-card w-full lg:sticky lg:top-[96px] min-h-[420px] p-[24px] sm:p-[32px] rounded-[12px] flex flex-col justify-between shadow-md">
                <div>
                  <div className="h-[48px] flex items-center justify-between border-b border-[#EADBBE]">
                    <span className="type-eyebrow text-[#0F1012] font-semibold">
                      Engagement Summary
                    </span>
                    <span className="text-xs font-mono text-[#A67D28] font-semibold">
                      Step {step} of 2
                    </span>
                  </div>

                  <div className="h-[44px] flex items-center justify-between text-xs sm:text-sm border-b border-[#EADBBE]/60">
                    <span className="text-[#636773]">Selected Model</span>
                    <span className="text-[#0F1012] font-semibold">{selectedPlan.title}</span>
                  </div>

                  <div className="h-[44px] flex items-center justify-between text-xs sm:text-sm border-b border-[#EADBBE]/60">
                    <span className="text-[#636773]">Duration & Rhythm</span>
                    <span className="text-[#0F1012] font-semibold">{selectedPlan.timeline}</span>
                  </div>

                  <div className="h-[44px] flex items-center justify-between text-xs sm:text-sm border-b border-[#EADBBE]/60">
                    <span className="text-[#636773]">Engagement Type</span>
                    <span className="text-[#0F1012] font-semibold">{selectedPlan.scopeLabel}</span>
                  </div>

                  <div className="py-4 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#A67D28] font-semibold block">
                      Scope Inclusions
                    </span>
                    {selectedPlan.features.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#4B4F58]">
                        <Check className="w-3.5 h-3.5 text-[#C5A059] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="my-[24px] h-[1px] bg-[#EADBBE]" />

                  <div className="h-[56px] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#636773] block font-medium">Fee Structure</span>
                      <span className="text-xl font-semibold text-[#0F1012]">
                        {selectedPlan.price}
                      </span>
                    </div>
                    <span className="text-xs text-[#636773] text-right font-medium">
                      {selectedPlan.pricePeriod}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#EADBBE] flex items-start gap-2 text-[11px] text-[#636773] leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <span>Transparent scoping. No arbitrary lock-ins or unverified ranking guarantees.</span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
