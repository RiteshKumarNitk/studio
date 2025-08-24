// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import SplashScreenProvider from "@/components/splash-screen-provider";
import Cursor from "@/components/ui/cursor";

export const metadata: Metadata = {
  title: "Bubble Drive – Daily Dust, Leave It to Us",
  description:
    "Your car deserves better than dust. We’ll take care of it. Eco-friendly doorstep car wash service.",
  keywords: ["car wash", "eco-friendly", "doorstep service", "car cleaning", "subscription"],
  authors: [{ name: "Bubble Drive" }],
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Bubble Drive – Daily Dust, Leave It to Us",
    description:
      "Eco-friendly doorstep car wash service. Keep your car shining without hassle.",
    url: "https://yourdomain.com", // ← replace with your domain
    siteName: "Bubble Drive",
    images: [{ url: "/og-image.png", width: 1200, height: 630, alt: "Bubble Drive Car Wash" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bubble Drive – Daily Dust, Leave It to Us",
    description:
      "Eco-friendly doorstep car wash service. Keep your car shining without hassle.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Sans:wght@400;700&family=Poppins:wght@400;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased bg-white text-gray-900 relative">
        <SplashScreenProvider>{children}</SplashScreenProvider>
        <Toaster />
        {/* Custom motion cursor (hidden on touch devices) */}
        <div className="hidden md:block">
          <Cursor />
        </div>
      </body>
    </html>
  );
}
