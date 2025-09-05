import { useState } from 'react'
import Layout from '@/components/layout/Layout'
import DatabaseStatus from '@/components/DatabaseStatus'
import DatabaseSetupInstructions from '@/components/DatabaseSetupInstructions'
import DirectSupabaseTest from '@/components/DirectSupabaseTest'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useProjectSubmissions, useContactSubmissions, useNewsletter } from '@/hooks/use-supabase'
import { Database, Send, Mail, CheckCircle, AlertCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

const SupabaseDebug = () => {
    const { toast } = useToast()
    const { createSubmission: createProject } = useProjectSubmissions()
    const { createSubmission: createContact } = useContactSubmissions()
    const { subscribe } = useNewsletter()

    const [testProject, setTestProject] = useState({
        name: 'Test User',
        email: 'test@example.com',
        project_type: 'Test Project',
        description: 'This is a test submission'
    })

    const [testContact, setTestContact] = useState({
        name: 'Test Contact',
        email: 'contact@example.com',
        message: 'This is a test contact message'
    })

    const [testEmail, setTestEmail] = useState('newsletter@example.com')

    const testProjectSubmission = async () => {
        try {
            await createProject({
                name: testProject.name,
                email: testProject.email,
                project_type: testProject.project_type,
                description: testProject.description,
                status: 'pending',
                priority: 'medium'
            })
            toast({
                title: "Success!",
                description: "Project submission test successful",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "Project submission test failed: " + (error as Error).message,
                variant: "destructive"
            })
        }
    }

    const testContactSubmission = async () => {
        try {
            await createContact({
                name: testContact.name,
                email: testContact.email,
                message: testContact.message,
                status: 'unread',
                priority: 'medium'
            })
            toast({
                title: "Success!",
                description: "Contact submission test successful",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "Contact submission test failed: " + (error as Error).message,
                variant: "destructive"
            })
        }
    }

    const testNewsletterSubscription = async () => {
        try {
            await subscribe(testEmail, 'debug-page')
            toast({
                title: "Success!",
                description: "Newsletter subscription test successful",
            })
        } catch (error) {
            toast({
                title: "Error",
                description: "Newsletter subscription test failed: " + (error as Error).message,
                variant: "destructive"
            })
        }
    }

    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-background via-primary/5 to-accent-brand/10 py-20">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="text-center mb-12">
                        <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center justify-center gap-3">
                            <Database className="h-8 w-8" />
                            Supabase Debug & Test
                        </h1>
                        <p className="text-xl text-muted-foreground">
                            Test your Supabase connection and database operations
                        </p>
                    </div>

                    <div className="grid gap-8">
                        {/* Connection Status */}
                        <div className="flex justify-center">
                            <DatabaseStatus />
                        </div>

                        {/* Test Forms */}
                        <div className="grid md:grid-cols-3 gap-6">
                            {/* Project Submission Test */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Send className="h-4 w-4" />
                                        Test Project Submission
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Input
                                        placeholder="Name"
                                        value={testProject.name}
                                        onChange={(e) => setTestProject({ ...testProject, name: e.target.value })}
                                    />
                                    <Input
                                        placeholder="Email"
                                        value={testProject.email}
                                        onChange={(e) => setTestProject({ ...testProject, email: e.target.value })}
                                    />
                                    <Input
                                        placeholder="Project Type"
                                        value={testProject.project_type}
                                        onChange={(e) => setTestProject({ ...testProject, project_type: e.target.value })}
                                    />
                                    <Textarea
                                        placeholder="Description"
                                        value={testProject.description}
                                        onChange={(e) => setTestProject({ ...testProject, description: e.target.value })}
                                    />
                                    <Button onClick={testProjectSubmission} className="w-full">
                                        Test Project Submission
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Contact Submission Test */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Mail className="h-4 w-4" />
                                        Test Contact Submission
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Input
                                        placeholder="Name"
                                        value={testContact.name}
                                        onChange={(e) => setTestContact({ ...testContact, name: e.target.value })}
                                    />
                                    <Input
                                        placeholder="Email"
                                        value={testContact.email}
                                        onChange={(e) => setTestContact({ ...testContact, email: e.target.value })}
                                    />
                                    <Textarea
                                        placeholder="Message"
                                        value={testContact.message}
                                        onChange={(e) => setTestContact({ ...testContact, message: e.target.value })}
                                    />
                                    <Button onClick={testContactSubmission} className="w-full">
                                        Test Contact Submission
                                    </Button>
                                </CardContent>
                            </Card>

                            {/* Newsletter Test */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <CheckCircle className="h-4 w-4" />
                                        Test Newsletter
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <Input
                                        placeholder="Email"
                                        value={testEmail}
                                        onChange={(e) => setTestEmail(e.target.value)}
                                    />
                                    <Button onClick={testNewsletterSubscription} className="w-full">
                                        Test Newsletter Subscription
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Direct RLS Testing */}
                        <DirectSupabaseTest />

                        {/* Setup Instructions */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <AlertCircle className="h-4 w-4" />
                                    Setup Instructions
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <DatabaseSetupInstructions />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default SupabaseDebug
