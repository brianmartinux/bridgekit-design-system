import type { Meta, StoryObj } from '@storybook/react';
import { ReviewQueue } from './ReviewQueue';

const meta = {
  title: 'Examples/ReviewQueue',
  component: ReviewQueue,
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof ReviewQueue>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
