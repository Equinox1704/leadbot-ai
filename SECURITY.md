# Security Policy

## Supported versions

Leadbot AI is early-stage. Security fixes are applied to the latest version on the `main` branch.

## Reporting a vulnerability

Please do **not** open a public GitHub issue for a suspected security vulnerability.

Instead, contact the maintainer privately using the contact method listed on the GitHub profile for `Equinox1704`.

Include:

- A clear description of the issue
- Steps to reproduce it
- Potential impact
- A proof of concept or suggested mitigation, if available

Do not include real API keys, user data, customer data, Supabase credentials, or other sensitive information in your report.

The maintainer will acknowledge the report as soon as reasonably possible, assess it, work on a fix where appropriate, and coordinate disclosure after affected users have had an opportunity to update.

## Security expectations

- Never commit API keys, passwords, tokens, or private Supabase credentials.
- Keep AI-provider credentials and Supabase service-role keys in server-side secret storage only.
- Never expose privileged credentials through Vite `VITE_*` environment variables.
- Treat user messages and incoming webhook payloads as untrusted input.
- Use least-privilege database access and configure Supabase Row Level Security before persisting user or lead data.
