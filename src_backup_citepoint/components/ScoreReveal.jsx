import React, { useState, useEffect, useRef } from 'react';

/**
 * Returns smoothly interpolated RGB color based on score value:
 * - below 40: danger/red (#EF4444)
 * - 40–69: warning/amber (#F59E0B)
 * - 70 and above: success/green (#10B981)
 * Seamlessly blends across thresholds (36-44 and 66-74).
 */
export function getScoreColor(val) {
  const red = [239, 68, 68];     // #EF4444 danger
  const amber = [245, 158, 11];  // #F59E0B warning
  const green = [16, 185, 129];  // #10B981 success

  if (val <= 36) {
    return `rgb(${red[0]}, ${red[1]}, ${red[2]})`;
  }
  if (val < 44) {
    const ratio = (val - 36) / 8;
    const r = Math.round(red[0] + (amber[0] - red[0]) * ratio);
    const g = Math.round(red[1] + (amber[1] - red[1]) * ratio);
    const b = Math.round(red[2] + (amber[2] - red[2]) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  }
  if (val <= 66) {
    return `rgb(${amber[0]}, ${amber[1]}, ${amber[2]})`;
  }
  if (val < 74) {
    const ratio = (val - 66) / 8;
    const r = Math.round(amber[0] + (green[0] - amber[0]) * ratio);
    const g = Math.round(amber[1] + (green[1] - amber[1]) * ratio);
    const b = Math.round(amber[2] + (green[2] - amber[2]) * ratio);
    return `rgb(${r}, ${g}, ${b})`;
  }
  return `rgb(${green[0]}, ${green[1]}, ${green[2]})`;
}

/**
 * Cubic ease-out function: 1 - (1 - t)^3
 * Decelerates near the end so animation settles naturally.
 */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

/**
 * ScoreReveal: Reusable circular gauge that animates from 0 to a target score
 * on intersection trigger, with synchronized ring filling, continuous recoloring,
 * and settle-bounce.
 *
 * @param {number} score - Target score (0-100)
 * @param {string} label - Contextual label below the gauge (e.g. "AI visibility score")
 * @param {number} maxScore - Maximum possible score (default 100)
 * @param {number} size - Outer diameter of the SVG ring in px (default 160)
 * @param {number} strokeWidth - Thickness of the gauge stroke in px (default 10)
 * @param {number} duration - Animation duration in ms (default 1650)
 * @param {boolean} isDark - Whether rendered on a dark background (default true)
 * @param {boolean} showMax - Whether to display small "/100" next to the number (default false)
 * @param {string} className - Optional wrapper CSS class
 */
export default function ScoreReveal({
  score = 78,
  label = 'AI visibility score',
  maxScore = 100,
  size = 160,
  strokeWidth = 10,
  duration = 1650,
  isDark = true,
  showMax = false,
  className = '',
}) {
  const targetScore = Math.max(0, Math.min(Number(score) || 0, maxScore));
  const [currentScore, setCurrentScore] = useState(0);
  const [isBounced, setIsBounced] = useState(false);
  const containerRef = useRef(null);
  const hasTriggeredRef = useRef(false);
  const animFrameRef = useRef(null);

  // SVG ring geometry calculations
  const center = size / 2;
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const fillRatio = Math.max(0, Math.min(currentScore / maxScore, 1));
  const strokeDashoffset = circumference - fillRatio * circumference;

  // Track & dynamic color values
  const currentColor = getScoreColor(currentScore);
  const trackColor = isDark ? 'rgba(255, 255, 255, 0.08)' : 'rgba(11, 25, 41, 0.08)';

  // Start animated count-up loop
  const startAnimation = () => {
    // Respect user's reduced-motion preference
    if (
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setCurrentScore(targetScore);
      setIsBounced(true);
      return;
    }

    const startTime = performance.now();

    const frame = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const nextScore = easedProgress * targetScore;

      setCurrentScore(nextScore);

      if (progress < 1) {
        animFrameRef.current = requestAnimationFrame(frame);
      } else {
        // Final settle: ensure target is exact and trigger bounce
        setCurrentScore(targetScore);
        setIsBounced(true);
      }
    };

    animFrameRef.current = requestAnimationFrame(frame);
  };

  useEffect(() => {
    // Trigger via IntersectionObserver so it only plays once on first scroll into view
    const el = containerRef.current;
    if (!el) return;

    if (hasTriggeredRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasTriggeredRef.current) {
          hasTriggeredRef.current = true;
          startAnimation();
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
    };
  }, [targetScore, duration]);

  // Smoothly update score if prop changes after initial reveal
  useEffect(() => {
    if (!hasTriggeredRef.current) return;
    const fromScore = currentScore;
    if (Math.round(fromScore) === targetScore) return;

    let updateFrame = null;
    const start = performance.now();
    const updateDuration = 550;

    const animateUpdate = (now) => {
      const elapsed = now - start;
      const p = Math.min(elapsed / updateDuration, 1);
      const eased = easeOutCubic(p);
      const next = fromScore + (targetScore - fromScore) * eased;
      setCurrentScore(next);

      if (p < 1) {
        updateFrame = requestAnimationFrame(animateUpdate);
      } else {
        setCurrentScore(targetScore);
      }
    };

    updateFrame = requestAnimationFrame(animateUpdate);
    return () => {
      if (updateFrame) cancelAnimationFrame(updateFrame);
    };
  }, [targetScore]);

  const displayInt = Math.round(currentScore);

  return (
    <div
      ref={containerRef}
      role="progressbar"
      aria-valuenow={displayInt}
      aria-valuemin={0}
      aria-valuemax={maxScore}
      aria-label={`${label}: ${displayInt} out of ${maxScore}`}
      className={`inline-flex flex-col items-center justify-center ${className}`}
    >
      {/* SVG Circular Gauge Container */}
      <div
        className="relative flex items-center justify-center"
        style={{ width: size, height: size }}
      >
        <svg
          width={size}
          height={size}
          viewBox={`0 0 ${size} ${size}`}
          className="overflow-visible"
          aria-hidden="true"
        >
          {/* Static Neutral Background Track Circle */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />

          {/* Animated Progress Circle (starts at 12 o'clock, rounded line caps) */}
          <circle
            cx={center}
            cy={center}
            r={radius}
            fill="none"
            stroke={currentColor}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            style={{
              transform: 'rotate(-90deg)',
              transformOrigin: `${center}px ${center}px`,
              transition: 'stroke 300ms ease-out',
            }}
          />
        </svg>

        {/* Centered Large Animated Number */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none select-none">
          <div className="flex items-baseline justify-center">
            <span
              className={`font-heading font-bold text-[40px] leading-none tracking-tight inline-block ${
                isBounced ? 'animate-score-bounce' : ''
              }`}
              style={{
                color: currentColor,
                transformOrigin: 'center center',
                transition: 'color 300ms ease-out',
              }}
            >
              {displayInt}
            </span>
            {showMax && (
              <span
                className="text-xs font-mono font-medium ml-0.5 opacity-60"
                style={{ color: currentColor }}
              >
                /{maxScore}
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Contextual Label Below the Ring */}
      {label && (
        <span
          className={`text-xs font-mono uppercase tracking-wider font-medium mt-3 text-center ${
            isDark ? 'text-slate-400' : 'text-slate-600'
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}
