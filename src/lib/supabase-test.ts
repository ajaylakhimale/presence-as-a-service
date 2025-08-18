// Test file to check Supabase connection
import { supabase } from './supabase';

export const testSupabaseConnection = async () => {
    try {
        // Test basic connection
        const { data, error } = await supabase
            .from('contact_forms')
            .select('count', { count: 'exact' })
            .limit(0);

        if (error) {
            console.error('Supabase connection error:', error);
            return false;
        }

        console.log('Supabase connection successful');
        return true;
    } catch (error) {
        console.error('Supabase test failed:', error);
        return false;
    }
};

// Test table existence
export const testTableExists = async (tableName: string) => {
    try {
        const { data, error } = await supabase
            .from(tableName)
            .select('*')
            .limit(1);

        if (error) {
            console.error(`Table ${tableName} error:`, error);
            return false;
        }

        console.log(`Table ${tableName} exists and is accessible`);
        return true;
    } catch (error) {
        console.error(`Table ${tableName} test failed:`, error);
        return false;
    }
};
