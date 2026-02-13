'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { Button } from '@/components/ui/button';
import { Heart, Users, Globe, Award } from 'lucide-react';

export default function Home() {
  return ( 
    <>     
      <Navbar />
      <main className="flex-1"> 
        {/* Hero Section */}
        <section className="relative min-h-screen md:min-h-[600px] flex items-center justify-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: 'url(/hope-crest-foundation-hero.jpg)',
              backgroundAttachment: 'fixed'
            }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/70" />
          
          {/* Content */}
          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 md:space-y-8 py-20 md:py-32">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white text-balance">
              Make a <span className="text-primary">Real Difference</span>
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto text-pretty leading-relaxed">
              Join thousands of supporters helping us build a better world. Your donation creates lasting change in communities that need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary/90 text-white gap-2 h-12 px-8 text-base"
                onClick={() => window.location.href = '/donate'}
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                Donate Now
              </Button>
              <Button 
                size="lg" 
                className="bg-white/10 hover:bg-white/20 text-white border border-white/30 h-12 px-8 text-base backdrop-blur-sm"
                asChild
              >
                <a href="/about">Learn Our Story</a>
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
      <section className="py-16 md:py-20 bg-white">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-4 gap-8 md:gap-4">
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
        <p className="text-foreground/70 font-medium">Lives Touched</p>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">1</div>
        <p className="text-foreground/70 font-medium">Country Served</p>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">$5K+</div>
        <p className="text-foreground/70 font-medium">Funds Raised</p>
      </div>
      <div className="text-center">
        <div className="text-4xl md:text-5xl font-bold text-primary mb-2">10+</div>
        <p className="text-foreground/70 font-medium">Active Volunteers</p>
      </div>
    </div>
  </div>
</section>


        {/* Mission Section */}
      <section className="py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Why Hope Crest Foundation?</h2>
      <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
        We are a new charity dedicated to making a meaningful difference in our community, starting small, growing with your support, and staying transparent every step of the way.
      </p>
    </div>

    <div className="grid md:grid-cols-4 gap-6 md:gap-8">
      {[
        {
          icon: Heart,
          title: 'Community Focused',
          description: 'We start by understanding local needs and supporting initiatives that truly matter to our community.'
        },
        {
          icon: Users,
          title: 'Transparency',
          description: 'Your support matters. We ensure clear tracking of every donation, showing how it helps real people.'
        },
        {
          icon: Globe,
          title: 'Growing Reach',
          description: 'We aim to expand our efforts gradually, starting locally and building towards broader impact.'
        },
        {
          icon: Award,
          title: 'Building Trust',
          description: 'As a new foundation, we focus on accountability and delivering measurable outcomes from the very beginning.'
        }
      ].map((item, i) => {
        const Icon = item.icon;
        return (
          <div key={i} className="bg-muted/30 rounded-lg p-6 md:p-8 hover:shadow-md transition">
            <Icon className="w-10 h-10 text-primary mb-4" />
            <h3 className="font-bold text-lg text-foreground mb-2">{item.title}</h3>
            <p className="text-foreground/70 text-sm leading-relaxed">{item.description}</p>
          </div>
        );
      })}
    </div>
  </div>
</section>


        {/* Featured Projects */}
       <section className="py-16 md:py-24 bg-muted/20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center mb-12 md:mb-16">
      <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">Our Early Projects</h2>
      <p className="text-lg text-foreground/70">See how small efforts are creating hope and change for children and communities</p>
    </div>

    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
      {[
        {
          title: 'School Support Program',
          description: 'Providing learning materials, school uniforms, and mentorship to children in need.',
          impact: '100+ children supported',
          color: 'bg-primary'
        },
        {
          title: 'Community Health Awareness',
          description: 'Organizing workshops and free health checkups to promote wellness in our neighborhood.',
          impact: '200+ community members reached',
          color: 'bg-secondary'
        },
        {
          title: 'Nutrition & Care',
          description: 'Offering nutritious meals and basic care to children in vulnerable situations.',
          impact: '150+ children served',
          color: 'bg-primary'
        }
      ].map((project, i) => (
        <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition border border-border">
          <div className={`${project.color} h-2`} />
          <div className="p-6 md:p-8">
            <h3 className="font-bold text-xl text-foreground mb-3">{project.title}</h3>
            <p className="text-foreground/70 text-sm leading-relaxed mb-4">{project.description}</p>
            <div className="text-sm font-semibold text-primary">{project.impact}</div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

        {/* CTA Section */}
        <section className="bg-primary text-white py-16 md:py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Ready to Make an Impact?</h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto">
                Join our community of changemakers. Your support helps us reach more people and create lasting change.
              </p>
              <Button 
                size="lg" 
                className="bg-white text-primary hover:bg-white/90 gap-2 h-12 px-8 text-base"
                onClick={() => alert('Donation link would redirect to payment page')}
              >
                <Heart className="w-5 h-5" fill="currentColor" />
                Donate Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
