import { addDays, addWeeks, addMonths, addYears, isAfter } from 'date-fns'

interface GenerateParams {
  frequency: string
  interval: number
  startDate: Date
  endDate?: Date
}

export function generateRecurringDates({ frequency, interval, startDate, endDate }: GenerateParams) {
  const result: Date[] = []
  let current = new Date(startDate)
  const limit = endDate || addMonths(startDate, 6)

  while (!isAfter(current, limit)) {
    result.push(new Date(current))
    switch (frequency) {
      case 'daily':
        current = addDays(current, interval)
        break
      case 'weekly':
        current = addWeeks(current, interval)
        break
      case 'monthly':
        current = addMonths(current, interval)
        break
      case 'yearly':
        current = addYears(current, interval)
        break
    }
  }

  return result
}
