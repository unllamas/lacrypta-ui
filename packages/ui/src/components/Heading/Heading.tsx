import { ReactNode } from 'react';

import { HeadingStyle } from './style';

export interface HeadingProps {
  children: ReactNode;
  as?: string;
  align?: 'left' | 'center' | 'right';
  color?: string;
}

export const Heading = (props: HeadingProps): JSX.Element => {
  const { children, as = 'h1', align = 'left', color } = props;

  return (
    <HeadingStyle $align={align} $color={color} as={as} {...props}>
      {children}
    </HeadingStyle>
  );
};
