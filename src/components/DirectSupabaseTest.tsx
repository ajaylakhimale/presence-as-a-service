import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/lib/supabase';
import { AlertCircle, CheckCircle, Database } from 'lucide-react';

const DirectSupabaseTest = () => {
    const [results, setResults] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);

    const testDirectInsert = async (tableName: string, data: any) => {
        try {
            setLoading(true);
            const { data: result, error } = await supabase
                .from(tableName)
                .insert(data)
                .select()
                .single();

            if (error) {
                setResults(prev => [...prev, {
                    table: tableName,
                    success: false,
                    error: error.message,
                    details: error
                }]);
            } else {
                setResults(prev => [...prev, {
                    table: tableName,
                    success: true,
                    data: result
                }]);
            }
        } catch (err) {
            setResults(prev => [...prev, {
                table: tableName,
                success: false,
                error: (err as Error).message,
                details: err
            }]);
        }
        setLoading(false);
    };

    const testProjectSubmission = () => {
        testDirectInsert('project_submissions', {
            // Basic contact info
            name: 'Comprehensive Test User',
            email: `test-${Date.now()}@example.com`,
            phone: '+91 9876543210',

            // Company details
            company_name: 'Test Company Ltd',
            company_size: 'small',
            industry: 'technology',

            // Project details
            project_title: 'Comprehensive Website Project',
            project_type: 'professional',
            project_description: 'A comprehensive test of the new database schema with all fields populated for testing purposes.',
            target_audience: 'Tech-savvy professionals aged 25-45',
            existing_website_url: 'https://old-website.example.com',
            has_existing_branding: true,
            features: ['seo', 'analytics', 'social-media'],

            // Timeline and budget
            preferred_timeline: '2-3-months',
            launch_date: '2025-12-01',
            budget: '50000',
            budget_flexibility: true,

            // Additional info
            special_requirements: 'Must integrate with existing CRM system and support multiple languages.',
            referral_source: 'google',

            // System fields
            status: 'pending',
            priority: 'medium'
        });
    };

    const testContactSubmission = () => {
        testDirectInsert('contact_submissions', {
            name: 'Direct Contact Test',
            email: `contact-${Date.now()}@example.com`,
            subject: 'Direct Test Subject',
            message: 'Testing direct contact submission',
            status: 'unread',
            priority: 'medium'
        });
    };

    const testNewsletterSubmission = () => {
        testDirectInsert('newsletter_subscribers', {
            email: `newsletter-${Date.now()}@example.com`,
            source: 'direct-test',
            status: 'subscribed'
        });
    };

    const testMinimalProjectSubmission = () => {
        testDirectInsert('project_submissions', {
            name: 'Minimal Test User',
            email: `minimal-${Date.now()}@example.com`,
            project_type: 'starter',
            status: 'pending',
            priority: 'medium'
        });
    };

    const testAddOnsOnlySubmission = () => {
        testDirectInsert('project_submissions', {
            name: 'Add-ons Only User',
            email: `addons-${Date.now()}@example.com`,
            project_title: 'Enhance Existing Website',
            project_description: 'Need to add SEO and analytics to my existing site',
            features: ['seo', 'analytics', 'maintenance'],
            preferred_timeline: 'asap',
            budget: '15000',
            status: 'pending',
            priority: 'medium'
        });
    };

    const testAllFieldsSubmission = () => {
        testDirectInsert('project_submissions', {
            name: 'Complete Fields Test',
            email: `complete-${Date.now()}@example.com`,
            phone: '+91 9876543210',
            company_name: 'Complete Test Corp',
            company_size: 'large',
            industry: 'finance',
            project_title: 'Enterprise Web Platform',
            project_type: 'enterprise',
            project_description: 'Full-scale enterprise platform with advanced features',
            target_audience: 'Enterprise clients and B2B customers',
            existing_website_url: 'https://enterprise.example.com',
            has_existing_branding: true,
            features: ['custom-cms', 'crm-integration', 'payment-gateway', 'api-development'],
            preferred_timeline: '6-months',
            launch_date: '2026-03-15',
            budget: '200000',
            budget_flexibility: false,
            special_requirements: 'GDPR compliance, multi-language support, advanced security features',
            referral_source: 'referral',
            status: 'pending',
            priority: 'high'
        });
    };

    const clearResults = () => {
        setResults([]);
    };

    const checkDatabaseSchema = async () => {
        try {
            setLoading(true);
            // Try to describe the table structure by attempting a query
            const { data, error } = await supabase
                .from('project_submissions')
                .select('*')
                .limit(1);

            if (error) {
                setResults(prev => [...prev, {
                    table: 'Schema Check',
                    success: false,
                    error: `Schema check failed: ${error.message}`,
                    details: error
                }]);
            } else {
                setResults(prev => [...prev, {
                    table: 'Schema Check',
                    success: true,
                    data: {
                        message: 'Database schema is accessible',
                        sample_count: data?.length || 0,
                        timestamp: new Date().toISOString()
                    }
                }]);
            }
        } catch (err) {
            setResults(prev => [...prev, {
                table: 'Schema Check',
                success: false,
                error: (err as Error).message,
                details: err
            }]);
        }
        setLoading(false);
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Database className="h-5 w-5" />
                        Direct Supabase RLS Testing
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        <h3 className="text-sm font-medium text-gray-700">Project Submission Tests</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            <Button
                                onClick={testProjectSubmission}
                                disabled={loading}
                                variant="outline"
                                size="sm"
                            >
                                Full Project Test
                            </Button>
                            <Button
                                onClick={testMinimalProjectSubmission}
                                disabled={loading}
                                variant="outline"
                                size="sm"
                            >
                                Minimal Fields Test
                            </Button>
                            <Button
                                onClick={testAddOnsOnlySubmission}
                                disabled={loading}
                                variant="outline"
                                size="sm"
                            >
                                Add-ons Only Test
                            </Button>
                            <Button
                                onClick={testAllFieldsSubmission}
                                disabled={loading}
                                variant="outline"
                                size="sm"
                            >
                                All Fields Test
                            </Button>
                        </div>

                        <h3 className="text-sm font-medium text-gray-700 pt-4">Other Forms</h3>
                        <div className="grid md:grid-cols-2 gap-3">
                            <Button
                                onClick={testContactSubmission}
                                disabled={loading}
                                variant="outline"
                                size="sm"
                            >
                                Test Contact Form
                            </Button>
                            <Button
                                onClick={testNewsletterSubmission}
                                disabled={loading}
                                variant="outline"
                                size="sm"
                            >
                                Test Newsletter
                            </Button>
                        </div>
                    </div>

                    <div className="border-t pt-4 space-y-3">
                        <h3 className="text-sm font-medium text-gray-700">Database Status</h3>
                        <div className="flex gap-3">
                            <Button
                                onClick={checkDatabaseSchema}
                                disabled={loading}
                                variant="secondary"
                                size="sm"
                            >
                                Check Schema
                            </Button>
                            <Button
                                onClick={clearResults}
                                variant="ghost"
                                size="sm"
                            >
                                Clear Results
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {results.length > 0 && (
                <div className="space-y-3">
                    {results.map((result, index) => (
                        <Alert
                            key={index}
                            variant={result.success ? "default" : "destructive"}
                        >
                            <div className="flex items-center gap-2">
                                {result.success ? (
                                    <CheckCircle className="h-4 w-4 text-green-600" />
                                ) : (
                                    <AlertCircle className="h-4 w-4" />
                                )}
                                <AlertDescription>
                                    <div className="space-y-2">
                                        <div className="font-medium">
                                            {result.table}: {result.success ? 'SUCCESS' : 'FAILED'}
                                        </div>
                                        {result.success ? (
                                            <div className="text-sm bg-green-50 p-3 rounded space-y-2">
                                                <div><strong>Inserted ID:</strong> {result.data?.id}</div>
                                                <div><strong>Created At:</strong> {new Date(result.data?.created_at).toLocaleString()}</div>
                                                {result.data?.name && <div><strong>Name:</strong> {result.data.name}</div>}
                                                {result.data?.email && <div><strong>Email:</strong> {result.data.email}</div>}
                                                {result.data?.project_title && <div><strong>Project:</strong> {result.data.project_title}</div>}
                                                {result.data?.company_name && <div><strong>Company:</strong> {result.data.company_name}</div>}
                                                {result.data?.features && result.data.features.length > 0 && (
                                                    <div><strong>Features:</strong> {result.data.features.join(', ')}</div>
                                                )}
                                                <details className="text-xs">
                                                    <summary className="cursor-pointer font-medium">Show full data</summary>
                                                    <pre className="mt-2 p-2 bg-gray-100 rounded overflow-auto max-h-40">
                                                        {JSON.stringify(result.data, null, 2)}
                                                    </pre>
                                                </details>
                                            </div>
                                        ) : (
                                            <div className="space-y-1">
                                                <div className="text-sm font-medium text-red-700">
                                                    Error: {result.error}
                                                </div>
                                                {result.details && (
                                                    <details className="text-xs">
                                                        <summary className="cursor-pointer">Show details</summary>
                                                        <pre className="mt-1 p-2 bg-red-50 rounded overflow-auto">
                                                            {JSON.stringify(result.details, null, 2)}
                                                        </pre>
                                                    </details>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </AlertDescription>
                            </div>
                        </Alert>
                    ))}
                </div>
            )}
        </div>
    );
};

export default DirectSupabaseTest;
