import {
  borders,
  fontFamilies,
  palette,
  radii,
  sizes,
  spacing,
  typography,
} from "./tokens";

export const darkTheme = {
  colors: {
    background: palette.surface,
    canvas: palette.black,
    surface: palette.surfaceContainerLow,
    surfaceElevated: palette.surfaceContainerHigh,
    surfaceHighest: palette.surfaceContainerHighest,
    text: palette.onSurface,
    textMuted: palette.onSurfaceVariant,
    primary: palette.white,
    onPrimary: palette.black,
    border: palette.outlineVariant,
    borderStrong: palette.onSurface,
    completion: palette.completion,
    completionBright: palette.completionBright,
    onCompletion: palette.onCompletion,
    error: palette.error,
    errorContainer: palette.errorContainer,
  },
  fonts: fontFamilies,
  typography,
  spacing,
  borders,
  radii,
  sizes,
  space: (steps: number) => steps * spacing.unit,
} as const;

export const appThemes = {
  dark: darkTheme,
} as const;

export type AppTheme = typeof darkTheme;
