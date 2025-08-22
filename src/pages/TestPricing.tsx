import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const TestPricing = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-white text-center mb-8">
                        Test Pricing Page
                    </h1>
                    <Card className="max-w-md mx-auto">
                        <CardHeader>
                            <CardTitle>This is a test</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p>If you can see this, the basic page structure works.</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </Layout>
    );
};

export default TestPricing;
