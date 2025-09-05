# AI Agent Prompt: Admin Dashboard for Form Data Management

## Project Overview
Build a comprehensive admin dashboard UI for managing form submissions from a web application. The system has three main data tables with specific schemas that need to be displayed and managed through a modern React interface.

## Database Schema Information

### 1. Project Submissions Table: `project_submissions`
**Primary table for onboarding form data with comprehensive project details**

#### Required Fields:
- `id` (UUID, Primary Key)
- `created_at` (Timestamp)
- `updated_at` (Timestamp)
- `name` (String) - Contact person's full name
- `email` (String) - Contact email address

#### Contact Information:
- `phone` (String, Optional) - Phone number
- `company_name` (String, Optional) - Company name
- `company_size` (String, Optional) - Values: 'freelancer', 'small', 'medium', 'large', 'enterprise'
- `industry` (String, Optional) - Industry type

#### Project Details:
- `project_title` (String, Optional) - Project name/title
- `project_type` (String, Optional) - Type of project/plan selected
- `project_description` (Text, Optional) - Detailed project description
- `target_audience` (Text, Optional) - Target audience description
- `existing_website_url` (String, Optional) - Current website URL
- `has_existing_branding` (Boolean, Optional) - Whether client has existing brand materials
- `features` (String Array, Optional) - Selected add-ons/features

#### Timeline & Budget:
- `preferred_timeline` (String, Optional) - Values: 'asap', '1-month', '2-3-months', 'flexible'
- `launch_date` (Date, Optional) - Specific launch date if provided
- `budget` (String, Optional) - Budget amount
- `budget_flexibility` (Boolean, Optional) - Whether budget is flexible

#### Additional Information:
- `special_requirements` (Text, Optional) - Special requirements or notes
- `referral_source` (String, Optional) - How they heard about us

#### System Fields:
- `status` (String) - Values: 'pending', 'in_review', 'approved', 'rejected', 'completed'
- `priority` (String) - Values: 'low', 'medium', 'high', 'urgent'
- `notes` (Text, Optional) - Internal admin notes
- `assigned_to` (String, Optional) - Staff member assigned

### 2. Contact Submissions Table: `contact_submissions`
**For general contact form inquiries**

#### Fields:
- `id` (UUID, Primary Key)
- `created_at` (Timestamp)
- `name` (String, Required) - Contact person's name
- `email` (String, Required) - Contact email
- `company` (String, Optional) - Company name
- `subject` (String, Optional) - Message subject
- `message` (Text, Required) - Contact message
- `status` (String) - Values: 'unread', 'read', 'replied', 'resolved'
- `priority` (String) - Values: 'low', 'medium', 'high', 'urgent'

### 3. Newsletter Subscribers Table: `newsletter_subscribers`
**For newsletter subscription management**

#### Fields:
- `id` (UUID, Primary Key)
- `created_at` (Timestamp)
- `email` (String, Required, Unique) - Subscriber email
- `status` (String) - Values: 'subscribed', 'unsubscribed', 'bounced'
- `source` (String, Optional) - Where they subscribed from
- `tags` (String Array, Optional) - Subscriber tags/categories

## Required UI Components

### 1. Main Dashboard Overview
- **Summary cards** showing total counts for each form type
- **Recent submissions** from all forms (last 10-20)
- **Status distribution** charts/graphs
- **Quick action buttons** for common tasks

### 2. Project Submissions Management
- **Data table** with pagination, sorting, and filtering
- **Columns to display:**
  - Name, Email, Company
  - Project Title, Project Type
  - Status, Priority, Created Date
  - Actions (View, Edit, Delete)
- **Detailed view modal** showing all project fields
- **Status update functionality** (pending → in_review → approved/rejected → completed)
- **Assignment functionality** (assign to team members)
- **Search and filter by:**
  - Status, Priority, Company Size, Industry
  - Date range, Project Type, Referral Source
- **Export functionality** (CSV, PDF)
- **Bulk actions** (update status, assign, delete)

### 3. Contact Submissions Management
- **Data table** with similar functionality as projects
- **Columns:** Name, Email, Subject, Status, Priority, Date
- **Quick reply functionality** (mark as replied)
- **Message preview** in table rows
- **Filter by status** and priority

### 4. Newsletter Subscribers Management
- **Subscriber list** with email, source, status, subscription date
- **Bulk unsubscribe/resubscribe**
- **Tag management** (add/remove tags)
- **Export subscriber lists**
- **Subscription analytics** (growth over time, sources)

## Technical Requirements

### Frontend Framework
- **React with TypeScript**
- **Modern UI library** (Tailwind CSS + shadcn/ui components preferred)
- **State management** (React Query/TanStack Query for server state)
- **Routing** (React Router)

### Data Fetching
- **Supabase client** for database operations
- **Real-time subscriptions** for live updates
- **Proper error handling** and loading states
- **Optimistic updates** where appropriate

### Key Features to Implement
1. **Authentication** - Admin login system
2. **Responsive design** - Mobile and desktop friendly
3. **Real-time updates** - Live data refresh
4. **Search and filtering** - Advanced query capabilities
5. **Data export** - CSV/PDF export functionality
6. **Bulk operations** - Select multiple items for batch actions
7. **Form validation** - When editing data
8. **Confirmation dialogs** - For destructive actions
9. **Toast notifications** - For user feedback
10. **Loading skeletons** - For better UX

### Sample UI Structure
```
/admin
├── /dashboard (overview with stats)
├── /projects (project submissions management)
├── /contacts (contact form management)
├── /newsletter (subscriber management)
├── /settings (admin settings)
```

### Essential Components to Build
1. **DataTable** - Reusable table with sorting, filtering, pagination
2. **StatusBadge** - Visual status indicators
3. **PriorityBadge** - Priority level indicators
4. **DetailModal** - Full record view/edit
5. **BulkActionBar** - Actions for selected items
6. **ExportButton** - Data export functionality
7. **SearchBar** - Global and table-specific search
8. **FilterPanel** - Advanced filtering options
9. **StatsCards** - Dashboard metrics
10. **ActivityFeed** - Recent actions/changes

## Database Integration Code Example

```typescript
// Supabase query example for projects
const { data: projects, error } = await supabase
  .from('project_submissions')
  .select('*')
  .order('created_at', { ascending: false })
  .range(0, 49); // Pagination

// Update status example
const { error } = await supabase
  .from('project_submissions')
  .update({ status: 'in_review', updated_at: new Date().toISOString() })
  .eq('id', projectId);

// Search example
const { data } = await supabase
  .from('project_submissions')
  .select('*')
  .ilike('name', `%${searchTerm}%`)
  .or(`email.ilike.%${searchTerm}%,company_name.ilike.%${searchTerm}%`);
```

## Success Criteria
- [ ] Can view all form submissions in organized tables
- [ ] Can filter and search through large datasets efficiently
- [ ] Can update statuses and manage workflow
- [ ] Can export data for reporting
- [ ] Can handle bulk operations on multiple records
- [ ] Real-time updates when new submissions arrive
- [ ] Mobile-responsive design
- [ ] Fast performance with large datasets (1000+ records)
- [ ] Proper error handling and user feedback
- [ ] Secure admin authentication

## Additional Notes
- The project submissions table is the most complex with 20+ fields
- Status workflow is important for project management
- Newsletter management needs GDPR compliance considerations
- Export functionality should include all relevant fields
- Consider implementing role-based permissions for different admin levels
- Add data validation when editing records
- Include audit trails for important changes

This admin dashboard will be the central hub for managing all customer interactions and project workflows from the web application forms.
