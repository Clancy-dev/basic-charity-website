import React from "react"
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'


const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://hopecrestfoundation1.vercel.app/"),

  title: {
    default: "Hope Crest Foundation - Making a Difference Together",
    template: "%s | Hope Crest Foundation",
  },

  description:
    "Hope Crest Foundation is dedicated to transforming lives through community support, education, and humanitarian aid. Join us to make a lasting impact.",

  keywords: [
    "Hope Crest Foundation",
    "charity organization",
    "nonprofit",
    "donations",
    "community support",
    "humanitarian aid",
    "education support",
    "Uganda charity",
    "NGO",
    "fundraising",
  ],

  authors: [{ name: "Hope Crest Foundation" }],
  creator: "Hope Crest Foundation",
  publisher: "Hope Crest Foundation",

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: "/apple-icon.png",
  },

  openGraph: {
    title: "Hope Crest Foundation - Making a Difference Together",
    description:
      "Support Hope Crest Foundation in creating real change. Donate, volunteer, and be part of something impactful.",
    url: "https://hopecrestfoundation1.vercel.app/",
    siteName: "Hope Crest Foundation",
    images: [
      {
        url: "https://hopecrestfoundation1.vercel.app/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hope Crest Foundation",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Hope Crest Foundation - Making a Difference Together",
    description:
      "Join Hope Crest Foundation in changing lives through donations and community support.",
    images: ["https://hopecrestfoundation1.vercel.app/og-image.jpg"],
    creator: "@hopecrestfoundation",
  },

  category: "charity",

  alternates: {
    canonical: "https://hopecrestfoundation1.vercel.app/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
 