# pAI Assistant - Next.js Client

This is a [Next.js](https://nextjs.org) project using App Router, TypeScript, Tanstack React-Query, and Shadcn bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).


## Getting Started

### pAI Assistant Client

First, run the **client** development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Mock Server

This application also includes a mock server for use in local development.

Run the **Mock Server** for simulated HTTP calls and OAuth2 flows:

```bash
npm run dev:mock-server
# or
cd mock-server
npm run dev
```

The mock server runs at [http://localhost:2000](http://localhost:2000) by default.

Alternatively, run the **client** and the **mock server** in the same terminal:

```bash
npm run dev:all
```

