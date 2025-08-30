"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
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
                bottom: "100%",
                transition: {
                  duration: Math.random() * 15 + 10,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear",
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
            “Meet us: Bubble Drive – a team of car lovers who can't bear to see
            your car covered in dust. We get it – it’s like your car’s wearing a
            dirty coat all the time. We’re Monica from Friends—we’re the ones
            who clean everything (yes, even the unspeakable spots). If your
            car’s looking dull, we want to bring the shine back,
          </p>
          <p className="text-muted-foreground text-base/relaxed lg:text-lg/relaxed">
            When we first started, we realized there were too many dusty cars
            and too many frustrated drivers wasting precious weekends at the
            service stations. That’s when we said, Enough! Let’s make a car wash
            service that’s quick, easy, and leaves your car looking like it just
            had a spa day (minus the cucumber slices).
          </p>
          <p className="text-muted-foreground text-base/relaxed lg:text-lg/relaxed">
            We’re not here to offer just a clean. We're here to make sure your
            car feels as fresh as the first time you took it out for a ride.
            Whether it’s a quick wash or a full VIP treatment, we’ve got your
            car’s back—literally. We come, we clean, and we leave a happy
            car in our wake.”
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
