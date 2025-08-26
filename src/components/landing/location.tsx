'use client';

import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function Location() {
  return (
    <motion.section
      id="location"
      className="w-full bg-white py-16 sm:py-20 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Section Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Find Us Here
          </h2>
          <p className="mt-4 text-muted-foreground md:text-lg">
            We are conveniently located to serve you better.
          </p>
        </div>

        {/* Map and Address */}
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-12 items-center">
          {/* Google Maps Embed */}
          <div className="overflow-hidden rounded-2xl shadow-lg border">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.031599946056!2d77.6358236153689!3d12.969856990857398!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae16a6774e64f7%3A0x80521e42353341ed!2sIndiranagar%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1628854457335!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              title="Google Map of Bubble Drive location"
            ></iframe>
          </div>

          {/* Address Details */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-xl font-bold">Our Workshop</h3>
                <p className="text-muted-foreground">
                  123, Sparkle Avenue, Carters Road <br/>
                  Bengaluru, Karnataka - 560038 <br/>
                  India
                </p>
                <p className="mt-2 text-muted-foreground">
                  <strong>Hours:</strong> Mon-Sun, 9:00 AM - 7:00 PM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
