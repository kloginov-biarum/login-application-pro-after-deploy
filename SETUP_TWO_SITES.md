# Setup Instructions for Two Separate GitHub Pages Sites

This guide explains how to set up two separate GitHub Pages sites:
1. `kloginov-biarum.github.io/login-application-pro` - Main application with standard login
2. `kloginov-biarum.github.io/login-application-pro-after-deploy` - Alternative application with 37-second loading delay

## Prerequisites

- GitHub CLI (`gh`) installed and authenticated
- Node.js and npm installed

## Option 1: Automated Setup (Recommended)

Run the setup script:

```bash
./setup-alternative-repo.sh
```

This script will:
1. Create a copy of the project
2. Modify `App.tsx` to use `LoginPageAfterDeploy` as the default login page
3. Create a new GitHub repository `login-application-pro-after-deploy`
4. Push the code and set up GitHub Pages

## Option 2: Manual Setup

### Step 1: Create New Repository

1. Go to https://github.com/new
2. Repository name: `login-application-pro-after-deploy`
3. Set as **Public**
4. **DO NOT** initialize with README, .gitignore, or license
5. Click **Create repository**

### Step 2: Clone and Prepare

```bash
# Clone the main repository
git clone https://github.com/kloginov-biarum/login-application-pro.git
cd login-application-pro

# Create a new branch or directory for alternative version
```

### Step 3: Modify App.tsx

Replace the default route in `src/App.tsx` to use `LoginPageAfterDeploy` instead of `LoginPage`:

```tsx
<Route
  path="/"
  element={
    isAuthenticated() ? (
      <Navigate to="/user" replace />
    ) : (
      <LoginPageAfterDeploy />  // Changed from LoginPage
    )
  }
/>
```

### Step 4: Create New Repository and Push

```bash
# Remove existing git and initialize new
rm -rf .git
git init
git branch -M main
git add .
git commit -m "Initial commit: Alternative login page with 37-second delay"

# Add remote and push
git remote add origin https://github.com/kloginov-biarum/login-application-pro-after-deploy.git
git push -u origin main
```

### Step 5: Enable GitHub Pages

1. Go to https://github.com/kloginov-biarum/login-application-pro-after-deploy/settings/pages
2. Under **Source**, select **"GitHub Actions"**
3. Save settings

## Result

After setup, you will have:

- **Main Site**: `https://kloginov-biarum.github.io/login-application-pro/`
  - Uses standard `LoginPage` component
  - No loading delay

- **Alternative Site**: `https://kloginov-biarum.github.io/login-application-pro-after-deploy/`
  - Uses `LoginPageAfterDeploy` component
  - 37-second loading delay with spinner after login

## Testing

Test both sites:

1. **Main site**: Login should redirect immediately
2. **Alternative site**: Login should show spinner for 37 seconds before redirecting

## Notes

- Both repositories are independent
- Changes to one repository don't affect the other
- Each repository has its own GitHub Actions workflow for deployment
- Both use the same authentication logic and test users

