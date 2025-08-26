"use client";

import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import {
  Sparkles,
  WandSparkles,
  Droplets,
  Wind,
  Car,
  SprayCan,
  Gauge,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const services = [
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    name: "Deep Cleaning",
    desc: "Thorough inside-out cleaning for a fresh look.",
  },
  {
    icon: <WandSparkles className="h-10 w-10 text-primary" />,
    name: "Polishing",
    desc: "Restores shine and removes fine scratches.",
  },
  {
    icon: <Droplets className="h-10 w-10 text-primary" />,
    name: "Waterless Wash",
    desc: "Eco-friendly cleaning with minimal water usage.",
  },
  {
    icon: <Wind className="h-10 w-10 text-primary" />,
    name: "Interior Vacuuming",
    desc: "Removes dust and debris from seats & carpets.",
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    name: "Tire Polish",
    desc: "Keeps your tires looking shiny and brand new.",
  },
  {
    icon: <Gauge className="h-10 w-10 text-primary" />,
    name: "Dashboard Polish",
    desc: "Protects & restores dashboard shine.",
  },
  {
    icon: <Car className="h-10 w-10 text-primary" />,
    name: "Ceramic Coating",
    desc: "Premium nano-protection for your car’s paint.",
  },
  {
    icon: <SprayCan className="h-10 w-10 text-primary" />,
    name: "Odor Removal",
    desc: "Removes stubborn odors and refreshes air.",
  },
];

export default function Services() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);

  return (
    <section ref={targetRef} id="services" className="relative h-[200vh] bg-background">
      <div className="sticky top-0 h-screen bg-secondary flex items-center overflow-hidden">
        <div className="container mx-auto">
          <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Our Premium Services
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              We offer a wide range of services to get your car looking its best.
            </p>
          </div>
          <motion.div style={{ x }} className="flex gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="min-w-[300px] flex-shrink-0 rounded-2xl shadow-lg"
              >
                <CardHeader className="flex flex-col items-center text-center p-6">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl font-semibold">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-center">
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
