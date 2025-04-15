'use client'

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Locale } from '@/middleware';
import { getAlternateLocale } from '@/app/i18n/utils';

interface LanguageSwitcherProps {
  locale: Locale;
  label: string;
}

export function LanguageSwitcher({ locale, label }: LanguageSwitcherProps) {
  const pathname = usePathname();
  const alternateLocale = getAlternateLocale(locale);
  
  // Remove o locale atual do caminho para construir o novo caminho
  const newPathname = pathname.replace(`/${locale}`, `/${alternateLocale}`);
  
  return (
    <Link
      href={newPathname}
      className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
      hrefLang={alternateLocale}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="w-4 h-4"
      >
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {label}
    </Link>
  );
} 