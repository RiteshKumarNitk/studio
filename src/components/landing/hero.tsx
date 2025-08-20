import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[80vh] min-h-[500px] flex items-center justify-center text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-blue-50 to-background/50 -z-10"></div>
        <div className="absolute -bottom-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute -top-1/4 -right-1/4 w-1/2 h-1/2 bg-blue-200/20 rounded-full blur-3xl animate-pulse-slower"></div>
      
      <div className="container px-4 md:px-6 z-10">
        <div className="mx-auto max-w-3xl space-y-6">
            <h1 className="font-headline text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            Bubble Drive – Daily Dust, Leave It to Us
          </h1>
          <p className="text-lg text-muted-foreground md:text-xl">
            Your car deserves better than dust. We’ll take care of it.
          </p>
          <div className="flex flex-col items-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto font-bold text-lg px-8 py-6 rounded-full">
              <Link href="#plans">Book Your Wash Now</Link>
            </Button>
            <p className="text-sm text-muted-foreground">Your car called. It needs a little love.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
