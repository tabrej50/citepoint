import React, { useState } from 'react';
import { Mail, CheckCircle2, ArrowRight, Sparkles, Globe2, ShieldCheck, MapPin } from 'lucide-react';
import { SlideReveal } from '../components/SlideReveal';

/**
 * Champagne Gold & Alabaster ContactPage
 * - Hero & Content: Warm Alabaster (#FAF8F5 / transparent)
 * - Cards: surface-card with warm golden hairline border (#EADBBE)
 * - Inputs: Crisp white fields with #EADBBE border, gold focus rings (#C5A059)
 * - Headings: font-heading weight 500 in Deep Obsidian (#0F1012), body text (#4B4F58)
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
    <div className="w-full bg-transparent text-[#4B4F58] font-sans">
      
      {/* --------------------------------------------------
          SECTION 1, HEADER (Champagne Gold & Alabaster)
      -------------------------------------------------- */}
      <section className="pt-[72px] pb-[48px] md:pt-[96px] md:pb-[64px] relative overflow-hidden border-b border-[#EADBBE]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px] text-left">
            <SlideReveal direction="down" distance={30} duration={0.65}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-white border border-[#EADBBE] text-[#A67D28] font-semibold text-xs uppercase tracking-[0.12em] mb-[16px] shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
                <span>// ADVISORY & AUDIT INQUIRIES</span>
              </div>
              <h1 className="type-h1 text-[#0F1012] mb-[24px]">
                Talk to Citepoint.
              </h1>
              <p className="type-body-lg text-[#4B4F58] max-w-[65ch]">
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
                <div className="surface-card p-6 sm:p-8 md:p-10 rounded-[12px] border border-[#EADBBE]">
                  
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="w-14 h-14 rounded-full bg-[#FAF8F5] border border-[#EADBBE] text-[#C5A059] flex items-center justify-center mx-auto mb-4 shadow-xs">
                        <CheckCircle2 className="w-7 h-7 stroke-[2] text-[#C5A059]" />
                      </div>
                      <h3 className="type-h3 text-[#0F1012]">
                        Briefing Request Received
                      </h3>
                      <p className="type-body max-w-[480px] mx-auto text-[#4B4F58]">
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
                        className="btn-kelp h-[52px] px-6 rounded-[8px] text-[15px] leading-[20px] font-medium inline-flex items-center gap-2 cursor-pointer mt-4"
                      >
                        <span>Send Another Message</span>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} noValidate className="space-y-[20px]">
                      
                      {/* Full Name */}
                      <div>
                        <label className="block type-eyebrow text-[#0F1012] font-semibold mb-2">
                          FULL NAME *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="e.g. Sarah Jenkins"
                          value={formData.fullName}
                          onChange={handleChange}
                          className={`w-full h-[52px] px-4 rounded-[8px] border bg-white text-[#0F1012] placeholder-[#A0A5B0] text-[15px] leading-[20px] focus:outline-none focus:border-[#C5A059] transition-colors shadow-2xs ${
                            errors.fullName ? 'border-rose-400' : 'border-[#EADBBE]'
                          }`}
                        />
                        {errors.fullName && <p className="text-xs text-rose-500 mt-1">{errors.fullName}</p>}
                      </div>

                      {/* Work Email */}
                      <div>
                        <label className="block type-eyebrow text-[#0F1012] font-semibold mb-2">
                          WORK EMAIL *
                        </label>
                        <input
                          type="email"
                          name="workEmail"
                          placeholder="sarah@company.com"
                          value={formData.workEmail}
                          onChange={handleChange}
                          className={`w-full h-[52px] px-4 rounded-[8px] border bg-white text-[#0F1012] placeholder-[#A0A5B0] text-[15px] leading-[20px] focus:outline-none focus:border-[#C5A059] transition-colors shadow-2xs ${
                            errors.workEmail ? 'border-rose-400' : 'border-[#EADBBE]'
                          }`}
                        />
                        {errors.workEmail && <p className="text-xs text-rose-500 mt-1">{errors.workEmail}</p>}
                      </div>

                      {/* Company Name & Website in 2-column or stacked */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block type-eyebrow text-[#0F1012] font-semibold mb-2">
                            COMPANY NAME *
                          </label>
                          <input
                            type="text"
                            name="company"
                            placeholder="e.g. Acme Enterprise"
                            value={formData.company}
                            onChange={handleChange}
                            className={`w-full h-[52px] px-4 rounded-[8px] border bg-white text-[#0F1012] placeholder-[#A0A5B0] text-[15px] leading-[20px] focus:outline-none focus:border-[#C5A059] transition-colors shadow-2xs ${
                              errors.company ? 'border-rose-400' : 'border-[#EADBBE]'
                            }`}
                          />
                          {errors.company && <p className="text-xs text-rose-500 mt-1">{errors.company}</p>}
                        </div>

                        <div>
                          <label className="block type-eyebrow text-[#0F1012] font-semibold mb-2">
                            COMPANY WEBSITE
                          </label>
                          <input
                            type="text"
                            name="websiteUrl"
                            placeholder="https://acme.com"
                            value={formData.websiteUrl}
                            onChange={handleChange}
                            className="w-full h-[52px] px-4 rounded-[8px] border border-[#EADBBE] bg-white text-[#0F1012] placeholder-[#A0A5B0] text-[15px] leading-[20px] focus:outline-none focus:border-[#C5A059] transition-colors shadow-2xs"
                          />
                        </div>
                      </div>

                      {/* Primary Objective */}
                      <div>
                        <label className="block type-eyebrow text-[#0F1012] font-semibold mb-2">
                          PRIMARY ENGAGEMENT OBJECTIVE
                        </label>
                        <select
                          name="objective"
                          value={formData.objective}
                          onChange={handleChange}
                          className="w-full h-[52px] px-4 rounded-[8px] border border-[#EADBBE] bg-white text-[#0F1012] text-[15px] leading-[20px] focus:outline-none focus:border-[#C5A059] transition-colors shadow-2xs"
                        >
                          <option value="AI Visibility Diagnostic Assessment" className="bg-white text-[#0F1012]">
                            AI Visibility Diagnostic Assessment
                          </option>
                          <option value="Ongoing Retainer & Telemetry" className="bg-white text-[#0F1012]">
                            Ongoing Retainer & Telemetry
                          </option>
                          <option value="Brand Hallucination & Citation Fix" className="bg-white text-[#0F1012]">
                            Brand Hallucination & Citation Fix
                          </option>
                          <option value="Enterprise Architecture & Custom Evals" className="bg-white text-[#0F1012]">
                            Enterprise Architecture & Custom Evals
                          </option>
                          <option value="General Strategic Inquiry" className="bg-white text-[#0F1012]">
                            General Strategic Inquiry
                          </option>
                        </select>
                      </div>

                      {/* Message Textarea */}
                      <div>
                        <label className="block type-eyebrow text-[#0F1012] font-semibold mb-2">
                          BRIEF CONTEXT / NOTES
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Provide any priority competitor comparisons, target buyer prompts, or specific timeline requirements..."
                          className="w-full h-[180px] p-4 rounded-[8px] border border-[#EADBBE] bg-white text-[#0F1012] placeholder-[#A0A5B0] text-[15px] leading-[24px] focus:outline-none focus:border-[#C5A059] transition-colors resize-none shadow-2xs"
                        />
                      </div>

                      {/* Submit Button */}
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-[52px] rounded-[8px] btn-aurora text-[15px] leading-[20px] font-semibold flex items-center justify-center gap-2 cursor-pointer transition-all duration-200 shadow-[0_4px_16px_rgba(197,160,89,0.32)]"
                      >
                        <span>{isSubmitting ? 'Transmitting Request...' : 'Send Briefing Request'}</span>
                        <ArrowRight className="w-4 h-4 text-[#0F1012]" />
                      </button>

                      <div className="pt-2 flex items-center justify-between text-[#636773] type-small">
                        <span className="flex items-center gap-1.5">
                          <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
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
                <div className="flex flex-col space-y-[32px]">
                  
                  {/* Block 1 */}
                  <div className="surface-card min-h-[96px] p-6 rounded-[12px] border border-[#EADBBE] flex flex-col justify-center transition-all duration-200 hover:border-[#C5A059] group">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Mail className="w-4 h-4 text-[#C5A059]" />
                      <span className="type-eyebrow text-[#A67D28] font-semibold">
                        // GENERAL ADVISORY
                      </span>
                    </div>
                    <a
                      href="mailto:hello@citepoint.io"
                      className="type-h4 text-[#0F1012] group-hover:text-[#A67D28] transition-colors duration-200"
                    >
                      hello@citepoint.io
                    </a>
                    <p className="type-small text-[#4B4F58] mt-1">
                      Diagnostic consultations, strategy sessions, and speaking engagements.
                    </p>
                  </div>

                  {/* Block 2 */}
                  <div className="surface-card min-h-[96px] p-6 rounded-[12px] border border-[#EADBBE] flex flex-col justify-center transition-all duration-200 hover:border-[#C5A059] group">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Sparkles className="w-4 h-4 text-[#C5A059]" />
                      <span className="type-eyebrow text-[#A67D28] font-semibold">
                        // STRATEGIC ACCOUNTS
                      </span>
                    </div>
                    <a
                      href="mailto:advisory@citepoint.io"
                      className="type-h4 text-[#0F1012] group-hover:text-[#A67D28] transition-colors duration-200"
                    >
                      advisory@citepoint.io
                    </a>
                    <p className="type-small text-[#4B4F58] mt-1">
                      Multi-brand portfolios, custom prompt evals, and enterprise MSAs.
                    </p>
                  </div>

                  {/* Block 3 */}
                  <div className="surface-card min-h-[96px] p-6 rounded-[12px] border border-[#EADBBE] flex flex-col justify-center transition-all duration-200 hover:border-[#C5A059] group">
                    <div className="flex items-center gap-2 mb-1.5">
                      <Globe2 className="w-4 h-4 text-[#C5A059]" />
                      <span className="type-eyebrow text-[#A67D28] font-semibold">
                        // GLOBAL DELIVERY
                      </span>
                    </div>
                    <div className="type-h4 text-[#0F1012]">
                      San Francisco & London
                    </div>
                    <p className="type-small text-[#4B4F58] mt-1">
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
