import { useState } from 'react';
import type { ReactNode } from 'react';
import './dataTable.css';

type SortDirection = 'asc' | 'desc';

export interface DataTableColumn<T extends { id: string }> {
  key: string;
  header: string;
  render: (row: T) => ReactNode;
  sortValue?: (row: T) => number | string;
  width?: string;
  align?: 'left' | 'right';
}

export interface DataTableProps<T extends { id: string }> {
  ariaLabel: string;
  columns: DataTableColumn<T>[];
  rows: T[];
  loading?: boolean;
  emptyTitle?: string;
  emptyMessage?: string;
  selectedRowId?: string | null;
  onRowSelect?: (row: T) => void;
}

export function DataTable<T extends { id: string }>({
  ariaLabel,
  columns,
  rows,
  loading = false,
  emptyTitle = 'No records match the current filters.',
  emptyMessage = 'Try clearing one or more filters to bring records back into view.',
  selectedRowId,
  onRowSelect
}: DataTableProps<T>) {
  const firstSortableColumn = columns.find((column) => column.sortValue);
  const [sortState, setSortState] = useState<{
    columnKey: string;
    direction: SortDirection;
  } | null>(firstSortableColumn ? { columnKey: firstSortableColumn.key, direction: 'asc' } : null);

  const activeSortColumn = columns.find((column) => column.key === sortState?.columnKey);
  const sortedRows = [...rows];

  if (activeSortColumn?.sortValue && sortState) {
    const sortValue = activeSortColumn.sortValue;

    sortedRows.sort((left, right) => {
      const leftValue = sortValue(left);
      const rightValue = sortValue(right);

      if (leftValue === rightValue) {
        return 0;
      }

      const directionFactor = sortState.direction === 'asc' ? 1 : -1;
      return leftValue > rightValue ? directionFactor : -directionFactor;
    });
  }

  function handleSort(column: DataTableColumn<T>) {
    if (!column.sortValue) {
      return;
    }

    setSortState((current) => {
      if (!current || current.columnKey !== column.key) {
        return { columnKey: column.key, direction: 'asc' };
      }

      return {
        columnKey: column.key,
        direction: current.direction === 'asc' ? 'desc' : 'asc'
      };
    });
  }

  if (loading) {
    return (
      <div className="bridge-data-table bridge-data-table--empty" role="status" aria-live="polite">
        <strong>Loading review records</strong>
        <p>Preparing the queue and component states.</p>
      </div>
    );
  }

  if (sortedRows.length === 0) {
    return (
      <div className="bridge-data-table bridge-data-table--empty" role="status" aria-live="polite">
        <strong>{emptyTitle}</strong>
        <p>{emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="bridge-data-table">
      <table aria-label={ariaLabel}>
        <thead>
          <tr>
            {columns.map((column) => {
              const isActive = sortState?.columnKey === column.key;
              const ariaSort = !column.sortValue
                ? undefined
                : isActive
                  ? sortState?.direction === 'asc'
                    ? 'ascending'
                    : 'descending'
                  : 'none';

              return (
                <th
                  key={column.key}
                  scope="col"
                  style={column.width ? { width: column.width } : undefined}
                  aria-sort={ariaSort}
                  className={column.align === 'right' ? 'bridge-data-table__cell--right' : undefined}
                >
                  {column.sortValue ? (
                    <button
                      type="button"
                      className="bridge-data-table__sort-button"
                      onClick={() => handleSort(column)}
                    >
                      <span>{column.header}</span>
                      <span aria-hidden="true">{isActive ? (sortState?.direction === 'asc' ? '↑' : '↓') : '↕'}</span>
                    </button>
                  ) : (
                    column.header
                  )}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {sortedRows.map((row) => {
            const isSelected = selectedRowId === row.id;

            return (
              <tr
                key={row.id}
                className={isSelected ? 'bridge-data-table__row--selected' : undefined}
                onClick={() => onRowSelect?.(row)}
                onKeyDown={(event) => {
                  if (event.key === 'Enter' || event.key === ' ') {
                    event.preventDefault();
                    onRowSelect?.(row);
                  }
                }}
                aria-selected={isSelected}
                tabIndex={onRowSelect ? 0 : -1}
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className={column.align === 'right' ? 'bridge-data-table__cell--right' : undefined}
                  >
                    {column.render(row)}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
