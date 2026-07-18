import type { ReactNode } from "react";
import {
  Text as NativeText,
  type TextProps as NativeTextProps,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";

import type { AppTheme } from "../theme";

export type TextVariant = keyof AppTheme["typography"];
export type TextTone = "default" | "muted" | "completion" | "error";

export interface TextProps extends NativeTextProps {
  children?: ReactNode;
  tone?: TextTone;
  variant?: TextVariant;
}

export function Text({
  children,
  style,
  tone = "default",
  variant = "bodyMedium",
  ...props
}: TextProps) {
  return (
    <NativeText
      {...props}
      style={[
        styles.text(variant, tone),
        variant === "headlineLarge" && styles.responsiveHeadline,
        style,
      ]}
    >
      {children}
    </NativeText>
  );
}

const styles = StyleSheet.create((theme) => ({
  text: (variant: TextVariant, tone: TextTone) => ({
    ...theme.typography[variant],
    color: {
      completion: theme.colors.completionBright,
      default: theme.colors.text,
      error: theme.colors.error,
      muted: theme.colors.textMuted,
    }[tone],
  }),
  responsiveHeadline: {
    fontSize: {
      mobile: theme.typography.headlineLargeMobile.fontSize,
      desktop: theme.typography.headlineLarge.fontSize,
    },
    letterSpacing: {
      mobile: theme.typography.headlineLargeMobile.letterSpacing,
      desktop: theme.typography.headlineLarge.letterSpacing,
    },
    lineHeight: {
      mobile: theme.typography.headlineLargeMobile.lineHeight,
      desktop: theme.typography.headlineLarge.lineHeight,
    },
  },
}));
