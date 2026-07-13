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
    href: "https://www.facebook.com/share/18hQtQ4gbz/?mibextid=wwXIfr",
    icon: FaFacebookF,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/phoenix_marktingsolutions?igsh=MTcxdzZ2OTYzemtobA==",
    icon: FaInstagram,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/phoenixmarketingsolutionuk/?lipi=urn%3Ali%3Apage%3Ad_flagship3_search_srp_all%3BhbYVaJPKRNa7%2FrAcAf1c3Q%3D%3D",
    icon: FaLinkedinIn,
  },
  {
    name: "TikTok",
    href: "https://www.tiktok.com/@phoenix.marketing8?_r=1&_t=ZS-963ekUoAnZv",
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
  locationDisplay: "London, United Kingdom",
  mapHref:
    "https://www.google.com/maps/search/?api=1&query=London%2C%20United%20Kingdom",
  websiteDisplay: "www.phoenixmarketingsolution.uk",
  websiteHref: "https://phoenixmarketingsolution.uk",
};