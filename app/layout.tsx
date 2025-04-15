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
  metadataBase: new URL('https://portifolio.dev'),
  openGraph: {
    title: "PortifoLe | Desenvolvedor Full Stack",
    description: "Portfolio profissional de Leandro Oliveira, desenvolvedor Full Stack especializado em Next.js, React e aplicações web modernas",
    url: 'https://portifolio.dev',
    siteName: 'PortifoLe',
    locale: 'pt_BR',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${montserrat.className} bg-background text-foreground`}>
        {children}
      </body>
    </html>
  );
}
