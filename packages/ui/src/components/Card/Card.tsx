import type { ReactNode } from 'react';
import { useTheme } from 'styled-components';

import { CardStyle } from './style';

interface CardProps {
  children: ReactNode;
  spacing?: number;
  variant?: 'unstyled' | 'filled' | 'outline';
}

export function Card(props: CardProps) {
  const { children, spacing = 0, variant = 'unstyled' } = props;
  const theme = useTheme();

  let background;
  let border;

  switch (variant) {
    case 'filled':
      background = theme.colors.gray[800];
      border = theme.colors.gray[800];
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

  return (
    <CardStyle $spacing={spacing} $background={background} $border={border}>
      {children}
    </CardStyle>
  );
}
