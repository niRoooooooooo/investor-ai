import type { Metadata } from 'next';
import { Inter, Noto_Sans_Bengali } from 'next/font/google';
import './globals.css';
import { I18nProvider } from '@/components/providers/i18n-provider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  variable: '--font-noto-bengali',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Tor Lawyer - AI Legal Review for Bangladesh Agreements',
  description: 'Instant red flags and safer clauses citing statutory Bangladesh law and Court precedents.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${notoSansBengali.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
      </head>
      <body className="min-h-screen bg-background text-on-surface antialiased font-sans selection:bg-secondary-fixed selection:text-on-secondary-fixed">
        <I18nProvider>{children}</I18nProvider>
      </body>
    </html>
  );
}
