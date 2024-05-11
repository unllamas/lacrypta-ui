import React, { ReactNode } from 'react';

import { ContainerPrimitive } from './style';

interface ContainerProps {
  children: ReactNode;
  size?: 'small' | 'medium' | 'xs' | 'sm' | 'md' | 'lg';
}

export function Container(props: ContainerProps): JSX.Element {
  const { children, size = 'md' } = props;

  let width;

  switch (size) {
    case 'xs':
      width = '260px';
      break;
    case 'sm':
      width = '420px';
      break;
    case 'md':
      width = '720px';
      break;
    case 'lg':
      width = '1024px';
      break;
    // Deprecated small and default (medium)
    case 'small':
      width = '450px';
      break;
    case 'medium':
      width = '700px';
      break;
  }

  return <ContainerPrimitive $width={width}>{children}</ContainerPrimitive>;
}
