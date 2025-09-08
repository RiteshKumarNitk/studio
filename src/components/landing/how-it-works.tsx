'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarClock, Leaf, ShieldCheck, Car } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: <CalendarClock className="h-10 w-10 text-icon-primary" />,
    title: 'Book Your Service',
    description: 'Pick a time that works for you, and we’ll be there. No waiting, no hassle.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-icon-primary" />,
    title: 'Expert Car Care',
    description: 'Our car care experts are skilled, trustworthy, and dedicated to making your car shine.',
  },
  {
    icon: <Leaf className="h-10 w-10 text-icon-primary" />,
    title: 'Eco-Friendly Washing',
    description: 'We use water-saving techniques and biodegradable products to protect our planet.',
  },
   {
    icon: <Car className="h-10 w-10 text-icon-primary" />,
    title: 'Enjoy Your Ride',
    description: 'Drive away in a car that looks, smells, and feels brand new. Pure satisfaction.',
  },
];

export default function HowItWorks() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <section id="how-it-works" className="w-full bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl md:text-5xl">
            How We Make Magic Happen
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A simple, four-step process to a sparkling clean car.
          </p>
        </motion.div>
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="flex border-none  justify-center bg-transparent bg-none h-full flex-col items-center text-center p-6 shadow-none">
                <CardHeader className="p-0 justify-center items-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                  </div>
                  <CardTitle className="font-headline text-xl font-semibold">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-0 mt-2">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
