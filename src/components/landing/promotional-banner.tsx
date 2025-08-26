'use client';

import { useEffect } from 'react';
import { useToast } from '@/hooks/use-toast';
import { Gift, TicketPercent, Users } from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const promotions = [
  {
    icon: <TicketPercent className="h-8 w-8 text-icon-primary" />,
    title: "Your First Wash Is Free",
    description: "Get ₹200 OFF on your first booking with us. Experience the Bubble Drive difference!",
  },
  {
    icon: <Users className="h-8 w-8 text-icon-primary" />,
    title: "Refer a Friend",
    description: "Share the love! You and your friend both get ₹250 OFF when they book their first wash.",
  },
  {
    icon: <Gift className="h-8 w-8 text-icon-primary" />,
    title: "Loyalty Program",
    description: "Join our loyalty program and get every 6th wash for free. We love our regulars!",
  }
];

export default function PromotionalBanner() {
  const { toast } = useToast();

  useEffect(() => {
    const showPromotions = () => {
      let delay = 4000; // Initial delay before the first toast
      const displayDuration = 5000; // How long each toast stays visible

      promotions.forEach((promo, index) => {
        setTimeout(() => {
          const { dismiss } = toast({
            description: (
              <div className="flex items-center gap-4">
                {promo.icon}
                <div>
                  <p className="font-bold text-foreground">{promo.title}</p>
                  <p className="text-muted-foreground">{promo.description}</p>
                </div>
              </div>
            ),
            duration: displayDuration,
            action: (
               <Button asChild variant="secondary" size="sm">
                  <Link href="#plans">Get Deal</Link>
                </Button>
            )
          });

        }, delay);
        delay += displayDuration + 1000; // Time for next toast
      });
    };

    // Wait a bit after the page loads to show the first promotion
    const initialTimer = setTimeout(showPromotions, 5000);

    return () => clearTimeout(initialTimer);
  }, [toast]);

  return null; // This component doesn't render anything itself
}
