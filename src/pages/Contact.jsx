import React, { useEffect, useMemo, useState } from "react";
import { ArrowRight, Mail, Phone, MapPin, Clock } from "lucide-react";
import { useLocation } from "react-router-dom";
import PageTransition from "../components/common/PageTransition";

const ContactPage = () => {
  const location = useLocation();

  const query = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const selectedPlan = query.get("plan") || "";
  const selectedCurrency = query.get("currency") || "";
  const selectedPrice = query.get("price") || "";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    service: "",
    message: "",
  });

  const planToService = (planName) => {
    const p = (planName || "").toLowerCase();
    if (p.includes("pack")) return "social";
    return "";
  };

  const formattedSelectedPrice = useMemo(() => {
    if (!selectedPrice || !selectedCurrency) return "";
    const num = Number(selectedPrice);
    if (Number.isNaN(num)) return "";
    try {
      return new Intl.NumberFormat(navigator.language || undefined, {
        style: "currency",
        currency: selectedCurrency,
        maximumFractionDigits: 0,
      }).format(num);
    } catch {
      return `${selectedCurrency} ${num.toLocaleString()}`;
    }
  }, [selectedPrice, selectedCurrency]);

  useEffect(() => {
    if (!selectedPlan) return;

    setFormData((prev) => {
      const nextService = prev.service || planToService(selectedPlan);

      const autoMsg = `Hi Phoenix Team,

I want to choose the "${selectedPlan}" plan${
        formattedSelectedPrice ? ` (${formattedSelectedPrice}/Month)` : ""
      }.

My goals:
- 

Please contact me with next steps.`;

      return {
        ...prev,
        service: nextService,
        message: prev.message?.trim() ? prev.message : autoMsg,
      };
    });

    setTimeout(() => {
      document.getElementById("contact-form")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 250);
  }, [selectedPlan, formattedSelectedPrice]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, selectedPlan, selectedCurrency, selectedPrice });
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white" style={{ fontFamily: "'DM Sans', sans-serif" }}>
        <style>{`
          @keyframes floaty { 0%,100% { transform: translateY(0px); } 50% { transform: translateY(-10px); } }
          @keyframes sheen { 0% { transform: translateX(-120%) skewX(-12deg); opacity: 0; } 15% { opacity: .9; } 40% { transform: translateX(120%) skewX(-12deg); opacity: 0; } 100% { transform: translateX(120%) skewX(-12deg); opacity: 0; } }
          @keyframes glowDrift { 0% { transform: translate(-10%, -10%) scale(1); } 50% { transform: translate(10%, 12%) scale(1.08); } 100% { transform: translate(-10%, -10%) scale(1); } }
          .floaty { animation: floaty 6s ease-in-out infinite; }
          .glow-drift { animation: glowDrift 10s ease-in-out infinite; }
          .btn-sheen::after{ content:""; position:absolute; inset:-40%; background: linear-gradient(90deg, transparent, rgba(255,255,255,.45), transparent); transform: translateX(-120%) skewX(-12deg); opacity:0; }
          .btn-sheen:hover::after{ animation: sheen 1.25s ease-out; }
          .card-hover{ transition: transform .35s ease, box-shadow .35s ease, border-color .35s ease; }
          .card-hover:hover{ transform: translateY(-4px); box-shadow: 0 30px 80px rgba(0,0,0,.45); border-color: rgba(244,124,32,.35); }
        `}</style>

        {/* HERO */}
        <section className="relative overflow-hidden px-6 py-16 lg:py-24">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(15,23,42,0.06)_1px,_transparent_1px)] bg-[length:22px_22px]" />
            <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#F47C20]/20 blur-[90px] glow-drift" />
            <div className="absolute -bottom-24 left-10 h-[420px] w-[420px] rounded-full bg-orange-500/10 blur-[90px] glow-drift" />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-xs font-bold tracking-[0.25em] text-[#F47C20] uppercase">
              Contact <span className="h-1 w-1 rounded-full bg-[#F47C20]" /> Fast replies
            </span>

            <h1 className="mt-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl lg:text-6xl">
              Let’s build something that{" "}
              <span className="relative inline-block text-[#F47C20]">
                grows
                <span className="absolute -bottom-2 left-0 h-2 w-full rounded-full bg-orange-200/70" />
              </span>
              .
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-gray-600">
              Share a few details and we’ll come back with a clear plan.
            </p>

            {/* Selected Plan chip */}
            {selectedPlan && (
              <div className="mt-6 inline-flex flex-wrap items-center justify-center gap-2 rounded-2xl border border-orange-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-sm">
                <span className="font-semibold text-gray-900">Selected Plan:</span>
                <span className="font-bold text-[#F47C20]">{selectedPlan}</span>
                {formattedSelectedPrice && (
                  <span className="rounded-full bg-orange-50 px-3 py-1 text-xs font-bold text-[#F47C20]">
                    {formattedSelectedPrice}/Month
                  </span>
                )}
              </div>
            )}

            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="#contact-form"
                className="btn-sheen relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#F47C20] px-8 py-4 font-bold text-white shadow-lg shadow-orange-500/20 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/30"
              >
                <span className="relative z-10">Start your inquiry</span>
                <ArrowRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#free-audit"
                className="inline-flex items-center justify-center rounded-xl border-2 border-gray-200 bg-white px-8 py-4 font-bold text-gray-800 transition-all duration-300 hover:-translate-y-0.5 hover:border-orange-300 hover:text-[#F47C20] hover:shadow-lg hover:shadow-orange-500/10"
              >
                Request a free audit
              </a>
            </div>
          </div>
        </section>

        {/* MAIN */}
        <section className="px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            {/* LEFT */}
            <aside className="space-y-5">
              <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">
                <h3 className="text-xl font-bold text-gray-900">Contact details</h3>
                <p className="mt-2 text-gray-600">Prefer email/call? Use the options below.</p>

                <div className="mt-6 grid gap-4">
                  <div className="card-hover rounded-2xl border border-gray-100 bg-white p-5">
                    <div className="flex items-start gap-4">
                      <div className="floaty rounded-xl bg-orange-50 p-3 text-[#F47C20]">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900">Email</p>
                        <p className="text-gray-600">info@phoenixmarketingsolution.uk</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-hover rounded-2xl border border-gray-100 bg-white p-5">
                    <div className="flex items-start gap-4">
                      <div className="floaty rounded-xl bg-orange-50 p-3 text-[#F47C20]" style={{ animationDelay: "0.2s" }}>
                        <Phone className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900">Phone</p>
                        <p className="text-gray-600">+44 7469 011915</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-hover rounded-2xl border border-gray-100 bg-white p-5">
                    <div className="flex items-start gap-4">
                      <div className="floaty rounded-xl bg-orange-50 p-3 text-[#F47C20]" style={{ animationDelay: "0.4s" }}>
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900">Location</p>
                        <p className="text-gray-600">Manchester, United Kingdom</p>
                      </div>
                    </div>
                  </div>

                  <div className="card-hover rounded-2xl border border-gray-100 bg-white p-5">
                    <div className="flex items-start gap-4">
                      <div className="floaty rounded-xl bg-orange-50 p-3 text-[#F47C20]" style={{ animationDelay: "0.6s" }}>
                        <Clock className="h-5 w-5" />
                      </div>
                      <div className="min-w-0">
                        <p className="font-bold text-gray-900">Response time</p>
                        <p className="text-gray-600">Usually within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </aside>

            {/* RIGHT: FORM */}
            <div
              id="contact-form"
              className="relative overflow-hidden rounded-[2rem] border border-gray-800/60 bg-gray-950 p-8 shadow-2xl shadow-black/50 md:p-12"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute -top-24 left-1/3 h-72 w-72 rounded-full bg-[#F47C20]/25 blur-[120px] glow-drift" />
                <div className="absolute -bottom-24 right-1/4 h-72 w-72 rounded-full bg-orange-600/20 blur-[120px] glow-drift" style={{ animationDelay: "0.8s" }} />
                <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,_#F47C20_1px,_transparent_1px)] bg-[length:22px_22px]" />
              </div>

              <div className="relative z-10">
                <div className="mb-10 text-center">
                  <span className="text-[#F47C20] font-bold tracking-[0.2em] text-xs uppercase mb-2 block">
                    Contact Us
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold text-white">Send an inquiry</h2>
                  <p className="mt-3 text-gray-400">
                    {selectedPlan ? `Plan selected: ${selectedPlan}` : "The more detail you share, the better the plan we can suggest."}
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-gray-300 text-sm mb-2 font-medium group-hover:text-[#F47C20] transition-colors duration-300">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Your Name"
                        className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20]/25 transition-all duration-300 hover:border-gray-600"
                      />
                    </div>

                    <div className="group">
                      <label className="block text-gray-300 text-sm mb-2 font-medium group-hover:text-[#F47C20] transition-colors duration-300">
                        Business Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20]/25 transition-all duration-300 hover:border-gray-600"
                      />
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-gray-300 text-sm mb-2 font-medium group-hover:text-[#F47C20] transition-colors duration-300">
                      Website URL
                    </label>
                    <input
                      type="url"
                      name="website"
                      value={formData.website}
                      onChange={handleChange}
                      placeholder="https://yourbrand.com"
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20]/25 transition-all duration-300 hover:border-gray-600"
                    />
                  </div>

                  <div className="group">
                    <label className="block text-gray-300 text-sm mb-2 font-medium group-hover:text-[#F47C20] transition-colors duration-300">
                      Service Needed
                    </label>
                    <div className="relative">
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white appearance-none outline-none focus:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20]/25 transition-all duration-300 hover:border-gray-600 cursor-pointer"
                      >
                        <option value="" disabled className="bg-gray-900 text-gray-500">Select a service</option>
                        <option value="seo" className="bg-gray-900">SEO Optimization</option>
                        <option value="ppc" className="bg-gray-900">PPC Advertising</option>
                        <option value="social" className="bg-gray-900">Social Media Marketing</option>
                        <option value="content" className="bg-gray-900">Content Strategy</option>
                        <option value="web" className="bg-gray-900">Web Development</option>
                      </select>
                      <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-600">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-gray-300 text-sm mb-2 font-medium group-hover:text-[#F47C20] transition-colors duration-300">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full bg-gray-900/50 border border-gray-800 rounded-xl px-4 py-3.5 text-white placeholder-gray-600 outline-none focus:border-[#F47C20] focus:ring-2 focus:ring-[#F47C20]/25 transition-all duration-300 hover:border-gray-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn-sheen group relative w-full overflow-hidden rounded-xl bg-[#F47C20] py-4 font-bold text-white shadow-xl shadow-orange-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-orange-500/30"
                  >
                    <span className="relative z-10 inline-flex items-center justify-center gap-3">
                      Submit Inquiry
                      <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </button>

                  <p className="text-center text-xs text-gray-500">
                    By submitting, you agree to be contacted about your request.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default ContactPage;