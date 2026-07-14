import React, { useState } from "react";
import { Link,useLocation } from 'react-router-dom'; 
import { HashLink } from "react-router-hash-link";
import { links } from "../../constant";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Current path check karne ke liye

  return (
    <nav className="w-full bg-white relative sticky top-0 z-50 transition-all duration-300 hover:shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        {/* Logo */}
        <Link to="/">
          <img 
            src="logo.png" 
            alt="Logo" 
            className="h-16 transition-transform duration-300 hover:scale-105 cursor-pointer" 
          />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center gap-10 mr-4">
          {links.map((item, index) => {
            // Object se name aur path nikalo
            const isActive = location.pathname === item.path;

            return (
              <li key={index} className="relative group">
                <HashLink smooth to={item.path}
                className={`text-[16px] font-medium transition-colors duration-300 ${
                    isActive
                      ? "text-[var(--button-color)]"
                      : "text-gray-800 group-hover:text-[var(--button-color)]"
                  }`}
                >
                  {item.name}
</HashLink>
                {/* Animated underline */}
                <span 
                  className={`absolute -bottom-1 left-0 h-0.5 bg-[var(--button-color)] transition-all duration-300 ease-out ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`} 
                />
              </li>
            );
          })}
        </ul>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-gray-800 hover:text-[var(--button-color)] transition-colors duration-300 focus:outline-none hover:bg-orange-50 rounded-lg"
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 z-50">
          <ul className="flex flex-col px-6 py-4 gap-2">
            {links.map((item, index) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={index}>
                  <Link
                    to={item.path} // Path yahan use karo
                    className={`block text-[16px] font-medium py-3 px-4 rounded-lg transition-all duration-300 ${
                      isActive
                        ? "text-[var(--button-color)] bg-orange-50"
                        : "text-gray-800 hover:text-[var(--button-color)] hover:bg-gray-50 hover:pl-6"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name} {/* Aur yahan bhi item.name */}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;