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

