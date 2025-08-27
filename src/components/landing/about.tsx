'use client';

import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { motion } from 'framer-motion';

export default function About() {
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const bubbles = Array.from({ length: 10 });

  return (
    <motion.section
      id="about"
      className="w-full bg-secondary relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={variants}
    >
        {/* Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {bubbles.map((_, i) => {
          const size = Math.random() * 80 + 30;
          return (
            <motion.div
              key={i}
              className="absolute bg-primary/20 rounded-full"
              initial={{
                bottom: -50,
                left: `${Math.random() * 100}%`,
                scale: Math.random() * 0.8 + 0.2,
                opacity: Math.random() * 0.4 + 0.1,
              }}
              animate={{
                bottom: '100%',
                transition: {
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  repeatType: 'loop',
                  ease: 'linear',
                  delay: Math.random() * 8,
                },
              }}
              style={{
                width: `${size}px`,
                height: `${size}px`,
              }}
            />
          );
        })}
      </div>

      <div className="container mx-auto grid items-center gap-8 px-8 md:grid-cols-2 md:px-12 lg:gap-16 relative z-10">
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl md:text-5xl">
            Who We Are
          </h2>
          <p className="text-muted-foreground text-base/relaxed lg:text-lg/relaxed">
            We're not just car washers; we're car lovers. Bubble Drive started with a simple idea: what if getting your car washed was as easy as ordering a pizza? We noticed our friends and family struggling to find time for car care, driving around with dusty bonnets and smudged windows. So, we created a service that brings the sparkle to your doorstep. We use eco-friendly products because we love our planet as much as we love clean cars. Our team is a bunch of friendly, trained professionals who believe a clean car equals a happy driver. Our mission is to provide a convenient, high-quality, and environmentally responsible car wash service that leaves you with a smile and a car that looks and feels brand new.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Card className="overflow-hidden rounded-2xl shadow-xl">
            <CardContent className="p-0">
              <Image
                alt="Clean vs Dusty Car"
                className="aspect-video w-full object-cover"
                height="400"
                src="https://images.pexels.com/photos/6872601/pexels-photo-6872601.jpeg"
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
