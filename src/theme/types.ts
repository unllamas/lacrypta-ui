interface ColorType {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
  1000?: string;
}

export interface ThemeProps {
  colors: {
    // General
    transparent: string;
    black: string;
    white: string;
    // Brand
    primary: ColorType;
    secondary: ColorType;
    // Grays
    gray: ColorType;
    // Status
    success: ColorType;
    warning: ColorType;
    error: ColorType;
    // Theme
    background: string;
    text: string;
  };
  borders: {
    buttonRadius: string;
  };
  font: {
    primary: string;
    secondary: string;
  };
}

export interface CreateThemeParameters {
  colors?: {
    // General
    transparent: string;
    black: string;
    white: string;
    // Brand
    primary: ColorType;
    secondary: ColorType;
    // Grays
    gray5: string;
    gray10: string;
    gray15: string;
    gray20: string;
    gray25: string;
    gray30: string;
    gray35: string;
    gray40: string;
    gray45: string;
    gray50: string;
    // Status
    success: ColorType;
    warning: ColorType;
    error: ColorType;
    // Theme
    background: string;
    text: string;
  };
  borders?: {
    buttonRadius?: string;
  };
  font?: {
    primary?: string;
    secondary?: string;
  };
}
