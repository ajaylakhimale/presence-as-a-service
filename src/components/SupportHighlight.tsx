import { HeadphonesIcon, Clock, Zap, Gift } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

interface SupportHighlightProps {
    variant?: 'hero' | 'card' | 'inline';
    className?: string;
}

const SupportHighlight = ({ variant = 'hero', className = '' }: SupportHighlightProps) => {
    if (variant === 'inline') {
        return (
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-4 py-2 ${className}`}>
                <Gift className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium text-blue-800">FREE 15-Day Support Included</span>
            </div>
        );
    }

    if (variant === 'card') {
        return (
            <Card className={`bg-gradient-to-br from-blue-50 via-indigo-50 to-blue-50 border-blue-200 ${className}`}>
                <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                        <div className="bg-blue-100 p-3 rounded-full">
                            <HeadphonesIcon className="h-6 w-6 text-blue-600" />
                        </div>
                        <Badge variant="secondary" className="bg-blue-100 text-blue-800 border-blue-200">
                            FREE Value: $500+
                        </Badge>
                    </div>
                    <h3 className="text-xl font-bold text-blue-800 mb-3">
                        15 Days FREE Post-Launch Support
                    </h3>
                    <p className="text-blue-700 mb-4">
                        We don't just launch and leave. Get 15 days of free support including
                        bug fixes, content updates, and technical assistance.
                    </p>
                    <div className="grid grid-cols-2 gap-4 text-sm text-blue-600">
                        <div className="flex items-center gap-2">
                            <Zap className="h-4 w-4" />
                            <span>Bug Fixes</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-4 w-4" />
                            <span>Content Updates</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HeadphonesIcon className="h-4 w-4" />
                            <span>Technical Help</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Gift className="h-4 w-4" />
                            <span>Training Session</span>
                        </div>
                    </div>
                </CardContent>
            </Card>
        );
    }

    // Hero variant
    return (
        <div className={`text-center ${className}`}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-full px-6 py-3 mb-4">
                <HeadphonesIcon className="h-5 w-5 text-blue-600" />
                <span className="font-semibold text-blue-800">FREE 15-Day Support</span>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700 border-blue-200 text-xs">
                    $500+ Value
                </Badge>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Includes bug fixes, content updates, technical assistance, and a training session
                to help you manage your new website.
            </p>
        </div>
    );
};

export default SupportHighlight;
