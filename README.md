# Jæger-Pedersen Ventures

A personal portfolio website showcasing projects and work.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view locally.

## Project Structure

```
src/
├── app/           # Next.js app router pages
├── components/    # React components
│   ├── Hero.tsx       # Landing section with animated logo
│   ├── About.tsx      # About/bio section
│   ├── Portfolio.tsx  # Project showcase grid
│   ├── Contact.tsx    # Contact form/info
│   └── ...
└── ...
```

## Adding New Projects

To add a new project to the portfolio:

1. Open `src/components/Portfolio.tsx`
2. Add a new entry to the projects array with:
   - `title` - Project name
   - `description` - Brief summary
   - `tags` - Technology stack
   - `image` - Screenshot/preview image
   - `link` - URL to live project or repo

## Adding New Sections

1. Create a new component in `src/components/`
2. Import and add it to `src/app/page.tsx`
3. Update Navigation if the section needs a nav link

## Styling

- Global styles: `src/app/globals.css`
- Tailwind CSS for utility classes
- CSS variables for theme colors (accent, background, etc.)

## Deployment

The site is configured for GitHub Pages deployment via the `gh-pages` branch.

```bash
npm run build
npm run deploy
```

## Notes

- Images go in `public/` directory
- Use `basePath` in `next.config.js` when deploying to GitHub Pages subdirectory
- The site uses Fraunces and EB Garamond fonts
