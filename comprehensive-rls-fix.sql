-- Comprehensive RLS Fix Script for All Form Tables
-- Run this in your Supabase SQL editor to fix all RLS policy issues

-- First, let's check what policies currently exist (uncomment to see current policies)
-- SELECT schemaname, tablename, policyname, roles, cmd, qual 
-- FROM pg_policies 
-- WHERE tablename IN ('contact_forms', 'onboarding_forms', 'connected_systems_quotes', 'testimonial_forms', 'project_info_forms');

-- Drop ALL existing policies for form tables
DROP POLICY IF EXISTS "Allow insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Allow insert onboarding forms" ON onboarding_forms;
DROP POLICY IF EXISTS "Allow insert connected systems quotes" ON connected_systems_quotes;
DROP POLICY IF EXISTS "Allow insert testimonial forms" ON testimonial_forms;
DROP POLICY IF EXISTS "Allow insert project info forms" ON project_info_forms;

-- Drop any other possible policy names that might exist
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON contact_forms;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON onboarding_forms;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON connected_systems_quotes;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON testimonial_forms;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON project_info_forms;

DROP POLICY IF EXISTS "Enable insert for authenticated users" ON contact_forms;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON onboarding_forms;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON connected_systems_quotes;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON testimonial_forms;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON project_info_forms;

-- Create comprehensive policies for anonymous users (frontend form submissions)
CREATE POLICY "allow_anonymous_insert_contact_forms" 
  ON contact_forms FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "allow_anonymous_insert_onboarding_forms" 
  ON onboarding_forms FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "allow_anonymous_insert_connected_systems_quotes" 
  ON connected_systems_quotes FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "allow_anonymous_insert_testimonial_forms" 
  ON testimonial_forms FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "allow_anonymous_insert_project_info_forms" 
  ON project_info_forms FOR INSERT 
  TO anon 
  WITH CHECK (true);

-- Also create policies for authenticated users
CREATE POLICY "allow_authenticated_insert_contact_forms" 
  ON contact_forms FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "allow_authenticated_insert_onboarding_forms" 
  ON onboarding_forms FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "allow_authenticated_insert_connected_systems_quotes" 
  ON connected_systems_quotes FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "allow_authenticated_insert_testimonial_forms" 
  ON testimonial_forms FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

CREATE POLICY "allow_authenticated_insert_project_info_forms" 
  ON project_info_forms FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

-- Verify that RLS is enabled on all tables
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE onboarding_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE connected_systems_quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonial_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_info_forms ENABLE ROW LEVEL SECURITY;

-- Grant necessary permissions to anon role
GRANT INSERT ON contact_forms TO anon;
GRANT INSERT ON onboarding_forms TO anon;
GRANT INSERT ON connected_systems_quotes TO anon;
GRANT INSERT ON testimonial_forms TO anon;
GRANT INSERT ON project_info_forms TO anon;

-- Grant usage on sequences (for auto-incrementing IDs)
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;

-- Show success message
SELECT 'RLS policies have been successfully updated for all form tables!' as message;
