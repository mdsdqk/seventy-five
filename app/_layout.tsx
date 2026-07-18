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
import { StatusBar } from "react-native";

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

  if (!fontsLoaded && !fontError) {
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
