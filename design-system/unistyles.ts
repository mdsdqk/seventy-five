import { StyleSheet } from "react-native-unistyles";

import { appThemes } from "./theme";
import { breakpoints } from "./tokens";

type AppThemes = typeof appThemes;
type AppBreakpoints = typeof breakpoints;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  themes: appThemes,
  breakpoints,
  settings: {
    initialTheme: "dark",
  },
});
