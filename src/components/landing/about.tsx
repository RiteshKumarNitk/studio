"use client";

import Image from "next/image";
import { CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

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
      {/* Floating bubbles background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {bubbles.map((_, i) => {
          const size = Math.random() * 80 + 30;
          return (
            <motion.div
              key={i}
              className="absolute bg-primary/60 rounded-full"
              initial={{
                bottom: -50,
                left: `${Math.random() * 100}%`,
                scale: Math.random() * 0.8 + 0.2,
                opacity: Math.random() * 0.4 + 0.1,
              }}
              animate={{
                bottom: "100%",
                transition: {
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
                  delay: Math.random() * 8,
                },
              }}
              style={{ width: `${size}px`, height: `${size}px` }}
            />
          );
        })}
      </div>

      <div className="container mx-auto px-8 md:px-12 lg:px-24 relative z-10 space-y-20">
        {/* Block 1: Who We Are */}
        <motion.div
          className="grid md:grid-cols-2 items-center gap-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Who We Are
            </h2>
            <p className="text-muted-foreground text-md/relaxed">
              At Bubble Drive, we’re a team of car lovers who take pride in
              making vehicles look their absolute best. As Jaipur’s first
              subscription-based daily doorstep car cleaning service, we know
              how frustrating it can be to see your car lose its shine, which is
              why we’ve made it our mission to bring that fresh,
              just-off-the-lot feeling back to every ride.
            </p>
          </div>
          <div className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                alt="Who We Are"
                src="/testimonial/WhoWeAre.png"
                width={600}
                height={400}
                className="w-full object-contain"
              />
            </CardContent>
          </div>
        </motion.div>

        {/* Block 2: Why We Started */}
        <motion.div
          className="grid md:grid-cols-2 items-center gap-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className="overflow-hidden order-last md:order-first">
            <CardContent className="p-0">
              <Image
                alt="Why We Started"
                src="/testimonial/Why_We_Started.png"
                width={600}
                height={400}
                className="w-full object-contain"
              />
            </CardContent>
          </div>
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              Why We Started
            </h2>
            <p className="text-muted-foreground text-md/relaxed">
              The idea came to life when we noticed how much time and effort car
              owners spent at traditional service stations, often for average
              results. So, we decided to do things differently, offering a
              quick, hassle-free service that delivers professional care with a
              touch of personal attention.
            </p>
          </div>
        </motion.div>

        {/* Block 3: What We Promise */}
        <motion.div
          className="grid md:grid-cols-2 items-center gap-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-4">
            <h2 className="font-headline text-3xl font-bold tracking-tight text-text-primary sm:text-4xl">
              What We Promise
            </h2>
            <p className="text-muted-foreground text-md/relaxed">
              Every car we work on is treated like our own. Whether it’s a
              simple clean or a premium detailing session, we ensure precision,
              quality, and a result that makes both you and your car feel
              refreshed.
            </p>
          </div>
          <div className="overflow-hidden">
            <CardContent className="p-0">
              <Image
                alt="What We Promise"
                src="/testimonial/whatwepromise.png"
                width={600}
                height={400}
                className="w-full object-contain"
              />
            </CardContent>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
