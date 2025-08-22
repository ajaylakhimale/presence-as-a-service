import React from 'react';
import Layout from '@/components/layout/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Test imports
let importError = null;
let pricingConfig = null;
let websiteTypes = null;

try {
    const configModule = require('@/config/pricing-config.json');
    pricingConfig = configModule;
} catch (error) {
    importError = `Pricing config error: ${error.message}`;
}

try {
    const typesModule = require('@/config/website-types');
    websiteTypes = typesModule.WEBSITE_TYPES;
} catch (error) {
    importError = importError || `Website types error: ${error.message}`;
}

const DebugPricing = () => {
    return (
        <Layout>
            <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 p-8">
                <div className="container mx-auto">
                    <h1 className="text-4xl font-bold text-white text-center mb-8">
                        Debug Pricing Page
                    </h1>
                    <div className="space-y-4 max-w-2xl mx-auto">
                        <Card>
                            <CardHeader>
                                <CardTitle>Import Status</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {importError ? (
                                    <p className="text-red-500">{importError}</p>
                                ) : (
                                    <p className="text-green-500">All imports successful</p>
                                )}
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Pricing Config</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <pre className="text-sm overflow-auto">
                                    {pricingConfig ?
                                        JSON.stringify(Object.keys(pricingConfig), null, 2) :
                                        'Not loaded'
                                    }
                                </pre>
                            </CardContent>
                        </Card>

                        <Card>
                            <CardHeader>
                                <CardTitle>Website Types</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p>Website types count: {websiteTypes ? websiteTypes.length : 0}</p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </Layout>
    );
};

export default DebugPricing;
