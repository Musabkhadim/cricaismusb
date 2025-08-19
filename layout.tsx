import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "Cricaismus - Business Directory & Local Business Reviews",
    template: "%s | Cricaismus",
  },
  description:
    "Discover local businesses, read reviews, and connect with your community. Find restaurants, services, healthcare, retail, and more on Cricaismus - your trusted business directory.",
  keywords: [
    "business directory",
    "local businesses",
    "business reviews",
    "restaurants",
    "services",
    "healthcare",
    "retail",
    "local search",
    "business listings",
    "community directory",
  ],
  icons: {
    icon: [
      { url: '/favicons.png', sizes: 'any' },
      { url: '/favicons.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicons.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/favicons.png', sizes: '180x180' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/favicons.png',
        color: '#3b82f6', // Your brand color
      },
    ],
  },
  authors: [{ name: "Cricaismus Team" }],
  creator: "Cricaismus",
  publisher: "Cricaismus",
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
    locale: "en_US",
    url: "https://cricaismus.com",
    siteName: "Cricaismus",
    title: "Cricaismus - Business Directory & Local Business Reviews",
    description: "Discover local businesses, read reviews, and connect with your community on Cricaismus.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cricaismus - Business Directory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cricaismus - Business Directory & Local Business Reviews",
    description: "Discover local businesses, read reviews, and connect with your community on Cricaismus.",
    images: ["/og-image.jpg"],
    creator: "@cricaismus",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "https://cricaismus.com",
  },
  category: "business",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-ELRR0GWDL4"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-ELRR0GWDL4');
            `,
          }}
        />

        <link rel="canonical" href="https://cricaismus.com" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "Cricaismus",
              description: "Business directory and local business reviews platform",
              url: "https://cricaismus.com",
              potentialAction: {
                "@type": "SearchAction",
                target: "https://cricaismus.com/directory?q={search_term_string}",
                "query-input": "required name=search_term_string",
              },
              publisher: {
                "@type": "Organization",
                name: "Cricaismus",
                url: "https://cricaismus.com",
                logo: "https://cricaismus.com/logo.png",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}