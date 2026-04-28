import { useEffect, useState } from 'react';
import { Button } from '../../components/Button';
import { DataTable, type DataTableColumn } from '../../components/DataTable';
import { Drawer } from '../../components/Drawer';
import { FilterBar } from '../../components/FilterBar';
import { StatusBadge } from '../../components/StatusBadge';
import { Toast } from '../../components/Toast';
import { statusOptions, type StatusKey } from '../../tokens/tokens';
import { reviewQueueRecords, type ReviewRecord } from './reviewQueueData';
import './reviewQueue.css';

export function ReviewQueue() {
  const [searchValue, setSearchValue] = useState('');
  const [statusValue, setStatusValue] = useState('all');
  const [selectedRecordId, setSelectedRecordId] = useState<string | null>(reviewQueueRecords[0]?.id ?? null);
  const [isLoading, setIsLoading] = useState(true);
  const [toast, setToast] = useState<{ title: string; message: string; tone: 'info' | 'success' } | null>(null);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsLoading(false);
    }, 550);

    return () => {
      window.clearTimeout(timer);
    };
  }, []);

  const filteredRecords = reviewQueueRecords.filter((record) => {
    const matchesStatus = statusValue === 'all' || record.status === statusValue;
    const haystack = `${record.title} ${record.requester} ${record.owner}`.toLowerCase();
    const matchesSearch = haystack.includes(searchValue.trim().toLowerCase());
    return matchesStatus && matchesSearch;
  });

  const selectedRecord =
    filteredRecords.find((record) => record.id === selectedRecordId) ??
    reviewQueueRecords.find((record) => record.id === selectedRecordId) ??
    null;

  const activeRecordsCount = reviewQueueRecords.filter((record) => !['approved', 'rejected'].includes(record.status)).length;

  function updateRecordToast(status: StatusKey, record: ReviewRecord) {
    const labelMap: Record<StatusKey, string> = {
      new: 'Marked as new',
      inReview: 'Moved into review',
      needsInfo: 'Request updated',
      interviewing: 'Interview scheduled',
      approved: 'Approved',
      rejected: 'Closed'
    };

    setToast({
      title: labelMap[status],
      message: `${record.title} now reflects the ${
        statusOptions.find((option) => option.value === status)?.label?.toLowerCase() ?? status
      } state.`,
      tone: status === 'approved' ? 'success' : 'info'
    });
  }

  const columns: DataTableColumn<ReviewRecord>[] = [
    {
      key: 'title',
      header: 'Review request',
      render: (record) => (
        <div className="review-queue__table-primary">
          <span className="review-queue__title">{record.title}</span>
          <span className="review-queue__supporting">
            {record.requester} · owned by {record.owner}
          </span>
        </div>
      ),
      sortValue: (record) => record.title
    },
    {
      key: 'submittedAt',
      header: 'Submitted',
      render: (record) => (
        <div className="review-queue__table-primary">
          <span className="review-queue__title">{new Date(record.submittedAt).toLocaleDateString()}</span>
          <span className="review-queue__supporting">{record.dueLabel}</span>
        </div>
      ),
      sortValue: (record) => record.submittedAt
    },
    {
      key: 'status',
      header: 'Status',
      render: (record) => <StatusBadge status={record.status} />,
      sortValue: (record) => statusOptions.findIndex((option) => option.value === record.status)
    }
  ];

  return (
    <>
      <section className="review-queue" aria-label="BridgeKit review queue example">
        <header className="review-queue__header">
          <div>
            <p className="landing-eyebrow">Review Queue demo</p>
            <h3>One compact workflow, built from reusable pieces.</h3>
            <p>
              This example keeps the scope small on purpose: filters, status badges, table states, a detail drawer,
              and lightweight feedback after an action.
            </p>
          </div>
          <div className="review-queue__metric" aria-label="Open review items">
            <span className="review-queue__metric-label">Open items</span>
            <span className="review-queue__metric-value">{activeRecordsCount}</span>
          </div>
        </header>

        <FilterBar
          searchValue={searchValue}
          onSearchChange={setSearchValue}
          statusValue={statusValue}
          onStatusChange={setStatusValue}
          statusOptions={statusOptions}
          onReset={() => {
            setSearchValue('');
            setStatusValue('all');
          }}
          resultsCount={filteredRecords.length}
        />

        <DataTable
          ariaLabel="Review queue records"
          columns={columns}
          rows={filteredRecords}
          loading={isLoading}
          selectedRowId={selectedRecordId}
          onRowSelect={(record) => setSelectedRecordId(record.id)}
        />
      </section>

      <Drawer
        isOpen={Boolean(selectedRecord)}
        title={selectedRecord?.title ?? ''}
        description={selectedRecord?.summary}
        onClose={() => setSelectedRecordId(null)}
        footer={
          selectedRecord ? (
            <>
              <Button
                onClick={() => updateRecordToast('approved', selectedRecord)}
                leadingIcon="✓"
              >
                Approve
              </Button>
              <Button
                variant="secondary"
                onClick={() => updateRecordToast('needsInfo', selectedRecord)}
              >
                Request details
              </Button>
              <Button variant="quiet" onClick={() => setSelectedRecordId(null)}>
                Close
              </Button>
            </>
          ) : null
        }
      >
        {selectedRecord ? (
          <div className="review-queue__drawer-grid">
            <section className="review-queue__drawer-card">
              <h4>Snapshot</h4>
              <p>{selectedRecord.requester}</p>
              <p>{selectedRecord.owner}</p>
              <p>{new Date(selectedRecord.submittedAt).toLocaleDateString()}</p>
              <div style={{ marginTop: '0.85rem' }}>
                <StatusBadge status={selectedRecord.status} />
              </div>
            </section>
            <section className="review-queue__drawer-card">
              <h4>Summary</h4>
              <p>{selectedRecord.summary}</p>
            </section>
            <section className="review-queue__drawer-card">
              <h4>Review notes</h4>
              <ul className="review-queue__note-list">
                {selectedRecord.notes.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </section>
          </div>
        ) : null}
      </Drawer>

      <Toast
        open={Boolean(toast)}
        title={toast?.title ?? ''}
        message={toast?.message ?? ''}
        tone={toast?.tone ?? 'info'}
        onClose={() => setToast(null)}
      />
    </>
  );
}
