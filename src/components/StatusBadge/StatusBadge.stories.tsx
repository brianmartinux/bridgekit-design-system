import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';
import { statusTokens } from '../../tokens/tokens';

const meta = {
  title: 'Components/StatusBadge',
  component: StatusBadge,
  args: {
    status: 'new'
  }
} satisfies Meta<typeof StatusBadge>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Playground: Story = {};

export const AllStatuses: Story = {
  render: () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
      {Object.keys(statusTokens).map((status) => (
        <StatusBadge key={status} status={status as keyof typeof statusTokens} />
      ))}
    </div>
  )
};
