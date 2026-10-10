import React from 'react';

/**
 * Official Brand SVG paths for major AI Search & Generative Engines
 * (ChatGPT, Perplexity, Gemini, Claude, Google AI Overviews)
 * Styled for Apple Minimal Monochrome:
 * Monochromatic rendering (currentColor = #1D1D1F), clean light surfaces (#F5F5F7), hairline borders (#D2D2D7).
 */
export const AI_ENGINES = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    provider: 'OpenAI',
    title: 'OpenAI ChatGPT',
    color: '#10A37F',
    role: 'Conversational Shortlists & Vendor Summaries',
    tagline: 'Leading conversational engine for B2B buyer discovery',
    svgPath:
      'M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zm-9.022 12.6081a4.4755 4.4755 0 0 1-2.8764-1.0408l.1419-.0804 4.7783-2.7582a.7948.7948 0 0 0 .3927-.6813v-6.7369l2.02 1.1686a.071.071 0 0 1 .038.052v5.5826a4.504 4.504 0 0 1-4.4945 4.4944zm-9.6607-4.1254a4.4708 4.4708 0 0 1-.5346-3.0137l.142.0852 4.783 2.7582a.7712.7712 0 0 0 .7806 0l5.8428-3.3685v2.3324a.0804.0804 0 0 1-.0332.0615L9.74 19.9502a4.4992 4.4992 0 0 1-6.1408-1.6464zM2.3408 7.8956a4.485 4.485 0 0 1 2.3655-1.9728V11.6a.7664.7664 0 0 0 .3879.6765l5.8144 3.3543-2.0201 1.1685a.0757.0757 0 0 1-.071 0l-4.8303-2.7865A4.504 4.504 0 0 1 2.3408 7.872zm16.5963 3.8558L13.1038 8.364 15.1192 7.2a.0757.0757 0 0 1 .071 0l4.8303 2.7913a4.4944 4.4944 0 0 1-.6765 8.1042v-5.6772a.79.79 0 0 0-.407-.667zm2.0107-3.0231l-.142-.0852-4.7735-2.7818a.7759.7759 0 0 0-.7854 0L9.409 9.2297V6.8974a.0662.0662 0 0 1 .0284-.0615l4.8303-2.7866a4.4992 4.4992 0 0 1 6.6802 4.66zM8.3065 12.863l-2.02-1.1638a.0804.0804 0 0 1-.038-.0567V6.0742a4.4992 4.4992 0 0 1 7.3757-3.4537l-.142.0805L8.704 5.459a.7948.7948 0 0 0-.3927.6813zm1.0976-2.3654l2.602-1.4998 2.6069 1.4998v2.9994l-2.5974 1.4997-2.6067-1.4997Z',
  },
  {
    id: 'gemini',
    name: 'Gemini',
    provider: 'Google',
    title: 'Google Gemini',
    color: '#4E82EE',
    role: 'Multimodal Knowledge Graph Integration',
    tagline: 'Google ecosystem integration with deep entity reasoning',
    svgPath:
      'M11.04 19.32Q12 21.51 12 24q0-2.49.93-4.68.96-2.19 2.58-3.81t3.81-2.55Q21.51 12 24 12q-2.49 0-4.68-.93a12.3 12.3 0 0 1-3.81-2.58 12.3 12.3 0 0 1-2.58-3.81Q12 2.49 12 0q0 2.49-.96 4.68-.93 2.19-2.55 3.81a12.3 12.3 0 0 1-3.81 2.58Q2.49 12 0 12q2.49 0 4.68.96 2.19.93 3.81 2.55t2.55 3.81',
  },
  {
    id: 'perplexity',
    name: 'Perplexity',
    provider: 'Perplexity AI',
    title: 'Perplexity',
    color: '#20B2AA',
    role: 'Real-Time Web Citations & Direct References',
    tagline: 'Deep research engine citing authoritative third-party sources',
    svgPath:
      'M22.3977 7.0896h-2.3106V.0676l-7.5094 6.3542V.1577h-1.1554v6.1966L4.4904 0v7.0896H1.6023v10.3976h2.8882V24l6.932-6.3591v6.2005h1.1554v-6.0469l6.9318 6.1807v-6.4879h2.8882V7.0896zm-3.4657-4.531v4.531h-5.355l5.355-4.531zm-13.2862.0676 4.8691 4.4634H5.6458V2.6262zM2.7576 16.332V8.245h7.8476l-6.1149 6.1147v1.9723H2.7576zm2.8882 5.0404v-3.8852h.0001v-2.6488l5.7763-5.7764v7.0111l-5.7764 5.2993zm12.7086.0248-5.7766-5.1509V9.0618l5.7766 5.7766v6.5588zm2.8882-5.0652h-1.733v-1.9723L13.3948 8.245h7.8478v8.087z',
  },
  {
    id: 'claude',
    name: 'Claude',
    provider: 'Anthropic',
    title: 'Anthropic Claude',
    color: '#D97757',
    role: 'In-Depth Technical Synthesis & Enterprise Analysis',
    tagline: 'High-reasoning model for complex B2B vendor evaluation',
    svgPath:
      'm4.7144 15.9555 4.7174-2.6471.079-.2307-.079-.1275h-.2307l-.7893-.0486-2.6956-.0729-2.3375-.0971-2.2646-.1214-.5707-.1215-.5343-.7042.0546-.3522.4797-.3218.686.0608 1.5179.1032 2.2767.1578 1.6514.0972 2.4468.255h.3886l.0546-.1579-.1336-.0971-.1032-.0972L6.973 9.8356l-2.55-1.6879-1.3356-.9714-.7225-.4918-.3643-.4614-.1578-1.0078.6557-.7225.8803.0607.2246.0607.8925.686 1.9064 1.4754 2.4893 1.8336.3643.3035.1457-.1032.0182-.0728-.164-.2733-1.3539-2.4467-1.445-2.4893-.6435-1.032-.17-.6194c-.0607-.255-.1032-.4674-.1032-.7285L6.287.1335 6.6997 0l.9957.1336.419.3642.6192 1.4147 1.0018 2.2282 1.5543 3.0296.4553.8985.2429.8318.091.255h.1579v-.1457l.1275-1.706.2368-2.0947.2307-2.6957.0789-.7589.3764-.9107.7468-.4918.5828.2793.4797.686-.0668.4433-.2853 1.8517-.5586 2.9021-.3643 1.9429h.2125l.2429-.2429.9835-1.3053 1.6514-2.0643.7286-.8196.85-.9046.5464-.4311h1.0321l.759 1.1293-.34 1.1657-1.0625 1.3478-.8804 1.1414-1.2628 1.7-.7893 1.36.0729.1093.1882-.0183 2.8535-.607 1.5421-.2794 1.8396-.3157.8318.3886.091.3946-.3278.8075-1.967.4857-2.3072.4614-3.4364.8136-.0425.0304.0486.0607 1.5482.1457.6618.0364h1.621l3.0175.2247.7892.522.4736.6376-.079.4857-1.2142.6193-1.6393-.3886-3.825-.9107-1.3113-.3279h-.1822v.1093l1.0929 1.0686 2.0035 1.8092 2.5075 2.3314.1275.5768-.3218.4554-.34-.0486-2.2039-1.6575-.85-.7468-1.9246-1.621h-.1275v.17l.4432.6496 2.3436 3.5214.1214 1.0807-.17.3521-.6071.2125-.6679-.1214-1.3721-1.9246L14.38 17.959l-1.1414-1.9428-.1397.079-.674 7.2552-.3156.3703-.7286.2793-.6071-.4614-.3218-.7468.3218-1.4753.3886-1.9246.3157-1.53.2853-1.9004.17-.6314-.0121-.0425-.1397.0182-1.4328 1.9672-2.1796 2.9446-1.7243 1.8456-.4128.164-.7164-.3704.0667-.6618.4008-.5889 2.386-3.0357 1.4389-1.882.929-1.0868-.0062-.1579h-.0546l-6.3385 4.1164-1.1293.1457-.4857-.4554.0608-.7467.2307-.2429 1.9064-1.3114Z',
  },
  {
    id: 'google-ai-overviews',
    alias: 'google-ai',
    name: 'Google AI Overviews',
    shortName: 'AI Overviews',
    provider: 'Google',
    title: 'Google AI Overviews',
    color: '#4285F4',
    role: 'Search-Engine Native Synthetic Answers',
    tagline: 'Mass-market search engine answers transforming blue links into summaries',
    svgPath:
      'M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z',
  },
];

