import { Membership, GymInfo, Training, SalesPlan } from '../types';

export const mockMembership: Membership = {
  type: 'Premium Monthly',
  startDate: '2024-01-01',
  endDate: '2024-01-31',
  remainingWorkouts: 8
};

export const mockGymInfo: GymInfo = {
  name: 'Elite Fitness Center',
  address: '123 Main Street, City, State 12345',
  phone: '+1 (555) 123-4567',
  workingHours: 'Monday - Sunday: 6:00 AM - 11:00 PM'
};

export const mockTrainerSchedule: Training[] = [
  { id: '1', time: '09:00', dayOfWeek: 'Monday', clientName: 'John Doe', type: 'Personal Training' },
  { id: '2', time: '11:00', dayOfWeek: 'Monday', clientName: 'Jane Smith', type: 'Yoga' },
  { id: '3', time: '14:00', dayOfWeek: 'Tuesday', clientName: 'Bob Wilson', type: 'Strength Training' },
  { id: '4', time: '16:00', dayOfWeek: 'Tuesday', clientName: 'Alice Brown', type: 'Cardio' },
  { id: '5', time: '10:00', dayOfWeek: 'Wednesday', clientName: 'Charlie Davis', type: 'Personal Training' },
  { id: '6', time: '15:00', dayOfWeek: 'Thursday', clientName: 'Diana Miller', type: 'Pilates' },
  { id: '7', time: '09:00', dayOfWeek: 'Friday', clientName: 'Edward Garcia', type: 'Strength Training' },
];

export const mockAllTrainings: Training[] = [
  { id: '1', time: '06:00', dayOfWeek: 'Monday', clientName: 'John Doe', trainerName: 'Mike Johnson', type: 'Personal Training' },
  { id: '2', time: '07:00', dayOfWeek: 'Monday', clientName: 'Jane Smith', trainerName: 'Lisa Anderson', type: 'Yoga' },
  { id: '3', time: '08:00', dayOfWeek: 'Monday', clientName: 'Bob Wilson', trainerName: 'Mike Johnson', type: 'Strength Training' },
  { id: '4', time: '09:00', dayOfWeek: 'Monday', clientName: 'Alice Brown', trainerName: 'David Lee', type: 'Cardio' },
  { id: '5', time: '10:00', dayOfWeek: 'Monday', clientName: 'Charlie Davis', trainerName: 'Mike Johnson', type: 'Personal Training' },
  { id: '6', time: '14:00', dayOfWeek: 'Tuesday', clientName: 'Diana Miller', trainerName: 'Lisa Anderson', type: 'Pilates' },
  { id: '7', time: '15:00', dayOfWeek: 'Tuesday', clientName: 'Edward Garcia', trainerName: 'David Lee', type: 'Strength Training' },
  { id: '8', time: '16:00', dayOfWeek: 'Tuesday', clientName: 'Fiona Taylor', trainerName: 'Mike Johnson', type: 'Cardio' },
  { id: '9', time: '09:00', dayOfWeek: 'Wednesday', clientName: 'George Martinez', trainerName: 'Lisa Anderson', type: 'Yoga' },
  { id: '10', time: '11:00', dayOfWeek: 'Wednesday', clientName: 'Helen White', trainerName: 'David Lee', type: 'Personal Training' },
];

export const mockSalesPlan: SalesPlan = {
  month: 'January 2024',
  target: 50000,
  current: 32500,
  percentage: 65
};

export const mockConductedTrainings = 47;


