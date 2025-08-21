-- Database Diagnostic Script
-- Run this in your Supabase SQL editor to diagnose RLS issues

-- 1. Check if tables exist
SELECT 
  table_name,
  table_type
FROM information_schema.tables 
WHERE table_schema = 'public' 
  AND table_name IN ('contact_forms', 'onboarding_forms', 'connected_systems_quotes', 'testimonial_forms', 'project_info_forms')
ORDER BY table_name;

-- 2. Check RLS status on tables
SELECT 
  schemaname,
  tablename,
  rowsecurity
FROM pg_tables 
WHERE schemaname = 'public' 
  AND tablename IN ('contact_forms', 'onboarding_forms', 'connected_systems_quotes', 'testimonial_forms', 'project_info_forms');

-- 3. Check existing policies
SELECT 
  schemaname,
  tablename,
  policyname,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename IN ('contact_forms', 'onboarding_forms', 'connected_systems_quotes', 'testimonial_forms', 'project_info_forms')
ORDER BY tablename, policyname;

-- 4. Check permissions for anon role
SELECT 
  table_name,
  privilege_type
FROM information_schema.role_table_grants 
WHERE grantee = 'anon' 
  AND table_name IN ('contact_forms', 'onboarding_forms', 'connected_systems_quotes', 'testimonial_forms', 'project_info_forms')
ORDER BY table_name, privilege_type;

-- 5. Check sequence permissions
SELECT 
  sequence_name,
  privilege_type
FROM information_schema.role_usage_grants 
WHERE grantee = 'anon' 
  AND object_type = 'SEQUENCE'
ORDER BY sequence_name;

-- 6. Test insert capability (this will show the exact error if any)
-- Uncomment ONE of these lines to test:
-- INSERT INTO onboarding_forms (company_name, contact_name, email) VALUES ('Test Company', 'Test User', 'test@example.com');
-- SELECT 'Test insert would work' as result;
