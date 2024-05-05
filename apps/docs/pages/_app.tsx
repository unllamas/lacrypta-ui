import React from 'react';
import { AppProps } from 'next/app';
import { ReactProvider } from '@unllamas/lacrypta-ui';

export default function Nextra({ Component, pageProps }: AppProps) {
  return (
    <ReactProvider>
      <Component {...pageProps} />
    </ReactProvider>
  );
}
