import { render, screen } from '@testing-library/react'
import FrequencySelector from '../app/frontend/components/FrequencySelector'

import { RecurrenceProvider } from '@/context/RecurrenceContext'

describe('FrequencySelector', () => {
  it('renders frequency options', () => {
    render(
      <RecurrenceProvider>
        <FrequencySelector />
      </RecurrenceProvider>
    )

    expect(screen.getByLabelText(/Frequency/i)).toBeInTheDocument()
    expect(screen.getByText(/Daily/i)).toBeInTheDocument()
    expect(screen.getByText(/Weekly/i)).toBeInTheDocument()
    expect(screen.getByText(/Monthly/i)).toBeInTheDocument()
    expect(screen.getByText(/Yearly/i)).toBeInTheDocument()
  })
})
