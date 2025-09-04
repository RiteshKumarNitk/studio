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
    price: '699',
    duration: 'Just a little TLC for ₹699 (1 Week)',
    features: ['Daily Dust Clean (Microfiber Cloth)', '1 Deep Clean (Exterior – No Foam, Tyre Clean)', '1 Dashboard Polish', '1 Interior Vacuum'],
    popular: false,
  },
  {
    name: 'Super Shine',
    price: '1299',
    duration: 'A smart clean for ₹1299 (2 Weeks)',
    features: ['Daily Dust Clean (Microfiber Cloth)', '1 Deep Clean ( Interior or Exterior with Foam, Tyre Clean)', '2 Dashboard Polish', '2 Interior Vacuum'],
    popular: true,
  },
  {
    name: 'Ultimate Glow',
    price: '1799',
    duration: 'Top-tier treatment for ₹1799 (1 Month)',
    features: ['Daily Dust Clean (Microfiber Cloth)', '1 Deep Cleans (Interior or Exterior with Foam, Tyre Clean)', '4 Dashboard Polish', ' 4 Interior Vacuum'],
    popular: false,
  },  
];

export default function Pricing({ onPlanSelect }: { onPlanSelect: (planName: string) => void }) {
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
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl md:text-5xl">Choose Your Plan</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Simple, transparent pricing. No hidden fees. Ever.
          </p>
        </motion.div>
        <motion.div
          className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {plans.map((plan) => (
            <motion.div key={plan.name} variants={itemVariants} className="flex">
              <Card
                className={cn(
                  'flex flex-col h-full w-full rounded-2xl shadow-lg transition-all duration-300',
                  plan.popular ? 'border-2 border-primary shadow-primary/20 scale-105' : 'hover:scale-105'
                )}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 right-4">Most Popular</Badge>
                )}
                <CardHeader className="p-6">
                  <CardTitle className="font-headline text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription>
                    <span className="text-4xl font-bold text-foreground">₹{plan.price}</span> / {plan.duration}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 p-6 space-y-4">
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        {/* <Check className="h-5 w-5 text-green-500" /> */}
                        <div className="">✅</div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="p-6 mt-auto">
                  <Button
                    size="lg"
                    className="w-full font-bold"
                    variant={plan.popular ? 'default' : 'outline'}
                    onClick={() => onPlanSelect(plan.name)}
                  >
                    Pick Your Plan
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
