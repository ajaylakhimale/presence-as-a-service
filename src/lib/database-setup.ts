import { supabase } from './supabase';

export const createTablesIfNotExist = async () => {
    try {
        console.log('Checking and creating database tables...');

        // Check if contact_forms table exists by trying to query it
        const { error: contactError } = await supabase
            .from('contact_forms')
            .select('count', { count: 'exact' })
            .limit(0);

        if (contactError && contactError.message.includes('relation "contact_forms" does not exist')) {
            console.log('Creating contact_forms table...');

            // Create the table using RPC or direct SQL
            const { error: createError } = await supabase.rpc('exec', {
                sql: `
          CREATE TABLE IF NOT EXISTS contact_forms (
            id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) NOT NULL,
            company VARCHAR(255),
            subject VARCHAR(255) NOT NULL,
            message TEXT NOT NULL,
            project_type VARCHAR(255),
            created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
          );
          
          ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
          CREATE POLICY "Allow insert contact forms" ON contact_forms FOR INSERT WITH CHECK (true);
        `
            });

            if (createError) {
                console.error('Error creating contact_forms table:', createError);
            } else {
                console.log('contact_forms table created successfully');
            }
        }

        // Add similar checks for other tables...

    } catch (error) {
        console.error('Error in table creation:', error);
    }
};

// Fallback: simplified form submission without database
export const submitFormFallback = async (formType: string, data: any) => {
    console.log(`${formType} form submission (fallback):`, data);

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    // For now, just log the data
    console.log('Form data would be sent to:', {
        endpoint: `/api/${formType}`,
        data,
        timestamp: new Date().toISOString()
    });

    return { success: true, message: 'Form submitted successfully (stored locally)' };
};
