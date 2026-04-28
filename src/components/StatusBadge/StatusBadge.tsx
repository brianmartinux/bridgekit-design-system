import { statusTokens, type StatusKey } from '../../tokens/tokens';
import './statusBadge.css';

export interface StatusBadgeProps {
  status: StatusKey;
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const token = statusTokens[status];

  return (
    <span className={`bridge-status-badge bridge-status-badge--${status}`}>
      <span className="bridge-status-badge__marker" aria-hidden="true">
        {token.shortCode}
      </span>
      <span className="bridge-status-badge__label">{token.label}</span>
      <span className="sr-only">{token.assistiveText}</span>
    </span>
  );
}
