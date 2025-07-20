import { render, screen, fireEvent } from '@testing-library/react'
import SaveToDBButton from '@/app/frontend/components/SaveToDBButton'
import { useRecurrence } from '@/context/RecurrenceContext'

jest.mock('@/context/RecurrenceContext')
global.fetch = jest.fn()
global.alert = jest.fn()

const mockUseRecurrence = useRecurrence as jest.Mock

describe('SaveToDBButton', () => {
  const defaultMockData = {
    frequency: 'weekly',
    interval: 2,
    startDate: new Date('2025-01-01'),
    endDate: new Date('2025-12-31'),
    daysOfWeek: [1, 3],
    pattern: { week: 2, day: 1 },
  }

  beforeEach(() => {
    jest.clearAllMocks()
    mockUseRecurrence.mockReturnValue(defaultMockData)
  })

  it('sends correct payload and shows success alert', async () => {
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ success: true, id: 'abc123' }),
    })

    render(<SaveToDBButton />)
    fireEvent.click(screen.getByText('Save Schedule'))

    // Wait for fetch to resolve
    await screen.findByText('Save Schedule')

    expect(fetch).toHaveBeenCalledWith('/backend/api/recurrence', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        frequency: 'weekly',
        interval: 2,
        daysOfWeek: [1, 3],
        pattern: { week: 2, day: 1 },
        startDate: '2025-01-01T00:00:00.000Z',
        endDate: '2025-12-31T00:00:00.000Z',
      }),
    })

    expect(global.alert).toHaveBeenCalledWith('Saved! ID: abc123')
  })

  it('shows alert on failure response', async () => {
    ;(fetch as jest.Mock).mockResolvedValueOnce({
      json: async () => ({ success: false }),
    })

    render(<SaveToDBButton />)
    fireEvent.click(screen.getByText('Save Schedule'))

    await screen.findByText('Save Schedule')

    expect(global.alert).toHaveBeenCalledWith('Save failed.')
  })

  it('shows alert on network error', async () => {
    ;(fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'))

    render(<SaveToDBButton />)
    fireEvent.click(screen.getByText('Save Schedule'))

    await screen.findByText('Save Schedule')

    expect(global.alert).toHaveBeenCalledWith('Network error.')
  })
})
