import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jacksonville Services LLC - Your One-Stop Service Partner',
  description: 'Jacksonville Services LLC is your trusted local partner for vending machines, house cleaning, junk removal, and power washing services in Jacksonville, Florida.',
  keywords: 'Jacksonville services, vending machines, house cleaning, junk removal, power washing, Florida',
  authors: [{ name: 'Jacksonville Services LLC' }],
  openGraph: {
    title: 'Jacksonville Services LLC - Your One-Stop Service Partner',
    description: 'Trusted local services in Jacksonville, Florida',
    url: 'https://jacksonvilleservices.com',
    siteName: 'Jacksonville Services LLC',
    locale: 'en_US',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

