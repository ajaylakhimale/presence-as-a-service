-- FRESH DATABASE SETUP - Bulletproof Anonymous Forms
-- Run this in your Supabase SQL Editor after running database-reset.sql

-- Step 1: Enable UUID extension
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- Step 2: Create tables with minimal structure first
CREATE TABLE project_submissions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Contact Information
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    phone VARCHAR(50),
    company_name VARCHAR(255),
    company_size VARCHAR(50),
    industry VARCHAR(100),

    -- Project Details
    project_title VARCHAR(255),
    project_type VARCHAR(100),
    project_description TEXT,
    target_audience TEXT,
    existing_website_url VARCHAR(255),
    has_existing_branding BOOLEAN,
    features TEXT[], -- For add-ons

    -- Timeline & Budget
    preferred_timeline VARCHAR(100),
    launch_date DATE,
    budget VARCHAR(100),
    budget_flexibility BOOLEAN,

    -- Additional Information
    special_requirements TEXT,
    referral_source VARCHAR(100),
    
    -- Internal fields
    status VARCHAR(20) DEFAULT 'pending',
    priority VARCHAR(10) DEFAULT 'medium',
    notes TEXT,
    assigned_to VARCHAR(255)
);

CREATE TABLE contact_submissions (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    subject VARCHAR(500),
    message TEXT NOT NULL,
    status VARCHAR(20) DEFAULT 'unread',
    priority VARCHAR(10) DEFAULT 'medium'
);

CREATE TABLE newsletter_subscribers (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    email VARCHAR(255) UNIQUE NOT NULL,
    status VARCHAR(20) DEFAULT 'subscribed',
    source VARCHAR(100),
    tags TEXT[]
);

-- Step 3: Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_project_submissions_updated_at
    BEFORE UPDATE ON project_submissions
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Step 4: Create performance indexes
CREATE INDEX idx_project_submissions_email ON project_submissions(email);
CREATE INDEX idx_project_submissions_created_at ON project_submissions(created_at DESC);
CREATE INDEX idx_contact_submissions_email ON contact_submissions(email);
CREATE INDEX idx_contact_submissions_created_at ON contact_submissions(created_at DESC);
CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers(email);

-- Step 5: Enable RLS (but don't create policies yet)
ALTER TABLE project_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Step 6: Create SIMPLE, BULLETPROOF policies for 'anon' role
-- We are explicitly granting permissions to the 'anon' role and adding SELECT
-- because the Supabase client needs to read the row after inserting.

-- Project submissions: Allow anonymous INSERT and SELECT
CREATE POLICY "anonymous_insert_projects" ON project_submissions
    FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anonymous_select_projects" ON project_submissions
    FOR SELECT TO anon USING (true);

-- Contact submissions: Allow anonymous INSERT and SELECT
CREATE POLICY "anonymous_insert_contacts" ON contact_submissions
    FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anonymous_select_contacts" ON contact_submissions
    FOR SELECT TO anon USING (true);

-- Newsletter: Allow anonymous INSERT, SELECT, UPDATE (for upserts)
CREATE POLICY "anonymous_insert_newsletter" ON newsletter_subscribers
    FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "anonymous_select_newsletter" ON newsletter_subscribers
    FOR SELECT TO anon USING (true);

CREATE POLICY "anonymous_update_newsletter" ON newsletter_subscribers
    FOR UPDATE TO anon USING (true) WITH CHECK (true);

-- Step 7: Add admin policies for authenticated users
CREATE POLICY "authenticated_full_access_projects" ON project_submissions
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_full_access_contacts" ON contact_submissions
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

CREATE POLICY "authenticated_full_access_newsletter" ON newsletter_subscribers
    FOR ALL TO authenticated USING (true) WITH CHECK (true);

-- Step 8: Test the setup (uncomment to test)
-- INSERT INTO project_submissions (name, email, project_type, description) 
-- VALUES ('Test User', 'test@example.com', 'Test Project', 'Testing anonymous access');

-- INSERT INTO contact_submissions (name, email, subject, message) 
-- VALUES ('Test Contact', 'contact@example.com', 'Test Subject', 'Testing anonymous access');

-- INSERT INTO newsletter_subscribers (email, source) 
-- VALUES ('test@newsletter.com', 'setup-test');

-- Step 9: Verify everything is working
SELECT 'Setup complete! Tables created with anonymous access policies.' as status;

-- Check policies were created
SELECT 
    tablename, 
    policyname, 
    cmd as operation,
    roles
FROM pg_policies 
WHERE tablename IN ('project_submissions', 'contact_submissions', 'newsletter_subscribers')
ORDER BY tablename, cmd;
