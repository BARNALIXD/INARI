import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Studio Inari - Contemporary Architecture & Design',
    template: '%s | Studio Inari'
  },
  description: 'Studio Inari is a contemporary architecture firm specializing in innovative residential, commercial, and urban design solutions. Explore our portfolio of award-winning projects.',
  keywords: ['architecture', 'design', 'contemporary', 'residential', 'commercial', 'urban planning', 'Studio Inari'],
  authors: [{ name: 'Studio Inari' }],
  creator: 'Studio Inari',
  publisher: 'Studio Inari',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://studioinari.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://studioinari.com',
    title: 'Studio Inari - Contemporary Architecture & Design',
    description: 'Innovative architecture firm creating spaces that blend functionality with artistic vision.',
    siteName: 'Studio Inari',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Studio Inari - Contemporary Architecture',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio Inari - Contemporary Architecture',
    description: 'Award-winning architecture firm specializing in contemporary design solutions.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Studio Inari',
  description: 'Contemporary architecture and design firm',
  url: 'https://studioinari.com',
  logo: 'https://studioinari.com/logo.png',
  sameAs: [
    'https://instagram.com/studioinari',
    'https://linkedin.com/company/studioinari'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Architecture Lane',
    addressLocality: 'Design District',
    addressRegion: 'NY',
    postalCode: '10001',
    addressCountry: 'US'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+1-234-567-8900',
    contactType: 'customer service',
    email: 'hello@studioinari.com'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  )
}




