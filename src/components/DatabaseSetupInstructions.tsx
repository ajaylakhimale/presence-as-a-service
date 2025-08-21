import React, { useState } from 'react';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Database, Copy, CheckCircle, ExternalLink, AlertTriangle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const DatabaseSetupInstructions: React.FC = () => {
    const { toast } = useToast();
    const [sqlCopied, setSqlCopied] = useState(false);
    const [rlsFixCopied, setRlsFixCopied] = useState(false);

    const sqlScript = `-- SQL script to create tables in Supabase
-- Run this in your Supabase SQL editor

-- Contact Forms Table
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

-- Onboarding Forms Table
CREATE TABLE IF NOT EXISTS onboarding_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  business_name VARCHAR(255) NOT NULL,
  business_description TEXT,
  website_goals TEXT,
  has_existing_website VARCHAR(50),
  project_types JSONB DEFAULT '[]',
  features JSONB DEFAULT '[]',
  timeline VARCHAR(255),
  budget VARCHAR(255),
  pages JSONB DEFAULT '[]',
  style_theme VARCHAR(255),
  contact_name VARCHAR(255),
  contact_email VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Connected Systems Quotes Table
CREATE TABLE IF NOT EXISTS connected_systems_quotes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  platforms JSONB DEFAULT '[]',
  features TEXT,
  contact_name VARCHAR(255) NOT NULL,
  contact_email VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Testimonial Forms Table
CREATE TABLE IF NOT EXISTS testimonial_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  company VARCHAR(255),
  role VARCHAR(255),
  email VARCHAR(255) NOT NULL,
  plan VARCHAR(255),
  rating INTEGER CHECK (rating >= 1 AND rating <= 5),
  testimonial TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Project Info Forms Table
CREATE TABLE IF NOT EXISTS project_info_forms (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  industry VARCHAR(255),
  type VARCHAR(255),
  delivery_time VARCHAR(255),
  start_date DATE,
  budget VARCHAR(255),
  features JSONB DEFAULT '[]',
  pages JSONB DEFAULT '[]',
  contact_name VARCHAR(255),
  contact_email VARCHAR(255),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE contact_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE onboarding_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE connected_systems_quotes ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonial_forms ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_info_forms ENABLE ROW LEVEL SECURITY;

-- Create policies to allow inserts (for form submissions)
CREATE POLICY "Allow insert contact forms" ON contact_forms FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert onboarding forms" ON onboarding_forms FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert connected systems quotes" ON connected_systems_quotes FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert testimonial forms" ON testimonial_forms FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow insert project info forms" ON project_info_forms FOR INSERT WITH CHECK (true);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_contact_forms_created_at ON contact_forms(created_at);
CREATE INDEX IF NOT EXISTS idx_onboarding_forms_created_at ON onboarding_forms(created_at);
CREATE INDEX IF NOT EXISTS idx_connected_systems_quotes_created_at ON connected_systems_quotes(created_at);
CREATE INDEX IF NOT EXISTS idx_testimonial_forms_created_at ON testimonial_forms(created_at);
CREATE INDEX IF NOT EXISTS idx_project_info_forms_created_at ON project_info_forms(created_at);`;

    const rlsFixScript = `-- Quick fix for RLS policy issues
-- Run this ONLY if you're getting "row-level security policy" errors

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Allow insert contact forms" ON contact_forms;
DROP POLICY IF EXISTS "Allow insert onboarding forms" ON onboarding_forms;
DROP POLICY IF EXISTS "Allow insert connected systems quotes" ON connected_systems_quotes;
DROP POLICY IF EXISTS "Allow insert testimonial forms" ON testimonial_forms;
DROP POLICY IF EXISTS "Allow insert project info forms" ON project_info_forms;

-- Create new policies that allow public inserts
CREATE POLICY "Enable insert for anonymous users" ON contact_forms FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON onboarding_forms FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON connected_systems_quotes FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON testimonial_forms FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Enable insert for anonymous users" ON project_info_forms FOR INSERT TO anon WITH CHECK (true);

-- Also allow for authenticated users
CREATE POLICY "Enable insert for authenticated users" ON contact_forms FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Enable insert for authenticated users" ON onboarding_forms FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Enable insert for authenticated users" ON connected_systems_quotes FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Enable insert for authenticated users" ON testimonial_forms FOR INSERT TO authenticated WITH CHECK (true);
CREATE POLICY "Enable insert for authenticated users" ON project_info_forms FOR INSERT TO authenticated WITH CHECK (true);`;

    const copySQL = async () => {
        try {
            await navigator.clipboard.writeText(sqlScript);
            setSqlCopied(true);
            toast({
                title: "SQL Copied!",
                description: "The setup script has been copied to your clipboard.",
            });
            setTimeout(() => setSqlCopied(false), 3000);
        } catch (error) {
            toast({
                title: "Copy Failed",
                description: "Please manually copy the SQL script below.",
                variant: "destructive"
            });
        }
    };

    const copyRLSFix = async () => {
        try {
            await navigator.clipboard.writeText(rlsFixScript);
            setRlsFixCopied(true);
            toast({
                title: "RLS Fix Copied!",
                description: "The RLS fix script has been copied to your clipboard.",
            });
            setTimeout(() => setRlsFixCopied(false), 3000);
        } catch (error) {
            toast({
                title: "Copy Failed",
                description: "Please manually copy the RLS fix script below.",
                variant: "destructive"
            });
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <Alert className="border-amber-200 bg-amber-50">
                <AlertTriangle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                    <div className="space-y-2">
                        <p className="font-medium">Database Setup Required</p>
                        <p className="text-sm">
                            Your Supabase database needs to be set up before forms can be submitted directly to the database.
                            Until then, form data will be saved locally in your browser.
                        </p>
                    </div>
                </AlertDescription>
            </Alert>

            <Alert className="border-blue-200 bg-blue-50">
                <AlertTriangle className="h-4 w-4 text-blue-600" />
                <AlertDescription className="text-blue-800">
                    <div className="space-y-2">
                        <p className="font-medium">Getting RLS Policy Errors?</p>
                        <p className="text-sm">
                            If you see "row-level security policy" errors, copy and run the RLS fix script below after the main setup.
                        </p>
                    </div>
                </AlertDescription>
            </Alert>

            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Database className="h-5 w-5" />
                        Quick Database Setup
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <div className="space-y-3">
                        <div className="flex items-start gap-3">
                            <Badge variant="outline" className="mt-1">1</Badge>
                            <div>
                                <p className="font-medium">Copy the SQL script</p>
                                <p className="text-sm text-muted-foreground">
                                    Copy the database setup script to your clipboard
                                </p>
                                <Button
                                    onClick={copySQL}
                                    className="mt-2"
                                    variant="outline"
                                    size="sm"
                                >
                                    {sqlCopied ? (
                                        <>
                                            <CheckCircle className="h-3 w-3 mr-1" />
                                            Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-3 w-3 mr-1" />
                                            Copy SQL Script
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Badge variant="outline" className="mt-1">2</Badge>
                            <div>
                                <p className="font-medium">Open Supabase SQL Editor</p>
                                <p className="text-sm text-muted-foreground">
                                    Go to your Supabase dashboard → SQL Editor
                                </p>
                                <Button
                                    className="mt-2"
                                    variant="outline"
                                    size="sm"
                                    onClick={() => window.open('https://supabase.com/dashboard/project/_/sql', '_blank')}
                                >
                                    <ExternalLink className="h-3 w-3 mr-1" />
                                    Open SQL Editor
                                </Button>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Badge variant="outline" className="mt-1">3</Badge>
                            <div>
                                <p className="font-medium">Run the script</p>
                                <p className="text-sm text-muted-foreground">
                                    Paste the SQL script and click "Run" to create all necessary tables
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Badge variant="outline" className="mt-1">4</Badge>
                            <div>
                                <p className="font-medium">Refresh this page</p>
                                <p className="text-sm text-muted-foreground">
                                    Once the tables are created, refresh this page and your forms will work!
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3 border-t pt-3 mt-3">
                            <Badge variant="outline" className="mt-1 bg-red-50 text-red-700 border-red-200">Fix</Badge>
                            <div>
                                <p className="font-medium">If you get RLS policy errors</p>
                                <p className="text-sm text-muted-foreground">
                                    Run the RLS fix script below if you see "row-level security policy" errors
                                </p>
                                <Button
                                    onClick={copyRLSFix}
                                    className="mt-2"
                                    variant="outline"
                                    size="sm"
                                >
                                    {rlsFixCopied ? (
                                        <>
                                            <CheckCircle className="h-3 w-3 mr-1" />
                                            RLS Fix Copied!
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-3 w-3 mr-1" />
                                            Copy RLS Fix Script
                                        </>
                                    )}
                                </Button>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-sm">Main SQL Script</CardTitle>
                </CardHeader>
                <CardContent>
                    <pre className="text-xs bg-gray-100 p-4 rounded-lg overflow-x-auto max-h-96">
                        <code>{sqlScript}</code>
                    </pre>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle className="text-sm text-red-700">RLS Fix Script (Only if needed)</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">
                        Run this script only if you're getting "row-level security policy" errors after running the main script.
                    </p>
                    <pre className="text-xs bg-red-50 p-4 rounded-lg overflow-x-auto max-h-96 border border-red-200">
                        <code>{rlsFixScript}</code>
                    </pre>
                </CardContent>
            </Card>
        </div>
    );
};

export default DatabaseSetupInstructions;
