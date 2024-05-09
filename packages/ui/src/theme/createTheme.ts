import { baseTheme } from './theme';
import { ThemeProps, CreateThemeParameters } from './types';

export function createTheme(
  parameters: CreateThemeParameters = {},
): ThemeProps {
  const { colors = {}, borders = {}, font = {} } = parameters;

  return {
    ...baseTheme,
    colors: {
      ...baseTheme.colors,
      ...colors,
    },
    borders: {
      ...baseTheme.borders,
      ...borders,
    },
    font: {
      ...baseTheme.font,
      ...font,
    },
  };
}
