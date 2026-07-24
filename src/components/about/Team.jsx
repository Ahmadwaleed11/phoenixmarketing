import React from "react";
import profileUmair from "./Profile Picture for booklet .PNG";
import profileMutahir from "./WhatsApp Image 2026-07-15 at 3.43.38 PM.jpeg";
import profileHafsa from "./WhatsApp Image 2026-07-15 at 12.02.50 PM (1).jpeg";
import profileAhmad from "./WhatsApp Image 2026-07-15 at 12.02.50 PM (2).jpeg";
import profileAli from "./WhatsApp Image 2026-07-15 at 12.02.50 PM.jpeg";
import profileMuhammad from "./WhatsApp Image 2026-07-15 at 12.02.51 PM.jpeg";
import profileTehreem from "./WhatsApp Image 2026-07-15 at 12.02.51 PM (1).jpeg";
import profileAyesha from "./WhatsApp Image 2026-07-17 at 12.13.40 PM.jpeg";

const teamMembers = [
  { name: "Umair Tariq", role: "CEO & Founder", desc: "Leadership • Strategic Planning • Business Development • Team Management • Decision Making • Financial Strategy • Operations Management • Supply Chain Management • Project Management", img: profileUmair },
  { name: "Mutahir Ahmed Malik", role: "Country Manager", desc: "Skilled in strategic leadership, logistics & supply chain management, project management, business development, team leadership, operational excellence, and driving sustainable business growth.", img: profileMutahir },
  { name: "Hafsa Mubasher", role: "Operations Manager", desc: "Skilled in  Front-end development, operations management, supply chain coordination, project execution, KPI monitoring, budget planning, and team leadership with a focus on delivering high-quality software solutions.", img: profileHafsa },
  { name: "Ahmad waleed", role: "Manager", desc: "Skilled in Full stack development, Data Analysis , Python Developer, Project Management, with a focus on delivering high-quality software solutions, ensuring customer satisfaction, and driving business growth.", img: profileAhmad },
  { name: "Ali Akbar", role: "Admin and Complience Manager ", desc: "Skilled in overseeing administrative operations, ensuring regulatory compliance, managing documentation, mitigating risks, and implementing policies that support efficient and compliant business operations.", img: profileAli },
  { name: "Muhammad Zaid", role: "Social Media Manager", desc: "Skilled in Social Media Management, Content Strategy, Data Analysis and Project Management, with a focus on delivering high-quality, engaging campaigns that grow brands.", img: profileMuhammad },
  { name: "Tehreem Fatima", role: "Social Media Manager", desc: "Skilled in Trend Research , content Scheduling , UI/UX designer, Community Management, Figma , Illustrator,Competitor Analysis, Brand Management, Audience Research , Influencer Collaboration", img: profileTehreem },
  { name: "Ayesha", role: "Content Writer", desc: "Content Writing , Trending Content Researcher , HTML , CSS , Team Coordination , Content Planning , Proofreading & Editing , Script Writing , Grammer & Language Proficiency , Blog Writing", img: profileAyesha },
];

function TeamSection() {
  return (
    <section id="team" className="w-full bg-white py-20 px-6">
      <style>{`
        @keyframes softGlow {
          0%,100% { opacity:.0; }
          50% { opacity:.55; }
        }
      `}</style>

      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <span className="text-[var(--button-color)] text-sm font-semibold tracking-[0.2em] uppercase mb-2 block">
            Our Team
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Meet The People</h2>
          <div className="w-24 h-1 bg-[var(--button-color)] mx-auto mt-4 rounded-full" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="group rounded-3xl overflow-hidden border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[var(--button-color)]/25"
            >
              <div className="aspect-[4/5] bg-gray-200 relative overflow-hidden">
                <img
                  src={member.img}
                  alt={member.name}
                  loading="lazy"
                  onError={(event) => {
                    event.currentTarget.onerror = null;
                    event.currentTarget.src = member.fallback;
                  }}
                  className="w-full h-full object-cover grayscale transition-all duration-500 group-hover:grayscale-0 group-hover:scale-110"
                />

                {/* overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                
                {/* glow */}
                <div
                  className="absolute -bottom-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[var(--button-color)]/25 blur-[60px] opacity-0 group-hover:opacity-100"
                  style={{ animation: "softGlow 2.2s ease-in-out infinite" }}
                />
              </div>

              <div className="p-5 bg-black text-white">
                <h3 className="font-bold text-lg leading-tight">{member.name}</h3>
                <p className="text-[var(--button-color)] text-sm font-semibold mt-1">{member.role}</p>
                <p className="text-gray-400 text-xs leading-relaxed mt-3">{member.desc}</p>

                <div className="mt-4 h-px w-0 bg-[var(--button-color)]/60 transition-all duration-500 group-hover:w-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;