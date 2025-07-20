import { render, screen, fireEvent } from '@testing-library/react'
import MonthlyPatternSelector from '@/app/frontend/components/MonthlyPatternSelector'
import { useRecurrence } from '@/context/RecurrenceContext'

// Mock outside the test block — avoid require() problems
jest.mock('@/context/RecurrenceContext')

const mockUseRecurrence = useRecurrence as jest.Mock

describe('MonthlyPatternSelector', () => {
  beforeEach(() => {
    mockUseRecurrence.mockReturnValue({
      frequency: 'monthly',
      pattern: { week: 2, day: 1 },
      setPattern: jest.fn(),
    })
  })

  it('renders correctly when frequency is monthly', () => {
    render(<MonthlyPatternSelector />)

    expect(screen.getByText(/Monthly pattern/i)).toBeInTheDocument()

    const weekSelect = screen.getAllByRole('combobox')[0] as HTMLSelectElement
    const daySelect = screen.getAllByRole('combobox')[1] as HTMLSelectElement

    expect(weekSelect.value).toBe('2') // Second
    expect(daySelect.value).toBe('1')  // Monday
  })

  it('updates week and day values', () => {
    const setPatternMock = jest.fn()

    mockUseRecurrence.mockReturnValue({
      frequency: 'monthly',
      pattern: { week: 2, day: 1 },
      setPattern: setPatternMock,
    })

    render(<MonthlyPatternSelector />)

    const weekSelect = screen.getAllByRole('combobox')[0]
    const daySelect = screen.getAllByRole('combobox')[1]

    fireEvent.change(weekSelect, { target: { value: '3' } }) // Third week
    fireEvent.change(daySelect, { target: { value: '5' } })  // Friday

    expect(setPatternMock).toHaveBeenCalledWith({ week: 3, day: 1 })
    expect(setPatternMock).toHaveBeenCalledWith({ week: 2, day: 5 })
  })
})
