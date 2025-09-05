// SEO Configuration for macro presence
export const seoConfig = {
    // Primary Keywords (high competition, high value)
    primaryKeywords: [
        "web development services",
        "custom web application development",
        "professional website development",
        "web development company",
        "React development services",
        "modern web applications"
    ],

    // Long-tail Keywords (lower competition, high intent)
    longTailKeywords: [
        "7 day website delivery guarantee",
        "custom web development no contracts",
        "professional website builder 2024",
        "fast web development services",
        "affordable custom web applications",
        "react typescript web development",
        "responsive web design development",
        "e-commerce website development services",
        "startup web development company",
        "business website development package"
    ],

    // Location-based Keywords (if targeting specific areas)
    locationKeywords: [
        "web development services near me",
        "local web development company",
        "web developer for small business"
    ],

    // Industry-specific Keywords
    industryKeywords: [
        "healthcare website development",
        "real estate website development",
        "restaurant website development",
        "law firm website development",
        "startup web application development",
        "fintech web development services",
        "e-commerce platform development"
    ],

    // Page-specific SEO data
    pages: {
        home: {
            title: "Professional Web Development Services | 7-Day Delivery Guarantee | macro presence",
            description: "Get a professional website in 7 days with our expert web development services. No contracts, transparent pricing, free support. React, TypeScript, modern tech stack.",
            keywords: "web development services, custom websites, 7 day delivery, professional web development, React development, no contracts",
            canonicalUrl: "https://macro-presence.dev/"
        },

        about: {
            title: "About macro presence | Expert Web Development Team Since 2024",
            description: "Meet the web development experts behind macro presence. 5+ years experience, modern tech stack, 7-day delivery guarantee. Learn why businesses choose us.",
            keywords: "web development company, about macro presence, web development team, professional developers",
            canonicalUrl: "https://macro-presence.dev/about"
        },

        pricing: {
            title: "Web Development Pricing | Transparent Costs | Starting at $3,999",
            description: "Transparent web development pricing starting at $3,999. No hidden fees, 7-day delivery, 30-day money-back guarantee. See exact costs upfront.",
            keywords: "web development pricing, website cost, development packages, transparent pricing, affordable web development",
            canonicalUrl: "https://macro-presence.dev/pricing"
        },

        howItWorks: {
            title: "How Our Web Development Process Works | 5-Phase Methodology",
            description: "Discover our proven 5-phase web development process: Discovery, Design, Development, Deploy, Support. Industry-standard practices, guaranteed results.",
            keywords: "web development process, how web development works, development methodology, web design process",
            canonicalUrl: "https://macro-presence.dev/how-it-works"
        },

        contact: {
            title: "Contact Us | Get Your Web Development Quote Today | macro presence",
            description: "Ready to build your website? Contact our web development experts for a free consultation and custom quote. WhatsApp, email, or schedule a call.",
            keywords: "contact web developer, web development quote, free consultation, web development services contact",
            canonicalUrl: "https://macro-presence.dev/contact"
        },

        onboarding: {
            title: "Start Your Web Development Project | Custom Quote in 2 Minutes",
            description: "Get started with your web development project. Answer a few questions to receive a custom quote and timeline. No commitment required.",
            keywords: "start web development project, custom web development quote, project onboarding",
            canonicalUrl: "https://macro-presence.dev/modern-onboarding"
        },

        industries: {
            title: "Industry-Specific Web Development Solutions | 20+ Sectors",
            description: "Specialized web development for healthcare, finance, e-commerce, real estate, and 20+ industries. Tailored solutions for your business needs.",
            keywords: "industry web development, healthcare websites, fintech development, e-commerce solutions",
            canonicalUrl: "https://macro-presence.dev/industries"
        },

        techStack: {
            title: "Our Web Development Technology Stack | React, TypeScript, Node.js",
            description: "Modern web development with React, TypeScript, Node.js, PostgreSQL, AWS, and more. See our complete technology stack and why we chose each tool.",
            keywords: "web development technology, React development, TypeScript, modern tech stack, web development tools",
            canonicalUrl: "https://macro-presence.dev/tech-stack"
        },

        blog: {
            title: "Web Development Blog | Tips, Trends & Best Practices | macro presence",
            description: "Stay updated with the latest web development trends, tips, and best practices. Expert insights on React, TypeScript, design, and business growth.",
            keywords: "web development blog, development tips, React tutorials, web design trends",
            canonicalUrl: "https://macro-presence.dev/blog"
        }
    },

    // Schema.org structured data templates
    schemas: {
        organization: {
            "@context": "https://schema.org",
            "@type": "Organization",
            "name": "macro presence",
            "url": "https://macro-presence.dev",
            "logo": "https://macro-presence.dev/logo.png",
            "description": "Professional web development services with 7-day delivery guarantee",
            "founder": {
                "@type": "Person",
                "name": "macro presence Team"
            },
            "foundingDate": "2024",
            "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-92092-52547",
                "contactType": "customer service",
                "email": "hello@macro-presence.dev"
            },
            "sameAs": [
                "https://twitter.com/macro_presence",
                "https://linkedin.com/company/macro-presence",
                "https://github.com/macro-presence"
            ],
            "address": {
                "@type": "PostalAddress",
                "addressLocality": "Digital City",
                "addressRegion": "DC",
                "postalCode": "12345",
                "addressCountry": "US"
            }
        },

        service: {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": "Web Development Services",
            "description": "Professional web development with 7-day delivery guarantee, modern technology stack, and transparent pricing",
            "provider": {
                "@type": "Organization",
                "name": "macro presence"
            },
            "serviceType": "Web Development",
            "areaServed": "Worldwide",
            "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Web Development Services",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Custom Web Application Development"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "React Development Services"
                        }
                    }
                ]
            }
        },

        website: {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "macro presence",
            "url": "https://macro-presence.dev",
            "description": "Professional web development services with modern technology",
            "potentialAction": {
                "@type": "SearchAction",
                "target": "https://macro-presence.dev/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
            }
        }
    },

    // Meta tags for social sharing
    socialMeta: {
        ogType: "website",
        ogSiteName: "macro presence",
        twitterCard: "summary_large_image",
        twitterSite: "@macro_presence"
    },

    // Technical SEO settings
    technical: {
        robotsTxt: `User-agent: *
Allow: /
Disallow: /admin/
Disallow: /private/
Disallow: /*.json$

Sitemap: https://macro-presence.dev/sitemap.xml`,

        sitemapUrls: [
            { url: "/", priority: 1.0, changefreq: "weekly" },
            { url: "/about", priority: 0.8, changefreq: "monthly" },
            { url: "/pricing", priority: 0.9, changefreq: "weekly" },
            { url: "/how-it-works", priority: 0.7, changefreq: "monthly" },
            { url: "/contact", priority: 0.8, changefreq: "monthly" },
            { url: "/modern-onboarding", priority: 0.9, changefreq: "weekly" },
            { url: "/industries", priority: 0.8, changefreq: "monthly" },
            { url: "/tech-stack", priority: 0.6, changefreq: "monthly" },
            { url: "/blog", priority: 0.7, changefreq: "weekly" }
        ]
    }
} as const;
