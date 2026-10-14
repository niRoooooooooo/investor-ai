import { Variants, Transition } from 'framer-motion';

/**
 * Spring physics definitions
 */
export const springs = {
  gentle: { type: 'spring', damping: 25, stiffness: 200 } as Transition,
  snappy: { type: 'spring', damping: 20, stiffness: 300 } as Transition,
  bouncy: { type: 'spring', damping: 12, stiffness: 250 } as Transition,
  slowFloat: { duration: 3.5, ease: 'easeInOut', repeat: Infinity, repeatType: 'reverse' } as Transition,
};

/**
 * Global Page Transition: fade and slide 24px in 300ms
 */
export const pageTransitionVariants: Variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, y: -16, transition: { duration: 0.2, ease: 'easeIn' } },
};

/**
 * Micro Button Animations: lift 2px and glow on hover, press down on click
 */
export const buttonInteraction = {
  whileHover: { y: -2, transition: { duration: 0.15 } },
  whileTap: { scale: 0.98, y: 0 },
};

/**
 * Card Hover Animation: rise 4px on hover
 */
export const cardHoverVariants: Variants = {
  initial: { y: 0 },
  hover: { y: -4, transition: { duration: 0.2, ease: 'easeOut' } },
};

export const cardHover = {
  whileHover: { y: -4, transition: { duration: 0.2 } },
};

/**
 * Staggered Container & Children: 80ms stagger
 */
export const staggerContainer = (staggerDelay = 0.08): Variants => ({
  initial: {},
  animate: { transition: { staggerChildren: staggerDelay } },
});

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: [0.16, 1, 0.3, 1] } },
};

/**
 * Dialog / Modal Scale: scale from 95% with backdrop blur
 */
export const dialogVariants: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.25, ease: [0.16, 1, 0.3, 1] } },
  exit: { opacity: 0, scale: 0.95, transition: { duration: 0.2 } },
};

/**
 * Law Drawer Slide-In (from right edge)
 */
export const lawDrawerVariants: Variants = {
  initial: { x: '100%' },
  animate: { x: 0, transition: springs.gentle },
  exit: { x: '100%', transition: { duration: 0.25, ease: 'easeIn' } },
};

/**
 * Toast Slide-In (from top-right)
 */
export const toastVariants: Variants = {
  initial: { opacity: 0, x: 80, scale: 0.9 },
  animate: { opacity: 1, x: 0, scale: 1, transition: springs.snappy },
  exit: { opacity: 0, x: 80, scale: 0.9, transition: { duration: 0.2 } },
};

/**
 * Error OTP Shake Animation
 */
export const shakeVariants: Variants = {
  shake: {
    x: [0, -8, 8, -6, 6, -3, 3, 0],
    transition: { duration: 0.4, ease: 'easeInOut' },
  },
};

/**
 * SVG Checkmark / Scanning Line Path Draw
 */
export const svgPathDraw: Variants = {
  hidden: { pathLength: 0, opacity: 0 },
  visible: { pathLength: 1, opacity: 1, transition: { duration: 0.8, ease: 'easeOut' } },
};

/**
 * Fallback for reduced motion: convert translation to pure opacity fade
 */
export const getAccessibleVariant = (normalVariant: Variants, prefersReduced: boolean): Variants => {
  if (!prefersReduced) return normalVariant;
  return {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 0.2 } },
    exit: { opacity: 0, transition: { duration: 0.15 } },
  };
};
