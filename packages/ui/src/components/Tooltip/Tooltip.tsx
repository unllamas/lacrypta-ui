import { ReactNode, useEffect } from 'react';

import { Text } from '../Text';

import { TooltipStyle } from './style';
import { useDisclosure } from '../../hooks';

interface TooltipProps {
  children: ReactNode;
  label: string;
  // TO-DO
  placement?: string;
  isOpen?: boolean;
  color?: 'default' | 'primary' | 'secondary' | 'error';
}

export const Tooltip = (props: TooltipProps) => {
  const { children, label } = props;

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    setTimeout(() => {
      onClose();
    }, 800);
  }, [isOpen]);

  return (
    <TooltipStyle $show={isOpen} onClick={onOpen}>
      <div>
        <Text size="sm">{label}</Text>
      </div>
      {children}
    </TooltipStyle>
  );
};
