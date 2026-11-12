# IKAK Members Portal – Frontend First

Frontend-first implementation of the IKAK Members Portal. The initial delivery covers the authentication and membership application screens based on the supplied legacy screenshots.

## Current scope

- Sign In (`/login`)
- Membership Application (`/register`)
- Photo selection and crop-preview modal (client-side UI)
- Password Reset (`/forgot-password`)

Member Approval and Member Details are planned next. Backend integration is intentionally deferred.

## Stack

- Next.js 15 / React 19
- TypeScript
- Tailwind CSS 4
- Lucide React (available for subsequent UI components)

## Run locally

Requirements: Node.js 20+ and pnpm 10+

```bash
pnpm install
pnpm dev
```

Open http://localhost:3000.

## Frontend-only behavior

- Forms perform browser-side validation only.
- Registration and login submissions show demo feedback; no account is created and no authentication is performed.
- Password reset does not send an email.
- Photo selection and rotation preview run in the browser. The current crop modal is a visual crop-preview flow; final image cropping/upload will be connected to the backend/storage implementation later.
- No PostgreSQL connection is required.

## Architecture notes

Keep API calls behind service modules when backend integration is introduced. Do not place API requests directly inside presentation components. Existing PostgreSQL schema and .NET business rules must be inspected before implementing backend workflows.
