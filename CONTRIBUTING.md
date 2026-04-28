# Contributing

BridgeKit is a public demo system and portfolio artifact, so contributions should preserve clarity more than raw feature count.

## Working principles

- Keep the scope small and believable.
- Prefer reusable component improvements over page-specific patches.
- Document new states or API changes in Storybook and markdown notes.
- Preserve accessible labels, keyboard behavior, and visible focus states.

## Contribution flow

1. Install dependencies with `npm install`.
2. Run `npm run dev` for the landing page or `npm run storybook` for component work.
3. Before opening a change, run `npm run lint`, `npm run typecheck`, `npm run build`, and `npm run build-storybook`.

## What not to add

- Large fake product surface area
- Backend services or database setup
- Hype-heavy portfolio copy
- Component props that only solve one isolated demo case
