import type { Preview } from '@storybook/react';
import { themes } from '@storybook/theming';
import { withThemeFromJSXProvider } from '@storybook/addon-themes';

// import DocTemplate from './DocTemplate.mdx';

import { ReactProvider } from '../src/react/ReactProvider';
import { baseTheme } from '../src/theme';
import GlobalStyles from '../src/css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
      // page: DocTemplate,
      toc: true,
    },
  },
};

export const decorators = [
  withThemeFromJSXProvider({
    themes: {
      dark: baseTheme,
    },
    defaultTheme: 'dark',
    Provider: ReactProvider,
    GlobalStyles,
  }),
];

export default preview;
