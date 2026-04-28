import { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../Button';
import { Drawer } from './Drawer';

const meta = {
  title: 'Components/Drawer',
  component: Drawer,
  args: {
    isOpen: true,
    title: 'Pricing page content QA',
    onClose: () => undefined,
    children: null
  },
  parameters: {
    layout: 'fullscreen'
  }
} satisfies Meta<typeof Drawer>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Open: Story = {
  args: {},
  render: () => {
    const Demo = () => {
      const [isOpen, setIsOpen] = useState(true);

      return (
        <div style={{ minHeight: '100vh', padding: '2rem' }}>
          <Button variant="secondary" onClick={() => setIsOpen(true)}>
            Re-open drawer
          </Button>
          <Drawer
            isOpen={isOpen}
            title="Pricing page content QA"
            description="Copy pass requested before the next round of stakeholder feedback."
            onClose={() => setIsOpen(false)}
            footer={
              <>
                <Button>Approve</Button>
                <Button variant="secondary">Request details</Button>
              </>
            }
          >
            <p style={{ maxWidth: '28rem', lineHeight: 1.6 }}>
              The drawer is intentionally simple: clear title, semantic dialog treatment, keyboard escape handling, and
              focus-visible states on the interactive controls.
            </p>
          </Drawer>
        </div>
      );
    };

    return <Demo />;
  }
};
