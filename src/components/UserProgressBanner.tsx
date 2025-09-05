import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useFormConditionalRender } from '@/hooks/use-enhanced-forms';
import { CheckCircle, Clock, ArrowRight, Mail, MessageSquare, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

interface UserProgressBannerProps {
    className?: string;
}

const UserProgressBanner: React.FC<UserProgressBannerProps> = ({ className = '' }) => {
    const {
        completedActions,
        suggestedNextActions,
        isReturningUser,
        daysSinceLastVisit,
        shouldShowWelcomeBack
    } = useFormConditionalRender();

    // Don't show if no progress made
    if (!isReturningUser && completedActions.length === 0) {
        return null;
    }

    const getActionIcon = (action: string) => {
        switch (action) {
            case 'project-submission':
                return <FileText className="w-4 h-4" />;
            case 'contact-submission':
                return <MessageSquare className="w-4 h-4" />;
            case 'newsletter-subscription':
                return <Mail className="w-4 h-4" />;
            default:
                return <CheckCircle className="w-4 h-4" />;
        }
    };

    const getActionLabel = (action: string) => {
        switch (action) {
            case 'project-submission':
                return 'Project Submitted';
            case 'contact-submission':
                return 'Contact Message Sent';
            case 'newsletter-subscription':
                return 'Newsletter Subscribed';
            case 'submit-project':
                return 'Submit Your Project';
            case 'contact-us':
                return 'Contact Us';
            case 'subscribe-newsletter':
                return 'Subscribe to Newsletter';
            default:
                return action;
        }
    };

    const getActionLink = (action: string) => {
        switch (action) {
            case 'submit-project':
                return '/modern-onboarding';
            case 'contact-us':
                return '/contact';
            case 'subscribe-newsletter':
                return '/#newsletter';
            default:
                return '#';
        }
    };

    return (
        <Card className={`border-primary/20 bg-gradient-to-r from-primary/5 to-accent-brand/5 ${className}`}>
            <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                        {shouldShowWelcomeBack ? (
                            <>
                                <Clock className="w-5 h-5 text-primary" />
                                Welcome Back!
                            </>
                        ) : (
                            <>
                                <CheckCircle className="w-5 h-5 text-success" />
                                Your Progress
                            </>
                        )}
                    </CardTitle>
                    {isReturningUser && (
                        <Badge variant="secondary" className="text-xs">
                            {daysSinceLastVisit === 0
                                ? 'Today'
                                : daysSinceLastVisit === 1
                                    ? 'Yesterday'
                                    : `${daysSinceLastVisit} days ago`
                            }
                        </Badge>
                    )}
                </div>
            </CardHeader>

            <CardContent className="space-y-4">
                {/* Completed Actions */}
                {completedActions.length > 0 && (
                    <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">Completed</h4>
                        <div className="flex flex-wrap gap-2">
                            {completedActions.map((action) => (
                                <Badge key={action} variant="secondary" className="flex items-center gap-1 text-success">
                                    {getActionIcon(action)}
                                    {getActionLabel(action)}
                                </Badge>
                            ))}
                        </div>
                    </div>
                )}

                {/* Suggested Next Actions */}
                {suggestedNextActions.length > 0 && (
                    <div>
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                            {completedActions.length > 0 ? 'Next Steps' : 'Get Started'}
                        </h4>
                        <div className="flex flex-wrap gap-2">
                            {suggestedNextActions.slice(0, 2).map((action) => (
                                <Button
                                    key={action}
                                    asChild
                                    variant="outline"
                                    size="sm"
                                    className="h-8 text-xs"
                                >
                                    <Link to={getActionLink(action)} className="flex items-center gap-1">
                                        {getActionIcon(action)}
                                        {getActionLabel(action)}
                                        <ArrowRight className="w-3 h-3" />
                                    </Link>
                                </Button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Welcome back message */}
                {shouldShowWelcomeBack && completedActions.length > 0 && (
                    <p className="text-sm text-muted-foreground">
                        Thanks for coming back! {suggestedNextActions.length > 0
                            ? "Here's what you can do next:"
                            : "You're all caught up!"
                        }
                    </p>
                )}
            </CardContent>
        </Card>
    );
};

export default UserProgressBanner;
