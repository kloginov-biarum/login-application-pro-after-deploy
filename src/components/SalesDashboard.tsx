import { useNavigate } from 'react-router-dom';
import { getCurrentUser, logout } from '../auth';
import { mockSalesPlan } from '../data/mockData';
import Error500 from './Error500';

const SalesDashboard = () => {
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

  // INTENTIONAL BUG FOR TESTING: Show 500 error page for salesperson role
  if (user.role === 'salesperson' || user.username === 'sales1') {
    return <Error500 />;
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
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Sales Dashboard</h2>
          <p className="text-gray-600">Track your sales performance and goals</p>
        </div>

        {/* Sales Plan Card */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <div className="mb-6">
            <h3 className="text-2xl font-bold text-gray-800 mb-2">Sales Plan - {mockSalesPlan.month}</h3>
            <p className="text-gray-600">Monthly sales target and progress</p>
          </div>

          <div className="space-y-6">
            {/* Progress Bar */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-gray-700">Progress</span>
                {/* BUG: Incorrect percentage calculation - using target/current instead of current/target */}
                <span className="text-sm font-bold text-gray-900">
                  {Math.round((mockSalesPlan.target / mockSalesPlan.current) * 100)}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-6 overflow-hidden">
                <div
                  className="bg-gradient-to-r from-green-500 to-green-600 h-6 rounded-full transition-all duration-500 flex items-center justify-end pr-2"
                  style={{ width: `${Math.round((mockSalesPlan.target / mockSalesPlan.current) * 100)}%` }}
                >
                  <span className="text-xs font-semibold text-white">
                    {Math.round((mockSalesPlan.target / mockSalesPlan.current) * 100)}%
                  </span>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-6 border-l-4 border-blue-500">
                <p className="text-blue-600 text-sm font-medium mb-2">Current Sales</p>
                <p className="text-3xl font-bold text-blue-900">
                  ${mockSalesPlan.current.toLocaleString()}
                </p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg p-6 border-l-4 border-purple-500">
                <p className="text-purple-600 text-sm font-medium mb-2">Target</p>
                <p className="text-3xl font-bold text-purple-900">
                  ${mockSalesPlan.target.toLocaleString()}
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-lg p-6 border-l-4 border-green-500">
                <p className="text-green-600 text-sm font-medium mb-2">Remaining</p>
                {/* BUG: Incorrect calculation - subtracting target from current instead of current from target */}
                <p className="text-3xl font-bold text-green-900">
                  ${(mockSalesPlan.current - mockSalesPlan.target).toLocaleString()}
                </p>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gray-50 rounded-lg p-6">
              <h4 className="font-semibold text-gray-800 mb-4">Sales Breakdown</h4>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div>
                  <p className="text-xs text-gray-600">Memberships Sold</p>
                  {/* BUG: Wrong count - should match actual sales data */}
                  <p className="text-lg font-bold text-gray-800">23</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Personal Training</p>
                  <p className="text-lg font-bold text-gray-800">15</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Group Classes</p>
                  {/* BUG: Sum doesn't match - 23 + 15 + 8 = 46, but should be consistent with total sales */}
                  <p className="text-lg font-bold text-gray-800">8</p>
                </div>
                <div>
                  <p className="text-xs text-gray-600">Average Ticket</p>
                  {/* BUG: Incorrect average ticket calculation - dividing by Personal Training count (15) instead of Memberships (23) */}
                  <p className="text-lg font-bold text-gray-800">
                    ${Math.round(mockSalesPlan.current / 15).toLocaleString()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Performance Chart Placeholder */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Sales Trend</h3>
          <div className="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
            <p className="text-gray-400">Chart visualization would go here</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SalesDashboard;


