import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    CheckCircle,
    XCircle,
    Clock,
    Mail,
    User,
    Calendar,
    ArrowRight,
    X,
    RefreshCw
} from 'lucide-react';
import CookieManager, { FormSubmissionData } from '@/lib/cookie-manager';
import { useNavigate } from 'react-router-dom';

interface SubmissionStatusBannerProps {
    onDismiss?: () => void;
    formType?: 'onboarding' | 'contact'; // Filter by form type
}

const SubmissionStatusBanner: React.FC<SubmissionStatusBannerProps> = ({ onDismiss, formType }) => {
    const [submission, setSubmission] = useState<FormSubmissionData | null>(null);
    const [isVisible, setIsVisible] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const submissionData = CookieManager.getFormSubmission();
        if (submissionData && (!formType || submissionData.type === formType)) {
            setSubmission(submissionData);
            setIsVisible(true);
        }
    }, [formType]);

    const handleDismiss = () => {
        setIsVisible(false);
        CookieManager.clearFormSubmission();
        onDismiss?.();
    };

    const handleSubmitAnother = () => {
        CookieManager.clearFormSubmission();
        navigate('/onboarding');
    };

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    const getFormTypeLabel = (type: string) => {
        switch (type) {
            case 'onboarding': return 'Project Brief';
            case 'contact': return 'Contact Form';
            case 'quote': return 'Quote Request';
            default: return 'Form Submission';
        }
    };

    if (!isVisible || !submission) return null;

    return (
        <div className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-md mx-4">
            <Card className={`shadow-lg border-2 ${submission.status === 'success'
                ? 'border-green-200 bg-green-50/95 backdrop-blur-sm'
                : 'border-red-200 bg-red-50/95 backdrop-blur-sm'
                }`}>
                <CardHeader className="pb-3">
                    <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-full flex items-center justify-center ${submission.status === 'success'
                                ? 'bg-green-100'
                                : 'bg-red-100'
                                }`}>
                                {submission.status === 'success' ? (
                                    <CheckCircle className="h-6 w-6 text-green-600" />
                                ) : (
                                    <XCircle className="h-6 w-6 text-red-600" />
                                )}
                            </div>
                            <div>
                                <CardTitle className={`text-lg ${submission.status === 'success'
                                    ? 'text-green-800'
                                    : 'text-red-800'
                                    }`}>
                                    {submission.status === 'success' ? 'Submission Received!' : 'Submission Issue'}
                                </CardTitle>
                                <Badge variant={submission.status === 'success' ? 'default' : 'destructive'} className="text-xs">
                                    {getFormTypeLabel(submission.type)}
                                </Badge>
                            </div>
                        </div>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={handleDismiss}
                            className="h-8 w-8 p-0"
                        >
                            <X className="h-4 w-4" />
                        </Button>
                    </div>
                </CardHeader>

                <CardContent className="pt-0 space-y-4">
                    <p className={`text-sm ${submission.status === 'success'
                        ? 'text-green-700'
                        : 'text-red-700'
                        }`}>
                        {submission.message}
                    </p>

                    {/* Submission details */}
                    <div className="space-y-2">
                        {submission.contactName && (
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <User className="h-3 w-3" />
                                <span>{submission.contactName}</span>
                            </div>
                        )}

                        {submission.contactEmail && (
                            <div className="flex items-center gap-2 text-xs text-muted-foreground">
                                <Mail className="h-3 w-3" />
                                <span>{submission.contactEmail}</span>
                            </div>
                        )}

                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                            <Calendar className="h-3 w-3" />
                            <span>Submitted {formatDate(submission.submittedAt)}</span>
                        </div>
                    </div>

                    {/* Action buttons */}
                    <div className="flex gap-2 pt-2">
                        {submission.status === 'success' ? (
                            <>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={handleSubmitAnother}
                                    className="flex-1 text-xs"
                                >
                                    <RefreshCw className="h-3 w-3 mr-1" />
                                    Submit Another
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={() => navigate('/contact')}
                                    className="flex-1 text-xs"
                                >
                                    Contact Us
                                    <ArrowRight className="h-3 w-3 ml-1" />
                                </Button>
                            </>
                        ) : (
                            <>
                                <Button
                                    size="sm"
                                    variant="outline"
                                    onClick={handleSubmitAnother}
                                    className="flex-1 text-xs"
                                >
                                    Try Again
                                </Button>
                                <Button
                                    size="sm"
                                    onClick={() => navigate('/contact')}
                                    className="flex-1 text-xs"
                                >
                                    Get Help
                                </Button>
                            </>
                        )}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SubmissionStatusBanner;
