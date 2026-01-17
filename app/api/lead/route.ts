import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Log the submission (in production, this would go to a database or CRM)
    console.log('Lead submission received:', {
      timestamp: new Date().toISOString(),
      type: data.type,
      data,
    })

    // Simulate a small delay as if processing
    await new Promise((resolve) => setTimeout(resolve, 500))

    return NextResponse.json({
      success: true,
      message: 'Lead submitted successfully',
    })
  } catch {
    return NextResponse.json(
      { success: false, message: 'Failed to process submission' },
      { status: 500 }
    )
  }
}
