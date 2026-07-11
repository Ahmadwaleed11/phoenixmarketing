import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

function AboutCTA() {
  return (
    <section className="w-full bg-white py-20 px-6">
      <style>{`
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes sheen {
          0% { transform: translateX(-120%) skewX(-12deg); opacity: 0; }
          20% { opacity: .9; }
          55% { transform: translateX(120%) skewX(-12deg); opacity: 0; }
          100% { transform: translateX(120%) skewX(-12deg); opacity: 0; }
        }
        .ctaBorder {
          background: linear-gradient(120deg, rgba(244,124,32,.45), rgba(244,124,32,.12), rgba(244,124,32,.45));
          background-size: 200% 200%;
          animation: borderFlow 6s ease infinite;
          padding: 1px;
          border-radius: 24px;
        }
        .btnSheen::after{
          content:"";
          position:absolute;
          inset:-40%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,.45), transparent);
          transform: translateX(-120%) skewX(-12deg);
          opacity:0;
        }
        .btnSheen:hover::after{ animation: sheen 1.2s ease-out; }
      `}</style>

      <div className="mx-auto max-w-4xl">
        <div className="ctaBorder">
          <div className="bg-orange-50/60 border border-orange-100/60 rounded-3xl p-12 text-center relative overflow-hidden">
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200/20 via-transparent to-transparent pointer-events-none" />
            <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--button-color)]/20 blur-[90px] pointer-events-none" />

            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
                Want to work with a team obsessed <br />
                with your <span className="text-[var(--button-color)]">ROI</span>?
              </h2>

              <button className="btnSheen group relative inline-flex items-center gap-2 overflow-hidden bg-[var(--button-color)] text-white px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_45px_rgba(244,124,32,0.35)]">
                <Link to='/contact'><span className="relative z-10">Let’s Talk</span>
                <BsArrowRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" /></Link>
              </button>

              <p className="mt-4 text-sm text-gray-600">
                Typically responds within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutCTA;