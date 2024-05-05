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
    // Change by theme light or dark
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
    // Change by theme light or dark
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
