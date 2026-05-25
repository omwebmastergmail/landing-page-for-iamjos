# IamJOS Landing Page - Deployment Guide

## 🚀 Quick Deployment

### Option 1: Deploy to Vercel (Recommended)

**Fastest and easiest option. Works with Git integration.**

#### Prerequisites
- GitHub account with the repository
- Vercel account (free)

#### Steps

1. **Push code to GitHub**
   ```bash
   git add .
   git commit -m "IamJOS landing page"
   git push origin main
   ```

2. **Import to Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Select your GitHub repository
   - Click "Import"
   - Keep default settings (Next.js will auto-detect)
   - Click "Deploy"

3. **Wait for deployment**
   - Vercel builds and deploys automatically
   - Takes 1-2 minutes
   - Get a live URL immediately

4. **Custom domain** (optional)
   - Go to Vercel project settings
   - Add your custom domain
   - Update DNS records as instructed

#### Environment Variables
None required for the prototype version. When upgrading to production:

```
NEXT_PUBLIC_API_URL=https://api.iamjos.com
DATABASE_URL=your_database_url
STRIPE_SECRET_KEY=your_stripe_key
```

---

### Option 2: Deploy to Netlify

**Alternative CDN-based deployment**

#### Steps

1. **Connect Git repository**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Select GitHub
   - Choose repository

2. **Configure build**
   - Build command: `pnpm build`
   - Publish directory: `.next`
   - Click "Deploy"

3. **Wait for deployment**
   - Netlify builds and deploys
   - Get a live URL

---

### Option 3: Deploy to AWS Amplify

**For enterprise deployments**

#### Steps

1. **Create Amplify app**
   ```bash
   npm install -g @aws-amplify/cli
   amplify init
   ```

2. **Deploy**
   ```bash
   amplify publish
   ```

3. **Access via CloudFront**
   - AWS provides CDN distribution
   - High performance globally

---

### Option 4: Self-Hosted Deployment

**For full control, use Docker**

#### Using Docker

1. **Create Dockerfile**
   ```dockerfile
   FROM node:18-alpine
   WORKDIR /app
   COPY . .
   RUN pnpm install
   RUN pnpm build
   EXPOSE 3000
   CMD ["pnpm", "start"]
   ```

2. **Build Docker image**
   ```bash
   docker build -t iamjos-landing .
   ```

3. **Run container**
   ```bash
   docker run -p 3000:3000 iamjos-landing
   ```

4. **Push to registry**
   ```bash
   docker push your-registry/iamjos-landing
   ```

#### Deploy to Any Server

1. **Build for production**
   ```bash
   pnpm build
   ```

2. **Install dependencies**
   ```bash
   pnpm install --prod
   ```

3. **Start server**
   ```bash
   pnpm start
   ```

4. **Use PM2 for process management**
   ```bash
   npm install -g pm2
   pm2 start "pnpm start" --name iamjos
   pm2 save
   ```

---

## 📋 Pre-Deployment Checklist

Before deploying to production:

### Content & Copy
- [ ] Update all hardcoded email addresses
- [ ] Review FAQ answers for accuracy
- [ ] Update pricing if different
- [ ] Check all links are correct
- [ ] Review footer links
- [ ] Update copyright year (automatic in footer)

### Design & Branding
- [ ] Logo is correct
- [ ] Colors match brand
- [ ] Typography looks good
- [ ] All images are optimized
- [ ] Responsive design tested

### Performance
- [ ] Run Lighthouse audit
  ```bash
  pnpm build && pnpm start
  # Open http://localhost:3000 in Chrome
  # Run Lighthouse audit (F12 → Lighthouse)
  ```
- [ ] Check Core Web Vitals
- [ ] Verify images are optimized
- [ ] Check bundle size

### SEO
- [ ] Meta title is compelling
- [ ] Meta description is clear
- [ ] OG tags are set
- [ ] Keywords are relevant
- [ ] Heading hierarchy is correct
- [ ] No broken links

### Security
- [ ] No sensitive data in code
- [ ] No API keys exposed
- [ ] Environment variables configured
- [ ] HTTPS enabled
- [ ] Security headers added

### Functionality
- [ ] All buttons work
- [ ] Forms work correctly
- [ ] Newsletter subscription tested
- [ ] FAQ accordions work
- [ ] Navigation links work
- [ ] Mobile menu works
- [ ] Responsive design verified

### Analytics
- [ ] Analytics code added (if needed)
- [ ] Tracking events configured
- [ ] Goal tracking setup
- [ ] Conversion tracking ready

---

## 🔧 Build Optimization

### Local Testing Before Deploy

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run Lighthouse audit
# Open http://localhost:3000 in Chrome
# Dev Tools → Lighthouse → Generate report
```

### Bundle Analysis

```bash
# See what's in your bundle
pnpm build --analyze

