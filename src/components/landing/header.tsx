'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetTitle } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const navLinks = [
  { href: '#about', label: 'About Us' },
  { href: '#how-it-works', label: 'How It Works' },
  { href: '#plans', label: 'Plans' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-sm border-b" : "bg-transparent"
    )}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        <Link href="#home" className="flex items-center gap-2" prefetch={false}>
          <Image src="/logo.png" alt="Bubble Drive Logo" width={150} height={40} />
        </Link>
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
              prefetch={false}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 md:flex">
        </div>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <div className="grid gap-6 p-6">
              <Link href="#home" className="flex items-center gap-2" prefetch={false}>
                 <Image src="/logo.png" alt="Bubble Drive Logo" width={150} height={40} />
              </Link>
              <nav className="grid gap-4">
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="text-lg font-medium transition-colors hover:text-primary"
                      prefetch={false}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
              <Button asChild size="lg">
                 <Link href="#plans">Book Your Wash Now</Link>
              </Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
