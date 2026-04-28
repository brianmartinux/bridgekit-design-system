# BridgeKit

BridgeKit is a small AI-assisted design systems workflow demo. It is meant to function as a portfolio artifact for a Senior Product Designer or UX Design Engineer who wants to show how design intent becomes reusable component behavior, documentation, and a believable example workflow.

This is intentionally not a fake large SaaS product. The scope stays small so the artifact can focus on:

- React + TypeScript component architecture
- reusable components with states and variants
- Storybook documentation
- accessibility notes
- Figma-to-code parity thinking
- AI workflow documentation

## Project structure

- `src/components/*`: reusable UI primitives and patterns
- `src/examples/ReviewQueue`: a compact example workflow
- `src/tokens/tokens.ts`: status and design token metadata
- `docs/*`: portfolio-facing documentation

## Scripts

- `npm run dev`: start the Vite app
- `npm run storybook`: start Storybook
- `npm run build`: build the landing site to `dist` and copy docs
- `npm run build-storybook`: build Storybook
- `npm run build:all`: build the app, then place Storybook under `dist/storybook`
- `npm run lint`: run ESLint
- `npm run typecheck`: run TypeScript checks

## Local development

```bash
npm install
npm run dev
```

To work on component documentation in isolation:

```bash
npm run storybook
```

## Deployment to Cloudflare Pages

BridgeKit is set up for a simple static deployment.

1. Run `npm run build:all`.
2. Deploy the `dist` directory to Cloudflare Pages.
3. Set the build command to `npm run build:all` if Cloudflare is building from the repo.
4. Set the output directory to `dist`.

Optional environment variable:

- `VITE_REPO_URL`: when set, the landing page will render a live GitHub repository link.

The built Storybook output lives at `/storybook/`, and the markdown docs are copied into `/docs/`.

## Why this exists

The point of the project is to demonstrate a practical workflow:

- define a small component surface
- map design properties to code props
- document states and usage
- show one believable example where the pieces work together

That is often more useful in a portfolio than a broader but less disciplined demo.
