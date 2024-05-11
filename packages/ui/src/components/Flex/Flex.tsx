import React, { ReactNode } from 'react';

import { FlexPrimitive } from './style';

interface FlexProps {
  children?: ReactNode;
  // Deprecated numeric gap
  gap?: 0 | 2 | 4 | 8 | 16 | 'xs' | 'sm' | 'md' | 'none';
  direction?: 'row' | 'column';
  flex?: 0 | 1 | 'initial';
  justify?: 'start' | 'end' | 'space-between' | 'center';
  align?: 'start' | 'center' | 'end';
}

export function Flex(props: FlexProps): JSX.Element {
  const {
    children,
    gap = 'none',
    direction = 'row',
    flex = 'initial',
    justify = 'start',
    align = 'start',
  } = props;

  let gapSize;

  switch (gap) {
    case 'none':
      gapSize = 'inherit';
      break;
    case 'xs':
      gapSize = '4px';
      break;
    case 'sm':
      gapSize = '8px';
      break;
    case 'md':
      gapSize = '16px';
      break;
    default:
      gapSize = `${gap}px`;
      break;
  }

  return (
    <FlexPrimitive
      $customAlign={align}
      $customDirection={direction}
      $customFlex={flex}
      $customGap={gapSize}
      $customJustify={justify}
      {...props}
    >
      {children}
    </FlexPrimitive>
  );
}
