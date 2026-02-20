# Localised with Lingo

A localised **Next.js** application powered by [Lingo.dev](https://lingo.dev) — demonstrating automatic, compiler-driven internationalisation (i18n) across multiple languages.

---

## What Has Been Done

### Project Setup
- Bootstrapped a **Next.js 16** app with **React 19** and **TypeScript**.
- Configured **Tailwind CSS v4** for styling via `postcss.config.mjs`.
- Added **ESLint** (`eslint-config-next`) for code quality.

### Lingo.dev Integration
- Installed `@lingo.dev/compiler` and wired it into the Next.js build pipeline via `next.config.ts` using the `withLingo` wrapper.
- Wrapped the root layout with `<LingoProvider>` so locale context is available throughout the app.
- Created `i18n.json` to declare:
  - **Source locale:** `en` (English)
  - **Target locales:** `es` (Spanish), `fr` (French), `de` (German)
  - **Compiler bucket:** all files under `app/**` are processed for translation.
- The compiler runs in `cache-only` build mode and uses a **pseudo-translator** in development for instant locale previews without an API key.

### UI Components
- Integrated **shadcn/ui** component library (`components.json`).
- Added a reusable `<Button>` component (`components/ui/button.tsx`) built on Radix UI's Slot primitive, with `class-variance-authority` variants.

### Application Pages
- **Home page** (`app/page.tsx`): A centred landing screen with:
  - A bold headline — *"Welcome to Localise with Lingo"*
  - An *Explore* call-to-action button.
- **Root layout** (`app/layout.tsx`): Sets page metadata (title & description) and wraps children in `<LingoProvider>`.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 16 + React 19 |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| i18n / L10n | Lingo.dev compiler (`@lingo.dev/compiler`) |
| UI Components | shadcn/ui (Radix UI + CVA) |
| Linting | ESLint 9 (next config) |

---

## Getting Started

### Prerequisites
- Node.js ≥ 18
- npm (comes with Node)

### Install dependencies

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. The pseudo-translator is active in dev mode, so you can preview translated locales immediately.

### Build for production

```bash
npm run build
npm start
```

### Lint

```bash
npm run lint
```

---

## Supported Locales

| Code | Language |
|------|----------|
| `en` | English (source) |
| `es` | Spanish |
| `fr` | French |
| `de` | German |

---

## Project Structure

```
├── app/
│   ├── layout.tsx       # Root layout with LingoProvider
│   ├── page.tsx         # Home page
│   └── globals.css      # Global styles
├── components/
│   └── ui/
│       └── button.tsx   # shadcn/ui Button component
├── i18n.json            # Lingo.dev locale configuration
├── next.config.ts       # Next.js config with withLingo wrapper
├── components.json      # shadcn/ui configuration
└── package.json
```
