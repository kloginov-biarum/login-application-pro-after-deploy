#!/bin/bash

# Script to setup alternative GitHub repository for login-application-pro-after-deploy

REPO_NAME="login-application-pro-after-deploy"
GITHUB_USER="kloginov-biarum"
CURRENT_DIR=$(pwd)
TEMP_DIR="/tmp/${REPO_NAME}-setup"

echo "Setting up alternative repository for ${REPO_NAME}..."

# Create temporary directory
mkdir -p "$TEMP_DIR"
cd "$TEMP_DIR"

# Copy all files except node_modules and dist
echo "Copying project files..."
rsync -av --exclude='node_modules' --exclude='dist' --exclude='.git' "$CURRENT_DIR/" .

# Modify App.tsx to use LoginPageAfterDeploy as default
echo "Modifying App.tsx to use alternative login page..."
cat > src/App.tsx << 'EOF'
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPageAfterDeploy from './components/LoginPageAfterDeploy';
import UserDashboard from './components/UserDashboard';
import TrainerDashboard from './components/TrainerDashboard';
import AdminDashboard from './components/AdminDashboard';
import SalesDashboard from './components/SalesDashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { isAuthenticated } from './auth';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated() ? (
              <Navigate to="/user" replace />
            ) : (
              <LoginPageAfterDeploy />
            )
          }
        />
        <Route
          path="/user"
          element={
            <ProtectedRoute>
              <UserDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/trainer"
          element={
            <ProtectedRoute>
              <TrainerDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
        <Route
          path="/sales"
          element={
            <ProtectedRoute>
              <SalesDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
EOF

# Initialize git
echo "Initializing git repository..."
git init
git branch -M main
git add .
git commit -m "Initial commit: Alternative login page with 37-second delay"

# Create repository on GitHub
echo "Creating GitHub repository..."
gh repo create "${REPO_NAME}" --public --source=. --remote=origin --push || {
    echo "Repository might already exist. Trying to add remote..."
    git remote add origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git" || git remote set-url origin "https://github.com/${GITHUB_USER}/${REPO_NAME}.git"
    git push -u origin main
}

echo ""
echo "✅ Alternative repository setup complete!"
echo ""
echo "Next steps:"
echo "1. Go to https://github.com/${GITHUB_USER}/${REPO_NAME}/settings/pages"
echo "2. Under 'Source', select 'GitHub Actions'"
echo "3. Wait for the deployment to complete"
echo "4. Your app will be available at: https://${GITHUB_USER}.github.io/${REPO_NAME}/"
echo ""
echo "Cleaning up temporary files..."
cd "$CURRENT_DIR"
rm -rf "$TEMP_DIR"

