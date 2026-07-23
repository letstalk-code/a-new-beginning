'use client'

import Script from 'next/script'
import { useEffect } from 'react'

const GA_ID = process.env.NEXT_PUBLIC_GA_ID // GA4, e.g. G-XXXXXXX
const ADS_ID = process.env.NEXT_PUBLIC_GOOGLE_ADS_ID // e.g. AW-XXXXXXX

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void
  }
}

export default function Analytics() {
  // One listener catches every tel:/sms: link on the site so phone and
  // text taps count as conversions without wiring each link individually.
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement).closest?.('a[href^="tel:"], a[href^="sms:"]')
      if (!link || !window.gtag) return
      const isCall = link.getAttribute('href')!.startsWith('tel:')
      window.gtag('event', isCall ? 'phone_click' : 'sms_click', {
        event_category: 'contact',
        page_path: window.location.pathname,
      })
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  if (!GA_ID && !ADS_ID) return null

  const primaryId = GA_ID || ADS_ID

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${primaryId}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          ${GA_ID ? `gtag('config', '${GA_ID}');` : ''}
          ${ADS_ID ? `gtag('config', '${ADS_ID}');` : ''}
        `}
      </Script>
    </>
  )
}
