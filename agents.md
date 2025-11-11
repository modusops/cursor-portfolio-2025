# AI Agent Guidelines for Portfolio Project

## Project Overview

This is a Next.js 15 portfolio website built with TypeScript, Tailwind CSS, and Radix UI components. The site showcases professional work and projects with a modern, responsive design.

## Tech Stack

- **Framework**: Next.js 15.2.4 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3.4.17
- **UI Components**: Radix UI, shadcn/ui
- **Animations**: Tailwind CSS Animate, Embla Carousel
- **Forms**: React Hook Form + Zod validation
- **Theming**: next-themes (dark/light mode)
- **Deployment**: Netlify

## Project Structure

```
/app
  /about          - About page
  /contact        - Contact page
  /work           - Work experience page
  /projects
    /[slug]       - Dynamic project pages
    /data         - Project data files (ltk-chat, creator, sono, shopify)
  /components
    /layouts      - Reusable layout components
  /styles         - CSS modules
  globals.css     - Global styles and Tailwind directives
  layout.tsx      - Root layout with font configuration
  page.tsx        - Homepage

/components       - Shared UI components (shadcn/ui)
/public           - Static assets (images, videos)
/lib              - Utility functions
/hooks            - Custom React hooks
```

## Important Configuration Files

### Next.js 15 Compatibility

**CRITICAL**: Next.js 15 requires awaiting `params` in dynamic routes:

```typescript
// ❌ WRONG (Next.js 14 style)
export default async function Page({ params }: { params: { slug: string } }) {
  const slug = params.slug;
}

// ✅ CORRECT (Next.js 15 style)
export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
}
```

### PostCSS Configuration

`postcss.config.mjs` must include both `tailwindcss` and `autoprefixer`:

```javascript
const config = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

### Tailwind Configuration

- Font family configuration must be at the `extend` level, NOT nested inside `animation`
- Custom animations are defined in `tailwind.config.ts`
- Content paths include all component directories

## Development Workflow

### Starting Development Server

```bash
# Clean build cache first (if issues occur)
rm -rf .next node_modules/.cache

# Start dev server
npm run dev
```

### Building for Production

```bash
# Clean build
rm -rf .next
npm run build

# Preview production build
npm start
```

### Common Issues & Solutions

#### 1. CSS Not Loading (404 errors for layout.css)

**Symptoms**: Site loads but styling is missing, console shows 404 for `/_next/static/css/app/layout.css`

**Solutions**:
- Stop dev server: `pkill -f "next"`
- Clear build cache: `rm -rf .next node_modules/.cache`
- Verify `postcss.config.mjs` has `autoprefixer`
- Check `tailwind.config.ts` for syntax errors
- Restart dev server: `npm run dev`

#### 2. Next.js 15 Params Error

**Symptoms**: Error message: `Route "/projects/[slug]" used params.slug. params should be awaited before using its properties`

**Solution**: Update dynamic route to await params (see Next.js 15 Compatibility section above)

#### 3. Tailwind Configuration Errors

**Common mistake**: Placing `fontFamily` inside `animation` object

**Fix**: Ensure `fontFamily` is a direct child of `extend`:

```typescript
extend: {
  animation: { /* ... */ },
  fontFamily: {
    sans: ["var(--font-inter)"],
  },
}
```

## Git Workflow

### Safe Revert Process

**Preferred method** (preserves history):
```bash
git pull origin main
git log --oneline -10  # Find the commit to revert
git revert <commit-hash> --no-edit
```

**Nuclear option** (destroys history, use with caution):
```bash
git fetch origin
git reset --hard origin/main
git clean -fd
```

### Checking Repository Status

```bash
# Check for uncommitted changes
git status

# Check commits ahead/behind remote
git status  # Shows "Your branch is ahead of 'origin/main' by N commits"
```

### Committing Changes

```bash
# Stage changes
git add <files>

# Commit with descriptive message
git commit -m "Description of changes"

# Push to remote
git push origin main
```

## Working with AI Agents

### Before Making Changes

1. **Always explain changes before implementing them**
2. **Break large changes into smaller, reviewable chunks**
3. **Ask for confirmation before running destructive commands**

### When Debugging

1. Check git status first: `git status`
2. Look for console errors in browser dev tools
3. Check terminal output for build/compilation errors
4. Verify file paths and imports are correct
5. Clear build cache if styling issues occur

### File Modifications

- **Prefer editing existing files** over creating new ones
- **Preserve exact indentation** (tabs/spaces) when editing
- **Don't add emojis** unless explicitly requested
- **Test changes** by previewing locally before committing

### Common Commands

```bash
# Preview locally
npm run dev

# Build for production
npm run build

# Clean build cache
rm -rf .next

# Stop all Next.js processes
pkill -f "next"

# Check git status
git status

# Discard all local changes
git reset --hard HEAD && git clean -fd
```

## Project-Specific Notes

### Project Pages

- Each project has its own data file in `/app/projects/data/`
- Projects use dynamic routing via `/app/projects/[slug]/page.tsx`
- Supported projects: `ltk-chat`, `creator`, `sono`, `shopify`
- Images and videos are stored in `/public/`

### Styling

- Global styles in `app/globals.css`
- Tailwind directives: `@tailwind base`, `@tailwind components`, `@tailwind utilities`
- Custom CSS modules in `app/styles/`
- Dark mode support via `next-themes`

### Components

- UI components from shadcn/ui in `/components/ui/`
- Custom components in `/app/components/`
- Layout components in `/app/components/layouts/`

## Deployment

- Hosted on Netlify
- Configuration in `netlify.toml`
- Uses `@netlify/plugin-nextjs` for Next.js support
- Automatic deployments from `main` branch

## Testing Changes

1. Start dev server: `npm run dev`
2. Open browser to `http://localhost:3000`
3. Check all pages: Home, About, Work, Contact, Projects
4. Verify responsive design (mobile, tablet, desktop)
5. Test dark/light mode toggle
6. Check browser console for errors

## Emergency Recovery

If the site is broken and you need to recover quickly:

```bash
# Stop all processes
pkill -f "next"

# Reset to last known good commit
git fetch origin
git reset --hard origin/main
git clean -fd

# Clear all caches
rm -rf .next node_modules/.cache

# Restart fresh
npm run dev
```

## Working with me
- Always explain your changes before implementing them
- Break large changes into smaller, reviewable chunks
- Ask for confirmation before running any destructive commands

---

**Last Updated**: November 11, 2025
**Project Owner**: Dave Chan
**Repository**: cursor-portfolio-2025

