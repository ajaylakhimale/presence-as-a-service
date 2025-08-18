import React, { useState, useEffect } from 'react';
import { AlertCircle, CheckCircle, Database, ExternalLink } from 'lucide-react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { supabase } from '@/lib/supabase';

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
            setErrorMessage('Connection failed');
            onStatusChange?.(false);
        }
    };

    if (status === 'checking') {
        return (
            <Alert>
                <Database className="h-4 w-4" />
                <AlertDescription>
                    Checking database connection...
                </AlertDescription>
            </Alert>
        );
    }

    if (status === 'connected') {
        return (
            <Alert className="border-green-200 bg-green-50">
                <CheckCircle className="h-4 w-4 text-green-600" />
                <AlertDescription className="text-green-800">
                    Database connected successfully
                </AlertDescription>
            </Alert>
        );
    }

    if (status === 'tables-missing') {
        return (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                    <div className="space-y-2">
                        <p>Database tables not found. Please set up your database:</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm">
                            <li>Go to your Supabase dashboard</li>
                            <li>Navigate to the SQL Editor</li>
                            <li>Copy and paste the contents of <code>supabase-setup.sql</code></li>
                            <li>Run the SQL script</li>
                        </ol>
                        <div className="flex gap-2 mt-2">
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={checkDatabaseStatus}
                            >
                                Retry Connection
                            </Button>
                            <Button
                                size="sm"
                                variant="outline"
                                onClick={() => window.open('https://supabase.com/dashboard', '_blank')}
                            >
                                <ExternalLink className="h-3 w-3 mr-1" />
                                Open Supabase
                            </Button>
                        </div>
                    </div>
                </AlertDescription>
            </Alert>
        );
    }

    return (
        <Alert variant="destructive">
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
