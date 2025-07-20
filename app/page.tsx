
import FrequencySelector from './frontend/components/FrequencySelector'
import IntervalInput from './frontend//components/IntervalInput'
import WeekdaySelector from './frontend/components/WeekdaySelector'
import MonthlyPatternSelector from './frontend//components/MonthlyPatternSelector'
import DateRangePicker from './frontend/components/DateRangePicker'
import CalendarPreview from './frontend/components/CalendarPreview'

import SaveToDBButton from './frontend/components/SaveToDBButton'
export default function Page() {
  return (
    <main className="max-w-4xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-12 mb-12">
      <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-900">
        Recurring Date Picker
      </h1>
      <div className="space-y-8">
        <FrequencySelector />
        <IntervalInput />
        <WeekdaySelector />
        <MonthlyPatternSelector />
        <DateRangePicker />
        <CalendarPreview />
        <SaveToDBButton />
      </div>
    </main>
  )
}
