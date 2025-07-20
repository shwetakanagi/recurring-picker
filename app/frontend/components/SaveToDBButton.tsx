'use client'
import { useRecurrence } from '@/context/RecurrenceContext'

export default function SaveToDBButton() {
  const { frequency, interval, startDate, endDate, daysOfWeek, pattern } = useRecurrence()

  const save = async () => {
    const payload = {
      frequency,
      interval,
      daysOfWeek,
      pattern,
      startDate: startDate.toISOString(),
      endDate: endDate ? endDate.toISOString() : null,
    }

    try {
      const res = await fetch('/backend/api/recurrence', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      const data = await res.json()
      if (data.success) alert(`Saved! ID: ${data.id}`)
      else alert('Save failed.')
    } catch {
      alert('Network error.')
    }
  }

  return (
    <button onClick={save} className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
      Save  Schedule
    </button>
  )
}
