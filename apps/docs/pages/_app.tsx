import React from 'react';
import { AppProps } from 'next/app';
import { NextProvider } from '@unllamas/lacrypta-ui';

import { appTheme } from '@/config/theme';
import '@/fonts/main.css';

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <NextProvider theme={appTheme}>
      <Component {...pageProps} />
    </NextProvider>
  );
}
