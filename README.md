# Leadbot AI

> An open-source reference implementation for an AI-powered website chatbot and lead-generation workflow.

Leadbot AI is a TypeScript web application that demonstrates a website chatbot connected to a Supabase Edge Function for server-side AI chat handling. It is designed as a practical starting point for developers, students, and small teams building conversational lead qualification, customer-support widgets, or AI-enabled website experiences.

> **Project status:** Early-stage and actively evolving. Leadbot AI is not yet a complete CRM or production-ready multi-tenant SaaS product. Review the known limitations and roadmap before using it in production.

## Why Leadbot AI

- Uses a Supabase Edge Function for server-side AI chat handling
- Helps keep AI-provider secrets out of browser code
- Provides a TypeScript/Vite frontend for a chatbot experience
- Can be extended with lead capture, persistence, CRM/webhook delivery, analytics, and custom business logic
- Includes Vitest and Playwright configuration for quality checks

## Architecture

```text
Browser — Vite + TypeScript frontend
        |
        | Chat request
        v
Supabase Edge Function — supabase/functions/chat
        |
        | Server-side request
        v
AI provider API

Optional future integrations:
Supabase database -> lead persistence
Webhook / CRM -> lead delivery
Analytics -> chatbot and conversion events
```

The browser must never contain an AI-provider secret or a Supabase service-role key. Store sensitive credentials only as Supabase Edge Function secrets.

## Tech stack

- TypeScript
- React
- Vite
- Tailwind CSS
- Supabase Edge Functions
- Vitest
- Playwright

## Getting started

### Prerequisites

- Node.js 20 or later
- npm or Bun
- A Supabase project
- Supabase CLI for local Edge Function development and deployment
- An AI-provider API key compatible with the chat Edge Function

### 1. Clone and install

```bash
git clone https://github.com/Equinox1704/leadbot-ai.git
cd leadbot-ai
npm install
```

### 2. Configure local variables

Copy the example file:

```bash
cp .env.example .env.local
```

`VITE_*` variables are bundled into the frontend. Only put public values there, such as a Supabase project URL or anonymous key if your frontend uses them.

Never put an AI-provider secret or Supabase service-role key in `VITE_*` variables.

### 3. Configure Supabase

Link your repository to your Supabase project:

```bash
supabase login
supabase link --project-ref your-project-ref
```

Open `supabase/functions/chat/index.ts` and check which environment-variable name the function expects for the AI provider. Set that value as a Supabase secret. For example only:

```bash
supabase secrets set AI_PROVIDER_API_KEY=replace-with-your-provider-key
```

Then deploy the function:

```bash
supabase functions deploy chat
```

### 4. Run the frontend

```bash
npm run dev
```

Open the local URL printed by Vite, commonly `http://localhost:5173`.

## Quality checks

Run these checks before opening a pull request:

```bash
npm run lint
npm run test
npm run build
```

For browser tests, when available:

```bash
npx playwright test
```

## Deploy to Vercel

1. Push your fork or repository to GitHub.
2. Import the repository in Vercel.
3. Add only public frontend environment variables that your source code actually uses.
4. Deploy the frontend.
5. Configure the AI-provider credential through Supabase Edge Function secrets.
6. Deploy the `chat` Edge Function separately.
7. Test a full chat interaction after deployment.

Never add the AI-provider key or Supabase service-role key to browser-accessible Vercel environment variables.

## Security model

- AI-provider credentials must remain in Supabase Edge Function secrets.
- Supabase service-role keys are server-only and must never be exposed to the browser.
- Supabase anonymous keys may be public, but Row Level Security must be configured before storing user or lead data.
- Treat user messages and webhook payloads as untrusted input.
- Add rate limiting and abuse prevention before operating a public chatbot at scale.
- Report security vulnerabilities privately according to [SECURITY.md](SECURITY.md).

## Known limitations

- Lead persistence and a lead-management dashboard are not yet complete features.
- CRM, email, and webhook delivery are not yet guaranteed integrations.
- Rate limiting, authentication, moderation, and abuse prevention need hardening for production use.
- The exact AI provider, model, and secret-variable name are determined by the Edge Function implementation.
- This is a reference implementation; validate security, privacy, compliance, and cost requirements for your own deployment.

## Roadmap

- [ ] Add configurable chatbot name, welcome message, system prompt, and visual branding
- [ ] Add configurable lead fields and optional Supabase lead persistence
- [ ] Add webhook and CRM delivery examples
- [ ] Add rate limiting, request validation, and user-friendly retry states
- [ ] Expand Vitest coverage for validation and integration boundaries
- [ ] Add Playwright coverage for opening chat, sending a message, error handling, and retry behavior
- [ ] Add self-hosting, architecture, and deployment examples
- [ ] Publish a stable `v0.1.0` release after setup and checks are verified

## Contributing

Contributions, documentation improvements, bug reports, and feature ideas are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) before opening an issue or pull request.

Good first contributions include documentation improvements, setup validation, accessibility review, tests, and roadmap issues labelled `good first issue`.

## Code of conduct

By participating, you agree to follow the [Code of Conduct](CODE_OF_CONDUCT.md).

## License

Leadbot AI is released under the [MIT License](LICENSE).
