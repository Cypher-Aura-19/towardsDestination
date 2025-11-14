"use client";

import { MapPin, ArrowRight, ChevronDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function TourPackages() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Featured tours from public-tours/by-road
  const destinations = [
    {
      id: 2,
      name: "5 Days Trip to Hunza & Naltar Valley",
      location: "Hunza & Naltar",
      price: 22000,
      image: "/hunza1.jpg",
      duration: "5 Days, 4 Nights"
    },
    {
      id: 12,
      name: "8 Days Trip to Hunza & Skardu Valley",
      location: "Hunza & Skardu",
      price: 32000,
      image: "/skardu8.jpg",
      duration: "8 Days 7 Nights"
    },
    {
      id: 4,
      name: "3 Days – Naran | Shogran Group Tour",
      location: "Naran & Shogran",
      price: 14000,
      image: "/naran1.jpg",
      duration: "3 Days 2 Nights"
    }
  ];

  return (
    <section className="py-12 sm:py-20 bg-linear-to-b from-red-50 via-white to-red-50 relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-200 rounded-full blur-3xl opacity-40"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-100 rounded-full blur-3xl opacity-50"></div>
      <div className="w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
        {/* Header - Travel Agency Style */}
        <div className="text-center mb-8 sm:mb-12 animate-fade-in-up relative z-40">
          <span className="inline-block bg-red-600 text-white px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
            🏔️ POPULAR TOUR PACKAGES
          </span>
          <h2 className="text-[26px] xs:text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4">
            <span className="gradient-text">Explore Northern Pakistan</span>

          </h2>
          <p className="text-gray-600 text-base sm:text-lg max-w-3xl mx-auto mb-6">
            Discover breathtaking valleys, majestic mountains, and crystal-clear lakes. Choose from our carefully curated tour packages with flexible travel options.
          </p>
          <div className="flex justify-center gap-4">
            {/* View All Tours with Dropdown */}
            <div 
              className="relative z-30"
              onMouseEnter={() => setIsDropdownOpen(true)}
              onMouseLeave={() => setIsDropdownOpen(false)}
            >
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2">
                View All Tours
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Dropdown Menu */}
              <div className={`absolute top-full left-0 mt-2 w-40 bg-white rounded-lg shadow-xl py-2 border border-gray-100 transition-all duration-200 z-50 ${isDropdownOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
                <a 
                  href="/public-tours/by-air"
                  className="block  py-1 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  🛫  By Air
                </a>
                <a 
                  href="/public-tours/by-road"
                  className="block py-1 text-base font-medium text-gray-700 hover:bg-red-50 hover:text-red-600 transition-colors"
                >
                  🚗  By Road
                </a>
              </div>
            </div>
            
            <a href="/contact" className="border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white px-6 py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
              Custom Package
            </a>
          </div>
        </div>

        {/* Destination Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-0">
          {destinations.map((destination) => (
            <Link
              key={destination.id}
              href={`/public-tours/by-road/${destination.id}`}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-red-100 hover:border-red-300 hover:-translate-y-2 animate-fade-in-up"
              style={{animationDelay: `${destination.id * 0.1}s`}}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden bg-linear-to-br from-gray-100 to-gray-200">
                <Image
                  src={destination.image}
                  alt={destination.name}
                  fill
                  className="object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse-glow">
                  ⭐ BEST SELLER
                </div>
                
                {/* Price Badge */}
                <div className="absolute bottom-4 right-4 bg-red-600 text-white px-4 py-2 rounded-lg shadow-2xl backdrop-blur-sm group-hover:scale-110 transition-transform duration-300">
                  <div className="text-xs font-semibold">Starting from</div>
                  <div className="text-xl font-bold">PKR {destination.price.toLocaleString()}</div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-xl font-bold text-red-700 mb-2 group-hover:text-red-800 transition-colors">
                  {destination.name}
                </h3>
                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin className="w-4 h-4 text-red-600" />
                  <span className="text-sm">{destination.location}</span>
                </div>
                
                {/* Tour Info */}
                <div className="flex items-center justify-between mb-4 pb-4 border-b border-red-100">
                  <div>
                    <div className="text-xs text-red-600">Duration</div>
                    <div className="text-sm font-semibold text-red-700">{destination.duration}</div>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-red-600">Travel Mode</div>
                    <div className="text-sm font-semibold text-red-700">🚗 By Road</div>
                  </div>
                </div>
                
                {/* Book Button */}
                <button className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-bold transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 flex items-center justify-center gap-2">
                  View Details & Book
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
