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

// ✅ Updated services list with descriptions
const services = [
  {
    icon: <Sparkles className="h-10 w-10" />,
    name: "Deep Cleaning",
    desc: "Thorough inside-out cleaning for a fresh look.",
  },
  {
    icon: <WandSparkles className="h-10 w-10" />,
    name: "Polishing",
    desc: "Restores shine and removes fine scratches.",
  },
  {
    icon: <Droplets className="h-10 w-10" />,
    name: "Waterless Wash",
    desc: "Eco-friendly cleaning with minimal water usage.",
  },
  {
    icon: <Wind className="h-10 w-10" />,
    name: "Interior Vacuuming",
    desc: "Removes dust and debris from seats & carpets.",
  },
  {
    icon: <Sparkles className="h-10 w-10" />,
    name: "Tire Polish",
    desc: "Keeps your tires looking shiny and brand new.",
  },
  {
    icon: <Gauge className="h-10 w-10" />,
    name: "Dashboard Polish",
    desc: "Protects & restores dashboard shine.",
  },
  // {
  //   icon: <Sparkles className="h-10 w-10" />,
  //   name: "Exterior Waxing",
  //   desc: "Gives long-lasting paint protection & gloss.",
  // },
  // {
  //   icon: <WandSparkles className="h-10 w-10" />,
  //   name: "Headlight Restoration",
  //   desc: "Improves brightness by removing fog & yellowing.",
  // },
  // {
  //   icon: <Car className="h-10 w-10" />,
  //   name: "Ceramic Coating",
  //   desc: "Premium nano-protection for your car’s paint.",
  // },
  // {
  //   icon: <SprayCan className="h-10 w-10" />,
  //   name: "Odor Removal",
  //   desc: "Removes stubborn odors and refreshes air.",
  // },
  // {
  //   icon: <Sparkles className="h-10 w-10" />,
  //   name: "Engine Bay Cleaning",
  //   desc: "Safe engine cleaning for better performance.",
  // },
  // {
  //   icon: <WandSparkles className="h-10 w-10" />,
  //   name: "Glass Polishing",
  //   desc: "Crystal-clear finish for all glass surfaces.",
  // },
];

export default function ServicesGrid() {
  return (
    <section className="relative w-full py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="mx-auto max-w-6xl px-4">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12 text-gray-800"
        >
          Our Premium Services
        </motion.h2>

        {/* ✅ Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, rotate: 1 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="flex flex-col items-center text-center rounded-2xl bg-white shadow-md p-8 cursor-pointer hover:shadow-xl hover:bg-blue-50 group"
            >
              {/* Icon */}
              <div className="text-blue-600 mb-4 group-hover:animate-bounce">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-gray-700 group-hover:text-blue-600">
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-500">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
