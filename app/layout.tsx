import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"
import React from "react"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: {
    default: "Sefren — Portfolio & Research",
    template: "%s | Sefren"
  },
  description: "A collection of projects, research, and dossiers. Things that just wouldn't leave me alone.",
  keywords: ["portfolio", "software developer", "research", "projects", "systems", "algorithms"],
  authors: [{ name: "Sefren" }],
  creator: "Sefren",
  metadataBase: new URL(process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Sefren — Portfolio & Research",
    description: "A collection of projects, research, and dossiers. Things that just wouldn't leave me alone.",
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Sefren",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sefren Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sefren — Portfolio & Research",
    description: "A collection of projects, research, and dossiers. Things that just wouldn't leave me alone.",
    creator: "@manish43050",
    images: ["/og-image.png"],
  },
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
}

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="antialiased bg-[var(--background)] text-[var(--foreground)]">
      {children}
      </body>
      </html>
  )
}