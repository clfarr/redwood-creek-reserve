# Redwood Creek Reserve

A modern, portfolio-quality website for a fictional Trinity County cannabis farm, showcasing sustainable, sun-grown cultivation practices and premium small-batch strains.

## 🌿 Project Overview

**Redwood Creek Reserve** is a demonstration project built with modern web technologies to showcase:
- Next.js 15 with App Router and Server Components
- Sanity.io headless CMS for content management
- Tailwind CSS for responsive, utility-first styling
- TypeScript for type safety
- Full-stack integration with dynamic content

### The Brand

**Elias Thorne** is a third-generation Trinity County resident who inherited his family's legacy of sustainable cannabis cultivation. Redwood Creek Reserve represents the perfect blend of traditional farming wisdom and modern compliance, focusing on:
- 100% sun-grown cannabis
- Regenerative agriculture & living soil
- Small-batch, hand-trimmed quality
- Deep respect for the land and local legacy

---

## 🚀 Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **TypeScript** - Type-safe development
- **Tailwind CSS** - Utility-first styling with custom theme
- **React 19** - Latest React features

### Backend / CMS
- **Sanity.io** - Headless CMS for content management
- **GROQ** - Query language for Sanity data
- **Sanity Image URLs** - Optimized image delivery

### Deployment
- **Vercel** - Frontend hosting (recommended)
- **Sanity Cloud** - CMS hosting

---

## 📁 Project Structure

```
redwood-creek-reserve/
├── app/                    # Next.js App Router pages
│   ├── about/             # Our Story page
│   ├── contact/           # Contact page
│   ├── harvest/           # Dynamic strains catalog
│   ├── process/           # Our Process page
│   ├── layout.tsx         # Root layout with Navbar/Footer
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles & Tailwind
├── components/            # Reusable React components
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   └── StrainCard.tsx
├── lib/                   # Utilities
│   └── sanity.ts          # Sanity client & types
├── public/                # Static assets
│   └── images/            # Image assets (placeholders)
├── sanity/                # Sanity Studio (CMS)
│   ├── schemas/
│   │   ├── index.ts
│   │   └── strain.ts      # Strain content type
│   ├── sanity.config.ts
│   ├── package.json
│   └── tsconfig.json
├── .env.local.example     # Environment variables template
├── next.config.js         # Next.js configuration
├── tailwind.config.ts     # Tailwind theme customization
└── package.json
```

---

## 🛠️ Setup Instructions

### Prerequisites
- Node.js 18+ and npm
- A Sanity.io account (free tier available)

### 1. Clone and Install Dependencies

```bash
# Navigate to the project
cd redwood-creek-reserve

# Install frontend dependencies
npm install

# Install Sanity Studio dependencies
cd sanity
npm install
cd ..
```

### 2. Set Up Sanity.io

#### Create a Sanity Project

```bash
cd sanity
npm install -g @sanity/cli
sanity init --project-plan free
```

Follow the prompts:
- **Login** with your Sanity account
- **Create new project**: Yes
- **Project name**: "Redwood Creek Reserve"
- **Dataset**: "production"
- **Schema**: Select "Clean project with no predefined schemas"

This will update your `sanity.config.ts` with your project ID.

#### Deploy Sanity Studio

```bash
# Still in the /sanity directory
sanity deploy
```

Choose a studio hostname (e.g., `redwood-creek-reserve`). Your CMS will be available at:
```
https://redwood-creek-reserve.sanity.studio
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```bash
# In the root directory
cp .env.local.example .env.local
```

Edit `.env.local` and add your Sanity credentials:

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

You can find your project ID in:
- Your `sanity/sanity.config.ts` file
- Or at https://www.sanity.io/manage

### 4. Configure CORS for Sanity

1. Go to https://www.sanity.io/manage
2. Select your project
3. Navigate to **API** tab
4. Under **CORS Origins**, add:
   - `http://localhost:3000` (for local development)
   - Your production URL when you deploy (e.g., `https://your-site.vercel.app`)

### 5. Add Sample Strain Data

1. Start Sanity Studio locally:
   ```bash
   cd sanity
   npm run dev
   ```

2. Open http://localhost:3333 in your browser
3. Log in with your Sanity account
4. Click **+ Create** → **Cannabis Strain**
5. Add sample strains (see sample data below)

### 6. Run the Frontend

In a new terminal:

```bash
# In the root directory
npm run dev
```

Open http://localhost:3000 to see your site!

---

## 🌱 Sample Strain Data

Here are three sample strains to get you started:

