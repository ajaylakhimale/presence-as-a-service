-- Specific Contact Forms RLS Fix
-- Run this in your Supabase SQL editor if contact_forms still has issues

-- Check current policies on contact_forms
SELECT 
  schemaname,
  tablename,
  policyname,
  roles,
  cmd,
  qual,
  with_check
FROM pg_policies 
WHERE tablename = 'contact_forms';

-- Drop all existing policies on contact_forms
DO $$ 
DECLARE
    policy_record RECORD;
BEGIN
    FOR policy_record IN 
        SELECT schemaname, tablename, policyname
        FROM pg_policies 
        WHERE tablename = 'contact_forms'
    LOOP
        EXECUTE format('DROP POLICY IF EXISTS %I ON %I.%I', 
                      policy_record.policyname, 
                      policy_record.schemaname, 
                      policy_record.tablename);
        RAISE NOTICE 'Dropped policy % on table %', policy_record.policyname, policy_record.tablename;
    END LOOP;
END $$;

-- Create fresh policies for contact_forms
CREATE POLICY "allow_anonymous_insert_contact_forms" 
  ON contact_forms FOR INSERT 
  TO anon 
  WITH CHECK (true);

CREATE POLICY "allow_authenticated_insert_contact_forms" 
  ON contact_forms FOR INSERT 
  TO authenticated 
  WITH CHECK (true);

-- Ensure RLS is enabled
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;

-- Grant permissions
GRANT INSERT ON contact_forms TO anon;
GRANT INSERT ON contact_forms TO authenticated;

-- Grant sequence usage
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO anon;
GRANT USAGE ON ALL SEQUENCES IN SCHEMA public TO authenticated;

-- Verify the fix
SELECT 
  'Policy: ' || policyname || ' - Roles: ' || array_to_string(roles, ', ') || ' - Command: ' || cmd as status
FROM pg_policies 
WHERE tablename = 'contact_forms'
ORDER BY policyname;

-- Test insert (this will show if it works)
-- INSERT INTO contact_forms (name, email, subject, message) VALUES ('Test User', 'test@example.com', 'Test Subject', 'Test message');

SELECT '✅ Contact forms RLS policies have been fixed!' as message;
