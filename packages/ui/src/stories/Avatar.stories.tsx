import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import { Avatar, Flex } from '../components';

const meta = {
  title: 'Media/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultComponent: Story = {
  args: {
    alt: 'Pepet',
    size: 'xs',
    src: 'https://i.imgur.com/fK8Do2F.jpeg',
  },
};

export const avatarSizes: Story = {
  args: {
    src: 'https://i.imgur.com/fK8Do2F.jpeg',
    alt: 'Pepeta',
  },
  render: (args) => (
    <Flex>
      <Avatar size="xs" {...args} />
      <Avatar size="sm" {...args} />
      <Avatar size="md" {...args} />
    </Flex>
  ),
};
