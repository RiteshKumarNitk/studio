'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    
    // Reset form fields (if you control them with state)
    (e.target as HTMLFormElement).reset();

    toast({
      title: 'Message Sent!',
      description: 'Thanks for reaching out. We will get back to you shortly.',
    });
  };


  return (
    <section id="contact" className="w-full relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-full w-full bg-blue-50 [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h2>
          <p className="text-muted-foreground md:text-xl">
            Have questions? We'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-lg">
          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" required className="min-h-[120px]" />
                </div>
                <Button type="submit" size="lg" className="w-full font-bold" disabled={isLoading}>
                  {isLoading ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    <>
                      <Send className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
