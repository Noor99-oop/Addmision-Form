# Copilot / AI agent instructions — Admission form (Vite + React)

Purpose: quickly orient an AI coding agent to be productive in this repo.

1) Big picture
- This is a small single-page React app scaffolded with Vite. The app mounts at the DOM node in [index.html](index.html) and the React entry is [src/main.jsx](src/main.jsx).
- UI is composed of plain function components under `src/assets/components/` (two feature folders: `admision` and `Education`). Example: [src/assets/components/admision/admission.jsx](src/assets/components/admision/admission.jsx).
- Styling: each component has a sibling `.css` file (e.g. `admission.css`, `education.css`) kept alongside the JSX.

2) Important repo-specific conventions
- Folder name spelled `admision` (single "s") — imports throughout use that path. Do NOT rename it unless you update imports.
- Components export default the component and are imported without file extensions (e.g. `import Admission from './assets/components/admision/admission'`). Maintain that style.
- Styling pattern: global CSS files per-component (not CSS modules). Edit the `.css` files in the same folder when changing layout or class names.
- No routing or state management library is present — changes should be local to components unless adding a new dependency.

3) Build / dev / lint workflows
- Start dev server (hot reload): `npm install` then `npm run dev` (uses Vite). See `package.json` scripts.
- Build production bundle: `npm run build`. Preview build locally with `npm run preview`.
- Linting: `npm run lint` runs ESLint. There are no test scripts in this project.

4) Patterns & small gotchas to follow
- Minimal React 19 app: uses `createRoot` in [src/main.jsx](src/main.jsx). Keep components as function components and prefer small, single-responsibility components.
- Form controls are implemented directly in JSX (inputs, selects, checkboxes). You will find arrays used to populate selects (e.g. months, days, years in `admission.jsx`) — follow that pattern when adding similar selects.
- Accessibility: current code uses labels as spans near inputs. When adding new form fields, prefer adding proper `label` elements tied with `htmlFor` where feasible.
- Avoid introducing new global CSS rules that may conflict; prefer adding classes next to the component and updating its local CSS file.

5) Integration and dependencies
- No backend or APIs are present — this is a static front-end. If an API is needed, document where to add an environment variable (Vite uses `import.meta.env`) and add lightweight fetch logic in a new module under `src/lib`.
- Key dev dependency: Vite + `@vitejs/plugin-react`. React version is 19.x per `package.json`.

6) Examples (where to edit / how to run)
- To change initial app wiring: edit [src/main.jsx](src/main.jsx#L1) and [src/App.jsx](src/App.jsx#L1).
- To update the admission form fields: edit [src/assets/components/admision/admission.jsx](src/assets/components/admision/admission.jsx) and its CSS at `src/assets/components/admision/admission.css`.
- To run locally:

  npm install
  npm run dev

7) When merging or refactoring
- If renaming `admision` → `admission`, update all imports in `src` and `index.html` references; run `npm run dev` and fix any ESLint import errors.
- Keep changes minimal and component-scoped. There are no unit tests; add them only if you also add a test runner and include instructions in README.

8) What to ask the repo owner before major changes
- Do you intend to add a backend or persistence layer? (the repo is currently static)
- Is the misspelling of `admision` intentional? Confirm before renaming folders.

If anything here is unclear or you want different emphasis (e.g., more on styling patterns, accessibility, or adding tests), tell me which parts to expand or change.
