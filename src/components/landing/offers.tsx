import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TicketPercent, Users } from 'lucide-react';

const offers = [
    {
        icon: <TicketPercent className="h-8 w-8 text-primary" />,
        title: "Your First Wash Is Free",
        description: "Get ₹200 OFF on your first booking with us. Experience the Bubble Drive difference!",
    },
    {
        icon: <Users className="h-8 w-8 text-primary" />,
        title: "Refer a Friend",
        description: "Share the love! You and your friend both get ₹250 OFF when they book their first wash.",
    }
]

export default function Offers() {
  return (
    <section id="offers" className="w-full bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Shiny Deals, Shiny Cars. Shiny You!
          </h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Take advantage of our special offers and give your car the shine it deserves.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {offers.map((offer, index) => (
            <Card key={index} className="rounded-2xl shadow-lg">
                <CardHeader className="flex flex-row items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                        {offer.icon}
                    </div>
                    <CardTitle className="font-headline text-2xl">{offer.title}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{offer.description}</p>
                </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild size="lg" className="font-bold">
            <Link href="#plans">Get Your Shiny Deal</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
