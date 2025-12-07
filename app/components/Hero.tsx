"use client";

import { ArrowRight, Play, Star, Sparkles } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import DesignTripModal from "./DesignTripModal";

// Popular destinations
const popularLocations = [
  "Hunza",
  "Skardu",
  "Naran",
  "Shogran",
  "Neelum Valley",
  "Kashmir",
  "Kumrat",
  "Fairy Meadows",
  "Astore",
  "Swat",
  "Gilgit",
  "Naltar",
  "Deosai",
  "Ratti Gali",
  "Arang Kel",
  "Taobat",
  "Keran",
  "Sharda",
  "Minimarg",
  "Rama Meadows"
];

export default function Hero() {
  const router = useRouter();
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredLocations, setFilteredLocations] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Filter locations based on input
  useEffect(() => {
    if (location.trim()) {
      const filtered = popularLocations.filter((loc) =>
        loc.toLowerCase().includes(location.toLowerCase())
      );
      setFilteredLocations(filtered);
      setShowSuggestions(filtered.length > 0);
    } else {
      setFilteredLocations([]);
      setShowSuggestions(false);
    }
  }, [location]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLocationSelect = (selectedLocation: string) => {
    setLocation(selectedLocation);
    setShowSuggestions(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Build query parameters
    const params = new URLSearchParams();
    if (location) params.append("location", location);
    if (checkIn) params.append("checkIn", checkIn);
    if (checkOut) params.append("days", checkOut);
    if (adults) params.append("adults", adults);
    if (children) params.append("children", children);
    
    // Navigate to search results page
    router.push(`/search?${params.toString()}`);
  };
  return (
    <section className="relative min-h-screen pt-24 sm:pt-28 md:pt-32 lg:pt-[120px] overflow-hidden bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/video/IMG_5738.MP4" type="video/mp4" />
        </video>
        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/50 via-red-900/30 to-black/50 z-10"></div>
      </div>
      
      {/* Animated Shapes */}
      <div className="absolute top-20 right-20 w-72 h-72 bg-red-600/30 rounded-full blur-3xl animate-float z-10"></div>
      <div className="absolute bottom-20 left-20 w-96 h-96 bg-red-700/20 rounded-full blur-3xl animate-float z-10" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-red-500/15 rounded-full blur-3xl animate-float z-10" style={{animationDelay: '2s'}}></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 py-4 sm:py-3 min-h-screen flex flex-col">
        <div className="flex-1 flex items-start pt-2 sm:pt-4 w-full">
          <div className="w-full">
            {/* Main Heading - Travel Agency Style */}
            <div className="mb-3 animate-fade-in-up">
              <span className="inline-block bg-white text-red-600 px-3 sm:px-4 py-2 rounded-lg text-xs sm:text-sm font-bold mb-2 shadow-md border-0 hover:shadow-lg transition-all duration-300">
                🌟 Pakistan's #1 Travel Company
              </span>
            </div>
            
            <h1 className="text-[22px] xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
              Explore Pakistan's<br />
              <span className="highlight bg-white text-red-600 px-2 xs:px-3 sm:px-4 py-1 xs:py-1.5 inline-block rounded-lg mt-2 text-[24px] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl shadow-2xl hover:scale-105 transition-transform duration-300">Northern Beauty</span>
              <span className="block mt-2"> & Beyond </span>
            </h1>

            {/* Description */}
            <p className="text-white text-sm xs:text-base sm:text-lg md:text-xl mb-6 max-w-2xl leading-relaxed font-medium animate-fade-in-up" style={{animationDelay: '0.4s'}}>
              Tour Packages • Hotel Booking • Transportation<br />
              <span className="bg-red-600/80 text-white px-2 sm:px-3 py-1 rounded-md inline-block mt-2 text-xs xs:text-sm sm:text-base animate-pulse-glow">Book Your Dream Journey Today!</span>
            </p>

            {/* Design My Trip Button */}
            <div className="mb-6 animate-fade-in-up" style={{animationDelay: '0.5s'}}>
              <button
                onClick={() => setIsModalOpen(true)}
                className="group bg-gradient-to-r from-red-600 via-red-700 to-red-800 hover:from-red-700 hover:via-red-800 hover:to-red-900 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-sm sm:text-base shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 sm:gap-3"
              >
                <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform" />
                Design My Trip
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
            
            {/* Trust Badges - Travel Company Style */}
            <div className="grid grid-cols-3 gap-1.5 xs:gap-2 sm:gap-4 mb-8 w-full animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-white/95 backdrop-blur-sm px-1.5 xs:px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-base xs:text-lg sm:text-2xl font-bold text-red-600">22k+</div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600 font-semibold leading-tight">Happy Travelers</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm px-1.5 xs:px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-base xs:text-lg sm:text-2xl font-bold text-red-600">7+</div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600 font-semibold leading-tight">Years Experience</div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm px-1.5 xs:px-2 sm:px-4 py-2 sm:py-3 rounded-lg text-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer">
                <div className="text-base xs:text-lg sm:text-2xl font-bold text-red-600">100%</div>
                <div className="text-[9px] xs:text-[10px] sm:text-xs text-gray-600 font-semibold leading-tight">Licensed & Insured</div>
              </div>
            </div>

            {/* Search Destination Form */}
            <div className="mt-6 sm:mt-8 flex justify-center animate-fade-in-up" style={{animationDelay: '0.8s'}}>
          <div className="bg-white/90 backdrop-blur-lg rounded-xl sm:rounded-2xl shadow-2xl p-3 sm:p-6 md:p-8 w-full max-w-6xl border border-white/20 hover:shadow-red-500/20 transition-shadow duration-500">
            {/* Form Title */}
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-red-600 mb-3 sm:mb-4 md:mb-6 text-center">
              Plan Your Journey
            </h3>
            
            <form onSubmit={handleSearch}>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 sm:gap-4">
                {/* Location */}
                <div className="flex flex-col gap-1.5 relative md:col-span-2 lg:col-span-1" ref={suggestionsRef}>
                  <label className="text-xs sm:text-sm font-semibold text-gray-700">Location</label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    onFocus={() => location.trim() && setShowSuggestions(true)}
                    placeholder="e.g., Hunza, Skardu, Naran"
                    className="px-3 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-sm"
                    autoComplete="off"
                  />
                  
                  {/* Suggestions Dropdown */}
                  {showSuggestions && filteredLocations.length > 0 && (
                    <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
                      {filteredLocations.map((loc, index) => (
                        <button
                          key={index}
                          type="button"
                          onClick={() => handleLocationSelect(loc)}
                          className="w-full text-left px-4 py-3 hover:bg-red-50 hover:text-red-600 transition-colors text-gray-900 border-b border-gray-100 last:border-b-0"
                        >
                          <div className="flex items-center gap-2">
                            <span className="text-red-600">📍</span>
                            <span className="font-medium">{loc}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Starting Date & Number of Days - Same Row on Mobile */}
                <div className="grid grid-cols-2 gap-3 md:col-span-2 lg:col-span-2">
                  {/* Starting Date */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-gray-700">Starting Date</label>
                    <input
                      type="date"
                      value={checkIn}
                      onChange={(e) => setCheckIn(e.target.value)}
                      className="px-2 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-sm bg-white"
                      placeholder="Select date"
                    />
                  </div>

                  {/* Number of Days */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-gray-700">Number of Days</label>
                    <input
                      type="number"
                      value={checkOut}
                      onChange={(e) => setCheckOut(e.target.value)}
                      placeholder="e.g., 5"
                      min="1"
                      className="px-2 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 text-sm bg-white"
                    />
                  </div>
                </div>

                {/* Num of Adults & Num of Childs - Same Row on Mobile */}
                <div className="grid grid-cols-2 gap-3 md:col-span-2 lg:col-span-1">
                  {/* Number of Adults */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-gray-700">Adults</label>
                    <input
                      type="number"
                      value={adults}
                      onChange={(e) => setAdults(e.target.value)}
                      placeholder="e.g., 2"
                      min="1"
                      className="px-2 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 bg-white text-sm"
                    />
                  </div>

                  {/* Number of Children */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs sm:text-sm font-semibold text-gray-700">Childs</label>
                    <input
                      type="number"
                      value={children}
                      onChange={(e) => setChildren(e.target.value)}
                      placeholder="e.g., 0"
                      min="0"
                      className="px-2 py-2 sm:px-4 sm:py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-transparent text-gray-900 bg-white text-sm"
                    />
                  </div>
                </div>

                {/* Search Button */}
                <div className="flex flex-col gap-1.5 md:col-span-2 lg:col-span-1">
                  <label className="text-xs sm:text-sm font-semibold text-gray-700 invisible hidden lg:block">Search</label>
                  <button 
                    type="submit"
                    className="px-4 py-2 sm:px-6 sm:py-3 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors flex items-center justify-center gap-2 lg:h-[46px] shadow-lg hover:shadow-xl"
                  >
                    Search
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
          </div>
        </div>
      </div>

      {/* Design Trip Modal */}
      <DesignTripModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
