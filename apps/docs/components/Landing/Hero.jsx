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
            Potencia tus proyectos con lacrypta-ui: biblioteca de React con componentes elegantes y personalizables para
            interfaces de usuario impresionantes.
          </Text>
          <Divider y={12} />
          <Link href='/docs'>
            <Button>Empezar ahora</Button>
          </Link>

          <Divider y={24} />

          <Flex>
            <Card variant='filled' spacing={4}>
              <Flex direction='column'>
                <Heading as='h3'>Lorem ipsum dolor sit.</Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos quas fugiat dolorem nemo totam!
                  Earum dignissimos vel rem, pariatur beatae odit ipsum corrupti eius nostrum eos sed, accusantium
                  quisquam.
                </Text>
              </Flex>
            </Card>
            <Card variant='outline' spacing={4}>
              <Flex direction='column'>
                <Heading as='h3'>Lorem ipsum dolor sit.</Heading>
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque eos quas fugiat dolorem nemo totam!
                  Earum dignissimos vel rem, pariatur beatae odit ipsum corrupti eius nostrum eos sed, accusantium
                  quisquam.
                </Text>
              </Flex>
            </Card>
          </Flex>
        </Flex>
        <Divider y={80} />
      </Container>
    </>
  );
};
