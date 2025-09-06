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
  verification: {
    google: 'kUrX1J-yzidEByujAunq3e7HahYEzvkc5T5eGpzZ8vA',
  },
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
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Jacksonville Services LLC",
    "description": "Professional commercial services including cleaning, vending machines, junk removal, and power washing in Jacksonville, Florida",
    "url": "https://jacksonvilleservices.com",
    "telephone": "+19044563851",
    "email": "support@jacksonvilleservices.com",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Jacksonville",
      "addressRegion": "FL",
      "postalCode": "32202",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "30.3322",
      "longitude": "-81.6557"
    },
    "openingHours": "Mo-Fr 08:00-18:00,Sa 09:00-16:00",
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "30.3322",
        "longitude": "-81.6557"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Jacksonville Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Commercial Cleaning",
            "description": "Professional commercial cleaning services for offices, retail spaces, and industrial facilities"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Junk Removal",
            "description": "Fast and reliable junk removal services for homes and businesses"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Power Washing",
            "description": "Professional exterior cleaning and pressure washing services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Vending Machines",
            "description": "Smart vending solutions for offices, schools, and public spaces"
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "200"
    }
  }

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
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

