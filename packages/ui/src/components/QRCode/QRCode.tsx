import ReactQRCode from 'qrcode.react';

import { baseTheme } from '../../theme';
import { QRCode as QQRCodeStyle } from './style';

interface ComponentProps {
  value: string;
  size?: number;
  borderSize?: number;
  showCopy?: boolean;
  textToCopy?: string;
}

export const QRCode = ({
  value,
  size = 150,
  borderSize = 40,
}: ComponentProps) => {
  return (
    <>
      <QQRCodeStyle size={size + borderSize}>
        <ReactQRCode
          value={value}
          size={size}
          fgColor={baseTheme.colors.black}
          bgColor={baseTheme.colors.white}
        />
      </QQRCodeStyle>
    </>
  );
};
