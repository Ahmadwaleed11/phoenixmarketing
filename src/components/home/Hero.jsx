import React from 'react';
import { BsArrowRight } from "react-icons/bs";
import { FaTasks } from "react-icons/fa";
import { RiTeamLine } from "react-icons/ri";
import { PiBagFill } from "react-icons/pi";
import { LiaCertificateSolid } from "react-icons/lia";

function Hero() {
  return (
    <div className="relative w-full bg-white font-sans overflow-hidden px-4 sm:px-8 md:px-16 lg:px-20 pt-16 pb-12 flex flex-col justify-between select-none">
      
      
      <div className="absolute top-4 right-4 sm:right-8 md:right-16 lg:right-20 z-20">
        <button className="group relative bg-[#FF6600] text-white font-medium px-4 sm:px-6 py-2 sm:py-[11px] rounded-xl flex items-center gap-2 sm:gap-3 transition-all duration-300 text-[13px] sm:text-[15px] hover:shadow-[0_0_20px_rgba(255,102,0,0.4)] hover:scale-105 hover:-translate-y-0.5 overflow-hidden">
          <a href="/contact"><span className="relative z-10 hidden sm:inline">Get Free Consultation</span></a>
          <a href="/contact"><span className="relative z-10 sm:hidden">Free Consult</span></a>
          <BsArrowRight className="relative z-10 text-base stroke-[0.5] transition-transform duration-300 group-hover:translate-x-1" />
          {/* Shimmer effect */}
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
        </button>
      </div>

      {/* 2. Main Content Hero Body */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center pt-10 w-full">
        
        {/* Left Side Content Column */}
        <div className="lg:col-span-7 flex flex-col pr-0 sm:pr-4">
          {/* Subheading Text */}
          <div className="mb-[26px] group cursor-default">
            <h6 className="text-[#64748b] font-bold text-[13px] sm:text-[15px] tracking-[0.18em] uppercase inline-block border-b-2 border-[#FF6600] pb-[2px] transition-all duration-300 group-hover:tracking-[0.25em] group-hover:text-[#FF6600]">
              DIGITAL MARKETING AGENCY
            </h6>
          </div>

          {/* Main Display Headline with word hover effects */}
          <h1 className="text-3xl sm:text-4xl md:text-[62px] font-[850] text-[#111111] leading-[1.12] tracking-tight mb-7">
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-[#FF6600] cursor-default">We</span>{' '}
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1 hover:text-[#FF6600] cursor-default">Bring</span>{' '}
            <span className="text-[#FF6600] inline-block transition-all duration-300 hover:scale-110 hover:drop-shadow-[0_0_15px_rgba(255,102,0,0.3)] cursor-default">Customers,</span>
            <br />
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1 cursor-default">Not</span>{' '}
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1 cursor-default">Just</span>{' '}
            <span className="inline-block transition-transform duration-300 hover:-translate-y-1 cursor-default">Content.</span>
          </h1>

          {/* Core Subtitle Paragraph */}
          <p className="text-gray-500 text-lg sm:text-xl max-w-xl leading-relaxed mb-10 flex flex-col">
            <span className="transition-colors duration-300 hover:text-gray-700">Smart marketing strategies that attract,</span>
            <span className="transition-colors duration-300 hover:text-gray-700">engage and convert to real customer.</span>
          </p>

          {/* Primary Action Row */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-5">
            {/* Primary Button with fill effect */}
            <a
              href="#services"
              className="group relative h-12 px-7 text-white bg-[#FF6600] font-semibold rounded-lg inline-flex gap-4 justify-center items-center shadow-[0_4px_12px_rgba(255,102,0,0.2)] transition-all duration-300 hover:shadow-[0_8px_25px_rgba(255,102,0,0.35)] hover:-translate-y-1 overflow-hidden"
            >
              <span className="relative z-10">Our Services</span>
              <BsArrowRight size={22} className="relative z-10 transition-transform duration-300 group-hover:translate-x-2" />
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </a>
            
            {/* Secondary Button with border animation */}
            <a
              href="#work"
              className="group h-12 px-7 text-[#334155] font-semibold border-2 border-gray-300 rounded-lg inline-flex gap-4 justify-center items-center bg-white transition-all duration-300 hover:border-[#FF6600] hover:text-[#FF6600] hover:shadow-lg hover:-translate-y-1"
            >
              <span>View Portfolio</span>
              <BsArrowRight size={22} className="transition-transform duration-300 group-hover:translate-x-2" />
            </a>
          </div>
        </div>

        {/* Right Side Complex Graphic Area */}
        <div className="lg:col-span-5 relative flex justify-center items-center min-h-[350px] sm:min-h-[460px] mt-10 lg:mt-0">
          
          {/* Circular Warm Subtle Backdrop Mask with pulse */}
          <div className="absolute w-[280px] h-[280px] sm:w-[370px] sm:h-[370px] bg-[#FFF1E6] rounded-full -z-10 translate-x-4 sm:translate-x-8 transition-transform duration-700 hover:scale-110"></div>
          
          {/* Centerpiece Vector Brand Artwork with float animation */}
          <img 
            src="/home/home_img.png" 
            alt="Phoenix Mascot" 
            className="w-[220px] lg:ml-25 sm:w-[290px] h-auto object-contain z-0 mr-0 sm:mr-8 transition-all duration-500 hover:scale-105 hover:drop-shadow-[0_20px_40px_rgba(255,102,0,0.15)] animate-float"
          />

          
          {/* Card 1: Leads Generated - Enhanced hover */}
          <div className="group absolute top-2 lg:right-62 right-50 sm:right-4 bg-white p-3 sm:p-[18px] rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-100/70 w-[150px] sm:w-[200px] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,102,0,0.15)] hover:border-[#FF6600]/30 cursor-pointer">
            <span className="text-[11px] sm:text-[12px] text-gray-400 font-medium transition-colors duration-300 group-hover:text-[#FF6600]">Leads Generated</span>
            <div className="flex items-baseline justify-between mt-0.5">
              <h3 className="text-[20px] sm:text-[28px] font-extrabold text-black tracking-tight group-hover:scale-110 transition-transform duration-300">2,450+</h3>
              <span className="text-[10px] sm:text-[11px] text-gray-500 font-medium flex items-center gap-0.5 self-center pb-1 group-hover:text-green-500 transition-colors duration-300">
                ↑ <span className="text-[9px] sm:text-[10px]">180%</span>
              </span>
            </div>
            <div className="text-[9px] sm:text-[10px] text-gray-400 leading-tight mt-1 space-y-0.5">
              <p>vs lost</p>
              <p>vs lost month</p>
            </div>
          </div>

          {/* Card 2: Conversion Rate - Enhanced hover */}
          <div className="group absolute lg:ml-40 bottom-4 right-0 sm:right-[-12px] bg-white p-3 sm:p-[18px] rounded-xl shadow-[0_15px_35px_rgba(0,0,0,0.06)] border border-gray-100/70 w-[150px] sm:w-[200px] flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,102,0,0.15)] hover:border-[#FF6600]/30 cursor-pointer">
            <span className="text-[11px] sm:text-[12px] text-gray-400 font-medium transition-colors duration-300 group-hover:text-[#FF6600]">Conversion Rate</span>
            <div className="flex items-baseline justify-between mt-0.5">
              <h3 className="text-[20px] sm:text-[28px] font-extrabold text-black tracking-tight group-hover:scale-110 transition-transform duration-300">180+</h3>
              <span className="text-[10px] sm:text-[11px] text-gray-500 font-medium flex items-center gap-0.5 self-center pb-1 group-hover:text-green-500 transition-colors duration-300">
                ↑ <span className="text-[9px] sm:text-[10px]">750%</span>
              </span>
            </div>
            <div className="text-[9px] sm:text-[10px] text-gray-400 leading-tight mt-1 space-y-0.5">
              <p>vs 750%</p>
              <p>vs lost month</p>
            </div>
          </div>

          
          <div className="absolute right-[-10px] sm:right-[-40px] bottom-[-30px] w-40 h-40 sm:w-60 sm:h-60 bg-[radial-gradient(#fdba74_1.5px,transparent_1.5px)] [background-size:14px_14px] opacity-40 -z-20 pointer-events-none group-hover:opacity-60 transition-opacity duration-500"></div>
        </div>

      </div>

      
      {/* Stats Bar with card hover effects */}
      <div className="w-full border border-gray-200/90 rounded-2xl py-5 px-2 sm:px-4 bg-white grid grid-cols-2 md:grid-cols-4 gap-y-6 md:gap-y-0 items-center shadow-[0_2px_15px_rgba(0,0,0,0.01)] mt-16">
        
        {/* Metric Node 1 */}
        <div className="group flex items-center gap-2 sm:gap-3.5 justify-start pl-2 sm:pl-4 md:border-r border-gray-200 last:border-0 cursor-pointer transition-all duration-300 hover:bg-orange-50/50 rounded-xl p-2 -mx-2">
          <div className="p-2 rounded-lg transition-all duration-300 group-hover:bg-[#FF6600] group-hover:text-white text-black">
            <RiTeamLine className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          </div>
          <div>
            <h4 className="text-[18px] sm:text-[22px] font-[900] text-black leading-none mb-0.5 group-hover:text-[#FF6600] transition-colors duration-300">250 +</h4>
            <p className="text-[10px] sm:text-[11px] text-gray-500 font-bold tracking-wide group-hover:text-gray-700 transition-colors duration-300">Happy Clients</p>
          </div>
        </div>

        {/* Metric Node 2 */}
        <div className="group flex items-center gap-2 sm:gap-3.5 justify-start pl-3 sm:pl-6 md:border-r border-gray-200 last:border-0 cursor-pointer transition-all duration-300 hover:bg-orange-50/50 rounded-xl p-2 -mx-2">
          <div className="p-2 rounded-lg transition-all duration-300 group-hover:bg-[#FF6600] group-hover:text-white text-black">
            <FaTasks className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          </div>
          <div>
            <h4 className="text-[18px] sm:text-[22px] font-[900] text-black leading-none mb-0.5 group-hover:text-[#FF6600] transition-colors duration-300">500 +</h4>
            <p className="text-[10px] sm:text-[11px] text-gray-500 font-bold tracking-wide group-hover:text-gray-700 transition-colors duration-300">Projects Completed</p>
          </div>
        </div>

        {/* Metric Node 3 */}
        <div className="group flex items-center gap-2 sm:gap-3.5 justify-start pl-2 sm:pl-6 md:border-r border-gray-200 last:border-0 cursor-pointer transition-all duration-300 hover:bg-orange-50/50 rounded-xl p-2 -mx-2">
          <div className="p-2 rounded-lg transition-all duration-300 group-hover:bg-[#FF6600] group-hover:text-white text-black">
            <PiBagFill className="w-[24px] h-[24px] sm:w-[28px] sm:h-[28px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          </div>
          <div>
            <h4 className="text-[18px] sm:text-[22px] font-[900] text-black leading-none mb-0.5 group-hover:text-[#FF6600] transition-colors duration-300">5 +</h4>
            <p className="text-[10px] sm:text-[11px] text-gray-500 font-bold tracking-wide group-hover:text-gray-700 transition-colors duration-300">Years Experience</p>
          </div>
        </div>

        {/* Metric Node 4 */}
        <div className="group flex items-center gap-2 sm:gap-3.5 justify-start pl-3 sm:pl-6 last:border-0 cursor-pointer transition-all duration-300 hover:bg-orange-50/50 rounded-xl p-2 -mx-2">
          <div className="p-2 rounded-lg transition-all duration-300 group-hover:bg-[#FF6600] group-hover:text-white text-black">
            <LiaCertificateSolid className="w-[26px] h-[26px] sm:w-[30px] sm:h-[30px] transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
          </div>
          <div>
            <h4 className="text-[18px] sm:text-[22px] font-[900] text-black leading-none mb-0.5 group-hover:text-[#FF6600] transition-colors duration-300">100 %</h4>
            <p className="text-[10px] sm:text-[11px] text-gray-500 font-bold tracking-wide group-hover:text-gray-700 transition-colors duration-300">Client Satisfaction</p>
          </div>
        </div>

      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}

export default Hero;