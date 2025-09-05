import CookieManager from './cookie-manager'

// Types for form data persistence
export interface ProjectFormData {
    name?: string;
    email?: string;
    phone?: string;
    company_name?: string;
    company_size?: string;
    industry?: string;
    project_title?: string;
    project_type?: string;
    project_description?: string;
    target_audience?: string;
    existing_website_url?: string;
    has_existing_branding?: boolean;
    features?: string[];
    preferred_timeline?: string;
    launch_date?: string;
    budget?: string;
    budget_flexibility?: boolean;
    special_requirements?: string;
    referral_source?: string;
    recaptchaToken?: string;
    submissionId?: string;
    submittedAt?: string;
}

export interface ContactFormData {
    name?: string
    email?: string
    company?: string
    subject?: string
    message?: string
    recaptchaToken?: string
    submissionId?: string
    submittedAt?: string
}

export interface NewsletterData {
    email?: string
    subscribedAt?: string
    source?: string
}

export interface UserFormState {
    project?: ProjectFormData
    contact?: ContactFormData
    newsletter?: NewsletterData
    hasSubmittedProject?: boolean
    hasSubmittedContact?: boolean
    hasSubscribedNewsletter?: boolean
    preferredContactMethod?: 'email' | 'phone' | 'whatsapp'
    lastInteractionAt?: string
}

// Cookie keys
const FORM_STATE_COOKIE = 'presence_form_state'
const USER_PREFERENCES_COOKIE = 'presence_user_prefs'

