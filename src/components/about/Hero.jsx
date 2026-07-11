import React from "react";

function AboutHero() {
  return (
    <section className="relative w-full bg-white pt-20 pb-16 overflow-hidden">
      <style>{`
        @keyframes drift {
          0%,100% { transform: translateY(0px) }
          50% { transform: translateY(-10px) }
        }
        @keyframes shimmer {
          0% { transform: translateX(-120%) skewX(-10deg); opacity: 0; }
          20% { opacity: .65; }
          55% { transform: translateX(120%) skewX(-10deg); opacity: 0; }
          100% { transform: translateX(120%) skewX(-10deg); opacity: 0; }
        }
        .drift { animation: drift 7s ease-in-out infinite; }
        .shimmerLine::after{
          content:"";
          position:absolute; inset:-40%;
          background: linear-gradient(90deg, transparent, rgba(244,124,32,.25), transparent);
          transform: translateX(-120%) skewX(-10deg);
          opacity:0;
        }
        .shimmerLine:hover::after{ animation: shimmer 1.2s ease-out; }
      `}</style>

      {/* Soft glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[var(--button-color)]/15 blur-[90px]" />
        <div className="absolute -bottom-28 right-[-80px] h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[90px]" />
        <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_1px_1px,_rgba(15,23,42,0.12)_1px,_transparent_1px)] bg-[length:22px_22px]" />
      </div>

      {/* Decorative Phoenix Images */}
      <div className="absolute left-[-10px] top-1/3 -translate-y-1/2 opacity-20 pointer-events-none drift">
        <img src="/phoenix-left.png" alt="" className="w-44 md:w-56 h-auto" />
      </div>
      <div
        className="absolute right-[-10px] top-1/3 -translate-y-1/2 opacity-20 pointer-events-none drift"
        style={{ animationDelay: "0.6s" }}
      >
        <img src="/phoenix-right.png" alt="" className="w-44 md:w-56 h-auto" />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white/70 px-4 py-2 text-xs font-semibold tracking-[0.3em] text-gray-600 uppercase">
          About Us
          <span className="h-1 w-1 rounded-full bg-[var(--button-color)]" />
          Phoenix
        </span>

        <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.05]">
          We Are Phoenix: The Story, The Vision, The{" "}
          <span className="relative inline-block text-[var(--button-color)] shimmerLine px-1">
            People Behind The Ascent
          </span>
          .
        </h1>

        <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
          Every project is a partnership. Here’s a look at the results we’ve engineered
          for brands like yours.
        </p>

        <div className="mt-10 flex items-center justify-center gap-3">
          <a
            href="#mission"
            className="relative overflow-hidden rounded-xl bg-[var(--button-color)] px-7 py-3.5 text-white font-semibold transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(244,124,32,0.28)]"
          >
            Explore our mission
          </a>
          <a
            href="#team"
            className="rounded-xl border-2 border-gray-200 px-7 py-3.5 font-semibold text-gray-900 transition-all duration-300 hover:border-[var(--button-color)]/40 hover:text-[var(--button-color)] hover:-translate-y-0.5 hover:shadow-lg"
          >
            Meet the team
          </a>
        </div>
      </div>
    </section>
  );
}

export default AboutHero;