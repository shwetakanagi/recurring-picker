'use client'
import { useRecurrence } from '@/context/RecurrenceContext'

export default function DateRangePicker() {
  const { startDate, setStartDate, endDate, setEndDate } = useRecurrence()

  return (
    <div className="space-y-2">
      <label className="block font-semibold">Start Date</label>
      <input
        type="date"
        value={startDate.toISOString().slice(0, 10)}
        onChange={(e) => setStartDate(new Date(e.target.value))}
        className="border border-gray-300 rounded p-2"
      />

      <label className="block font-semibold">End Date (Optional)</label>
      <input
        type="date"
        value={endDate ? endDate.toISOString().slice(0, 10) : ''}
        onChange={(e) => setEndDate(e.target.value ? new Date(e.target.value) : null)}
        className="border border-gray-300 rounded p-2"
      />
    </div>
  )
}
