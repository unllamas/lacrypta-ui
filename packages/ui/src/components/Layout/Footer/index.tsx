import { Container } from '../Container';
import { Flex } from '../../Flex';

import { FooterStyle } from './style';

interface FooterProps {
  children: any;
}

export const Footer = (props: FooterProps) => {
  const { children } = props;

  return (
    <FooterStyle>
      <Container size="xs">
        <Flex flex={1} align="center">
          {children}
        </Flex>
      </Container>
    </FooterStyle>
  );
};
