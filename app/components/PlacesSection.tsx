"use client";

import { ArrowRight } from "lucide-react";

export default function PlacesSection() {
  return (
    <section className="py-12 sm:py-20 bg-linear-to-b from-white via-red-50 to-white relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-red-200 rounded-full blur-3xl opacity-30 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-40 animate-float" style={{animationDelay: '2s'}}></div>
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-16 animate-fade-in-up">
          <span className="inline-block bg-red-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 animate-pulse-glow badge-premium" style={{ fontFamily: "'Poppins', sans-serif" }}>
            🗺️ EXPLORE PAKISTAN
          </span>
          <h2 className="text-[26px] xs:text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 section-heading" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span className="gradient-text">Top Places to Visit in Pakistan</span>

          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto font-body" style={{ fontFamily: "'Inter', sans-serif" }}>
            Discover the breathtaking beauty of Pakistan's northern regions. From majestic mountains to serene valleys, 
            experience the adventure of a lifetime with TOWARDSDESTINATION.PK
          </p>
        </div>


        {/* CTA Button */}
        <div className="text-center mt-12">
          <a 
            href="/public-tours/by-air"
            className="inline-flex items-center gap-2 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-full font-bold transition-all duration-300 text-lg shadow-lg hover:shadow-xl hover:scale-105 animate-pulse-glow"
          >
            Explore All Destinations
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
