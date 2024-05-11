import { ReactNode } from 'react';

import { Text } from '../Text';

import { FeedbackPrimitive } from './style';

interface FeedbackProps {
  children: ReactNode;
  status?: null | 'success' | 'error';
  show?: boolean;
}

export const Feedback = (props: FeedbackProps) => {
  const { children, status, show = false } = props;

  return (
    <FeedbackPrimitive $isShow={show} $isSuccess={status === 'success'}>
      <Text align="right" size="small">
        {children}
      </Text>
    </FeedbackPrimitive>
  );
};
