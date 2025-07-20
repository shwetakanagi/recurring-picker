import { render, screen, fireEvent, cleanup } from '@testing-library/react'
import WeekdaySelector from '@/app/frontend/components/WeekdaySelector'
import { useRecurrence } from '@/context/RecurrenceContext'

jest.mock('@/context/RecurrenceContext')

const mockUseRecurrence = useRecurrence as jest.Mock

describe('WeekdaySelector', () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it('toggles days correctly', () => {
    const setDaysOfWeekMock = jest.fn()

    // Step 1: Initially Monday (1) is selected
    mockUseRecurrence.mockReturnValue({
      frequency: 'weekly',
      daysOfWeek: [1],
      setDaysOfWeek: setDaysOfWeekMock,
    })

    render(<WeekdaySelector />)
    const monButton = screen.getByText('Mon')

    // Step 2: Click to deselect Monday (removes 1)
    fireEvent.click(monButton)
    expect(setDaysOfWeekMock).toHaveBeenCalledWith([])

    // Step 3: Re-render with Monday unselected
    cleanup()
    setDaysOfWeekMock.mockClear()
    mockUseRecurrence.mockReturnValue({
      frequency: 'weekly',
      daysOfWeek: [],
      setDaysOfWeek: setDaysOfWeekMock,
    })

    render(<WeekdaySelector />)

    // Step 4: Click again to re-select Monday
    fireEvent.click(screen.getByText('Mon'))
    expect(setDaysOfWeekMock).toHaveBeenCalledWith([1])
  })
})
