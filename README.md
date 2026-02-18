# Choose & Build — Client Decision & Project Hub for Architecture Firms

A centralized project management and client-decision platform for architecture firms: timeline, Decision Log, approvals, contextual messaging, and audit-ready records.

## Tech stack

- React 18, TypeScript, Vite
- React Router 6, TanStack React Query
- Tailwind CSS v3, Radix UI, Sonner, Recharts
- React Hook Form, Zod

## Install and build

```bash
npm install
```

If you use `NODE_ENV=production`, install dev dependencies explicitly:

```bash
npm install --include=dev
```

Then:

```bash
npm run build
```

## Routes

- `/` — Landing
- `/login`, `/signup`, `/forgot-password` — Auth
- `/dashboard` — Overview (protected)
- `/dashboard/projects` — Projects list
- `/dashboard/projects/:projectId` — Project board (timeline)
- `/dashboard/projects/:projectId/decisions` — Decision log
- `/dashboard/projects/:projectId/decisions/new` — Create decision
- `/dashboard/messages`, `/dashboard/files`, `/dashboard/meetings`, `/dashboard/templates`, `/dashboard/reports`
- `/dashboard/settings`, `/dashboard/profile`, `/dashboard/billing`, `/dashboard/checkout`
- `/dashboard/admin`, `/dashboard/admin/users`
- `/privacy`, `/terms`, `/cookies`, `/help`
- `*` — 404
