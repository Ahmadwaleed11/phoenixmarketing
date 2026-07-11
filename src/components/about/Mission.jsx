import React from "react";
import { FiHeart, FiZap, FiTrendingUp } from "react-icons/fi";

function MissionSection() {
  const values = [
    { icon: <FiHeart size={20} />, title: "Transparency", desc: "Clear reporting and no vanity metrics – ever." },
    { icon: <FiZap size={20} />, title: "Speed", desc: "We move fast and ship campaigns that compound." },
    { icon: <FiTrendingUp size={20} />, title: "ROI", desc: "Every action ties back to measurable revenue." },
  ];

  return (
    <section id="mission" className="relative w-full bg-black py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <style>{`
        @keyframes pulseGlow {
          0%,100% { opacity: .35; transform: translateY(0) scale(1); }
          50% { opacity: .55; transform: translateY(-10px) scale(1.05); }
        }
        .pulseGlow { animation: pulseGlow 7s ease-in-out infinite; }
      `}</style>

      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--button-color)]/20 blur-[110px] pulseGlow" />
        <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,_rgba(244,124,32,0.22)_1px,_transparent_1px)] bg-[length:22px_22px]" />
      </div>

      <div className="relative mx-auto max-w-7xl">
        {/* Tab Label */}
        <div className="flex justify-center -mt-24 mb-10">
          <div className="bg-white px-8 py-3 rounded-full shadow-lg border border-gray-200">
            <span className="text-gray-800 font-semibold text-base">Who We Are</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Left - Logo */}
          <div className="flex flex-col items-center justify-center text-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[var(--button-color)] opacity-20 blur-3xl rounded-full" />
              <img
                src="/logo-large.png"
                alt="Phoenix Logo"
                className="relative z-10 w-44 md:w-52 h-auto drop-shadow-[0_0_30px_rgba(244,124,32,0.25)]"
              />
            </div>
            <h2 className="text-white text-2xl font-bold tracking-widest mt-6">PHOENIX</h2>
            <p className="text-gray-400 text-sm tracking-[0.2em]">MARKETING SOLUTION</p>
          </div>

          {/* Right - Mission Card */}
          <div className="rounded-3xl border border-gray-800 bg-gradient-to-b from-gray-900/60 to-gray-900/30 p-8 md:p-10 backdrop-blur-sm shadow-[0_25px_80px_rgba(0,0,0,0.35)]">
            <span className="text-[var(--button-color)] text-sm font-semibold tracking-widest uppercase mb-2 block">
              Our Mission
            </span>

            <h3 className="text-white text-3xl font-bold mb-4 leading-tight">
              Marketing that earns its place in your P&L.
            </h3>

            <p className="text-gray-300/80 mb-8 leading-relaxed">
              We exist to give ambitious brands an unfair advantage. No fluff, no vanity metrics —
              just strategies engineered to attract, engage and convert real customers at scale.
            </p>

            {/* Values */}
            <div className="space-y-3 mb-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="group flex items-start gap-4 rounded-2xl border border-gray-800/80 bg-gray-950/30 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-[var(--button-color)]/35 hover:shadow-[0_0_0_1px_rgba(244,124,32,0.12)]"
                >
                  <div className="mt-0.5 text-[var(--button-color)] transition-transform duration-300 group-hover:scale-110">
                    {value.icon}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{value.title}</h4>
                    <p className="text-gray-400 text-sm mt-0.5">{value.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {[
                { v: "100%", l: "Client Satisfaction" },
                { v: "250+", l: "Brands Scaled" },
                { v: "5x", l: "Avg. ROI" },
              ].map((s, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-gray-800 bg-gray-950/20 p-4 text-center transition-all duration-300 hover:border-[var(--button-color)]/30 hover:-translate-y-0.5"
                >
                  <div className="text-[var(--button-color)] text-2xl font-extrabold">{s.v}</div>
                  <div className="text-gray-400 text-xs mt-1">{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MissionSection;