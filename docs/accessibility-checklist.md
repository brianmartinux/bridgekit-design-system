# Accessibility Checklist

BridgeKit is a demo system, but accessibility still needs to be visible in the artifact.

## Keyboard

- Interactive controls must be reachable with the keyboard.
- Table row selection should work without requiring a mouse.
- Drawer should close with `Escape`.
- Storybook examples should expose disabled, loading, and selected states.

## Focus

- Buttons, inputs, selects, and drawer controls need a visible `:focus-visible` treatment.
- Focus should move into the drawer when it opens and return when it closes.

## Labels and semantics

- Inputs and selects need visible labels.
- Status badges should include accessible text and not depend on color alone.
- Drawer should expose a semantic label through its title.
- Data table should keep header semantics and announce sort state where available.

## Contrast and state clarity

- Preserve readable contrast in quiet and secondary button variants.
- Loading, empty, selected, and disabled states should be distinguishable.
- Status differences should be communicated by label and code, not just hue.

## Table and drawer checks

- Verify table row hover states do not remove text clarity.
- Confirm the drawer close control is easy to find and use.
- Review background scroll behavior while the drawer is open.
