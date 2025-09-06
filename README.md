# Jacksonville Services LLC Website

A modern, responsive website for Jacksonville Services LLC – an umbrella company based in Jacksonville, Florida that manages multiple local service businesses including vending machines, house cleaning, junk removal, and power washing.

## 🚀 Features

- **Responsive Design**: Fully mobile-friendly with modern UI/UX
- **Service Pages**: Detailed information for each service line
- **Contact Form**: Lead capture with form validation
- **SEO Optimized**: Proper meta tags, structured data, and local keywords
- **Modern Tech Stack**: Built with Next.js 14, React 18, and Tailwind CSS
- **Animations**: Smooth animations using Framer Motion
- **Accessibility**: WCAG compliant with proper contrast and screen reader support

## 🏗️ Project Structure

```
jacksonville_services/
├── app/                    # Next.js 14 app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   ├── services/          # Services page
│   ├── about/             # About Us page
│   ├── contact/           # Contact page
│   ├── testimonials/      # Customer testimonials
│   └── faq/              # Frequently asked questions
├── components/            # Reusable React components
│   ├── Navigation.tsx     # Main navigation component
│   └── Footer.tsx         # Footer component
├── package.json           # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── next.config.js         # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

## 🛠️ Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Ready for Vercel, Netlify, or any hosting platform

## 📱 Pages & Features

### Home Page
- Hero section with Jacksonville imagery
- Service overview with icons and descriptions
- Why choose us section
- Strong calls to action

### Services Page
- Detailed service descriptions
- Key benefits for each service
- Service area coverage
- Individual CTAs for each service

### About Us Page
- Company story and history
- Mission and vision statements
- Core values
- Team member profiles
- Company timeline

### Contact Page
- Contact information display
- Interactive contact form
- Google Maps integration
- Business hours and location

### Testimonials Page
- Customer reviews by service
- Star ratings and feedback
- Featured testimonials
- Overall company statistics

### FAQ Page
- Categorized questions and answers
- Expandable accordion interface
- Service-specific FAQs
- Contact information for additional help

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd jacksonville_services
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization

### Colors
The website uses a coastal Jacksonville-inspired color palette:
- **Primary**: Blue tones (#0ea5e9 to #0c4a6e)
- **Coastal**: Green tones (#22c55e to #14532d)
- **Neutral**: Gray scale (#fafafa to #171717)

### Content
- Update company information in component files
- Replace placeholder images with actual company photos
- Modify service descriptions and pricing
- Update contact information and business hours

### Images
- Replace Unsplash placeholder images with actual company photos
- Optimize images for web (recommended: WebP format)
- Update image alt text for accessibility

## 📧 Contact Form Setup

The contact form is currently set up with a simulated submission. To make it functional:

1. **Email Service**: Integrate with services like:
   - SendGrid
   - Mailgun
   - AWS SES
   - Formspree

2. **Form Handling**: Update the `handleSubmit` function in `app/contact/page.tsx`

3. **Validation**: Add server-side validation and CSRF protection

## 🔍 SEO Optimization

The website includes:
- Proper meta tags and descriptions
- Local SEO keywords for Jacksonville
- Structured heading hierarchy (H1, H2, H3)
- Alt text for all images
- Semantic HTML structure
- Fast loading times with Next.js optimization

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly navigation
- Optimized for all device sizes

## ♿ Accessibility

- WCAG 2.1 AA compliance
- Proper color contrast ratios
- Screen reader friendly
- Keyboard navigation support
- Focus management
- Semantic HTML structure

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository
2. Vercel will auto-deploy on push
3. Custom domain setup available

### Netlify
1. Build the project: `npm run build`
2. Deploy the `out` folder
3. Configure form handling

### Traditional Hosting
1. Build: `npm run build`
2. Upload build files to your server
3. Configure server for Next.js

## 📊 Performance

- Lighthouse score: 90+ (Performance, Accessibility, Best Practices, SEO)
- Core Web Vitals optimized
- Image optimization with Next.js
- Code splitting and lazy loading
- Minimal bundle size

## 🔧 Development

### Code Style
- TypeScript for type safety
- ESLint configuration included
- Prettier formatting
- Component-based architecture

### Adding New Pages
1. Create new directory in `app/`
2. Add `page.tsx` file
3. Update navigation in `components/Navigation.tsx`
4. Add to footer links in `components/Footer.tsx`

### Adding New Components
1. Create in `components/` directory
2. Export as default
3. Import where needed
4. Follow existing component patterns

## 📝 License

This project is proprietary software for Jacksonville Services LLC.

## 🤝 Support

For technical support or questions about the website:
- Email: info@jacksonvilleservices.com
- Phone: (904) 555-0123

---

**Built with ❤️ for Jacksonville Services LLC**
