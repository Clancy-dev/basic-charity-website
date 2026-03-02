import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://hopecrestfoundation.vercel.app"

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date('2026-02-15'),
      changeFrequency: 'yearly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date('2026-02-15'),
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    {
      url: `${baseUrl}/donate`,
      lastModified: new Date('2026-03-01'),
      changeFrequency: 'monthly',
      priority: 0.9,
    },
  ]
}