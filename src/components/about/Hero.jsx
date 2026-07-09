import React from 'react';

function AboutHero() {
  return (
    <section className="relative w-full bg-white pt-20 pb-16 overflow-hidden">
      {/* Decorative Phoenix Images */}
      <div className="absolute left-0 top-1/3 -translate-y-1/2 opacity-20 pointer-events-none">
        <img src="/phoenix-left.png" alt="" className="w-40 h-auto" />
      </div>
      <div className="absolute right-0 top-1/3 -translate-y-1/2 opacity-20 pointer-events-none">
        <img src="/phoenix-right.png" alt="" className="w-40 h-auto" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        {/* Subtitle */}
        <span className="inline-block text-sm font-semibold tracking-[0.3em] text-gray-500 uppercase mb-4">
          About Us
        </span>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
          We Are Phoenix: The Story, The <br />
          Vision, The <span className="text-[var(--button-color)]">People Behind The <br /> Ascent.</span>
        </h1>

        {/* Description */}
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Every project is a partnership. Here's a look at the results we've engineered for brands like yours.
        </p>
      </div>
    </section>
  );
}

export default AboutHero;