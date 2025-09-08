'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
 <section
      id="home"
      className="relative flex h-[calc(100vh-80px)] w-full items-center justify-center overflow-hidden"
    >
      <Image
        src="https://images.pexels.com/photos/6872156/pexels-photo-6872156.jpeg"
        alt="Car being washed"
        data-ai-hint="car wash background"
        fill
        className="object-cover -z-20"
      />
      <div className="absolute inset-0 bg-black/50 -z-10"></div>
      
      <div className="container z-10 px-4 md:px-6 text-center">
        <div className="mx-auto max-w-3xl space-y-6">
          <h1 className="font-headline text-3xl font-extrabold tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl">
            Daily Dust, Leave It to Us
          </h1>
          <p className="text-lg text-gray-200 md:text-xl">
            Your car deserves better than dust. We’ll take care of it.
          </p>
          <div className="flex flex-col items-center gap-4">
          <Button
              asChild
              size="lg"
              className="w-full rounded-full px-8 py-6 text-lg font-bold shadow-lg sm:w-auto"
            >
              <Link href="#plans">Book Your Wash Now</Link>
            </Button>
            <p className="text-sm text-gray-300">Your car called. It needs a little love.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