// Simple cookie utilities that work with document.cookie directly
const cookieUtils = {
    set: (name: string, value: string, days = 30) => {
        const expires = new Date()
        expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
        document.cookie = `${name}=${encodeURIComponent(value)};expires=${expires.toUTCString()};path=/;SameSite=Lax`
    },

    get: (name: string): string | null => {
        const nameEQ = name + '='
        const ca = document.cookie.split(';')
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i]
            while (c.charAt(0) === ' ') c = c.substring(1, c.length)
            if (c.indexOf(nameEQ) === 0) {
                return decodeURIComponent(c.substring(nameEQ.length, c.length))
            }
        }
        return null
    },

    remove: (name: string) => {
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`
    }
}

// Form persistence manager
export class FormPersistenceManager {
    private static instance: FormPersistenceManager
    private state: UserFormState = {}

    constructor() {
        this.loadState()
    }

    static getInstance(): FormPersistenceManager {
        if (!FormPersistenceManager.instance) {
            FormPersistenceManager.instance = new FormPersistenceManager()
        }
        return FormPersistenceManager.instance
    }

    // Load state from cookies
    private loadState(): void {
        try {
            const saved = cookieUtils.get(FORM_STATE_COOKIE)
            if (saved) {
                this.state = JSON.parse(saved)
            }
        } catch (error) {
            console.warn('Failed to load form state from cookies:', error)
            this.state = {}
        }
    }

    // Save state to cookies
    private saveState(): void {
        try {
            const stateToSave = {
                ...this.state,
                lastInteractionAt: new Date().toISOString()
            }

            // Save for 30 days
            cookieUtils.set(FORM_STATE_COOKIE, JSON.stringify(stateToSave), 30)
        } catch (error) {
            console.warn('Failed to save form state to cookies:', error)
        }
    }

    // Get current state
    getState(): UserFormState {
        return { ...this.state }
    }

    // Update project form data
    updateProjectForm(data: Partial<ProjectFormData>): void {
        this.state.project = {
            ...this.state.project,
            ...data
        }
        this.saveState()
    }

    // Update contact form data
    updateContactForm(data: Partial<ContactFormData>): void {
        this.state.contact = {
            ...this.state.contact,
            ...data
        }
        this.saveState()
    }

    // Update newsletter data
    updateNewsletter(data: Partial<NewsletterData>): void {
        this.state.newsletter = {
            ...this.state.newsletter,
            ...data
        }
        this.saveState()
    }

    // Mark project as submitted
    markProjectSubmitted(submissionId: string): void {
        this.state.hasSubmittedProject = true
        this.state.project = {
            ...this.state.project,
            submissionId,
            submittedAt: new Date().toISOString()
        }
        this.saveState()
    }

    // Mark contact as submitted
    markContactSubmitted(submissionId: string): void {
        this.state.hasSubmittedContact = true
        this.state.contact = {
            ...this.state.contact,
            submissionId,
            submittedAt: new Date().toISOString()
        }
        this.saveState()
    }

    // Mark newsletter as subscribed
    markNewsletterSubscribed(source?: string): void {
        this.state.hasSubscribedNewsletter = true
        this.state.newsletter = {
            ...this.state.newsletter,
            subscribedAt: new Date().toISOString(),
            source
        }
        this.saveState()
    }

    // Set user preferences
    setPreferences(prefs: { preferredContactMethod?: 'email' | 'phone' | 'whatsapp' }): void {
        this.state = {
            ...this.state,
            ...prefs
        }
        this.saveState()
    }

    // Check if user has submitted forms
    hasSubmittedProject(): boolean {
        return this.state.hasSubmittedProject === true
    }

    hasSubmittedContact(): boolean {
        return this.state.hasSubmittedContact === true
    }

    hasSubscribedNewsletter(): boolean {
        return this.state.hasSubscribedNewsletter === true
    }

    // Get form data for pre-filling
    getProjectFormData(): ProjectFormData {
        return this.state.project || {}
    }

    getContactFormData(): ContactFormData {
        return this.state.contact || {}
    }

    getNewsletterData(): NewsletterData {
        return this.state.newsletter || {}
    }

    // Check if user is returning (has any previous interaction)
    isReturningUser(): boolean {
        return !!this.state.lastInteractionAt
    }

    // Get days since last interaction
    getDaysSinceLastInteraction(): number {
        if (!this.state.lastInteractionAt) return 0

        const lastInteraction = new Date(this.state.lastInteractionAt)
        const now = new Date()
        const diffTime = Math.abs(now.getTime() - lastInteraction.getTime())
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

        return diffDays
    }

    // Clear all data
    clearAllData(): void {
        this.state = {}
        cookieUtils.remove(FORM_STATE_COOKIE)
        cookieUtils.remove(USER_PREFERENCES_COOKIE)
    }

    // Clear specific form data
    clearProjectData(): void {
        this.state.project = {}
        this.state.hasSubmittedProject = false
        this.saveState()
    }

    clearContactData(): void {
        this.state.contact = {}
        this.state.hasSubmittedContact = false
        this.saveState()
    }

    clearNewsletterData(): void {
        this.state.newsletter = {}
        this.state.hasSubscribedNewsletter = false
        this.saveState()
    }

    // Get user journey insights
    getUserJourney(): {
        isReturning: boolean
        daysSinceLastVisit: number
        completedActions: string[]
        suggestedNextActions: string[]
    } {
        const completedActions: string[] = []
        const suggestedNextActions: string[] = []

        if (this.hasSubmittedProject()) {
            completedActions.push('project-submission')
        } else {
            suggestedNextActions.push('submit-project')
        }

        if (this.hasSubmittedContact()) {
            completedActions.push('contact-submission')
        } else if (this.hasSubmittedProject()) {
            suggestedNextActions.push('contact-us')
        }

        if (this.hasSubscribedNewsletter()) {
            completedActions.push('newsletter-subscription')
        } else {
            suggestedNextActions.push('subscribe-newsletter')
        }

        return {
            isReturning: this.isReturningUser(),
            daysSinceLastVisit: this.getDaysSinceLastInteraction(),
            completedActions,
            suggestedNextActions
        }
    }
}

// Export singleton instance
export const formPersistence = FormPersistenceManager.getInstance()

// React hook for form persistence
export function useFormPersistence() {
    return formPersistence
}
