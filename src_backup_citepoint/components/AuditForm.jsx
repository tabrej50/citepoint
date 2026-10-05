import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { AiEngineIcon } from './AiEnginesRow';
import LiquidModalPanel from './LiquidModalPanel';
import LiquidButton from './LiquidButton';

export default function AuditForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    websiteUrl: '',
    competitors: '',
    buyerQuestions: '',
    honeypot: '' // Spam protection
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.workEmail.trim()) {
      newErrors.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      newErrors.workEmail = 'Please enter a valid work email';
    }
    if (!formData.company.trim()) newErrors.company = 'Company name is required';
    if (!formData.websiteUrl.trim()) {
      newErrors.websiteUrl = 'Company website is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // Spam caught

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    // Simulate API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <LiquidModalPanel className="p-6 sm:p-10">
      {submitted ? (
        <div className="text-center py-8 px-4">
          <div className="w-14 h-14 rounded-full bg-brand-gold/15 border border-brand-gold/40 text-brand-gold flex items-center justify-center mx-auto mb-5 shadow-lg">
            <CheckCircle2 className="w-7 h-7 stroke-[2]" />
          </div>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-3">
            Audit Request Received
          </h3>
          <p className="text-xs sm:text-sm text-[#8FA8B5] max-w-md mx-auto leading-relaxed mb-8">
            Thank you, {formData.fullName}. We review your submission within 24 hours. If your category is a fit, we'll send an invoice and kickoff details to <strong className="text-brand-gold">{formData.workEmail}</strong>. No payment is required today.
          </p>

          <div className="liquid-glass rounded-[20px] border border-white/10 p-6 max-w-md mx-auto text-left mb-8">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-brand-gold mb-3 font-mono">
              // WHAT HAPPENS NEXT
            </h4>
            <ol className="space-y-3.5 text-xs text-[#8FA8B5]">
              <li className="flex items-start gap-2.5">
                <span className="text-brand-gold font-bold font-mono">01.</span>
                <span>Category fit evaluation and prompt scope mapping for <strong className="text-white">{formData.company}</strong>.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-gold font-bold font-mono">02.</span>
                <div>
                  <span>Audit executed across 5 AI platforms with 10–15 buyer prompts.</span>
                  <div className="flex items-center gap-2 mt-2">
                    <AiEngineIcon id="chatgpt" size={15} />
                    <AiEngineIcon id="gemini" size={15} />
                    <AiEngineIcon id="claude" size={15} />
                    <AiEngineIcon id="perplexity" size={15} />
                    <AiEngineIcon id="google-ai-overviews" size={15} />
                  </div>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="text-brand-gold font-bold font-mono">03.</span>
                <span>Executive briefing deck, raw data export, and 45-minute findings review scheduled within 5 business days.</span>
              </li>
            </ol>
          </div>

          <button
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-wider font-mono text-brand-gold hover:underline"
          >
            ← Submit Another Application
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
          {/* Honeypot field (hidden from real users) */}
          <div className="hidden" aria-hidden="true">
            <input
              type="text"
              name="honeypot"
              tabIndex="-1"
              value={formData.honeypot}
              onChange={handleChange}
              autoComplete="off"
            />
          </div>

          {/* Heading intro inside form */}
          <div>
            <span className="inline-block text-xs uppercase tracking-wider font-mono text-brand-gold mb-2 px-3 py-1 rounded-full bg-brand-gold/10 border border-brand-gold/30">
              // AUDIT APPLICATION
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white mb-2">
              Request Your AI Visibility Audit
            </h3>
            <p className="text-xs sm:text-sm text-[#8FA8B5] leading-relaxed">
              Complete the details below to request a 5-platform diagnostic audit ($1,500 flat fee).
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            {/* Full Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#8FA8B5] mb-2">
                Name <span className="text-brand-gold">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Sarah Jenkins"
                className={`w-full px-4 py-3 rounded-[14px] border text-xs text-white placeholder-[#8FA8B5]/50 bg-[#031522]/60 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all ${
                  errors.fullName ? 'border-red-500' : 'border-white/12'
                }`}
              />
              {errors.fullName && <p className="text-xs text-red-400 mt-1">{errors.fullName}</p>}
            </div>

            {/* Work Email */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#8FA8B5] mb-2">
                Work Email <span className="text-brand-gold">*</span>
              </label>
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                placeholder="s.jenkins@company.com"
                className={`w-full px-4 py-3 rounded-[14px] border text-xs text-white placeholder-[#8FA8B5]/50 bg-[#031522]/60 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all ${
                  errors.workEmail ? 'border-red-500' : 'border-white/12'
                }`}
              />
              {errors.workEmail && <p className="text-xs text-red-400 mt-1">{errors.workEmail}</p>}
            </div>

            {/* Company Name */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#8FA8B5] mb-2">
                Company Name <span className="text-brand-gold">*</span>
              </label>
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Acme Technologies"
                className={`w-full px-4 py-3 rounded-[14px] border text-xs text-white placeholder-[#8FA8B5]/50 bg-[#031522]/60 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all ${
                  errors.company ? 'border-red-500' : 'border-white/12'
                }`}
              />
              {errors.company && <p className="text-xs text-red-400 mt-1">{errors.company}</p>}
            </div>

            {/* Website URL */}
            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#8FA8B5] mb-2">
                Website URL <span className="text-brand-gold">*</span>
              </label>
              <input
                type="url"
                name="websiteUrl"
                value={formData.websiteUrl}
                onChange={handleChange}
                placeholder="https://acme.com"
                className={`w-full px-4 py-3 rounded-[14px] border text-xs text-white placeholder-[#8FA8B5]/50 bg-[#031522]/60 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all ${
                  errors.websiteUrl ? 'border-red-500' : 'border-white/12'
                }`}
              />
              {errors.websiteUrl && <p className="text-xs text-red-400 mt-1">{errors.websiteUrl}</p>}
            </div>
          </div>

          {/* Top 3 Competitors (optional) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs uppercase tracking-wider font-mono text-[#8FA8B5]">
                Top 3 Competitors
              </label>
              <span className="text-[11px] font-mono text-[#8FA8B5]/60">Optional</span>
            </div>
            <input
              type="text"
              name="competitors"
              value={formData.competitors}
              onChange={handleChange}
              placeholder="e.g. CompetitorA, CompetitorB, CompetitorC"
              className="w-full px-4 py-3 rounded-[14px] border border-white/12 text-xs text-white placeholder-[#8FA8B5]/50 bg-[#031522]/60 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all"
            />
          </div>

          {/* 2-3 Questions buyers frequently ask (optional) */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="block text-xs uppercase tracking-wider font-mono text-[#8FA8B5]">
                What are 2–3 questions buyers frequently ask before purchasing?
              </label>
              <span className="text-[11px] font-mono text-[#8FA8B5]/60">Optional</span>
            </div>
            <textarea
              name="buyerQuestions"
              rows="3"
              value={formData.buyerQuestions}
              onChange={handleChange}
              placeholder="e.g. 'What is the best alternative to [Competitor] for mid-market teams?' or 'How does [Your Product] integrate with our CRM?'"
              className="w-full px-4 py-3 rounded-[14px] border border-white/12 text-xs text-white placeholder-[#8FA8B5]/50 bg-[#031522]/60 focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold transition-all resize-none"
            ></textarea>
          </div>

          {/* Submit Button & Microcopy */}
          <div className="pt-2">
            <LiquidButton
              type="submit"
              disabled={isSubmitting}
              variant="primary"
              className="w-full py-3.5 text-xs justify-center"
            >
              {isSubmitting ? 'PROCESSING APPLICATION...' : 'REQUEST AI VISIBILITY AUDIT — $1,500 →'}
            </LiquidButton>
            
            {/* Microcopy below submit */}
            <p className="text-xs text-[#8FA8B5] text-center leading-relaxed mt-3.5">
              We review your submission within 24 hours. If your category is a fit, we'll send an invoice and kickoff details. No payment is required today.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-[11px] text-[#8FA8B5]">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span className="whitespace-nowrap">Confidential evaluation</span>
              <span>·</span>
              <span className="whitespace-nowrap">Mutual NDA available upon request</span>
            </div>
          </div>
        </form>
      )}
    </LiquidModalPanel>
  );
}
