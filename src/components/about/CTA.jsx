import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function AboutCTA() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="bg-orange-50/50 border border-orange-100 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/20 to-transparent pointer-events-none"></div>
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Want to work with a team obsessed <br />
              with your <span className="text-[var(--button-color)]">ROI?</span>
            </h2>
            
            <button className="group inline-flex items-center gap-2 bg-[var(--button-color)] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(244,124,32,0.5)] hover:-translate-y-1 hover:scale-105">
              Let's Talk
              <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;