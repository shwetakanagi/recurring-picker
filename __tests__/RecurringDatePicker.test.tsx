import { render, screen } from '@testing-library/react'
import Page from '@/app/page'
import { RecurrenceProvider } from '@/context/RecurrenceContext'

describe('Recurring Date Picker Integration', () => {
  it('renders all core parts of the UI', () => {
    render(
      <RecurrenceProvider>
        <Page />
      </RecurrenceProvider>
    )

    expect(screen.getByText(/Recurring Date Picker/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Frequency/i)).toBeInTheDocument()
    expect(screen.getByText(/Save/i)).toBeInTheDocument()
  })
})
