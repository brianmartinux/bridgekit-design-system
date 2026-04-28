import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
  title: 'Components/Button',
  component: Button,
  args: {
    children: 'Review request',
    variant: 'primary',
    size: 'md'
  }
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const Loading: Story = {
  args: {
    loading: true
  }
};

export const WithIcons: Story = {
  args: {
    leadingIcon: '←',
    trailingIcon: '→',
    children: 'Move forward'
  }
};

export const Danger: Story = {
  args: {
    variant: 'danger',
    children: 'Close request'
  }
};
