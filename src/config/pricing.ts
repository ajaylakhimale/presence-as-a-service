import { LucideIcon } from 'lucide-react';
import {
    Globe,
    Smartphone,
    Monitor,
    Database,
    Lock,
    CreditCard,
    Mail,
    Search,
    BarChart,
    Palette,
    Code,
    FileText,
    Settings,
    Users,
    MessageCircle,
    ShoppingCart,
    Calendar,
    Bell,
    Zap,
    Shield,
    Cloud,
    Headphones,
    Truck,
    Star,
    Layout,
    Image,
    Video,
    Map,
    Filter,
    Share2,
    Download,
    Upload,
    Edit,
    Eye,
    Heart,
    ThumbsUp,
    Tag,
    Clock,
    Target,
    TrendingUp
} from 'lucide-react';

export interface PricingFeature {
    id: string;
    name: string;
    description: string;
    price: number;
    category: PricingCategory;
    icon: LucideIcon;
    platforms: Platform[];
    complexity: 'basic' | 'intermediate' | 'advanced' | 'expert';
    estimatedHours: number;
    dependencies?: string[]; // IDs of required features
    popular?: boolean;
}

export interface PricingCategory {
    id: string;
    name: string;
    description: string;
    icon: LucideIcon;
    color: string;
}

export type Platform = 'web' | 'mobile' | 'desktop';

export const PRICING_CATEGORIES: PricingCategory[] = [
    {
        id: 'core',
        name: 'Core Foundation',
        description: 'Essential building blocks for your application',
        icon: Layout,
        color: 'bg-blue-500'
    },
    {
        id: 'ui-design',
        name: 'UI/UX Design',
        description: 'Visual design and user experience features',
        icon: Palette,
        color: 'bg-purple-500'
    },
    {
        id: 'functionality',
        name: 'Core Functionality',
        description: 'Business logic and core features',
        icon: Settings,
        color: 'bg-green-500'
    },
    {
        id: 'authentication',
        name: 'Authentication & Security',
        description: 'User management and security features',
        icon: Lock,
        color: 'bg-red-500'
    },
    {
        id: 'payments',
        name: 'Payments & E-commerce',
        description: 'Payment processing and e-commerce features',
        icon: CreditCard,
        color: 'bg-yellow-500'
    },
    {
        id: 'communication',
        name: 'Communication',
        description: 'Messaging, notifications, and communication features',
        icon: MessageCircle,
        color: 'bg-indigo-500'
    },
    {
        id: 'analytics',
        name: 'Analytics & Reporting',
        description: 'Data tracking, analytics, and reporting features',
        icon: BarChart,
        color: 'bg-teal-500'
    },
    {
        id: 'integrations',
        name: 'Third-party Integrations',
        description: 'External service integrations and APIs',
        icon: Zap,
        color: 'bg-orange-500'
    },
    {
        id: 'advanced',
        name: 'Advanced Features',
        description: 'Complex and specialized functionality',
        icon: Star,
        color: 'bg-pink-500'
    }
];

