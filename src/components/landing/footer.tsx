import Link from 'next/link';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto grid grid-cols-1 gap-8 px-4 py-12 md:grid-cols-3 md:px-6">
        <div className="flex flex-col items-start gap-4">
          <Link href="/" className="flex items-center gap-2" prefetch={false}>
            <Image src="/logo-dark.png" alt="Bubble Drive Logo" width={150} height={40} />
          </Link>
          <p className="max-w-xs text-sm text-muted-foreground">
            We Make Your Car Shine Again
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4 text-sm md:col-span-1">
          <div className="grid gap-2">
            <h3 className="font-semibold">Quick Links</h3>
            <Link href="#home" className="hover:text-primary transition-colors" prefetch={false}>Home</Link>
            <Link href="#about" className="hover:text-primary transition-colors" prefetch={false}>About Us</Link>
            <Link href="#plans" className="hover:text-primary transition-colors" prefetch={false}>Plans</Link>
            <Link href="#services" className="hover:text-primary transition-colors" prefetch={false}>Services</Link>
            <Link href="#contact" className="hover:text-primary transition-colors" prefetch={false}>Contact</Link>
          </div>
          <div className="grid gap-2">
            <h3 className="font-semibold">Connect</h3>
            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>Instagram</Link>
            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>Facebook</Link>
            <Link href="#" className="hover:text-primary transition-colors" prefetch={false}>WhatsApp</Link>
          </div>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
            <p className="text-sm font-semibold">Follow Us</p>
            <div className="flex gap-2">
                <Button variant="outline" size="icon" className='text-foreground hover:bg-primary hover:text-primary-foreground'>
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                </Button>
                <Button variant="outline" size="icon" className='text-foreground hover:bg-primary hover:text-primary-foreground'>
                    <Facebook className="h-5 w-5" />
                    <span className="sr-only">Facebook</span>
                </Button>
                <Button variant="outline" size="icon" className='text-foreground hover:bg-primary hover:text-primary-foreground'>
                    <MessageCircle className="h-5 w-5" />
                    <span className="sr-only">WhatsApp</span>
                </Button>
            </div>
        </div>
      </div>
      <div className="border-t border-border/20">
        <div className="container mx-auto flex items-center justify-between px-4 py-4 text-sm text-muted-foreground md:px-6">
          <p>&copy; {new Date().getFullYear()} Bubble Drive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
