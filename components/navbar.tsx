'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition">
            <Heart className="w-6 h-6" fill="currentColor" />
            <span>Hope</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link href="/" className="text-foreground hover:text-primary transition font-medium">
              Home
            </Link>
            <Link href="/about" className="text-foreground hover:text-primary transition font-medium">
              About
            </Link>
            <Link href="/contact" className="text-foreground hover:text-primary transition font-medium">
              Contact
            </Link>
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2" asChild>
              <Link href="/donate">
                <Heart className="w-4 h-4" />
                Donate
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-foreground hover:text-primary transition"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-border">
            <Link href="/" className="block py-2 px-0 text-foreground hover:text-primary transition font-medium">
              Home
            </Link>
            <Link href="/about" className="block py-2 px-0 text-foreground hover:text-primary transition font-medium">
              About
            </Link>
            <Link href="/contact" className="block py-2 px-0 text-foreground hover:text-primary transition font-medium">
              Contact
            </Link>
            <Button className="w-full mt-4 bg-primary hover:bg-primary/90 text-white gap-2" asChild>
              <Link href="/donate">
                <Heart className="w-4 h-4" />
                Donate
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
}
