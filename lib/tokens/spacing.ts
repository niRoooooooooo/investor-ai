/**
 * Tor Lawyer - Design Tokens: Spacing & Radii
 * Extracted from approved design reference (DESIGN.md and screen tailwind configs)
 */

export const spacing = {
  'space-xs': '0.5rem',     // 8px
  'space-sm': '0.75rem',    // 12px
  'space-md': '1rem',       // 16px
  'space-lg': '1.5rem',     // 24px
  'space-xl': '2rem',       // 32px
  gutter: '1.5rem',         // 24px
  'gutter-mobile': '1rem',  // 16px
  margin: '2rem',           // 32px
  'margin-mobile': '1rem',  // 16px
} as const;

export const borderRadius = {
  sm: '0.25rem',            // 4px
  DEFAULT: '0.5rem',        // 8px
  md: '0.75rem',            // 12px
  lg: '1rem',               // 16px
  xl: '1.5rem',             // 24px
  full: '9999px',
} as const;

export const shadows = {
  level0: 'none',
  level1: '0 1px 3px 0 rgba(15, 23, 42, 0.04), 0 1px 2px -1px rgba(15, 23, 42, 0.03)',
  level2: '0 10px 15px -3px rgba(15, 23, 42, 0.08), 0 4px 6px -4px rgba(15, 23, 42, 0.03)',
  level3: '0 20px 25px -5px rgba(15, 23, 42, 0.1), 0 8px 10px -6px rgba(15, 23, 42, 0.04)',
} as const;
