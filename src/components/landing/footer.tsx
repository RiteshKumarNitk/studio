import Link from 'next/link';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-footer-background text-footer-foreground">
      <div className="container mx-auto px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and Tagline */}
          <div className="flex flex-col items-start gap-4 md:col-span-1">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <Image src="/logo.png" alt="Bubble Drive Logo" width={150} height={40} />
            </Link>
            <p className="max-w-xs text-sm text-muted-foreground">
              We Make Your Car Shine Again
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid gap-2 text-sm">
            <h3 className="font-semibold">Quick Links</h3>
            <Link href="#home" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Home</Link>
            <Link href="#about" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>About Us</Link>
            <Link href="#plans" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Plans</Link>
            <Link href="#services" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Services</Link>
            <Link href="#contact" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Contact</Link>
          </div>

          {/* Connect Links */}
          <div className="grid gap-2 text-sm">
            <h3 className="font-semibold">Connect</h3>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Instagram</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>Facebook</Link>
            <Link href="#" className="text-muted-foreground hover:text-primary transition-colors" prefetch={false}>WhatsApp</Link>
          </div>

          {/* Social Icons */}
          <div className="flex flex-col items-start gap-4 md:items-end">
              <p className="text-sm font-semibold">Follow Us</p>
              <div className="flex gap-2">
                  <Button variant="outline" size="icon" className='border-muted-foreground/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary'>
                      <Instagram className="h-5 w-5" />
                      <span className="sr-only">Instagram</span>
                  </Button>
                  <Button variant="outline" size="icon" className='border-muted-foreground/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary'>
                      <Facebook className="h-5 w-5" />
                      <span className="sr-only">Facebook</span>
                  </Button>
                  <Button variant="outline" size="icon" className='border-muted-foreground/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary'>
                      <MessageCircle className="h-5 w-5" />
                      <span className="sr-only">WhatsApp</span>
                  </Button>
              </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-muted-foreground/20 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Bubble Drive. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}