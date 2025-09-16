'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
const images = [
  // {
  //   src: '/Gallery/Fortuner1.jpg',
  //   alt: 'Toyota Fortuner front view',
  //   hint: 'fortuner front',
  // },
  // {
    //   src: '/Gallery/Fortuner3.jpg',
    //   alt: 'Toyota Fortuner rear view',
    //   hint: 'fortuner rear',
    // },
    // {
    //   src: '/Gallery/Fortuner4.jpg',
    //   alt: 'Toyota Fortuner parked outside',
    //   hint: 'fortuner outside',
    // },
    // {
      //   src: '/Gallery/Fortuner7.jpg',
      //   alt: 'Toyota Fortuner angled shot',
      //   hint: 'fortuner angled',
      // },
      {
        src: '/Gallery/thar1.jpg',
        alt: 'Mahindra Thar front view',
        hint: 'thar front',
      },
      {
        src: '/Gallery/thar2.jpg',
        alt: 'Mahindra Thar side angle',
        hint: 'thar side',
      },
      {
        src: '/Gallery/thar3.jpg',
        alt: 'Mahindra Thar rear view',
        hint: 'thar rear',
      },
      {
        src: '/Gallery/thar4.jpg',
        alt: 'Mahindra Thar off-roading',
        hint: 'thar offroad',
      },
      {
        src: '/Gallery/thar5.jpg',
        alt: 'Mahindra Thar mountain background',
        hint: 'thar mountain',
      },
      {
        src: '/Gallery/thar6.jpg',
        alt: 'Mahindra Thar night shot',
        hint: 'thar night',
      },
      {
        src: '/Gallery/thar7.jpg',
        alt: 'Mahindra Thar interior view',
        hint: 'thar interior',
      },
      {
        src: '/Gallery/thar8.jpg',
        alt: 'Mahindra Thar dashboard',
        hint: 'thar dashboard',
      },
      {
        src: '/Gallery/thar9.jpg',
        alt: 'Mahindra Thar with roof down',
        hint: 'thar open roof',
      },
      {
        src: '/Gallery/thar10.jpg',
        alt: 'Mahindra Thar top angle view',
        hint: 'thar top view',
      },
      {
        src: '/Gallery/thar11.jpg',
        alt: 'Mahindra Thar climbing rocks',
        hint: 'thar climbing',
      },
      {
        src: '/Gallery/thar12.jpg',
        alt: 'Mahindra Thar off-road terrain',
        hint: 'thar terrain',
      },
      {
        src: '/Gallery/thar13.jpg',
        alt: 'Mahindra Thar foggy environment',
        hint: 'thar foggy',
      },t
      {
        src: '/Gallery/swift1.jpg',
        alt: 'Maruti Swift front view',
        hint: 'swift front',
      },
      {
        src: '/Gallery/swift2.jpg',
        alt: 'Maruti Swift side profile',
        hint: 'swift side',
      },
      {
        src: '/Gallery/swift3.jpg',
        alt: 'Maruti Swift rear view',
        hint: 'swift rear',
      },
      {
        src: '/Gallery/swift4.jpg',
        alt: 'Maruti Swift interior',
        hint: 'swift interior',
      },
      {
        src: '/Gallery/swift5.jpg',
        alt: 'Maruti Swift dashboard',
        hint: 'swift dashboard',
      },
      {
      src: '/Gallery/Fortuner2.jpg',
      alt: 'Toyota Fortuner side angle',
      hint: 'fortuner side',
    },
    {
      src: '/Gallery/Fortuner3.1.jpg',
      alt: 'Toyota Fortuner interior dashboard',
      hint: 'fortuner interior 1',
    },
    {
      src: '/Gallery/Fortuner3.2.jpg',
      alt: 'Toyota Fortuner steering and dashboard',
      hint: 'fortuner interior 2',
    },
    {
      src: '/Gallery/Fortuner3.3.jpg',
      alt: 'Toyota Fortuner infotainment system',
      hint: 'fortuner interior 3',
    },
    {
      src: '/Gallery/Fortuner5.jpg',
      alt: 'Toyota Fortuner on road',
      hint: 'fortuner on road',
    },
    {
      src: '/Gallery/Fortuner6.jpg',
      alt: 'Toyota Fortuner night view',
      hint: 'fortuner night',
    },
];



export default function Gallery() {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  return (
    <motion.section
      id="gallery"
      className="w-full bg-card py-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight text-text-primary sm:text-4xl md:text-5xl">
            Our Sparkling Results
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            A glimpse into the transformations we deliver every day.
          </p>
        </div>

        {/* Carousel with autoplay */}
        <div className="mt-12 relative px-8">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: 'center',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {images.map((image, index) => (
                <CarouselItem
                  key={index}
                  className="pl-4 sm:basis-full md:basis-1/2 lg:basis-1/3"
                >
                  <Card className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-[1.03] hover:shadow-xl">
                    <CardContent className="p-0">
                      <ImageWithLoader image={image} />
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows */}
            <CarouselPrevious className="absolute -left-2 top-1/2 -translate-y-1/2 rounded-full bg-card/90 shadow-md hover:bg-card p-2" />
            <CarouselNext className="absolute -right-2 top-1/2 -translate-y-1/2 rounded-full bg-card/90 shadow-md hover:bg-card p-2" />
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
}


function ImageWithLoader({
  image,
}: {
  image: { src: string; alt: string; hint: string };
}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="relative w-full min-h-[400px] h-auto aspect-auto rounded-2xl overflow-hidden">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-muted z-0" />
      )}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={`object-cover transition-opacity duration-700 rounded-2xl ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        data-ai-hint={image.hint}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}