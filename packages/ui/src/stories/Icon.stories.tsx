import type { Meta, StoryObj } from '@storybook/react';

import { Icon, Loader, Flex } from '../components';
import React from 'react';

const meta = {
  title: 'Media/Icon',
  component: Icon,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Icon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultComponent: Story = {
  args: {
    icon: <Loader />,
    size: 'normal',
  },
};

export const sizeComponents: Story = {
  args: {
    icon: <Loader />,
  },
  render: (args) => (
    <Flex gap={4}>
      <Icon size="xs" {...args} />
      <Icon size="sm" {...args} />
      <Icon size="md" {...args} />
    </Flex>
  ),
};
