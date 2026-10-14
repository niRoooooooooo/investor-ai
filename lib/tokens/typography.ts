/**
 * Tor Lawyer - Design Tokens: Typography
 * Extracted from approved design reference (DESIGN.md and screen tailwind configs)
 */

export const typography = {
  fontFamilies: {
    latin: 'Inter, system-ui, -apple-system, sans-serif',
    bengali: "'Noto Sans Bengali', system-ui, -apple-system, sans-serif",
  },
  fontSize: {
    'display-lg': {
      fontSize: '40px',
      lineHeight: '48px',
      letterSpacing: '-0.02em',
      fontWeight: '700',
    },
    'display-lg-mobile': {
      fontSize: '30px',
      lineHeight: '38px',
      letterSpacing: '-0.015em',
      fontWeight: '700',
    },
    'headline-xl': {
      fontSize: '32px',
      lineHeight: '40px',
      letterSpacing: '-0.02em',
      fontWeight: '700',
    },
    'headline-xl-mobile': {
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '-0.01em',
      fontWeight: '600',
    },
    'headline-lg': {
      fontSize: '24px',
      lineHeight: '32px',
      letterSpacing: '-0.01em',
      fontWeight: '600',
    },
    'headline-md': {
      fontSize: '20px',
      lineHeight: '28px',
      letterSpacing: '-0.005em',
      fontWeight: '600',
    },
    'headline-sm': {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '600',
    },
    'body-lg': {
      fontSize: '16px',
      lineHeight: '26px',
      fontWeight: '400',
    },
    'body-md': {
      fontSize: '14px',
      lineHeight: '22px',
      fontWeight: '400',
    },
    'body-sm': {
      fontSize: '12px',
      lineHeight: '18px',
      fontWeight: '400',
    },
    'label-lg': {
      fontSize: '14px',
      lineHeight: '20px',
      letterSpacing: '0.01em',
      fontWeight: '600',
    },
    'label-md': {
      fontSize: '12px',
      lineHeight: '16px',
      letterSpacing: '0.02em',
      fontWeight: '500',
    },
    'label-sm': {
      fontSize: '11px',
      lineHeight: '14px',
      letterSpacing: '0.04em',
      fontWeight: '600',
    },
  },
} as const;
