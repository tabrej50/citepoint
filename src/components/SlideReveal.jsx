import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

/**
 * SlideReveal — Apple Fluid Interface Scroll Engine
 * 
 * 1. Hardware Compositing: Animates strictly GPU-compositor properties (transform, opacity).
 *    Zero expensive raster operations (no filter: blur during scroll).
 * 2. Reduced Motion: Respects OS prefers-reduced-motion, falling back to gentle opacity fade.
 * 3. Spatial Restraint: Micro-displacements (20-28px) with Apple spring / easing curve.
 */

const VARIANT_MAP = {
  up: {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0 },
  },
  down: {
    hidden: { opacity: 0, y: -24 },
    visible: { opacity: 1, y: 0 },
  },
  left: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  right: {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  'diagonal-left': {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  'diagonal-right': {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  },
  'scale-up': {
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: { opacity: 1, y: 0, scale: 1 },
  },
};

export function SlideReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  className = '',
  viewportMargin = '0px',
  once = true,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const selectedVariant = VARIANT_MAP[direction] || VARIANT_MAP.up;

  const hiddenState = shouldReduceMotion ? { opacity: 0 } : selectedVariant.hidden;
  const visibleState = shouldReduceMotion ? { opacity: 1 } : selectedVariant.visible;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={{
        hidden: hiddenState,
        visible: {
          ...visibleState,
          transition: shouldReduceMotion
            ? { duration: 0.2, delay }
            : {
                duration,
                delay,
                ease: [0.16, 1, 0.3, 1], // Apple Standard Deceleration
              },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export default SlideReveal;

/**
 * SlideStaggerContainer & SlideStaggerItem
 * Progressive stagger with Apple fluid rhythm
 */
export function SlideStaggerContainer({
  children,
  staggerDelay = 0.08,
  className = '',
  viewportMargin = '0px',
  once = true,
  ...props
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.03,
          },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}

export function SlideStaggerItem({
  children,
  direction = 'up',
  className = '',
  duration = 0.45,
  ...props
}) {
  const shouldReduceMotion = useReducedMotion();
  const selectedVariant = VARIANT_MAP[direction] || VARIANT_MAP.up;

  const hiddenState = shouldReduceMotion ? { opacity: 0 } : selectedVariant.hidden;
  const visibleState = shouldReduceMotion ? { opacity: 1 } : selectedVariant.visible;

  return (
    <motion.div
      variants={{
        hidden: hiddenState,
        visible: {
          ...visibleState,
          transition: shouldReduceMotion
            ? { duration: 0.2 }
            : {
                duration,
                ease: [0.16, 1, 0.3, 1],
              },
        },
      }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
