import { Link } from 'react-router-dom';
import { Calendar, ArrowRight, Clock, User, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface ScheduleCallCTAProps {
    title?: string;
    description?: string;
    showFeatures?: boolean;
    compact?: boolean;
    className?: string;
}

const ScheduleCallCTA = ({
    title = "Ready to Start Your Project?",
    description = "Schedule a free consultation to discuss your needs and get a detailed proposal.",
    showFeatures = true,
    compact = false,
    className = ""
}: ScheduleCallCTAProps) => {
    const features = [
        { icon: Clock, text: "30-45 min consultation" },
        { icon: User, text: "Expert development team" },
        { icon: CheckCircle, text: "Free project proposal" }
    ];

    if (compact) {
        return (
            <div className={`text-center space-y-4 ${className}`}>
                <h3 className="text-title-3 font-bold">{title}</h3>
                <p className="text-body text-muted-foreground">{description}</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/schedule-call">
                        <Button className="btn-primary">
                            <Calendar className="h-4 w-4 mr-2" />
                            Schedule Free Call
                        </Button>
                    </Link>
                    <Link to="/onboarding">
                        <Button variant="outline">
                            Get Started Now
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <Card className={`card-elevated ${className}`}>
            <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="h-8 w-8 text-primary-foreground" />
                </div>

                <h3 className="text-title-2 font-bold mb-4">{title}</h3>
                <p className="text-body text-muted-foreground mb-6 max-w-2xl mx-auto">
                    {description}
                </p>

                {showFeatures && (
                    <div className="grid md:grid-cols-3 gap-4 mb-8">
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <div key={index} className="flex flex-col items-center text-center">
                                    <Icon className="h-6 w-6 text-primary mb-2" />
                                    <span className="text-sm font-medium">{feature.text}</span>
                                </div>
                            );
                        })}
                    </div>
                )}

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/schedule-call">
                        <Button className="btn-primary text-lg px-8 py-4">
                            <Calendar className="h-5 w-5 mr-2" />
                            Schedule Free Consultation
                        </Button>
                    </Link>
                    <Link to="/onboarding">
                        <Button variant="outline" className="text-lg px-8 py-4">
                            Start Project Now
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    );
};

export default ScheduleCallCTA;
