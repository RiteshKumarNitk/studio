'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Loader2, MessageCircle, Star } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const locations = [
    'C-Scheme', 'Civil Lines', 'Malviya Nagar', 'Vaishali Nagar', 'Raja Park', 
    'Mansarovar', 'Jagatpura', 'Pratap Nagar', 'Bani Park', 'Shyam Nagar', 
    'Sodala', 'Durgapura', 'Sanganer', 'Muralipura', 'Patrakar Colony', 
    'Nirman Nagar', 'Mahesh Nagar', 'Triveni Nagar', 'Gopalpura'
];
const carBrands = [
    'Maruti Suzuki', 'Hyundai', 'Tata', 'Mahindra', 'Kia', 'Toyota', 'Honda', 
    'Volkswagen', 'Skoda', 'Renault', 'Ford', 'Nissan', 'MG', 'Jeep',
    'Mercedes-Benz', 'BMW', 'Audi', 'Jaguar', 'Land Rover', 'Volvo', 'Porsche',
    'Other'
];

const plans = ['Starter Shine', 'Classic Clean', 'Elite Detailing'];

export default function Contact({ selectedPlan, setSelectedPlan }: { selectedPlan: string | null; setSelectedPlan: (plan: string | null) => void; }) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', phone: '', carModel: '', address: '', message: '' });

  useEffect(() => {
    if (selectedPlan) {
      setFormData((prev) => ({
        ...prev,
        message: `I'm interested in the '${selectedPlan}' plan.`,
      }));
    } else {
        setFormData((prev) => ({
            ...prev,
            message: ``,
        }));
    }
  }, [selectedPlan]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };
  
  const handlePlanChange = (value: string) => {
    setSelectedPlan(value);
  };

  const handleCarModelChange = (value: string) => {
    setFormData((prev) => ({...prev, carModel: value}));
  }

  const handleAddressChange = (value: string) => {
    setFormData((prev) => ({...prev, address: value}));
  }


  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    const { name, phone, carModel, address, message } = formData;
    if (!name || !message) {
      toast({
        variant: "destructive",
        title: 'Fields Missing',
        description: 'Please enter your name and a message to send via WhatsApp',
      });
      setIsLoading(false);
      return;
    }
    
    const yourPhoneNumber = '919461603054'; 

    
    let prefilledMessage = `Hello, my name is ${name}.`;
    if(phone) {
        prefilledMessage += ` My phone number is ${phone}.`;
    }
    if(carModel) {
        prefilledMessage += ` My car brand is ${carModel}.`;
    }
     if(address) {
        prefilledMessage += ` My address is in ${address}.`;
    }
    if (selectedPlan) {
      prefilledMessage += `\nI'm interested in the '${selectedPlan}' plan.`;
    }
    prefilledMessage += `\n\nMessage: ${message}`;

    const whatsappUrl = `https://wa.me/${yourPhoneNumber}?text=${encodeURIComponent(prefilledMessage)}`;
    
    window.open(whatsappUrl, '_blank');
    
    setIsLoading(false);
    
    // Reset form fields
    setFormData({ name: '', phone: '', carModel: '', address: '', message: '' });
    if (selectedPlan) {
      setSelectedPlan(null);
    }
  };

  return (
    <section id="contact" className="w-full relative overflow-hidden py-16 sm:py-20 md:py-24">
        <div className="absolute top-0 left-0 -z-10 h-full w-full bg-white [mask-image:radial-gradient(100%_100%_at_top_right,white,transparent)]"></div>
        <div className="absolute bottom-0 right-0 -z-10 h-full w-full bg-secondary [mask-image:radial-gradient(100%_100%_at_bottom_left,white,transparent)]"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-xl space-y-4 text-center">
          <h2 className="font-headline text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl md:text-5xl">Book Your Wash</h2>
          <p className="text-muted-foreground md:text-xl">
            Have questions or want to schedule a wash? We'd love to hear from you.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl">
          <Card className="shadow-lg rounded-2xl">
            <CardHeader>
              <CardTitle>Send us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you via WhatsApp.</CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4" onSubmit={handleFormSubmit}>
                <div className="space-y-2">
                  <Label htmlFor="plan">Selected Plan</Label>
                  <Select onValueChange={handlePlanChange} value={selectedPlan || ''}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a plan" />
                    </SelectTrigger>
                    <SelectContent>
                      {plans.map((plan) => (
                        <SelectItem key={plan} value={plan}>
                          <div className="flex items-center">
                            <Star className="mr-2 h-4 w-4 text-icon-primary" />
                            {plan}
                          </div>
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" placeholder="Enter your name" required value={formData.name} onChange={handleInputChange} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" placeholder="Enter your phone number" value={formData.phone} onChange={handleInputChange} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="carModel">Car Brand</Label>
                        <Select onValueChange={handleCarModelChange} value={formData.carModel}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select car brand" />
                            </SelectTrigger>
                            <SelectContent>
                                {carBrands.map(brand => (
                                    <SelectItem key={brand} value={brand}>{brand}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                 <div className="space-y-2">
                      <Label htmlFor="address">Select Your Area</Label>
                        <Select onValueChange={handleAddressChange} value={formData.address}>
                            <SelectTrigger>
                                <SelectValue placeholder="Select your area in Jaipur" />
                            </SelectTrigger>
                            <SelectContent>
                                {locations.map(location => (
                                    <SelectItem key={location} value={location}>{location}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message" required className="min-h-[120px]" value={formData.message} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col sm:flex-row gap-2">
                  <Button type="submit" size="lg" className="w-full font-bold bg-[#25D366] hover:bg-[#1EBE57] text-white" disabled={isLoading}>
                    {isLoading ? (
                      <Loader2 className="animate-spin" />
                    ) : (
                      <>
                        <MessageCircle className="mr-2" />
                        Send via WhatsApp
                      </>
                    )}
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
