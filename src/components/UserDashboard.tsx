import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../auth';
import { mockMembership, mockGymInfo } from '../data/mockData';

const UserDashboard = () => {
  const user = getCurrentUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  if (!user) {
    navigate('/');
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-primary-600">Elite Fitness</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-8">User Dashboard</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* Remaining Workouts Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-primary-500">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-600 text-sm font-medium">Remaining Workouts</p>
                <p className="text-4xl font-bold text-gray-800 mt-2">{mockMembership.remainingWorkouts}</p>
                <p className="text-gray-500 text-xs mt-2">This month</p>
              </div>
              <div className="bg-primary-100 rounded-full p-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
          </div>

          {/* Membership Info Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-green-500">
            <div>
              <p className="text-gray-600 text-sm font-medium">Membership Type</p>
              <p className="text-2xl font-bold text-gray-800 mt-2">{mockMembership.type}</p>
              <div className="mt-4 space-y-1">
                <p className="text-gray-500 text-xs">
                  <span className="font-medium">Start:</span> {new Date(mockMembership.startDate).toLocaleDateString()}
                </p>
                <p className="text-gray-500 text-xs">
                  <span className="font-medium">End:</span> {new Date(mockMembership.endDate).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          {/* Quick Stats Card */}
          <div className="bg-white rounded-xl shadow-lg p-6 border-l-4 border-purple-500">
            <div>
              <p className="text-gray-600 text-sm font-medium">Total Workouts</p>
              <p className="text-4xl font-bold text-gray-800 mt-2">12</p>
              <p className="text-gray-500 text-xs mt-2">Completed this month</p>
            </div>
          </div>
        </div>

        {/* Gym Information */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-bold text-gray-800 mb-6">Gym Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Gym Name</p>
              <p className="text-lg text-gray-800">{mockGymInfo.name}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Address</p>
              <p className="text-lg text-gray-800">{mockGymInfo.address}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Phone</p>
              <p className="text-lg text-gray-800">{mockGymInfo.phone}</p>
            </div>
            <div>
              <p className="text-gray-600 text-sm font-medium mb-1">Working Hours</p>
              <p className="text-lg text-gray-800">{mockGymInfo.workingHours}</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UserDashboard;


