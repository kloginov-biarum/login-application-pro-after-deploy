import { User } from './types';

// Test users for each role
export const testUsers: User[] = [
  {
    username: 'testuser1',
    password: 'user123',
    role: 'user',
    name: 'John Doe'
  },
  {
    username: 'trainer1',
    password: 'trainer123',
    role: 'trainer',
    name: 'Mike Johnson'
  },
  {
    username: 'admin1',
    password: 'admin123',
    role: 'administrator',
    name: 'Sarah Williams'
  },
  {
    username: 'sales1',
    password: 'sales123',
    role: 'salesperson',
    name: 'Emma Davis'
  }
];

export const authenticate = (username: string, password: string): User | null => {
  // INTENTIONAL BUG FOR TESTING: Simulate database connection error for sales1
  if (username === 'sales1') {
    // Simulate database query that throws an error
    throw new Error('Database connection timeout: Unable to connect to authentication service. Connection attempt timed out after 30 seconds.');
  }

  const user = testUsers.find(
    u => u.username === username && u.password === password
  );
  return user || null;
};

export const getCurrentUser = (): User | null => {
  const userStr = localStorage.getItem('currentUser');
  return userStr ? JSON.parse(userStr) : null;
};

export const setCurrentUser = (user: User): void => {
  localStorage.setItem('currentUser', JSON.stringify(user));
};

export const logout = (): void => {
  localStorage.removeItem('currentUser');
};

export const isAuthenticated = (): boolean => {
  return getCurrentUser() !== null;
};


