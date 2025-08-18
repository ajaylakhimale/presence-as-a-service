// Simple test to debug the database connection issue
import { supabase } from '../lib/supabase';

const testDatabaseConnection = async () => {
    console.log('=== DATABASE CONNECTION TEST ===');

    // Test 1: Check environment variables
    console.log('Environment check:');
    console.log('VITE_SUPABASE_URL:', import.meta.env.VITE_SUPABASE_URL);
    console.log('VITE_SUPABASE_ANON_KEY exists:', !!import.meta.env.VITE_SUPABASE_ANON_KEY);
    console.log('VITE_SUPABASE_ANON_KEY length:', import.meta.env.VITE_SUPABASE_ANON_KEY?.length);

    // Test 2: Basic connectivity
    try {
        console.log('\nTesting basic Supabase connectivity...');
        const { data, error } = await supabase.auth.getSession();
        console.log('Auth test result:', { data, error });
    } catch (error) {
        console.error('Auth test failed:', error);
    }

    // Test 3: Check if tables exist
    try {
        console.log('\nTesting table existence...');
        const { data, error } = await supabase
            .from('contact_forms')
            .select('count', { count: 'exact' })
            .limit(0);

        if (error) {
            console.error('Table test error:', error);
            console.error('Error details:', {
                message: error.message,
                details: error.details,
                hint: error.hint,
                code: error.code
            });
        } else {
            console.log('Table test successful:', data);
        }
    } catch (error) {
        console.error('Table test exception:', error);
    }

    // Test 4: Try to insert a test record
    try {
        console.log('\nTesting record insertion...');
        const testData = {
            name: 'Test User',
            email: 'test@example.com',
            subject: 'Test Subject',
            message: 'Test message'
        };

        const { data, error } = await supabase
            .from('contact_forms')
            .insert([testData])
            .select()
            .single();

        if (error) {
            console.error('Insert test error:', error);
            console.error('Error details:', {
                message: error.message,
                details: error.details,
                hint: error.hint,
                code: error.code
            });
        } else {
            console.log('Insert test successful:', data);

            // Clean up - delete the test record
            await supabase
                .from('contact_forms')
                .delete()
                .eq('id', data.id);
            console.log('Test record cleaned up');
        }
    } catch (error) {
        console.error('Insert test exception:', error);
    }

    console.log('=== TEST COMPLETE ===');
};

// Auto-run the test when this file is imported
testDatabaseConnection();

export { testDatabaseConnection };
