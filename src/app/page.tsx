'use client';

import { Suspense } from 'react';
import Header from '@/components/landing/header';
import Hero from '@/components/landing/hero';
import HowItWorks from '@/components/landing/how-it-works';
import About from '@/components/landing/about';
import Pricing from '@/components/landing/pricing';
import Services from '@/components/landing/services';
import Offers from '@/components/landing/offers';
import Testimonials from '@/components/landing/testimonials';
import Contact from '@/components/landing/contact';
import Footer from '@/components/landing/footer';
import HomePageSkeleton from '@/components/landing/home-page-skeleton';
import Gallery from '@/components/landing/gallery';

function HomeComponent() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <About />
        <HowItWorks />
        <Pricing />
        <Offers />
        <Services />
        <Gallery />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}


export default function HomePage() {
  return (
    <Suspense fallback={<HomePageSkeleton />}>
      <HomeComponent />
    </Suspense>
  );
}
