/**
 * Design System Spacing & Layout
 * Source: Stitch – OriSistem Landing Page Blueprint
 */

export const spacing = {
  /** Base unit – all spacing is a multiple of 8px */
  base:            '8px',

  /** Page margins */
  marginMobile:    '16px',
  marginDesktop:   '64px',

  /** Column gutter */
  gutter:          '24px',

  /** Max content width */
  containerMax:    '1280px',
} as const

export const borderRadius = {
  DEFAULT: '0.25rem',  // 4px
  sm:      '0.25rem',  // 4px
  md:      '0.375rem', // 6px
  lg:      '0.5rem',   // 8px
  xl:      '0.75rem',  // 12px
  '2xl':   '1rem',     // 16px
  '3xl':   '1.5rem',   // 24px
  full:    '9999px',
} as const

export const shadows = {
  sm:  '0 1px 2px 0 rgb(0 0 0 / 0.05)',
  md:  '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
  lg:  '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  xl:  '0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
} as const
