import React, { useEffect, useMemo, useState } from "react";
import { BsArrowRight, BsCheck } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { getUserCurrency, formatMoney } from "../../utils/geoCurrency";
import { getRatesUSD, convertPKRTo } from "../../utils/rates";

const plans = [
  {
    name: "STARTER PACK",
    subtitle: "Perfect for Startup",
    price: "19,999",
    icon: <StarterIcon />,
    features: [
      "12 Posts /Month",
      "2 Social Media Platform",
      "Basic Graphic Designing",
      "Captions & Hashtags",
      "Monthly Reports",
      "Emails Support",
      "",
      "",
      "",
      "",
      "",
    ],
    isDark: false,
  },
  {
    name: "GROWTH PACK",
    subtitle: "Perfect for Growing Business",
    price: "29,999",
    icon: <GrowthIcon />,
    features: [
      "20 Posts /Month",
      "3 Social Media Platform",
      "Custom Graphic Designing",
      "4 Reels/Month (Video Editing)",
      "Competitor Research",
      "Lead Focused Caption",
      "Basic SEO (On-Pages)",
      "Youtube Marketing (Basic)",
      "Monthly Report",
      "Priority Support",
      "",
    ],
    isDark: false,
  },
  {
    name: "DOMINATION PACK",
    subtitle: "Perfect for Scaling Brands",
    price: "49,999",
    icon: <DominationIcon />,
    features: [
      "30 Posts /Month",
      "3-4 Social Platform",
      "Advance Video Editing",
      "Ads Setup (Basic)",
      "Weekly Strategy",
      "DM Handling",
      "SEO (On-Page + technical)",
      "Web Design (Landing Page)",
      "Business Automation",
      "AI Automation (Basic)",
      "Detailed Monthly Report",
      "Priority Support",
    ],
    isDark: false,
  },
  {
    name: "ELITE PACK",
    subtitle: "Perfect for Serious Businesses & Brands",
    price: "69,999",
    icon: <EliteIcon />,
    features: [
      "Everything In Scaling",
      "Paid Ads Management",
      "Full Web Development",
      "Advance AI Automation",
      "Business Automation",
      "(CRM, Chatbot)",
      "Youtube Marketing (Adv)",
      "Premium Graphic Design (Branding Level)",
      "Full Web Development",
      "Dedicated Account Manag",
      "Bi-Weekly Strategy Calls",
      "24/7 Priority Support",
    ],
    isDark: true,
  },
];

