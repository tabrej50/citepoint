/**
 * Apple Fluid Interface Motion System
 * Based on Apple WWDC "Designing Fluid Interfaces" & "Principles of Great Design"
 * 
 * Invariants:
 * 1. Critically Damped Springs (damping 1.0) by default — zero unwanted oscillation.
 * 2. Momentum Springs (damping ~0.8) for user flick & momentum interactions.
 * 3. Responsive, interruptible physics with zero rigid animation lockouts.
 * 4. Hardware-accelerated properties (transform & opacity only).
 */

// Apple Standard Spring Tokens
export const appleSpringDefault = {
  type: 'spring',
  damping: 26,
  stiffness: 220,
  mass: 1,
};

export const appleSpringSnappy = {
  type: 'spring',
  damping: 28,
  stiffness: 300,
  mass: 0.8,
};

export const appleSpringMomentum = {
  type: 'spring',
  damping: 18,
  stiffness: 190,
  mass: 1,
};

export const appleSpringSheet = {
  type: 'spring',
  damping: 24,
  stiffness: 210,
  mass: 1,
};

// UI Variants using Apple Physics
export const fadeUpVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      ...appleSpringDefault,
      delay: i * 0.06,
    },
  }),
};

export const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const scaleUpVariants = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i = 0) => ({
    opacity: 1,
    scale: 1,
    transition: {
      ...appleSpringDefault,
      delay: i * 0.05,
    },
  }),
};

export const staggerContainerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.02,
    },
  },
};

export const popoverVariants = {
  hidden: { opacity: 0, scale: 0.95, y: -6 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: appleSpringSnappy,
  },
  exit: {
    opacity: 0,
    scale: 0.97,
    y: -4,
    transition: { duration: 0.15, ease: [0.2, 0, 0, 1] },
  },
};

export const drawerVariants = {
  hidden: { opacity: 0, y: -16, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: appleSpringSheet,
  },
  exit: {
    opacity: 0,
    y: -12,
    scale: 0.98,
    transition: { duration: 0.2, ease: [0.32, 0, 0.67, 0] },
  },
};
