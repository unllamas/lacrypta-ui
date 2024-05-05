import { Flex, Text } from '@unllamas/lacrypta-ui';

export default function CommonColors({ number, value }) {
  return (
    <Flex direction='column'>
      <div style={{ width: '50px', height: '50px', backgroundColor: `#${value}` }}></div>
      <Text>{number}</Text>
    </Flex>
  );
}
