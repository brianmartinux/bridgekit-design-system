# Design Decisions

## Why the system stays small

This project is meant to show judgment, not surface area. A compact component set makes it easier to demonstrate states, documentation discipline, and design-to-code parity without pretending to be a full product.

## Why the Review Queue exists

The Review Queue is a believable operational pattern for a design systems artifact:

- It needs filters, table states, and lightweight status logic.
- It benefits from a detail drawer and feedback toast.
- It creates a place where reusable primitives can work together.

## Visual direction

The visual language is intentionally calm and editorial:

- warm neutral backgrounds
- blue-green accent for actions
- serif display type to differentiate the artifact from default app scaffolding

This keeps the page from feeling like untouched starter UI while still staying professional.

## Documentation choices

Storybook covers the components in isolation. Markdown notes cover the reasoning around parity, accessibility, and AI usage. That split mirrors how real design-system work often gets communicated.

## Scope guardrails

BridgeKit should be described as a demo system or portfolio artifact. It is not presented as a production-ready platform, and the documentation should stay honest about that.
