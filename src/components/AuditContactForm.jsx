import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

/**
 * AuditContactForm
 * Formium Alliance Obsidian & Crimson design:
 * - surface-card container with obsidian border and soft dark shadow
 * - Dark input fields with subtle border and Formium crimson focus ring (#e60023)
 * - btn-primary CTA button (#e60023 with #ffffff text)
 * - Pure White (#ffffff) headings and legible body text (#a1a1aa)
 */
export default function AuditContactForm({ className = '' }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    websiteUrl: '',
    jobTitle: '',
    industry: '',
    mainGoal: 'Understand our current AI visibility',
    promptContext: '',
    preferredMeetingTime: '',
    consent: false,
    honeypot: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const goalOptions = [
    'Understand our current AI visibility',
    'Improve brand recommendations',
    'Increase qualified inbound demand',
    'Fix inaccurate AI descriptions',
    'Improve technical readiness',
    'Explore an ongoing engagement',
    'Other',
  ];

  const industryOptions = [
    'B2B SaaS / Software',
    'Enterprise Technology',
    'Professional Services & Advisory',
    'Healthcare & Life Sciences',
    'Financial Services & Fintech',
    'Supply Chain & Manufacturing',
    'Other High-Consideration B2B',
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
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
    if (!formData.consent) {
      newErrors.consent = 'Please confirm consent to proceed';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.honeypot) return;

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  if (submitted) {
    return (
      <div className={`surface-card rounded-[24px] p-8 sm:p-14 text-center max-w-2xl mx-auto font-sans shadow-2xl ${className}`}>
        <div className="w-14 h-14 rounded-full bg-[#161619] border border-white/12 text-[#e60023] flex items-center justify-center mx-auto mb-6 shadow-xs">
          <CheckCircle2 className="w-7 h-7 stroke-[2] text-[#e60023]" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-medium text-white mb-3">
          Request Received
        </h3>
        <p className="text-base text-[#a1a1aa] leading-relaxed mb-6 max-w-lg mx-auto">
          Thank you. We received your diagnostic request and will review your parameters before delivering your confidential assessment.
        </p>
        <div className="p-5 rounded-[16px] bg-[#09090b] border border-white/10 text-left max-w-md mx-auto text-xs space-y-2">
          <div className="text-white font-semibold">Submission Details:</div>
          <div className="text-[#a1a1aa]">Company: <span className="text-white font-medium">{formData.company}</span></div>
          <div className="text-[#a1a1aa]">Contact: <span className="text-white font-medium">{formData.workEmail}</span></div>
          <div className="text-[#a1a1aa]">Focus: <span className="text-[#e60023] font-semibold">{formData.mainGoal}</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`surface-card rounded-[24px] p-6 sm:p-10 md:p-12 max-w-4xl mx-auto font-sans shadow-2xl ${className}`}>
      
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-white/10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#e60023] text-xs font-sans uppercase tracking-[0.12em] font-semibold mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#e60023]" />
          // AUDIT CONSULTATION
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-medium text-white tracking-tight">
          Let’s find your missing citation points.
        </h2>
        <p className="text-sm sm:text-base text-[#a1a1aa] mt-2 leading-relaxed">
          Tell us about your brand and commercial category. We’ll analyze how major AI engines perceive your solution and prepare a confidential visibility assessment.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} noValidate className="space-y-6">
        <input
          type="text"
          name="honeypot"
          value={formData.honeypot}
          onChange={handleChange}
          tabIndex="-1"
          autoComplete="off"
          style={{ display: 'none' }}
          aria-hidden="true"
        />

        {/* Row 1: Full Name & Work Email */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#a1a1aa] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="e.g. Sarah Jenkins"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-[16px] border bg-[#111113] text-white placeholder-[#71717a] text-sm focus:outline-none focus:ring-1 focus:ring-[#e60023] focus:border-[#e60023] transition-all shadow-2xs ${
                errors.fullName ? 'border-rose-400' : 'border-white/15'
              }`}
            />
            {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#a1a1aa] mb-2">
              Work Email *
            </label>
            <input
              type="email"
              name="workEmail"
              placeholder="sarah@company.com"
              value={formData.workEmail}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-[16px] border bg-[#111113] text-white placeholder-[#71717a] text-sm focus:outline-none focus:ring-1 focus:ring-[#e60023] focus:border-[#e60023] transition-all shadow-2xs ${
                errors.workEmail ? 'border-rose-400' : 'border-white/15'
              }`}
            />
            {errors.workEmail && <p className="text-xs text-rose-500 mt-1">{errors.workEmail}</p>}
          </div>
        </div>

        {/* Row 2: Company Name & Website URL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#a1a1aa] mb-2">
              Company Name *
            </label>
            <input
              type="text"
              name="company"
              placeholder="e.g. Acme Cloud Systems"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-[16px] border bg-[#111113] text-white placeholder-[#71717a] text-sm focus:outline-none focus:ring-1 focus:ring-[#e60023] focus:border-[#e60023] transition-all shadow-2xs ${
                errors.company ? 'border-rose-400' : 'border-white/15'
              }`}
            />
            {errors.company && <p className="text-xs text-rose-500 mt-1">{errors.company}</p>}
          </div>

          <div>
            <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#a1a1aa] mb-2">
              Company Website URL *
            </label>
            <input
              type="text"
              name="websiteUrl"
              placeholder="https://acmecloud.com"
              value={formData.websiteUrl}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-[16px] border bg-[#111113] text-white placeholder-[#71717a] text-sm focus:outline-none focus:ring-1 focus:ring-[#e60023] focus:border-[#e60023] transition-all shadow-2xs ${
                errors.websiteUrl ? 'border-rose-400' : 'border-white/15'
              }`}
            />
            {errors.websiteUrl && <p className="text-xs text-rose-500 mt-1">{errors.websiteUrl}</p>}
          </div>
        </div>

        {/* Row 3: Job Title & Industry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#a1a1aa] mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              placeholder="e.g. VP Marketing / Founder"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-[16px] border border-white/15 bg-[#111113] text-white placeholder-[#71717a] text-sm focus:outline-none focus:ring-1 focus:ring-[#e60023] focus:border-[#e60023] transition-all shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#a1a1aa] mb-2">
              Sector / Industry
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-[16px] border border-white/15 bg-[#111113] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#e60023] focus:border-[#e60023] transition-all shadow-2xs"
            >
              <option value="" className="bg-[#111113] text-[#71717a]">Select industry sector...</option>
              {industryOptions.map((ind) => (
                <option key={ind} value={ind} className="bg-[#111113] text-white">
                  {ind}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Primary Audit Goal */}
        <div>
          <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#a1a1aa] mb-2">
            Primary Visibility Objective
          </label>
          <select
            name="mainGoal"
            value={formData.mainGoal}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-[16px] border border-white/15 bg-[#111113] text-white text-sm focus:outline-none focus:ring-1 focus:ring-[#e60023] focus:border-[#e60023] transition-all shadow-2xs"
          >
            {goalOptions.map((goal) => (
              <option key={goal} value={goal} className="bg-[#111113] text-white">
                {goal}
              </option>
            ))}
          </select>
        </div>

        {/* Specific Prompt Query Context */}
        <div>
          <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#a1a1aa] mb-2">
            Priority Buyer Prompts / Competitors (Optional)
          </label>
          <textarea
            name="promptContext"
            rows="3"
            placeholder="e.g. When buyers ask ChatGPT 'best alternative to Competitor X' or evaluate our category, we want our brand recommended."
            value={formData.promptContext}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-[16px] border border-white/15 bg-[#111113] text-white placeholder-[#71717a] text-sm focus:outline-none focus:ring-1 focus:ring-[#e60023] focus:border-[#e60023] transition-all shadow-2xs"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer text-xs text-[#a1a1aa]">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-0.5 rounded-[4px] border-white/20 text-[#e60023] focus:ring-[#e60023] accent-[#e60023]"
            />
            <span>
              I understand Citepoint provides empirical AI visibility assessments and that third-party model weights cannot be guaranteed. *
            </span>
          </label>
          {errors.consent && <p className="text-xs text-rose-500 mt-1">{errors.consent}</p>}
        </div>

        {/* Submit Button */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn-aurora w-full sm:w-auto rounded-full px-8 py-3.5 shadow-[0_4px_24px_rgba(230,0,35,0.4)]"
          >
            <span>{isSubmitting ? 'Analyzing Parameters...' : 'Request Confidential Audit'}</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </button>

          <div className="flex items-center gap-2 text-xs text-[#71717a]">
            <ShieldCheck className="w-4 h-4 text-[#e60023]" />
            <span className="whitespace-nowrap">Strict NDA governance. Never shared.</span>
          </div>
        </div>
      </form>
    </div>
  );
}
