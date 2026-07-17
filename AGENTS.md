# Expo HAS CHANGED

Read the exact versioned docs at https://docs.expo.dev/versions/v57.0.0/ before writing any code.

## Cursor Cloud specific instructions

`seventy-five` is an Expo (React Native + Expo Router) app with a Convex backend. It is currently
an early-stage scaffold: `app/` renders an empty view and `convex/` has an empty schema and no
functions yet. There is no automated test suite. Standard scripts live in `package.json`.

Services (dependencies are already installed by the update script):

- **Expo (frontend)** — In the headless VM, run the web target: `pnpm web` (alias for
  `expo start --web`, Metro serves on http://localhost:8081). To start non-interactively without the
  terminal UI prompt, use `CI=1 pnpm exec expo start --web`; note that `CI=1` disables Metro hot
  reload, so omit it when you want live reload during development. The first web request triggers the
  bundle and can take several seconds.
- **Convex (backend)** — Cloud agents have no Convex login, so you MUST run it in anonymous agent
  mode: `CONVEX_AGENT_MODE=anonymous npx convex dev`. This provisions a local backend on
  http://127.0.0.1:3210 and writes `CONVEX_DEPLOYMENT` + `EXPO_PUBLIC_CONVEX_URL` to `.env.local`
  (gitignored). Run functions with `CONVEX_AGENT_MODE=anonymous npx convex run <file>:<fn>`.
  `convex/_generated/` is created by `convex dev`; it is untracked and should not be committed.

Lint: `pnpm lint`. Typecheck: `npx tsc --noEmit`.
