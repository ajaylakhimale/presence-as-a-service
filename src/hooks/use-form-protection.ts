import { useEffect, useRef, useState, useCallback } from 'react'
import { formPersistence } from '../lib/form-persistence'

interface UseFormStateWarningOptions {
    formName: string
    isDirty: boolean
    hasUnsavedChanges: boolean
    warningMessage?: string
}

export function useFormStateWarning({
    formName,
    isDirty,
    hasUnsavedChanges,
    warningMessage = "You have unsaved changes. Are you sure you want to leave?"
}: UseFormStateWarningOptions) {
    const [showWarning, setShowWarning] = useState(false)
    const hasUnsavedRef = useRef(false)

    // Update ref when unsaved changes status changes
    useEffect(() => {
        hasUnsavedRef.current = hasUnsavedChanges
    }, [hasUnsavedChanges])

    // Browser beforeunload warning
    useEffect(() => {
        const handleBeforeUnload = (e: BeforeUnloadEvent) => {
            if (hasUnsavedRef.current) {
                e.preventDefault()
                e.returnValue = warningMessage
                return warningMessage
            }
        }

        if (isDirty) {
            window.addEventListener('beforeunload', handleBeforeUnload)
            return () => window.removeEventListener('beforeunload', handleBeforeUnload)
        }
    }, [isDirty, warningMessage])

    // Navigation warning for React Router
    const getNavigationWarning = useCallback(() => {
        if (hasUnsavedRef.current) {
            return warningMessage
        }
        return null
    }, [warningMessage])

    return {
        showWarning,
        setShowWarning,
        getNavigationWarning,
        hasUnsavedChanges
    }
}

export function useAutoSaveForm<T extends Record<string, any>>(
    formName: string,
    initialData: T,
    saveInterval: number = 3000 // Auto-save every 3 seconds
) {
    const [formData, setFormData] = useState<T>(() => {
        // Load from persistence on mount
        try {
            const persistedData = formPersistence.getState()
            let savedData: Partial<T> = {}

            if (formName === 'project' && persistedData.project) {
                savedData = persistedData.project as Partial<T>
            } else if (formName === 'contact' && persistedData.contact) {
                savedData = persistedData.contact as Partial<T>
            } else if (formName === 'newsletter' && persistedData.newsletter) {
                savedData = persistedData.newsletter as Partial<T>
            }

            return { ...initialData, ...savedData }
        } catch {
            return initialData
        }
    })

    const [isDirty, setIsDirty] = useState(false)
    const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false)
    const [lastSaved, setLastSaved] = useState<Date | null>(null)
    const saveTimeoutRef = useRef<NodeJS.Timeout>()

    // Auto-save function
    const saveToStorage = useCallback(() => {
        if (isDirty) {
            // Save to cookies/localStorage
            const updateKey = `${formName}_form`
            if (formName === 'project') {
                formPersistence.updateProjectForm(formData as any)
            } else if (formName === 'contact') {
                formPersistence.updateContactForm(formData as any)
            } else if (formName === 'newsletter') {
                formPersistence.updateNewsletter(formData as any)
            }

            setLastSaved(new Date())
            setHasUnsavedChanges(false)
            console.log(`✅ Auto-saved ${formName} form data`)
        }
    }, [formData, isDirty, formName])

    // Update form data with auto-save debouncing
    const updateFormData = useCallback((updates: Partial<T>) => {
        setFormData(prev => ({ ...prev, ...updates }))
        setIsDirty(true)
        setHasUnsavedChanges(true)

        // Clear existing timeout
        if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current)
        }

        // Set new auto-save timeout
        saveTimeoutRef.current = setTimeout(() => {
            saveToStorage()
        }, saveInterval)
    }, [saveToStorage, saveInterval])

    // Manual save function
    const manualSave = useCallback(() => {
        if (saveTimeoutRef.current) {
            clearTimeout(saveTimeoutRef.current)
        }
        saveToStorage()
    }, [saveToStorage])

    // Clear form data
    const clearForm = useCallback(() => {
        if (formName === 'project') {
            formPersistence.clearProjectData()
        } else if (formName === 'contact') {
            formPersistence.clearContactData()
        } else if (formName === 'newsletter') {
            formPersistence.clearNewsletterData()
        }

        setFormData(initialData)
        setIsDirty(false)
        setHasUnsavedChanges(false)
        setLastSaved(null)
    }, [formName, initialData])

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            if (saveTimeoutRef.current) {
                clearTimeout(saveTimeoutRef.current)
            }
            // Final save on unmount if needed
            if (hasUnsavedChanges) {
                saveToStorage()
            }
        }
    }, [hasUnsavedChanges, saveToStorage])

    return {
        formData,
        updateFormData,
        isDirty,
        hasUnsavedChanges,
        lastSaved,
        manualSave,
        clearForm,
        saveToStorage
    }
}

// Hook that combines auto-save with close warnings
export function useProtectedForm<T extends Record<string, any>>(
    formName: string,
    initialData: T,
    options?: {
        saveInterval?: number
        warningMessage?: string
    }
) {
    const {
        formData,
        updateFormData,
        isDirty,
        hasUnsavedChanges,
        lastSaved,
        manualSave,
        clearForm
    } = useAutoSaveForm(formName, initialData, options?.saveInterval)

    const {
        showWarning,
        setShowWarning,
        getNavigationWarning
    } = useFormStateWarning({
        formName,
        isDirty,
        hasUnsavedChanges,
        warningMessage: options?.warningMessage
    })

    return {
        // Form data
        formData,
        updateFormData,
        clearForm,

        // State tracking
        isDirty,
        hasUnsavedChanges,
        lastSaved,

        // Save functions
        manualSave,

        // Warning system
        showWarning,
        setShowWarning,
        getNavigationWarning
    }
}
