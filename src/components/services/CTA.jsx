import React from 'react';
import { BsArrowRight } from 'react-icons/bs';

function ServicesCTA() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-4xl">
        <div className="bg-orange-50/50 border border-orange-100 rounded-3xl p-12 text-center relative overflow-hidden">
          {/* Decorative Background */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100/20 to-transparent pointer-events-none" />
          
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ready to Scale your <span className="text-[var(--button-color)]">ROI?</span>
            </h2>
            
            <p className="text-gray-600 text-lg mb-8 max-w-xl mx-auto">
              Book a free strategy call and let's map your growth from day one.
            </p>

            <button className="group inline-flex items-center gap-2 bg-[var(--button-color)] text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 hover:shadow-[0_0_25px_rgba(244,124,32,0.5)] hover:-translate-y-1 hover:scale-105">
              Start Now
              <BsArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesCTA;