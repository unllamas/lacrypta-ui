import Link from 'next/link';
import { Button, Container, Heading, Flex, Divider, Card, Text } from '@unllamas/lacrypta-ui';

export const Hero = () => {
  return (
    <>
      <Container size='lg'>
        <Divider y={80} />
        <Flex direction='column' gap={'sm'} align='center'>
          <Heading align='center'>
            Crea sitios web <br />
            hermosos con Next.js
          </Heading>
          <Divider y={8} />
          <Text align='center'>
            Un marco de generación de sitios simple, <br /> potente y flexible con todo lo que amas de Next.js
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
