'use client';

import { NextProvider } from '@unllamas/lacrypta-ui';

import { appTheme } from '@/config/theme';

export function AppProvider({ children }: { children: React.ReactNode }) {
  return <NextProvider theme={appTheme}>{children}</NextProvider>;
}
