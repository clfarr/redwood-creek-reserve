# Getting Started with Redwood Creek Reserve

## Quick Start (5 minutes)

### 1. View the Site Locally

```bash
cd /home/user/redwood-creek-reserve
npm run dev
```

Open http://localhost:3000 - you'll see the site with placeholder images!

### 2. Set Up Sanity CMS (15 minutes)

To add dynamic strain content, you need to configure Sanity:

#### Install Sanity CLI globally:
```bash
npm install -g @sanity/cli
```

#### Initialize your Sanity project:
```bash
cd sanity
sanity init --project-plan free
```

**Important**: When prompted:
- Choose "Select project to use" if you have existing projects, or create a new one
- The CLI will update `sanity.config.ts` with your project ID
- Use dataset: `production`

#### Deploy your CMS:
```bash
sanity deploy
```

Choose a studio name (e.g., `redwood-creek-reserve`).

Your CMS will be live at: `https://your-studio-name.sanity.studio`

#### Update environment variables:

Edit `.env.local` in the root directory:
```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

#### Configure CORS:

1. Visit https://www.sanity.io/manage
2. Select your project
3. Go to API → CORS Origins
4. Add: `http://localhost:3000`

### 3. Add Your First Strains

#### Start Sanity Studio locally:
```bash
cd sanity
npm run dev
```

Open http://localhost:3333 and login.

Click **+ Create** → **Cannabis Strain** and add the sample strains from README.md:

**Example: South Fork OG**
- Name: South Fork OG
- Slug: Click "Generate"
- Type: Hybrid
- THC Content: 22-26%
- Flavor Notes: Pine, Earthy, Diesel
- Profile: "A Trinity County classic with deep forest notes of pine and earth. This balanced hybrid delivers a clear-headed, creative high perfect for exploring the trails or unwinding after a long day."
- Harvest Date: October 2024

Repeat for 2-3 more strains!

### 4. See Your Strains Live

Go back to http://localhost:3000/harvest - your strains should appear!

---

## Next Steps

### Replace Placeholder Images

1. Find high-quality stock photos (see `/public/images/README.md`)
2. Replace the SVG placeholders in `/public/images/`
3. Recommended sites: Unsplash.com, Pexels.com

### Deploy to Production

#### Deploy Frontend to Vercel:

```bash
# Push to GitHub first
git add .
git commit -m "Initial Redwood Creek Reserve site"
git push origin main

# Then deploy with Vercel
npm install -g vercel
vercel
```

Or use the Vercel dashboard to import from GitHub.

#### Update Sanity CORS for Production:

After deploying, add your Vercel URL to Sanity CORS:
- https://www.sanity.io/manage → API → CORS Origins
- Add: `https://your-site.vercel.app`

---

## Project Structure

```
redwood-creek-reserve/
├── app/              # Next.js pages (Home, About, Process, Harvest, Contact)
├── components/       # React components (Navbar, Footer, StrainCard)
├── lib/             # Sanity client & TypeScript types
├── public/images/   # Image assets (currently placeholders)
├── sanity/          # Sanity CMS backend
└── scripts/         # Utility scripts
```

---

## Troubleshooting

**"Failed to fetch strains"**
- Make sure Sanity project ID is correct in `.env.local`
- Check CORS is configured at sanity.io/manage
- Verify you've added at least one strain in Sanity Studio

**Images not showing**
- Images in `/public/images/` are SVG placeholders
- Replace with actual JPG/PNG images

**Build fails**
- Run `npm install` in root directory
- Run `npm install` in `/sanity` directory
- Make sure `.env.local` exists

---

## Portfolio Tips

### Customize for Your Portfolio

1. **Add your name** in footer and README
2. **Take screenshots** of the live site
3. **Write a case study** explaining:
   - The fictional brand story (Elias Thorne)
   - Tech stack choices (Next.js, Sanity, Tailwind)
   - Design decisions (earth tones, premium rustic aesthetic)
   - Challenges solved

### Highlight Technical Skills

This project demonstrates:
- ✅ Next.js 15 App Router & Server Components
- ✅ Headless CMS integration (Sanity)
- ✅ TypeScript for type safety
- ✅ Tailwind CSS custom theming
- ✅ Responsive mobile-first design
- ✅ SEO optimization
- ✅ Dynamic content management
- ✅ Image optimization

---

Need help? Check the main README.md for full documentation!
