import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  ArrowLeft,
  ShieldCheck,
  Clock,
  Sparkles,
  ChevronRight,
  CheckCircle2,
  Mail,
  Building2,
  User,
  MessageSquare,
  DollarSign
} from 'lucide-react';

export const PRICING_PLANS = [
  {
    id: 'audit',
    num: '01',
    label: 'AI VISIBILITY AUDIT',
    title: 'AI Visibility Audit',
    desc: 'A focused assessment of your brand’s AI search presence across leading platforms.',
    price: '$1,500',
    priceNum: 1500,
    pricePeriod: 'flat fee',
    priceSublabel: 'one-time',
    minTerm: 'One-time diagnostic',
    commitmentNote: 'No recurring commitment',
    turnaround: '5 business days',
    features: [
      { name: '5 AI platforms audited (ChatGPT, Gemini, Perplexity, Claude, AI Overviews)', included: true },
      { name: 'Targeted buyer prompt testing & benchmark', included: true },
      { name: 'Competitor mention & displacement analysis', included: true },
      { name: 'Citation source identification & gap analysis', included: true },
      { name: 'Executive roadmap & priority recommendations', included: true },
      { name: 'Ongoing multi-model prompt tracking', included: false },
      { name: 'Entity & schema technical GEO optimization', included: false },
      { name: 'Bi-weekly advisory & progress reviews', included: false },
      { name: 'Active digital PR & third-party citation seeding', included: false },
      { name: 'Dedicated strategic lead & quarterly re-benchmarking', included: false },
    ],
  },
  {
    id: 'growth',
    num: '02',
    label: 'VISIBILITY GROWTH',
    badge: 'RECOMMENDED',
    title: 'Visibility Growth',
    desc: 'A structured 90-day program to improve discoverability, authority, and citation readiness.',
    price: '$3,500',
    priceNum: 3500,
    pricePeriod: '/month',
    priceSublabel: '/mo',
    minTerm: '3-month minimum',
    commitmentNote: '3-month commitment, then month-to-month',
    featured: true,
    turnaround: 'Immediate onboarding',
    features: [
      { name: '5 AI platforms audited (baseline diagnostic)', included: true },
      { name: 'Targeted buyer prompt testing & benchmark', included: true },
      { name: 'Competitor mention & displacement analysis', included: true },
      { name: 'Citation source identification & gap analysis', included: true },
      { name: 'Executive roadmap & priority recommendations', included: true },
      { name: 'Ongoing multi-model prompt tracking', included: true },
      { name: 'Entity & schema technical GEO optimization', included: true },
      { name: 'Bi-weekly advisory & progress reviews', included: true },
      { name: 'Active digital PR & third-party citation seeding', included: false },
      { name: 'Dedicated strategic lead & quarterly re-benchmarking', included: false },
    ],
  },
  {
    id: 'authority',
    num: '03',
    label: 'AUTHORITY',
    badge: 'ENTERPRISE',
    title: 'Authority',
    desc: 'Continuous monitoring, optimization, authority building, and executive reporting.',
    price: '$7,000–$12,000',
    priceNum: 7000,
    pricePeriod: '/month',
    priceSublabel: '/mo',
    minTerm: '6-month minimum',
    commitmentNote: '6-month commitment, custom scope allocation',
    turnaround: 'Priority onboarding',
    features: [
      { name: '5 AI platforms audited (baseline diagnostic)', included: true },
      { name: 'Targeted buyer prompt testing & benchmark', included: true },
      { name: 'Competitor mention & displacement analysis', included: true },
      { name: 'Citation source identification & gap analysis', included: true },
      { name: 'Executive roadmap & priority recommendations', included: true },
      { name: 'Ongoing multi-model prompt tracking', included: true },
      { name: 'Entity & schema technical GEO optimization', included: true },
      { name: 'Bi-weekly advisory & progress reviews', included: true },
      { name: 'Active digital PR & third-party citation seeding', included: true },
      { name: 'Dedicated strategic lead & quarterly re-benchmarking', included: true },
    ],
  },
];

