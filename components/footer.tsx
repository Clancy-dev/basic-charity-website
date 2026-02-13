'use client';

import Link from 'next/link';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 font-bold text-xl mb-4">
              <Heart className="w-6 h-6" fill="currentColor" />
              <span>Hope Crest Foundation</span>
            </div>
            <p className="text-sm opacity-90">
              Making a difference in communities, one heart at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-base">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="opacity-90 hover:opacity-100 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="opacity-90 hover:opacity-100 transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="opacity-90 hover:opacity-100 transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-base">Contact</h3>
            <ul className="space-y-3 text-sm">
              {/* Email */}
              <li className="flex items-center gap-2 opacity-90">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <a href="mailto:hopecrestfoundation@gmail.com" className="hover:opacity-100 transition">
                  hopecrestfoundation@gmail.com
                </a>
              </li>

              {/* Phone */}
              <li className="flex flex-col opacity-90 gap-1">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 flex-shrink-0" />
                  <span>Phone number:</span>
                </div>
                <div className="ml-6 space-y-1">
                  <a href="tel:+256770982239" className="hover:opacity-100 transition block">
                    +256 770 982 239
                  </a>
                  <a href="tel:+256707021312" className="hover:opacity-100 transition block">
                    +256 707 021 312
                  </a>
                </div>
              </li>

              {/* Address */}
              <li className="flex items-start gap-2 opacity-90">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                <div className="ml-0">
                  <p>P.O Box 9781</p>
                  <p>Bugema,</p>
                  <p>Mbale - Uganda</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 pt-8">
          <p className="text-center text-sm opacity-90">
            &copy; {currentYear} Hope Crest Foundation. All rights reserved. | Made with{' '}
            <Heart className="inline w-4 h-4" fill="currentColor" /> by people who care
          </p>
        </div>
      </div>
    </footer>
  );
}
