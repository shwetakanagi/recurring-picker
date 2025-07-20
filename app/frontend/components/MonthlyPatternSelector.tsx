'use client'
import { useRecurrence } from '@/context/RecurrenceContext'

const weeks = [
  { label: 'First', value: 1 },
  { label: 'Second', value: 2 },
  { label: 'Third', value: 3 },
  { label: 'Fourth', value: 4 },
  { label: 'Last', value: -1 },
]
const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

export default function MonthlyPatternSelector() {
  const { frequency, pattern, setPattern } = useRecurrence()

  // Only show if monthly
  if (frequency !== 'monthly') return null

  const setWeek = (week: number) => {
    if (!pattern) setPattern({ week, day: 0 })
    else setPattern({ ...pattern, week })
  }

  const setDay = (day: number) => {
    if (!pattern) setPattern({ week: 1, day })
    else setPattern({ ...pattern, day })
  }

  return (
    <div>
      <label className="block font-semibold mb-1">Monthly pattern (e.g. 2nd Tuesday)</label>
      <div className="flex space-x-4">
        <select
          value={pattern?.week ?? ''}
          onChange={(e) => setWeek(Number(e.target.value))}
          className="border border-gray-300 rounded p-2"
        >
          <option value="" disabled>
            Select week
          </option>
          {weeks.map(({ label, value }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        <select
          value={pattern?.day ?? ''}
          onChange={(e) => setDay(Number(e.target.value))}
          className="border border-gray-300 rounded p-2"
        >
          <option value="" disabled>
            Select day
          </option>
          {weekdays.map((day, i) => (
            <option key={i} value={i}>
              {day}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}
