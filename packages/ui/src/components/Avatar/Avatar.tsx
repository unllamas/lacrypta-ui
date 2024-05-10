import React, { FC } from 'react';

import { AvatarStyle } from './style';

interface AvatarProps {
  src?: string;
  alt?: string;
  name?: string;
  // Deprecated normal and large
  size: 'normal' | 'large' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  children?: React.ReactNode;
}

export const Avatar: FC<AvatarProps> = (props) => {
  const { src, alt = '', size = 'sm', children, name } = props;

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
    case 'lg':
      sizeValue = 16;
      break;
    case 'xl':
      sizeValue = 20;
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
          (name ?? alt).slice(0, 2).toLocaleUpperCase()
        ) : (
          <img src={src} alt={name ?? alt} />
        )
      ) : (
        children
      )}
    </AvatarStyle>
  );
};
