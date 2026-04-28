import { useEffect } from 'react';
import type { ReactNode } from 'react';
import './toast.css';

export interface ToastProps {
  open: boolean;
  title: string;
  message: string;
  tone?: 'info' | 'success';
  onClose: () => void;
  action?: ReactNode;
  duration?: number;
}

export function Toast({
  open,
  title,
  message,
  tone = 'info',
  onClose,
  action,
  duration = 3200
}: ToastProps) {
  useEffect(() => {
    if (!open || duration <= 0) {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      onClose();
    }, duration);

    return () => {
      window.clearTimeout(timer);
    };
  }, [duration, onClose, open]);

  if (!open) {
    return null;
  }

  return (
    <div className={`bridge-toast bridge-toast--${tone}`} role="status" aria-live="polite">
      <div>
        <strong>{title}</strong>
        <p>{message}</p>
      </div>
      <div className="bridge-toast__actions">
        {action}
        <button type="button" className="bridge-toast__dismiss" onClick={onClose}>
          Dismiss
        </button>
      </div>
    </div>
  );
}
