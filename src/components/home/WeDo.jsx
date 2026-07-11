import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const services = [
  {
    icon: <SocialIcon />,
    title: "Social Media Marketing",
    desc: "Grow your brand and engage your audience.",
  },
  {
    icon: <SEOIcon />,
    title: "SEO Optimization",
    desc: "Rank higher and get found by the right people.",
  },
  {
    icon: <WebIcon />,
    title: "Web Design & Development",
    desc: "Beautiful, fast & responsive websites.",
  },
  {
    icon: <ContentIcon />,
    title: "Content Creation & Strategy",
    desc: "Content that connects and converts.",
  },
  {
    icon: <AdIcon />,
    title: "Paid Advertising (PPC)",
    desc: "High-converting ads that generate results.",
  },
  {
    icon: <AIIcon />,
    title: "Business & AI Automation",
    desc: "Automate tasks and scale your business.",
  },
];

function WeDo() {
  return (
    <section className="relative w-full overflow-hidden bg-black py-16 lg:py-14">
      {/* Decorative orange dots pattern bottom-left */}
      <div className="pointer-events-none absolute -left-20 bottom-0 h-64 w-64 opacity-30">
        <div
          className="h-full w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, #F47C20 1.5px, transparent 1.5px)",
            backgroundSize: "12px 12px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold tracking-[0.2em] text-[var(--button-color)]">
              WHAT WE DO
            </span>
            <h2 className="mt-2 text-3xl font-bold text-white md:text-4xl">
              Our Digital Marketing Services
            </h2>
          </div>

          <Link to="/services" className="group flex h-11 items-center justify-center gap-2 rounded-md border border-[var(--button-color)] px-6 text-sm font-semibold text-[var(--button-color)] transition-all duration-300 hover:bg-[var(--button-color)] hover:text-white hover:shadow-[0_0_20px_rgba(244,124,32,0.4)] hover:-translate-y-0.5">
            Explore All Services
            <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-3 gap-2 sm:gap-4 lg:grid-cols-3 xl:grid-cols-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative rounded-lg border border-orange-500/20 bg-gray-900/40 p-2 sm:p-4 lg:p-6 transition-all duration-500 hover:border-[var(--button-color)] hover:bg-gray-800 hover:-translate-y-3 hover:shadow-[0_20px_40px_rgba(244,124,32,0.2)] cursor-pointer overflow-hidden"
            >
              {/* Orange glow on hover - enhanced */}
              <div className="absolute inset-0 -z-10 rounded-lg opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30 bg-[var(--button-color)]" />
              
              {/* Shine effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

              {/* Icon with rotation */}
              <div className="mb-2 sm:mb-4 text-[var(--button-color)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                {service.icon}
              </div>

              {/* Content */}
              <h3 className="mb-1 sm:mb-2 text-[11px] sm:text-sm lg:text-base font-semibold text-white leading-tight transition-colors duration-300 group-hover:text-[var(--button-color)]">
                {service.title}
              </h3>
              <p className="text-[9px] sm:text-xs lg:text-sm leading-relaxed text-gray-400 hidden sm:block transition-colors duration-300 group-hover:text-gray-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Icons with className propagation for hover effects
function SocialIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 8a3 3 0 1 0-6 0 3 3 0 0 0 6 0z" />
      <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M8.5 13.5l7-5" />
    </svg>
  );
}

function SEOIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.35-4.35" />
      <path d="M8 11h6" />
    </svg>
  );
}

function WebIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
      <path d="M6 8l2 2 4-4" />
    </svg>
  );
}

function ContentIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  );
}

function AdIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 11h18" />
      <path d="M12 2v20" />
      <path d="m19 19-3-3 3-3" />
      <path d="m5 19 3-3-3-3" />
    </svg>
  );
}

function AIIcon() {
  return (
    <svg className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transition-transform duration-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a10 10 0 1 0 10 10H12V2z" />
      <path d="M12 12 2.5 12" />
      <circle cx="12" cy="12" r="3" />
      <path d="m19 5 2-2" />
      <path d="m19 19 2 2" />
    </svg>
  );
}

export default WeDo;