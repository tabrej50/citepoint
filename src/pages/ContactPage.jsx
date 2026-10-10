import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles, Globe2, ShieldCheck } from 'lucide-react';
import { SlideReveal } from '../components/SlideReveal';

/**
 * Citepoint ContactPage
 * - Base Canvas: Titanium Space Black (#0a0b0d)
 * - Accent: Pure White & Specular Quartz
 * - Cards: Frosted Glass Cards (#16171d, rounded-[24px], border-white/10)
 * - Inputs: Obsidian dark inputs (#18181b, rounded-[16px], focus white ring)
 * - Typography: Bricolage Grotesque, high contrast white headers & badges
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
    <div className="w-full bg-[#0a0b0d] text-[#fff0f0] font-sans selection:bg-white selection:text-black">
      
      {/* --------------------------------------------------
          SECTION 1, HEADER (Titanium Space Black & Monochrome)
      -------------------------------------------------- */}
      <section className="pt-[72px] pb-[48px] md:pt-[96px] md:pb-[64px] relative overflow-hidden border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px] text-left">
            <SlideReveal direction="down" distance={30} duration={0.65}>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/15 text-white font-semibold text-xs uppercase tracking-[0.14em] mb-[16px]">
                <Sparkles className="w-3.5 h-3.5 text-white" />
                <span>// ADVISORY & AUDIT INQUIRIES</span>
              </div>
              <h1 className="type-h1 text-white mb-[24px]">
                Talk to Citepoint.
              </h1>
              <p className="type-body-lg text-[#a1a1aa] max-w-[65ch]">
                Schedule a confidential discovery conversation to evaluate your brand’s AI search presence, citation readiness, and strategic opportunities across major LLMs.
              </p>
            </SlideReveal>
          </div>
        </div>
      </section>

      {/* --------------------------------------------------
          SECTION 2, FORM + DETAILS:
      -------------------------------------------------- */}
      <section className="pt-12 sm:pt-16 pb-[160px] relative bg-transparent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 lg:gap-[48px] gap-y-[64px] items-start">
            
            {/* Form Area: Columns 1-7 (max-width 640px) */}
            <div className="order-1 lg:col-span-7 w-full max-w-[640px]">
              <SlideReveal direction="left" distance={36} duration={0.7}>
                <div className="surface-card p-6 sm:p-8 md:p-10 rounded-[24px] border border-white/10 bg-[#16171d]/90 backdrop-blur-md relative overflow-hidden shadow-2xl">
                  {/* Top Specular Hairline */}
                  <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent pointer-events-none" />
                  
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-16 h-16 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center mx-auto mb-4 shadow-[0_0_24px_rgba(255,255,255,0.15)]">
                        <CheckCircle2 className="w-8 h-8 stroke-[2] text-white" />
                      </div>
                      <h3 className="type-h3 text-white">
                        Briefing Request Received
                      </h3>
                      <p className="type-body max-w-[480px] mx-auto text-[#a1a1aa]">
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
                        className="btn-secondary h-[52px] px-8 rounded-full text-[15px] font-medium inline-flex items-center gap-2 cursor-pointer mt-4"
                      >
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-[20px]">
                      
                      {/* Full Name */}
                      <div>
                        <label className="block type-eyebrow text-white/90 font-semibold mb-2">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full h-[52px] px-4 rounded-[16px] border bg-[#18181b] text-white placeholder-[#71717a] text-[15px] focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors ${
                            errors.fullName ? 'border-rose-400' : 'border-white/10'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-rose-400 mt-1">{errors.fullName}</p>}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block type-eyebrow text-white/90 font-semibold mb-2">
                          WORK EMAIL *
                        </label>
                        <input
                          type="email"
                          name="workEmail"
                          placeholder="sarah@company.com"
                          value={formData.workEmail}
                          onChange={handleChange}
                          className={`w-full h-[52px] px-4 rounded-[16px] border bg-[#18181b] text-white placeholder-[#71717a] text-[15px] focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors ${
                            errors.workEmail ? 'border-rose-400' : 'border-white/10'
                          }`}
                        />
                        {errors.workEmail && <p className="text-xs text-rose-400 mt-1">{errors.workEmail}</p>}
                      </div>

                      {/* Company Name & Website in 2-column or stacked */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block type-eyebrow text-white/90 font-semibold mb-2">
                            COMPANY NAME *
                          </label>
                          <input
                            type="text"
                            name="company"
                            placeholder="e.g. Acme Enterprise"
                            value={formData.company}
                            onChange={handleChange}
                            className={`w-full h-[52px] px-4 rounded-[16px] border bg-[#18181b] text-white placeholder-[#71717a] text-[15px] focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors ${
                              errors.company ? 'border-rose-400' : 'border-white/10'
                            }`}
                          />
                          {errors.company && <p className="text-xs text-rose-400 mt-1">{errors.company}</p>}
                        </div>

                        <div>
                          <label className="block type-eyebrow text-white/90 font-semibold mb-2">
                            COMPANY WEBSITE
                          </label>
                          <input
                            type="text"
                            name="websiteUrl"
                            placeholder="https://acme.com"
                            value={formData.websiteUrl}
                            onChange={handleChange}
                            className="w-full h-[52px] px-4 rounded-[16px] border border-white/10 bg-[#18181b] text-white placeholder-[#71717a] text-[15px] focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors"
                          />
                        </div>
                      </div>

                      {/* Primary Objective */}
                      <div>
                        <label className="block type-eyebrow text-white/90 font-semibold mb-2">
                          PRIMARY ENGAGEMENT OBJECTIVE
                        </label>
                        <select
                          name="objective"
                          value={formData.objective}
                          onChange={handleChange}
                          className="w-full h-[52px] px-4 rounded-[16px] border border-white/10 bg-[#18181b] text-white text-[15px] focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors cursor-pointer"
                        >
                          <option value="AI Visibility Diagnostic Assessment" className="bg-[#18181b] text-white">
                            AI Visibility Diagnostic Assessment
                          </option>
                          <option value="Ongoing Retainer & Telemetry" className="bg-[#18181b] text-white">
                            Ongoing Retainer & Telemetry
                          </option>
                          <option value="Brand Hallucination & Citation Fix" className="bg-[#18181b] text-white">
                            Brand Hallucination & Citation Fix
                          </option>
                          <option value="Enterprise Architecture & Custom Evals" className="bg-[#18181b] text-white">
                            Enterprise Architecture & Custom Evals
                          </option>
                          <option value="General Strategic Inquiry" className="bg-[#18181b] text-white">
                            General Strategic Inquiry
                          </option>
                        </select>
                      </div>

                      {/* Message Textarea */}
                      <div>
                        <label className="block type-eyebrow text-white/90 font-semibold mb-2">
                          BRIEF CONTEXT / NOTES
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Provide any priority competitor comparisons, target buyer prompts, or specific timeline requirements..."
                          className="w-full h-[160px] p-4 rounded-[16px] border border-white/10 bg-[#18181b] text-white placeholder-[#71717a] text-[15px] leading-[24px] focus:outline-none focus:border-white focus:ring-1 focus:ring-white transition-colors resize-none"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="btn-primary w-full h-[52px] rounded-full text-[15px] font-semibold flex items-center justify-center gap-2 cursor-pointer shadow-[0_4px_20px_rgba(255,255,255,0.18)] transition-all"
                      >
                        <span>{isSubmitting ? 'Transmitting Request...' : 'Send Briefing Request'}</span>
                        <ArrowRight className="w-4 h-4 text-black" />
                      </button>

                      <div className="pt-2 flex items-center justify-between text-[#71717a] type-small">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-white/60" />
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
            <div className="order-2 lg:col-start-9 lg:col-span-4 w-full">
              <SlideReveal direction="right" distance={36} duration={0.7}>
                <div className="flex flex-col space-y-[24px]">
                  
                  {/* Block 1 */}
                  <div className="surface-card min-h-[96px] p-6 rounded-[24px] border border-white/10 bg-[#16171d]/80 flex flex-col justify-center transition-all duration-200 hover:border-white/40 group relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Mail className="w-4 h-4 text-white" />
                      <span className="type-eyebrow text-white font-semibold">
                        // GENERAL ADVISORY
                      </span>
                    </div>
                    <a
                      href="mailto:hello@citepoint.io"
                      className="type-h4 text-white group-hover:text-zinc-200 transition-colors duration-200"
                    >
                      hello@citepoint.io
                    </a>
                    <p className="type-small text-[#a1a1aa] mt-1">
                      Diagnostic consultations, strategy sessions, and speaking engagements.
                    </p>
                  </div>

                  {/* Block 2 */}
                  <div className="surface-card min-h-[96px] p-6 rounded-[24px] border border-white/10 bg-[#16171d]/80 flex flex-col justify-center transition-all duration-200 hover:border-white/40 group relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 text-white" />
                      <span className="type-eyebrow text-white font-semibold">
                        // STRATEGIC ACCOUNTS
                      </span>
                    </div>
                    <a
                      href="mailto:advisory@citepoint.io"
                      className="type-h4 text-white group-hover:text-zinc-200 transition-colors duration-200"
                    >
                      advisory@citepoint.io
                    </a>
                    <p className="type-small text-[#a1a1aa] mt-1">
                      Multi-brand portfolios, custom prompt evals, and enterprise MSAs.
                    </p>
                  </div>

                  {/* Block 3 */}
                  <div className="surface-card min-h-[96px] p-6 rounded-[24px] border border-white/10 bg-[#16171d]/80 flex flex-col justify-center transition-all duration-200 hover:border-white/40 group relative overflow-hidden">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Globe2 className="w-4 h-4 text-white" />
                      <span className="type-eyebrow text-white font-semibold">
                        // GLOBAL DELIVERY
                      </span>
                    </div>
                    <div className="type-h4 text-white">
                      San Francisco & London
                    </div>
                    <p className="type-small text-[#a1a1aa] mt-1">
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
