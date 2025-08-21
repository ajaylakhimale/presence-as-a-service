import React, { useState, useEffect } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Info, Database, Upload, RefreshCw } from 'lucide-react';
import { autoRetryPendingSubmissions } from '@/lib/pending-submissions';

const PendingSubmissions: React.FC = () => {
    const [pendingCount, setPendingCount] = useState(0);
    const [showDetails, setShowDetails] = useState(false);
    const [isRetrying, setIsRetrying] = useState(false);

    useEffect(() => {
        const checkPendingSubmissions = () => {
            const pending = JSON.parse(
                localStorage.getItem('pending_form_submissions') || '[]'
            );
            setPendingCount(pending.length);
        };

        checkPendingSubmissions();

        // Check every 30 seconds for updates and auto-retry
        const interval = setInterval(async () => {
            checkPendingSubmissions();

            // Auto-retry if we have pending submissions
            if (pendingCount > 0 && !isRetrying) {
                await autoRetryPendingSubmissions();
                checkPendingSubmissions(); // Recheck after retry
            }
        }, 30000);

        // Listen for successful processing events
        const handleProcessed = () => {
            checkPendingSubmissions();
        };

        window.addEventListener('pendingSubmissionsProcessed', handleProcessed);

        return () => {
            clearInterval(interval);
            window.removeEventListener('pendingSubmissionsProcessed', handleProcessed);
        };
    }, [pendingCount, isRetrying]);

    const clearPendingSubmissions = () => {
        localStorage.removeItem('pending_form_submissions');
        setPendingCount(0);
        setShowDetails(false);
    };

    const manualRetry = async () => {
        setIsRetrying(true);
        try {
            await autoRetryPendingSubmissions();
            // Recheck pending count after retry
            const pending = JSON.parse(
                localStorage.getItem('pending_form_submissions') || '[]'
            );
            setPendingCount(pending.length);
        } catch (error) {
            console.error('Manual retry failed:', error);
        } finally {
            setIsRetrying(false);
        }
    };

    if (pendingCount === 0) return null;

    return (
        <Alert className="mb-6 border-amber-200 bg-amber-50">
            <Info className="h-4 w-4 text-amber-600" />
            <AlertDescription className="text-amber-800">
                <div className="space-y-2">
                    <p className="font-medium">
                        {pendingCount} form submission{pendingCount > 1 ? 's' : ''} saved locally
                    </p>
                    <p className="text-sm">
                        Your form data has been saved and will be submitted to our database once it's fully set up.
                    </p>
                    <div className="flex gap-2 mt-2">
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={manualRetry}
                            disabled={isRetrying}
                            className="text-blue-700 border-blue-300 hover:bg-blue-100"
                        >
                            <RefreshCw className={`h-3 w-3 mr-1 ${isRetrying ? 'animate-spin' : ''}`} />
                            {isRetrying ? 'Retrying...' : 'Retry Now'}
                        </Button>
                        {!showDetails && (
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={() => setShowDetails(true)}
                                className="text-amber-700 border-amber-300 hover:bg-amber-100"
                            >
                                View Details
                            </Button>
                        )}
                    </div>
                    {showDetails && (
                        <div className="mt-3 space-y-2">
                            <div className="text-sm bg-amber-100 p-3 rounded border">
                                <p className="font-medium mb-2">What happens next?</p>
                                <ul className="list-disc list-inside space-y-1 text-sm">
                                    <li>Your data is safely stored in your browser</li>
                                    <li>Once our database is set up, we'll process your submission</li>
                                    <li>You'll receive a confirmation email when complete</li>
                                </ul>
                            </div>
                            <div className="flex gap-2">
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={() => setShowDetails(false)}
                                    className="text-amber-700 border-amber-300 hover:bg-amber-100"
                                >
                                    Hide Details
                                </Button>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={clearPendingSubmissions}
                                    className="text-red-700 border-red-300 hover:bg-red-100"
                                >
                                    Clear Saved Data
                                </Button>
                            </div>
                        </div>
                    )}
                </div>
            </AlertDescription>
        </Alert>
    );
};

export default PendingSubmissions;
