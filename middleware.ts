import { NextRequest, NextResponse } from 'next/server';
import { match as matchLocale } from '@formatjs/intl-localematcher';

// Define os idiomas suportados
export const locales = ['pt-BR', 'en-US'] as const;
export type Locale = typeof locales[number];
export const defaultLocale: Locale = 'pt-BR';

// Define o caminho das rotas públicas que não precisam de redirecionamento
export const publicRoutes = ['/favicon.ico', '/robots.txt', '/sitemap.xml'];

// Função para obter o locale preferido do usuário
function getLocale(request: NextRequest): Locale {
  // Obtém o header de idioma do navegador
  const acceptLanguage = request.headers.get('accept-language') || '';
  
  // Parse do header accept-language
  const languages = acceptLanguage.split(',').map(lang => {
    const [language, quality = '1'] = lang.split(';q=');
    return { language: language.trim(), quality: parseFloat(quality) };
  }).sort((a, b) => b.quality - a.quality).map(item => item.language);
  
  // Usa matchLocale para encontrar o idioma mais próximo
  // Garante que o retorno é sempre um dos locales suportados
  return matchLocale(languages, locales, defaultLocale) as Locale;
}

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  
  // Verifica se a rota é pública (não precisa de redirecionamento)
  if (publicRoutes.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }
  
  // Verifica se o caminho já tem um locale válido
  const pathnameHasLocale = locales.some(
    locale => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  // Se já tiver um locale, não precisa redirecionar
  if (pathnameHasLocale) {
    return NextResponse.next();
  }
  
  // Detecta o locale preferido do usuário
  const locale = getLocale(request);
  
  // Constrói a nova URL com o locale
  const newUrl = new URL(`/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`, request.url);
  
  // Mantém os parâmetros de query
  request.nextUrl.searchParams.forEach((value, key) => {
    newUrl.searchParams.set(key, value);
  });
  
  // Redireciona para a URL com o locale
  return NextResponse.redirect(newUrl);
}

export const config = {
  // Matcher ignorando rotas de api, _next/static, _next/image, favicon.ico, etc.
  matcher: ['/((?!api|_next/static|_next/image|.*\\..*).*)'],
}; 