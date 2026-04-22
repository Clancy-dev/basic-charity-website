'use client';

import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { CheckCircle2 } from 'lucide-react';

export default function About() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/10 to-secondary/10 py-16 md:py-24">
         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
         <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 text-balance">
          Our Story & Mission
         </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-3xl">
          Founded in 2025, Hope Crest Foundation started with a simple belief: every child and community deserves a chance to thrive through education, healthcare, and basic needs support. As a new foundation based in Fort Portal, Uganda, we are beginning small, focusing on impactful local projects, and growing with the support of volunteers and donors who share our vision for hope and positive change.
      </p>
  </div>
        </section>

        {/* Mission & Vision */}
       <section className="py-16 md:py-24">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid md:grid-cols-2 gap-12 md:gap-16">
      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">Our Mission</h2>
        <p className="text-foreground/80 text-lg leading-relaxed mb-6">
          To support children and communities in Mbale and nearby areas by providing education, healthcare, and basic needs. We start small, listen to local communities, and aim to create meaningful, lasting impact as we grow.
        </p>
        <div className="space-y-4">
          {[
            'Focused on local community needs',
            'Transparent with all support received',
            'Starting small with sustainable impact',
            'Committed to measurable results'
          ].map((item, i) => (
            <div key={i} className="flex gap-3 items-start">
              <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground font-medium">{item}</span>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-foreground mb-6">Our Vision</h2>
        <p className="text-foreground/80 text-lg leading-relaxed mb-6">
          A future where every child and community in our region has access to education, healthcare, and opportunities to thrive—building hope, one project at a time.
        </p>
        <div className="bg-primary/10 rounded-lg p-6 border-l-4 border-primary">
          <p className="text-foreground text-lg font-semibold italic">
            "We may be small, but our goal is big: to create hope, empower children, and build a foundation for positive change."
          </p>
          <p className="text-primary font-bold mt-4">— Hope Crest Foundation Leadership Team</p>
        </div>
      </div>
    </div>
  </div>
</section>


        {/* Our Impact */}
        <section className="py-16 md:py-24 bg-muted/20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
      Our Impact by Numbers
    </h2>
    
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
      {[
        { number: '150+', label: 'Children Supported' },
        { number: '5', label: 'Community Served' },
        { number: '$5K+', label: 'Funds Raised' },
        { number: '10+', label: 'Active Volunteers' }
      ].map((stat, i) => (
        <div key={i} className="bg-white rounded-lg p-6 md:p-8 text-center border border-border">
          <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.number}</div>
          <p className="text-foreground/70 font-medium">{stat.label}</p>
        </div>
      ))}
    </div>
  </div>
</section>


        {/* Our Values */}
        <section className="py-16 md:py-24">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center text-balance">Core Values That Guide Us</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'Integrity',
                  description: 'We operate with complete transparency. Every donation is accounted for, and we regularly share detailed impact reports with our supporters.'
                },
                {
                  title: 'Compassion',
                  description: 'We listen to communities and approach our work with empathy. We serve with respect, dignity, and deep care for those we support.'
                },
                {
                  title: 'Excellence',
                  description: 'We set high standards for ourselves. We measure impact, learn continuously, and improve our programs based on real-world results.'
                },
                {
                  title: 'Accountability',
                  description: 'We answer to the communities we serve and the donors who support us. We take responsibility for our outcomes and admit when we need to do better.'
                },
                {
                  title: 'Innovation',
                  description: 'We embrace new approaches and technologies to solve problems more effectively. We test, learn, and scale what works.'
                },
                {
                  title: 'Partnership',
                  description: 'We believe lasting change happens through collaboration with local communities, governments, and other organizations. We never work in isolation.'
                }
              ].map((value, i) => (
                <div key={i} className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-lg p-6 md:p-8 border border-primary/10">
                  <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                  <p className="text-foreground/80 leading-relaxed text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

       
       {/* Meet the Team */}
<section className="py-16 md:py-24 bg-muted/20">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
      Meet Our Leadership
    </h2>
    
    <div className="grid md:grid-cols-3 gap-8">
      {[
        {
          name: 'Kyambadde Hillary',
          role: 'Founder',
          bio: 'Passionate about community development and helping children access education and healthcare.',
          photo: '/person 1.png' 
        },
        {
          name: 'Sarah Mbabazi',
          role: 'Programs Coordinator',
          bio: 'Focused on creating meaningful local projects and supporting community-led initiatives.',
          photo: '/person 2.png'
        },
        {
          name: 'David Okello',
          role: 'Operations',
          bio: 'Ensures smooth implementation of programs and transparent management of resources.',
          photo: '/person 3.png'
        }
      ].map((person, i) => (
        <div key={i} className="bg-white rounded-lg overflow-hidden border border-border hover:shadow-md transition">
          <div className="w-full aspect-square">
            <img
              src={person.photo}
              alt={person.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-bold text-foreground">{person.name}</h3>
            <p className="text-primary font-semibold text-sm mb-3">{person.role}</p>
            <p className="text-foreground/70 text-sm leading-relaxed">{person.bio}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>





        {/* CTA */}
        <section className="py-16 md:py-20 bg-gradient-to-br from-primary to-primary/80">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-balance">Join Our Mission</h2>
            <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
              Whether through donations, volunteering, or advocacy, there are many ways to make a difference with Hope Foundation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => alert('Donation link would redirect to payment page')}
                className="bg-white text-primary hover:bg-white/90 font-bold py-3 px-8 rounded-lg transition"
              >
                Donate
              </button>
              <a href="/contact" className="bg-transparent text-white border-2 border-white hover:bg-white/10 font-bold py-3 px-8 rounded-lg transition">
                Get Involved
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
