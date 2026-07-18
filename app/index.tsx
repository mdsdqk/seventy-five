import { useState } from "react";
import { View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

import {
  Button,
  Card,
  CompletionControl,
  Screen,
  Text,
  TextInput,
} from "@/components";

export default function Index() {
  const [completed, setCompleted] = useState(true);
  const [task, setTask] = useState("");

  return (
    <Screen>
      <View style={styles.hero}>
        <Text tone="completion" variant="labelMedium">
          SYSTEM / 01
        </Text>
        <Text variant="headlineLarge">Precision engineering.</Text>
        <Text style={styles.intro} tone="muted" variant="bodyLarge">
          A strict, high-contrast foundation for interfaces that should feel
          like calibrated tools.
        </Text>
      </View>

      <View style={styles.grid}>
        <Card heading="TASK CONTROL" style={styles.card}>
          <View style={styles.taskRow}>
            <CompletionControl
              completed={completed}
              label="Mark design system setup complete"
              onValueChange={setCompleted}
            />
            <View style={styles.taskCopy}>
              <Text variant="bodyMedium">Design system setup</Text>
              <Text tone="muted" variant="labelSmall">
                {completed ? "STATUS / COMPLETE" : "STATUS / ACTIVE"}
              </Text>
            </View>
          </View>
        </Card>

        <Card heading="INPUT / ACTION" style={styles.card}>
          <TextInput
            label="TASK NAME"
            onChangeText={setTask}
            placeholder="Enter a precise objective"
            testID="task-name"
            value={task}
          />
          <View style={styles.actions}>
            <Button accessibilityLabel="Create task">Create task</Button>
            <Button accessibilityLabel="Cancel" variant="secondary">
              Cancel
            </Button>
          </View>
        </Card>
      </View>

      <View style={styles.footer}>
        <Text tone="muted" variant="labelSmall">
          GEIST / JETBRAINS MONO
        </Text>
        <Text tone="muted" variant="labelSmall">
          GRID / 4 PX
        </Text>
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create((theme) => ({
  hero: {
    maxWidth: 760,
    gap: theme.spacing.md,
    paddingVertical: {
      mobile: theme.spacing.lg,
      desktop: theme.spacing.desktopMargin,
    },
  },
  intro: {
    maxWidth: 620,
  },
  grid: {
    flexDirection: {
      mobile: "column",
      desktop: "row",
    },
    gap: theme.spacing.md,
  },
  card: {
    flex: 1,
  },
  taskRow: {
    minHeight: theme.sizes.minimumTouchTarget,
    flexDirection: "row",
    alignItems: "center",
    gap: theme.spacing.sm,
  },
  taskCopy: {
    flex: 1,
    gap: theme.spacing.xxs,
  },
  actions: {
    flexDirection: {
      mobile: "column",
      tablet: "row",
    },
    gap: theme.spacing.xs,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: theme.spacing.md,
    marginTop: theme.spacing.xl,
    paddingTop: theme.spacing.md,
    borderTopWidth: theme.borders.thin,
    borderTopColor: theme.colors.border,
  },
}));
