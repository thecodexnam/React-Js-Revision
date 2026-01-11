# Automated Script: Rename Folders and Prepare for Deployment
# Run this script from the repository root

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Weather App - Automated Setup Script" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

$repoRoot = "C:\Users\naman\React-Js Revision"
$oldParentDir = "JavaScript Project"
$newParentDir = "JavaScript-Project"
$oldAppDir = "Weather App"
$newAppDir = "Weather-App"

# Check if we're in the right location
$currentDir = Get-Location
if ($currentDir.Path -ne $repoRoot) {
    Write-Host "Changing to repository root..." -ForegroundColor Yellow
    Set-Location $repoRoot
}

Write-Host "Step 1: Checking current folder structure..." -ForegroundColor Green
Write-Host ""

# Check if folders exist
$parentPath = Join-Path $repoRoot $oldParentDir
$appPath = Join-Path $parentPath $oldAppDir

if (-not (Test-Path $parentPath)) {
    Write-Host "ERROR: '$oldParentDir' folder not found!" -ForegroundColor Red
    Write-Host "Please run this script from: $repoRoot" -ForegroundColor Yellow
    pause
    exit
}

if (-not (Test-Path $appPath)) {
    Write-Host "ERROR: '$oldAppDir' folder not found!" -ForegroundColor Red
    Write-Host "Please run this script from: $repoRoot" -ForegroundColor Yellow
    pause
    exit
}

Write-Host "Current structure found:" -ForegroundColor Green
Write-Host "  - $oldParentDir\$oldAppDir" -ForegroundColor Gray
Write-Host ""

# Check if already renamed
$newParentPath = Join-Path $repoRoot $newParentDir
if (Test-Path $newParentPath) {
    Write-Host "It looks like folders may have already been renamed." -ForegroundColor Yellow
    $continue = Read-Host "Do you want to continue anyway? (y/n)"
    if ($continue -ne "y" -and $continue -ne "Y") {
        exit
    }
}

Write-Host "Step 2: Renaming folders..." -ForegroundColor Green
Write-Host ""

try {
    # Rename parent directory
    $parentFullPath = Join-Path $repoRoot $oldParentDir
    $newParentFullPath = Join-Path $repoRoot $newParentDir
    
    if (Test-Path $parentFullPath) {
        Write-Host "Renaming '$oldParentDir' to '$newParentDir'..." -ForegroundColor Cyan
        Rename-Item -Path $parentFullPath -NewName $newParentDir -ErrorAction Stop
        Write-Host "  ✓ Parent directory renamed" -ForegroundColor Green
    }
    
    # Rename app directory
    $appFullPath = Join-Path $newParentFullPath $oldAppDir
    $newAppFullPath = Join-Path $newParentFullPath $newAppDir
    
    if (Test-Path $appFullPath) {
        Write-Host "Renaming '$oldAppDir' to '$newAppDir'..." -ForegroundColor Cyan
        Rename-Item -Path $appFullPath -NewName $newAppDir -ErrorAction Stop
        Write-Host "  ✓ App directory renamed" -ForegroundColor Green
    }
    
    Write-Host ""
    Write-Host "Folders renamed successfully!" -ForegroundColor Green
    Write-Host "  - $newParentDir\$newAppDir" -ForegroundColor Gray
    Write-Host ""
    
} catch {
    Write-Host ""
    Write-Host "ERROR: Failed to rename folders" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host ""
    Write-Host "Please rename manually:" -ForegroundColor Yellow
    Write-Host "  1. '$oldParentDir' → '$newParentDir'" -ForegroundColor Yellow
    Write-Host "  2. '$oldAppDir' → '$newAppDir'" -ForegroundColor Yellow
    pause
    exit
}

Write-Host "Step 3: Preparing Git commit..." -ForegroundColor Green
Write-Host ""

# Check if git is initialized
$gitDir = Join-Path $repoRoot ".git"
if (-not (Test-Path $gitDir)) {
    Write-Host "Initializing git repository..." -ForegroundColor Cyan
    git init
}

Write-Host "Adding all changes to git..." -ForegroundColor Cyan
git add -A

Write-Host ""
Write-Host "Checking git status..." -ForegroundColor Cyan
$status = git status --short
if ($status) {
    Write-Host "Changes to commit:" -ForegroundColor Yellow
    Write-Host $status -ForegroundColor Gray
    Write-Host ""
    
    $commit = Read-Host "Do you want to commit these changes? (y/n)"
    if ($commit -eq "y" -or $commit -eq "Y") {
        $commitMessage = "Rename folders to remove spaces for Vercel deployment"
        Write-Host "Committing changes..." -ForegroundColor Cyan
        git commit -m $commitMessage
        
        Write-Host ""
        Write-Host "✓ Changes committed!" -ForegroundColor Green
        Write-Host ""
        
        $push = Read-Host "Do you want to push to GitHub? (y/n)"
        if ($push -eq "y" -or $push -eq "Y") {
            Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
            git push
            Write-Host "✓ Pushed to GitHub!" -ForegroundColor Green
        }
    }
} else {
    Write-Host "No changes to commit (folders may have already been renamed)" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Setup Complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next Steps:" -ForegroundColor Yellow
Write-Host "1. Go to Vercel Dashboard: https://vercel.com/dashboard" -ForegroundColor White
Write-Host "2. Select your project → Settings → General" -ForegroundColor White
Write-Host "3. Update Root Directory to: $newParentDir\$newAppDir" -ForegroundColor White
Write-Host "4. Save changes" -ForegroundColor White
Write-Host "5. Redeploy your project" -ForegroundColor White
Write-Host ""
Write-Host "Root Directory value: $newParentDir/$newAppDir" -ForegroundColor Cyan
Write-Host ""

pause
