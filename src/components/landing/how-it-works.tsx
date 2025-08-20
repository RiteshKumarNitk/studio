import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { CalendarClock, Leaf, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <CalendarClock className="h-10 w-10 text-primary" />,
    title: 'Scheduled Doorstep Visits',
    description: 'Pick a time that works for you, and we’ll be there. No waiting, no hassle.',
  },
  {
    icon: <ShieldCheck className="h-10 w-10 text-primary" />,
    title: 'Trained & Verified Specialists',
    description: 'Our car care experts are skilled, trustworthy, and dedicated to making your car shine.',
  },
  {
    icon: <Leaf className="h-10 w-10 text-primary" />,
    title: 'Eco-Friendly Washing',
    description: 'We use water-saving techniques and biodegradable products to protect our planet.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            How We Make Magic Happen
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            A simple, three-step process to a sparkling clean car.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="flex flex-col items-center text-center p-6 rounded-2xl shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl">
              <CardHeader className="p-0">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    {feature.icon}
                </div>
                <CardTitle className="font-headline text-xl font-semibold">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent className="p-0 mt-2">
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
