import { forwardRef, useState } from "react";
import {
  TextInput as NativeTextInput,
  type TextInputProps as NativeTextInputProps,
  View,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Text } from "./Text";

export interface TextInputProps extends NativeTextInputProps {
  error?: string;
  label?: string;
}

export const TextInput = forwardRef<NativeTextInput, TextInputProps>(
  function TextInput(
    {
      accessibilityLabel,
      error,
      label,
      onBlur,
      onFocus,
      style,
      ...props
    },
    ref,
  ) {
    const [focused, setFocused] = useState(false);

    return (
      <View style={styles.field}>
        {label ? (
          <Text nativeID={`${props.testID ?? "text-input"}-label`} variant="labelSmall">
            {label}
          </Text>
        ) : null}
        <NativeTextInput
          {...props}
          ref={ref}
          accessibilityLabel={accessibilityLabel ?? label}
          accessibilityLabelledBy={
            label ? `${props.testID ?? "text-input"}-label` : undefined
          }
          onBlur={(event) => {
            setFocused(false);
            onBlur?.(event);
          }}
          onFocus={(event) => {
            setFocused(true);
            onFocus?.(event);
          }}
          placeholderTextColor={styles.placeholder.color}
          style={[
            styles.input,
            focused && styles.focused,
            Boolean(error) && styles.invalid,
            style,
          ]}
        />
        {error ? (
          <Text accessibilityLiveRegion="polite" tone="error" variant="labelSmall">
            {error}
          </Text>
        ) : null}
      </View>
    );
  },
);

const styles = StyleSheet.create((theme) => ({
  field: {
    gap: theme.spacing.xs,
  },
  input: {
    minHeight: theme.sizes.minimumTouchTarget,
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderWidth: theme.borders.thin,
    borderColor: theme.colors.borderStrong,
    borderRadius: theme.radii.none,
    backgroundColor: "transparent",
    color: theme.colors.text,
    fontFamily: theme.fonts.mono,
    fontSize: theme.typography.bodyMedium.fontSize,
    lineHeight: theme.typography.bodyMedium.lineHeight,
  },
  focused: {
    borderWidth: theme.borders.strong,
    borderColor: theme.colors.primary,
  },
  invalid: {
    borderColor: theme.colors.error,
  },
  placeholder: {
    color: theme.colors.textMuted,
  },
}));
