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
      className="relative w-full bg-gradient-to-b from-secondary via-background to-secondary py-20 overflow-hidden"
    >
      {/* floating gradient blobs */}
      <div className="absolute -top-20 -left-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute top-40 -right-20 h-96 w-96 rounded-full bg-accent/20 blur-3xl" />

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

        {/* bubble cards */}
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
                  className="group relative h-full rounded-[2.5rem] border border-white/30 
                  bg-gradient-to-br from-white/70 via-white/30 to-white/20 
                  backdrop-blur-xl shadow-[0_8px_25px_rgba(0,0,0,0.08)] 
                  hover:shadow-[0_12px_40px_rgba(0,0,0,0.15)] transition-all duration-500
                  overflow-hidden"
                >
                  {/* glossy highlight arc */}
                  <div className="absolute -top-16 left-1/2 -translate-x-1/2 w-[120%] h-40 rounded-[50%] bg-gradient-to-b from-white/60 to-transparent opacity-40 group-hover:opacity-60 transition-opacity" />

                  {/* iridescent shine */}
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.6),transparent_70%)]" />

                  <CardHeader className="flex flex-col items-center text-center p-10 relative z-10">
                    {/* icon bubble */}
                    <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full 
                      bg-primary/10
                      shadow-inner shadow-white/40 group-hover:scale-110 
                      transition-transform duration-500">
                      <Icon className="h-10 w-10 text-icon-primary drop-shadow" />
                    </div>
                    <CardTitle className="font-headline text-xl font-semibold text-text-primary">
                      {service.name}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-8 pb-10 text-center relative z-10">
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
