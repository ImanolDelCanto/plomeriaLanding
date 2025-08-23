import type React from "react"
import { Metadata } from "next"
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
  title: "Destapaciones Plomero | Servicio profesional de destapaciones 24hs",
  description:
    "Destapaciones Plomero ofrece servicio profesional de destapaciones de cañerías, cloacas y desagües. Atención inmediata en CABA y Zona Sur. Presupuesto sin cargo.",
  keywords:
    "destapaciones plomero, destapaciones cañerías, destapaciones cloacas, destapaciones de cañerías, plomero destapaciones, plomero urgencia, destapaciones 24 horas, destapaciones zona sur, destapaciones de inodoros, destapaciones de cocinas",
  alternates: {
    canonical: "https://www.destapacionesplomero.com/",
  },
  openGraph: {
    title: "Destapaciones Plomero | El mejor servicio de destapaciones",
    description:
      "Somos especialistas en destapaciones de cañerías, cloacas y desagües. Servicio profesional disponible 24hs en CABA y Zona Sur.",
    url: "https://www.destapacionesplomero.com/",
    siteName: "Destapaciones Plomero",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "https://www.destapacionesplomero.com/images/logo-destapaciones.webp",
        width: 800,
        height: 600,
        alt: "Destapaciones Plomero servicio profesional",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Destapaciones Plomero | Destapaciones profesionales 24hs",
    description:
      "Servicio de destapaciones de cañerías, cloacas y desagües. Atención inmediata en CABA y Zona Sur.",
    images: ["https://www.destapacionesplomero.com/images/logo-destapaciones.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#1e3a8a",
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
