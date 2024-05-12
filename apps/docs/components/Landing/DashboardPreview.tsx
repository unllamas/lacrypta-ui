import { useState, useEffect } from 'react';
import {
  Button,
  Container,
  Heading,
  Flex,
  Divider,
  Text,
  Visible,
  Gear,
  Icon,
  Avatar,
  Send,
  Receive,
  useDisclosure,
  Drawer,
  Input,
  QRCode,
  Loader,
  Satoshi,
  Check,
} from '@unllamas/lacrypta-ui';
import confetti from 'canvas-confetti';

// LaWallet
import { NostrProvider, useZap } from '@lawallet/react';
import { config } from '@/config/lawallet';

import { appTheme } from '@/config/theme';

type SheetTypes = 'amount' | 'qr' | 'finished';

export const DashboardPreview = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { invoice, createZapInvoice } = useZap({
    receiverPubkey: process.env.PUBLIC_KEY || '',
    config,
  });

  const [amount, setAmount] = useState(0);
  // const [message, setMessage] = useState('');
  const [sheetStep, setSheetStep] = useState<SheetTypes>('amount');

  const handleCreateZap = () => {
    if (invoice.loading) return;
    createZapInvoice(amount).then((bolt11: string | undefined) => {
      if (!bolt11) {
        alert('ERROR_ON_CREATE_INVOICE');
        return;
      }
      setSheetStep('qr');
    });
  };

  const handleCloseDrawer = () => {
    setAmount(0);
    // setMessage('');
    setSheetStep('amount');
    onClose();
  };

  useEffect(() => {
    if (invoice.payed) {
      setSheetStep('finished');
      confetti({});
    }
  }, [invoice.payed]);

  return (
    <NostrProvider config={config}>
      <Divider y={16} />
      <Container size="md">
        <Flex justify="space-between">
          <Flex gap="sm" align="center">
            <Flex flex={0}>
              <Avatar alt="DI" size="sm" />
            </Flex>
            <Flex direction="column" gap={0}>
              <Text size="sm" color={appTheme.colors.gray[500]}>
                Hola,
              </Text>
              <Text>dios@lawallet.ar</Text>
            </Flex>
          </Flex>
          <Flex gap="xs" flex={0}>
            <Button variant="bezeled" size="sm">
              <Icon size="md" icon={<Visible />} />
            </Button>
            <Button variant="bezeled" size="sm">
              <Icon size="md" icon={<Gear />} />
            </Button>
          </Flex>
        </Flex>
      </Container>
      <Divider y={24} />
      <div>
        <Container>
          <Flex direction="column" align="center">
            <Text size="sm" color={appTheme.colors.gray[500]}>
              BALANCE
            </Text>
            <Flex justify="center" align="center" gap="sm">
              <Text size="sm">$</Text>
              <Flex justify="center" align="center" gap="xs" flex={0}>
                <Heading>895</Heading>
                <Text color={appTheme.colors.gray[500]}>.78</Text>
              </Flex>
            </Flex>
          </Flex>
          <Divider y={12} />
          <Flex justify="center" gap="sm">
            <div>
              <Button
                style={{ minWidth: '80px' }}
                variant="borderless"
                size="sm"
              >
                SAT
              </Button>
            </div>
            <div>
              <Button
                style={{ minWidth: '80px' }}
                variant="bezeledGray"
                size="sm"
              >
                USD
              </Button>
            </div>
            <div>
              <Button
                style={{ minWidth: '80px' }}
                variant="borderless"
                size="sm"
              >
                ARS
              </Button>
            </div>
          </Flex>
        </Container>
      </div>
      <Divider y={24} />
      <Container size="sm">
        <Flex flex={1} justify="center" gap="sm">
          <Button isBlock onClick={onOpen}>
            <Icon size="md" icon={<Receive />} />
            Depositar
          </Button>
          <Button isBlock color="secondary">
            <Icon size="md" icon={<Send />} />
            Transferir
          </Button>
        </Flex>

        <Divider y={24} />

        <Flex justify="space-between" align="center">
          <Text size="sm" color={appTheme.colors.gray[500]}>
            Última actividad
          </Text>
          <div>
            <Button size="xs" variant="borderless">
              Ver todo
            </Button>
          </div>
        </Flex>

        {/* tx */}
        <Divider y={12} />
        <Flex justify="space-between" align="center" gap="sm">
          <Flex gap="sm" align="center">
            <div>
              <Avatar size="sm" alt="GO" />
            </div>
            <Flex direction="column" gap={0}>
              <Flex gap="xs" align="end">
                <Text>Enviaste</Text>
                <Text color={appTheme.colors.gray[700]} size="xs">
                  •
                </Text>
                <Text color={appTheme.colors.gray[500]}>10s</Text>
              </Flex>
              <Text color={appTheme.colors.gray[500]}>
                a gorila@lacrypta.ar
              </Text>
            </Flex>
          </Flex>
          <Text>-$121.80</Text>
        </Flex>
        <Divider y={12} />
        {/* fin tx */}
        {/* tx */}
        <Divider y={12} />
        <Flex justify="space-between" align="center" gap="sm">
          <Flex gap="sm" align="center">
            <div>
              <Avatar size="sm" alt="CU" />
            </div>
            <Flex direction="column" gap={0}>
              <Flex gap="xs" align="end">
                <Text>Recibiste</Text>
                <Text color={appTheme.colors.gray[700]} size="xs">
                  •
                </Text>
                <Text color={appTheme.colors.gray[500]}>10m</Text>
              </Flex>
              <Text color={appTheme.colors.gray[500]}>
                desde cuervo@lacrypta.ar
              </Text>
            </Flex>
          </Flex>
          <Text color={appTheme.colors.success[400]}>+$121.80</Text>
        </Flex>
        <Divider y={12} />
        {/* fin tx */}
        {/* tx */}
        <Divider y={12} />
        <Flex justify="space-between" align="center" gap="sm">
          <Flex gap="sm" align="center">
            <div>
              <Avatar alt="algo" size="sm">
                <Icon size="sm" icon={<Send />} />
              </Avatar>
            </div>
            <Flex direction="column" gap={0}>
              <Flex gap="xs" align="end">
                <Text>Transferiste</Text>
                <Text color={appTheme.colors.gray[700]} size="xs">
                  •
                </Text>
                <Text color={appTheme.colors.gray[500]}>10h</Text>
              </Flex>
              <Text color={appTheme.colors.gray[500]}>via lightning.</Text>
            </Flex>
          </Flex>
          <Text>-$121.80</Text>
        </Flex>
        <Divider y={12} />
        {/* fin tx */}
        {/* tx */}
        <Divider y={12} />
        <Flex justify="space-between" align="center" gap="sm">
          <Flex gap="sm" align="center">
            <div>
              <Avatar size="sm">
                <Icon size="sm" icon={<Receive />} />
              </Avatar>
            </div>
            <Flex direction="column" gap={0}>
              <Flex gap="xs" align="end">
                <Text>Recibiste</Text>
                <Text color={appTheme.colors.gray[700]} size="xs">
                  •
                </Text>
                <Text color={appTheme.colors.gray[500]}>08/05/24</Text>
              </Flex>
              <Text color={appTheme.colors.gray[500]}>via lightning.</Text>
            </Flex>
          </Flex>
          <Text color={appTheme.colors.success[400]}>+$121.80</Text>
        </Flex>
        <Divider y={12} />
        {/* fin tx */}
        {/* tx */}
        <Divider y={12} />
        <Flex justify="space-between" align="center" gap="sm">
          <Flex gap="sm" align="center">
            <div>
              <Avatar size="sm">
                <Icon size="sm" icon={<Receive />} />
              </Avatar>
            </div>
            <Flex direction="column" gap={0}>
              <Flex gap="xs" align="end">
                <Text color={appTheme.colors.error[400]}>Devolución</Text>
                <Text color={appTheme.colors.gray[700]} size="xs">
                  •
                </Text>
                <Text color={appTheme.colors.gray[500]}>08/05/24</Text>
              </Flex>
              <Text color={appTheme.colors.gray[500]}>via lightning.</Text>
            </Flex>
          </Flex>
          <Text color={appTheme.colors.error[400]}>$121.80</Text>
        </Flex>
        <Divider y={12} />
        {/* fin tx */}
      </Container>
      <Drawer
        isOpen={isOpen}
        onClose={handleCloseDrawer}
        title="Generando deposito"
        closeText="Cerrar"
      >
        {sheetStep === 'amount' && (
          <>
            <Text isBold>Seleccioná el monto que deseas depositar</Text>
            <Divider y="sm" />
            <Flex gap="sm" justify="center">
              <Button
                variant={amount === 1 ? 'bezeled' : 'bezeledGray'}
                onClick={() => setAmount(1)}
                isBlock
              >
                1 sat
              </Button>
              <Button
                variant={amount === 420 ? 'bezeled' : 'bezeledGray'}
                onClick={() => setAmount(420)}
                isBlock
              >
                420 sat
              </Button>
              <Button
                variant={amount === 1000 ? 'bezeled' : 'bezeledGray'}
                onClick={() => setAmount(1000)}
                isBlock
              >
                1K sat
              </Button>
            </Flex>

            <Divider y="sm" />

            <Flex gap="sm" justify="center">
              <Button
                variant={amount === 10000 ? 'bezeled' : 'bezeledGray'}
                onClick={() => setAmount(10000)}
                isBlock
              >
                10K sat
              </Button>
              <Button
                variant={amount === 100000 ? 'bezeled' : 'bezeledGray'}
                onClick={() => setAmount(100000)}
                isBlock
              >
                100K sat
              </Button>
            </Flex>

            <Divider y="md" />

            <Flex gap="md" align="center">
              <Text size="small">Personalizado:</Text>
              <Input
                placeholder="0 sats"
                value={amount.toString()}
                onChange={(e) => setAmount(parseInt(e.target.value))}
                type="number"
              />
            </Flex>

            <Divider y="md" />

            {/* <Text isBold>Te gustaría dejar un mensaje?</Text>
            <Divider y="sm" />
            <Input
              placeholder={`Mensaje (opcional)`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <Divider y="md" /> */}

            <Button isBlock disabled={amount <= 0} onClick={handleCreateZap}>
              Crear factura
            </Button>
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
                <Heading as="h2">{amount}</Heading>
              </Flex>
            </Flex>
          </Flex>
        )}
        {sheetStep === 'finished' && (
          <>
            <Flex direction="column" justify="center" align="center" gap="sm">
              <Icon icon={<Check color={appTheme.colors.primary[400]} />} />
              <Text isBold align="center">
                Pago recibido!
              </Text>
              <Text color={appTheme.colors.gray[500]} align="center">
                Felicitaciones por haber encontrado nuestro easter egg! Hemos
                tomado tu pago como agradecimiento y colaboracion :)
              </Text>
              <Flex align="center" justify="center">
                <Icon icon={<Satoshi color={appTheme.colors.gray[500]} />} />
                <Heading as="h2">{amount}</Heading>
              </Flex>
            </Flex>
            <Divider y="md" />
            <Button variant="bezeledGray" onClick={handleCloseDrawer}>
              Cerrar
            </Button>
          </>
        )}
      </Drawer>
    </NostrProvider>
  );
};
