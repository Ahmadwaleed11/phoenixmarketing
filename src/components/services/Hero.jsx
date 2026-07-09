import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function ServicesHero() {
  return (
    <section className="relative w-full bg-white pt-20 pb-16 overflow-hidden">
      {/* Decorative Phoenix Images (Left & Right) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <img src="/phoenix-left.png" alt="" className="w-48 h-auto" />
      </div>
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-20 pointer-events-none">
        <img src="/phoenix-right.png" alt="" className="w-48 h-auto" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 text-center">
        {/* Subtitle */}
        <span className="inline-block text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase mb-4 border-b-2 border-[var(--button-color)] pb-1">
          Our Services
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Our Core Competencies: <br />
          Comprehensive Digital Strategies <br />
          to <span className="text-[var(--button-color)]">Scale Your Brand.</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          From first impression to closed deal – we run the full growth engine so you can focus on what you do best.
        </p>

        {/* CTA Button */}
        <button className="group inline-flex items-center gap-2 bg-[var(--button-color)] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(244,124,32,0.4)] hover:-translate-y-1">
          Explore Features
          <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}

export default ServicesHero;