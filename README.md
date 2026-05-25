# IamJOS - Premium Journal Management Platform Landing Page

A modern, premium landing page for **IamJOS** (Integrated Management of Journal System), a cloud-native alternative to Open Journal Systems (OJS) with advanced scientific compliance features.

## 🌟 Key Features

### Design & UX
- **Premium Aesthetic**: Sophisticated scientific vibes with deep navy blue and gold accents
- **Modern Typography**: Plus Jakarta Sans (body) + Playfair Display (headings) for elegant presentation
- **Fully Responsive**: Desktop, tablet, and mobile optimized layouts
- **Smooth Interactions**: Engaging animations and hover effects

### Product Features
- ✅ Google Scholar Indexing
- ✅ Scopus Integration & Citation Tracking
- ✅ Crossref DOI Management
- ✅ Advanced Citation Analytics
- ✅ Global Compliance (GDPR, ISO 27001, SOC 2, CCPA)
- ✅ Enterprise-Grade Security
- ✅ Multi-Language Support
- ✅ Peer Review Workflow Management

### Pages & Sections

#### 1. **Hero Section**
- Eye-catching headline with gradient text
- Clear value proposition
- Compliance badges
- Call-to-action buttons

#### 2. **Features Section** (8 Feature Cards)
- Multi-Language Support
- Advanced Indexing
- Citation Analytics
- Global DOI System
- Peer Review System
- Academic Compliance
- Lightning Fast Performance
- Enterprise Security

#### 3. **Global Compliance & Indexing**
- Integration showcase with 6 compliance standards
- Visual compliance grid
- Trust indicators

#### 4. **Comparison Section**
- IamJOS vs Traditional OJS comparison table
- Feature matrix with 10 key differentiators
- Clear competitive advantages

#### 5. **Pricing Section** (3 Plans)
- **Starter**: $99/month (Small journals)
- **Professional**: $299/month (Established journals) - Featured
- **Enterprise**: Custom pricing (Large operations)

#### 6. **FAQ Section** (10 Questions)
- Comprehensive answers about IamJOS vs OJS
- Google Scholar integration
- Scopus compatibility
- DOI management
- Data migration
- Security & compliance
- Customization options
- Pricing models
- Customer support
- API integration

#### 7. **Newsletter Section**
- Email subscription form with localStorage support
- Subscription confirmation feedback
- Privacy assurance messaging

#### 8. **Footer**
- Company links (Product, Company, Resources, Legal)
- Social media links
- Compliance badges
- Copyright information

## 🎨 Design System

### Color Palette
- **Primary**: Deep Navy Blue (`oklch(0.3 0.18 255)`) - Scientific authority
- **Accent**: Gold (`oklch(0.75 0.15 85)`) - Premium highlights
- **Background**: Off-White (`oklch(0.98 0.002 270)`)
- **Text**: Dark Slate (`oklch(0.2 0.01 270)`)
- **Neutrals**: Various shades of gray for balance

### Typography
- **Headings**: Playfair Display (serif) - Premium, elegant
- **Body**: Plus Jakarta Sans (sans-serif) - Modern, readable
- **Fallbacks**: Geist font family with optimized scaling

### Spacing & Layout
- Max-width: 80rem (1280px)
- Responsive grid system
- Consistent padding: 1.25rem - 2rem
- Border radius: 0.625rem (10px)

## 💾 Local Storage Implementation

The landing page includes **prototyping with localStorage** for:

### Newsletter Subscriptions
```javascript
// Storage key: 'iamjos_subscribers'
// Structure: Array of objects with { email, date }
```

**How it works**:
1. User enters email in newsletter form
2. Data is saved to `localStorage.iamjos_subscribers`
3. Confirmation message displays for 3 seconds
4. Form resets after subscription

**Access stored data**:
```javascript
const subscribers = JSON.parse(localStorage.getItem('iamjos_subscribers') || '[]');
console.log(subscribers);
```

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **UI Components**: Shadcn/ui
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Plus Jakarta Sans, Playfair Display)
- **Analytics**: Vercel Analytics (production only)
- **Storage**: Client-side localStorage for prototyping

## 📱 Responsive Breakpoints

- **Mobile**: 375px width
- **Tablet**: 768px (md breakpoint)
- **Desktop**: 1024px (lg breakpoint)
- **Large Desktop**: 1920px+

All sections adapt beautifully across device sizes.

## 🔍 SEO Optimization

- Semantic HTML (main, section, header, footer)
- Proper heading hierarchy (H1 → H2 → H3)
- Meta tags for Open Graph
- Descriptive alt text for images
- Schema markup ready for structured data
- Accessible navigation links
- Fast performance (optimized for Core Web Vitals)

## ♿ Accessibility Features

- ARIA labels and roles
- Screen reader optimized
- Keyboard navigation support
- Proper color contrast ratios
- Focus indicators on interactive elements
- Semantic HTML structure

## 📦 File Structure

```
/app
  ├── layout.tsx          # Root layout with fonts
  ├── globals.css         # Design tokens & styles
  └── page.tsx            # Main landing page

/components
  ├── header.tsx          # Navigation & mobile menu
  ├── hero.tsx            # Hero section
  ├── features.tsx        # Feature cards
  ├── compliance.tsx      # Compliance & indexing
  ├── comparison.tsx      # IamJOS vs OJS comparison
  ├── pricing.tsx         # Pricing plans
  ├── faq.tsx            # FAQ accordion
  ├── newsletter.tsx      # Newsletter subscription
  └── footer.tsx          # Footer with links

/lib
  └── utils.ts            # Utility functions (cn)

/public
  └── [icons & assets]    # Static assets
```

## 🎯 Next Steps for Production

1. **Connect Real Backend**
   - Replace localStorage with backend API
   - Implement user authentication
   - Set up database for newsletter subscriptions

2. **Add Content Management**
   - Dynamic FAQ section from CMS
   - Pricing plans from database
   - Feature updates from admin panel

3. **Enhanced Analytics**
   - PostHog or similar for product analytics
   - Conversion tracking
   - User behavior insights

4. **Email Integration**
   - SendGrid or Mailchimp for newsletters
   - Automated welcome emails
   - Marketing automation flows

5. **Payment Integration**
   - Stripe for subscription management
   - Plan upgrades/downgrades
   - Invoice generation

6. **Compliance & Legal**
   - Privacy policy page
   - Terms of service
   - Cookie consent management
   - GDPR data export

## 🚀 Getting Started

### Install Dependencies
```bash
pnpm install
```

### Run Development Server
```bash
pnpm dev
```

### Build for Production
```bash
pnpm build
pnpm start
```

## 📄 License

This landing page is designed for IamJOS - a premium journal management platform.

---

**Built with ❤️ for academic excellence**
