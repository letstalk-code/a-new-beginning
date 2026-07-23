import { MetadataRoute } from 'next'
import { SITE_URL, LOCATIONS } from '@/lib/constants'

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: '', priority: 1 },
    { path: '/for-referrers', priority: 0.9 },
    { path: '/admissions', priority: 0.9 },
    { path: '/our-homes', priority: 0.8 },
    { path: '/locations', priority: 0.8 },
    { path: '/contact', priority: 0.7 },
    { path: '/privacy', priority: 0.2 },
    ...LOCATIONS.map((l) => ({ path: `/locations/${l.slug}`, priority: 0.8 })),
  ]

  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority,
  }))
}
