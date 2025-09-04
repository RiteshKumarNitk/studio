// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Lexend } from "next/font/google";
import ClientOnly from "@/components/client-only";
import { Toaster } from "@/components/ui/toaster";
import SplashScreenProvider from "@/components/splash-screen-provider";
import Cursor from "@/components/ui/cursor";
import PromotionalBanner from "@/components/landing/promotional-banner";

export const metadata: Metadata = {
  title: "Bubble Drive",
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

// ✅ Load Google Font properly
const lexend = Lexend({
  subsets: ["latin"],
  variable: "--font-lexend",
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${lexend.variable} font-body antialiased bg-background text-text-primary relative`}
      >
        {/* ✅ Client-only components to avoid hydration mismatch */}
        <ClientOnly>
          <SplashScreenProvider>{children}</SplashScreenProvider>
          <Toaster />
          <PromotionalBanner />
          <div className="hidden md:block">
            <Cursor />
          </div>
        </ClientOnly>
      </body>
    </html>
  );
}