/**
 * Individual Brand SVG icon component
 * Renders authentic, official brand logos and colors for each major AI engine.
 */
export function AiEngineIcon({
  id,
  size = 22,
  className = '',
  customColor,
}) {
  const norm = id?.toLowerCase();
  const engine = AI_ENGINES.find(
    (e) =>
      e.id === norm ||
      e.alias === norm ||
      e.name.toLowerCase() === norm ||
      (norm && norm.includes('google') && e.id === 'google-ai-overviews')
  );

  if (!engine) return null;

  // 1. Google AI Overviews / Google: Official 4-color Google "G" logo
  if ((engine.id === 'google-ai-overviews' || norm === 'google') && !customColor) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        aria-hidden="true"
        className={`shrink-0 transition-transform duration-200 ${className}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          minWidth: `${size}px`,
          minHeight: `${size}px`,
        }}
      >
        <title>{engine.title}</title>
        <path
          fill="#4285F4"
          d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v4.51h6.6c-.29 1.52-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.665-5.17 3.665-9.17z"
        />
        <path
          fill="#34A853"
          d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.12 0-5.77-2.1-6.72-4.93H1.25v3.15C3.26 21.36 7.33 24 12 24z"
        />
        <path
          fill="#FBBC05"
          d="M5.28 14.27c-.25-.72-.38-1.49-.38-2.27s.13-1.55.38-2.27V6.58H1.25C.45 8.18 0 10.03 0 12s.45 3.82 1.25 5.42l4.03-3.15z"
        />
        <path
          fill="#EA4335"
          d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.33 0 3.26 2.64 1.25 6.58l4.03 3.15c.95-2.83 3.6-4.98 6.72-4.98z"
        />
      </svg>
    );
  }

  // 2. Google Gemini: Official 4-point star with signature gradient
  if (engine.id === 'gemini' && !customColor) {
    return (
      <svg
        role="img"
        viewBox="0 0 24 24"
        width={size}
        height={size}
        aria-hidden="true"
        className={`shrink-0 transition-transform duration-200 ${className}`}
        style={{
          width: `${size}px`,
          height: `${size}px`,
          minWidth: `${size}px`,
          minHeight: `${size}px`,
        }}
      >
        <title>{engine.title}</title>
        <defs>
          <linearGradient id="gemini-brand-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#1BA1E3" />
            <stop offset="35%" stopColor="#5470FF" />
            <stop offset="70%" stopColor="#9B72CB" />
            <stop offset="100%" stopColor="#E879F9" />
          </linearGradient>
        </defs>
        <path d={engine.svgPath} fill="url(#gemini-brand-gradient)" />
      </svg>
    );
  }

  // 3. ChatGPT, Perplexity, Claude & Custom Color overrides
  const fillColor = customColor || engine.color || '#111111';

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${className}`}
      style={{
        fill: fillColor,
        width: `${size}px`,
        height: `${size}px`,
        minWidth: `${size}px`,
        minHeight: `${size}px`,
      }}
    >
      <title>{engine.title}</title>
      <path d={engine.svgPath} />
    </svg>
  );
}

