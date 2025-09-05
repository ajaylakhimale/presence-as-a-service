import { useState } from 'react'
import { useProjectSubmissions, useContactSubmissions, useNewsletter } from './use-supabase'
import { useProtectedForm } from './use-form-protection'
import { formPersistence, ProjectFormData, ContactFormData } from '../lib/form-persistence'
import { useToast } from './use-toast'

// Enhanced project form hook with protection
export function useProjectForm() {
    const { createSubmission } = useProjectSubmissions()
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        formData,
        updateFormData,
        clearForm,
        isDirty,
        hasUnsavedChanges,
        lastSaved,
        manualSave,
        getNavigationWarning
    } = useProtectedForm<ProjectFormData>('project', {
        name: '',
        email: '',
        phone: '',
        company_name: '',
        company_size: '',
        industry: '',
        project_title: '',
        project_type: '',
        project_description: '',
        target_audience: '',
        existing_website_url: '',
        has_existing_branding: false,
        features: [],
        preferred_timeline: '',
        launch_date: '',
        budget: '',
        budget_flexibility: false,
        special_requirements: '',
        referral_source: ''
    }, {
        saveInterval: 2000,
        warningMessage: "You have unsaved project details. Are you sure you want to leave?"
    })    // Submit form with persistence
    const submitForm = async (finalData: ProjectFormData) => {
        setIsSubmitting(true)
        try {
            // Ensure we have the latest data
            manualSave()

            // Create submission in Supabase
            const submission = await createSubmission({
                name: finalData.name!,
                email: finalData.email!,
                phone: finalData.phone,
                company_name: finalData.company_name,
                company_size: finalData.company_size,
                industry: finalData.industry,
                project_title: finalData.project_title,
                project_type: finalData.project_type!,
                project_description: finalData.project_description,
                target_audience: finalData.target_audience,
                existing_website_url: finalData.existing_website_url,
                has_existing_branding: finalData.has_existing_branding,
                features: finalData.features,
                preferred_timeline: finalData.preferred_timeline,
                launch_date: finalData.launch_date,
                budget: finalData.budget,
                budget_flexibility: finalData.budget_flexibility,
                special_requirements: finalData.special_requirements,
                referral_source: finalData.referral_source,
                status: 'pending',
                priority: 'medium'
            })            // Mark as submitted in persistence
            formPersistence.markProjectSubmitted(submission.id)

            // Clear the form after successful submission
            clearForm()

            toast({
                title: "Success!",
                description: "Your project submission has been received. We'll get back to you soon!",
            })

            return submission
        } catch (error) {
            toast({
                title: "Submission Failed",
                description: "There was an error submitting your project. Please try again.",
                variant: "destructive"
            })
            throw error
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        formData,
        updateFormData,
        submitForm,
        isSubmitting,
        hasSubmitted: formPersistence.hasSubmittedProject(),
        clearForm,
        isDirty,
        hasUnsavedChanges,
        lastSaved,
        manualSave,
        getNavigationWarning
    }
}

// Enhanced contact form hook with protection
export function useContactForm() {
    const { createSubmission } = useContactSubmissions()
    const { toast } = useToast()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const {
        formData,
        updateFormData,
        clearForm,
        isDirty,
        hasUnsavedChanges,
        lastSaved,
        manualSave,
        getNavigationWarning
    } = useProtectedForm<ContactFormData>('contact', {
        name: '',
        email: '',
        company: '',
        subject: '',
        message: ''
    }, {
        saveInterval: 2000,
        warningMessage: "You have unsaved contact information. Are you sure you want to leave?"
    })

    // Submit form with persistence
    const submitForm = async (finalData: ContactFormData) => {
        setIsSubmitting(true)
        try {
            // Ensure we have the latest data
            manualSave()

            // Create submission in Supabase
            const submission = await createSubmission({
                name: finalData.name!,
                email: finalData.email!,
                company: finalData.company,
                subject: finalData.subject,
                message: finalData.message!,
                status: 'unread',
                priority: 'medium'
            })

            // Mark as submitted in persistence
            formPersistence.markContactSubmitted(submission.id)

            // Clear the form after successful submission
            clearForm()

            toast({
                title: "Message Sent!",
                description: "Thank you for contacting us. We'll respond within 24 hours.",
            })

            return submission
        } catch (error) {
            toast({
                title: "Message Failed",
                description: "There was an error sending your message. Please try again.",
                variant: "destructive"
            })
            throw error
        } finally {
            setIsSubmitting(false)
        }
    }

    return {
        formData,
        updateFormData,
        submitForm,
        isSubmitting,
        hasSubmitted: formPersistence.hasSubmittedContact(),
        clearForm,
        isDirty,
        hasUnsavedChanges,
        lastSaved,
        manualSave,
        getNavigationWarning
    }
}

// Enhanced newsletter form hook
export function useNewsletterForm() {
    const { subscribe } = useNewsletter()
    const { toast } = useToast()
    const [isSubscribing, setIsSubscribing] = useState(false)

    const subscribeToNewsletter = async (email: string, source?: string) => {
        setIsSubscribing(true)
        try {
            await subscribe(email, source)
            formPersistence.markNewsletterSubscribed(source)

            toast({
                title: "Subscribed!",
                description: "You've been successfully subscribed to our newsletter.",
            })
        } catch (error) {
            toast({
                title: "Subscription Failed",
                description: "There was an error subscribing to the newsletter. Please try again.",
                variant: "destructive"
            })
            throw error
        } finally {
            setIsSubscribing(false)
        }
    }

    return {
        subscribeToNewsletter,
        isSubscribing,
        hasSubscribed: formPersistence.hasSubscribedNewsletter(),
        clearSubscription: () => formPersistence.clearNewsletterData()
    }
}

// Hook for user journey and conditional rendering
export function useUserJourney() {
    const [userJourney, setUserJourney] = useState(() =>
        formPersistence.getUserJourney()
    )

    const refreshJourney = () => {
        setUserJourney(formPersistence.getUserJourney())
    }

    return {
        ...userJourney,
        refresh: refreshJourney
    }
}

// Hook for conditional form rendering
export function useFormConditionalRender() {
    const journey = useUserJourney()

    return {
        shouldShowProjectForm: !formPersistence.hasSubmittedProject(),
        shouldShowContactForm: !formPersistence.hasSubmittedContact(),
        shouldShowNewsletterSignup: !formPersistence.hasSubscribedNewsletter(),
        shouldShowWelcomeBack: journey.isReturning && journey.daysSinceLastVisit > 0,
        shouldShowProgressIndicator: journey.completedActions.length > 0,
        shouldEncourageNextStep: journey.suggestedNextActions.length > 0,
        completedActions: journey.completedActions,
        suggestedNextActions: journey.suggestedNextActions,
        isReturningUser: journey.isReturning,
        daysSinceLastVisit: journey.daysSinceLastVisit
    }
}
