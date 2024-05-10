import { appTheme } from '@/config/theme';

const genericPreview = {
  overflow: 'hidden',
  width: '100%',
  margin: '0 auto',
  padding: '24px',
  backgroundColor: appTheme.colors.background,
  borderRadius: '24px 24px 0 0',
  border: `1px solid ${appTheme.colors.gray[800]}`,
  borderBottom: '0px',
  boxShadow: `0 -48px 64px rgba(255,255,255,.02)`,
};

interface PreviewProps {
  children: React.ReactNode;
  screen: 'xs' | 'sm' | 'md';
}

export const Preview = ({ children, screen }: PreviewProps) => {
  let device;

  switch (screen) {
    case 'xs':
      device = '420px';
      break;
    case 'sm':
      device = '768px';
      break;
    case 'md':
      device = '1024px';
      break;
  }

  return (
    <div style={{ width: '100%', maxWidth: device }}>
      <div style={genericPreview}>{children}</div>
    </div>
  );
};
