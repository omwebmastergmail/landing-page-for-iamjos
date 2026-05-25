# IamJOS Landing Page - Prototype Guide

## 📝 Prototyping with Local Storage

This landing page implements **client-side data storage using localStorage** for testing and prototyping purposes. This allows you to test functionality without a backend server.

### What's Stored Locally?

#### 1. Newsletter Subscriptions
- **Storage Key**: `iamjos_subscribers`
- **Data Type**: JSON array of subscriber objects
- **Structure**:
  ```javascript
  [
    {
      email: "user@example.com",
      date: "2026-05-25T10:30:45.123Z"
    },
    {
      email: "another@example.com",
      date: "2026-05-25T10:31:20.456Z"
    }
  ]
  ```

### How to Test Newsletter Subscription

1. **Open Browser DevTools** (F12 or right-click → Inspect)
2. **Go to Console Tab**
3. **View Current Subscriptions**:
   ```javascript
   console.log(JSON.parse(localStorage.getItem('iamjos_subscribers') || '[]'))
   ```

4. **Subscribe via Form**:
   - Scroll to "Stay Updated" section
   - Enter your email address
   - Click "Subscribe" button
   - See confirmation message for 3 seconds

5. **Verify in localStorage**:
   ```javascript
   // After subscription, check console
   JSON.parse(localStorage.getItem('iamjos_subscribers'))
   ```

6. **Export Subscriptions** (copy to CSV):
   ```javascript
   const subscribers = JSON.parse(localStorage.getItem('iamjos_subscribers') || '[]');
   const csv = ['email,date', ...subscribers.map(s => `"${s.email}","${s.date}"`)].join('\n');
   console.log(csv);
   ```

7. **Clear All Subscriptions**:
   ```javascript
   localStorage.removeItem('iamjos_subscribers');
   console.log('All subscriptions cleared');
   ```

### Newsletter Form Features

✅ **Email Validation**: Basic HTML5 email validation
✅ **Success Feedback**: Green confirmation message
✅ **Auto-Reset**: Form clears after 3-second confirmation
✅ **Privacy Notice**: "We'll never share your email. Unsubscribe anytime."
✅ **Non-Intrusive**: Data persists but doesn't track users

### FAQ Accordion Testing

The FAQ section includes **interactive accordions**:

1. **10 Pre-Written Questions** covering:
   - IamJOS vs OJS comparison
   - Google Scholar indexing
   - Scopus integration
   - DOI management
   - Data migration
   - Security & compliance
   - Customization
   - Pricing
   - Support options
   - API integration

2. **How to Test**:
   - Click any FAQ question to expand
   - Click again to collapse
   - Only one section expands at a time
   - Smooth transitions with icons

### Pricing Section Features

✅ **Three Pricing Tiers**:
   - Starter: $99/month
   - Professional: $299/month (highlighted as popular)
   - Enterprise: Custom pricing

✅ **Feature Lists**: Each plan shows included features
✅ **Clear CTAs**: Different buttons for different plans
✅ **Responsive**: Scales beautifully on mobile

### Comparison Table Testing

Interactive feature comparison between IamJOS and Traditional OJS:

- **10 Feature Rows** with checkmarks for IamJOS
- **Visual Indicators**: Green checkmarks vs gray X marks
- **Hover Effects**: Subtle background changes
- **Mobile-Friendly**: Horizontal scroll on small screens

## 🔄 Transitioning to Production

When you're ready to move from prototyping to production:

### 1. **Replace Newsletter Storage**

**From** (Current localStorage):
```javascript
const subscribers = JSON.parse(localStorage.getItem('iamjos_subscribers') || '[]')
subscribers.push({ email, date: new Date().toISOString() })
localStorage.setItem('iamjos_subscribers', JSON.stringify(subscribers))
```

**To** (Backend API):
```javascript
const response = await fetch('/api/newsletter/subscribe', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email })
})
```

### 2. **Add Backend Endpoint**

Create `/app/api/newsletter/subscribe/route.ts`:
```typescript
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const { email } = await request.json()
  
  // Validate email
  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Invalid email' }, { status: 400 })
  }
  
  try {
    // Save to database (Supabase, Neon, etc.)
    // Send confirmation email
    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ error: 'Subscription failed' }, { status: 500 })
  }
}
```

### 3. **Recommended Stack for Production**

- **Database**: Supabase, Neon, or Aurora PostgreSQL
- **Email**: SendGrid, Mailchimp, or Resend
- **Authentication**: NextAuth.js or Supabase Auth
- **Payments**: Stripe for subscription plans
- **Analytics**: PostHog, Vercel Analytics

### 4. **SEO Enhancements**

The landing page is already SEO-optimized with:
- ✅ Meta tags (title, description, OG tags)
- ✅ Semantic HTML (header, main, section, footer)
- ✅ Proper heading hierarchy
- ✅ Mobile-friendly responsive design
- ✅ Fast performance
- ✅ Accessibility features

## 🛠️ Customization Tips

### Change Brand Colors
Edit `/app/globals.css`:
```css
:root {
  --primary: oklch(0.3 0.18 255);  /* Change this to your primary color */
  --accent: oklch(0.75 0.15 85);   /* Change this to your accent color */
}
```

### Update Copy/Content
- Hero section: `/components/hero.tsx`
- Features: `/components/features.tsx`
- FAQ questions: `/components/faq.tsx`
- Pricing plans: `/components/pricing.tsx`

### Add Images
Replace emoji placeholders with actual images in:
- `/components/compliance.tsx`
- Add images to `/public` directory
- Update `src` paths accordingly

### Modify Fonts
In `/app/layout.tsx`:
```typescript
import { YourFont } from 'next/font/google'
const _yourFont = YourFont({ subsets: ["latin"] })
```

## 📊 Testing Checklist

- [ ] All navigation links work
- [ ] Hero section displays correctly
- [ ] Feature cards show with icons
- [ ] Pricing cards highlight "Most Popular"
- [ ] FAQ accordions expand/collapse
- [ ] Newsletter subscription saves to localStorage
- [ ] Mobile menu opens/closes
- [ ] Responsive design works on all screens
- [ ] Footer links are clickable
- [ ] Smooth scrolling between sections

## 🚀 Deployment

### To Vercel (Recommended)
```bash
git push origin main
# Vercel automatically detects and deploys
```

### To Other Platforms
```bash
# Build static export
pnpm build

# Deploy the `out` folder to your hosting provider
```

## 📞 Support

For questions about the implementation:
1. Check this guide first
2. Review component comments in the code
3. Check the main README.md file

---

**Happy prototyping! 🎉**
