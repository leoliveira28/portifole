'use client'
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface CookieConsentProps {
  dict: {
    message: string;
    privacyPolicy: string;
    accept: string;
    decline: string;
  };
}

export function CookieConsent({ dict }: CookieConsentProps) {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();
  
  // Extrai o locale do pathname atual
  const locale = pathname.split('/')[1];

  useEffect(() => {
    // Verificar se o usuário já aceitou os cookies
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 bg-card border-t border-border shadow-lg animate-slide-up">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">
              {dict.message}{' '}
              <Link href={`/${locale}/privacy-policy`} className="text-primary hover:underline">
                {dict.privacyPolicy}
              </Link>.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={declineCookies}
              className="px-4 py-2 text-sm rounded-lg border border-border hover:bg-secondary transition-colors"
            >
              {dict.decline}
            </button>
            <button
              onClick={acceptCookies}
              className="px-4 py-2 text-sm font-medium rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              {dict.accept}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 