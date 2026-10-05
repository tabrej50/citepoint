import React from 'react';
import { ShieldCheck, AlertCircle, ArrowRight } from 'lucide-react';

export default function TermsPage({ setCurrentRoute }) {
  const handleNav = (route) => {
    setCurrentRoute(route);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#012624] text-[#bbc7c6] font-matter">
      {/* --------------------------------------------------
          PAGE HERO (Liquid Abyss #012624)
      -------------------------------------------------- */}
      <section className="bg-[#012624] text-[#ffffff] pt-128 sm:pt-144 lg:pt-160 pb-64 sm:pb-80 lg:pb-96 relative overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(circle at 50% 30%, rgba(203, 255, 252, 0.15) 0%, transparent 60%)',
          }}
        />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[6px] bg-[#003734] border border-[#707777]/30 text-xs font-mono uppercase tracking-[0.12em] text-[#edfffe] mb-4">
            // TERMS OF ENGAGEMENT
          </div>
          <h1 className="text-4xl sm:text-5xl font-matter font-medium text-[#ffffff] tracking-[-0.04em] leading-[1.0] mb-4">
            Terms of Service
          </h1>
          <p className="text-sm text-[#bbc7c6] font-mono">
            Last Updated: September 2026 • Citepoint Agency
          </p>
        </div>
      </section>

      {/* --------------------------------------------------
          TERMS CONTENT (Liquid Kelp #003734 Card)
      -------------------------------------------------- */}
      <section className="py-64 lg:py-96 bg-[#011d1c] border-t border-b border-[#707777]/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="surface-card-static p-6 lg:p-8 sm:p-12 space-y-10 text-sm leading-[1.4] text-[#bbc7c6]">
            
            <div>
              <h2 className="text-xl font-matter font-medium text-[#ffffff] mb-3 leading-[1.0]">
                01. Acceptance of Terms
              </h2>
              <p>
                By accessing this website (<code className="text-[#cbfffc] font-mono">citepoint.io</code>) or engaging Citepoint (operated by <strong className="text-[#ffffff]">Citepoint Technologies Pvt. Ltd.</strong>) for advisory, diagnostic auditing, or Generative Engine Optimization (GEO) services, you agree to comply with and be bound by these Terms of Service.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-matter font-medium text-[#ffffff] mb-3 leading-[1.0]">
                02. Scope of Services & Independent Advisory
              </h2>
              <p>
                Citepoint provides strategic, technical, and analytical consulting services designed to improve client brand discoverability and citation frequency across generative AI search platforms. We are an independent consultancy and are not affiliated with, sponsored by, or endorsed by OpenAI, Anthropic, Google, Microsoft, or Perplexity.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-matter font-medium text-[#ffffff] mb-3 leading-[1.0]">
                03. Disclaimer Regarding Third-Party AI Models
              </h2>
              <p className="mb-4">
                Third-party generative AI models (including ChatGPT, Perplexity, Gemini, Claude, and Google AI Overviews) are operated by autonomous third parties. Their model weights, training corpora, retrieval algorithms, and output filters evolve unpredictably.
              </p>
              <div className="p-5 rounded-[16px] bg-[#011d1c] border border-[#707777]/20 text-xs text-[#bbc7c6] font-mono leading-relaxed">
                <strong className="text-[#cbfffc] block mb-1">Explicit Agency Disclaimer:</strong>
                Citepoint does not warrant or guarantee fixed rankings, guaranteed #1 recommendations, or permanent inclusion in any third-party synthetic response. All services focus on controllable variables: data integrity, citation authority, structured schemas, and empirical measurement.
              </div>
            </div>

            <div>
              <h2 className="text-xl font-matter font-medium text-[#ffffff] mb-3 leading-[1.0]">
                04. Intellectual Property
              </h2>
              <p>
                All custom diagnostic audits, strategy playbooks, and deliverables prepared specifically for a client become client property upon full payment of fees. Citepoint retains ownership of its proprietary methodologies, evaluation software, prompt cluster libraries, and analytical frameworks.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-matter font-medium text-[#ffffff] mb-3 leading-[1.0]">
                05. Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, Citepoint shall not be liable for any indirect, incidental, consequential, or punitive damages resulting from algorithmic changes, model deprecations, or sudden shifts in third-party search indexes.
              </p>
            </div>

            <div className="pt-6 border-t border-[#707777]/20">
              <h2 className="text-xl font-matter font-medium text-[#ffffff] mb-3 leading-[1.0]">
                06. Governing Law & Arbitration
              </h2>
              <p>
                These Terms shall be governed by and construed in accordance with standard commercial arbitration laws stipulated in specific client engagement statements of work.
              </p>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
