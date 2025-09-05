import { createClient } from '@supabase/supabase-js'

// Supabase configuration
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error(
        'Missing Supabase environment variables. Please check your .env.local file and ensure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY are set.'
    )
}

// Create Supabase client
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: true
    }
})

// Database types (you can generate these from your Supabase schema)
export interface Database {
    public: {
        Tables: {
            project_submissions: {
                Row: {
                    id: string
                    created_at: string
                    updated_at: string
                    name: string
                    email: string
                    phone?: string
                    company_name?: string
                    company_size?: string
                    industry?: string
                    project_title?: string
                    project_type?: string
                    project_description?: string
                    target_audience?: string
                    existing_website_url?: string
                    has_existing_branding?: boolean
                    features?: string[]
                    preferred_timeline?: string
                    launch_date?: string
                    budget?: string
                    budget_flexibility?: boolean
                    special_requirements?: string
                    referral_source?: string
                    status: 'pending' | 'in_review' | 'approved' | 'rejected' | 'completed'
                    priority: 'low' | 'medium' | 'high' | 'urgent'
                    notes?: string
                    assigned_to?: string
                }
                Insert: {
                    id?: string
                    created_at?: string
                    updated_at?: string
                    name: string
                    email: string
                    phone?: string
                    company_name?: string
                    company_size?: string
                    industry?: string
                    project_title?: string
                    project_type?: string
                    project_description?: string
                    target_audience?: string
                    existing_website_url?: string
                    has_existing_branding?: boolean
                    features?: string[]
                    preferred_timeline?: string
                    launch_date?: string
                    budget?: string
                    budget_flexibility?: boolean
                    special_requirements?: string
                    referral_source?: string
                    status?: 'pending' | 'in_review' | 'approved' | 'rejected' | 'completed'
                    priority?: 'low' | 'medium' | 'high' | 'urgent'
                    notes?: string
                    assigned_to?: string
                }
                Update: {
                    id?: string
                    created_at?: string
                    updated_at?: string
                    name?: string
                    email?: string
                    phone?: string
                    company_name?: string
                    company_size?: string
                    industry?: string
                    project_title?: string
                    project_type?: string
                    project_description?: string
                    target_audience?: string
                    existing_website_url?: string
                    has_existing_branding?: boolean
                    features?: string[]
                    preferred_timeline?: string
                    launch_date?: string
                    budget?: string
                    budget_flexibility?: boolean
                    special_requirements?: string
                    referral_source?: string
                    status?: 'pending' | 'in_review' | 'approved' | 'rejected' | 'completed'
                    priority?: 'low' | 'medium' | 'high' | 'urgent'
                    notes?: string
                    assigned_to?: string
                }
            }
            contact_submissions: {
                Row: {
                    id: string
                    created_at: string
                    name: string
                    email: string
                    company?: string
                    subject?: string
                    message: string
                    status: 'unread' | 'read' | 'replied' | 'archived'
                    priority: 'low' | 'medium' | 'high'
                }
                Insert: {
                    id?: string
                    created_at?: string
                    name: string
                    email: string
                    company?: string
                    subject?: string
                    message: string
                    status?: 'unread' | 'read' | 'replied' | 'archived'
                    priority?: 'low' | 'medium' | 'high'
                }
                Update: {
                    id?: string
                    created_at?: string
                    name?: string
                    email?: string
                    company?: string
                    subject?: string
                    message?: string
                    status?: 'unread' | 'read' | 'replied' | 'archived'
                    priority?: 'low' | 'medium' | 'high'
                }
            }
            newsletter_subscribers: {
                Row: {
                    id: string
                    created_at: string
                    email: string
                    status: 'subscribed' | 'unsubscribed'
                    source?: string
                    tags?: string[]
                }
                Insert: {
                    id?: string
                    created_at?: string
                    email: string
                    status?: 'subscribed' | 'unsubscribed'
                    source?: string
                    tags?: string[]
                }
                Update: {
                    id?: string
                    created_at?: string
                    email?: string
                    status?: 'subscribed' | 'unsubscribed'
                    source?: string
                    tags?: string[]
                }
            }
        }
    }
}

// Helper functions for common operations
export const supabaseHelpers = {
    // Project submissions
    async createProjectSubmission(data: Database['public']['Tables']['project_submissions']['Insert']) {
        const { data: result, error } = await supabase
            .from('project_submissions')
            .insert(data)
            .select()
            .single()

        if (error) throw error
        return result
    },

    async getProjectSubmissions() {
        const { data, error } = await supabase
            .from('project_submissions')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) throw error
        return data
    },

    async updateProjectSubmission(id: string, updates: Database['public']['Tables']['project_submissions']['Update']) {
        const { data, error } = await supabase
            .from('project_submissions')
            .update({ ...updates, updated_at: new Date().toISOString() })
            .eq('id', id)
            .select()
            .single()

        if (error) throw error
        return data
    },

    // Contact submissions
    async createContactSubmission(data: Database['public']['Tables']['contact_submissions']['Insert']) {
        const { data: result, error } = await supabase
            .from('contact_submissions')
            .insert(data)
            .select()
            .single()

        if (error) throw error
        return result
    },

    async getContactSubmissions() {
        const { data, error } = await supabase
            .from('contact_submissions')
            .select('*')
            .order('created_at', { ascending: false })

        if (error) throw error
        return data
    },

    // Newsletter subscribers
    async subscribeToNewsletter(email: string, source?: string) {
        const { data, error } = await supabase
            .from('newsletter_subscribers')
            .upsert(
                { email, status: 'subscribed', source },
                { onConflict: 'email' }
            )
            .select()
            .single()

        if (error) throw error
        return data
    },

    async getNewsletterSubscribers() {
        const { data, error } = await supabase
            .from('newsletter_subscribers')
            .select('*')
            .eq('status', 'subscribed')
            .order('created_at', { ascending: false })

        if (error) throw error
        return data
    }
}

export default supabase
