"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function TourPackages() {


  return (
    <section className="py-12 sm:py-20 bg-gradient-to-b from-emerald-50 via-white to-emerald-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50"></div>
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
        {/* Header - Travel Agency Style */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up relative z-40">
          <span className="inline-block bg-emerald-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300 badge-premium" style={{ fontFamily: "'Poppins', sans-serif" }}>
            🏔️ POPULAR TOUR PACKAGES
          </span>
          <h2 className="text-[26px] xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 section-heading" style={{ fontFamily: "'Poppins', sans-serif" }}>
            <span className="gradient-text">Explore Northern Pakistan</span>

          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-6 font-body" style={{ fontFamily: "'Inter', sans-serif" }}>
            Discover breathtaking valleys, majestic mountains, and crystal-clear lakes. Choose from our carefully curated tour packages with flexible travel options.
          </p>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            {/* View All Tours Button */}
            <Link 
              href="/public-tours/by-road"
              className="group bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3 border-2 border-emerald-600 hover:border-emerald-800" 
              style={{ fontFamily: "'Poppins', sans-serif" }}
            >
              <span className="text-lg">🏔️</span>
              <span>View All Tours</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <a href="/private-tours" className="group relative overflow-hidden bg-white border-3 border-emerald-600 text-emerald-600 hover:text-white px-8 py-4 rounded-xl font-bold transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center gap-3" style={{ fontFamily: "'Poppins', sans-serif" }}>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-600 to-emerald-700 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
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
