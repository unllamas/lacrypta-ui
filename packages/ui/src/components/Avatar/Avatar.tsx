import React from 'react';

import { AvatarProps } from './Avatar.types';

import { AvatarStyle } from './style';

const Avatar = ({ src = '', alt = '', size }: AvatarProps) => {
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
      {!src ? alt.slice(0, 2).toLocaleUpperCase() : <img src={src} alt={alt} />}
    </AvatarStyle>
  );
};

export default Avatar;
