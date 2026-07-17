import type { MetadataRoute } from 'next';
import { services } from '@/data/services';
import { siteConfig } from '@/config/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  const serviceRoutes = services.map((service) => ({
    url: `${baseUrl}/diensten/${service.slug}`,
    lastModified: new Date(),
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      priority: 1,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/diensten`,
      lastModified: new Date(),
      priority: 0.9,
      changeFrequency: 'weekly' as const,
    },
    ...serviceRoutes,
    {
      url: `${baseUrl}/projecten`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      url: `${baseUrl}/overons`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/werkgebied`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/offerte`,
      lastModified: new Date(),
      priority: 0.8,
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: 'yearly' as const,
    },
    {
      url: `${baseUrl}/cookies`,
      lastModified: new Date(),
      priority: 0.5,
      changeFrequency: 'yearly' as const,
    },
  ];
}
