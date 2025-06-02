'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-1 flex items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="font-bold text-xl">
                <span className="text-primary">AI</span>
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">Manu dev</span>
              </Link>
            </div>
            
            <nav className="hidden md:flex space-x-8">

            </nav>
            
            <div className="hidden md:flex items-center space-x-4">

            </div>

            <div className="flex md:hidden">
              <Button 
                variant="ghost" 
                size="icon"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Menu className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-background/95 backdrop-blur-lg p-4 rounded-b-lg shadow-lg">
            <div className="flex flex-col space-y-4 pt-2 pb-3">
              <Link 
                href="#features" 
                className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Features
              </Link>
              <Link 
                href="#about" 
                className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="#contact" 
                className="text-foreground/80 hover:text-primary px-3 py-2 rounded-md text-base"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm">Sign In</Button>
                <Button>Get Started</Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}