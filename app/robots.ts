import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        '/private/', // Caso tenha rotas privadas no futuro
        '/api/',     // Proteger rotas de API
      ],
    },
    sitemap: 'https://lepimentel.dev.br/sitemap.xml',
    host: 'https://lepimentel.dev.br',
  };
} 