# 📊 Google Analytics Setup Guide

## ✅ What's Already Implemented

Your website now has Google Analytics 4 (GA4) fully integrated with:

### **1. Core Analytics Features**
- **Automatic page view tracking** on route changes
- **Event tracking** for user interactions
- **Form submission tracking** (success/failure)
- **Button click tracking** on key CTAs
- **Privacy-compliant setup** (only loads in production by default)

### **2. Built-in Event Tracking**
- **Hero CTA buttons** - "Get Started Today" and WhatsApp clicks
- **Form submissions** - Modern onboarding form success/failure
- **Page views** - Automatic tracking on navigation
- **Custom events** - Infrastructure ready for more tracking

### **3. Environment Configuration**
- **Production-only loading** (unless explicitly enabled in dev)
- **Environment variable configuration**
- **Graceful fallback** when no GA ID is provided

## 🚀 How to Enable Google Analytics

### **Step 1: Get Your Google Analytics ID**

1. **Go to Google Analytics**: Visit [analytics.google.com](https://analytics.google.com)
2. **Create/Select Property**: Create a new GA4 property for your website
3. **Get Measurement ID**: Copy your measurement ID (format: `G-XXXXXXXXXX`)

### **Step 2: Configure Environment Variables**

In your hosting provider (Vercel, Netlify, etc.), add:

```bash
VITE_GOOGLE_ANALYTICS_ID=G-YOUR-ACTUAL-ID-HERE
```

Or in your `.env.production` file:

```bash
VITE_GOOGLE_ANALYTICS_ID=G-YOUR-ACTUAL-ID-HERE
```

### **Step 3: Deploy and Verify**

1. **Deploy your site** with the new environment variable
2. **Visit your website** in production
3. **Check Google Analytics** - you should see real-time data within minutes

## 📈 What Gets Tracked

### **Automatic Events**
- **page_view** - Every page navigation
- **form_submit** - Modern onboarding form (success/failure)
- **button_click** - Hero CTA buttons with location context

### **Custom Event Examples**
```typescript
// Import tracking functions
import { trackEvent, trackButtonClick, trackFormSubmission } from '@/components/GoogleAnalytics';

// Track custom button clicks
trackButtonClick('pricing_cta', 'pricing_page');

// Track form submissions
trackFormSubmission('contact_form', true);

// Track custom events
trackEvent('newsletter_signup', { source: 'footer' });
```

## 🔧 Advanced Configuration

### **Enable in Development**
To test analytics in development, update `src/config/site.ts`:

```typescript
analytics: {
  enableInDevelopment: true  // Set to true for testing
}
```

### **Add Google Tag Manager (Optional)**
If you prefer GTM, add this environment variable:

```bash
VITE_GOOGLE_TAG_MANAGER_ID=GTM-XXXXXXX
```

### **Privacy Compliance**
The implementation is privacy-friendly:
- ✅ Only loads when valid GA ID is provided
- ✅ Uses standard GA4 privacy controls
- ✅ Respects user browser settings
- ✅ No tracking in development by default

## 📊 Available Events

### **Current Tracked Events**

| Event Name | Description | Parameters |
|------------|-------------|------------|
| `page_view` | Page navigation | `page_name`, `page_location` |
| `form_submit` | Form submissions | `form_name`, `success` |
| `button_click` | Button interactions | `button_name`, `click_location` |

### **Recommended Additional Events**
You can easily add tracking for:
- Newsletter signups
- File downloads
- External link clicks
- Video plays
- Scroll depth
- Contact form interactions

## 🎯 Monitoring Success

### **Google Analytics Dashboard**
After setup, monitor:
- **Real-time users** (should show immediately)
- **Page views** on different routes
- **Events** section for custom tracking
- **Conversions** (form submissions)

### **Key Metrics to Watch**
1. **Traffic sources** - Where users come from
2. **Popular pages** - Which content performs best
3. **User flow** - How users navigate your site
4. **Form completion rates** - Onboarding success
5. **Button click rates** - CTA effectiveness

## 🔒 Privacy & GDPR Compliance

### **Current Implementation**
- Analytics only loads with valid configuration
- No tracking cookies set without user consent
- Privacy-first approach

### **For GDPR Compliance** (if needed)
Consider implementing:
- Cookie consent integration
- Analytics opt-out functionality
- Data retention policies

## 📞 Troubleshooting

### **Analytics Not Showing Data**
1. ✅ Check environment variable is set correctly
2. ✅ Verify GA ID format: `G-XXXXXXXXXX`
3. ✅ Ensure you're testing on production/staging
4. ✅ Wait 24-48 hours for full data processing

### **Events Not Tracking**
1. ✅ Open browser dev tools → Network tab
2. ✅ Look for requests to `google-analytics.com`
3. ✅ Check console for any JavaScript errors

Your Google Analytics setup is now production-ready! 🎉
