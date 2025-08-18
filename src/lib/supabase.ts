import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database types for form submissions
export interface ContactForm {
    id?: string
    name: string
    email: string
    company?: string
    subject: string
    message: string
    project_type?: string
    created_at?: string
}

export interface OnboardingForm {
    id?: string
    business_name: string
    business_description: string
    website_goals: string
    has_existing_website: string
    project_types: string[]
    features: string[]
    timeline: string
    budget: string
    pages: string[]
    style_theme: string
    contact_name?: string
    contact_email?: string
    created_at?: string
}

export interface ConnectedSystemsQuote {
    id?: string
    platforms: string[]
    features: string
    contact_name: string
    contact_email: string
    company: string
    created_at?: string
}

export interface TestimonialForm {
    id?: string
    name: string
    company: string
    role: string
    email: string
    plan: string
    rating: number
    testimonial: string
    created_at?: string
}

export interface ProjectInfoForm {
    id?: string
    title: string
    description: string
    industry: string
    type: string
    delivery_time: string
    start_date: string
    budget: string
    features: string[]
    pages: string[]
    contact_name?: string
    contact_email?: string
    created_at?: string
}

// Helper functions for database operations
export const insertContactForm = async (data: ContactForm) => {
    const { data: result, error } = await supabase
        .from('contact_forms')
        .insert([data])
        .select()
        .single()

    if (error) throw error
    return result
}

export const insertOnboardingForm = async (data: OnboardingForm) => {
    const { data: result, error } = await supabase
        .from('onboarding_forms')
        .insert([data])
        .select()
        .single()

    if (error) throw error
    return result
}

export const insertConnectedSystemsQuote = async (data: ConnectedSystemsQuote) => {
    const { data: result, error } = await supabase
        .from('connected_systems_quotes')
        .insert([data])
        .select()
        .single()

    if (error) throw error
    return result
}

export const insertTestimonialForm = async (data: TestimonialForm) => {
    const { data: result, error } = await supabase
        .from('testimonial_forms')
        .insert([data])
        .select()
        .single()

    if (error) throw error
    return result
}

export const insertProjectInfoForm = async (data: ProjectInfoForm) => {
    const { data: result, error } = await supabase
        .from('project_info_forms')
        .insert([data])
        .select()
        .single()

    if (error) throw error
    return result
}
