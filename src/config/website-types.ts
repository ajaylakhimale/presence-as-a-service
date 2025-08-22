// Website Types Research & Taxonomy
// Comprehensive catalog of common site types and their characteristics

export interface WebsiteType {
    id: string;
    label: string;
    description: string;
    category: string;
    typical_tech: string[];
    core_features: string[];
    optional_addons: string[];
    complexity_drivers: string[];
    base_complexity_score: number; // 1-10 scale
}

export const WEBSITE_TYPES: WebsiteType[] = [
    // Business & Corporate
    {
        id: "business_website",
        label: "Business Website",
        description: "Professional company presence with services, about, and contact information",
        category: "Business & Corporate",
        typical_tech: ["React", "Next.js", "WordPress", "Tailwind CSS"],
        core_features: ["Homepage", "About Us", "Services", "Contact Form", "SEO Optimization"],
        optional_addons: ["Blog", "Team Pages", "Case Studies", "Testimonials", "Multi-language"],
        complexity_drivers: ["Custom Design", "CMS Integration", "Lead Generation"],
        base_complexity_score: 3
    },
    {
        id: "corporate_website",
        label: "Corporate Website",
        description: "Large enterprise website with investor relations, careers, and corporate information",
        category: "Business & Corporate",
        typical_tech: ["Next.js", "Drupal", "WordPress Enterprise", "React"],
        core_features: ["Corporate Homepage", "Investor Relations", "Careers Section", "News Center", "Leadership Pages"],
        optional_addons: ["Annual Reports", "Stock Information", "Press Releases", "ESG Reporting"],
        complexity_drivers: ["Enterprise Security", "Compliance", "Multi-brand Management"],
        base_complexity_score: 7
    },
    {
        id: "landing_page",
        label: "Landing Page",
        description: "Single-page focused website for marketing campaigns or product launches",
        category: "Marketing",
        typical_tech: ["React", "HTML/CSS", "Tailwind CSS", "Framer"],
        core_features: ["Hero Section", "Value Proposition", "CTA Buttons", "Contact Form"],
        optional_addons: ["A/B Testing", "Analytics Tracking", "Lead Magnets", "Video Background"],
        complexity_drivers: ["Conversion Optimization", "Integration with Marketing Tools"],
        base_complexity_score: 2
    },

    // E-commerce & Retail
    {
        id: "ecommerce_store",
        label: "E-commerce Store",
        description: "Online store with product catalog, shopping cart, and payment processing",
        category: "E-commerce & Retail",
        typical_tech: ["Shopify", "WooCommerce", "Next.js", "Stripe", "PayPal"],
        core_features: ["Product Catalog", "Shopping Cart", "Checkout Process", "Payment Gateway", "Order Management"],
        optional_addons: ["Inventory Management", "Multi-vendor Support", "Subscriptions", "Loyalty Programs"],
        complexity_drivers: ["Payment Processing", "Inventory Tracking", "Tax Calculations", "Shipping Integration"],
        base_complexity_score: 6
    },
    {
        id: "marketplace",
        label: "Marketplace",
        description: "Multi-vendor platform connecting buyers and sellers",
        category: "E-commerce & Retail",
        typical_tech: ["React", "Node.js", "PostgreSQL", "Stripe Connect", "AWS"],
        core_features: ["Vendor Registration", "Product Listings", "Order Management", "Commission System", "Reviews"],
        optional_addons: ["Escrow Payments", "Dispute Resolution", "Advanced Analytics", "Mobile Apps"],
        complexity_drivers: ["Multi-party Payments", "Vendor Management", "Complex Commission Structures"],
        base_complexity_score: 9
    },
    {
        id: "auction_site",
        label: "Auction Site",
        description: "Online bidding platform for auctions and timed sales",
        category: "E-commerce & Retail",
        typical_tech: ["React", "Node.js", "WebSockets", "Redis", "PostgreSQL"],
        core_features: ["Auction Listings", "Bidding System", "Timer Functionality", "Payment Processing", "User Verification"],
        optional_addons: ["Live Streaming", "Proxy Bidding", "Buy Now Options", "Condition Reports"],
        complexity_drivers: ["Real-time Bidding", "Complex Timer Logic", "Financial Verification"],
        base_complexity_score: 8
    },

    // Content & Media
    {
        id: "blog",
        label: "Blog Website",
        description: "Content-focused site with articles, categories, and author profiles",
        category: "Content & Media",
        typical_tech: ["WordPress", "Ghost", "Next.js", "Strapi CMS"],
        core_features: ["Article Publishing", "Categories", "Tags", "Comments", "Archive"],
        optional_addons: ["Newsletter Signup", "Social Sharing", "Related Posts", "Author Profiles"],
        complexity_drivers: ["SEO Optimization", "Content Management", "User Engagement"],
        base_complexity_score: 3
    },
    {
        id: "news_portal",
        label: "News Portal",
        description: "News website with multiple categories, breaking news, and editorial content",
        category: "Content & Media",
        typical_tech: ["WordPress", "Drupal", "React", "Next.js"],
        core_features: ["News Articles", "Breaking News", "Categories", "Editorial Calendar", "Journalist Profiles"],
        optional_addons: ["Live News Feed", "Push Notifications", "Paywall", "Comments System"],
        complexity_drivers: ["Real-time Updates", "Content Moderation", "Scalability"],
        base_complexity_score: 6
    },
    {
        id: "magazine",
        label: "Online Magazine",
        description: "Digital magazine with rich media content and subscription features",
        category: "Content & Media",
        typical_tech: ["WordPress", "React", "Next.js", "Stripe"],
        core_features: ["Articles", "Photo Galleries", "Video Content", "Issue Archives", "Subscription System"],
        optional_addons: ["Digital Editions", "Print Integration", "Member Portal", "Events Calendar"],
        complexity_drivers: ["Rich Media Management", "Subscription Logic", "Content Delivery"],
        base_complexity_score: 5
    },

    // Portfolio & Creative
    {
        id: "portfolio",
        label: "Portfolio Website",
        description: "Showcase website for creative professionals and agencies",
        category: "Portfolio & Creative",
        typical_tech: ["React", "Next.js", "Framer", "Webflow"],
        core_features: ["Project Gallery", "About Page", "Contact Form", "Resume/CV", "Case Studies"],
        optional_addons: ["Blog", "Client Testimonials", "Awards Section", "Video Portfolio"],
        complexity_drivers: ["Custom Animations", "Performance Optimization", "Mobile Responsiveness"],
        base_complexity_score: 4
    },
    {
        id: "photography",
        label: "Photography Website",
        description: "Image-focused site for photographers with galleries and booking",
        category: "Portfolio & Creative",
        typical_tech: ["React", "Next.js", "Lightbox", "Cloudinary"],
        core_features: ["Photo Galleries", "Lightbox Viewing", "Contact Form", "Service Packages", "About Page"],
        optional_addons: ["Client Proofing", "Online Booking", "Print Shop", "Password Protection"],
        complexity_drivers: ["Image Optimization", "Gallery Performance", "Storage Management"],
        base_complexity_score: 4
    },
    {
        id: "artist_gallery",
        label: "Artist Gallery",
        description: "Digital art gallery with artwork sales and exhibition information",
        category: "Portfolio & Creative",
        typical_tech: ["React", "Next.js", "Stripe", "Cloudinary"],
        core_features: ["Artwork Gallery", "Artist Profiles", "Exhibition Info", "Online Sales", "Art Details"],
        optional_addons: ["Virtual Tours", "Auction Integration", "Collector Accounts", "Shipping Calculator"],
        complexity_drivers: ["E-commerce Integration", "Artwork Management", "Pricing Strategies"],
        base_complexity_score: 5
    },

    // Education & Learning
    {
        id: "lms",
        label: "Learning Management System",
        description: "Online learning platform with courses, quizzes, and progress tracking",
        category: "Education & Learning",
        typical_tech: ["React", "Node.js", "MongoDB", "Video Hosting", "Payment Gateway"],
        core_features: ["Course Creation", "Video Lessons", "Quizzes", "Progress Tracking", "Certificates"],
        optional_addons: ["Live Classes", "Discussion Forums", "Mobile App", "Assignments"],
        complexity_drivers: ["Video Streaming", "User Progress", "Assessment Logic", "Content Protection"],
        base_complexity_score: 8
    },
    {
        id: "online_course",
        label: "Online Course Platform",
        description: "Course selling platform with lessons, payment, and student management",
        category: "Education & Learning",
        typical_tech: ["React", "Vimeo", "Stripe", "Teachable", "Thinkific"],
        core_features: ["Course Catalog", "Video Lessons", "Student Dashboard", "Payment Processing", "Completion Tracking"],
        optional_addons: ["Certificates", "Community Features", "Live Sessions", "Mobile Access"],
        complexity_drivers: ["Content Delivery", "Payment Integration", "Student Management"],
        base_complexity_score: 6
    },
    {
        id: "educational_portal",
        label: "Educational Portal",
        description: "Comprehensive educational website for schools and institutions",
        category: "Education & Learning",
        typical_tech: ["React", "Node.js", "PostgreSQL", "WordPress"],
        core_features: ["Course Information", "Faculty Profiles", "Admissions", "Student Portal", "News & Events"],
        optional_addons: ["Online Applications", "Fee Payment", "Virtual Campus Tour", "Alumni Network"],
        complexity_drivers: ["Multi-user Roles", "Document Management", "Integration with Student Systems"],
        base_complexity_score: 7
    },

    // Healthcare & Medical
    {
        id: "medical_practice",
        label: "Medical Practice Website",
        description: "Healthcare provider website with appointment booking and patient information",
        category: "Healthcare & Medical",
        typical_tech: ["React", "HIPAA Compliant Hosting", "Appointment Scheduling API"],
        core_features: ["Services Information", "Doctor Profiles", "Appointment Booking", "Contact Information", "Patient Forms"],
        optional_addons: ["Patient Portal", "Telemedicine", "Insurance Information", "Health Blog"],
        complexity_drivers: ["HIPAA Compliance", "Appointment Integration", "Security Requirements"],
        base_complexity_score: 6
    },
    {
        id: "hospital_website",
        label: "Hospital Website",
        description: "Large healthcare facility website with departments and emergency information",
        category: "Healthcare & Medical",
        typical_tech: ["React", "WordPress", "HIPAA Compliant Infrastructure"],
        core_features: ["Department Information", "Doctor Directory", "Emergency Services", "Patient Services", "News & Updates"],
        optional_addons: ["Virtual Tours", "Career Portal", "Patient Portal", "Health Education"],
        complexity_drivers: ["Complex Information Architecture", "Emergency Features", "Compliance"],
        base_complexity_score: 7
    },
    {
        id: "telemedicine",
        label: "Telemedicine Platform",
        description: "Online healthcare platform with video consultations and patient management",
        category: "Healthcare & Medical",
        typical_tech: ["React", "WebRTC", "HIPAA Compliant", "Payment Processing"],
        core_features: ["Video Consultations", "Patient Records", "Appointment Scheduling", "Prescription Management", "Payment Processing"],
        optional_addons: ["Health Monitoring", "Mobile App", "Insurance Integration", "Lab Results"],
        complexity_drivers: ["Video Technology", "Medical Compliance", "Data Security", "Integration with Health Systems"],
        base_complexity_score: 9
    },

    // Real Estate
    {
        id: "real_estate_portal",
        label: "Real Estate Portal",
        description: "Property listing website with search filters and agent profiles",
        category: "Real Estate",
        typical_tech: ["React", "Node.js", "PostgreSQL", "Map APIs", "MLS Integration"],
        core_features: ["Property Listings", "Search & Filters", "Agent Profiles", "Property Details", "Contact Forms"],
        optional_addons: ["Virtual Tours", "Mortgage Calculator", "Market Analytics", "Saved Searches"],
        complexity_drivers: ["MLS Integration", "Advanced Search", "Geolocation", "Data Synchronization"],
        base_complexity_score: 7
    },
    {
        id: "property_management",
        label: "Property Management System",
        description: "Portal for property managers with tenant and maintenance management",
        category: "Real Estate",
        typical_tech: ["React", "Node.js", "PostgreSQL", "Payment Processing"],
        core_features: ["Property Portfolio", "Tenant Management", "Rent Collection", "Maintenance Requests", "Financial Reporting"],
        optional_addons: ["Tenant Screening", "Document Management", "Mobile App", "Accounting Integration"],
        complexity_drivers: ["Multi-property Management", "Financial Integration", "Tenant Portal"],
        base_complexity_score: 8
    },

    // Booking & Services
    {
        id: "booking_system",
        label: "Booking System",
        description: "Appointment and reservation system for service-based businesses",
        category: "Booking & Services",
        typical_tech: ["React", "Node.js", "Calendar APIs", "Payment Processing"],
        core_features: ["Calendar System", "Booking Forms", "Payment Processing", "Confirmation Emails", "Admin Dashboard"],
        optional_addons: ["Recurring Appointments", "Staff Management", "Customer Portal", "SMS Notifications"],
        complexity_drivers: ["Complex Scheduling Logic", "Payment Integration", "Multi-staff Coordination"],
        base_complexity_score: 6
    },
    {
        id: "hotel_booking",
        label: "Hotel Booking System",
        description: "Hotel reservation platform with room management and guest services",
        category: "Booking & Services",
        typical_tech: ["React", "Node.js", "Payment Gateway", "Booking Engine"],
        core_features: ["Room Availability", "Reservation System", "Guest Management", "Payment Processing", "Rate Management"],
        optional_addons: ["Channel Manager", "Guest Portal", "Housekeeping System", "Revenue Management"],
        complexity_drivers: ["Inventory Management", "Rate Calculations", "Channel Integration"],
        base_complexity_score: 8
    },
    {
        id: "event_booking",
        label: "Event Booking Platform",
        description: "Event ticketing and management system with registration and payment",
        category: "Booking & Services",
        typical_tech: ["React", "Node.js", "Payment Processing", "QR Code Generation"],
        core_features: ["Event Listings", "Ticket Sales", "Registration Forms", "Payment Processing", "Check-in System"],
        optional_addons: ["Seating Charts", "Group Discounts", "Mobile Tickets", "Analytics Dashboard"],
        complexity_drivers: ["Event Management", "Ticketing Logic", "Capacity Management"],
        base_complexity_score: 7
    },

    // Social & Community
    {
        id: "forum",
        label: "Community Forum",
        description: "Discussion platform with topics, moderation, and user management",
        category: "Social & Community",
        typical_tech: ["React", "Node.js", "PostgreSQL", "Real-time Updates"],
        core_features: ["Discussion Topics", "User Profiles", "Moderation Tools", "Search Function", "Categories"],
        optional_addons: ["Private Messaging", "Reputation System", "Mobile App", "Advanced Moderation"],
        complexity_drivers: ["User Management", "Content Moderation", "Real-time Features"],
        base_complexity_score: 6
    },
    {
        id: "social_network",
        label: "Social Network",
        description: "Social media platform with profiles, posts, and connections",
        category: "Social & Community",
        typical_tech: ["React", "Node.js", "Redis", "WebSockets", "CDN"],
        core_features: ["User Profiles", "Posts & Updates", "Friend Connections", "News Feed", "Messaging"],
        optional_addons: ["Groups", "Events", "Live Streaming", "Stories Feature"],
        complexity_drivers: ["Real-time Updates", "Content Algorithm", "Scalability", "Media Handling"],
        base_complexity_score: 9
    },
    {
        id: "membership_site",
        label: "Membership Site",
        description: "Exclusive content platform with subscription management and member benefits",
        category: "Social & Community",
        typical_tech: ["React", "Stripe", "Content Management", "Authentication"],
        core_features: ["Member Registration", "Subscription Management", "Protected Content", "Member Directory", "Payment Processing"],
        optional_addons: ["Tiered Memberships", "Events Calendar", "Member Forums", "Mobile Access"],
        complexity_drivers: ["Subscription Logic", "Content Protection", "Payment Management"],
        base_complexity_score: 6
    },

    // SaaS & Web Applications
    {
        id: "saas_marketing",
        label: "SaaS Marketing Site",
        description: "Marketing website for software products with features, pricing, and demos",
        category: "SaaS & Web Applications",
        typical_tech: ["React", "Next.js", "Tailwind CSS", "Analytics"],
        core_features: ["Product Features", "Pricing Plans", "Demo Videos", "Customer Testimonials", "Trial Signup"],
        optional_addons: ["Interactive Demos", "Case Studies", "Resource Library", "Help Center"],
        complexity_drivers: ["Complex Pricing Display", "Integration with SaaS Platform", "Lead Generation"],
        base_complexity_score: 5
    },
    {
        id: "web_app_dashboard",
        label: "Web Application Dashboard",
        description: "User interface for web applications with data visualization and controls",
        category: "SaaS & Web Applications",
        typical_tech: ["React", "Node.js", "Chart Libraries", "WebSockets"],
        core_features: ["Data Dashboard", "User Management", "Analytics", "Settings Panel", "API Integration"],
        optional_addons: ["Real-time Updates", "Custom Reports", "Mobile App", "API Access"],
        complexity_drivers: ["Data Visualization", "Real-time Updates", "Complex User Permissions"],
        base_complexity_score: 8
    },
    {
        id: "crm_system",
        label: "CRM System",
        description: "Customer relationship management platform with contacts, deals, and pipeline",
        category: "SaaS & Web Applications",
        typical_tech: ["React", "Node.js", "PostgreSQL", "Email Integration"],
        core_features: ["Contact Management", "Deal Pipeline", "Activity Tracking", "Reports", "Email Integration"],
        optional_addons: ["Marketing Automation", "Mobile App", "Third-party Integrations", "Custom Fields"],
        complexity_drivers: ["Data Relationships", "Workflow Automation", "Integration Requirements"],
        base_complexity_score: 8
    },

    // Entertainment & Media
    {
        id: "streaming_platform",
        label: "Video Streaming Platform",
        description: "Video content platform with subscription and viewing analytics",
        category: "Entertainment & Media",
        typical_tech: ["React", "Video CDN", "Streaming Infrastructure", "Payment Processing"],
        core_features: ["Video Library", "Streaming Player", "User Accounts", "Subscription Management", "Content Management"],
        optional_addons: ["Live Streaming", "Download Feature", "Multiple Quality Options", "Parental Controls"],
        complexity_drivers: ["Video Infrastructure", "Content Delivery", "DRM Protection", "Scalability"],
        base_complexity_score: 9
    },
    {
        id: "podcast_platform",
        label: "Podcast Platform",
        description: "Audio content platform with episodes, subscriptions, and analytics",
        category: "Entertainment & Media",
        typical_tech: ["React", "Audio Hosting", "RSS Feeds", "Analytics"],
        core_features: ["Episode Library", "Audio Player", "RSS Feeds", "Subscriber Management", "Analytics"],
        optional_addons: ["Live Recording", "Transcriptions", "Monetization", "Mobile App"],
        complexity_drivers: ["Audio Hosting", "RSS Management", "Analytics Implementation"],
        base_complexity_score: 6
    },
    {
        id: "gaming_portal",
        label: "Gaming Portal",
        description: "Gaming community site with reviews, news, and user-generated content",
        category: "Entertainment & Media",
        typical_tech: ["React", "Node.js", "Game APIs", "Community Features"],
        core_features: ["Game Database", "Reviews & Ratings", "News Articles", "User Profiles", "Game Tracking"],
        optional_addons: ["Tournament System", "Live Streaming", "Game Forums", "Achievement System"],
        complexity_drivers: ["Game API Integration", "Community Management", "Real-time Features"],
        base_complexity_score: 7
    },

    // Directory & Listing
    {
        id: "business_directory",
        label: "Business Directory",
        description: "Local business listing platform with search and reviews",
        category: "Directory & Listing",
        typical_tech: ["React", "Node.js", "Map APIs", "Search Engine"],
        core_features: ["Business Listings", "Search & Filter", "Reviews & Ratings", "Contact Information", "Map Integration"],
        optional_addons: ["Claim Listings", "Premium Listings", "Analytics for Businesses", "Mobile App"],
        complexity_drivers: ["Location Services", "Search Optimization", "Review Management"],
        base_complexity_score: 6
    },
    {
        id: "job_board",
        label: "Job Board",
        description: "Employment platform connecting job seekers with employers",
        category: "Directory & Listing",
        typical_tech: ["React", "Node.js", "Search Engine", "Payment Processing"],
        core_features: ["Job Listings", "Resume Upload", "Application System", "Employer Dashboard", "Search & Filters"],
        optional_addons: ["Resume Builder", "Salary Information", "Company Profiles", "Job Alerts"],
        complexity_drivers: ["Matching Algorithm", "Multi-user Types", "Application Management"],
        base_complexity_score: 7
    },
    {
        id: "event_directory",
        label: "Event Directory",
        description: "Event listing platform with calendar integration and ticket sales",
        category: "Directory & Listing",
        typical_tech: ["React", "Calendar APIs", "Payment Processing", "Map Integration"],
        core_features: ["Event Listings", "Calendar Integration", "Ticket Sales", "Event Search", "Organizer Profiles"],
        optional_addons: ["Event Promotion", "Analytics", "Mobile App", "Social Sharing"],
        complexity_drivers: ["Calendar Management", "Ticketing Integration", "Location Services"],
        base_complexity_score: 6
    },

    // Non-profit & Government
    {
        id: "nonprofit_website",
        label: "Non-profit Website",
        description: "Charity organization site with donations, events, and volunteer management",
        category: "Non-profit & Government",
        typical_tech: ["WordPress", "React", "Donation Processing", "Volunteer Management"],
        core_features: ["Mission Statement", "Donation System", "Volunteer Portal", "Events Calendar", "Impact Stories"],
        optional_addons: ["Recurring Donations", "Volunteer Scheduling", "Newsletter", "Grant Management"],
        complexity_drivers: ["Donation Processing", "Volunteer Management", "Compliance Requirements"],
        base_complexity_score: 5
    },
    {
        id: "government_portal",
        label: "Government Portal",
        description: "Official government website with services, information, and citizen engagement",
        category: "Non-profit & Government",
        typical_tech: ["React", "WordPress", "Security Frameworks", "Accessibility Tools"],
        core_features: ["Service Information", "Document Downloads", "Contact Directory", "News & Updates", "Citizen Services"],
        optional_addons: ["Online Forms", "Payment Processing", "Multi-language", "Mobile App"],
        complexity_drivers: ["Security Requirements", "Accessibility Compliance", "Multi-language Support"],
        base_complexity_score: 7
    },

    // Personal & Lifestyle
    {
        id: "personal_blog",
        label: "Personal Blog",
        description: "Individual blogging platform with personal stories and interests",
        category: "Personal & Lifestyle",
        typical_tech: ["WordPress", "Ghost", "Static Site Generators"],
        core_features: ["Blog Posts", "About Page", "Contact Form", "Archive", "Categories"],
        optional_addons: ["Newsletter Signup", "Social Media Integration", "Photo Gallery", "Comments"],
        complexity_drivers: ["SEO Optimization", "Content Management", "Social Integration"],
        base_complexity_score: 2
    },
    {
        id: "recipe_blog",
        label: "Recipe Blog",
        description: "Food blog with recipes, cooking tips, and ingredient information",
        category: "Personal & Lifestyle",
        typical_tech: ["WordPress", "React", "Recipe Schema", "Photography Tools"],
        core_features: ["Recipe Posts", "Ingredient Lists", "Cooking Instructions", "Photo Galleries", "Recipe Search"],
        optional_addons: ["Recipe Rating", "Nutrition Information", "Meal Planning", "Shopping Lists"],
        complexity_drivers: ["Recipe Schema", "Search Optimization", "Image Management"],
        base_complexity_score: 3
    },
    {
        id: "wedding_website",
        label: "Wedding Website",
        description: "Personal wedding site with details, RSVP, and photo sharing",
        category: "Personal & Lifestyle",
        typical_tech: ["Website Builders", "React", "RSVP Systems"],
        core_features: ["Wedding Details", "RSVP System", "Photo Gallery", "Registry Links", "Timeline"],
        optional_addons: ["Guest Messages", "Live Streaming", "Photo Upload", "Travel Information"],
        complexity_drivers: ["RSVP Management", "Guest Communication", "Timeline Features"],
        base_complexity_score: 3
    }
];

export const WEBSITE_CATEGORIES = [
    "Business & Corporate",
    "E-commerce & Retail",
    "Content & Media",
    "Portfolio & Creative",
    "Education & Learning",
    "Healthcare & Medical",
    "Real Estate",
    "Booking & Services",
    "Social & Community",
    "SaaS & Web Applications",
    "Entertainment & Media",
    "Directory & Listing",
    "Non-profit & Government",
    "Marketing",
    "Personal & Lifestyle"
];

// Helper functions for website type analysis
export const getWebsiteTypesByCategory = (category: string): WebsiteType[] => {
    return WEBSITE_TYPES.filter(type => type.category === category);
};

export const getWebsiteTypeById = (id: string): WebsiteType | undefined => {
    return WEBSITE_TYPES.find(type => type.id === id);
};

export const getComplexityRange = (): { min: number; max: number } => {
    const scores = WEBSITE_TYPES.map(type => type.base_complexity_score);
    return {
        min: Math.min(...scores),
        max: Math.max(...scores)
    };
};

export const getWebsiteTypesByComplexity = (minScore: number, maxScore: number): WebsiteType[] => {
    return WEBSITE_TYPES.filter(type =>
        type.base_complexity_score >= minScore && type.base_complexity_score <= maxScore
    );
};
