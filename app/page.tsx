import { redirect } from 'next/navigation';
import { defaultLocale } from '@/middleware';

export default function Home() {
  // Redirecionar para a versão padrão com locale
  redirect(`/${defaultLocale}`);
} 