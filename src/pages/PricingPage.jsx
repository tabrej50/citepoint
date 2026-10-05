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
    <div className="w-full bg-[#010102] text-[#8a8f98] font-sans">
      
      {/* ============================================================
          SECTION 1: HEADER
          Padding: 96px 0 64px, centered, max-width 720px
          ============================================================ */}
      <section className="pt-[96px] pb-[64px] border-b border-[#23252a] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px] mx-auto text-center">
            <SlideReveal direction="down">
              <div className="type-eyebrow text-[#828fff] mb-4">
                // TRANSPARENT SCOPE & ENGAGEMENT MODELS
              </div>
              <h1 className="type-display text-[#f7f8f8] mb-6">
                Start with clarity. Build toward visibility.
              </h1>
            </SlideReveal>
            <SlideReveal direction="up" delay={0.1}>
              <p className="type-body-lg text-[#8a8f98] max-w-[65ch] mx-auto">
                Every Citepoint engagement begins with your category, buyer evaluation questions, existing authority, and AI search opportunity—not an arbitrary one-size-fits-all package.
              </p>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* ============================================================
          SECTION 2: TWO-STEP CONFIGURATOR
          Section padding: 0 0 160px
          12-column grid, gap 32px
          Left form area: columns 1-8
          Right quote summary: columns 9-12 (sticky desktop top 96px, min-h 420px, p 32px)
          Tablet/Mobile: stack form first, quote summary below full width
          ============================================================ */}
      <section className="pt-12 sm:pt-16 pb-[160px] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-12 gap-[32px] items-start">
            
            {/* LEFT FORM AREA: Columns 1-8 */}
            <div className="col-span-12 lg:col-span-8">
              
              {/* Step indicator: full width of left area, 2 segments, height 4px, gap 8px, margin-bottom 48px */}
              <div className="w-full mb-[48px]">
                {/* Step label row: height 24px, margin-bottom 16px */}
                <div className="h-[24px] mb-[16px] flex items-center justify-between text-xs font-mono uppercase tracking-wider">
                  <span className="text-[#f7f8f8] font-medium">
                    {step === 1 ? 'Step 01 / 02 — Select Your Scope' : 'Step 02 / 02 — Your Project Details'}
                  </span>
                  <span className="text-[#8a8f98]">
                    {step === 1 ? 'Next: Contact Information' : 'Selected: ' + selectedPlan.title}
                  </span>
                </div>

                <div className="flex items-center gap-[8px] w-full">
                  <div className={`flex-1 h-[4px] rounded-full transition-colors duration-300 ${step >= 1 ? 'bg-[#5e6ad2]' : 'bg-[#23252a]'}`} />
                  <div className={`flex-1 h-[4px] rounded-full transition-colors duration-300 ${step >= 2 ? 'bg-[#5e6ad2]' : 'bg-[#23252a]'}`} />
                </div>
              </div>

              {/* STEP 1: Plan Selection */}
              {step === 1 && (
                <SlideReveal direction="left">
                  {/* 3 plan cards in one row, gap 16px (1 column on mobile/tablet, min-height 260px; desktop min-height 340px, p 32px, mobile p 20px) */}
                  <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-[16px]">
                    {plans.map((plan) => {
                      const isSelected = selectedPlanId === plan.id;
                      return (
                        <div
                          key={plan.id}
                          onClick={() => setSelectedPlanId(plan.id)}
                          className={`min-h-[340px] md:min-h-[260px] p-[20px] sm:p-[32px] rounded-[12px] bg-[#0f1011] border transition-colors cursor-pointer flex flex-col justify-between ${
                            isSelected
                              ? 'border-[#5e6ad2] bg-[#141516] shadow-[0_0_20px_rgba(94,106,210,0.25)]'
                              : 'border-[#23252a] hover:border-[#34343a]'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between mb-4">
                              <span className="text-[11px] font-mono uppercase tracking-wider text-[#8a8f98]">
                                {plan.label}
                              </span>
                              <div className={`w-4 h-4 rounded-full border flex items-center justify-center ${isSelected ? 'border-[#5e6ad2] bg-[#5e6ad2]' : 'border-[#34343a]'}`}>
                                {isSelected && <div className="w-1.5 h-1.5 rounded-full bg-white" />}
                              </div>
                            </div>

                            <h3 className="type-h4 text-[#f7f8f8] mb-2">
                              {plan.title}
                            </h3>

                            <div className="mb-4">
                              <span className="text-2xl lg:text-3xl font-semibold text-[#f7f8f8]">
                                {plan.price}
                              </span>
                              <span className="text-xs text-[#8a8f98] ml-1">
                                {plan.pricePeriod}
                              </span>
                            </div>

                            <p className="type-small text-[#8a8f98] mb-6">
                              {plan.desc}
                            </p>
                          </div>

                          <div className="space-y-2 pt-4 border-t border-[#23252a]">
                            {plan.features.slice(0, 3).map((feat, fIdx) => (
                              <div key={fIdx} className="flex items-center gap-2 text-xs text-[#d0d6e0]">
                                <Check className="w-3.5 h-3.5 text-[#828fff] shrink-0" />
                                <span className="truncate">{feat}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Button row below: margin-top 32px, button height 52px */}
                  <div className="mt-[32px] flex items-center justify-start">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="btn-primary h-[52px] px-8 text-base font-medium inline-flex items-center gap-2 cursor-pointer"
                    >
                      <span>Continue to Project Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </SlideReveal>
              )}

              {/* STEP 2: Contact Details */}
              {step === 2 && !submitted && (
                <SlideReveal direction="right">
                  {/* Single column form, max-width 560px */}
                  <form onSubmit={handleSubmit} className="max-w-[560px] space-y-[20px]">
                    <div className="mb-4">
                      <h3 className="type-h3 text-[#f7f8f8] mb-1">
                        Tell us about your team
                      </h3>
                      <p className="type-small text-[#8a8f98]">
                        We review your existing AI search presence prior to our introductory call.
                      </p>
                    </div>

                    {/* Two short fields side by side, gap 16px */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                      <div>
                        <label className="block text-xs font-medium text-[#8a8f98] uppercase tracking-wider mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          name="firstName"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          placeholder="Jane"
                          className="h-[52px] w-full rounded-[8px] bg-[#0f1011] border border-[#23252a] px-4 text-[#f7f8f8] placeholder-[#62666d] focus:border-[#e02020] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#8a8f98] uppercase tracking-wider mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          name="lastName"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          placeholder="Doe"
                          className="h-[52px] w-full rounded-[8px] bg-[#0f1011] border border-[#23252a] px-4 text-[#f7f8f8] placeholder-[#62666d] focus:border-[#e02020] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#8a8f98] uppercase tracking-wider mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="jane@company.com"
                        className="h-[52px] w-full rounded-[8px] bg-[#0f1011] border border-[#23252a] px-4 text-[#f7f8f8] placeholder-[#62666d] focus:border-[#e02020] focus:outline-none transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-[16px]">
                      <div>
                        <label className="block text-xs font-medium text-[#8a8f98] uppercase tracking-wider mb-2">
                          Company Name *
                        </label>
                        <input
                          type="text"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          placeholder="Acme Corp"
                          className="h-[52px] w-full rounded-[8px] bg-[#0f1011] border border-[#23252a] px-4 text-[#f7f8f8] placeholder-[#62666d] focus:border-[#e02020] focus:outline-none transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium text-[#8a8f98] uppercase tracking-wider mb-2">
                          Company Website *
                        </label>
                        <input
                          type="url"
                          name="website"
                          required
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="https://acme.com"
                          className="h-[52px] w-full rounded-[8px] bg-[#0f1011] border border-[#23252a] px-4 text-[#f7f8f8] placeholder-[#62666d] focus:border-[#e02020] focus:outline-none transition-colors"
                        />
                      </div>
                    </div>

                    {/* Textarea height 160px */}
                    <div>
                      <label className="block text-xs font-medium text-[#8a8f98] uppercase tracking-wider mb-2">
                        Project Scope or Target Competitors
                      </label>
                      <textarea
                        name="notes"
                        rows={4}
                        value={formData.notes}
                        onChange={handleInputChange}
                        placeholder="Which competitors dominate buyer prompts in your category? Any specific prompt queries to benchmark?"
                        className="h-[160px] w-full rounded-[8px] bg-[#0f1011] border border-[#23252a] p-4 text-[#f7f8f8] placeholder-[#62666d] focus:border-[#e02020] focus:outline-none resize-none transition-colors"
                      />
                    </div>

                    {/* Back and Submit buttons in one row, gap 12px, height 52px */}
                    <div className="flex items-center gap-[12px] pt-4">
                      <button
                        type="button"
                        onClick={() => setStep(1)}
                        className="btn-secondary h-[52px] px-6 text-sm font-medium inline-flex items-center gap-2 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Back</span>
                      </button>

                      <button
                        type="submit"
                        className="btn-primary h-[52px] flex-1 text-sm font-medium inline-flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>Submit Project Scope Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </form>
                </SlideReveal>
              )}

              {/* Submitted State */}
              {step === 2 && submitted && (
                <div className="p-8 rounded-[12px] bg-[#0f1011] border border-[#23252a] max-w-[560px] space-y-4">
                  <div className="w-10 h-10 rounded-full bg-[#141516] border border-[#5e6ad2] flex items-center justify-center text-[#828fff]">
                    <FileCheck2 className="w-5 h-5" />
                  </div>
                  <h3 className="type-h3 text-[#f7f8f8]">
                    Scope Request Received
                  </h3>
                  <p className="type-body text-[#8a8f98]">
                    Thank you, {formData.firstName}. Our strategic analysis team will run a preliminary visibility check on <span className="text-[#f7f8f8]">{formData.website}</span> and respond within one business day.
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

            {/* RIGHT QUOTE SUMMARY: Columns 9-12
                Sticky desktop (top offset 96px, width 100%, min-h 420px, padding 32px, mobile p 24px)
                Tablet: stack below form, full width, not sticky
            */}
            <div className="col-span-12 lg:col-span-4">
              <div className="w-full lg:sticky lg:top-[96px] min-h-[420px] p-[24px] sm:p-[32px] rounded-[12px] bg-[#0f1011] border border-[#23252a] flex flex-col justify-between shadow-2xl">
                <div>
                  {/* Title row height 48px */}
                  <div className="h-[48px] flex items-center justify-between border-b border-[#23252a]">
                    <span className="type-eyebrow text-[#f7f8f8] font-medium">
                      Engagement Summary
                    </span>
                    <span className="text-xs font-mono text-[#828fff]">
                      Step {step} of 2
                    </span>
                  </div>

                  {/* Line item row height 44px */}
                  <div className="h-[44px] flex items-center justify-between text-xs sm:text-sm border-b border-[#23252a]/50">
                    <span className="text-[#8a8f98]">Selected Model</span>
                    <span className="text-[#f7f8f8] font-medium">{selectedPlan.title}</span>
                  </div>

                  {/* Line item row height 44px */}
                  <div className="h-[44px] flex items-center justify-between text-xs sm:text-sm border-b border-[#23252a]/50">
                    <span className="text-[#8a8f98]">Duration & Rhythm</span>
                    <span className="text-[#f7f8f8] font-medium">{selectedPlan.timeline}</span>
                  </div>

                  {/* Line item row height 44px */}
                  <div className="h-[44px] flex items-center justify-between text-xs sm:text-sm border-b border-[#23252a]/50">
                    <span className="text-[#8a8f98]">Engagement Type</span>
                    <span className="text-[#f7f8f8] font-medium">{selectedPlan.scopeLabel}</span>
                  </div>

                  {/* Deliverables snippet */}
                  <div className="py-4 space-y-2">
                    <span className="text-[11px] uppercase tracking-wider text-[#62666d] block">
                      Scope Inclusions
                    </span>
                    {selectedPlan.features.slice(0, 3).map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#8a8f98]">
                        <Check className="w-3.5 h-3.5 text-[#828fff] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Divider 1px, margin 24px 0 */}
                  <div className="my-[24px] h-[1px] bg-[#23252a]" />

                  {/* Total row height 56px */}
                  <div className="h-[56px] flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#8a8f98] block">Fee Structure</span>
                      <span className="text-xl font-semibold text-[#f7f8f8]">
                        {selectedPlan.price}
                      </span>
                    </div>
                    <span className="text-xs text-[#62666d] text-right">
                      {selectedPlan.pricePeriod}
                    </span>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#23252a] flex items-start gap-2 text-[11px] text-[#62666d] leading-relaxed">
                  <ShieldCheck className="w-4 h-4 text-[#828fff] shrink-0 mt-0.5" />
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
