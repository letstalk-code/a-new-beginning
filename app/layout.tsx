import type { Metadata } from 'next'
import { Sora, Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import MobileBottomBar from '@/components/layout/MobileBottomBar'

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
  title: 'A New Beginning Sober Living | Tampa Bay Recovery Housing',
  description: 'Structured sober living homes in Tampa, St. Petersburg, and New Port Richey. Safe, supportive recovery housing for men and women. Same-day placement available.',
  keywords: 'sober living, recovery housing, Tampa sober living, St Petersburg recovery home, New Port Richey sober living, addiction recovery, halfway house',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${sora.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
        <MobileBottomBar />
      </body>
    </html>
  )
}
