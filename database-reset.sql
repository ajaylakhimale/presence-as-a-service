-- COMPLETE DATABASE CLEANUP - Nuclear Reset
-- ⚠️  WARNING: This will delete ALL data and tables!
-- Run this in your Supabase SQL Editor to start fresh

-- Step 1: Drop all policies first
DO $$
DECLARE
    pol RECORD;
BEGIN
    -- Drop all policies on project_submissions
    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'project_submissions' LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON project_submissions', pol.policyname);
    END LOOP;
    
    -- Drop all policies on contact_submissions
    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'contact_submissions' LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON contact_submissions', pol.policyname);
    END LOOP;
    
    -- Drop all policies on newsletter_subscribers
    FOR pol IN SELECT policyname FROM pg_policies WHERE tablename = 'newsletter_subscribers' LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON newsletter_subscribers', pol.policyname);
    END LOOP;
END $$;

-- Step 2: Disable RLS on all tables
ALTER TABLE IF EXISTS project_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS contact_submissions DISABLE ROW LEVEL SECURITY;
ALTER TABLE IF EXISTS newsletter_subscribers DISABLE ROW LEVEL SECURITY;

-- Step 3: Drop all triggers
DROP TRIGGER IF EXISTS update_project_submissions_updated_at ON project_submissions;

-- Step 4: Drop all functions
DROP FUNCTION IF EXISTS update_updated_at_column();
DROP FUNCTION IF EXISTS get_submission_stats();

-- Step 5: Drop all indexes
DROP INDEX IF EXISTS idx_project_submissions_email;
DROP INDEX IF EXISTS idx_project_submissions_status;
DROP INDEX IF EXISTS idx_project_submissions_created_at;
DROP INDEX IF EXISTS idx_contact_submissions_email;
DROP INDEX IF EXISTS idx_contact_submissions_status;
DROP INDEX IF EXISTS idx_contact_submissions_created_at;
DROP INDEX IF EXISTS idx_newsletter_subscribers_email;
DROP INDEX IF EXISTS idx_newsletter_subscribers_status;

-- Step 6: Drop all tables (this will delete ALL data!)
DROP TABLE IF EXISTS project_submissions CASCADE;
DROP TABLE IF EXISTS contact_submissions CASCADE;
DROP TABLE IF EXISTS newsletter_subscribers CASCADE;

-- Step 7: Drop UUID extension if not needed elsewhere
-- DROP EXTENSION IF EXISTS "uuid-ossp";

-- Verify everything is gone
SELECT 
    table_name 
FROM information_schema.tables 
WHERE table_name IN ('project_submissions', 'contact_submissions', 'newsletter_subscribers')
    AND table_schema = 'public';

-- Should return no rows if successful

-- Also check for any remaining policies
SELECT 
    tablename, 
    policyname 
FROM pg_policies 
WHERE tablename IN ('project_submissions', 'contact_submissions', 'newsletter_subscribers');

-- Should return no rows if successful

COMMENT ON SCHEMA public IS 'Database has been reset - ready for fresh setup';
