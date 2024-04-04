import { ReactNode } from "react";

export type ThemeStoreType = {
  activeTheme: ThemeKeyType;
  switchTheme: (themeKey: ThemeKeyType) => void;
  colors: ColorsType;
  spaces: SpacesTokensType;
  borders: BordersTokensType;
  radiuses: RadiusesTokensType;
  disabled: DisabledTokensType;
  isSetInitialHooks: boolean;
};

export type ThemeStoreReducerType = Partial<ThemeStoreType>;
export type useThemeReturnType = Omit<ThemeStoreType, "isSetInitialHooks">;

export type ThemeKeyType = "light" | "dark";

export type ColorsType = {
  primary: string;
  body: string;
  constrastBody: string;
  layer1: string;
  layer2: string;
  layer3: string;
  panel: string;
  warning: string;
  danger: string;
  success: string;
  accent: string;
  attention: string;
  info: string;
  seperator: string;
  hideBody: string;
  gray0: string;
  gray10: string;
  gray20: string;
  gray30: string;
  gray40: string;
  gray50: string;
  gray60: string;
  gray70: string;
  gray80: string;
  gray90: string;
  gray92: string;
  gray94: string;
  gray96: string;
  gray98: string;
  gray100: string;
  textColor: string;
  loginHeaderGradient: string;
  spotifyBlack: string;
  spotify: string;
  modalBackground: string;
  mtmPurple: string;
  mtmOrange: string;
  mtmSoftPink: string;
  mtmPink: string;
  meetSong: string;
  pulseFirst: string;
  pulseSecond: string;
  mostPopularBack: string;
  mostPopular: string;
  bestCompatible: string;
  bestCompatibleBack: string;
  iconColor: string;
  white: string;
  softPink: string;
  softPinkBackground: string;
  softPurple: string;
  softPurpleBackground: string;
  settingsMenuItemBorder: string;
  red: string;
  settingsMenuBackground: string;
  settingsMenuItemBackground: string;
  navBarTextColor: string;
};

export type ThemeType = {
  key: ThemeKeyType;
  colors?: ColorsType;
};

export type DesignTokensType = {
  spaces: SpacesTokensType;
  borders: BordersTokensType;
  radiuses: RadiusesTokensType;
  disabled: DisabledTokensType;
};

export type SpacesTokensType = {
  container: number;
  content: number;
  inline: number;
  item: number;
};

export type BordersTokensType = {
  indicator?: number;
  line?: number;
};

export type RadiusesTokensType = {
  quarter: number;
  hard: number;
  half: number;
};

export type DisabledTokensType = {
  container: {
    backgroundColor: string;
  };
  foreground: {
    color: keyof ColorsType;
  };
};

export type ThemeProviderType = {
  designTokens?: DesignTokensType;
  initialThemeKey: ThemeKeyType;
  themes?: Array<ThemeType>;
  children?: ReactNode;
};
