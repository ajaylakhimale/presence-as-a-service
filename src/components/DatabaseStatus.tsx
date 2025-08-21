import React, { useState, useEffect } from 'react';
import { AlertCircle, Settings } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { supabase } from '@/lib/supabase';
import DatabaseSetupInstructions from './DatabaseSetupInstructions';

interface DatabaseStatusProps {
    onStatusChange?: (isConnected: boolean) => void;
}

const DatabaseStatus: React.FC<DatabaseStatusProps> = ({ onStatusChange }) => {
    const [status, setStatus] = useState<'checking' | 'connected' | 'error' | 'tables-missing'>('checking');
    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        checkDatabaseStatus();
    }, []);

    const checkDatabaseStatus = async () => {
        try {
            setStatus('checking');

            // Test basic connection
            const { data, error } = await supabase
                .from('contact_forms')
                .select('count', { count: 'exact' })
                .limit(0);

            if (error) {
                console.error('Database status check error:', error);

                if (error.message.includes('relation "contact_forms" does not exist')) {
                    setStatus('tables-missing');
                    setErrorMessage('Database tables not found');
                } else if (error.message.includes('permission denied')) {
                    setStatus('error');
                    setErrorMessage('Permission denied - check RLS policies');
                } else {
                    setStatus('error');
                    setErrorMessage(error.message);
                }
                onStatusChange?.(false);
            } else {
                setStatus('connected');
                setErrorMessage('');
                onStatusChange?.(true);
            }
        } catch (error) {
            console.error('Database status check failed:', error);
            setStatus('error');
            setErrorMessage(error instanceof Error ? error.message : 'Unknown error');
            onStatusChange?.(false);
        }
    };

    // Don't show anything if checking or connected (success state)
    if (status === 'checking' || status === 'connected') {
        return null;
    }

    if (status === 'tables-missing') {
        return (
            <Alert className="border-amber-200 bg-amber-50 mb-6">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                    <div className="space-y-2">
                        <p className="font-medium">Database tables not found</p>
                        <p className="text-sm">Your database needs to be set up before forms can be submitted directly.</p>
                        <div className="flex gap-2 mt-2">
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="text-amber-700 border-amber-300 hover:bg-amber-100"
                                    >
                                        <Settings className="h-3 w-3 mr-1" />
                                        Setup Database
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
                                    <DialogHeader>
                                        <DialogTitle>Database Setup Instructions</DialogTitle>
                                    </DialogHeader>
                                    <DatabaseSetupInstructions />
                                </DialogContent>
                            </Dialog>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={checkDatabaseStatus}
                                className="text-amber-700 border-amber-300 hover:bg-amber-100"
                            >
                                Retry Connection
                            </Button>
                        </div>
                    </div>
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <Alert variant="destructive" className="mb-6">
            <AlertCircle className="h-4 w-4" />
            <AlertDescription>
                <div className="space-y-2">
                    <p>Database connection error: {errorMessage}</p>
                    <Button
                        size="sm"
                        variant="outline"
                        onClick={checkDatabaseStatus}
                    >
                        Retry Connection
                    </Button>
                </div>
            </AlertDescription>
        </Alert>
    );
};

export default DatabaseStatus;