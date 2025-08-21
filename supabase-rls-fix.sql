-- Quick fix for RLS policy issues
-- Run this in your Supabase SQL editor if you're getting "row-level security policy" errors

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Allow insert onboarding forms" ON onboarding_forms;
DROP POLICY IF EXISTS "Allow insert connected systems quotes" ON connected_systems_quotes;
DROP POLICY IF EXISTS "Allow insert testimonial forms" ON testimonial_forms;
DROP POLICY IF EXISTS "Allow insert project info forms" ON project_info_forms;

-- Create new policies that allow public inserts
CREATE POLICY "Enable insert for anonymous users" ON contact_forms FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON onboarding_forms FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON connected_systems_quotes FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON testimonial_forms FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON project_info_forms FOR INSERT TO anon WITH CHECK (true);

-- Also allow for authenticated users
CREATE POLICY "Enable insert for authenticated users" ON contact_forms FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Enable insert for authenticated users" ON onboarding_forms FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Enable insert for authenticated users" ON connected_systems_quotes FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Enable insert for authenticated users" ON testimonial_forms FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Enable insert for authenticated users" ON project_info_forms FOR INSERT TO authenticated WITH CHECK (true);
