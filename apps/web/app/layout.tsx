import { AppProvider } from '@/context/AppProvider';

import '@/fonts/main.css';

export default function App({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang='en'>
      <body>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}
