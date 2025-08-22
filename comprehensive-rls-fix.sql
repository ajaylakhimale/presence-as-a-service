-- Comprehensive RLS Policy Fix for Presence-as-a-Service Database
-- This fixes all Row Level Security policy violations for form submissions
-- Run this in your Supabase SQL Editor to fix RLS issues

-- First, let's ensure all tables have RLS enabled
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE onboarding_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE connected_systems_quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonial_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_info_forms ENABLE ROW LEVEL SECURITY;

-- Drop any existing conflicting policies
DROP POLICY IF EXISTS "Allow insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Allow insert onboarding forms" ON onboarding_forms;
DROP POLICY IF EXISTS "Allow insert connected systems quotes" ON connected_systems_quotes;
DROP POLICY IF EXISTS "Allow insert testimonial forms" ON testimonial_forms;
DROP POLICY IF EXISTS "Allow insert project info forms" ON project_info_forms;

-- Drop any old anonymous user policies
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON contact_forms;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON onboarding_forms;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON connected_systems_quotes;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON testimonial_forms;
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON project_info_forms;

-- Drop any old authenticated user policies
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON contact_forms;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON onboarding_forms;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON connected_systems_quotes;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON testimonial_forms;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON project_info_forms;

-- Create comprehensive policies for anonymous users (website visitors)
CREATE POLICY "public_insert_contact_forms" ON contact_forms 
FOR INSERT TO anon 
WITH CHECK (true);

CREATE POLICY "public_insert_onboarding_forms" ON onboarding_forms 
FOR INSERT TO anon 
WITH CHECK (true);

CREATE POLICY "public_insert_connected_systems_quotes" ON connected_systems_quotes 
FOR INSERT TO anon 
WITH CHECK (true);

CREATE POLICY "public_insert_testimonial_forms" ON testimonial_forms 
FOR INSERT TO anon 
WITH CHECK (true);

CREATE POLICY "public_insert_project_info_forms" ON project_info_forms 
FOR INSERT TO anon 
WITH CHECK (true);

-- Create policies for authenticated users
CREATE POLICY "auth_insert_contact_forms" ON contact_forms 
FOR INSERT TO authenticated 
WITH CHECK (true);

CREATE POLICY "auth_insert_onboarding_forms" ON onboarding_forms 
FOR INSERT TO authenticated 
WITH CHECK (true);

CREATE POLICY "auth_insert_connected_systems_quotes" ON connected_systems_quotes 
FOR INSERT TO authenticated 
WITH CHECK (true);

CREATE POLICY "auth_insert_testimonial_forms" ON testimonial_forms 
FOR INSERT TO authenticated 
WITH CHECK (true);

CREATE POLICY "auth_insert_project_info_forms" ON project_info_forms 
FOR INSERT TO authenticated 
WITH CHECK (true);

-- Add SELECT policies for authenticated users (for admin panels)
CREATE POLICY "auth_select_contact_forms" ON contact_forms 
FOR SELECT TO authenticated 
USING (true);

CREATE POLICY "auth_select_onboarding_forms" ON onboarding_forms 
FOR SELECT TO authenticated 
USING (true);

CREATE POLICY "auth_select_connected_systems_quotes" ON connected_systems_quotes 
FOR SELECT TO authenticated 
USING (true);

CREATE POLICY "auth_select_testimonial_forms" ON testimonial_forms 
FOR SELECT TO authenticated 
USING (true);

CREATE POLICY "auth_select_project_info_forms" ON project_info_forms 
FOR SELECT TO authenticated 
USING (true);

-- Verify policies are created
SELECT schemaname, tablename, policyname, permissive, roles, cmd, qual 
FROM pg_policies 
WHERE tablename IN ('contact_forms', 'onboarding_forms', 'connected_systems_quotes', 'testimonial_forms', 'project_info_forms')
ORDER BY tablename, policyname;