# DevConnect

A premium developer portfolio platform and networking hub.
Upgraded to a robust Full-Stack architecture.

## Tech Stack
- **Frontend Framework**: Next.js 14 (App Router)
- **Styling**: Vanilla CSS with custom Dark Mode & Glassmorphism design system
- **Database**: SQLite with Prisma ORM
- **Authentication**: NextAuth.js (GitHub OAuth)
- **External APIs**: GitHub REST API (fetching dynamic repositories)

## Local Development Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Environment Variables:**
   Create a `.env` file in the root directory:
   ```env
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-random-secret"
   GITHUB_ID="your_github_oauth_client_id"
   GITHUB_SECRET="your_github_oauth_client_secret"
   ```
3. **Database Setup:**
   Run Prisma migrations to sync the SQLite database:
   ```bash
   npx prisma db push
   npx prisma generate
   ```
4. **Run the Server:**
   ```bash
   npm run dev
   ```

## Deploying on Vercel

When deploying on Vercel:
1. Ensure your Build Command is: `npx prisma generate && next build`
2. Under "Environment Variables", you MUST add your `NEXTAUTH_SECRET`, `GITHUB_ID`, and `GITHUB_SECRET`.
3. Wait! Because Vercel uses serverless functions, a local SQLite file (`dev.db`) will resets on every request. For a true production deployment, change the Prisma provider in `schema.prisma` from `sqlite` to `postgresql` and link it to a free Vercel Postgres or MongoDB instance!
