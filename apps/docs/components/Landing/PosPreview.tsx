import { useState, useEffect, useCallback } from 'react';
import {
  Button,
  Container,
  Heading,
  Flex,
  Divider,
  Text,
  Icon,
  useDisclosure,
  Drawer,
  QRCode,
  Loader,
  Satoshi,
  Check,
  Footer,
  Trash,
} from '@unllamas/lacrypta-ui';
// import confetti from 'canvas-confetti';

// LaWallet
import { NostrProvider, useZap } from '@lawallet/react';
import { config } from '@/config/lawallet';

import { ProductPos } from '../ProductPos';

// MOCK
import categories from '@/mock/categories.json';
// import lud06 from '@/mock/lud06/pos.json';

import { appTheme } from '@/config/theme';

interface ProductData {
  id: number;
  category_id: number;
  name: string;
  description: string;
  price: {
    value: number;
    currency: string;
  };
}

export const PosPreview = () => {
  // UI
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { invoice, createZapInvoice } = useZap({
    receiverPubkey: process.env.PUBLIC_KEY || '',
    config,
  });

  const [sheetStep, setSheetStep] = useState('checkout');
  const [menuProducts, setMenuProducts] = useState<ProductData[]>([]);

  const [groupedProducts, setGroupedProducts] = useState<{
    [categoryId: number]: ProductData[];
  }>([]);

  // Drawer
  const [showSheet, setShowSheet] = useState(false);

  // Cart
  const [cart, setCart] = useState<ProductData[]>([]);

  const [productQuantities, setProductQuantities] = useState<{
    [productId: number]: number;
  }>({});

  const loadMenu = useCallback(async (name: string) => {
    const products = (await import(`@/mock/menus/${name}.json`))
      .default as ProductData[];
    const _groupedProducts: {
      [categoryId: number]: ProductData[];
    } = {};
    products.forEach((product) => {
      const categoryId = product.category_id;
      if (!_groupedProducts[categoryId]) {
        _groupedProducts[categoryId] = [];
      }
      _groupedProducts[categoryId].push(product);
    });

    setGroupedProducts(_groupedProducts);
    setMenuProducts(products);
  }, []);

  const addToCart = useCallback(
    (product: ProductData) => {
      // Update cart
      const updatedCart = [...cart, product];
      setCart(updatedCart);

      // Update quantities
      const productId = product.id;
      const updatedQuantities = { ...productQuantities };
      updatedQuantities[productId] = (updatedQuantities[productId] || 0) + 1;
      setProductQuantities(updatedQuantities);
    },
    [cart, productQuantities],
  );

  const removeFromCart = useCallback(
    (product: ProductData) => {
      // Update cart
      const updatedCart = [...cart];

      // Update quantities
      const productId = product.id;
      const updatedQuantities = { ...productQuantities };
      if (updatedQuantities[productId]! > 0) {
        updatedCart.splice(
          updatedCart.findIndex((item) => item.id === productId),
          1,
        );
        updatedQuantities[productId]! -= 1;
      }

      setCart(updatedCart);
      setProductQuantities(updatedQuantities);
    },
    [cart, productQuantities],
  );

  const getTotalPrice = useCallback(() => {
    let totalPrice = 0;
    cart.forEach((product) => {
      totalPrice += product.price.value;
    });
    return totalPrice;
  }, [cart]);

  const handleClearCart = useCallback(() => {
    setCart([]);
    setProductQuantities({});
    setSheetStep('checkout');
  }, []);

  const handleClearCartAndCloseSheet = useCallback(() => {
    handleClearCart();
    onClose();
  }, [handleClearCart]);

  const handleCreateZap = () => {
    if (invoice.loading) return;
    createZapInvoice(getTotalPrice()).then((bolt11: string | undefined) => {
      if (!bolt11) {
        alert('ERROR_ON_CREATE_INVOICE');
        return;
      }
      setSheetStep('qr');
    });
  };

  const handleCloseDrawer = () => {
    // setMessage('');
    setShowSheet(false);
    setSheetStep('checkout');
    onClose();
  };

  useEffect(() => {
    loadMenu('barra');
  }, []);

  useEffect(() => {
    if (invoice.payed) setSheetStep('finished');
  }, [invoice.payed]);

  return (
    <NostrProvider config={config}>
      <Container size="sm">
        <Divider y="md" />
        {categories.map((category) =>
          groupedProducts[category.id] ? (
            <>
              <Flex key={category.id} direction="column">
                <Text size="small" color={appTheme.colors.gray[500]}>
                  {category.name}
                </Text>
                <Flex direction="column">
                  {groupedProducts[category.id]?.map((product) => (
                    <ProductPos
                      key={product.id}
                      data={product}
                      onAddToCart={() => addToCart(product)}
                      quantityInCart={productQuantities[product.id] || 0}
                      onRemoveOne={() => removeFromCart(product)}
                      onAddOne={() => addToCart(product)}
                    />
                  ))}
                </Flex>
              </Flex>
              <Divider y="lg" />
            </>
          ) : (
            <></>
          ),
        )}
        {cart.length > 0 && (
          <Footer>
            <Flex gap={8}>
              <div className="clear-button">
                <Button
                  variant="bezeledGray"
                  color="error"
                  onClick={handleClearCart}
                >
                  <Trash />
                  <span>{cart.length}</span>
                </Button>
              </div>
              <Flex>
                <Button isBlock onClick={onOpen}>
                  Ver carrito
                </Button>
              </Flex>
            </Flex>
          </Footer>
        )}
        <Drawer
          isOpen={isOpen}
          onClose={handleCloseDrawer}
          title={`Resumen de compra`}
          closeText="Cerrar"
        >
          {sheetStep === 'checkout' && (
            <>
              <ul>
                {Object.entries(productQuantities).map((product) => {
                  const id = Number(product[0]);
                  const quantities = Number(product[1]);

                  const localProduct = menuProducts.find(
                    (product) => product.id === id,
                  );

                  if (quantities > 0 && localProduct) {
                    return (
                      <li key={localProduct.id}>
                        <Divider y={8} />
                        <Flex justify="space-between" align="center">
                          <Flex direction="column">
                            <Text isBold>{localProduct?.name}</Text>
                            <Text size="small">
                              {quantities}{' '}
                              {quantities === 1 ? 'unidad' : 'unidades'}.
                            </Text>
                          </Flex>
                          <Flex align="start" gap={4} flex={1}>
                            <Flex flex={0} align="center">
                              <Icon
                                icon={
                                  <Satoshi color={appTheme.colors.gray[500]} />
                                }
                              />
                              <Heading as="h4">
                                {localProduct?.price.value * quantities}
                              </Heading>
                            </Flex>
                          </Flex>
                        </Flex>
                        <Divider y={8} />
                      </li>
                    );
                  }
                })}
              </ul>
              <Divider y="lg" />
              <Footer>
                <Flex gap={8}>
                  <div className="clear-button">
                    <Button
                      variant="bezeledGray"
                      color="error"
                      onClick={handleClearCartAndCloseSheet}
                    >
                      <Trash />
                      <span>{cart.length}</span>
                    </Button>
                  </div>
                  <Flex>
                    <Button isBlock onClick={handleCreateZap}>
                      Cobrar ${getTotalPrice()}
                    </Button>
                  </Flex>
                </Flex>
              </Footer>
            </>
          )}
          {sheetStep === 'qr' && (
            <Flex direction="column" align="center">
              <QRCode size={250} value={`${invoice.bolt11.toUpperCase()}`} />
              <Divider y="md" />
              <Icon icon={<Loader />} />
              <Divider y="md" />
              <Flex direction="column" align="center" gap="sm">
                <Text color={appTheme.colors.gray[500]}>Esperando pago</Text>
                <Flex align="center" justify="center">
                  <Icon icon={<Satoshi color={appTheme.colors.gray[500]} />} />
                  <Heading as="h2">{getTotalPrice()}</Heading>
                </Flex>
              </Flex>
            </Flex>
          )}
          {sheetStep === 'finished' && (
            <>
              <Flex direction="column" justify="center" align="center" gap="sm">
                <Icon icon={<Check color={appTheme.colors.success[400]} />} />
                <Text isBold align="center">
                  Pago recibido!
                </Text>
                <Text color={appTheme.colors.gray[500]} align="center">
                  Felicitaciones por haber encontrado nuestro easter egg! Hemos
                  tomado tu pago como agradecimiento y colaboracion :)
                </Text>
                <Flex align="center" justify="center">
                  <Icon icon={<Satoshi color={appTheme.colors.gray[500]} />} />
                  <Heading as="h2">{getTotalPrice()}</Heading>
                </Flex>
              </Flex>
              <Divider y="md" />
              <Button variant="bezeledGray" onClick={handleCloseDrawer}>
                Cerrar
              </Button>
            </>
          )}
        </Drawer>
      </Container>
    </NostrProvider>
  );
};
