import About from '@/components/about'

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Hope Crest Foundation - Our Mission & Story",

  description:
    "Learn about Hope Crest Foundation, a community-based charity in Uganda focused on education, healthcare, and supporting vulnerable children and families through sustainable local impact.",

  keywords: [
    "about Hope Crest Foundation",
    "Uganda charity organization",
    "NGO Uganda",
    "community development Uganda",
    "children support Uganda",
    "education charity Uganda",
    "healthcare support NGO",
    "nonprofit mission Uganda",
  ],

  openGraph: {
    title: "About Hope Crest Foundation - Our Mission & Story",
    description:
      "Discover how Hope Crest Foundation is transforming lives in Uganda through education, healthcare, and community support initiatives.",
    url: "https://www.hopecrestfoundation.vercel.app/about",
    siteName: "Hope Crest Foundation",
    images: [
      {
        url: "https://www.hopecrestfoundation.vercel.app/about-og.jpg",
        width: 1200,
        height: 630,
        alt: "Hope Crest Foundation Team and Mission",
      },
    ],
    type: "article",
  },

  twitter: {
    card: "summary_large_image",
    title: "About Hope Crest Foundation - Our Mission & Story",
    description:
      "Learn how Hope Crest Foundation is making an impact in Uganda through community support and charity programs.",
    images: ["https://www.hopecrestfoundation.vercel.app/about-og.jpg"],
  },

  alternates: {
    canonical: "https://www.hopecrestfoundation.vercel.app/about",
  },
};

export default function page() {
  return (
    <>
    <About/>
    </>
  )
}
