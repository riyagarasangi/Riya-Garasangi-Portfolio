import type { Variants } from 'framer-motion';

const isReduced = typeof window !== 'undefined' ? window.matchMedia('(prefers-reduced-motion: reduce)').matches : false;

export const fadeUp: Variants = isReduced
  ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0 } } }
  : {
      hidden: { opacity: 0, y: 40 },
      visible: (i: number = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.6,
          delay: i * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }),
    };

export const fadeDown: Variants = isReduced
  ? { hidden: { opacity: 1, y: 0 }, visible: { opacity: 1, y: 0, transition: { duration: 0 } } }
  : {
      hidden: { opacity: 0, y: -30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: 'easeOut' },
      },
    };

export const slideLeft: Variants = isReduced
  ? { hidden: { opacity: 1, x: 0 }, visible: { opacity: 1, x: 0, transition: { duration: 0 } } }
  : {
      hidden: { opacity: 0, x: -60 },
      visible: (i: number = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: i * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }),
    };

export const slideRight: Variants = isReduced
  ? { hidden: { opacity: 1, x: 0 }, visible: { opacity: 1, x: 0, transition: { duration: 0 } } }
  : {
      hidden: { opacity: 0, x: 60 },
      visible: (i: number = 0) => ({
        opacity: 1,
        x: 0,
        transition: {
          duration: 0.6,
          delay: i * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }),
    };

export const zoomIn: Variants = isReduced
  ? { hidden: { opacity: 1, scale: 1 }, visible: { opacity: 1, scale: 1, transition: { duration: 0 } } }
  : {
      hidden: { opacity: 0, scale: 0.85 },
      visible: (i: number = 0) => ({
        opacity: 1,
        scale: 1,
        transition: {
          duration: 0.5,
          delay: i * 0.1,
          ease: [0.25, 0.46, 0.45, 0.94],
        },
      }),
    };

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: isReduced
      ? { duration: 0 }
      : {
          staggerChildren: 0.1,
          delayChildren: 0.1,
        },
  },
};

export const scaleUp: Variants = isReduced
  ? { hidden: { opacity: 1, scale: 1 }, visible: { opacity: 1, scale: 1, transition: { duration: 0 } } }
  : {
      hidden: { opacity: 0, scale: 0.9 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5, ease: 'easeOut' },
      },
    };

export const viewportConfig = {
  triggerOnce: true,
  threshold: 0.2,
};
