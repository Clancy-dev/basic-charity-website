'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname(); // Get current path

  const toggleMenu = () => setIsOpen(!isOpen);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 font-bold text-xl text-primary hover:opacity-80 transition"
          >
            <Image
              src="/hope-crest-foundation-logo.png"
              alt="Hope Crest Foundation Logo"
              className="w-8 h-8"
              width={500}
              height={500}
            />
            <span>Hope Crest Foundation</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`font-medium transition ${
                  pathname === item.href
                    ? 'text-primary border-b-2 border-primary'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}

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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`block py-2 px-0 font-medium transition ${
                  pathname === item.href
                    ? 'text-primary font-semibold'
                    : 'text-foreground hover:text-primary'
                }`}
              >
                {item.name}
              </Link>
            ))}

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
