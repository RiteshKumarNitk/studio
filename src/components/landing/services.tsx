'use client';

import React from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, WandSparkles, Droplets, Wind, Gauge, Car, SprayCan } from 'lucide-react';
import TireIcon from '@/components/icons/tire-icon';

const services = [
  { icon: <Sparkles className="h-8 w-8" />, name: 'Deep Cleaning' },
  { icon: <WandSparkles className="h-8 w-8" />, name: 'Polishing' },
  { icon: <Droplets className="h-8 w-8" />, name: 'Waterless Wash' },
  { icon: <Wind className="h-8 w-8" />, name: 'Interior Vacuuming' },
  { icon: <TireIcon className="h-8 w-8" />, name: 'Tire Polish' },
  { icon: <Gauge className="h-8 w-8" />, name: 'Dashboard Polish' },
  { icon: <Sparkles className="h-8 w-8" />, name: 'Exterior Waxing' },
  { icon: <WandSparkles className="h-8 w-8" />, name: 'Headlight Restoration' },
  { icon: <Car className="h-8 w-8" />, name: 'Ceramic Coating' },
  { icon: <SprayCan className="h-8 w-8" />, name: 'Odor Removal' },
  { icon: <Sparkles className="h-8 w-8" />, name: 'Engine Bay Cleaning' },
  { icon: <WandSparkles className="h-8 w-8" />, name: 'Glass Polishing' },
];

export default function Services() {
  const targetRef = React.useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ['start end', 'end start'],
  });

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-50%']);

  return (
    <section id="services" ref={targetRef} className="w-full bg-secondary relative h-[150vh]">
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <div className="container mx-auto px-4 md:px-6 flex flex-col justify-center h-full">
            <div className="mx-auto max-w-2xl text-center mb-12">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Services
              </h2>
              <p className="mt-4 text-muted-foreground md:text-xl">
                From a quick wash to a full detail, we've got you covered.
              </p>
            </div>
            <motion.div style={{ x }} className="flex gap-4">
              {services.map((service, index) => (
                  <div key={index} className="flex-shrink-0 w-[250px] sm:w-[300px] p-2">
                    <Card className="group h-full overflow-hidden rounded-2xl text-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-2">
                      <CardContent className="flex h-full flex-col items-center justify-center gap-4 p-6">
                        <div className="text-primary group-hover:text-primary-foreground">
                          {service.icon}
                        </div>
                        <h3 className="font-semibold">{service.name}</h3>
                      </CardContent>
                    </Card>
                  </div>
                ))}
            </motion.div>
            <div className="mt-12 text-center">
              <Button asChild size="lg" className="font-bold">
                <Link href="#plans">Let's Get That Shine</Link>
              </Button>
            </div>
        </div>
      </div>
    </section>
  );
}
