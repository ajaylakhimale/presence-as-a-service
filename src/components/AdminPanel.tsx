import React, { useState, useEffect } from 'react';
import {
    Settings,
    Eye,
    Edit,
    Save,
    X,
    RefreshCw,
    Download,
    Upload,
    AlertTriangle,
    CheckCircle,
    Info
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
    calculatePrice,
    formatPrice,
    validatePricingConfig,
    pricingConfig
} from '@/lib/pricing-engine';
import {
    PricingConfig,
    CalculationInput,
    ValidationResult,
    TierType
} from '@/config/pricing-types';

interface AdminPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

const AdminPanel: React.FC<AdminPanelProps> = ({ isOpen, onClose }) => {
    const [config, setConfig] = useState<PricingConfig>(pricingConfig);
    const [validation, setValidation] = useState<ValidationResult | null>(null);
    const [previewInput, setPreviewInput] = useState<CalculationInput>({
        typeId: 'business_website',
        tier: 'professional',
        billingCycle: 'monthly',
        region: 'INR',
        discounts: []
    });
    const [previewResult, setPreviewResult] = useState<any>(null);
    const [isDirty, setIsDirty] = useState(false);
    const [activeTab, setActiveTab] = useState('preview');

    // Validate config whenever it changes
    useEffect(() => {
        const result = validatePricingConfig();
        setValidation(result);
    }, [config]);

    // Calculate preview whenever input changes
    useEffect(() => {
        try {
            const result = calculatePrice(previewInput);
            setPreviewResult(result);
        } catch (error) {
            console.error('Preview calculation error:', error);
            setPreviewResult(null);
        }
    }, [previewInput, config]);

    const handleConfigChange = (path: string, value: any) => {
        setIsDirty(true);
        // Deep clone and update config
        const newConfig = JSON.parse(JSON.stringify(config));
        const keys = path.split('.');
        let current = newConfig;

        for (let i = 0; i < keys.length - 1; i++) {
            current = current[keys[i]];
        }
        current[keys[keys.length - 1]] = value;

        setConfig(newConfig);
    };

    const handleSave = () => {
        // In a real app, this would save to backend
        console.log('Saving config:', config);
        setIsDirty(false);
        // You could also trigger a config reload here
    };

    const handleReset = () => {
        setConfig(pricingConfig);
        setIsDirty(false);
    };

    const handleExportConfig = () => {
        const dataStr = JSON.stringify(config, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);

        const exportFileDefaultName = 'pricing-config.json';

        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    };

    const handleImportConfig = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                try {
                    const importedConfig = JSON.parse(e.target?.result as string);
                    setConfig(importedConfig);
                    setIsDirty(true);
                } catch (error) {
                    console.error('Error importing config:', error);
                }
            };
            reader.readAsText(file);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <Card className="w-full max-w-6xl max-h-[90vh] overflow-hidden glassmorphism border-white/10">
                <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-white flex items-center gap-2">
                        <Settings className="h-5 w-5" />
                        Pricing Admin Panel
                        {isDirty && <Badge variant="destructive">Unsaved Changes</Badge>}
                    </CardTitle>
                    <div className="flex items-center gap-2">
                        {validation && (
                            <Badge
                                variant={validation.isValid ? "default" : "destructive"}
                                className={validation.isValid ? "bg-green-500/20 text-green-300" : ""}
                            >
                                {validation.isValid ? (
                                    <CheckCircle className="w-3 h-3 mr-1" />
                                ) : (
                                    <AlertTriangle className="w-3 h-3 mr-1" />
                                )}
                                {validation.isValid ? 'Valid' : 'Invalid'}
                            </Badge>
                        )}
                        <Button variant="ghost" size="sm" onClick={onClose}>
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>

                <CardContent className="p-0">
                    <Tabs value={activeTab} onValueChange={setActiveTab} className="h-full">
                        <div className="px-6">
                            <TabsList className="bg-white/5">
                                <TabsTrigger value="preview">Live Preview</TabsTrigger>
                                <TabsTrigger value="global">Global Settings</TabsTrigger>
                                <TabsTrigger value="types">Website Types</TabsTrigger>
                                <TabsTrigger value="addons">Global Add-ons</TabsTrigger>
                                <TabsTrigger value="validation">Validation</TabsTrigger>
                            </TabsList>
                        </div>

                        <div className="overflow-y-auto max-h-[calc(90vh-8rem)] px-6 pb-6">
                            <TabsContent value="preview" className="space-y-6">
                                <div className="grid lg:grid-cols-2 gap-6">
                                    {/* Preview Controls */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-4">Preview Configuration</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <Label className="text-gray-300">Website Type</Label>
                                                <select
                                                    className="w-full mt-1 p-2 bg-white/5 border border-white/10 rounded text-white"
                                                    value={previewInput.typeId}
                                                    onChange={(e) => setPreviewInput(prev => ({ ...prev, typeId: e.target.value }))}
                                                >
                                                    {config.types.map(type => (
                                                        <option key={type.id} value={type.id} className="bg-slate-800">
                                                            {type.label}
                                                        </option>
                                                    ))}
                                                </select>
                                            </div>

                                            <div>
                                                <Label className="text-gray-300">Tier</Label>
                                                <select
                                                    className="w-full mt-1 p-2 bg-white/5 border border-white/10 rounded text-white"
                                                    value={previewInput.tier}
                                                    onChange={(e) => setPreviewInput(prev => ({ ...prev, tier: e.target.value as TierType }))}
                                                >
                                                    <option value="essential" className="bg-slate-800">Essential</option>
                                                    <option value="professional" className="bg-slate-800">Professional</option>
                                                    <option value="ultimate" className="bg-slate-800">Ultimate</option>
                                                </select>
                                            </div>

                                            <div>
                                                <Label className="text-gray-300">Billing Cycle</Label>
                                                <select
                                                    className="w-full mt-1 p-2 bg-white/5 border border-white/10 rounded text-white"
                                                    value={previewInput.billingCycle}
                                                    onChange={(e) => setPreviewInput(prev => ({ ...prev, billingCycle: e.target.value as any }))}
                                                >
                                                    <option value="monthly" className="bg-slate-800">Monthly</option>
                                                    <option value="annual" className="bg-slate-800">Annual</option>
                                                </select>
                                            </div>

                                            <div>
                                                <Label className="text-gray-300">Currency</Label>
                                                <select
                                                    className="w-full mt-1 p-2 bg-white/5 border border-white/10 rounded text-white"
                                                    value={previewInput.region}
                                                    onChange={(e) => setPreviewInput(prev => ({ ...prev, region: e.target.value as any }))}
                                                >
                                                    <option value="INR" className="bg-slate-800">INR (₹)</option>
                                                    <option value="USD" className="bg-slate-800">USD ($)</option>
                                                    <option value="EUR" className="bg-slate-800">EUR (€)</option>
                                                    <option value="GBP" className="bg-slate-800">GBP (£)</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Preview Results */}
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-4">Live Calculation</h3>
                                        {previewResult ? (
                                            <div className="space-y-4">
                                                <div className="p-4 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                                                    <div className="text-2xl font-bold text-blue-400">
                                                        {formatPrice(
                                                            previewInput.billingCycle === 'annual'
                                                                ? previewResult.effective_monthly_annual
                                                                : previewResult.monthly,
                                                            previewInput.region || 'INR'
                                                        )}
                                                        <span className="text-sm">/month</span>
                                                    </div>
                                                    <div className="text-gray-400 text-sm">
                                                        Setup: {formatPrice(previewResult.setup_cost, previewInput.region || 'INR')}
                                                    </div>
                                                </div>

                                                <div className="space-y-2">
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-300">Base Price:</span>
                                                        <span className="text-white">{formatPrice(previewResult.breakdown.base_monthly, previewInput.region || 'INR')}</span>
                                                    </div>
                                                    {previewResult.breakdown.scale_additions > 0 && (
                                                        <div className="flex justify-between">
                                                            <span className="text-gray-300">Scale Additions:</span>
                                                            <span className="text-white">+{formatPrice(previewResult.breakdown.scale_additions, previewInput.region || 'INR')}</span>
                                                        </div>
                                                    )}
                                                    {previewResult.breakdown.discount_amount > 0 && (
                                                        <div className="flex justify-between">
                                                            <span className="text-green-300">Discount ({previewResult.breakdown.discount_percent}%):</span>
                                                            <span className="text-green-300">-{formatPrice(previewResult.breakdown.discount_amount, previewInput.region || 'INR')}</span>
                                                        </div>
                                                    )}
                                                    <div className="flex justify-between">
                                                        <span className="text-gray-300">Delivery:</span>
                                                        <span className="text-blue-400">{previewResult.delivery_days} days</span>
                                                    </div>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                                                <div className="text-red-400">Error calculating preview</div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="global" className="space-y-6">
                                <div className="grid lg:grid-cols-2 gap-6">
                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-4">Currency Settings</h3>
                                        <div className="space-y-4">
                                            <div>
                                                <Label className="text-gray-300">Base Currency</Label>
                                                <Input
                                                    value={config.currency}
                                                    onChange={(e) => handleConfigChange('currency', e.target.value)}
                                                    className="bg-white/5 border-white/10 text-white"
                                                />
                                            </div>

                                            <div>
                                                <Label className="text-gray-300">Exchange Rates</Label>
                                                {Object.entries(config.fx).map(([currency, rate]) => (
                                                    <div key={currency} className="flex items-center gap-2 mt-2">
                                                        <span className="text-gray-400 w-12">{currency}:</span>
                                                        <Input
                                                            type="number"
                                                            step="0.001"
                                                            value={rate}
                                                            onChange={(e) => handleConfigChange(`fx.${currency}`, parseFloat(e.target.value))}
                                                            className="bg-white/5 border-white/10 text-white"
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    <div>
                                        <h3 className="text-lg font-semibold text-white mb-4">Discount Settings</h3>
                                        <div className="space-y-4">
                                            <div className="grid grid-cols-2 gap-4">
                                                <div>
                                                    <Label className="text-gray-300">Annual Discount (%)</Label>
                                                    <Input
                                                        type="number"
                                                        value={config.discounts.annual_percent}
                                                        onChange={(e) => handleConfigChange('discounts.annual_percent', parseInt(e.target.value))}
                                                        className="bg-white/5 border-white/10 text-white"
                                                    />
                                                </div>
                                                <div>
                                                    <Label className="text-gray-300">Non-profit Discount (%)</Label>
                                                    <Input
                                                        type="number"
                                                        value={config.discounts.nonprofit_percent}
                                                        onChange={(e) => handleConfigChange('discounts.nonprofit_percent', parseInt(e.target.value))}
                                                        className="bg-white/5 border-white/10 text-white"
                                                    />
                                                </div>
                                                <div>
                                                    <Label className="text-gray-300">Education Discount (%)</Label>
                                                    <Input
                                                        type="number"
                                                        value={config.discounts.education_percent}
                                                        onChange={(e) => handleConfigChange('discounts.education_percent', parseInt(e.target.value))}
                                                        className="bg-white/5 border-white/10 text-white"
                                                    />
                                                </div>
                                                <div>
                                                    <Label className="text-gray-300">Startup Discount (%)</Label>
                                                    <Input
                                                        type="number"
                                                        value={config.discounts.startup_percent}
                                                        onChange={(e) => handleConfigChange('discounts.startup_percent', parseInt(e.target.value))}
                                                        className="bg-white/5 border-white/10 text-white"
                                                    />
                                                </div>
                                            </div>

                                            <div className="p-4 bg-white/5 rounded-lg">
                                                <div className="flex items-center justify-between mb-2">
                                                    <Label className="text-gray-300">Launch Promo Active</Label>
                                                    <Switch
                                                        checked={config.discounts.launch.active}
                                                        onCheckedChange={(checked) => handleConfigChange('discounts.launch.active', checked)}
                                                    />
                                                </div>
                                                <div className="grid grid-cols-2 gap-4">
                                                    <div>
                                                        <Label className="text-gray-300">Discount (%)</Label>
                                                        <Input
                                                            type="number"
                                                            value={config.discounts.launch.percent}
                                                            onChange={(e) => handleConfigChange('discounts.launch.percent', parseInt(e.target.value))}
                                                            className="bg-white/5 border-white/10 text-white"
                                                        />
                                                    </div>
                                                    <div>
                                                        <Label className="text-gray-300">Valid Until</Label>
                                                        <Input
                                                            type="date"
                                                            value={config.discounts.launch.until}
                                                            onChange={(e) => handleConfigChange('discounts.launch.until', e.target.value)}
                                                            className="bg-white/5 border-white/10 text-white"
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </TabsContent>

                            <TabsContent value="validation" className="space-y-4">
                                <h3 className="text-lg font-semibold text-white mb-4">Configuration Validation</h3>

                                {validation && (
                                    <div className="space-y-4">
                                        {validation.isValid ? (
                                            <Alert className="border-green-500/20 bg-green-500/10">
                                                <CheckCircle className="h-4 w-4 text-green-400" />
                                                <AlertDescription className="text-green-300">
                                                    Configuration is valid and ready to use.
                                                </AlertDescription>
                                            </Alert>
                                        ) : (
                                            <Alert className="border-red-500/20 bg-red-500/10">
                                                <AlertTriangle className="h-4 w-4 text-red-400" />
                                                <AlertDescription className="text-red-300">
                                                    Configuration has validation errors.
                                                </AlertDescription>
                                            </Alert>
                                        )}

                                        {validation.errors.length > 0 && (
                                            <div>
                                                <h4 className="font-semibold text-red-400 mb-2">Errors:</h4>
                                                <ul className="space-y-1">
                                                    {validation.errors.map((error, index) => (
                                                        <li key={index} className="text-red-300 text-sm">• {error}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}

                                        {validation.warnings.length > 0 && (
                                            <div>
                                                <h4 className="font-semibold text-yellow-400 mb-2">Warnings:</h4>
                                                <ul className="space-y-1">
                                                    {validation.warnings.map((warning, index) => (
                                                        <li key={index} className="text-yellow-300 text-sm">• {warning}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>
                                )}
                            </TabsContent>
                        </div>
                    </Tabs>

                    {/* Footer Actions */}
                    <div className="border-t border-white/10 p-6 flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            <Button variant="outline" size="sm" onClick={handleExportConfig}>
                                <Download className="h-4 w-4 mr-2" />
                                Export Config
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                                <label htmlFor="config-import">
                                    <Upload className="h-4 w-4 mr-2" />
                                    Import Config
                                </label>
                            </Button>
                            <input
                                id="config-import"
                                type="file"
                                accept=".json"
                                onChange={handleImportConfig}
                                className="hidden"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <Button variant="outline" onClick={handleReset} disabled={!isDirty}>
                                <RefreshCw className="h-4 w-4 mr-2" />
                                Reset
                            </Button>
                            <Button onClick={handleSave} disabled={!isDirty || !validation?.isValid}>
                                <Save className="h-4 w-4 mr-2" />
                                Save Changes
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default AdminPanel;
