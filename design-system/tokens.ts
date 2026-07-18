export const palette = {
  black: "#000000",
  white: "#FFFFFF",
  surface: "#121414",
  surfaceDim: "#121414",
  surfaceBright: "#38393A",
  surfaceContainerLowest: "#0D0F0F",
  surfaceContainerLow: "#1A1C1C",
  surfaceContainer: "#1E2020",
  surfaceContainerHigh: "#282A2B",
  surfaceContainerHighest: "#333535",
  onSurface: "#E2E2E2",
  onSurfaceVariant: "#C4C7C8",
  outline: "#8E9192",
  outlineVariant: "#444748",
  completion: "#2E7D32",
  completionBright: "#88D982",
  completionContainer: "#005B14",
  onCompletion: "#FFFFFF",
  error: "#FFB4AB",
  errorContainer: "#93000A",
  onError: "#690005",
} as const;

export const fontFamilies = {
  body: "Geist_400Regular",
  bodyMedium: "Geist_600SemiBold",
  bodyBold: "Geist_700Bold",
  mono: "JetBrainsMono_400Regular",
  monoMedium: "JetBrainsMono_500Medium",
} as const;

export const typography = {
  headlineLarge: {
    fontFamily: fontFamilies.bodyBold,
    fontSize: 48,
    lineHeight: 53,
    letterSpacing: -0.96,
  },
  headlineLargeMobile: {
    fontFamily: fontFamilies.bodyBold,
    fontSize: 32,
    lineHeight: 38,
    letterSpacing: -0.32,
  },
  headlineMedium: {
    fontFamily: fontFamilies.bodyMedium,
    fontSize: 24,
    lineHeight: 31,
    letterSpacing: 0,
  },
  bodyLarge: {
    fontFamily: fontFamilies.body,
    fontSize: 18,
    lineHeight: 27,
    letterSpacing: 0,
  },
  bodyMedium: {
    fontFamily: fontFamilies.body,
    fontSize: 16,
    lineHeight: 24,
    letterSpacing: 0,
  },
  labelMedium: {
    fontFamily: fontFamilies.monoMedium,
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 0.7,
  },
  labelSmall: {
    fontFamily: fontFamilies.mono,
    fontSize: 12,
    lineHeight: 14,
    letterSpacing: 0.6,
  },
} as const;

export const spacing = {
  unit: 4,
  none: 0,
  xxs: 4,
  xs: 8,
  sm: 12,
  md: 16,
  mobileMargin: 20,
  gutter: 24,
  lg: 32,
  tabletMargin: 32,
  xl: 48,
  desktopMargin: 64,
} as const;

export const borders = {
  thin: 1,
  strong: 2,
} as const;

export const radii = {
  none: 0,
} as const;

export const sizes = {
  completionControl: 24,
  minimumTouchTarget: 44,
  contentMaxWidth: 1200,
} as const;

export const breakpoints = {
  mobile: 0,
  tablet: 768,
  desktop: 1024,
} as const;
