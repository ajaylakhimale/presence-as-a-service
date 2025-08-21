import { supabase } from './supabase';

export const testDatabaseConnection = async () => {
    console.log('🔍 Testing database connection...');

    try {
        // Test basic connection
        const { data: healthCheck, error: healthError } = await supabase
            .from('contact_forms')
            .select('count', { count: 'exact' })
            .limit(0);

        if (healthError) {
            console.error('❌ Database connection failed:', healthError.message);

            if (healthError.message.includes('relation') || healthError.message.includes('does not exist')) {
                console.log('🔧 Tables not found. You need to run the SQL setup script.');
                console.log('📋 Run this in your Supabase SQL editor:');
                console.log(`
-- Create contact_forms table
CREATE TABLE IF NOT EXISTS contact_forms (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    company VARCHAR(255),
    subject VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    project_type VARCHAR(255),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create onboarding_forms table
CREATE TABLE IF NOT EXISTS onboarding_forms (
    id SERIAL PRIMARY KEY,
    business_name VARCHAR(255) NOT NULL,
    business_description TEXT NOT NULL,
    website_goals TEXT NOT NULL,
    has_existing_website VARCHAR(10) NOT NULL,
    target_audience TEXT,
    key_features TEXT,
    inspiration_links TEXT,
    budget_range VARCHAR(50),
    timeline VARCHAR(50),
    additional_notes TEXT,
    contact_email VARCHAR(255),
    contact_phone VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE onboarding_forms ENABLE ROW LEVEL SECURITY;

-- Create policies to allow public inserts
CREATE POLICY "Allow public inserts" ON contact_forms FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow public inserts" ON onboarding_forms FOR INSERT WITH CHECK (true);
                `);
                return { success: false, needsSetup: true };
            }

            return { success: false, error: healthError.message };
        }

        console.log('✅ Database connection successful!');
        console.log('📊 Contact forms table accessible');

        // Test onboarding_forms table
        const { data: onboardingCheck, error: onboardingError } = await supabase
            .from('onboarding_forms')
            .select('count', { count: 'exact' })
            .limit(0);

        if (onboardingError) {
            console.warn('⚠️ Onboarding forms table issue:', onboardingError.message);
        } else {
            console.log('📊 Onboarding forms table accessible');
        }

        return { success: true };

    } catch (error) {
        console.error('💥 Unexpected error:', error);
        return { success: false, error: error instanceof Error ? error.message : 'Unknown error' };
    }
};

// Auto-run test when imported
testDatabaseConnection();
