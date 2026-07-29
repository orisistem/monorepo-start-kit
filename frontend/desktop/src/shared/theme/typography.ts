/**
 * Design System Typography
 * Source: Stitch – OriSistem Landing Page Blueprint
 * Fonts: Outfit (display/headline) + Inter (body/label)
 */

export const typography = {
  fontFamily: {
    /** Headlines and display text */
    display:  ['Outfit', 'sans-serif'],
    headline: ['Outfit', 'sans-serif'],
    /** Body copy and labels */
    body:     ['Inter', 'sans-serif'],
    label:    ['Inter', 'sans-serif'],
    /** Legacy aliases */
    sans: ['Inter', 'sans-serif'],
    mono: ['JetBrains Mono', 'monospace'],
  },

  /**
   * Type scale – values mirror Stitch Tailwind config.
   * Each entry: [fontSize, { lineHeight, letterSpacing?, fontWeight }]
   */
  textStyles: {
    'display-lg': {
      fontSize:      '48px',
      lineHeight:    '56px',
      letterSpacing: '-0.02em',
      fontWeight:    700,
      fontFamily:    'Outfit',
    },
    'display-lg-mobile': {
      fontSize:      '32px',
      lineHeight:    '40px',
      letterSpacing: '-0.01em',
      fontWeight:    700,
      fontFamily:    'Outfit',
    },
    'headline-md': {
      fontSize:   '24px',
      lineHeight: '32px',
      fontWeight: 600,
      fontFamily: 'Outfit',
    },
    'body-lg': {
      fontSize:   '18px',
      lineHeight: '28px',
      fontWeight: 400,
      fontFamily: 'Inter',
    },
    'body-md': {
      fontSize:   '16px',
      lineHeight: '24px',
      fontWeight: 400,
      fontFamily: 'Inter',
    },
    'label-sm': {
      fontSize:      '12px',
      lineHeight:    '16px',
      letterSpacing: '0.05em',
      fontWeight:    600,
      fontFamily:    'Inter',
    },
  },

  fontWeight: {
    regular:   400,
    medium:    500,
    semibold:  600,
    bold:      700,
    extrabold: 800,
  },
} as const

export type TextStyleKey = keyof typeof typography.textStyles
