import { appTheme } from '@/config/theme';

const style = {
  overflow: 'hidden',
  maxHeight: '668px',
  width: '100%',
  maxWidth: '1024px',
  margin: '0 auto',
  backgroundColor: appTheme.colors.background,
  borderRadius: '24px 24px 0 0',
  border: `1px solid ${appTheme.colors.gray[800]}`,
  borderBottom: '0px',
  boxShadow: `0 -48px 64px rgba(255,255,255,.02)`,
};

interface PreviewProps {
  children: React.ReactNode;
}

export const Preview = ({ children }: PreviewProps) => {
  return <div style={style}>{children}</div>;
};