# Check specific component sizes
ls -lh .next/static/chunks/
```

---

## 📊 Post-Deployment Tasks

After deployment:

### 1. **Test Live Site**
- [ ] Visit your domain
- [ ] Test all navigation links
- [ ] Test newsletter subscription
- [ ] Test FAQ expandable items
- [ ] Check mobile responsiveness
- [ ] Verify smooth scrolling
- [ ] Test form submissions

### 2. **Monitor Performance**
```bash
# Check build time
# Check page load time
# Monitor Core Web Vitals

# Using Vercel Analytics:
# Dashboard → Analytics
```

### 3. **Setup Monitoring**
- Sentry for error tracking
- PostHog for analytics
- Vercel analytics for performance

### 4. **Setup Backups**
- Enable automatic backups
- Test restoration process
- Document recovery procedure

### 5. **Setup SSL/TLS**
- Auto-enabled on Vercel
- Verify HTTPS on custom domain
- Update security headers

---

## 🔄 Continuous Deployment

### Auto-Deploy on Git Push

**With Vercel** (automatic):
```
1. Push to main branch
2. Vercel auto-builds
3. Deploys on success
4. Rollback on failure
```

**Configure CI/CD Pipeline**

Create `.github/workflows/deploy.yml`:
```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: pnpm install
      - run: pnpm build
      - run: pnpm test  # if tests exist
      - name: Deploy
        run: |
          # Your deployment command here
          # e.g., vercel --prod
```

---

## 🌍 CDN & Caching

### Vercel CDN (Automatic)
- Static files cached globally
- Auto-compression (gzip, brotli)
- ISR (Incremental Static Regeneration)
- Edge caching

### Custom CDN Setup

**Using Cloudflare:**
1. Point domain to Cloudflare
2. Enable caching rules
3. Setup page rules
4. Enable minification

**Caching Strategy:**
```
Static assets: Cache for 1 year (with hash)
HTML pages: Cache for 1 hour
Images: Cache for 7 days
API calls: No cache
```

---

## 🔐 Production Security Checklist

- [ ] HTTPS/SSL enabled
- [ ] Security headers configured
  ```
  Strict-Transport-Security: max-age=31536000
  X-Frame-Options: DENY
  X-Content-Type-Options: nosniff
  X-XSS-Protection: 1; mode=block
  ```
- [ ] CORS configured correctly
- [ ] Environment variables secured
- [ ] No console.log in production
- [ ] No debug code exposed
- [ ] Rate limiting enabled
- [ ] DDoS protection active
- [ ] Regular security audits scheduled

---

## 📈 Monitoring & Maintenance

### Weekly Tasks
- [ ] Check error logs
- [ ] Monitor performance metrics
- [ ] Verify backups completed
- [ ] Check security alerts

### Monthly Tasks
- [ ] Review analytics
- [ ] Update dependencies
- [ ] Run security scan
- [ ] Test disaster recovery

### Quarterly Tasks
- [ ] Performance optimization review
- [ ] SEO audit
- [ ] User feedback analysis
- [ ] Plan feature updates

---

## 🛠️ Troubleshooting

### Deploy Fails

**Issue**: Build error
- Check logs for specific error
- Verify all dependencies are listed in `package.json`
- Test build locally: `pnpm build`

**Issue**: "Module not found"
- Ensure all imports are correct
- Run `pnpm install` locally
- Check file paths are relative

**Issue**: Out of memory
- Increase memory limit
- Optimize images
- Split large components

### Live Site Issues

**Issue**: Blank page
- Check browser console for errors
- Verify API endpoints
- Check environment variables
- Review network requests

**Issue**: Slow performance
- Check image sizes
- Review bundle size
- Enable compression
- Check CDN caching

**Issue**: Forms not working
- Verify API endpoints
- Check CORS headers
- Test in different browsers
- Check browser console

---

## 📞 Support Resources

### For Vercel Deployments
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)
- [Vercel Community](https://github.com/vercel/next.js/discussions)

### For Next.js Issues
- [Next.js Docs](https://nextjs.org/docs)
- [Next.js GitHub Issues](https://github.com/vercel/next.js/issues)
- [Stack Overflow](https://stackoverflow.com/questions/tagged/next.js)

### For General Web Issues
- [MDN Web Docs](https://developer.mozilla.org)
- [Web.dev](https://web.dev)
- [Can I Use](https://caniuse.com)

---

## 🎉 Deployment Complete!

Your IamJOS landing page is now live. 

**Next Steps:**
1. Share your live URL
2. Test on real devices
3. Gather user feedback
4. Plan feature updates
5. Monitor performance
6. Celebrate launch! 🚀

---

**Questions about deployment? Check the docs or reach out to support!**
