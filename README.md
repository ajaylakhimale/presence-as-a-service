# macro presence

_Crafting Powerful Online Identities_

## Project info

**URL**: https://lovable.dev/projects/00bca338-c0b2-4fba-ae34-ea5b2ee7acca

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/00bca338-c0b2-4fba-ae34-ea5b2ee7acca) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- **Vite** - Fast build tool and development server
- **TypeScript** - Type-safe JavaScript
- **React 18** - Modern React with hooks and functional components
- **React Router** - Client-side routing
- **shadcn/ui** - Beautiful, accessible UI components
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful icons

## Site Configuration

The website name and other site-wide settings are centralized in `src/config/site.ts`. To change the website name:

### Option 1: Manual Update
Edit `src/config/site.ts` and update the `name` and `fullName` properties.

### Option 2: Using the Script
Run the provided script to change the site name across all files:

```bash
node scripts/change-site-name.js "New Site Name" "new-site-slug"
```

This will update:
- Site configuration
- HTML title and meta tags
- Package.json
- README.md
- All component references

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/00bca338-c0b2-4fba-ae34-ea5b2ee7acca) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
