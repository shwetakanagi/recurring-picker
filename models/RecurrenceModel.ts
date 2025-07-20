export interface RecurrenceRule {
  frequency: 'daily' | 'weekly' | 'monthly' | 'yearly';
  interval: number;
  daysOfWeek?: number[];
  pattern?: {
    week: number;
    day: number;
  } | null;
  startDate: string;
  endDate?: string | null;
  createdAt: string;
}
