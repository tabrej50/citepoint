import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles, Globe2, ShieldCheck } from 'lucide-react';
import { SlideReveal } from '../components/SlideReveal';

/**
 * Citepoint ContactPage
 * Apple-style minimal monochrome:
 * - Canvas: White (#FFFFFF) and Light Gray (#F5F5F7)
 * - Text: Near-black (#1D1D1F) and Gray (#6E6E73)
 * - Borders: Hairline (#D2D2D7)
 * - Primary CTA: Solid black (#1D1D1F) with white text
 * - Zero gradients, zero shadows, generous white space
 */
export default function ContactPage({ setCurrentRoute }) {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    websiteUrl: '',
    objective: 'AI Visibility Diagnostic Assessment',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const validate = () => {
    const errs = {};
    if (!formData.fullName.trim()) errs.fullName = 'Full name is required';
    if (!formData.workEmail.trim()) {
      errs.workEmail = 'Work email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.workEmail)) {
      errs.workEmail = 'Please enter a valid work email';
    }
    if (!formData.company.trim()) errs.company = 'Company name is required';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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

  return (
    <div className="w-full bg-white text-[#1d1d1f] font-sans selection:bg-[#1d1d1f] selection:text-white">
      
      {/* SECTION 1: HEADER */}
      <section className="pt-28 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 relative overflow-hidden border-b border-[#d2d2d7] bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left">
            <SlideReveal direction="down" distance={30} duration={0.65}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f5f5f7] border border-[#d2d2d7] text-[#1d1d1f] font-semibold text-xs uppercase tracking-[0.14em] mb-4">
                <Sparkles className="w-3.5 h-3.5 text-[#1d1d1f]" />
                <span>// ADVISORY & AUDIT INQUIRIES</span>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#1d1d1f] tracking-tight leading-[1.08] mb-6 [text-wrap:balance]">
                Talk to Citepoint.
              </h1>
              <p className="text-base sm:text-lg text-[#6e6e73] leading-relaxed max-w-2xl">
                Schedule a confidential discovery conversation to evaluate your brand’s AI search presence, citation readiness, and strategic opportunities across major LLMs.
              </p>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* SECTION 2: FORM + DETAILS */}
      <section className="py-20 lg:py-28 relative bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-5 lg:gap-6 items-start">
            
            {/* Form Area: Columns 1-7 */}
            <div className="order-1 lg:col-span-7 w-full max-w-2xl">
              <SlideReveal direction="left" distance={36} duration={0.7}>
                <div className="p-6 sm:p-8 md:p-10 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] relative overflow-hidden">
                  
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-[#1d1d1f] text-white flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 stroke-[2] text-white" />
                      </div>
                      <h3 className="text-2xl font-medium text-[#1d1d1f]">
                        Briefing Request Received
                      </h3>
                      <p className="text-sm sm:text-base text-[#6e6e73] max-w-md mx-auto leading-relaxed">
                        Thank you for reaching out. A senior partner will review your inquiry and get in touch within 24 business hours.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setFormData({
                            fullName: '',
                            workEmail: '',
                            company: '',
                            websiteUrl: '',
                            objective: 'AI Visibility Diagnostic Assessment',
                            message: '',
                          });
                        }}
                        className="rounded-full h-[52px] px-8 text-[15px] font-medium inline-flex items-center gap-2 cursor-pointer bg-white text-[#1d1d1f] border border-[#d2d2d7] hover:bg-[#f5f5f7] transition-all active:scale-[0.98] mt-4"
                      >
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-5">
                      
                      {/* Full Name */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1d1d1f] tracking-wider uppercase mb-2">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full h-[52px] px-4 rounded-[16px] border bg-white text-[#1d1d1f] placeholder-[#6e6e73] text-[15px] focus:outline-none focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] transition-colors ${
                            errors.fullName ? 'border-red-500' : 'border-[#d2d2d7]'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-red-500 mt-1">{errors.fullName}</p>}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1d1d1f] tracking-wider uppercase mb-2">
                          WORK EMAIL *
                        </label>
                        <input
                          type="email"
                          name="workEmail"
                          placeholder="sarah@company.com"
                          value={formData.workEmail}
                          onChange={handleChange}
                          className={`w-full h-[52px] px-4 rounded-[16px] border bg-white text-[#1d1d1f] placeholder-[#6e6e73] text-[15px] focus:outline-none focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] transition-colors ${
                            errors.workEmail ? 'border-red-500' : 'border-[#d2d2d7]'
                          }`}
                        />
                        {errors.workEmail && <p className="text-xs text-red-500 mt-1">{errors.workEmail}</p>}
                      </div>

                      {/* Company Name & Website */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-[#1d1d1f] tracking-wider uppercase mb-2">
                            COMPANY NAME *
                          </label>
                          <input
                            type="text"
                            name="company"
                            placeholder="e.g. Acme Enterprise"
                            value={formData.company}
                            onChange={handleChange}
                            className={`w-full h-[52px] px-4 rounded-[16px] border bg-white text-[#1d1d1f] placeholder-[#6e6e73] text-[15px] focus:outline-none focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] transition-colors ${
                              errors.company ? 'border-red-500' : 'border-[#d2d2d7]'
                            }`}
                          />
                          {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-[#1d1d1f] tracking-wider uppercase mb-2">
                            COMPANY WEBSITE
                          </label>
                          <input
                            type="text"
                            name="websiteUrl"
                            placeholder="https://acme.com"
                            value={formData.websiteUrl}
                            onChange={handleChange}
                            className="w-full h-[52px] px-4 rounded-[16px] border border-[#d2d2d7] bg-white text-[#1d1d1f] placeholder-[#6e6e73] text-[15px] focus:outline-none focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] transition-colors"
                          />
                        </div>
                      </div>

                      {/* Primary Objective */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1d1d1f] tracking-wider uppercase mb-2">
                          PRIMARY ENGAGEMENT OBJECTIVE
                        </label>
                        <select
                          name="objective"
                          value={formData.objective}
                          onChange={handleChange}
                          className="w-full h-[52px] px-4 rounded-[16px] border border-[#d2d2d7] bg-white text-[#1d1d1f] text-[15px] focus:outline-none focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] transition-colors cursor-pointer"
                        >
                          <option value="AI Visibility Diagnostic Assessment">
                            AI Visibility Diagnostic Assessment
                          </option>
                          <option value="Ongoing Retainer & Telemetry">
                            Ongoing Retainer & Telemetry
                          </option>
                          <option value="Brand Hallucination & Citation Fix">
                            Brand Hallucination & Citation Fix
                          </option>
                          <option value="Enterprise Architecture & Custom Evals">
                            Enterprise Architecture & Custom Evals
                          </option>
                          <option value="General Strategic Inquiry">
                            General Strategic Inquiry
                          </option>
                        </select>
                      </div>

                      {/* Message Textarea */}
                      <div>
                        <label className="block text-xs font-semibold text-[#1d1d1f] tracking-wider uppercase mb-2">
                          BRIEF CONTEXT / NOTES
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Provide any priority competitor comparisons, target buyer prompts, or specific timeline requirements..."
                          className="w-full h-[160px] p-4 rounded-[16px] border border-[#d2d2d7] bg-white text-[#1d1d1f] placeholder-[#6e6e73] text-[15px] leading-[24px] focus:outline-none focus:border-[#1d1d1f] focus:ring-1 focus:ring-[#1d1d1f] transition-colors resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-[52px] rounded-full text-[15px] font-semibold flex items-center justify-center gap-2 cursor-pointer bg-[#1d1d1f] text-white hover:bg-black transition-all active:scale-[0.98]"
                      >
                        <span>{isSubmitting ? 'Transmitting Request...' : 'Send Briefing Request'}</span>
                        <ArrowRight className="w-4 h-4 text-white" />
                      </button>

                      <div className="pt-2 flex items-center justify-between text-[#6e6e73] text-xs">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#1d1d1f]" />
                          Strict NDA governance
                        </span>
                        <span>SLA: 24 business hours</span>
                      </div>

                    </form>
                  )}

                </div>
              </SlideReveal>
            </div>

            {/* Contact Details: Columns 9-12 */}
            <div className="order-2 lg:col-span-5 w-full">
              <SlideReveal direction="right" distance={36} duration={0.7}>
                <div className="flex flex-col space-y-6">
                  
                  {/* Block 1 */}
                  <div className="min-h-[96px] p-6 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] flex flex-col justify-center transition-all duration-200 hover:border-[#1d1d1f] group relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Mail className="w-4 h-4 text-[#1d1d1f]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73]">
                        // GENERAL ADVISORY
                      </span>
                    </div>
                    <a
                      href="mailto:hello@citepoint.io"
                      className="text-lg font-medium text-[#1d1d1f] group-hover:text-black transition-colors duration-200"
                    >
                      hello@citepoint.io
                    </a>
                    <p className="text-xs text-[#6e6e73] mt-1">
                      Diagnostic consultations, strategy sessions, and speaking engagements.
                    </p>
                  </div>

                  {/* Block 2 */}
                  <div className="min-h-[96px] p-6 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] flex flex-col justify-center transition-all duration-200 hover:border-[#1d1d1f] group relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 text-[#1d1d1f]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73]">
                        // STRATEGIC ACCOUNTS
                      </span>
                    </div>
                    <a
                      href="mailto:advisory@citepoint.io"
                      className="text-lg font-medium text-[#1d1d1f] group-hover:text-black transition-colors duration-200"
                    >
                      advisory@citepoint.io
                    </a>
                    <p className="text-xs text-[#6e6e73] mt-1">
                      Multi-brand portfolios, custom prompt evals, and enterprise MSAs.
                    </p>
                  </div>

                  {/* Block 3 */}
                  <div className="min-h-[96px] p-6 rounded-[24px] border border-[#d2d2d7] bg-[#f5f5f7] flex flex-col justify-center transition-all duration-200 hover:border-[#1d1d1f] group relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Globe2 className="w-4 h-4 text-[#1d1d1f]" />
                      <span className="text-xs font-semibold uppercase tracking-wider text-[#6e6e73]">
                        // GLOBAL DELIVERY
                      </span>
                    </div>
                    <div className="text-lg font-medium text-[#1d1d1f]">
                      San Francisco & London
                    </div>
                    <p className="text-xs text-[#6e6e73] mt-1">
                      Global remote delivery with client coverage across North America, EMEA, and APAC.
                    </p>
                  </div>

                </div>
              </SlideReveal>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
