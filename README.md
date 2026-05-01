# Mall Deck

A lightweight pitch/landing site built with **Vite + React + Tailwind CSS**.

## Requirements

- Node.js (recommended: latest LTS)
- npm

## Getting started

```bash
cd mall-deck
npm install
npm run dev
```

Then open the local URL printed in the terminal (usually `http://localhost:5173`).

## Scripts

- **dev**: `npm run dev` — start local dev server
- **build**: `npm run build` — production build to `dist/`
- **preview**: `npm run preview` — preview the production build locally
- **lint**: `npm run lint`

## Project structure

- `src/pages/Home.jsx` — main page composition
- `src/sections/*` — page sections (Hero, Retail, Events, etc.)
- `src/components/*` — shared components (Navbar, CTAButton, SectionWrapper)
- `public/images/*`, `public/videos/*` — static assets

## Deploy to Vercel

In Vercel dashboard:

1. **Add New → Project → Import** your Git repository
2. Framework preset: **Vite**
3. Build command: `npm run build`
4. Output directory: `dist`
5. Install command: `npm install`

Vercel should auto-detect these settings for Vite.

## Notes

- If you see a blank screen locally, check the browser console for runtime errors and ensure `npm install` completed successfully.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
