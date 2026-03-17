# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/238117a3-ae82-4960-af88-ec917aa561b7

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/238117a3-ae82-4960-af88-ec917aa561b7) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## Tech Stack

- **Language:** TypeScript
- **Framework:** React 18
- **Dev Server/Build:** Vite 5 with `@vitejs/plugin-react-swc`
- **Routing:** `react-router-dom`
- **Data Fetching:** `@tanstack/react-query`
- **Styling:** Tailwind CSS 3, PostCSS, Autoprefixer
- **UI Primitives:** Radix UI (`@radix-ui/react-*`) + shadcn/ui patterns
- **Icons:** `lucide-react`
- **Forms & Validation:** `react-hook-form`, `zod`, `@hookform/resolvers`
- **Components/UX:** `embla-carousel-react`, `recharts`, `react-day-picker`, `date-fns`, `react-resizable-panels`, `cmdk`, `vaul`, `sonner`
- **Utilities:** `clsx`, `class-variance-authority`, `tailwind-merge`
- **Theming:** `next-themes` (class-based dark/light)

## Architecture Overview

- **Entry:** `src/main.tsx` mounts the app and sets up router.
- **Routing:** `react-router-dom` drives navigation between `src/pages`.
- **Pages:** High-level views in `src/pages/` (`Index.tsx`, `ProjectDetail.tsx`, `NotFound.tsx`).
- **Components:** Reusable UI under `src/components/` including Radix-driven shadcn components in `src/components/ui/`.
- **Data:** Async state and caching via React Query; local UI state in components.
- **Styling:** Tailwind with custom theme tokens defined in CSS variables and `tailwind.config.ts`.
- **Aliases:** `@` resolves to `src/` (see `vite.config.ts`).

## Useful Commands

```sh
npm run dev         # start dev server
npm run build       # production build
npm run preview     # preview built assets
npm run lint        # lint project
```

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/238117a3-ae82-4960-af88-ec917aa561b7) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
