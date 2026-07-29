/**
 * Design System Colors
 * Source: Stitch – OriSistem Landing Page Blueprint
 * Palette: Material Design 3 (dark scheme)
 */

export const colors = {
  // Core surfaces
  background:              '#10131a',
  surface:                 '#10131a',
  surfaceDim:              '#10131a',
  surfaceBright:           '#363941',
  surfaceVariant:          '#32353c',
  surfaceTint:             '#adc6ff',

  // Surface containers (elevation)
  surfaceContainerLowest:  '#0b0e15',
  surfaceContainerLow:     '#191b23',
  surfaceContainer:        '#1d2027',
  surfaceContainerHigh:    '#272a31',
  surfaceContainerHighest: '#32353c',

  // Primary
  primary:                 '#adc6ff',
  onPrimary:               '#002e6a',
  primaryContainer:        '#4d8eff',
  onPrimaryContainer:      '#00285d',
  primaryFixed:            '#d8e2ff',
  primaryFixedDim:         '#adc6ff',
  onPrimaryFixed:          '#001a42',
  onPrimaryFixedVariant:   '#004395',
  inversePrimary:          '#005ac2',

  // Secondary
  secondary:               '#4edea3',
  onSecondary:             '#003824',
  secondaryContainer:      '#00a572',
  onSecondaryContainer:    '#00311f',
  secondaryFixed:          '#6ffbbe',
  secondaryFixedDim:       '#4edea3',
  onSecondaryFixed:        '#002113',
  onSecondaryFixedVariant: '#005236',

  // Tertiary
  tertiary:                '#ffb786',
  onTertiary:              '#502400',
  tertiaryContainer:       '#df7412',
  onTertiaryContainer:     '#461f00',
  tertiaryFixed:           '#ffdcc6',
  tertiaryFixedDim:        '#ffb786',
  onTertiaryFixed:         '#311400',
  onTertiaryFixedVariant:  '#723600',

  // Semantic
  error:                   '#ffb4ab',
  onError:                 '#690005',
  errorContainer:          '#93000a',
  onErrorContainer:        '#ffdad6',

  // Text / on-surface
  onBackground:            '#e1e2ec',
  onSurface:               '#e1e2ec',
  onSurfaceVariant:        '#c2c6d6',
  inverseSurface:          '#e1e2ec',
  inverseOnSurface:        '#2e3038',

  // Outline
  outline:                 '#8c909f',
  outlineVariant:          '#424754',
} as const

export type ColorKey = keyof typeof colors
