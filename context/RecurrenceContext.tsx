'use client'
import React, { createContext, useContext, useState } from 'react'

type Frequency = 'daily' | 'weekly' | 'monthly' | 'yearly'

interface RecurrenceContextType {
  frequency: Frequency
  setFrequency: (value: Frequency) => void
  interval: number
  setInterval: (value: number) => void
  daysOfWeek: number[]
  setDaysOfWeek: (value: number[]) => void
  pattern: { week: number; day: number } | null
  setPattern: (value: { week: number; day: number } | null) => void
  startDate: Date
  setStartDate: (value: Date) => void
  endDate: Date | null
  setEndDate: (value: Date | null) => void
}

const RecurrenceContext = createContext<RecurrenceContextType | undefined>(undefined)

export const RecurrenceProvider = ({ children }: { children: React.ReactNode }) => {
  const [frequency, setFrequency] = useState<Frequency>('daily')
  const [interval, setInterval] = useState<number>(1)
  const [daysOfWeek, setDaysOfWeek] = useState<number[]>([])
  const [pattern, setPattern] = useState<{ week: number; day: number } | null>(null)
  const [startDate, setStartDate] = useState<Date>(new Date())
  const [endDate, setEndDate] = useState<Date | null>(null)

  return (
    <RecurrenceContext.Provider
      value={{
        frequency,
        setFrequency,
        interval,
        setInterval,
        daysOfWeek,
        setDaysOfWeek,
        pattern,
        setPattern,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
      }}
    >
      {children}
    </RecurrenceContext.Provider>
  )
}

export const useRecurrence = () => {
  const context = useContext(RecurrenceContext)
  if (!context) throw new Error('useRecurrence must be used within RecurrenceProvider')
  return context
}
