import type { ReactNode } from "react";
import {
  ScrollView,
  type ScrollViewProps,
  View,
  type ViewProps,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native-unistyles";

interface ScreenBaseProps {
  children: ReactNode;
  scrollable?: boolean;
}

export type ScreenProps = ScreenBaseProps &
  ViewProps &
  Pick<ScrollViewProps, "contentContainerStyle" | "keyboardShouldPersistTaps">;

export function Screen({
  children,
  contentContainerStyle,
  keyboardShouldPersistTaps,
  scrollable = true,
  style,
  ...props
}: ScreenProps) {
  const content = (
    <View style={[styles.content, contentContainerStyle]}>{children}</View>
  );

  return (
    <SafeAreaView edges={["top", "right", "bottom", "left"]} style={styles.safe}>
      {scrollable ? (
        <ScrollView
          {...props}
          contentContainerStyle={styles.scrollContent}
          keyboardShouldPersistTaps={keyboardShouldPersistTaps}
          style={[styles.fill, style]}
        >
          {content}
        </ScrollView>
      ) : (
        <View {...props} style={[styles.fill, style]}>
          {content}
        </View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create((theme) => ({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  fill: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  content: {
    width: "100%",
    maxWidth: theme.sizes.contentMaxWidth,
    alignSelf: "center",
    paddingHorizontal: {
      mobile: theme.spacing.mobileMargin,
      tablet: theme.spacing.tabletMargin,
      desktop: theme.spacing.desktopMargin,
    },
    paddingVertical: theme.spacing.gutter,
  },
}));
