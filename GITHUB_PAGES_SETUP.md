# GitHub Pages Setup Instructions

## Quick Setup

1. **Create a GitHub repository** (if you haven't already)

2. **Push your code to GitHub:**
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git push -u origin main
```

3. **Enable GitHub Pages:**
   - Go to your repository on GitHub
   - Click on **Settings** → **Pages**
   - Under **Source**, select **"GitHub Actions"**
   - Save the settings

4. **Wait for deployment:**
   - GitHub Actions will automatically build and deploy your app
   - You can check the progress in the **Actions** tab
   - Once complete, your app will be available at:
     `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Important Notes

- The app uses **HashRouter** instead of BrowserRouter for GitHub Pages compatibility
- URLs will include `#` hash: `https://yoursite.github.io/repo/#/user`
- The workflow triggers on push to `main` or `master` branch
- Make sure your repository name matches in the workflow file if needed

## Troubleshooting

- If deployment fails, check the **Actions** tab for error messages
- Ensure GitHub Pages is set to use **GitHub Actions** as the source
- Verify that the workflow file is in `.github/workflows/deploy.yml`
- Make sure Node.js version in workflow matches your local version

