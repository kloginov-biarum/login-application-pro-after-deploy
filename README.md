# Gym Application - Frontend

A modern, stylish frontend application for a gym management system with role-based access control.

## Features

- **Login Page**: Secure authentication with username and password
- **Alternative Login Page** (`/login-application-pro-after-deploy`): Login page with 37-second loading delay and spinner
- **User Dashboard**: View remaining workouts, membership information, and gym details
- **Trainer Dashboard**: Manage training schedule and track conducted trainings
- **Administrator Dashboard**: Overview of all gym trainings with links to manage clients and trainers
- **Sales Dashboard**: Track sales plan and performance metrics

## Test Users

### User Role
- **Username**: `testuser1`
- **Password**: `user123`

- **Username**: `testuser2`
- **Password**: `it's_me` (⚠️ Will show 400 error due to apostrophe bug)

### Trainer Role
- **Username**: `trainer1`
- **Password**: `trainer123`

### Administrator Role
- **Username**: `admin1`
- **Password**: `admin123`

### Salesperson Role
- **Username**: `sales1`
- **Password**: `sales123`

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Alternative Login Page (Separate Repository)

There is a separate GitHub Pages site with an alternative login page that includes a 37-second loading delay:

**GitHub Pages:**
- **URL**: `https://kloginov-biarum.github.io/login-application-pro-after-deploy/`
- **Feature**: After entering credentials and clicking login, there is a 37-second loading delay with a spinner before redirecting to the dashboard

**Setup Instructions:**
See `QUICK_SETUP_ALTERNATIVE.md` for instructions on setting up the alternative repository.

**Local Development:**
- **URL**: `http://localhost:5173/#/login-application-pro-after-deploy`

## Build

To build for production:
```bash
npm run build
```

## Deploy to GitHub Pages

The application is configured to deploy automatically to GitHub Pages using GitHub Actions.

### Automatic Deployment

1. Push your code to the `main` or `master` branch
2. GitHub Actions will automatically build and deploy the application
3. Enable GitHub Pages in your repository settings:
   - Go to Settings → Pages
   - Under "Source", select "GitHub Actions"
4. Your app will be available at `https://{username}.github.io/{repository-name}/`

### Manual Deployment

If you want to deploy manually:

1. Build the project:
```bash
npm run build
```

2. The `dist` folder contains the production build

### Note

The application uses HashRouter for compatibility with GitHub Pages. URLs will look like:
- `https://{username}.github.io/{repo}/#/`
- `https://{username}.github.io/{repo}/#/user`
- `https://{username}.github.io/{repo}/#/trainer`
- etc.

## Technologies Used

- React 18
- TypeScript
- Vite
- Tailwind CSS
- React Router DOM

## Project Structure

```
src/
├── components/          # React components
│   ├── LoginPage.tsx
│   ├── UserDashboard.tsx
│   ├── TrainerDashboard.tsx
│   ├── AdminDashboard.tsx
│   ├── SalesDashboard.tsx
│   └── ProtectedRoute.tsx
├── data/               # Mock data
│   └── mockData.ts
├── types.ts           # TypeScript type definitions
├── auth.ts            # Authentication logic
├── App.tsx            # Main app component with routing
└── main.tsx           # Entry point
```


