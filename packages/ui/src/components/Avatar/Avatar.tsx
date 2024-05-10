import React, { FC } from 'react';

import { AvatarStyle } from './style';

interface AvatarProps {
  src?: string;
  alt: string;
  // Deprecated normal and large
  size: 'normal' | 'large' | 'xs' | 'sm' | 'md';
  children?: React.ReactNode;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { src, alt = '', size, children } = props;

  let sizeValue: number = 0;

  switch (size) {
    case 'xs':
      sizeValue = 6;
      break;
    case 'sm':
      sizeValue = 8;
      break;
    case 'md':
      sizeValue = 12;
      break;
    // Deprecated normal and large
    case 'normal':
      sizeValue = 5;
      break;
    case 'large':
      sizeValue = 10;
      break;
  }

  return (
    <AvatarStyle $size={sizeValue}>
      {!children ? (
        !src ? (
          alt.slice(0, 2).toLocaleUpperCase()
        ) : (
          <img src={src} alt={alt} />
        )
      ) : (
        children
      )}
    </AvatarStyle>
  );
};