export default function PricingConfigurator({ setCurrentRoute }) {
  const [currentStep, setCurrentStep] = useState(1); // 1 = Choose Plan, 2 = Contact Details
  const [selectedPlanId, setSelectedPlanId] = useState('growth'); // Default to recommended
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    arrBand: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const selectedPlan = PRICING_PLANS.find((p) => p.id === selectedPlanId) || PRICING_PLANS[1];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.fullName.trim()) errors.fullName = 'Full name is required';
    if (!formData.workEmail.trim()) {
      errors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errors.workEmail = 'Please enter a valid work email';
    }
    if (!formData.company.trim()) errors.company = 'Company name is required';
    return errors;
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    setFormSubmitted(true);
  };

  const resetFlow = () => {
    setFormSubmitted(false);
    setCurrentStep(1);
    setFormData({
      fullName: '',
      workEmail: '',
      company: '',
      arrBand: '',
      message: '',
    });
  };

  return (
    <div className="w-full font-sans">
      {/* ============================================================
          STEP INDICATOR (NAVY / GOLD / ASCII SYSTEM)
          ============================================================ */}
      <div className="mb-12 lg:mb-16 max-w-2xl mx-auto">
        <div className="flex items-center justify-between relative px-2 sm:px-6">
          
          {/* Step 1 Pill */}
          <button
            type="button"
            onClick={() => {
              if (!formSubmitted) setCurrentStep(1);
            }}
            className={`flex items-center gap-2.5 transition-all text-left group focus:outline-none cursor-pointer ${
              currentStep === 1
                ? 'text-white'
                : 'text-[#8a8f98]/60 hover:text-white'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-[8px] flex items-center justify-center font-mono text-xs transition-colors ${
                currentStep === 1
                  ? 'bg-[#141516] border border-[#828fff] text-[#828fff] shadow-[0_0_12px_rgba(130,143,255,0.25)]'
                  : currentStep > 1
                  ? 'bg-[#141516] border border-[#828fff]/50 text-[#828fff]'
                  : 'bg-[#141516] border border-white/10 text-[#8a8f98]'
              }`}
            >
              {currentStep > 1 ? <Check className="w-3.5 h-3.5 text-[#828fff]" /> : '01'}
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-[0.14em] uppercase text-[#828fff] block leading-none">
                STEP 1
              </span>
              <span className="text-xs sm:text-sm font-medium tracking-tight">
                Choose Plan
              </span>
            </div>
          </button>

          {/* ASCII Connector Bar */}
          <div className="flex-1 mx-4 sm:mx-6 flex items-center justify-center">
            <div className="w-full border-t border-dashed border-white/15 relative">
              <div
                className={`absolute top-[-1px] left-0 h-[1px] bg-gradient-to-r from-[#828fff] to-[#5e6ad2] transition-all duration-500 ${
                  currentStep === 2 ? 'w-full' : 'w-0'
                }`}
              />
            </div>
            <span className="hidden sm:inline-block font-mono text-[11px] text-[#8a8f98]/40 px-2 select-none">
              ———
            </span>
          </div>

          {/* Step 2 Pill */}
          <button
            type="button"
            onClick={() => {
              if (!formSubmitted) setCurrentStep(2);
            }}
            className={`flex items-center gap-2.5 transition-all text-left group focus:outline-none cursor-pointer ${
              currentStep === 2
                ? 'text-white'
                : 'text-[#8a8f98]/60 hover:text-white'
            }`}
          >
            <div
              className={`w-7 h-7 rounded-[8px] flex items-center justify-center font-mono text-xs transition-colors ${
                currentStep === 2
                  ? 'bg-[#141516] border border-[#828fff] text-[#828fff] shadow-[0_0_12px_rgba(130,143,255,0.25)]'
                  : formSubmitted
                  ? 'bg-[#141516] border border-[#828fff]/50 text-[#828fff]'
                  : 'bg-[#141516] border border-white/10 text-[#8a8f98]'
              }`}
            >
              {formSubmitted ? <Check className="w-3.5 h-3.5 text-[#828fff]" /> : '02'}
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-[0.14em] uppercase text-[#8a8f98]/60 block leading-none">
                STEP 2
              </span>
              <span className="text-xs sm:text-sm font-medium tracking-tight">
                Contact Details
              </span>
            </div>
          </button>

        </div>
      </div>

      {/* ============================================================
          MAIN TWO-COLUMN CONFIGURATOR GRID
          ============================================================ */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        
        {/* ==========================================================
            LEFT COLUMN (8 COLS): STEP 1 OR STEP 2
            ========================================================== */}
        <div className="lg:col-span-8">
          
          {/* --------------------------------------------------------
              STEP 1: CHOOSE PLAN (3 CARDS)
              -------------------------------------------------------- */}
          {currentStep === 1 && (
            <div className="space-y-4 sm:space-y-5">
              <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/8">
                <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#828fff]">
                  // 01 SELECT AN ENGAGEMENT SCOPE
                </span>
                <span className="text-xs font-sans text-[#8a8f98]">
                  Click to select a tier
                </span>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:gap-6">
                {PRICING_PLANS.map((plan) => {
                  const isSelected = selectedPlanId === plan.id;
                  return (
                    <div
                      key={plan.id}
                      onClick={() => setSelectedPlanId(plan.id)}
                      className={`group p-6 lg:p-8 rounded-[12px] cursor-pointer relative text-left transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] overflow-hidden ${
                        isSelected
                          ? 'card-selectable-active'
                          : 'card-selectable'
                      }`}
                    >
                      {/* Top Specular Line on Selected & Hover */}
                      <div
                        className={`absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff] to-transparent pointer-events-none transition-opacity duration-300 ${
                          isSelected ? 'opacity-100' : 'opacity-0 group-hover:opacity-60'
                        }`}
                      />

                      {/* Ambient Glow Aura */}
                      <div
                        className={`pointer-events-none absolute -top-24 -right-24 w-52 h-52 rounded-full bg-[#828fff] blur-3xl transition-opacity duration-500 ${
                          isSelected ? 'opacity-15' : 'opacity-0 group-hover:opacity-8'
                        }`}
                      />

                      {/* Top Badges */}
                      <div className="flex items-center justify-between mb-3 gap-2 flex-wrap relative z-10">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-sans uppercase tracking-[0.12em] text-[#828fff] font-medium">
                            // {plan.num} {plan.label}
                          </span>
                          {plan.badge && (
                            <span className="px-2.5 py-0.5 rounded-[4px] bg-[#828fff] text-[#010102] font-arial text-[10px] font-semibold uppercase tracking-wider shadow-[0_0_10px_rgba(130,143,255,0.3)]">
                              {plan.badge}
                            </span>
                          )}
                        </div>

                        {/* Selected Radio Indicator */}
                        <div className="flex items-center gap-2 shrink-0">
                          {isSelected ? (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-[8px] bg-[#828fff]/15 border border-[#828fff] text-[#828fff] text-[11px] font-mono shadow-[0_0_12px_rgba(130,143,255,0.3)] transition-all duration-300">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#828fff] shadow-[0_0_6px_#828fff] animate-pulse" />
                              SELECTED
                            </span>
                          ) : (
                            <span className="inline-flex items-center px-3 py-1 rounded-[8px] bg-white/5 border border-white/10 text-[#8a8f98]/70 group-hover:text-white group-hover:border-[#828fff]/40 group-hover:bg-[#828fff]/10 text-[11px] font-mono transition-all duration-300">
                              SELECT
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title & Desc */}
                      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-4 pb-4 border-b border-white/8 relative z-10">
                        <div>
                          <h3 className="text-xl sm:text-2xl font-heading font-medium text-white mb-1 group-hover:text-[#828fff] transition-colors duration-200">
                            {plan.title}
                          </h3>
                          <p className="text-xs sm:text-sm text-[#8a8f98] leading-[1.4] max-w-lg">
                            {plan.desc}
                          </p>
                        </div>

                        {/* Price Display */}
                        <div className="text-left sm:text-right shrink-0 mt-2 sm:mt-0">
                          <div className="flex items-baseline sm:justify-end gap-1.5">
                            <span className="text-2xl sm:text-3xl font-heading font-medium text-white tracking-tight group-hover:drop-shadow-[0_0_12px_rgba(130,143,255,0.25)] transition-all">
                              {plan.price}
                            </span>
                            <span className="font-mono tracking-wider text-xs uppercase text-[#828fff]">
                              {plan.pricePeriod}
                            </span>
                          </div>
                          <p className="text-[11px] font-sans text-[#8a8f98] sm:text-right mt-0.5">
                            // {plan.minTerm}
                          </p>
                        </div>
                      </div>

                      {/* Feature List with [x] Included vs. [ ] Excluded */}
                      <div className="relative z-10">
                        <span className="text-[10px] font-sans uppercase tracking-[0.12em] text-[#8a8f98] block font-medium mb-2.5">
                          DELIVERABLES & CAPABILITIES:
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
                          {plan.features.map((feat, idx) => (
                            <div
                              key={idx}
                              className={`flex items-start gap-2 transition-colors duration-150 ${
                                feat.included
                                  ? 'text-[#f7f8f8] group-hover:text-white'
                                  : 'text-[#62666d] opacity-40'
                              }`}
                            >
                              <span className="font-mono text-xs shrink-0 select-none mt-0.5 transition-transform duration-200 group-hover:scale-105">
                                {feat.included ? (
                                  <span className="text-[#828fff] font-semibold">[x]</span>
                                ) : (
                                  <span className="text-[#62666d]">[ ]</span>
                                )}
                              </span>
                              <span className={feat.included ? 'leading-tight' : 'leading-tight line-through decoration-white/20'}>
                                {feat.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* --------------------------------------------------------
              STEP 2: CONTACT DETAILS FORM
              -------------------------------------------------------- */}
          {currentStep === 2 && !formSubmitted && (
            <div className="surface-card p-6 lg:p-8 text-left relative overflow-hidden shadow-[inset_0_1px_0_0_rgba(130,143,255,0.18),0_20px_50px_-15px_rgba(0,0,0,0.65)]">
              {/* Top Specular Line */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff]/40 to-transparent pointer-events-none" />
              <div className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#828fff]/8 blur-3xl" />
              
              {/* Plan Selected Summary Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-8 border-b border-white/8 relative z-10">
                <div>
                  <span className="text-xs font-mono uppercase tracking-[0.12em] text-[#828fff] block mb-1">
                    // 02 CONTACT DETAILS
                  </span>
                  <h3 className="text-2xl font-heading font-medium text-white">
                    Tell us about your brand.
                  </h3>
                  <p className="text-xs text-[#8a8f98] mt-1">
                    Selected:{' '}
                    <span className="text-white font-medium">{selectedPlan.title}</span> ({selectedPlan.price} {selectedPlan.pricePeriod})
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() => setCurrentStep(1)}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-[8px] bg-[#0f1011] border border-white/10 text-xs font-mono text-[#828fff] hover:border-[#828fff]/40 transition-colors cursor-pointer self-start sm:self-auto"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Change Plan</span>
                </button>
              </div>

              {/* Form Body */}
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  
                  {/* Full Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans text-[#8a8f98] mb-2 font-medium">
                      Full Name <span className="text-[#828fff]">*</span>
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Sarah Jenkins"
                        className={`w-full px-4 py-3 rounded-[8px] bg-[#0f1011] border text-xs sm:text-sm text-white placeholder-[#62666d] focus:outline-none focus:border-[#828fff] transition-colors ${
                          formErrors.fullName ? 'border-red-400' : 'border-white/10'
                        }`}
                      />
                    </div>
                    {formErrors.fullName && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{formErrors.fullName}</p>
                    )}
                  </div>

                  {/* Work Email */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans text-[#8a8f98] mb-2 font-medium">
                      Work Email <span className="text-[#828fff]">*</span>
                    </label>
                    <input
                      type="email"
                      name="workEmail"
                      value={formData.workEmail}
                      onChange={handleInputChange}
                      placeholder="s.jenkins@company.com"
                      className={`w-full px-4 py-3 rounded-[8px] bg-[#0f1011] border text-xs sm:text-sm text-white placeholder-[#62666d] focus:outline-none focus:border-[#828fff] transition-colors ${
                        formErrors.workEmail ? 'border-red-400' : 'border-white/10'
                      }`}
                    />
                    {formErrors.workEmail && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{formErrors.workEmail}</p>
                    )}
                  </div>

                  {/* Company Name */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans text-[#8a8f98] mb-2 font-medium">
                      Company Name <span className="text-[#828fff]">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Acme Analytics"
                      className={`w-full px-4 py-3 rounded-[8px] bg-[#0f1011] border text-xs sm:text-sm text-white placeholder-[#62666d] focus:outline-none focus:border-[#828fff] transition-colors ${
                        formErrors.company ? 'border-red-400' : 'border-white/10'
                      }`}
                    />
                    {formErrors.company && (
                      <p className="text-xs text-red-400 mt-1 font-mono">{formErrors.company}</p>
                    )}
                  </div>

                  {/* Company Size / ARR Band (Optional) */}
                  <div>
                    <label className="block text-xs uppercase tracking-wider font-sans text-[#8a8f98] mb-2 font-medium">
                      Company Scale / ARR Band <span className="text-[#8a8f98]/50 text-[10px]">(Optional)</span>
                    </label>
                    <select
                      name="arrBand"
                      value={formData.arrBand}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-[8px] bg-[#0f1011] border border-white/10 text-xs sm:text-sm text-white focus:outline-none focus:border-[#828fff] transition-colors cursor-pointer"
                    >
                      <option value="" className="bg-[#0f1011] text-[#62666d]">Select annual revenue or scale</option>
                      <option value="early" className="bg-[#0f1011] text-white">&lt; $1M ARR (Early Growth / Seed)</option>
                      <option value="growth" className="bg-[#0f1011] text-white">$1M – $10M ARR (Scale-up)</option>
                      <option value="mid-market" className="bg-[#0f1011] text-white">$10M – $50M ARR (Mid-Market)</option>
                      <option value="enterprise" className="bg-[#0f1011] text-white">$50M+ ARR (Enterprise B2B)</option>
                    </select>
                  </div>

                </div>

                {/* Message / Objectives */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-sans text-[#8a8f98] mb-2 font-medium">
                    Priority Questions or Target AI Queries <span className="text-[#8a8f98]/50 text-[10px]">(Optional)</span>
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="E.g., We are a B2B SaaS in supply chain management. When buyers ask ChatGPT or Perplexity for the top supply chain visibility vendors, our competitors appear but we do not..."
                    className="w-full px-4 py-3 rounded-[8px] bg-[#0f1011] border border-white/10 text-xs sm:text-sm text-white placeholder-[#62666d] focus:outline-none focus:border-[#828fff] transition-colors resize-none"
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2">
                  <button
                    type="submit"
                    className="btn-aurora w-full py-4 text-xs sm:text-sm font-medium tracking-wider uppercase cursor-pointer"
                  >
                    <span>Submit Request for {selectedPlan.title}</span>
                    <ArrowRight className="w-4 h-4 text-white" />
                  </button>
                  <p className="text-[11px] text-[#8a8f98] text-center mt-3">
                    Invoiced in USD under zero-rated LUT export rules. No spam, NDA respected.
                  </p>
                </div>
              </form>

            </div>
          )}

          {/* --------------------------------------------------------
              CONFIRMATION STATE (IN-PLACE, NO REDIRECT)
              -------------------------------------------------------- */}
          {formSubmitted && (
            <div className="surface-card p-6 lg:p-8 text-left relative overflow-hidden border border-[#828fff]/40 shadow-[inset_0_1px_0_0_rgba(130,143,255,0.3),0_20px_50px_-10px_rgba(0,0,0,0.7),0_0_35px_rgba(130,143,255,0.15)]">
              {/* Top Specular Line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#828fff] to-transparent pointer-events-none" />
              <div className="pointer-events-none absolute -top-24 -right-24 w-52 h-52 rounded-full bg-[#828fff]/12 blur-3xl" />

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#828fff]/10 border border-[#828fff]/30 text-xs font-mono text-[#828fff] mb-6 relative z-10">
                <CheckCircle2 className="w-4 h-4 text-[#828fff]" />
                <span>// REQUEST RECEIVED & CONFIRMED</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-heading font-medium text-white mb-3 leading-tight relative z-10">
                Thank you, {formData.fullName || 'there'}!
              </h3>

              <p className="text-sm sm:text-base text-[#8a8f98] leading-relaxed max-w-xl mb-6 relative z-10">
                We've received your request for the <span className="text-white font-medium">{selectedPlan.title}</span> engagement ({selectedPlan.price} {selectedPlan.pricePeriod}).
              </p>

              <div className="p-5 rounded-[10px] bg-[#0f1011]/90 border border-white/10 mb-8 space-y-3 relative z-10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]">
                <div className="flex items-center justify-between text-xs border-b border-white/8 pb-2">
                  <span className="text-[#8a8f98]">Commitment:</span>
                  <span className="text-[#828fff] font-mono">{selectedPlan.minTerm}</span>
                </div>
                <div className="flex items-center justify-between text-xs border-b border-white/8 pb-2">
                  <span className="text-[#8a8f98]">Next Step:</span>
                  <span className="text-white">Diagnostic baseline & category audit review</span>
                </div>
                <div className="flex items-center justify-between text-xs">
                  <span className="text-[#8a8f98]">Turnaround Commitment:</span>
                  <span className="text-[#f7f8f8] font-mono">We will follow up within 24 hours at {formData.workEmail}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-4 relative z-10">
                <button
                  type="button"
                  onClick={resetFlow}
                  className="btn-kelp w-full sm:w-auto text-xs transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <span>Edit or Submit Another Inquiry</span>
                </button>
                {setCurrentRoute && (
                  <button
                    type="button"
                    onClick={() => setCurrentRoute('contact')}
                    className="text-xs text-[#828fff] hover:underline font-mono"
                  >
                    // Have urgent questions? Talk directly to team →
                  </button>
                )}
              </div>
            </div>
          )}

        </div>

        {/* ==========================================================
            RIGHT COLUMN (4 COLS): STICKY QUOTE SUMMARY
            ========================================================== */}
        <div className="lg:col-span-4 relative lg:sticky lg:top-28">
          <div className="surface-card p-6 lg:p-8 text-left relative overflow-hidden transition-all duration-300 shadow-[inset_0_1px_0_0_rgba(130,143,255,0.18),0_20px_50px_-15px_rgba(0,0,0,0.65)]">
            {/* Top Specular Line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#828fff]/40 to-transparent pointer-events-none" />
            <div className="pointer-events-none absolute -top-24 -right-24 w-48 h-48 rounded-full bg-[#828fff]/8 blur-3xl" />
            
            {/* Header */}
            <div className="pb-4 mb-5 border-b border-white/8 relative z-10">
              <span className="text-[11px] font-mono uppercase tracking-[0.14em] text-[#828fff] block mb-1">
                // YOUR QUOTE SUMMARY
              </span>
              <h4 className="text-xl font-heading font-medium text-white">
                {selectedPlan.title}
              </h4>
              <p className="text-xs text-[#8a8f98] mt-0.5">
                {selectedPlan.commitmentNote}
              </p>
            </div>

            {/* Price Block */}
            <div className="mb-6 p-4 lg:p-5 rounded-[10px] bg-[#0f1011]/90 border border-white/10 relative z-10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]">
              <div className="flex items-baseline justify-between mb-1">
                <span className="text-xs text-[#8a8f98]">Selected Tier:</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl sm:text-3xl font-heading font-medium text-white">
                    {selectedPlan.price}
                  </span>
                  <span className="font-mono text-xs uppercase text-[#828fff]">
                    {selectedPlan.pricePeriod}
                  </span>
                </div>
              </div>

              {/* Minimum Term prominently directly under price */}
              <div className="pt-2 mt-2 border-t border-white/8 flex items-center justify-between text-xs">
                <span className="text-[#8a8f98]">Minimum Term:</span>
                <span className="text-[#828fff] font-mono font-medium">
                  {selectedPlan.minTerm}
                </span>
              </div>
            </div>

            {/* Calculations Breakdown (Zero tax by default under LUT) */}
            <div className="space-y-2 mb-6 text-xs text-[#8a8f98] pb-5 border-b border-white/8 relative z-10">
              <div className="flex justify-between">
                <span>Engagement Scope</span>
                <span className="text-white font-mono">{selectedPlan.price}</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Tax (GST)</span>
                <span className="text-[#828fff] font-mono">$0.00</span>
              </div>
              <p className="text-[10px] text-[#62666d] leading-relaxed pt-1">
                * Zero-rated export of services under LUT for international invoices (USD).
              </p>
              <div className="pt-3 mt-2 border-t border-white/8 flex justify-between items-baseline text-sm font-medium text-white">
                <span>Total Investment</span>
                <span className="text-lg font-sans text-white">
                  {selectedPlan.price} <span className="text-xs font-mono text-[#828fff]">{selectedPlan.pricePeriod}</span>
                </span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 mb-6 relative z-10">
              {currentStep === 1 ? (
                <button
                  type="button"
                  onClick={() => setCurrentStep(2)}
                  className="btn-aurora w-full py-3.5 text-xs font-medium uppercase tracking-wider cursor-pointer transition-all duration-300 hover:shadow-[0_0_24px_rgba(130,143,255,0.4)] hover:scale-[1.01] active:scale-[0.99]"
                >
                  <span>Continue to contact details</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={() => {
                    if (formSubmitted) resetFlow();
                    else {
                      const form = document.querySelector('form');
                      if (form) form.requestSubmit();
                    }
                  }}
                  className="btn-aurora w-full py-3.5 text-xs font-medium uppercase tracking-wider cursor-pointer"
                >
                  <span>{formSubmitted ? 'Start New Quote' : 'Submit Request Now'}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-white" />
                </button>
              )}

              {/* Secondary talk to us directly link */}
              <div className="text-center pt-1">
                <button
                  type="button"
                  onClick={() => {
                    if (setCurrentRoute) setCurrentRoute('contact');
                    else window.location.hash = '#/contact';
                  }}
                  className="text-xs text-[#828fff] hover:text-white font-sans transition-colors underline underline-offset-4 cursor-pointer"
                >
                  Or talk to us directly →
                </button>
              </div>
            </div>

            {/* Truthful Citepoint Trust Checklist */}
            <div className="pt-4 border-t border-white/8 space-y-2.5">
              <span className="text-[10px] font-mono uppercase tracking-[0.12em] text-[#8a8f98] block font-medium mb-1">
                // WHAT TO EXPECT:
              </span>
              <div className="flex items-center gap-2 text-xs text-[#f7f8f8]">
                <Check className="w-3.5 h-3.5 text-[#828fff] shrink-0" />
                <span className="whitespace-nowrap">5-day turnaround on audits</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#f7f8f8]">
                <Check className="w-3.5 h-3.5 text-[#828fff] shrink-0" />
                <span className="whitespace-nowrap">Transparent monthly reporting</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#f7f8f8]">
                <Check className="w-3.5 h-3.5 text-[#828fff] shrink-0" />
                <span className="whitespace-nowrap">Dedicated point of contact</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#f7f8f8]">
                <Check className="w-3.5 h-3.5 text-[#828fff] shrink-0" />
                <span className="leading-tight">Case-study rights in exchange for launch pricing</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
