import '@/styles/globals.css';
import { Header } from '@/ui/Header';
import { config } from '@/lib/config';
import Script from 'next/script';
import * as process from 'process';
import { ReactNode } from 'react';
import { cn } from '@/utils/misc';
import { fontMono, fontSans } from '@/lib/fonts';

export const metadata = {
  title: {
    default: config.metadata.title,
    template: 'Almond-UI - %s',
  },
  description: config.metadata.description,
  generator: 'Next.js',
  applicationName: 'Almond-UI - Documentation',
  referrer: 'origin-when-cross-origin',
  keywords: ['Next.js', 'React', 'Tailwind CSS', 'UI', 'React component library'],
  authors: [{ name: 'Francis Masha' }],
  colorScheme: 'light',
  creator: 'Francis Masha',
  publisher: 'Francis Masha',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: {
      default: config.metadata.title,
      template: 'Almond-UI - %s',
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  twitter: {
    card: 'summary_large_image',
    title: config.metadata.title,
    description: config.metadata.description,
    images: [config.metadata.ogImage],
    creator: '@mashafrancis',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={cn(
      "bg-background min-h-screen font-sans text-black",
      fontSans.variable,
      fontMono.variable,
    )}>
      <body className="antialiased">
        <main>
          <Header />
          {children}
        </main>
      </body>
    </html>
  );
}
