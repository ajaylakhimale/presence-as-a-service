-- Safe RLS Fix Script - Handles Existing Policies
-- Run this in your Supabase SQL editor to fix all RLS policy issues safely

-- First, let's see what policies currently exist
SELECT 
  schemaname,
  tablename,
  policyname,
  roles,
  cmd
FROM pg_policies 
WHERE tablename IN ('contact_forms', 'onboarding_forms', 'connected_systems_quotes', 'testimonial_forms', 'project_info_forms')
ORDER BY tablename, policyname;

-- Drop ALL existing policies more comprehensively (this handles any naming variations)
DO $$ 
DECLARE
    policy_record RECORD;
BEGIN
    -- Drop all policies for form tables
    FOR policy_record IN 
        SELECT schemaname, tablename, policyname
        FROM pg_policies 
        WHERE tablename IN ('contact_forms', 'onboarding_forms', 'connected_systems_quotes', 'testimonial_forms', 'project_info_forms')
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON %I.%I', 
                      policy_record.policyname, 
                      policy_record.schemaname, 
                      policy_record.tablename);
        RAISE NOTICE 'Dropped policy % on table %', policy_record.policyname, policy_record.tablename;
    END LOOP;
END $$;

-- Now create fresh policies for anonymous users (frontend form submissions)
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

-- Ensure RLS is enabled on all tables
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

-- Final verification - show all policies after creation
SELECT 
  'Policy created: ' || policyname || ' on table ' || tablename as status
FROM pg_policies 
WHERE tablename IN ('contact_forms', 'onboarding_forms', 'connected_systems_quotes', 'testimonial_forms', 'project_info_forms')
ORDER BY tablename, policyname;

-- Show success message
SELECT '✅ RLS policies have been successfully updated for all form tables!' as message;
