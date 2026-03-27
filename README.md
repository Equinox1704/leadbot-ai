# LeadBot AI — Your Website Should Be Selling While You Sleep

A production-ready AI SaaS landing page with a live GPT-4o-mini powered chatbot 
that captures and qualifies leads 24/7.

## Live Demo
[leadbot-ai.vercel.app](https://leadbot-ai.vercel.app)

## What This Is

Most business websites are static. Visitors land, read, leave.
LeadBot changes that — it engages every visitor, answers their questions,
and captures their details automatically. No human needed.

This project is a full demo of that product, built to show exactly 
what's possible when you combine a sharp landing page with real AI.

## Tech Stack

- React + TypeScript + Vite
- Tailwind CSS + Framer Motion
- Supabase Edge Functions
- OpenAI GPT-4o-mini (streaming)
- Vercel

## Features

- Live AI chatbot powered by GPT-4o-mini via Supabase edge function
- Streaming responses — answers appear word by word, just like ChatGPT
- Secure backend — OpenAI key never exposed to the client
- Fully responsive, dark-themed SaaS landing page
- Smooth animations, glassmorphism UI, conversion-focused copy

## Architecture
User → React Frontend → Supabase Edge Function → OpenAI API
↑
API key stays here,
never on the client

## Run Locally

```bash
git clone https://github.com/Equinox1704/leadbot-ai
cd leadbot-ai
npm install
```

Create a `.env` file:
VITE_SUPABASE_URL=your-supabase-url
VITE_SUPABASE_PUBLISHABLE_KEY=your-anon-key


```bash
npm run dev
```

## Deploy Edge Function

```bash
npx supabase link --project-ref your-project-ref
npx supabase secrets set OPENAI_API_KEY=your-openai-key
npx supabase functions deploy chat
```

## Built By

Mayank Negi — Full-stack developer and AI builder  
[Portfolio](https://mayank-negi-portfolio.vercel.app/) · [LinkedIn](https://linkedin.com/in/mayank-negi-dev) · [WhatsApp](https://wa.me/919953037903)