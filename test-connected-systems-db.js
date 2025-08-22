// Quick test to check connected systems database table
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xwuaatgjrblhyzvkcmea.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh3dWFhdGdqcmJsaHl6dmtjbWVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU1MzcyMDUsImV4cCI6MjA3MTExMzIwNX0.swlddmQ9iVdyM3ff3tZY4xF7lNrePywdC6tST-Hsdb0';

const supabase = createClient(supabaseUrl, supabaseKey);

async function testConnectedSystemsTable() {
    console.log('🔍 Testing connected_systems_quotes table...');

    try {
        // Test if table exists and is accessible
        const { data, error } = await supabase
            .from('connected_systems_quotes')
            .select('count', { count: 'exact' })
            .limit(0);

        if (error) {
            console.error('❌ Table test failed:', error.message);

            if (error.message.includes('relation "connected_systems_quotes" does not exist')) {
                console.log('🚨 Table does not exist. You need to run the database setup SQL.');
                return false;
            }

            if (error.message.includes('permission denied') || error.message.includes('RLS')) {
                console.log('🚨 Permission denied. RLS policies need to be fixed.');
                return false;
            }

            return false;
        }

        console.log('✅ connected_systems_quotes table exists and is accessible!');
        console.log('📊 Row count:', data);

        // Test insert permission
        console.log('🔍 Testing insert permission...');
        const testData = {
            platforms: ['web', 'mobile'],
            features: 'Test features',
            contact_name: 'Test User',
            contact_email: 'test@example.com',
            company: 'Test Company'
        };

        const { data: insertData, error: insertError } = await supabase
            .from('connected_systems_quotes')
            .insert([testData])
            .select()
            .single();

        if (insertError) {
            console.error('❌ Insert test failed:', insertError.message);

            if (insertError.message.includes('RLS') || insertError.message.includes('policy')) {
                console.log('🚨 RLS policy violation. Run comprehensive-rls-fix.sql');
            }

            return false;
        }

        console.log('✅ Insert test successful!');
        console.log('📝 Inserted record:', insertData);

        // Clean up test record
        await supabase
            .from('connected_systems_quotes')
            .delete()
            .eq('id', insertData.id);

        console.log('🧹 Test record cleaned up');

        return true;

    } catch (error) {
        console.error('💥 Unexpected error:', error);
        return false;
    }
}

// Run the test
testConnectedSystemsTable().then(success => {
    if (success) {
        console.log('🎉 Connected Systems database integration is working perfectly!');
    } else {
        console.log('🔧 Connected Systems database needs setup or RLS policy fixes.');
    }
});
