import type { ReactNode } from "react";
import {
  ActivityIndicator,
  Pressable,
  type PressableProps,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Text } from "./Text";

export type ButtonVariant = "primary" | "secondary" | "ghost";

export interface ButtonProps extends Omit<PressableProps, "children"> {
  children: ReactNode;
  loading?: boolean;
  variant?: ButtonVariant;
}

export function Button({
  children,
  disabled,
  loading = false,
  style,
  variant = "primary",
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;

  return (
    <Pressable
      {...props}
      accessibilityRole="button"
      accessibilityState={{ busy: loading, disabled: isDisabled }}
      disabled={isDisabled}
      style={({ pressed }) => [
        styles.button(variant),
        pressed && styles.pressed,
        isDisabled && styles.disabled,
        typeof style === "function" ? style({ pressed }) : style,
      ]}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === "primary" ? "#000000" : "#FFFFFF"}
          size="small"
        />
      ) : (
        <Text
          numberOfLines={1}
          style={styles.label(variant)}
          variant="labelMedium"
        >
          {children}
        </Text>
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => ({
  button: (variant: ButtonVariant) => ({
    minHeight: theme.sizes.minimumTouchTarget,
    minWidth: theme.sizes.minimumTouchTarget,
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderRadius: theme.radii.none,
    borderWidth: variant === "primary" ? 0 : theme.borders.thin,
    borderColor:
      variant === "ghost" ? theme.colors.border : theme.colors.borderStrong,
    backgroundColor:
      variant === "primary" ? theme.colors.primary : "transparent",
    alignItems: "center",
    justifyContent: "center",
  }),
  label: (variant: ButtonVariant) => ({
    color:
      variant === "primary" ? theme.colors.onPrimary : theme.colors.text,
    textTransform: "uppercase",
  }),
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.4,
  },
}));
