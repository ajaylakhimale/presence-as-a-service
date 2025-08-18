import { supabase } from './supabase';

// Check if database is properly configured
export const checkDatabaseSetup = async () => {
    try {
        // Test if we can connect and if tables exist
        const { data, error } = await supabase
            .from('contact_forms')
            .select('count', { count: 'exact' })
            .limit(0);

        return { connected: !error, error: error?.message };
    } catch (error) {
        return {
            connected: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
};

// Enhanced form submission with better error handling
export const submitFormSafely = async (
    tableName: string,
    data: any,
    insertFunction: (data: any) => Promise<any>
) => {
    try {
        // First check if database is accessible
        const dbStatus = await checkDatabaseSetup();

        if (!dbStatus.connected) {
            throw new Error(
                dbStatus.error?.includes('relation')
                    ? 'Database tables not found. Please run the setup SQL script in your Supabase dashboard.'
                    : `Database connection error: ${dbStatus.error}`
            );
        }

        // If database is accessible, try to submit
        const result = await insertFunction(data);
        return { success: true, data: result };

    } catch (error) {
        console.error(`Error submitting to ${tableName}:`, error);

        // Return detailed error information
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';

        return {
            success: false,
            error: errorMessage,
            isDbSetupError: errorMessage.includes('Database tables not found')
        };
    }
};

// Fallback form submission (saves to localStorage for now)
export const submitFormFallback = async (formType: string, data: any) => {
    console.log(`Submitting ${formType} form using fallback method...`);

    // Store in localStorage as backup
    const timestamp = new Date().toISOString();
    const submissionId = `${formType}_${Date.now()}`;

    const submission = {
        id: submissionId,
        type: formType,
        data,
        timestamp,
        status: 'pending_database_setup'
    };

    // Get existing submissions
    const existingSubmissions = JSON.parse(
        localStorage.getItem('pending_form_submissions') || '[]'
    );

    // Add new submission
    existingSubmissions.push(submission);

    // Save back to localStorage
    localStorage.setItem('pending_form_submissions', JSON.stringify(existingSubmissions));

    console.log(`Form data saved locally with ID: ${submissionId}`);
    console.log('Note: Data will be submitted to database once setup is complete.');

    return { success: true, submissionId, pendingDatabaseSetup: true };
};
