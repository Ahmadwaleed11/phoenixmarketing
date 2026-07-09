import React from 'react';
import { BsCheck2 } from 'react-icons/bs';

function ServiceCard({ icon, title, description, features, chartImage }) {
  return (
    <div className="group relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 transition-all duration-500 hover:border-[var(--button-color)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(244,124,32,0.15)] overflow-hidden">
      {/* Glow Effect on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--button-color)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Icon */}
      <div className="relative mb-4 text-[var(--button-color)]">
        <div className="w-12 h-12 rounded-lg bg-gray-800/50 flex items-center justify-center border border-gray-700 group-hover:border-[var(--button-color)]/30 transition-colors duration-300">
          {icon}
        </div>
      </div>

      {/* Content */}
      <h3 className="relative text-xl font-bold text-white mb-2 group-hover:text-[var(--button-color)] transition-colors duration-300">
        {title}
      </h3>
      
      <p className="relative text-gray-400 text-sm mb-4 leading-relaxed">
        {description}
      </p>

      {/* Features List */}
      <ul className="relative space-y-2 mb-6">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-300">
            <BsCheck2 className="text-[var(--button-color)] mt-0.5 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      {/* Chart Image */}
      <div className="relative mt-auto rounded-lg overflow-hidden bg-gray-800/30 border border-gray-700/50">
        <img 
          src={chartImage || "/chart-placeholder.jpg"} 
          alt="Growth Chart" 
          className="w-full h-32 object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300"
        />
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
      </div>
    </div>
  );
}

export default ServiceCard;