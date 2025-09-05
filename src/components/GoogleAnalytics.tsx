import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { siteConfig } from '@/config/site';

// Declare gtag function for TypeScript
declare global {
    interface Window {
        gtag: (...args: any[]) => void;
        dataLayer: any[];
    }
}

const GoogleAnalytics = () => {
    const location = useLocation();
    const { googleAnalyticsId, enableInDevelopment } = siteConfig.analytics;

    // Don't load in development unless explicitly enabled
    const shouldLoad = import.meta.env.PROD || enableInDevelopment;

    // Don't load if no valid GA ID is provided
    const hasValidId = googleAnalyticsId && googleAnalyticsId !== "G-XXXXXXXXXX";

    useEffect(() => {
        if (!shouldLoad || !hasValidId) return;

        // Initialize Google Analytics
        const script1 = document.createElement('script');
        script1.async = true;
        script1.src = `https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`;
        document.head.appendChild(script1);

        const script2 = document.createElement('script');
        script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${googleAnalyticsId}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
        document.head.appendChild(script2);

        // Cleanup function
        return () => {
            document.head.removeChild(script1);
            document.head.removeChild(script2);
        };
    }, [shouldLoad, hasValidId, googleAnalyticsId]);

    // Track page views on route changes
    useEffect(() => {
        if (!shouldLoad || !hasValidId || !window.gtag) return;

        window.gtag('config', googleAnalyticsId, {
            page_title: document.title,
            page_location: window.location.href,
            page_path: location.pathname + location.search
        });
    }, [location, shouldLoad, hasValidId, googleAnalyticsId]);

    return null;
};

export default GoogleAnalytics;

// Utility functions for tracking events
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
    if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', eventName, parameters);
    }
};

export const trackFormSubmission = (formName: string, success: boolean = true) => {
    trackEvent('form_submit', {
        form_name: formName,
        success: success
    });
};

export const trackButtonClick = (buttonName: string, location?: string) => {
    trackEvent('button_click', {
        button_name: buttonName,
        click_location: location
    });
};

export const trackPageView = (pageName: string) => {
    trackEvent('page_view', {
        page_name: pageName
    });
};
