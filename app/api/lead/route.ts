import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    const webhookUrl = process.env.GHL_LEAD_WEBHOOK_URL
    if (!webhookUrl) {
      console.error('GHL_LEAD_WEBHOOK_URL is not set — lead not forwarded to GHL', { data })
      return NextResponse.json(
        { success: false, message: 'Lead intake is temporarily unavailable. Please call (727) 202-7307.' },
        { status: 503 }
      )
    }

    const payload = {
      source: 'anewbeginningsoberliving.com',
      submittedAt: new Date().toISOString(),
      formType: data.type ?? 'contact',
      name: data.name ?? '',
      phone: data.phone ?? '',
      email: data.email ?? '',
      message: data.message ?? '',
      // Referral wizard extras (present only on referral submissions)
      referrerType: data.referrerType,
      clientName: data.clientName,
      preferredLocation: data.preferredLocation,
      timeframe: data.timeframe,
      notes: data.notes,
    }

    const ghlResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    })

    if (!ghlResponse.ok) {
      console.error('GHL webhook returned non-OK', {
        status: ghlResponse.status,
        statusText: ghlResponse.statusText,
      })
      return NextResponse.json(
        { success: false, message: 'We had trouble saving your information. Please call (727) 202-7307.' },
        { status: 502 }
      )
    }

    return NextResponse.json({ success: true, message: 'Lead submitted successfully' })
  } catch (err) {
    console.error('Lead submission error', err)
    return NextResponse.json(
      { success: false, message: 'Failed to process submission' },
      { status: 500 }
    )
  }
}
