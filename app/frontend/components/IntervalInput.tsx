'use client'
import { useRecurrence } from '@/context/RecurrenceContext'

export default function IntervalInput() {
  const { interval, setInterval, frequency } = useRecurrence()

  return (
    <div>
      <label htmlFor="interval" className="block font-semibold mb-1">
        Repeat every
      </label>
      <div className="flex items-center space-x-2">
        <input
          type="number"
          min={1}
          id="interval"
          value={interval}
          onChange={(e) => setInterval(Number(e.target.value))}
          className="border border-gray-300 rounded p-2 w-16"
        />
        <span>{frequency === 'daily' ? 'day(s)' : frequency === 'weekly' ? 'week(s)' : frequency === 'monthly' ? 'month(s)' : 'year(s)'}</span>
      </div>
    </div>
  )
}
