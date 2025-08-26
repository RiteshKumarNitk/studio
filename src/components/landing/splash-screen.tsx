import Image from 'next/image';
import { motion } from 'framer-motion';

export default function SplashScreen() {
  const bubbles = Array.from({ length: 15 });

  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background text-foreground overflow-hidden">
      {/* Bubbles Background */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((_, i) => (
          <motion.div
            key={i}
            className="absolute bg-primary/20 rounded-full"
            initial={{
              bottom: -50,
              left: `${Math.random() * 100}%`,
              scale: Math.random() * 0.8 + 0.2,
              opacity: Math.random() * 0.5 + 0.2,
            }}
            animate={{
              bottom: '100%',
              transition: {
                duration: Math.random() * 8 + 5,
                repeat: Infinity,
                repeatType: 'loop',
                ease: 'linear',
                delay: Math.random() * 5,
              },
            }}
            style={{
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="z-10 flex flex-col items-center gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
        >
          <Image src="/logo.png" alt="Bubble Drive Logo" width={250} height={67} />
        </motion.div>
        <div className="mt-8 h-8 w-8 animate-spin rounded-full border-4 border-solid border-primary border-t-transparent"></div>
      </div>
    </div>
  );
}
