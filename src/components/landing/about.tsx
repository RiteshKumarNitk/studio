'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function About() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <motion.section
      id="about"
      className="w-full bg-secondary"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
      <div className="container mx-auto grid items-center gap-8 px-4 md:grid-cols-2 md:px-6 lg:gap-16">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Who We Are
          </h2>
          <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            We're not just car washers; we're car lovers. Bubble Drive started with a simple idea: what if getting your car washed was as easy as ordering a pizza? We noticed our friends and family struggling to find time for car care, driving around with dusty bonnets and smudged windows. So, we created a service that brings the sparkle to your doorstep. We use eco-friendly products because we love our planet as much as we love clean cars. Our team is a bunch of friendly, trained professionals who believe a clean car equals a happy driver. Our mission is to provide a convenient, high-quality, and environmentally responsible car wash service that leaves you with a smile and a car that looks and feels brand new.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="overflow-hidden rounded-2xl">
            <CardContent className="p-0">
              <Image
                alt="Clean vs Dusty Car"
                className="aspect-video w-full object-cover"
                height="400"
                src="https://placehold.co/600x400"
                data-ai-hint="clean car shiny"
                width="600"
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
