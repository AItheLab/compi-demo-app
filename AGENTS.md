# compi-demo-app

## Arquitectura del proyecto
- Proyecto frontend unico con `Vue 3` + `TypeScript` + `Vite`.
- Enfoque `Atomic Design` en `src/components`:
  - `atoms`: componentes base reutilizables sin dependencia de dominio.
  - `molecules`: composicion de varios atoms para una intencion concreta.
  - `organisms`: composicion de molecules/atoms para secciones completas.
- `App.vue` se usa como demo de integracion del Design System ficticio.

## Convenciones de naming
- Componentes Vue: `PascalCase` (ej. `BaseButton.vue`, `UserList.vue`).
- Atoms base usan prefijo `Base`.
- Interfaces de props: `PascalCase` con sufijo `Props` y exportadas desde el SFC.
- Tests: mismo nombre del componente + `.test.ts` en el mismo nivel.
- Stories: mismo nombre del componente + `.stories.ts` en el mismo nivel.
- Tipos de dominio compartidos en `src/types`.

## Estructura de carpetas
- `src/components/atoms`: `BaseButton`, `BaseInput`, `BaseIcon`, `BaseBadge`, `BaseAvatar`.
- `src/components/molecules`: `SearchBar`, `UserCard`, `AlertBanner`.
- `src/components/organisms`: `NavigationBar`, `UserList`.
- `src/styles/tokens.css`: design tokens globales por CSS custom properties.
- `src/styles/tailwind.css`: entrada de Tailwind (`@tailwind base/components/utilities`).
- `src/styles/main.css`: estilos globales de layout/base.
- `.storybook`: configuracion Storybook 8 para Vue + Vite.

## Uso de design tokens
- Tokens definidos en `src/styles/tokens.css` bajo `:root`.
- Categorias obligatorias de tokens:
  - `colors` (`--color-*`)
  - `spacing` (`--space-*`)
  - `border-radius` (`--radius-*`)
  - `typography` (`--font-*`)
- Regla: los estilos de componentes usan `var(--token)` para color, espaciado, tipografia y radios; evitar hardcodes salvo casos justificados (ej. `white`, gradientes decorativos globales).
- Tailwind esta extendido para reutilizar tokens en utilidades (`tailwind.config.ts`).

## Patrones obligatorios
- API de componentes: `Composition API` con `defineComponent` y `setup`.
- Props tipadas con `TypeScript` y con interfaz exportada por componente.
- Cada componente debe incluir:
  - Implementacion `.vue`
  - Test de Vitest `.test.ts` (render + interaccion basica)
  - Story de Storybook `.stories.ts`
- Evitar logica de negocio en atoms; componer en molecules/organisms.
- Mantener tests colocalizados junto al componente al que validan.

## Calidad y tooling
- `TypeScript strict` activado en `tsconfig.json`.
- `ESLint` (flat config) + `Prettier` configurados para `.ts` y `.vue`.
- `Vitest` con `jsdom` y `@vue/test-utils`.
- `Storybook 8` con `@storybook/vue3-vite`.

## Comandos disponibles
- `npm run dev`: iniciar app en modo desarrollo (`Vite`).
- `npm run build`: type-check (`vue-tsc`) + build produccion.
- `npm run preview`: servir build local.
- `npm run test`: ejecutar Vitest en watch mode.
- `npm run test:run`: ejecutar Vitest una sola vez.
- `npm run lint`: lint de TypeScript/Vue.
- `npm run lint:fix`: lint con autofix.
- `npm run format`: formateo con Prettier.
- `npm run storybook`: levantar Storybook local.
- `npm run build-storybook`: generar build estatico de Storybook.

## Restricciones operativas
- No crear `README.md` generico: `AGENTS.md` es la documentacion principal del repo.
- Mantener los componentes del Design System desacoplados de APIs/backend.
- Cualquier nuevo componente debe respetar Atomic Design y salir con test + story en el mismo PR.
