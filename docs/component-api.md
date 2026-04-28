# Component API

This document covers the core props for the BridgeKit demo components.

## Button

- `variant`: `primary | secondary | quiet | danger`
- `size`: `sm | md | lg`
- `loading`: boolean
- `disabled`: boolean
- `leadingIcon`: React node
- `trailingIcon`: React node

## Input

- `label`: string
- `hint`: string
- `error`: string
- Native input props such as `value`, `placeholder`, `onChange`

## Select

- `label`: string
- `hint`: string
- `error`: string
- `options`: array of `{ label, value }`
- Native select props such as `value`, `onChange`

## StatusBadge

- `status`: `new | inReview | needsInfo | interviewing | approved | rejected`

## FilterBar

- `searchValue`: string
- `onSearchChange(value)`: callback
- `statusValue`: string
- `onStatusChange(value)`: callback
- `statusOptions`: array of select options
- `onReset()`: callback
- `resultsCount`: number

## DataTable

- `ariaLabel`: string
- `columns`: column config with `key`, `header`, `render`, and optional `sortValue`
- `rows`: data array
- `loading`: boolean
- `emptyTitle`: string
- `emptyMessage`: string
- `selectedRowId`: string or `null`
- `onRowSelect(row)`: callback

## Drawer

- `isOpen`: boolean
- `title`: string
- `description`: string
- `onClose()`: callback
- `children`: content region
- `footer`: optional action region

## Toast

- `open`: boolean
- `title`: string
- `message`: string
- `tone`: `info | success`
- `onClose()`: callback
- `action`: optional action UI
- `duration`: milliseconds
