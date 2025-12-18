export type UserRole = 'user' | 'trainer' | 'administrator' | 'salesperson';

export interface User {
  username: string;
  password: string;
  role: UserRole;
  name: string;
}

export interface Membership {
  type: string;
  startDate: string;
  endDate: string;
  remainingWorkouts: number;
}

export interface GymInfo {
  name: string;
  address: string;
  phone: string;
  workingHours: string;
}

export interface Training {
  id: string;
  time: string;
  dayOfWeek: string;
  clientName: string;
  trainerName?: string;
  type: string;
}

export interface SalesPlan {
  month: string;
  target: number;
  current: number;
  percentage: number;
}


