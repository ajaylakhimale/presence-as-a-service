import { Shield, Clock, CheckCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface GuaranteeBannerProps {
    variant?: 'hero' | 'section' | 'compact';
    className?: string;
}

const GuaranteeBanner = ({ variant = 'hero', className = '' }: GuaranteeBannerProps) => {
    if (variant === 'compact') {
        return (
            <div className={`inline-flex items-center gap-2 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-4 py-2 ${className}`}>
                <Shield className="h-4 w-4 text-green-600" />
                <span className="text-sm font-medium text-green-800">30-Day Money-Back Guarantee</span>
            </div>
        );
    }

    if (variant === 'section') {
        return (
            <div className={`bg-gradient-to-r from-green-50 via-emerald-50 to-green-50 border border-green-200 rounded-2xl p-6 md:p-8 ${className}`}>
                <div className="flex items-center justify-center gap-3 mb-4">
                    <div className="bg-green-100 p-3 rounded-full">
                        <Shield className="h-6 w-6 text-green-600" />
                    </div>
                    <Badge variant="secondary" className="bg-green-100 text-green-800 border-green-200">
                        Limited Time Offer
                    </Badge>
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-center text-green-800 mb-3">
                    100% Risk-Free Guarantee
                </h3>
                <p className="text-center text-green-700 mb-4">
                    If you're not completely satisfied with your website within 30 days,
                    we'll refund your money - no questions asked.
                </p>
                <div className="flex items-center justify-center gap-6 text-sm text-green-600">
                    <div className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4" />
                        <span>Full Refund</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>30 Days</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Shield className="h-4 w-4" />
                        <span>No Questions</span>
                    </div>
                </div>
            </div>
        );
    }

    // Hero variant
    return (
        <div className={`text-center ${className}`}>
            <div className="inline-flex items-center gap-3 bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-full px-6 py-3 mb-4">
                <Shield className="h-5 w-5 text-green-600" />
                <span className="font-semibold text-green-800">30-Day Money-Back Guarantee</span>
                <Badge variant="secondary" className="bg-green-100 text-green-700 border-green-200 text-xs">
                    Limited Time
                </Badge>
            </div>
            <p className="text-sm text-muted-foreground max-w-md mx-auto">
                Your satisfaction is guaranteed. If you're not happy with your website,
                we'll refund 100% of your money within 30 days.
            </p>
        </div>
    );
};

export default GuaranteeBanner;
