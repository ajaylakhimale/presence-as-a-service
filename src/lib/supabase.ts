import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://your-project.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'your-anon-key'

// Debug logging
console.log('Supabase URL:', supabaseUrl);
console.log('Supabase Key exists:', !!supabaseAnonKey);
console.log('Supabase Key length:', supabaseAnonKey.length);
console.log('Supabase Key preview:', supabaseAnonKey.substring(0, 50) + '...');

// Validate environment variables
if (!supabaseUrl || supabaseUrl === 'https://your-project.supabase.co') {
    console.error('❌ VITE_SUPABASE_URL is not set or is using default value');
}

if (!supabaseAnonKey || supabaseAnonKey === 'your-anon-key') {
    console.error('❌ VITE_SUPABASE_ANON_KEY is not set or is using default value');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
        autoRefreshToken: false,
        persistSession: false,
        detectSessionInUrl: false
    }
})

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
    try {
        console.log('🔍 Attempting to insert contact form data:', data);

        // Use the same approach as the working onboarding form
        const { data: result, error } = await supabase
            .from('contact_forms')
            .insert([data])

        if (error) {
            console.error('❌ Supabase error:', error);
            console.error('Error details:', {
                message: error.message,
                code: error.code,
                details: error.details,
                hint: error.hint
            });

            if (error.message.includes('relation "contact_forms" does not exist')) {
                throw new Error('Database tables not found. Please run the setup SQL script in your Supabase dashboard.');
            }

            if (error.message.includes('permission denied') || error.message.includes('RLS') || error.code === '42501') {
                throw new Error('Database permission denied. Please check your RLS policies in Supabase.');
            }

            if (error.code === 'PGRST301' || error.message.includes('JWT')) {
                throw new Error('Authentication failed. Please check your Supabase configuration.');
            }

            throw error;
        }

        console.log('✅ Contact form inserted successfully:', result);
        return result;
    } catch (error) {
        console.error('❌ Error in insertContactForm:', error);
        throw error;
    }
}

export const insertOnboardingForm = async (data: OnboardingForm) => {
    try {
        console.log('🔍 Attempting to insert onboarding form data:', data);

        // First, let's try a simple insert without .select() to avoid the complex URL
        const { data: result, error } = await supabase
            .from('onboarding_forms')
            .insert([data])

        if (error) {
            console.error('❌ Supabase error:', error);
            console.error('Error details:', {
                message: error.message,
                code: error.code,
                details: error.details,
                hint: error.hint
            });

            if (error.message.includes('relation "onboarding_forms" does not exist')) {
                throw new Error('Database tables not found. Please run the setup SQL script in your Supabase dashboard.');
            }

            if (error.message.includes('permission denied') || error.message.includes('RLS') || error.code === '42501') {
                throw new Error('Database permission denied. Please check your RLS policies in Supabase.');
            }

            if (error.code === 'PGRST301' || error.message.includes('JWT')) {
                throw new Error('Authentication failed. Please check your Supabase configuration.');
            }

            throw error;
        }

        console.log('✅ Onboarding form inserted successfully:', result);
        return result;
    } catch (error) {
        console.error('❌ Error in insertOnboardingForm:', error);
        throw error;
    }
}

export const insertConnectedSystemsQuote = async (data: ConnectedSystemsQuote) => {
    try {
        const { data: result, error } = await supabase
            .from('connected_systems_quotes')
            .insert([data])
            .select()
            .single()

        if (error) {
            console.error('Supabase error:', error);

            if (error.message.includes('relation "connected_systems_quotes" does not exist')) {
                throw new Error('Database tables not found. Please run the setup SQL script in your Supabase dashboard.');
            }

            if (error.message.includes('permission denied') || error.message.includes('RLS')) {
                throw new Error('Database permission denied. Please check your RLS policies in Supabase.');
            }

            throw error;
        }

        return result;
    } catch (error) {
        console.error('Error in insertConnectedSystemsQuote:', error);
        throw error;
    }
}

export const insertTestimonialForm = async (data: TestimonialForm) => {
    try {
        const { data: result, error } = await supabase
            .from('testimonial_forms')
            .insert([data])
            .select()
            .single()

        if (error) {
            console.error('Supabase error:', error);

            if (error.message.includes('relation "testimonial_forms" does not exist')) {
                throw new Error('Database tables not found. Please run the setup SQL script in your Supabase dashboard.');
            }

            if (error.message.includes('permission denied') || error.message.includes('RLS')) {
                throw new Error('Database permission denied. Please check your RLS policies in Supabase.');
            }

            throw error;
        }

        return result;
    } catch (error) {
        console.error('Error in insertTestimonialForm:', error);
        throw error;
    }
}

export const insertProjectInfoForm = async (data: ProjectInfoForm) => {
    try {
        const { data: result, error } = await supabase
            .from('project_info_forms')
            .insert([data])
            .select()
            .single()

        if (error) {
            console.error('Supabase error:', error);

            if (error.message.includes('relation "project_info_forms" does not exist')) {
                throw new Error('Database tables not found. Please run the setup SQL script in your Supabase dashboard.');
            }

            if (error.message.includes('permission denied') || error.message.includes('RLS')) {
                throw new Error('Database permission denied. Please check your RLS policies in Supabase.');
            }

            throw error;
        }

        return result;
    } catch (error) {
        console.error('Error in insertProjectInfoForm:', error);
        throw error;
    }
}
