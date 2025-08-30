'use client';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import Autoplay from 'embla-carousel-autoplay';
import { useRef } from 'react';

const testimonials = [
  {
    name: 'Rajesh K.',
    quote:
      'My car had more dust than my childhood toys! After Bubble Drive, it looks brand new. The team was professional and the result was just fantastic.',
    avatar: 'https://placehold.co/100x100',
    initials: 'RK',
    handle: '@rajeshk',
  },
  {
    name: 'Priya S.',
    quote:
      "I didn’t know my car could look this good! The 'Super Shine' plan is worth every single penny. So convenient and the quality is top-notch.",
    avatar: 'https://placehold.co/100x100',
    initials: 'PS',
    handle: '@priyas',
  },
  {
    name: 'Amit V.',
    quote:
      'The eco-friendly aspect is what drew me in, and the service quality is what made me stay. My car has never been happier, and neither have I!',
    avatar: 'https://placehold.co/100x100',
    initials: 'AV',
    handle: '@amitv',
  },
  {
    name: 'Sunita M.',
    quote:
      'As a busy professional, I barely have time for anything. Bubble Drive is a lifesaver. They come to my office and my car is sparkling when I leave.',
    avatar: 'https://placehold.co/100x100',
    initials: 'SM',
    handle: '@sunitam',
  },
  {
    name: 'Vikram B.',
    quote:
      "Absolutely phenomenal service! They even got out the stubborn stains on my seats. The 'Ultimate Glow' is the real deal. Highly recommend!",
    avatar: 'https://placehold.co/100x100',
    initials: 'VB',
    handle: '@vikramb',
  },
];

export default function Testimonials() {
  const plugin = useRef(
    Autoplay({ delay: 3500, stopOnInteraction: false })
  );

  return (
    <section id="testimonials" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl md:text-5xl">
            What Our Customers Are Saying
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Real stories from real, happy drivers.
          </p>
        </div>

        <div className="mt-12 relative max-w-6xl mx-auto">
          <Carousel
            plugins={[plugin.current]}
            opts={{
              align: 'start',
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    className="p-1 h-full"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className="h-full rounded-2xl shadow-lg flex">
                      <CardContent className="flex h-full flex-col justify-between gap-6 p-6">
                        <blockquote className="text-md text-muted-foreground leading-relaxed">
                          "{testimonial.quote}"
                        </blockquote>
                        <div className="flex items-center gap-4">
                          <Avatar>
                            <AvatarImage
                              src={testimonial.avatar}
                              alt={testimonial.name}
                            />
                            <AvatarFallback>
                              {testimonial.initials}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.handle}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>

            <CarouselPrevious className="absolute left-0 top-1/2 -translate-y-1/2 z-10" />
            <CarouselNext className="absolute right-0 top-1/2 -translate-y-1/2 z-10" />
          </Carousel>
        </div>

        <div className="mt-12 text-center">
          <Button asChild size="lg" className="font-bold">
            <Link href="#plans">Want In? Book Now!</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
