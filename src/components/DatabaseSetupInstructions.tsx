import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { CheckCircle, Copy, Database, ExternalLink, FileText, Settings } from 'lucide-react'
import { useState } from 'react'

const DatabaseSetupInstructions = () => {
    const [copiedStep, setCopiedStep] = useState<number | null>(null)

    const copyToClipboard = (text: string, stepNumber: number) => {
        navigator.clipboard.writeText(text)
        setCopiedStep(stepNumber)
        setTimeout(() => setCopiedStep(null), 2000)
    }

    const setupSteps = [
        {
            title: "Create Supabase Project",
            description: "Sign up at supabase.com and create a new project",
            action: "Visit Supabase",
            link: "https://supabase.com"
        },
        {
            title: "Run Database Setup",
            description: "Copy and run the SQL setup script in your Supabase SQL Editor",
            code: `-- Check if the setup file exists in your project root
-- Run: supabase-setup.sql`,
            copyText: "supabase-setup.sql"
        },
        {
            title: "Get Project Credentials",
            description: "From your Supabase project settings, copy your URL and anon key",
            steps: [
                "Go to Project Settings > API",
                "Copy 'Project URL'",
                "Copy 'anon public' key"
            ]
        },
        {
            title: "Update Environment Variables",
            description: "Add your Supabase credentials to .env.local",
            code: `VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here`,
            copyText: `VITE_SUPABASE_URL=https://your-project-ref.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key-here`
        }
    ]

    return (
        <div className="max-w-4xl mx-auto p-6 space-y-6">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold text-foreground mb-2">
                    Supabase Database Setup
                </h1>
                <p className="text-muted-foreground">
                    Follow these steps to connect your site to Supabase
                </p>
            </div>

            <div className="grid gap-6">
                {setupSteps.map((step, index) => (
                    <Card key={index} className="relative">
                        <CardHeader>
                            <div className="flex items-center gap-3">
                                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                                    {index + 1}
                                </div>
                                <CardTitle className="flex items-center gap-2">
                                    {step.title}
                                    {index === 0 && <Database className="h-4 w-4" />}
                                    {index === 1 && <FileText className="h-4 w-4" />}
                                    {index === 2 && <Settings className="h-4 w-4" />}
                                    {index === 3 && <CheckCircle className="h-4 w-4" />}
                                </CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">{step.description}</p>

                            {step.steps && (
                                <ol className="list-decimal list-inside space-y-1 text-sm">
                                    {step.steps.map((substep, subIndex) => (
                                        <li key={subIndex} className="text-muted-foreground">
                                            {substep}
                                        </li>
                                    ))}
                                </ol>
                            )}

                            {step.code && (
                                <div className="relative">
                                    <pre className="bg-muted p-4 rounded-lg text-sm overflow-x-auto">
                                        <code>{step.code}</code>
                                    </pre>
                                    {step.copyText && (
                                        <Button
                                            size="sm"
                                            variant="outline"
                                            className="absolute top-2 right-2"
                                            onClick={() => copyToClipboard(step.copyText!, index)}
                                        >
                                            {copiedStep === index ? (
                                                <CheckCircle className="h-3 w-3" />
                                            ) : (
                                                <Copy className="h-3 w-3" />
                                            )}
                                        </Button>
                                    )}
                                </div>
                            )}

                            {step.link && (
                                <Button asChild>
                                    <a href={step.link} target="_blank" rel="noopener noreferrer">
                                        {step.action}
                                        <ExternalLink className="ml-2 h-3 w-3" />
                                    </a>
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            <Card className="bg-blue-50 border-blue-200">
                <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                        <div className="flex-shrink-0">
                            <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                                <CheckCircle className="w-4 h-4 text-white" />
                            </div>
                        </div>
                        <div>
                            <h3 className="font-semibold text-blue-900 mb-2">What You'll Get</h3>
                            <ul className="text-sm text-blue-800 space-y-1">
                                <li>• Project submissions stored in Supabase</li>
                                <li>• Contact form messages saved to database</li>
                                <li>• Newsletter subscriptions tracked</li>
                                <li>• Admin dashboard for managing submissions</li>
                                <li>• Real-time updates and notifications</li>
                            </ul>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <div className="text-center">
                <Badge variant="outline" className="text-muted-foreground">
                    Need help? Contact us for setup assistance
                </Badge>
            </div>
        </div>
    )
}

export default DatabaseSetupInstructions
