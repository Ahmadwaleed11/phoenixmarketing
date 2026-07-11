import React, { useState } from "react";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGlobe,
  FaPaperPlane,
} from "react-icons/fa";

import { BRAND, SOCIALS, FOOTER_GROUPS, CONTACT } from "../../constant/index";

function Footer() {
  const [email, setEmail] = useState("");
  const [isHovered, setIsHovered] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    console.log("Subscribed:", email);
    setEmail("");
  };

  const year = new Date().getFullYear();

  return (
    <footer className="relative w-full overflow-hidden bg-black text-white">

      <div className="relative mx-auto max-w-7xl px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 items-start gap-8 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-2 md:col-span-2 lg:col-span-3">
            <div className="mb-6 group cursor-pointer">
              <div className="flex items-center gap-3 transition-transform duration-300 hover:scale-105">
                {/* Real logo from public folder */}
                <img
                  src="/logo.png"
                  alt={`${BRAND?.name || "Brand"} Logo`}
                  className="h-10 w-10 rounded bg-white p-1 object-contain transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,102,0,0.5)] group-hover:rotate-2 group-hover:scale-105"
                />

                <div>
                  <h3 className="text-lg font-bold leading-tight transition-colors duration-300 group-hover:text-[var(--button-color)]">
                    {BRAND.name}
                  </h3>
                  <p className="text-[10px] tracking-wider text-gray-400">
                    {BRAND.tagline}
                  </p>
                </div>
              </div>
            </div>

            <p className="mb-6 text-sm leading-relaxed text-gray-400 transition-colors duration-300 hover:text-gray-300">
              {BRAND.desc}
            </p>

            {/* Socials */}
            <div className="flex gap-3">
              {SOCIALS.map((s) => (
                <SocialIcon
                  key={s.name}
                  href={s.href}
                  label={s.name}
                  Icon={s.icon}
                />
              ))}
            </div>
          </div>

          {/* Link Groups */}
          {FOOTER_GROUPS.map((group) => (
            <div key={group.title} className="md:col-span-2 lg:col-span-2">
              <h4 className="mb-6 text-base font-semibold text-[var(--button-color)]">
                {group.title}
              </h4>

              <ul className="space-y-3">
                {group.links.map((l) => (
                  <FooterLink key={l.label} href={l.href}>
                    {l.label}
                  </FooterLink>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="md:col-span-3 lg:col-span-2">
            <h4 className="mb-6 text-base font-semibold text-[var(--button-color)]">
              Contact Info
            </h4>

            <ul className="space-y-4 text-sm text-gray-400">
              <ContactRow
                icon={<FaPhone />}
                href={CONTACT.phoneHref}
                text={CONTACT.phoneDisplay}
              />
              <ContactRow
                icon={<FaEnvelope />}
                href={CONTACT.emailHref}
                text={CONTACT.emailDisplay}
                breakAll
              />
              <ContactRow
                icon={<FaMapMarkerAlt />}
                href={CONTACT.mapHref}
                text={CONTACT.locationDisplay}
                external
              />
              <ContactRow
                icon={<FaGlobe />}
                href={CONTACT.websiteHref}
                text={CONTACT.websiteDisplay}
                external
                breakAll
              />
            </ul>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3 lg:col-span-3">
            <h4 className="mb-6 text-base font-semibold text-[var(--button-color)]">
              Newsletter
            </h4>
            <p className="mb-4 text-sm text-gray-400">
              Subscribe to get the latest updates and offers.
            </p>

            <form onSubmit={handleSubscribe} className="mb-6">
              <div
                className="mt-6 flex overflow-hidden rounded-md bg-white transition-all duration-300 focus-within:ring-2 focus-within:ring-[var(--button-color)] focus-within:shadow-[0_0_20px_rgba(255,102,0,0.3)]"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-4 py-3 text-sm text-gray-900 placeholder-gray-500 outline-none"
                  required
                />
                <button
                  type="submit"
                  className="flex items-center justify-center bg-[var(--button-color)] px-4 text-white transition-all duration-300 hover:bg-orange-600 hover:scale-110"
                  aria-label="Subscribe"
                >
                  <FaPaperPlane
                    className={`transition-transform duration-300 ${
                      isHovered ? "translate-x-1 -translate-y-1" : ""
                    }`}
                  />
                </button>
              </div>
            </form>

            <p className="mt-10 text-xs text-gray-500">
              © {year} Phoenix Marketing Solution. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialIcon({ href, Icon, label }) {
  const isExternal = href.startsWith("http") || href.startsWith("https");

  return (
    <a
      href={href}
      aria-label={label}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      className="flex h-9 w-9 items-center justify-center rounded bg-gray-800 text-gray-400 transition-all duration-300 hover:bg-[var(--button-color)] hover:text-white hover:scale-110 hover:rotate-6 hover:shadow-[0_0_15px_rgba(255,102,0,0.5)]"
    >
      <Icon />
    </a>
  );
}

function FooterLink({ href, children }) {
  const isExternal = href.startsWith("http") || href.startsWith("https");

  return (
    <li>
      <a
        href={href}
        target={isExternal ? "_blank" : undefined}
        rel={isExternal ? "noreferrer" : undefined}
        className="group flex items-center text-sm text-gray-400 transition-all duration-300 hover:text-[var(--button-color)] hover:pl-2"
      >
        <span className="w-0 overflow-hidden transition-all duration-300 group-hover:w-4 text-[var(--button-color)]">
          →
        </span>
        {children}
      </a>
    </li>
  );
}

function ContactRow({ icon, href, text, external = false, breakAll = false }) {
  return (
    <li>
      <a
        href={href}
        target={external ? "_blank" : undefined}
        rel={external ? "noreferrer" : undefined}
        className="group flex items-start gap-3"
      >
        <span className="mt-1 flex-shrink-0 text-[var(--button-color)] transition-all duration-300 group-hover:scale-110 group-hover:rotate-12">
          {icon}
        </span>

        <span
          className={`transition-colors duration-300 group-hover:text-white ${
            breakAll ? "break-all" : ""
          }`}
        >
          {text}
        </span>
      </a>
    </li>
  );
}

export default Footer;