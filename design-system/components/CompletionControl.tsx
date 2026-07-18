import { Pressable, type PressableProps, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Text } from "./Text";

export interface CompletionControlProps
  extends Omit<PressableProps, "children" | "onPress"> {
  completed: boolean;
  label: string;
  onValueChange?: (completed: boolean) => void;
}

export function CompletionControl({
  completed,
  disabled,
  label,
  onValueChange,
  style,
  ...props
}: CompletionControlProps) {
  return (
    <Pressable
      {...props}
      accessibilityLabel={label}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: completed, disabled: Boolean(disabled) }}
      disabled={disabled}
      hitSlop={8}
      onPress={() => onValueChange?.(!completed)}
      style={({ pressed }) => [
        styles.touchTarget,
        pressed && styles.pressed,
        disabled && styles.disabled,
        typeof style === "function" ? style({ pressed }) : style,
      ]}
    >
      <View style={[styles.box, completed && styles.boxCompleted]}>
        {completed ? (
          <Text
            accessibilityElementsHidden
            importantForAccessibility="no-hide-descendants"
            style={styles.check}
            variant="labelMedium"
          >
            ✓
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => ({
  touchTarget: {
    width: theme.sizes.minimumTouchTarget,
    height: theme.sizes.minimumTouchTarget,
    alignItems: "center",
    justifyContent: "center",
  },
  box: {
    width: theme.sizes.completionControl,
    height: theme.sizes.completionControl,
    borderWidth: theme.borders.strong,
    borderColor: theme.colors.borderStrong,
    borderRadius: theme.radii.none,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  boxCompleted: {
    borderColor: theme.colors.completion,
  },
  check: {
    color: theme.colors.completionBright,
    lineHeight: 18,
  },
  pressed: {
    opacity: 0.8,
  },
  disabled: {
    opacity: 0.4,
  },
}));
