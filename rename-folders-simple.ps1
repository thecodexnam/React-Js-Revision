# Simple Folder Rename Script
# Run from: C:\Users\naman\React-Js Revision

Write-Host "Renaming folders to remove spaces..." -ForegroundColor Green
Write-Host ""

$repoPath = "C:\Users\naman\React-Js Revision"

# Check current directory
if ((Get-Location).Path -ne $repoPath) {
    Write-Host "Changing to repository root..." -ForegroundColor Yellow
    Set-Location $repoPath
}

# Rename parent folder
if (Test-Path "JavaScript Project") {
    Write-Host "Renaming 'JavaScript Project' to 'JavaScript-Project'..." -ForegroundColor Cyan
    Rename-Item -Path "JavaScript Project" -NewName "JavaScript-Project" -ErrorAction Stop
    Write-Host "✓ Done" -ForegroundColor Green
} elseif (Test-Path "JavaScript-Project") {
    Write-Host "✓ 'JavaScript-Project' already exists" -ForegroundColor Green
} else {
    Write-Host "ERROR: 'JavaScript Project' folder not found!" -ForegroundColor Red
    pause
    exit
}

# Rename app folder
if (Test-Path "JavaScript-Project\Weather App") {
    Write-Host "Renaming 'Weather App' to 'Weather-App'..." -ForegroundColor Cyan
    Rename-Item -Path "JavaScript-Project\Weather App" -NewName "Weather-App" -ErrorAction Stop
    Write-Host "✓ Done" -ForegroundColor Green
} elseif (Test-Path "JavaScript-Project\Weather-App") {
    Write-Host "✓ 'Weather-App' already exists" -ForegroundColor Green
} else {
    Write-Host "ERROR: 'Weather App' folder not found!" -ForegroundColor Red
    pause
    exit
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Folders renamed successfully!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Next steps:" -ForegroundColor Yellow
Write-Host "1. Commit changes: git add -A && git commit -m 'Rename folders' && git push" -ForegroundColor White
Write-Host "2. Update Vercel Root Directory to: JavaScript-Project/Weather-App" -ForegroundColor White
Write-Host "3. Redeploy on Vercel" -ForegroundColor White
Write-Host ""

pause
