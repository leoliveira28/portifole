import { locales } from '@/middleware';
import type { Locale } from '@/middleware';

// Importa as traduções
import ptBR from './locales/pt-BR.json';
import enUS from './locales/en-US.json';

// Define o dicionário de traduções
const dictionaries = {
  'pt-BR': ptBR,
  'en-US': enUS,
} as const;

// Tipo para dicionário
type Dictionary = typeof ptBR;

// Função para obter o dicionário de traduções para um locale específico
export const getDictionary = (locale: Locale): Dictionary => {
  return dictionaries[locale];
};

// Devolve o caminho para a raiz do locale
export const getLocalePath = (locale: Locale, path: string = '') => {
  return `/${locale}${path ? `/${path}` : ''}`;
};

// Valida um locale
export const isValidLocale = (locale: string): locale is Locale => {
  return locales.includes(locale as Locale);
};

// Obtém o locale alternativo (para troca de idioma)
export const getAlternateLocale = (locale: Locale): Locale => {
  return locale === 'pt-BR' ? 'en-US' : 'pt-BR';
}; 