import React from 'react';
import HeroSection from '../components/about/Hero';
import MissionSection from '../components/about/Mission';
import ProcessSection from '../components/about/Process';
import TeamSection from '../components/about/Team';
import AboutCTA from '../components/about/CTA';
import PageTransition from '../components/common/PageTransition';

function AboutPage() {
  return (
    <PageTransition>
      <div className="min-h-screen">
        <HeroSection />
        
        <MissionSection />
        <ProcessSection />
        <TeamSection />
        <AboutCTA />
      </div>
    </PageTransition>
  );
}

export default AboutPage;