export const PRICING_FEATURES: PricingFeature[] = [
    // Core Foundation
    {
        id: 'responsive-design',
        name: 'Responsive Design',
        description: 'Mobile, tablet, and desktop optimized layout',
        price: 299,
        category: PRICING_CATEGORIES[0], // core
        icon: Globe,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'basic',
        estimatedHours: 8,
        popular: true
    },
    {
        id: 'custom-domain',
        name: 'Custom Domain Setup',
        description: 'Connect your custom domain with SSL certificate',
        price: 99,
        category: PRICING_CATEGORIES[0],
        icon: Globe,
        platforms: ['web'],
        complexity: 'basic',
        estimatedHours: 2
    },
    {
        id: 'hosting-setup',
        name: 'Professional Hosting Setup',
        description: 'Fast, secure cloud hosting configuration',
        price: 199,
        category: PRICING_CATEGORIES[0],
        icon: Cloud,
        platforms: ['web'],
        complexity: 'basic',
        estimatedHours: 4
    },
    {
        id: 'database-design',
        name: 'Database Design & Setup',
        description: 'Custom database schema and optimization',
        price: 499,
        category: PRICING_CATEGORIES[0],
        icon: Database,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'intermediate',
        estimatedHours: 12
    },

    // UI/UX Design
    {
        id: 'custom-branding',
        name: 'Custom Branding & Logo Integration',
        description: 'Brand identity integration and custom styling',
        price: 399,
        category: PRICING_CATEGORIES[1], // ui-design
        icon: Palette,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'intermediate',
        estimatedHours: 10,
        popular: true
    },
    {
        id: 'dark-mode',
        name: 'Dark/Light Mode Toggle',
        description: 'Theme switching with user preference storage',
        price: 249,
        category: PRICING_CATEGORIES[1],
        icon: Eye,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'basic',
        estimatedHours: 6
    },
    {
        id: 'animations',
        name: 'Custom Animations & Transitions',
        description: 'Smooth micro-interactions and page transitions',
        price: 349,
        category: PRICING_CATEGORIES[1],
        icon: Zap,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'intermediate',
        estimatedHours: 8
    },
    {
        id: 'image-gallery',
        name: 'Image Gallery & Lightbox',
        description: 'Interactive image galleries with zoom and navigation',
        price: 299,
        category: PRICING_CATEGORIES[1],
        icon: Image,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'basic',
        estimatedHours: 7
    },
    {
        id: 'video-integration',
        name: 'Video Integration & Player',
        description: 'Custom video player with controls and streaming',
        price: 449,
        category: PRICING_CATEGORIES[1],
        icon: Video,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'intermediate',
        estimatedHours: 10
    },

    // Core Functionality
    {
        id: 'contact-form',
        name: 'Contact Form',
        description: 'Secure contact form with email notifications',
        price: 199,
        category: PRICING_CATEGORIES[2], // functionality
        icon: Mail,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'basic',
        estimatedHours: 4,
        popular: true
    },
    {
        id: 'search-functionality',
        name: 'Search Functionality',
        description: 'Full-text search with filters and autocomplete',
        price: 599,
        category: PRICING_CATEGORIES[2],
        icon: Search,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'intermediate',
        estimatedHours: 15
    },
    {
        id: 'content-management',
        name: 'Content Management System',
        description: 'Easy-to-use admin panel for content updates',
        price: 899,
        category: PRICING_CATEGORIES[2],
        icon: FileText,
        platforms: ['web'],
        complexity: 'advanced',
        estimatedHours: 20,
        dependencies: ['database-design']
    },
    {
        id: 'file-upload',
        name: 'File Upload & Management',
        description: 'Secure file upload with preview and management',
        price: 399,
        category: PRICING_CATEGORIES[2],
        icon: Upload,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'intermediate',
        estimatedHours: 10
    },
    {
        id: 'blog-system',
        name: 'Blog System',
        description: 'Full-featured blog with categories and comments',
        price: 699,
        category: PRICING_CATEGORIES[2],
        icon: FileText,
        platforms: ['web'],
        complexity: 'advanced',
        estimatedHours: 16,
        dependencies: ['content-management', 'database-design']
    },
    {
        id: 'booking-system',
        name: 'Appointment/Booking System',
        description: 'Calendar-based booking with email confirmations',
        price: 999,
        category: PRICING_CATEGORIES[2],
        icon: Calendar,
        platforms: ['web', 'mobile'],
        complexity: 'advanced',
        estimatedHours: 24,
        dependencies: ['database-design']
    },

    // Authentication & Security
    {
        id: 'user-registration',
        name: 'User Registration & Login',
        description: 'Secure user account system with email verification',
        price: 599,
        category: PRICING_CATEGORIES[3], // authentication
        icon: Users,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'intermediate',
        estimatedHours: 14,
        dependencies: ['database-design'],
        popular: true
    },
    {
        id: 'social-login',
        name: 'Social Media Login',
        description: 'Login with Google, Facebook, Twitter, LinkedIn',
        price: 399,
        category: PRICING_CATEGORIES[3],
        icon: Share2,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'intermediate',
        estimatedHours: 8,
        dependencies: ['user-registration']
    },
    {
        id: 'role-permissions',
        name: 'Role-Based Permissions',
        description: 'Admin, user, and custom role management system',
        price: 799,
        category: PRICING_CATEGORIES[3],
        icon: Shield,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'advanced',
        estimatedHours: 18,
        dependencies: ['user-registration']
    },
    {
        id: 'two-factor-auth',
        name: 'Two-Factor Authentication',
        description: 'SMS and app-based 2FA for enhanced security',
        price: 499,
        category: PRICING_CATEGORIES[3],
        icon: Lock,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'advanced',
        estimatedHours: 12,
        dependencies: ['user-registration']
    },

    // Payments & E-commerce
    {
        id: 'payment-gateway',
        name: 'Payment Gateway Integration',
        description: 'Stripe, PayPal, and other payment processors',
        price: 699,
        category: PRICING_CATEGORIES[4], // payments
        icon: CreditCard,
        platforms: ['web', 'mobile'],
        complexity: 'advanced',
        estimatedHours: 16,
        popular: true
    },
    {
        id: 'shopping-cart',
        name: 'Shopping Cart System',
        description: 'Full e-commerce cart with checkout flow',
        price: 899,
        category: PRICING_CATEGORIES[4],
        icon: ShoppingCart,
        platforms: ['web', 'mobile'],
        complexity: 'advanced',
        estimatedHours: 20,
        dependencies: ['payment-gateway', 'database-design']
    },
    {
        id: 'inventory-management',
        name: 'Inventory Management',
        description: 'Product inventory tracking and management',
        price: 799,
        category: PRICING_CATEGORIES[4],
        icon: Tag,
        platforms: ['web'],
        complexity: 'advanced',
        estimatedHours: 18,
        dependencies: ['database-design']
    },
    {
        id: 'subscription-billing',
        name: 'Subscription & Recurring Billing',
        description: 'Automated subscription management and billing',
        price: 1199,
        category: PRICING_CATEGORIES[4],
        icon: Clock,
        platforms: ['web', 'mobile'],
        complexity: 'expert',
        estimatedHours: 28,
        dependencies: ['payment-gateway', 'user-registration']
    },

    // Communication
    {
        id: 'email-notifications',
        name: 'Email Notification System',
        description: 'Automated email notifications and templates',
        price: 399,
        category: PRICING_CATEGORIES[5], // communication
        icon: Mail,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'intermediate',
        estimatedHours: 8
    },
    {
        id: 'push-notifications',
        name: 'Push Notifications',
        description: 'Real-time push notifications for mobile and web',
        price: 599,
        category: PRICING_CATEGORIES[5],
        icon: Bell,
        platforms: ['web', 'mobile'],
        complexity: 'advanced',
        estimatedHours: 14
    },
    {
        id: 'live-chat',
        name: 'Live Chat Support',
        description: 'Real-time chat system with admin dashboard',
        price: 899,
        category: PRICING_CATEGORIES[5],
        icon: MessageCircle,
        platforms: ['web', 'mobile'],
        complexity: 'advanced',
        estimatedHours: 20,
        dependencies: ['database-design']
    },
    {
        id: 'newsletter',
        name: 'Newsletter Subscription',
        description: 'Email newsletter signup and management',
        price: 299,
        category: PRICING_CATEGORIES[5],
        icon: Mail,
        platforms: ['web'],
        complexity: 'basic',
        estimatedHours: 6
    },

    // Analytics & Reporting
    {
        id: 'analytics-setup',
        name: 'Analytics Setup (Google Analytics)',
        description: 'Comprehensive analytics tracking and setup',
        price: 199,
        category: PRICING_CATEGORIES[6], // analytics
        icon: BarChart,
        platforms: ['web', 'mobile'],
        complexity: 'basic',
        estimatedHours: 4,
        popular: true
    },
    {
        id: 'custom-dashboard',
        name: 'Custom Analytics Dashboard',
        description: 'Real-time custom analytics and reporting dashboard',
        price: 999,
        category: PRICING_CATEGORIES[6],
        icon: TrendingUp,
        platforms: ['web'],
        complexity: 'advanced',
        estimatedHours: 22,
        dependencies: ['database-design']
    },
    {
        id: 'seo-optimization',
        name: 'SEO Optimization',
        description: 'Complete SEO setup with meta tags and optimization',
        price: 399,
        category: PRICING_CATEGORIES[6],
        icon: Search,
        platforms: ['web'],
        complexity: 'intermediate',
        estimatedHours: 8,
        popular: true
    },
    {
        id: 'conversion-tracking',
        name: 'Conversion Tracking',
        description: 'Goal and conversion tracking setup',
        price: 299,
        category: PRICING_CATEGORIES[6],
        icon: Target,
        platforms: ['web', 'mobile'],
        complexity: 'intermediate',
        estimatedHours: 6
    },

    // Third-party Integrations
    {
        id: 'social-media-integration',
        name: 'Social Media Integration',
        description: 'Connect and display social media feeds',
        price: 349,
        category: PRICING_CATEGORIES[7], // integrations
        icon: Share2,
        platforms: ['web', 'mobile'],
        complexity: 'intermediate',
        estimatedHours: 8
    },
    {
        id: 'maps-integration',
        name: 'Maps Integration',
        description: 'Interactive maps with location markers',
        price: 299,
        category: PRICING_CATEGORIES[7],
        icon: Map,
        platforms: ['web', 'mobile'],
        complexity: 'basic',
        estimatedHours: 6
    },
    {
        id: 'crm-integration',
        name: 'CRM Integration',
        description: 'Connect with Salesforce, HubSpot, or other CRMs',
        price: 699,
        category: PRICING_CATEGORIES[7],
        icon: Users,
        platforms: ['web'],
        complexity: 'advanced',
        estimatedHours: 16
    },
    {
        id: 'email-marketing-integration',
        name: 'Email Marketing Integration',
        description: 'Connect with Mailchimp, ConvertKit, etc.',
        price: 399,
        category: PRICING_CATEGORIES[7],
        icon: Mail,
        platforms: ['web'],
        complexity: 'intermediate',
        estimatedHours: 8
    },

    // Advanced Features
    {
        id: 'api-development',
        name: 'Custom API Development',
        description: 'RESTful API with documentation',
        price: 1299,
        category: PRICING_CATEGORIES[8], // advanced
        icon: Code,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'expert',
        estimatedHours: 30,
        dependencies: ['database-design']
    },
    {
        id: 'real-time-features',
        name: 'Real-time Features (WebSocket)',
        description: 'Live updates, real-time collaboration features',
        price: 999,
        category: PRICING_CATEGORIES[8],
        icon: Zap,
        platforms: ['web', 'mobile'],
        complexity: 'expert',
        estimatedHours: 24
    },
    {
        id: 'ai-integration',
        name: 'AI/ML Integration',
        description: 'Chatbots, recommendations, or custom AI features',
        price: 1599,
        category: PRICING_CATEGORIES[8],
        icon: Star,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'expert',
        estimatedHours: 35
    },
    {
        id: 'multi-language',
        name: 'Multi-language Support',
        description: 'Internationalization with multiple language support',
        price: 799,
        category: PRICING_CATEGORIES[8],
        icon: Globe,
        platforms: ['web', 'mobile', 'desktop'],
        complexity: 'advanced',
        estimatedHours: 18
    }
];

