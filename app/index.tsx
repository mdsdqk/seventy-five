import { useEffect, useMemo } from "react";
import { Animated, Easing, Image, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native-unistyles";

import { Text } from "@/components";
import { fontFamilies } from "@/design-system";

const splashIcon = require("../assets/images/splash-icon.png");

export default function Index() {
  const logoProgress = useMemo(() => new Animated.Value(0), []);
  const titleProgress = useMemo(() => new Animated.Value(0), []);

  useEffect(() => {
    const createFadeIn = (value: Animated.Value, delay: number) =>
      Animated.timing(value, {
        delay,
        duration: 1200,
        easing: Easing.out(Easing.cubic),
        toValue: 1,
        useNativeDriver: true,
      });

    Animated.parallel([createFadeIn(logoProgress, 400), createFadeIn(titleProgress, 800)]).start();
  }, [logoProgress, titleProgress]);

  const logoAnimatedStyle = {
    opacity: logoProgress,
    transform: [
      {
        translateY: logoProgress.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0],
        }),
      },
    ],
  };

  const titleAnimatedStyle = {
    opacity: titleProgress,
    transform: [
      {
        translateY: titleProgress.interpolate({
          inputRange: [0, 1],
          outputRange: [20, 0],
        }),
      },
    ],
  };

  return (
    <SafeAreaView edges={["top", "right", "bottom", "left"]} style={styles.safe}>
      <View style={styles.container}>
        <Animated.View style={[styles.logoFrame, logoAnimatedStyle]}>
          <Image
            accessibilityIgnoresInvertColors
            accessibilityLabel="Seventy Five logo"
            resizeMode="contain"
            source={splashIcon}
            style={styles.logo}
          />
        </Animated.View>

        <Animated.View style={[styles.wordmarkFrame, titleAnimatedStyle]}>
          <Text accessibilityRole="header" style={styles.wordmark} variant="headlineLarge">
            SEVENTY FIVE
          </Text>
          <View style={styles.divider} />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create((theme) => ({
  safe: {
    flex: 1,
    backgroundColor: theme.colors.canvas,
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: theme.spacing.gutter,
    backgroundColor: theme.colors.canvas,
  },
  logoFrame: {
    width: {
      mobile: 192,
      tablet: 256,
    },
    height: {
      mobile: 192,
      tablet: 256,
    },
    marginBottom: theme.spacing.gutter,
  },
  logo: {
    width: "100%",
    height: "100%",
    opacity: 0.9,
  },
  wordmarkFrame: {
    alignItems: "center",
  },
  wordmark: {
    color: theme.colors.primary,
    fontFamily: fontFamilies.display,
    fontSize: {
      mobile: 40,
      tablet: 64,
    },
    lineHeight: {
      mobile: 44,
      tablet: 70,
    },
    letterSpacing: {
      mobile: -0.8,
      tablet: -1.28,
    },
    textAlign: "center",
  },
  divider: {
    width: 48,
    height: theme.borders.thin,
    marginTop: theme.spacing.md,
    backgroundColor: theme.colors.surfaceHighest,
  },
}));
