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

      <div className="container mx-auto px-8 md:px-12 lg:px-24  relative z-10 space-y-16">
        {/* Intro Heading */}
        <motion.div
          className="text-center max-w-3xl mx-auto"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl md:text-5xl">
            Who We Are
          </h2>
        </motion.div>

        {/* Paragraph 1 with image RIGHT */}
        <motion.div
          className="grid md:grid-cols-2 items-center gap-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground text-md/relaxed">
            “Meet us: Bubble Drive – a team of car lovers who can't bear to see
            your car covered in dust. We get it – it’s like your car’s wearing a
            dirty coat all the time. We’re Monica from Friends—we’re the ones
            who clean everything (yes, even the unspeakable spots). If your
            car’s looking dull, we want to bring the shine back.
          </p>
          <Card className="overflow-hidden rounded-2xl shadow-xl">
            <CardContent className="p-0">
              <Image
                alt="Clean Car"
                className="aspect-video w-full object-cover"
                src="https://images.pexels.com/photos/6872601/pexels-photo-6872601.jpeg"
                width={600}
                height={400}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* Paragraph 2 with image LEFT */}
        <motion.div
          className="grid md:grid-cols-2 items-center gap-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="overflow-hidden rounded-2xl shadow-xl order-last md:order-first">
            <CardContent className="p-0">
              <Image
                alt="Dusty Car"
                className="aspect-video w-full object-cover"
                src="https://images.pexels.com/photos/244206/pexels-photo-244206.jpeg"
                width={600}
                height={400}
              />
            </CardContent>
          </Card>
          <p className="text-muted-foreground text-md/relaxed">
            When we first started, we realized there were too many dusty cars
            and too many frustrated drivers wasting precious weekends at the
            service stations. That’s when we said, Enough! Let’s make a car wash
            service that’s quick, easy, and leaves your car looking like it just
            had a spa day (minus the cucumber slices).
          </p>
        </motion.div>

        {/* Paragraph 3 with image RIGHT */}
        <motion.div
          className="grid md:grid-cols-2 items-center gap-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-muted-foreground text-md/relaxed">
            We’re not here to offer just a clean. We're here to make sure your
            car feels as fresh as the first time you took it out for a ride.
            Whether it’s a quick wash or a full VIP treatment, we’ve got your
            car’s back—literally. We come, we clean, and we leave a happy
            car in our wake.
          </p>
          <Card className="overflow-hidden rounded-2xl shadow-xl">
            <CardContent className="p-0">
              <Image
                alt="Car Shine"
                className="aspect-video w-full object-cover"
                src="https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg"
                width={600}
                height={400}
              />
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </motion.section>
  );
}
