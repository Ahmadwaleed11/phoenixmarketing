import React from 'react';
import ServicesHero from '../components/services/Hero';
import ServicesSection from '../components/services/ServiceSection';
import ServicesCTA from '../components/services/CTA';
import PageTransition from '../components/common/PageTransition';

function Services() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-white">
        <ServicesHero />
        <ServicesSection />
        <ServicesCTA />
      </main>
    </PageTransition>
  );
}

export default Services;