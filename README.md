# IKAK Members Portal

Frontend-first implementation of the IKAK Members Portal using Next.js App Router. The current UI includes sign-in, membership application, photo preview and password-reset flows. Member administration routes are placeholders pending analysis of the existing .NET workflows.

## Stack and requirements

- Node.js 20+
- pnpm 10+ (the repository declares pnpm 10.12.1)
- Next.js 15, React 19, TypeScript, Tailwind CSS 4
- shadcn/ui component conventions with Radix UI primitives

## Run locally

On Windows, double-click `run.bat` to start the portal.

Or run this from the project folder:

```powershell
npm run dev
```

Install workspace dependencies once before the first run:

```powershell
corepack pnpm install
```

Open http://localhost:3000. Copy `.env.example` to `.env.local` when configuring local environment values. No database is required for the current frontend demo.

## Project structure

```text
apps/web/src/
  app/                 App Router pages, layouts, and route-level error UI
  components/          Shared presentation components
  features/            Feature-specific screens and state
  lib/                 Shared infrastructure (for example, API client)
packages/shared/       Contracts shared between workspace packages
docs/                  Scope and implementation checklists
```

Keep route files focused on routing and metadata. Put screen behavior in its feature, reuse UI only when it has a stable cross-feature contract, and keep network access in `lib`/service modules rather than presentation components.

Shared shadcn/ui components live in `apps/web/src/components/ui/`; design tokens are defined in `apps/web/src/app/globals.css` and component-generation settings in `apps/web/components.json`. Prefer these shared controls over one-off buttons, form fields, selects, dialogs, and feedback styles.

## Quality checks

```bash
pnpm format
pnpm format:check
pnpm lint
pnpm typecheck
pnpm build
pnpm check
```

Run `pnpm check` before opening a pull request. Add or update focused tests when a test runner is introduced or when the change affects test-covered behavior.

## Current behavior and constraints

- Authentication, account creation, and password reset are demos only. The UI does not authenticate users, create accounts, or send emails.
- Membership application performs browser-side validation and demo feedback only. It does not submit data to an API.
- Photo selection and rotation are local previews; no image upload or persistent crop is performed.
- Member registration, approval, and details routes are placeholders. Do not implement approval decisions, ownership checks, or business rules until they are mapped from the existing .NET implementation.
- No PostgreSQL connection or schema changes are part of this frontend.

## Environment and operations

`NEXT_PUBLIC_API_BASE_URL` is the browser-visible API base URL. Values with the `NEXT_PUBLIC_` prefix are embedded in client bundles and must never contain secrets. Configure production values in the deployment platform; do not commit `.env.local` files.

The current workspace uses pnpm. Keep the package manager and its lockfile consistent; do not introduce a second package-manager lockfile. Production backend integration requires an agreed API contract, environment configuration, security review, and deployment-specific smoke tests.

## Adding a screen

Use the step-by-step checklist in [`docs/feature-screen-checklist.md`](./docs/feature-screen-checklist.md) for new routes and feature screens.
