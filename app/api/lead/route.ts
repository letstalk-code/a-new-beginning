import { NextRequest, NextResponse } from 'next/server'

const GHL_API_BASE = 'https://services.leadconnectorhq.com'
const GHL_API_VERSION = '2021-07-28'

type LeadPayload = {
  type?: 'contact' | 'referral'
  name?: string
  phone?: string
  email?: string
  message?: string
  referrerType?: string
  clientName?: string
  preferredLocation?: string
  timeframe?: string
  notes?: string
}

function splitName(full: string): { firstName: string; lastName: string } {
  const trimmed = full.trim()
  if (!trimmed) return { firstName: '', lastName: '' }
  const parts = trimmed.split(/\s+/)
  if (parts.length === 1) return { firstName: parts[0], lastName: '' }
  return { firstName: parts[0], lastName: parts.slice(1).join(' ') }
}

export async function POST(request: NextRequest) {
  let data: LeadPayload
  try {
    data = await request.json()
  } catch {
    return NextResponse.json(
      { success: false, message: 'Invalid request' },
      { status: 400 }
    )
  }

  const pit = process.env.GHL_PIT
  const locationId = process.env.GHL_LOCATION_ID

  if (!pit || !locationId) {
    console.error('GHL_PIT or GHL_LOCATION_ID missing — lead not forwarded', {
      formType: data.type,
    })
    return NextResponse.json(
      { success: false, message: 'Lead intake is temporarily unavailable. Please call (727) 202-7307.' },
      { status: 503 }
    )
  }

  const isReferral = data.type === 'referral'
  const { firstName, lastName } = splitName(data.name || '')

  const tags = [
    isReferral ? 'website-referral' : 'website-contact',
    data.preferredLocation ? `location-${data.preferredLocation.toLowerCase().replace(/\s+/g, '-')}` : null,
    data.timeframe ? `timeframe-${data.timeframe}` : null,
    data.referrerType ? `referrer-${data.referrerType}` : null,
  ].filter((t): t is string => Boolean(t))

  const notesLines: string[] = []
  if (data.message) notesLines.push(`Message: ${data.message}`)
  if (data.notes) notesLines.push(`Notes: ${data.notes}`)
  if (data.clientName && data.clientName !== data.name) notesLines.push(`Client: ${data.clientName}`)
  if (data.preferredLocation) notesLines.push(`Preferred location: ${data.preferredLocation}`)
  if (data.timeframe) notesLines.push(`Timeframe: ${data.timeframe}`)
  if (data.referrerType) notesLines.push(`Referrer type: ${data.referrerType}`)

  const contactPayload = {
    locationId,
    firstName: firstName || undefined,
    lastName: lastName || undefined,
    email: data.email || undefined,
    phone: data.phone || undefined,
    source: isReferral ? 'website-referral-wizard' : 'website-contact-form',
    tags,
  }

  const upsertRes = await fetch(`${GHL_API_BASE}/contacts/upsert`, {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${pit}`,
      'Content-Type': 'application/json',
      Version: GHL_API_VERSION,
      Accept: 'application/json',
    },
    body: JSON.stringify(contactPayload),
  })

  if (!upsertRes.ok) {
    const errBody = await upsertRes.text().catch(() => '')
    console.error('GHL contacts/upsert failed', { status: upsertRes.status, body: errBody.slice(0, 500) })
    return NextResponse.json(
      { success: false, message: 'We had trouble saving your information. Please call (727) 202-7307.' },
      { status: 502 }
    )
  }

  const upserted: { contact?: { id?: string } } = await upsertRes.json().catch(() => ({}))
  const contactId = upserted.contact?.id

  if (contactId && notesLines.length > 0) {
    const noteRes = await fetch(`${GHL_API_BASE}/contacts/${contactId}/notes`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${pit}`,
        'Content-Type': 'application/json',
        Version: GHL_API_VERSION,
        Accept: 'application/json',
      },
      body: JSON.stringify({ body: notesLines.join('\n') }),
    })
    if (!noteRes.ok) {
      console.error('GHL note creation failed (contact saved, note skipped)', {
        contactId,
        status: noteRes.status,
      })
    }
  }

  return NextResponse.json({ success: true, message: 'Lead submitted successfully' })
}
