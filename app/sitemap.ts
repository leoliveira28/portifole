import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lepimentel.dev.br';

  // Data de última modificação
  const lastModified = new Date();

  // Páginas principais do site
  const routes = [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    },
    // Se adicionar mais páginas no futuro, adicionar aqui
  ];

  return routes;
} 