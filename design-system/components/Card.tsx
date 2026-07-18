import type { ReactNode } from "react";
import { View, type ViewProps } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import { Text } from "./Text";

export interface CardProps extends ViewProps {
  children: ReactNode;
  heading?: string;
}

export function Card({ children, heading, style, ...props }: CardProps) {
  return (
    <View {...props} style={[styles.card, style]}>
      {heading ? (
        <View style={styles.header}>
          <Text variant="labelMedium">{heading}</Text>
        </View>
      ) : null}
      <View style={styles.body}>{children}</View>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  card: {
    borderWidth: theme.borders.thin,
    borderColor: theme.colors.border,
    borderRadius: theme.radii.none,
    backgroundColor: theme.colors.canvas,
  },
  header: {
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.sm,
    borderBottomWidth: theme.borders.thin,
    borderBottomColor: theme.colors.border,
  },
  body: {
    padding: theme.spacing.md,
    gap: theme.spacing.sm,
  },
}));
