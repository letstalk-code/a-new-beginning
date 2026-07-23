import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBottomBar from '@/components/layout/MobileBottomBar'
import Analytics from '@/components/Analytics'
import { SITE_NAME, SITE_URL, PHONE_NUMBER, EMAIL } from '@/lib/constants'

const sora = Sora({
  subsets: ['latin'],
  variable: '--font-sora',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'A New Beginning Sober Living | Tampa Bay Recovery Housing',
    template: '%s | A New Beginning Sober Living',
  },
  description:
    'Structured sober living homes in Tampa, St. Petersburg, and New Port Richey. Safe, supportive recovery housing for men and women. Same-day placement available.',
  openGraph: {
    type: 'website',
    siteName: SITE_NAME,
    locale: 'en_US',
    url: SITE_URL,
    title: 'A New Beginning Sober Living | Tampa Bay Recovery Housing',
    description:
      'Structured sober living homes in Tampa, St. Petersburg, and New Port Richey. Same-day placement available.',
  },
  twitter: {
    card: 'summary_large_image',
  },
}

const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}/logo.png`,
  foundingDate: '2015',
  telephone: PHONE_NUMBER,
  email: EMAIL,
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1651 29th Ave N',
    addressLocality: 'St. Petersburg',
    addressRegion: 'FL',
    postalCode: '33713',
    addressCountry: 'US',
  },
  areaServed: ['Tampa FL', 'St. Petersburg FL', 'New Port Richey FL'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
        <Analytics />
      </body>
    </html>
  )
}
