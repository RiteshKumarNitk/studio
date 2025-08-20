import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Sparkles, WandSparkles, Droplets, Wind, Gauge } from 'lucide-react';
import TireIcon from '@/components/icons/tire-icon';

const services = [
  { icon: <Sparkles className="h-8 w-8" />, name: 'Deep Cleaning' },
  { icon: <WandSparkles className="h-8 w-8" />, name: 'Polishing' },
  { icon: <Droplets className="h-8 w-8" />, name: 'Waterless Wash' },
  { icon: <Wind className="h-8 w-8" />, name: 'Interior Vacuuming' },
  { icon: <TireIcon className="h-8 w-8" />, name: 'Tire Polish' },
  { icon: <Gauge className="h-8 w-8" />, name: 'Dashboard Polish' },
];

export default function Services() {
  return (
    <section id="services" className="w-full bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Our Services
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            From a quick wash to a full detail, we've got you covered.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-6">
          {services.map((service) => (
            <Card key={service.name} className="group overflow-hidden rounded-2xl text-center transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:-translate-y-2">
              <CardContent className="flex flex-col items-center justify-center gap-4 p-6">
                <div className="text-primary group-hover:text-primary-foreground">{service.icon}</div>
                <h3 className="font-semibold">{service.name}</h3>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
            <Button asChild size="lg" className="font-bold">
                <Link href="#plans">Let's Get That Shine</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
