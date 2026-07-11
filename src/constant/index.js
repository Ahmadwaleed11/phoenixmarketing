export const links = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
  { name: "Portfolio", path: "/portfolio" },
  { name: "Pricing", path: "/#pricing" },
  { name: "FAQs", path: "/#faq" },
  { name: "Contact", path: "/contact" }
];



import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaWhatsapp,
} from "react-icons/fa";

export const BRAND = {
  name: "PHOENIX",
  tagline: "MARKETING SOLUTION",
  desc: "We are a digital marketing agency that helps businesses grow with smart strategies and real results.",
};

export const SOCIALS = [
  {
    name: "Facebook",
    href: "https://facebook.com/",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://instagram.com/",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/",
    icon: FaLinkedinIn,
  },
  {
    name: "TikTok",
    href: "https://tiktok.com/",
    icon: FaTiktok,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/447469011915",
    icon: FaWhatsapp,
  },
];

export const FOOTER_GROUPS = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "/" },
      { label: "Service", href: "/services" },
      { label: "Portfolio", href: "/portfolio" },
      { label: "Pricing", href: "/#pricing" },
    ],
  },
  {
    title: "Useful Links",
    links: [
      { label: "Blogs", href: "/blogs" },
      { label: "FAQs", href: "/#faq" },
      { label: "Contacts", href: "/contact" },
      { label: "Privacy Policy", href: "/privacy-policy" },
    ],
  },
];

export const CONTACT = {
  phoneDisplay: "+44 7469 011915",
  phoneHref: "tel:+447469011915",
  emailDisplay: "info@phoenixmarketingsolution.uk",
  emailHref: "mailto:info@phoenixmarketingsolution.uk",
  locationDisplay: "Manchester, United Kingdom",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=Manchester%2C%20United%20Kingdom",
  websiteDisplay: "www.phoenixmarketingsolution.uk",
  websiteHref: "https://phoenixmarketingsolution.uk",
};