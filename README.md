# SA Tech Portfolio

Portfolio site for SA Tech India Ltd — AI products and agentic solutions.

## Stack

- React 18, TypeScript, Vite
- Tailwind CSS, lucide-react
- React Router
- Supabase Auth (email/password login)

## Setup

```bash
npm install
```

Copy `.env.example` to `.env` and add your Supabase project credentials:

```bash
cp .env.example .env
```

Get these from your [Supabase dashboard](https://supabase.com/dashboard) under **Project Settings → API**:

- `VITE_SUPABASE_URL` — Project URL
- `VITE_SUPABASE_ANON_KEY` — `anon` public key

In Supabase, enable **Authentication → Providers → Email** and create users under **Authentication → Users** (or enable sign-ups if you want self-registration).

## Run

```bash
npm run dev
```

## Build

```bash
npm run build
```

No backend required. Contact form uses mailto; project URLs are in `src/data/projects.ts` and company links in `src/data/company.ts` for easy replacement.
