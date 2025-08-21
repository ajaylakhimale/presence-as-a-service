import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    Cookie,
    Shield,
    Settings,
    Check,
    X,
    Info
} from 'lucide-react';
import CookieManager from '@/lib/cookie-manager';

interface CookieConsentBannerProps {
    onAccept?: () => void;
    onDecline?: () => void;
}

const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({ onAccept, onDecline }) => {
    const [isVisible, setIsVisible] = useState(false);
    const [showDetails, setShowDetails] = useState(false);

    useEffect(() => {
        const consent = CookieManager.getCookieConsent();
        if (consent === null) {
            // Show banner if consent hasn't been given
            setIsVisible(true);
        }
    }, []);

    const handleAccept = () => {
        CookieManager.setCookieConsent(true);
        setIsVisible(false);
        onAccept?.();
    };

    const handleDecline = () => {
        CookieManager.setCookieConsent(false);
        CookieManager.clearAllNonEssentialCookies();
        setIsVisible(false);
        onDecline?.();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 max-w-md mx-auto md:left-auto md:right-4 md:max-w-sm">
            <Card className="shadow-lg border-2 border-primary/20 bg-background/95 backdrop-blur-sm">
                <CardContent className="p-4 space-y-4">
                    <div className="flex items-start gap-3">
                        <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0 mt-1">
                            <Cookie className="h-4 w-4 text-primary" />
                        </div>
                        <div className="space-y-2">
                            <h4 className="font-semibold text-sm">Cookie Settings</h4>
                            <p className="text-xs text-muted-foreground leading-relaxed">
                                We use essential cookies to remember your form submissions and preferences.
                                {!showDetails && (
                                    <button
                                        onClick={() => setShowDetails(true)}
                                        className="text-primary underline ml-1"
                                    >
                                        Learn more
                                    </button>
                                )}
                            </p>
                        </div>
                    </div>

                    {showDetails && (
                        <div className="space-y-3 pl-11">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Shield className="h-3 w-3 text-green-600" />
                                    <Badge variant="secondary" className="text-xs">Essential</Badge>
                                    <span className="text-xs font-medium">Always Active</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Required for form submissions, user sessions, and core functionality.
                                </p>
                            </div>

                            <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                    <Settings className="h-3 w-3 text-blue-600" />
                                    <Badge variant="outline" className="text-xs">Preferences</Badge>
                                    <span className="text-xs font-medium">Optional</span>
                                </div>
                                <p className="text-xs text-muted-foreground">
                                    Remember your theme preferences and previous visits.
                                </p>
                            </div>

                            <div className="flex items-start gap-2 p-2 bg-muted/50 rounded text-xs">
                                <Info className="h-3 w-3 text-blue-600 mt-0.5 shrink-0" />
                                <p className="text-muted-foreground">
                                    We never use tracking cookies or share your data with third parties.
                                </p>
                            </div>
                        </div>
                    )}

                    <div className="flex gap-2 pt-2">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={handleDecline}
                            className="flex-1 text-xs"
                        >
                            <X className="h-3 w-3 mr-1" />
                            Essential Only
                        </Button>
                        <Button
                            size="sm"
                            onClick={handleAccept}
                            className="flex-1 text-xs"
                        >
                            <Check className="h-3 w-3 mr-1" />
                            Accept All
                        </Button>
                    </div>

                    {showDetails && (
                        <button
                            onClick={() => setShowDetails(false)}
                            className="text-xs text-primary underline w-full text-left pl-11"
                        >
                            Show less
                        </button>
                    )}
                </CardContent>
            </Card>
        </div>
    );
};

export default CookieConsentBanner;
