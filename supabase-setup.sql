-- SQL script to create tables in Supabase
-- Run this in your Supabase SQL editor

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

-- Optional: Create policies for reading data (if you need admin dashboard)
-- CREATE POLICY "Allow read contact forms" ON contact_forms FOR SELECT USING (auth.role() = 'authenticated');
-- (Add similar policies for other tables if needed)

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_forms_created_at ON contact_forms(created_at);
CREATE INDEX IF NOT EXISTS idx_onboarding_forms_created_at ON onboarding_forms(created_at);
CREATE INDEX IF NOT EXISTS idx_connected_systems_quotes_created_at ON connected_systems_quotes(created_at);
CREATE INDEX IF NOT EXISTS idx_testimonial_forms_created_at ON testimonial_forms(created_at);
CREATE INDEX IF NOT EXISTS idx_project_info_forms_created_at ON project_info_forms(created_at);
