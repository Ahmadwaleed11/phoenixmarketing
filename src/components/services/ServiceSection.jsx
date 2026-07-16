import React from 'react';
import ServiceCard from '../services/Card'
import chartImage from './Card-09.png';
import { 
  MdOutlineCampaign, 
  MdOutlineSearch, 
  MdOutlineWeb, 
  MdOutlineEditNote, 
  MdOutlineAdsClick, 
  MdOutlineAutoAwesome 
} from 'react-icons/md';

const servicesData = [
  {
    icon: <MdOutlineCampaign size={24} />,
    title: "Social Media Marketing",
    description: "Full-funnel social presence that builds a loyal, engaged audience.",
    features: [
      "End-to-end account management",
      "Content pillars & calendars",
      "Community building & engagement"
    ],
    chartImage: chartImage
  },
  {
    icon: <MdOutlineSearch size={24} />,
    title: "SEO Optimization",
    description: "Get found by high-intent buyers with technically sound SEO.",
    features: [
      "On-page & off-page SEO",
      "Technical SEO audits",
      "Keywords & competitors research"
    ],
    chartImage: chartImage
  },
  {
    icon: <MdOutlineWeb size={24} />,
    title: "Web Design & Development",
    description: "Fast, responsive, conversion-focused websites and apps.",
    features: [
      "UI/UX wireframes",
      "Custom MERN builds",
      "Tailwind responsive apps"
    ],
    chartImage: chartImage
  },
  {
    icon: <MdOutlineEditNote size={24} />,
    title: "Content Creation & Strategy",
    description: "Content that connects with your audience and converts.",
    features: [
      "Copywriting & blogs",
      "Brand visuals & graphics",
      "Editorial strategy"
    ],
    chartImage: chartImage
  },
  {
    icon: <MdOutlineAdsClick size={24} />,
    title: "Paid Advertisements",
    description: "High-ROI campaign across every major ad platform.",
    features: [
      "PPC campaign builds",
      "Ad spend optimization",
      "Performance charts & reporting"
    ],
    chartImage: chartImage
  },
  {
    icon: <MdOutlineAutoAwesome size={24} />,
    title: "Business & AI Automation",
    description: "Automate the busywork and scale operations effortlessly.",
    features: [
      "Lead scoring workflows",
      "Automated funnels",
      "AI chat & CRM integration"
    ],
    chartImage: chartImage
  },
  {
    icon: <MdOutlineAutoAwesome size={24} />,
    title: "Video Editing & Post-Production",
    description: "Creative, high-impact video editing for brands, creators, and businesses.",
    features: [
      "Cinematic video editing",
      "Reels, Shorts & TikTok videos",
      "Motion graphics & visual effects"
    ],
    chartImage: chartImage
  },
  {
    icon: <MdOutlineAutoAwesome size={24} />,
    title: "Social Media Content Design",
    description: "Creative, scroll-stopping visuals designed to grow your brand and engage your audience.",
    features: [
      "Custom social media posts",
      "Carousel & story designs",
      "Promotional & ad creatives"
    ],
    chartImage: chartImage
  },
  {
    icon: <MdOutlineAutoAwesome size={24} />,
    title: "Influencers Marketing",
    description: "Connect with the right creators to grow your brand and drive engagement.",
    features: [
      "Creator partnerships",
      "Campaign strategy & management",
      "Brand collaborations"
    ],
    chartImage: chartImage
  }
];

function ServicesSection() {
  return (
    <section className="relative w-full bg-black py-4 px-4 sm:px-6 lg:px-8">
      {/* Background Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-64 h-64 opacity-20 pointer-events-none">
        <div className="w-full h-full bg-[radial-gradient(circle,#F47C20_1.5px,transparent_1.5px)] bg-[length:12px_12px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Tab Label */}
        <div className="flex justify-center -mt-8 mb-12">
          <div className="bg-white px-8 py-3 rounded-full shadow-lg border border-gray-200">
            <span className="text-gray-700 font-medium text-lg">Our Services</span>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-16">
          {servicesData.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;