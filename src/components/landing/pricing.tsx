import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';
import { cn } from '@/lib/utils';

const plans = [
  {
    name: 'Starter Shine',
    price: '₹699',
    duration: '1 Week',
    features: ['2 Washes', 'Exterior Cleaning', 'Tire Shine'],
    popular: false,
  },
  {
    name: 'Classic Clean',
    price: '₹1299',
    duration: '2 Weeks',
    features: ['4 Washes', 'Exterior Cleaning', 'Tire Shine', 'Interior Vacuuming'],
    popular: true,
  },
  {
    name: 'Elite Detailing',
    price: '₹1799',
    duration: '1 Month',
    features: ['6 Washes', 'Full Detailing', 'Wax Polish', 'Interior Deep Clean'],
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="plans" className="w-full">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Choose Your Plan</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Simple, transparent pricing. No hidden fees. Ever.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3 lg:gap-12">
          {plans.map((plan) => (
            <Card key={plan.name} className={cn(
                "flex flex-col rounded-2xl shadow-lg transition-all duration-300",
                plan.popular ? "border-2 border-primary shadow-primary/20 -translate-y-4" : "hover:-translate-y-2"
            )}>
              {plan.popular && (
                <Badge className="absolute -top-3 right-4">Most Popular</Badge>
              )}
              <CardHeader className="p-6">
                <CardTitle className="font-headline text-2xl font-bold">{plan.name}</CardTitle>
                <CardDescription>
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span> / {plan.duration}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1 p-6 space-y-4">
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-5 w-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="p-6">
                <Button asChild size="lg" className="w-full font-bold" variant={plan.popular ? "default" : "outline"}>
                  <Link href="#contact">Pick Your Plan</Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
