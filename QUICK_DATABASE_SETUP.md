# 🚨 Database Setup Required

It looks like your Supabase database tables haven't been created yet. Follow these steps to set up your database:

## Quick Setup (5 minutes)

### Step 1: Open Supabase Dashboard
1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Sign in to your account
3. Select your project: `presence-as-a-service`

### Step 2: Create Database Tables
1. Click on **"SQL Editor"** in the left sidebar
2. Click **"New Query"**
3. Copy and paste this entire script:

```sql
-- Contact Forms Table
CREATE TABLE IF NOT EXISTS contact_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  project_type VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Onboarding Forms Table
CREATE TABLE IF NOT EXISTS onboarding_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  business_name VARCHAR(255) NOT NULL,
  business_description TEXT,
  website_goals TEXT,
  has_existing_website VARCHAR(50),
  project_types JSONB DEFAULT '[]',
  features JSONB DEFAULT '[]',
  timeline VARCHAR(255),
  budget VARCHAR(255),
  pages JSONB DEFAULT '[]',
  style_theme VARCHAR(255),
  contact_name VARCHAR(255),
  contact_email VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Connected Systems Quotes Table
CREATE TABLE IF NOT EXISTS connected_systems_quotes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  platforms JSONB DEFAULT '[]',
  features TEXT,
  contact_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonial Forms Table
CREATE TABLE IF NOT EXISTS testimonial_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  role VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  plan VARCHAR(255),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  testimonial TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project Info Forms Table
CREATE TABLE IF NOT EXISTS project_info_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  industry VARCHAR(255),
  type VARCHAR(255),
  delivery_time VARCHAR(255),
  start_date DATE,
  budget VARCHAR(255),
  features JSONB DEFAULT '[]',
  pages JSONB DEFAULT '[]',
  contact_name VARCHAR(255),
  contact_email VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE onboarding_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE connected_systems_quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonial_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_info_forms ENABLE ROW LEVEL SECURITY;

-- Create policies to allow inserts (for form submissions)
CREATE POLICY "Allow insert contact forms" ON contact_forms FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert onboarding forms" ON onboarding_forms FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert connected systems quotes" ON connected_systems_quotes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert testimonial forms" ON testimonial_forms FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert project info forms" ON project_info_forms FOR INSERT WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_forms_created_at ON contact_forms(created_at);
CREATE INDEX IF NOT EXISTS idx_onboarding_forms_created_at ON onboarding_forms(created_at);
CREATE INDEX IF NOT EXISTS idx_connected_systems_quotes_created_at ON connected_systems_quotes(created_at);
CREATE INDEX IF NOT EXISTS idx_testimonial_forms_created_at ON testimonial_forms(created_at);
CREATE INDEX IF NOT EXISTS idx_project_info_forms_created_at ON project_info_forms(created_at);
```

4. Click **"Run"** to execute the script
5. You should see "Success. No rows returned" message

### Step 3: Verify Setup
1. Go to **"Table Editor"** in the left sidebar
2. You should see 5 new tables:
   - `contact_forms`
   - `onboarding_forms` 
   - `connected_systems_quotes`
   - `testimonial_forms`
   - `project_info_forms`

### Step 4: Test Your Forms
1. Go back to your website
2. The database status should show "Database connected successfully"
3. Try submitting a form - it should work now!

## ✅ That's it!

Your forms are now connected to the database and will save all submissions. You can view the data in your Supabase dashboard under **Table Editor**.

## 🔍 Troubleshooting

**Still seeing errors?**
- Make sure you ran the entire SQL script
- Check that all 5 tables were created
- Verify your environment variables in `.env` are correct
- Try refreshing the page

**Need help?**
- Check the browser console for detailed error messages
- Verify your Supabase project URL and key
- Make sure your Supabase project is active and not paused
