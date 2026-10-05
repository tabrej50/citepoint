import React from 'react';
import { motion } from 'motion/react';

/**
 * SlideReveal
 * 
 * Reusable, high-performance scroll-triggered slide reveal animations
 * supporting multiple distinct directional choreographies:
 * 
 * Directions:
 * - 'up': Slide in upward from bottom (y: 45 -> 0)
 * - 'down': Slide in downward from top (y: -45 -> 0)
 * - 'left': Slide in from the left toward right (x: -55 -> 0)
 * - 'right': Slide in from the right toward left (x: 55 -> 0)
 * - 'diagonal-left': Slide in from bottom-left (x: -40, y: 35 -> 0, 0)
 * - 'diagonal-right': Slide in from bottom-right (x: 40, y: 35 -> 0, 0)
 * - 'scale-up': Slide and scale expand (y: 35, scale: 0.94 -> 0, 1)
 */

const VARIANT_MAP = {
  up: {
    hidden: { opacity: 0, y: 45, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  down: {
    hidden: { opacity: 0, y: -45, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
  },
  left: {
    hidden: { opacity: 0, x: -55, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  right: {
    hidden: { opacity: 0, x: 55, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, filter: 'blur(0px)' },
  },
  'diagonal-left': {
    hidden: { opacity: 0, x: -40, y: 35, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
  },
  'diagonal-right': {
    hidden: { opacity: 0, x: 40, y: 35, filter: 'blur(4px)' },
    visible: { opacity: 1, x: 0, y: 0, filter: 'blur(0px)' },
  },
  'scale-up': {
    hidden: { opacity: 0, y: 35, scale: 0.94, filter: 'blur(4px)' },
    visible: { opacity: 1, y: 0, scale: 1, filter: 'blur(0px)' },
  },
};

export function SlideReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.65,
  className = '',
  viewportMargin = '-60px',
  once = true,
  ...props
}) {
  const selectedVariant = VARIANT_MAP[direction] || VARIANT_MAP.up;

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: viewportMargin }}
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
            duration,
            delay,
            ease: [0.16, 1, 0.3, 1], // Luxury Apple/Stripe curve
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
 * For card grids where child cards slide up with progressive delay
 */
export function SlideStaggerContainer({
  children,
  staggerDelay = 0.1,
  className = '',
  viewportMargin = '-50px',
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
            delayChildren: 0.05,
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
  duration = 0.6,
  ...props
}) {
  const selectedVariant = VARIANT_MAP[direction] || VARIANT_MAP.up;

  return (
    <motion.div
      variants={{
        hidden: selectedVariant.hidden,
        visible: {
          ...selectedVariant.visible,
          transition: {
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
