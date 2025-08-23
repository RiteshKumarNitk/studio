'use client';

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

const images = [
  { src: 'https://placehold.co/600x400', alt: 'Clean sedan car', hint: 'clean sedan' },
  { src: 'https://placehold.co/600x400', alt: 'Sparkling SUV', hint: 'sparkling suv' },
  { src: 'https://placehold.co/600x400', alt: 'Polished car interior', hint: 'car interior' },
  { src: 'https://placehold.co/600x400', alt: 'Shiny car wheel', hint: 'shiny wheel' },
  { src: 'https://placehold.co/600x400', alt: 'Car getting washed', hint: 'car wash' },
  { src: 'https://placehold.co/600x400', alt: 'Happy customer with clean car', hint: 'happy customer' },
];

export default function Gallery() {
  return (
    <motion.section
      id="gallery"
      className="w-full bg-background"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Sparkling Results
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A glimpse into the transformations we deliver every day.
          </p>
        </div>
        <div className="mt-12">
          <Carousel
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-2">
                    <Card className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105">
                      <CardContent className="p-0">
                        <Image
                          src={image.src}
                          alt={image.alt}
                          width={600}
                          height={400}
                          className="aspect-video w-full object-cover"
                          data-ai-hint={image.hint}
                        />
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </div>
    </motion.section>
  );
}
