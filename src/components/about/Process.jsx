import React from "react";
import { FiSearch, FiTarget, FiTool, FiBarChart2, FiFileText } from "react-icons/fi";

function ProcessSection() {
  const steps = [
    { num: "01", icon: <FiSearch size={22} />, title: "Discovery", desc: "We learn your business, market and goals." },
    { num: "02", icon: <FiTarget size={22} />, title: "Strategy", desc: "A tailored roadmap built around your KPIs." },
    { num: "03", icon: <FiTool size={22} />, title: "Implementation", desc: "We execute across channels with precision." },
    { num: "04", icon: <FiBarChart2 size={22} />, title: "Optimization", desc: "Continuous testing to maximize returns." },
    { num: "05", icon: <FiFileText size={22} />, title: "Reporting", desc: "Transparent insights, delivered on schedule." },
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <style>{`
        @keyframes nudge {
          0%,100%{ transform: translateX(0); opacity:.7 }
          50%{ transform: translateX(6px); opacity:1 }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[var(--button-color)] text-sm font-semibold tracking-[0.2em] uppercase mb-2 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">A Proven Roadmap to Growth</h2>
          <div className="w-24 h-1 bg-[var(--button-color)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="bg-orange-50/60 border border-orange-100 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            <div className="hidden md:block absolute top-[74px] left-0 right-0 h-px bg-gradient-to-r from-transparent via-[var(--button-color)]/30 to-transparent" />

            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="h-full bg-white rounded-2xl p-6 border border-gray-100 shadow-sm transition-all duration-300 text-center hover:-translate-y-2 hover:shadow-xl hover:border-[var(--button-color)]/20">
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-white border-2 border-[var(--button-color)] text-[var(--button-color)] flex items-center justify-center text-xs font-extrabold shadow-sm">
                    {step.num}
                  </div>

                  <div className="w-12 h-12 mx-auto mb-4 rounded-2xl bg-orange-100 text-[var(--button-color)] flex items-center justify-center mt-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_12px_35px_rgba(244,124,32,0.22)]">
                    {step.icon}
                  </div>

                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-[62px] -right-3 z-20 text-[var(--button-color)]">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ animation: "nudge 1.6s ease-in-out infinite" }}
                    >
                      <path
                        d="M5 12H19M19 12L12 5M19 12L12 19"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProcessSection;