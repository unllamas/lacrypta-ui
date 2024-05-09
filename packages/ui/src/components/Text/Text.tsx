import React, { ReactNode } from 'react';

import { TextStyle } from './style';

interface TextProps {
  children: ReactNode;
  // Deprecated small and normal
  size?: 'small' | 'normal' | 'xs' | 'sm' | 'md';
  align?: 'left' | 'center' | 'right';
  isBold?: boolean;
  color?: string;
}

export function Text(props: TextProps): JSX.Element {
  const {
    children,
    size = 'normal',
    align = 'left',
    isBold = false,
    color,
  } = props;

  let textSize;
  let textHeight;

  switch (size) {
    case 'xs':
      textSize = '.6rem';
      textHeight = '.9rem';
      break;
    case 'sm':
      textSize = '.7rem';
      textHeight = '.9rem';
      break;
    case 'md':
      textSize = '.8rem';
      textHeight = '1rem';
      break;
    // Deprecated small and normal
    case 'small':
      textSize = '.7rem';
      textHeight = '.9rem';
      break;
    case 'normal':
      textSize = '.8rem';
      textHeight = '1rem';
      break;
  }

  return (
    <TextStyle
      $align={align}
      $color={color}
      $isBold={isBold}
      $size={textSize}
      $height={textHeight}
    >
      {children}
    </TextStyle>
  );
}
