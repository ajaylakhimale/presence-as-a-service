import { useState } from 'react';
import { Calendar, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog';
import ScheduleCall from '@/pages/ScheduleCall';

interface ScheduleCallModalProps {
    trigger?: React.ReactNode;
    triggerText?: string;
    variant?: 'default' | 'outline' | 'ghost' | 'link';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    className?: string;
}

const ScheduleCallModal = ({
    trigger,
    triggerText = "Schedule a Call",
    variant = "outline",
    size = "default",
    className = ""
}: ScheduleCallModalProps) => {
    const [isOpen, setIsOpen] = useState(false);

    const defaultTrigger = (
        <Button variant={variant} size={size} className={className}>
            <Phone className="h-4 w-4 mr-2" />
            {triggerText}
        </Button>
    );

    return (
        <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
                {trigger || defaultTrigger}
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Schedule Your Free Consultation
                    </DialogTitle>
                </DialogHeader>
                <ScheduleCall isModal={true} onClose={() => setIsOpen(false)} />
            </DialogContent>
        </Dialog>
    );
};

export default ScheduleCallModal;
