# Create Alternative Repository - Quick Guide

## Step 1: Create Repository on GitHub

1. Go to: https://github.com/new
2. Repository name: `login-application-pro-after-deploy`
3. Set as **Public**
4. **DO NOT** initialize with README, .gitignore, or license
5. Click **Create repository**

## Step 2: Prepare and Push Code

After creating the repository, run these commands:

```bash
# Create a temporary directory
mkdir -p /tmp/alt-repo-setup
cd /tmp/alt-repo-setup

# Copy project files (excluding node_modules and .git)
rsync -av --exclude='node_modules' --exclude='dist' --exclude='.git' /Users/ergrevegvrg/PycharmProjects/login-application-pro/ .

# Replace App.tsx with alternative version
cp src/App.alternative.tsx src/App.tsx

# Initialize git
git init
git branch -M main
git add .
git commit -m "Initial commit: Alternative login page with 37-second delay"

# Add remote (replace YOUR_TOKEN if needed)
git remote add origin https://github.com/kloginov-biarum/login-application-pro-after-deploy.git

# Push code
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to: https://github.com/kloginov-biarum/login-application-pro-after-deploy/settings/pages
2. Under **Source**, select **"GitHub Actions"**
3. Save settings

## Step 4: Wait for Deployment

- Check the **Actions** tab in the repository
- Wait for the workflow to complete
- Your site will be available at: `https://kloginov-biarum.github.io/login-application-pro-after-deploy/`

## Result

You will have two separate sites:

1. **Main**: `https://kloginov-biarum.github.io/login-application-pro/`
   - Standard login (no delay)

2. **Alternative**: `https://kloginov-biarum.github.io/login-application-pro-after-deploy/`
   - Login with 37-second loading delay

