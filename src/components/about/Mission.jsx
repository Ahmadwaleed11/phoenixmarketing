import React from 'react';
import { FiHeart, FiZap, FiTrendingUp } from 'react-icons/fi';

function MissionSection() {
  const values = [
    {
      icon: <FiHeart className="text-[var(--button-color)]" size={20} />,
      title: "Transparency",
      desc: "Clear reporting and no vanity metrics – ever."
    },
    {
      icon: <FiZap className="text-[var(--button-color)]" size={20} />,
      title: "Speed",
      desc: "We move fast and ship campaigns that compound."
    },
    {
      icon: <FiTrendingUp className="text-[var(--button-color)]" size={20} />,
      title: "ROI",
      desc: "Every action ties back to measurable revenue."
    }
  ];

  return (
    <section className="relative w-full bg-black py-4 px-4 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-7xl">
        {/* Tab Label */}
        <div className="flex justify-center -mt-8 mb-12">
          <div className="bg-white px-8 py-3 rounded-full shadow-lg border border-gray-200">
            <span className="text-gray-700 font-medium text-lg">Who We Are</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12">
          {/* Left - Logo */}
          <div className="flex flex-col items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--button-color)] opacity-20 blur-3xl rounded-full"></div>
              <img 
                src="/logo-large.png" 
                alt="Phoenix Logo" 
                className="relative z-10 w-48 h-auto drop-shadow-[0_0_30px_rgba(244,124,32,0.3)]"
              />
            </div>
            <h2 className="text-white text-2xl font-bold tracking-widest mt-6">PHOENIX</h2>
            <p className="text-gray-400 text-sm tracking-[0.2em]">MARKETING SOLUTION</p>
          </div>

          {/* Right - Mission Card */}
          <div className="bg-gray-900/50 border border-gray-800 rounded-3xl p-8 backdrop-blur-sm">
            <span className="text-[var(--button-color)] text-sm font-semibold tracking-widest uppercase mb-2 block">
              Our Mission
            </span>
            <h3 className="text-white text-3xl font-bold mb-4">
              Marketing that earns its place in your P&L.
            </h3>
            <p className="text-gray-400 mb-8 leading-relaxed">
              We exist to give ambitious brands an unfair advantage. No fluff, no vanity metrics – just strategies engineered to attract, engage and convert real customers at scale.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-3 rounded-lg bg-gray-800/30 border border-gray-700/50 hover:border-[var(--button-color)]/30 transition-colors duration-300">
                  <div className="mt-1">{value.icon}</div>
                  <div>
                    <h4 className="text-white font-semibold text-sm">{value.title}</h4>
                    <p className="text-gray-400 text-xs mt-0.5">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                <div className="text-[var(--button-color)] text-2xl font-bold">100%</div>
                <div className="text-gray-400 text-xs mt-1">Client Satisfaction</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                <div className="text-[var(--button-color)] text-2xl font-bold">250+</div>
                <div className="text-gray-400 text-xs mt-1">Brands Scaled</div>
              </div>
              <div className="text-center p-4 rounded-xl bg-gray-800/30 border border-gray-700/50">
                <div className="text-[var(--button-color)] text-2xl font-bold">5x</div>
                <div className="text-gray-400 text-xs mt-1">Avg. ROI</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;