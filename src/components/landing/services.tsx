"use client";

import { motion } from "framer-motion";
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section id="services" className="w-full bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Premium Services
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            We offer a wide range of services to get your car looking its best.
          </p>
        </motion.div>
        <motion.div
          className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex h-full flex-col items-center text-center p-6 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <CardHeader className="p-0">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {service.icon}
                  </div>
                  <CardTitle className="font-headline text-xl font-semibold">
                    {service.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{service.desc}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}