// Helper functions
export const getPlatformFeatures = (platform: Platform): PricingFeature[] => {
    return PRICING_FEATURES.filter(feature => feature.platforms.includes(platform));
};

export const getCategoryFeatures = (categoryId: string): PricingFeature[] => {
    return PRICING_FEATURES.filter(feature => feature.category.id === categoryId);
};

export const calculateTotalPrice = (selectedFeatureIds: string[]): number => {
    return selectedFeatureIds.reduce((total, featureId) => {
        const feature = PRICING_FEATURES.find(f => f.id === featureId);
        return total + (feature?.price || 0);
    }, 0);
};

export const calculateTotalHours = (selectedFeatureIds: string[]): number => {
    return selectedFeatureIds.reduce((total, featureId) => {
        const feature = PRICING_FEATURES.find(f => f.id === featureId);
        return total + (feature?.estimatedHours || 0);
    }, 0);
};

export const validateDependencies = (selectedFeatureIds: string[]): { valid: boolean; missingDependencies: string[] } => {
    const missingDependencies: string[] = [];

    selectedFeatureIds.forEach(featureId => {
        const feature = PRICING_FEATURES.find(f => f.id === featureId);
        if (feature?.dependencies) {
            feature.dependencies.forEach(depId => {
                if (!selectedFeatureIds.includes(depId)) {
                    const depFeature = PRICING_FEATURES.find(f => f.id === depId);
                    if (depFeature && !missingDependencies.includes(depFeature.name)) {
                        missingDependencies.push(depFeature.name);
                    }
                }
            });
        }
    });

    return {
        valid: missingDependencies.length === 0,
        missingDependencies
    };
};

export const getEstimatedDeliveryTime = (totalHours: number): string => {
    const days = Math.ceil(totalHours / 8); // 8 hours per day

    if (days <= 7) return `${days} days`;
    if (days <= 30) return `${Math.ceil(days / 7)} weeks`;
    return `${Math.ceil(days / 30)} months`;
};
