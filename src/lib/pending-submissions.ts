import { supabase } from './supabase';
import { insertContactForm, insertOnboardingForm } from './supabase';

export const processPendingSubmissions = async () => {
    console.log('🔄 Processing pending form submissions...');

    try {
        // Get pending submissions from localStorage
        const pendingSubmissions = JSON.parse(
            localStorage.getItem('pending_form_submissions') || '[]'
        );

        if (pendingSubmissions.length === 0) {
            console.log('✅ No pending submissions found');
            return { processed: 0, failed: 0 };
        }

        console.log(`📝 Found ${pendingSubmissions.length} pending submission(s)`);

        let processed = 0;
        let failed = 0;
        const remainingSubmissions = [];

        for (const submission of pendingSubmissions) {
            try {
                console.log(`Processing ${submission.type} submission...`);

                let result;
                if (submission.type === 'contact') {
                    result = await insertContactForm(submission.data);
                } else if (submission.type === 'onboarding') {
                    result = await insertOnboardingForm(submission.data);
                } else {
                    console.warn(`Unknown submission type: ${submission.type}`);
                    remainingSubmissions.push(submission);
                    continue;
                }

                if (result.success) {
                    console.log(`✅ Successfully processed ${submission.type} submission`);
                    processed++;
                } else {
                    console.error(`❌ Failed to process ${submission.type} submission:`, result.error);
                    remainingSubmissions.push(submission);
                    failed++;
                }

            } catch (error) {
                console.error(`💥 Error processing submission:`, error);
                remainingSubmissions.push(submission);
                failed++;
            }
        }

        // Update localStorage with only the failed submissions
        localStorage.setItem('pending_form_submissions', JSON.stringify(remainingSubmissions));

        console.log(`📊 Processing complete: ${processed} successful, ${failed} failed`);

        return { processed, failed, remaining: remainingSubmissions.length };

    } catch (error) {
        console.error('💥 Error in processPendingSubmissions:', error);
        return { processed: 0, failed: 0, error: error instanceof Error ? error.message : 'Unknown error' };
    }
};

// Function to automatically retry pending submissions when database is available
export const autoRetryPendingSubmissions = async () => {
    // Check if database is working
    try {
        const { data, error } = await supabase
            .from('contact_forms')
            .select('count', { count: 'exact' })
            .limit(0);

        if (!error) {
            // Database is working, process pending submissions
            const result = await processPendingSubmissions();

            if (result.processed > 0) {
                console.log(`🎉 Automatically processed ${result.processed} pending submission(s)!`);

                // Trigger a custom event to notify components
                window.dispatchEvent(new CustomEvent('pendingSubmissionsProcessed', {
                    detail: result
                }));
            }
        }
    } catch (error) {
        console.log('Database not ready yet, keeping submissions in localStorage');
    }
};
