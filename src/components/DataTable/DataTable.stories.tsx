import type { Meta, StoryObj } from '@storybook/react';
import { DataTable, type DataTableColumn, type DataTableProps } from './DataTable';
import { StatusBadge } from '../StatusBadge';
import { reviewQueueRecords, type ReviewRecord } from '../../examples/ReviewQueue';

function ReviewRecordTable(props: DataTableProps<ReviewRecord>) {
  return <DataTable<ReviewRecord> {...props} />;
}

const columns: DataTableColumn<ReviewRecord>[] = [
  {
    key: 'title',
    header: 'Review request',
    render: (record) => (
      <div style={{ display: 'grid', gap: '0.2rem' }}>
        <strong>{record.title}</strong>
        <span style={{ color: 'var(--color-muted-ink)' }}>{record.requester}</span>
      </div>
    ),
    sortValue: (record) => record.title
  },
  {
    key: 'submittedAt',
    header: 'Submitted',
    render: (record) => new Date(record.submittedAt).toLocaleDateString(),
    sortValue: (record) => record.submittedAt
  },
  {
    key: 'status',
    header: 'Status',
    render: (record) => <StatusBadge status={record.status} />,
    sortValue: (record) => record.status
  }
];

const meta = {
  title: 'Components/DataTable',
  component: ReviewRecordTable,
  args: {
    ariaLabel: 'Review queue sample',
    columns,
    rows: reviewQueueRecords.slice(0, 4)
  },
  parameters: {
    layout: 'padded'
  }
} satisfies Meta<typeof ReviewRecordTable>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {},
  render: () => (
    <DataTable
      ariaLabel="Review queue sample"
      columns={columns}
      rows={reviewQueueRecords.slice(0, 4)}
      selectedRowId={reviewQueueRecords[1].id}
    />
  )
};

export const Loading: Story = {
  args: {},
  render: () => <DataTable ariaLabel="Loading sample" columns={columns} rows={[]} loading />
};

export const Empty: Story = {
  args: {},
  render: () => <DataTable ariaLabel="Empty sample" columns={columns} rows={[]} />
};
