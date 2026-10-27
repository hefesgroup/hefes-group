# Hefes Technology Group website

Marketing website for [hefesgroup.com](https://hefesgroup.com), built with Next.js 16 (App Router), React 19, TypeScript and Tailwind CSS v4.

All content is static and lives in typed modules under `lib/`. The only server code is the contact form endpoint, which sends enquiries through Amazon SES.

## Requirements

- Node.js 22 (see `.nvmrc`)
- pnpm 9 (`corepack enable`)

## Development

```bash
pnpm install
cp .env.example .env   # only needed to test the contact form
pnpm dev               # http://localhost:3000
```

Other scripts:

```bash
pnpm build       # production build (standalone output)
pnpm start       # serve the production build
pnpm lint        # ESLint
pnpm typecheck   # TypeScript
```

## Environment variables

Used only by `app/api/contact/route.ts`. Without them the site works, but the form shows a "not configured" error.

| Variable | Purpose |
|---|---|
| `AWS_REGION` | SES region, e.g. `eu-west-1` |
| `AWS_ACCESS_KEY_ID` / `AWS_SECRET_ACCESS_KEY` | IAM user allowed to call `ses:SendEmail` |
| `CONTACT_FROM_EMAIL` | Verified SES sender, e.g. `no-reply@hefesgroup.com` |
| `CONTACT_TO_EMAIL` | Inbox that receives enquiries, e.g. `office@hefesgroup.com` |
| `CONTACT_DEBUG` | `true` logs SES message ids and returns them in the API response |

The sender's replies go straight to the visitor (`Reply-To` is their address). Each enquiry gets a reference shown on the success screen and in the email subject.

## Deployment (Coolify)

The repository includes a multi-stage `Dockerfile` that builds Next.js in `standalone` mode and runs it as a non-root user on port 3000.

1. In Coolify, create a resource from this repository with the **Dockerfile** build pack.
2. Set the exposed port to `3000`.
3. Add the environment variables above as runtime variables.
4. Point the `hefesgroup.com` domain at the resource.

Local smoke test of the image:

```bash
docker build -t hefes-group .
docker run -p 3000:3000 --env-file .env hefes-group
```

## Project structure

```
app/                 routes, layout, global styles, sitemap, robots, API route
  api/contact/       SES contact endpoint
  work/[slug]/       case-study pages, generated from lib/projects.ts
components/          UI; client components are marked 'use client'
lib/                 content (projects, services, products, about, legal), styles, motion
public/              images and logos
```

### Editing content

- **Case studies**: `lib/projects.ts`. A new entry automatically gets a `/work/<slug>` page, a card on `/work`, and a sitemap entry.
- **Services**: `lib/services.ts`. **Products**: `lib/products.ts`. **About**: `lib/about.ts`.
- **Contact details and navigation**: `lib/site.ts`. **Privacy and credits**: `lib/legal.ts`.

### Styling

Tailwind v4 with design tokens in `app/globals.css`. Breakpoints are desktop-first: use `max-md:` (≤760px), `max-xl:` (≤1050px), `max-xs:` (≤450px) and so on; `2xl:` is the only min-width breakpoint. Shared class strings live in `lib/styles.ts`.

### Motion

Visitors can switch motion off from the footer; the choice is stored in `localStorage` and also respects the OS reduced-motion setting. It disables the hero parallax, scroll reveal, page transitions and all CSS transitions.
