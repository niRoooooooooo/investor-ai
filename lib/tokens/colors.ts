/**
 * Tor Lawyer - Design Tokens: Colors
 * Extracted from approved design reference (DESIGN.md and screen tailwind configs)
 */

export const colors = {
  // Brand Canvas & Structure
  primary: '#070235',
  'on-primary': '#FFFFFF',
  'primary-container': '#1E1B4B',
  'on-primary-container': '#8683BA',
  'inverse-primary': '#C4C1FB',
  'primary-fixed': '#E3DFFF',
  'primary-fixed-dim': '#C4C1FB',
  'on-primary-fixed': '#181445',
  'on-primary-fixed-variant': '#444173',

  // Secondary Accents
  secondary: '#5654A8',
  'on-secondary': '#FFFFFF',
  'secondary-container': '#A7A5FF',
  'on-secondary-container': '#393689',
  'secondary-fixed': '#E2DFFF',
  'secondary-fixed-dim': '#C3C0FF',
  'on-secondary-fixed': '#100563',
  'on-secondary-fixed-variant': '#3E3C8F',

  // Tertiary
  tertiary: '#000928',
  'on-tertiary': '#FFFFFF',
  'tertiary-container': '#001D58',
  'on-tertiary-container': '#5382FF',
  'tertiary-fixed': '#DBE1FF',
  'tertiary-fixed-dim': '#B4C5FF',
  'on-tertiary-fixed': '#00174B',
  'on-tertiary-fixed-variant': '#003EA8',

  // Surfaces & Backgrounds
  background: '#FAF8FF',
  'on-background': '#131B2E',
  surface: '#FAF8FF',
  'on-surface': '#131B2E',
  'on-surface-variant': '#47464F',
  'surface-dim': '#D2D9F4',
  'surface-bright': '#FAF8FF',
  'surface-container-lowest': '#FFFFFF',
  'surface-container-low': '#F2F3FF',
  'surface-container': '#EAEDFF',
  'surface-container-high': '#E2E7FF',
  'surface-container-highest': '#DAE2FD',
  'surface-variant': '#DAE2FD',
  'surface-tint': '#5B598C',
  'inverse-surface': '#283044',
  'inverse-on-surface': '#EEF0FF',
  outline: '#787680',
  'outline-variant': '#C8C5D0',

  // Semantic Errors & System Alerts
  error: '#BA1A1A',
  'on-error': '#FFFFFF',
  'error-container': '#FFDAD6',
  'on-error-container': '#93000A',

  // Verdict Semantics (as defined in DESIGN.md)
  verdict: {
    looksFine: {
      text: '#15803D',
      bg: '#DCFCE7',
      border: '#86EFAC',
    },
    needsChanges: {
      text: '#B45309',
      bg: '#FEF3C7',
      border: '#FDE68A',
    },
    highRisk: {
      text: '#E11D48',
      bg: '#FFE4E6',
      border: '#FECDD3',
    },
    consultLawyer: {
      text: '#4338CA',
      bg: '#EEF2FF',
      border: '#C7D2FE',
    },
  },
} as const;

export type ColorToken = keyof typeof colors;
