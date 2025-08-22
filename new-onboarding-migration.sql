-- Clean up old onboarding table and create new plan-specific structure
-- Run this after backing up any important data from onboarding_forms

-- Drop old table (optional - you may want to rename it instead)
-- DROP TABLE IF EXISTS onboarding_forms;

-- Create the new plan_onboarding_forms table (if not already created)
-- This is the same as in plan-onboarding-setup.sql but included here for completeness

CREATE TABLE IF NOT EXISTS plan_onboarding_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  
  -- Plan Information
  plan_type VARCHAR(50) NOT NULL, -- 'basic-website', 'professional-site', etc.
  plan_price VARCHAR(50) NOT NULL, -- The price they selected
  
  -- Contact Information
  contact_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  contact_phone VARCHAR(20),
  company_name VARCHAR(255),
  
  -- Project Details
  project_title VARCHAR(255) NOT NULL,
  project_description TEXT NOT NULL,
  target_audience TEXT,
  existing_website_url VARCHAR(500),
  has_existing_branding BOOLEAN DEFAULT false,
  
  -- Timeline & Budget
  preferred_timeline VARCHAR(50), -- 'asap', 'flexible', 'specific-date'
  specific_date DATE,
  additional_budget_available BOOLEAN DEFAULT false,
  additional_budget_amount VARCHAR(50),
  
  -- Plan-specific requirements
  specific_requirements JSONB DEFAULT '{}', -- Plan-specific data structure
  
  -- Status
  status VARCHAR(20) DEFAULT 'submitted', -- 'submitted', 'reviewed', 'quoted', 'accepted', 'in-progress', 'completed'
  admin_notes TEXT,
  
  -- Metadata
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE plan_onboarding_forms ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Enable insert for anonymous users" ON plan_onboarding_forms 
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "Enable insert for authenticated users" ON plan_onboarding_forms 
  FOR INSERT TO authenticated WITH CHECK (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_plan_onboarding_forms_created_at ON plan_onboarding_forms(created_at);
CREATE INDEX IF NOT EXISTS idx_plan_onboarding_forms_plan_type ON plan_onboarding_forms(plan_type);
CREATE INDEX IF NOT EXISTS idx_plan_onboarding_forms_status ON plan_onboarding_forms(status);

-- Grant permissions
GRANT INSERT ON plan_onboarding_forms TO anon;
GRANT INSERT ON plan_onboarding_forms TO authenticated;
