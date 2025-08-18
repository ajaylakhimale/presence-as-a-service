# Supabase Integration Setup Guide

This project now includes Supabase integration for handling all form data. Follow these steps to set up your Supabase backend:

## 1. Create a Supabase Project

1. Go to [https://supabase.com/dashboard](https://supabase.com/dashboard)
2. Click "New Project"
3. Choose your organization and create a new project
4. Wait for the project to be created (takes ~2 minutes)

## 2. Get Your Project Credentials

1. Go to **Settings > API** in your Supabase dashboard
2. Copy your **Project URL** and **Anon Key**

## 3. Configure Environment Variables

1. Create a `.env` file in the root of your project
2. Add your Supabase credentials:

```env
VITE_SUPABASE_URL=your-project-url-here
VITE_SUPABASE_ANON_KEY=your-anon-key-here
```

## 4. Set Up Database Tables

1. Go to **SQL Editor** in your Supabase dashboard
2. Copy and paste the contents of `supabase-setup.sql` 
3. Run the SQL script to create all necessary tables

## 5. Test Your Integration

1. Start your development server: `npm run dev`
2. Try submitting any form (Contact, Onboarding, Quote, etc.)
3. Check your Supabase dashboard under **Table Editor** to see the submitted data

## Forms Integrated

The following forms now save data to Supabase:

- **Contact Form** (`/contact`) → `contact_forms` table
- **Onboarding Form** (`/onboarding`) → `onboarding_forms` table  
- **Connected Systems Quote** (`/connected-systems/quote`) → `connected_systems_quotes` table
- **Testimonial Form** (`/testimonials`) → `testimonial_forms` table
- **Project Info Form** (Client Dashboard) → `project_info_forms` table

## Features Added

✅ **Database Integration**: All forms save to Supabase tables
✅ **Loading States**: Forms show loading indicators during submission
✅ **Success/Error Handling**: Toast notifications for submission status
✅ **Conditional Rendering**: Success messages after form submission
✅ **Data Validation**: Basic validation before database insertion
✅ **Error Recovery**: Graceful error handling with user feedback

## Database Schema

Each table includes:
- Unique UUID primary key
- All form fields as appropriate columns
- Created timestamp for tracking
- Row Level Security (RLS) enabled
- Policies for secure form submissions

## Next Steps

1. **Admin Dashboard**: Consider building an admin interface to view submitted forms
2. **Email Notifications**: Set up email notifications when forms are submitted
3. **Data Analytics**: Add analytics to track form submission patterns
4. **File Uploads**: Implement file upload functionality for forms that need it
5. **Form Validation**: Add more robust client-side and server-side validation

## Troubleshooting

- **Environment Variables**: Make sure your `.env` file is in the project root and not committed to git
- **CORS Issues**: Check that your domain is added to Supabase's allowed origins in Settings > API
- **RLS Policies**: Ensure the insert policies are correctly set up if you're getting permission errors
- **Console Errors**: Check browser console for any JavaScript errors during form submission

## Security Notes

- The anon key is safe to use in client-side code
- Row Level Security policies control data access
- Never commit your `.env` file to version control
- Consider setting up different environments (dev/staging/prod) with separate Supabase projects
