import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './button.css';

export type ButtonVariant = 'primary' | 'secondary' | 'quiet' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

export function Button({
  variant = 'primary',
  size = 'md',
  loading = false,
  leadingIcon,
  trailingIcon,
  disabled,
  children,
  className = '',
  ...props
}: ButtonProps) {
  const isDisabled = disabled || loading;
  const hasLeadingSlot = Boolean(leadingIcon || trailingIcon);
  const hasTrailingSlot = Boolean(leadingIcon || trailingIcon);

  return (
    <button
      className={`bridge-button bridge-button--${variant} bridge-button--${size} ${className}`.trim()}
      disabled={isDisabled}
      aria-busy={loading || undefined}
      {...props}
    >
      <span className="bridge-button__content">
        {loading ? (
          <span className="bridge-button__spinner" aria-hidden="true" />
        ) : leadingIcon ? (
          <span className="bridge-button__icon" aria-hidden="true">
            {leadingIcon}
          </span>
        ) : hasLeadingSlot ? (
          <span className="bridge-button__placeholder" aria-hidden="true" />
        ) : null}
        <span className="bridge-button__label">{children}</span>
        {loading ? (
          <span className="bridge-button__placeholder" aria-hidden="true" />
        ) : trailingIcon ? (
          <span className="bridge-button__icon" aria-hidden="true">
            {trailingIcon}
          </span>
        ) : hasTrailingSlot ? (
          <span className="bridge-button__placeholder" aria-hidden="true" />
        ) : null}
      </span>
    </button>
  );
}
