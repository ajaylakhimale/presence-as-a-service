# New Plan-Specific Onboarding System

## 🎯 Overview
Replaced the generic onboarding with a plan-specific system that guides users through tailored forms based on their selected pricing plan.

## 🗂️ Database Changes

### New Table: `plan_onboarding_forms`
```sql
CREATE TABLE plan_onboarding_forms (
  id UUID PRIMARY KEY,
  plan_type VARCHAR(50) NOT NULL,     -- Plan identifier
  plan_price VARCHAR(50) NOT NULL,    -- Selected price
  contact_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  contact_phone VARCHAR(20),
  company_name VARCHAR(255),
  project_title VARCHAR(255) NOT NULL,
  project_description TEXT NOT NULL,
  target_audience TEXT,
  existing_website_url VARCHAR(500),
  has_existing_branding BOOLEAN DEFAULT false,
  preferred_timeline VARCHAR(50),
  specific_date DATE,
  additional_budget_available BOOLEAN DEFAULT false,
  additional_budget_amount VARCHAR(50),
  specific_requirements JSONB DEFAULT '{}',
  status VARCHAR(20) DEFAULT 'submitted',
  admin_notes TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Migration Required
1. Run `plan-onboarding-setup.sql` to create new table
2. Run `new-onboarding-migration.sql` for cleanup (optional)
3. Old `onboarding_forms` table can be backed up and removed

## 🔗 URL Structure

### New Routes
- `/plan-onboarding?plan={plan_id}` - Plan-specific onboarding
- `/thank-you?type=onboarding` - Success page

### Plan IDs
**Main Pricing (`/pricing`):**
- `basic-website` - ₹15,999
- `professional-site` - ₹29,999  
- `business-standard` - ₹49,999
- `business-pro` - ₹79,999
- `enterprise-platform` - ₹1,49,999
- `enterprise-custom` - Custom Quote

**Connected Systems (`/connected-systems`):**
- `connected-launch` - ₹1,49,999
- `connected-pro` - ₹2,99,999
- `connected-enterprise` - Custom Quote

## 🎨 User Experience

### 4-Step Process
1. **Plan & Contact** - Show selected plan, collect contact info
2. **Project Details** - Description, audience, existing assets
3. **Timeline & Budget** - Delivery preferences, additional budget
4. **Review & Submit** - Final review before submission

### Features
- ✅ Plan-specific form fields and validation
- ✅ Progress indicator and step navigation
- ✅ Calendar picker for specific deadlines
- ✅ Additional budget options
- ✅ Mobile-responsive design
- ✅ Clear next steps communication

## 📱 Updated Components

### Files Created
- `src/pages/PlanOnboarding.tsx` - New onboarding component
- `src/pages/ThankYou.tsx` - Success page
- `plan-onboarding-setup.sql` - Database setup

### Files Updated
- `src/App.tsx` - Added new routes, removed old onboarding
- `src/pages/CleanPricing.tsx` - Updated all "Get Started" buttons
- `src/pages/ConnectedSystems.tsx` - Updated all "Start Project" buttons
- `src/pages/TechStack.tsx` - Updated CTA to go to pricing

### Files Removed
- `src/pages/Onboarding.tsx` - Old generic onboarding (deleted)

## 🔄 User Flow

1. User visits `/pricing` or `/connected-systems`
2. Selects a plan and clicks "Get Started" 
3. Redirected to `/plan-onboarding?plan={plan_id}`
4. Completes 4-step onboarding form
5. Submits and goes to `/thank-you?type=onboarding`
6. Receives confirmation and next steps

## 📊 Admin Benefits

### Better Data Collection
- Know exactly which plan customer is interested in
- Plan-specific requirements captured
- Clear project scope from the start
- Timeline and budget expectations set upfront

### Improved Process
- No more guessing what plan they want
- Faster proposal generation
- Better project scoping
- Higher conversion rates

## 🚀 Next Steps

1. **Deploy Database Changes**
   ```sql
   -- Run this in your Supabase SQL editor
   \i plan-onboarding-setup.sql
   ```

2. **Test the Flow**
   - Visit `/pricing`
   - Click "Get Started" on any plan
   - Complete the onboarding form
   - Verify data in `plan_onboarding_forms` table

3. **Update Admin Dashboard** (Future)
   - Create admin interface to view plan_onboarding_forms
   - Add status management (submitted → reviewed → quoted → etc.)
   - Generate proposals based on plan and requirements

## 💡 Key Improvements

- **Conversion Optimization**: Clearer path from pricing to onboarding
- **Data Quality**: Plan-specific requirements capture
- **User Experience**: Tailored forms based on selected plan
- **Sales Process**: Better qualified leads with clear expectations
- **Admin Efficiency**: Faster proposal generation with structured data

This new system creates a seamless transition from pricing selection to project initiation, ensuring better data collection and improved conversion rates.
