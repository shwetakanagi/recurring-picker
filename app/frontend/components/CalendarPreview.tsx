'use client'

import { useRecurrence } from '@/context/RecurrenceContext'
import { useEffect, useState } from 'react'
import { generateRecurringDates } from '@/utils/recurrenceUtils'
import { format } from 'date-fns'

export default function CalendarPreview() {
  const { frequency, interval, startDate, endDate } = useRecurrence()
  const [dates, setDates] = useState<Date[]>([])

  useEffect(() => {
    if (!startDate) return
    const generated = generateRecurringDates({
      frequency,
      interval,
      startDate,
      endDate: endDate ?? undefined,
    })
    setDates(generated)
  }, [frequency, interval, startDate, endDate])

  return (
    <div>
      <h2 className="font-semibold mb-2">Preview of recurring dates:</h2>
      <ul className="list-disc ml-6 max-h-48 overflow-y-auto border border-gray-200 p-2 rounded">
        {dates.map((date) => (
          <li key={date.toISOString()}>{format(date, 'PPPP')}</li>
        ))}
      </ul>
    </div>
  )
}
