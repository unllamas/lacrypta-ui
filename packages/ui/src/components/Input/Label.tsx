import { ReactNode } from 'react';

import { LabelPrimitive } from './style';

interface LabelProps {
  children: ReactNode;
  htmlFor: string;
}

export function Label(props: LabelProps) {
  const { children, htmlFor } = props;

  return <LabelPrimitive htmlFor={htmlFor}>{children}</LabelPrimitive>;
}
