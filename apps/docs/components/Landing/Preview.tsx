import { appTheme } from '@/config/theme';

const boxPreview = {
  overflow: 'hidden',
  width: '100%',
  maxHeight: '668px',
  margin: '0 auto',
  paddingTop: '24px',
  backgroundColor: appTheme.colors.background,
};

interface PreviewProps {
  children: React.ReactNode;
  screen: 'xs' | 'sm' | 'md';
}

export const Preview = ({ children, screen = 'md' }: PreviewProps) => {
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
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        width: '100%',
        maxWidth: device,
        borderRadius: '16px 16px 0 0',
        border: `1px solid ${appTheme.colors.gray[800]}`,
        borderBottom: '0',
      }}
    >
      <div style={boxPreview}>{children}</div>
    </div>
  );
};
