import { Helmet } from 'react-helmet-async';
import { seoConfig } from '@/config/seo';

interface SEOProps {
    title?: string;
    description?: string;
    keywords?: string;
    canonicalUrl?: string;
    ogImage?: string;
    ogType?: string;
    articleData?: {
        publishedTime?: string;
        modifiedTime?: string;
        author?: string;
        section?: string;
        tags?: string[];
    };
    structuredData?: object;
    noIndex?: boolean;
}

const SEO = ({
    title,
    description,
    keywords,
    canonicalUrl,
    ogImage = "https://macro-presence.dev/og-image.png",
    ogType = "website",
    articleData,
    structuredData,
    noIndex = false
}: SEOProps) => {
    const siteUrl = "https://macro-presence.dev";
    const fullCanonicalUrl = canonicalUrl ? `${siteUrl}${canonicalUrl}` : siteUrl;

    return (
        <Helmet>
            {/* Basic Meta Tags */}
            {title && <title>{title}</title>}
            {description && <meta name="description" content={description} />}
            {keywords && <meta name="keywords" content={keywords} />}
            <meta name="author" content="macro presence" />
            <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow,max-snippet:-1,max-image-preview:large,max-video-preview:-1"} />

            {/* Canonical URL */}
            <link rel="canonical" href={fullCanonicalUrl} />

            {/* Open Graph Meta Tags */}
            <meta property="og:type" content={ogType} />
            <meta property="og:site_name" content="macro presence" />
            {title && <meta property="og:title" content={title} />}
            {description && <meta property="og:description" content={description} />}
            <meta property="og:url" content={fullCanonicalUrl} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:image:alt" content={title || "macro presence - Professional Web Development"} />
            <meta property="og:locale" content="en_US" />

            {/* Article specific Open Graph tags */}
            {articleData && (
                <>
                    {articleData.publishedTime && <meta property="article:published_time" content={articleData.publishedTime} />}
                    {articleData.modifiedTime && <meta property="article:modified_time" content={articleData.modifiedTime} />}
                    {articleData.author && <meta property="article:author" content={articleData.author} />}
                    {articleData.section && <meta property="article:section" content={articleData.section} />}
                    {articleData.tags && articleData.tags.map(tag => (
                        <meta key={tag} property="article:tag" content={tag} />
                    ))}
                </>
            )}

            {/* Twitter Card Meta Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:site" content="@macro_presence" />
            <meta name="twitter:creator" content="@macro_presence" />
            {title && <meta name="twitter:title" content={title} />}
            {description && <meta name="twitter:description" content={description} />}
            <meta name="twitter:image" content={ogImage} />
            <meta name="twitter:image:alt" content={title || "macro presence - Professional Web Development"} />

            {/* Additional SEO Meta Tags */}
            <meta name="theme-color" content="#6366f1" />
            <meta name="msapplication-TileColor" content="#6366f1" />
            <meta name="format-detection" content="telephone=yes" />
            <meta name="mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="default" />

            {/* Structured Data */}
            {structuredData && (
                <script type="application/ld+json">
                    {JSON.stringify(structuredData)}
                </script>
            )}

            {/* Default Organization Schema */}
            <script type="application/ld+json">
                {JSON.stringify(seoConfig.schemas.organization)}
            </script>

            {/* Website Schema */}
            <script type="application/ld+json">
                {JSON.stringify(seoConfig.schemas.website)}
            </script>

            {/* Prefetch DNS for external resources */}
            <link rel="dns-prefetch" href="//fonts.googleapis.com" />
            <link rel="dns-prefetch" href="//www.google-analytics.com" />
            <link rel="dns-prefetch" href="//www.googletagmanager.com" />

            {/* Preconnect to critical external domains */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        </Helmet>
    );
};

export default SEO;
