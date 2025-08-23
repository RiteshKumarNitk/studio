'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

const plans = [
  {
    name: 'Quick Sparkle',
    price: '₹499',
    duration: 'per wash',
    features: ['Exterior Wash', 'Tire Shine', 'Window Cleaning'],
    popular: false,
  },
  {
    name: 'Super Shine',
    price: '₹999',
    duration: 'per wash',
    features: ['Everything in Quick Sparkle', 'Interior Vacuuming', 'Dashboard Polish'],
    popular: true,
  },
  {
    name: 'Ultimate Glow',
    price: '₹1499',
    duration: 'per wash',
    features: ['Everything in Super Shine', 'Deep Upholstery Clean', 'Protective Wax Coating'],
    popular: false,
  },
];

export default function Pricing() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  return (
    <section id="plans" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Plan</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Simple, transparent pricing. No hidden fees. Ever.
          </p>
        </motion.div>
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-3 lg:gap-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={itemVariants}>
              <Card
                className={cn(
                  'flex flex-col h-full rounded-2xl shadow-lg transition-all duration-300',
                  plan.popular ? 'border-2 border-primary shadow-primary/20 -translate-y-4' : 'hover:-translate-y-2'
                )}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 right-4">Most Popular</Badge>
                )}
                <CardHeader className="p-6">
                  <CardTitle className="font-headline text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span> / {plan.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-6 space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <Check className="h-5 w-5 text-green-500" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                  <Button asChild size="lg" className="w-full font-bold" variant={plan.popular ? 'default' : 'outline'}>
                    <Link href="#contact">Pick Your Plan</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
