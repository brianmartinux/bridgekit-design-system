import { Button } from '../Button';
import { Input } from '../Input';
import { Select, type SelectOption } from '../Select';
import './filterBar.css';

export interface FilterBarProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  statusValue: string;
  onStatusChange: (value: string) => void;
  statusOptions: SelectOption[];
  onReset: () => void;
  resultsCount: number;
}

export function FilterBar({
  searchValue,
  onSearchChange,
  statusValue,
  onStatusChange,
  statusOptions,
  onReset,
  resultsCount
}: FilterBarProps) {
  return (
    <section className="bridge-filter-bar" aria-label="Review queue filters">
      <div className="bridge-filter-bar__controls">
        <Input
          label="Search"
          placeholder="Search title, owner, or requester"
          value={searchValue}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        <Select
          label="Status"
          options={statusOptions}
          value={statusValue}
          onChange={(event) => onStatusChange(event.target.value)}
        />
      </div>
      <div className="bridge-filter-bar__meta">
        <p className="bridge-filter-bar__results" aria-live="polite">
          {resultsCount} {resultsCount === 1 ? 'record' : 'records'}
        </p>
        <Button variant="secondary" onClick={onReset}>
          Reset filters
        </Button>
      </div>
    </section>
  );
}
