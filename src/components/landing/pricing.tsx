'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
// import { motion } from "framer-motion";

const monthlyPlans = [
  {
    name: 'Starter Shine',
    price: '699',
    timeduration:'7 Days',
    description: 'For cars that need a quick refresh, this plan’s got your back.',
    features: [
      'Daily Dust Clean (Microfiber Cloth)',
      '1 Deep Clean (Exterior – No Foam, Tyre Clean)',
      '1 Dashboard Polish',
      '1 Interior Vacuum',
    ],
    popular: false,
  },
  {
    name: 'Elite Detailing',
    price: '1799',
    timeduration:'1 Month',
    description: 'VIP treatment for the car that deserves real care.',
    features: [
      'Daily Dust Clean (Microfiber Cloth)',
      '1 Deep Cleans (Interior or Exterior with Foam, Tyre Clean)',
      '4 Dashboard Polish',
      '4 Interior Vacuum',
    ],
    popular: true,
  },
  {
    name: 'Classic Clean',
    price: '1299',
    timeduration:'1 Month (Alternate Days)',
    description: "The sweet spot for weekly cleaning and shine.",
    features: [
      'Daily Dust Clean (Microfiber Cloth)',
      '1 Deep Clean (Interior or Exterior with Foam, Tyre Clean)',
      '2 Dashboard Polish',
      '2 Interior Vacuum',
    ],
    popular: false,
  },
];

const singlePlan = {
  name: "Instant Glow",
  price: "349",
  timeduration: "Single Deep Clean",
  description: "For those days when your car needs a full spa treatment — we got you.",
  features: [
    "Daily Dust Clean (Microfiber Cloth)",
    "Deep Clean (Interior or Exterior with Foam)",
    "Dashboard Polish",
    "Interior Vacuum",
  ],
  popular: true,
};

export default function Pricing({ onPlanSelect }: { onPlanSelect: (planName: string) => void }) {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  return (
    <section id="plans" className="w-full py-12">
      <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="mx-auto max-w-2xl text-center"
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-headline text-3xl font-bold tracking-tighter text-text-primary sm:text-4xl md:text-5xl">
              Choose Your Plan
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl">
              Simple, transparent pricing. No hidden fees. Ever.
            </p>
          </motion.div>
        {/* Tabs */}
        <Tabs defaultValue="monthly" className="w-full mt-3">
         <div className="flex justify-center mb-10">
            <TabsList className="relative bg-muted/40 backdrop-blur-sm border border-border rounded-full p-1 w-[320px] shadow-inner">
              <TabsTrigger
                value="monthly"
                className="data-[state=active]:bg-primary data-[state=active]:text-white
                          data-[state=active]:shadow-md transition-all duration-300
                          rounded-full px-6 py-2 text-sm font-medium"
              >
                Monthly Plans
              </TabsTrigger>

              <TabsTrigger
                value="single"
                className="data-[state=active]:bg-primary data-[state=active]:text-white
                          data-[state=active]:shadow-md transition-all duration-300
                          rounded-full px-6 py-2 text-sm font-medium"
              >
                Single Service
              </TabsTrigger>
            </TabsList>
          </div>


          {/* ========== MONTHLY PLANS TAB ========== */}
          <TabsContent value="monthly">
            <motion.div
              className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >
              {monthlyPlans.map((plan) => (
                <motion.div key={plan.name} variants={itemVariants} className="flex">
                  <Card
                    className={cn(
                      'flex flex-col h-full w-full rounded-2xl shadow-lg transition-all duration-300',
                      plan.popular ? 'border-2 border-primary shadow-primary/20 scale-105' : 'hover:scale-105'
                    )}
                  >
                    {plan.popular && (
                      <Badge className="absolute -top-3 right-4">Most Popular</Badge>
                    )}
                    <CardHeader className="p-6">
                      <CardTitle className="font-headline text-2xl font-bold">{plan.name}</CardTitle>
                      <CardDescription>
                        <span className="text-4xl font-bold text-foreground">₹{plan.price}</span>
                        <div className="  text-[#FF8800]">{plan.timeduration}</div>
                      </CardDescription>
                      <p className="mt-2 text-sm text-gray-600  ">{plan.description}</p>
                    </CardHeader>

                    <CardContent className="flex-1 px-6 space-y-3">
                      <ul className="space-y-2">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2">
                            ✅ <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter className="px-6 mt-auto">
                      <Button
                        size="lg"
                        className="w-full font-bold"
                        variant={plan.popular ? 'default' : 'outline'}
                        onClick={() => onPlanSelect(plan.name)}
                      >
                        Pick Your Plan
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* ========== SINGLE SERVICE TAB ========== */}
          {/* ========== SINGLE SERVICE TAB ========== */}
          <TabsContent value="single">
            <motion.div
              className="mx-auto max-w-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Card
                className={cn(
                  "relative flex flex-col rounded-2xl shadow-lg transition-all duration-300",
                  singlePlan.popular
                    ? "border-2 border-primary shadow-primary/20 scale-105"
                    : "hover:scale-105"
                )}
              >
                {singlePlan.popular && (
                  <Badge className="absolute -top-3 right-4">Most Popular</Badge>
                )}

                <CardHeader className="p-6">
                  <CardTitle className="text-3xl font-bold">{singlePlan.name}</CardTitle>
                      <CardDescription>
                        <span className="text-4xl font-bold text-foreground">₹{singlePlan.price}</span>
                        <div className="  text-[#FF8800]">{singlePlan.timeduration}</div>
                      <p className="mt-2 text-sm text-gray-600  ">{singlePlan.description}</p>
                      </CardDescription>
                </CardHeader>

                <CardContent className="flex-1 px-6 space-y-3 text-start">
                  <ul className="space-y-2">
                    {singlePlan.features.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        ✅ <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="px-6 mt-auto">
                  <Button
                    size="lg"
                    className="w-full font-bold"
                    variant={singlePlan.popular ? "default" : "outline"}
                    onClick={() => onPlanSelect(singlePlan.name)}
                  >
                    Pick Your Plan
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          </TabsContent>


        </Tabs>
      </div>
    </section>
  );
}
