"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  WandSparkles,
  Droplets,
  Wind,
  Gauge,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const services = [
  { icon: Sparkles, name: "Deep Cleaning", desc: "Thorough inside-out cleaning for a fresh look." },
  { icon: WandSparkles, name: "Polishing", desc: "Restores shine and removes fine scratches." },
  { icon: Droplets, name: "Waterless Wash", desc: "Eco-friendly cleaning with minimal water usage." },
  { icon: Wind, name: "Interior Vacuuming", desc: "Removes dust and debris from seats & carpets." },
  { icon: Sparkles, name: "Tire Polish", desc: "Keeps your tires looking shiny and brand new." },
  { icon: Gauge, name: "Dashboard Polish", desc: "Protects & restores dashboard shine." },
];

export default function Services() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants = {
    hidden: { y: 40, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="services"
      className="relative w-full bg-secondary py-20 overflow-hidden"
    >
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        {/* heading */}
        <motion.div
          className="mx-auto max-w-3xl text-center"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-headline text-3xl md:text-5xl font-bold tracking-tight text-text-primary">
            Our Premium Services
          </h2>
          <p className="mt-4 text-muted-foreground text-md md:text-lg">
            Tailored solutions to give your car the glow it deserves.
          </p>
        </motion.div>

        {/* cards */}
        <motion.div
          className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div key={index} variants={itemVariants}>
                <Card
                  className="group relative h-full rounded-2xl 
                  bg-card shadow-lg 
                  hover:shadow-xl transition-all duration-500
                  overflow-hidden"
                >
                  <CardHeader className="flex flex-col items-center text-center p-5 relative z-10">
                    {/* icon bubble */}
                    <div className="mb-2 flex h-14 w-14 items-center justify-center rounded-full 
                      bg-primary/10
                      shadow-inner shadow-white/40 group-hover:scale-110 
                      transition-transform duration-500">
                      <Icon className="h-7 w-7 text-icon-primary drop-shadow" />
                    </div>
                    <CardTitle className="font-headline text-xl font-semibold text-text-primary">
                      {service.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-8 pb-5 text-center relative z-10">
                    <p className="text-muted-foreground text-md leading-relaxed">
                      {service.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