/**
 * Inline Pill/Badge for text or section mentions
 */
export function AiEngineBadge({ id, className = '', size = 16 }) {
  const norm = id?.toLowerCase();
  const engine = AI_ENGINES.find(
    (e) =>
      e.id === norm ||
      e.alias === norm ||
      e.name.toLowerCase() === norm ||
      (norm && norm.includes('google') && e.id === 'google-ai-overviews')
  );

  if (!engine) return null;

  return (
    <span
      className={`inline-flex items-center gap-1.5 align-middle px-3 py-1 rounded-full text-xs font-sans font-medium bg-[#f5f5f7] hover:bg-white text-[#111111] border border-[#111111]/10 transition-colors ${className}`}
    >
      <AiEngineIcon id={engine.id} size={size} />
      <span>{engine.name}</span>
    </span>
  );
}

/**
 * Interactive Horizontal AI Engines Row
 */
export default function AiEnginesRow({
  className = '',
  showProvider = false,
  interactive = true,
}) {
  return (
    <div
      role="region"
      aria-label="Audited and optimized AI engines"
      className={`flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 ${className}`}
    >
      {AI_ENGINES.map((engine) => (
        <div
          key={engine.id}
          className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#111111]/10 bg-[#f5f5f7] hover:border-[#111111] text-[#111111] transition-all duration-200 group ${
            interactive ? 'cursor-default active:scale-[0.98]' : ''
          }`}
        >
          {/* Logo */}
          <div className="w-4 h-4 flex items-center justify-center transition-transform duration-200 group-hover:scale-110">
            <AiEngineIcon id={engine.id} size={15} />
          </div>

          {/* Engine Name */}
          <span className="text-xs font-sans font-medium text-[#111111] tracking-tight">
            {engine.name}
          </span>

          {/* Provider Pill */}
          {showProvider && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded-full bg-white text-[#111111]/60 border border-[#111111]/10">
              {engine.provider}
            </span>
          )}
        </div>
      ))}
    </div>
  );
}

/**
 * Detailed 5-card showcase grid for dedicated sections
 */
export function AiEnginesGrid({ className = '' }) {
  return (
    <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 ${className}`}>
      {AI_ENGINES.map((engine) => (
        <div
          key={engine.id}
          className="p-5 rounded-[24px] border border-[#111111]/10 bg-[#f4f5f8] hover:border-[#E60023] text-[#111111] transition-all duration-200 flex flex-col justify-between group"
        >
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="w-9 h-9 rounded-full flex items-center justify-center transition-transform duration-200 group-hover:scale-105 bg-white border border-[#111111]/10">
                <AiEngineIcon id={engine.id} size={18} />
              </div>
              <span className="text-[11px] font-mono font-normal px-2 py-0.5 rounded-full bg-white text-[#111111]/60 border border-[#111111]/10">
                {engine.provider}
              </span>
            </div>

            <h4 className="text-base font-medium mb-1 text-[#111111] leading-snug">
              {engine.name}
            </h4>

            <p className="text-xs leading-[1.5] line-clamp-2 mb-3 text-[#111111]/60">
              {engine.role}
            </p>
          </div>

          <div className="pt-3 border-t border-[#111111]/10 text-[11px] font-mono flex items-center gap-1.5 text-[#111111]/60">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E60023]" />
            <span>Audited & Optimized</span>
          </div>
        </div>
      ))}
    </div>
  );
}
