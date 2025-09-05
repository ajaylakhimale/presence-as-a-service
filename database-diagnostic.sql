-- Diagnostic SQL - Run this to see what's different about newsletter vs other tables
-- Run this in your Supabase SQL Editor

-- 1. Check all current policies
SELECT 
    schemaname,
    tablename, 
    policyname, 
    cmd,
    roles,
    permissive,
    qual,
    with_check
FROM pg_policies 
WHERE tablename IN ('project_submissions', 'contact_submissions', 'newsletter_subscribers')
ORDER BY tablename, policyname;

-- 2. Check table permissions
SELECT 
    grantee, 
    table_name, 
    privilege_type 
FROM information_schema.table_privileges 
WHERE table_name IN ('project_submissions', 'contact_submissions', 'newsletter_subscribers')
AND grantee IN ('anon', 'authenticated', 'public');

-- 3. Check if RLS is enabled
SELECT 
    schemaname,
    tablename,
    rowsecurity 
FROM pg_tables 
WHERE tablename IN ('project_submissions', 'contact_submissions', 'newsletter_subscribers');

-- 4. Test what the anon role can do
SET ROLE anon;

-- Try to insert into each table (these should show what's allowed)
-- EXPLAIN (FORMAT JSON) INSERT INTO project_submissions (name, email, project_type) VALUES ('test', 'test@test.com', 'test');
-- EXPLAIN (FORMAT JSON) INSERT INTO contact_submissions (name, email, message) VALUES ('test', 'test@test.com', 'test');
-- EXPLAIN (FORMAT JSON) INSERT INTO newsletter_subscribers (email) VALUES ('test@test.com');

-- Reset role
RESET ROLE;
