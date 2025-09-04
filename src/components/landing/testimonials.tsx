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
import { UserRound } from "lucide-react";

const testimonials = [
  {
    name: "Pulkit Bansal",
    quote:
      "Had to rush to office and my car was super dusty. Booked Bubble Drive last minute and they came in 30 mins. Saved me big time. Not fancy words, just good work. Thanks guys!",
    location: "Mansarovar",
    avatar: "https://placehold.co/100x100",
    initials: "PB",
    handle: "@pulkitb",
  },
  {
    name: "Saksham Kamthan",
    quote:
      "Service is good. Price also okay for the work they do. They cleaned seats also, which I didn’t expect. Hope you guys keep it like this only, Jaipur needs such service.",
    location: "Vaishali Nagar",
    avatar: "https://placehold.co/100x100",
    initials: "SK",
    handle: "@sakshamk",
  },
  {
    name: "Mukul Rathore",
    quote:
      "Honestly didn’t expect much but car looks like new. Even neighbours asked where I got it washed. 😄",
    location: "Mahesh Nagar",
    avatar: "https://placehold.co/100x100",
    initials: "MR",
    handle: "@mukulr",
  },
  {
    name: "Sameer Gurjar",
    quote:
      "First time tried this home car wash thing. Team was polite and did a neat job. Only wish they bring their own water next time 😅 but overall happy.",
    location: "C-Scheme",
    avatar: "https://placehold.co/100x100",
    initials: "SG",
    handle: "@sameerg",
  },
  {
    name: "Vikram Sharma",
    quote:
      "Good service, came on time and cleaned properly. Price is little high but okay because they come home. Car shine is good, let’s see if it stays same after few days.",
    location: "Mahesh Nagar",
    avatar: "https://placehold.co/100x100",
    initials: "VS",
    handle: "@vikrams",
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
                            <Avatar className="bg-muted">
                              <AvatarFallback>
                                <UserRound className="h-6 w-6 text-muted-foreground" />
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
