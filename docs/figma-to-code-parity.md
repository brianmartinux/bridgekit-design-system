# Figma-to-Code Parity

BridgeKit treats component parity as a translation problem. Figma properties describe design intent. React props make that intent explicit in code.

## Mapping model

| Figma property | React prop or pattern | Notes |
| --- | --- | --- |
| Variant | `variant` | Used for button hierarchy and visual emphasis. |
| Size | `size` | Kept small and predictable: `sm`, `md`, `lg`. |
| State | `disabled`, `loading`, `selected`, `isOpen` | State stays explicit instead of being implied by visuals alone. |
| Slot | `leadingIcon`, `trailingIcon`, `children` | Allows flexible content without changing the component contract. |
| Status token | `status` | Maps semantic workflow state to a documented badge treatment. |

## Why this matters

- Designers can name the property once and see the same behavior represented in Storybook.
- Engineers get a smaller, more stable API surface.
- Review conversations can focus on intent and behavior instead of one-off screenshots.

## Practical rule

If a Figma property is doing real interaction work, it should usually become a prop or a documented state in code. If it only exists to patch a single frame, it probably should not become part of the component API.
