#!/bin/bash

# Script to setup GitHub repository and deploy

REPO_NAME="login-application-pro"
GITHUB_USER="kloginov-biarum"

echo "Setting up GitHub repository..."

# Check if remote already exists
if git remote get-url origin &>/dev/null; then
    echo "Remote 'origin' already exists. Removing..."
    git remote remove origin
fi

# Add remote
echo "Adding remote repository..."
git remote add origin https://github.com/${GITHUB_USER}/${REPO_NAME}.git

# Push to GitHub
echo "Pushing code to GitHub..."
git push -u origin main

echo ""
echo "✅ Repository setup complete!"
echo ""
echo "Next steps:"
echo "1. Go to https://github.com/${GITHUB_USER}/${REPO_NAME}/settings/pages"
echo "2. Under 'Source', select 'GitHub Actions'"
echo "3. Wait for the deployment to complete in the Actions tab"
echo "4. Your app will be available at: https://${GITHUB_USER}.github.io/${REPO_NAME}/"

