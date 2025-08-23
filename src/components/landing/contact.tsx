'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Loader2, WandSparkles } from 'lucide-react';
import { getQuote } from '@/ai/flows/get-quote-flow';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [carType, setCarType] = useState('');
  const [serviceType, setServiceType] = useState('');
  const [quote, setQuote] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleGetQuote = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!carType || !serviceType) {
      toast({
        title: 'Missing Information',
        description: 'Please select a car type and a service type.',
        variant: 'destructive',
      });
      return;
    }
    setIsLoading(true);
    setQuote('');
    try {
      const result = await getQuote({ carType, serviceType });
      setQuote(result.quote);
    } catch (error) {
      console.error(error);
      toast({
        title: 'Error',
        description: 'Could not fetch a quote. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };


  return (
    <section id="contact" className="w-full relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-full w-full bg-blue-50 [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Get an Instant Quote</h2>
          <p className="text-muted-foreground md:text-xl">
            Select your car and service type to see your personalized price.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-lg">
          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle>Instant Quote</CardTitle>
              <CardDescription>No waiting, no surprises. Get your price now.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleGetQuote}>
                <div className="space-y-2">
                  <Label htmlFor="car-type">Car Type</Label>
                   <Select onValueChange={setCarType} value={carType}>
                    <SelectTrigger id="car-type">
                      <SelectValue placeholder="Select your car type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="hatchback">Hatchback</SelectItem>
                      <SelectItem value="sedan">Sedan</SelectItem>
                      <SelectItem value="suv">SUV</SelectItem>
                      <SelectItem value="luxury">Luxury</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="service-type">Service Type</Label>
                  <Select onValueChange={setServiceType} value={serviceType}>
                    <SelectTrigger id="service-type">
                      <SelectValue placeholder="Select your service type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="quick-sparkle">Quick Sparkle</SelectItem>
                      <SelectItem value="super-shine">Super Shine</SelectItem>
                      <SelectItem value="ultimate-glow">Ultimate Glow</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <Button type="submit" size="lg" className="w-full font-bold" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <WandSparkles className="mr-2" />
                      Get My Quote
                    </>
                  )}
                </Button>
              </form>
               {quote && (
                <div className="mt-6 text-center bg-primary/10 p-4 rounded-lg">
                  <p className="text-lg">Your Estimated Quote:</p>
                  <p className="text-3xl font-bold text-primary">{quote}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
