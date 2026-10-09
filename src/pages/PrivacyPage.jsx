import React from 'react';
import { ShieldCheck, Lock, ArrowRight } from 'lucide-react';

export default function PrivacyPage({ setCurrentRoute }) {
  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-transparent text-[#4B4F58] font-sans">
      {/* --------------------------------------------------
          PAGE HERO (Champagne Gold & Alabaster)
      -------------------------------------------------- */}
      <section className="bg-transparent text-[#0F1012] pt-128 sm:pt-144 lg:pt-160 pb-64 sm:pb-80 lg:pb-96 relative overflow-hidden border-b border-[#EADBBE]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[8px] bg-white border border-[#EADBBE] text-xs font-mono uppercase tracking-[0.12em] text-[#A67D28] font-semibold mb-4 shadow-xs">
            // LEGAL DISCLOSURE
          </div>
          <h1 className="text-4xl sm:text-5xl font-heading font-medium text-[#0F1012] tracking-[-0.04em] leading-[1.1] mb-4">
            Privacy Policy
          </h1>
          <p className="text-sm text-[#636773] font-mono">
            Last Updated: September 2026 • Citepoint Agency
          </p>
        </div>
      </section>

      {/* --------------------------------------------------
          POLICY CONTENT (Champagne Gold & Alabaster Surface Card)
      -------------------------------------------------- */}
      <section className="py-64 lg:py-96 bg-transparent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="surface-card p-6 lg:p-8 sm:p-12 space-y-10 text-sm leading-[1.6] text-[#4B4F58]">
            
            <div>
              <h2 className="text-xl font-heading font-medium text-[#0F1012] mb-3 leading-[1.2]">
                01. Overview & Commitment to Client Privacy
              </h2>
              <p>
                Citepoint (“Citepoint,” “we,” “us,” or “our”), operated by <strong className="text-[#0F1012]">Citepoint Technologies Pvt. Ltd.</strong>, respects the proprietary nature of your enterprise data. This Privacy Policy governs how we collect, process, and safeguard information collected through our website (<code className="text-[#A67D28] font-mono font-semibold">citepoint.io</code>), diagnostic visibility audits, and client advisory engagements.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-medium text-[#0F1012] mb-3 leading-[1.2]">
                02. Information We Collect
              </h2>
              <p className="mb-4">
                We collect information strictly necessary to evaluate your brand’s AI search visibility and deliver professional consulting services:
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-[8px] bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5 border border-[#EADBBE]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="text-[#0F1012]">Contact Information:</strong> Full name, work email, job title, company name, and official website URL submitted via our audit request forms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-[8px] bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5 border border-[#EADBBE]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="text-[#0F1012]">Audit Input Data:</strong> Information you provide regarding your category, key competitors, target buyer questions, and evaluation priorities.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-[8px] bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5 border border-[#EADBBE]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="text-[#0F1012]">Publicly Available Data:</strong> We inspect public web information, schema markups, knowledge graph entities, and generative model outputs referencing your brand.</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-[8px] bg-[#FAF8F5] text-[#C5A059] flex items-center justify-center shrink-0 mt-0.5 border border-[#EADBBE]">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <span><strong className="text-[#0F1012]">Technical Telemetry:</strong> Standard non-identifying telemetry collected via privacy-compliant analytics to improve site performance.</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-heading font-medium text-[#0F1012] mb-3 leading-[1.2]">
                03. How We Use Audit Information
              </h2>
              <p>
                Data submitted in audit requests is used solely to research your company’s presence across ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews. We never sell your company data or contact details to third parties, data brokers, or advertising networks.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-medium text-[#0F1012] mb-3 leading-[1.2]">
                04. Mutual Confidentiality & NDAs
              </h2>
              <p>
                We treat all client diagnostic findings, competitor matrices, and strategic roadmaps as strictly confidential business information. Mutual Non-Disclosure Agreements (NDAs) are executed prior to onboarding for formal advisory programs.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-heading font-medium text-[#0F1012] mb-3 leading-[1.2]">
                05. International Data Transfers & Compliance
              </h2>
              <p>
                Citepoint delivers services globally to clients across the United States, Europe, the United Kingdom, India, and the UAE. We adhere to applicable global data protection principles, including GDPR and CCPA standards.
              </p>
            </div>

            <div className="pt-6 border-t border-[#EADBBE]">
              <h2 className="text-xl font-heading font-medium text-[#0F1012] mb-3 leading-[1.2]">
                06. Contact Our Data Governance Team
              </h2>
              <p>
                For privacy inquiries, data deletion requests, or NDA submissions, please contact our team at: <code className="text-[#A67D28] font-mono font-semibold">privacy@citepoint.io</code>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
