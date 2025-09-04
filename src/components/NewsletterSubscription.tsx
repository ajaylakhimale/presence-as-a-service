import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { subscribeToNewsletter } from '@/lib/newsletter';
import { Loader2, Mail } from 'lucide-react';

interface NewsletterSubscriptionProps {
    title?: string;
    description?: string;
    className?: string;
}

const NewsletterSubscription: React.FC<NewsletterSubscriptionProps> = ({
    title = "Stay Updated",
    description = "Get the latest updates on new features and web development trends.",
    className = ""
}) => {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!email.trim()) {
            setMessage('Please enter your email address.');
            setIsSuccess(false);
            return;
        }

        setIsLoading(true);
        setMessage('');

        const result = await subscribeToNewsletter(email);

        setMessage(result.message);
        setIsSuccess(result.success);

        if (result.success) {
            setEmail('');
        }

        setIsLoading(false);
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
                            disabled={isLoading}
                        />
                    </div>
                    <Button
                        type="submit"
                        disabled={isLoading}
                        className="bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-2 font-semibold transition-all duration-200 hover:scale-105"
                    >
                        {isLoading ? (
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

                {message && (
                    <p className={`text-sm font-medium ${isSuccess ? 'text-success' : 'text-destructive'}`}>
                        {message}
                    </p>
                )}
            </form>
        </div>
    );
};

export default NewsletterSubscription;
