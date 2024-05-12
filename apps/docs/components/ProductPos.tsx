// Components
import { appTheme } from '@/config/theme';
import {
  Heading,
  Text,
  Flex,
  Button,
  Divider,
  Satoshi,
  Icon,
} from '@unllamas/lacrypta-ui';

interface ProductProps {
  id: number;
  category_id: number;
  name: string;
  description: string;
  price: {
    value: number;
    currency: 'SAT' | 'USD' | 'ARS';
  };
}

interface ProductPosProps {
  data: any | ProductProps;
  onAddToCart: (product: any) => void;
  quantityInCart: number;
  onRemoveOne: () => void;
  onAddOne: () => void;
}

export function ProductPos(props: ProductPosProps) {
  const { data, onAddToCart, quantityInCart, onRemoveOne, onAddOne } = props;

  if (!data) return null;

  const { name, price } = data;

  return (
    <>
      <Divider y="sm" />
      <Flex align="center">
        <Flex direction="column" gap={4}>
          <Text isBold>{name}</Text>
          <Flex align="center">
            <Flex align="center" flex={0}>
              <Icon icon={<Satoshi color={appTheme.colors.gray[500]} />} />
              <Heading as="h4">{price?.value}</Heading>
            </Flex>
            {/* <Text size="sm" color={appTheme.colors.gray[500]}>
              SAT
            </Text> */}
          </Flex>
        </Flex>
        <Flex align="center" justify="end" gap="md" flex={1}>
          {quantityInCart > 0 ? (
            <>
              <Button
                size="sm"
                color="secondary"
                variant="bezeledGray"
                onClick={onRemoveOne}
              >
                -
              </Button>
              <Text isBold>{quantityInCart}</Text>
              <Button size="sm" variant="bezeledGray" onClick={onAddOne}>
                +
              </Button>
            </>
          ) : (
            <Button size="sm" variant="bezeled" onClick={onAddToCart}>
              Agregar
            </Button>
          )}
        </Flex>
      </Flex>
      <Divider y="md" />
    </>
  );
}
