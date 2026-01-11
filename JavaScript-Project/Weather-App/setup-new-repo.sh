#!/bin/bash

echo "========================================"
echo "Weather App - Git Repository Setup"
echo "========================================"
echo ""
echo "This script will help you set up a new Git repository."
echo ""
echo "Step 1: Create a new repository on GitHub first!"
echo "        Go to: https://github.com/new"
echo ""
echo "Step 2: Copy your repository URL (e.g., https://github.com/username/weather-app.git)"
echo ""
read -p "Press Enter to continue..."

echo ""
read -p "Enter your GitHub repository URL: " REPO_URL

echo ""
echo "Initializing Git repository..."
git init

echo ""
echo "Adding all files..."
git add .

echo ""
echo "Creating initial commit..."
git commit -m "Initial commit: Weather App with Vercel deployment"

echo ""
echo "Adding remote repository..."
git remote add origin "$REPO_URL"

echo ""
echo "Setting main branch..."
git branch -M main

echo ""
echo "Pushing to GitHub..."
git push -u origin main

echo ""
echo "========================================"
echo "Setup Complete!"
echo "========================================"
echo ""
echo "Next steps:"
echo "1. Go to vercel.com/new"
echo "2. Import your repository"
echo "3. Set WEATHER_API_KEY environment variable"
echo "4. Deploy!"
echo ""
