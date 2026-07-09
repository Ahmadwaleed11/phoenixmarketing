import React from 'react';
import { FiSearch, FiTarget, FiTool, FiBarChart2, FiFileText } from 'react-icons/fi';

function ProcessSection() {
  const steps = [
    {
      num: "01",
      icon: <FiSearch size={24} />,
      title: "Discovery",
      desc: "We learn your business, market and goals."
    },
    {
      num: "02",
      icon: <FiTarget size={24} />,
      title: "Strategy",
      desc: "A tailored roadmap built around your KPIs."
    },
    {
      num: "03",
      icon: <FiTool size={24} />,
      title: "Implementation",
      desc: "We execute across channels with precision."
    },
    {
      num: "04",
      icon: <FiBarChart2 size={24} />,
      title: "Optimization",
      desc: "Continuous testing to maximize returns."
    },
    {
      num: "05",
      icon: <FiFileText size={24} />,
      title: "Reporting",
      desc: "Transparent insights, delivered on schedule."
    }
  ];

  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--button-color)] text-sm font-semibold tracking-[0.2em] uppercase mb-2 block">
            Our Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            A Proven Roadmap to Growth
          </h2>
          <div className="w-24 h-1 bg-[var(--button-color)] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Process Cards */}
        <div className="bg-orange-50/50 border border-orange-100 rounded-3xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[var(--button-color)]/30 to-transparent"></div>
            
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:-translate-y-2 transition-all duration-300 text-center relative z-10 h-full">
                  {/* Number Badge */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-white border-2 border-[var(--button-color)] text-[var(--button-color)] flex items-center justify-center text-xs font-bold shadow-sm">
                    {step.num}
                  </div>
                  
                  {/* Icon */}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-orange-100 text-[var(--button-color)] flex items-center justify-center mt-4 group-hover:scale-110 transition-transform duration-300">
                    {step.icon}
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{step.desc}</p>
                </div>
                
                {/* Arrow (except last) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-16 -right-3 z-20 text-[var(--button-color)]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="animate-pulse">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
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