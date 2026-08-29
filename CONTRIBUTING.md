# Contributing to Leadbot AI

Thank you for contributing. Leadbot AI is early-stage, so setup feedback, documentation improvements, tests, reproducible bug reports, and small focused features are especially valuable.

## Before you start

- Read the [README](README.md), including setup and security notes.
- Search existing issues before opening a duplicate.
- Open an issue first for larger changes so we can discuss the approach.
- Never include API keys, access tokens, customer data, user data, or other secrets in issues, pull requests, screenshots, commits, or test fixtures.

## Local development

```bash
git clone https://github.com/Equinox1704/leadbot-ai.git
cd leadbot-ai
npm install
cp .env.example .env.local
npm run dev
```

Configure Supabase and AI-provider secrets as described in the README. Keep sensitive values out of browser-visible `VITE_*` variables.

## Development guidelines

- Keep pull requests small and focused.
- Prefer clear TypeScript types over `any`.
- Preserve accessibility: semantic HTML, keyboard support, visible focus states, and understandable error messages.
- Add or update tests when behavior changes.
- Do not expose credentials in frontend code or documentation.
- Update docs when setup, deployment, security, or public behavior changes.

## Before opening a pull request

Run relevant checks locally:

```bash
npm run lint
npm run test
npm run build
```

If your change affects browser behavior, run Playwright tests when available:

```bash
npx playwright test
```

In your pull request, explain:

1. The problem solved
2. How you tested the change
3. Any configuration, security, deployment, or migration impact
4. Screenshots or recordings for visible UI changes

## Reporting issues

Use the issue templates for bugs and feature requests. Do not report security vulnerabilities publicly; follow [SECURITY.md](SECURITY.md).

## Code of conduct

All participants must follow the [Code of Conduct](CODE_OF_CONDUCT.md).
