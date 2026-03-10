import { MetadataRoute } from 'next'

export const dynamic = 'force-static' // BU SATIRI EKLEDİK

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://mertkaniscan.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ]
}