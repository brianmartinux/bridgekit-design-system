export const statusTokens = {
  new: {
    label: 'New',
    assistiveText: 'New request, not yet reviewed',
    shortCode: 'NW'
  },
  inReview: {
    label: 'In review',
    assistiveText: 'Review in progress',
    shortCode: 'RV'
  },
  needsInfo: {
    label: 'Needs info',
    assistiveText: 'Waiting for additional information',
    shortCode: 'NI'
  },
  interviewing: {
    label: 'Interviewing',
    assistiveText: 'Follow-up conversation scheduled',
    shortCode: 'IV'
  },
  approved: {
    label: 'Approved',
    assistiveText: 'Approved for the next step',
    shortCode: 'AP'
  },
  rejected: {
    label: 'Rejected',
    assistiveText: 'Closed without moving forward',
    shortCode: 'RJ'
  }
} as const;

export type StatusKey = keyof typeof statusTokens;

export const statusOptions = [
  { value: 'all', label: 'All statuses' },
  ...Object.entries(statusTokens).map(([value, token]) => ({
    value,
    label: token.label
  }))
];

export const designTokens = {
  colors: {
    ink: '#1f2b24',
    mutedInk: '#53635c',
    canvas: '#f5f4ef',
    panel: '#fffdf8',
    line: '#d7d2c5',
    accent: '#005f78',
    accentStrong: '#00485c'
  },
  radii: {
    sm: '10px',
    md: '16px',
    lg: '24px',
    pill: '999px'
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    xl: '1.5rem',
    xxl: '2rem'
  }
} as const;

export const componentParityModel = [
  {
    figmaProperty: 'Variant',
    reactProp: 'variant',
    example: 'primary | secondary | quiet | danger'
  },
  {
    figmaProperty: 'Size',
    reactProp: 'size',
    example: 'sm | md | lg'
  },
  {
    figmaProperty: 'State',
    reactProp: 'disabled, loading, selected, open',
    example: 'interactive states stay explicit in code'
  },
  {
    figmaProperty: 'Slot',
    reactProp: 'leadingIcon, trailingIcon, children',
    example: 'content stays flexible without breaking layout'
  }
] as const;
