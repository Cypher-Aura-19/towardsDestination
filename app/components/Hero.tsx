"use client";

import { useState } from "react";
import DesignTripModal from "./DesignTripModal";

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
      <div className="relative z-10 w-full h-screen flex items-center justify-center">
        <div className="text-center px-4 sm:px-6 max-w-5xl mx-auto">
          {/* Top Text */}
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg font-medium mb-3 sm:mb-4 tracking-wide animate-fade-in-up">
            MAKE YOUR OWN TOUR WITH A SINGLE CLICK!
          </p>
          
          {/* Decorative Line */}
          <div className="w-12 sm:w-16 h-0.5 sm:h-1 bg-red-600 mx-auto mb-4 sm:mb-6 md:mb-8 animate-fade-in-up" style={{animationDelay: '0.1s'}}></div>
          
          {/* Main Heading */}
          <h1 className="text-base sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-tight mb-6 sm:mb-8 md:mb-12 animate-fade-in-up px-4" style={{animationDelay: '0.2s'}}>
            DISCOVER WITH<br />
            <span className="block mt-1 sm:mt-2 text-sm sm:text-2xl md:text-4xl">TOWARDSDESTINATION</span>
          </h1>

          {/* Design My Trip Button */}
          <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 xs:px-8 sm:px-12 py-3 xs:py-3.5 sm:py-4 md:py-5 rounded-lg font-bold text-sm xs:text-base sm:text-lg uppercase tracking-wider shadow-2xl hover:shadow-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              DESIGN MY TRIP
            </button>
          </div>
        </div>
      </div>

      {/* Design Trip Modal */}
      <DesignTripModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
