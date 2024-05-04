import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Divider, Heading, Text } from '../components';

const meta = {
  title: 'Layout/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Divider>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultComponent: Story = {
  args: {
    y: 8,
  },
  render: (args) => (
    <>
      <Heading as='h4'>Lorem ipsum dolor sit amet magna aliqua.</Heading>
      <Divider {...args} />
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
        magna aliqua.
      </Text>
    </>
  ),
};
