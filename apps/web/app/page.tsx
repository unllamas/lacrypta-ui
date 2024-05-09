'use client';

import {
  Button,
  Heading,
  Container,
  Divider,
  Flex,
  Text,
} from '@unllamas/lacrypta-ui';

export default function Page(): JSX.Element {
  return (
    <main>
      <Divider y={220} />
      <Container>
        <Flex direction="column" gap="md">
          <Heading>CREA SITIOS WEB HERMOSOS CON NEXT.JS</Heading>
          <Text>
            Un marco de generación de sitios simple, <br />
            potente y flexible con todo lo que amas de Next.js.
          </Text>
          <Button>Click me!</Button>
        </Flex>
      </Container>
      <Divider y={220} />
    </main>
  );
}
