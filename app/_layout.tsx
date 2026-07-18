import "../design-system/unistyles";

import {
  Geist_400Regular,
  Geist_600SemiBold,
  Geist_700Bold,
  useFonts as useGeistFonts,
} from "@expo-google-fonts/geist";
import {
  JetBrainsMono_400Regular,
  JetBrainsMono_500Medium,
  useFonts as useJetBrainsMonoFonts,
} from "@expo-google-fonts/jetbrains-mono";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import {
  StatusBar,
  StyleSheet as NativeStyleSheet,
  Text as NativeText,
  View,
} from "react-native";

import { palette } from "@/design-system";

void SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [geistLoaded, geistError] = useGeistFonts({
    Geist_400Regular,
    Geist_600SemiBold,
    Geist_700Bold,
  });
  const [monoLoaded, monoError] = useJetBrainsMonoFonts({
    JetBrainsMono_400Regular,
    JetBrainsMono_500Medium,
  });

  const fontsLoaded = geistLoaded && monoLoaded;
  const fontError = geistError ?? monoError;

  useEffect(() => {
    if (fontsLoaded || fontError) {
      void SplashScreen.hideAsync();
    }
  }, [fontError, fontsLoaded]);

  if (fontError) {
    return (
      <>
        <StatusBar
          backgroundColor={palette.surface}
          barStyle="light-content"
        />
        <View style={fallbackStyles.container}>
          <NativeText
            accessibilityLiveRegion="assertive"
            style={fallbackStyles.title}
          >
            Unable to load the app fonts.
          </NativeText>
          <NativeText style={fallbackStyles.message}>
            Restart the app to try again.
          </NativeText>
        </View>
      </>
    );
  }

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <StatusBar
        backgroundColor={palette.surface}
        barStyle="light-content"
      />
      <Stack
        screenOptions={{
          contentStyle: { backgroundColor: palette.surface },
          headerShown: false,
        }}
      />
    </>
  );
}

const fallbackStyles = NativeStyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    padding: 24,
    backgroundColor: palette.surface,
  },
  title: {
    color: palette.onSurface,
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
  message: {
    color: palette.onSurfaceVariant,
    fontSize: 14,
    textAlign: "center",
  },
});
