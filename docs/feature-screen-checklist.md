# Feature Screen Implementation Checklist

Use this checklist for every new page or functional screen. Keep the route, feature logic, shared UI, tests, and operational notes aligned. Do not invent backend behavior: confirm the API contract and existing .NET business rules first.

## 1. Scope and design

- [ ] Describe the user goal, screen states, allowed actions, and out-of-scope behavior.
- [ ] Confirm the route, access requirements, navigation entry point, and expected responsive layouts.
- [ ] Check existing screens, shared shadcn/ui components, design tokens, and feature modules before adding new abstractions.
- [ ] Confirm labels, copy, validation rules, loading/empty/error states, and accessibility requirements.
- [ ] Identify required API contracts, permissions, personal data, and dependencies; document unresolved decisions.

## 2. Route and architecture

- [ ] Add a thin route under `apps/web/src/app/`; keep route-specific metadata and routing there.
- [ ] Put screen behavior and feature-specific components under `apps/web/src/features/<feature>/`.
- [ ] Put a component under `apps/web/src/components/` only when it has a reusable cross-feature purpose.
- [ ] Put shared non-UI logic under `apps/web/src/lib/`; keep fetches out of presentation components.
- [ ] Add or update shared types only after confirming the source-of-truth contract.
- [ ] Preserve existing URL and navigation behavior, or explicitly document and test intentional changes.

## 3. UI, accessibility, and responsive behavior

- [ ] Build on shared components in `apps/web/src/components/ui/`; do not recreate buttons, inputs, selects, checkboxes, radio groups, or dialogs locally.
- [ ] Reuse theme tokens and existing typography, colors, spacing, and feedback patterns.
- [ ] Use semantic landmarks and heading order; associate every input with a visible or accessible label.
- [ ] Support keyboard interaction, visible focus, screen-reader status/error announcements, and modal focus handling.
- [ ] Cover narrow mobile, tablet, and desktop layouts; avoid horizontal overflow.
- [ ] Provide loading, empty, success, and recoverable error states as applicable.
- [ ] Avoid fake success states. Label demo-only behavior clearly until the real service is connected.

## 4. Data and security

- [ ] Validate user input at the UI boundary for usability and enforce authoritative validation on the server.
- [ ] Handle API errors explicitly; do not swallow errors or present failures as success.
- [ ] Confirm authorization on the server for protected operations; client-side route hiding is not authorization.
- [ ] Do not expose secrets in client code or `NEXT_PUBLIC_*` environment variables.
- [ ] Minimize personal data in state, logs, URLs, analytics, and browser storage.
- [ ] Use safe rendering and safe link handling; review file upload type, size, and lifecycle requirements.
- [ ] Confirm privacy, retention, and consent requirements before collecting or persisting personal data.

## 5. Verification

- [ ] Add focused component/route tests for the happy path, validation, error states, and important edge cases.
- [ ] Add accessibility or interaction tests for keyboard-operable controls and dialogs.
- [ ] Verify expected output and behavior, not only that the page renders.
- [ ] Run `pnpm format:check`, `pnpm lint`, `pnpm typecheck`, relevant tests, and `pnpm build`.
- [ ] Check browser console, network requests, mobile layout, and the final Git diff.
- [ ] Update related documentation and environment examples when contracts or operations change.

## 6. Release and operations

- [ ] Confirm required environment variables and deployment configuration; document safe defaults.
- [ ] Ensure health monitoring, useful error visibility, and rollback expectations are understood.
- [ ] Confirm API compatibility, migrations, feature flags, and rollout sequencing with backend owners.
- [ ] Verify production behavior with a smoke test without exposing real user data.
- [ ] Include user-visible changes, operational impact, and known limitations in the pull request.

## Definition of done

- [ ] The feature follows the existing route → feature → shared UI/lib boundaries.
- [ ] Required states, validation, accessibility, and responsive behavior have been verified.
- [ ] Checks and relevant tests pass, or any unavailable checks are clearly reported.
- [ ] Documentation, environment requirements, and operational notes match the implementation.
