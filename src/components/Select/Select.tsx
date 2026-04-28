import { useId } from 'react';
import type { SelectHTMLAttributes } from 'react';
import './select.css';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  hint?: string;
  error?: string;
  options: SelectOption[];
}

export function Select({ label, hint, error, options, id, className = '', ...props }: SelectProps) {
  const generatedId = useId();
  const selectId = id ?? generatedId;
  const hintId = hint ? `${selectId}-hint` : undefined;
  const errorId = error ? `${selectId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <label className={`bridge-select-field ${className}`.trim()} htmlFor={selectId}>
      <span className="bridge-select-field__label">{label}</span>
      <div className="bridge-select-field__control-wrap">
        <select
          className={`bridge-select-field__control ${error ? 'bridge-select-field__control--error' : ''}`.trim()}
          id={selectId}
          aria-describedby={describedBy}
          aria-invalid={Boolean(error)}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="bridge-select-field__caret" aria-hidden="true">
          ▾
        </span>
      </div>
      {hint ? (
        <span className="bridge-select-field__hint" id={hintId}>
          {hint}
        </span>
      ) : null}
      {error ? (
        <span className="bridge-select-field__error" id={errorId}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
