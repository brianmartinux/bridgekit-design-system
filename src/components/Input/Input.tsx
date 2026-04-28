import { useId } from 'react';
import type { InputHTMLAttributes } from 'react';
import './input.css';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  hint?: string;
  error?: string;
}

export function Input({ label, hint, error, id, className = '', ...props }: InputProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const hintId = hint ? `${inputId}-hint` : undefined;
  const errorId = error ? `${inputId}-error` : undefined;
  const describedBy = [hintId, errorId].filter(Boolean).join(' ') || undefined;

  return (
    <label className={`bridge-field ${className}`.trim()} htmlFor={inputId}>
      <span className="bridge-field__label">{label}</span>
      <input
        className={`bridge-field__control ${error ? 'bridge-field__control--error' : ''}`.trim()}
        id={inputId}
        aria-describedby={describedBy}
        aria-invalid={Boolean(error)}
        {...props}
      />
      {hint ? (
        <span className="bridge-field__hint" id={hintId}>
          {hint}
        </span>
      ) : null}
      {error ? (
        <span className="bridge-field__error" id={errorId}>
          {error}
        </span>
      ) : null}
    </label>
  );
}
