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
  {
    src: 'https://images.pexels.com/photos/6872150/pexels-photo-6872150.jpeg',
    alt: 'Clean sedan car',
    hint: 'clean sedan',
  },
  {
    src: 'https://images.pexels.com/photos/6872152/pexels-photo-6872152.jpeg',
    alt: 'Sparkling SUV',
    hint: 'sparkling suv',
  },
  {
    src: 'https://images.pexels.com/photos/6873178/pexels-photo-6873178.jpeg',
    alt: 'Polished car interior',
    hint: 'car interior',
  },
  {
    src: 'https://images.pexels.com/photos/7530997/pexels-photo-7530997.jpeg',
    alt: 'Shiny car wheel',
    hint: 'shiny wheel',
  },
  {
    src: 'https://images.pexels.com/photos/7154622/pexels-photo-7154622.jpeg',
    alt: 'Car getting washed',
    hint: 'car wash',
  },
  {
    src: 'https://images.pexels.com/photos/4892130/pexels-photo-4892130.jpeg',
    alt: 'Happy customer with clean car',
    hint: 'happy customer',
  },
];

export default function Gallery() {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  return (
    <motion.section
      id="gallery"
      className="w-full bg-background py-16"
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

/* ✅ Image Loader Component */
function ImageWithLoader({
  image,
}: {
  image: { src: string; alt: string; hint: string };
}) {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className="relative aspect-[4/3] w-full">
      {isLoading && (
        <div className="absolute inset-0 animate-pulse bg-muted rounded-2xl" />
      )}
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className={`object-cover transition-opacity duration-700 ${
          isLoading ? 'opacity-0' : 'opacity-100'
        }`}
        data-ai-hint={image.hint}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
}
