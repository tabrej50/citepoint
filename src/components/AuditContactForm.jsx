import React, { useState } from 'react';
import { ShieldCheck, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

/**
 * AuditContactForm
 * Champagne Gold & Alabaster design:
 * - surface-card container with warm golden hairline border (#EADBBE) and soft shadow
 * - White input fields with warm border and gold focus ring (#C5A059)
 * - btn-aurora CTA button (champagne gold gradient with #0F1012 text)
 * - Deep Obsidian (#0F1012) headings and legible body text (#4B4F58)
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
      <div className={`surface-card rounded-[16px] p-8 sm:p-14 text-center max-w-2xl mx-auto font-sans shadow-md ${className}`}>
        <div className="w-14 h-14 rounded-full bg-[#FAF8F5] border border-[#EADBBE] text-[#C5A059] flex items-center justify-center mx-auto mb-6 shadow-xs">
          <CheckCircle2 className="w-7 h-7 stroke-[2] text-[#C5A059]" />
        </div>
        <h3 className="text-2xl sm:text-3xl font-heading font-medium text-[#0F1012] mb-3">
          Request Received
        </h3>
        <p className="text-base text-[#4B4F58] leading-relaxed mb-6 max-w-lg mx-auto">
          Thank you. We received your diagnostic request and will review your parameters before delivering your confidential assessment.
        </p>
        <div className="p-5 rounded-[12px] bg-[#FAF8F5] border border-[#EADBBE] text-left max-w-md mx-auto text-xs space-y-2">
          <div className="text-[#0F1012] font-semibold">Submission Details:</div>
          <div className="text-[#4B4F58]">Company: <span className="text-[#0F1012] font-medium">{formData.company}</span></div>
          <div className="text-[#4B4F58]">Contact: <span className="text-[#0F1012] font-medium">{formData.workEmail}</span></div>
          <div className="text-[#4B4F58]">Focus: <span className="text-[#A67D28] font-semibold">{formData.mainGoal}</span></div>
        </div>
      </div>
    );
  }

  return (
    <div className={`surface-card rounded-[16px] p-6 sm:p-10 md:p-12 max-w-4xl mx-auto font-sans shadow-md ${className}`}>
      
      {/* Header */}
      <div className="mb-8 pb-6 border-b border-[#EADBBE]">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[8px] bg-[#FAF8F5] border border-[#EADBBE] text-[#A67D28] text-xs font-sans uppercase tracking-[0.12em] font-semibold mb-3 shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          // AUDIT CONSULTATION
        </div>
        <h2 className="text-2xl sm:text-3xl font-heading font-medium text-[#0F1012] tracking-tight">
          Let’s find your missing citation points.
        </h2>
        <p className="text-sm sm:text-base text-[#4B4F58] mt-2 leading-relaxed">
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
            <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#0F1012] mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="fullName"
              placeholder="e.g. Sarah Jenkins"
              value={formData.fullName}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-[8px] border bg-white text-[#0F1012] placeholder-[#A0A5B0] text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all shadow-2xs ${
                errors.fullName ? 'border-rose-400' : 'border-[#EADBBE]'
              }`}
            />
            {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
          </div>

          <div>
            <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#0F1012] mb-2">
              Work Email *
            </label>
            <input
              type="email"
              name="workEmail"
              placeholder="sarah@company.com"
              value={formData.workEmail}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-[8px] border bg-white text-[#0F1012] placeholder-[#A0A5B0] text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all shadow-2xs ${
                errors.workEmail ? 'border-rose-400' : 'border-[#EADBBE]'
              }`}
            />
            {errors.workEmail && <p className="text-xs text-rose-500 mt-1">{errors.workEmail}</p>}
          </div>
        </div>

        {/* Row 2: Company Name & Website URL */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#0F1012] mb-2">
              Company Name *
            </label>
            <input
              type="text"
              name="company"
              placeholder="e.g. Acme Cloud Systems"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-[8px] border bg-white text-[#0F1012] placeholder-[#A0A5B0] text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all shadow-2xs ${
                errors.company ? 'border-rose-400' : 'border-[#EADBBE]'
              }`}
            />
            {errors.company && <p className="text-xs text-rose-500 mt-1">{errors.company}</p>}
          </div>

          <div>
            <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#0F1012] mb-2">
              Company Website URL *
            </label>
            <input
              type="text"
              name="websiteUrl"
              placeholder="https://acmecloud.com"
              value={formData.websiteUrl}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-[8px] border bg-white text-[#0F1012] placeholder-[#A0A5B0] text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all shadow-2xs ${
                errors.websiteUrl ? 'border-rose-400' : 'border-[#EADBBE]'
              }`}
            />
            {errors.websiteUrl && <p className="text-xs text-rose-500 mt-1">{errors.websiteUrl}</p>}
          </div>
        </div>

        {/* Row 3: Job Title & Industry */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#0F1012] mb-2">
              Job Title
            </label>
            <input
              type="text"
              name="jobTitle"
              placeholder="e.g. VP Marketing / Founder"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-[8px] border border-[#EADBBE] bg-white text-[#0F1012] placeholder-[#A0A5B0] text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all shadow-2xs"
            />
          </div>

          <div>
            <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#0F1012] mb-2">
              Sector / Industry
            </label>
            <select
              name="industry"
              value={formData.industry}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-[8px] border border-[#EADBBE] bg-white text-[#0F1012] text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all shadow-2xs"
            >
              <option value="" className="bg-white text-[#636773]">Select industry sector...</option>
              {industryOptions.map((ind) => (
                <option key={ind} value={ind} className="bg-white text-[#0F1012]">
                  {ind}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Primary Audit Goal */}
        <div>
          <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#0F1012] mb-2">
            Primary Visibility Objective
          </label>
          <select
            name="mainGoal"
            value={formData.mainGoal}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-[8px] border border-[#EADBBE] bg-white text-[#0F1012] text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all shadow-2xs"
          >
            {goalOptions.map((goal) => (
              <option key={goal} value={goal} className="bg-white text-[#0F1012]">
                {goal}
              </option>
            ))}
          </select>
        </div>

        {/* Specific Prompt Query Context */}
        <div>
          <label className="block text-xs font-sans font-semibold uppercase tracking-[0.12em] text-[#0F1012] mb-2">
            Priority Buyer Prompts / Competitors (Optional)
          </label>
          <textarea
            name="promptContext"
            rows="3"
            placeholder="e.g. When buyers ask ChatGPT 'best alternative to Competitor X' or evaluate our category, we want our brand recommended."
            value={formData.promptContext}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-[8px] border border-[#EADBBE] bg-white text-[#0F1012] placeholder-[#A0A5B0] text-sm focus:outline-none focus:ring-1 focus:ring-[#C5A059] focus:border-[#C5A059] transition-all shadow-2xs"
          />
        </div>

        {/* Consent Checkbox */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer text-xs text-[#4B4F58]">
            <input
              type="checkbox"
              name="consent"
              checked={formData.consent}
              onChange={handleChange}
              className="mt-0.5 rounded-[4px] border-[#EADBBE] text-[#C5A059] focus:ring-[#C5A059] accent-[#C5A059]"
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
            className="btn-aurora w-full sm:w-auto shadow-[0_4px_16px_rgba(197,160,89,0.32)]"
          >
            <span>{isSubmitting ? 'Analyzing Parameters...' : 'Request Confidential Audit'}</span>
            <ArrowRight className="w-4 h-4 text-[#0F1012]" />
          </button>

          <div className="flex items-center gap-2 text-xs text-[#636773]">
            <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
            <span className="whitespace-nowrap">Strict NDA governance. Never shared.</span>
          </div>
        </div>
      </form>
    </div>
  );
}
