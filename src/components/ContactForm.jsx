import React, { useState } from 'react';
import { ShieldCheck } from 'lucide-react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    workEmail: '',
    company: '',
    topic: 'Strategy Call (Visibility Growth - $3,500/mo)',
    message: '',
    honeypot: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const topicOptions = [
    'Strategy Call (Visibility Growth - $3,500/mo)',
    'Strategy Call (Authority Retainer - $7,000–$12,000/mo)',
    'Enterprise Custom Advisory',
    'General Inquiry / Partnership'
  ];

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
    }, 800);
  };

  return (
    <div className="bg-[#0D1117] border border-[#1E293B] rounded-[2px] p-6 sm:p-10 relative">
      {/* ASCII Corner Glyphs */}
      <span className="absolute -top-[7px] -left-[4.5px] text-[#1E293B] text-xs font-mono select-none pointer-events-none">+</span>
      <span className="absolute -top-[7px] -right-[4.5px] text-[#1E293B] text-xs font-mono select-none pointer-events-none">+</span>
      <span className="absolute -bottom-[7px] -left-[4.5px] text-[#1E293B] text-xs font-mono select-none pointer-events-none">+</span>
      <span className="absolute -bottom-[7px] -right-[4.5px] text-[#1E293B] text-xs font-mono select-none pointer-events-none">+</span>

      {submitted ? (
        <div className="text-center py-10 px-4">
          <div className="text-brand-gold font-mono text-3xl mb-4 select-none">
            [x]
          </div>
          <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mb-3">
            Message Received
          </h3>
          <p className="text-xs text-[#8B949E] max-w-md mx-auto leading-relaxed mb-6 font-mono">
            Thank you, {formData.fullName}. A senior strategist will review your inquiry and reach out to <strong className="text-brand-gold">{formData.workEmail}</strong> within one business day.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="text-xs uppercase tracking-wider font-mono text-brand-gold hover:underline"
          >
            [ SEND ANOTHER MESSAGE ]
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6" noValidate>
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

          <div>
            <span className="inline-block text-xs uppercase tracking-wider font-mono text-brand-gold mb-2">
              // SCHEDULE & CONNECT
            </span>
            <h3 className="text-xl sm:text-2xl font-mono font-bold text-white mb-2">
              Talk to Citepoint
            </h3>
            <p className="text-xs text-[#8B949E] leading-relaxed font-mono">
              Schedule a strategy call or inquire about long-term visibility retainers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#8B949E] mb-2">
                Name <span className="text-brand-gold">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                placeholder="Sarah Jenkins"
                className={`w-full px-4 py-3 rounded-[2px] border text-xs font-mono text-[#E6EDF3] placeholder-[#8B949E]/40 bg-[#070A0E] focus:outline-none focus:border-brand-gold transition-colors ${
                  errors.fullName ? 'border-red-500' : 'border-[#1E293B]'
                }`}
              />
              {errors.fullName && <p className="text-xs font-mono text-red-400 mt-1">{errors.fullName}</p>}
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider font-mono text-[#8B949E] mb-2">
                Work Email <span className="text-brand-gold">*</span>
              </label>
              <input
                type="email"
                name="workEmail"
                value={formData.workEmail}
                onChange={handleChange}
                placeholder="s.jenkins@company.com"
                className={`w-full px-4 py-3 rounded-[2px] border text-xs font-mono text-[#E6EDF3] placeholder-[#8B949E]/40 bg-[#070A0E] focus:outline-none focus:border-brand-gold transition-colors ${
                  errors.workEmail ? 'border-red-500' : 'border-[#1E293B]'
                }`}
              />
              {errors.workEmail && <p className="text-xs font-mono text-red-400 mt-1">{errors.workEmail}</p>}
            </div>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-mono text-[#8B949E] mb-2">
              Company Name <span className="text-brand-gold">*</span>
            </label>
            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Acme Technologies"
              className={`w-full px-4 py-3 rounded-[2px] border text-xs font-mono text-[#E6EDF3] placeholder-[#8B949E]/40 bg-[#070A0E] focus:outline-none focus:border-brand-gold transition-colors ${
                errors.company ? 'border-red-500' : 'border-[#1E293B]'
              }`}
            />
            {errors.company && <p className="text-xs font-mono text-red-400 mt-1">{errors.company}</p>}
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-mono text-[#8B949E] mb-2">
              Topic / Engagement Interest <span className="text-brand-gold">*</span>
            </label>
            <select
              name="topic"
              value={formData.topic}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-[2px] border border-[#1E293B] text-xs font-mono text-[#E6EDF3] bg-[#070A0E] focus:outline-none focus:border-brand-gold transition-colors"
            >
              {topicOptions.map((opt) => (
                <option key={opt} value={opt} className="bg-[#070A0E] text-[#E6EDF3]">{opt}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-xs uppercase tracking-wider font-mono text-[#8B949E] mb-2">
              How can we help? (Optional)
            </label>
            <textarea
              name="message"
              rows="3"
              value={formData.message}
              onChange={handleChange}
              placeholder="Share details regarding your current AI search visibility, competitors, or goals..."
              className="w-full px-4 py-3 rounded-[2px] border border-[#1E293B] text-xs font-mono text-[#E6EDF3] placeholder-[#8B949E]/40 bg-[#070A0E] focus:outline-none focus:border-brand-gold transition-colors resize-none"
            ></textarea>
          </div>

          <div className="pt-2">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3.5 rounded-[2px] text-xs uppercase tracking-wider font-mono font-bold border border-brand-gold text-brand-gold bg-transparent hover:bg-brand-gold hover:text-[#070A0E] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-60"
            >
              {isSubmitting ? (
                <span>[ PROCESSING REQUEST... ]</span>
              ) : (
                <span>[ SCHEDULE A STRATEGY CALL &rarr; ]</span>
              )}
            </button>

            <div className="flex flex-wrap items-center justify-center gap-2 mt-4 text-[11px] text-[#8B949E] font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-brand-gold shrink-0" />
              <span className="whitespace-nowrap">Direct strategist response</span>
              <span>·</span>
              <span className="whitespace-nowrap">Mutual NDA available upon request</span>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}
