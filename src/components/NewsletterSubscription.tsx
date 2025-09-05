import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNewsletterForm, useFormConditionalRender } from '@/hooks/use-enhanced-forms';
import { useReCaptcha } from '@/hooks/use-recaptcha';
import ReCaptcha from '@/components/ReCaptcha';
import { Loader2, Mail, CheckCircle } from 'lucide-react';

interface NewsletterSubscriptionProps {
    title?: string;
    description?: string;
    className?: string;
    source?: string;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({
    title = "Stay Updated",
    description = "Get the latest updates on new features and web development trends.",
    className = "",
    source = "newsletter-component"
}) => {
    const [email, setEmail] = useState('');
    const { subscribeToNewsletter, isSubscribing, hasSubscribed } = useNewsletterForm();
    const { shouldShowNewsletterSignup } = useFormConditionalRender();
    const {
        recaptchaRef,
        recaptchaToken,
        isRecaptchaVerified,
        resetRecaptcha,
        handleRecaptchaChange,
        handleRecaptchaExpired,
        handleRecaptchaError
    } = useReCaptcha();
    const [message, setMessage] = useState('');

    // Don't show if already subscribed
    if (!shouldShowNewsletterSignup) {
        return (
            <div className={`p-4 bg-success/10 border border-success/20 rounded-lg ${className}`}>
                <div className="flex items-center gap-2 text-success">
                    <CheckCircle className="w-5 h-5" />
                    <span className="font-medium">You're already subscribed to our newsletter!</span>
                </div>
            </div>
        );
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setMessage('Please enter your email address.');
            return;
        }

        if (!isRecaptchaVerified) {
            setMessage('Please complete the reCAPTCHA verification.');
            return;
        }

        setMessage('');

        try {
            await subscribeToNewsletter(email, source);
            setMessage('Successfully subscribed to newsletter!');
            setEmail('');
            resetRecaptcha();
        } catch (err) {
            setMessage('Failed to subscribe. Please try again.');
            resetRecaptcha();
        }
    };

    return (
        <div className={`text-center ${className}`}>
            <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 text-foreground">{title}</h3>
                <p className="text-muted-foreground text-lg">{description}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
                <div className="flex flex-col sm:flex-row gap-3">
                    <div className="flex-1">
                        <Input
                            type="email"
                            placeholder="Enter your email address"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="bg-background border-border hover:border-primary focus:border-primary transition-colors"
                            disabled={isSubscribing}
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={isSubscribing || !isRecaptchaVerified}
                        className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2 font-semibold transition-all duration-200 hover:scale-105 disabled:opacity-50"
                    >
                        {isSubscribing ? (
                            <>
                                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                                Subscribing...
                            </>
                        ) : (
                            <>
                                <Mail className="w-4 h-4 mr-2" />
                                Subscribe
                            </>
                        )}
                    </Button>
                </div>

                {/* reCAPTCHA */}
                <div className="flex justify-center">
                    <ReCaptcha
                        ref={recaptchaRef}
                        onVerify={handleRecaptchaChange}
                        onExpired={handleRecaptchaExpired}
                        onError={handleRecaptchaError}
                        size="compact"
                        theme="light"
                    />
                </div>

                {message && (
                    <p className="text-sm font-medium text-success">
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default NewsletterSubscription;
