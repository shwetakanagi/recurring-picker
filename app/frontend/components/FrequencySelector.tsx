'use client'
import { useRecurrence } from '@/context/RecurrenceContext'

export default function FrequencySelector() {
  const { frequency, setFrequency } = useRecurrence()
  return (
    <div>
      <label htmlFor="frequency" className="block font-semibold mb-1">
        Frequency
      </label>
      <select
        id="frequency"
        value={frequency}
        onChange={(e) => setFrequency(e.target.value as any)}
        className="border border-gray-300 rounded p-2 w-full"
      >
        <option value="daily">Daily</option>
        <option value="weekly">Weekly</option>
        <option value="monthly">Monthly</option>
        <option value="yearly">Yearly</option>
      </select>
    </div>
  )
}
