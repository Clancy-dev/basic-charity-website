'use client';

import React from "react"
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              Get in Touch
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 max-w-3xl">
              Have questions? Want to partner with us? Need more information? We'd love to hear from you. Reach out and let's work together to make a difference.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-3 gap-8 md:gap-6">
      
      {/* Email Card */}
      <div className="bg-muted/30 rounded-lg p-6 md:p-8 border border-border hover:shadow-md transition">
        <div className="flex items-center gap-4 mb-4">
          <Mail className="w-8 h-8 text-primary flex-shrink-0" />
          <h3 className="text-lg font-bold text-foreground">Email</h3>
        </div>
        <p className="text-foreground/80 mb-2">Reach out to us anytime</p>
        <a 
          href="mailto:hopecrestfoundation@gmail.com" 
          className="text-primary font-semibold hover:opacity-80 transition block"
        >
          hopecrestfoundation@gmail.com
        </a>
      </div>

      {/* Phone Card */}
      <div className="bg-muted/30 rounded-lg p-6 md:p-8 border border-border hover:shadow-md transition">
        <div className="flex items-center gap-4 mb-4">
          <Phone className="w-8 h-8 text-primary flex-shrink-0" />
          <h3 className="text-lg font-bold text-foreground">Phone</h3>
        </div>
        <p className="text-foreground/80 mb-2">Call us during business hours</p>
        <div className="text-primary font-semibold space-y-1">
          <a href="tel:+256770982239" className="block hover:opacity-80 transition">+256 770 982 239</a>
          <a href="tel:+256707021312" className="block hover:opacity-80 transition">+256 707 021 312</a>
        </div>
      </div>

      {/* Address Card */}
      <div className="bg-muted/30 rounded-lg p-6 md:p-8 border border-border hover:shadow-md transition">
        <div className="flex items-center gap-4 mb-4">
          <MapPin className="w-8 h-8 text-primary flex-shrink-0" />
          <h3 className="text-lg font-bold text-foreground">Address</h3>
        </div>
        <p className="text-foreground/80 mb-2">Visit us</p>
        <p className="text-primary font-semibold space-y-1">
          P.O Box 9781 <br />
          Bugema, <br />
          Mbale - Uganda.
        </p>
      </div>

    </div>
  </div>
</section>


        {/* FAQ Section */}
        <section className="py-16 md:py-24 bg-muted/20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
              {[
                {
                  q: 'How is my donation used?',
                  a: 'We maintain strict financial standards. 95% of donations go directly to programs, with the remaining 5% covering essential operations. Detailed annual reports are available on our website.'
                },
                {
                  q: 'Can I get a tax receipt?',
                  a: 'Yes! Hope Crest Foundation is a registered nonprofit. All donations are tax-deductible. You\'ll receive a receipt automatically via email.'
                },
                {
                  q: 'How can I volunteer?',
                  a: 'We have both in-person and remote volunteering opportunities. Contact us directly to discuss how you can help!'
                },
                {
                  q: 'Do you work with corporate partners?',
                  a: 'Absolutely! We partner with businesses through sponsorships, employee giving programs, and cause marketing. Contact our partnerships team for more information.'
                },
                {
                  q: 'How often should I hear back?',
                  a: 'We aim to respond to all inquiries within 2 business days. For urgent matters, please call us during business hours.'
                }
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-lg p-6 md:p-8 border border-border hover:shadow-md transition">
                  <h3 className="font-bold text-lg text-foreground mb-3">{faq.q}</h3>
                  <p className="text-foreground/80 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
