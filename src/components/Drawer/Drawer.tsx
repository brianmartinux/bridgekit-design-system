import { useEffect, useId, useRef } from 'react';
import type { ReactNode } from 'react';
import './drawer.css';

export interface DrawerProps {
  isOpen: boolean;
  title: string;
  description?: string;
  onClose: () => void;
  children: ReactNode;
  footer?: ReactNode;
}

export function Drawer({ isOpen, title, description, onClose, children, footer }: DrawerProps) {
  const titleId = useId();
  const descriptionId = useId();
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const previousFocus = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const previousOverflow = document.body.style.overflow;

    closeButtonRef.current?.focus();
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener('keydown', handleKeyDown);
      previousFocus?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="bridge-drawer" role="presentation">
      <button
        type="button"
        className="bridge-drawer__backdrop"
        aria-label="Close details panel"
        onClick={onClose}
      />
      <aside
        className="bridge-drawer__panel"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={description ? descriptionId : undefined}
      >
        <header className="bridge-drawer__header">
          <div>
            <p className="bridge-drawer__eyebrow">Review detail</p>
            <h2 id={titleId}>{title}</h2>
            {description ? <p id={descriptionId}>{description}</p> : null}
          </div>
          <button
            ref={closeButtonRef}
            className="bridge-drawer__close"
            type="button"
            aria-label="Close details panel"
            onClick={onClose}
          >
            ×
          </button>
        </header>
        <div className="bridge-drawer__body">{children}</div>
        {footer ? <footer className="bridge-drawer__footer">{footer}</footer> : null}
      </aside>
    </div>
  );
}
