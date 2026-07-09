import React from 'react';
import ServicesHero from '../components/services/Hero';
import ServicesSection from '../components/services/ServiceSection';
import ServicesCTA from '../components/services/CTA';

function Services() {
  return (
    <main className="min-h-screen bg-white">
      <ServicesHero />
      <ServicesSection />
      <ServicesCTA />
    </main>
  );
}

export default Services;