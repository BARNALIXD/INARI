# Studio Inari - Contemporary Architecture Website

A modern, SEO-optimized Next.js website for Studio Inari, a contemporary architecture firm. Built with TypeScript, Tailwind CSS, and Framer Motion for smooth animations.
<img width="1920" height="1080" alt="image" src="https://github.com/user-attachments/assets/4ec28e18-df3c-445c-b889-387e7b616cb9" />

[https://inaristudio.netlify.app/]

## Features

- **SEO Optimized**: Comprehensive meta tags, structured data, sitemap, and robots.txt
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern Animations**: Smooth scroll animations with Framer Motion
- **Performance**: Optimized images and fast loading times
- **Accessibility**: Proper semantic HTML and focus management
- **Black & White Theme**: Clean, minimalist design aesthetic

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Fonts**: Inter & Playfair Display (Google Fonts)
- **Images**: Next.js Image Optimization

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** and navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
studio-inari/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Homepage
│   ├── robots.ts            # Robots.txt configuration
│   └── sitemap.ts           # Sitemap generation
├── components/
│   ├── Navigation.tsx       # Main navigation component
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services section
│   ├── Projects.tsx        # Projects showcase
│   ├── Contact.tsx         # Contact form
│   └── Footer.tsx          # Footer component
├── public/                 # Static assets
└── ...config files
```

## SEO Features

- **Meta Tags**: Comprehensive Open Graph and Twitter Card meta tags
- **Structured Data**: JSON-LD schema markup for organization
- **Sitemap**: Automatically generated XML sitemap
- **Robots.txt**: Search engine crawling instructions
- **Performance**: Optimized Core Web Vitals
- **Accessibility**: WCAG compliant design

## Customization

### Colors
The color scheme is defined in `tailwind.config.js` and `app/globals.css`:
- Primary Black: `#0a0a0a`
- Secondary Black: `#1a1a1a`
- Pure White: `#ffffff`
- Off White: `#f8f8f8`
- Gray Light: `#e5e5e5`
- Gray Medium: `#666666`

### Content
Update the content in each component file to match your specific needs:
- Company information in `components/About.tsx`
- Services in `components/Services.tsx`
- Projects in `components/Projects.tsx`
- Contact information in `components/Contact.tsx`

### Images
Replace placeholder images with your own:
- Hero background images
- About section image
- Project showcase images
- Favicon and app icons

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
1. Build the project: `npm run build`
2. Start the production server: `npm start`
3. Deploy the `.next` folder to your hosting platform

## Performance Optimization

- **Image Optimization**: Using Next.js Image component with proper sizing
- **Font Optimization**: Google Fonts with `display: swap`
- **Code Splitting**: Automatic with Next.js App Router
- **Bundle Analysis**: Use `npm run build` to analyze bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is created for Studio Inari. All rights reserved.












