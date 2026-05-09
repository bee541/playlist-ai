# PlaylistAI — Landing Page

## Quick Deploy (5 min)

### Option A: Vercel (recommended)
1. Push to GitHub: `git init && git add . && git commit -m "initial" && git remote add origin <your-repo-url>`
2. Import project in Vercel — it auto-detects Next.js
3. Deploy — you get a `*.vercel.app` URL instantly
4. Add custom domain in Vercel settings if desired

### Option B: Manual Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

## Waitlist Setup (choose one)

### 1. Google Form (easiest, free)
- Create Google Form with fields: Email, Preferred service
- Get form ID from URL: `https://forms.gle/ABC123` → ID is `ABC123`
- Replace `YOUR_GOOGLE_FORM_URL` in `pages/waitlist.tsx` with your form's submission URL
- Find submission URL via browser devtools: Network tab → form submission request → copy URL

### 2. Vercel KV (more integrated)
- Create KV store in Vercel dashboard
- Add `KV_URL` and `KV_REST_API_URL` environment variables
- Update `pages/waitlist.tsx` to use KV API instead of fetch

### 3. Notion (simple DB)
- Create Notion database with email + service columns
- Generate integration token, share DB with integration
- Swap form handler to call Notion API

## Environment Variables (if using KV/Notion)
Create `.env.local`:
```
KV_URL=...
KV_REST_API_URL=...
NOTION_TOKEN=...
NOTION_DATABASE_ID=...
```

## Analytics (optional)
Add Plausible or Google Analytics to `pages/_app.tsx` or `pages/index.tsx`.

## Social Proof Counter (optional)
Simple approach: manually update number in `pages/index.tsx` based on waitlist growth.
Advanced: read from KV/store and display live count.

## Cost
Vercel hosting: free. Waitlist storage: free (Google Form / Notion free tier / KV free tier).

---

**Next steps after deploy:**
1. Test waitlist form submits correctly
2. Update `scripts/push-bluesky.sh` with your Zernio Bluesky accountId
3. Run `./scripts/push-bluesky.sh playlist-ai` to publish first posts
4. Monitor signups (Google Sheet / Notion / KV dashboard)
5. If >50 signups in 3 days → build MVP; if <50 → tweak messaging
