import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Destapaciones Plomero 24hs | CABA y GBA | DestapacionesPlomero.com",
  description:
    "🔧 DESTAPACIONES PLOMERO profesional 24 horas en CABA y Gran Buenos Aires. Servicio inmediato, equipos especializados, garantía total. ¡Llamá ya!",
  keywords: [
    "destapaciones plomero",
    "plomero destapaciones",
    "destapaciones",
    "plomero",
    "destapacionesplomero",
    "destapaciones caba",
    "plomero caba",
    "destapaciones buenos aires",
    "plomero buenos aires",
    "destapaciones 24 horas",
    "plomero 24 horas",
    "plomero urgente",
    "destapaciones urgentes",
    "destapaciones gran buenos aires",
    "plomero gran buenos aires",
    "servicio plomería",
    "destapación cañerías",
    "plomero zona norte",
    "plomero zona sur",
    "destapaciones zona norte",
    "destapaciones zona sur",
    "instalaciones sanitarias",
    "reparaciones plomería",
    "destapaciones profesionales",
    "plomero profesional",
  ],
  authors: [{ name: "Destapaciones y Plomerías" }],
  creator: "Destapaciones y Plomerías",
  publisher: "DestapacionesPlomero.com",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_AR",
    url: "https://www.destapacionesplomero.com",
    siteName: "Destapaciones Plomero",
    title: "Destapaciones Plomero 24hs | CABA y GBA | DestapacionesPlomero.com",
    description:
      "🔧 DESTAPACIONES PLOMERO profesional las 24 horas en CABA y Gran Buenos Aires. Equipos especializados, servicio inmediato, garantía total.",
    images: [
      {
        url: "/logo-destapaciones.webp",
        width: 1200,
        height: 630,
        alt: "Destapaciones Plomero - Servicio Profesional 24hs CABA y GBA",
      },
    ],
  },
  alternates: {
    canonical: "https://www.destapacionesplomero.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es-AR">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.destapacionesplomero.com",
              name: "Destapaciones y Plomerías",
              alternateName: "DestapacionesPlomero.com",
              description: "Servicio profesional de destapaciones y plomería 24 horas en CABA y Gran Buenos Aires",
              url: "https://www.destapacionesplomero.com",
              telephone: "+54-11-5915-1536",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Buenos Aires",
                addressRegion: "CABA",
                addressCountry: "AR",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: -34.6118,
                longitude: -58.396,
              },
              openingHours: "Mo-Su 00:00-23:59",
              serviceArea: {
                "@type": "GeoCircle",
                geoMidpoint: {
                  "@type": "GeoCoordinates",
                  latitude: -34.6118,
                  longitude: -58.396,
                },
                geoRadius: "50000",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios de Plomería",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Destapación de Cañerías",
                      description: "Destapación profesional de cañerías y desagües",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Instalaciones Sanitarias",
                      description: "Instalación y reparación de sistemas sanitarios",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Reparaciones de Plomería",
                      description: "Reparaciones generales de sistemas de plomería",
                    },
                  },
                ],
              },
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "4.8",
                reviewCount: "250",
              },
              priceRange: "$$",
            }),
          }}
        />
        <meta name="geo.region" content="AR-C" />
        <meta name="geo.placename" content="Buenos Aires" />
        <meta name="geo.position" content="-34.6118;-58.3960" />
        <meta name="ICBM" content="-34.6118, -58.3960" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>{children}</body>
    </html>
  )
}
