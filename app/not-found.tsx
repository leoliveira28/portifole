import { defaultLocale } from '@/middleware';
import { redirect } from 'next/navigation';

export default function NotFound() {
  // Redireciona para a página 404 do locale padrão
  redirect(`/${defaultLocale}/404`);
} 