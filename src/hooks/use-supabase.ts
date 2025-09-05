import { useState, useEffect } from 'react'
import { supabase, supabaseHelpers, Database } from '../lib/supabase'
import { User, Session } from '@supabase/supabase-js'

// Auth hook
export function useAuth() {
    const [user, setUser] = useState<User | null>(null)
    const [session, setSession] = useState<Session | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        // Get initial session
        supabase.auth.getSession().then(({ data: { session } }) => {
            setSession(session)
            setUser(session?.user ?? null)
            setLoading(false)
        })

        // Listen for auth changes
        const {
            data: { subscription },
        } = supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
            setUser(session?.user ?? null)
            setLoading(false)
        })

        return () => subscription.unsubscribe()
    }, [])

    return {
        user,
        session,
        loading,
        signOut: () => supabase.auth.signOut(),
    }
}

// Project submissions hook
export function useProjectSubmissions() {
    const [submissions, setSubmissions] = useState<Database['public']['Tables']['project_submissions']['Row'][]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchSubmissions = async () => {
        try {
            setLoading(true)
            const data = await supabaseHelpers.getProjectSubmissions()
            setSubmissions(data || [])
            setError(null)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch submissions')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSubmissions()
    }, [])

    const createSubmission = async (data: Database['public']['Tables']['project_submissions']['Insert']) => {
        try {
            const result = await supabaseHelpers.createProjectSubmission(data)
            setSubmissions(prev => [result, ...prev])
            return result
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create submission')
            throw err
        }
    }

    const updateSubmission = async (id: string, updates: Database['public']['Tables']['project_submissions']['Update']) => {
        try {
            const result = await supabaseHelpers.updateProjectSubmission(id, updates)
            setSubmissions(prev => prev.map(sub => sub.id === id ? result : sub))
            return result
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to update submission')
            throw err
        }
    }

    return {
        submissions,
        loading,
        error,
        createSubmission,
        updateSubmission,
        refetch: fetchSubmissions
    }
}

// Contact submissions hook
export function useContactSubmissions() {
    const [submissions, setSubmissions] = useState<Database['public']['Tables']['contact_submissions']['Row'][]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)

    const fetchSubmissions = async () => {
        try {
            setLoading(true)
            const data = await supabaseHelpers.getContactSubmissions()
            setSubmissions(data || [])
            setError(null)
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch contact submissions')
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchSubmissions()
    }, [])

    const createSubmission = async (data: Database['public']['Tables']['contact_submissions']['Insert']) => {
        try {
            const result = await supabaseHelpers.createContactSubmission(data)
            setSubmissions(prev => [result, ...prev])
            return result
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to create contact submission')
            throw err
        }
    }

    return {
        submissions,
        loading,
        error,
        createSubmission,
        refetch: fetchSubmissions
    }
}

// Newsletter hook
export function useNewsletter() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const subscribe = async (email: string, source?: string) => {
        try {
            setLoading(true)
            setError(null)
            const result = await supabaseHelpers.subscribeToNewsletter(email, source)
            return result
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to subscribe'
            setError(errorMessage)
            throw new Error(errorMessage)
        } finally {
            setLoading(false)
        }
    }

    return {
        subscribe,
        loading,
        error
    }
}

// Database connection test hook
export function useSupabaseConnection() {
    const [isConnected, setIsConnected] = useState<boolean | null>(null)
    const [error, setError] = useState<string | null>(null)

    const testConnection = async () => {
        try {
            // Simple test query to check connection
            const { data, error } = await supabase
                .from('project_submissions')
                .select('count', { count: 'exact', head: true })

            if (error) {
                setIsConnected(false)
                setError(error.message)
            } else {
                setIsConnected(true)
                setError(null)
            }
        } catch (err) {
            setIsConnected(false)
            setError(err instanceof Error ? err.message : 'Connection test failed')
        }
    }

    useEffect(() => {
        testConnection()
    }, [])

    return {
        isConnected,
        error,
        testConnection
    }
}
