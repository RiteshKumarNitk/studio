'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, Send, MessageCircle, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

export default function Contact({ selectedPlan, setSelectedPlan }: { selectedPlan: string | null; setSelectedPlan: (plan: string | null) => void; }) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', carModel: '', message: '' });

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({
        ...prev,
        message: `I'm interested in the '${selectedPlan}' plan.`,
      }));
    }
  }, [selectedPlan]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleCarModelChange = (value: string) => {
    setFormData((prev) => ({...prev, carModel: value}));
  }

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsLoading(false);
    
    // Reset form fields
    setFormData({ name: '', email: '', phone: '', carModel: '', message: '' });
    if (selectedPlan) {
      setSelectedPlan(null);
    }


    toast({
      title: 'Message Sent!',
      description: 'Thanks for reaching out. We will get back to you shortly.',
    });
  };

  const handleWhatsAppSend = () => {
    const { name, email, phone, carModel, message } = formData;
    if (!name || !message) {
      toast({
        variant: "destructive",
        title: 'Fields Missing',
        description: 'Please enter your name and a message to send via WhatsApp.',
      });
      return;
    }
    
    const yourPhoneNumber = '918946887702'; 
    
    let prefilledMessage = `Hello, my name is ${name}.`;
    if (email) {
      prefilledMessage += ` My email is ${email}.`;
    }
    if(phone) {
        prefilledMessage += ` My phone number is ${phone}.`;
    }
    if(carModel) {
        prefilledMessage += ` My car model is ${carModel}.`;
    }
    if (selectedPlan) {
      prefilledMessage += `\nI'm interested in the '${selectedPlan}' plan.`;
    }
    prefilledMessage += `\n\nMessage: ${message}`;

    const whatsappUrl = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="w-full relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-full w-full bg-secondary [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl md:text-5xl">Contact Us</h2>
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
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                {selectedPlan && (
                  <div className="space-y-2">
                    <Label htmlFor="plan">Selected Plan</Label>
                    <div className="flex h-10 w-full items-center rounded-md border border-input bg-muted px-3 py-2 text-sm">
                      <Star className="mr-2 h-4 w-4 text-icon-primary" />
                      {selectedPlan}
                    </div>
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input id="name" placeholder="Enter your name" required value={formData.name} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="Enter your email" required value={formData.email} onChange={handleInputChange} />
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="carModel">Car Model</Label>
                        <Select onValueChange={handleCarModelChange} value={formData.carModel}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select car model" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="Sedan">Sedan</SelectItem>
                                <SelectItem value="SUV">SUV</SelectItem>
                                <SelectItem value="Hatchback">Hatchback</SelectItem>
                                <SelectItem value="Coupe">Coupe</SelectItem>
                                <SelectItem value="Convertible">Convertible</SelectItem>
                                <SelectItem value="Minivan">Minivan</SelectItem>
                                <SelectItem value="Other">Other</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" required className="min-h-[120px]" value={formData.message} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
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
                  <Button type="button" size="lg" className="w-full font-bold bg-[#25D366] hover:bg-[#1EBE57] text-white" onClick={handleWhatsAppSend}>
                    <MessageCircle className="mr-2" />
                    Send via WhatsApp
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
