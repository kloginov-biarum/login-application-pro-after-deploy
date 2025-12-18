# Quick Setup for Alternative Repository

## Create the Second Site: login-application-pro-after-deploy

### Step 1: Create Repository on GitHub

1. **Go to**: https://github.com/new
2. **Repository name**: `login-application-pro-after-deploy`
3. **Visibility**: Public
4. **DO NOT** check any boxes (no README, .gitignore, or license)
5. Click **"Create repository"**

### Step 2: Prepare Code Locally

Run these commands in your terminal:

```bash
# Navigate to project directory
cd /Users/ergrevegvrg/PycharmProjects/login-application-pro

# Create temporary directory for alternative repo
mkdir -p /tmp/alt-repo
cd /tmp/alt-repo

# Copy all project files (excluding node_modules, dist, .git)
rsync -av --exclude='node_modules' --exclude='dist' --exclude='.git' \
  /Users/ergrevegvrg/PycharmProjects/login-application-pro/ .

# Replace App.tsx with alternative version that uses LoginPageAfterDeploy
cp src/App.alternative.tsx src/App.tsx

# Initialize git repository
git init
git branch -M main
git add .
git commit -m "Initial commit: Alternative login page with 37-second delay"

# Add remote (replace with your actual repo URL if different)
git remote add origin https://github.com/kloginov-biarum/login-application-pro-after-deploy.git

# Push to GitHub
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. **Go to**: https://github.com/kloginov-biarum/login-application-pro-after-deploy/settings/pages
2. Under **"Source"**, select **"GitHub Actions"**
3. Click **"Save"**

### Step 4: Wait for Deployment

1. Go to the **Actions** tab in the repository
2. Wait for the workflow "Deploy to GitHub Pages" to complete
3. Your site will be available at: **https://kloginov-biarum.github.io/login-application-pro-after-deploy/**

## Result

You will now have **two separate sites**:

1. **Main Site**: 
   - URL: `https://kloginov-biarum.github.io/login-application-pro/`
   - Uses standard `LoginPage` (no delay)

2. **Alternative Site**: 
   - URL: `https://kloginov-biarum.github.io/login-application-pro-after-deploy/`
   - Uses `LoginPageAfterDeploy` (37-second loading delay)

## Test Users (Same for Both Sites)

- **User**: `testuser1` / `user123`
- **Trainer**: `trainer1` / `trainer123`
- **Admin**: `admin1` / `admin123`
- **Salesperson**: `sales1` / `sales123` (will show authentication error)

## Notes

- Both repositories are independent
- Changes to one don't affect the other
- Each has its own GitHub Actions workflow
- Both use the same authentication logic

