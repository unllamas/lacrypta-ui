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
        <Heading align="center">
          El design system que tu proyecto de Next esperaba
        </Heading>
      </Container>
      <Divider y={12} />
      <Container size="sm">
        <Flex direction="column" align="center">
          <Text align="center">
            Genera rápidamente aplicaciones web con nuestros componentes y
            layouts adaptados para la ocasion.
          </Text>
          <Divider y={24} />
          <Link href="/docs">
            <Button>Empezar ahora</Button>
          </Link>
        </Flex>
      </Container>
      <Divider y={80} />
    </>
  );
};
