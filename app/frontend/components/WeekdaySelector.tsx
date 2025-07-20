'use client'
import { useRecurrence } from '@/context/RecurrenceContext'

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function WeekdaySelector() {
  const { frequency, daysOfWeek, setDaysOfWeek } = useRecurrence()

  // Only show if weekly or monthly (for pattern)
  if (frequency !== 'weekly' && frequency !== 'monthly') return null

  const toggleDay = (day: number) => {
    if (daysOfWeek.includes(day)) {
      setDaysOfWeek(daysOfWeek.filter((d) => d !== day))
    } else {
      setDaysOfWeek([...daysOfWeek, day].sort())
    }
  }

  return (
    <div>
      <label className="block font-semibold mb-1">Select days of the week</label>
      <div className="flex space-x-2">
        {weekdays.map((day, idx) => (
          <button
            key={day}
            onClick={() => toggleDay(idx)}
            className={`px-3 py-1 rounded ${
              daysOfWeek.includes(idx) ? 'bg-blue-600 text-white' : 'bg-gray-200'
            }`}
            type="button"
          >
            {day}
          </button>
        ))}
      </div>
    </div>
  )
}
