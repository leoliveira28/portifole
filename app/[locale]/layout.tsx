import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "../globals.css";
import { getDictionary } from "../i18n/utils";
import { Locale } from "@/middleware";

const montserrat = Montserrat({ subsets: ["latin"] });

export async function generateMetadata({ 
  params: { locale } 
}: {
  params: { locale: Locale }
}): Promise<Metadata> {
  const dict = getDictionary(locale);
  
  return {
    title: "PortifoLe | Desenvolvedor Full Stack",
    description: "Portfolio profissional de Leandro Oliveira, desenvolvedor Full Stack especializado em Next.js, React e aplicações web modernas",
    authors: [{ name: "Leandro Oliveira", url: "https://github.com/leoliveira28" }],
    creator: "Leandro Oliveira",
    keywords: ["desenvolvedor", "full stack", "next.js", "react", "portfolio", "web development"],
    metadataBase: new URL('https://lepimentel.dev.br'),
    openGraph: {
      title: "PortifoLe | Desenvolvedor Full Stack",
      description: "Portfolio profissional de Leandro Oliveira, desenvolvedor Full Stack especializado em Next.js, React e aplicações web modernas",
      url: 'https://lepimentel.dev.br',
      siteName: 'PortifoLe',
      locale: locale,
      type: 'website',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    verification: {
      google: 'adicione_seu_codigo_de_verificacao', // Substitua pelo seu código de verificação do Google
    },
    alternates: {
      canonical: `https://lepimentel.dev.br/${locale}`,
      languages: {
        'en-US': 'https://lepimentel.dev.br/en-US',
        'pt-BR': 'https://lepimentel.dev.br/pt-BR',
      },
    },
  };
}

export default function RootLayout({
  children,
  params: { locale }
}: Readonly<{
  children: React.ReactNode;
  params: { locale: Locale };
}>) {
  return (
    <html lang={locale}>
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${montserrat.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
} 