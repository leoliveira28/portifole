import { MetadataRoute } from 'next';
import { locales } from '@/middleware';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://lepimentel.dev.br';

  // Data de última modificação
  const lastModified = new Date();

  // Criar rotas para cada idioma
  const routes: MetadataRoute.Sitemap = [];
  
  // Adiciona cada rota para cada idioma
  locales.forEach(locale => {
    // Página inicial
    routes.push({
      url: `${baseUrl}/${locale}`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    });
    
    // Política de privacidade
    routes.push({
      url: `${baseUrl}/${locale}/privacy-policy`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.5,
    });
    
    // Adicione mais páginas aqui quando necessário
  });

  return routes;
} 