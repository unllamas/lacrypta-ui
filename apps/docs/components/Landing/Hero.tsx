import Link from 'next/link';
import {
  Button,
  Container,
  Heading,
  Flex,
  Divider,
  Card,
  Text,
} from '@unllamas/lacrypta-ui';

export const Hero = () => {
  return (
    <>
      <Container size="md">
        <Divider y={80} />
        <Heading align="center">Generá aplicaciones como un rayo</Heading>
      </Container>
      <Divider y={12} />
      <Container size="sm">
        <Flex direction="column" align="center">
          <Text align="center">
            Librería de componentes de UI para agilizar la construcción de
            aplicaciones web. Nuestro enfoque: mobile first.
          </Text>
          <Divider y={24} />
          <Link href="/docs">
            <Button variant="bezeled">Empezar ahora</Button>
          </Link>
        </Flex>
      </Container>
      <Divider y={48} />
    </>
  );
};
