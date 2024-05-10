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
} from '@unllamas/lacrypta-ui';

import { appTheme } from '@/config/theme';

export const DashboardPreview = () => {
  return (
    <>
      <Divider y={40} />
      <Container>
        <Flex justify="space-between">
          <Flex gap="sm" align="center">
            <Flex flex={0}>
              <Avatar alt="GO" size="sm" />
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
          <Button>
            <Icon size="md" icon={<Receive />} />
            Depositar
          </Button>
          <Button color="secondary">
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
        <Flex justify="space-between">
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
        <Flex justify="space-between">
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
        <Flex justify="space-between">
          <Flex gap="sm" align="center">
            <div>
              <Avatar size="sm">
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
        <Flex justify="space-between">
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
        <Flex justify="space-between">
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
    </>
  );
};
