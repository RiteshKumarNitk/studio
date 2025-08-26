'use client';

import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Gift, Users, X } from 'lucide-react';
import Link from 'next/link';

export default function PromotionalDialog({ show, onHide }: {show: boolean, onHide: () => void}) {

  return (
    <Dialog open={show} onOpenChange={onHide}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl">
        <DialogHeader>
          <div className="flex justify-center mb-4">
             <Gift className="h-16 w-16 text-icon-primary animate-pulse" />
          </div>
          <DialogTitle className="text-3xl font-bold text-center font-headline text-text-primary">
            Welcome to Bubble Drive!
          </DialogTitle>
          <DialogDescription className="text-center text-lg mt-2 text-muted-foreground">
            Your car's lucky day has arrived.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6 my-6">
          <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg border border-primary/20">
            <Gift className="h-8 w-8 text-icon-primary" />
            <div>
              <h3 className="font-semibold text-text-primary">Your First Wash Is Free</h3>
              <p className="text-sm text-muted-foreground">Yep, you read that right! Get ₹200 OFF your first wash.</p>
            </div>
          </div>
          <div className="flex items-center gap-4 p-4 bg-white/50 rounded-lg border border-primary/20">
            <Users className="h-8 w-8 text-icon-primary" />
            <div>
              <h3 className="font-semibold text-text-primary">Refer a Friend</h3>
              <p className="text-sm text-muted-foreground">Get ₹250 OFF, and so do they. Shine is contagious.</p>
            </div>
          </div>
        </div>
        <Button asChild size="lg" className="w-full font-bold" onClick={onHide}>
          <Link href="#plans">Get Your Shiny Deal</Link>
        </Button>
      </DialogContent>
    </Dialog>
  );
}
