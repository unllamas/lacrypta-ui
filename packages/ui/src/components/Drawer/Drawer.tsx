import { useState, useEffect, ReactNode } from 'react';

import { Container } from '../Layout/Container';
import { Flex } from '../Flex';
import { Button } from '../Button';
import { Heading } from '../Heading';

import { useDisclosure } from 'hooks';

import { SheetPrimitive, SheetContent, SheetBody } from './style';

interface SheetProps {
  children: ReactNode;
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  closeText?: string;
}

export const Drawer = (props: SheetProps) => {
  const { children, isOpen, closeText = 'Close', onClose, title } = props;

  return (
    <SheetPrimitive $isOpen={isOpen}>
      <SheetContent $isOpen={isOpen}>
        <Flex>
          <Container>
            <Flex align="center" justify="space-between">
              <Heading as="h6">{title}</Heading>
              <Button size="small" variant="borderless" onClick={onClose}>
                {closeText}
              </Button>
            </Flex>
          </Container>
        </Flex>
        <SheetBody>
          <Container size="sm">{children}</Container>
        </SheetBody>
      </SheetContent>
    </SheetPrimitive>
  );
};
