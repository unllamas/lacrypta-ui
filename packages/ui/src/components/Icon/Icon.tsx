import React, { type ReactNode } from 'react';

import { IconStyle } from './style';

export interface IconProps {
  // Deprecated children
  children?: ReactNode;
  // Deprecated small, normal and numbers
  size?: 'small' | 'normal' | 'xs' | 'sm' | 'md' | 3 | 4 | 5 | 6 | 7 | 8;
  icon: ReactNode;
}

export function Icon(props: IconProps) {
  const { children, size = 'md', icon } = props;

  let sizeValue;

  switch (size) {
    case 'small':
      sizeValue = 3;
      break;
    case 'normal':
      sizeValue = 4;
      break;
    case 'xs':
      sizeValue = 3;
      break;
    case 'sm':
      sizeValue = 4;
      break;
    case 'md':
      sizeValue = 5;
      break;
    default:
      sizeValue = size;
      break;
  }

  return <IconStyle $size={sizeValue}>{icon ? icon : children}</IconStyle>;
}
