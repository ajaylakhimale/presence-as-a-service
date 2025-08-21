// Supabase Connection Test
// Add this temporarily to debug the 401 error

import { supabase } from './supabase'

export const testSupabaseConnection = async () => {
    console.log('🔍 Testing Supabase connection...');

    try {
        // Test 1: Simple health check - just try to select from the table
        const { data, error } = await supabase
            .from('contact_forms')
            .select('id')
            .limit(1);

        if (error) {
            console.error('❌ Connection test failed:', error);
            return { success: false, error: error.message };
        }

        console.log('✅ Basic connection successful');

        // Test 2: Try to insert a simple record to onboarding_forms
        console.log('🔍 Testing insert capability...');
        const testData = {
            business_name: 'Test Company',
            business_description: 'Test Description',
            website_goals: 'Test Goals',
            has_existing_website: 'no',
            project_types: ['website'],
            features: ['contact-form'],
            timeline: '1-2 months',
            budget: '$1000-$5000',
            pages: ['home'],
            style_theme: 'modern'
        };

        const { data: insertResult, error: insertError } = await supabase
            .from('onboarding_forms')
            .insert([testData]);

        if (insertError) {
            console.error('❌ Insert test failed:', insertError);
            console.error('Error details:', {
                message: insertError.message,
                code: insertError.code,
                details: insertError.details,
                hint: insertError.hint
            });
            return { success: false, error: insertError.message };
        }

        console.log('✅ Insert test successful:', insertResult);
        return { success: true, data: insertResult };

    } catch (error) {
        console.error('❌ Connection test error:', error);
        return { success: false, error: error.message };
    }
};

export const debugSupabaseConfig = () => {
    console.log('🔧 Supabase Configuration Debug:');
    console.log('URL:', import.meta.env.VITE_SUPABASE_URL);
    console.log('Key exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
    console.log('Key preview:', import.meta.env.VITE_SUPABASE_ANON_KEY?.substring(0, 20) + '...');
    console.log('Supabase client:', supabase);
    console.log('Supabase auth:', supabase.auth);
    console.log('Current user:', supabase.auth.getUser());
};
