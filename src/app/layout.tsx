import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import SplashScreenProvider from '@/components/splash-screen-provider';

export const metadata: Metadata = {
  title: 'Bubble Drive – Daily Dust, Leave It to Us',
  description: 'Your car deserves better than dust. We’ll take care of it. Eco-friendly doorstep car wash service.',
  keywords: ['car wash', 'eco-friendly', 'doorstep service', 'car cleaning', 'subscription'],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <SplashScreenProvider>
          {children}
        </SplashScreenProvider>
        <Toaster />
      </body>
    </html>
  );
}
