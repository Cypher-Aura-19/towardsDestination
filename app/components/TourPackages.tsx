"use client";

import { ArrowRight, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function TourPackages() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);


  return (
    <section className="py-12 sm:py-20 bg-linear-to-b from-red-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50"></div>
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
        {/* Header - Travel Agency Style */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up relative z-40">
          <span className="inline-block bg-red-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 badge-premium" style={{ fontFamily: "'Poppins', sans-serif" }}>
            🏔️ POPULAR TOUR PACKAGES
          </span>
          <h2 className="text-[26px] xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 section-heading" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span className="gradient-text">Explore Northern Pakistan</span>

          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-6 font-body" style={{ fontFamily: "'Inter', sans-serif" }}>
            Discover breathtaking valleys, majestic mountains, and crystal-clear lakes. Choose from our carefully curated tour packages with flexible travel options.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {/* View All Tours with Dropdown */}
            <div 
              className="relative z-30"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="group bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 border-2 border-red-600 hover:border-red-800" style={{ fontFamily: "'Poppins', sans-serif" }}>
                <span className="text-lg">🏔️</span>
                <span>View All Tours</span>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''} group-hover:translate-y-0.5`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-2xl py-3 border-2 border-red-100 transition-all duration-300 z-50 ${isDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`}>
                <a 
                  href="/public-tours/by-air"
                  className="block px-5 py-3 text-base font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-700 transition-all duration-200 flex items-center gap-3 group"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">✈️</span>
                  <span>Tours By Air</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
                <div className="h-px bg-gray-200 mx-3"></div>
                <a 
                  href="/public-tours/by-road"
                  className="block px-5 py-3 text-base font-semibold text-gray-700 hover:bg-gradient-to-r hover:from-red-50 hover:to-red-100 hover:text-red-700 transition-all duration-200 flex items-center gap-3 group"
                  style={{ fontFamily: "'Poppins', sans-serif" }}
                >
                  <span className="text-xl group-hover:scale-110 transition-transform">🚗</span>
                  <span>Tours By Road</span>
                  <ArrowRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </div>
            </div>
            
            <a href="/private-tours" className="group relative overflow-hidden bg-white border-3 border-red-600 text-red-600 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
              <span className="relative z-10 text-lg">✨</span>
              <span className="relative z-10 text-lg">Custom Package</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
