import { create } from '@storybook/theming/create';

export default create({
  base: 'dark',
  fontBase: '"Open Sans", sans-serif',
  fontCode: 'monospace',

  brandTitle: 'La Crypta Storybook',
  brandUrl: 'https://lacrypta.ar/',
  brandImage: 'https://i.imgur.com/ZY4Pjmr.png',
  brandTarget: '_self',

  // BRAND
  colorPrimary: '#AFF43E',
  colorSecondary: '#EC5AB5',

  // UI
  appBg: '#101010',
  appContentBg: '#1C1C1C',
  appPreviewBg: '#1C1C1C',
});
