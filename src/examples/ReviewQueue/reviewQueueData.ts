import type { StatusKey } from '../../tokens/tokens';

export interface ReviewRecord {
  id: string;
  title: string;
  requester: string;
  owner: string;
  status: StatusKey;
  submittedAt: string;
  dueLabel: string;
  summary: string;
  notes: string[];
}

export const reviewQueueRecords: ReviewRecord[] = [
  {
    id: 'rq-104',
    title: 'Pricing page content QA',
    requester: 'Mina P.',
    owner: 'Elijah',
    status: 'new',
    submittedAt: '2026-04-19',
    dueLabel: 'Today',
    summary: 'Copy pass requested before the next round of stakeholder feedback.',
    notes: ['Confirm headline hierarchy.', 'Double-check CTA spacing in mobile breakpoint.']
  },
  {
    id: 'rq-108',
    title: 'Design handoff notes cleanup',
    requester: 'Harper D.',
    owner: 'Nina',
    status: 'inReview',
    submittedAt: '2026-04-20',
    dueLabel: 'Tomorrow',
    summary: 'The team wants clearer acceptance notes before engineering picks up the ticket.',
    notes: ['Reduce duplicate annotation patterns.', 'Keep spacing tokens aligned with the current system.']
  },
  {
    id: 'rq-111',
    title: 'Onboarding checklist revision',
    requester: 'Jules K.',
    owner: 'Elijah',
    status: 'needsInfo',
    submittedAt: '2026-04-17',
    dueLabel: 'Waiting',
    summary: 'Needs clarification on whether legal copy updates are included in this pass.',
    notes: ['Follow up with content design.', 'Do not move to approval without scope confirmation.']
  },
  {
    id: 'rq-112',
    title: 'Navigation interaction audit',
    requester: 'Sara T.',
    owner: 'Lena',
    status: 'interviewing',
    submittedAt: '2026-04-16',
    dueLabel: 'Thursday',
    summary: 'A short walkthrough is booked to understand the friction in the current navigation review.',
    notes: ['Capture keyboard path issues.', 'Document any mismatch between prototype and code behavior.']
  },
  {
    id: 'rq-118',
    title: 'Resource center card variant',
    requester: 'Andre L.',
    owner: 'Nina',
    status: 'approved',
    submittedAt: '2026-04-13',
    dueLabel: 'Closed',
    summary: 'Variant has been approved for implementation with a simplified metadata layout.',
    notes: ['Use the same interaction pattern as the article card.', 'Keep card height flexible for longer titles.']
  },
  {
    id: 'rq-120',
    title: 'Empty state illustration swap',
    requester: 'Tessa W.',
    owner: 'Lena',
    status: 'rejected',
    submittedAt: '2026-04-11',
    dueLabel: 'Closed',
    summary: 'This request is out of scope for the current release window and has been closed.',
    notes: ['Keep previous asset in place for this milestone.', 'Revisit after content review is complete.']
  }
];
