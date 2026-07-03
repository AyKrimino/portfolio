# Portfolio AGENTS.md

## Commands

- Dev: `npm run dev` (Next.js 15 dev server on :3000)
- Build: `npm run build` (static export to `out/`)
- Lint: `npm run lint` (ESLint 9 flat config)
- No test/typecheck scripts in package.json

## Toolchain

- **Bun** (package manager). CI uses `oven-sh/setup-bun@v1`. Lockfile: `bun.lock`
- **Next.js 15**, `output: "export"` — fully static, no server runtime
- **React 19**, **TypeScript** (strict mode), `@/*` alias → `./src/*`
- **Tailwind CSS v4** — PostCSS `@tailwindcss/postcss`, `@import "tailwindcss"`, `@theme inline` blocks, **no** `tailwind.config`
- **shadcn/ui** (New York style), Radix primitives, `tw-animate-css`, `lucide-react`, `clsx` + `tailwind-merge`
- **ESLint 9** flat config: `next/core-web-vitals` + `next/typescript`. Ignores: `node_modules`, `.next`, `out`, `build`, `next-env.d.ts`
- **Prettier** default config (`{}`)

## Architecture

- Single-page layout: route group `src/app/(home)/page.tsx` → `<StickyNav>` + 6 section components
- Sections: Hero, About, Projects, Skills, Resume, Contact — each `min-h-screen`
- IntersectionObserver-based active nav tracking (StickyNav.tsx)
- Projects data: `src/data/projects.ts` typed via `src/types/projects.ts`
- Skills data: `src/data/skills.ts` typed via `src/types/skills.ts`
- UI components: `src/components/ui/` (shadcn). Section components: `src/components/`
- Font: Fira Code via `next/font/google`
- Dark mode via `next-themes` + CSS class strategy (`.dark` variables in `globals.css`)

## Deployment

- GitHub Actions: `.github/workflows/deploy.yml` — push to `main` → bun install → build → publish to GitHub Pages
- Artifact path: `./out`

## Gotchas

- `output: "export"` means no API routes, no rewrites, no ISR
- Add `"use client"` for any component using hooks, event handlers, or state
- No typecheck script exists — use `npx tsc --noEmit` to check types manually
- Tailwind v4: no `plugins`, no `content` config, no `@apply` on custom CSS (use `@layer base` instead)
