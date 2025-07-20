import clientPromise from '@/lib/mongodb'
import { NextResponse } from 'next/server'
import { RecurrenceRule } from '@/models/RecurrenceModel'

export async function POST(req: Request) {
  try {
    const body = await req.json()

    const recurrence: RecurrenceRule = {
      frequency: body.frequency,
      interval: body.interval,
      daysOfWeek: body.daysOfWeek || [],
      pattern: body.pattern || null,
      startDate: body.startDate,
      endDate: body.endDate || null,
      createdAt: new Date().toISOString(),
    }

    const client = await clientPromise
    const db = client.db('recurrence')
    const result = await db.collection('rules').insertOne(recurrence)

    return NextResponse.json({ success: true, id: result.insertedId })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ success: false, error: 'Server error' }, { status: 500 })
  }
}
