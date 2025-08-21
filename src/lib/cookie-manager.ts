// Cookie utility functions for managing form submissions and user preferences
// Compliant with essential cookie requirements

interface CookieOptions {
    expires?: number; // days
    path?: string;
    secure?: boolean;
    sameSite?: 'strict' | 'lax' | 'none';
}

export interface FormSubmissionData {
    id: string;
    type: 'onboarding' | 'contact' | 'quote';
    submittedAt: string;
    status: 'success' | 'failed';
    message: string;
    projectName?: string;
    contactName?: string;
    contactEmail?: string;
}

export interface UserPreferences {
    hasSeenWelcome: boolean;
    preferredTheme: 'light' | 'dark' | 'system';
    acceptedCookies: boolean;
    lastVisit: string;
}

class CookieManager {
    // Essential cookies (no consent needed)
    static setFormSubmission(data: FormSubmissionData): void {
        const cookieData = {
            ...data,
            submittedAt: new Date().toISOString(),
            id: data.id || `form_${Date.now()}`
        };

        this.setCookie('form_submission', JSON.stringify(cookieData), {
            expires: 7, // Keep for 7 days
            path: '/',
            secure: true,
            sameSite: 'lax'
        });
    }

    static getFormSubmission(): FormSubmissionData | null {
        const cookie = this.getCookie('form_submission');
        if (!cookie) return null;

        try {
            return JSON.parse(cookie);
        } catch (error) {
            console.error('Error parsing form submission cookie:', error);
            return null;
        }
    }

    static clearFormSubmission(): void {
        this.deleteCookie('form_submission');
    }

    // User preferences (with consent)
    static setUserPreferences(preferences: Partial<UserPreferences>): void {
        const existing = this.getUserPreferences();
        const updated = { ...existing, ...preferences };

        this.setCookie('user_preferences', JSON.stringify(updated), {
            expires: 365, // Keep for 1 year
            path: '/',
            secure: true,
            sameSite: 'lax'
        });
    }

    static getUserPreferences(): UserPreferences {
        const cookie = this.getCookie('user_preferences');
        const defaults: UserPreferences = {
            hasSeenWelcome: false,
            preferredTheme: 'system',
            acceptedCookies: false,
            lastVisit: new Date().toISOString()
        };

        if (!cookie) return defaults;

        try {
            return { ...defaults, ...JSON.parse(cookie) };
        } catch (error) {
            console.error('Error parsing user preferences cookie:', error);
            return defaults;
        }
    }

    // Session management
    static setSession(sessionId: string, userId?: string): void {
        const sessionData = {
            id: sessionId,
            userId: userId || null,
            startedAt: new Date().toISOString(),
            lastActivity: new Date().toISOString()
        };

        this.setCookie('session', JSON.stringify(sessionData), {
            expires: 1, // 1 day session
            path: '/',
            secure: true,
            sameSite: 'strict'
        });
    }

    static getSession(): any {
        const cookie = this.getCookie('session');
        if (!cookie) return null;

        try {
            return JSON.parse(cookie);
        } catch (error) {
            console.error('Error parsing session cookie:', error);
            return null;
        }
    }

    static updateLastActivity(): void {
        const session = this.getSession();
        if (session) {
            session.lastActivity = new Date().toISOString();
            this.setCookie('session', JSON.stringify(session), {
                expires: 1,
                path: '/',
                secure: true,
                sameSite: 'strict'
            });
        }
    }

    // Cookie consent management
    static setCookieConsent(accepted: boolean): void {
        this.setCookie('cookie_consent', accepted.toString(), {
            expires: 365,
            path: '/',
            secure: true,
            sameSite: 'lax'
        });

        // Update user preferences
        this.setUserPreferences({ acceptedCookies: accepted });
    }

    static getCookieConsent(): boolean | null {
        const cookie = this.getCookie('cookie_consent');
        if (!cookie) return null;
        return cookie === 'true';
    }

    // Low-level cookie operations
    private static setCookie(name: string, value: string, options: CookieOptions = {}): void {
        let cookieString = `${name}=${encodeURIComponent(value)}`;

        if (options.expires) {
            const date = new Date();
            date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 * 1000));
            cookieString += `; expires=${date.toUTCString()}`;
        }

        if (options.path) {
            cookieString += `; path=${options.path}`;
        }

        if (options.secure) {
            cookieString += `; secure`;
        }

        if (options.sameSite) {
            cookieString += `; samesite=${options.sameSite}`;
        }

        document.cookie = cookieString;
    }

    private static getCookie(name: string): string | null {
        const nameEQ = name + "=";
        const ca = document.cookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) === ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }

        return null;
    }

    private static deleteCookie(name: string): void {
        document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;
    }

    // Utility methods
    static clearAllNonEssentialCookies(): void {
        this.deleteCookie('user_preferences');
        this.deleteCookie('session');
    }

    static getAllCookies(): Record<string, string> {
        const cookies: Record<string, string> = {};
        const ca = document.cookie.split(';');

        for (let i = 0; i < ca.length; i++) {
            const c = ca[i].trim();
            const [name, value] = c.split('=');
            if (name && value) {
                cookies[name] = decodeURIComponent(value);
            }
        }

        return cookies;
    }
}

export default CookieManager;
