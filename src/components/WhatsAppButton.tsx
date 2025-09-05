import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';

interface WhatsAppButtonProps {
    className?: string;
    variant?: 'floating' | 'inline';
    message?: string;
    onClick?: () => void;
}

const WhatsAppButton = ({
    className = '',
    variant = 'floating',
    message = "Hi! I'm interested in your web development services. Can we discuss my project?",
    onClick
}: WhatsAppButtonProps) => {
    // Replace with your actual WhatsApp number (include country code, remove + and spaces)
    // Example: For US +1 234 567 8900, use "12345678900"
    // Example: For India +91 98765 43210, use "919876543210"
    const phoneNumber = "919209252547"; // Updated WhatsApp number for India

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    const handleClick = () => {
        onClick?.(); // Call analytics tracking if provided
        window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    };

    if (variant === 'floating') {
        return (
            <div className={`fixed bottom-6 right-6 z-50 ${className}`}>
                <TooltipProvider delayDuration={0}>
                    <Tooltip>
                        <TooltipTrigger asChild>
                            <Button
                                onClick={handleClick}
                                className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce"
                                aria-label="Contact us on WhatsApp"
                            >
                                <MessageCircle className="h-6 w-6" />
                            </Button>
                        </TooltipTrigger>
                        <TooltipContent side="left" className="bg-gray-800 text-white border-gray-700">
                            <p>Chat with us on WhatsApp</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </div>
        );
    }

    return (
        <Button
            onClick={handleClick}
            className={`bg-green-500 hover:bg-green-600 text-white ${className}`}
            aria-label="Contact us on WhatsApp"
        >
            <MessageCircle className="h-5 w-5 mr-2" />
            WhatsApp Us
        </Button>
    );
};

export default WhatsAppButton;