function Pricing() {
  const navigate = useNavigate();

  const locale = useMemo(() => navigator.language || "en", []);
  const [currency, setCurrency] = useState("USD");
  const [ratesUSD, setRatesUSD] = useState(null);
  const [loading, setLoading] = useState(true);

  const pkrNumber = (p) => Number(String(p).replaceAll(",", ""));

  useEffect(() => {
    let mounted = true;

    async function init() {
      try {
        setLoading(true);
        const [cur, rates] = await Promise.all([getUserCurrency(), getRatesUSD()]);
        if (!mounted) return;
        setCurrency(cur || "USD");
        setRatesUSD(rates);
      } catch (e) {
        if (!mounted) return;
        setCurrency("USD");
        setRatesUSD(null);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    init();
    return () => {
      mounted = false;
    };
  }, []);

  const displayPrice = (pkrString) => {
    const pkr = pkrNumber(pkrString);

    // If rates not available yet, show PKR as fallback
    if (!ratesUSD) return `PKR ${pkr.toLocaleString()}`;

    const converted = convertPKRTo(currency, pkr, ratesUSD);
    if (converted == null) return `PKR ${pkr.toLocaleString()}`;

    return formatMoney(converted, currency, locale);
  };

  const handleChoosePlan = (plan) => {
    const pkr = pkrNumber(plan.price);

    let finalCurrency = currency;
    let finalPrice = null;

    if (ratesUSD) {
      const converted = convertPKRTo(currency, pkr, ratesUSD);
      finalPrice = converted != null ? Math.round(converted) : null;
    }

    // fallback if conversion fails
    if (finalPrice == null) {
      finalCurrency = "PKR";
      finalPrice = pkr;
    }

    navigate(
      `/contact?plan=${encodeURIComponent(plan.name)}&currency=${encodeURIComponent(
        finalCurrency
      )}&price=${encodeURIComponent(finalPrice)}`
    );
  };

  return (
    <section
      id="pricing"
      className="w-full bg-gradient-to-b from-orange-50/50 to-white py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-sm font-semibold tracking-[0.2em] text-gray-500">
            PRICING PLANS
          </span>

          <div className="mt-2 flex flex-wrap items-center gap-3">
            <h2 className="relative inline-block text-3xl font-bold text-gray-900">
              Flexible Plans, Real Results
            </h2>

            <span className="rounded-full border border-orange-200 bg-white px-3 py-1 text-xs font-bold text-[var(--button-color)]">
              Currency: {loading ? "Detecting..." : currency}
            </span>
          </div>

          <div className="mt-3 h-[3px] w-72 bg-[var(--button-color)] rounded-full" />
        </div>

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`group relative flex flex-col rounded-2xl border p-6 transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${
                plan.isDark
                  ? "border-gray-800 bg-gray-900 text-white shadow-xl hover:border-[var(--button-color)] hover:shadow-[var(--button-color)]/20"
                  : "border-gray-200 bg-white shadow-sm hover:border-[var(--button-color)]/50 hover:shadow-orange-500/20"
              }`}
            >
              {/* Popular badge */}
              {index === 3 && (
                <div className="absolute -top-3 right-4 bg-[var(--button-color)] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                  POPULAR
                </div>
              )}

              {/* Card Header */}
              <div className="mb-6 flex items-center gap-3 transition-transform duration-300 group-hover:scale-105">
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full transition-all duration-300 group-hover:rotate-12 ${
                    plan.isDark
                      ? "bg-yellow-500/20 text-yellow-500 group-hover:bg-yellow-500 group-hover:text-white"
                      : "bg-orange-100 text-[var(--button-color)] group-hover:bg-[var(--button-color)] group-hover:text-white"
                  }`}
                >
                  {plan.icon}
                </div>
                <div>
                  <h3
                    className={`text-sm font-bold tracking-wide transition-colors duration-300 ${
                      plan.isDark
                        ? "text-[var(--button-color)] group-hover:text-yellow-400"
                        : "text-[var(--button-color)]"
                    }`}
                  >
                    {plan.name}
                  </h3>
                  <p className={`text-xs ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}>
                    {plan.subtitle}
                  </p>
                </div>
              </div>

              {/* Price */}
              <div className="mb-6 group-hover:scale-105 transition-transform duration-300 origin-left">
                <p className={`text-xs ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}>
                  Starting From
                </p>

                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold group-hover:text-[var(--button-color)] transition-colors duration-300">
                    {displayPrice(plan.price)}
                  </span>
                  <span className={`text-sm ${plan.isDark ? "text-gray-400" : "text-gray-500"}`}>
                    /Month
                  </span>
                </div>

                <div className={`mt-3 h-px w-full ${plan.isDark ? "bg-gray-700" : "bg-gray-200"}`} />
              </div>

              {/* Features */}
              <div className="mb-8 flex flex-col gap-3">
                {plan.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 transition-all duration-300 hover:translate-x-1"
                    style={{ transitionDelay: `${idx * 30}ms` }}
                  >
                    {feature ? (
                      <>
                        <BsCheck className="mt-0.5 flex-shrink-0 text-lg text-[var(--button-color)] transition-all duration-300 group-hover:scale-125" />
                        <span className={`text-sm ${plan.isDark ? "text-gray-300" : "text-gray-600"}`}>
                          {feature}
                        </span>
                      </>
                    ) : (
                      <div className="mt-2 h-px w-full border-b border-dashed border-gray-300/70" />
                    )}
                  </div>
                ))}
              </div>

              {/* CTA */}
              <button
                type="button"
                onClick={() => handleChoosePlan(plan)}
                className={`group/btn mt-auto flex h-11 w-full items-center justify-center gap-2 rounded-lg font-semibold transition-all duration-300 overflow-hidden relative ${
                  plan.isDark
                    ? "border border-[var(--button-color)] bg-transparent text-[var(--button-color)] hover:bg-[var(--button-color)] hover:text-white hover:shadow-[0_0_20px_rgba(244,124,32,0.4)]"
                    : "border border-[var(--button-color)] text-[var(--button-color)] hover:bg-[var(--button-color)] hover:text-white hover:shadow-[0_0_20px_rgba(244,124,32,0.4)]"
                }`}
              >
                <span className="relative z-10">Choose Plan</span>
                <BsArrowRight className="relative z-10 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Icons
function StarterIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}
function GrowthIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="10" />
      <line x1="18" y1="20" x2="18" y2="4" />
      <line x1="6" y1="20" x2="6" y2="16" />
    </svg>
  );
}
function DominationIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
      <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
      <path d="M4 22h16" />
      <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22" />
      <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22" />
      <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z" />
    </svg>
  );
}
function EliteIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 4l3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14" />
    </svg>
  );
}

export default Pricing;