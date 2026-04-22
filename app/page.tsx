
import Home from '@/components/home';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Make a Real Difference | Hope Crest Foundation",

  description:
    "Support Hope Crest Foundation in transforming lives through education, health, and community support. Join us to create lasting change for children and families in need.",

  keywords: [
    "donate Uganda",
    "charity Uganda",
    "support children",
    "nonprofit Uganda",
    "community support",
    "education charity",
    "health programs",
    "Hope Crest Foundation",
  ],

  openGraph: {
    title: "Make a Real Difference | Hope Crest Foundation",
    description:
      "Join Hope Crest Foundation and help create real impact. Support education, health, and nutrition programs for vulnerable communities.",
    url: "https://www.hopecrestfoundation.vercel.app",
    siteName: "Hope Crest Foundation",
    images: [
      {
        url: "https://www.hopecrestfoundation.vercel.app/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Hope Crest Foundation - Community Impact",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Make a Real Difference | Hope Crest Foundation",
    description:
      "Your donation supports real people. Join Hope Crest Foundation and be part of meaningful change.",
    images: ["https://www.hopecrestfoundation.vercel.app/home-og.jpg"],
  },

  alternates: {
    canonical: "https://www.hopecrestfoundation.vercel.app",
  },
};

export default function page() {
  return (
    <>
    <Home/>
    </>
  )
}
