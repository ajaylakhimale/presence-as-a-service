-- Simple RLS Fix - Step by Step
-- Run each section separately in your Supabase SQL Editor

-- STEP 1: Check what policies currently exist
SELECT tablename, policyname, cmd, roles, qual, with_check
FROM pg_policies 
WHERE tablename IN ('project_submissions', 'contact_submissions', 'newsletter_subscribers');

-- STEP 2: Drop ALL policies on project_submissions
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON project_submissions;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON project_submissions;
DROP POLICY IF EXISTS "Enable select for authenticated users" ON project_submissions;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON project_submissions;
DROP POLICY IF EXISTS "Anyone can insert project submissions" ON project_submissions;
DROP POLICY IF EXISTS "Public can insert project submissions" ON project_submissions;
DROP POLICY IF EXISTS "Authenticated users can view project submissions" ON project_submissions;
DROP POLICY IF EXISTS "Authenticated users can update project submissions" ON project_submissions;

-- STEP 3: Drop ALL policies on contact_submissions
DROP POLICY IF EXISTS "Enable insert for anonymous users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable insert for authenticated users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable select for authenticated users" ON contact_submissions;
DROP POLICY IF EXISTS "Enable update for authenticated users" ON contact_submissions;
DROP POLICY IF EXISTS "Anyone can insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Public can insert contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can view contact submissions" ON contact_submissions;
DROP POLICY IF EXISTS "Authenticated users can update contact submissions" ON contact_submissions;

-- STEP 4: Create simple INSERT-only policies like newsletter has
CREATE POLICY "Simple insert policy" ON project_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Simple insert policy" ON contact_submissions
    FOR INSERT WITH CHECK (true);

-- STEP 5: Verify the policies were created
SELECT tablename, policyname, cmd, roles, qual, with_check
FROM pg_policies 
WHERE tablename IN ('project_submissions', 'contact_submissions')
ORDER BY tablename;
