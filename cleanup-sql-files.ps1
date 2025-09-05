# SQL Files Cleanup Script
# Run this in PowerShell from the project root directory

Write-Host "🧹 Cleaning up SQL files..." -ForegroundColor Yellow

# List of SQL files to remove
$sqlFilesToRemove = @(
    "comprehensive-rls-fix.sql",
    "contact-forms-rls-fix.sql", 
    "database-diagnostic.sql",
    "fix-newsletter-rls.sql",
    "newsletter-setup.sql",
    "newsletter-troubleshoot.sql",
    "new-onboarding-migration.sql",
    "plan-onboarding-setup.sql", 
    "pricing-plans-setup.sql",
    "safe-rls-fix.sql",
    "simple-newsletter-setup.sql",
    "supabase-rls-fix.sql",
    "supabase-setup.sql"
)

# Count of files removed
$removedCount = 0

foreach ($file in $sqlFilesToRemove) {
    if (Test-Path $file) {
        Write-Host "❌ Removing: $file" -ForegroundColor Red
        Remove-Item $file -Force
        $removedCount++
    }
    else {
        Write-Host "⚠️  Not found: $file" -ForegroundColor Gray
    }
}

Write-Host ""
Write-Host "✅ Cleanup complete!" -ForegroundColor Green
Write-Host "📊 Removed $removedCount SQL files" -ForegroundColor Cyan

# Keep only the database-reset.sql for reference
Write-Host ""
Write-Host "📝 Keeping files:" -ForegroundColor Blue
Get-ChildItem -Filter "*.sql" | ForEach-Object {
    Write-Host "   📄 $($_.Name)" -ForegroundColor Blue
}

Write-Host ""
Write-Host "🚀 Ready for fresh database setup!" -ForegroundColor Green
