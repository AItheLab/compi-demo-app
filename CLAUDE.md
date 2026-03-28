# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Vite dev server
npm run build        # Type-check (vue-tsc) + production build
npm run preview      # Serve production build locally
npm run test         # Vitest in watch mode
npm run test:run     # Vitest single run (CI)
npm run lint         # ESLint on .ts/.vue files (fails on warnings)
npm run lint:fix     # ESLint with auto-fix
npm run format       # Prettier format all files
npm run storybook    # Storybook dev server on port 6006
npm run build-storybook  # Static Storybook build
```

To run a single test file: `npx vitest run src/components/atoms/BaseButton.test.ts`

## Architecture

Vue 3 + TypeScript + Vite Design System demo following **Atomic Design**:

- `src/components/atoms/` — base reusable components with no domain logic (`Base*` prefix)
- `src/components/molecules/` — compositions of atoms for a specific intent
- `src/components/organisms/` — compositions of molecules/atoms for full page sections
- `src/styles/tokens.css` — all design tokens as CSS custom properties under `:root`
- `src/styles/tailwind.css` — Tailwind entry (`@tailwind base/components/utilities`)
- `src/types/` — shared domain TypeScript types

`App.vue` serves as a demo integration of the Design System; it is not a real application.

## Mandatory Patterns

**Component structure**: Every component must have three co-located files:
1. `ComponentName.vue` — implementation
2. `ComponentName.test.ts` — Vitest tests (render + basic interaction)
3. `ComponentName.stories.ts` — Storybook story

**Component API**: Use `defineComponent` + `setup()` (Composition API). Export a typed props interface named `ComponentNameProps` from the SFC.

**Styling**: Use `var(--token)` for colors, spacing, typography, and border-radius. Avoid hardcoded values except justified cases (e.g., `white`, decorative gradients). Tailwind is extended to reuse token values via `tailwind.config.ts`.

**Layer discipline**: No business logic in atoms. Compose upward in molecules/organisms.

## Naming Conventions

- Vue components: `PascalCase`
- Atom components: `Base` prefix (e.g., `BaseButton`, `BaseInput`)
- Props interfaces: `PascalCase` + `Props` suffix, exported from the SFC
- Tests: `ComponentName.test.ts` (co-located)
- Stories: `ComponentName.stories.ts` (co-located)

## Tooling

- TypeScript strict mode enabled (`noUnusedLocals`, `noUnusedParameters`)
- Path alias `@/*` → `src/*`
- ESLint flat config; `@typescript-eslint/no-explicit-any` and `vue/multi-word-component-names` are disabled
- Prettier: single quotes, trailing commas, `printWidth: 100`
- Vitest: jsdom environment, globals enabled, setup file at `src/test/setup.ts` (stubs Vue transitions)
- Storybook 8 with `@storybook/vue3-vite`; stories located at `src/**/*.stories.@(ts|tsx)`

## Code Style

- Use comments sparingly. Only comment complex or non-obvious code.

## Constraints

- Do not create `README.md` — `AGENTS.md` is the primary repo documentation.
- Keep Design System components decoupled from any API/backend.
- Any new component must follow Atomic Design and ship with test + story in the same PR.
