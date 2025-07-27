#!/usr/bin/env node

/**
 * Script to change the website name across all files
 * Usage: node scripts/change-site-name.js "New Name" "new-name"
 */

const fs = require('fs');
const path = require('path');

const newSiteName = process.argv[2];
const newSiteSlug = process.argv[3];

if (!newSiteName || !newSiteSlug) {
  console.error('Usage: node scripts/change-site-name.js "New Site Name" "new-site-slug"');
  process.exit(1);
}

console.log(`Changing site name to: ${newSiteName} (${newSiteSlug})`);

// Files to update
const filesToUpdate = [
  'src/config/site.ts',
  'index.html',
  'package.json',
  'README.md'
];

filesToUpdate.forEach(file => {
  if (fs.existsSync(file)) {
    let content = fs.readFileSync(file, 'utf8');
    
    // Update site name references
    content = content.replace(/name: "WPaaS"/g, `name: "${newSiteName}"`);
    content = content.replace(/fullName: "Web Presence as a Service"/g, `fullName: "${newSiteName}"`);
    content = content.replace(/WPaaS/g, newSiteName);
    content = content.replace(/wpaas/g, newSiteSlug);
    content = content.replace(/presence-as-a-service/g, newSiteSlug);
    
    fs.writeFileSync(file, content);
    console.log(`✅ Updated ${file}`);
  } else {
    console.log(`⚠️  File not found: ${file}`);
  }
});

console.log('\n🎉 Site name updated successfully!');
console.log('\nNext steps:');
console.log('1. Update any hardcoded references in your components');
console.log('2. Update your domain and social media links');
console.log('3. Update your branding assets (logo, favicon, etc.)');
console.log('4. Test the application to ensure everything works correctly'); 