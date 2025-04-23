import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PortifoLe | Desenvolvedor Full Stack",
  description: "Portfolio profissional de Leandro Oliveira, desenvolvedor Full Stack especializado em Next.js, React e aplicações web modernas",
  authors: [{ name: "Leandro Oliveira", url: "https://github.com/leoliveira28" }],
  creator: "Leandro Oliveira",
  keywords: ["desenvolvedor", "full stack", "next.js", "react", "portfolio", "web development"],
  metadataBase: new URL('http://lepimentel.dev.br'),
  openGraph: {
    title: "PortifoLe | Desenvolvedor Full Stack",
    description: "Portfolio profissional de Leandro Oliveira, desenvolvedor Full Stack especializado em Next.js, React e aplicações web modernas",
    url: 'http://lepimentel.dev.br',
    siteName: 'PortifoLe',
    locale: 'pt_BR',
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
    canonical: 'http://lepimentel.dev.br',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${montserrat.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
