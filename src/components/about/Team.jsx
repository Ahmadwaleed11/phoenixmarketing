import React from 'react';

const teamMembers = [
  { name: "Umair", role: "CEO & Founder", desc: "Growth strategist with a decade in performance marketing" },
  { name: "Sara Ahmad", role: "Head of Growth", desc: "Growth strategist with a decade in performance marketing" },
  { name: "Daniel Rivera", role: "Lead Engineer", desc: "Growth strategist with a decade in performance marketing" },
  { name: "Ayaan Malik", role: "Creative Director", desc: "Growth strategist with a decade in performance marketing" },
  { name: "Umair", role: "CEO & Founder", desc: "Growth strategist with a decade in performance marketing" },
  { name: "Sara Ahmad", role: "Head of Growth", desc: "Growth strategist with a decade in performance marketing" },
  { name: "Daniel Rivera", role: "Lead Engineer", desc: "Growth strategist with a decade in performance marketing" },
  { name: "Ayaan Malik", role: "Creative Director", desc: "Growth strategist with a decade in performance marketing" },
];

function TeamSection() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[var(--button-color)] text-sm font-semibold tracking-[0.2em] uppercase mb-2 block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Meet The People
          </h2>
          <div className="w-24 h-1 bg-[var(--button-color)] mx-auto mt-4 rounded-full"></div>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group rounded-2xl overflow-hidden bg-gray-100 border border-gray-200 hover:border-[var(--button-color)]/30 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
              {/* Image Placeholder */}
              <div className="aspect-[4/5] bg-gray-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <img 
                  src={`/team-${(index % 4) + 1}.jpg`} 
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              
              {/* Info */}
              <div className="p-5 bg-black text-white">
                <h3 className="font-bold text-lg mb-0.5">{member.name}</h3>
                <p className="text-[var(--button-color)] text-sm font-medium mb-2">{member.role}</p>
                <p className="text-gray-400 text-xs leading-relaxed">{member.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;