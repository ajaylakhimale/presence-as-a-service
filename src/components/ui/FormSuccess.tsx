import React from 'react';
import { CheckCircle, Send, MessageSquare, FileText, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface FormSuccessProps {
    title: string;
    description: string;
    onReset?: () => void;
    resetButtonText?: string;
    icon?: 'success' | 'send' | 'message' | 'document' | 'star';
}

const iconMap = {
    success: CheckCircle,
    send: Send,
    message: MessageSquare,
    document: FileText,
    star: Star
};

const FormSuccess: React.FC<FormSuccessProps> = ({
    title,
    description,
    onReset,
    resetButtonText = "Submit Another",
    icon = 'success'
}) => {
    const Icon = iconMap[icon];

    return (
        <div className="text-center py-12">
            <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon className="h-8 w-8 text-primary" />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-muted-foreground mb-6">{description}</p>
            {onReset && (
                <Button
                    onClick={onReset}
                    variant="outline"
                    className="w-full sm:w-auto"
                >
                    {resetButtonText}
                </Button>
            )}
        </div>
    );
};

export default FormSuccess;