### 1. South Fork OG
- **Type**: Hybrid
- **THC Content**: 22-26%
- **Flavor Notes**: Pine, Earthy, Diesel
- **Profile**: "A Trinity County classic with deep forest notes of pine and earth. This balanced hybrid delivers a clear-headed, creative high perfect for exploring the trails or unwinding after a long day. Grown in our south-facing plots for maximum sun exposure."
- **Harvest Date**: October 2024

### 2. Trinity Gold
- **Type**: Sativa
- **THC Content**: 18-22%
- **Flavor Notes**: Citrus, Lemon, Sweet
- **Profile**: "Bright and uplifting with prominent citrus and lemon tones. This sativa-dominant strain is a tribute to the legendary genetics that made Trinity County famous. Expect an energizing, euphoric effect ideal for daytime use and creative endeavors."
- **Harvest Date**: September 2024

### 3. Redwood Haze
- **Type**: Sativa
- **THC Content**: 20-24%
- **Flavor Notes**: Herbal, Spice, Pine
- **Profile**: "Named after the ancient redwoods that tower over our farm. This classic sativa delivers an invigorating, focused high with complex herbal and spice notes. Slow-cured for 45 days to develop its signature smooth smoke and deep flavor profile."
- **Harvest Date**: October 2024

---

## 🎨 Adding Images

The site references several images in `/public/images/`. You'll need to add:

- `hero-mountains.jpg` - Homepage hero
- `about-hero.jpg` - About page hero
- `process-hero.jpg` - Process page hero
- `harvest-hero.jpg` - Harvest page hero
- `contact-hero.jpg` - Contact page hero
- `elias-thorne.jpg` - Elias's portrait
- `living-soil.jpg`, `sun-grown.jpg`, `hand-trim.jpg` - Process page

See `/public/images/README.md` for sourcing recommendations.

**Recommended sources**:
- Unsplash.com (free, high-quality)
- Pexels.com (free stock photos)
- Search: "cannabis", "hemp", "mountain landscape", "organic farming"

---

## 🚢 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Sign up for [Vercel](https://vercel.com)
3. Import your GitHub repository
4. Add environment variables:
   - `NEXT_PUBLIC_SANITY_PROJECT_ID`
   - `NEXT_PUBLIC_SANITY_DATASET`
5. Deploy!

Vercel will automatically detect Next.js and configure everything.

### Update Sanity CORS

After deploying, add your Vercel URL to Sanity CORS origins:
- Go to https://www.sanity.io/manage
- API tab → CORS Origins
- Add `https://your-project.vercel.app`

---

## 🎯 Features

✅ **Fully Responsive** - Mobile, tablet, and desktop optimized
✅ **Server Components** - Fast, SEO-friendly pages
✅ **Dynamic Content** - Strains managed via Sanity CMS
✅ **Type-Safe** - Full TypeScript support
✅ **Modern Design** - Custom Tailwind theme with earth tones
✅ **Performance** - Optimized images and Next.js best practices
✅ **Accessible** - Semantic HTML and proper ARIA labels

---

## 📝 Pages

1. **Home** (`/`) - Hero section, philosophy cards, CTA
2. **Our Story** (`/about`) - Elias Thorne's backstory and legacy
3. **Our Process** (`/process`) - Detailed cultivation methods
4. **Our Harvest** (`/harvest`) - Dynamic strain catalog from Sanity
5. **Contact** (`/contact`) - Contact form and wholesale info

---

## 🔧 Development

```bash
# Run frontend
npm run dev

# Run Sanity Studio
cd sanity && npm run dev

# Build for production
npm run build

# Lint code
npm run lint
```

---

## 📚 Learning Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Sanity.io Documentation](https://www.sanity.io/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Documentation](https://www.typescriptlang.org/docs)

---

## 🎨 Portfolio Highlights

This project demonstrates:

1. **Modern Frontend Architecture** - Next.js 15 App Router with Server Components
2. **Headless CMS Integration** - Sanity.io with GROQ queries
3. **Component-Based Design** - Reusable React components
4. **Responsive UI/UX** - Mobile-first Tailwind CSS design
5. **Type Safety** - Full TypeScript implementation
6. **Content Strategy** - Storytelling through brand persona
7. **Professional Deployment** - Vercel + Sanity Cloud

---

## 📄 License

This is a portfolio project created for demonstration purposes. The fictional business "Redwood Creek Reserve" and character "Elias Thorne" are creative works.

---

## 🙏 Credits

Created by [Your Name] as a portfolio project showcasing modern web development skills.

**Note**: This is a fictional cannabis cultivation business created for portfolio purposes. All content, including the backstory and character, is fictional.
