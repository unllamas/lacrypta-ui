import type { ReactNode } from 'react';
import { useTheme } from 'styled-components';

import { CardStyle } from './style';

interface CardProps {
  children: ReactNode;
  spacing?: 'xs' | 'sm' | 'md' | 'lg' | 'default';
  variant?: 'default' | 'filled' | 'outline';
}

export function Card(props: CardProps) {
  const { children, spacing = 'md', variant = 'outline' } = props;
  const theme = useTheme();

  let background;
  let border;
  let padding;

  switch (variant) {
    case 'filled':
      background = theme.colors.gray[900];
      border = theme.colors.gray[900];
      break;
    case 'outline':
      background = 'transparent';
      border = theme.colors.gray[800];
      break;
    default:
      background = 'transparent';
      border = 'transparent';
      break;
  }

  switch (spacing) {
    case 'xs':
      padding = '8px';
      break;
    case 'sm':
      padding = '16px';
      break;
    case 'md':
      padding = '24px';
      break;
    case 'lg':
      padding = '32px';
      break;
    case 'default':
      padding = '0px';
      break;
    default:
      padding = '24px';
      break;
  }

  return (
    <CardStyle $padding={padding} $background={background} $border={border}>
      {children}
    </CardStyle>
  );
}
