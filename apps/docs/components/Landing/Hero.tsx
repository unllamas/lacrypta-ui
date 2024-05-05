import Link from 'next/link';
import { Button, Container, Heading, Flex, Divider, Card, Text } from '@unllamas/lacrypta-ui';

export const Hero = () => {
  return (
    <>
      <Container size='md'>
        <Divider y={80} />
        <Flex align='center' direction='column' gap={'sm'}>
          <Heading align='center'>
            ¡Potencia tus Proyectos con <strong>lacrypta-ui</strong> para React!
          </Heading>
          <Divider y={8} />
          <Text align='center'>
            Biblioteca de React con componentes elegantes y personalizables para interfaces de usuario impresionantes.
          </Text>
          <Divider y={12} />
          <Link href='/docs'>
            <Button>Empezar ahora</Button>
          </Link>
        </Flex>
        <Divider y={80} />
      </Container>
    </>
  );
};
